import styled from 'styled-components';
import { colors } from '../constants/colors';
import magnifyingGlass from '../static/images/magnifying-glass.svg';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleBackground = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 551px;
  background: ${colors.blue};
  padding-left: 100px;
  padding-right: 100px;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  height: 100%;
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
    font-size: 24px;
    line-height: 28px;
    text-align: left;
    color: black;
    padding-left: 5px;
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
  width: 100%;
  height: 353px;
  cursor: pointer;
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
    margin: 0;
  }

  p {
    font-size: 16px;
    line-height: 19px;
    color: black; 
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
  height: 22px;
  border-radius: 43px;
  margin-right: 10px;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
  background: #E4E4E4;
  p {
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: rgba(0, 0, 0, 0.49);
  }
`;

export const Link = styled.div`
  display: flex;
  width: fit-content;
  height: 49px;
  border-radius: 9px;
  box-shadow: 0px 0px 22px #AED8F7;
  margin-right: 30px;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
  p {
    font-weight: bold;
    font-size: 17px;
    line-height: 20px;
    color: black;
  }
`;