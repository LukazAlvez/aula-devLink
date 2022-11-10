import logoSrc from '../../assets/logo.png';

import { LogoDiv } from './styles';

import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to='/'>
      <LogoDiv src={logoSrc} />
    </Link>
  );
};
