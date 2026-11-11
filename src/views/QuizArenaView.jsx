import React, { useState } from 'react';
import { 
  Award, CheckCircle2, XCircle, RotateCcw, ArrowRight, HelpCircle, 
  Sparkles, Filter, Flame, Zap, Lightbulb, Calculator, Grid, Layers 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { QUIZ_QUESTIONS } from '../data/quizBankData';
import { MATH_QUIZ_QUESTIONS } from '../data/mathQuizBankData';

export default function QuizArenaView({ 
  activeDivision = 'all', 
  setActiveDivision,
  studyMode = 'bilingual',
  activeSubject = 'math'
}) {
  const isMath = activeSubject === 'math';
  const questionsList = isMath ? MATH_QUIZ_QUESTIONS : QUIZ_QUESTIONS;

  const [activeFilter, setActiveFilter] = useState('all');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [showArabicHelper, setShowArabicHelper] = useState(false);

  const filteredQuestions = questionsList.filter((q) => {
    let matchDivision = true;
    if (activeDivision && activeDivision !== 'all') {
      if (isMath) {
        matchDivision = q.division === activeDivision || q.division === 'all';
      } else {
        const isElectro = q.module === 'corrosion-control' || q.module === 'electrochemistry-cells' || q.topic?.includes('تآكل') || q.topic?.includes('نيرنست');
        matchDivision = (activeDivision === 'electro' ? isElectro : !isElectro);
      }
    }
    const matchFilter = activeFilter === 'all' || q.module === activeFilter;
    return matchDivision && matchFilter;
  });

  const currentQ = filteredQuestions[currentIdx] || filteredQuestions[0];

  const handleSelectOption = (idx) => {
    if (selectedOption !== null) return;
    setSelectedOption(idx);

    if (idx === currentQ.correctIndex) {
      setScore(prev => prev + 1);
      confetti({ particleCount: 50, spread: 60 });
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < filteredQuestions.length) {
      setCurrentIdx(currentIdx + 1);
      setSelectedOption(null);
      setShowArabicHelper(false);
    } else {
      setIsFinished(true);
      confetti({ particleCount: 100, spread: 80 });
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setScore(0);
    setIsFinished(false);
    setShowArabicHelper(false);
  };

  const activeFilters = useMemo(() => {
    if (isMath) {
      if (activeDivision === 'calculus') {
        return [
          { id: 'all', label: 'جميع أسئلة التفاضل' },
          { id: 'math-mod-limits', label: 'النهايات ولوبيتال' },
          { id: 'math-mod-leibniz', label: 'نظرية لايبنتز' },
          { id: 'math-mod-series', label: 'متسلسلات تايلور' },
          { id: 'math-mod-curve', label: 'رسم المنحنيات والانحناء' },
          { id: 'math-mod-partial', label: 'الاشتقاق الجزئي' }
        ];
      } else {
        return [
          { id: 'all', label: 'جميع أسئلة الجبر والفراغية' },
          { id: 'math-mod-matrices', label: 'المصفوفات والرتبة' },
          { id: 'math-mod-complex', label: 'الأعداد المركبة' },
          { id: 'math-mod-geometry3d', label: 'الهندسة الفراغية' }
        ];
      }
    } else {
      if (activeDivision === 'thermal') {
        return [
          { id: 'all', label: 'جميع أسئلة الحرارية (د. هناء)' },
          { id: 'water-treatment', label: 'المياه والعسر' },
          { id: 'fuels-combustion', label: 'الوقود والاحتراق' },
          { id: 'building-materials', label: 'الأسمنت وبوج' },
          { id: 'polymers-lubricants', label: 'البوليمرات والزيوت' }
        ];
      } else {
        return [
          { id: 'all', label: 'جميع أسئلة الكهربية والتآكل (د. سمر)' },
          { id: 'corrosion-control', label: 'التآكل والصدأ والحماية' }
        ];
      }
    }
  }, [isMath, activeDivision]);

  return (
    <div className="space-y-8 pb-16 font-arabic max-w-4xl mx-auto">
      
      {/* Top Banner */}
      <div className={`rounded-3xl p-6 sm:p-8 border-2 shadow-xl ${
        isMath
          ? 'bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border-indigo-500/40'
          : 'bg-gradient-to-r from-slate-900 via-purple-950 to-slate-900 border-purple-500/40'
      }`}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-right">
            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
              isMath ? 'bg-indigo-500/20 text-indigo-300 border-indigo-400/30' : 'bg-purple-500/20 text-purple-300 border-purple-400/30'
            }`}>
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>بنك الأسئلة والامتحانات التفاعلي • {isMath ? 'Math Exam Arena' : 'Chemistry Exam Arena'}</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-white">
              {isMath ? 'بَنْكُ أَسْئِلَةِ وَامْتِحَانَاتِ الرِّيَاضِيَّاتِ 1' : 'بَنْكُ أَسْئِلَةِ وَامْتِحَانَاتِ الكِيمْيَاءِ الهَنْدَسِيَّةِ'}
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl font-normal leading-relaxed">
              {isMath
                ? 'اختبر مستواك في أسئلة امتحانات شبرا السابقة لمقرري التفاضل والجبر بنظام الاختيار من متعدد MCQ مع التصحيح الفوري والشرح بالعربي.'
                : 'نظام تدريب ذكي وتصحيح فوري لأسئلة الميدتيرم والفاينال المقررة في هندسة شبرا مقسمة بين: الكيمياء الحرارية والكيمياء الكهربية.'}
            </p>
          </div>

          <div className="bg-slate-800/90 p-4 rounded-2xl border border-slate-700/80 text-center shrink-0 min-w-[150px] shadow-md">
            <span className="text-[11px] font-bold text-slate-400 block mb-1">النتيجة الحالية:</span>
            <div className="text-3xl font-black text-amber-400 font-mono">
              {score} <span className="text-sm text-slate-400 font-sans">/ {filteredQuestions.length}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Active Division Indicator Badge */}
      <div className="flex items-center gap-2 pb-1">
        <span className="text-xs font-bold text-slate-400">القسم الأكاديمي الحالي:</span>
        <span className="px-3 py-1 rounded-xl bg-slate-900 border border-slate-700 text-xs font-black text-amber-300">
          {isMath
            ? activeDivision === 'calculus'
              ? 'قسم حساب التفاضل والتطبيقات (Calculus)'
              : 'قسم الجبر والهندسة الفراغية (Algebra & 3D)'
            : activeDivision === 'thermal'
              ? 'قسم الكيمياء الحرارية والصناعية (د. هناء)'
              : 'قسم الكيمياء الكهربية والتآكل (د. سمر)'}
        </span>
      </div>

      {/* Module Filter Tabs (Filtered strictly to active division) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {activeFilters.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveFilter(tab.id);
              handleRestart();
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              activeFilter === tab.id
                ? (isMath ? 'bg-indigo-600 text-white shadow-md' : 'bg-purple-600 text-white shadow-md')
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Finished Screen */}
      {isFinished ? (
        <div className="bg-slate-800/90 rounded-3xl p-8 border-2 border-amber-400 shadow-2xl text-center space-y-6">
          <div className="w-20 h-20 bg-amber-400/20 text-amber-400 rounded-3xl flex items-center justify-center text-4xl mx-auto border-2 border-amber-400 animate-bounce">
            🏆
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">أحسنت يا بشمهندس! انتهى الاختبار!</h2>
            <p className="text-slate-300 text-sm mt-2">
              حصلت على <span className="text-amber-400 font-black text-xl font-mono">{score}</span> من إجمالي <span className="font-mono text-white text-lg">{filteredQuestions.length}</span> نقطة.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900 max-w-sm mx-auto border border-slate-700 text-xs font-bold text-slate-300">
            {score / filteredQuestions.length >= 0.85 ? (
              <span className="text-emerald-400">ممتاز جداً! مستواك يؤهلك للحصول على تقدير امتياز (A+) في امتحانات شبرا!</span>
            ) : score / filteredQuestions.length >= 0.65 ? (
              <span className="text-cyan-400">مستوى جيد جداً، راجع شيت القوانين وركز على النقاط التي أخطأت بها!</span>
            ) : (
              <span className="text-amber-400">تحتاج إلى مراجعة محاضرات المنهج والتدرب على الشيتات والحاسبات مرة أخرى!</span>
            )}
          </div>

          <button
            onClick={handleRestart}
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-sm flex items-center gap-2 mx-auto shadow-lg transition"
          >
            <RotateCcw className="w-4 h-4" />
            <span>إعادة الاختبار من البداية</span>
          </button>
        </div>
      ) : filteredQuestions.length === 0 ? (
        <div className="p-12 text-center bg-slate-800/80 rounded-3xl border border-slate-700 text-slate-400 space-y-3">
          <HelpCircle className="w-12 h-12 text-cyan-400 mx-auto opacity-40" />
          <p className="text-sm font-bold">لا توجد أسئلة تطابق معايير الفلترة الحالية.</p>
          <button
            onClick={() => {
              setActiveFilter('all');
              handleRestart();
            }}
            className="text-xs text-cyan-300 underline font-bold"
          >
            عرض جميع الأسئلة
          </button>
        </div>
      ) : (
        /* Active Question Card */
        <div className="bg-slate-800/90 rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-xl space-y-6">
          
          <div className="flex items-center justify-between border-b border-slate-700 pb-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-black text-indigo-300 bg-indigo-950 px-3 py-1 rounded-full border border-indigo-800 font-mono">
                Question {currentIdx + 1} of {filteredQuestions.length}
              </span>
              <span className="text-xs text-slate-400 font-bold font-mono">{currentQ.id.toUpperCase()}</span>
            </div>

            {/* Small Button for On-Demand Arabic Translation */}
            <button
              onClick={() => setShowArabicHelper(prev => !prev)}
              className={`px-2.5 py-1 rounded-xl text-[11px] font-bold transition flex items-center gap-1.5 border ${
                showArabicHelper 
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40' 
                  : 'bg-slate-900 text-amber-400/90 hover:text-amber-300 border-slate-700 hover:border-amber-500/40'
              }`}
            >
              <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
              <span>{showArabicHelper ? 'إخفاء الترجمة بالعربي' : '💡 ترجمة السؤال بالعربي'}</span>
            </button>
          </div>

          {/* Primary Question in Academic English */}
          <h3 className="text-base sm:text-lg font-black text-white leading-relaxed font-mono text-left" dir="ltr">
            {currentQ.questionEn || currentQ.question}
          </h3>

          {/* On-Demand Arabic Question Translation Drawer */}
          {showArabicHelper && (
            <div className="p-3.5 rounded-2xl bg-gradient-to-br from-amber-950/25 to-slate-900/90 border border-amber-500/30 text-right space-y-1.5 animate-in fade-in duration-200" dir="rtl">
              <div className="flex items-center justify-between border-b border-amber-500/20 pb-1">
                <span className="text-xs font-black text-amber-300">ترجمة السؤال وسياق المنهج:</span>
                <span className="text-[10px] text-amber-400/80 font-bold bg-amber-950/60 px-2 py-0.5 rounded border border-amber-700/40">
                  {currentQ.topic}
                </span>
              </div>
              <p className="text-xs font-medium text-slate-200 leading-relaxed">
                {currentQ.question}
              </p>
            </div>
          )}

          {/* Options in Academic English */}
          <div className="space-y-3">
            {currentQ.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === currentQ.correctIndex;
              const optEn = currentQ.optionsEn ? currentQ.optionsEn[idx] : opt;

              let style = 'bg-slate-900/60 hover:bg-slate-700/60 border-slate-700 text-slate-200';
              if (selectedOption !== null) {
                if (isCorrect) {
                  style = 'bg-emerald-950/80 border-emerald-500 text-emerald-200 shadow-md';
                } else if (isSelected) {
                  style = 'bg-rose-950/80 border-rose-500 text-rose-200';
                } else {
                  style = 'bg-slate-900/40 border-slate-800 text-slate-500 opacity-60';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={selectedOption !== null}
                  className={`w-full p-4 rounded-2xl border-2 text-left transition-all text-xs font-bold flex items-center justify-between ${style}`}
                >
                  <div className="flex items-center gap-3 font-mono" dir="ltr">
                    <span className="w-6 h-6 rounded-lg bg-slate-800 text-slate-300 flex items-center justify-center text-xs font-bold shrink-0 border border-slate-700">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold">{optEn}</span>
                  </div>

                  {selectedOption !== null && (
                    <div className="shrink-0">
                      {isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      ) : isSelected ? (
                        <XCircle className="w-5 h-5 text-rose-400" />
                      ) : null}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Section (Revealed after selection) */}
          {selectedOption !== null && (
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-700 space-y-3 animate-in fade-in duration-300 text-left font-mono" dir="ltr">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-xs font-bold text-cyan-400 font-sans uppercase tracking-wider">
                  Mathematical Rationale & Solution Steps:
                </span>
                <span className={`text-xs font-black px-2.5 py-0.5 rounded-full font-sans ${
                  selectedOption === currentQ.correctIndex ? 'bg-emerald-950 text-emerald-300' : 'bg-rose-950 text-rose-300'
                }`}>
                  {selectedOption === currentQ.correctIndex ? 'Correct Answer! ✅' : 'Incorrect Choice ❌'}
                </span>
              </div>

              {/* Academic English Explanation */}
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                {currentQ.explanationEn || currentQ.explanation}
              </p>

              {/* On-Demand Arabic Pedagogical Explanation */}
              <div className="pt-2 border-t border-slate-800/80 text-right space-y-1 font-sans" dir="rtl">
                <div className="flex items-center gap-1.5 text-amber-300 text-xs font-bold">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                  <span>التفسير الهندسي بالعربي:</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                  {currentQ.explanation}
                </p>
              </div>
            </div>
          )}

          {/* Next Button */}
          {selectedOption !== null && (
            <div className="pt-2 flex justify-end">
              <button
                onClick={handleNext}
                className="px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs transition flex items-center gap-2 shadow-lg shadow-indigo-900/40"
              >
                <span>{currentIdx + 1 < filteredQuestions.length ? 'السؤال التالي' : 'عرض النتيجة النهائية'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      )}

    </div>
  );
}
