import React, { useState } from 'react';
import { Printer, Eye, FileText, Download, CheckCircle2, Sparkles, X, ArrowRight, Flame, Zap, Lightbulb, Calculator, Grid, Layers } from 'lucide-react';
import { CHEAT_SHEETS_CATEGORIES, CHEAT_SHEETS_DATA } from '../data/cheatSheetsData';
import { MATH_CHEAT_SHEETS_CATEGORIES, MATH_CHEAT_SHEETS_DATA } from '../data/mathCheatSheetsData';
import { FACULTY_INFO } from '../data/chemistryCurriculumData';

// BiDi Isolation Helper: Guarantees English formulas, brackets, and notations inside Arabic text never flip backwards
function SafeBiDiText({ text, className = "" }) {
  if (!text) return null;
  const parts = text.split(/(\[[^\]]+\]|\([A-Za-z0-9_\-\+\*\/\.\s=°%]+\)|[A-Za-z0-9_\-°%]{2,}(?:\s*=\s*[A-Za-z0-9_\-°%\/\.]+)?)/g);

  return (
    <span dir="rtl" className={className}>
      {parts.map((part, index) => {
        if (!part) return null;
        const isEnglishFormula = /^(\[|\()/.test(part) || /[A-Za-z]/.test(part);
        if (isEnglishFormula) {
          return (
            <bdi
              key={index}
              dir="ltr"
              className="inline-block font-mono font-black text-blue-900 bg-blue-100/70 px-1.5 py-0.5 rounded text-[11px] mx-1 border border-blue-200/80 shadow-xs"
            >
              {part}
            </bdi>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </span>
  );
}

export default function CheatSheetsView({ 
  activeDivision = 'all', 
  setActiveDivision, 
  studyMode = 'bilingual',
  activeSubject = 'math'
}) {
  const isMath = activeSubject === 'math';
  const categoriesList = isMath ? MATH_CHEAT_SHEETS_CATEGORIES : CHEAT_SHEETS_CATEGORIES;
  const rawSheetsList = isMath ? MATH_CHEAT_SHEETS_DATA : CHEAT_SHEETS_DATA;

  const [activeCategory, setActiveCategory] = useState('all');
  const [previewSheet, setPreviewSheet] = useState(null);
  const [expandedArabicSheets, setExpandedArabicSheets] = useState(new Set());

  const toggleArabicSheet = (id) => {
    setExpandedArabicSheets(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const filteredSheets = rawSheetsList.filter((s) => {
    const matchCategory = activeCategory === 'all' || s.category === activeCategory;
    const matchDivision = !activeDivision || activeDivision === 'all' || s.division === 'all' || s.division === activeDivision;
    return matchCategory && matchDivision;
  });

  const handlePrint = (sheet) => {
    setPreviewSheet(sheet);
    setTimeout(() => {
      window.print();
    }, 400);
  };

  return (
    <div className="space-y-8 pb-16 font-arabic">
      
      {/* Top Banner (Hidden on Print) */}
      <div className={`rounded-3xl p-6 sm:p-8 border-2 shadow-xl no-print ${
        isMath
          ? 'bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border-indigo-500/40'
          : 'bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 border-emerald-500/40'
      }`}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border mb-2 ${
              isMath ? 'bg-indigo-500/20 text-indigo-300 border-indigo-400/30' : 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30'
            }`}>
              <Printer className="w-3.5 h-3.5" />
              <span>مكتبة الملخصات الهندسية الجاهزة للطباعة (A4) • هندسة شبرا</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white">
              {isMath ? 'شِيتَاتُ قَوَانِينِ الرِّيَاضِيَّاتِ 1 وَنَمَاذِجُ الإِجَابَاتِ النَّمُوذَجِيَّةِ' : 'شِيتَاتُ القَوَانِينِ وَنَمَاذِجُ الإِجَابَاتِ النَّمُوذَجِيَّةِ'}
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm mt-1">
              {isMath 
                ? 'ملخصات مركزة تم إعدادها وتنسيقها للطباعة المباشرة بمقاس A4 مقسمة بين: قسم حساب التفاضل والتطبيقات (Calculus) وقسم الجبر والهندسة الفراغية (Algebra & 3D Geometry).'
                : 'ملخصات مركزة تم إعدادها وتنسيقها للطباعة المباشرة بمقاس A4 مقسمة بين: الكيمياء الحرارية (د. هناء) و الكيمياء الكهربية (د. سمر).'}
            </p>
          </div>

          <button
            onClick={() => window.print()}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-white font-black text-xs shadow-lg transition active:scale-95 shrink-0 ${
              isMath ? 'bg-indigo-600 hover:bg-indigo-500' : 'bg-emerald-600 hover:bg-emerald-500'
            }`}
          >
            <Printer className="w-4 h-4" />
            <span>طباعة الصفحة الحالية 🖨️</span>
          </button>
        </div>
      </div>

      {/* Two-Branch Academic Division Switcher */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-print">
        <span className="text-slate-400 font-bold shrink-0 flex items-center gap-1 text-xs">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>{isMath ? 'فرع الرياضيات:' : 'قسم الكيمياء:'}</span>
        </span>

        <button
          onClick={() => setActiveDivision && setActiveDivision('all')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition whitespace-nowrap ${
            activeDivision === 'all'
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          {isMath ? 'جميع شيتات الرياضيات (الفرعان)' : 'جميع الشيتات (القسمان)'}
        </button>

        {isMath ? (
          <>
            <button
              onClick={() => setActiveDivision && setActiveDivision('calculus')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition flex items-center gap-1.5 whitespace-nowrap ${
                activeDivision === 'calculus'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <Calculator className="w-3.5 h-3.5 text-cyan-300" />
              <span>قسم حساب التفاضل والتطبيقات (Calculus)</span>
            </button>

            <button
              onClick={() => setActiveDivision && setActiveDivision('algebra')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition flex items-center gap-1.5 whitespace-nowrap ${
                activeDivision === 'algebra'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <Grid className="w-3.5 h-3.5 text-purple-300" />
              <span>قسم الجبر والهندسة الفراغية (Algebra & 3D)</span>
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setActiveDivision && setActiveDivision('thermal')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition flex items-center gap-1.5 whitespace-nowrap ${
                activeDivision === 'thermal'
                  ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-amber-300" />
              <span>الكيمياء الحرارية والصناعية (د. هناء)</span>
            </button>

            <button
              onClick={() => setActiveDivision && setActiveDivision('electro')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition flex items-center gap-1.5 whitespace-nowrap ${
                activeDivision === 'electro'
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-cyan-300" />
              <span>الكيمياء الكهربية والتآكل (د. سمر)</span>
            </button>
          </>
        )}
      </div>

      {/* Category Filters (Hidden on Print) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-print">
        {categoriesList.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeCategory === cat.id
                ? (isMath ? 'bg-indigo-600 text-white shadow-md' : 'bg-emerald-600 text-white shadow-md')
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
            }`}
          >
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Sheets Cards Grid (Hidden on Print) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 no-print">
        {filteredSheets.map((sheet) => {
          const isArabicExpanded = expandedArabicSheets.has(sheet.id);

          return (
            <div
              key={sheet.id}
              className="bg-slate-800/90 rounded-3xl p-6 border-2 border-slate-700 hover:border-indigo-400/60 transition-all shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700 font-mono text-[11px] font-bold text-cyan-400">
                      📄 {sheet.paperSize} ({sheet.pagesCount} Page)
                    </span>
                    <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full border ${
                      isMath
                        ? sheet.division === 'calculus'
                          ? 'text-cyan-300 bg-blue-950/80 border-blue-800/50'
                          : 'text-purple-300 bg-purple-950/80 border-purple-800/50'
                        : sheet.division === 'thermal'
                          ? 'text-amber-300 bg-amber-950/80 border-amber-800/50'
                          : 'text-cyan-300 bg-cyan-950/80 border-cyan-800/50'
                    }`}>
                      {isMath
                        ? (sheet.division === 'calculus' ? '📐 تفاضل (Calculus)' : '⚡ جبر (Algebra)')
                        : (sheet.division === 'thermal' ? '🔥 حرارية (د. هناء)' : '⚡ كهربية (د. سمر)')}
                    </span>
                  </div>

                  <span className="text-[11px] text-slate-400 font-bold">
                    {sheet.professor}
                  </span>
                </div>

                {/* Primary Academic English Title */}
                <h3 className="text-base sm:text-lg font-black text-white font-mono tracking-tight text-left leading-snug mb-1" dir="ltr">
                  {sheet.titleEn}
                </h3>

                <p className="text-xs text-slate-300 font-mono text-left mb-3" dir="ltr">
                  {sheet.subtitleEn}
                </p>

                {/* Small Button for On-Demand Arabic Explanation */}
                <div className="pt-1 mb-3">
                  <button
                    onClick={() => toggleArabicSheet(sheet.id)}
                    className={`px-2.5 py-1.5 rounded-xl text-[11px] font-bold transition-all flex items-center gap-1.5 border ${
                      isArabicExpanded 
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm' 
                        : 'bg-slate-900/90 hover:bg-slate-900 text-amber-400/90 hover:text-amber-300 border-slate-700/80 hover:border-amber-500/40'
                    }`}
                  >
                    <Lightbulb className={`w-3.5 h-3.5 ${isArabicExpanded ? 'text-amber-300' : 'text-amber-400'}`} />
                    <span>{isArabicExpanded ? 'إخفاء الشرح بالعربي' : '💡 الشرح بالعربي (Arabic Context)'}</span>
                    <span className="text-[9px] opacity-70 px-1 rounded bg-black/30 font-mono">
                      {isArabicExpanded ? '▲' : '▼'}
                    </span>
                  </button>
                </div>

                {/* Expandable Arabic Explanation Drawer */}
                {isArabicExpanded && (
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-amber-950/25 to-slate-900/90 border border-amber-500/30 space-y-1.5 text-right animate-in fade-in duration-200 mb-3" dir="rtl">
                    <div className="flex items-center justify-between border-b border-amber-500/20 pb-1">
                      <span className="text-xs font-black text-amber-300">{sheet.title}</span>
                      <span className="text-[10px] text-amber-400/80 font-bold bg-amber-950/60 px-2 py-0.5 rounded border border-amber-700/40">توضيح المحتوى بالعربي</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-medium">
                      {sheet.subtitle}
                    </p>
                  </div>
                )}

                {/* Sections preview tags */}
                <div className="space-y-1.5 pt-2 border-t border-slate-700/60">
                  <span className="text-[11px] font-bold text-slate-400 block">أقسام ومحتويات ورقة القوانين:</span>
                  <div className="flex flex-wrap gap-1">
                    {sheet.sections.map((sec, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 rounded bg-slate-900 text-[10px] font-mono text-slate-300 border border-slate-700/60"
                        dir="ltr"
                      >
                        {sec.title}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-5 mt-4 border-t border-slate-700">
                <button
                  onClick={() => setPreviewSheet(sheet)}
                  className="flex-1 py-2.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-black text-xs transition flex items-center justify-center gap-1.5 shadow"
                >
                  <Eye className="w-3.5 h-3.5 text-cyan-400" />
                  <span>معاينة الشيت A4</span>
                </button>

                <button
                  onClick={() => handlePrint(sheet)}
                  className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-black text-xs transition flex items-center justify-center gap-1.5 shadow-md shadow-blue-900/40"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>طباعة A4 مباشر</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* ================= MODAL: PRINT PREVIEW (Interactive & Printable) ================= */}
      {previewSheet && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 no-print overflow-y-auto">
          <div className="bg-slate-900 border-2 border-slate-700 rounded-3xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-cyan-400 block">PRINT PREVIEW • {previewSheet.paperSize}</span>
                <h3 className="text-base sm:text-lg font-black text-white font-mono" dir="ltr">{previewSheet.titleEn}</h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handlePrint(previewSheet)}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs transition flex items-center gap-1.5 shadow"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>طباعة الآن</span>
                </button>

                <button
                  onClick={() => setPreviewSheet(null)}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: A4 Sheet Paper Simulation */}
            <div className="p-4 sm:p-8 overflow-y-auto bg-slate-950 flex justify-center">
              <div className="bg-white text-slate-900 rounded-lg p-6 sm:p-8 shadow-2xl max-w-2xl w-full space-y-4 border border-slate-300">
                
                {/* A4 Paper Header */}
                <div className="border-b-2 border-slate-900 pb-3 flex items-start justify-between">
                  <div>
                    <h2 className="text-xs font-black text-blue-900 uppercase tracking-wider font-mono">
                      Faculty of Engineering at Shoubra (Benha University)
                    </h2>
                    <h1 className="text-sm font-black text-slate-900 font-mono mt-0.5" dir="ltr">
                      {previewSheet.titleEn}
                    </h1>
                    <p className="text-[10px] text-slate-600 font-mono" dir="ltr">{previewSheet.subtitleEn}</p>
                  </div>
                  <div className="text-right text-[10px] font-bold text-slate-700">
                    <div>{isMath ? 'MTH 001' : 'CHM 001'}</div>
                    <div className="font-mono">Page 1 of {previewSheet.pagesCount}</div>
                  </div>
                </div>

                {/* Sections Rendering inside Sheet */}
                <div className="space-y-4">
                  {previewSheet.sections.map((sec, idx) => (
                    <div key={idx} className="space-y-2">
                      <h4 className="text-xs font-black text-blue-950 font-mono border-b border-slate-300 pb-1" dir="ltr">
                        {sec.title}
                      </h4>

                      {/* Table type */}
                      {sec.type === 'table' && (
                        <div className="overflow-x-auto">
                          <table className="w-full text-[10px] border-collapse border border-slate-300">
                            <thead>
                              <tr className="bg-slate-100 text-slate-800 font-bold font-mono" dir="ltr">
                                {sec.headers.map((h, hi) => (
                                  <th key={hi} className="border border-slate-300 p-1.5 text-left">{h}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {sec.rows.map((row, ri) => (
                                <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                                  {row.map((cell, ci) => (
                                    <td key={ci} className="border border-slate-300 p-1.5 font-mono text-slate-800" dir="ltr">
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* Reactions / Formulas type */}
                      {sec.type === 'reactions' && (
                        <div className="space-y-1.5">
                          {sec.items.map((item, ii) => (
                            <div key={ii} className="p-2 rounded bg-slate-50 border border-slate-200 text-left font-mono" dir="ltr">
                              <div className="text-xs font-black text-blue-900">{item.equation}</div>
                              {item.label && <div className="text-[9px] font-bold text-slate-700 mt-0.5">{item.label}</div>}
                              {item.desc && <div className="text-[9px] text-slate-600 mt-0.5">{item.desc}</div>}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Notes type */}
                      {sec.type === 'notes' && (
                        <ul className="list-disc list-inside text-[10px] text-slate-700 space-y-1 text-left font-mono" dir="ltr">
                          {sec.items.map((note, ni) => (
                            <li key={ni}>{note}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>

                {/* A4 Paper Footer */}
                <div className="border-t border-slate-300 pt-2 flex items-center justify-between text-[9px] text-slate-500 font-mono" dir="ltr">
                  <span>Prepared for Shoubra Engineering Students</span>
                  <span>Benha University • Academic Year 2024-2025</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
