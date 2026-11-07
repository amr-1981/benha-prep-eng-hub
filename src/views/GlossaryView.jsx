import React, { useState, useMemo } from 'react';
import { 
  BookMarked, Search, Filter, Sparkles, CheckCircle2, RotateCcw, 
  HelpCircle, Eye, EyeOff, Copy, Check, Printer, BrainCircuit,
  Droplets, Flame, ShieldAlert, Building2, Layers, BookOpen, Calculator, Zap
} from 'lucide-react';
import { GLOSSARY_ITEMS, GLOSSARY_MODULES, GLOSSARY_TYPES } from '../data/glossaryData';

export default function GlossaryView({ activeDivision = 'all', setActiveDivision }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModule, setSelectedModule] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [viewMode, setViewMode] = useState('catalog'); // 'catalog' | 'flashcard'
  
  // Flashcard memorization state
  const [flashcardIdx, setFlashcardIdx] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [masteredIds, setMasteredIds] = useState(new Set());
  const [copiedId, setCopiedId] = useState(null);

  // Filter items
  const filteredItems = useMemo(() => {
    return GLOSSARY_ITEMS.filter((item) => {
      // Division filter
      const isElectro = item.module === 'corrosion' || item.id.startsWith('c-');
      const matchDivision = !activeDivision || activeDivision === 'all' ||
        (activeDivision === 'electro' ? isElectro : !isElectro);

      const matchModule = selectedModule === 'all' || item.module === selectedModule;
      const matchType = selectedType === 'all' || item.type === selectedType;
      
      const query = searchQuery.trim().toLowerCase();
      const matchSearch = query === '' || 
        item.termAr.toLowerCase().includes(query) ||
        item.termEn.toLowerCase().includes(query) ||
        item.definitionAr.toLowerCase().includes(query) ||
        (item.keywords && item.keywords.some(k => k.toLowerCase().includes(query)));

      return matchDivision && matchModule && matchType && matchSearch;
    });
  }, [searchQuery, selectedModule, selectedType, activeDivision]);

  const currentFlashcard = filteredItems[flashcardIdx] || filteredItems[0];

  // Handle flashcard actions
  const handleNextCard = () => {
    setIsRevealed(false);
    if (flashcardIdx + 1 < filteredItems.length) {
      setFlashcardIdx(prev => prev + 1);
    } else {
      setFlashcardIdx(0);
    }
  };

  const handlePrevCard = () => {
    setIsRevealed(false);
    if (flashcardIdx - 1 >= 0) {
      setFlashcardIdx(prev => prev - 1);
    } else {
      setFlashcardIdx(filteredItems.length - 1);
    }
  };

  const toggleMastered = (id) => {
    setMasteredIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleCopy = (item) => {
    const textToCopy = `${item.termAr} (${item.termEn}):\n${item.definitionAr}${item.formula ? `\nالقانون: ${item.formula}` : ''}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  // Stats calculation
  const totalItems = GLOSSARY_ITEMS.length;
  const defCount = GLOSSARY_ITEMS.filter(i => i.type === 'definition').length;
  const lawCount = GLOSSARY_ITEMS.filter(i => i.type === 'law').length;
  const whyCount = GLOSSARY_ITEMS.filter(i => i.type === 'reasoning').length;
  const masteryPercentage = totalItems > 0 ? Math.round((masteredIds.size / totalItems) * 100) : 0;

  return (
    <div className="space-y-8 pb-16 font-arabic">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 border-2 border-indigo-500/40 shadow-xl no-print">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-right">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold border border-indigo-400/30">
              <BrainCircuit className="w-3.5 h-3.5 text-cyan-400" />
              <span>معجم الحفظ والمراجعة السريعة • Glossary & Formulas Vault</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-white">
              مَعْجَمُ المُصْطَلَحَاتِ والقَوَانِينِ وَبَنْكُ الحِفْظِ الهَنْدَسِي
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl font-normal leading-relaxed">
              بنك شامل ومبوب لجميع التعريفات العلمية، القوانين الرياضية، والتعليلات الامتحانية المقررة في هندسة شبرا لسهولة الحفظ والمراجعة ليلة الامتحان.
            </p>
          </div>

          {/* Quick Mastery & Stats Card */}
          <div className="bg-slate-800/90 p-4 rounded-2xl border border-indigo-500/30 text-center sm:text-right shrink-0 space-y-2 min-w-[220px]">
            <div className="flex items-center justify-between gap-2 border-b border-slate-700 pb-2">
              <span className="text-xs font-bold text-slate-400">إتقان الحفظ:</span>
              <span className="text-xs font-mono font-black text-emerald-400">{masteredIds.size} / {totalItems} ({masteryPercentage}%)</span>
            </div>
            {/* Progress bar */}
            <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-gradient-to-r from-blue-500 to-emerald-400 h-full transition-all duration-300"
                style={{ width: `${masteryPercentage}%` }}
              ></div>
            </div>
            <div className="grid grid-cols-3 gap-1 pt-1 text-[10px] text-center font-bold">
              <div className="p-1 rounded bg-slate-900/60 text-blue-300">
                <div>{defCount}</div>
                <div className="text-[9px] text-slate-400 font-normal">تعريف</div>
              </div>
              <div className="p-1 rounded bg-slate-900/60 text-amber-300">
                <div>{lawCount}</div>
                <div className="text-[9px] text-slate-400 font-normal">قانون</div>
              </div>
              <div className="p-1 rounded bg-slate-900/60 text-rose-300">
                <div>{whyCount}</div>
                <div className="text-[9px] text-slate-400 font-normal">علل</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Control Bar: Mode Toggle + Search + Print */}
      <div className="bg-slate-800/90 p-4 sm:p-5 rounded-2xl border border-slate-700 shadow-md space-y-4 no-print">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          
          {/* Mode Switcher */}
          <div className="flex items-center gap-1.5 bg-slate-900/90 p-1 rounded-xl border border-slate-700/80 w-full sm:w-auto">
            <button
              onClick={() => setViewMode('catalog')}
              className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-xs font-black flex items-center justify-center gap-2 transition-all ${
                viewMode === 'catalog'
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>المعجم الشامل والبحث</span>
            </button>
            <button
              onClick={() => {
                setViewMode('flashcard');
                setFlashcardIdx(0);
                setIsRevealed(false);
              }}
              className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-xs font-black flex items-center justify-center gap-2 transition-all ${
                viewMode === 'flashcard'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <BrainCircuit className="w-4 h-4 text-amber-300" />
              <span>وضع بطاقات الحفظ الذكية (Flashcards)</span>
            </button>
          </div>

          {/* Search Input & Print */}
          <div className="flex items-center gap-2 w-full lg:w-auto">
            <div className="relative flex-1 sm:w-80">
              <input
                type="text"
                placeholder="ابحث بالاسم العربي أو الإنجليزي (مثل: Bogue, عسر, Dulong)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-9 pr-4 py-2 text-xs font-bold text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            </div>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-700/60 hover:bg-slate-700 text-xs font-bold text-slate-200 hover:text-white transition border border-slate-600 shrink-0"
              title="طباعة المعجم للمذاكرة الورقية"
            >
              <Printer className="w-4 h-4 text-cyan-400" />
              <span className="hidden sm:inline">طباعة ملخص الحفظ</span>
            </button>
          </div>

        </div>

        {/* Filter Row 0: Academic Division Selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs">
          <span className="text-slate-400 font-bold shrink-0 flex items-center gap-1 text-[11px]">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>القسم الأكاديمي:</span>
          </span>
          <button
            onClick={() => {
              setActiveDivision && setActiveDivision('all');
              setFlashcardIdx(0);
              setIsRevealed(false);
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              activeDivision === 'all'
                ? 'bg-blue-600 text-white shadow'
                : 'bg-slate-900/50 text-slate-400 hover:text-slate-200 border border-slate-700/60'
            }`}
          >
            الكل (القسمان معاً)
          </button>
          <button
            onClick={() => {
              setActiveDivision && setActiveDivision('thermal');
              setSelectedModule('all');
              setFlashcardIdx(0);
              setIsRevealed(false);
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1 ${
              activeDivision === 'thermal'
                ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow'
                : 'bg-slate-900/50 text-slate-400 hover:text-slate-200 border border-slate-700/60'
            }`}
          >
            <Flame className="w-3.5 h-3.5 text-amber-300" />
            <span>الكيمياء الحرارية والصناعية (د. هناء)</span>
          </button>
          <button
            onClick={() => {
              setActiveDivision && setActiveDivision('electro');
              setSelectedModule('all');
              setFlashcardIdx(0);
              setIsRevealed(false);
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1 ${
              activeDivision === 'electro'
                ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow'
                : 'bg-slate-900/50 text-slate-400 hover:text-slate-200 border border-slate-700/60'
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-cyan-300" />
            <span>الكيمياء الكهربية والتآكل (د. سمر)</span>
          </button>
        </div>

        {/* Filter Row 1: Module Selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs">
          <span className="text-slate-400 font-bold shrink-0 flex items-center gap-1 text-[11px]">
            <Filter className="w-3.5 h-3.5 text-cyan-400" />
            <span>الوحدة:</span>
          </span>
          {GLOSSARY_MODULES.map((mod) => (
            <button
              key={mod.id}
              onClick={() => {
                setSelectedModule(mod.id);
                setFlashcardIdx(0);
                setIsRevealed(false);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${
                selectedModule === mod.id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/50'
                  : 'bg-slate-900/50 text-slate-400 hover:text-slate-200 border border-slate-700/60'
              }`}
            >
              <span>{mod.label}</span>
            </button>
          ))}
        </div>

        {/* Filter Row 2: Type Selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs">
          <span className="text-slate-400 font-bold shrink-0 text-[11px]">التصنيف:</span>
          {GLOSSARY_TYPES.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setSelectedType(t.id);
                setFlashcardIdx(0);
                setIsRevealed(false);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedType === t.id
                  ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-400/50'
                  : 'bg-slate-900/50 text-slate-400 hover:text-slate-200 border border-slate-700/60'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

      </div>

      {/* ================= MODE 1: FLASHCARD MEMORIZATION ================= */}
      {viewMode === 'flashcard' && (
        <div className="max-w-2xl mx-auto space-y-6">
          
          {filteredItems.length === 0 ? (
            <div className="p-12 text-center bg-slate-800/80 rounded-3xl border border-slate-700 text-slate-400 space-y-3">
              <HelpCircle className="w-12 h-12 text-cyan-400 mx-auto opacity-40" />
              <p className="text-sm font-bold">لا توجد بطاقات تطابق معايير الفلترة الحالية.</p>
              <button
                onClick={() => {
                  setSelectedModule('all');
                  setSelectedType('all');
                  setSearchQuery('');
                }}
                className="text-xs text-cyan-300 underline font-bold"
              >
                إعادة ضبط خيارات البحث
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              
              {/* Flashcard Header Position */}
              <div className="flex items-center justify-between text-xs font-bold text-slate-400 px-2">
                <span>بطاقة رقم {flashcardIdx + 1} من {filteredItems.length}</span>
                <span className="px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-cyan-400">
                  {currentFlashcard.type === 'definition' ? 'مصطلح علمي' : currentFlashcard.type === 'law' ? 'قانون رياضي' : 'سؤال علل'}
                </span>
              </div>

              {/* The Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 border-2 border-indigo-500/40 shadow-2xl space-y-6 text-right min-h-[340px] flex flex-col justify-between">
                
                {/* Front of Card (Term & English Code) */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <span 
                      dir="ltr" 
                      className="font-mono font-bold text-xs sm:text-sm text-cyan-300 bg-slate-950 px-3 py-1 rounded-xl border border-slate-800 shrink-0"
                    >
                      {currentFlashcard.termEn}
                    </span>

                    <button
                      onClick={() => toggleMastered(currentFlashcard.id)}
                      className={`p-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition ${
                        masteredIds.has(currentFlashcard.id)
                          ? 'bg-emerald-950 text-emerald-300 border border-emerald-500'
                          : 'bg-slate-800 text-slate-400 hover:text-white border border-slate-700'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="text-[11px]">{masteredIds.has(currentFlashcard.id) ? 'تم الحفظ ✅' : 'حفظ كـ متقَن'}</span>
                    </button>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-black text-white mt-2">
                    {currentFlashcard.termAr}
                  </h2>

                  {/* Keywords pills */}
                  {currentFlashcard.keywords && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {currentFlashcard.keywords.map((kw, i) => (
                        <span key={i} className="text-[10px] font-bold text-slate-400 bg-slate-800 px-2 py-0.5 rounded-md border border-slate-700">
                          #{kw}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Back of Card (Definition / Answer - Revealable) */}
                <div className="pt-4 border-t border-slate-800/80">
                  {isRevealed ? (
                    <div className="space-y-4 animate-in fade-in duration-300">
                      <div>
                        <span className="text-[11px] font-bold text-indigo-300 block mb-1">التعريف والإجابة النموذجية المعتمدة:</span>
                        <p className="text-sm font-medium text-slate-200 leading-relaxed bg-slate-950/70 p-4 rounded-2xl border border-slate-800">
                          {currentFlashcard.definitionAr}
                        </p>
                      </div>

                      {/* Formula if exists */}
                      {currentFlashcard.formula && (
                        <div>
                          <span className="text-[11px] font-bold text-amber-300 block mb-1">صيغة القانون الرياضية:</span>
                          <div 
                            className="p-3 bg-slate-950 rounded-xl font-mono text-xs sm:text-sm font-bold text-cyan-300 border border-slate-800 text-left overflow-x-auto" 
                            dir="ltr"
                          >
                            {currentFlashcard.formula}
                          </div>
                        </div>
                      )}

                      {/* Exam Tip */}
                      {currentFlashcard.examTip && (
                        <div className="text-[11px] text-amber-300/90 bg-amber-950/40 p-2.5 rounded-xl border border-amber-800/40 flex items-center gap-2">
                          <span>💡</span>
                          <span><strong>تنبيه الامتحان:</strong> {currentFlashcard.examTip}</span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => setIsRevealed(true)}
                      className="w-full py-6 rounded-2xl bg-indigo-950/40 hover:bg-indigo-950/60 border-2 border-dashed border-indigo-500/40 text-indigo-300 hover:text-white flex flex-col items-center justify-center gap-2 transition group"
                    >
                      <Eye className="w-6 h-6 group-hover:scale-110 transition-transform text-cyan-400" />
                      <span className="text-xs font-black">اضغط هنا لإظهار التعريف والإجابة النموذجية</span>
                      <span className="text-[10px] text-slate-400">اختبر استحضارك للتعريف قبل الكشف!</span>
                    </button>
                  )}
                </div>

                {/* Navigation Buttons inside Card */}
                <div className="pt-4 flex items-center justify-between gap-3">
                  <button
                    onClick={handlePrevCard}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-300 transition"
                  >
                    ← البطاقة السابقة
                  </button>

                  {isRevealed && (
                    <button
                      onClick={() => setIsRevealed(false)}
                      className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1 font-bold"
                    >
                      <EyeOff className="w-3.5 h-3.5" />
                      <span>إخفاء</span>
                    </button>
                  )}

                  <button
                    onClick={handleNextCard}
                    className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-black text-white shadow-md transition"
                  >
                    البطاقة التالية →
                  </button>
                </div>

              </div>

            </div>
          )}

        </div>
      )}

      {/* ================= MODE 2: CATALOG VIEW (SEARCH & PRINT) ================= */}
      {viewMode === 'catalog' && (
        <div className="space-y-4">
          
          <div className="flex items-center justify-between text-xs font-bold text-slate-400 px-2 no-print">
            <span>عدد النتائج المعروضة: {filteredItems.length} مصطلح وقانون</span>
            <span>كلية الهندسة بشبرا - قسم الكيمياء</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredItems.map((item) => {
              const isMastered = masteredIds.has(item.id);
              const isLaw = item.type === 'law';
              const isWhy = item.type === 'reasoning';

              return (
                <div
                  key={item.id}
                  className={`p-5 rounded-3xl bg-slate-800/90 border transition-all flex flex-col justify-between space-y-4 shadow-md ${
                    isMastered
                      ? 'border-emerald-500/50 bg-slate-800/95'
                      : 'border-slate-700/80 hover:border-indigo-400/60'
                  }`}
                >
                  <div className="space-y-3">
                    
                    {/* Header: English Term + Actions */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span 
                          dir="ltr" 
                          className="font-mono font-bold text-xs text-cyan-300 bg-slate-900 px-2.5 py-0.5 rounded-lg border border-slate-700"
                        >
                          {item.termEn}
                        </span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                          item.module === 'corrosion' || item.id.startsWith('c-')
                            ? 'bg-cyan-950 text-cyan-300 border border-cyan-800/60'
                            : 'bg-amber-950 text-amber-300 border border-amber-800/60'
                        }`}>
                          {item.module === 'corrosion' || item.id.startsWith('c-') ? '⚡ كهربية (د. سمر)' : '🔥 حرارية (د. هناء)'}
                        </span>
                      </div>

                      <div className="flex items-center gap-1 no-print">
                        <button
                          onClick={() => handleCopy(item)}
                          className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-700 text-slate-400 hover:text-white transition"
                          title="نسخ التعريف"
                        >
                          {copiedId === item.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>

                        <button
                          onClick={() => toggleMastered(item.id)}
                          className={`p-1.5 rounded-lg transition ${
                            isMastered ? 'bg-emerald-950 text-emerald-400' : 'bg-slate-900 text-slate-400 hover:text-white'
                          }`}
                          title={isMastered ? 'محفوظ بنجاح' : 'تحديد كـ تم الحفظ'}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Arabic Title */}
                    <h3 className="text-base font-black text-white leading-snug">
                      {item.termAr}
                    </h3>

                    {/* Definition */}
                    <p className="text-xs font-medium text-slate-300 leading-relaxed text-right whitespace-pre-line">
                      {item.definitionAr}
                    </p>

                    {/* Formula Block (if law) */}
                    {item.formula && (
                      <div className="space-y-1.5 pt-1">
                        <div 
                          className="p-2.5 bg-slate-950 rounded-xl font-mono text-xs font-bold text-cyan-300 border border-slate-800 text-left overflow-x-auto shadow-inner" 
                          dir="ltr"
                        >
                          {item.formula}
                        </div>
                        {item.variables && (
                          <div className="space-y-1 text-[10px] text-slate-400 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
                            {item.variables.map((v, vi) => (
                              <div key={vi} className="flex items-baseline gap-2">
                                <span dir="ltr" className="font-mono text-amber-300 font-bold shrink-0">{v.sym}:</span>
                                <span>{v.desc}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Formula Display (if definition has a reaction) */}
                    {item.formulaDisplay && (
                      <div 
                        className="p-2 bg-slate-950 rounded-lg font-mono text-[11px] font-bold text-amber-300 border border-slate-800 text-left overflow-x-auto" 
                        dir="ltr"
                      >
                        {item.formulaDisplay}
                      </div>
                    )}

                  </div>

                  {/* Footer / Tip */}
                  <div className="pt-2 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="font-bold text-cyan-400/90 text-[10px]">
                      {item.examTip ? `💡 ${item.examTip}` : 'مقرر إعدادي هندسة شبرا'}
                    </span>
                    <span className="text-[10px] font-bold bg-slate-900 px-2 py-0.5 rounded text-slate-400 shrink-0">
                      {item.type === 'definition' ? 'تعريف' : item.type === 'law' ? 'قانون' : 'علل'}
                    </span>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      )}

    </div>
  );
}
