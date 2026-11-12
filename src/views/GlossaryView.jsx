import React, { useState, useMemo } from 'react';
import { 
  BookMarked, Search, Filter, Sparkles, CheckCircle2, RotateCcw, 
  HelpCircle, Eye, EyeOff, Copy, Check, Printer, BrainCircuit,
  Droplets, Flame, ShieldAlert, Building2, Layers, BookOpen, Calculator, Zap, Lightbulb, Grid,
  Scissors, Mail, FileText, Cpu, Repeat 
} from 'lucide-react';
import { GLOSSARY_ITEMS, GLOSSARY_MODULES, GLOSSARY_TYPES } from '../data/glossaryData';
import { MATH_GLOSSARY_ITEMS, MATH_GLOSSARY_MODULES, MATH_GLOSSARY_TYPES } from '../data/mathGlossaryData';
import { ENGLISH_GLOSSARY_ITEMS, ENGLISH_GLOSSARY_MODULES, ENGLISH_GLOSSARY_TYPES } from '../data/englishGlossaryData';
import { ENGINEERING_TERMS } from '../data/engineeringTermsData';

export default function GlossaryView({ 
  activeDivision = 'all', 
  setActiveDivision, 
  studyMode = 'bilingual',
  activeSubject = 'math'
}) {
  const isMath = activeSubject === 'math';
  const isChemistry = activeSubject === 'chemistry';
  const isEnglish = activeSubject === 'english';

  const rawItems = isEnglish ? ENGLISH_GLOSSARY_ITEMS : isMath ? MATH_GLOSSARY_ITEMS : GLOSSARY_ITEMS;
  const rawModules = isEnglish ? ENGLISH_GLOSSARY_MODULES : isMath ? MATH_GLOSSARY_MODULES : GLOSSARY_MODULES;
  const rawTypes = isEnglish ? ENGLISH_GLOSSARY_TYPES : isMath ? MATH_GLOSSARY_TYPES : GLOSSARY_TYPES;

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModule, setSelectedModule] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [viewMode, setViewMode] = useState('catalog'); // 'catalog' | 'flashcard'
  
  // Flashcard memorization state
  const [flashcardIdx, setFlashcardIdx] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [masteredIds, setMasteredIds] = useState(new Set());
  const [copiedId, setCopiedId] = useState(null);
  
  // On-demand Arabic explanation expansion state
  const [expandedArabicIds, setExpandedArabicIds] = useState(new Set());
  const [flashcardArabicOpen, setFlashcardArabicOpen] = useState(false);

  // Isolate modules strictly by active division
  const divisionModules = useMemo(() => {
    let mods = rawModules;
    if (activeDivision && activeDivision !== 'all') {
      if (isEnglish) {
        if (activeDivision === 'vocab_grammar') {
          mods = rawModules.filter(m => m.id === 'all' || ['affixes', 'word_formation', 'passive_voice', 'connectors', 'dimensions'].includes(m.id));
        } else if (activeDivision === 'reports_writing') {
          mods = rawModules.filter(m => m.id === 'all' || ['report_structure', 'mechanism_desc', 'process_desc', 'correspondence', 'style_clarity'].includes(m.id));
        }
      } else if (isMath) {
        if (activeDivision === 'calculus') {
          mods = rawModules.filter(m => m.id === 'all' || ['limits', 'leibniz', 'series', 'curve', 'partial'].includes(m.id));
        } else if (activeDivision === 'algebra') {
          mods = rawModules.filter(m => m.id === 'all' || ['matrices', 'complex', 'induction', 'equations', 'geometry3d'].includes(m.id));
        }
      } else {
        if (activeDivision === 'electro') {
          mods = rawModules.filter(m => m.id === 'all' || m.id === 'corrosion');
        } else if (activeDivision === 'thermal') {
          mods = rawModules.filter(m => m.id === 'all' || ['water', 'fuels', 'cement', 'polymers'].includes(m.id));
        }
      }
    }
    return mods;
  }, [rawModules, activeDivision, isMath, isEnglish]);

  // Reset selectedModule if it is outside current division
  React.useEffect(() => {
    if (selectedModule !== 'all' && !divisionModules.some(m => m.id === selectedModule)) {
      setSelectedModule('all');
    }
  }, [divisionModules, selectedModule]);

  // Filter items
  const filteredItems = useMemo(() => {
    return rawItems.filter((item) => {
      // Division filter
      let matchDivision = true;
      if (activeDivision && activeDivision !== 'all') {
        if (isEnglish || isMath) {
          matchDivision = item.division === activeDivision || item.division === 'all';
        } else {
          const isElectro = item.module === 'corrosion' || item.id.startsWith('c-');
          matchDivision = (activeDivision === 'electro' ? isElectro : !isElectro);
        }
      }

      const matchModule = selectedModule === 'all' || item.module === selectedModule;
      const matchType = selectedType === 'all' || item.type === selectedType;
      
      const query = searchQuery.trim().toLowerCase();
      const matchSearch = query === '' || 
        item.termAr.toLowerCase().includes(query) ||
        item.termEn.toLowerCase().includes(query) ||
        (item.definitionAr && item.definitionAr.toLowerCase().includes(query)) ||
        (item.definitionEn && item.definitionEn.toLowerCase().includes(query)) ||
        (item.keywords && item.keywords.some(k => k.toLowerCase().includes(query)));

      return matchDivision && matchModule && matchType && matchSearch;
    });
  }, [rawItems, searchQuery, selectedModule, selectedType, activeDivision, isMath]);

  const currentFlashcard = filteredItems[flashcardIdx] || filteredItems[0];

  // Handle Arabic toggle per card
  const toggleArabic = (id) => {
    setExpandedArabicIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const toggleAllArabic = () => {
    if (expandedArabicIds.size === filteredItems.length && filteredItems.length > 0) {
      setExpandedArabicIds(new Set());
    } else {
      setExpandedArabicIds(new Set(filteredItems.map(i => i.id)));
    }
  };

  // Handle flashcard actions
  const handleNextCard = () => {
    setIsRevealed(false);
    setFlashcardArabicOpen(false);
    if (flashcardIdx + 1 < filteredItems.length) {
      setFlashcardIdx(prev => prev + 1);
    } else {
      setFlashcardIdx(0);
    }
  };

  const handlePrevCard = () => {
    setIsRevealed(false);
    setFlashcardArabicOpen(false);
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
    const textToCopy = `${item.termEn}\n\nDefinition:\n${item.definitionEn || ''}\n\n${item.formula ? `Formula: ${item.formula}` : ''}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const totalItems = rawItems.length;
  const defCount = rawItems.filter(i => i.type === 'definition').length;
  const lawCount = rawItems.filter(i => i.type === 'law').length;
  const whyCount = rawItems.filter(i => i.type === 'reasoning').length;
  const masteryPercentage = totalItems > 0 ? Math.round((masteredIds.size / totalItems) * 100) : 0;

  return (
    <div className="space-y-8 pb-16 font-arabic">
      
      {/* Top Banner */}
      <div className={`rounded-3xl p-6 sm:p-8 border-2 shadow-xl no-print ${
        isEnglish
          ? 'bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 border-emerald-500/40'
          : isMath
            ? 'bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border-indigo-500/40'
            : 'bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 border-blue-500/40'
      }`}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-right">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold border border-indigo-400/30">
              <BrainCircuit className="w-3.5 h-3.5 text-cyan-400" />
              <span>معجم الحفظ والمراجعة السريعة • {isEnglish ? 'Technical Vocab & Phrasing Vault' : isMath ? 'Math Formulas Vault' : 'Glossary & Formulas Vault'}</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-white">
              {isEnglish 
                ? 'مَعْجَمُ مُصْطَلَحَاتِ وَقَوَاعِدِ وَتَرَاكِيبِ الإِنْجِلِيزِي الفَنِّي'
                : isMath 
                  ? 'مَعْجَمُ قَوَانِينِ وَنَظَرِيَّاتِ الرِّيَاضِيَّاتِ 1' 
                  : 'مَعْجَمُ المُصْطَلَحَاتِ والقَوَانِينِ وَبَنْكُ الحِفْظِ الهَنْدَسِي'}
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl font-normal leading-relaxed">
              {isEnglish
                ? 'بنك شامل يضم أكثر من 20 مصطلحاً هندسياً وقاعدة نحوية وتراكيب كتابة التقارير والمراسلات الرسمية مع الشرح بالعربي وأسرار الامتحان.'
                : isMath 
                  ? 'بنك شامل يضم أكثر من 29 قانوناً ونظرية وتعليلاً رياضياً لمقرري التفاضل والجبر مع الشرح بالعربي وأسرار الامتحان.'
                  : 'بنك شامل ومبوب لجميع التعريفات العلمية، القوانين الرياضية، والتعليلات الامتحانية المقررة في هندسة شبرا لسهولة الحفظ والمراجعة ليلة الامتحان.'}
            </p>
          </div>

          {/* Quick Mastery & Stats Card */}
          <div className="bg-slate-800/90 p-4 rounded-2xl border border-indigo-500/30 text-center sm:text-right shrink-0 space-y-2 min-w-[220px]">
            <div className="flex items-center justify-between gap-2 border-b border-slate-700 pb-2">
              <span className="text-xs font-bold text-slate-400">إتقان الحفظ:</span>
              <span className="text-xs font-mono font-black text-emerald-400">{masteredIds.size} / {totalItems} ({masteryPercentage}%)</span>
            </div>
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
                <div className="text-[9px] text-slate-400 font-normal">علل/نظرية</div>
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

          {/* Search Input & Controls */}
          <div className="flex items-center gap-2 w-full lg:w-auto">
            <div className="relative flex-1 sm:w-80">
              <input
                type="text"
                placeholder={isMath ? "ابحث بالقانون أو النظرية (مثل: Leibniz, Taylor, Gauss, De Moivre)..." : "ابحث بالاسم العربي أو الإنجليزي (مثل: Bogue, عسر, Dulong)..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-9 pr-4 py-2 text-xs font-bold text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            </div>

            <button
              onClick={toggleAllArabic}
              className="px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-750 text-amber-400 text-xs font-bold border border-slate-700 transition flex items-center gap-1.5 shrink-0"
              title="فتح أو طي كافة شروح اللغة العربية لجميع البطاقات دفعة واحدة"
            >
              <Lightbulb className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">
                {expandedArabicIds.size === filteredItems.length && filteredItems.length > 0
                  ? 'طي جميع الشروح'
                  : '💡 فتح جميع الشروح'}
              </span>
            </button>

            <button
              onClick={() => window.print()}
              className="px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-750 text-slate-300 hover:text-white text-xs font-bold border border-slate-700 transition flex items-center gap-1.5 shrink-0"
              title="طباعة المعجم"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">طباعة</span>
            </button>
          </div>
        </div>

        {/* Filters: Modules & Types */}
        <div className="pt-3 border-t border-slate-700/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs">
          {/* Module Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
            <span className="text-slate-400 font-bold shrink-0 ml-1">الوحدات:</span>
            {divisionModules.map((m) => {
              const label = m.id === 'all'
                ? isEnglish
                  ? (activeDivision === 'vocab_grammar' ? 'جميع وحدات المصطلحات والقواعد (5 وحدات)' : 'جميع وحدات الكتابة والتقارير (5 وحدات)')
                  : isMath 
                    ? (activeDivision === 'calculus' ? 'جميع وحدات التفاضل (5 وحدات)' : activeDivision === 'algebra' ? 'جميع وحدات الجبر والفراغية (5 وحدات)' : m.label)
                    : (activeDivision === 'electro' ? 'وحدات الكيمياء الكهربية والتآكل' : activeDivision === 'thermal' ? 'جميع وحدات الكيمياء الحرارية' : m.label)
                : m.label;
              return (
                <button
                  key={m.id}
                  onClick={() => setSelectedModule(m.id)}
                  className={`px-3 py-1 rounded-xl whitespace-nowrap transition font-bold text-[11px] ${
                    selectedModule === m.id
                      ? 'bg-cyan-600 text-white shadow'
                      : 'bg-slate-900 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Type Pills */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="text-slate-400 font-bold ml-1">النوع:</span>
            {rawTypes.map((t) => (
              <button
                key={t.id}
                onClick={() => setSelectedType(t.id)}
                className={`px-2.5 py-1 rounded-xl whitespace-nowrap transition font-bold text-[11px] ${
                  selectedType === t.id
                    ? 'bg-indigo-600 text-white shadow'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
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
              
              <div className="flex items-center justify-between text-xs font-bold text-slate-400 px-2">
                <span>بطاقة رقم {flashcardIdx + 1} من {filteredItems.length}</span>
                <span className="px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-cyan-400">
                  {currentFlashcard.type === 'definition' ? 'مصطلح علمي' : currentFlashcard.type === 'law' ? 'قانون ونظرية' : 'سؤال علل ونظرية'}
                </span>
              </div>

              {/* The Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 border-2 border-indigo-500/40 shadow-2xl space-y-6 text-right min-h-[340px] flex flex-col justify-between">
                
                {/* Front of Card (Term & English Code) */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-1.5">
                      <span 
                        dir="ltr" 
                        className="font-mono font-bold text-xs sm:text-sm text-cyan-300 bg-slate-950 px-3 py-1 rounded-xl border border-slate-800 shrink-0"
                      >
                        {currentFlashcard.id}
                      </span>
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-xl ${
                        isEnglish
                          ? currentFlashcard.division === 'vocab_grammar'
                            ? 'bg-emerald-950 text-emerald-300 border border-emerald-800/60'
                            : 'bg-teal-950 text-cyan-300 border border-teal-800/60'
                          : isMath 
                            ? currentFlashcard.division === 'calculus'
                              ? 'bg-blue-950 text-cyan-300 border border-blue-800/60'
                              : 'bg-purple-950 text-purple-300 border border-purple-800/60'
                            : currentFlashcard.module === 'corrosion' || currentFlashcard.id.startsWith('c-')
                              ? 'bg-cyan-950 text-cyan-300 border border-cyan-800/60'
                              : 'bg-amber-950 text-amber-300 border border-amber-800/60'
                      }`}>
                        {isEnglish
                          ? (currentFlashcard.division === 'vocab_grammar' ? '📖 Vocab & Grammar' : '📝 Reports & Writing')
                          : isMath 
                            ? (currentFlashcard.division === 'calculus' ? '📐 Calculus' : '⚡ Algebra')
                            : (currentFlashcard.module === 'corrosion' || currentFlashcard.id.startsWith('c-') ? '⚡ Electro' : '🔥 Thermal')}
                      </span>
                    </div>

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

                  {/* Primary English Term */}
                  <h2 className="text-xl sm:text-2xl font-black text-white font-mono text-left leading-snug mt-2" dir="ltr">
                    {currentFlashcard.termEn}
                  </h2>

                  <p className="text-xs font-bold text-slate-400 text-right">
                    المصطلح: {currentFlashcard.termAr}
                  </p>

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
                      {/* Academic English Definition */}
                      {(currentFlashcard.definitionEn || (!isMath && ENGINEERING_TERMS[currentFlashcard.termEn]?.definitionEn)) && (
                        <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-left font-mono" dir="ltr">
                          <span className="text-[10px] font-bold text-cyan-400 block font-sans mb-1 uppercase tracking-wider">
                            Academic English Definition (for Exam Answer Sheet):
                          </span>
                          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                            {currentFlashcard.definitionEn || (!isMath && ENGINEERING_TERMS[currentFlashcard.termEn]?.definitionEn)}
                          </p>
                        </div>
                      )}

                      {/* Formula if present */}
                      {currentFlashcard.formula && (
                        <div className="p-3 rounded-xl bg-slate-950 font-mono text-xs sm:text-sm font-bold text-cyan-300 border border-slate-800 text-left overflow-x-auto shadow-inner" dir="ltr">
                          {currentFlashcard.formula}
                        </div>
                      )}

                      {/* Formula Display if present */}
                      {currentFlashcard.formulaDisplay && (
                        <div className="p-2.5 rounded-xl bg-slate-950 font-mono text-xs font-bold text-amber-300 border border-slate-800 text-left overflow-x-auto" dir="ltr">
                          {currentFlashcard.formulaDisplay}
                        </div>
                      )}

                      {/* Small Button for On-Demand Arabic Explanation */}
                      <div className="pt-1">
                        <button
                          onClick={() => setFlashcardArabicOpen(prev => !prev)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 border ${
                            flashcardArabicOpen
                              ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                              : 'bg-slate-950 text-amber-400 hover:text-amber-300 border-slate-700 hover:border-amber-500/40'
                          }`}
                        >
                          <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                          <span>{flashcardArabicOpen ? 'إخفاء الشرح بالعربي' : '💡 الشرح بالعربي (Arabic Explanation)'}</span>
                          <span className="text-[9px] opacity-70 px-1 rounded bg-black/30 font-mono">
                            {flashcardArabicOpen ? '▲' : '▼'}
                          </span>
                        </button>
                      </div>

                      {/* Arabic Meaning Drawer */}
                      {flashcardArabicOpen && (
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-950/30 to-slate-900/90 border border-amber-500/30 text-right space-y-2 animate-in fade-in duration-200" dir="rtl">
                          <div className="flex items-center justify-between border-b border-amber-500/20 pb-1.5">
                            <span className="text-xs font-black text-amber-300">{currentFlashcard.termAr}</span>
                            <span className="text-[10px] text-amber-400/80 font-bold bg-amber-950/60 px-2 py-0.5 rounded border border-amber-700/40">تفسير باللغة العربية</span>
                          </div>
                          <p className="text-xs font-medium text-slate-200 leading-relaxed whitespace-pre-line">
                            {currentFlashcard.definitionAr}
                          </p>
                          {currentFlashcard.examTip && (
                            <div className="text-[11px] text-amber-200/90 bg-amber-950/50 p-2.5 rounded-xl border border-amber-800/40 flex items-center gap-2">
                              <span>🎯</span>
                              <span><strong>تنبيه الامتحان:</strong> {currentFlashcard.examTip}</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => setIsRevealed(true)}
                      className="w-full py-6 rounded-2xl bg-indigo-950/40 hover:bg-indigo-950/60 border-2 border-dashed border-indigo-500/40 text-indigo-300 hover:text-white flex flex-col items-center justify-center gap-2 transition group"
                    >
                      <Eye className="w-6 h-6 group-hover:scale-110 transition-transform text-cyan-400" />
                      <span className="text-xs font-black">اضغط هنا لإظهار القانون أو التعريف بالإنجليزية</span>
                      <span className="text-[10px] text-slate-400">اختبر استحضارك للمصطلح قبل الكشف!</span>
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
            <span>كلية الهندسة بشبرا - قسم {isMath ? 'الرياضيات الهندسية' : 'الكيمياء'}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredItems.map((item) => {
              const isMastered = masteredIds.has(item.id);
              const isArabicExpanded = expandedArabicIds.has(item.id);
              const defEn = item.definitionEn || (!isMath && ENGINEERING_TERMS[item.termEn]?.definitionEn);
              const isCalculus = item.division === 'calculus';

              return (
                <div
                  key={item.id}
                  className={`p-5 rounded-3xl bg-slate-800/90 border transition-all flex flex-col justify-between space-y-4 shadow-md ${
                    isMastered
                      ? 'border-emerald-500/50 bg-slate-800/95'
                      : 'border-slate-700/80 hover:border-indigo-400/60'
                  }`}
                >
                  <div className="space-y-3.5">
                    
                    {/* Header: English Term Pill + Division Pill + Actions */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                          isEnglish
                            ? item.division === 'vocab_grammar'
                              ? 'bg-emerald-950 text-emerald-300 border border-emerald-800/60'
                              : 'bg-teal-950 text-cyan-300 border border-teal-800/60'
                            : isMath
                              ? isCalculus
                                ? 'bg-blue-950 text-cyan-300 border border-blue-800/60'
                                : 'bg-purple-950 text-purple-300 border border-purple-800/60'
                              : (item.module === 'corrosion' || item.id.startsWith('c-'))
                                ? 'bg-cyan-950 text-cyan-300 border border-cyan-800/60'
                                : 'bg-amber-950 text-amber-300 border border-amber-800/60'
                        }`}>
                          {isEnglish
                            ? (item.division === 'vocab_grammar' ? '📖 Vocab & Grammar' : '📝 Reports & Writing')
                            : isMath 
                              ? (isCalculus ? '📐 Calculus' : '⚡ Algebra')
                              : (item.module === 'corrosion' || item.id.startsWith('c-') ? '⚡ Electro (د. سمر)' : '🔥 Thermal (د. هناء)')}
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-900 text-slate-300 border border-slate-700">
                          {item.type === 'definition' ? '📖 Definition' : item.type === 'law' ? '📐 Law & Formula' : '❓ Reasoning / Theorem'}
                        </span>
                      </div>

                      <div className="flex items-center gap-1 no-print">
                        <button
                          onClick={() => handleCopy(item)}
                          className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-700 text-slate-400 hover:text-white transition"
                          title="نسخ المصطلح والتعريف بالإنجليزية"
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

                    {/* Primary English Term Title */}
                    <h3 className="text-base sm:text-lg font-black text-white font-mono tracking-tight text-left leading-snug" dir="ltr">
                      {item.termEn}
                    </h3>

                    {/* Primary Academic English Definition */}
                    {defEn && (
                      <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800/90 text-left font-mono text-xs text-slate-200 leading-relaxed space-y-1" dir="ltr">
                        <span className="text-[10px] font-bold text-cyan-400 block font-sans uppercase tracking-wider">
                          Academic English Definition:
                        </span>
                        <p className="font-normal text-slate-300 text-xs leading-relaxed">
                          {defEn}
                        </p>
                      </div>
                    )}

                    {/* Formula Block (if law) */}
                    {item.formula && (
                      <div className="space-y-1.5 pt-0.5">
                        <div 
                          className="p-2.5 bg-slate-950 rounded-xl font-mono text-xs font-bold text-cyan-300 border border-slate-800 text-left overflow-x-auto shadow-inner" 
                          dir="ltr"
                        >
                          {item.formula}
                        </div>
                        {item.variables && (
                          <div className="space-y-1 text-[10px] text-slate-400 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800" dir="ltr">
                            {item.variables.map((v, vi) => (
                              <div key={vi} className="flex items-baseline gap-2">
                                <span className="font-mono text-amber-300 font-bold shrink-0">{v.sym}:</span>
                                <span className="text-slate-300">{v.desc}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Formula Display (if reaction or alternate formula) */}
                    {item.formulaDisplay && (
                      <div 
                        className="p-2.5 bg-slate-950 rounded-lg font-mono text-[11px] font-bold text-amber-300 border border-slate-800 text-left overflow-x-auto" 
                        dir="ltr"
                      >
                        {item.formulaDisplay}
                      </div>
                    )}

                    {/* Small Button for On-Demand Arabic Explanation */}
                    <div className="pt-1">
                      <button
                        onClick={() => toggleArabic(item.id)}
                        className={`px-2.5 py-1.5 rounded-xl text-[11px] font-bold transition-all flex items-center gap-1.5 border ${
                          isArabicExpanded 
                            ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm'
                            : 'bg-slate-900/90 hover:bg-slate-900 text-amber-400/90 hover:text-amber-300 border-slate-700/80 hover:border-amber-500/40'
                        }`}
                      >
                        <Lightbulb className={`w-3.5 h-3.5 ${isArabicExpanded ? 'text-amber-300' : 'text-amber-400'}`} />
                        <span>{isArabicExpanded ? 'إخفاء الشرح بالعربي' : '💡 الشرح بالعربي (Arabic Explanation)'}</span>
                        <span className="text-[9px] opacity-70 px-1 rounded bg-black/30 font-mono">
                          {isArabicExpanded ? '▲' : '▼'}
                        </span>
                      </button>
                    </div>

                    {/* Expandable Arabic Explanation Drawer */}
                    {isArabicExpanded && (
                      <div className="p-3.5 rounded-2xl bg-gradient-to-br from-amber-950/25 to-slate-900/90 border border-amber-500/30 space-y-2 text-right animate-in fade-in duration-200" dir="rtl">
                        <div className="flex items-center justify-between border-b border-amber-500/20 pb-1.5">
                          <span className="text-xs font-black text-amber-300">{item.termAr}</span>
                          <span className="text-[10px] text-amber-400/80 font-bold bg-amber-950/60 px-2 py-0.5 rounded border border-amber-700/40">تفسير باللغة العربية</span>
                        </div>
                        <p className="text-xs font-medium text-slate-200 leading-relaxed whitespace-pre-line">
                          {item.definitionAr}
                        </p>
                        {item.examTip && (
                          <div className="text-[11px] text-amber-200/90 bg-amber-950/50 p-2 rounded-xl border border-amber-800/40 flex items-start gap-1.5">
                            <span className="shrink-0">🎯</span>
                            <div>
                              <strong>سر الامتحان:</strong> {item.examTip}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                  </div>

                  {/* Footer / Tip */}
                  <div className="pt-2 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="font-bold text-cyan-400/90 text-[10px]">
                      {item.examTip && !isArabicExpanded ? `💡 ${item.examTip}` : 'Faculty of Engineering at Shoubra (FES)'}
                    </span>
                    <span className="text-[10px] font-bold bg-slate-900 px-2 py-0.5 rounded text-slate-400 shrink-0 font-mono">
                      {item.id}
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
