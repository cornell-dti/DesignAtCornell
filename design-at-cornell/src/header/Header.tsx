import React, { useState, useContext } from 'react';
import {
  HeaderContainer,
  RowContainer,
  ColContainer,
  Nav,
  NavItem,
  FullContainer,
  Grow,
  StyledLink,
  LogoText,
  Divider,
} from './HeaderStyles';
import { Icon, Menu, Button } from 'semantic-ui-react';
import { pages } from '../constants/pages';
import dacLogo from '../static/images/logo.svg';
import cornellLogo from '../static/images/black-white-cornell-logo.svg';
import { GlobalContext } from '../context/GlobalContext';
import { useLocation, useHistory } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const history = useHistory();
  const { isMobileView } = useContext(GlobalContext);
  const [showMenu, setShowMenu] = useState(false);

  const updateMenu = () => {
    setShowMenu(!showMenu);
  };

  const Navigation = () => (
    <Nav>
      {pages.map((page) => (
        <StyledLink key={page.name} to={page.url}>
          <NavItem {...(location.pathname === page.url ? { className: 'active' } : {})}>
            {page.name}
          </NavItem>
        </StyledLink>
      ))}
    </Nav>
  );

  const MobileNav = () => (
    <Button icon style={{ background: 'none' }} onClick={updateMenu}>
      <Icon name={showMenu ? 'x' : 'bars'} size="large" />
    </Button>
  );

  const MobileLogo = () => (
    <ColContainer>
      <img src={dacLogo} className="dac-logo" alt="logo" />
      <LogoText>Design At Cornell</LogoText>
    </ColContainer>
  );

  return (
    <FullContainer>
      <HeaderContainer>
        <StyledLink to="./">
          <RowContainer>
            <img src={cornellLogo} className="cornell-logo" alt="black white cornell logo" />
            <Divider />

            <MobileLogo />
          </RowContainer>
        </StyledLink>

        <Grow></Grow>
        {isMobileView ? <MobileNav /> : <Navigation />}
      </HeaderContainer>
      {isMobileView && showMenu && (
        <Menu vertical style={{ width: '100%', margin: 0 }}>
          {pages.map((page) => (
            <Menu.Item
              key={page.name}
              active={location.pathname === page.url}
              onClick={() => {
                history.push(page.url);
                setShowMenu(false);
              }}
            >
              <p className="mobile-nav-item">{page.name}</p>
            </Menu.Item>
          ))}
        </Menu>
      )}
    </FullContainer>
  );
};
export default Header;
