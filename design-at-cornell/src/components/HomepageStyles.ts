import { Link } from 'react-router-dom';
import styled from 'styled-components';
import homepage_banner from '../static/images/homepage_banner.svg';
import mobile_homepage from '../static/images/mobile_homepage.svg';
import { colors } from '../constants/colors';
import { mobileBreakpoint } from '../constants/styling';

export const DesktopWrapper = styled.div`
  @media (max-width: ${mobileBreakpoint}px) {
    display: none;
  }
`;

export const MobileWrapper = styled.div`
  @media (min-width: ${mobileBreakpoint + 1}px) {
    display: none;
  }
  width: 100%;
`;

export const BannerBackground = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: flex-end;
  align-items: center;

  width: 100%;
  min-height: 450px;
  background-image: url(${homepage_banner});

  @media (max-width: ${mobileBreakpoint}px) {
    overflow-y: visible;
    color: white;
    height: 336px;
    background-image: url(${mobile_homepage});
    margin-bottom: 0px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
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
    height: 45px;
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 47px;
    padding-left: 50px;

    @media (max-width: ${mobileBreakpoint}px) {
      overflow-y: visible;
      color: white;
      text-align: center;
      display: inline-block;
      width: 100%;
      font-size: 30px;
      line-height: 60px;
      align-items: center;
      margin-top: 50px;
    }
  }

  p {
    font-size: 20px;
    line-height: 30px;
    color: black;
    padding-left: 50px;
    padding-right: 50px;
    font-weight: 400;
    @media (max-width: ${mobileBreakpoint}px) {
      overflow-y: visible;
      text-align: center;
      display: inline-block;
      color: white;
      font-size: 18px;
      margin-top: 100px;
      line-height: 23px;
      padding-left: 25px;
      padding-right: 50px;
    }
  }
`;

export const Blurb = styled.div`
  background: ${colors.blurb};
  border-radius: 20px;
  padding: 50px;
  max-width: 457px;

  position: absolute;
  top: 265px;
  right: 150px;

  h3 {
    font-weight: 550;
    font-size: 30px;
    line-height: 47px;
    width: 100%;
  }

  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 153.3%;
  }

  @media (max-width: ${mobileBreakpoint}px) {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow-y: visible;
    width: 100%;
    height: 100%;
    background: transparent;
    color: white;
    right: 0px;
    top: 0px;
    text-align: left;

    padding: 25px;
  }
`;

export const Headline = styled.div`
  font-family: 'Work Sans';
  font-style: normal;
  font-size: x-large;
  font-weight: 500;
  text-align: center;
  color: black;
  justify-content: center;
  @media (max-width: ${mobileBreakpoint}px) {
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
  @media (max-width: ${mobileBreakpoint}px) {
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
  font-weight: 500;
  font-size: 30px;
  line-height: 20px;
  text-align: left;
  color: black;
  align-items: left;
  margin-top: 50px;
  @media (max-width: ${mobileBreakpoint}px) {
    display: flex;
    width: 60%;
    box-sizing: border-box;
    margin-top: 27px;
    position: absolute;
    font-weight: 500;
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
  margin-left: 30px;
  margin-right: 30px;
`;

export const GridMobile = styled.div`
  display: flex;
  flex: 0 0 100%;
  width: 450px;
  justify-content: left;
  margin-top: -5px;
  position: relative;
  overflow: hidden;
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

export const MobileExploreSubtitle = styled.span`
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;
  text-align: right;
  color: blue;
  align-items: left;
  width: 100%;
  cursor: pointer;

  display: flex;
  justify-content: right;
  align-items: right;
  position: absolute;
  margin-top: 27px;
  margin-left: -30px;
  color: black;

  @media (max-width: ${mobileBreakpoint}px) {
    display: flex;
    justify-content: right;
    text-align: right;
    align-items: right;
    font-weight: 500;
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
  @media (max-width: ${mobileBreakpoint}px) {
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
  align-items: left;
  font-weight: normal;
  width: 100%;
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
  width: 80%;
  margin: 100px 42px;
  flex-direction: column;
  justify-content: left;
  height: 400px;
  margin-bottom: -10px;
`;

export const ListsArticles = styled(ListsEvents)`
  height: 10%;
  width: 85%;
  margin-bottom: -50px;
`;

export const SmallTitle = styled.div`
  font-weight: 500;
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

export const SmallHeading = styled(Link)`
  font-weight: 500;
  text-align: left;
  color: black;
  align-items: left;
  text-decoration: underline;
  width: 80%;
  position: relative;
  font-size: 12px;
  line-height: 17px;
  margin-left: 45px;
  cursor: pointer;
  color: #818181;
`;
