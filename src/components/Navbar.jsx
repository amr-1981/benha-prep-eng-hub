import React from 'react';
import { 
  Home, BookOpen, Calculator, Printer, TestTube, Youtube, Award, 
  BarChart3, GraduationCap, BrainCircuit, FolderArchive, Flame, Zap, Sparkles 
} from 'lucide-react';
import { FACULTY_INFO } from '../data/chemistryCurriculumData';

export default function Navbar({ 
  activeTab, 
  setActiveTab, 
  activeDivision, 
  setActiveDivision,
  activeSubject = 'math',
  setActiveSubject = () => {}
}) {
  const isMath = activeSubject === 'math';

  const navItems = isMath ? [
    { id: 'home', label: 'الرئيسية (الأقسام)', icon: Home, badge: 'بوابة المادة' },
    { id: 'syllabus', label: 'موسوعة المنهج', icon: BookOpen, badge: '10 وحدات' },
    { id: 'glossary', label: 'معجم القوانين والنظريات', icon: BrainCircuit, badge: 'بنك القوانين' },
    { id: 'lab', label: 'معمل الحاسبات الذكية', icon: Calculator, badge: 'لايبنتز ومصفوفات' },
    { id: 'cheatsheets', label: 'شيتات وقوانين A4', icon: Printer, badge: 'جاهز للطباعة' },
    { id: 'quiz', label: 'بنك أسئلة الامتحانات', icon: Award, badge: 'MCQ شبرا' },
    { id: 'materials', label: 'مكتبة الماتريال', icon: FolderArchive, badge: 'PDF وتحميل' },
    { id: 'lectures', label: 'المحاضرات المرئية', icon: Youtube, badge: 'YouTube' },
    { id: 'gpa', label: 'المعدل وتنسيق الأقسام', icon: BarChart3, badge: '150 درجة' }
  ] : [
    { id: 'home', label: 'الرئيسية (الأقسام)', icon: Home, badge: 'بوابة المادة' },
    { id: 'syllabus', label: 'موسوعة المنهج', icon: BookOpen, badge: '6 وحدات' },
    { id: 'glossary', label: 'معجم الحفظ والقوانين', icon: BrainCircuit, badge: 'بنك الحفظ' },
    { id: 'lab', label: 'المعمل', icon: TestTube, badge: 'حاسبات وتجارب' },
    { id: 'cheatsheets', label: 'شيتات وقوانين A4', icon: Printer, badge: 'جاهز للطباعة' },
    { id: 'quiz', label: 'بنك الأسئلة والامتحانات', icon: Award, badge: 'MCQ' },
    { id: 'materials', label: 'مكتبة الماتريال', icon: FolderArchive, badge: 'PDF وتحميل' },
    { id: 'lectures', label: 'المحاضرات المرئية', icon: Youtube, badge: 'YouTube' },
    { id: 'gpa', label: 'المعدل وتنسيق الأقسام', icon: BarChart3, badge: '150 درجة' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-xl no-print font-arabic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Bar: Shoubra Brand + Multi-Subject Switcher */}
        <div className="flex items-center justify-between h-16 sm:h-20 gap-3">
          
          {/* Logo & Platform Title */}
          <div 
            onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-3 cursor-pointer group shrink-0"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-blue-700 via-indigo-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 border border-blue-400/40 group-hover:scale-105 transition-transform shrink-0">
              <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black text-cyan-400 bg-cyan-950/80 px-2.5 py-0.5 rounded-full border border-cyan-800/60">
                  {FACULTY_INFO.universityAr}
                </span>
                <span className="text-[11px] font-bold text-amber-300 hidden md:inline">
                  {FACULTY_INFO.facultyNameAr} (FES)
                </span>
              </div>
              <h1 className="text-sm sm:text-base md:text-lg font-black text-white group-hover:text-cyan-300 transition-colors leading-tight">
                بوابة إعدادي هندسة شبرا 🏛️
              </h1>
            </div>
          </div>

          {/* Center/Right: Interactive Subject Switcher */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            <div className="flex items-center p-1 rounded-2xl bg-slate-900 border border-slate-700/80 shadow-inner">
              <button
                onClick={() => {
                  setActiveSubject('math');
                  setActiveDivision('all');
                }}
                className={`px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 ${
                  isMath
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-900/50'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="التبديل إلى مادة الرياضيات 1 (MTH 001)"
              >
                <Calculator className="w-3.5 h-3.5 text-cyan-300" />
                <span>الرياضيات 1</span>
                <span className="hidden lg:inline text-[10px] opacity-80 font-mono">MTH 001</span>
              </button>

              <button
                onClick={() => {
                  setActiveSubject('chemistry');
                  setActiveDivision('all');
                }}
                className={`px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 ${
                  !isMath
                    ? 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-md shadow-cyan-900/50'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="التبديل إلى مادة الكيمياء الهندسية (CHM 001)"
              >
                <TestTube className="w-3.5 h-3.5 text-emerald-300" />
                <span>الكيمياء الهندسية</span>
                <span className="hidden lg:inline text-[10px] opacity-80 font-mono">CHM 001</span>
              </button>
            </div>

            {/* Shoubra Campus Pill */}
            <div className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-blue-950/80 border border-blue-800/60 text-xs font-bold text-blue-200 shrink-0">
              <span>📍 108 شارع شبرا / الخلفاوي</span>
            </div>

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
