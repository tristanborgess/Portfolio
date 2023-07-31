import enterArrow from './assets/enterArrow.svg';
import expressArrow from "./assets/expressArrow.svg";
import twitter from "./assets/iconTwitter.svg";
import substack from "./assets/iconSubstack.svg";
import linkedin from "./assets/iconLinkedIn.svg";
import github from "./assets/iconGithub.svg";
import behance from "./assets/iconBehance.svg";
import profilePic from "./assets/TristanAbout1.svg"

export const aboutData = [
    {
        dynamicText: "That's me! Click Next to lean more...",
        content: [
            {
                type: "image",
                src: profilePic,
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
                text: "Currently : Studying Web Development",
            },
            {
                type: "skillsList",
                text: "Skills :",
                items: ["UI,UX & CX Design", "Explaining Bitcoin", "Event Organization", "Technical Writing", "Graphic Design", "Getting things done" ]
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

export const projectsData = [
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
                src: "path_to_your_project_image.jpg",
            },
            {
                type: "link",
                text:"CLICK FOR MORE",
                url: "",
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
                src: "path_to_your_project_image.jpg",
            },
            {
                type: "link",
                text:"CLICK FOR MORE",
                url: "",
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
                text: "Paco travels the world using Bitcoin, Mexico was country no.38. I also went on this country-wide tour with him.",
            },
            {
                type: "image",
                src: "path_to_your_project_image.jpg",
            },
            {
                type: "link",
                text:"CLICK FOR MORE",
                url: "",
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
                src: "path_to_your_project_image.jpg",
            },
            {
                type: "link",
                text:"CLICK FOR MORE",
                url: "",
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
                src: "path_to_your_project_image.jpg",
            },
            {
                type: "link",
                text:"CLICK FOR MORE",
                url: "",
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