import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #333;
  color: white;
  padding: 1rem;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 120px;
  height: 120px;
  margin-right: 10px;
`;

const LogoText = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Navigation = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }

  li {
    cursor: pointer;
    align-items: center;
  }
`;

const RightAlignedLi = styled.li`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
`;



export { HeaderWrapper, LogoContainer, LogoImage, LogoText, Navigation, RightAlignedLi };