import styled from "styled-components";
import Logo from "../../assets/images/DarkLogo.svg"
import GooglePlay from "../../assets/images/GooglePlay.svg"
import AppStore from "../../assets/images/AppStore.svg"
import Image from "../styled/Image.styled";
import {Colors, TextStyles} from "../../assets/Theme";

const HeaderEl = styled.header`
  padding: 1rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`
const LeftPart = styled.span`
  display: flex;
  column-gap: 1rem;
`
const RightPart = styled.span`
  display: flex;
  column-gap: 1rem;
`
const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`
const NavBar = styled.nav`
  display: flex;
  column-gap: 1rem;
  align-items: center;
  color: ${Colors.Text.Gray900};
  
  ${TextStyles.Bundler(TextStyles.Lable.Medium)}
`
const NavItem = styled.a`
  :visited {
    color: ${Colors.Text.Gray900};
  }
  text-decoration: none;
`


const Header = () => {
    return (
        <HeaderEl>
            <LeftPart>
                <LogoContainer>
                    <Image src={Logo}/>
                </LogoContainer>
                <NavBar>
                    <NavItem href="#">About</NavItem>
                    <NavItem href="#">Product</NavItem>
                    <NavItem href="#">Pricing</NavItem>
                    <NavItem href="#">Blog</NavItem>
                    <NavItem href="#">Jobs</NavItem>
                    <NavItem href="#">More</NavItem>
                </NavBar>
            </LeftPart>
            <RightPart>
                <Image src={GooglePlay}/>
                <Image src={AppStore}/>
            </RightPart>
        </HeaderEl>
    );
};

export default Header;