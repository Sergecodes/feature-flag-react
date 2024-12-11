import { createContext } from 'react';

export interface User {
  username: string;
  email: string;
  country: string;
  gender: string;
}

export const defaultUser = {
  country: 'Cameroon',
  email: 'sergedurand205@gmail.com',
  gender: 'Male',
  username: 'Serge-Durand',
};

export interface UserContextInfo {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

export default createContext<UserContextInfo>({
  user: { country: '', email: '', gender: '', username: '' },
  setUser: (value: ((prevState: User) => User) | User) => {},
});
