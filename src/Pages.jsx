import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import Tabs from "./Tabs";
import Navigation from "./Navigation";
import ContentWindow from "./ContentWindow";
import { aboutData, designData, codeData } from "./data";

const Pages = ({ currentTab, changeTab }) => {
    const [currentPage, setCurrentPage] = useState(0);

    const changePage = (page) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        setCurrentPage(0);
    }, [currentTab]);

    const currentData = currentTab === 'About' ? aboutData : currentTab === 'Design' ? designData : codeData;

    return (
        <PagesContainer>
            <Tabs currentTab={currentTab} changeTab={changeTab} />
            <GreyWindow>
                <DynamicText>{currentTab === 'Contact' ? 'Reach out on Twitter or LinkedIn (form is down)...' : currentData[currentPage]?.dynamicText}</DynamicText>
                <ContentWindow data={currentData[currentPage]?.content} currentTab={currentTab} />
                {currentTab !== 'Contact' && <Navigation currentPage={currentPage} changePage={changePage} totalPages={currentData.length}/>}
            </GreyWindow>           
        </PagesContainer>
        );
    };

    const PagesContainer = styled.div`
        width: 350px;
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        margin-left: auto;
        margin-right: auto;

        @media (min-width: 601px) {
            width: 525px;
            margin-top: 45px;
}

        @media (min-width: 1201px) {
            width: 700px;
            margin-top: 60px;
} 
`;
    
    const GreyWindow = styled.div`
        margin-top: -2px;
        border-style: none;
        border-radius: 2px;
        width: 350px;
        height: 372px;
        flex-shrink: 0;
        background: #D9D9D9;
        box-shadow: -1px -1px 0px 0px rgba(0, 0, 0, 0.65) inset, -2px -2px 0px 0px rgba(0, 0, 0, 0.25) inset, 2px 2px 0px 0px rgba(240, 240, 240, 0.45) inset, 1px 1px 0px 0px rgba(255, 255, 255, 0.65) inset;   
        
        @media (min-width: 601px) {
            width: 525px;
            margin-top: -3px;
            height: 558px;
            box-shadow: -1px -1px 1px 0px rgba(0, 0, 0, 0.65) inset, -2px -2px 1px 0px rgba(0, 0, 0, 0.25) inset, 2px 2px 1px 0px rgba(240, 240, 240, 0.45) inset, 1px 1px 1px 0px rgba(255, 255, 255, 0.65) inset;         
        }

        @media (min-width: 1201px) {
            width: 700px;
            margin-top: -4px;
            height: 744px;
            box-shadow: -1px -1px 2px 0px rgba(0, 0, 0, 0.65) inset, -2px -2px 2px 0px rgba(0, 0, 0, 0.25) inset, 2px 2px 2px 0px rgba(240, 240, 240, 0.45) inset, 1px 1px 2px 0px rgba(255, 255, 255, 0.65) inset; 
        }
`;

    const DynamicText = styled.div`
        color: rgba(0, 0, 0, 0.75);
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 28.8px; /* 240% */
        letter-spacing: 0.22px;
        padding-left: 16px;
        display: flex;
        margin-top: 10px;
        margin-bottom: -40px;

        @media (min-width: 601px) {
            font-size: 18px;
            line-height: 43.2px;
            padding-left: 24px;
            margin-top: 15px;
            margin-bottom: -60px;
}

        @media (min-width: 1201px) {
            font-size: 24px;
            line-height: 57.6px;
            padding-left: 32px;
            margin-top: 20px;
            margin-bottom: -80px;
} 
    `;

export default Pages;