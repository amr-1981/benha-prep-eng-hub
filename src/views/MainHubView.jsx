import React from 'react';
import { 
  Calculator, TestTube, Compass, Activity, Layers, GraduationCap, 
  ArrowRight, Sparkles, BookOpen, BarChart3, Clock, CheckCircle2, FileText 
} from 'lucide-react';
import { AVAILABLE_SUBJECTS } from '../data/subjectsData';
import { FACULTY_INFO } from '../data/chemistryCurriculumData';

export default function MainHubView({ onSelectSubject, onOpenGpa }) {
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
      
      {/* 1. Master Platform Hero */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-10 border-2 border-indigo-500/40 shadow-2xl relative overflow-hidden text-center md:text-right">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

        <div className="relative z-10 space-y-4 max-w-4xl mx-auto md:mx-0">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold border border-indigo-400/30">
            <GraduationCap className="w-4 h-4 text-cyan-400" />
            <span>الصفحة الرئيسية • كلية الهندسة بشبرا (جامعة بنها)</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            بَوَّابَةُ الفِرْقَةِ الإِعْدَادِيَّةِ الهَنْدَسِيَّةِ
            <span className="block text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-300 font-bold mt-2">
              Faculty of Engineering at Shoubra (FES) • الفصل الدراسي الأول
            </span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
            أهلاً بك يا باشمهندس في <strong className="text-white font-black">الصفحة الرئيسية</strong> للمنصة الأكاديمية المعتمدة لطلاب إعدادي هندسة شبرا. اختر المادة الدراسية أدناه للدخول المباشر إلى صفحتها المستقلة واستعراض أقسامها العلمية:
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 pt-2 text-xs">
            <span className="px-3 py-1 rounded-xl bg-slate-800/80 text-amber-300 border border-slate-700/80 font-bold">
              🏛️ لائحة كلية الهندسة بشبرا (جامعة بنها)
            </span>
            <span className="px-3 py-1 rounded-xl bg-slate-800/80 text-cyan-300 border border-slate-700/80 font-bold">
              📚 نظام العزل التام للمواد والأقسام
            </span>
            <span className="px-3 py-1 rounded-xl bg-slate-800/80 text-emerald-300 border border-slate-700/80 font-bold">
              ✅ العام الجامعي 2024 / 2025
            </span>
          </div>
        </div>
      </div>

      {/* 2. SUBJECTS CARDS SECTION */}
      <div className="space-y-6">
        <div className="text-center sm:text-right">
          <h2 className="text-xl sm:text-2xl font-black text-white flex items-center justify-center sm:justify-start gap-2">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span>المواد الدراسية المقررة (اختر المادة للدخول إليها):</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            عند الضغط على كارت أي مادة، ستدخل إلى الصفحة الرئيسية لتلك المادة حصراً دون وجود أي محتوى أو أيقونات لمواد أخرى.
          </p>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {AVAILABLE_SUBJECTS.map((subject) => {
            const Icon = iconMap[subject.icon] || BookOpen;
            const isActive = subject.status === 'active';

            return (
              <div
                key={subject.id}
                className={`rounded-3xl p-6 sm:p-8 border-2 transition-all flex flex-col justify-between group relative overflow-hidden ${
                  isActive
                    ? subject.id === 'math'
                      ? 'bg-gradient-to-br from-slate-900 via-slate-850 to-blue-950/40 border-blue-500/50 hover:border-blue-400 shadow-xl hover:shadow-blue-950/40'
                      : 'bg-gradient-to-br from-slate-900 via-slate-850 to-cyan-950/40 border-cyan-500/50 hover:border-cyan-400 shadow-xl hover:shadow-cyan-950/40'
                    : 'bg-slate-900/60 border-slate-800 opacity-75'
                }`}
              >
                <div className="space-y-5 relative z-10">
                  
                  {/* Top Bar: Code + Status Badge */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs font-black text-cyan-400">
                      {subject.code}
                    </span>
                    <span className={`text-xs font-black px-3 py-1 rounded-full border ${
                      isActive
                        ? 'bg-emerald-950/80 text-emerald-300 border-emerald-700/60'
                        : 'bg-slate-800 text-slate-400 border-slate-700'
                    }`}>
                      {isActive ? subject.badge : '⏳ قريباً'}
                    </span>
                  </div>

                  {/* Icon & Titles */}
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border shadow-lg ${
                      subject.id === 'math'
                        ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white border-blue-400/40 shadow-blue-900/50'
                        : subject.id === 'chemistry'
                        ? 'bg-gradient-to-br from-cyan-600 to-teal-600 text-white border-cyan-400/40 shadow-cyan-900/50'
                        : 'bg-slate-800 text-slate-400 border-slate-700'
                    }`}>
                      <Icon className="w-7 h-7" />
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-cyan-300 transition-colors leading-snug">
                        {subject.titleAr}
                      </h3>
                      <p className="text-xs font-mono font-bold text-slate-400 mt-1" dir="ltr">
                        {subject.titleEn}
                      </p>
                    </div>
                  </div>

                  {/* Subject Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                    {subject.descriptionAr}
                  </p>

                  {/* Divisions Preview for Active Subjects */}
                  {isActive && subject.divisions && (
                    <div className="space-y-2 pt-2 border-t border-slate-800">
                      <span className="text-[11px] font-bold text-slate-400 block">الأقسام الأكاديمية المعتمدة داخل المادة:</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {subject.divisions.map((div) => (
                          <div 
                            key={div.id}
                            className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1 text-right"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-black text-white">{div.titleAr}</span>
                              <span className="text-[10px] text-cyan-400 font-mono font-bold">{div.badge}</span>
                            </div>
                            <p className="text-[10px] text-slate-400 line-clamp-1">{div.subtitleAr}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>

                {/* Enter Subject Button */}
                <div className="pt-6 mt-6 border-t border-slate-800/80">
                  {isActive ? (
                    <button
                      onClick={() => onSelectSubject(subject.id)}
                      className={`w-full py-4 rounded-2xl font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl transition-all active:scale-[0.98] ${
                        subject.id === 'math'
                          ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white shadow-blue-900/50'
                          : 'bg-gradient-to-r from-cyan-600 via-teal-600 to-cyan-700 hover:from-cyan-500 hover:to-teal-500 text-white shadow-cyan-900/50'
                      }`}
                    >
                      <span>الدخول إلى مادة {subject.shortTitleAr}</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-[-4px] transition-transform" />
                    </button>
                  ) : (
                    <div className="w-full py-3.5 rounded-2xl bg-slate-800/50 border border-slate-700/60 text-slate-400 font-bold text-xs flex items-center justify-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>قيد الإعداد والتطوير لمقرر إعدادي شبرا</span>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Quick Utility: GPA Tracker Shortcut */}
      <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-right">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <BarChart3 className="w-4 h-4 text-amber-400" />
            <h4 className="text-sm font-black text-white">حاسبة المعدل وتنسيق الأقسام (GPA Tracker)</h4>
          </div>
          <p className="text-xs text-slate-400">
            احسب درجاتك وتوقع تنسيقك الداخلي لأقسام (مدني، عمارة، كهرباء، ميكانيكا، اتصالات، حاسبات) بهندسة شبرا.
          </p>
        </div>

        <button
          onClick={onOpenGpa}
          className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-amber-300 font-black text-xs border border-slate-700 transition flex items-center gap-2 shrink-0"
        >
          <span>فتح حاسبة التنسيق 📊</span>
        </button>
      </div>

    </div>
  );
}
