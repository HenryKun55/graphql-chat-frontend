import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  align-items: flex-start;
  flex-direction: column;

`;

export const SendMessageContainer = styled.div`
  margin-top: 20px;
  display: flex;
`

export const LabelUser = styled.span`
  font-size: 14px;
`

export const Input = styled.input`
  display: flex;
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

export const Typing = styled.span`
  display: flex;
  font-size: 12px;
  font-style: italic;
  margin-left: 20px;
`
