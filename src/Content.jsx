
import React, { useState } from 'react';
import Pages from './Pages.jsx';

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