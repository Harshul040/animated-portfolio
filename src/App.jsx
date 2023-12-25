import"./app.scss"
import Navbar from "./components/navbar/Navbar";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";

const App = () => {
  return( <div>
     <Cursor />
   <section id="Homepage">
      <Navbar/>
      <Hero/>

    </section>
    <section id="Services"><Parallax /></section>
    <section><Services />
    </section>
    
    <Portfolio />
    <section id="Contact">
        <Contact />
    </section>
   
  </div>);
};

export default App;
