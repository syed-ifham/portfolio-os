import {Search, Wifi, BatteryMedium, User} from 'lucide-react';

//----------NAVBAR✅
export const navLinks = [
  {id: 1, title: "Projects", type: "finder", isOpen: false}, {
    id: 2, title: "Contacts", type: "contact", isOpen: false
  }, {id: 3, title: "Resume", type: "resume", isOpen: false},
];

export const STATUS_BAR_ICONS = [
  {
    id: 'search', Icon: Search, size: 15, strokeWidth: 2.5
  }, {
    id: 'wifi', Icon: Wifi, size: 17, strokeWidth: 2.5
  }, {
    id: 'battery', Icon: BatteryMedium, size: 18, strokeWidth: 2
  }, {
    id: 'user', Icon: User, size: 15, strokeWidth: 2.5
  },
];

//------------WINDOW✅
export const Z_INDEX = {
  navbar: 9999, dock: 9999, windowInitial: 100,
}

//dock items✅
export const dockApps = [

  {
    id: "group-apps", name: "More", icon: "/icons/group-apps.avif", canOpen: true,
  },

  {
    id: "messenger", name: "Let's talk", icon: "/icons/messenger.avif", canOpen: true

  },

  {
    id: "youtube", name: "YouTube", icon: "/icons/youtube.png", canOpen: true
  },

  {
    id: "finder", name: "Portfolio", icon: "/icons/finder.png", canOpen: true

  },

  {
    id: "safari", name: "Articles", icon: "/icons/safari.png", canOpen: true

  },

  {
    id: "photos", name: "Gallery", icon: "/icons/gallery.avif", canOpen: true

  },

  {
    id: "contact", name: "Contact", icon: "/icons/contact.avif", canOpen: true

  },

  {
    id: "terminal", name: "Skills", icon: "/icons/terminal.png", canOpen: true,
  },

  {
    id: "trash", name: "Dont' Look", icon: "/icons/trash.avif", canOpen: true,
  },

];

//terminal✅
export const techStack = [
  {
    category: "Frontend", items: ["React.js", "Next.js", "TypeScript"],
  }, {
    category: "Styling", items: ["CSS", "TailwindCSS", "Material UI", "Daisy UI"],
  },

  {
    category: "Backend", items: ["Express.js", "Spring Boot", "Spring AI"],
  },

  {
    category: "Database", items: ["PostgresSQL", "MongoDB"],
  },

  {
    category: "Dev Tools", items: ["AWS", "Git", "GitHub", "Docker"],
  },
];

//safari
export const blogPost = [
  {
    id: 1, date: "Feb 21, 2026", title: "Something i would love to talk about", image: "/images/blog.png", link: "#url"
  }, {
    id: 2, date: "Feb 21, 2026", title: "Something i would love to talk about", image: "/images/blog.png", link: "#url"
  }, {
    id: 3, date: "Feb 21, 2026", title: "Something i would love to talk about", image: "/images/blog.png", link: "#url"
  },
];

//contacts✅(update blog)
export const socials = [
  {
    id: 1, text: "Github", icon: "/icons/github.png", bg: "#181717", link: "https://github.com/syed-ifham"
  }, {
    id: 2, text: "LeetCode", icon: "/icons/leetcode.png", bg: "#FFA116", link: "https://leetcode.com/u/ifham786/"
  },

  {
    id: 3, text: "Blog", icon: "/icons/blog.png", bg: "#EA4335", link: "#"
  },

  {
    id: 4, text: "LinkedIn", icon: "/icons/linkedin.png", bg: "#0A66C2", link: "https://linkedin.com/in/syedifham"
  },
];


