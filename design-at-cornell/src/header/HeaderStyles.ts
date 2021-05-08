import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../constants/colors';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 96px;
  color: black;
  padding-left: 60px;
  padding-right: 60px;
`

export const Logo = styled(Link)`
  display: flex;
  flex-direction: row;
  width: 40%;
  height: 100%;
  

  img {
    width: 142px;
  }

  p {
    width: 73px;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    text-align: left;
    margin: 18px;
  }

  &:focus, &:hover, &:active, &:visited, &:link {
    text-decoration: none;
    color: black;
  }
`

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  height: 100%;
  align-items: center;
  justify-content: space-around;
`

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
`