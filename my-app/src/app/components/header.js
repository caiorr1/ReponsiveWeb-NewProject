import styled from 'styled-components';

const ButtonWrapper = styled.div`
  width: 1136px;
  height: 60px;
  position: relative;
`;

const PinkBox = styled.div`
  padding: 8px 16px;
  left: 965px;
  top: 10px;
  position: absolute;
  background: #EC4899;
  border-radius: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  cursor: pointer;
`;

const ButtonText = styled.div`
  text-align: center;
  color: white;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 500;
  text-transform: uppercase;
  line-height: 24px;
  word-wrap: break-word;
`;

const GradientBox = styled.div`
  width: 170px;
  height: 40px;
  left: 0;
  top: 10px;
  position: absolute;
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  left: 0;
  top: 0;
  position: absolute;
`;

const IconBackground = styled.div`
  width: 37.58px;
  height: 35.95px;
  left: 1.26px;
  top: 2px;
  position: absolute;
  background: white;
`;

const GradientBackground = styled.div`
  width: 37.58px;
  height: 36px;
  left: 1.26px;
  top: 2px;
  position: absolute;
  background: linear-gradient(180deg, #8B5CF6 0%, #EC4899 47%, #EC4899 57%, #3B82F6 100%);
`;

const TitleText = styled.div`
  left: 48px;
  top: 8px;
  position: absolute;
  color: #EEF2FF;
  font-size: 20px;
  font-family: 'Poppins';
  font-weight: 500;
  line-height: 24px;
  word-wrap: break-word;
`;

const ButtonConhecerPlano = () => {
  return (
    <ButtonWrapper>
      <PinkBox>
        <ButtonText>Conhecer Plano</ButtonText>
      </PinkBox>
      <GradientBox>
        <IconWrapper>
          <IconBackground />
          <GradientBackground />
        </IconWrapper>
        <TitleText>Andromeda</TitleText>
      </GradientBox>
    </ButtonWrapper>
  );
};

export default ButtonConhecerPlano;