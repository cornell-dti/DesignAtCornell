import styled from 'styled-components';
import { colors } from '../constants/colors';

export const Divider = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80%;
  padding: 5px;
  align-items: center;
`;

export const FilterButton = styled.div<{ open: boolean }>`
  display: flex;
  flex-direction: row;
  width: 350px;
  height: 70px;
  align-items: center;
  justify-content: ${({ open }) => (open ? 'space-between' : 'center')};
  background: ${({ open }) => (open ? 'white' : 'none')};
  border-radius: 26px 26px 0 0;
  box-shadow: ${({ open }) => (open ? '0px 0px 24px 2px rgba(0, 0, 0, 0.07)' : 'none')};
`;

export const MonthSelected = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 32px;
  line-height: 38px;
  text-align: center;
  color: black;
  cursor: pointer;
`;

export const Arrow = styled.img<{ direction: string; show: boolean }>`
  transform: ${({ direction }) =>
    direction === 'left' ? 'rotate(90deg)' : direction === 'right' ? 'rotate(270deg)' : 'none'};
  display: ${({ show }) => (show ? 'auto' : 'none')};
  width: 24px;
  height: 24px;
  margin: 0px 10px;
  cursor: pointer;
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
`;

export const MonthButton = styled.div<{ selected: boolean }>`
  width: 150px;
  height: 75px;
  border-radius: 6px;
  margin: 10px;
  background: ${({ selected }) => (selected ? '#707070' : '#E6E6E6')};
  cursor: pointer;

  font-weight: bold;
  font-size: 24px;
  line-height: 75px;
  text-align: center;
  color: ${({ selected }) => (selected ? 'white' : 'black')};
`;

export const EventList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  padding-left: 80px;
  padding-right: 80px;
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
    font-weight: bold;
    font-size: 32px;
    line-height: 38px;
    color: black;
    margin: 10;
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
  }

  span {
    white-space: nowrap;
  }
`;

export const EventLink = styled.div`
  display: flex;
  width: fit-content;
  height: 49px;
  border-radius: 9px;
  box-shadow: 0px 0px 22px ${colors.event_link_blue};
  margin-right: 30px;
  padding: 20px;
  align-items: center;
  cursor: pointer;

  p {
    font-weight: bold;
    font-size: 17px;
    line-height: 20px;
    color: black;
    margin-left: 10px;
  }
`;
