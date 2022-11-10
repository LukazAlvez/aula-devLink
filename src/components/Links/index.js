import { LinkContainer } from './styles';

export const Link = ({ children }) => {
  return (
    <LinkContainer href='#' target='_blank'>
      {children}
    </LinkContainer>
  );
};
