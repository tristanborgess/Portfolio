import styled from "styled-components";
import React, { useState, useEffect } from 'react';

const Pages = () => {

    return (
            <WindowFrame>
                <div className="tabs"></div>
                {/* <Window>
                </Window> */}
            </WindowFrame>
        );
    };
    
    const WindowFrame = styled.div`
        width: 350px;
        height: 372px;
        flex-shrink: 0;  
        fill: #D9D9D9;
        box-shadow: -1px -1px 0px 0px rgba(0, 0, 0, 0.65) inset, -2px -2px 0px 0px rgba(0, 0, 0, 0.25) inset, 2px 2px 0px 0px rgba(240, 240, 240, 0.45) inset, 1px 1px 0px 0px rgba(255, 255, 255, 0.65) inset;
    `;
    
    // const Window = styled.div`
    //     width: 350px;
    //     height: 372px;
    //     flex-shrink: 0;
    //     background: #D9D9D9;
    //     box-shadow: -1px -1px 0px 0px rgba(0, 0, 0, 0.65) inset, -2px -2px 0px 0px rgba(0, 0, 0, 0.25) inset, 2px 2px 0px 0px rgba(240, 240, 240, 0.45) inset, 1px 1px 0px 0px rgba(255, 255, 255, 0.65) inset;
        
    // `;

export default Pages;