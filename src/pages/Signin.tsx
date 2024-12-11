import { useNavigate } from 'react-router-dom';

// components
import Input from '../components/Form/Input';
import Button from '../components/Form/Button';
import React, { useContext, useState } from 'react';
import UserContext, { defaultUser, User } from '../contexts/UserContext';
import { useUnleashContext } from '@unleash/proxy-client-react';

const Signin = (): JSX.Element => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const updateUnleashContext = useUnleashContext();
  const [formValues, setFormValues] = useState<User>(defaultUser);

  /**
   * Handles the form submission event by preventing the default behavior and navigating to the home page.
   * @param {React.FormEvent} e - The form submission event.
   */
  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setUser(formValues);
    await updateUnleashContext({ properties: { ...formValues } });
    navigate('/home', { replace: true });
  };

  const handleChange = (event: any): void => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  return (
    <div className='flex flex-v-center flex-h-center h-full'>
      <div className='bg' />
      <div className='text'>
        <h1 className='text-shadow'>Hello! 👋</h1>
        <p className='text-shadow'>Please sign in to your account</p>

        <form method='post' action='/' className='form' noValidate onSubmit={handleSubmit}>
          <div className='form-line'>
            <div className='label-line'>
              <label htmlFor='username' className='text-shadow'>
                Username
              </label>
            </div>
            <Input
              onChange={handleChange}
              required
              tabIndex={0}
              name='username'
              type='text'
              autoComplete={false}
              placeholder='Please enter your username'
            />
          </div>
          <div className='form-line'>
            <div className='label-line'>
              <label htmlFor='email' className='text-shadow'>
                Email
              </label>
            </div>
            <Input
              onChange={handleChange}
              required
              tabIndex={0}
              name='email'
              type='email'
              autoComplete={false}
              placeholder='Please enter your email'
            />
          </div>
          <div className='form-line'>
            <div className='label-line' style={{ display: 'inline-block', marginRight: '2em' }}>
              <label htmlFor='country' className='text-shadow'>
                Country
              </label>
            </div>
            <select
              id={'country'}
              className={'form-select'}
              name='country'
              value={formValues.country}
              onChange={handleChange}
            >
              <option value={'Cameroon'}>Cameroon</option>
              <option value={'South Sudan'}>South Sudan</option>
              <option value={'Ivory Coast'}>Ivory Coast</option>
            </select>
          </div>
          <div className='form-line'>
            <div className='label-line' style={{ display: 'inline-block', marginRight: '2em' }}>
              <label htmlFor='gender' className='text-shadow'>
                Gender
              </label>
            </div>
            <select
              className={'form-select'}
              id={'gender'}
              name={'gender'}
              value={formValues.gender}
              onChange={handleChange}
            >
              <option value={'M'}>Male</option>
              <option value={'F'}>Female</option>
            </select>
          </div>
          <div className='form-line'>
            <Button type='submit' text='Sign in' tabIndex={0} />
          </div>
        </form>

        {/*<div className='links'>*/}
        {/*  <a href='/' className='text-shadow'>*/}
        {/*    Click here*/}
        {/*  </a>*/}
        {/*  &nbsp;*/}
        {/*  <span className='text-shadow'>if you don&apos;t have an account</span>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default Signin;
