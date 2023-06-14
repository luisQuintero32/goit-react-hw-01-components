import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import user from './data/user.json';
import transactions from '../src/data/transactions.json';
import friends from './data/friends.json';
import statistics from './data/data.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App user={user} statistics={statistics} friends={friends} transactions={transactions}/>
  </React.StrictMode>
);
