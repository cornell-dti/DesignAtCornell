import React, { useState, useEffect } from 'react';
import {
  FooterContainer,
  ColContainer,
  BoldPar,
  RowContainer,
  Contact,
  CopyRight,
  Divider,
  Sent,
} from './FooterStyles';
import dtiLogo from '../static/images/dti-logo.svg';
import cornellLogo from '../static/images/black-white-cornell-logo.svg';
import { mobileBreakpoint } from '../constants/styling';

type Page = {
  name: string;
  url: string;
};

const mobileViewCheck = `(max-width: ${mobileBreakpoint}px)`;
const dti = 'Cornell Design & Tech Initiative';

const CopyRightSentence = () => {
  const year = new Date().getFullYear();
  return (
    <Sent>
      &copy; {year} {dti}
    </Sent>
  );
};

const Footer = () => {
  const [mobileView, setMobileView] = useState(window.matchMedia(mobileViewCheck).matches);

  useEffect(() => {
    window.matchMedia(mobileViewCheck).addEventListener('change', (e) => setMobileView(e.matches));
  }, []);

  const DTI = () => (
    <ColContainer>
      <BoldPar>Powered by</BoldPar>
      <RowContainer>
        <img src={dtiLogo} className="dti-logo" alt="dti logo" />
        <BoldPar>{dti}</BoldPar>
      </RowContainer>
    </ColContainer>
  );

  return (
    <FooterContainer>
      {mobileView ? (
        <DTI />
      ) : (
        <ColContainer>
          <RowContainer>
            <img src={cornellLogo} className="cornell-logo" alt="black white cornell logo" />
            <Divider />
            <DTI />
          </RowContainer>
          <CopyRightSentence />
        </ColContainer>
      )}
      <ColContainer>
        <Contact>
          For any questions, please contact
          {mobileView ? ' ' : <br />}
          <a href="mailto:designatcornell@gmail.com" target="_blank" rel="noopener noreferrer">
            designatcornell@gmail.com
          </a>
        </Contact>
      </ColContainer>
      {mobileView && (
        <CopyRight>
          <img src={cornellLogo} className="cornell-logo" alt="black white cornell logo" />
          <CopyRightSentence />
        </CopyRight>
      )}
    </FooterContainer>
  );
};
export default Footer;
