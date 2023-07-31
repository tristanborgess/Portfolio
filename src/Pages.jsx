import styled from "styled-components";
import React, { useState} from 'react';
import Tabs from "./Tabs";
import Navigation from "./Navigation";
import ContentWindow from "./ContentWindow";
import { aboutData, projectsData } from "./data";
import Form from "./Form";

const Pages = ({ currentTab, changeTab }) => {
    const [currentPage, setCurrentPage] = useState(0);

    const changePage = (page) => {
        setCurrentPage(page);
    };

    const currentData = currentTab === 'About' ? aboutData : projectsData;

    return (
        <PagesContainer>
            <Tabs currentTab={currentTab} changeTab={changeTab} />
            <GreyWindow>
                {currentTab === 'Contact' ? (
                        <>
                            <DynamicText>Contact Me</DynamicText>
                            <Form />
                        </>
                    ) : (
                    <>
                    <DynamicText>{currentData[currentPage]?.dynamicText}</DynamicText>
                    <ContentWindow data={currentData[currentPage]?.content} />
                    <Navigation currentPage={currentPage} changePage={changePage} totalPages={currentData.length}/>
                    </>
                    )}
            </GreyWindow>
        </PagesContainer>
        );
    };

    const PagesContainer = styled.div`
        width: 350px;
        margin-top: 63px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        margin-left: auto;
        margin-right: auto;
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
    `;
    // const ContentWindow = styled.div`
    //     width: 320px;
    //     height: 265px;
    //     margin-top: 48px;
    //     flex-shrink: 0;
    //     border-radius: 2px;
    //     border-style: none;
    //     margin-left: auto;
    //     margin-right: auto;
    //     background: #FFF;
    //     box-shadow: 2px 0px 0px 0px rgba(0, 0, 0, 0.55) inset, 0px 2px 0px 0px rgba(0, 0, 0, 0.55) inset, 1px 0px 0px 0px rgba(255, 255, 255, 0.50) inset, 0px 1px 0px 0px rgba(255, 255, 255, 0.50) inset, 1px 2px 0px 0px rgba(255, 255, 255, 0.35), 2px 1px 0px 0px rgba(255, 255, 255, 0.35);
    // `;

export default Pages;