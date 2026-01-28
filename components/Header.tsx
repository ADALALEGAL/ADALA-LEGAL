
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm px-6 py-4 flex items-center justify-between border-b border-gray-100">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-indigo-900 rounded-lg flex items-center justify-center shadow-indigo-200 shadow-lg">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
          </svg>
        </div>
        <div>
          <h1 className="text-xl font-bold text-indigo-950 leading-tight">عدالة</h1>
          <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">ADALA LEGAL</p>
        </div>
      </div>
      <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center overflow-hidden">
         <img src="https://picsum.photos/seed/user/100/100" alt="Profile" className="w-full h-full object-cover" />
      </div>
    </header>
  );
};

export default Header;
