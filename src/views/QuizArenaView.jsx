import React, { useState } from 'react';
import { Award, CheckCircle2, XCircle, RotateCcw, ArrowRight, HelpCircle, Sparkles, Filter, Flame, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';
import { QUIZ_QUESTIONS } from '../data/quizBankData';

export default function QuizArenaView({ activeDivision = 'all', setActiveDivision }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const filteredQuestions = QUIZ_QUESTIONS.filter((q) => {
    const isElectro = q.module === 'corrosion-control' || q.module === 'electrochemistry-cells' || q.topic?.includes('تآكل') || q.topic?.includes('نيرنست');
    const matchDivision = !activeDivision || activeDivision === 'all' || (activeDivision === 'electro' ? isElectro : !isElectro);
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
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-16">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-purple-950 to-slate-900 rounded-3xl p-6 sm:p-8 border-2 border-purple-500/40 shadow-xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold border border-purple-400/30 mb-2">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>بنك الأسئلة والامتحانات التفاعلية • Exam MCQ Arena</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white">
              تحديات واختبارات الكيمياء الهندسية
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm mt-1">
              أسئلة امتحانات هندسة شبرا السابقة بنظام الاختيار من متعدد مع التصحيح والتفسير الفوري
            </p>
          </div>

          <div className="bg-slate-800/80 px-4 py-2.5 rounded-2xl border border-slate-700 text-center shrink-0">
            <span className="text-xs text-slate-400 font-bold">النتيجة الحالية:</span>
            <div className="text-2xl font-black text-amber-400 font-mono">
              {score} / {filteredQuestions.length}
            </div>
          </div>
        </div>
      </div>

      {/* Two-Branch Academic Division Switcher */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs">
        <span className="text-slate-400 font-bold shrink-0 flex items-center gap-1 text-[11px]">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>قسم الاختبار:</span>
        </span>
        <button
          onClick={() => {
            setActiveDivision && setActiveDivision('all');
            setActiveFilter('all');
            handleRestart();
          }}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition whitespace-nowrap ${
            activeDivision === 'all'
              ? 'bg-purple-600 text-white shadow-md'
              : 'bg-slate-850 text-slate-300 hover:bg-slate-700'
          }`}
        >
          الامتحان الشامل (القسمان)
        </button>
        <button
          onClick={() => {
            setActiveDivision && setActiveDivision('thermal');
            setActiveFilter('all');
            handleRestart();
          }}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition flex items-center gap-1.5 whitespace-nowrap ${
            activeDivision === 'thermal'
              ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md'
              : 'bg-slate-850 text-slate-300 hover:bg-slate-700'
          }`}
        >
          <Flame className="w-3.5 h-3.5 text-amber-300" />
          <span>الكيمياء الحرارية والصناعية (د. هناء)</span>
        </button>
        <button
          onClick={() => {
            setActiveDivision && setActiveDivision('electro');
            setActiveFilter('all');
            handleRestart();
          }}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition flex items-center gap-1.5 whitespace-nowrap ${
            activeDivision === 'electro'
              ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md'
              : 'bg-slate-850 text-slate-300 hover:bg-slate-700'
          }`}
        >
          <Zap className="w-3.5 h-3.5 text-cyan-300" />
          <span>الكيمياء الكهربية والتآكل (د. سمر)</span>
        </button>
      </div>

      {/* Module Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {[
          { id: 'all', label: 'جميع الأسئلة (12)' },
          { id: 'water-treatment', label: 'المياه والعسر (3)' },
          { id: 'fuels-combustion', label: 'الوقود والاحتراق (2)' },
          { id: 'corrosion-control', label: 'التآكل والصدأ (2)' },
          { id: 'building-materials', label: 'الأسمنت وبوج (2)' },
          { id: 'polymers-lubricants', label: 'البوليمرات والزيوت (3)' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveFilter(tab.id);
              handleRestart();
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              activeFilter === tab.id
                ? 'bg-purple-600 text-white shadow-md'
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
              <span className="text-emerald-400">ممتاز جداً! مستواك يؤهلك للحصول على تقدير امتياز (A+) في الكيمياء!</span>
            ) : score / filteredQuestions.length >= 0.65 ? (
              <span className="text-cyan-400">مستوى جيد جداً، راجع شيت القوانين وركز على النقاط التي أخطأت بها!</span>
            ) : (
              <span className="text-amber-400">تحتاج إلى مراجعة محاضرات المنهج والتدرب على الشيتات مرة أخرى!</span>
            )}
          </div>

          <button
            onClick={handleRestart}
            className="px-6 py-3 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-black text-xs inline-flex items-center gap-2 shadow-lg transition active:scale-95"
          >
            <RotateCcw className="w-4 h-4" />
            <span>إعادة الاختبار والبدء من جديد</span>
          </button>
        </div>
      ) : (
        /* Active Question Card */
        <div className="bg-slate-800/90 rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-xl space-y-6">
          
          <div className="flex items-center justify-between border-b border-slate-700 pb-3">
            <span className="text-xs font-black text-purple-300 bg-purple-950 px-3 py-1 rounded-full border border-purple-800">
              السؤال {currentIdx + 1} من {filteredQuestions.length}
            </span>
            <span className="text-xs text-slate-400 font-bold">{currentQ.topic}</span>
          </div>

          <h3 className="text-base sm:text-lg font-black text-white leading-relaxed">
            {currentQ.question}
          </h3>

          {/* Options */}
          <div className="space-y-3">
            {currentQ.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === currentQ.correctIndex;

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
                  className={`w-full p-4 rounded-2xl border-2 text-right transition-all text-xs font-bold flex items-center justify-between ${style}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-slate-800 text-slate-300 flex items-center justify-center text-xs font-mono font-bold shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="leading-relaxed">{opt}</span>
                  </div>

                  {selectedOption !== null && (
                    <div>
                      {isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
                      {isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-400 shrink-0" />}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Banner (Visible after answering) */}
          {selectedOption !== null && (
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-700 space-y-2 animate-in fade-in">
              <div className="flex items-center gap-2 text-xs font-black text-cyan-300">
                <HelpCircle className="w-4 h-4 text-cyan-400" />
                <span>تفسير الإجابة العلمية (Scientific Explanation):</span>
              </div>
              <p className="text-xs text-slate-300 font-bold leading-relaxed">
                {currentQ.explanation}
              </p>
              <div className="pt-2 flex justify-end">
                <button
                  onClick={handleNext}
                  className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-black text-xs flex items-center gap-2 shadow-md transition active:scale-95"
                >
                  <span>السؤال التالي</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

        </div>
      )}

    </div>
  );
}
