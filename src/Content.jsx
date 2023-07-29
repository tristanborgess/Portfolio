import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import Tabs from './Tabs.jsx';
import Pages from './Pages.jsx';
import Navigation from './Navigation.jsx';
import Form from './Form.jsx';

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
            <Tabs currentTab={currentTab} changeTab={changeTab} />
            {currentTab !== 'Contact' ? (
                <>
                    <Pages currentTab={currentTab} changePage={currentPage} />
                    <Navigation currentPage={currentPage} changePage={changePage} totalPages={currentData.length}/>
                </>
            ) : ( 
                <Form />
            )}
        </>
    );
}

export default Content;