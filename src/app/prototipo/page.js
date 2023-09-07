
import React from 'react';
import MobileScreen from '../components/MobileScreen/mobilescreen';
import Header from '../components/HeaderChat/headerchat';

export default function Home() {
  return (
    <div className="container">
      <h1></h1>
      <MobileScreen>
        <Header />
      </MobileScreen>
    </div>
  );
}