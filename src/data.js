import enterArrow from './assets/enterArrow.svg';
import expressArrow from "./assets/expressArrow.svg";
import twitter from "./assets/iconTwitter.svg";
import substack from "./assets/iconSubstack.svg";
import linkedin from "./assets/iconLinkedIn.svg";
import github from "./assets/iconGithub.svg";
import behance from "./assets/iconBehance.svg";
import profilePic from "./assets/TristanAbout1.svg"
import project1 from "./assets/project1.png"
import project2 from "./assets/Projects2.png"
import project3 from "./assets/Projects3.jpeg"
import project4 from "./assets/Projects4.png"
import project5 from "./assets/Projects5.png"
import code1 from "./assets/code1.png";
import code2 from "./assets/code2.png";
import code3 from "./assets/code3.png";
import code4 from "./assets/code4.png";

export const aboutData = [
    {
        dynamicText: "That's me! Click Next to lean more...",
        content: [
            {
                type: "profileImage",
                url: profilePic,
            },
        ],
    },
    {
        dynamicText: "A brief...",
        content: [
            {
                type: "header",
                text: "Some info..."
            },
            {
                type: "fromText",
                text: "From : Montreal, Canada",
            },
            {
                type: "basedText",
                text: "Based in : Mexico",
            },
            {
                type: "currentlyText",
                text: "Currently : Building",
            },
            {
                type: "skillsList",
                text: "Skills :",
                items: ["UI,UX & CX Design", "Explaining Bitcoin", "Event Organization", "Technical Writing", "Graphic Design" ]
            }
        ],
    },
    {
        dynamicText: "Some of my professional experience...",
        content: [
        [   
                {
                    type: "header",
                    text: "I was..."
                },
                {
                    type: "positionText",
                    text: "Co-founder of Veriphi, a Bitcoin-only exchange.",
                },
                {
                    type: "yearText",
                    text: "2019-2022",
                },
                {
                    type: "iconText",
                    icon: enterArrow,
                    text: "Head of Operations & Support",
                },
                {
                    type: "iconText",
                    icon: enterArrow,
                    text: "UI Designer, Editor, Writer",
                },
                {
                    type: "iconTextSurprise",
                    icon: expressArrow,
                    text: "Got acqui-hired by Bull Bitcoin!",
                },
            ],
            [
                {
                    type: "positionText",
                    text: "Director of Bitcoin Support by Bull Bitcoin",
                },
                {
                    type: "yearText",
                    text: "2022-2023",
                },
                {
                    type: "iconText",
                    icon: enterArrow,
                    text: "Built & Managed Self-Custody Service",
                },
                {
                    type: "iconText",
                    icon: enterArrow,
                    text: "Editor, Writer, Graphic Design",
                },
            ],
        ],
    },
    {
        dynamicText: "Some of my life experience",
        content: [
            [   
                    {
                        type: "header",
                        text: "I was..."
                    },
                    {
                        type: "positionText",
                        text: "Co-organizer of Bitcoin Montréal.",
                    },
                    {
                        type: "yearText",
                        text: "2019-2023",
                    },
                    {
                        type: "iconText",
                        icon: enterArrow,
                        text: "Largest & oldest Bitcoin Meetup group.",
                    },
                    {
                        type: "iconText",
                        icon: enterArrow,
                        text: "Did over 50 events & a conference.",
                    },
                ],
                [
                    {
                        type: "positionText",
                        text: "Co-organizer & founder of Bitcoin Querétaro.",
                    },
                    {
                        type: "yearText",
                        text: "2023-present",
                    },
                    {
                        type: "iconText",
                        icon: enterArrow,
                        text: "First Bitcoin Meetup group in the state!",
                    },
                    {
                        type: "iconText",
                        icon: enterArrow,
                        text: "Presenter, logistics, design.",
                    },
                ],
            ],
    }
];

