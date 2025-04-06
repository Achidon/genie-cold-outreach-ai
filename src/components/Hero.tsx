
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container max-w-screen-xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <div className="inline-block animate-fade-up">
                <span className="inline-flex items-center rounded-full border border-primary-100 bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700">
                  Introducing InboxGenie
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <span>AI-Powered Cold</span>
                <br />
                <span className="gradient-text">Email Sequences</span>
                <br />
                <span>That Convert</span>
              </h1>
              <p className="text-xl text-gray-600 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                Craft high-converting cold email sequences in minutes, not hours. Targeted, personalized, and ready to send.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <Button size="lg" className="group">
                <span>Try for Free</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                View Demo
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">300+ businesses</span> are improving their cold outreach
              </p>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 border border-gray-100 relative">
              <div className="email-card mb-6 relative z-10">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="font-medium">Subject: Partnership Opportunity with InboxGenie</p>
                    <p className="text-sm text-gray-500">To: potential@partner.com</p>
                  </div>
                  <div className="text-sm text-gray-500">Today</div>
                </div>
                <div className="text-gray-700">
                  <p className="mb-2">Hi [First Name],</p>
                  <p className="mb-2">
                    I noticed your recent article on cold outreach strategies and thought you might be interested in how InboxGenie is helping businesses like yours increase response rates by 34%.
                  </p>
                  <p className="mb-2">
                    Would you be open to a 15-minute call to discuss how our AI email sequencing could complement your outreach strategy?
                  </p>
                </div>
              </div>
              <div className="email-card opacity-80 absolute top-20 -right-4 z-0 transform rotate-2">
                <p className="font-medium mb-1">Follow-up: Our Partnership Opportunity</p>
                <p className="text-sm text-gray-500">Just checking in...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
