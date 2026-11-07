import React from 'react';
import { 
  Home, BookOpen, Calculator, Printer, TestTube, Youtube, Award, 
  BarChart3, GraduationCap, BrainCircuit, FolderArchive, Flame, Zap, Sparkles 
} from 'lucide-react';
import { FACULTY_INFO } from '../data/chemistryCurriculumData';

export default function Navbar({ activeTab, setActiveTab, activeDivision, setActiveDivision }) {
  const navItems = [
    { id: 'home', label: 'الرئيسية (الأقسام)', icon: Home, badge: 'بوابة المادة' },
    { id: 'syllabus', label: 'موسوعة المنهج', icon: BookOpen, badge: '6 وحدات' },
    { id: 'glossary', label: 'معجم الحفظ والقوانين', icon: BrainCircuit, badge: 'بنك الحفظ' },
    { id: 'calculators', label: 'المعمل الحسابي', icon: Calculator, badge: 'حاسبات ذكية' },
    { id: 'cheatsheets', label: 'شيتات وقوانين A4', icon: Printer, badge: 'جاهز للطباعة' },
    { id: 'lab', label: 'المعمل الافتراضي', icon: TestTube, badge: 'تجارب وشفوي' },
    { id: 'quiz', label: 'بنك الأسئلة والامتحانات', icon: Award, badge: 'MCQ' },
    { id: 'materials', label: 'مكتبة الماتريال', icon: FolderArchive, badge: 'PDF وتحميل' },
    { id: 'lectures', label: 'المحاضرات المرئية', icon: Youtube, badge: 'YouTube' },
    { id: 'gpa', label: 'المعدل وتنسيق الأقسام', icon: BarChart3, badge: '150 درجة' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-xl no-print font-arabic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Bar: Shoubra Brand */}
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          
          {/* Logo & Platform Title */}
          <div 
            onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-blue-700 via-indigo-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 border border-blue-400/40 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black text-cyan-400 bg-cyan-950/80 px-2.5 py-0.5 rounded-full border border-cyan-800/60">
                  {FACULTY_INFO.universityAr}
                </span>
                <span className="text-[11px] font-bold text-amber-300 hidden sm:inline">
                  {FACULTY_INFO.facultyNameAr} (FES)
                </span>
              </div>
              <h1 className="text-sm sm:text-lg font-black text-white group-hover:text-cyan-300 transition-colors leading-tight">
                بوابة إعدادي هندسة شبرا 🏛️
              </h1>
            </div>
          </div>

          {/* Right Controls: Subject & Shoubra Badge */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Active Subject Pill */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-slate-900 border border-slate-700/80 text-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-slate-300 font-bold hidden sm:inline">المادة المقررة:</span>
              <span className="text-cyan-300 font-black">الكيمياء الهندسية CHM 001</span>
            </div>

            {/* Shoubra Campus Pill */}
            <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-blue-950/80 border border-blue-800/60 text-xs font-bold text-blue-200">
              <span>📍 108 شارع شبرا / الخلفاوي</span>
            </div>

          </div>

        </div>

        {/* Dedicated Two-Branch Academic Division Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-t border-slate-850 gap-2">
          <div className="flex items-center gap-2 text-xs">
            <span className="text-[11px] font-bold text-slate-400">تصفية المقرر حسب القسم الأكاديمي:</span>
          </div>

          <div className="flex items-center gap-1.5 bg-slate-900/90 p-1 rounded-2xl border border-slate-800 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveDivision && setActiveDivision('all')}
              className={`px-3 py-1 rounded-xl text-xs font-black transition flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                activeDivision === 'all'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>الكل (القسمان معاً)</span>
            </button>

            <button
              onClick={() => setActiveDivision && setActiveDivision('thermal')}
              className={`px-3 py-1 rounded-xl text-xs font-black transition flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                activeDivision === 'thermal'
                  ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-amber-300" />
              <span>الكيمياء الحرارية والصناعية (د. هناء)</span>
            </button>

            <button
              onClick={() => setActiveDivision && setActiveDivision('electro')}
              className={`px-3 py-1 rounded-xl text-xs font-black transition flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                activeDivision === 'electro'
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-cyan-300" />
              <span>الكيمياء الكهربية والتآكل (د. سمر)</span>
            </button>
          </div>
        </div>

        {/* Bottom Nav Tabs Bar */}
        <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-2 border-t border-slate-800/80 no-scrollbar">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-black whitespace-nowrap transition-all flex items-center gap-2 shrink-0 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-900/40'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-cyan-400'}`} />
                <span>{item.label}</span>
                {item.badge && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isActive ? 'bg-black/30 text-white' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

      </div>
    </header>
  );
}
