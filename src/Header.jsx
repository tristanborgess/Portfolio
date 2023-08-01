import styled from "styled-components";
import headerImage from "./assets/Header.svg"

const Header = () => {

    return (
    <Nav>        
        <Img src={headerImage} alt='Header' />
        {/* <Title>Tristan</Title>
        <Subtitle>Borges Solari</Subtitle> */}
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
    width: 358px;

    @media (min-width: 601px) {
        width: 537px;    
    }

    @media (min-width: 1201px) {
        width: 716px;    
    } 
`
// const Title = styled.span`
//     color: #110078;
//     font-family: Wheaton;
//     font-size: 85px;
//     font-style: normal;
//     font-weight: 400;
//     line-height: 28.8px; /* 33.882% */
//     letter-spacing: 0.22px;
//     text-shadow: -3px -1px 0px #CB00AA, 3px 1px 0px #0085FF;
// `;

// const Subtitle = styled.span`
//     color: #110078;
//     font-family: Wheaton;
//     font-size: 35px;
//     font-style: normal;
//     font-weight: 400;
//     line-height: 28.8px; /* 82.286% */
//     letter-spacing: 6.35px;
//     text-shadow: -1px 1px 0px #CB00AA, 1px -1px 0px #0085FF;
// `;

export default Header;