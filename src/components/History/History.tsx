import { Link } from 'react-router-dom';

// components
import HistoryLine from './HistoryLine';

// interfaces
interface Iprops {
  date?: string;
  detailed?: boolean;
  dateBalance?: string;
}

const History = ({
  date = undefined,
  detailed = false,
  dateBalance = undefined,
}: Iprops): JSX.Element => (
  <>
    {detailed && (
      <div className='history-header flex flex-v-center flex-space-between'>
        <span className='text-shadow no-select date'>{date}</span>
        <span className='text-shadow no-select amount flex flex-end'>{dateBalance}</span>
      </div>
    )}
    <div className='history'>
      <HistoryLine
        item={{
          id: 1,
          icon: 'coffee',
          time: '08:10',
          name: 'Coffee',
          amount: 250,
          color: 'purple',
          currencySymbol: 'XAF ',
        }}
      />
      <HistoryLine
        item={{
          id: 2,
          icon: 'restaurant',
          time: '12:45',
          name: 'Restaurant booking',
          amount: 25000.0,
          color: 'yellow',
          currencySymbol: 'XAF ',
        }}
      />
      <HistoryLine
        item={{
          id: 3,
          icon: 'sync',
          time: '11:46',
          name: 'Subscription payment',
          amount: 4999.99,
          color: 'orange',
          currencySymbol: 'XAF ',
        }}
      />
      <HistoryLine
        item={{
          id: 4,
          icon: 'water',
          time: '10:51',
          name: 'Water bill',
          amount: 540.21,
          color: 'gray',
          currencySymbol: 'XAF ',
        }}
      />
      <HistoryLine
        item={{
          id: 5,
          icon: 'local_activity',
          time: '09:14',
          name: 'Supermarket',
          amount: 125800.0,
          color: 'blue',
          currencySymbol: 'XAF ',
        }}
      />
      {/*<HistoryLine*/}
      {/*  item={{*/}
      {/*    id: 5,*/}
      {/*    icon: 'local_activity',*/}
      {/*    time: '09:14',*/}
      {/*    name: 'Tickets',*/}
      {/*    amount: 78.12,*/}
      {/*    color: 'blue',*/}
      {/*    currencySymbol: 'XAF ',*/}
      {/*  }}*/}
      {/*/>*/}
      <HistoryLine
        item={{
          id: 5,
          icon: 'bolt',
          time: '07:33',
          name: 'Electricty bill',
          amount: 1900.55,
          color: 'green',
          currencySymbol: 'XAF ',
        }}
      />
      {!detailed && (
        <Link to='/transactions' className='history-line bottom flex flex-v-center flex-h-center'>
          See all
          <span className='material-symbols-outlined'>keyboard_arrow_right</span>
        </Link>
      )}
    </div>
  </>
);

export default History;
