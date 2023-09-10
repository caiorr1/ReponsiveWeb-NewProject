import React from 'react';
import Header from '../HeaderChat/headerchat'
import MobileScreenSimulation from './styled'; 
import MessageInput from '../MessageInput/MessageInput';

export default function MobileScreen(){
  return (
    <div>
      <MobileScreenSimulation>
        <Header></Header>
        <MessageInput/>
      </MobileScreenSimulation>
    </div>
  );
};
