import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../constants/colors';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 96px;
  color: black;
  padding: 0px 40px;

  .cornell-logo {
    margin: auto 0px;
    width: 70px;
    height: 70px;
  }

  .dac-log {
    width: 142px;
  }
`;

export const Divider = styled.span`
  margin: auto 15px;
  border-left: 1px solid black;
  height: 65px;
`;

export const RowContainer = styled(Link)`
  display: flex;
  flex-direction: row;
  width: 40%;
  height: 100%;

  p {
    width: 73px;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    text-align: left;
    margin: 18px;
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

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  height: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const StyledLink = styled(Link)`
  width: 107px;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: black;

  &:focus {
    text-decoration: none;
    color: ${colors.linkColor};
  }
`;
