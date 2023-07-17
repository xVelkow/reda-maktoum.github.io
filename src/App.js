import Navbar from 'Components/Navbar/Navbar';
import About from 'Pages/About';
import Hero from 'Pages/Hero';
import Footer from './Components/Footer/Footer';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import { useEffect } from 'react';
function App() {
  useEffect(()=>{
    setTimeout(() => {
      window.scrollTo(0,0)
    }, 200);
  },[])
  return (
    <div id='app'>
      <Navbar />
      <Hero />
      <div id='app-content'>
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
