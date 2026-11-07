import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './views/HomeView';
import SyllabusView from './views/SyllabusView';
import GlossaryView from './views/GlossaryView';
import LabView from './views/LabView';
import CheatSheetsView from './views/CheatSheetsView';
import QuizArenaView from './views/QuizArenaView';
import MaterialsView from './views/MaterialsView';
import LecturesView from './views/LecturesView';
import GpaTrackerView from './views/GpaTrackerView';
import { Flame, Zap, Sparkles, Home, ArrowLeftRight } from 'lucide-react';

export default function App() {
  // Default to 'home' landing page featuring the academic department portal cards
  const [activeTab, setActiveTab] = useState('home');
  const [activeDivision, setActiveDivision] = useState('all'); // 'all' | 'thermal' | 'electro'
  const [labSubTab, setLabSubTab] = useState('calculators'); // 'calculators' | 'experiments'

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

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-arabic selection:bg-blue-600 selection:text-white">
      
      {/* Sticky Header Navigation */}
      <Navbar
        activeTab={activeTab === 'calculators' ? 'lab' : activeTab}
        setActiveTab={handleTabChange}
        activeDivision={activeDivision}
        setActiveDivision={setActiveDivision}
      />

      {/* Main Content Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* Persistent Academic Division Context Banner (Displayed on all functional views when not on Home) */}
        {activeTab !== 'home' && (
          <div className={`mb-6 p-4 rounded-2xl border transition-all flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl animate-in fade-in duration-200 ${
            activeDivision === 'thermal'
              ? 'bg-gradient-to-r from-amber-950/80 via-slate-900 to-slate-900 border-amber-500/50'
              : activeDivision === 'electro'
              ? 'bg-gradient-to-r from-cyan-950/80 via-slate-900 to-slate-900 border-cyan-500/50'
              : 'bg-gradient-to-r from-blue-950/80 via-slate-900 to-slate-900 border-blue-500/40'
          }`}>
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border shadow-md ${
                activeDivision === 'thermal'
                  ? 'bg-amber-600/20 text-amber-300 border-amber-500/40 shadow-amber-950/50'
                  : activeDivision === 'electro'
                  ? 'bg-cyan-600/20 text-cyan-300 border-cyan-500/40 shadow-cyan-950/50'
                  : 'bg-blue-600/20 text-blue-300 border-blue-500/40 shadow-blue-950/50'
              }`}>
                {activeDivision === 'thermal' ? (
                  <Flame className="w-5 h-5 text-amber-400" />
                ) : activeDivision === 'electro' ? (
                  <Zap className="w-5 h-5 text-cyan-400" />
                ) : (
                  <Sparkles className="w-5 h-5 text-blue-400" />
                )}
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[11px] font-bold text-slate-400">القسم الأكاديمي النشط:</span>
                  <span className={`text-xs font-black px-2.5 py-0.5 rounded-full ${
                    activeDivision === 'thermal'
                      ? 'bg-amber-900/60 text-amber-200 border border-amber-700/60'
                      : activeDivision === 'electro'
                      ? 'bg-cyan-900/60 text-cyan-200 border border-cyan-700/60'
                      : 'bg-blue-900/60 text-blue-200 border border-blue-700/60'
                  }`}>
                    {activeDivision === 'thermal' 
                      ? 'قسم الكيمياء الحرارية والتطبيقات الصناعية' 
                      : activeDivision === 'electro' 
                      ? 'قسم الكيمياء الكهربية وتطبيقات التآكل' 
                      : 'المنهج الشامل الموحد (القسمان معاً)'}
                  </span>
                </div>
                <p className="text-xs text-slate-300 mt-0.5 font-medium">
                  {activeDivision === 'thermal' 
                    ? 'إشراف: أ.د. هناء عبد الوهاب • تكنولوجيا المياه، الوقود وهس ودولونج، الأسمنت وبوج، والبوليمرات والزيوت' 
                    : activeDivision === 'electro' 
                    ? 'إشراف: أ.د. سمر عبد الحميد • الخلايا الجلفانية، معادلة نيرنست، طاقة جيبس، وميكانيكية التآكل والحماية الكاثودية' 
                    : 'يتم الآن تصفح كافة موضوعات وحاسبات وشيتات وأسئلة القسمين معاً لطلاب هندسة شبرا.'}
                </p>
              </div>
            </div>

            {/* Quick Switcher & Home Return Controls */}
            <div className="flex items-center gap-2 shrink-0 flex-wrap justify-end w-full md:w-auto">
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
          />
        )}

        {/* 2. SYLLABUS ENCYCLOPEDIA */}
        {activeTab === 'syllabus' && (
          <SyllabusView activeDivision={activeDivision} setActiveDivision={setActiveDivision} />
        )}

        {/* 3. GLOSSARY & MEMORIZATION VAULT */}
        {activeTab === 'glossary' && (
          <GlossaryView activeDivision={activeDivision} setActiveDivision={setActiveDivision} />
        )}

        {/* 4. UNIFIED ENGINEERING LAB (SMART CALCULATORS + VIRTUAL EXPERIMENTS) */}
        {(activeTab === 'lab' || activeTab === 'calculators') && (
          <LabView 
            activeDivision={activeDivision} 
            setActiveDivision={setActiveDivision}
            subTab={activeTab === 'calculators' ? 'calculators' : labSubTab}
          />
        )}

        {/* 5. A4 PRINTABLE CHEAT SHEETS */}
        {activeTab === 'cheatsheets' && (
          <CheatSheetsView activeDivision={activeDivision} setActiveDivision={setActiveDivision} />
        )}

        {/* 6. QUIZ ARENA (MCQ) */}
        {activeTab === 'quiz' && (
          <QuizArenaView activeDivision={activeDivision} setActiveDivision={setActiveDivision} />
        )}

        {/* 7. MATERIALS & REPOSITORY */}
        {activeTab === 'materials' && (
          <MaterialsView setActiveTab={handleTabChange} activeDivision={activeDivision} setActiveDivision={setActiveDivision} />
        )}

        {/* 8. VIDEO LECTURES */}
        {activeTab === 'lectures' && (
          <LecturesView activeDivision={activeDivision} setActiveDivision={setActiveDivision} />
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
