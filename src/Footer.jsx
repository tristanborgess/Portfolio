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
    margin-top: -20px;
    
    
`
const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: baseline;
    gap: 35px;
    padding-top: 46px;
    padding-bottom: 46px;
    width: 100%;
    flex-shrink: 0;
    margin-left: auto;
    margin-right: auto;
    color: rgba(0, 0, 0, 0.45);
    font-family: Wheaton;
    font-size: 8px;
    font-style: normal;
    font-weight: 400;
    line-height: 28.8px; /* 360% */
    letter-spacing: 0.22px;
    text-transform: uppercase;
    text-decoration:none;
    padding-top: -50px;
    
  
    

`;

const Icon = styled.img`
    display: flex;
    margin-left: auto;
    margin-right: auto;
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