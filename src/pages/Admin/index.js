import { Header } from '../../components/Header';
import { Logo } from '../../components/Logo';
import { Input } from '../../components/Input';

import { Container } from './styles';

import { MdAddLink } from 'react-icons/md';

export const Admin = () => {
  return (
    <Container>
      <Header />
      <Logo />
      <form>
        <label>Nome do link.</label>
        <Input placeholder='Digite o nome do link' />
        <label>Link.</label>
        <Input placeholder='Digite o link' type='url' />

        <section>
          <div>
            <label>Fundo do link</label>
            <input type='color' />
          </div>
          <div>
            <label>Cor do link</label>
            <input type='color' />
          </div>
        </section>

        <button>
          Adicionar <MdAddLink size={20} />
        </button>
      </form>
    </Container>
  );
};
