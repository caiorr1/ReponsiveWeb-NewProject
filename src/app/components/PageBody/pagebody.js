import { PageBodyWrapper, ContentWrapper, Title, Description1, Description2, Logo } from './styled';
import BotaoConhecaPlanos from "../Button/button";

export default function BodyPadrao() {
    return (
      <PageBodyWrapper>
        <ContentWrapper>
        <Title>AndromedaSys</Title>
        <Description1>{"A solução da sua dor você a encontra aqui!"}</Description1>
        <br />
        <br />
        <Description2>{"Faça um orçamento sem compromisso!"}</Description2>
        <BotaoConhecaPlanos text="CONHECER PLANO" />
        </ContentWrapper>
        <Logo src={"../images/LogoNome-Andromeda.png"} alt="LogoAndromeda" />
      </PageBodyWrapper>
    );
  };  