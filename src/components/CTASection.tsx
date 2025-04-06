
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const CTASection = () => {
  const benefits = [
    "Save hours writing cold emails",
    "Increase response rates by 30%+",
    "No more writer's block",
    "Free to get started"
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 px-4">
      <div className="container max-w-screen-xl mx-auto">
        <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-3xl overflow-hidden shadow-xl">
          <div className="px-6 py-16 md:py-20 md:px-12 lg:px-20">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to supercharge your cold outreach?
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Join thousands of businesses using InboxGenie to create high-converting email sequences in minutes.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <div className="rounded-full bg-white/20 p-1 mr-3">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-white">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" variant="secondary" className="group bg-white text-primary-700 hover:bg-gray-100">
                    <span>Get Started Free</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                    Schedule Demo
                  </Button>
                </div>
              </div>
              
              <div className="lg:w-2/5">
                <div className="bg-white rounded-xl p-6 shadow-inner">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">Start for Free</h3>
                    <p className="text-gray-600">No credit card required</p>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center">
                      <div className="rounded-full bg-primary-100 p-1 mr-3">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span className="text-gray-700">5 email sequences/month</span>
                    </div>
                    <div className="flex items-center">
                      <div className="rounded-full bg-primary-100 p-1 mr-3">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span className="text-gray-700">Basic customization</span>
                    </div>
                    <div className="flex items-center">
                      <div className="rounded-full bg-primary-100 p-1 mr-3">
                        <Check className="h-4 w-4 text-primary-600" />
                      </div>
                      <span className="text-gray-700">Email templates library</span>
                    </div>
                  </div>
                  
                  <Button className="w-full" size="lg">Create Free Account</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
