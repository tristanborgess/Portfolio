import styled from "styled-components";
import React, { useState, useEffect } from 'react';

const Pages = () => {

    return (
            <GreyWindow>
                <ContentWindow>

                </ContentWindow>
            </GreyWindow>
        );
    };
    
    const GreyWindow = styled.div`
        width: 350px;
        height: 372px;
        flex-shrink: 0;
        background: #D9D9D9;
        box-shadow: -1px -1px 0px 0px rgba(0, 0, 0, 0.65) inset, -2px -2px 0px 0px rgba(0, 0, 0, 0.25) inset, 2px 2px 0px 0px rgba(240, 240, 240, 0.45) inset, 1px 1px 0px 0px rgba(255, 255, 255, 0.65) inset;
        display: flex;
        justify-content: center;
        margin-top: 63px;
        margin-left: auto;
        margin-right: auto;
`;

    const ContentWindow = styled.div`
        width: 320px;
        height: 265px;
        margin-top: 48px;
        flex-shrink: 0;
        background: #FFF;
box-shadow: 2px 0px 0px 0px rgba(0, 0, 0, 0.55) inset, 0px 2px 0px 0px rgba(0, 0, 0, 0.55) inset, 1px 0px 0px 0px rgba(255, 255, 255, 0.50) inset, 0px 1px 0px 0px rgba(255, 255, 255, 0.50) inset, 1px 2px 0px 0px rgba(255, 255, 255, 0.35), 2px 1px 0px 0px rgba(255, 255, 255, 0.35);
    `
export default Pages;