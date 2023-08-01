import { footerData } from "./data";
import React from "react";
import styled from "styled-components";


const Footer = () => {

    return (
        <FooterBackground>
            <FooterContainer>
                {footerData.map((item, index) => (
                    <StyledLink key={index} href={item.url} target='_blank' rel="noopener noreferrer">
                        <Icon src={item.icon} alt={item.text}/>
                        {item.text}
                    </StyledLink>
                ))}
            </FooterContainer>
        </FooterBackground>
    );
};

const FooterBackground = styled.div`
    background: linear-gradient(180deg, rgba(168, 209, 222, 0.00) 0%, rgba(0, 229, 147, 0.26) 29.17%, #41A6C6 100%); 
    margin-bottom: 0;
`;
const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: baseline;
    gap: 35px;
    padding-top: 46px;
    padding-bottom: 46px;
    margin-bottom: 0;
    width: 100%;
    flex-shrink: 0;
    margin-left: auto;
    margin-right: auto;
    color: rgba(0, 0, 0, 0.45);
    font-family: VT323;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 28.8px; 
    letter-spacing: 0.22px;
    text-transform: uppercase;
    text-decoration:none;
    height:100%;

    @media (min-width: 601px) {
        gap: 52.5px;
        padding-top: 69px;
        padding-bottom: 69px;
        font-size: 19.5px;
        line-height: 43.2px; 
        letter-spacing: 0.33px;
}

    @media (min-width: 1201px) {
        gap: 70px;
        padding-top: 92px;
        padding-bottom: 92px;
        font-size: 26px;
        line-height: 57.6px; 
        letter-spacing: 0.44px;
} 
`;

const Icon = styled.img`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    height: 30px;

    @media (min-width: 601px) {
        height: 45px;
    }

    @media (min-width: 1201px) {
        height: 60px;
    } 
`;

const StyledLink = styled.a`
  color: inherit; 
  text-decoration: none; 
  
  &:hover, &:focus, &:active {
    color: inherit; 
    text-decoration: none; 
  }
`;

export default Footer;