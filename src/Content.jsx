import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import Pages from './Pages.jsx';
import Form from './Form.jsx';
import { aboutData, projectsData } from './data';

const Content = () => {
    const [currentTab, setCurrentTab] = useState('About');
    const [currentPage, setCurrenPage] = useState(0);

    const changeTab = tab => {
        setCurrentTab(tab);
        setcurrentPage(0);
    };

    const changePage = (page) => {
        setcurrentPage(page);
    };

    const currentData = currentTab === 'About' ? aboutData : projectsData;

    return (
        <> 
            {currentTab !== 'Contact' ? (
                <>
                    <Pages currentTab={currentTab} changePage={currentPage} changeTab={changeTab} />
                </>
            ) : ( 
                <Form />
            )}
        </>
    );
}

export default Content;