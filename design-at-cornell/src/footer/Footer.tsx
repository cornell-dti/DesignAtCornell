import React from 'react';
import { FooterContainer, FooterColumn, DTILogo, Email } from './FooterStyles';
import dtiLogo from '../static/images/dti-logo.svg';

type Page = {
  name: string;
  url: string;
};

const Footer = () => {
  return (
    <FooterContainer>
      <FooterColumn>
        <div>
          <p>Powered by</p>
          <DTILogo>
            <img src={dtiLogo} alt="dti logo" />
            <p>Cornell Design & Tech Initiative</p>
          </DTILogo>
        </div>
      </FooterColumn>
      <Email>
        <p>
          For any questions, please contact
          <a href="mailto:designatcornell@gmail.com" target="_blank" rel="noopener noreferrer">
            {' '}
            designatcornell@gmail.com
          </a>
        </p>
      </Email>
    </FooterContainer>
  );
};
export default Footer;
