import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { db } from '../../services/firebaseConection';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';

import { HomeContainer, Main, Icons } from './styles';

import { Logo } from '../../components/Logo';
import { Links } from '../../components/Links';
import { Social } from '../../components/Social';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Home = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const linkRef = collection(db, 'links');
    const queryRef = query(linkRef, orderBy('created', 'asc'));

    onSnapshot(queryRef, snapshot => {
      let list = [];
      snapshot.forEach(doc => {
        list.push({
          id: doc.id,
          name: doc.data().name,
          url: doc.data().url,
          bg: doc.data().bg,
          color: doc.data().color,
        });
        setLinks(list);
      });
    });
  }, []);

  return (
    <HomeContainer>
      <Logo />
      <p>Veja meus links👇</p>
      <Main>
        {links.map((item, index) => (
          <Links key={index} bg={item.bg} color={item.color} url={item.url}>
            {item.name}
          </Links>
        ))}

        <Icons>
          <Social url={'https://www.linkedin.com/in/lucasalves2022'}>
            <FaLinkedin size={32} color='#fff' />
          </Social>
          <Social url={'https://github.com/LukazAlvez'}>
            <FaGithub size={32} color='#fff' />
          </Social>
        </Icons>
      </Main>
      <footer>
        <Link to='/admin'>Painel admin</Link>
      </footer>
    </HomeContainer>
  );
};
