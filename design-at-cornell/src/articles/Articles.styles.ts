import styled from 'styled-components';
import articlesBg from './articles-bg.svg';

import { mobileBreakpoint } from '../constants/styling';

export const Banner = styled.div`
  text-align: center;
  background-image: url(${articlesBg});
  background-position: center;
  background-size: cover;
  height: 376px;
`;

export const BannerText = styled.div`
  color: black;
  font-size: 25px;
  font-weight: 500;
  text-align: left;
  line-height: 47px;
  height: 100%;

  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
  justify-content: center;
  margin: 0 6%;

  @media (max-width: ${mobileBreakpoint}px) {
    font-size: 1.2rem;
  }
`;

export const Header = styled.div`
  font-weight: 700;
  font-size: 2.75rem;
  @media (max-width: ${mobileBreakpoint}px) {
    font-size: 2rem;
  }
`;

export const SubHeader = styled.div`
  font-weight: 600;
  font-size: 2rem;
  @media (max-width: ${mobileBreakpoint}px) {
    font-size: 1.5rem;
  }
`;

export const Body = styled.div`
  margin: 0 auto;
  // max-width: 1440px;
  min-height: 100vh;
  height: 100%;
  width: 100%;

  padding: 51px 0;

  font-size: 1.5rem;

  display: flex;
  flex-flow: row wrap;
  gap: 45px;
  justify-content: center;
  align-items: center;
  @media (max-width: ${mobileBreakpoint}px) {
    font-size: 1rem;
  }
`;

export const BigBubble = styled.div`
  max-height: 717px;
  max-width: 737px;

  height: auto;

  margin: 0px 10px;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.11);
  border-radius: 10px;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 0px 0px 10px 10px;
    margin-bottom: -5px;
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
  max-height: 464px;
  max-width: 461px;

  height: auto;

  margin: 0px 10px;

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
  height: 206px;
  max-width: 214px;

  display: flex;
  flex-flow: column nowrap;

  position: relative;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.11);
  border-radius: 10px;

  margin: 0px 10px;

  overflow: hidden;

  img {
    // position: absolute;
    width: 214px;
    height: 140px;
    left: 0px;
    top: 0px;
    border-radius: 10px 10px 0px 0px;
  }
`;

export const XSTitle = styled.div`
  height: 100%;
  padding: 12px 15px;

  font-weight: 500;
  font-size: 18px;
  line-height: 21px;

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  overflow: hidden;

  width: 100%;
  max-width: 283px;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 50px;
  justify-content: center;
`;

export const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  justify-content: space-between;
`;

export const RegBubble = styled.div`
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
  height: 100%;
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
