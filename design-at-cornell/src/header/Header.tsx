import React from 'react';
import { HeaderContainer, RowContainer, Nav, StyledLink, Divider } from './HeaderStyles';
import { pages } from '../constants/pages';
import dacLogo from '../static/images/logo.svg';
import cornellLogo from '../static/images/black-white-cornell-logo.svg';

const Header = () => {
  const navigation = (
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
      <RowContainer to="./">
        <img src={cornellLogo} className="cornell-logo" alt="black white cornell logo" />
        <Divider />
        <img src={dacLogo} className="dac-logo" alt="logo" />
        <p>Design At Cornell</p>
      </RowContainer>

      {navigation}
    </HeaderContainer>
  );
};
export default Header;
