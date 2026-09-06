import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'


const App = () => {

const [darkMode,setDarkMode] = useState(true)

useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false,
    offset: 100

  });
  document.documentElement.classList.add('dark');
}, [] );
useEffect(() => {
  AOS.refresh()
}, [darkMode])

const toggleDark = () => {
  const newMode = !darkMode;
  setDarkMode(newMode);
  document.documentElement.classList.toggle('dark');

};

return(
  
  <div className= {
    darkMode
    ? 'bg-linear-to-br from-gray-900 via-[#230d2e] to-purple-900 min-h-screen'
    : 'bg-linear-to-br from-gray-50 to-blue-50 min-h-screen'
  }>
    <Navbar darkMode={darkMode} toggleDarkMode={toggleDark}/>
    <Hero darkMode={darkMode} />
    <About darkMode={darkMode}/>
    <Contact darkMode={darkMode}/>
    <Footer />
    
    
  </div>
)
}

export default App