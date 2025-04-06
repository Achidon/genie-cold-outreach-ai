
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import SequenceBuilder from '@/components/SequenceBuilder';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Features />
      <SequenceBuilder />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
