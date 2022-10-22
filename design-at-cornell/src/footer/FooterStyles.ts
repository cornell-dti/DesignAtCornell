import styled from 'styled-components';
import { colors } from '../constants/colors';

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: ${colors.lightGray};
  width: 100%;
  height: 50%;
  padding: 50px 126px;
  justify-content: space-between;

  p {
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 50px 30px;
    gap: 30px;
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  justify-content: space-between;

  p {
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    text-align: left;
    margin: 0;

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

export const DTILogo = styled.div`
  margin-top: 5px;
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
    width: 150px;
    font-weight: bold;
    font-size: 18px;
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

// TODO font weight not working
export const Contact = styled.p`
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;

  @media (min-width: 1001px) {
    text-align-last: right;
  }
`;

export const CopyRight = styled.div`
  @media (min-width: 1001px) {
    display: none;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  gap: 15px;

  .cornell-logo {
    margin-left: auto;
    margin-right: auto;
    width: 65px;
    height: 65px;
  }
`;
