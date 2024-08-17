import React from 'react';
import { useTheme } from './themeContext';
import { FaCss3, FaDatabase, FaHtml5, FaNode, FaNodeJs, FaReact } from 'react-icons/fa';
import {SiMysql,SiExpress,SiTailwindcss, SiJquery} from 'react-icons/si';
const SkillsSection = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const skills = [
    { name: 'ReactJS', level: 9 ,icon:FaReact     },
    { name: 'NodeJS', level: 5 ,icon:FaNode      },
    { name: 'MySQL', level: 5 ,icon:SiMysql       },
    { name: 'Express', level: 5 ,icon:SiExpress       },
    { name: 'jQuery', level: 7 ,icon:  SiJquery     },
    { name: 'Tailwind', level: 7 ,icon: SiTailwindcss    },
    { name: 'JavaScript', level: 9 ,icon:FaNodeJs      },
    { name: 'HTML5', level: 9 ,icon:FaHtml5   },
    { name: 'CSS3', level: 9 ,icon:FaCss3},
    
  ];

  return (
    <section id='skills' className="py-8 px-4">
      <h2 className="text-primary text-3xl font-bold text-center mb-6">My Skills</h2>

      <hr className='border-accent border-2 lg:translate-y-16  md:translate-y-16  hidden  md:block lg:block'/>
      <hr className='border-accent border-2 lg:translate-y-[185px] md:translate-y-[185px]  md:block hidden'/>
      <hr className='border-accent border-2 lg:translate-y-[305px]  md:translate-y-[305px]  md:block hidden'/>
      <hr className='border-accent border-2 lg:translate-y-[305px]  md:translate-y-[430px] lg:hidden hidden md:block'/>
      
      {/* <div className="flex space-x-4 mt-8">
          <FaNodeJs       className="text-green-500 text-3xl" />
          <FaReact        className="text-blue-500 text-3xl" />
          <FaNode         className="text-blue-500 text-3xl" />
          <FaCss3         className="text-blue-500 text-3xl" />
          <FaHtml5        className="text-blue-500 text-3xl" />
          <SiJquery       className="text-blue-500 text-3xl" />
          <SiMysql        className="text-blue-500 text-3xl" />
          <SiExpress      className="text-blue-500 text-3xl" />
          <SiTailwindcss  className="text-blue-500 text-3xl" />

        </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`bg-background text-secondary flex  z-10 shadow-lg ${isDarkMode ? 'shadow-slate-700 hover:shadow-slate-600' : 'shadow-slate-200 hover:shadow-slate-300'} rounded-lg p-4  transition-shadow duration-300`}
            style={{ minHeight: '100px' }} // Adjusted card height
          >
            <div className='w-16 flex pr-4 justify-center items-center'>
            <skill.icon  className="text-secondary text-3xl" />

            </div>
            <div className='w-full'>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">{skill.name}</h3>
              <span className="text-secondary">{skill.level}/10</span>
            </div>
            <div className="flex items-center">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className={`w-4 h-4 rounded-full mr-1 shadow-md shadow-slate-600 ${
                    i < skill.level ? 'bg-accent ' : 'bg-white'
                  }`}
                ></div>
              ))}
            </div>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
