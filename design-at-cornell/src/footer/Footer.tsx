import React, { useContext } from 'react';
import {
  FooterContainer,
  ColContainer,
  BoldPar,
  RowContainer,
  Contact,
  CopyRight,
  Divider,
  TitlePar,
  Sent,
} from './FooterStyles';
import dtiLogo from '../static/images/dti-logo.svg';
import cornellLogo from '../static/images/black-white-cornell-logo.svg';
import { GlobalContext } from '../context/GlobalContext';

const dti = 'Cornell Design & Tech Initiative';

const useOldLogo = true;

const CopyRightSentence = () => {
  const year = new Date().getFullYear();
  return (
    <Sent>
      &copy; {year} {dti}
    </Sent>
  );
};

const Footer = () => {
  const { isMobileView } = useContext(GlobalContext);

  const DTI = () => (
    <ColContainer>
      <BoldPar>Powered by</BoldPar>
      <RowContainer>
        <img src={dtiLogo} className="dti-logo" alt="dti logo" />
        <TitlePar>{dti}</TitlePar>
      </RowContainer>
    </ColContainer>
  );

  return (
    <FooterContainer>
      {isMobileView ? (
        <DTI />
      ) : (
        <ColContainer>
          <RowContainer>
            {useOldLogo || (
              <>
                <img src={cornellLogo} className="cornell-logo" alt="black white cornell logo" />
                <Divider />{' '}
              </>
            )}
            <DTI />
          </RowContainer>
          <CopyRightSentence />
        </ColContainer>
      )}
      <ColContainer>
        <Contact>
          For any questions, please contact
          {isMobileView ? ' ' : <br />}
          <a href="mailto:designatcornell@gmail.com" target="_blank" rel="noopener noreferrer">
            designatcornell@gmail.com
          </a>
        </Contact>
      </ColContainer>
      {isMobileView && (
        <CopyRight>
          <img src={cornellLogo} className="cornell-logo" alt="black white cornell logo" />
          <CopyRightSentence />
        </CopyRight>
      )}
    </FooterContainer>
  );
};
export default Footer;
