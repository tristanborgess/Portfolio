import React from 'react';
import styled from 'styled-components';
import Form from './Form';

const ContentWindow = ({ data, currentTab }) => {
    if (currentTab === 'Contact') {
        return (
            <ContentWindowContainer>
                <Form />
            </ContentWindowContainer>
        );
    }

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
            case 'link':
            return (
                <LinkText key={index}>
                    {item.text}{''}
                    <a href={item.url} target="_blank" rel="nooTextener noreferrer">
                    Take a look...
                    </a>
                </LinkText>
            );
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
    width: 368px;
    height: 304.75px;
    margin-top: 48px;
    flex-shrink: 0;
    border-radius: 2px;
    border-style: none;
    margin-left: auto;
    margin-right: auto;
    background: #FFF;
    box-shadow: 2px 0px 0px 0px rgba(0, 0, 0, 0.55) inset, 0px 2px 0px 0px rgba(0, 0, 0, 0.55) inset, 1px 0px 0px 0px rgba(255, 255, 255, 0.50) inset, 0px 1px 0px 0px rgba(255, 255, 255, 0.50) inset, 1px 2px 0px 0px rgba(255, 255, 255, 0.35), 2px 1px 0px 0px rgba(255, 255, 255, 0.35);

        @media (min-width: 601px) {
            width: 480px;
            height: 397.5px;
            margin-top: 72px;
            box-shadow: 2px 0px 1px 0px rgba(0, 0, 0, 0.55) inset, 0px 2px 1px 0px rgba(0, 0, 0, 0.55) inset, 1px 0px 1px 0px rgba(255, 255, 255, 0.50) inset, 0px 1px 1px 0px rgba(255, 255, 255, 0.50) inset, 1px 2px 1px 0px rgba(255, 255, 255, 0.35), 2px 1px 1px 0px rgba(255, 255, 255, 0.35);
        }

        @media (min-width: 1201px) {
            width: 640px;
            height: 530px;
            margin-top: 96px;
            box-shadow: 2px 0px 2px 0px rgba(0, 0, 0, 0.55) inset, 0px 2px 2px 0px rgba(0, 0, 0, 0.55) inset, 1px 0px 2px 0px rgba(255, 255, 255, 0.50) inset, 0px 1px 2px 0px rgba(255, 255, 255, 0.50) inset, 1px 2px 2px 0px rgba(255, 255, 255, 0.35), 2px 1px 2px 0px rgba(255, 255, 255, 0.35);
        } 
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

    @media (min-width: 601px) {
        padding: 22.5px 0 0 22.5px;
        font-size: 24px;
        line-height: 7.5px;
        letter-spacing: 0.33px;
        margin-bottom: 15px;
    }

    @media (min-width: 1201px) {
        padding: 30px 0 0 30px;
        font-size: 32px;
        line-height: 10px;
        letter-spacing: 0.44px;
        margin-bottom: 20px;
    } 
`;

const Text = styled.p`
    color: #434343;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.22px;
    margin: 5px 0 0 20px;

    @media (min-width: 601px) {
        font-size: 21px;   
        letter-spacing: 0.33px;
        margin: 7.5px 0 0 30px; 
    }

    @media (min-width: 1201px) {
        font-size: 28px;   
        letter-spacing: 0.44px;
        margin: 10px 0 0 40px;
    } 
`;

const LinkText = styled.div`
    color: #434343;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.22px;
    margin-top: 25px;
    a, a:hover, a:visited, a:active {
        color: #0d1a66;
    }
    

    @media (min-width: 601px) {
        font-size: 16px;   
        letter-spacing: 0.33px;
    }

    @media (min-width: 1201px) {
        font-size: 21px;   
        letter-spacing: 0.44px;
        
    } 
`;

const IconContainer = styled.div`
    margin-left: 30px;
    display: flex;
    align-items: baseline;
    margin-top: 3px;

    @media (min-width: 601px) {
        margin-left: 45px;
        margin-top: 4.5px;
    }

    @media (min-width: 1201px) {
        margin-left: 60px;
        margin-top: 6px;
    } 
`;

const IconText = styled.div`
    margin-left: 5px;
    margin-bottom: 5px;
    color: #434343;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.22px;

    @media (min-width: 601px) {
        margin-left: 7.5px;
        margin-bottom: 7.5px;
        font-size: 21px;
        letter-spacing: 0.33px;
    }

    @media (min-width: 1201px) {
        margin-left: 10px;
        margin-bottom: 10px;
        font-size: 28px;
        letter-spacing: 0.44px;
    } 
`;

const Icon = styled.img`
    margin-right: 5px;

    @media (min-width: 601px) {
        margin-right: 7.5px;
    }

    @media (min-width: 1201px) {
        margin-right: 10px;
    } 
`;

const Image = styled.img`
    height: 172.5px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    margin-top: 20px;

    @media (min-width: 601px) {
        height: 225px;
        margin-top: 25px;
    }

    @media (min-width: 1201px) {
        height: 325px;
        margin-top: 30px;
    } 
`;

const ProfileImage = styled.img`
    padding-top: 2px;
    height: 99%;
    width: 99%;
    margin-left: 2px;
    z-index: -1;

    @media (min-width: 601px) {
        padding-top: 3px;
        margin-left: 3px;
    }

    @media (min-width: 1201px) {
        padding-top: 4px;
        margin-left: 4px;
    } 
`;

const PositionText = styled.p`
    color: #434343;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.22px;
    margin: 15px 0 0 20px;

    @media (min-width: 601px) {
        font-size: 21px;
        letter-spacing: 0.33px;
        margin: 22.5px 0 0 30px;
    }

    @media (min-width: 1201px) {
        font-size: 28px;
        letter-spacing: 0.44px;
        margin: 30px 0 0 40px;
    } 
`;

const YearText = styled.p`
    color: #434343;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 28.8px; /* 192% */
    letter-spacing: 0.22px;
    margin: 0 0 0 20px;

    @media (min-width: 601px) {
        font-size: 18px;
        letter-spacing: 0.33px;
        margin: 0 0 0 30px;
    }

    @media (min-width: 1201px) {
        font-size: 24px;
        letter-spacing: 0.44px;
        margin: 0 0 0 40px;
    } 
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

    @media (min-width: 601px) {
        font-size: 21px;
        line-height: 43.2px;
        letter-spacing: 0.33px;
        margin: -31.5px 0 0 105px;
        padding: 0;
    }

    @media (min-width: 1201px) {
        font-size: 28px;
        line-height: 57.6px;
        letter-spacing: 0.44px;
        margin: -42px 0 0 140px;
        padding: 0;
    } 
`;

const Li = styled.li`
    
`;


export default ContentWindow;
