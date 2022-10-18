import styled from 'styled-components';

export const StyledPagination = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  padding: 0px 80px;
  align-items: center;

  ul {
    display: flex;
    width: 70%;
    list-style-type: none;
    padding: 0;
    margin: 0;
    justify-content: center;
  }

  li {
    display: inline-block;
    margin: 10px;
  }

  div {
    width: 15%;
    height: 41px;
  }
`;

export const MobileAreaOfStudyStyledPagination = styled(StyledPagination)`
  margin-top: -25px;
  margin-bottom: 25px;
  padding: 0px 10px;

  @media (min-width: 901px) {
    display: none;
  }

  ul {
    width: 100%;
    justify-content: space-between;
  }
`;

export const PageButton = styled.button<{ selected: boolean }>`
  width: 41px;
  height: 41px;
  border-radius: 100%;
  border: none;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  cursor: pointer;
  color: ${({ selected }) => (selected ? 'black' : 'gray')};
  background: ${({ selected }) => (selected ? '#E0E0E0' : 'none')};

  &:focus {
    border: none;
    outline: none;
  }
`;

export const PageNavButton = styled.button<{ direction: string }>`
  display: flex;
  flex-direction: row;
  width: 15%;
  height: 41px;
  border: none;
  background: none;
  font-weight: bold;
  font-size: 20px;
  line-height: 41px;
  text-align: center;
  align-items: center;
  cursor: pointer;

  img {
    margin: 10px;
    transform: ${({ direction }) => (direction === 'left' ? 'rotate(180deg)' : 'none')};
  }

  &:focus {
    border: none;
    outline: none;
  }
`;

export const MobileAreaOfStudyPageNavButton = styled(PageNavButton)`
  font-size: 16px;
  line-height: 20px;
  width: fit-content;
`;
