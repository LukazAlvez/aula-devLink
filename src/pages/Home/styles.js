import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  padding-top: 30px;
  position: relative;
  min-height: 100vh;

  p {
    margin-top: 40px;
  }

  footer {
    position: absolute;
    bottom: 0;
    padding: 30px;
  }
  footer a {
    color: #fff;
  }
`;

export const Main = styled.main`
  padding: 5px;
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Icons = styled.div`
  display: flex;
  margin: 20px 0;
`;
