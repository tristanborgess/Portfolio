import styled from "styled-components";

const Header = () => {

    return (
    <Nav>        
        <Title>Tristan</Title>
        <Subtitle>Borges Solari</Subtitle>
    </Nav>
    );
};

const Nav = styled.div`
    display: inline-flex;
    padding-top: 1px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2px;
`;

const Title = styled.span`
    color: #110078;
    leading-trim: both;
    text-edge: cap;
    font-family: Wheaton;
    font-size: 85px;
    font-style: normal;
    font-weight: 400;
    line-height: 28.8px; /* 33.882% */
    letter-spacing: 0.22px;
`;

const Subtitle = styled.span`
    color: #110078;
    font-family: Wheaton;
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    line-height: 28.8px; /* 82.286% */
    letter-spacing: 6.35px;
`;

export default Header;