const FINDER_LOCATION = {
  work: {

    id: 1, type: "work", name: "Work", icon: "/icons/work.png", kind: "folder", children: [//project 1
      {
        id: 101, name: "Cal AI", icon: "/icons/mac-folder.png", kind: "folder", position: {
          top: 50, left: 300,
        }, windowPosition: "top-[50vh] left-50",
        children: [
          {
            "id": 1010,
            "name": "CalAi_Detail.txt",
            "subtitle": "CALORIE AI TRACKER",
            "headerIcon": "🍎",
            "image": "/images/calorie.png",
            "icon": "/icons/file.png",
            "kind": "file",
            "fileType": "txt",
            "position": {
              x: 300,
              y: 100
            },
            "links": [
              {"label": "GitHub Repository", "url": "#", "icon": "🔗"},
              {"label": "Live Demo", "url": "#", "icon": "⭐"}
            ],
            "introduction": "CalAi is a sophisticated calorie tracking application that simplifies macro-nutrition monitoring with AI-powered insights to help you achieve your fitness goals.",
            "listIcons": ["🍌", "🥕", "⚡", "🍉"],
            "description": ["A sophisticated Calorie AI clone designed to simplify macro-nutrition tracking with precision.", "Instantly break down protein, carbs, and fats to ensure your nutrition aligns perfectly with your fitness goals.", "Leverages AI to interpret meal data and provide actionable insights into your daily eating habits.", "Smart goal-setting features that adapt as you progress through your bulking or cutting phases."]
          }, {
            "id": 1011,
            "name": "GitHub",
            "icon": "/icons/github.png",
            "kind": "link",
            "fileType": "url",
            href: "https://syedifham.netlify.app",
            "position": "top-49 left-15"
          },
          {
            "id": 1012,
            "name": "Safari",
            "icon": "/icons/safari.png",
            "kind": "link",
            "fileType": "url",
            href: "https://syedifham.netlify.app",
            "position": "top-45 left-65"
          }, {
            "id": 1013,
            "name": "Cal AI.png",
            "icon": "/images/calorie.png",
            "imageUrl": "/images/calorie.png",
            "kind": "file",
            "fileType": "img",
            "position": "top-12 left-60"
          },

        ], //> end project1
      },


      //> project 2
      {
        id: 102, name: "Expense Tracker", icon: "/icons/mac-folder.png", kind: "folder", position: {
          top: 10, left: 50, right: 0, bottom: 0,
        }, windowPosition: "top-[20vh] left-40",
        children: [
          {
            "id": 1020,
            "name": "Project_Details.txt",
            "subtitle": "EXPENSE TRACKER",
            "headerIcon": "💰",
            "image": "/images/expense_dashboard.png",
            "icon": "/icons/file.png",
            "kind": "file",
            "fileType": "txt",
            "position": {
              x: 500,
              y: 150
            },
            "links": [
              {"label": "GitHub Repository", "url": "#", "icon": "🔗"},
              {"label": "Live Demo", "url": "#", "icon": "⭐"}
            ],
            "introduction": "Expense Tracker is a comprehensive financial management application that syncs with Windows Phone Link to automatically capture transactions and provide real-time budget insights.",
            "listIcons": ["💰", "📊", "🎯", "✨"],
            "description": ["Syncs seamlessly with Windows Phone Link to automatically capture and log SMS transactions in real-time.", "Comprehensive web application built to maintain your transaction history and accurate account balances.", "Features smart, AI-powered budgeting tools to help keep your financial goals on track effortlessly.", "Includes a unified, intuitive dashboard that visualizes every detail of your daily financial health at a glance."]
          },
          {
            "id": 1021,
            "name": "GitHub",
            "icon": "/icons/github.png",
            "kind": "link",
            "href": "https://syedifham.netlify.app",
            "fileType": "url",
            "position": "top-10 left-60"
          },
          {
            "id": 1022,
            "name": "Safari",
            "icon": "/icons/safari.png",
            "kind": "link",
            href: "https://syedifham.netlify.app",
            "fileType": "url",
            "position": "top-50 left-20"
          },
          {
            "id": 1023,
            "name": "Dashboard View.png",
            "icon": "/images/expense_dashboard.png",
            "imageUrl": "/images/expense_dashboard.png",
            "kind": "file",
            "fileType": "img",
            "position": "top-40 left-60"
          }
        ],
      },//end of project 2

      //> project 3
      {
        id: 103,
        name: "Portfolio OS",
        icon: "/icons/mac-folder.png",
        kind: "folder",
        windowPosition: "top-[30vh] left-80",
        position: {
          top: 150, left: 100,
        },
        children: [
          {
            "id": 1030,
            "name": "PortfolioDetail.txt",
            "subtitle": "PORTFOLIO OS",
            "headerIcon": "💻",
            "image": "/images/portfolio.png",
            "icon": "/icons/file.png",
            "kind": "file",
            "fileType": "txt",
            "position": {
              x: 200,
              y: 200
            },
            "links": [
              {"label": "Live Demo", "url": "https://github.com/ifham/portfolio-os", "icon": "🔗"},
              {"label": "Star Repository", "url": "#", "icon": "⭐"}
            ],
            "introduction": "Hey, I'm Ifham. Welcome to my portfolio. This project is a painstakingly crafted interactive web experience designed to mimic the polished aesthetics of a modern desktop environment.",
            "listIcons": ["🎨", "🪟", "⚡", "🚀"],
            "description": [
              "Pixel-Perfect UI: Painstakingly styled with Tailwind CSS to recreate the frosted glass (glassmorphism) and polished aesthetics of a modern desktop.",
              "Interactive Window Management: Fully draggable, resizable (soon), and stackable windows managed seamlessly with Zustand.",
              "Dynamic Dock: A buttery-smooth, macOS-style bottom dock with hover effects and application launching capabilities.",
              "Apps Clone: A custom-built functional app window to showcase my experience, web projects, and skills within the OS."
            ]
          },
          {
            "id": 1031,
            "name": "Source Code",
            "icon": "/icons/github.png",
            "kind": "link",
            href: "https://syedifham.netlify.app",
            "fileType": "url",
            "position": "top-13 left-58"
          },
          {
            id: 1032,
            name: "portfolio.com",
            icon: "/icons/safari.png",
            kind: "link",
            fileType: "url",
            href: "https://syedifham.netlify.app",
            position: "top-44 left-60",
            description: ["Write Complete interactive catchy description here", "in multiple points", "in multiple points", "in multiple points",],
          },
          {
            "id": 1033,
            "name": "portfolio.png",
            "icon": "/images/portfolio.png",
            imageUrl: "/images/portfolio.png",
            "kind": "file",
            "fileType": "img",
            position: "top-45 left-20",
          }

        ],
      },//end of project 3

    ],

  },

  about: {
    id: 2, type: "about", name: "About", icon: "/icons/info.png", kind: "folder",
    children: [
      {
        id: 301,
        type: "resume",
        name: "resume.pdf",
        icon: "/icons/resume.png",
        kind: "resume",
        position: "top-10 left-10",
        windowPosition: "top-[15vh] right-20",
      },

    ],
  },

  resume: {
    id: 3, type: "resume", name: "Resume", icon: "/icons/file.png", kind: "folder", children: [
      {
        id: 301,
        type: "resume",
        name: "resume.pdf",
        icon: "/icons/resume.png",
        kind: "resume",
        position: "top-10 left-10",
        windowPosition: "top-[15vh] right-20",
      },

    ],
  },

  trash: {
    id: 4, type: "trash", name: "Trash", icon: "/icons/trash.png", kind: "folder",
    children: [
      {
        "id": 1041,
        "name": "portfolio.png",
        "icon": "/images/portfolio.png",
        imageUrl: "/images/portfolio.png",
        "kind": "file",
        "fileType": "img",
        position: "top-45 left-20",
      },
      {
        "id": 1042,
        "name": "Dashboard View.png",
        "icon": "/images/expense_dashboard.png",
        "imageUrl": "/images/expense_dashboard.png",
        "kind": "file",
        "fileType": "img",
        "position": "top-40 left-60"
      },
      {
        "id": 1013,
        "name": "Cal AI.png",
        "icon": "/images/calorie.png",
        "imageUrl": "/images/calorie.png",
        "kind": "file",
        "fileType": "img",
        "position": "top-12 left-60"
      },

    ]

  },

};

