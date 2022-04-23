import styled from 'styled-components';
import { colors } from '../constants/colors';

export const TitleBackground = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 450px;
  background: ${(props) => props.color};
  padding-left: 100px;
  padding-right: 100px;
`;

export const TitleBackgroundImage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 450px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  height: 85%;
  align-items: flex-start;
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

export const TitleContainerBox = styled.div`
  display: flex;
  flex-direction: column; 
  width: 400px;
  height: 320px;
  margin-left: 105px;
  margin-top: 65px;
  background: rgba(0, 0, 0, 0.45);
  border-radius: 20px;
  padding: 45px 35px;
  align-items: flex-start;
  justify-content: space-evenly;

  h1 {
    font-weight: 600;
    font-size: 30px;
    line-height: 35px;
    color: #FFFFFF;
  }

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    color: #FFFFFF;
  }
`;

export const QuizButton = styled.div`
  display: flex;
  flex-direction: row;
  width: 276px;
  height: 40px;
  background: ${colors.transparentWhite};
  border-radius: 43px;
  align-items: center;
  p {
    width: 100%;
    font-weight: bold;
    font-size: 16px;
    color: black;
    margin: 0;
    padding: 0;
    text-align: center;
  }
`;
