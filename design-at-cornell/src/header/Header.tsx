import React from 'react';
import { HeaderContainer, Logo, Nav, StyledLink } from './HeaderStyles';
import { pages } from '../constants/pages';

const Header = () => {
  const navigations = (
    <Nav>
      {pages.map(page => (
        <StyledLink key={page.name} to={page.url}>
          <p>{page.name}</p>
        </StyledLink>
      ))}
    </Nav>
  );

  return (
    <HeaderContainer>
      <Logo to="./explore-courses">
        <img src={require('../static/images/logo.svg')} alt="logo" />
        <p>Design At Cornell</p>
      </Logo>

      {navigations}
    </HeaderContainer>
  );
};
export default Header;
