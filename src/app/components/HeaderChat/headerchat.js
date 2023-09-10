import React from 'react';
import { HeaderContainer, HeaderContent, HeaderLogo, HeaderSubtext } from './styled';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLogo>
          <img src="" alt="Logo do Chatbot" />
          <span>Chatbot</span>
        </HeaderLogo>
        <HeaderSubtext>
          <p>Suporte {'>'} Chat</p>
        </HeaderSubtext>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;