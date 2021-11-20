import styled from 'styled-components';

export const HorizontalFlex = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: fit-content;
  align-items: center;
  justify-content: space-between;
`;

export const VerticalFlex = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: 100%;
  align-items: flex-start;
  justify-content: space-between;
`;
