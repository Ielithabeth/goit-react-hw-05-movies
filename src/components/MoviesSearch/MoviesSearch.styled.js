import { styled } from "styled-components";

export const Form = styled.form`
display: flex;

input {
    width: 550px;
    margin-right: 16px;
}

button {
    padding: 10px 12px;

    border-radius: 19px;
    border: 0;

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
}

`