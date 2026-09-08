// import components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTopBtn from './components/BackToTopBtn';
import Experiences from './components/Experiences';

const App = () => {
  return (
  <div>
    <Header />
    <main>
      <Hero />
      <Skills />
      <About />
      <Experiences />
      <Portfolio />
      <Services />
      <Contact />
    </main>
    <Footer />
    <BackToTopBtn />
  </div>
  );
};

export default App;
