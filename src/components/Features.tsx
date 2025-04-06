
import { BrainCircuit, MessageSquare, Zap, Users, BarChart, Sparkles, RefreshCcw } from "lucide-react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  const features = [
    {
      icon: BrainCircuit,
      title: "AI-Powered Sequences",
      description: "Generate complete email sequences tailored to your specific outreach goals and target audience."
    },
    {
      icon: MessageSquare,
      title: "Custom Tones & Styles",
      description: "Adjust tone, style, and length to match your brand voice and resonate with your audience."
    },
    {
      icon: Zap,
      title: "Quick Setup",
      description: "Define your goal and audience in minutes and get a complete sequence ready to use."
    },
    {
      icon: Users,
      title: "Audience Targeting",
      description: "Specify your ideal customer profile for hyper-personalized messaging that connects."
    },
    {
      icon: BarChart,
      title: "A/B Test Lines",
      description: "Generate multiple subject line and opening variations to test and optimize performance."
    },
    {
      icon: RefreshCcw,
      title: "Email Integration",
      description: "Sync with Gmail or Outlook to deploy your sequences directly from your email."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50 px-4">
      <div className="container max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center rounded-full border border-secondary-100 bg-secondary-50 px-3 py-1 text-sm font-medium text-secondary-700">
              Features
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need for Cold Outreach</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our AI-powered platform makes creating effective cold email sequences simple, fast, and highly converting.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
