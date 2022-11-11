import styled from 'styled-components';

export const MyHeader = styled.div`
  height: 60px;
  padding: 0 20px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 720px;
  margin-top: 20px;
  border-radius: 3px;

  button {
    background: none;
    border: none;
    padding: 0 20px;
  }
`;

export const NavHeader = styled.nav`
  a {
    padding: 0 20px;
    color: #222222;
    font-weight: 700;
    transition: ease-in-out 0.3s;
  }
  a:hover {
    color: #f4b860;
  }
`;
