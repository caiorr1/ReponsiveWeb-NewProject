import React from 'react';
import Header from '../HeaderChat/headerchat'
import MobileScreenSimulation from './styled'; 

export default function MobileScreen(){
  return (
    <div>
      <MobileScreenSimulation>
        <Header></Header>
      </MobileScreenSimulation>
    </div>
  );
};
