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
    margin: 8px 0px 0px;
  }

  .course-title {
    margin: 5px 0px;
    font-size: 16px;
  }

  .show {
    border: 0;
    margin: 0;
    :hover {
      cursor: pointer;
    }
  }

  .tags {
    width: calc(100% - 30px);
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
  width: fit-content;
  height: 28px;
  border-radius: 43px;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
  background-color: ${colors.transparentWhite};
  white-space: nowrap;
  font-weight: bold;
  font-size: 12px;
  color: black;
  margin-top: 10px;
  margin-right: 10px;
`;
