import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SyllabusView from './views/SyllabusView';
import CalculatorsView from './views/CalculatorsView';
import CheatSheetsView from './views/CheatSheetsView';
import VirtualLabView from './views/VirtualLabView';
import QuizArenaView from './views/QuizArenaView';
import LecturesView from './views/LecturesView';
import GpaTrackerView from './views/GpaTrackerView';

export default function App() {
  const [activeTab, setActiveTab] = useState('syllabus');

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-arabic selection:bg-blue-600 selection:text-white">
      
      {/* Sticky Header Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activeTab === 'syllabus' && (
          <SyllabusView />
        )}

        {activeTab === 'calculators' && (
          <CalculatorsView />
        )}

        {activeTab === 'cheatsheets' && (
          <CheatSheetsView />
        )}

        {activeTab === 'lab' && (
          <VirtualLabView />
        )}

        {activeTab === 'quiz' && (
          <QuizArenaView />
        )}

        {activeTab === 'lectures' && (
          <LecturesView />
        )}

        {activeTab === 'gpa' && (
          <GpaTrackerView />
        )}
      </main>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />

    </div>
  );
}
