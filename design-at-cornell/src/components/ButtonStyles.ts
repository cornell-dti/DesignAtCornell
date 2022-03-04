import styled from 'styled-components';

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
