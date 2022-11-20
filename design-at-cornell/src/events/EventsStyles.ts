import styled from 'styled-components';
import { colors } from '../constants/colors';
import { mobileBreakpoint } from '../constants/styling';

export const Divider = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80%;
  padding: 5px;
  align-items: center;
`;

export const FilterButton = styled.div<{ open: boolean }>`
  box-shadow: 0px 0px 5px 2px ${colors.cardShadow};
  display: flex;
  flex-direction: row;
  width: fit-content;
  padding: 15px 20px 15px 25px;
  height: fit-content;
  margin: 15px;
  align-items: center;
  justify-content: ${({ open }) => (open ? 'space-between' : 'center')};
  background: ${({ open }) => (open ? 'white' : 'none')};
  border-radius: ${({ open }) => (open ? '26px 26px 0 0' : '50px')};
  box-shadow: ${({ open }) => (open ? '0px 0px 24px 2px rgba(0, 0, 0, 0.07)' : '')};

  @media (max-width: ${mobileBreakpoint}px) {
    padding: ${({ open }) => (open ? '8px 15px 20px 20px' : '5px 15px 5px 20px')};
  }
`;

export const MonthSelected = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 32px;
  line-height: 38px;
  text-align: center;
  color: black;
  cursor: pointer;

  @media (max-width: ${mobileBreakpoint}px) {
    font-size: 16px;
  }
`;

export const Arrow = styled.img<{ direction: string; show: boolean }>`
  transform: ${({ direction }) =>
    direction === 'left' ? 'rotate(90deg)' : direction === 'right' ? 'rotate(270deg)' : 'none'};
  display: ${({ show }) => (show ? 'auto' : 'none')};
  width: 24px;
  height: 24px;
  margin: 0px 10px;
  cursor: pointer;

  @media (max-width: ${mobileBreakpoint}px) {
    width: 16px;
    height: 16px;
  }
`;

export const FilterWindow = styled.div<{ open: boolean }>`
  position: absolute;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-wrap: wrap;
  width: 530px;
  height: 400px;
  border-radius: 26px;
  box-shadow: 0 24px 24px 2px rgba(0, 0, 0, 0.07);
  margin-top: 70px;
  padding: 10px;
  background: white;

  @media (max-width: ${mobileBreakpoint}px) {
    width: 380px;
    height: 300px;
  }
`;

export const MonthButton = styled.div<{ selected: boolean }>`
  width: 150px;
  height: 75px;
  border-radius: 6px;
  margin: 10px;
  background: ${({ selected }) => (selected ? '#707070' : '#E6E6E6')};
  cursor: pointer;

  font-weight: 600;
  font-size: 24px;
  line-height: 75px;
  text-align: center;
  color: ${({ selected }) => (selected ? 'white' : 'black')};

  @media (max-width: ${mobileBreakpoint}px) {
    width: 100px;
    height: 50px;
    font-size: 20px;
    line-height: 50px;
  }
`;

export const EventList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  padding-left: 80px;
  padding-right: 80px;

  @media (max-width: ${mobileBreakpoint}px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100%);
  height: 300px;
  background: white;
  border-radius: 14px;
  box-shadow: 0px 0px 24px 2px rgba(0, 0, 0, 0.07);
  margin-bottom: 45px;
  padding: 30px 50px;
  align-items: flex-start;
  justify-content: space-between;
  h1 {
    font-weight: 600;
    font-size: 32px;
    line-height: 38px;
    color: black;
    margin: 10;
    @media (max-width: 1000px) {
      font-size: 18px;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      margin-top: 10px;
      overflow: hidden;
      white-space: nowrap;
      width: calc(97%);
    }
  }

  p {
    font-size: 16px;
    line-height: 19px;
    color: black;
    margin: 10;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    text-overflow: ellipsis;
    width: calc(97%);
    @media (max-width: 1000px) {
      font-size: 16px;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      white-space: nowrap;
      width: calc(97%);
    }
  }
  @media (max-width: 1000px) {
    height: 250px;
    width: 55%;
    justify-content: space-evenly;
    box-shadow: 0px 4px 24px 2px rgba(0, 0, 0, 0.07);
    border-radius: 20px;
    position: relative;
    padding: 10px 30px;
  }

  @media (max-width: ${mobileBreakpoint}px) {
    height: fit-content;
    margin-bottom: 20px;
    padding: 20px;

    h1 {
      font-size: 18px;
      line-height: 22px;
      margin-bottom: 10px;
    }

    p {
      font-size: 14px;
      line-height: 16px;
      color: black;
      margin: 10px 0px;
    }
  }
`;

export const Settings = styled.div`
  display: flex;
  flex-direction: row;

  img {
    margin-right: 10px;
  }

  p {
    font-size: 20px;
    line-height: 23px;
    color: #939393;
    margin: 0 30px 0 0;
    overflow: visible;
    white-space: nowrap;
    display: inline-block;
    text-overflow: clip;
    width: calc(100%);
    @media (max-width: 1000px) {
      font-size: 18px;
      margin: -15px 0px 10px 0;
      display: inline-flex;
      font-weight: 500;
    }
  }

  span {
    white-space: nowrap;
  }

  @media (max-width: ${mobileBreakpoint}px) {
    flex-direction: column;

    img {
      width: 12px;
    }

    p {
      font-size: 14px;
      line-height: 18px;
    }
  }
`;

export const EventLink = styled.div`
  display: flex;
  width: fit-content;
  height: 49px;
  border-radius: 9px;
  box-shadow: 0px 0px 5px 2px ${colors.cardShadow};
  margin-right: 30px;
  padding: 20px;
  align-items: center;
  cursor: pointer;

  p {
    font-weight: 500;
    font-size: 17px;
    line-height: 20px;
    color: black;
    margin-left: 10px;
  }

  @media (max-width: ${mobileBreakpoint}px) {
    height: 35px;
    padding: 15px;
    margin-top: 5px;

    img {
      width: 12px;
    }

    p {
      font-size: 12px;
      line-height: 16px;
    }
  }
`;
