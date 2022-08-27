import styled from "styled-components";
import Icon1 from "../../assets/images/icons/01.svg"
import Icon2 from "../../assets/images/icons/02.svg"
import Icon3 from "../../assets/images/icons/03.svg"
import Icon4 from "../../assets/images/icons/04.svg"
import H2 from "../styled/H2.styled";
import Lead from "../styled/Lead.styled";
import StatsItem from "./StatsItem";

const Items = [
    {
        id: 1,
        image: Icon1,
        title: "10,000+",
        subTitle: "Downloads per day"
    },
    {
        id: 2,
        image: Icon2,
        title: "2 Million",
        subTitle: "Users"
    },
    {
        id: 3,
        image: Icon3,
        title: "500+",
        subTitle: "Clients"
    },
    {
        id: 4,
        image: Icon4,
        title: "140",
        subTitle: "Countries"
    }
]

const StatsEl = styled.article`
  display: flex;
  align-items: center;
  padding: 3rem 7rem;
  flex-wrap: wrap;
  gap: 2rem;
`;

const TitlePart = styled.span`
  margin-right: 20%;
`;

const Counts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  flex: 1;
`;

const Stats = () => {
    return (
        <StatsEl>
            <TitlePart>
                <H2>Our 18 years of<br/> achievements</H2>
                <Lead>With our super powers we have reached this</Lead>
            </TitlePart>
            <Counts>
                {Items.map(el=> <StatsItem key={el.id} item={el}/>)}
            </Counts>
        </StatsEl>
    );
};

export default Stats;