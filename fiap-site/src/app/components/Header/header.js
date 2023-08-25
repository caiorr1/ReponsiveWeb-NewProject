import { HeaderWrapper, LogoContainer, LogoImage, LogoText, Navigation } from './styled';
import BotaoConhecaPlanos from "../Button/button";

export default function CabecalhoPadrao() {
  return (
    <HeaderWrapper>
      <LogoContainer>
        <LogoImage src="" alt="Logo" />
        <LogoText>Andromeda</LogoText>
      </LogoContainer>
      <Navigation>
        <ul>
          <li>Home</li>
          <li>Sobre</li>
          <li><BotaoConhecaPlanos text="CONHECER PLANO" /></li>
          <li>Contato</li>
        </ul>
      </Navigation>
    </HeaderWrapper>
  );
}
