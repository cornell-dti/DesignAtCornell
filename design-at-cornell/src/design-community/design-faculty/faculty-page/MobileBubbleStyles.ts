import styled from 'styled-components';
import { colors } from '../../../constants/colors';

export const BubbleContainer = styled.div`
  width: 100%;
  margin: 20px 0;
  padding: 20px;
  border-radius: 9px;

  box-shadow: 0px 0px 5px 2px ${colors.cardShadow};

  .profile-image {
    width: 90px;
    height: 90px;
    border-radius: 9px;
    object-fit: cover;
    margin-right: 15px;
  }

  .right-item {
    margin: 2px 0px;
    font-size: 14px;
  }

  .faculty-name {
    margin-top: 15px;
    font-family: 'Work Sans';
    font-size: 18px;
    font-weight: bold;

    &:focus,
    &:hover,
    &:active,
    &:visited,
    &:link {
      text-decoration: none;
      color: black;
    }
  }

  .faculty-description {
    margin: 16px 0px 0px;
  }

  .course-title {
    margin: 5px 0px;
    font-size: 16px;
  }

  .show {
    height: 24px;
    border: 0;
    margin: 0;
    background: none;

    :hover {
      cursor: pointer;
    }
  }

  .tags {
    width: calc(100% - 40px);
  }
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`;

export const Split = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ColContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tag = styled.div`
  display: flex;
  align-items: center;

  padding: 0px 10px;
  margin-top: 10px;
  margin-right: 10px;

  width: fit-content;
  height: 24px;
  border-radius: 43px;

  font-weight: bold;
  font-size: 12px;
  color: black;
  white-space: nowrap;

  background-color: ${colors.transparentWhite};
`;
