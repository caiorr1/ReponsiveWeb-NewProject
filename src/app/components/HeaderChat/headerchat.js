import React from 'react';
import {BotImage} from './styled';
const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-logo">
          <BotImage src="../images/bot-1.jpg" alt="Logo do Chatbot" />
          <span>Chatbot</span>
        </div>
        <div className="header-subtext">
          <p>Suporte {'>'} Chat</p>
        </div>
      </div>
    </header>
  );
};

export default Header;