import { useContext, useRef } from 'react';
import { useFlag } from '@unleash/proxy-client-react';

import { Link } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';

const Header = (): JSX.Element => {
  const { user } = useContext(UserContext);
  const cardsEnabled = useFlag('cardsEnabled');
  const transactionsEnabled = useFlag('transactionsEnabled');
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <header className='flex flex-v-center flex-space-between'>
      <div className='header-profile flex flex-1'>
        <Link to='/profile'>
          <div
            className='profile-photo'
            style={{
              backgroundImage:
                user.gender === 'Male'
                  ? `url("images/profile-man.jpg")`
                  : `url("images/meme2.jpg")`,
            }}
          />
        </Link>
      </div>
      <div className='header-center'>
        <div className='header-search flex flex-v-center'>
          <span
            tabIndex={0}
            role='button'
            onKeyDown={() => {}}
            onClick={() => {
              inputRef.current?.focus();
            }}
            className='material-symbols-outlined no-select'
          >
            search
          </span>
          <input ref={inputRef} type='text' name='search' id='search' placeholder='Search' />
        </div>
      </div>
      <div className='header-buttons flex flex-1 flex-v-center flex-end'>
        {transactionsEnabled && (
          <Link to='/transactions' className='header-button flex flex-v-center flex-h-center'>
            <span className='material-symbols-outlined'>equalizer</span>
          </Link>
        )}
        {cardsEnabled && (
          <Link to='/cards' className='header-button flex flex-v-center flex-h-center'>
            <span className='material-symbols-outlined'>credit_card</span>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
