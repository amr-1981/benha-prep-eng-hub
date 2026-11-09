import React, { useState } from 'react';
import { Lightbulb, ChevronDown, ChevronUp, Sparkles, HelpCircle, X, BookOpen, AlertCircle } from 'lucide-react';
import { ENGINEERING_TERMS } from '../data/engineeringTermsData';

/**
 * ConceptAccordion: Expandable bilingual explainer box designed to clarify the physical
 * and chemical intuition behind formulas, steps, and experiments for Egyptian engineering students.
 * Collapsed by default (English-first) with a small button to reveal Arabic explanation when needed.
 */
export function ConceptAccordion({ 
  titleEn = "Conceptual Intuition & Why?", 
  titleAr = "الفهم الهندسي وسر الخطوات بالعربي", 
  points = [], 
  examTip = "",
  isOpenDefault = false,
  studyMode = "bilingual"
}) {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  return (
    <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/20 via-slate-900/90 to-amber-950/20 shadow-sm overflow-hidden transition-all my-3 font-arabic">
      {/* Header bar / Trigger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-3 sm:p-3.5 flex items-center justify-between text-right bg-amber-950/20 hover:bg-amber-950/40 transition border-b border-amber-500/20"
      >
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center border border-amber-400/30 shrink-0">
            <Lightbulb className="w-4 h-4 text-amber-400" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-mono font-bold text-cyan-300 bg-slate-900 px-2 py-0.5 rounded-lg border border-slate-700" dir="ltr">
                {titleEn}
              </span>
              <span className="text-xs font-black text-amber-300">{titleAr}</span>
            </div>
            <p className="text-[11px] text-slate-400 mt-0.5 font-normal">
              اضغط لعرض الفهم الهندسي والتعليلات العلمية المقررة باللغة العربية
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-slate-400 shrink-0">
          <span className="text-[11px] font-bold text-amber-300 px-2.5 py-1 rounded-xl bg-amber-950/60 border border-amber-700/50 flex items-center gap-1">
            <span>{isOpen ? 'إخفاء الشرح' : '💡 الشرح بالعربي'}</span>
            <span className="text-[9px] opacity-70 font-mono">{isOpen ? '▲' : '▼'}</span>
          </span>
        </div>
      </button>

      {/* Expandable Body */}
      {isOpen && (
        <div className="p-4 sm:p-5 space-y-3 text-xs leading-relaxed animate-in fade-in duration-200" dir="rtl">
          <ul className="space-y-2.5">
            {points.map((pt, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-slate-200">
                <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-mono font-black flex items-center justify-center shrink-0 mt-0.5 border border-amber-400/30">
                  {idx + 1}
                </span>
                <span className="font-medium text-slate-200 leading-relaxed">{pt}</span>
              </li>
            ))}
          </ul>

          {examTip && (
            <div className="mt-3 pt-3 border-t border-amber-500/20 flex items-start gap-2 text-[11px] bg-amber-950/40 p-3 rounded-xl border border-amber-600/30 text-amber-200">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-300 font-black">سر الامتحان (Exam Insight): </strong>
                <span>{examTip}</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/**
 * ArabicExplanationDrawer: Compact, on-demand toggle button and drawer for any card or question
 */
export function ArabicExplanationDrawer({ 
  titleAr = "الشرح والتفسير الهندسي بالعربي", 
  titleEn,
  contentAr, 
  points = [], 
  examTip = "",
  className = ""
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`space-y-2 ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`px-3 py-1.5 rounded-xl text-[11px] font-bold transition-all flex items-center gap-1.5 border ${
          isOpen
            ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-xs'
            : 'bg-slate-900/90 hover:bg-slate-900 text-amber-400/90 hover:text-amber-300 border-slate-700/80 hover:border-amber-500/40'
        }`}
      >
        <Lightbulb className={`w-3.5 h-3.5 ${isOpen ? 'text-amber-300' : 'text-amber-400'}`} />
        <span>{isOpen ? 'إخفاء الشرح بالعربي' : '💡 الشرح بالعربي (Arabic Explanation)'}</span>
        <span className="text-[9px] opacity-70 px-1 rounded bg-black/30 font-mono">
          {isOpen ? '▲' : '▼'}
        </span>
      </button>

      {isOpen && (
        <div className="p-3.5 rounded-2xl bg-gradient-to-br from-amber-950/30 to-slate-900/90 border border-amber-500/30 space-y-2 text-right animate-in fade-in duration-200 font-arabic text-xs" dir="rtl">
          <div className="flex items-center justify-between border-b border-amber-500/20 pb-1.5">
            <span className="font-black text-amber-300">{titleAr}</span>
            {titleEn && (
              <span className="text-[10px] text-cyan-300 font-mono font-bold bg-slate-950 px-2 py-0.5 rounded border border-slate-800" dir="ltr">
                {titleEn}
              </span>
            )}
          </div>

          {contentAr && (
            <p className="text-slate-200 leading-relaxed font-medium whitespace-pre-line">
              {contentAr}
            </p>
          )}

          {points.length > 0 && (
            <ul className="space-y-1.5 pt-1">
              {points.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-200">
                  <span className="text-amber-400 font-bold shrink-0">•</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          )}

          {examTip && (
            <div className="mt-2 text-[11px] text-amber-200/90 bg-amber-950/50 p-2.5 rounded-xl border border-amber-800/40 flex items-start gap-2">
              <span className="shrink-0">🎯</span>
              <div>
                <strong>سر الامتحان:</strong> {examTip}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/**
 * TermBadge: Clickable/hoverable term pill that presents the instant Arabic definition & exam insight
 */
export function TermBadge({ termKey, children, className = "" }) {
  const [showModal, setShowModal] = useState(false);
  const termData = ENGINEERING_TERMS[termKey];

  if (!termData) {
    return <span className={className}>{children || termKey}</span>;
  }

  return (
    <>
      <span
        onClick={() => setShowModal(true)}
        className={`inline-flex items-center gap-1 cursor-pointer font-bold px-1.5 py-0.5 rounded transition bg-cyan-950/60 text-cyan-300 hover:bg-cyan-900/80 border border-cyan-800/60 hover:border-cyan-400/80 underline decoration-cyan-500/40 decoration-dotted underline-offset-4 ${className}`}
        title="اضغط لمعرفة المعنى والشرح الهندسي بالعربي"
      >
        <span>{children || termKey}</span>
        <HelpCircle className="w-3 h-3 text-cyan-400/80" />
      </span>

      {showModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-150"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="bg-slate-900 border-2 border-cyan-500/60 rounded-3xl p-6 max-w-lg w-full shadow-2xl space-y-4 font-arabic text-right relative"
            onClick={(e) => e.stopPropagation()}
            dir="rtl"
          >
            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute left-4 top-4 p-1.5 rounded-full bg-slate-800 text-slate-400 hover:text-white border border-slate-700"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800">
                  قاموس شبرا الهندسي • Term Decoder
                </span>
              </div>
              <h3 className="text-xl font-black text-white">{termData.ar}</h3>
              <span className="text-xs font-mono text-cyan-300 font-bold block mt-0.5" dir="ltr">
                {termKey}
              </span>
            </div>

            {/* English Academic Definition */}
            <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
              <span className="text-[10px] font-bold text-slate-400 block font-mono" dir="ltr">
                Academic English Definition (for Exam Answer Sheet):
              </span>
              <p className="text-xs text-slate-200 font-mono font-medium leading-relaxed" dir="ltr">
                {termData.definitionEn}
              </p>
            </div>

            {/* Simplified Arabic Explanation */}
            <div className="p-3.5 rounded-2xl bg-amber-950/30 border border-amber-500/30 space-y-1">
              <div className="flex items-center gap-1.5 text-amber-300 text-xs font-black">
                <Lightbulb className="w-4 h-4 text-amber-400" />
                <span>الفهم والتفسير الهندسي بالعربي:</span>
              </div>
              <p className="text-xs text-slate-200 font-medium leading-relaxed">
                {termData.explanationAr}
              </p>
            </div>

            {/* Exam Tip */}
            {termData.examTip && (
              <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-500/30 text-[11px] text-blue-200 flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-cyan-300 font-black">كيف يُطلب في امتحان شبرا؟ </strong>
                  <span>{termData.examTip}</span>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowModal(false)}
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-300 transition"
            >
              تم الفهم، إغلاق النافذة ✓
            </button>
          </div>
        </div>
      )}
    </>
  );
}
