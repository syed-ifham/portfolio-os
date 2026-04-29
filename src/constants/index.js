import { Search, Wifi, BatteryMedium, User } from 'lucide-react';

//nav constants
export const navLinks = [
    {id:1,title:"Projects" , type:"finder",isOpen:false},
    {id:2,title:"Contacts" , type:"contact",isOpen:false},
    {id:3,title:"Resume", type:"resume",isOpen:false},
];

export const STATUS_BAR_ICONS = [
    {
        id: 'search',
        Icon: Search,
        size: 15,
        strokeWidth: 2.5
    },
    {
        id: 'wifi',
        Icon: Wifi,
        size: 17,
        strokeWidth: 2.5
    },
    {
        id: 'battery',
        Icon: BatteryMedium,
        size: 18,
        strokeWidth: 2
    },
    {
        id: 'user',
        Icon: User,
        size: 15,
        strokeWidth: 2.5
    },
];


//dock constants
export const dockApps = [

    {
        id:"group-apps",
        name:"More",
        icon:"/icons/group-apps.avif",
        canOpen:true

    },

    {
        id:"messenger",
        name:"Let's talk",
        icon:"/icons/messenger.avif",
        canOpen:true

    },

    {
        id:"youtube",
        name:"YouTube",
        icon:"/icons/youtube.png",
        canOpen:true

    },

    {
        id:"finder",
        name:"Portfolio",
        icon:"/icons/finder.png",
        canOpen:true

    },
    {
        id:"safari",
        name:"Articles",
        icon:"/icons/safari.png",
        canOpen:true

    },

    {
        id:"photos",
        name:"Gallery",
        icon:"/icons/gallery.avif",
        canOpen:true

    },

    {
        id:"contact",
        name:"Contact",
        icon:"/icons/contact.avif",
        canOpen:true

    },

    {
        id:"terminal",
        name:"Skills",
        icon:"/icons/terminal.png",
        canOpen:true

    },

    {
        id:"trash",
        name:"Dont' see",
        icon:"/icons/trash.avif",
        canOpen:true

    },

];

//terminal
export const techStack = [
    {
        category : "Frontend",
        items : ["React.js" , "Next.js", "TypeScript"],
    },
    {
        category : "Styling",
        items : ["CSS" , "TailwindCSS","Material UI","Daisy UI"],
    },

    {
        category : "Backend",
        items : ["Express.js", "Spring Boot","Spring AI"],
    },

    {
        category : "Database",
        items : ["PostgresSQL" , "MongoDB"],
    },

    {
        category : "Dev Tools",
        items : ["AWS", "Git" , "GitHub", "Docker"],
    },
];

