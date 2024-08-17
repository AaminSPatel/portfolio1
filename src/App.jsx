import Portfolio from "./Portfolio/portfolio"
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import ProjectDetails from "./projectDetail";
import { ThemeProvider } from "./themeContext";
import Header from "./Portfolio/header";
import Footer from "./footer";

function App() {

  return (
    <>
      
      <ThemeProvider>
     
      <Router>
         
<div className='w-full h-auto'>
     <Header/>
     <Routes>
       <Route path="/project/:id" element={<ProjectDetails/>} />
        <Route path="/" element={<Portfolio/>} />
   
     </Routes>
     <Footer/>
     </div>
        </Router>
        </ThemeProvider>
    </>
  )
}

export default App
