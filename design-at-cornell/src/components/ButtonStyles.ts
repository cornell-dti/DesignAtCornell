import styled from 'styled-components';

export const RectangularButton = styled.div`
  display: flex;
  width: 165px;
  height: 36px;
  background: white;
  border-radius: 4px;
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
  box-shadow: 0px 0px 22px #e3bff0;
  left: 806px;
  top: 580px;
`;

export const CourseRosterButton = styled(ModalButton)`
  box-shadow: 0px 0px 22px #c9e1aa;
  left: 540px;
  top: 579px;
`;

export const CourseSiteButton = styled(ModalButton)`
  box-shadow: 0px 0px 22px rgba(254, 186, 171, 0.83);
  left: 673px;
  top: 579px;
`;

export const SyllabusButton = styled(ModalButton)`
  box-shadow: 0px 0px 22px #b1d5ef;
  left: 409px;
  top: 579px;
`;

