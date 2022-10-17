import styled from 'styled-components';
import { colors } from '../constants/colors';
import magnifyingGlass from '../static/images/magnifying-glass.svg';

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

export const FilterDropdownContainer = styled.li`
  position: relative;
  display: inline;
  box-sizing: border-box;
  margin: 10px 10px 0px 10px;
  p {
    font-weight: bold;
    font-size: 12px;
    margin-right: 20px;
    margin-top: 4px;
  }
`;

export const MobileFilterDropdownContainer = styled(FilterDropdownContainer)`
  align-self: flex-end;
  margin: 20px 20px 0px 20px;
  @media (min-width: 901px) {
    visibility: hidden;
  }
`;

export const FilterButton = styled.div<{ expand: boolean }>`
  display: flex;
  flex-shrink: 0;
  width: fit-content;
  white-space: nowrap;
  height: ${({ expand }) => (expand ? '38px' : '28px')};
  margin-top: ${({ expand }) => (expand ? '10px' : '0px')};
  background: ${({ expand }) => (expand ? 'white' : colors.transparentWhite)};
  border-radius: ${({ expand }) => (expand ? '15px 15px 0px 0px' : '15px')};
  padding: 0 15px;
  align-items: flex-start;
  cursor: pointer;

  img {
    transform: ${({ expand }) => (expand ? 'rotate(180deg)' : 'none')};
    margin-top: 8px;
    width: 12px;
    max-height: 12px;
  }
`;

export const MobileFilterButton = styled(FilterButton)`
  border-radius: 15px;
  box-shadow: 0px 0px 5px 2px ${colors.cardShadow};
  height: 36px;
  padding: 5px 15px;
  visibility: ${({ expand }) => (!expand ? 'visible' : 'hidden')};
`;

export const FilterFormContainer = styled.div<{ expand: boolean }>`
  width: 100%;
  position: absolute;
  display: ${({ expand }) => (expand ? 'inline' : 'none')};
  background: white;
  padding: 0px 15px 15px 15px;
  border-radius: 0 0 15px 15px;
  box-shadow: 0px 20px 20px 10px ${colors.shadow};
`;

export const LargeFilterFormContainer = styled.div<{ expand: boolean }>`
  width: fit-content;
  height: fit-content;
  position: absolute;
  white-space: nowrap;
  display: ${({ expand }) => (expand ? 'inline' : 'none')};
  background: white;
  padding: 0px 15px 15px 15px;
  border-radius: 0 15px 15px 15px;
  box-shadow: 0px 20px 20px 10px ${colors.shadow};
`;

export const MobileLargeFilterFormContainer = styled(LargeFilterFormContainer)`
  margin-top: -150px;
  border-radius: 15px;

  img {
    position: absolute;
    padding-top: 15px;
    left: 90%;
  }

  h4 {
    margin: 12px 0px 5px 0px;
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
