import styled from 'styled-components';
import articlesBg from './articles-bg.svg';

import { mobileBreakpoint } from '../constants/styling';

export const WideDivider = styled.div`
  height: 1px;
  max-width: 1284px;
  width: 95%;
  margin: 0 20px;

  border: 1.5px solid #e3e3e3;
  background: #e3e3e3;

  overflow: hidden;
`;

export const SmallDivider = styled.div`
  height: 1px;
  width: 460px;
  border: 1.5px solid #e3e3e3;
  background: #e3e3e3;
`;

export const VerticalDivider = styled.div`
  width: 0px;
  height: 716px;
  border: 1.5px solid #e3e3e3;
  background: #e3e3e3;
`;

export const Banner = styled.div`
  text-align: center;
  background-image: url(${articlesBg});
  background-position: center;
  background-size: cover;
  height: 376px;

  @media (max-width: ${mobileBreakpoint}px) {
    height: 220px;
  }
`;

export const BannerText = styled.div`
  color: black;

  text-align: left;

  height: 100%;

  font-weight: 500;
  font-size: 25px;
  line-height: 131.8%;

  display: flex;
  flex-flow: column nowrap;
  gap: 15px;
  justify-content: center;
  margin: 0 6%;

  @media (max-width: ${mobileBreakpoint}px) {
    font-weight: 400;
    font-size: 16px;
    line-height: 125.3%;
  }
`;

export const Header = styled.div`
  font-weight: 700;
  font-size: 40px;
  line-height: 47px;
  @media (max-width: ${mobileBreakpoint}px) {
    // font-size: 2rem;
    font-weight: 600;
    font-size: 30px;
    line-height: 35px;
  }
`;

export const SubHeader = styled.div`
  font-weight: 600;
  font-size: 30px;
  line-height: 35px;
  @media (max-width: ${mobileBreakpoint}px) {
    font-weight: 500;
    font-size: 18px;
    line-height: 125.3%;
  }
`;

export const Body = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;

  padding: 51px 0;

  font-size: 1.5rem;

  display: flex;
  flex-flow: column nowrap;
  gap: 50px;

  justify-content: center;
  align-items: center;
  @media (max-width: ${mobileBreakpoint}px) {
    font-size: 1rem;
  }
`;

export const FirstRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  width: 100%;
  max-width: 1322px;
  gap: 50px;
  padding: 0 20px;

  // background: pink;
`;

export const BigBubble = styled.div`
  cursor: pointer;
  max-height: 717px;
  max-width: 737px;
  width: 100%;

  height: auto;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.11);
  border-radius: 10px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 0px 0px 10px 10px;
  }
`;

export const BigBubbleContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 25px;
  justify-content: center;
  align-items: left;

  padding: 30px;
`;

export const BH1 = styled.div`
  font-weight: 600;
  font-size: 32px;
  line-height: 38px;
  @media (max-width: ${mobileBreakpoint}px) {
    font-size: 2rem;
  }
`;

export const BubbleText = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  color: #545454;
`;

export const BubbleDate = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  display: flex;
  align-items: center;

  color: #8c8c8c;
`;

export const MBubble = styled.div`
  cursor: pointer;
  max-height: 464px;
  max-width: 461px;

  height: auto;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.11);
  border-radius: 10px;

  img {
    width: 100%;
    height: auto;
    max-height: 300px;
    object-fit: cover;
    border-radius: 10px 10px 0px 0px;
  }
`;

export const MContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
  justify-content: center;
  align-items: left;

  padding: 20px 20px;
`;

export const MTitle = styled.div`
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;

  text-overflow: ellipsis;
  /* Required for text-overflow to do anything */
  white-space: nowrap;
  overflow: hidden;
`;

export const MText = styled.div`
  text-overflow: ellipsis;
  /* Required for text-overflow to do anything */
  white-space: nowrap;
  overflow: hidden;

  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  color: #545454;
`;

export const XSBubble = styled.div`
  cursor: pointer;
  max-height: 206px;
  max-width: 214px;

  width: 100%;

  display: flex;
  flex-flow: column nowrap;

  position: relative;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.11);
  border-radius: 10px;

  // overflow: hidden;

  img {
    // position: absolute;
    width: 214px;
    height: 140px;
    left: 0px;
    top: 0px;
    border-radius: 10px 10px 0px 0px;
  }
`;

export const XSContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
  justify-content: center;
  align-items: left;
  padding: 12px 15px;

  height: 100%;
`;

export const XSTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;

  overflow: hidden;

  width: 100%;
  max-width: 283px;

  max-height: 44px;
  text-overflow: ellipsis;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 35px;
  justify-content: right;
  max-width: 450px;
  max-height: 717px;
  // background-color: green;
`;

export const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
  max-width: fit-content;
  justify-content: center;
  gap: 32px;
`;

export const RegBubble = styled.div`
  cursor: pointer;
  height: 331px;
  width: 100%;
  max-width: 283px;

  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.11);

  img {
    width: 283px;
    height: 159.2px;
    left: 0px;
    top: 0px;
    border-radius: 10px 10px 0px 0px;
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.11));
  }
`;

export const RegContent = styled.div`
  width: 100%;

  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
  padding: 22px 20px;
`;

export const RegDate = styled.div`
  font-weight: 500;
  font-size: 14px;

  color: #8c8c8c;

  width: 100%;
`;

export const RegTitle = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  display: flex;
  align-items: center;

  color: #000000;

  text-overflow: ellipsis;
  /* Required for text-overflow to do anything */
  white-space: nowrap;
  overflow: hidden;

  width: 100%;
  height: 23px;
`;

export const RegText = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  overflow: hidden;

  width: 100%;
  max-width: 283px;

  font-weight: 500;
  font-size: 16px;
  line-height: 140.8%;
  /* or 23px */

  color: #545454;
`;

export const RegContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 50px;

  width: 100%;
  padding: 10px 20px;
`;

export const MobileContainer = styled.div`
  display: flex;
  flex-flow column nowrap;
  gap: 20px;
  width: 100%;
  padding: 20px;
`;

export const MLBubble = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100%;

  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.11);

  img {
    width: 100%;
    height: auto;
    left: 0px;
    top: 0px;
    border-radius: 10px 10px 0px 0px;
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.11));
  }
`;

export const MLContent = styled.div`
  padding: 20px 15px;
  display: flex;
  flex-flow: column nowrap;
  gap: 8px;
  text-align: left;
  justify-content: center;
`;

export const MLDate = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;

  color: #8c8c8c;
`;

export const MLTitle = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  display: flex;
  align-items: center;

  color: #000000;
`;

export const MLText = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  /* or 171% */

  color: #545454;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  overflow: hidden;

  width: 100%;
`;

export const MobileBubble = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100%;
  height: 105px;

  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.11);

  position: relative;

  display: flex;
  flex-flow: row nowrap;

  justify-content: space-between;
  img {
    width: auto;
    max-width: 150px;

    max-height: 105px;

    height: 100%;
    border-radius: 0px 10px 10px 0px;
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.11));
  }
`;

export const MobileContent = styled.div`
  padding: 15px;
  display: flex;
  flex-flow: column nowrap;
  gap: 5px;
  justify-content: center;
`;

export const MobileTitle = styled.div`
  font-weight: 500;
  font-size: 16px;
  // line-height: 132.8%;
  /* or 21px */

  display: flex;
  align-items: center;

  color: #000000;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  overflow: hidden;
`;

export const MobileDate = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  /* identical to box height */

  display: flex;
  align-items: center;

  color: #8c8c8c;
`;
