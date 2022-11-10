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
    color: #32373b;
    padding: 10px;
    background-color: #f4b860;
    border-radius: 3px;
    transition: ease-in-out 0.3s;
    font-weight: 600;
  }

  .link:hover {
    transform: scale(1.03);
    color: #171738;
  }

  @media screen and (max-width: 520px) {
    h1 {
      font-size: 25px;
    }

    p {
      font-size: 12px;
    }
  }
`;
