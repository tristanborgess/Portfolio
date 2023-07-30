import styled from "styled-components";
import React, { useState } from 'react';

const Tabs = ({ currentTab, changeTab }) => {
    const tabs = ['About', 'Projects', 'Contact'];
    
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
    height: 19px;
    margin-left: auto;
    margin-right: auto;
    flex-shrink: 0;
`;

const TabButton = styled.button`
    margin-right: -4px;
    justify-content: center;
    align-items: center;
    width: 54px;
    height: 19px;
    flex-shrink: 0;
    border-radius: 2px 2px 0px 0px;
    border-style: none;
    background: #D9D9D9;
    box-shadow: -1px -1px 0px 0px rgba(0, 0, 0, 0.65) inset, -2px -2px 0px 0px rgba(0, 0, 0, 0.25) inset, 2px 2px 0px 0px rgba(240, 240, 240, 0.45) inset, 1px 1px 0px 0px rgba(255, 255, 255, 0.65) inset;
    color: #000;
    font-family: 'VT323', monospace;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.22px;

    &:nth-child(1) {
    z-index: 3; // brings the "About" tab to the top
  }

  &:nth-child(2) {
    z-index: 2; // puts the "Projects" tab in the middle
  }

  &:nth-child(3) {
    z-index: 1; // puts the "Contact" tab at the bottom
  }

    &.active {
        border-radius: 2px 2px 0px 0px;
        box-shadow: 2px 2px 0px 0px rgba(240, 240, 240, 0.45) inset, 1px 1px 0px 0px rgba(255, 255, 255, 0.65) inset, 1px 0px 0px 0px #000;
    }

    &:focus {
        outline:none;
        border: 1px solid #000;
        border-radius: 2px 2px 0px 0px;
        box-shadow: 0px -1px 0px 0px #000, 0px -1px 0px 0px #000, 1px 0px 0px 0px #000;
    }
`;

export default Tabs;