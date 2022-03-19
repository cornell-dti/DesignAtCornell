import styled from 'styled-components';
import { colors } from '../constants/colors';

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

export const ModalButton = styled.div`
  display: flex;
  width: 106px;
  height: 110px;
  background: white;
  margin-right: 10px;
  padding-left: 10px;
  margin-top: 35px;
  padding-right: 10px;
  border-radius: 9px;
  flex-direction: column;
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

  img {
    cursor: pointer;
  }
`;

export const CUReviewsButton = styled(ModalButton)`
  box-shadow: 0px 0px 22px ${colors.cureviews_purple};
  left: 806px;
  top: 580px;
`;

export const CourseRosterButton = styled(ModalButton)`
  box-shadow: 0px 0px 22px ${colors.course_roster_green};
  left: 540px;
  top: 579px;
`;

export const CourseSiteButton = styled(ModalButton)`
  box-shadow: 0px 0px 22px ${colors.course_site_orange};
  left: 673px;
  top: 579px;
`;

export const SyllabusButton = styled(ModalButton)`
  box-shadow: 0px 0px 22px ${colors.syllabus_blue};
  left: 409px;
  top: 579px;
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
