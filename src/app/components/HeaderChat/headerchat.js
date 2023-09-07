import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-logo">
          <img src="" alt="Logo do Chatbot" />
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