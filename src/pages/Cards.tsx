// components
import Card from '../components/Card/Card';
import Layout from '../components/Layout/Layout';
import History from '../components/History/History';
import Divider from '../components/Divider/Divider';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';

const Transactions = (): JSX.Element => {
  const { user } = useContext(UserContext);

  return (
    <Layout>
      <Divider />

      <h1 className='title no-select'>Cards</h1>

      <div className='cards'>
        <Card
          number='5244 2150 8252 ****'
          cvcNumber='824'
          validUntil='10 / 30'
          cardHolder={user.username.toUpperCase()}
        />
      </div>

      <Divider />

      <History detailed date='December 10' dateBalance='-XAF 127.78' />

      <Divider />
    </Layout>
  );
};

export default Transactions;
