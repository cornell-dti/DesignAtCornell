import React, { useState, useEffect } from 'react';
import {
  FooterContainer,
  ColContainer,
  RowContainer,
  Contact,
  CopyRight,
  Divider,
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
    <p>
      &copy; {year} {dti}
    </p>
  );
};

const Footer = () => {
  const [mobileView, setMobileView] = useState(window.matchMedia(mobileViewCheck).matches);

  useEffect(() => {
    window.matchMedia(mobileViewCheck).addEventListener('change', (e) => setMobileView(e.matches));
  }, []);

  return (
    <FooterContainer>
      {mobileView ? (
        <ColContainer>
          <p>Powered by</p>
          <RowContainer>
            <img src={dtiLogo} className="dti-logo" alt="dti logo" />
            <p>{dti}</p>
          </RowContainer>
        </ColContainer>
      ) : (
        <ColContainer>
          <RowContainer>
            <img src={cornellLogo} className="cornell-logo" alt="black white cornell logo" />
            <Divider />
            <ColContainer>
              <p>Powered by</p>
              <RowContainer>
                <img src={dtiLogo} className="dti-logo" alt="dti logo" />
                <p>{dti}</p>
              </RowContainer>
            </ColContainer>
          </RowContainer>
          <CopyRightSentence />
        </ColContainer>
      )}
      <ColContainer>
        <Contact>
          For any questions, please contact
          <br />
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
