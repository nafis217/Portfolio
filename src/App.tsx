import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { SkillsSystem } from './components/SkillsSystem';
import { Research } from './components/Research';
import { Education } from './components/Education';
import { HowIWork } from './components/HowIWork';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-sky-200 selection:text-slate-900">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Projects />
        <About />
        <Experience />
        <SkillsSystem />
        <Research />
        <Education />
        <HowIWork />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
