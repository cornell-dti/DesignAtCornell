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
  padding: 25px;
`;
