import React from 'react';

const AnnouncementBar: React.FC = () => {
  return (
    <div className="w-full bg-black text-white text-xs py-2 px-4 flex justify-center items-center gap-2">
      <span className="bg-lime text-black px-1.5 py-0.5 font-bold uppercase tracking-wider text-[10px]">New</span>
      <p className="font-medium">Get privacy compliant in days — not months. <a href="#" className="underline decoration-lime underline-offset-4 hover:text-lime transition-colors">Learn more</a></p>
    </div>
  );
};

export default AnnouncementBar;
