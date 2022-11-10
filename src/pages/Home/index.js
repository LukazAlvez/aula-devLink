import { HomeContainer, Main, Footer } from './styles';

import { Logo } from '../../components/Logo';
import { Link } from '../../components/Links';
import { Social } from '../../components/Social';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Home = () => {
  return (
    <HomeContainer>
      <Logo />
      <p>Veja meus links👇</p>
      <Main>
        <Link>Meu Github🤙</Link>
        <Link>Meu instagram</Link>
        <Footer>
          <Social url={'https://www.linkedin.com/in/lucasalves2022'}>
            <FaLinkedin size={32} color='#fff' />
          </Social>
          <Social url={'https://github.com/LukazAlve'}>
            <FaGithub size={32} color='#fff' />
          </Social>
        </Footer>
      </Main>
    </HomeContainer>
  );
};
