import styled from "styled-components";
import Header from "../Header/Header";
import H1 from "../styled/H1.styled";
import Button from "../styled/Button.styled";
import Image from "../styled/Image.styled";
import PhoneMockUp from "../../assets/images/PhoneMockup.svg";
import {Shadows} from "../../assets/Theme";
import BackgroundImage from "../../assets/images/HeroBackground.svg";

const HeroEl = styled.article`
  padding: 0 7rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  background: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  row-gap: 4rem;
`
const Content = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;
const Title = styled(H1)`
  margin-top: 1rem;
  padding-top: 3rem;
`;
const ImageMockUp = styled(Image)`
  filter: drop-shadow(${Shadows.MobileMockUp});
`;


const Hero = () => {
    return (
        <HeroEl>
            <Header/>
            <Content>
                <span>
                    <Title>Organise projects. Get more done.</Title>
                    <Button size="lg">Get Started</Button>
                </span>
                <ImageMockUp src={PhoneMockUp}/>
            </Content>
        </HeroEl>
    );
};

export default Hero;