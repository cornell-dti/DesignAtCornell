import React, { useState, useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Icon, Menu, Button } from 'semantic-ui-react';

import {
  HeaderContainer,
  RowContainer,
  ColContainer,
  Nav,
  NavItem,
  FullContainer,
  Grow,
  StyledLink,
  Divider,
} from './HeaderStyles';
import { pages } from '../constants/pages';
import dacLogo from '../static/images/logo.svg';
import cornellLogo from '../static/images/black-white-cornell-logo.svg';
import { GlobalContext } from '../context/GlobalContext';
import Expanding from '../animated/Expanding';

const useOldLogo = true;

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

  const DesktopLogo = () => (
    <RowContainer>
      <img src={dacLogo} className="old-dac-logo" alt="logo" />
      <span className="old-logo-text">
        Design <br />
        At <br />
        Cornell
      </span>
    </RowContainer>
  );

  const MobileLogo = () => (
    <RowContainer>
      <img src={cornellLogo} className="cornell-logo" alt="black white cornell logo" />
      <Divider />

      <ColContainer>
        <img src={dacLogo} className="dac-logo" alt="logo" />
        <span className="logo-text">Design At Cornell</span>
      </ColContainer>
    </RowContainer>
  );

  return (
    <FullContainer>
      <HeaderContainer>
        <StyledLink to="./">{useOldLogo ? <DesktopLogo /> : <MobileLogo />}</StyledLink>

        <Grow></Grow>
        {isMobileView ? <MobileNav /> : <Navigation />}
      </HeaderContainer>
      {isMobileView && (
        <Expanding show={showMenu}>
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
        </Expanding>
      )}
    </FullContainer>
  );
};
export default Header;
