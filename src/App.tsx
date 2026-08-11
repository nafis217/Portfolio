import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowIBuild } from './components/HowIBuild';
import { Projects } from './components/Projects';
import { SkillsSystem } from './components/SkillsSystem';
import { Experience } from './components/Experience';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased">
      <Header />
      <main>
        <Hero />
        <HowIBuild />
        <Projects />
        <SkillsSystem />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
