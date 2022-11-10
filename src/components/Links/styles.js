import styled from 'styled-components';

export const LinkContainer = styled.a`
  padding: 10px;
  margin: 10px;
  background-color: lightblue;
  max-width: 600px;
  width: 90%;
  border-radius: 3px;
  color: #171738;
  font-weight: 700;
  text-align: center;
  transition: ease-in-out 0.2s;

  &:hover {
    transform: scale(1.04);
  }
`;
