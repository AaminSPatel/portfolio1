import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTheme } from './themeContext';
//import ImageCarousel from './imageCorousel'; // This component will handle the carousel
import { FaCss3, FaDatabase, FaHtml5, FaNode, FaNodeJs, FaReact } from 'react-icons/fa';
import {SiMysql,SiExpress,SiTailwindcss, SiJquery} from 'react-icons/si';
// icon : ['FaHtml5','FaCss3','FaNodeJs','FaReact','SiJquery','SiTailwindcss'],
const projectDetails = {
  1: {
    name: 'AaminShop E-commerce Platform',
    icon : [FaHtml5,FaCss3,FaNodeJs,FaReact,FaNode,SiExpress,SiMysql,SiTailwindcss],
    tech:['HTML','CSS','JavaScript','ReactJs','NodeJs','ExpressJs','MySql','TailwindCss'],
    details: 'Our e-commerce web application is a sophisticated platform built using cutting-edge technologies like ReactJS, JavaScript, Node.js, Express, MySQL, and Tailwind CSS. Designed to provide a seamless shopping experience, the app is fully responsive, ensuring that users have an optimal experience across all devices. The application includes robust user authentication features, allowing users to securely sign up, log in, and manage their accounts. Users can easily save their information, such as favorite items and cart details, making future shopping more convenient.The admin panel is equipped with comprehensive management tools to handle various aspects of the store efficiently. The shopping cart functionality is intuitive, allowing users to add, view, and modify items before placing an order. Orders are processed and saved in a MySQL database with six different tables, each dedicated to a specific function, ensuring organized and efficient data management.With a catalog of 50 products, users can effortlessly find what they need thanks to a powerful search bar and a well-organized tag list for filtering products. The application supports pagination, making it easy to navigate through the product listings. The user interface is designed to be visually appealing with a dynamic theme-changing effect, enhancing the overall user experience.The user dashboard is a comprehensive hub where users can access detailed information about their favorite items, cart contents, and recent orders. This feature-rich dashboard ensures that users have all the information they need at their fingertips, making it easy to track their shopping activities and manage their preferences. The combination of these features ensures a smooth, engaging, and user-friendly experience, positioning our application as a leading choice in the e-commerce landscape.',
    images: ['/src/assets/p11.png', '/src/assets/p12.png', '/src/assets/p13.png', '/src/assets/p14.png', '/src/assets/p15.png', '/src/assets/p16.png', '/src/assets/p17.png', '/src/assets/p18.png', '/src/assets/p19.png', '/src/assets/p110.png', '/src/assets/p1-11.png', '/src/assets/p1-12.png', '/src/assets/p1-13.png', '/src/assets/p1-14.png'],
  },
  2: {
    name: 'AS Camper Travel Page',
    icon : [FaHtml5,FaCss3,FaNodeJs],
    tech:['HTML','CSS','JavaScript'],
    details: 'Our travel agency website template is a stunning showcase of modern frontend design, crafted with HTML, CSS, and JavaScript. This visually captivating template brings travel dreams to life with its dynamic and immersive layout. From the moment users land on the homepage, they are greeted with a breathtaking hero section featuring high-resolution images of exotic destinations, setting the tone for their travel journey. The design seamlessly integrates interactive elements, including animated sliders, engaging call-to-action buttons, and elegant hover effects that enhance user interaction.The template is meticulously designed to highlight key travel packages, offers, and destinations through well-organized sections and visually appealing cards. Each section is carefully styled with modern CSS techniques, ensuring a responsive and aesthetically pleasing experience on any device. JavaScript is utilized to add smooth transitions and interactive features, such as a real-time search bar for finding travel deals and an interactive map for exploring destinations.The overall design embodies a sense of adventure and excitement, making it easy for users to explore and book their next getaway. With its clean, intuitive layout and stunning visual elements, this template serves as an excellent foundation for any travel agency looking to make a memorable impression on their clients through exceptional frontend design.',
    images: ['/src/assets/p21.png', '/src/assets/p22.png', '/src/assets/p23.png', '/src/assets/p25.png', '/src/assets/p26.png','/src/assets/p27.png'],
  },
  3: {
    name: 'Portfolio 1',
    icon : [FaHtml5,FaCss3,FaNodeJs,FaReact,SiJquery],
    tech:['HTML','CSS','JavaScript','ReactJs','JQuery'],
    details: 'Our portfolio webpage is a sophisticated and dynamic showcase of your work, designed with ReactJS and JavaScript to provide a highly interactive and engaging experience. The webpage features smooth scrolling effects that enhance navigation and provide a seamless user experience as visitors explore different sections. The inclusion of a sleek sidebar ensures easy access to key areas of the portfolio, including Skills, About Me, Education, and Contact sections.The Skills section is thoughtfully designed to highlight your expertise with visually appealing elements and interactive charts, showcasing your proficiency in various technologies. The About Me section offers a personal touch, providing visitors with insights into your background, accomplishments, and professional journey. The Education section details your academic achievements, displaying them in a well-organized format that emphasizes your qualifications.The Contact section is user-friendly, allowing potential clients or collaborators to reach out with ease through a streamlined contact form. Each section is crafted with ReactJS to ensure a responsive and dynamic layout, while JavaScript brings interactive elements to life, such as real-time updates and engaging animations. The combination of these technologies creates a polished and professional portfolio webpage that effectively represents your skills and experience, making a strong impression on anyone who visits.',
    images: ['/src/assets/p31.png', '/src/assets/p32.png', '/src/assets/p33.png', '/src/assets/p34.png', '/src/assets/p35.png', '/src/assets/p36.png', '/src/assets/p37.png'],
  },
  4: {
    name: 'Portfolio 2',
    icon : [FaHtml5,FaCss3,FaNodeJs,FaReact,SiJquery],
    tech:['HTML','CSS','JavaScript','ReactJs','JQuery'],
    details: 'Our portfolio webpage is a sleek and modern platform that stands out with its elegant dark theme, designed to highlight your work with a striking visual impact. Crafted using ReactJS and JavaScript, this portfolio offers a clean and sophisticated experience without the distraction of scrolling effects. The dark theme enhances readability and ensures that the content—ranging from your Skills and About Me sections to Education and Contact details—remains the focal point.',
    images: ['/src/assets/p41.png', '/src/assets/p42.png', '/src/assets/p43.png', '/src/assets/p44.png', '/src/assets/p45.png', '/src/assets/p46.png'],
  },
  5: {
    name: 'KITCOR Kitchen Decoration Page',
    icon : [FaHtml5,FaCss3,FaNodeJs],
    tech:['HTML','CSS','JavaScript'],
    details: 'Our kitchen decoration business landing page is a beautifully crafted website designed to captivate visitors with its elegant and functional design. Built with HTML, CSS, and JavaScript, this landing page provides a seamless introduction to our kitchen decoration services, showcasing our expertise and creativity in transforming kitchen spaces. The design features a visually appealing hero section with high-quality images of stunning kitchen makeovers, setting the tone for the visitor\'s journey.',
    images: ['/src/assets/p51.png', '/src/assets/p52.png', '/src/assets/p53.png', '/src/assets/p54.png', '/src/assets/p55.png', '/src/assets/p56.png', '/src/assets/p57.png', '/src/assets/p58.png'],
  },
  6: {
    name: 'Travely Travele Landing Page',
    icon : [FaHtml5,FaCss3,FaNodeJs,SiTailwindcss],
    tech:['HTML','CSS','JavaScript','TailwindCss'],
    details: 'A clean and modern web application interface showcasing a user-friendly dashboard. The design emphasizes simplicity and ease of navigation, with a focus on key metrics and quick access to essential features. The color scheme combines muted tones with vibrant accents, creating a visually appealing and functional workspace',
    images: ['/src/assets/p61.png', '/src/assets/p62.png', '/src/assets/p63.png', '/src/assets/p64.png', '/src/assets/p65.png'],
  },
  7: {
    name: 'Carousels',
    icon : [FaHtml5,FaCss3,FaNodeJs,SiJquery],
    tech:['HTML','CSS','JavaScript','JQuery'],
    details: 'I developed a dynamic and responsive image carousel using HTML, CSS, and JavaScript, designed to enhance user interaction and visual appeal. The carousel features smooth transitions and customizable layouts, ensuring a consistent and polished experience across all devices. It includes user-friendly navigation controls, such as left and right arrows, and touch support for mobile devices. Additionally, the carousel supports autoplay with a pause-on-hover functionality, providing flexibility in how images are presented. With its lightweight and optimized performance, this carousel component can be easily integrated into various web projects, making it an ideal choice for showcasing images, product galleries, or other visual content.',
    images: ['/src/assets/p71.png', '/src/assets/p72.png', '/src/assets/p73.png', '/src/assets/p74.png', '/src/assets/p75.png'],
  },
  8: {
    name: 'Employer Employee Management Web App',
    icon : [FaHtml5,FaCss3,FaNodeJs,FaReact,SiTailwindcss],
    tech:['HTML','CSS','JavaScript','ReactJs','TailwindCss'],
    details: 'Our ReactJS project for employee management offers a comprehensive and intuitive solution for organizing and overseeing your workforce. The application features a sophisticated interface that allows you to efficiently filter employees based on job roles, ranks, skills, and teams. With a dynamic filtering system, users can quickly locate and view employees who meet specific criteria, streamlining the process of managing and analyzing team composition.The project boasts an exceptional user interface designed for seamless interaction. It provides robust functionality for managing teams, including the ability to reassign employees to different teams with ease. This feature enables managers to adapt and optimize team structures based on evolving project needs and organizational changes.The use of ReactJS ensures a responsive and engaging experience, with real-time updates and smooth transitions that enhance usability. The application’s clean and modern design facilitates efficient employee management, allowing users to focus on building effective teams and achieving organizational goals. Overall, this ReactJS project delivers a powerful and user-friendly tool for managing employee information and team dynamics with precision and elegance.',
    images: ['/src/assets/p81.png', '/src/assets/p82.png', '/src/assets/p83.png', '/src/assets/p84.png', '/src/assets/p85.png'],
  },
  9: {
    name: 'CCTV Landing Page',
    icon : [FaHtml5,FaCss3,FaNodeJs],
    tech:['HTML','CSS','JavaScript'],
    details: 'Our CCTV camera landing page offers a straightforward and effective presentation of our surveillance solutions, designed with simplicity and clarity in mind. Built using HTML and CSS, the page features a clean layout that highlights key information about our CCTV camera products and services. The design focuses on essential elements such as a prominent hero section showcasing high-resolution images of our cameras, a brief overview of features, and clear calls-to-action for interested customers.',
    images: ['/src/assets/p91.png', '/src/assets/p92.png', '/src/assets/p93.png', '/src/assets/p94.png', '/src/assets/p95.png'],
  },
  10: {
    name: 'Spotify Clone',
    icon : [FaHtml5,FaCss3,FaNodeJs,FaReact],
    tech:['HTML','CSS','JavaScript','ReactJs'],
    details: 'Our Spotify clone app is a dynamic and immersive music streaming platform, expertly crafted using ReactJS, JavaScript, and CSS. Designed to replicate the core functionalities and sleek interface of Spotify, this application offers a seamless user experience for discovering and enjoying music. With ReactJS powering the frontend, the app delivers a responsive and interactive interface that allows users to effortlessly navigate through playlists, albums, and artist profiles.',
    images: ['/src/assets/p111.png', '/src/assets/p112.png', '/src/assets/p113.png'],
  },
  
  // Add more project details here
}; 

