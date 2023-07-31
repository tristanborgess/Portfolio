import React from 'react';
import styled from 'styled-components';

const ContentWindow = ({ data }) => {

    const renderItem = (item, index) => {
        if (Array.isArray(item)) {
            return item.map(renderItem);
        }

        if (item.type === 'profileImage') {
            return <ProfileImage key={index} src={item.url} alt="" />;
        }

        switch(item.type) {
            case 'header':
                return <Header key={index}>{item.text}</Header>;
            case 'fromText':
            case 'basedText':
            case 'currentlyText':
                return <Text key={index}>{item.text}</Text>;
            case 'skillsList':
                return (
                    <div key={index}>
                        <Text>{item.text}</Text>
                        <Ul>
                            {item.items.map((skill, i) => 
                                <li key={i}>{skill}</li>
                                )}
                        </Ul>
                    </div>
                );
            case 'positionText':
                    return <PositionText key={index}>{item.text}</PositionText>;
            case 'yearText':
                    return <YearText key={index}>{item.text}</YearText>;
            case 'iconText':
            case 'iconTextSurprise':
                return (
                    <IconText key={index}>
                        <Icon src={item.icon} alt="icon" />
                        <Text>{item.text}</Text>
                    </IconText>
                );
            case 'image':
                return <Image key={index} src={item.url} alt="" />;
            default:
                return null;
        }
    };

    return (
        <ContentWindowContainer>
            {data?.map(renderItem)}
        </ContentWindowContainer>
    );
};

const ContentWindowContainer = styled.div`
    width: 320px;
    height: 265px;
    margin-top: 48px;
    flex-shrink: 0;
    border-radius: 2px;
    border-style: none;
    margin-left: auto;
    margin-right: auto;
    background: #FFF;
box-shadow: 2px 0px 0px 0px rgba(0, 0, 0, 0.55) inset, 0px 2px 0px 0px rgba(0, 0, 0, 0.55) inset, 1px 0px 0px 0px rgba(255, 255, 255, 0.50) inset, 0px 1px 0px 0px rgba(255, 255, 255, 0.50) inset, 1px 2px 0px 0px rgba(255, 255, 255, 0.35), 2px 1px 0px 0px rgba(255, 255, 255, 0.35);
    `;

const Header = styled.h1`
    padding: 16px;
    color: #000;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 28.8px; /* 192% */
    letter-spacing: 0.22px;
    margin-bottom: -30px;
`;

const Text = styled.p`
    color: #434343;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    
    letter-spacing: 0.22px;
    margin-left: 25px;
    margin-bottom: -20px;
    padding-top: -10px;
`;

const IconText = styled.div`
    margin-left: 30px;
    display: flex;
    align-items: baseline;
    margin-bottom: -10px;
`;

const Icon = styled.img`
    margin-right: 5px;
`;

const Image = styled.img`
    height: 150px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    margin-top: -60px;
`;

const ProfileImage = styled.img`
    padding-top: 2px;
    height: 99%;
    width: 99%;
    margin-left: 2px;
    z-index: -1;
`;

const PositionText = styled.p`
    color: #434343;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 28.8px; /* 192% */
    letter-spacing: 0.22px;
    margin-left: 20px;
    margin-bottom: -20px;
    
`;

const YearText = styled.p`
    color: #434343;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 28.8px; /* 192% */
    letter-spacing: 0.22px;
    margin-left: 25px;
    margin-bottom: -20px;
`;

const Ul = styled.ul`
    list-style: none;
    color: #434343;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 28.8px; /* 192% */
    letter-spacing: 0.22px;
    margin-left: 50px;
    margin-top: -28px;
`


export default ContentWindow;
