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

export const SearchBar = styled.input<{ background: string }>`
  flex-grow: 1;
  height: 28px;
  border-radius: 43px;
  padding-left: 10px;
  margin-right: 20px;
  border-style: none;
  background: ${({ background }) => background};
  background-image: url(${magnifyingGlass});
  background-position: 7px 7px;
  background-repeat: no-repeat;
  text-indent: 30px;

  &:focus {
    outline: none;
  }
  img {
    background: ${({ background }) => background};
  }
`;

export const FilterDropdownsList = styled.ul`
  display: flex;
  flex-shrink: 0;
  margin: 27.25px 0px;
  padding-left: 0px;
  list-style: none;
`;

export const SearchAndBookmarkList = styled.ul`
  display: flex;
  flex-grow: 1;
  height: 100%;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const FilterButton = styled.div<{ open: boolean; applied: boolean }>`
  display: flex;
  width: fit-content;
  height: ${({ open }) => (open ? '33px' : '28px')};
  background: ${({ open }) => (open ? 'white' : colors.transparentWhite)};
  border-radius: ${({ open }) => (open ? '15px 15px 0px 0px' : '15px')};
  margin-right: 20px;
  padding-left: 15px;
  padding-right: ${({ applied }) => (applied ? '7px' : '15px')};
  align-items: flex-start;

  img {
    transform: ${({ open }) => (open ? 'rotate(180deg)' : 'none')};
    margin-top: 8px;
    width: 12px;
    max-height: 12px;
  }

  p {
    margin-right: ${({ applied }) => (applied ? '11px' : '20px')};
    margin-top: 4px;
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

export const FilterCategoryContainer = styled.li`
  position: relative;
  display: inline;
  box-sizing: border-box;
  p {
    font-weight: bold;
    font-size: 12px;
    color: black;
  }
`;

export const FilterDropdownContainer = styled.ul<{ expand: boolean }>`
  width: ${({ expand }) => (expand ? 'auto' : 'calc(100% - 20px)')};
  position: absolute;
  display: inline;
  background: white;
  list-style: none;
  padding-left: 23px;
  padding-top: 8px;
  padding-bottom: 11px;
  border-radius: 0px ${({ expand }) => (expand ? '15px ' : '0px ')}15px 15px;
  input {
    width: 90%;
    margin-top: 11px;
  }
`;

export const FiltersApplied = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 16px;
  background: white;
  height: 19px;
  width: 29px;
  margin-top: 4px;
  p {
    text-align: center;
    width: 29px;
    padding: 0;
    margin: 0;
  }
`;

export const FilterSelectionBubbleContainer = styled.div<{ color: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  background: ${({ color }) => color};
  border-radius: 43px;
  margin-top: 9px;
  padding-left: 12px;
  padding-right: 12px;
  margin-right: 9px;
  z-index: 999;
  img {
    width: 9px;
    height: 9px;
  }
  p {
    padding-right: 9px;
    margin: 0;
  }
`;

export const ClearCategoryFilters = styled.p`
  padding-top: 7px;
  text-decoration: underline;
  text-align: right;
  padding-right: 12px;
  cursor: pointer;
`;

export const FilterDropdownScrollContainer = styled.ul`
  width: 292px;
  margin-top: 24px;
  padding-left: 0px;
  padding-right: 24px;
  margin-bottom: 15px;
  height: 148px;
  overflow-y: auto;
  margin-right: 24px;
  ::-webkit-scrollbar-track {
    border-radius: 5px;
  }
  input {
    position: absolute;
  }
`;

export const FilterCheckboxContainer = styled.li`
  white-space: nowrap;
  position: relative;
  max-height: 13px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 0px;
  margin-top: 7px;
  margin-bottom: 13px;
  p {
    text-align: left;
    margin-left: 12px;
    padding-right: 20px;
  }
`;

export const Checkbox = styled.div<{ checked: boolean }>`
  min-width: 13px;
  max-width: 13px;
  align-items: center;
  justify-content: center;
  height: 13px;
  border: 2px;
  border-radius: 2px;
  border: solid;
  background: ${({ checked }) => (checked ? 'black' : 'white')};
  border-color: black;
  cursor: pointer;
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
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
