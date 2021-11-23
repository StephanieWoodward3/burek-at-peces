import styled from 'styled-components/macro';
import NightPhoto from './images/NightPhoto.jpg';

export const Banner = styled.div`
    display: flex;
    height: 20rem;
    background-image: url(${NightPhoto});
    background-repeat: no-repeat;
    background-size: 50% 100%;
    background-position: center;
    color: white;
    background-color: black;
`

export const Heading = styled.h1`
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    margin-left: 15rem;
    font-size: 60px;

`

export const NavBar = styled.nav`
    background-color: #09243C;
    color: #E6D4B0;

    hr {
        color: #E6D4B0;
    }

    a: visited {
        color: white;
    }

    ul {
        display: flex;
        list-style-type: none;
        justify-content: space-evenly;

    }

`

export const EntirePage = styled.div`
    background-color: #09243C; 
    color: #E6D4B0;

`
