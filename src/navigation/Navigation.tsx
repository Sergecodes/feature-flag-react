import { Routes, Route } from 'react-router-dom';

// components
import Add from '../pages/Add';
import Home from '../pages/Home';
import Cards from '../pages/Cards';
import SignIn from '../pages/SignIn';
import Profile from '../pages/Profile';
import Savings from '../pages/Savings';
import Transactions from '../pages/Transactions';
import { useFlag } from '@unleash/proxy-client-react';

const Navigation = (): JSX.Element => {
  const cardsEnabled = useFlag('cardsEnabled');
  const transactionsEnabled = useFlag('transactionsEnabled');

  return (
    <Routes>
      <Route path='/' element={<SignIn />} />
      <Route path='/add' element={<Add />} />
      <Route path='/home' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/savings' element={<Savings />} />
      {cardsEnabled && <Route path='/cards' element={<Cards />} />}
      {transactionsEnabled && <Route path='/transactions' element={<Transactions />} />}
    </Routes>
  );
};

export default Navigation;
