import styled from 'styled-components';
import { colors } from '../constants/colors';

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
  width: 100%;
  height: 100%;
  align-items: flex-start;
  justify-content: space-between;
`;

export const ButtonHorizontalFlex = styled.div`
  display: flex;
  flex: 10;
  flex-direction: row;
  width: 80%;
  height: fit-content;
  align-items: left;
  justify-content: space-between;
`;

export const HomepageVerticalFlex = styled.div`
  margin: 70px;
  display: flex;
  flex-direction: column;
  width: 85%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const SubComponentVerticalFlex = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: left;
  justify-content: space-between;
`;

export const SubComponentHorizontalFlex = styled.div`
  display: flex;
  flex-direction: row;
  width: 110%;
  height: fit-content;
  align-items: left;
  justify-content: space-between;
  padding: 100px;
`;

export const ArticleBubbleVerticalFlex = styled(VerticalFlex)`
  margin: 1%;
`;

export const FacultyBubbleLeftVerticalFlex = styled(VerticalFlex)`
  width: 45%;
  background-color: ${colors.lightGray};
  text-align: center;
  flex-direction: column;
  align-items: center;
`;

export const FacultyBubbleRightVerticalFlex = styled(VerticalFlex)`
  width: 55%;
  padding: 5%;
`;

export const FacultyBubbleHorizontalFlex = styled(HorizontalFlex)`
  height: 100%;
`;
