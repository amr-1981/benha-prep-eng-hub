import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './views/HomeView';
import SyllabusView from './views/SyllabusView';
import GlossaryView from './views/GlossaryView';
import LabView from './views/LabView';
import MathCalculatorsView from './views/MathCalculatorsView';
import CheatSheetsView from './views/CheatSheetsView';
import QuizArenaView from './views/QuizArenaView';
import MaterialsView from './views/MaterialsView';
import LecturesView from './views/LecturesView';
import GpaTrackerView from './views/GpaTrackerView';
import { Flame, Zap, Sparkles, Home, ArrowLeftRight, Calculator, Grid, Binary } from 'lucide-react';

export default function App() {
  // Active course: 'math' (MTH 001) | 'chemistry' (CHM 001)
  const [activeSubject, setActiveSubject] = useState('math');

  // Default to 'home' landing page featuring the academic department portal cards
  const [activeTab, setActiveTab] = useState('home');
  const [activeDivision, setActiveDivision] = useState('all'); // 'all' | 'calculus' | 'algebra' (for math) OR 'all' | 'thermal' | 'electro' (for chem)
  const [labSubTab, setLabSubTab] = useState('calculators'); // 'calculators' | 'experiments'
  const [studyMode, setStudyMode] = useState('bilingual'); // 'bilingual' | 'english_only'

  const handleTabChange = (tabId, subMode = null) => {
    if (tabId === 'calculators') {
      setActiveTab('lab');
      setLabSubTab('calculators');
    } else if (tabId === 'lab') {
      setActiveTab('lab');
      if (subMode) setLabSubTab(subMode);
    } else {
      setActiveTab(tabId);
    }
  };

  const handleSubjectChange = (newSubject) => {
    setActiveSubject(newSubject);
    setActiveDivision('all');
  };

  const isMath = activeSubject === 'math';

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-arabic selection:bg-blue-600 selection:text-white">
      
      {/* Sticky Header Navigation */}
      <Navbar
        activeTab={activeTab === 'calculators' ? 'lab' : activeTab}
        setActiveTab={handleTabChange}
        activeDivision={activeDivision}
        setActiveDivision={setActiveDivision}
        activeSubject={activeSubject}
        setActiveSubject={handleSubjectChange}
      />

      {/* Main Content Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* Persistent Academic Division Context Banner (Displayed on all functional views when not on Home) */}
        {activeTab !== 'home' && (
          <div className={`mb-6 p-4 rounded-2xl border transition-all flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl animate-in fade-in duration-200 ${
            isMath
              ? activeDivision === 'calculus'
                ? 'bg-gradient-to-r from-blue-950/80 via-slate-900 to-slate-900 border-blue-500/50'
                : activeDivision === 'algebra'
                ? 'bg-gradient-to-r from-indigo-950/80 via-slate-900 to-slate-900 border-purple-500/50'
                : 'bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border-indigo-500/40'
              : activeDivision === 'thermal'
              ? 'bg-gradient-to-r from-amber-950/80 via-slate-900 to-slate-900 border-amber-500/50'
              : activeDivision === 'electro'
              ? 'bg-gradient-to-r from-cyan-950/80 via-slate-900 to-slate-900 border-cyan-500/50'
              : 'bg-gradient-to-r from-blue-950/80 via-slate-900 to-slate-900 border-blue-500/40'
          }`}>
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border shadow-md ${
                isMath
                  ? activeDivision === 'calculus'
                    ? 'bg-blue-600/20 text-cyan-300 border-blue-500/40 shadow-blue-950/50'
                    : activeDivision === 'algebra'
                    ? 'bg-purple-600/20 text-purple-300 border-purple-500/40 shadow-purple-950/50'
                    : 'bg-indigo-600/20 text-indigo-300 border-indigo-500/40 shadow-indigo-950/50'
                  : activeDivision === 'thermal'
                  ? 'bg-amber-600/20 text-amber-300 border-amber-500/40 shadow-amber-950/50'
                  : activeDivision === 'electro'
                  ? 'bg-cyan-600/20 text-cyan-300 border-cyan-500/40 shadow-cyan-950/50'
                  : 'bg-blue-600/20 text-blue-300 border-blue-500/40 shadow-blue-950/50'
              }`}>
                {isMath ? (
                  activeDivision === 'calculus' ? <Calculator className="w-5 h-5 text-cyan-400" /> :
                  activeDivision === 'algebra' ? <Grid className="w-5 h-5 text-purple-400" /> :
                  <Sparkles className="w-5 h-5 text-indigo-400" />
                ) : (
                  activeDivision === 'thermal' ? <Flame className="w-5 h-5 text-amber-400" /> :
                  activeDivision === 'electro' ? <Zap className="w-5 h-5 text-cyan-400" /> :
                  <Sparkles className="w-5 h-5 text-blue-400" />
                )}
              </div>
              
              <div className="text-right">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[11px] font-bold text-slate-400">القسم الأكاديمي النشط:</span>
                  <span className={`text-xs font-black px-2.5 py-0.5 rounded-full ${
                    isMath
                      ? activeDivision === 'calculus'
                        ? 'bg-blue-900/60 text-cyan-200 border border-blue-700/60'
                        : activeDivision === 'algebra'
                        ? 'bg-purple-900/60 text-purple-200 border border-purple-700/60'
                        : 'bg-indigo-900/60 text-indigo-200 border border-indigo-700/60'
                      : activeDivision === 'thermal'
                      ? 'bg-amber-900/60 text-amber-200 border border-amber-700/60'
                      : activeDivision === 'electro'
                      ? 'bg-cyan-900/60 text-cyan-200 border border-cyan-700/60'
                      : 'bg-blue-900/60 text-blue-200 border border-blue-700/60'
                  }`}>
                    {isMath
                      ? activeDivision === 'calculus' 
                        ? 'قسم حساب التفاضل والتطبيقات (Calculus)'
                        : activeDivision === 'algebra'
                        ? 'قسم الجبر والهندسة الفراغية (Algebra & 3D)'
                        : 'منهج الرياضيات 1 الشامل (الفرعان معاً)'
                      : activeDivision === 'thermal' 
                        ? 'قسم الكيمياء الحرارية والتطبيقات الصناعية' 
                        : activeDivision === 'electro' 
                        ? 'قسم الكيمياء الكهربية وتطبيقات التآكل' 
                        : 'المنهج الشامل الموحد (القسمان معاً)'}
                  </span>
                </div>
                <p className="text-xs text-slate-300 mt-0.5 font-medium">
                  {isMath
                    ? activeDivision === 'calculus'
                      ? 'إشراف قسم الرياضيات الهندسية • النهايات ولوبيتال، نظرية لايبنتز، متسلسلات تايلور، ورسم المنحنيات'
                      : activeDivision === 'algebra'
                      ? 'إشراف قسم الرياضيات الهندسية • مصفوفات غاوس والرتبة، الأعداد المركبة وديموافر، ومستويات الفراغ ثلاثي الأبعاد'
                      : 'يتم الآن تصفح كافة موضوعات وحاسبات وشيتات وأسئلة فرعي التفاضل والجبر معاً لطلاب هندسة شبرا.'
                    : activeDivision === 'thermal' 
                      ? 'إشراف: أ.د. هناء عبد الوهاب • تكنولوجيا المياه، الوقود وهس ودولونج، الأسمنت وبوج، والبوليمرات والزيوت' 
                      : activeDivision === 'electro' 
                      ? 'إشراف: أ.د. سمر عبد الحميد • الخلايا الجلفانية، معادلة نيرنست، طاقة جيبس، وميكانيكية التآكل والحماية الكاثودية' 
                      : 'يتم الآن تصفح كافة موضوعات وحاسبات وشيتات وأسئلة القسمين معاً لطلاب هندسة شبرا.'}
                </p>
              </div>
            </div>

            {/* Quick Switcher & Home Return Controls */}
            <div className="flex items-center gap-2 shrink-0 flex-wrap justify-end w-full md:w-auto">
              {isMath ? (
                <>
                  {activeDivision !== 'calculus' && (
                    <button
                      onClick={() => setActiveDivision('calculus')}
                      className="px-3 py-1.5 rounded-xl bg-blue-950/70 hover:bg-blue-900/80 text-cyan-300 border border-blue-700/60 font-black text-xs flex items-center gap-1.5 transition"
                      title="التبديل إلى قسم حساب التفاضل والتطبيقات"
                    >
                      <Calculator className="w-3.5 h-3.5" />
                      <span>قسم التفاضل</span>
                    </button>
                  )}

                  {activeDivision !== 'algebra' && (
                    <button
                      onClick={() => setActiveDivision('algebra')}
                      className="px-3 py-1.5 rounded-xl bg-purple-950/70 hover:bg-purple-900/80 text-purple-300 border border-purple-700/60 font-black text-xs flex items-center gap-1.5 transition"
                      title="التبديل إلى قسم الجبر والهندسة الفراغية"
                    >
                      <Grid className="w-3.5 h-3.5" />
                      <span>قسم الجبر</span>
                    </button>
                  )}
                </>
              ) : (
                <>
                  {activeDivision !== 'thermal' && (
                    <button
                      onClick={() => setActiveDivision('thermal')}
                      className="px-3 py-1.5 rounded-xl bg-amber-950/70 hover:bg-amber-900/80 text-amber-300 border border-amber-700/60 font-black text-xs flex items-center gap-1.5 transition"
                      title="التبديل إلى قسم الكيمياء الحرارية (د. هناء)"
                    >
                      <Flame className="w-3.5 h-3.5" />
                      <span>قسم د. هناء</span>
                    </button>
                  )}

                  {activeDivision !== 'electro' && (
                    <button
                      onClick={() => setActiveDivision('electro')}
                      className="px-3 py-1.5 rounded-xl bg-cyan-950/70 hover:bg-cyan-900/80 text-cyan-300 border border-cyan-700/60 font-black text-xs flex items-center gap-1.5 transition"
                      title="التبديل إلى قسم الكيمياء الكهربية (د. سمر)"
                    >
                      <Zap className="w-3.5 h-3.5" />
                      <span>قسم د. سمر</span>
                    </button>
                  )}
                </>
              )}

              {activeDivision !== 'all' && (
                <button
                  onClick={() => setActiveDivision('all')}
                  className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 font-bold text-xs flex items-center gap-1.5 transition"
                  title="عرض المنهج كاملاً"
                >
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  <span>القسمان معاً</span>
                </button>
              )}

              {/* Bilingual Study Mode vs English Exam Mode Switcher */}
              <button
                onClick={() => setStudyMode(prev => prev === 'bilingual' ? 'english_only' : 'bilingual')}
                className={`px-3 py-1.5 rounded-xl font-black text-xs flex items-center gap-1.5 transition border shadow-sm ${
                  studyMode === 'bilingual'
                    ? 'bg-emerald-950/90 text-emerald-300 border-emerald-600/70 hover:bg-emerald-900'
                    : 'bg-indigo-950/90 text-indigo-300 border-indigo-600/70 hover:bg-indigo-900'
                }`}
                title="التبديل بين وضع المذاكرة (عربي + إنجليزي) ووضع محاكاة الامتحان (English Only)"
              >
                {studyMode === 'bilingual' ? (
                  <>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>📚 وضع المذاكرة (عربي + EN)</span>
                  </>
                ) : (
                  <>
                    <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                    <span>📝 وضع الامتحان (English Only)</span>
                  </>
                )}
              </button>

              <button
                onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-xs flex items-center gap-1.5 transition shadow-md shadow-blue-900/40"
              >
                <Home className="w-3.5 h-3.5" />
                <span>بوابة الأقسام 🏠</span>
              </button>
            </div>
          </div>
        )}

        {/* 1. HOME LANDING PAGE WITH DEPARTMENT CARDS */}
        {activeTab === 'home' && (
          <HomeView 
            setActiveTab={handleTabChange} 
            activeDivision={activeDivision}
            setActiveDivision={setActiveDivision} 
            activeSubject={activeSubject}
            setActiveSubject={handleSubjectChange}
          />
        )}

        {/* 2. SYLLABUS ENCYCLOPEDIA */}
        {activeTab === 'syllabus' && (
          <SyllabusView 
            activeDivision={activeDivision} 
            setActiveDivision={setActiveDivision} 
            studyMode={studyMode} 
            activeSubject={activeSubject}
          />
        )}

        {/* 3. GLOSSARY & MEMORIZATION VAULT */}
        {activeTab === 'glossary' && (
          <GlossaryView 
            activeDivision={activeDivision} 
            setActiveDivision={setActiveDivision} 
            studyMode={studyMode} 
            activeSubject={activeSubject}
          />
        )}

        {/* 4. LAB & INTERACTIVE CALCULATORS */}
        {(activeTab === 'lab' || activeTab === 'calculators') && (
          isMath ? (
            <MathCalculatorsView 
              activeDivision={activeDivision} 
              setActiveDivision={setActiveDivision} 
            />
          ) : (
            <LabView 
              activeDivision={activeDivision} 
              setActiveDivision={setActiveDivision}
              subTab={activeTab === 'calculators' ? 'calculators' : labSubTab}
              studyMode={studyMode}
            />
          )
        )}

        {/* 5. A4 PRINTABLE CHEAT SHEETS */}
        {activeTab === 'cheatsheets' && (
          <CheatSheetsView 
            activeDivision={activeDivision} 
            setActiveDivision={setActiveDivision} 
            studyMode={studyMode} 
            activeSubject={activeSubject}
          />
        )}

        {/* 6. QUIZ ARENA (MCQ) */}
        {activeTab === 'quiz' && (
          <QuizArenaView 
            activeDivision={activeDivision} 
            setActiveDivision={setActiveDivision} 
            studyMode={studyMode} 
            activeSubject={activeSubject}
          />
        )}

        {/* 7. MATERIALS & REPOSITORY */}
        {activeTab === 'materials' && (
          <MaterialsView 
            setActiveTab={handleTabChange} 
            activeDivision={activeDivision} 
            setActiveDivision={setActiveDivision} 
          />
        )}

        {/* 8. VIDEO LECTURES */}
        {activeTab === 'lectures' && (
          <LecturesView 
            activeDivision={activeDivision} 
            setActiveDivision={setActiveDivision} 
          />
        )}

        {/* 9. GPA TRACKER & DEPARTMENT COORDINATION */}
        {activeTab === 'gpa' && (
          <GpaTrackerView />
        )}
      </main>

      {/* Footer */}
      <Footer setActiveTab={handleTabChange} />

    </div>
  );
}
