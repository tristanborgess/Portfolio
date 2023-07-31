import React from 'react';
import styled from 'styled-components';

const ContentWindow = ({ pageData }) => {
    return (
        <ContentWindowContainer>
            {pageData.content.map((item, index) => {
                switch (item.type) {
                    case 'header':
                        return <Header key={index}>{item.text}</Header>;
                    case 'fromText':
                    case 'basedText':
                    case 'currentlyText':
                    case 'skillsList':
                        return <Text key={index}>{item.text}</Text>;
                    case 'iconText':
                        return (
                            <IconText key={index}>
                                <Icon src={item.icon} alt={item.text} />
                                <Text>{item.text}</Text>
                            </IconText>
                        );
                    case 'image':
                        return <Image key={index} src={item.url} alt="" />;
                    default:
                        return null;
                }
            })}
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
  // Add your styles here
`;

const Text = styled.p`
  // Add your styles here
`;

const IconText = styled.div`
  // Add your styles here
`;

const Icon = styled.img`
  // Add your styles here
`;

const Image = styled.img`
    height: 146px; 
  // Add your other styles here
`;

export default ContentWindow;
