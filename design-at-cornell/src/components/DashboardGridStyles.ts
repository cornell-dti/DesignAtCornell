import styled from 'styled-components';
import { colors } from '../constants/colors';
import { mobileBreakpoint } from '../constants/styling';

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

export const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: fit-content;
  padding: 0 80px;
`;

export const MobileCourseGrid = styled(Grid)`
  @media (max-width: ${mobileBreakpoint}px) {
    width: 112%;
    margin-right: 50px;
    grid-gap: 20px;
  }
`;
