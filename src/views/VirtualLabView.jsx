import React, { useState } from 'react';
import { TestTube, Play, RotateCcw, CheckCircle2, AlertCircle, HelpCircle, Sparkles } from 'lucide-react';
import { LAB_EXPERIMENTS } from '../data/labExperimentsData';

export default function VirtualLabView() {
  const [selectedExp, setSelectedExp] = useState(LAB_EXPERIMENTS[0]);

  // Titration simulator state for Experiment 1
  const [edtaVolume, setEdtaVolume] = useState(0);
  const equivalencePoint = 18.5; // mL

  // Calculate current color based on titration progress
  const getFlaskColor = () => {
    if (edtaVolume === 0) return 'bg-rose-900 text-rose-100 border-rose-500'; // Initial wine red
    if (edtaVolume < equivalencePoint - 1.5) return 'bg-rose-800 text-rose-100 border-rose-400';
    if (edtaVolume < equivalencePoint) return 'bg-purple-800 text-purple-100 border-purple-400'; // Transition
    return 'bg-blue-600 text-white border-cyan-300'; // Steel blue endpoint!
  };

  const getFlaskStatusText = () => {
    if (edtaVolume === 0) return 'أحمر نبيذي (Wine Red) - بداية التجربة، متراكب Mg-EBT نشط';
    if (edtaVolume < equivalencePoint) return `جاري التنقيط... الحجم: ${edtaVolume.toFixed(1)} mL (اللون أرجواني انتقالي)`;
    return `نقطة النهاية (Endpoint reached)! تحول اللون للأزرق النقي عند ${equivalencePoint} mL`;
  };

  return (
    <div className="space-y-8 pb-16">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 border-2 border-indigo-500/40 shadow-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold border border-indigo-400/30 mb-2">
              <TestTube className="w-3.5 h-3.5 text-cyan-400" />
              <span>معمل الكيمياء الافتراضي • Virtual Engineering Lab</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white">
              تَجَارِبُ المَعْمَلِ وَأَسْئِلَةُ الامْتِحَانِ الشَّفَوِي (VIVA)
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm mt-1">
              شرح تفاعلي للأجهزة وخطوات العمل، محاكاة معايرة EDTA، وأسئلة الشفوي المقررة في هندسة بنها وشبرا
            </p>
          </div>

          <div className="bg-slate-800/80 p-3.5 rounded-2xl border border-slate-700 text-center shrink-0">
            <span className="text-xs font-bold text-slate-400">امتحان العملي والشفوي:</span>
            <div className="text-xl font-black text-amber-400">15 - 20 درجة</div>
          </div>
        </div>
      </div>

      {/* Experiment Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {LAB_EXPERIMENTS.map((exp) => (
          <button
            key={exp.id}
            onClick={() => {
              setSelectedExp(exp);
              setEdtaVolume(0);
            }}
            className={`p-4 rounded-2xl border-2 text-right transition-all flex flex-col justify-between ${
              selectedExp.id === exp.id
                ? 'bg-gradient-to-br from-indigo-900/90 to-slate-900 border-cyan-400 shadow-lg scale-[1.02]'
                : 'bg-slate-800/60 hover:bg-slate-800 border-slate-700 text-slate-300'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-black text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded-full border border-cyan-800">
                تجربة {exp.number}
              </span>
              <span className="text-xs text-amber-300 font-bold">{exp.marks}</span>
            </div>
            <h3 className="font-black text-xs text-white line-clamp-2">{exp.titleAr}</h3>
            <span className="text-[10px] text-slate-400 mt-2 font-mono">{exp.duration}</span>
          </button>
        ))}
      </div>

      {/* Interactive Titration Simulator (For Exp 1) */}
      {selectedExp.id === 'exp-edta' && (
        <div className="bg-slate-800/90 rounded-3xl p-6 border-2 border-indigo-500/40 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-700 pb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
              <h2 className="text-base font-black text-white">محاكي معايرة عسر الماء بالسحاحة (Virtual Titration Flask)</h2>
            </div>
            <button
              onClick={() => setEdtaVolume(0)}
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1 bg-slate-700/60 px-3 py-1.5 rounded-xl"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>تفريغ الدورق والبدء من جديد</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Visual Flask Representation */}
            <div className="flex flex-col items-center justify-center p-6 bg-slate-950 rounded-2xl border border-slate-700">
              <div className="text-xs font-bold text-slate-400 mb-3">دورق المعايرة المخروطي (Conical Flask 250 mL)</div>
              
              {/* Flask Container */}
              <div className={`w-36 h-44 rounded-b-3xl rounded-t-lg border-4 flex flex-col items-center justify-end p-4 transition-colors duration-500 shadow-2xl relative ${getFlaskColor()}`}>
                <div className="absolute top-2 text-[10px] font-mono text-center opacity-80">
                  Buffer pH 10 + EBT
                </div>
                <div className="text-center font-black text-xs">
                  {edtaVolume >= equivalencePoint ? 'لون أزرق نقي 🔵' : 'لون أحمر نبيذي 🍷'}
                </div>
              </div>

              <div className="text-xs font-bold mt-4 text-center text-slate-300">
                الحالة: <span className="font-mono text-cyan-300">{getFlaskStatusText()}</span>
              </div>
            </div>

            {/* Titration Controls & Burette Reading */}
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-700 space-y-2">
                <div className="flex justify-between text-xs font-bold text-slate-300">
                  <span>قراءة السحاحة (Burette Reading):</span>
                  <span className="font-mono text-base font-black text-cyan-300">{edtaVolume.toFixed(1)} mL</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="25"
                  step="0.5"
                  value={edtaVolume}
                  onChange={(e) => setEdtaVolume(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>0 mL</span>
                  <span>نقطة التعادل المتوقعة: 18.5 mL</span>
                  <span>25 mL</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setEdtaVolume(prev => Math.min(25, prev + 1))}
                  className="flex-1 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition"
                >
                  + إضافة 1.0 mL إديتا
                </button>
                <button
                  onClick={() => setEdtaVolume(prev => Math.min(25, prev + 0.1))}
                  className="flex-1 py-2 rounded-xl bg-cyan-700 hover:bg-cyan-600 text-white font-bold text-xs transition"
                >
                  + تنقيط 0.1 mL بالقطرة
                </button>
                <button
                  onClick={() => setEdtaVolume(equivalencePoint)}
                  className="px-3 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs transition"
                  title="القفز لنقطة النهاية مباشرة"
                >
                  نقطة النهاية 🎯
                </button>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-700 text-[11px] text-slate-300 font-medium leading-relaxed">
                <strong className="text-cyan-300">ملاحظة معملية:</strong> لاحظ التغير التدريجي من اللون الأحمر النبيذي إلى البنفسجي، ثم الانقلاب الحاد عند 18.5 مل إلى اللون الأزرق النقي (Steel Blue).
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Selected Experiment Detailed Guide */}
      <div className="bg-slate-800/90 rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-xl space-y-6">
        
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-white">{selectedExp.titleAr}</h2>
          <p className="text-xs font-mono text-slate-400 mt-0.5">{selectedExp.titleEn}</p>
        </div>

        {/* Theory & Principle */}
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-700 space-y-1.5">
          <h4 className="text-xs font-black text-cyan-300">الأساس العلمي والنظري للتجربة (Principle & Theory):</h4>
          <p className="text-xs text-slate-300 font-medium leading-relaxed">{selectedExp.theory}</p>
        </div>

        {/* Apparatus List */}
        <div>
          <h4 className="text-xs font-black text-amber-300 mb-2">الأدوات والمحاليل المعملية المستخدمة (Apparatus & Reagents):</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {selectedExp.apparatus.map((app, i) => (
              <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/40 border border-slate-700/60 text-xs font-bold text-slate-300">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <span>{app}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Step-by-Step Procedure */}
        <div>
          <h4 className="text-xs font-black text-emerald-300 mb-3">خطوات التجربة داخل المعمل (Procedure Steps):</h4>
          <div className="space-y-2">
            {selectedExp.procedureSteps.map((step) => (
              <div key={step.step} className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-700/60 text-xs font-medium text-slate-200">
                <span className="w-6 h-6 rounded-lg bg-emerald-900/80 text-emerald-300 font-black text-xs flex items-center justify-center shrink-0 border border-emerald-700">
                  {step.step}
                </span>
                <span className="leading-relaxed">{step.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Calculations */}
        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-700 space-y-2">
          <h4 className="text-xs font-black text-cyan-300">قوانين وحسابات استخراج النتائج (Calculations):</h4>
          {selectedExp.calculationsFormula.map((calc, i) => (
            <div key={i} className="p-2.5 rounded-lg bg-slate-950 font-mono text-xs font-bold text-amber-300 text-left" dir="ltr">
              {calc}
            </div>
          ))}
        </div>

        {/* Viva Questions */}
        <div className="space-y-3 pt-2">
          <h4 className="text-sm font-black text-purple-300 flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-purple-400" />
            <span>أسئلة الامتحان الشفوي المعتادة (Viva Questions & Answers):</span>
          </h4>
          <div className="space-y-3">
            {selectedExp.vivaQuestions.map((viva, i) => (
              <div key={i} className="p-4 rounded-2xl bg-slate-900/80 border border-purple-900/50 space-y-2">
                <div className="text-xs font-black text-white flex items-center gap-2">
                  <span className="text-purple-400">س:</span>
                  <span>{viva.q}</span>
                </div>
                <div className="text-xs font-bold text-slate-300 bg-slate-950/60 p-3 rounded-xl border border-slate-800 leading-relaxed flex items-start gap-2">
                  <span className="text-emerald-400 font-black shrink-0">ج:</span>
                  <span>{viva.a}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
