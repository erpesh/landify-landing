import styled from "styled-components";
import Bulbs from "../../../assets/images/Bulb.svg"
import Image from "../../styled/Image.styled";
import H3 from "../../styled/H3.styled";
import Lead from "../../styled/Lead.styled";
import {Colors} from "../../../assets/Theme";

const FeatureS2El = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 7rem;
  gap: 2rem;
`;

const Content = styled.div`
  display: flex;
  column-gap: 2rem;
  
  >h3 {
    flex: 1;
  }
  >span {
    flex: 1;
  }
`;

const FeatureS2 = () => {
    return (
        <FeatureS2El>
            <Content>
                <H3>Enter the world of all fashion trends</H3>
                <Lead>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra,
                    feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit
                    non. Non commodo volutpat, pharetra, vel.
                </Lead>
            </Content>
            <Image src={Bulbs}/>
        </FeatureS2El>
    );
};

export default FeatureS2;