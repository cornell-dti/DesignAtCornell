import styled from 'styled-components';
import exit from '../static/images/exit.svg';
import { colors } from '../constants/colors';

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 180px;
  background-color: ${(props) => props.color};
  padding: 30px;
  border-radius: 10px 10px 0px 0px;
  justify-content: space-between;
`;

export const VerticalModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 356px;
  height: 527px;
  background-color: ${colors.red};
  padding: 60px 60px 60px 60px;
  border-radius: 10px 0px 0px 10px;
  justify-content: space-between;
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

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px;
  border-radius: 0px 0px 10px 10px;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  text-decoration: underline;
  text-align: start;
  margin: 0;
  color: black;
`;

export const Subtitle = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-decoration: underline;
  text-align: start;
  margin: 0;
  color: white;
`;

export const Exit = styled.div`
  width: 11px;
  height: 11px;
  background-image: url(${exit});
  cursor: pointer;
`;
