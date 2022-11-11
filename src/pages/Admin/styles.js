import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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
    border-radius: 3px;
    font-weight: 600;
    background-color: #f4b860;
    transition: ease-in-out 0.3s;
  }

  form button:hover {
    transform: scale(1.04);
  }

  article {
    margin: 50px 0;
    width: 100%;
    width: 100%;
    max-width: 600px;
  }
  article h2 {
    font-size: 20px;
    text-align: center;
  }

  article div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    margin-top: 10px;
    border-radius: 3px;
    animation-duration: 0.5s;
    animation-name: article-div;
  }

  @keyframes article-div {
    0% {
      opacity: 0;
      transform: scale(0.7);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  article p {
    padding: 0 10px;
  }

  article div button {
    border: none;
    background: #c83e4d;
    color: #ffffff;
    height: 100%;
    width: 60px;
    border-radius: 0 3px 3px 0;
  }
  article div button svg {
    transition: ease-in-out 0.2s;
  }
  article div button svg:hover {
    transform: scale(1.1);
  }
`;

export const Preview = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 10px;
  margin: 20px 0;
  text-align: center;
`;

export const Links = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  margin-top: 10px;
  border-radius: 3px;
  animation-duration: 0.5s;
  animation-name: article-div;
  font-weight: 600;
`;
