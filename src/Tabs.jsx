import styled from "styled-components";
import React, { useState } from 'react';

const Tabs = ({ currentTab, changeTab, setCurrentPage }) => {
    const tabs = ['About', 'Design', 'Code', 'Contact'];
    
    return (
        <TabsContainer>
            {tabs.map(tab => (
                <TabButton
                    key={tab}
                    className={currentTab === tab ? 'active' : ''}
                    onClick={() => changeTab(tab)}
                >
                    {tab}
                </TabButton>
            ))}
        </TabsContainer>
    );
};

const TabsContainer = styled.div`
    display: flex;
    width: 100%;
    height: 21.85px;
    margin-left: auto;
    margin-right: auto;
    flex-shrink: 0;

    @media (min-width: 601px) {
        height: 28.5px;
}

    @media (min-width: 1201px) {
        height: 38px;
} 
`;

const TabButton = styled.button`
    margin-right: -4px;
    justify-content: center;
    align-items: center;
    width: 62.1px;
    height: 21.85px;
    flex-shrink: 0;
    border-radius: 2px 2px 0px 0px;
    border-style: none;
    background: #D9D9D9;
    box-shadow: -1px -1px 0px 0px rgba(0, 0, 0, 0.65) inset, -2px -2px 0px 0px rgba(0, 0, 0, 0.25) inset, 2px 2px 0px 0px rgba(240, 240, 240, 0.45) inset, 1px 1px 0px 0px rgba(255, 255, 255, 0.65) inset;
    color: #000;
    font-family: 'VT323', monospace;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.22px;
    text-align: center;

    @media (min-width: 601px) {
        height: 28.5px;
        width: 81px;
        font-size: 19.5px;
        box-shadow: -1px -1px 1px 0px rgba(0, 0, 0, 0.65) inset, -2px -2px 1px 0px rgba(0, 0, 0, 0.25) inset, 2px 2px 1px 0px rgba(240, 240, 240, 0.45) inset, 1px 1px 1px 0px rgba(255, 255, 255, 0.65) inset;
}

    @media (min-width: 1201px) {
        height: 38px;
        width: 108px;
        font-size: 26px;
        box-shadow: -1px -1px 2px 0px rgba(0, 0, 0, 0.65) inset, -2px -2px 2px 0px rgba(0, 0, 0, 0.25) inset, 2px 2px 2px 0px rgba(240, 240, 240, 0.45) inset, 1px 1px 2px 0px rgba(255, 255, 255, 0.65) inset;
} 

    &:nth-child(1) {
        z-index: 4; // brings the "About" tab to the top
    }

    &:nth-child(2) {
        z-index: 3; // puts the "Design" tab in the middle
    }

    &:nth-child(3) {
        z-index: 2; // puts the "Code" tab in the middle
    }

    &:nth-child(4) {
        z-index: 1; // puts the "Contact" tab at the bottom
    }

    &.active {
        border-radius: 2px 2px 0px 0px;
        box-shadow: 2px 2px 0px 0px rgba(240, 240, 240, 0.45) inset, 1px 1px 0px 0px rgba(255, 255, 255, 0.65) inset, 1px 0px 0px 0px #000;
    }
`;

export default Tabs;