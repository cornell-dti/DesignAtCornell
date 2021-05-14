import React from 'react';
import { FooterContainer, FooterColumnn, Logo, DTILogo, StyledLink } from './FooterStyles';
import { explore, resources, account } from '../constants/pages';
import dacLogo from '../static/images/logo.svg';
import dtiLogo from '../static/images/dti-logo.svg';

type Page = {
  name: string;
  url: string;
};

const Footer = () => {
  const column = (pages: Page[]) => (
    <FooterColumnn>
      {pages.map((page) => (
        <StyledLink key={page.name} to={page.url}>
          <p>{page.name}</p>
        </StyledLink>
      ))}
    </FooterColumnn>
  );

  return (
    <FooterContainer>
      <FooterColumnn>
        <Logo to="/explore-courses">
          <img src={dacLogo} alt="logo" />
          <p>Design@Cornell</p>
        </Logo>
        <div>
          <p>Powered by</p>
          <DTILogo>
            <img src={dtiLogo} alt="dti logo" />
            <p>Cornell Design & Tech Initiative</p>
          </DTILogo>
        </div>
      </FooterColumnn>
      {column(explore)}
      {column(resources)}
      {column(account)}
    </FooterContainer>
  );
};
export default Footer;
