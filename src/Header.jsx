import styled from "styled-components";
import headerImage from "./assets/Header.svg"

const Header = () => {

    return (
    <Nav>        
        <Img src={headerImage} alt='Header' />
    </Nav>
    );
};

const Nav = styled.nav`
    display: flex;
    padding-top: 50px;
    justify-content: center;
    align-items: center;
    width: 100%;

    @media (min-width: 601px) {
        padding-top: 60px;
    }

    @media (min-width: 1201px) {
        padding-top: 70px;
    } 
`;

const Img = styled.img`
    width: 411.7px;

    @media (min-width: 601px) {
        width: 537px;    
    }

    @media (min-width: 1201px) {
        width: 716px;    
    } 
`;

export default Header;