import styled from "styled-components";
import AirBnBLogo from "../../assets/images/AirbnbLogo.svg"
import HubspotLogo from "../../assets/images/HubspotLogo.svg"
import GoogleLogo from "../../assets/images/GoogleLogo.svg"
import MicrosoftLogo from "../../assets/images/MicrosoftLogo.svg"
import WalmartLogo from "../../assets/images/WalmartLogo.svg"
import FedExLogo from "../../assets/images/FedExLogo.svg"
import Image from "../styled/Image.styled";

const LogoCloudsEl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem 0;
  row-gap: 2rem;
  
`;
const Divider = styled.span`
  width: 90%;
  height: 0.15rem;

  background: linear-gradient(
          90deg, 
          rgba(192, 204, 218, 0.1) 0%, 
          rgba(192, 204, 218, 0.6) 50.38%, 
          rgba(192, 204, 218, 0.1) 100%);
`;
const LogoContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 2rem;
`;


const LogoClouds = () => {
    return (
        <LogoCloudsEl>
            <Divider/>
            <LogoContainer>
                <Image src={AirBnBLogo}/>
                <Image src={HubspotLogo}/>
                <Image src={GoogleLogo}/>
                <Image src={MicrosoftLogo}/>
                <Image src={WalmartLogo}/>
                <Image src={FedExLogo}/>
            </LogoContainer>
            <Divider/>
        </LogoCloudsEl>
    );
};

export default LogoClouds;