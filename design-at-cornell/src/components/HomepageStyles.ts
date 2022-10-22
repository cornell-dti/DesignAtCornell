import { Link } from 'react-router-dom';
import styled from 'styled-components';
import homepage_banner from '../static/images/homepage_banner.svg';
import { colors } from '../constants/colors';

export const BannerBackground = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 730px;
  background-image: url(${homepage_banner});
  padding-left: 100px;
  padding-right: 100px;
  margin-bottom: 90px;
`;

export const BlurbContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: left;
  justify-content: center;
  text-align: left;
  h3 {
    height: 45px;
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: bolder;
    font-size: 30px;
    line-height: 47px;
    padding-left: 50px;
  }

  p {
    font-size: 20px;
    line-height: 30px;
    color: black;
    padding-left: 50px;
    padding-right: 50px;
    font-weight: 500;
  }
`;

export const Blurb = styled.div`
  text-align: center;
  display: block;
  justify-content: center;
  position: absolute;
  width: 450px;
  height: 220px;
  right: 150px;
  top: 220px;
  background: ${colors.blurb};
  border-radius: 20px;
`;

export const ElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: normal;
  margin-bottom: 90px;
  margin-inline: 20px;

  p {
    font-size: 18px;
    text-align: left;
    align-items: left;
    width: 300px;
    padding-top: 25px;
    min-height: 100px;
  }

  img {
    cursor: pointer;
  }
`;

export const CardTitle = styled.div`
  font-weight: bold;
  font-size: 30px;
  line-height: 20px;
  text-align: left;
  color: black;
  align-items: left;
  margin-top: 50px;
`;

export const GridItem = styled.div`
  display: flex;
  flex: 0 0 26%;
  justify-content: center;
  margin-left: 30px;
  margin-right: 30px;
`;

export const ExploreSubtitle = styled(Link)`
  font-weight: normal;
  font-size: 18px;
  line-height: 20px;
  text-align: left;
  color: blue;
  align-items: left;
  margin-top: 8px;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: fit-content;
  margin-top: 90px;
  justify-content: center;
`;
