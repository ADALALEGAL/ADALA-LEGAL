
import React from 'react';
import { AppView } from '../types';

interface Props {
  currentView: AppView;
  setView: (view: AppView) => void;
}

const BottomNav: React.FC<Props> = ({ currentView, setView }) => {
  const tabs = [
    { id: AppView.HOME, label: 'الرئيسية', icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    )},
    { id: AppView.SERVICES, label: 'الخدمات', icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
    )},
    { id: AppView.AI_CHAT, label: 'المساعد', icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
    )},
    { id: AppView.MY_REQUESTS, label: 'طلباتي', icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    )},
    { id: AppView.PROFILE, label: 'حسابي', icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
    )},
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex justify-around items-center px-2 py-3 safe-area-bottom shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-50">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setView(tab.id)}
          className={`flex flex-col items-center gap-1 transition-colors duration-200 ${
            currentView === tab.id ? 'text-indigo-900' : 'text-gray-400'
          }`}
        >
          <div className={`${currentView === tab.id ? 'scale-110' : 'scale-100'} transition-transform duration-200`}>
            {tab.icon}
          </div>
          <span className="text-[11px] font-medium">{tab.label}</span>
          {currentView === tab.id && (
            <div className="w-1 h-1 bg-indigo-900 rounded-full mt-0.5"></div>
          )}
        </button>
      ))}
    </nav>
  );
};

export default BottomNav;
