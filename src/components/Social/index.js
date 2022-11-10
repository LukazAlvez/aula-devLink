import { Link } from './styles';

export const Social = ({ url, children }) => {
  return (
    <Link href={url} rel='noopener noreferrer' target='_blank'>
      {children}
    </Link>
  );
};
