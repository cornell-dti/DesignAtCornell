import { Link } from 'react-router-dom';
import styled from 'styled-components';
import homepage_banner from '../static/images/homepage_banner.svg';
import mobile_homepage from '../static/images/mobile_homepage.svg';
import { colors } from '../constants/colors';

export const DesktopWrapper = styled.div`
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const MobileWrapper = styled.div`
  @media (min-width: 1001px) {
    display: none;
  }
`;

export const BannerBackground = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 550px;
  background-image: url(${homepage_banner});
  padding-left: 100px;
  padding-right: 100px;
  margin-bottom: 90px;
  @media (max-width: 1000px) {
    overflow-y: visible;
    color: white;
    height: 336px;
    background-image: url(${mobile_homepage});
    margin-bottom: 0px;
  }
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
    height: 72px;
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 47px;
    padding-left: 50px;

    @media (max-width: 1000px) {
      overflow-y: visible;
      color: white;
      text-align: center;
      display: inline-block;
      height: 10%;
      width: 100%;
      font-size: 55px;
      line-height: 60px;
      align-items: center;
      padding-left: 25px;
    }
  }

  p {
    font-size: 20px;
    line-height: 28px;
    color: black;
    padding-left: 50px;
    font-weight: 500;
    @media (max-width: 1000px) {
      overflow-y: visible;
      text-align: center;
      display: inline-block;
      color: white;
      font-size: 18px;
      margin-top: 100px;
      line-height: 23px;
      padding-left: 25px;
      padding-right: 7px;
    }
  }
`;

export const Blurb = styled.div`
  text-align: center;
  display: inline-block;
  justify-content: center;
  position: absolute;
  width: 497px;
  height: 348px;
  right: 120px;
  top: 190px;
  background: ${colors.blurb};
  border-radius: 20px;

  @media (max-width: 1000px) {
    overflow-y: visible;
    text-align: center;
    width: 100%;
    right: 0%;
    top: 15%;
    background: transparent;
    color: white;
  }
`;

export const Headline = styled.div`
  font-family: 'Work Sans';
  font-style: normal;
  font-size: x-large;
  text-align: center;
  color: black;
  justify-content: center;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const MissionStat = styled.div`
  text-align: center;
  justify-content: center;
  font-family: 'Work Sans';
  font-style: normal;
  font-size: large;
  color: black;
  margin-top: 40px;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const ElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: normal;
  margin-bottom: 90px;
  margin-inline: 20px;

  p {
    font-size: 24px;
    text-align: left;
    align-items: left;
    width: 300px;
    padding-top: 25px;
  }

  img {
    cursor: pointer;
  }
`;

export const CardTitle = styled.div`
  font-weight: bold;
  font-size: 35px;
  line-height: 20px;
  text-align: left;
  color: black;
  align-items: left;
  margin-top: 50px;
  @media (max-width: 1000px) {
    display: flex;
    width: 60%;
    box-sizing: border-box;
    margin-top: 27px;
    position: absolute;
    font-weight: bold;
    font-size: 18px;
    line-height: 23px;
    margin-left: 50px;
    cursor: pointer;
  }
`;

export const GridItem = styled.div`
  display: flex;
  flex: 0 0 26%;
  justify-content: center;
`;

export const GridMobile = styled.div`
  display: flex;
  flex: 0 0 0%;
  justify-content: left;
  margin-top: -5px;
`;

export const ExploreSubtitle = styled(Link)`
  font-weight: normal;
  font-size: 24px;
  line-height: 20px;
  text-align: left;
  color: blue;
  align-items: left;
  margin-top: 8px;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  @media (max-width: 1000px) {
    display: flex;
    justify-content: right;
    text-align: right;
    align-items: right;
    font-weight: bold;
    font-size: 18px;
    line-height: 20px;
    position: absolute;
    margin-top: 27px;
    margin-left: -30px;
    color: black;
  }
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: fit-content;
  margin-top: 90px;
  justify-content: center;
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: row;
    height: fit-content;
    justify-content: left;
    margin-top: 0px;
  }
`;

export const MobileElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: normal;
  margin-bottom: 50px;

  p {
    font-size: 24px;
    text-align: left;
    align-items: left;
    width: 300px;
    padding-top: 25px;
  }

  img {
    cursor: pointer;
  }
`;

export const ListsEvents = styled.div`
  display: flex;
  align-items: left;
  margin-top: 100px;
  margin-left: 40px;
  margin-right: 40%;
  flex-direction: column;
  justify-content: left;
  height: 350px;
`;

export const ListsArticles = styled.div`
  display: flex;
  align-items: left;
  margin-top: 100px;
  margin-left: 40px;
  margin-right: 40%;
  flex-direction: column;
  justify-content: left;
  height: 200px;
`;

export const SmallTitle = styled.div`
  font-weight: bold;
  text-align: left;
  color: black;
  align-items: left;
  text-decoration: underline;
  display: flex;
  width: 60%;
  box-sizing: border-box;
  margin-top: 27px;
  position: absolute;
  font-size: 18px;
  line-height: 23px;
  margin-left: 50px;
  cursor: pointer;
`;

export const SmallHeading = styled.div`
  font-weight: bold;
  text-align: left;
  color: black;
  align-items: left;
  text-decoration: underline;
  display: flex;
  width: 60%;
  margin-top: 60px;
  position: relative;
  font-size: 12px;
  line-height: 17px;
  margin-left: 50px;
  cursor: pointer;
`;
