import Navigation from './navigation/Navigation';
import UserContext, { defaultUser, User } from './contexts/UserContext';
import { useState } from 'react';

const App = (): JSX.Element => {
  const [user, setUser] = useState<User>(defaultUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Navigation />
    </UserContext.Provider>
  );
};

export default App;
