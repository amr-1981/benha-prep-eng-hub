import React, { useState, useEffect } from 'react';
import { BookOpen, Droplets, Flame, ShieldAlert, Building2, Layers, Zap, CheckCircle2, AlertTriangle, ArrowRight, Sparkles } from 'lucide-react';
import { CHEMISTRY_MODULES, CHEMISTRY_DIVISIONS, BENHA_EXAM_TIPS } from '../data/chemistryCurriculumData';

export default function SyllabusView({ activeDivision = 'all', setActiveDivision }) {
  const iconMap = {
    Droplets: Droplets,
    Flame: Flame,
    ShieldAlert: ShieldAlert,
    Building2: Building2,
    Layers: Layers,
    Zap: Zap
  };

  const filteredModules = CHEMISTRY_MODULES.filter(m => {
    return !activeDivision || activeDivision === 'all' || m.division === activeDivision;
  });

  const [selectedModule, setSelectedModule] = useState(filteredModules[0] || CHEMISTRY_MODULES[0]);

  // Keep selected module valid when division filter changes
  useEffect(() => {
    if (!filteredModules.some(m => m.id === selectedModule.id)) {
      if (filteredModules.length > 0) {
        setSelectedModule(filteredModules[0]);
      }
    }
  }, [activeDivision, filteredModules, selectedModule]);

  const currentDivisionInfo = CHEMISTRY_DIVISIONS.find(d => d.id === activeDivision) || CHEMISTRY_DIVISIONS[0];

  return (
    <div className="space-y-8 pb-16">
      
      {/* Hero Welcome Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 rounded-3xl p-6 sm:p-8 border-2 border-blue-500/40 shadow-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-right">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-400/30">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              مقرر الفصل الدراسي الأول • كلية الهندسة بشبرا (جامعة بنها)
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-white">
              موسوعة الكيمياء الهندسية (Engineering Chemistry)
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl font-normal leading-relaxed">
              الدليل الشامل لمقرر كيمياء إعدادي هندسة شبرا مقسماً أكاديمياً بين: <strong>الكيمياء الحرارية والتطبيقات الصناعية (د. هناء عبد الوهاب)</strong> و <strong>الكيمياء الكهربية والتآكل (د. سمر عبد الحميد)</strong>.
            </p>
          </div>

          <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700/80 shrink-0 text-center sm:text-right space-y-1">
            <span className="text-[11px] font-bold text-slate-400">كود المادة بلائحة شبرا:</span>
            <div className="text-lg font-black text-cyan-400 font-mono">CHM 001</div>
            <div className="text-[11px] text-amber-300 font-bold">150 درجة إجمالية (شبرا)</div>
          </div>
        </div>
      </div>

      {/* Two-Branch Academic Division Highlight Banner */}
      <div className="p-4 sm:p-5 rounded-3xl bg-slate-900/90 border border-slate-700/80 shadow-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-black text-amber-400 bg-amber-950/80 px-2.5 py-0.5 rounded-full border border-amber-800/50">
                {currentDivisionInfo.badge}
              </span>
              <h2 className="text-sm sm:text-base font-black text-white">
                {currentDivisionInfo.titleAr}
              </h2>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-3xl">
              {currentDivisionInfo.description}
            </p>
          </div>

          {/* Local Division Tabs */}
          <div className="flex items-center gap-1.5 bg-slate-950 p-1.5 rounded-2xl border border-slate-800 shrink-0 overflow-x-auto no-scrollbar">
            {CHEMISTRY_DIVISIONS.map(div => (
              <button
                key={div.id}
                onClick={() => setActiveDivision && setActiveDivision(div.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition flex items-center gap-1.5 whitespace-nowrap ${
                  activeDivision === div.id
                    ? div.id === 'thermal'
                      ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md'
                      : div.id === 'electro'
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md'
                      : 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {div.id === 'thermal' ? <Flame className="w-3.5 h-3.5 text-amber-300" /> : div.id === 'electro' ? <Zap className="w-3.5 h-3.5 text-cyan-300" /> : <Sparkles className="w-3.5 h-3.5 text-amber-300" />}
                <span>{div.shortTitleAr}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Module Navigation Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">
        {filteredModules.map((mod) => {
          const Icon = iconMap[mod.icon] || BookOpen;
          const isSelected = selectedModule.id === mod.id;
          const isThermal = mod.division === 'thermal';
          return (
            <button
              key={mod.id}
              onClick={() => setSelectedModule(mod)}
              className={`p-4 rounded-2xl border-2 text-right transition-all flex flex-col justify-between h-36 ${
                isSelected
                  ? isThermal
                    ? 'bg-gradient-to-br from-amber-950/90 to-slate-900 border-amber-400 shadow-lg shadow-amber-950/50 scale-[1.02]'
                    : 'bg-gradient-to-br from-cyan-950/90 to-slate-900 border-cyan-400 shadow-lg shadow-cyan-950/50 scale-[1.02]'
                  : 'bg-slate-800/60 hover:bg-slate-800 border-slate-700 text-slate-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`p-2 rounded-xl ${isSelected ? (isThermal ? 'bg-amber-500 text-slate-950' : 'bg-cyan-500 text-slate-950') : 'bg-slate-700 text-slate-300'}`}>
                  <Icon className="w-5 h-5" />
                </span>
                <span className={`text-[10px] font-black px-2 py-0.5 rounded-full border ${
                  isThermal 
                    ? 'text-amber-300 bg-amber-950/80 border-amber-800/50' 
                    : 'text-cyan-300 bg-cyan-950/80 border-cyan-800/50'
                }`}>
                  {isThermal ? 'حرارية (د. هناء)' : 'كهربية (د. سمر)'}
                </span>
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-slate-400 block mb-0.5">الوحدة {mod.number}</span>
                <h3 className="font-black text-xs text-white line-clamp-1">{mod.titleAr}</h3>
                <span className="text-[10px] text-slate-400 line-clamp-1 font-mono">{mod.titleEn}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Module Detailed View */}
      <div className="bg-slate-800/90 rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-xl space-y-6">
        
        {/* Module Header */}
        <div className="border-b border-slate-700 pb-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-black px-3 py-1 rounded-full border ${
                selectedModule.division === 'thermal'
                  ? 'text-amber-300 bg-amber-950 border-amber-800'
                  : 'text-cyan-300 bg-cyan-950 border-cyan-800'
              }`}>
                {selectedModule.divisionBadge}
              </span>
              <span className="text-xs font-bold text-slate-400">
                {selectedModule.badge}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-2">
              {selectedModule.titleAr}
            </h2>
            <p className="text-xs font-mono text-slate-400 mt-0.5">{selectedModule.titleEn}</p>
          </div>
          <p className="text-xs text-slate-300 max-w-xl font-medium leading-relaxed bg-slate-900/60 p-3.5 rounded-2xl border border-slate-700/60">
            {selectedModule.summary}
          </p>
        </div>

        {/* Learning Objectives */}
        <div className="space-y-3">
          <h3 className="text-sm font-black text-cyan-300 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span>نواتج التعلم والمفاهيم الأساسية المقررة (Learning Objectives):</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {selectedModule.learningObjectives.map((obj, i) => (
              <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/50 border border-slate-700/60 text-xs font-bold text-slate-200">
                <span className="w-5 h-5 rounded-full bg-cyan-900/60 text-cyan-300 flex items-center justify-center shrink-0 text-[11px] font-black border border-cyan-700">
                  {i + 1}
                </span>
                <span>{obj}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Formulas Section */}
        <div className="space-y-3 pt-2">
          <h3 className="text-sm font-black text-amber-300 flex items-center gap-2">
            <span className="text-base">📐</span>
            <span>القوانين والمعادلات الحاكمة (Key Formulas):</span>
          </h3>
          <div className="space-y-3">
            {selectedModule.keyFormulas.map((f, i) => (
              <div key={i} className="p-4 rounded-2xl bg-slate-900 border border-slate-700/80 space-y-2">
                <div className="text-xs font-black text-slate-200">{f.title}</div>
                <div className="p-3 rounded-xl bg-slate-950 font-mono text-xs sm:text-sm font-bold text-cyan-300 border border-cyan-900/50 overflow-x-auto text-left" dir="ltr">
                  {f.formula}
                </div>
                <p className="text-[11px] text-slate-400 font-bold">{f.notes}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Exam Hotspots */}
        <div className="space-y-3 pt-2">
          <h3 className="text-sm font-black text-rose-300 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-rose-400" />
            <span>النقاط المتكررة وأسئلة الفاينال المفضلة لدكاترة هندسة شبرا (Exam Hotspots):</span>
          </h3>
          <div className="space-y-2">
            {selectedModule.examHotspots.map((spot, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-800/40 text-xs font-bold text-rose-200 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-400 shrink-0"></span>
                <span>{spot}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Benha Exam Pro-Tips Section */}
      <div className="bg-slate-800/80 rounded-3xl p-6 border border-slate-700 shadow-md">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl">💡</span>
          <h2 className="text-lg font-black text-white">
            نصائح وتوجيهات الامتحانات لطلاب إعدادي هندسة شبرا (جامعة بنها)
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {BENHA_EXAM_TIPS.map((tip, i) => (
            <div key={i} className="p-4 rounded-2xl bg-slate-900/80 border border-slate-700/60 space-y-1">
              <h4 className="text-xs font-black text-amber-300 flex items-center gap-1.5">
                <span>📌</span>
                <span>{tip.title}</span>
              </h4>
              <p className="text-xs text-slate-300 font-bold leading-relaxed">{tip.tip}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
