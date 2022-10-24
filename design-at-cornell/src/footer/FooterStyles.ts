import styled from 'styled-components';
import { mobileBreakpoint } from '../constants/styling';
import { colors } from '../constants/colors';

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: ${colors.lightGray};
  width: 100%;
  height: 50%;
  padding: 50px 126px;
  justify-content: space-between;

  @media (max-width: ${mobileBreakpoint}px) {
    flex-direction: column;
    padding: 50px 30px;
    gap: 30px;
  }

  .cornell-logo {
    margin-left: auto;
    margin-right: auto;
    width: 65px;
    height: 65px;
  }

  .dti-logo {
    margin-right: 10px;
    width: 30px;
    height: 30px;
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
  margin-left: 10px;
  margin-right: 10px;
  border-left: 1px solid black;
  height: 65px;
`;

export const Sent = styled.p`
  font-size: 14px;
`;

export const ColContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  justify-content: center;

  p {
    font-size: 16px;
    text-align: left;
    margin: 0;
  }
`;

export const RowContainer = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: row;
  width: fit-content;
  height: fit-content;
  align-items: center;

  p {
    width: 150px;
    font-size: 16px;
    color: black;
  }
`;

export const BoldPar = styled.p`
  font-weight: bold;
`;

export const Contact = styled.p`
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;

  @media (min-width: ${mobileBreakpoint + 1}px) {
    text-align-last: right;
  }
`;

export const CopyRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  gap: 15px;
`;
