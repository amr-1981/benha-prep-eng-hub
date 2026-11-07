import React, { useState } from 'react';
import { Printer, Eye, FileText, Download, CheckCircle2, Sparkles, X, ArrowRight, Flame, Zap } from 'lucide-react';
import { CHEAT_SHEETS_CATEGORIES, CHEAT_SHEETS_DATA } from '../data/cheatSheetsData';
import { FACULTY_INFO } from '../data/chemistryCurriculumData';

export default function CheatSheetsView({ activeDivision = 'all', setActiveDivision }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [previewSheet, setPreviewSheet] = useState(null);

  const filteredSheets = CHEAT_SHEETS_DATA.filter((s) => {
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
    <div className="space-y-8 pb-16">
      
      {/* Top Banner (Hidden on Print) */}
      <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 rounded-3xl p-6 sm:p-8 border-2 border-emerald-500/40 shadow-xl no-print">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-400/30 mb-2">
              <Printer className="w-3.5 h-3.5" />
              <span>مكتبة الملخصات الهندسية الجاهزة للطباعة (A4) • هندسة شبرا</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white">
              شِيتَاتُ القَوَانِينِ وَنَمَاذِجُ الإِجَابَاتِ النَّمُوذَجِيَّةِ
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm mt-1">
              ملخصات مركزة تم إعدادها وتنسيقها للطباعة المباشرة بمقاس A4 مقسمة بين: <strong>الكيمياء الحرارية (د. هناء)</strong> و <strong>الكيمياء الكهربية (د. سمر)</strong>.
            </p>
          </div>

          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs shadow-lg transition active:scale-95 shrink-0"
          >
            <Printer className="w-4 h-4" />
            <span>طباعة الصفحة الحالية 🖨️</span>
          </button>
        </div>
      </div>

      {/* Two-Branch Academic Division Switcher */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-print">
        <span className="text-slate-400 font-bold shrink-0 flex items-center gap-1 text-xs">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>قسم الكيمياء:</span>
        </span>

        <button
          onClick={() => setActiveDivision && setActiveDivision('all')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition whitespace-nowrap ${
            activeDivision === 'all'
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          جميع الشيتات (القسمان)
        </button>

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
      </div>

      {/* Category Filters (Hidden on Print) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-print">
        {CHEAT_SHEETS_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeCategory === cat.id
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
            }`}
          >
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Sheets Cards Grid (Hidden on Print) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 no-print">
        {filteredSheets.map((sheet) => (
          <div
            key={sheet.id}
            className="bg-slate-800/90 rounded-3xl p-6 border-2 border-slate-700 hover:border-emerald-400/60 transition-all shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-black text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded-full border border-emerald-800">
                    ورقة عمل {sheet.paperSize} • {sheet.pagesCount} صفحة
                  </span>
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded-full border ${
                    sheet.division === 'thermal'
                      ? 'text-amber-300 bg-amber-950/80 border-amber-800/60'
                      : sheet.division === 'electro'
                      ? 'text-cyan-300 bg-cyan-950/80 border-cyan-800/60'
                      : 'text-indigo-300 bg-indigo-950/80 border-indigo-800/60'
                  }`}>
                    {sheet.division === 'thermal' ? '🔥 حرارية (د. هناء)' : sheet.division === 'electro' ? '⚡ كهربية (د. سمر)' : '🏛️ شامل الفاينال'}
                  </span>
                </div>
                <span className="text-xs text-slate-400 font-bold">جاهز للطباعة 🖨️</span>
              </div>
              <h3 className="text-lg font-black text-white">{sheet.title}</h3>
              <p className="text-xs text-slate-300 mt-1 font-bold">{sheet.subtitle}</p>
            </div>

            <div className="flex items-center gap-2 mt-6 pt-4 border-t border-slate-700">
              <button
                onClick={() => setPreviewSheet(sheet)}
                className="flex-1 py-2.5 rounded-xl bg-slate-700/80 hover:bg-slate-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>معاينة الشيت</span>
              </button>
              <button
                onClick={() => handlePrint(sheet)}
                className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black flex items-center justify-center gap-1.5 shadow transition"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>طباعة الشيت 🖨️</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Sheet Preview Modal / Dedicated Print Area */}
      {previewSheet && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white text-slate-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl relative border-4 border-emerald-500 print-card font-arabic">
            
            {/* Modal Actions (Hidden on Print) */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200 no-print">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full">
                  معاينة الطباعة بمقاس {previewSheet.paperSize} • كلية الهندسة بشبرا
                </span>
                <span className="text-xs text-slate-500 font-bold">جاهز للإرسال للطابعة المنزلية أو المكتبية</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 rounded-xl bg-emerald-700 text-white font-black text-xs flex items-center gap-1.5 shadow"
                >
                  <Printer className="w-4 h-4" />
                  <span>طباعة الآن</span>
                </button>
                <button
                  onClick={() => setPreviewSheet(null)}
                  className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Official Print Header */}
            <div className="border-b-2 border-slate-800 pb-4 mb-6 flex items-center justify-between">
              <div>
                <h4 className="text-xs font-black text-slate-700">جامعة بنها • كلية الهندسة بشبرا (FES)</h4>
                <h2 className="text-xl sm:text-2xl font-black text-slate-950 mt-1">{previewSheet.title}</h2>
                <p className="text-xs font-bold text-slate-600 mt-0.5">{previewSheet.subtitle}</p>
              </div>
              <div className="text-left text-xs font-mono font-bold text-slate-600">
                <div>CHM 001 - Term 1</div>
                <div>Shoubra A4 Edition</div>
              </div>
            </div>

            {/* Print Content Sections */}
            <div className="space-y-6 text-xs text-slate-800 font-normal">
              {previewSheet.sections.map((sec, i) => (
                <div key={i} className="space-y-3">
                  <h3 className="font-black text-sm text-slate-900 border-r-4 border-emerald-600 pr-2">
                    {sec.title}
                  </h3>

                  {/* 1. TABLE TYPE */}
                  {sec.type === 'table' && (
                    <div className="overflow-x-auto border border-slate-300 rounded-xl shadow-sm">
                      <table className="w-full text-right text-xs">
                        <thead className="bg-slate-100 text-slate-900 font-black">
                          <tr>
                            {sec.headers.map((h, hi) => (
                              <th key={hi} className="p-2.5 border-b border-slate-300">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 font-medium">
                          {sec.rows.map((row, ri) => (
                            <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                              {row.map((cell, ci) => {
                                // If cell contains English formulas or math, format as LTR monospace
                                const isFormulaOrMath = ci > 0 && /[A-Za-z0-9=²⁺·]/.test(cell);
                                return (
                                  <td 
                                    key={ci} 
                                    className={`p-2.5 ${isFormulaOrMath ? 'font-mono font-bold text-slate-900 text-left' : 'font-arabic font-bold text-slate-800'}`}
                                    dir={isFormulaOrMath ? 'ltr' : 'rtl'}
                                  >
                                    {cell}
                                  </td>
                                );
                              })}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* 2. REACTIONS TYPE */}
                  {sec.type === 'reactions' && (
                    <div className="space-y-2">
                      {sec.items.map((item, ii) => (
                        <div 
                          key={ii} 
                          className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200"
                        >
                          <div 
                            className="font-mono text-xs font-bold text-blue-950 bg-blue-50/80 px-3 py-1.5 rounded-lg border border-blue-200 text-left shrink-0" 
                            dir="ltr"
                          >
                            {item.equation}
                          </div>
                          <div className="font-arabic text-xs font-bold text-slate-700 text-right leading-relaxed" dir="rtl">
                            {item.note}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* 3. BULLETS TYPE */}
                  {sec.type === 'bullets' && (
                    <ul className="space-y-2 list-disc list-inside font-bold text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200" dir="rtl">
                      {sec.items.map((item, ii) => (
                        <li key={ii} className="leading-relaxed font-arabic text-xs">{item}</li>
                      ))}
                    </ul>
                  )}

                  {/* 4. FORMULAS TYPE - COMPLETELY SOLVED BiDi */}
                  {sec.type === 'formulas' && (
                    <div className="space-y-3">
                      {sec.items.map((fItem, fi) => (
                        <div key={fi} className="p-4 bg-slate-50 rounded-2xl border border-slate-300 space-y-2">
                          {/* Arabic Title */}
                          <div className="font-arabic font-black text-xs text-slate-900 text-right" dir="rtl">
                            {fItem.title}
                          </div>

                          {/* Pure LTR Monospace Formula Block */}
                          <div 
                            className="p-3 bg-white rounded-xl font-mono text-xs font-bold text-blue-950 border border-slate-300 text-left overflow-x-auto shadow-sm" 
                            dir="ltr"
                          >
                            {fItem.formula}
                          </div>

                          {/* Arabic Note (Strictly Isolated from English formulas to prevent detached letters or BiDi flipped brackets) */}
                          {fItem.noteText && (
                            <div 
                              className="font-arabic text-[11px] font-bold text-amber-950 bg-amber-50/90 p-2.5 rounded-lg border border-amber-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2" 
                              dir="rtl"
                            >
                              <div className="flex items-center gap-2">
                                <span className="text-amber-800 font-black">💡 ملاحظة:</span>
                                <span>{fItem.noteText}</span>
                              </div>
                              {fItem.noteFormula && (
                                <span 
                                  dir="ltr" 
                                  className="font-mono font-black text-rose-700 bg-white px-2.5 py-0.5 rounded-md border border-amber-300 shrink-0 text-xs shadow-sm"
                                >
                                  {fItem.noteFormula}
                                </span>
                              )}
                            </div>
                          )}

                          {fItem.note && !fItem.noteText && (
                            <div 
                              className="font-arabic text-[11px] font-bold text-amber-950 bg-amber-50/90 p-2.5 rounded-lg border border-amber-200 text-right leading-relaxed" 
                              dir="rtl"
                            >
                              {fItem.note}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* 5. EXAM PROBLEM TYPE */}
                  {sec.type === 'examProblem' && (
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-300 space-y-3">
                      <div className="font-arabic font-bold text-slate-900 bg-amber-100/80 p-3 rounded-xl border border-amber-300 leading-relaxed text-right" dir="rtl">
                        {sec.question}
                      </div>

                      <div className="space-y-3 font-arabic text-slate-800 text-right" dir="rtl">
                        <div className="text-emerald-800 font-black text-xs">خطوات وتفاصيل الحل النموذجي:</div>
                        {sec.solutionSteps.map((step, si) => (
                          <div key={si} className="bg-white p-3 rounded-xl border border-slate-200 space-y-1.5">
                            <div className="text-xs font-bold text-slate-700 leading-relaxed">
                              {step.desc}
                            </div>
                            <div className="space-y-1">
                              {step.calcs.map((calc, ci) => (
                                <div 
                                  key={ci} 
                                  className="font-mono text-[11px] font-bold text-blue-950 bg-slate-50 p-2 rounded border border-slate-200 text-left overflow-x-auto" 
                                  dir="ltr"
                                >
                                  {calc}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              ))}
            </div>

            {/* Official Print Footer */}
            <div className="mt-8 pt-4 border-t-2 border-slate-300 flex items-center justify-between text-[11px] text-slate-500 font-bold">
              <span>كلية الهندسة بشبرا (جامعة بنها) • قسم الكيمياء الهندسية - الفرقة الإعدادية</span>
              <span>الصفحة 1 من {previewSheet.pagesCount}</span>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
