import React from 'react';
import HeroSection from './components/HeroSection';
import ProblemSolution from './components/ProblemSolution';
import CoreIdea from './components/CoreIdea';
import PersonaCard from './components/PersonaCard';
import DashboardPreview from './components/DashboardPreview';
import GamificationSection from './components/GamificationSection';
import Features from './components/Features';
import UserFlow from './components/UserFlow';
import FinalResult from './components/FinalResult';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSolution />
      <CoreIdea />
      <PersonaCard />
      <DashboardPreview />
      <GamificationSection />
      <Features />
      <UserFlow />
      <FinalResult />
      <Footer />
    </div>
  );
}

export default App;
