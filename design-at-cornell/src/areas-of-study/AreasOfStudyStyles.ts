import styled from 'styled-components';
import { colors } from '../constants/colors';

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: fit-content;
`;

export const StudiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: fit-content;
  padding: 60px 90px;
`;

export const Divider = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 70px;
  align-items: center;

  h1 {
    flex-grow: 0;
    font-weight: bold;
    font-size: 28px;
    color: black;
    margin: 0;
  }

  hr {
    flex-grow: 1;
    height: 0;
    border: 4px solid #8ed663;
    margin-left: 20px;
  }
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: fit-content;
`;

export const AreaOfStudyButton = styled.div`
  width: 30%;
  margin-bottom: 38px;
  margin-inline: 10px;

  h1 {
    font-weight: bold;
    font-size: 16px;
    color: black;
    cursor: pointer;
  }
`;

export const AreaOfStudyTag = styled.span<{ highlight: boolean }>`
  background: ${({ highlight }) => (highlight ? colors.yellowHighlight : 'white')};
  font-size: 13px;
  color: ${colors.gray};
`;

export const ApplyTagsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: auto;
  background: ${colors.pastelGreen};
  padding: 60px;

  h5 {
    font-weight: bold;
    font-size: 20px;
    line-height: 70px;
    color: black;
    margin: 0;
  }

  h6 {
    font-weight: bold;
    font-size: 16px;
    line-height: 40px;
    color: black;
    margin: 0;
  }
`;

export const ModalContentQuestion = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
`;

export const ModalContentResponse = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  div {
    padding: 16px;
    border-radius: 8px;
    margin: 8px 0px;
    background-color: ${colors.lightGreen};
    font-size: 12px;
    line-height: 14px;
  }
`;
