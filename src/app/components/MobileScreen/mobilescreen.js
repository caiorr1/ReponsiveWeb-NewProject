import React from 'react';
import Header from '../HeaderChat/headerchat'
import MobileScreenSimulation from './styled'; 
import MessageInput from '../MessageInput/MessageInput';
import MessageSend from '../MessageSended/messagesended'

export default function MobileScreen(){
  return (
    <div>
      <MobileScreenSimulation>
        <Header></Header>
        <MessageSend text="Ola, bom dia, preciso de ajuda." />
        <MessageInput/>
      </MobileScreenSimulation>
    </div>
  );
};
