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
    width: 157px;
    height: 19px;
    flex-shrink: 0;
`;

const TabButton = styled.button`
    width: 54px;
    height: 19px;
    flex-shrink: 0;
    border-radius: 2px 2px 0px 0px;
    background: #D9D9D9;
    box-shadow: -1px -1px 0px 0px rgba(0, 0, 0, 0.65) inset, -2px -2px 0px 0px rgba(0, 0, 0, 0.25) inset, 2px 2px 0px 0px rgba(240, 240, 240, 0.45) inset, 1px 1px 0px 0px rgba(255, 255, 255, 0.65) inset;
`;

export default Tabs;