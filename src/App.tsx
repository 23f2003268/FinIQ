import React from 'react';
import { Navbar } from './components/layout/navbar';
import { HeroSection } from './components/sections/hero';
import { ChatSection } from './components/sections/chat-section';
import { HowItWorksSection } from './components/sections/how-it-works';
import { FeaturesSection } from './components/sections/features-section';
import { BudgetDemoSection } from './components/sections/budget-demo';
import { TestimonialsSection } from './components/sections/testimonials-section';
import { TechStackSection } from './components/sections/tech-stack';
import { CTASection } from './components/sections/cta-section';
import { Footer } from './components/layout/footer';
import { ThemeProvider } from './context/ThemeContext';
import { ChatProvider } from './context/ChatContext';

function App() {
  return (
    <ThemeProvider>
      <ChatProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <HeroSection />
            <HowItWorksSection />
            <FeaturesSection />
            <ChatSection />
            <BudgetDemoSection />
            <TestimonialsSection />
            <TechStackSection />
            <CTASection />
          </main>
          <Footer />
        </div>
      </ChatProvider>
    </ThemeProvider>
  );
}

export default App;