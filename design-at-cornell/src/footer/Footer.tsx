import React from 'react';
import { FooterContainer, FooterColumnn, Logo, StyledLink } from './FooterStyles'
import { about, explore, events, resources } from '../constants/pages'

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
        {column(about)}
      </FooterColumnn>
      {column(explore)}
      {column(events)}
      {column(resources)}
    </FooterContainer>
  )
  
}
export default Footer;