export const LOCATIONS = {
        files : {
            resume : "/files/resume.pdf",
        },

        finder : {
            WORK_LOCATION : {
                id : 1,
                type:"work",
                name : "Work",
                icon : "/icons/work.png",
                kind :"folder",
                children : [
                    //> project 1
                    {
                        id:101,
                        name: "Cal AI",
                        icon : "/icons/mac-folder.png",
                        kind:"folder",
                        position : {
                            top:50,
                            left:300,
                        },
                        windowPosition : "top-[50vh] left-50",
                        children : [
                            {
                                id:1010,
                                name : "Project Name.txt",
                                icon : "/icons/file.png",
                                kind:"file",
                                fileType:"txtfile",
                                position:"top-5 left-10",
                                description:[
                                    "Write Complete interactive catchy description here",
                                    "in multiple points",
                                    "in multiple points",
                                    "in multiple points",
                                ],
                            },

                            {
                                id:1011,
                                name : "Project Name.txt",
                                icon : "/icons/file.png",
                                kind:"file",
                                fileType:"imgfile",
                                position:"top-5 left-50",
                                description:[
                                    "Write Complete interactive catchy description here",
                                    "in multiple points",
                                    "in multiple points",
                                    "in multiple points",
                                ],
                            },
                        ],
                    },//end of project 1

                    //> project 2
                    {
                        id:102,
                        name: "Expense Tracker",
                        icon : "/icons/mac-folder.png",
                        kind:"folder",
                        position : {
                            top:10,
                            left:50,
                            right:0,
                            bottom:0,
                        },
                        windowPosition : "top-[20vh] left-40",
                        children : [
                            {
                                id:1020,
                                name : "Project Name.txt",
                                icon : "/icons/file.png",
                                kind:"file",
                                fileType:"txt",
                                position:"top-5 left-10",
                                description:[
                                    "Write Complete interactive catchy description here",
                                    "in multiple points",
                                    "in multiple points",
                                    "in multiple points",
                                ],
                            },
                            {
                                id:1021,
                                name : "Project Name.txt",
                                icon : "/icons/file.png",
                                kind:"file",
                                fileType:"txt",
                                position:"top-5 left-50",
                                description:[
                                    "Write Complete interactive catchy description here",
                                    "in multiple points",
                                    "in multiple points",
                                    "in multiple points",
                                ],
                            },
                        ],
                    },//end of project 2

                    //> project 3
                    {
                        id:103,
                        name: "Portfolio OS",
                        icon : "/icons/mac-folder.png",
                        kind:"folder",
                        windowPosition : "top-[30vh] left-80",
                        position : {
                            top:150,
                            left:100,
                            right:0,
                            bottom:0,
                        },
                        children : [
                            {
                                id:1030,
                                name : "portfolio.com",
                                icon : "/icons/safari.png",
                                kind:"file",
                                fileType:"url",
                                href:"https://syedifham.netlify.app",
                                position:"top-5 left-10",
                                description:[
                                    "Write Complete interactive catchy description here",
                                    "in multiple points",
                                    "in multiple points",
                                    "in multiple points",
                                ],
                            },
                        ],
                    },//end of project 3

                ],//end of child

            }, // end of work

            ABOUT_LOCATION  : {
                id : 2,
                type:"about",
                name : "About",
                icon : "/icons/info.png",
                kind :"folder",
                children : [
                    {
                        id:201,
                        name: "who am i",
                        icon : "/icons/file.png",
                        kind:"folder",
                        position : "top-10 left-5",
                        windowPosition : "top-[15vh] right-20",
                        children : [
                            {
                                id:2010,
                                name : "Project Name.txt",
                                icon : "/icons/#",
                                kind:"file",
                                fileType:"txt",
                                position:"top-5 left-10",
                                description:[
                                    "Write Complete interactive catchy description here",
                                    "in multiple points",
                                    "in multiple points",
                                    "in multiple points",
                                ],
                            },

                        ],
                    },//end of project 1

                    {
                        id:202,
                        name: "hackathon",
                        icon : "/icons/file.png",
                        kind:"folder",
                        position : "top-30 left-30",
                        windowPosition : "top-[15vh] right-20",
                        children : [
                            {
                                id:2010,
                                name : "Project Name.txt",
                                icon : "/icons/#",
                                kind:"file",
                                fileType:"txt",
                                position:"top-5 left-10",
                                description:[
                                    "Write Complete interactive catchy description here",
                                    "in multiple points",
                                    "in multiple points",
                                    "in multiple points",
                                ],
                            },

                        ],
                    },//end of project 1

                    {
                        id:203,
                        name: "skills",
                        icon : "/icons/file.png",
                        kind:"folder",
                        position : "top-10 left-60",
                        windowPosition : "top-[15vh] right-20",
                        children : [
                            {
                                id:2010,
                                name : "Project Name.txt",
                                icon : "/icons/#",
                                kind:"file",
                                fileType:"txt",
                                position:"top-5 left-10",
                                description:[
                                    "Write Complete interactive catchy description here",
                                    "in multiple points",
                                    "in multiple points",
                                    "in multiple points",
                                ],
                            },

                        ],
                    },//end of project 1

                ],//end of child

            },

            RESUME_LOCATION  :{
                id : 3,
                name : "Resume",
                icon : "/icons/file.png",
                kind :"folder",
                children : [
                  // resume section
                    {
                        id:301,
                        type:"resume",
                        name: "resume.pdf",
                        icon : "/icons/resume.png",
                        kind:"pdf",
                        position : "top-10 left-10",
                        windowPosition : "top-[15vh] right-20",
                    },

                ],//end of child

            },

            TRASH_LOCATION : {
                id : 4,
                type:"trash",
                name : "Trash",
                icon : "/icons/trash.png",
                kind :"folder",
                children : [
                    //> project 1
                    {
                        id:401,
                        name: "Application Name",
                        icon : "/icons/file.png",
                        kind:"folder",
                        position : "top-10 left-5",
                        windowPosition : "top-[15vh] right-20",
                        children : [
                            {
                                id:4010,
                                name : "Project Name.txt",
                                icon : "/icons/#",
                                kind:"file",
                                fileType:"txt",
                                position:"top-5 left-10",
                                description:[
                                    "Write Complete interactive catchy description here",
                                    "in multiple points",
                                    "in multiple points",
                                    "in multiple points",
                                ],
                            },

                            {
                                id:4011,
                                name : "Project Name.txt",
                                icon : "/icons/#",
                                kind:"file",
                                fileType:"txt",
                                position:"top-5 left-10",
                                description:[
                                    "Write Complete interactive catchy description here",
                                    "in multiple points",
                                    "in multiple points",
                                    "in multiple points",
                                ],
                            },
                        ],
                    },//end of project 1

                ],//end of child

            },
        },

};

