"use client"
import styled from 'styled-components';


const MobileScreenSimulation = styled.div`
width: 375px;
height: 667px;
border: 1px solid #595959;
background-color: #fff;
border-radius: 15px;
overflow: hidden;
box-shadow: 0 0 15px rgba(0, 0, 0, 1);
display: flex;
flex-direction: column;
margin: 0 auto;
position: relative;
align: center;

@media (max-width: 768px) {
  width: 90%;
  height: auto;
  max-height: 100%;
}

`;

export default MobileScreenSimulation;

