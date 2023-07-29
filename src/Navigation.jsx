import styled from "styled-components";
import React, { useState, useEffect } from 'react';

const Navigation = ({ currentPage, changePage, totalPages }) => {

    return (
        <NavigationContainer>
            <button onClick={() => changePage(currentPage - 1)} disabled={currentPage === 0}>Previous</button>
            <button onClick={() => changePage(currentPage + 1)} disabled={currentPage === totalPages - 1}>Next</button>
        </NavigationContainer>
    );
};

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #c0c0c0;
`;

export default Navigation;