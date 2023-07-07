import styled from 'styled-components';

export const Button = styled.button`
  background-color: #000;
  color: #fff;
  font-size: 25px;
  border: none;
  border-radius: 10px;
  padding: 15px;
  min-height: 40px;
  min-width: 150px;
  margin-right: 10px;

  &: hover {
    outline-color: transparent;
    outline-style: solid;
    box-shadow: 0 0 0 4px #fff;
    transition: 0.7s;
  }
`;
