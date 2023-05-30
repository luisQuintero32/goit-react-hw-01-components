import { Perfil } from 'components/Perfil/Perfil';
import {Statistics} from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';


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
        <Perfil user={data} />
      </div>
      <div>
        <Statistics user={data}/>
      </div>
      <div>
        <FriendList user={data}/>
      </div>
    </>
  );
};
