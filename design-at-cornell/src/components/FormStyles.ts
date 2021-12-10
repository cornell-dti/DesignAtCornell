import styled from 'styled-components';

export const Form = styled.form`
  font-weight: bold;
  font-size: 12px;
  line-height: 24px;
  color: black;

  input[type='checkbox'] {
    vertical-align: middle;
    margin-right: 10px;
    cursor: pointer;
  }

  input[type='checkbox']:before {
    content: '';
    position: absolute;
    width: 13px;
    height: 13px;
    border-radius: 2px;
    border: 2px solid black;
    background-color: white;
  }

  input[type='checkbox']:checked:after {
    content: '';
    position: absolute;
    width: 13px;
    height: 13px;
    border-radius: 2px;
    border: 2px solid black;
    background-color: black;
  }

  label {
    display: block;
    margin-top: -24px;
    margin-left: 20px;
  }
`;
