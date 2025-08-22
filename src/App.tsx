import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import WhyChooseUs from './components/WhyChooseUs';
import Plans from './components/Plans';
import Testimonials from './components/Testimonials';
import SignupForm from './components/SignupForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <Plans />
        <Features />
        <Testimonials />
        <SignupForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;