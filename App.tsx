
import React, { useState } from 'react';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import Home from './views/Home';
import ServicesView from './views/ServicesView';
import ChatView from './views/ChatView';
import { AppView } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.HOME);

  const renderView = () => {
    switch (currentView) {
      case AppView.HOME:
        return <Home setView={setCurrentView} />;
      case AppView.SERVICES:
        return <ServicesView />;
      case AppView.AI_CHAT:
        return <ChatView />;
      case AppView.MY_REQUESTS:
        return (
          <div className="p-8 text-center mt-20">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 className="text-lg font-bold text-gray-800">لا يوجد طلبات حالياً</h3>
            <p className="text-gray-500 text-sm">ابدأ بطلب استشارة أو خدمة توثيق لتظهر هنا.</p>
          </div>
        );
      case AppView.PROFILE:
        return (
          <div className="px-6 py-8 pb-24 space-y-6">
             <div className="flex flex-col items-center gap-3">
               <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden relative">
                 <img src="https://picsum.photos/seed/user/200/200" alt="Avatar" className="w-full h-full object-cover" />
                 <button className="absolute bottom-0 right-0 bg-indigo-900 text-white p-1.5 rounded-full border-2 border-white">
                   <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                 </button>
               </div>
               <h3 className="text-xl font-bold">أحمد الشمري</h3>
               <span className="text-xs bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full font-bold">عضو ذهبي</span>
             </div>

             <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden divide-y divide-gray-50 shadow-sm">
               <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                   </div>
                   <span className="text-sm font-semibold">تعديل الملف الشخصي</span>
                 </div>
                 <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
               </button>
               <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center">
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                   </div>
                   <span className="text-sm font-semibold">المحفظة والبطاقات</span>
                 </div>
                 <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
               </button>
               <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-red-50 text-red-600 rounded-xl flex items-center justify-center">
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                   </div>
                   <span className="text-sm font-semibold text-red-600">تسجيل الخروج</span>
                 </div>
               </button>
             </div>
          </div>
        );
      default:
        return <Home setView={setCurrentView} />;
    }
  };

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen relative shadow-2xl flex flex-col">
      <Header />
      <main className="flex-1">
        {renderView()}
      </main>
      <BottomNav currentView={currentView} setView={setCurrentView} />
    </div>
  );
};

export default App;
