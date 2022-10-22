import React from 'react';
import { FooterContainer, FooterColumn, DTILogo, Contact, CopyRight } from './FooterStyles';
import dtiLogo from '../static/images/dti-logo.svg';
import cornellLogo from '../static/images/black-white-cornell-logo.svg';

type Page = {
  name: string;
  url: string;
};

const Footer = () => {
  const dti = 'Cornell Design & Tech Initiative';
  const year = new Date().getFullYear();
  return (
    <FooterContainer>
      <FooterColumn>
        <p>Powered by</p>
        <DTILogo>
          <img src={dtiLogo} alt="dti logo" />
          <p>{dti}</p>
        </DTILogo>
      </FooterColumn>
      <FooterColumn>
        <Contact>
          For any questions, please contact
          <br />
          <a href="mailto:designatcornell@gmail.com" target="_blank" rel="noopener noreferrer">
            designatcornell@gmail.com
          </a>
        </Contact>
      </FooterColumn>
      <CopyRight>
        <img src={cornellLogo} className="cornell-logo" alt="black white cornell logo" />
        <p>
          &copy; {year} {dti}
        </p>
      </CopyRight>
    </FooterContainer>
  );
};
export default Footer;
