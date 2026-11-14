import React, { useState } from 'react';
import { 
  Calculator, TestTube, Compass, Activity, Layers, GraduationCap, 
  ArrowRight, Sparkles, BookOpen, BarChart3, Clock, CheckCircle2, FileText, Lightbulb 
} from 'lucide-react';
import { AVAILABLE_SUBJECTS } from '../data/subjectsData';
import { FACULTY_INFO } from '../data/chemistryCurriculumData';

export default function MainHubView({ onSelectSubject, onOpenGpa }) {
  const [expandedArabicCards, setExpandedArabicCards] = useState(new Set());

  const toggleArabicCard = (id) => {
    setExpandedArabicCards(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const iconMap = {
    Calculator: Calculator,
    TestTube: TestTube,
    Compass: Compass,
    Activity: Activity,
    Layers: Layers,
    FileText: FileText
  };

  return (
    <div className="space-y-10 pb-16 font-arabic animate-in fade-in duration-300">
      
      {/* 1. Master Platform Hero (English-First with Academic Accreditation) */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-10 border-2 border-indigo-500/40 shadow-2xl relative overflow-hidden text-left" dir="ltr">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

        <div className="relative z-10 space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold border border-indigo-400/30">
            <GraduationCap className="w-4 h-4 text-cyan-400" />
            <span>الصفحة الرئيسية • Faculty of Engineering at Shoubra (Benha University)</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight font-mono">
            PREPARATORY ENGINEERING ACADEMIC PORTAL
            <span className="block text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-300 font-bold mt-2">
              Faculty of Engineering at Shoubra (FES) • Term 1 Curricula
            </span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
            Welcome, Engineer! Official academic learning platform for Preparatory Year engineering students at Shoubra (Benha University). Select your course below to enter its dedicated, 100% isolated academic portal with full curriculum modules, step-by-step solvers, printable cheat sheets, and past exam questions:
          </p>

          <p className="text-xs text-amber-300 font-bold" dir="rtl">
            💡 المنصة باللغة الإنجليزية الأكاديمية المعتمدة مع توفير زر «الشرح بالعربي» في كل بطاقة وقسم عند الحاجة.
          </p>

          <div className="flex flex-wrap items-center justify-start gap-2.5 pt-2 text-xs">
            <span className="px-3 py-1 rounded-xl bg-slate-800/80 text-amber-300 border border-slate-700/80 font-bold">
              🏛️ Shoubra Engineering Bylaws (FES)
            </span>
            <span className="px-3 py-1 rounded-xl bg-slate-800/80 text-cyan-300 border border-slate-700/80 font-bold">
              📚 100% Departmental Isolation System
            </span>
            <span className="px-3 py-1 rounded-xl bg-slate-800/80 text-emerald-300 border border-slate-700/80 font-bold">
              ✅ Academic Year 2024 / 2025
            </span>
            <span className="px-3 py-1 rounded-xl bg-slate-800/80 text-purple-300 border border-slate-700/80 font-bold">
              💡 English-First with On-Demand Arabic
            </span>
          </div>
        </div>
      </div>

      {/* 2. SUBJECTS CARDS SECTION */}
      <div className="space-y-6">
        <div className="text-left" dir="ltr">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <h2 className="text-xl sm:text-2xl font-black text-white font-mono uppercase tracking-wide">
              Official Academic Courses & Curricula
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Click on any course card below to enter its dedicated academic portal. Zero cross-course interference or external distractions.
          </p>
          <p className="text-xs text-amber-300 font-bold mt-1" dir="rtl">
            المواد الدراسية المقررة (اختر المادة للدخول المباشر إلى بيئتها المعزولة):
          </p>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {AVAILABLE_SUBJECTS.map((subject) => {
            const Icon = iconMap[subject.icon] || BookOpen;
            const isActive = subject.status === 'active';
            const isExpandedAr = expandedArabicCards.has(subject.id);

            return (
              <div
                key={subject.id}
                className={`rounded-3xl p-6 sm:p-8 border-2 transition-all flex flex-col justify-between group relative overflow-hidden ${
                  isActive
                    ? subject.id === 'math'
                      ? 'bg-gradient-to-br from-slate-900 via-slate-850 to-blue-950/40 border-blue-500/50 hover:border-blue-400 shadow-xl hover:shadow-blue-950/40'
                      : subject.id === 'english'
                      ? 'bg-gradient-to-br from-slate-900 via-slate-850 to-emerald-950/40 border-emerald-500/50 hover:border-emerald-400 shadow-xl hover:shadow-emerald-950/40'
                      : 'bg-gradient-to-br from-slate-900 via-slate-850 to-cyan-950/40 border-cyan-500/50 hover:border-cyan-400 shadow-xl hover:shadow-cyan-950/40'
                    : 'bg-slate-900/60 border-slate-800 opacity-75'
                }`}
              >
                <div className="space-y-5 relative z-10 text-left" dir="ltr">
                  
                  {/* Top Bar: Code + Status Badge + On-Demand Arabic Toggle */}
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs font-black text-cyan-400">
                        {subject.code}
                      </span>
                      <span className={`text-xs font-black px-3 py-1 rounded-full border ${
                        isActive
                          ? 'bg-emerald-950/80 text-emerald-300 border-emerald-700/60'
                          : 'bg-slate-800 text-slate-400 border-slate-700'
                      }`}>
                        {isActive ? (subject.badgeEn || subject.badge) : '⏳ Coming Soon'}
                      </span>
                    </div>

                    {/* On-Demand Arabic Explanation Toggle */}
                    {isActive && (
                      <button
                        onClick={() => toggleArabicCard(subject.id)}
                        className={`px-2.5 py-1 rounded-xl text-[11px] font-bold transition flex items-center gap-1.5 border ${
                          isExpandedAr 
                            ? 'bg-amber-500/20 text-amber-300 border-amber-500/40' 
                            : 'bg-slate-900 text-amber-400/90 hover:text-amber-300 border-slate-700 hover:border-amber-500/40'
                        }`}
                        title="تبديل الشرح والتوضيح بالعربي"
                      >
                        <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                        <span>{isExpandedAr ? 'إخفاء الشرح بالعربي' : '💡 الشرح بالعربي'}</span>
                      </button>
                    )}
                  </div>

                  {/* Icon & Titles in Academic English */}
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border shadow-lg ${
                      subject.id === 'math'
                        ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white border-blue-400/40 shadow-blue-900/50'
                        : subject.id === 'chemistry'
                        ? 'bg-gradient-to-br from-cyan-600 to-teal-600 text-white border-cyan-400/40 shadow-cyan-900/50'
                        : subject.id === 'english'
                        ? 'bg-gradient-to-br from-emerald-600 to-teal-600 text-white border-emerald-400/40 shadow-emerald-900/50'
                        : 'bg-slate-800 text-slate-400 border-slate-700'
                    }`}>
                      <Icon className="w-7 h-7" />
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-cyan-300 transition-colors leading-snug font-mono">
                        {subject.titleEn}
                      </h3>
                      <p className="text-xs font-bold text-slate-400 mt-0.5" dir="rtl">
                        {subject.titleAr}
                      </p>
                    </div>
                  </div>

                  {/* Course Description in Academic English */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal font-mono">
                    {subject.descriptionEn || subject.descriptionAr}
                  </p>

                  {/* On-Demand Arabic Explanation Drawer */}
                  {isExpandedAr && (
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-950/25 to-slate-900/95 border border-amber-500/40 text-right space-y-1.5 animate-in fade-in duration-200" dir="rtl">
                      <div className="flex items-center gap-1.5 text-xs font-black text-amber-300 border-b border-amber-500/20 pb-1">
                        <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                        <span>💡 الشرح والتوضيح الأكاديمي بالعربي لمقرر {subject.shortTitleAr}:</span>
                      </div>
                      <p className="text-xs text-slate-200 leading-relaxed font-medium">
                        {subject.descriptionAr}
                      </p>
                    </div>
                  )}

                  {/* Divisions Preview in Academic English */}
                  {isActive && subject.divisions && (
                    <div className="space-y-2 pt-2 border-t border-slate-800">
                      <span className="text-[11px] font-bold text-cyan-400 block font-mono tracking-wider uppercase">
                        Accredited Academic Branches & Divisions:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {subject.divisions.map((div) => (
                          <div 
                            key={div.id}
                            className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1"
                          >
                            <div className="flex items-center justify-between gap-1">
                              <span className="text-xs font-black text-white font-mono line-clamp-1">{div.titleEn}</span>
                              <span className="text-[10px] text-cyan-400 font-mono font-bold shrink-0">{div.badgeEn || div.badge}</span>
                            </div>
                            <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                              {div.subtitleEn || div.subtitleAr}
                            </p>
                            <span className="text-[10px] text-slate-500 block font-bold" dir="rtl">
                              {div.titleAr}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>

                {/* Enter Subject Button */}
                <div className="pt-6 mt-6 border-t border-slate-800/80" dir="ltr">
                  {isActive ? (
                    <button
                      onClick={() => onSelectSubject(subject.id)}
                      className={`w-full py-4 rounded-2xl font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl transition-all active:scale-[0.98] font-mono ${
                        subject.id === 'math'
                          ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white shadow-blue-900/50'
                          : subject.id === 'english'
                          ? 'bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-500 text-white shadow-emerald-900/50'
                          : 'bg-gradient-to-r from-cyan-600 via-teal-600 to-cyan-700 hover:from-cyan-500 hover:to-teal-500 text-white shadow-cyan-900/50'
                      }`}
                    >
                      <span>Enter {subject.shortTitleEn} Portal</span>
                      <span className="text-xs font-normal opacity-80" dir="rtl">(الدخول إلى مادة {subject.shortTitleAr})</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  ) : (
                    <div className="w-full py-3.5 rounded-2xl bg-slate-800/50 border border-slate-700/60 text-slate-400 font-bold text-xs flex items-center justify-center gap-2 font-mono">
                      <Clock className="w-4 h-4" />
                      <span>Curriculum Modules Under Development (قيد التجهيز)</span>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Quick Utility: GPA Tracker Shortcut */}
      <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-left" dir="ltr">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-amber-400" />
            <h4 className="text-sm font-black text-white font-mono">Academic GPA & Department Placement Calculator</h4>
            <span className="text-xs text-amber-300 font-bold" dir="rtl">(حاسبة المعدل وتنسيق الأقسام)</span>
          </div>
          <p className="text-xs text-slate-400 font-normal">
            Calculate your semester GPA and simulate internal department placement across Civil, Architecture, Electrical, Mechanical, Communications, and Computer Engineering at Shoubra.
          </p>
        </div>

        <button
          onClick={onOpenGpa}
          className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-amber-300 font-black text-xs border border-slate-700 transition flex items-center gap-2 shrink-0 font-mono"
        >
          <span>Launch GPA Calculator 📊</span>
        </button>
      </div>

    </div>
  );
}
