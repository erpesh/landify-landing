import styled from "styled-components";
import Body from "../../styled/Body.styled";
import Image from "../../styled/Image.styled";
import H5 from "../../styled/H5.styled";

const FeatureItemEl = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;
const Text = styled(Body)`
  text-align: center;
  width: 85%;
`

const FeatureItem = ({item}) => {
    const {icon, title, text} = item;

    return (
        <FeatureItemEl>
            <Image src={icon}/>
            <H5>{title}</H5>
            <Text>{text}</Text>
        </FeatureItemEl>
    );
};

export default FeatureItem;