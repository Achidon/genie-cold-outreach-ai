
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Wand2 } from 'lucide-react';
import EmailPreview from './EmailPreview';

const SAMPLE_SEQUENCES = {
  sales: [
    {
      subject: "Increase your sales conversion by 30% with InboxGenie",
      body: "Hi [First Name],\n\nI noticed that [Company] has been growing its sales team recently, and I thought you might be interested in how our customers are increasing their cold email response rates by 30% on average.\n\nInboxGenie helps sales teams like yours create AI-powered email sequences that actually get responses. Would you be open to a quick 15-minute call this week to see if we might be a good fit for your team?\n\nBest regards,\n[Your Name]"
    },
    {
      subject: "Following up: InboxGenie for [Company]",
      body: "Hi [First Name],\n\nI wanted to follow up on my previous email about how InboxGenie could help [Company] improve your cold outreach results.\n\nMany of our customers see their first positive responses within days of implementing our AI sequences. I'd love to show you how it works with a quick demo.\n\nDo you have 15 minutes this week for a call?\n\nBest,\n[Your Name]"
    },
    {
      subject: "One last thought about your outreach strategy",
      body: "Hi [First Name],\n\nI hope you're doing well. I wanted to share that we recently published a case study about how a company similar to [Company] increased their meeting bookings by 45% using our AI email sequences.\n\nIf you're interested, I'd be happy to send it your way – just let me know.\n\nAll the best,\n[Your Name]"
    }
  ],
  partnership: [
    {
      subject: "Partnership opportunity: InboxGenie + [Company]",
      body: "Hi [First Name],\n\nI'm [Your Name] from InboxGenie, and I've been following [Company]'s work in the [industry] space. I believe there could be a great opportunity for our companies to collaborate.\n\nInboxGenie helps businesses create high-converting cold email sequences with AI, and I think our solution would complement your [product/service] nicely.\n\nWould you be open to a conversation about potential partnership opportunities?\n\nBest regards,\n[Your Name]"
    },
    {
      subject: "Re: Partnership between InboxGenie and [Company]",
      body: "Hi [First Name],\n\nI wanted to circle back regarding a potential partnership between InboxGenie and [Company].\n\nI've been thinking about how our AI email technology could integrate with your platform to provide added value to your customers. Many of our partners have seen a 20% increase in user engagement after integration.\n\nAre you available for a quick call next week to discuss?\n\nBest,\n[Your Name]"
    }
  ],
  recruitment: [
    {
      subject: "Your experience would be valuable at InboxGenie",
      body: "Hi [First Name],\n\nI hope this email finds you well. I came across your profile and was impressed by your experience in [specific skill/industry].\n\nAt InboxGenie, we're building AI-powered email technology that's changing how businesses approach cold outreach, and we're looking for talented individuals to join our team.\n\nWould you be open to a conversation about how your skills could contribute to our mission?\n\nBest regards,\n[Your Name]"
    },
    {
      subject: "Following up: Opportunity at InboxGenie",
      body: "Hi [First Name],\n\nI wanted to follow up on my previous message about a potential opportunity at InboxGenie.\n\nWe're growing quickly and your background in [specific skill] aligns well with what we're looking for. I'd love to tell you more about our company culture, benefits, and the exciting work we're doing.\n\nDo you have 15 minutes this week for a call?\n\nBest,\n[Your Name]"
    }
  ]
};

const SequenceBuilder = () => {
  const [goal, setGoal] = useState("");
  const [audience, setAudience] = useState("");
  const [tone, setTone] = useState("professional");
  const [generatedSequence, setGeneratedSequence] = useState<null | any[]>(null);
  
  const handleGenerate = () => {
    // In a real implementation, this would call an AI service
    // For this demo, we'll use the sample sequences based on goal
    let sequence;
    
    if (goal === "sales") {
      sequence = SAMPLE_SEQUENCES.sales;
    } else if (goal === "partnership") {
      sequence = SAMPLE_SEQUENCES.partnership;
    } else {
      sequence = SAMPLE_SEQUENCES.recruitment;
    }
    
    setGeneratedSequence(sequence);
  };
  
  return (
    <section id="how-it-works" className="py-16 md:py-24 px-4">
      <div className="container max-w-screen-xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center rounded-full border border-primary-100 bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700">
              How It Works
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Build Your Sequence in Minutes</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Try our sequence builder below to see how easy it is to create personalized cold email sequences.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
          <Tabs defaultValue="create" className="w-full">
            <div className="px-6 pt-6 border-b">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="create">Create Sequence</TabsTrigger>
                <TabsTrigger value="preview">Preview Emails</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="create" className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Select Your Goal</label>
                    <Select value={goal} onValueChange={setGoal}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a goal" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sales">Generate Sales Leads</SelectItem>
                        <SelectItem value="partnership">Form Partnerships</SelectItem>
                        <SelectItem value="recruitment">Recruit Talent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Describe Your Target Audience</label>
                    <Textarea 
                      placeholder="E.g., SaaS marketing managers at companies with 50-200 employees"
                      value={audience}
                      onChange={(e) => setAudience(e.target.value)}
                      className="h-24"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Choose Your Tone</label>
                    <Select value={tone} onValueChange={setTone}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select tone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="professional">Professional</SelectItem>
                        <SelectItem value="friendly">Friendly</SelectItem>
                        <SelectItem value="direct">Direct</SelectItem>
                        <SelectItem value="casual">Casual</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-50 rounded-lg border border-gray-100">
                  <Wand2 className="h-12 w-12 mb-4 text-primary-500" />
                  <h3 className="text-xl font-semibold mb-2">Ready to Generate Your Sequence?</h3>
                  <p className="text-gray-600 mb-6">
                    Our AI will create a personalized email sequence based on your inputs.
                  </p>
                  <Button 
                    onClick={handleGenerate} 
                    disabled={!goal || !audience}
                    className="w-full md:w-auto"
                  >
                    <span>Generate Sequence</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="preview" className="p-6">
              {!generatedSequence ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 mb-4">No sequence generated yet</p>
                  <Button 
                    variant="outline" 
                    onClick={() => document.querySelector('[value="create"]')?.dispatchEvent(new Event('click'))}
                  >
                    Go to Sequence Builder
                  </Button>
                </div>
              ) : (
                <div className="space-y-8">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Your Sequence Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <span className="text-sm text-gray-500">Goal:</span>
                        <p className="font-medium">{goal === "sales" ? "Generate Sales Leads" : goal === "partnership" ? "Form Partnerships" : "Recruit Talent"}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Tone:</span>
                        <p className="font-medium capitalize">{tone}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Emails in sequence:</span>
                        <p className="font-medium">{generatedSequence.length}</p>
                      </div>
                    </div>
                  </div>
                  
                  {generatedSequence.map((email, index) => (
                    <EmailPreview 
                      key={index}
                      subject={email.subject}
                      body={email.body}
                      emailNumber={index + 1}
                      totalEmails={generatedSequence.length}
                      onRegenerate={() => console.log('Regenerate email', index + 1)}
                    />
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default SequenceBuilder;
