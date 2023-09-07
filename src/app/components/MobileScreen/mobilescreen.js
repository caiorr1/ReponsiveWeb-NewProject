import React from 'react';
import styles from './mobilescreen.module.css';


const MobileScreen = ({ children }) => {
    return (
      <div className={styles['mobile-screen-container']}>
        {children}
      </div>
    );
  };
  
  export default MobileScreen;