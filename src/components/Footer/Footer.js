import styled from "styled-components";
import GooglePlay from "../../assets/images/GooglePlay.svg";
import AppStore from "../../assets/images/AppStore.svg";
import Logo from "../../assets/images/Logo.svg";
import Subtitle2 from "../styled/Subtitle2.styled";
import Body from "../styled/Body.styled";
import Body2 from "../styled/Body2.styled";
import Image from "../styled/Image.styled";
import {Colors} from "../../assets/Theme";

const FooterEl = styled.footer`
  background-color: ${Colors.Default.Black};
  color: ${Colors.Default.White};
  display: flex;
  padding: 3rem 7rem;
`;

const LeftPart = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Row = styled.span`
  display: flex;
  gap: 1rem;
`;

const Nav = styled.nav`
  > a:visited {
    color: ${Colors.Default.White};
  }
`;

const RightPart = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

const Footer = () => {
    return (
        <FooterEl>
            <LeftPart>
                <Image src={Logo} width="32px"/>
                <Row>
                    <Body as="a">Download Now</Body>
                    <Body as="a">License</Body>
                </Row>
                <Nav>
                    <Body as="a" href="#">About</Body>
                    <Body as="a" href="#">Features</Body>
                    <Body as="a" href="#">Pricing</Body>
                    <Body as="a" href="#">Careers</Body>
                    <Body as="a" href="#">Help</Body>
                    <Body as="a" href="#">Privacy Policy</Body>
                </Nav>
                <Body as="small" style={{color: Colors.Text.Gray300}}>
                    © 2020 Landify UI Kit. All rights reserved
                </Body>
            </LeftPart>
            <RightPart>
                <Subtitle2 style={{color: Colors.Text.Gray300}}>Get the App</Subtitle2>
                <Image src={AppStore}/>
                <Image src={GooglePlay}/>
            </RightPart>
        </FooterEl>
    );
};

export default Footer;