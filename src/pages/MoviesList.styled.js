import { styled} from "styled-components";

export const List = styled.ul`
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 32px;

li {
    width: 300px;
}

a {
    display: flex;
    flex-direction: column;
    gap: 8px;
}
`