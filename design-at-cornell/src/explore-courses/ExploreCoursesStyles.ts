import styled from 'styled-components';
import { colors } from '../constants/colors';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const TitleBackground = styled.div`
  display: flex;
  width: 100%;
  height: 551px;
`

export const TitleBackgroundSolid = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  background: ${colors.yellow};
  padding-left: 100px;
  padding-right: 50px;
`

export const TitleBackgroundGradient = styled.div`
  display: flex;
  flex-direction: row;
  width: 20%;
  height: 100%;
  background: ${colors.yellowGradient};
  align-items: flex-end;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 85%;
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
    width: 70%;
    font-size: 24px;
    line-height: 28px;
    text-align: left;
    color: black;
    padding-left: 5px;
  }
`

export const FilterBarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 15%;
  align-items: center;

  p {
    width: 100%;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: white;
  }
`

export const FilterButton = styled.div`
  display: flex;
  width: fit-content;
  height: 28px;
  background: ${colors.transparentWhite};
  border-radius: 43px;
  margin-right: 25px;
  padding-left: 15px;
  padding-right: 15px;
  align-items: center;

  p {
    font-weight: bold;
    font-size: 12px;
    padding-right: 20px;
    color: black;
    margin: 0;
  }

  img {
    width: 12px;
    height: 12px;
  }
`

export const SearchBox = styled.div`
  display: flex;
  width: 338px;
  height: 28px;

  background: white;
  border-radius: 43px;
  align-items: center;
  padding-left: 15px;
`

export const Sort = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80px;
  padding-top: 30px;
  padding-right: 80px;
  align-items: flex-end;

  p {
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    color: #828282;
  }
`

export const CourseGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: fit-content;
  padding-left: 80px;
  padding-right: 80px;
`;

export const CourseBubble = styled.div`
  display: flex;
  flex-direction: column;
  width: 289px;
  height: 197px;

  background: #7CD0FF;
  border-radius: 8px;
  margin: 20px;

  padding: 25px;
  align-items: flex-start;
  justify-content: space-between;

  h6 {
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    text-align: start;
    margin: 0;
    color: white;
  }

  p {
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    text-align: start;
    margin: 0;
    color: black;
  }
`

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
  height: 28px;
  background: ${colors.transparentWhite};
  border-radius: 43px;
  margin-right: 10px;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;

  p {
    font-weight: bold;
    font-size: 12px;
    color: black;
  }
`