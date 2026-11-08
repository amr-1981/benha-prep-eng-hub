import React, { useState, useEffect } from 'react';
import { Calculator, TestTube, Sparkles, Flame, Zap, Beaker, CheckCircle2 } from 'lucide-react';
import CalculatorsView from './CalculatorsView';
import VirtualLabView from './VirtualLabView';

export default function LabView({ activeDivision = 'all', setActiveDivision, defaultMode = 'calculators', subTab, studyMode = 'bilingual' }) {
  const [labMode, setLabMode] = useState(subTab || defaultMode || 'calculators'); // 'calculators' | 'experiments'

  useEffect(() => {
    if (subTab) {
      setLabMode(subTab);
    }
  }, [subTab]);

  return (
    <div className="space-y-6 font-arabic animate-in fade-in duration-200">
      
      {/* Unified Lab Master Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 border-2 border-indigo-500/40 shadow-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-right space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold border border-indigo-400/30">
              <Beaker className="w-4 h-4 text-cyan-400" />
              <span>المعمل الهندسي الشامل • Engineering Lab Hub</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-white">
              مَعْمَلُ الكِيمْيَاءِ الهَنْدَسِيَّةِ الشَّامِلُ
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl font-normal leading-relaxed">
              منصة معملية متكاملة تجمع بين <strong className="text-cyan-300 font-bold">الحاسبات الذكية</strong> لحل مسائل وقوانين الامتحانات والشيتات بالخطوات، و<strong className="text-emerald-300 font-bold">المعمل الافتراضي</strong> لمحاكاة تجارب العملي وأسئلة الشفوي (VIVA).
            </p>
          </div>

          {/* Quick Division Indicator */}
          <div className="bg-slate-800/90 p-4 rounded-2xl border border-slate-700/80 text-center shrink-0 shadow-md">
            <span className="text-[11px] font-bold text-slate-400 block mb-1">القسم النشط حالياً:</span>
            <div className="flex items-center justify-center gap-1.5">
              {activeDivision === 'thermal' ? (
                <span className="px-3 py-1 rounded-full bg-amber-950 text-amber-300 border border-amber-800 text-xs font-black flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5" />
                  <span>حرارية وصناعية (د. هناء)</span>
                </span>
              ) : activeDivision === 'electro' ? (
                <span className="px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800 text-xs font-black flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5" />
                  <span>كهربية وتآكل (د. سمر)</span>
                </span>
              ) : (
                <span className="px-3 py-1 rounded-full bg-blue-950 text-blue-300 border border-blue-800 text-xs font-black flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>القسمان معاً</span>
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Master Mode Switcher Tabs */}
        <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => { setLabMode('calculators'); window.scrollTo({ top: 180, behavior: 'smooth' }); }}
            className={`w-full sm:w-auto px-6 py-3.5 rounded-2xl font-black text-sm flex items-center justify-center gap-2.5 transition-all shadow-md ${
              labMode === 'calculators'
                ? 'bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 text-white shadow-blue-900/50 scale-[1.02] border-2 border-cyan-300/40'
                : 'bg-slate-800/90 text-slate-300 hover:text-white hover:bg-slate-750 border border-slate-700'
            }`}
          >
            <Calculator className={`w-5 h-5 ${labMode === 'calculators' ? 'text-cyan-200' : 'text-slate-400'}`} />
            <span>المعمل الحسابي الذكي (حل المسائل والقوانين)</span>
            {labMode === 'calculators' && (
              <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-mono font-bold">
                نشط
              </span>
            )}
          </button>

          <button
            onClick={() => { setLabMode('experiments'); window.scrollTo({ top: 180, behavior: 'smooth' }); }}
            className={`w-full sm:w-auto px-6 py-3.5 rounded-2xl font-black text-sm flex items-center justify-center gap-2.5 transition-all shadow-md ${
              labMode === 'experiments'
                ? 'bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white shadow-emerald-900/50 scale-[1.02] border-2 border-emerald-300/40'
                : 'bg-slate-800/90 text-slate-300 hover:text-white hover:bg-slate-750 border border-slate-700'
            }`}
          >
            <TestTube className={`w-5 h-5 ${labMode === 'experiments' ? 'text-emerald-200' : 'text-slate-400'}`} />
            <span>المعمل الافتراضي (تجارب العملي والشفوي VIVA)</span>
            {labMode === 'experiments' && (
              <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-mono font-bold">
                نشط
              </span>
            )}
          </button>
        </div>

      </div>

      {/* Render Sub-View */}
      <div className="pt-2">
        {labMode === 'calculators' && (
          <CalculatorsView 
            activeDivision={activeDivision} 
            setActiveDivision={setActiveDivision} 
            studyMode={studyMode}
          />
        )}

        {labMode === 'experiments' && (
          <VirtualLabView 
            activeDivision={activeDivision} 
            setActiveDivision={setActiveDivision} 
            studyMode={studyMode}
          />
        )}
      </div>

    </div>
  );
}
