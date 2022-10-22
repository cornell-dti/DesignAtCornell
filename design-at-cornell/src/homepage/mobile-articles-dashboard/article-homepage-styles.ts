import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const ElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 600px;
  min-width: 300px;
  margin-bottom: 30px;
  cursor: pointer;
  background: white;
  border-radius: 8px;
  box-shadow: 0px 0px 5px 2px ${colors.cardShadow};
  padding: 20px;
  align-items: flex-start;
  justify-content: space-between;
`;

export const ArticleBubbleContainer = styled(ElementContainer)`
  width: 100%;
  height: auto;
  border-radius: 20px;

  img {
    width: calc(100% + 39px);
    height: auto;
    aspect-ratio: 5/3;
    object-fit: cover;
    margin: -25px 0px -10px -21px;
    border-radius: 20px 20px 0px 0px;
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
    margin-top: -20px;
    width: 330px;
    font-size: 16px;
    line-height: 21px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
  }
`;

export const ArticleBubbleTitle = styled(Title)`
  p {
    margin-bottom: 15px;
    margin-top: -15px;
    width: 100%;
    -webkit-line-clamp: 3;
  }
`;

export const ArticleBubbleSubtitle = styled.div`
  p {
    font-size: 16px;
    line-height: 19px;
    color: #818181;
    font-weight: bold;
  }
`;