import styled from 'styled-components';
import { colors } from '../constants/colors';
import { Link } from 'react-router-dom';
import { mobileBreakpoint } from '../constants/styling';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 96px;
  color: black;
  padding: 0px 40px;

  .cornell-logo {
    margin: auto 0px;
    width: 70px;
    height: 70px;
  }

  .dac-logo {
    width: 142px;

    @media (max-width: ${mobileBreakpoint}px) {
      width: 70px;
    }
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

export const Divider = styled.span`
  margin: auto 15px;
  border-left: 1px solid black;
  height: 65px;
`;

export const ColContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: center;
  justify-content: center;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LogoText = styled.div`
  min-width: 90px;
  font-weight: bold;
  font-size: 18px;
  text-align: left;
  height: fit-content;
  margin: auto 18px;
  @media (max-width: ${mobileBreakpoint}px) {
    width: fit-content;
    font-size: 10px;
    margin: 0px;
  }
`;

export const CornellLogo = styled.div`
  img {
    margin-top: 12px;
    height: 70px;
  }
`;

export const Line = styled.div`
  margin-top: 12px;
  height: 70px;
  border-left: 1px solid black;
  margin-left: -18px;
  margin-right: 16px;
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Grow = styled.div`
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
  margin: 10px;
  width: 80px;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  &:focus,
  &:hover,
  &:active,
  &:visited,
  &:link {
    text-decoration: none;
    color: ${colors.linkColor};
  }
`;
