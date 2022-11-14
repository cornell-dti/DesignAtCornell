import styled from 'styled-components';
import { colors } from '../constants/colors';
import { Link } from 'react-router-dom';

export const FullContainer = styled.div`
  .cornell-logo {
    margin: auto 0px;
    width: 70px;
    height: 70px;
  }

  .dac-logo {
    width: 75px;
  }

  .active {
    color: ${colors.linkColor};
  }

  .mobile-nav-item {
    padding: 4px 32px;
    font-size: 18px;
    margin: 0;
  }

  button.nav-button {
    background: none;
  }

  &:focus,
  &:hover,
  &:active,
  &:visited,
  &:link {
    text-decoration: none;
    color: black;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 96px;
  color: black;
  padding: 0px 40px;
`;

export const Divider = styled.span`
  margin: auto 10px;
  border-left: 1px solid black;
  height: 65px;
`;

export const ColContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: left;
  justify-content: center;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LogoText = styled.span`
  font-weight: bold;
  font-size: 10px;
  margin: 0px;
  white-space: nowrap;
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Grow = styled.div`
  min-width: 40px;
  flex-grow: 1;
`;

export const StyledLink = styled(Link)`
  &:focus,
  &:hover,
  &:active,
  &:visited,
  &:link {
    text-decoration: none;
    color: black;
  }
`;

export const NavItem = styled.p`
  margin: 0px 15px;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  &:hover {
    color: ${colors.linkColor};
    text-decoration: none;
  }
`;
