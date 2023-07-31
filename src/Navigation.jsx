import styled from "styled-components";
import React, { useState, useEffect } from 'react';

const Navigation = ({ currentPage, changePage, totalPages }) => {
    const handlePrev = () => {
        if (currentPage > 0) {
            changePage(currentPage-1);
        }
    };

    const handleNext = () => {
        if(currentPage < totalPages - 1) {
            changePage(currentPage + 1);
        }
    };

    return (
        <NavigationContainer>
            <Button onClick={handlePrev} disabled={currentPage === 0}>Prev</Button>
            <Button onClick={handleNext} disabled={currentPage === totalPages - 1}>Next</Button>
        </NavigationContainer>
    );
};

const NavigationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 15px;
  gap: 16px;
`;

const Button = styled.button`
    width: 75px;
    height: 23px;
    flex-shrink: 0;
    background: #D9D9D9;
    box-shadow: 0px 1px 0px 0px #000, 1px 1px 0px 0px #000, 1px 0px 0px 0px #000, 2px 2px 0px 0px rgba(244, 244, 244, 0.80) inset, -1px -1px 0px 0px rgba(0, 0, 0, 0.25) inset, 1px 1px 0px 0px #FFF inset;
    color: #000;
    font-family: 'VT323', monospace;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 12px; /* 92.308% */
    letter-spacing: 0.22px;

    &:focus {
        outline:none;
        border: 1px solid #000;
        box-shadow: 1px 1px 0px 0px #000, 0px 1px 0px 0px #000, 1px 0px 0px 0px #000;
    }
    &:active {
        border: 1px solid #000;
        box-shadow: 1px 1px 0px 0px #000, 0px 1px 0px 0px #000, 1px 0px 0px 0px #000;
    }
    &:disabled {
        background: #D9D9D9;
        opacity: 50%;
    }
`

export default Navigation;