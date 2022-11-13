import styled from 'styled-components';

export const Banner = styled.div`
  position: relative;
  text-align: center;

  img {
    width: 100%;
  }
`;

export const BannerText = styled.div`
  position: absolute;
  top: 50%;
  left: 15%;
  transform: translate(-15%, -50%);
  color: black;
  font-size: 25px;
  font-weight: 500;
  text-align: left;

  display: flex;
  flex-flow: column nowrap;
  gap: 15px;
`;

export const Header = styled.div`
  font-weight: 700;
  font-size: 40px;
`;

export const SubHeader = styled.div`
  font-weight: 600;
  font-size: 30px;
`;
