import styled from 'styled-components';

export const LinkContainer = styled.a`
  padding: 10px;
  margin: 10px;
  max-width: 600px;
  width: 90%;
  height: 60px;
  border-radius: 3px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ease-in-out 0.2s;

  &:hover {
    transform: scale(1.04);
  }
`;
