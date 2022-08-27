import styled from "styled-components";
import ArrowSmall from "../../assets/images/icons/ArrowRightS.svg"
import Arrow from "../../assets/images/icons/ArrowRight.svg"
import ArrowLarge from "../../assets/images/icons/ArrowRightL.svg"
import Image from "./Image.styled"
import {Colors, TextStyles} from "../../assets/Theme";

const LinkLabeledIconEl = styled.a`
  display: flex;
  align-items: center;
  color: ${Colors.Brand.Purple};
  
  :visited {
    color: ${Colors.Brand.Purple};
  }

  ${props => {
    switch (props.size) {
      case "sm":
        return TextStyles.Bundler(TextStyles.Lable.Small)
      case "lg":
        return TextStyles.Bundler(TextStyles.Lable.Large)
      default:
        return TextStyles.Bundler(TextStyles.Lable.Medium)
    }
  }}
  
  > img {
    margin-left: 0.5rem;
  }
`

const LinkLabeledIcon = ({children, size, href}) => {
    return (
        <LinkLabeledIconEl href={href} size={size}>
            {children}
            {size === "sm" ? <Image src={ArrowSmall}/> : ""}
            {!size || size === "md" ? <Image src={Arrow}/> : ""}
            {size === "lg" ? <Image src={ArrowLarge}/> : ""}
        </LinkLabeledIconEl>
    );
};

export default LinkLabeledIcon;