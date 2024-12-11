// components
import Layout from '../components/Layout/Layout';
import History from '../components/History/History';
import Divider from '../components/Divider/Divider';

const Transactions = (): JSX.Element => (
  <Layout>
    <Divider />

    <h1 className='title no-select'>Transactions</h1>

    <History detailed date='December 10' dateBalance='-XAF 127.78' />

    <Divider />

    <History detailed date='December 9' dateBalance='-XAF 970.23' />

    <Divider />
  </Layout>
);

export default Transactions;
