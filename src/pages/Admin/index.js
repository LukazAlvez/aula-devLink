import { useState, useEffect } from 'react';

import { Header } from '../../components/Header';
import { Logo } from '../../components/Logo';
import { Input } from '../../components/Input';

import { Container, Links, Preview } from './styles';

import { MdAddLink } from 'react-icons/md';
import { FiTrash2 } from 'react-icons/fi';

import { toast } from 'react-toastify';

import { db } from '../../services/firebaseConection';
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  orderBy,
  doc,
  deleteDoc,
} from 'firebase/firestore';

export const Admin = () => {
  const [nameInput, setNameInput] = useState('');
  const [urlInput, setUrlInput] = useState('');
  const [backgroundColorInput, setBackgroundColorInput] = useState('#ffffff');
  const [textColorInput, setTextColorInput] = useState('#000000');

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

  const handleRegister = e => {
    e.preventDefault();

    if (nameInput === '' || urlInput === '') {
      toast.warn('Preencha todos os campos');
      return;
    }

    addDoc(collection(db, 'links'), {
      name: nameInput,
      url: urlInput,
      bg: backgroundColorInput,
      color: textColorInput,
      created: new Date(),
    })
      .then(() => {
        setNameInput('');
        setUrlInput('');
        toast.success('Link Adicionado com sucesso!');
      })
      .catch(error => {
        console.log(error);
        toast.error('Erro ao salvar o link.');
      });
  };

  const handleDelete = async id => {
    const docRef = doc(db, 'links', id);
    await deleteDoc(docRef);
  };

  return (
    <Container>
      <Header />
      <Logo />
      <form onSubmit={handleRegister}>
        <label>Nome do link.</label>
        <Input
          value={nameInput}
          onChange={e => {
            setNameInput(e.target.value);
          }}
        />
        <label>Link.</label>
        <Input
          type='url'
          value={urlInput}
          onChange={e => {
            setUrlInput(e.target.value);
          }}
        />

        <section>
          <div>
            <label>Fundo do link</label>
            <input
              type='color'
              value={backgroundColorInput}
              onChange={e => {
                setBackgroundColorInput(e.target.value);
              }}
            />
          </div>
          <div>
            <label>Cor do link</label>
            <input
              type='color'
              value={textColorInput}
              onChange={e => {
                setTextColorInput(e.target.value);
              }}
            />
          </div>
        </section>

        {nameInput !== '' && (
          <Preview>
            <label>Veja como está ficando👇</label>
            <Links style={{ backgroundColor: backgroundColorInput }}>
              <p style={{ color: textColorInput }}>{nameInput}</p>
            </Links>
          </Preview>
        )}

        <button type='submit'>
          Adicionar <MdAddLink size={20} />
        </button>
      </form>
      <article>
        <h2>Meus links</h2>

        {links.map((item, index) => (
          <div
            key={index}
            style={{ backgroundColor: item.bg, color: item.color }}
          >
            <p>{item.name}</p>
            <button onClick={() => handleDelete(item.id)}>
              <FiTrash2 size={20} />
            </button>
          </div>
        ))}
      </article>
    </Container>
  );
};
