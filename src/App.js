import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Stack from './Components/Stack/Stack';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contac/Contact';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <About/>
     <Stack/>
     <Projects/>
    {/*  <Contact/> */}
     <Footer/>
    </div>
  );
}

export default App;
