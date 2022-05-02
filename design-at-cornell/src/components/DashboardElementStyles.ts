import styled from 'styled-components';
import { colors } from '../constants/colors';

export const ElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 22%;
  min-width: 250px;
  height: 197px;
  cursor: pointer;
  background: white;
  border-radius: 8px;
  box-shadow: 0px 0px 5px 2px ${colors.cardShadow};
  margin: 1.5%;
  padding: 25px;
  align-items: flex-start;
  justify-content: space-between;

  img {
    margin: -25px;
    width: 370px;
    height: 220px;
    border-radius: 20px 20px 0px 0px;
  }
`;

export const ArticleBubbleContainer = styled(ElementContainer)`
  width: 370px;
  height: 350px;
  border-radius: 20px;
`;

export const SmallArticleBubbleContainer = styled(ElementContainer)`
  width: 270px;
  height: 325px;
  border-radius: 20px;

  img {
    width: 270px;
    height: 180px;
  }
`;

export const LargeArticleBubbleContainer = styled(ElementContainer)`
  margin-left: 20px;
  width: 97%;
  height: 350px;
  border-radius: 20px;

  img {
    width: 50%;
    height: 350px;
    border-radius: 20px 0px 0px 20px;
  }
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  text-align: start;
  margin: 0;
  color: black;

  p {
    margin-top: 30px;
    width: 330px;
    font-size: 18px;
    line-height: 21px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
  }
`;

export const LargeTitle = styled.div`
  font-weight: bold;
  font-size: 32px;
  line-height: 38px;
  text-align: start;
  margin: 0;
  color: black;
`;

export const Subtitle = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: fit-content;
  align-items: center;
  justify-content: space-between;

  p {
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    text-align: start;
    margin: 0;
    color: ${colors.gray};
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
  }

  img {
    cursor: pointer;
  }
`;

export const ArticleBubbleSubtitle = styled(Subtitle)`
  p {
    margin-bottom: -5px;
    font-size: 12px;
    line-height: 18px;
  }
`;

export const SmallArticleBubbleTitle = styled(Title)`
  p {
    margin-top: 5px;
    width: 220px;
    -webkit-line-clamp: 3;
  }
`;

export const LargeArticleBubbleTitle = styled(Title)`
  margin-top: 5px;
  font-size: 36px;
  line-height: 42px;
`;

export const SmallArticleBubbleDate = styled(Subtitle)`
  p {
    margin-top: 40px;
    font-size: 11px;
    line-height: 13px;
  }
`;

export const LargeArticleBubbleDate = styled(Subtitle)`
  p {
    font-size: 16px;
    line-height: 18px;
  }
`;

export const SmallArticleBubbleSubtitle = styled(Subtitle)`
  p {
    margin-top: 5px;
    margin-bottom: -5px;
    font-size: 12px;
    line-height: 18px;
    -webkit-line-clamp: 3;
  }
`;

export const LargeArticleBubbleSubtitle = styled(Subtitle)`
  p {
    font-size: 18px;
    line-height: 25px;
    -webkit-line-clamp: 4;
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: hidden;
  width: 100%;
  height: fit-content;
  align-items: flex-start;
`;

export const Tag = styled.div`
  display: flex;
  width: fit-content;
  height: 28px;
  border-radius: 43px;
  margin-right: 10px;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
  background-color: ${colors.transparentWhite};
  white-space: nowrap;
  font-weight: bold;
  font-size: 12px;
  color: black;
`;

export const HeadingLine = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;

  h1 {
    flex-grow: 0;
    font-size: 18px;
    font-weight: 500;
    line-height: 25px;
    margin: -2px 15px 0px 15px;
    align-items: center;
    color: black;
    cursor: pointer;
  }

  h2 {
    flex-grow: 0;
    font-size: 14px;
    font-weight: 500;
    line-height: 25px;
    margin: -2px 13px 0px 13px;
    align-items: center;
    color: black;
    cursor: pointer;
  }

  h3 {
    flex-grow: 0;
    font-size: 45px;
    font-weight: 700;
    margin: -2px 20px 0px 20px;
    align-items: center;
    color: black;
  }

  hr {
    flex-grow: 0;
    height: 1px;
    width: 80px;
    border: 1px solid ${colors.pink};
    box-sizing: border-box;
  }

  line {
    flex-grow: 1;
    height: 1px;
    border: 1px solid ${colors.pink};
    box-sizing: border-box;
  }
`;