const ProjectDetails = () => {
 
  const {isDarkMode} = useTheme()
  const { id } = useParams();
  const project = projectDetails[id];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? project.images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === project.images.length - 1 ? 0 : prevIndex + 1));
  };
/* 
  useEffect(() => {
    if (i > -1) {
      setCurrentIndex(i);
    }
  }, [i]);
 */
  return (
    <div className={`p-4 bg-background ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
      <h1 className="text-3xl font-bold mb-4 text-center">{project.name}</h1>
      <div className="relative w-full max-w-5xl mx-auto">
      <img
        src={project.images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="w-full h-56 sm:h-64 md:h-72 lg:h-80 xl:h-full object-full rounded-lg shadow-md"
      />
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
      >
        &#10095;
      </button>
    </div>      <div className="m-4 w-full flex justify-center gap-3 items-center flex-wrap">
        {project.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            className={` ${currentIndex == i ? 'border-4 border-secondary' : ''} h-20 w-20 md:h-24 md:w-24   lg:h-32 lg:w-32 rounded cursor-pointer border-2 border-transparent hover:border-blue-500 transition`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
      <div>
        <h3>Technologies Used</h3>
        {project.tech.map((tc , i)=>
          <p key={i}> - <span className=' even:text-secondary'>{tc}</span></p>
        )}
        <br />
      </div>
      <p className="text-lg mb-4 text-center">{project.details}</p>

    </div>
  );
};
/* 
const ImageCarousel = ({ images, i }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    if (i > -1) {
      setCurrentIndex(i);
    }
  }, [i]);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="w-full h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 object-full rounded-lg shadow-md"
      />
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
      >
        &#10095;
      </button>
    </div>
  );
};
 */
export default ProjectDetails;