export const FINDER_LOCATION = {
    work : LOCATIONS.finder.WORK_LOCATION,
    about : LOCATIONS.finder.ABOUT_LOCATION,
    resume : LOCATIONS.finder.RESUME_LOCATION,
    trash : LOCATIONS.finder.TRASH_LOCATION
}

export const Z_INDEX = {
    navbar : 9999,
    dock : 9999
}

//windows
export const INITIAL_Z_INDEX = 10;


// windows items
export const WINDOW_CONFIG = {

    "group-apps": { isOpen:false,zIndex:INITIAL_Z_INDEX ,data : null},
    "messenger" : { isOpen:false,zIndex:INITIAL_Z_INDEX ,data : null},
    "explorer" : { isOpen:false,zIndex:INITIAL_Z_INDEX ,data : null},
    "finder" : { isOpen:false,zIndex:INITIAL_Z_INDEX ,data : null},
    youtube : { isOpen:false,zIndex:INITIAL_Z_INDEX ,data : null},
    contact : { isOpen:false,zIndex:INITIAL_Z_INDEX ,data : null},
    safari : { isOpen:false,zIndex:INITIAL_Z_INDEX ,data : null},
    photos : { isOpen:false,zIndex:INITIAL_Z_INDEX ,data : null},
    terminal : { isOpen:false,zIndex:INITIAL_Z_INDEX ,data : null},
    trash : { isOpen:false,zIndex:INITIAL_Z_INDEX ,data : null},


    resume : { isOpen:false,zIndex:INITIAL_Z_INDEX ,data : null},
    txtfile : { isOpen:false,zIndex:INITIAL_Z_INDEX ,data : null},
    imgfile : { isOpen:false,zIndex:INITIAL_Z_INDEX ,data : null},
};


//safari
export const blogPost = [
    {
        id:1,
        date : "Feb 21, 2026",
        title:"Something i would love to talk about",
        image : "/images/blog.png",
        link : "#url"
    }  ,
    {
        id:2,
        date : "Feb 21, 2026",
        title:"Something i would love to talk about",
        image : "/images/blog.png",
        link : "#url"
    }  ,
    {
        id:3,
        date : "Feb 21, 2026",
        title:"Something i would love to talk about",
        image : "/images/blog.png",
        link : "#url"
    }  ,
];

//contacts
export const socials = [
    {
        id:1,
        text:"Github",
        icon:"/icons/github.png",
        bg:"#181717",
        link : "https://github.com/syed-ifham"
    },
    {
        id:2,
        text:"LeetCode",
        icon:"/icons/leetcode.png",
        bg:"#FFA116",
        link : "https://leetcode.com/u/ifham786/"
    },

    {
        id:3,
        text:"Blog",
        icon:"/icons/blog.png",
        bg:"#EA4335",
        link : "#"
    },

    {
        id:4,
        text:"LinkedIn",
        icon:"/icons/linkedin.png",
        bg:"#0A66C2",
        link : "https://linkedin.com/in/syedifham"
    },
]