export const designData = [
    {
        dynamicText: "Excerpts from my freelance work...",
        content: [
            {
                type: "header",
                text: "Bull Bitcoin Booklet",
            },
            {
                type: "iconText",
                icon: enterArrow,
                text: "Printed document for their Prime service.",
            },
            {
                type: "image",
                url: project1,
            },
            {
                type: "link",
                url: "https://indd.adobe.com/view/b124c6c6-904f-4cf0-b403-b2b2b43ea892",
            },
        ],
    },
    {
        dynamicText: "Mix of Midjourney, Photoshop & Procreate.",
        content: [
            {
                type: "header",
                text: "The Bitcoin Way",
            },
            {
                type: "iconText",
                icon: enterArrow,
                text: "Images for their website & stationery.",
            },
            {
                type: "image",
                url: project2,
            },
            {
                type: "link",
                url: "https://www.thebitcoinway.com/",
            },
        ],
    },
    {
        dynamicText: "Mix of Midjourney, Photoshop & Procreate.",
        content: [
            {
                type: "header",
                text: "Paco de la India Bitcoin in Mexico Tour",
            },
            {
                type: "iconText",
                icon: enterArrow,
                text: "Paco did a tour of Mexico as part of hiw world travels using Bitcoin.",
            },
            {
                type: "image",
                url: project3,
            },
            {
                type: "link",
                url: "https://x.com/RunwithBitcoin/status/1642525598672121858?s=20",
            },
        ],
    },
    {
        dynamicText: "Working some Figma magic...",
        content: [
            {
                type: "header",
                text: "Veriphi web app redesign",
            },
            {
                type: "iconText",
                icon: enterArrow,
                text: "Made the UI sleeker and added new features.",
            },
            {
                type: "image",
                url: project4,
            },
            {
                type: "link",
                url: "https://www.behance.net/gallery/156650859/BTC-OTC-Exchange-app",
            },
        ],
    },
    {
        dynamicText: "Displaying data heavy tables on mobile...",
        content: [
            {
                type: "header",
                text: "Choose a Wallet UI",
            },
            {
                type: "iconText",
                icon: enterArrow,
                text: "Pick and compare Bitcoin wallets & features.",
            },
            {
                type: "image",
                url: project5,
            },
            {
                type: "link",
                url: "https://www.behance.net/gallery/148365073/Choose-a-Wallet",
            },
        ],
    },
];

export const codeData = [
    {
        dynamicText: "Some projects I built...",
        content: [
            {
                type: "header",
                text: "Dodging Game",
            },
            {
                type: "iconText",
                icon: enterArrow,
                text: "Stay alive by dodging burgers!",
            },
            {
                type: "image",
                url: code1,
            },
            {
                type: "link",
                url: "https://project-js-nyan-cat-theta.vercel.app/",
            },
        ],
    },
    {
        dynamicText: "Experimenting with React Effects",
        content: [
            {
                type: "header",
                text: "Cookie-clicker game",
            },
            {
                type: "iconText",
                icon: enterArrow,
                text: "Pump your cookie production",
            },
            {
                type: "image",
                url: code2,
            },
            {
                type: "link",
                url: "https://react-effects-navy.vercel.app/game",
            },
        ],
    },
    {
        dynamicText: "Using React State",
        content: [
            {
                type: "header",
                text: "Typehead for booklist",
            },
            {
                type: "iconText",
                icon: enterArrow,
                text: "Search through a list of books!",
            },
            {
                type: "image",
                url: code3,
            },
            {
                type: "link",
                url: "https://react-state-p2-five.vercel.app/",
            },
        ],
    },
    {
        dynamicText: "Getting a hang of the React ecosystem",
        content: [
            {
                type: "header",
                text: "Shop at the Fruit Emporium",
            },
            {
                type: "iconText",
                icon: enterArrow,
                text: "Responsive e-commerce for fruit!",
            },
            {
                type: "image",
                url: code4,
            },
            {
                type: "link",
                url: "https://react-ecosystem-black.vercel.app/",
            },
        ],
    },
];

export const footerData = [
    {
        icon: twitter,
        text: "Twitter",
        url:"https://twitter.com/TristanBorgess",
    },
    {
        icon: linkedin,
        text: "LinkedIn",
        url:"https://www.linkedin.com/in/tristan-borges-solari/",
    },
    {
        icon: github,
        text: "Github",
        url:"https://github.com/tristanborgess",
    },
    {
        icon: behance,
        text: "Behance",
        url:"https://www.behance.net/tristanborges1",
    },
    {
        icon: substack,
        text: "Substack",
        url:"https://tristanborgess.substack.com/",
    },
];