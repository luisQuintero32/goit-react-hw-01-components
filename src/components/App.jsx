import { Perfil } from 'components/Perfil/Perfil';
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

export const App = ({data}) => {
  return (
    <>
      <div style={styleTest}>
        <Perfil user={data[0]} />
      </div>
      <div>
        <Statistics user={data[3]}/>
      </div>
      <div>
        <FriendList user={data[2]}/>
      </div>
      <div>
        <TransactionHistory user={data[1]}/>
      </div>
    </>
  );
};
