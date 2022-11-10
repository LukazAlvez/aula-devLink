import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import { Logo } from '../../components/Logo';
import { Input } from '../../components/Input';
import { Main, Form } from './styles';

import { auth } from '../../services/firebaseConection';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();

    if (email === '' || password === '') {
      toast.error('Preencha todos os campos.');
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success('Bem vindo de volta🖖');
        navigate('/admin', { replace: true });
      })
      .catch(() => {
        toast.error('Error ao tentar fazer o login.');
      });
  };

  return (
    <Main>
      <Logo />
      <Form onSubmit={handleLogin}>
        <Input
          type='email'
          placeholder='Digite seu email...'
          value={email}
          onChange={e => {
            setEmail(e.target.value);
          }}
        />
        <Input
          type='password'
          placeholder='Digite sua senha...'
          autoComplete='on'
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
        <button type='submit'>Entrar</button>
      </Form>
    </Main>
  );
};
