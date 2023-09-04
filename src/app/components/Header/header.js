import { HeaderWrapper, LogoContainer, LogoImage, LogoText, Navigation, RightAlignedLi } from './styled';
import BotaoConhecaPlanos from "../Button/button";

export default function CabecalhoPadrao() {
  return (
    <HeaderWrapper>
      <LogoContainer>
        <LogoImage src={"../images/Logo-Andromeda.png"} alt="LogoAndromeda" />
        <LogoText>Andromeda</LogoText>
        <RightAlignedLi><BotaoConhecaPlanos text="CONHECER PLANO" /></RightAlignedLi>
      </LogoContainer>
      <Navigation>
        <ul>
          <li>Home</li>
          <li>Sobre</li>
          <li>Contato</li>
          <li>Protótipo</li>
        </ul>
      </Navigation>
    </HeaderWrapper>
  );
}
