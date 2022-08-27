import styled from "styled-components";
import GooglePlay from "../../assets/images/GooglePlay.svg";
import AppStore from "../../assets/images/AppStore.svg";
import PhoneMockUp from "../../assets/images/PhoneMockup2.svg";
import PhoneMockUp2 from "../../assets/images/PhoneMockup3.svg";
import Subtitle2 from "../styled/Subtitle2.styled";
import Image from "../styled/Image.styled";
import H2 from "../styled/H2.styled";
import Lead from "../styled/Lead.styled";
import {Colors, Shadows} from "../../assets/Theme";

const CTAEl = styled.article`
  padding: 0 7rem;
  background-color: ${Colors.Brand.Turquoise};
  display: flex;
  gap: 3rem;
  overflow: hidden;
`;

const LeftColumn = styled.div`
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  flex: 1;
  
  ${Lead} {
    margin-bottom: 2.5rem;
    
  }
`;

const GetApp = styled(Subtitle2)`
  display: block;
  margin-bottom: 0.5rem;
`;

const RightColumn = styled.div`
  flex: 1;
  position: relative;
`;

const Image1 = styled(Image)`
  position: absolute;
  left: 0;
  top: 0;
  transform: translateY(-20%);
  filter: drop-shadow(${Shadows.MobileMockUp});
`;

const Image2 = styled(Image)`
  position: absolute;
  right: 20%;
  bottom: 0;
  transform: translateY(25%);
  filter: drop-shadow(${Shadows.MobileMockUp});
`;

const CTA = () => {
    return (
        <CTAEl>
            <LeftColumn>
                <H2>Manage your projects from your mobile</H2>
                <Lead>
                    Download the app to manage your projects, keep track of the progress and complete tasks without
                    procastinating. Stay on track and complete on time!
                </Lead>
                <span>
                    <GetApp>Get the App</GetApp>
                    <span>
                        <Image src={GooglePlay} style={{marginRight: "1rem"}}/>
                        <Image src={AppStore}/>
                    </span>
                </span>
            </LeftColumn>
            <RightColumn>
                <Image1 src={PhoneMockUp}/>
                <Image2 src={PhoneMockUp2}/>
            </RightColumn>
        </CTAEl>
    );
};

export default CTA;