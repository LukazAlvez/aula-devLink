import styled from 'styled-components';

export const LogoDiv = styled.img`
  width: 300px;
  padding: 10px;

  @media (max-width: 280px) {
    & {
      width: 250px;
    }
  }
`;
