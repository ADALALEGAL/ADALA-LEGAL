
import React, { useState, useMemo } from 'react';
import { LegalService } from '../types';

const ServicesView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'legal' | 'notary'>('legal');
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('الكل');

  const services: LegalService[] = [
    // Legal Services
    { id: '1', category: 'legal', subCategory: 'أسرة', title: 'استشارة أسرية', description: 'قضايا الطلاق، الحضانة، والنفقة وغيرها.', icon: '👨‍👩‍👧‍👦' },
    { id: '2', category: 'legal', subCategory: 'عمل', title: 'استشارة عمالية', description: 'خلافات عقود العمل، الأجور، والتعويضات.', icon: '💼' },
    { id: '3', category: 'legal', subCategory: 'تجاري', title: 'استشارة تجارية', description: 'عقود الشركات، تسجيل العلامات التجارية.', icon: '🏢' },
    { id: '4', category: 'legal', subCategory: 'جنائي', title: 'استشارة جنائية', description: 'الدفاع، التحقيق، وقضايا الحق العام.', icon: '⚖️' },
    { id: '9', category: 'legal', subCategory: 'أسرة', title: 'قسمة التركات', description: 'توزيع المواريث والتركات وفق الشريعة.', icon: '📜' },
    { id: '10', category: 'legal', subCategory: 'تجاري', title: 'حوكمة الشركات', description: 'إعداد اللوائح الداخلية وأنظمة الرقابة.', icon: '🛡️' },
    { id: '13', category: 'legal', subCategory: 'مدني', title: 'المطالبات المالية', description: 'تحصيل الديون، والتعويضات عن الأضرار المدنية.', icon: '💸' },
    { id: '14', category: 'legal', subCategory: 'مدني', title: 'منازعات العقود', description: 'حل الخلافات الناشئة عن الإخلال بالبنود التعاقدية.', icon: '📄' },
    { id: '15', category: 'legal', subCategory: 'مدني', title: 'إثبات الحقوق', description: 'دعاوى إثبات الملكية والحقوق العينية المكتسبة.', icon: '🔍' },
    
    // Notary Services
    { id: '5', category: 'notary', subCategory: 'وكالات', title: 'توثيق وكالة', description: 'إصدار وكالات شرعية فردية أو تجارية.', icon: '📝' },
    { id: '6', category: 'notary', subCategory: 'عقارات', title: 'توثيق إفراغ عقاري', description: 'نقل ملكية الأراضي والمنازل رسمياً.', icon: '🏠' },
    { id: '7', category: 'notary', subCategory: 'شركات', title: 'عقود تأسيس شركات', description: 'توثيق العقود وتعديلها لدى وزارة التجارة.', icon: '🤝' },
    { id: '8', category: 'notary', subCategory: 'مالي', title: 'إقرارات مالية', description: 'توثيق الديون والمخالصات المالية.', icon: '💰' },
    { id: '11', category: 'notary', subCategory: 'عقارات', title: 'رهن عقاري', description: 'توثيق عقود الرهن وفك الرهن العقاري.', icon: '🔑' },
    { id: '12', category: 'notary', subCategory: 'وكالات', title: 'فسخ وكالة', description: 'إلغاء الوكالات القائمة بشكل رسمي وفوري.', icon: '❌' },
  ];

  const legalSubCategories = ['الكل', 'أسرة', 'عمل', 'تجاري', 'جنائي', 'مدني'];
  const notarySubCategories = ['الكل', 'وكالات', 'عقارات', 'شركات', 'مالي'];

  const currentSubCategories = activeTab === 'legal' ? legalSubCategories : notarySubCategories;

  const filteredServices = useMemo(() => {
    return services.filter(service => {
      const matchMain = service.category === activeTab;
      const matchSub = selectedSubCategory === 'الكل' || service.subCategory === selectedSubCategory;
      return matchMain && matchSub;
    });
  }, [activeTab, selectedSubCategory]);

  const handleTabChange = (tab: 'legal' | 'notary') => {
    setActiveTab(tab);
    setSelectedSubCategory('الكل');
  };

  return (
    <div className="px-6 py-4 pb-24 animate-in slide-in-from-left-4 duration-300">
      <h2 className="text-2xl font-bold text-indigo-950 mb-6">تصفح الخدمات</h2>
      
      {/* Main Tabs */}
      <div className="flex bg-gray-100 p-1.5 rounded-2xl mb-6">
        <button 
          onClick={() => handleTabChange('legal')}
          className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${activeTab === 'legal' ? 'bg-white text-indigo-900 shadow-sm scale-[1.02]' : 'text-gray-500'}`}
        >
          الاستشارات القانونية
        </button>
        <button 
          onClick={() => handleTabChange('notary')}
          className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${activeTab === 'notary' ? 'bg-white text-indigo-900 shadow-sm scale-[1.02]' : 'text-gray-500'}`}
        >
          خدمات الكاتب العدل
        </button>
      </div>

      {/* Sub-category Chips */}
      <div className="flex gap-2 overflow-x-auto pb-6 no-scrollbar -mx-2 px-2">
        {currentSubCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedSubCategory(cat)}
            className={`whitespace-nowrap flex-shrink-0 px-5 py-2.5 rounded-full text-xs font-bold transition-all border ${
              selectedSubCategory === cat 
                ? 'bg-indigo-900 text-white border-indigo-900 shadow-md scale-105' 
                : 'bg-white text-gray-600 border-gray-100 shadow-sm hover:border-indigo-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Services List */}
      <div className="space-y-4">
        {filteredServices.length > 0 ? (
          filteredServices.map(service => (
            <div 
              key={service.id} 
              className="bg-white p-4 rounded-[2rem] border border-gray-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-all active:scale-[0.98]"
            >
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-2xl shadow-inner">
                {service.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-0.5">
                  <h4 className="font-bold text-gray-800">{service.title}</h4>
                  <span className="text-[9px] bg-indigo-50 text-indigo-500 px-2 py-0.5 rounded-full font-bold">
                    {service.subCategory}
                  </span>
                </div>
                <p className="text-[11px] text-gray-500 leading-snug">{service.description}</p>
              </div>
              <button className="bg-indigo-50 text-indigo-600 w-10 h-10 rounded-full flex items-center justify-center active:bg-indigo-900 active:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
          ))
        ) : (
          <div className="text-center py-12">
            <div className="text-4xl mb-3 opacity-20">🔍</div>
            <p className="text-gray-400 text-sm">لا توجد خدمات تطابق اختيارك</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesView;
