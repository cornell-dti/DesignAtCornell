import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 86px;
  margin: 0 -10px;
  justify-content: space-between;
`;

export const RectangularButton = styled.div`
  display: flex;
  width: 165px;
  height: 36px;
  background: white;
  border-radius: 4px;
  margin: 0 10px;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;

  p {
    width: fit-content;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: black;
  }
`;

export const LargeRectangularButton = styled.div`
  display: flex;
  width: 230px;
  height: 40px;
  background: white;
  border-radius: 4px;
  margin: 0 10px;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;

  img {
    margin: 0 30px;
  }

  p {
    width: fit-content;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #6b6b6b;
  }
`;

export const SmallRectangularButton = styled.div`
  display: flex;
  width: 102px;
  height: 34px;
  background: white;
  border-radius: 4px;
  box-shadow: 0px 0px 5px 2px #e6e6e6;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;

  img {
    min-width: 16%;  
    height: auto;  
  }

  p {
    width: fit-content;
    font-weight: 600;
    font-size: 13px;
    line-height: 15px;
    color: #6b6b6b;
  }
`;
