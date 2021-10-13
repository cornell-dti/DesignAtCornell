import styled from 'styled-components';
import { colors } from '../constants/colors';

export const ElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 22%;
  min-width: 250px;
  height: 197px;
  cursor: pointer;
  background: white;
  border: 1px solid;
  border-radius: 8px;
  margin: 1.5%;

  padding: 25px;
  align-items: flex-start;
  justify-content: space-between;

  p {
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    text-align: start;
    margin: 0;
    color: black;
  }
`;

export const Subtitle = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: fit-content;
  align-items: center;
  justify-content: space-between;

  p {
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    text-align: start;
    margin: 0;
    color: ${colors.gray};
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  height: fit-content;
  align-items: flex-start;
`;

export const Tag = styled.div`
  display: flex;
  width: fit-content;
  height: 28px;
  border-radius: 43px;
  margin-right: 10px;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;

  p {
    white-space: nowrap;
    font-weight: bold;
    font-size: 12px;
    color: black;
  }
`;
