import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import Pages from './Pages.jsx';
import Form from './Form.jsx';
import { aboutData, projectsData } from './data';

const Content = () => {
    const [currentTab, setCurrentTab] = useState('About');
    const [currentPage, setCurrentPage] = useState(0);

    const changeTab = tab => {
        setCurrentTab(tab);
        setCurrentPage(0);
    };

    const changePage = (page) => {
        setCurrentPage(page);
    };

    const currentData = currentTab === 'About' ? aboutData : projectsData;

    return (
        <> 
            {currentTab !== 'Contact' ? (
                <>
                    <Pages 
                        currentTab={currentTab} 
                        changePage={currentPage} 
                        setCurrentPage={setCurrentPage}
                        changeTab={changeTab}  
                    />
                </>
            ) : ( 
                <Form />
            )}
        </>
    );
}

export default Content;