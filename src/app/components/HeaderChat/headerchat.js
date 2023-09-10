
import React from 'react';
import {
  HeaderContainer,
  HeaderContent,
  HeaderLogo,
  HeaderSubtext,
} from './styled';

const HeaderChat = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLogo>
          <img src="/images/bot-1.jpg" alt="Logo do Chatbot" />
          <span style={{ color: '#111827' }}>Chatbot</span>
        </HeaderLogo>
        <HeaderSubtext>
          <p className="uppercase">Suporte &gt; Chat</p>
        </HeaderSubtext>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default HeaderChat;