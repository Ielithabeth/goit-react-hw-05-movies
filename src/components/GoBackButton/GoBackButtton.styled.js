import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
position: fixed;
left: 85%;

button {
    padding: 4px 16px;

    border-radius: 12px;
    border: 1px solid #9c9c9c;
    background-color: #161616;
    color: inherit;
  
    font-family: inherit;
    font-size: 12px;
  
    transition: all 0.3s ease;
}

button:hover,
button:focus {
    background-color: #ff007b;
    color: #161616;
    border: 1px solid #ff007b;
}
`