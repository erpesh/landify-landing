import styled from "styled-components"
import Image from "../styled/Image.styled";
import H4 from "../styled/H4.styled";
import Body from "../styled/Body.styled";

const StatsItemEl = styled.span`
  display: flex;
  align-items: center;
  gap: 1rem;
  white-space: nowrap;
`;

const StatsItem = ({item}) => {
    return (
        <StatsItemEl>
            <Image src={item.image}/>
            <span>
                <H4>{item.title}</H4>
                <Body>{item.subTitle}</Body>
            </span>
        </StatsItemEl>
    );
};

export default StatsItem;