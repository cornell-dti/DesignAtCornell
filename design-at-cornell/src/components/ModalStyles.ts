import styled from 'styled-components';
import { colors } from '../constants/colors';

export const ModalContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 180px;
  background-color: ${colors.lightBlue};
  padding: 30px;
  border-radius: 10px 10px 0px 0px;
  justify-content: space-between;
`;

export const VerticalModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 356px;
  height: 100%;
  background-color: ${colors.red};
  padding: 60px 60px 60px 60px;
  border-radius: 10px 0px 0px 10px;
  justify-content: space-around;
`;

export const VerticalModalBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 434px;
  height: 100%;
  background-color: ${colors.white};
  padding: 30px;
  border-radius: 0px 10px 10px 0px;
  justify-content: space-between;
`;
