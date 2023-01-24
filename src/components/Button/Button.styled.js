import styled from 'styled-components';

export const Button = styled.button`
 
  display: block;
  padding: 5px 20px;
  cursor: pointer;
  background-color: white;
  color: black;
  border: 2px solid #92abe1;
  border-radius: 4px;
  box-shadow: 0 8px 5px 0 rgba(132, 126, 126, 0.2),
    0 2px 50px 0 rgba(0, 0, 0, 0.1);
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  &:hover,
  &:focus {
    background-color: #303f9f;
    color: white;
  }
`;
