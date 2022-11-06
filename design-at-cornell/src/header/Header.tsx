import React, { useState, useContext } from 'react';
import {
  HeaderContainer,
  RowContainer,
  ColContainer,
  Nav,
  NavItem,
  Grow,
  StyledLink,
  LogoText,
  Divider,
} from './HeaderStyles';
import { Transition, Icon, Menu, Button } from 'semantic-ui-react';
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

  const navigation = (
    <Nav>
      {pages.map((page) => (
        <StyledLink key={page.name} to={page.url}>
          <NavItem>{page.name}</NavItem>
        </StyledLink>
      ))}
    </Nav>
  );

  const desktopLogo = (
    <>
      <img src={dacLogo} className="dac-logo" alt="logo" />
      <LogoText>
        Design At <br />
        Cornell
      </LogoText>
    </>
  );

  const mobileLogo = (
    <ColContainer>
      <img src={dacLogo} className="dac-logo" alt="logo" />
      <LogoText>Design At Cornell</LogoText>
    </ColContainer>
  );

  const updateMenu = () => {
    setShowMenu(!showMenu);
  };

  const mobileNav = (
    <Button icon style={{ background: 'none' }} onClick={updateMenu}>
      <Icon name={showMenu ? 'x' : 'bars'} size="large" />
    </Button>
  );

  return (
    <div>
      <HeaderContainer>
        <StyledLink to="./">
          <RowContainer>
            <img src={cornellLogo} className="cornell-logo" alt="black white cornell logo" />
            <Divider />

            {isMobileView ? mobileLogo : desktopLogo}
          </RowContainer>
        </StyledLink>

        <Grow></Grow>
        {isMobileView ? mobileNav : navigation}
      </HeaderContainer>
      <Transition.Group animation="slide down" duration={{ show: 500, hide: 250 }}>
        {isMobileView && showMenu && (
          <Menu vertical style={{ width: '100%', margin: 0 }}>
            {pages.map((page) => (
              <Menu.Item
                style={{
                  paddingLeft: '64px',
                  paddingRight: '64px',
                  fontSize: '18px',
                  margin: 0,
                }}
                key={page.name}
                active={location.pathname === page.url}
                onClick={() => {
                  history.push(page.url);
                }}
              >
                {page.name}
              </Menu.Item>
            ))}
          </Menu>
        )}
      </Transition.Group>
    </div>
  );
};
export default Header;
