
import React, { useState, useEffect } from 'react';
import Pages from './Pages.jsx';
import { aboutData, projectsData } from './data';

const Content = () => {
    const [currentTab, setCurrentTab] = useState('About');
    const [currentPage, setCurrentPage] = useState(0);

    const changeTab = tab => {
        setCurrentTab(tab);
        setCurrentPage(0);
    };

    return (
                <>
                    <Pages 
                        currentTab={currentTab} 
                        changePage={currentPage} 
                        setCurrentPage={setCurrentPage}
                        changeTab={changeTab}  
                    />
                </>
    );
}

export default Content;