import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  align-items: center;
`;

export const Input = styled.input`

`

export const Button = styled.button`
  display: inline-block;
  padding: 0.3em 1.2em;
  border: 0;
  margin-left: 10px;
  border-radius: 2em;
  font-family: 'Roboto',sans-serif;
  color: #FFFFFF;
  background-color: #4eb5f1;
  text-align: center;
  transition:  all 0.2s;

  &:hover {
    background-color:#4095c6;
  }
`
