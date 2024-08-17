import React from 'react';
import Header from './header'; // Import the header with the theme toggle
import AboutMe from '../about';
import HeroSection from './hero';
import SkillsSection from '../skills';
import ProjectsSection from '../projects';
import Footer from '../footer';
import Footer2 from './footer1';
import { useTheme } from '../themeContext';
import Experience from '../experience'
const Portfolio = () => {
  const {isDarkMode} = useTheme();
 

  return (
    <div className="bg-background text-primary min-h-screen">
      <HeroSection/>

<AboutMe/>
<SkillsSection/>
<ProjectsSection/>
<Experience/>

     {/*   Contact Section  */}
      <section id='contact' className="p-8 w-full flex justify-center items-center">
        <div className='w-full md:w-3/6'>
        <h2 className="text-primary text-center text-3xl mb-4">Contact Me</h2>
        <form className="grid grid-cols-1 gap-4">
          <input
            type="email"
            placeholder="Email"
            className="p-2 border border-primary rounded"
          />
          <input
            type="text"
            placeholder="Name"
            className="p-2 border border-primary rounded"
          />
          <textarea
            placeholder="Message"
            className="p-2 border border-primary rounded"
          ></textarea>
          <button type="submit" className={`${isDarkMode ? 'bg-slate-700' : 'bg-slate-100'} text-secondary p-2 rounded`}>
            Submit
          </button>
        </form>
        </div>
        
      </section>

    </div>
  );
};

export default Portfolio;
