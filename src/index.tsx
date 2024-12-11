import ReactDOM from 'react-dom/client';
import { FlagProvider } from '@unleash/proxy-client-react';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { defaultUser } from './contexts/UserContext';

const config = {
  url: process.env.REACT_APP_UNLEASH_FRONTEND_API_URL!, // Your front-end API URL or the Unleash proxy's URL (https://<proxy-url>/proxy)
  clientKey: process.env.REACT_APP_UNLEASH_CLIENT_KEY!, // A client-side API token OR one of your proxy's designated client keys (previously known as proxy secrets)
  refreshInterval: parseInt(process.env.REACT_APP_UNLEASH_REFRESH_INTERVAL || '5'), // How often (in seconds) the client should poll the proxy for updates
  appName: process.env.REACT_APP_UNLEASH_APP_NAME || 'banking-frontend', // The name of your application. It's only used for identifying your application
};

console.log('config', config);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <BrowserRouter>
    <FlagProvider config={{ ...config, context: { properties: defaultUser } }}>
      <App />
    </FlagProvider>
  </BrowserRouter>
);
