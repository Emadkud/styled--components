import styled from "styled-components";
import { green } from "./Colors";

const Button = styled.button`
  border: 1px solid ${green};
  color: ${green};
  padding: ${props => props.padding || "12px 16px"};
  border-radius: 5px;
  text-decoration: none;
  margin: ${props => props.margin || 0}
`;

export default Button