import { LinkContainer } from './styles';

export const Links = ({ children, url, bg, color }) => {
  return (
    <LinkContainer
      href={url}
      target='_blank'
      style={{ backgroundColor: bg, color: color }}
    >
      {children}
    </LinkContainer>
  );
};
