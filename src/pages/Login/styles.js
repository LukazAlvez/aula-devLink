import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  padding-bottom: 100px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 600px;

  input {
    width: 100%;
    outline: none;
    border: 0;
    border-radius: 3px;
    padding: 10px;
    margin-bottom: 10px;
  }
  button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 3px;
    color: #32373b;
    background-color: #f4b860;
    transition: ease-in 0.3s;
    font-weight: 600;
  }
  button:hover {
    transform: scale(1.04);
  }
`;
