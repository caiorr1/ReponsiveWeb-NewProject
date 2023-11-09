import { HeaderWrapper, LogoContainer, LogoImage, LogoText, Navigation, RightAlignedLi } from './styled';
import BotaoConhecaPlanos from "../Button/button";
import Link from 'next/link'

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
          <li><Link href="/">Home</Link></li>
          <li>Sobre</li>
          <li>Contato</li>
          <li>
            <Link href="/prototipo">Protótipo</Link>
          </li>
          <li>
            <Link href="/pesquisa">Pesquisa</Link>
          </li>
        </ul>
      </Navigation>
    </HeaderWrapper>
  );
}

