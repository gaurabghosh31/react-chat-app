import {StreamChat} from 'stream-chat';
import {Chat} from 'stream-chat-react';
import Cookies from 'universal-cookie';

import './App.css';
import {ChannelContainer, ChannelListContainer} from './components/import';

const API_KEY = ''; //FETCH FROM ENV -- TODO
const client = StreamChat.getInstance(API_KEY);

function App() {
  return (
    <div className="app__wrapper">
      <Chat client = {client} theme='dark'>
        <ChannelListContainer/>

        <ChannelContainer/>
      </Chat>
    </div>
  );
}

export default App;
