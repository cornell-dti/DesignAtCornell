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
    width: 42px;
    height: 42px;
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
  height: 100%;
`;

export const ColContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  justify-content: center;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  height: fit-content;
  align-items: center;
`;

export const Sent = styled.p`
  padding-top: 10px;
  font-size: 14px;
`;

export const BoldPar = styled.p`
  margin: 0;
  vertical-align: top;
  font-size: 14px;
  font-weight: bold;
  padding-bottom: 5px;
`;

export const TitlePar = styled.p`
  font-size: 18px;
  text-align: left;
  margin: 0;
  font-weight: bold;
  width: 150px;
  color: black;
  line-height: 18px;
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
`;
