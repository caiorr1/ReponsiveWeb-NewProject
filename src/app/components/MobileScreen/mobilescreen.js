import React from 'react';
import Header from '../HeaderChat/headerchat'
import MobileScreenSimulation from './styled'; 
import MessageInput from '../MessageInput/MessageInput';
import MessageSend from '../Message/messagesend'
import MessageReceive from '../Message/messagereceived'


export default function MobileScreen(){
  return (
    <div className="mobile-screen">
      <MobileScreenSimulation>
        <Header></Header>
        <MessageReceive text="Bem-vindo ao Sistema Andrômeda de Suporte! No que posso ajudar?" senderImageUrl='/images/bot-1.jpg'/>
        <MessageSend text="Gostaria de solicitar um guincho."/>
        <MessageReceive text="Certo! Para continuarmos insira o número de sua apólice:" senderImageUrl='/images/bot-1.jpg'/>
        <MessageInput/>
      </MobileScreenSimulation>
    </div>
  );
};
