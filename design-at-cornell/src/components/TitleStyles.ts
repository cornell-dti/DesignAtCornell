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
  @media (max-width: 1000px) {
      padding-left: 40px;
      padding-right: 10px;
      height: 370px;
    }
`;

export const TitleBackgroundImage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 450px;
  @media (max-width: 1000px) {
      font-size: 50px;
      line-height: 30px;
    }
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
    @media (max-width: 1000px) {
      font-size: 23px;
    }
  }
  @media (max-width: 1000px) {
    width: 100%;
    font-size: 16px;
  }
`;

export const TitleContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 320px;
  margin-left: 105px;
  margin-top: 65px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  padding: 45px 45px;
  align-items: flex-start;
  justify-content: space-evenly;

  h1 {
    font-weight: 600;
    font-size: 32px;
    line-height: 35px;
    color: ${colors.white};
  }

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 27px;
    color: ${colors.white};
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
