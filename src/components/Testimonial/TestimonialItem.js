import styled from "styled-components";
import Subtitle from "../styled/Subtitle.styled";
import Lead2 from "../styled/Lead2.styled";
import Image from "../styled/Image.styled";
import QuoteIcon from "../../assets/images/icons/Quote.svg";
import {Colors, Shadows} from "../../assets/Theme";

const TestimonialItemEl = styled.figure`
  background-color: ${Colors.Default.White};
  grid-column: ${(p) => p.gridColumn || ""};
  grid-row: ${(p) => p.gridRow || ""};
  margin-top: ${(p) => p.mt || ""};
  padding: 1.8rem;
  border-radius: 8px;
  box-shadow: ${Shadows.Dark};
`;

const Content = styled.div`
  display: flex;
  margin-top: 1rem;
  align-items: flex-start;
`;

const BlockQuote = styled.blockquote`
  margin: 0.4rem 0 1rem 0;
`;

const Author = styled.span``;

const Person = styled(Subtitle)`
  color: ${Colors.Text.Gray900};
  display: block;
`;

const JobTitle = styled(Lead2)`
  color: ${Colors.Text.Gray700};
`;

const TestimonialItem = ({item, mt, gridRow, gridColumn}) => {
    return (
        <TestimonialItemEl mt={mt} gridRow={gridRow} gridColumn={gridColumn}>
            <Image src={item.logo}/>
            <Content>
                <Image src={QuoteIcon} width="16px" height="14px"/>
                <span>
                    <BlockQuote>
                        <p>{item.text}</p>
                    </BlockQuote>
                    <Author>
                        <Person>{item.name}</Person>
                        <JobTitle>{item.jobTitle}</JobTitle>
                    </Author>
                </span>
            </Content>
        </TestimonialItemEl>
    );
};

export default TestimonialItem;