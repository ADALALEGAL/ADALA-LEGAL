
import React from 'react';
import { AppView } from '../types';

interface Props {
  setView: (view: AppView) => void;
}

const Home: React.FC<Props> = ({ setView }) => {
  return (
    <div className="pb-24 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Hero Section */}
      <section className="bg-indigo-900 text-white p-6 pt-8 rounded-b-[2.5rem] shadow-xl">
        <h2 className="text-2xl font-bold mb-2">أهلاً بك في عدالة</h2>
        <p className="text-indigo-100 text-sm opacity-90 leading-relaxed mb-6">
          حلول قانونية ذكية، استشارات فورية، وخدمات كاتب عدل موثوقة في متناول يدك.
        </p>
        
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] text-indigo-200 uppercase font-bold tracking-wider">المساعد القانوني</span>
            <span className="text-sm font-semibold">هل لديك سؤال قانوني؟</span>
          </div>
          <button 
            onClick={() => setView(AppView.AI_CHAT)}
            className="bg-white text-indigo-900 px-4 py-2 rounded-xl text-xs font-bold shadow-lg active:scale-95 transition-transform"
          >
            اسأل الآن
          </button>
        </div>
      </section>

      {/* Main Services Grid */}
      <div className="px-6 mt-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-gray-800">خدماتنا الرئيسية</h3>
          <button onClick={() => setView(AppView.SERVICES)} className="text-indigo-600 text-xs font-semibold">عرض الكل</button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={() => setView(AppView.SERVICES)}
            className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center gap-3 hover:shadow-md transition-shadow active:bg-gray-50"
          >
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            </div>
            <span className="font-bold text-gray-800 text-sm">استشارات قانونية</span>
          </button>

          <button 
            onClick={() => setView(AppView.SERVICES)}
            className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center gap-3 hover:shadow-md transition-shadow active:bg-gray-50"
          >
            <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
            </div>
            <span className="font-bold text-gray-800 text-sm">خدمات الكاتب العدل</span>
          </button>
        </div>
      </div>

      {/* Promotions/Info Cards */}
      <div className="px-6 mt-8">
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl p-5 text-white flex items-center gap-4 shadow-lg shadow-emerald-100">
           <div className="flex-1">
             <h4 className="font-bold text-lg mb-1">خدمة التوثيق الفوري</h4>
             <p className="text-[11px] opacity-90">وثق وكالتك أو عقدك الآن خلال دقائق وبكل أمان.</p>
           </div>
           <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
             <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
           </div>
        </div>
      </div>

      {/* Featured Lawyers */}
      <div className="px-6 mt-8">
        <h3 className="font-bold text-gray-800 mb-4">أبرز المستشارين</h3>
        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="flex-shrink-0 w-32 bg-white rounded-2xl p-3 border border-gray-100 shadow-sm">
              <img src={`https://picsum.photos/seed/lawyer${i}/200/200`} alt="Lawyer" className="w-full h-24 object-cover rounded-xl mb-2" />
              <div className="text-center">
                <p className="text-[11px] font-bold text-gray-800">أ. محمد العتيبي</p>
                <p className="text-[9px] text-indigo-600">محامٍ جنائي</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
