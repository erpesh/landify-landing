import styled from "styled-components";
import {Colors, TextStyles} from "../../assets/Theme";

const Button = styled.button`
  border: none;
  padding: 0.5rem 1rem;
  transition-property: background-color, color, border-color;
  transition-duration: 0.3s;
  cursor: pointer;
  border-radius: 6px;

  ${props => {
    switch (props.variation) {
      case "white":
        return `
              background-color: ${Colors.Brand.Purple100};
              color: ${Colors.Brand.Purple};
              :hover {
                background-color: ${Colors.Brand.Purple800};
                color: ${Colors.Default.White};
              }
        `
      case "transparent":
        return `
              background-color: transparent;
              color: ${Colors.Default.White};
              border: 1px solid ${Colors.Default.White};
              :hover {
                background-color: ${Colors.Default.White};
                color: ${Colors.Default.Black};
              }
        `
      default:
        return `
              background-color: ${Colors.Brand.Purple};
              color: ${Colors.Default.White};
              :hover {
                background-color: ${Colors.Brand.Purple800};
                color: ${Colors.Default.Black};
              }
        `
    }
  }}

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
`
export default Button