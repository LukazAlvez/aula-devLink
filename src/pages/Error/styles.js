import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-bottom: 150px;

  h1 {
    font-size: 40px;
    color: #fff;
    margin-top: 20px;
  }

  p {
    color: #fff;
    font-size: 18px;
    margin-bottom: 30px;
  }

  .link {
    color: #fff;
    padding: 10px 10px;
    background-color: #171738;
    border-radius: 3px;
    transition: ease-in-out 0.3s;
  }

  .link:hover {
    transform: scale(1.03);
    background-color: #8ef9f3;
    color: #171738;
  }

  @media (max-width: 520px) {
    h1 {
      font-size: 25px;
    }

    p {
      font-size: 12px;
    }
  }
`;
