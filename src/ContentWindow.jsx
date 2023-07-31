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
                                <Li key={i}>{skill}</Li>
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
                    <IconContainer key={index}>
                        <Icon src={item.icon} alt="icon" />
                        <IconText>{item.text}</IconText>
                    </IconContainer>
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
    padding: 15px 0 0 15px;
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 5px; /* 192% */
    letter-spacing: 0.22px;
    margin-bottom: 10px;
`;

const Text = styled.p`
    color: #434343;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.22px;
    margin: 5px 0 0 20px;
`;

const IconContainer = styled.div`
    margin-left: 30px;
    display: flex;
    align-items: baseline;
    margin-top: 3px;
`;

const IconText = styled.div`
    margin-left: 5px;
    margin-bottom: 5px;
    color: #434343;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.22px;
`;

const Icon = styled.img`
    margin-right: 5px;
`;

const Image = styled.img`
    height: 150px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    margin-top: 20px;
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
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.22px;
    margin: 15px 0 0 20px;
    
`;

const YearText = styled.p`
    color: #434343;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 28.8px; /* 192% */
    letter-spacing: 0.22px;
    margin: 0px 0 0 20px;
`;

const Ul = styled.ul`
    list-style: none;
    color: #434343;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 28.8px; /* 192% */
    letter-spacing: 0.22px;
    margin: -21px 0 0 70px;
    padding: 0;
`;

const Li = styled.li`
    margin: 0px 0 0 0px;
`;


export default ContentWindow;
