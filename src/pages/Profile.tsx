import { Link } from 'react-router-dom';

// components
import Layout from '../components/Layout/Layout';
import Divider from '../components/Divider/Divider';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';

const Profile = (): JSX.Element => {
  const { user } = useContext(UserContext);

  return (
    <Layout>
      <Divider />

      <h1 className='title'>Profile</h1>

      <div
        className='account-photo'
        style={{
          backgroundImage:
            user.gender === 'Male' ? `url("images/profile-man.jpg")` : `url("images/meme2.jpg")`,
        }}
      />

      <div className='center'>
        <h2>{user.username}</h2>
        <p className='flex flex-v-center flex-h-center'>
          @{user.username.toLowerCase()} &nbsp;
          <span className='material-symbols-outlined'>qr_code</span>
        </p>
      </div>

      <Divider />

      <div className='account'>
        <Link to='/home' className='flex flex-v-center'>
          <span className='material-symbols-outlined'>support</span>
          Home
        </Link>
        <Link to='/profile' className='flex flex-v-center'>
          <span className='material-symbols-outlined'>account_circle</span>
          Account
        </Link>
        <Link to='/profile' className='flex flex-v-center flex-space-between'>
          <div className='flex flex-v-center flex-h-center'>
            <span className='material-symbols-outlined'>inbox</span>
            Inbox
          </div>
          <span className='notification flex flex-v-center flex-h-center'>4</span>
        </Link>
        <Link to='/profile' className='flex flex-v-center'>
          <span className='material-symbols-outlined'>school</span>
          Support
        </Link>
      </div>

      <Divider />
      <Divider />

      <div className='account'>
        <Link to='/profile' className='flex flex-v-center'>
          <span className='material-symbols-outlined'>token</span>
          About us
        </Link>
        <Link to='/' className='flex flex-v-center'>
          <span className='material-symbols-outlined'>power_settings_new</span>
          Sign out
        </Link>
      </div>

      <Divider />

      <footer className='center no-select'>
        v.1.0.12
        <br />
        Banking Ltd.
      </footer>

      <Divider />
    </Layout>
  );
};

export default Profile;
