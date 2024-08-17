import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../themeContext';

const Header = () => {
  const {isDarkMode,toggleTheme} = useTheme();

 
const headlink = `px-2 text-primary hover:text-secondary `
  return (
    <header className={`fixed z-30 w-full flex justify-between ${isDarkMode ? 'bg-slate-900': 'bg-slate-100'} items-center p-4`}>
      <h1 className={`text-secondary  text-2xl font-semibold`}>Aamin's <span className='text-primary'>Portfolio</span> </h1>
      <ul className='flex'>
        <li><a href="#about" className={headlink}>About</a></li>
        <li><a href="#skills" className={headlink}>Skills</a></li>
        <li><a href="#projects" className={headlink}>Projects</a></li>
        <li><a href="#education" className={headlink}>Education</a></li>
        <li><a href="#contact" className={headlink}>Contact</a></li>
        
        </ul>
      <button
        onClick={toggleTheme}
        className="text-accent  px-4 py-2 rounded"
      >
        {
          isDarkMode ? (<FaSun/>) : (<FaMoon/>)
        }
      
      </button>
      
    </header>
  );
};

export default Header;
