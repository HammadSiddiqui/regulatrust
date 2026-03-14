import React from 'react';

const AnnouncementBar: React.FC = () => {
  return (
    <div className="w-full bg-black text-white text-xs py-2 px-4 flex justify-center items-center gap-2">
      <span className="bg-lime text-black px-1.5 py-0.5 font-bold uppercase tracking-wider text-[10px]">New</span>
      <p className="font-medium">Early access: Join the RegulaTrust waitlist and lock in 50% off for life →</p>
    </div>
  );
};

export default AnnouncementBar;
