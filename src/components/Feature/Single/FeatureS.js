import styled from "styled-components";
import PhoneMockUp from "../../../assets/images/PhoneMockup.svg"
import Image from "../../styled/Image.styled";
import H3 from "../../styled/H3.styled";
import Lead from "../../styled/Lead.styled";
import LinkLabeledIcon from "../../styled/LinkLabeledIcon.styled";
import {Colors} from "../../../assets/Theme";

const FeatureSEl = styled.article`
  display: flex;
  align-items: center;
  padding: 3rem 7rem;
  gap: 2rem;
`;

const ImageContainer = styled.span`
  border-radius: 8px;
  background-color: ${Colors.Brand.Purple100};
  position: relative;
  height: 540px;
  min-width: 540px;
  overflow: hidden;
`;

const ImageFeature = styled(Image)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -35%);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;

const FeatureS = () => {
    return (
        <FeatureSEl>
            <ImageContainer>
                <ImageFeature src={PhoneMockUp}/>
            </ImageContainer>
            <Content>
                <H3>Headline</H3>
                <Lead>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra,
                    feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit
                    non. Non commodo volutpat, pharetra, vel.
                </Lead>
                <LinkLabeledIcon href='#'>Get started</LinkLabeledIcon>
            </Content>
        </FeatureSEl>
    );
};

export default FeatureS;