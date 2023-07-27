import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
padding-top: 20px;
width: 1327px;
height: 48px;

background-color: #161616;
position: fixed;
`
export const StyledNavLink = styled(NavLink)`
margin-right: 20px;

&.active {
    color: #ff007b;
  }
`

export const Container = styled.main`
margin-top: 40px;
`