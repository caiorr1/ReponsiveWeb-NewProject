
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
          <span>Portinho</span>
        </HeaderLogo>
        <HeaderSubtext>
          <p>Suporte &gt; Chat</p>
        </HeaderSubtext>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default HeaderChat;