import { Settings, CropRotate, ViewInAr, PieChart, Code, BarChart, CloudOutlined, FavoriteBorder, Public, PersonOutlined, AddLocationAltOutlined, PhoneIphone, EmailOutlined, Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material"

export const navlink = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/about",
    text: "About",
  },
  {
    url: "/services",
    text: "Services",
  },
  {
    url: "/portfolio",
    text: "Portfolio",
  },
  {
    url: "/testimonials",
    text: "Testimonials",
  },
  {
    url: "/blog",
    text: "Blog",
  },
  {
    url: "/contact",
    text: "Contact",
  },
]
export const home = [
  {
    text: "HELLO I'M",
    name: "ABHAY GUPTA",
    post: "WEB DEVELOPER",
    design: "CRITICAL THINKER",
    desc: " I am a frontend developer with a robust understanding of data structures and algorithms. In addition, I possess foundational knowledge of IoT, complementing my technical expertise. I am highly enthusiastic about learning new skills and continuously expanding my knowledge to stay at the forefront of technological advancements.",
  },
]
export const about = [
  {
    desc: " I’m from Bikaner, Rajasthan, and I’m currently pursuing my B.Tech in Computer Science Engineering at LNMIIT, Jaipur. I have a strong passion for technology and am particularly skilled in frontend development, where I enjoy creating engaging and user-friendly interfaces. Additionally, I have a solid foundation in data structures and algorithms, which helps me solve complex problems efficiently. I’m excited to continue learning and growing in the tech field!",
    desc1:
      "My strengths include adaptability, attention to detail, and strong team collaboration skills, which help me thrive in dynamic environments and produce high-quality work.",
    cover: "./images/abhay.jpg",
  },
];
export const services = [
  {
    id: 1,
    icon: <Settings />,
    title: "Creative Design",
    desc: "Creative design integrates aesthetics and functionality, ensuring that visual elements enhance user engagement. ",
  },
  {
    id: 2,
    icon: <CropRotate />,
    title: "Clean Code",
    desc: "Clean code emphasizes readability, maintainability, and efficiency in software development.",
  },
  {
    id: 3,
    icon: <ViewInAr />,
    title: "Responsive Design",
    desc: "Responsive design ensures that web applications provide an optimal viewing experience across a wide range of devices.",
  },
  {
    id: 4,
    icon: <PieChart />,
    title: "Material UI	",
    desc: "Material UI is a popular React UI framework that implements Google's Material Design principles. ",
  },
  {
    id: 5,
    icon: <Code />,
    title: "Material UI Icons",
    desc: "Material UI Icons offer a comprehensive library of customizable icons that align with Material Design guidelines.",
  },
  {
    id: 6,
    icon: <BarChart />,
    title: "Awesome Support",
    desc: "Awesome support refers to exceptional customer service that prioritizes user satisfaction. ",
  },
];
export const project = [
  {
    id: 1,
    icon: <CloudOutlined />,
    num: "1",
    title: "HAPPY CLIENT",
  },
  {
    id: 2,
    icon: <FavoriteBorder />,
    num: "5",
    title: "PROJECTS COMPLETED",
  },
  {
    id: 3,
    icon: <Public />,
    num: "108",
    title: "FILES DOWNLOADED",
  },
  {
    id: 4,
    icon: <PersonOutlined />,
    num: "1446",
    title: "LINES OF CODE",
  },
]
export const portfolio = [
  {
    id: 1,
    cover: "../images/port/port1.jpg",
    name: "Brand",
    category: "Development",
    title: "Brex Logo",
  },
  {
    id: 2,
    cover: "../images/port/port2.jpg",
    name: "Brand",
    category: "DSA",
    title: "Brex Logo",
  },
  {
    id: 3,
    cover: "../images/port/port3.jpg",
    name: "Brand",
    category: "DSA",
    title: "Brex Logo",
  },
  {
    id: 4,
    cover: "../images/port/port4.jpg",
    name: "Brand",
    category: "Development",
    title: "Brex Logo",
  },
  {
    id: 5,
    cover: "../images/port/port5.jpg",
    name: "Brand",
    category: "Security",
    title: "Brex Logo",
  },
  {
    id: 6,
    cover: "../images/port/port6.jpg",
    name: "Brand",
    category: "Security",
    title: "Brex Logo",
  },
]
export const testimonials = [
  {
    id: 1,
    text: "Abhay is an exceptional problem solver and a quick learner. Their dedication to web development, DSA, and cybersecurity, combined with their kindness, makes them a great friend and colleague",
    image: "./images/testimonials/team-1.png",
    name: "Yash Saraswat",
    post: "Front End Developer",
  },
  {
    id: 2,
    text: "Abhay is an amazing developer and a fast learner. Their multitasking skills and enthusiasm for DSA and cybersecurity truly set them apart. Plus, they are genuinely a good person!",
    image: "./images/testimonials/team-2.png",
    name: "YashVardhan Baid",
    post: "Back End Developer",
  },
  {
    id: 3,
    text: "I've seen Abhay excel as a group leader, managing multiple projects effortlessly. His passion for cybersecurity is inspiring, and they are always ready to help others",
    image: "./images/testimonials/team-3.png",
    name: "Aryan Shah",
    post: "React Developer",
  },
];
export const blog = [
  {
    id: 1,
    title: "PortFolio Website",
    date: "Jun 27, 2024",
    author: "Abhay Gupta",
    desc: "My portfolio project showcases my skills as a web developer, featuring a clean design that highlight my best work.",
    cover: "./images/blog/p1.jpg",
  },
  {
    id: 2,
    title: "Smart Kitchen",
    date: "May 14, 2023",
    author: "Sunil Sir and Rajbir Mam",
    desc: "This project monitors for LPG or other types of smoke, automatically activating the chimney to enhance safety and improve air quality in the environment",
    cover: "./images/blog/images.jpg",
  },
  {
    id: 3,
    title: "IP Configuration",
    date: "March 31, 2022",
    author: "Santu Sir",
    desc: "The IP Configuration project simplifies network management by enhancing connectivity and reducing configuration errors in local networks",
    cover: "./images/blog/b1.png",
  },
];
export const contact = [
  {
    icon: <AddLocationAltOutlined />,
    text1: "1 Ka 19 Pawanpuri",
    text2: "Bikaner,Rajasthan, 334001",
  },
  {
    icon: <PhoneIphone />,
    text1: "8769366599",
    text2: "8864243656",
  },
  {
    icon: <EmailOutlined />,
    text1: "abhaygupta2413@gmail.com",
    text2: "21ucs002@lnmiit.ac.in",
  },
]
export const social = [
  {
    icon: <Facebook />,
  },
  {
    icon: <Twitter />,
  },
  {
    icon: <Instagram />,
  },
  {
    icon: <YouTube />,
  },
]