//finder
export const LOCATIONS = {
  files: {
    resume: "/files/resume.pdf",
  },

  finder: {
    work: FINDER_LOCATION.work,
    about: FINDER_LOCATION.about,
    resume: FINDER_LOCATION.resume,
    trash: FINDER_LOCATION.trash,
  },

  profile: "/images/ifham.png",

};

//--------------dock & navleft
export const WINDOW_CONFIG = {
  //apps
  "group-apps": {isOpen: false, zIndex: Z_INDEX.windowInitial, data: null},
  messenger: {isOpen: false, zIndex: Z_INDEX.windowInitial, data: null},
  finder: {isOpen: false, zIndex: Z_INDEX.windowInitial, data: null},
  youtube: {isOpen: false, zIndex: Z_INDEX.windowInitial, data: null},
  contact: {isOpen: false, zIndex: Z_INDEX.windowInitial, data: null},
  safari: {isOpen: false, zIndex: Z_INDEX.windowInitial, data: null},
  photos: {isOpen: false, zIndex: Z_INDEX.windowInitial, data: null},
  terminal: {isOpen: false, zIndex: Z_INDEX.windowInitial, data: null},
  trash: {isOpen: false, zIndex: Z_INDEX.windowInitial, data: null},

  //files
  resume: {isOpen: false, zIndex: Z_INDEX.windowInitial, data: null},
  txtfile: {isOpen: false, zIndex: Z_INDEX.windowInitial, data: null},
  imgfile: {isOpen: false, zIndex: Z_INDEX.windowInitial, data: null},
};