import styled from "styled-components";
import AirBnBLogo from "../../assets/images/AirbnbLogo.svg"
import HubspotLogo from "../../assets/images/HubspotLogo.svg"
import BookMyShowLogo from "../../assets/images/BookMyShowLogo.svg";
import QuoteIcon from "../../assets/images/icons/Quote.svg";
import H2 from "../styled/H2.styled";
import Lead from "../styled/Lead.styled";
import {Colors} from "../../assets/Theme";
import TestimonialItem from "./TestimonialItem";

const Items = [
    {
        id: 1,
        logo: AirBnBLogo,
        text: "I used landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it.",
        name: "Jane Cooper",
        jobTitle: "CEO, Airbnb"
    },
    {
        id: 2,
        logo: HubspotLogo,
        text: "To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.",
        name: "Floyd Miles",
        jobTitle: "Vice President, GoPro"
    },
    {
        id: 3,
        logo: BookMyShowLogo,
        text: "Landify saved our time in designing my company page.",
        name: "Kristin Watson",
        jobTitle: "Co-Founder, BookMyShow"
    }
]

const TestimonialEl = styled.article`
  background-color: ${Colors.Brand.Turquoise100};
  display: grid;
  padding: 6rem 7rem;
  gap: 1rem;
  grid-template-columns: repeat(7, 1fr) 2.3fr repeat(4, 1fr);
`;
const Title = styled(H2)`
  ${Colors.Text.Gray900};
  z-index: 1;
  position: relative;
`;

const SubTitle = styled(Lead)`
  color: ${Colors.Text.Gray900};
`;

const TextContainer = styled.span`
  grid-column: 3 / span 4;
  grid-row: 1/3 span;
  position: relative;
  :before {
    content: "";
    z-index: 0;
    position: absolute;
    background: url(${QuoteIcon});
    transform: translate(-50%, -50%);
    background-size: cover;
    background-repeat: no-repeat;
    width: 120px;
    height: 104px;
  }
`;

const Testimonial = () => {
    return (
        <TestimonialEl>
            <TextContainer>
                <Title>Real Stories from Real Customers</Title>
                <SubTitle>Get inspired by these stories.</SubTitle>
            </TextContainer>
            <TestimonialItem
                item={Items[0]}
                gridColumn="7/ span 3"
                gridRow="2/ span 4"
            />
            <TestimonialItem
                item={Items[1]}
                gridColumn="4/ span 3"
                gridRow="4/ span 5"
            />
            <TestimonialItem
                mt="1rem"
                item={Items[2]}
                gridColumn="7/ span 2"
                gridRow="6/ span 4"
            />
        </TestimonialEl>
    );
};

export default Testimonial;