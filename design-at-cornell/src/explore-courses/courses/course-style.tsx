import styled from 'styled-components';
import { colors } from '../../constants/colors';
import magnifyingGlass from '../static/images/magnifying-glass.svg';
import { mobileBreakpoint } from '../../constants/styling';

export const CoursesFilterButton = styled.div<{ expand: boolean }>`
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

export const CoursesFilterDropdownContainer = styled.div`
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
