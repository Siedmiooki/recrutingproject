import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing: border-box;
        font-family: "Jost", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: #1A1D32;
        color: white;
    }
    #root {
        margin: 0 auto;
    }
    html {
    &::-webkit-scrollbar {
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
        background-color: darkgrey
    }
    &::-webkit-scrollbar-track {
        background-color: white
    }
    @media ( max-width: 1300px ) {
        font-size: 90%
    }
    @media ( max-width: 600px ) {
        font-size: 75%
    }
    }
    button {
    font-family: "Jost", sans-serif;
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    margin: 1rem 0rem;
    border: 3px solid #488bb8;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    border-radius: 2rem;
    &:hover {
        background-color: #488bb8;
        color: white;
    }
    }
    input {
    width: 30rem;
    padding: 1rem 2rem;
    margin: 1rem 0rem 3rem 0rem;
    border: 3px solid #488bb8;
    font-family: "Jost", sans-serif;
    font-weight: bold;
    font-size: 1.1rem;
    border-radius: 2rem;
    @media ( max-width: 500px ) {
    width: 90%;
    }
    }
 `