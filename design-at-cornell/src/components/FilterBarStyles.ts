import styled from 'styled-components';
import { colors } from '../constants/colors';
import magnifyingGlass from '../static/images/magnifying-glass.svg';
import { mobileBreakpoint } from '../constants/styling';

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

export const MobileFilterBarContainer = styled(FilterBarContainer)`
  justify-content: center;

  @media (min-width: ${mobileBreakpoint + 1}px) {
    display: none;
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
  @media (max-width: ${mobileBreakpoint}px) {
    p {
      width: 100%;
      margin-left: 2px;
      font-weight: bold;
      font-size: 14px;
      line-height: 18px;
    }
  }
`;

export const MobileFilterDropdownContainer = styled(FilterDropdownContainer)`
  align-self: flex-end;
  margin: 20px 20px 0px 20px;
  @media (min-width: ${mobileBreakpoint + 1}px) {
    display: none;
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

  @media (min-width: ${mobileBreakpoint + 1}px) {
    display: none;
  }
`;

export const MobileCoursesFilterButton = styled(FilterButton)`
  background: rgba(255, 255, 255, 0.53);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.11);
  border-radius: 50px;
  height: 45px;
  padding: 9px 15px;
  margin-top: -64px;
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
    cursor: pointer;
  }

  h4 {
    margin: 12px 0px 5px 0px;
  }
`;

export const CenteredMobileLargeFilterFormContainer = styled(MobileLargeFilterFormContainer)`
  width: 350px;
  right: -2vw;
  border: 5px solid white;
`;

export const ScrolledMobileLargeFilterFormContainer =
  styled(CenteredMobileLargeFilterFormContainer)`
  width: 350px;
  height: 400px;
  overflow-y: scroll;
`;

export const MobileSelectFormContainer = styled(MobileLargeFilterFormContainer)`
  margin-top: -100px;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  img {
    left: 85%;
  }

  button {
    background-color: transparent;
    border: 0px solid transparent;
    padding-top: 5px;
    margin-left: -5px;
    font-family: 'Work Sans';
    font-weight: bold;
    font-size: 12px;
    line-height: 19px;
    cursor: pointer;
  }

  button:hover {
    color: ${colors.green};
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

export const MobileSearchBar = styled.input`
  flex-grow: 1;
  height: 45px;
  border-radius: 50px;
  padding: 0 10px;
  margin: 20px 15px;
  width: 65vw;
  border-style: none;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.11);
  background-image: url(${magnifyingGlass});
  background-position: 7px 14px;
  background-repeat: no-repeat;
  text-indent: 30px;
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  display: flex;
  color: black;

  &:focus {
    outline: none;
  }
`;
