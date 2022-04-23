import React from 'react';
import { FooterContainer, FooterColumnn, DTILogo, StyledLink} from './FooterStyles';
import dtiLogo from '../static/images/dti-logo.svg';

type Page = {
  name: string;
  url: string;
};

const Footer = () => {

  return (
    <FooterContainer>
      <FooterColumnn>
        <div>
          <p>Powered by</p>
          <DTILogo>
            <img src={dtiLogo} alt="dti logo" />
            <p>Cornell Design & Tech Initiative</p>
          </DTILogo>
        </div>
      </FooterColumnn>
        <div>
          <p>For any questions, please contact  
          <a href = "mailto: hello@cornelldti.org"> hello@cornelldti.org</a>
          </p>
        </div>
    </FooterContainer>
  );
};
export default Footer;
