import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px;
  color: #fff;

  form {
    margin-top: 30px;
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
  }

  form label {
    font-size: 15px;
    margin-bottom: 5px;
  }

  section {
    display: flex;
  }

  section div {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
  }

  section div input {
    border: none;
    width: 40px;
    height: 40px;
    background: none;
  }

  form button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 10px;
    border: none;
    font-weight: 600;
    background-color: #f4b860;
    transition: ease-in-out 0.3s;
  }

  form button:hover {
    transform: scale(1.04);
  }
`;
