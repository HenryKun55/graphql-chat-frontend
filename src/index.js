import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks'
import client from './setup'

import App from './App';
import * as serviceWorker from './serviceWorker';
  
ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
    , 
    document.getElementById('root')
);

serviceWorker.unregister();
