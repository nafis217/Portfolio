import { MotionConfig } from 'motion/react';
import { Loader } from './components/Loader';
import { Cursor } from './components/Cursor';
import { ScrollProgress } from './components/ScrollProgress';
import { SectionRail } from './components/SectionRail';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { SkillsSystem } from './components/SkillsSystem';
import { Research } from './components/Research';
import { Education } from './components/Education';
import { HowIWork } from './components/HowIWork';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="grain relative min-h-screen bg-ink text-fg antialiased">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Loader />
        <Cursor />
        <ScrollProgress />
        <SectionRail />
        <Header />
        <main id="main-content" tabIndex={-1} className="relative z-10">
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
    </MotionConfig>
  );
}

export default App;
