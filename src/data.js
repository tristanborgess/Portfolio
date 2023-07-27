const aboutData = [
    {
        dynamicText: "That's me! Click Next to lean more...",
        content: [
            {
                type: "image",
                src: " "
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
                    icon: "src/assets/enterArrow.svg",
                    text: "Head of Operations & Support",
                },
                {
                    type: "iconText",
                    icon: "src/assets/enterArrow.svg",
                    text: "UI Designer, Editor, Writer",
                },
                {
                    type: "iconTextSurprise",
                    icon: "src/assets/expressArrow.svg",
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
                    icon: "src/assets/enterArrow.svg",
                    text: "Built & Managed Self-Custody Service",
                },
                {
                    type: "iconText",
                    icon: "src/assets/enterArrow.svg",
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
                        icon: "src/assets/enterArrow.svg",
                        text: "Largest & oldest Bitcoin Meetup group.",
                    },
                    {
                        type: "iconText",
                        icon: "src/assets/enterArrow.svg",
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
                        icon: "src/assets/enterArrow.svg",
                        text: "First Bitcoin Meetup group in the state!",
                    },
                    {
                        type: "iconText",
                        icon: "src/assets/enterArrow.svg",
                        text: "Presenter, logistics, design.",
                    },
                ],
            ],
    }
];

const projectsData = [
    {
        dynamicText: "Excerpts from my freelance work...",
        content: [
            {
                type: "header",
                text: "Bull Bitcoin Booklet",
            },
            {
                type: "iconText",
                icon: "src/assets/enterArrow.svg",
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
                icon: "src/assets/enterArrow.svg",
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
                icon: "src/assets/enterArrow.svg",
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
                icon: "src/assets/enterArrow.svg",
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
                icon: "src/assets/enterArrow.svg",
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

const footerData = [
    {
        icon: "src/assets/iconTwitter.svg",
        text: "Twitter",
        url:"https://twitter.com/TristanBorgess",
    },
    {
        icon: "src/assets/iconLinkedIn.svg",
        text: "LinkedIn",
        url:"https://www.linkedin.com/in/tristan-borges-solari/",
    },
    {
        icon: "src/assets/iconGithub.svg",
        text: "Github",
        url:"https://github.com/tristanborgess",
    },
    {
        icon: "src/assets/iconBehance.svg",
        text: "Behance",
        url:"https://www.behance.net/tristanborges1",
    },
    {
        icon: "src/assets/iconSubstack.svg",
        text: "Substack",
        url:"https://tristanborgess.substack.com/",
    },
];

export { aboutData, projectsData, footerData };