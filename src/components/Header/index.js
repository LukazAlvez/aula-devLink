import { auth } from '../../services/firebaseConection';
import { signOut } from 'firebase/auth';

import { MyHeader } from './styles';

import { BiLogOut } from 'react-icons/bi';

export const Header = () => {
  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <MyHeader>
      <button onClick={handleLogout}>
        <BiLogOut color='#C83E4D' size={35} />
      </button>
    </MyHeader>
  );
};
