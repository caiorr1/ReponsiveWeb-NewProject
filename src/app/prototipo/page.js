'use client'
import React from 'react';
import MobileScreen from '../components/MobileScreen/mobilescreen';

export default function Home() {

  const bodyStyles = {
    background: '#7AB5CB',
  };


  return (
  <body style={bodyStyles}>
      <div>
        <MobileScreen>
        </MobileScreen>
    </div>
  </body>

  );
}