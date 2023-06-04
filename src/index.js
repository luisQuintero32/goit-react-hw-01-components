import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import user from './data/user.json';
import transaction from '../src/data/transactions.json';
import friends from './data/friends.json';
import datas from './data/data.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App data={[user, transaction, friends, datas]}/>
  </React.StrictMode>
);
