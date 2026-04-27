import { Search, Wifi, BatteryMedium, User } from 'lucide-react';

//nav constants
export const navLinks = [
    {id:1,title:"Projects" , url:"#url"},
    {id:2,title:"Contacts" , url:"#url"},
    {id:3,title:"Resume", url:"#url"},
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
        id:"explorer",
        name:"Explorer",
        icon:"/icons/explorer.avif",
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



export const locations = {

}

export const Z_INDEX = {
    navbar : 9999,
    dock : 9999
}

//windows
export const INITIAL_Z_INDEX = 10;


// window items
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
