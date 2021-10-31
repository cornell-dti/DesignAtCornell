import styled from 'styled-components';
import { colors } from '../constants/colors';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

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
  justify-content: space-between;
`;

export const AreaOfStudyButton = styled.div`
  width: 287px;
  margin-bottom: 38px;

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
  background: ${colors.lightGreen};
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

  form {
    font-weight: bold;
    font-size: 12px;
    line-height: 24px;
    color: black;

    input[type='checkbox'] {
      vertical-align: middle;
      margin-right: 10px;
      cursor: pointer;
    }

    input[type='checkbox']:before {
      content: '';
      position: absolute;
      width: 13px;
      height: 13px;
      border-radius: 2px;
      border: 2px solid black;
      background-color: white;
    }

    input[type='checkbox']:checked:after {
      content: '';
      position: absolute;
      width: 13px;
      height: 13px;
      border-radius: 2px;
      border: 2px solid black;
      background-color: black;
    }

    label {
      display: block;
      margin-top: -24px;
      margin-left: 20px;
    }
  }
`;
