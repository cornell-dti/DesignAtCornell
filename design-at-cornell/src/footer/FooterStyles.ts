import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../constants/colors';

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: ${colors.lightGray};
  width: 100%;
  height: 50%;
  padding: 75px 126px 50px 126px;
  justify-content: space-between;

  p {
    font-weight: bold;
    font-size: 18px;
    line-height: 19px;
    text-align: right;
  }
`;

export const FooterColumnn = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  justify-content: space-between;
  font-weight: bold;
  margin-bottom: 10px;
  p {
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    text-align: left;

    &:hover {
      text-decoration: none;
      color: black;

    }

    &:link {
      text-decoration: none;
      color: black;
    }
}

`;

export const Logo = styled(Link)`
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
  margin-bottom: 10px;

  p {
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    text-align: left;
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

  &:focus,
  &:hover,
  &:active,
  &:visited,
  &:link {
    text-decoration: none;
    color: black;
  }
`;

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
`;

