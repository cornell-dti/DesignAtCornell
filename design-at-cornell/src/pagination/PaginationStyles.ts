import styled from 'styled-components';
import { mobileBreakpoint } from '../constants/styling';

export const SemanticStyledPagination = styled.div`
  margin: 15px auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;

export const StyledPagination = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  padding: 0px 80px 15px 80px;
  align-items: center;

  ul {
    display: flex;
    width: 70%;
    list-style-type: none;
    padding: 0;
    margin: 0;
    justify-content: center;
  }

  li {
    display: inline-block;
    margin: 10px;
  }

  div {
    width: 15%;
    height: 41px;
  }

  @media (max-width: ${mobileBreakpoint}px) {
    padding: 0px 10px;

    li {
      margin: 2px;
    }
  }
`;

export const MobileAreaOfStudyStyledPagination = styled(StyledPagination)`
  margin-top: -25px;
  margin-bottom: 25px;
  padding: 0px 10px;

  @media (min-width: ${mobileBreakpoint + 1}px) {
    display: none;
  }

  ul {
    width: 100%;
    justify-content: space-between;
  }
`;

export const PageButton = styled.button<{ selected: boolean }>`
  width: 41px;
  height: 41px;
  border-radius: 100%;
  border: none;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  cursor: pointer;
  color: ${({ selected }) => (selected ? 'black' : 'gray')};
  background: ${({ selected }) => (selected ? '#E0E0E0' : 'none')};

  &:focus {
    border: none;
    outline: none;
  }

  @media (max-width: ${mobileBreakpoint}px) {
    width: 31px;
    height: 31px;
    font-size: 16px;
    line-height: 20px;
  }

  @media (max-width: ${mobileBreakpoint / 2}px) {
    width: 21px;
    height: 21px;
    font-size: 12px;
    line-height: 16px;
  }
`;

export const PageNavButton = styled.button<{ direction: string }>`
  display: flex;
  flex-direction: row;
  width: 15%;
  height: 41px;
  border: none;
  background: none;
  font-weight: bold;
  font-size: 20px;
  line-height: 41px;
  text-align: center;
  align-items: center;
  justify-content: ${({ direction }) => (direction === 'left' ? 'flex-start' : 'flex-end')};
  cursor: pointer;

  img {
    margin: 10px;
    transform: ${({ direction }) => (direction === 'left' ? 'rotate(180deg)' : 'none')};
  }

  &:focus {
    border: none;
    outline: none;
  }

  @media (max-width: ${mobileBreakpoint}px) {
    height: 31px;
    font-size: 16px;
    line-height: 20px;

    img {
      height: 20px;
    }
  }

  @media (max-width: ${mobileBreakpoint / 2}px) {
    height: 21px;
    font-size: 12px;
    line-height: 16px;

    img {
      height: 16px;
    }
  }
`;

export const MobileAreaOfStudyPageNavButton = styled(PageNavButton)`
  font-size: 16px;
  line-height: 20px;
  width: fit-content;
`;
