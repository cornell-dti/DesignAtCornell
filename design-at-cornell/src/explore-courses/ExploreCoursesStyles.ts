import styled from 'styled-components';
import { colors } from '../constants/colors';
import magnifyingGlass from '../static/images/magnifying-glass.svg';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FilterBarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 15%;
  align-items: flex-start;

  p {
    width: 100%;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: white;
  }
`;

export const SearchBar = styled.input`
  flex-grow: 1;
  height: 28px;
  border-radius: 43px;
  padding-left: 10px;
  margin-right: 20px;
  border-style: none;
  background-image: url(${magnifyingGlass});
  background-position: 7px 7px;
  background-repeat: no-repeat;
  text-indent: 30px;

  &:focus {
    outline: none;
  }
`;

export const SavedCoursesButton = styled.div`
  display: flex;
  width: 165px;
  height: 36px;
  background: white;
  border-radius: 4px;
  align-items: center;
  justify-content: space-evenly;

  p {
    width: fit-content;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: black;
  }
`;

export const Divider = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80px;
  padding-top: 20px;
  padding-right: 80px;
  align-items: flex-end;
`;

export const SortBy = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  height: 100%;
  align-items: center;

  h6 {
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    margin: 0;
    color: black;
  }

  p {
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    margin: 0;
    color: ${colors.darkGray};
  }

  img {
    width: 12px;
    height: 12px;
    margin-left: 10px;
  }
`;

export const CourseGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: fit-content;
  padding: 0 80px;
`;
