
import React from 'react';
import { Button } from "@/components/ui/button";
import { RefreshCw } from 'lucide-react';

interface EmailPreviewProps {
  subject: string;
  body: string;
  emailNumber: number;
  totalEmails: number;
  onRegenerate?: () => void;
}

const EmailPreview: React.FC<EmailPreviewProps> = ({ 
  subject, 
  body, 
  emailNumber, 
  totalEmails,
  onRegenerate
}) => {
  return (
    <div className="email-card mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-500">
          Email {emailNumber} of {totalEmails}
        </span>
        {onRegenerate && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onRegenerate}
            className="h-8 px-2 text-gray-500 hover:text-primary-600"
          >
            <RefreshCw className="h-4 w-4 mr-1" />
            <span>Regenerate</span>
          </Button>
        )}
      </div>
      
      <div className="mb-4">
        <h3 className="font-medium mb-1">Subject: {subject}</h3>
        <div className="h-px w-full bg-gray-100"></div>
      </div>
      
      <div className="text-gray-700 whitespace-pre-line">
        {body}
      </div>
    </div>
  );
};

export default EmailPreview;
