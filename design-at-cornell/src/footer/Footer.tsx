import React from 'react';
import { FooterContainer, FooterColumnn, Logo, DTILogo, StyledLink } from './FooterStyles'
import { explore, resources, account } from '../constants/pages'

type Page = {
  name: string;
  url: string;
};

const Footer = () => {
  const column = (pages : Page[]) => (
    <FooterColumnn>
      {pages.map(page => (
        <StyledLink key={page.name} to={page.url}>
          <p>{page.name}</p>
        </StyledLink>
      ))}
    </FooterColumnn>
  )

  return (
    <FooterContainer>
      <FooterColumnn>
        <Logo to='/explore-courses'>
          <img src={require('../static/images/logo.svg')} alt="logo" />
          <p>Design@Cornell</p>
        </Logo>
        <div>
          <p>Powered by</p>
          <DTILogo>
            <img src={require('../static/images/dti-logo.svg')} alt="dti logo" />
            <p>Cornell Design & Tech Initiative</p>
          </DTILogo>
        </div>
      </FooterColumnn>
      {column(explore)}
      {column(resources)}
      {column(account)}
    </FooterContainer>
  )
  
}
export default Footer;