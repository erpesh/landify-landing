import styled from "styled-components";
import Icon1 from "../../../assets/images/icons/01.svg"
import Icon2 from "../../../assets/images/icons/02.svg"
import Icon3 from "../../../assets/images/icons/03.svg"
import Icon4 from "../../../assets/images/icons/04.svg"
import Icon5 from "../../../assets/images/icons/05.svg"
import Icon6 from "../../../assets/images/icons/06.svg"
import FeatureItem from "./FeatureItem";
import Lead from "../../styled/Lead.styled";
import H2 from "../../styled/H2.styled";

const Items = [
    {
        id: 1,
        icon: Icon1,
        title: "Robust workflow",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum."
    },
    {
        id: 2,
        icon: Icon2,
        title: "Flexibility",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum."
    },
    {
        id: 3,
        icon: Icon3,
        title: "User friendly",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum."
    },
    {
        id: 4,
        icon: Icon4,
        title: "Multiple layouts",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum."
    },
    {
        id: 5,
        icon: Icon5,
        title: "Better components",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum."
    },
    {
        id: 6,
        icon: Icon6,
        title: "Well organised",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum."
    },
]

const FeatureMEl = styled.article`
  padding: 2rem 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const SubTitle = styled(Lead)`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  /* or 178% */

  text-align: center;
  font-feature-settings: 'salt' on, 'liga' off;
  width: 40%;
`
const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 2rem;
  column-gap: 2rem;
  row-gap: 3rem;
`

const FeatureM = () => {
    return (
        <FeatureMEl>
            <H2>Tailor-made features</H2>
            <SubTitle>Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or
                visual presentation.</SubTitle>
            <ItemContainer>
                {Items.map(el => <FeatureItem key={el.id} item={el}/>)}
            </ItemContainer>
        </FeatureMEl>
    );
};

export default FeatureM;