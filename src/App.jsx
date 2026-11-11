import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainHubView from './views/MainHubView';
import SubjectPortalView from './views/SubjectPortalView';
import SyllabusView from './views/SyllabusView';
import GlossaryView from './views/GlossaryView';
import LabView from './views/LabView';
import MathCalculatorsView from './views/MathCalculatorsView';
import CheatSheetsView from './views/CheatSheetsView';
import QuizArenaView from './views/QuizArenaView';
import MaterialsView from './views/MaterialsView';
import LecturesView from './views/LecturesView';
import GpaTrackerView from './views/GpaTrackerView';
import { Home, ArrowLeft } from 'lucide-react';

export default function App() {
  // Level 1: selectedSubject = null -> Renders "الصفحة الرئيسية" (MainHubView with subject cards)
  // Level 2: selectedSubject = 'math' | 'chemistry' AND selectedDivision = null -> Renders SubjectPortalView (with department cards only)
  // Level 3: selectedSubject != null AND selectedDivision != null -> Renders the isolated department tools & views
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedDivision, setSelectedDivision] = useState(null);

  // Active functional tab inside Level 3
  const [activeTab, setActiveTab] = useState('syllabus'); // 'syllabus' | 'glossary' | 'lab' | 'cheatsheets' | 'quiz' | 'materials' | 'lectures' | 'gpa'
  const [labSubTab, setLabSubTab] = useState('calculators');
  const [studyMode, setStudyMode] = useState('bilingual'); // 'bilingual' | 'english_only'

  // Navigation handlers
  const handleSelectSubject = (subjectId) => {
    setSelectedSubject(subjectId);
    setSelectedDivision(null);
    setActiveTab('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectDivision = (divisionId, targetTab = 'syllabus') => {
    setSelectedDivision(divisionId);
    setActiveTab(targetTab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setSelectedSubject(null);
    setSelectedDivision(null);
    setActiveTab('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToSubject = () => {
    setSelectedDivision(null);
    setActiveTab('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  const isMath = selectedSubject === 'math';

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-arabic selection:bg-blue-600 selection:text-white">
      
      {/* Sticky Top Header Navigation */}
      <Navbar
        selectedSubject={selectedSubject}
        selectedDivision={selectedDivision}
        activeTab={activeTab === 'calculators' ? 'lab' : activeTab}
        setActiveTab={handleTabChange}
        onBackToHome={handleBackToHome}
        onBackToSubject={handleBackToSubject}
      />

      {/* Main Content Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* ======================================================== */}
        {/* LEVEL 1: الصفحة الرئيسية (كروت المواد الدراسية فقط)       */}
        {/* ======================================================== */}
        {!selectedSubject && (
          activeTab === 'gpa' ? (
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-900 border border-slate-800">
                <span className="text-sm font-black text-amber-300">حاسبة المعدل وتنسيق الأقسام (GPA)</span>
                <button
                  onClick={handleBackToHome}
                  className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-300 flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>العودة إلى الصفحة الرئيسية</span>
                </button>
              </div>
              <GpaTrackerView />
            </div>
          ) : (
            <MainHubView
              onSelectSubject={handleSelectSubject}
              onOpenGpa={() => setActiveTab('gpa')}
            />
          )
        )}

        {/* ======================================================== */}
        {/* LEVEL 2: الصفحة الرئيسية للمادة (كروت أقسام المادة فقط)    */}
        {/* ======================================================== */}
        {selectedSubject && !selectedDivision && (
          <SubjectPortalView
            subject={selectedSubject}
            onSelectDivision={handleSelectDivision}
            onBackToMainHub={handleBackToHome}
          />
        )}

        {/* ======================================================== */}
        {/* LEVEL 3: بيئة القسم المختار حصرياً (عزل تام عن باقي الأقسام) */}
        {/* ======================================================== */}
        {selectedSubject && selectedDivision && (
          <div className="space-y-6 animate-in fade-in duration-200">
            
            {/* Top Department Isolation Breadcrumb Banner */}
            <div className="flex items-center justify-between gap-3 p-3.5 bg-slate-900/90 rounded-2xl border border-slate-800 shadow-md">
              <div className="flex items-center gap-2 text-xs text-slate-300 font-bold flex-wrap">
                <button
                  onClick={handleBackToHome}
                  className="text-cyan-400 hover:text-cyan-300 transition font-black"
                >
                  الصفحة الرئيسية
                </button>
                <span className="text-slate-600">/</span>
                <button
                  onClick={handleBackToSubject}
                  className="text-slate-300 hover:text-white transition font-black"
                >
                  {isMath ? 'مادة الرياضيات 1' : 'مادة الكيمياء الهندسية'}
                </button>
                <span className="text-slate-600">/</span>
                <span className="text-amber-300 font-black">
                  {selectedDivision === 'calculus' ? 'قسم حساب التفاضل والتطبيقات' :
                   selectedDivision === 'algebra' ? 'قسم الجبر والهندسة الفراغية' :
                   selectedDivision === 'thermal' ? 'قسم الكيمياء الحرارية والصناعية (د. هناء)' :
                   'قسم الكيمياء الكهربية والتآكل (د. سمر)'}
                </span>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {/* Study Mode Toggle */}
                <button
                  onClick={() => setStudyMode(prev => prev === 'bilingual' ? 'english_only' : 'bilingual')}
                  className={`px-3 py-1.5 rounded-xl font-black text-xs flex items-center gap-1.5 transition border shadow-sm ${
                    studyMode === 'bilingual'
                      ? 'bg-emerald-950/90 text-emerald-300 border-emerald-600/70'
                      : 'bg-indigo-950/90 text-indigo-300 border-indigo-600/70'
                  }`}
                  title="التبديل بين وضع المذاكرة ووضع الامتحان"
                >
                  {studyMode === 'bilingual' ? '📚 وضع المذاكرة (عربي + EN)' : '📝 وضع الامتحان (EN Only)'}
                </button>

                <button
                  onClick={handleBackToSubject}
                  className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-bold border border-slate-700 transition flex items-center gap-1"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">أقسام المادة</span>
                </button>
              </div>
            </div>

            {/* Functional View Routing inside Level 3 */}
            {activeTab === 'syllabus' && (
              <SyllabusView 
                activeDivision={selectedDivision} 
                activeSubject={selectedSubject} 
                studyMode={studyMode} 
              />
            )}

            {activeTab === 'glossary' && (
              <GlossaryView 
                activeDivision={selectedDivision} 
                activeSubject={selectedSubject} 
                studyMode={studyMode} 
              />
            )}

            {(activeTab === 'lab' || activeTab === 'calculators') && (
              isMath ? (
                <MathCalculatorsView 
                  activeDivision={selectedDivision} 
                />
              ) : (
                <LabView 
                  activeDivision={selectedDivision} 
                  subTab={activeTab === 'calculators' ? 'calculators' : labSubTab} 
                  studyMode={studyMode} 
                />
              )
            )}

            {activeTab === 'cheatsheets' && (
              <CheatSheetsView 
                activeDivision={selectedDivision} 
                activeSubject={selectedSubject} 
                studyMode={studyMode} 
              />
            )}

            {activeTab === 'quiz' && (
              <QuizArenaView 
                activeDivision={selectedDivision} 
                activeSubject={selectedSubject} 
                studyMode={studyMode} 
              />
            )}

            {activeTab === 'materials' && (
              <MaterialsView 
                activeDivision={selectedDivision} 
                activeSubject={selectedSubject} 
                setActiveTab={handleTabChange}
              />
            )}

            {activeTab === 'lectures' && (
              <LecturesView 
                activeDivision={selectedDivision} 
                activeSubject={selectedSubject} 
              />
            )}

            {activeTab === 'gpa' && (
              <GpaTrackerView />
            )}

          </div>
        )}

      </main>

      {/* Footer */}
      <Footer setActiveTab={handleTabChange} />

    </div>
  );
}
