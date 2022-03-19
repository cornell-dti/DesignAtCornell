import styled from 'styled-components';

export const Title = styled.div`
  font-weight: bold;
  font-size: 35px;
  line-height: 20px;
  text-align: center;
  color: black;
  align-items: center;
  justify-content: space-between;
  white-space: normal;
  padding-left: 100px;
`;

export const Subtitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-weight: normal;
  font-size: 24px;
  line-height: 15px;
  text-align: center;
  padding-top: 100px;
  white-space: normal;
  padding-left: 100px;
`;

export const SubComponentTitle = styled.div`
  font-weight: bold;
  font-size: 35px;
  line-height: 20px;
  text-align: left;
  color: black;
  align-items: left;
  margin-top: 50px;
  justify-content: space-between;
  width: 100%;
`;

export const SubComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  font-weight: normal;
  text-align: left;
  width: 100%;
  height: 100%;
  cursor: pointer;

  p {
  font-weight: normal;
  font-size: 24px;
  text-align: left;
  color: black;
  align-items: left;
  width: 80%;
  justify-content: space-between;
  padding-top: 25px;
  cursor: pointer;
  }

  img {
    cursor: pointer;
  }

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



