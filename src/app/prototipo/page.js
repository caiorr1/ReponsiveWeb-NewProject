
import React from 'react';
import MobileScreen from '../components/MobileScreen/mobilescreen';
import Header from '../components/HeaderChat/headerchat';

export default function Home() {
  return (
    <div>
      <header>
      <MobileScreen>
        <Header/>
      </MobileScreen>
      </header>
    </div>
  );
}