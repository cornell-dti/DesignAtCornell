import styled from 'styled-components';
import homepage_banner from '../static/images/homepage_banner.svg';

export const BannerBackground = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 550px;
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
    height: 72px;
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: bolder;
    font-size: 30px;
    line-height: 47px;
    padding-left: 50px;
  }

  p {
    font-size: 20px;
    line-height: 28px;
    color: black;
    padding-left: 50px;
    font-weight: 500;
  }

  a {
    position: static;
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 500;
    margin-top: 20px;
    font-size: 24px;
    text-decoration-line: underline;
    color: blue;
  }
`;

export const Blurb = styled.div`
  text-align: center;
  display: block;
  justify-content: center;
  position: absolute;
  width: 550px;
  height: 430px;
  right: 100px;
  top: 150px;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 20px;
`;

export const Headline = styled.div`
  font-family: 'Work Sans';
  font-style: normal;
  font-size: x-large;
  text-align: center;
  color: black;
  justify-content: center;
`;

export const MissionStat = styled.div`
  text-align: center;
  justify-content: center;
  font-family: 'Work Sans';
  font-style: normal;
  font-size: large;
  text-align: center;
  color: black;
  margin-top: 40px;
`;

export const ElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: normal;
  margin-bottom: 90px;
  cursor: pointer;

  p {
    font-size: 24px;
    text-align: left;
    align-items: left;
    width: 300px;
    padding-top: 25px;
    cursor: pointer;
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
`;

export const ExploreSubtitle = styled.div`
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
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: fit-content;
  margin-top: 90px;
  margin-left: 40px;
  justify-content: center;
`;

export const Col = styled.div`
  margin-right: 40px;
`;
