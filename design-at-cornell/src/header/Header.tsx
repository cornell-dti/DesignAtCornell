import React from 'react';
import { HeaderContainer, Logo, CornellLogo, Line, Nav, StyledLink } from './HeaderStyles';
import { pages } from '../constants/pages';
import dacLogo from '../static/images/logo.svg';
import cornellLogo from '../static/images/cornell-logo.svg';

const Header = () => {
  const navigations = (
    <Nav>
      {pages.map((page) => (
        <StyledLink key={page.name} to={page.url}>
          <p>{page.name}</p>
        </StyledLink>
      ))}
    </Nav>
  );

  return (
    <HeaderContainer>
      <Logo to="./">
        <CornellLogo>
          <img src={cornellLogo} alt="cornell logo" />
        </CornellLogo>
        <Line />
        <img src={dacLogo} alt="logo" />
        <p>Design At Cornell</p>
      </Logo>

      {navigations}
    </HeaderContainer>
  );
};
export default Header;
