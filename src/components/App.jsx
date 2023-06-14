import { Profile } from 'components/Profile/Profile';
import {Statistics} from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';


const styleTest = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 40,
  color: '#010101'
}

export const App = ({user, statistics, friends, transactions}) => {
  return (
    <>
      <div style={styleTest}>
        <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        />
      </div>
      <div>
        <Statistics title="UPLOAD STATS" 
        statistics={statistics} />
      </div>
      <div>
      <FriendList friends={friends} />
      </div>
      <div>
      <TransactionHistory transactions={transactions} />
      </div>
    </>
  );
};
