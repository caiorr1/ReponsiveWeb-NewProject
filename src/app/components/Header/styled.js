import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #1E1B4B;
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
  font-size: 20px;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  color: '#EEF2FF';
  line-height: 5;
  word-wrap: 'break-word';
`;

const Navigation = styled.nav`
  font-family: 'Poppins', sans-serif;
  color: white;
  font-size: 1.1rem;
  cursor: pointer;

  ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;

    li {
      text-decoration: none;
      &:hover {
        text-decoration: none;
        color: white;
      }

      a {
        color: white;
        &:hover {
          text-decoration: none;
          color: white;
        }
      }
    }
  }
`;

const RightAlignedLi = styled.li`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
`;



export { HeaderWrapper, LogoContainer, LogoImage, LogoText, Navigation, RightAlignedLi };