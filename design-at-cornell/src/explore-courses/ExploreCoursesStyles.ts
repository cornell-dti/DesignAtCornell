import styled from 'styled-components';
import { colors } from '../constants/colors';
import magnifyingGlass from '../static/images/magnifying-glass.svg';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleBackground = styled.div`
  display: flex;
  width: 100%;
  height: 551px;
`;

export const TitleBackgroundSolid = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  background: ${colors.yellow};
  padding-left: 100px;
  padding-right: 50px;
`;

export const TitleBackgroundGradient = styled.div`
  display: flex;
  flex-direction: row;
  width: 20%;
  height: 100%;
  background: ${colors.yellowGradient};
  align-items: flex-end;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 85%;
  align-items:flex-start;
  justify-content: center;

  h1 {
    font-style: normal;
    font-weight: bolder;
    font-size: 64px;
    line-height: 75px;
    margin-bottom: 30px;
    color: black;
  }

  p {
    width: 70%;
    font-size: 24px;
    line-height: 28px;
    text-align: left;
    color: black;
    padding-left: 5px;
  }
`;

export const FilterBarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 15%;
  align-items: flex-start;
  padding-top: 26px;
  padding-bottom: 24px;

  p {
    width: 100%;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: white;
  }
`;

export const SearchBar = styled.input<{ width: string; background: string }>`
  width: ${({ width }) => width};
  type: text;
  height: 28px;
  border-radius: 43px;
  padding-left: 10px;
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
  position: absolute;
  class: dropdown;
  display: flex;
  margin: 0px;
  padding-left: 0px;
  list-style: none;
`;

export const FilterButton = styled.div<{ open: boolean, applied: boolean }>`
  display: flex;
  width: fit-content;
  height: ${({ open }) => open ? '33px' : '28px'};
  background: ${({ open }) => open ? 'white' : colors.transparentWhite};
  border-radius: ${({ open }) => open ? '15px 15px 0px 0px' : '15px'};
  margin-right: 25px;
  padding-left: 15px;
  padding-right: ${({ applied }) => applied ? '7px' : '15px'};
  align-items: flex-start;

  img {
    transform: ${({ open }) => open ? 'rotate(180deg)' : 'none'};
    margin-top: 8px;
    width: 12px;
    max-height: 12px;
  }

  p {
    margin-right: ${({ applied }) => applied ? '11px' : '20px'};
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
  class: dropdown;
  width: ${({ expand }) => expand ? 'auto' : 'calc(100% - 25px)'};
  position: absolute;
  display: inline;
  background: white;
  list-style: none;
  padding-left: 23px;
  padding-top: 8px;
  padding-bottom: 11px;
  border-radius: 0px ${({ expand }) => expand ? '15px ' : '0px '}15px 15px;
  input {
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
`

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
  border-weight: 2px;
  border-radius: 2px;
  border: solid;
  background: ${({ checked }) => checked ? 'black' : 'white'};
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

  p {
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    margin: 0;
    color: ${colors.gray};
  }

  img {
    width: 21px;
    height: 14px;
    margin-left: 10px;
  }
`;

export const CourseGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: fit-content;
  padding-left: 80px;
  padding-right: 80px;
`;

export const CourseContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 289px;
  height: 197px;

  background: ${colors.blue};
  border-radius: 8px;
  margin: 20px;

  padding: 25px;
  align-items: flex-start;
  justify-content: space-between;

  h6 {
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    text-align: start;
    margin: 0;
    color: white;
  }

  p {
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    text-align: start;
    margin: 0;
    color: black;
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: fit-content;
  align-items: flex-start;
`;

export const Tag = styled.div`
  display: flex;
  width: fit-content;
  height: 28px;
  background: ${colors.transparentWhite};
  border-radius: 43px;
  margin-right: 10px;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;

  p {
    font-weight: bold;
    font-size: 12px;
    color: black;
  }
`;
