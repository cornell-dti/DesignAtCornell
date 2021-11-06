import styled from 'styled-components';
import { colors } from '../constants/colors';
import magnifyingGlass from '../static/images/magnifying-glass.svg';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FilterBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 15%;
  align-items: center;

  p {
    width: 100%;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
  }
`;

export const FilterButton = styled.div<{ expand: boolean }>`
  display: flex;
  flex-shrink: 0;
  width: fit-content;
  white-space: nowrap;
  height: 28px;
  background: ${({ expand }) => (expand ? 'white' : colors.transparentWhite)};
  border-radius: ${({ expand }) => (expand ? '15px 15px 0px 0px' : '15px')};
  padding: 0 15px;
  margin: 0 10px;
  align-items: flex-start;

  img {
    transform: ${({ expand }) => (expand ? 'rotate(180deg)' : 'none')};
    margin-top: 8px;
    width: 12px;
    max-height: 12px;
  }

  p {
    font-weight: bold;
    font-size: 12px;
    margin-right: 20px;
    margin-top: 4px;
  }
`;

export const SearchBar = styled.input`
  flex-grow: 1;
  height: 28px;
  border-radius: 43px;
  padding: 0 10px;
  margin: 0 10px;
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
  flex-shrink: 0;
  width: 165px;
  height: 36px;
  background: white;
  border-radius: 4px;
  margin: 0 10px;
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
