import { Container } from './styles';

import { Link } from 'react-router-dom';
import { Logo } from '../../components/Logo';

export const Error = () => {
  return (
    <Container>
      <Logo />
      <h1>Pagina não encontrada!</h1>
      <p>Esta pagina que você está procurando não existe.</p>
      <Link to= '/' className='link'>
        Voltar para home.
      </Link>
    </Container>
  );
};
