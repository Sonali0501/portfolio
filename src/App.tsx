import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import SkillsMarquee from './components/SkillsMarquee';
import WorkExperience from './components/WorkExperience';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <SkillsMarquee />
        <WorkExperience />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;