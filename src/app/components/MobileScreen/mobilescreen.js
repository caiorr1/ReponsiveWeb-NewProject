import React from 'react';
import Header from '../HeaderChat/headerchat'
import MobileScreenSimulation from './styled'; 
import MessageInput from '../MessageInput/MessageInput';
import ChatMessage from '../MessageSended/messagesended'


export default function MobileScreen(){
  return (
    <div>
      <MobileScreenSimulation>
        <Header></Header>
        <ChatMessage/>
        <ChatMessage/>
        <MessageInput/>
      </MobileScreenSimulation>
    </div>
  );
};
