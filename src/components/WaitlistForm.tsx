import React from 'react';

interface WaitlistFormProps {
  variant?: string;
}

const WaitlistForm: React.FC<WaitlistFormProps> = ({ variant }) => {
  return (
    <div className={`w-full max-w-md mx-auto ${variant === 'black' ? 'theme-black' : ''}`}>
      <div id="getWaitlistContainer" data-waitlist_id="32618" data-widget_type="WIDGET_2"></div>
    </div>
  );
};

export default WaitlistForm;
