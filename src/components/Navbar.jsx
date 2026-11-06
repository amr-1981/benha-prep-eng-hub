import React from 'react';
import { BookOpen, Calculator, Printer, TestTube, Youtube, Award, BarChart3, GraduationCap, ChevronDown, Check } from 'lucide-react';
import { FACULTY_INFO } from '../data/chemistryCurriculumData';

export default function Navbar({ activeTab, setActiveTab, facultyId, setFacultyId }) {
  const currentFaculty = FACULTY_INFO.faculties.find(f => f.id === facultyId) || FACULTY_INFO.faculties[0];

  const navItems = [
    { id: 'syllabus', label: 'موسوعة المنهج', icon: BookOpen, badge: '5 وحدات' },
    { id: 'calculators', label: 'المعمل الحسابي', icon: Calculator, badge: 'حاسبات ذكية' },
    { id: 'cheatsheets', label: 'شيتات وقوانين A4', icon: Printer, badge: 'جاهز للطباعة' },
    { id: 'lab', label: 'المعمل الافتراضي', icon: TestTube, badge: 'تجارب وشفوي' },
    { id: 'quiz', label: 'بنك الأسئلة والامتحانات', icon: Award, badge: 'MCQ' },
    { id: 'lectures', label: 'المحاضرات المرئية', icon: Youtube, badge: 'YouTube' },
    { id: 'gpa', label: 'المعدل وتنسيق الأقسام', icon: BarChart3, badge: 'محاكي' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-xl no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Bar: Brand & College Switcher */}
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          
          {/* Logo & Platform Title */}
          <div 
            onClick={() => setActiveTab('syllabus')}
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
                  {facultyId === 'shoubra' ? 'كلية الهندسة بشبرا (FES)' : 'كلية الهندسة ببنها (BFAC)'}
                </span>
              </div>
              <h1 className="text-sm sm:text-lg font-black text-white group-hover:text-cyan-300 transition-colors leading-tight">
                {facultyId === 'shoubra' ? 'بوابة إعدادي هندسة شبرا 🏛️' : 'بوابة إعدادي هندسة بنها 🏛️'}
              </h1>
            </div>
          </div>

          {/* Right Controls: College Switcher & Subject Pill */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Active Subject Pill */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-slate-900 border border-slate-700/80 text-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-slate-300 font-bold">المادة النشطة:</span>
              <span className="text-cyan-300 font-black">الكيمياء الهندسية (ترم أول)</span>
            </div>

            {/* Faculty Switcher (Benha / Shoubra) */}
            <div className="flex items-center p-1 rounded-2xl bg-slate-900 border border-slate-800">
              {FACULTY_INFO.faculties.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFacultyId(f.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all ${
                    facultyId === f.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {f.short}
                </button>
              ))}
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
