import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../constants/colors';

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 405px;
  background: ${colors.lightGray};
  padding: 126px 126px 100px 126px;
  justify-content: space-between;
`

export const FooterColumnn = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: 100%;
  justify-content: space-between;
  font-weight: bold;
`

export const Logo = styled(Link)`
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
  margin-bottom: 30px;

  p {
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    text-align: left;
  }

  &:focus, &:hover, &:active, &:visited, &:link {
    text-decoration: none;
    color: black;
  }
`

export const DTILogo = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  height: fit-content;
  align-items: center;

  img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }

  p {
    width: 95px;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: black;
  }

  &:focus, &:hover, &:active, &:visited, &:link {
    text-decoration: none;
    color: black;
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-align: left;
  color: black;

  &:hover {
    text-decoration: none;
    color: ${colors.linkColor};
  }
`