import React from 'react';
import { 
  Home, BookOpen, Calculator, Printer, TestTube, Youtube, Award, 
  BarChart3, GraduationCap, BrainCircuit, FolderArchive, Flame, Zap, 
  Sparkles, ArrowLeft, ArrowRight, Grid, Binary, Compass 
} from 'lucide-react';
import { FACULTY_INFO } from '../data/chemistryCurriculumData';

export default function Navbar({ 
  selectedSubject,
  selectedDivision,
  activeTab, 
  setActiveTab, 
  onBackToHome,
  onBackToSubject
}) {
  const isLevel1 = !selectedSubject;
  const isLevel2 = selectedSubject && !selectedDivision;
  const isLevel3 = selectedSubject && selectedDivision;

  const isMath = selectedSubject === 'math';
  const isChemistry = selectedSubject === 'chemistry';
  const isEnglish = selectedSubject === 'english';

  const isCalculus = selectedDivision === 'calculus';
  const isAlgebra = selectedDivision === 'algebra';
  const isThermal = selectedDivision === 'thermal';
  const isElectro = selectedDivision === 'electro';
  const isVocabGrammar = selectedDivision === 'vocab_grammar';
  const isReportsWriting = selectedDivision === 'reports_writing';

  // Division-specific labels & icons for Level 3
  const getNavItems = () => {
    if (isMath) {
      if (isCalculus) {
        return [
          { id: 'syllabus', label: 'مقرر التفاضل والتطبيقات', icon: BookOpen, badge: '5 وحدات' },
          { id: 'glossary', label: 'معجم قوانين التفاضل', icon: BrainCircuit, badge: 'قوانين لوبيتال' },
          { id: 'lab', label: 'حاسبة مشتقة لايبنتز', icon: Calculator, badge: 'خطوة بخطوة' },
          { id: 'cheatsheets', label: 'شيتات تفاضل A4', icon: Printer, badge: 'جاهز للطباعة' },
          { id: 'quiz', label: 'امتحانات التفاضل MCQ', icon: Award, badge: 'شبرا' },
          { id: 'materials', label: 'مذكرات التفاضل', icon: FolderArchive, badge: 'PDF' },
          { id: 'lectures', label: 'فيديوهات التفاضل', icon: Youtube, badge: 'YouTube' }
        ];
      } else {
        return [
          { id: 'syllabus', label: 'مقرر الجبر والفراغية', icon: BookOpen, badge: '5 وحدات' },
          { id: 'glossary', label: 'معجم قوانين الجبر والفراغية', icon: BrainCircuit, badge: 'ديموافر وغوس' },
          { id: 'lab', label: 'حاسبات المصفوفات والفراغ', icon: Grid, badge: '3 حاسبات' },
          { id: 'cheatsheets', label: 'شيتات جبر وفراغية A4', icon: Printer, badge: 'جاهز للطباعة' },
          { id: 'quiz', label: 'امتحانات الجبر MCQ', icon: Award, badge: 'شبرا' },
          { id: 'materials', label: 'مذكرات الجبر', icon: FolderArchive, badge: 'PDF' },
          { id: 'lectures', label: 'فيديوهات الجبر', icon: Youtube, badge: 'YouTube' }
        ];
      }
    } else if (isChemistry) {
      if (isThermal) {
        return [
          { id: 'syllabus', label: 'مقرر الكيمياء الحرارية', icon: BookOpen, badge: 'د. هناء' },
          { id: 'glossary', label: 'معجم قوانين الحرارية والوقود', icon: BrainCircuit, badge: 'دولونج وبوج' },
          { id: 'lab', label: 'معمل وحاسبات د. هناء', icon: Flame, badge: 'Lime-Soda' },
          { id: 'cheatsheets', label: 'شيتات حرارية A4', icon: Printer, badge: 'جاهز للطباعة' },
          { id: 'quiz', label: 'امتحانات الحرارية MCQ', icon: Award, badge: 'شبرا' },
          { id: 'materials', label: 'مذكرات د. هناء', icon: FolderArchive, badge: '19 صفحة' },
          { id: 'lectures', label: 'فيديوهات د. هناء', icon: Youtube, badge: 'YouTube' }
        ];
      } else {
        return [
          { id: 'syllabus', label: 'مقرر الكيمياء الكهربية والتآكل', icon: BookOpen, badge: 'د. سمر' },
          { id: 'glossary', label: 'معجم قوانين نيرنست والتآكل', icon: BrainCircuit, badge: 'نيرنست وجيبس' },
          { id: 'lab', label: 'معمل وحاسبات د. سمر', icon: Zap, badge: 'Nernst EMF' },
          { id: 'cheatsheets', label: 'شيتات كهربية A4', icon: Printer, badge: 'جاهز للطباعة' },
          { id: 'quiz', label: 'امتحانات كهربية MCQ', icon: Award, badge: 'شبرا' },
          { id: 'materials', label: 'مذكرات د. سمر', icon: FolderArchive, badge: '14 صفحة' },
          { id: 'lectures', label: 'فيديوهات د. سمر', icon: Youtube, badge: 'YouTube' }
        ];
      }
    } else {
      // Technical English
      if (isVocabGrammar) {
        return [
          { id: 'syllabus', label: 'مقرر المصطلحات والقواعد', icon: BookOpen, badge: '5 وحدات' },
          { id: 'glossary', label: 'معجم المصطلحات والبادئات', icon: BrainCircuit, badge: 'اشتقاق ولواحق' },
          { id: 'lab', label: 'مفكك المصطلحات والمبني للمجهول', icon: Calculator, badge: 'أدوات تفاعلية' },
          { id: 'cheatsheets', label: 'شيتات قواعد A4', icon: Printer, badge: 'جاهز للطباعة' },
          { id: 'quiz', label: 'امتحانات القواعد MCQ', icon: Award, badge: 'شبرا' },
          { id: 'materials', label: 'مذكرات القواعد', icon: FolderArchive, badge: 'PDF' },
          { id: 'lectures', label: 'فيديوهات القواعد', icon: Youtube, badge: 'YouTube' }
        ];
      } else {
        return [
          { id: 'syllabus', label: 'مقرر الكتابة الفنية والتقارير', icon: BookOpen, badge: '5 وحدات' },
          { id: 'glossary', label: 'قوالب التقارير والمراسلات', icon: BrainCircuit, badge: 'Abstract & Memos' },
          { id: 'lab', label: 'مساعد بناء التقارير والإيميلات', icon: Calculator, badge: 'توليد فوري' },
          { id: 'cheatsheets', label: 'شيتات تقارير A4', icon: Printer, badge: 'جاهز للطباعة' },
          { id: 'quiz', label: 'امتحانات التقارير MCQ', icon: Award, badge: 'شبرا' },
          { id: 'materials', label: 'نماذج التقارير', icon: FolderArchive, badge: 'PDF' },
          { id: 'lectures', label: 'فيديوهات التقارير', icon: Youtube, badge: 'YouTube' }
        ];
      }
    }
  };

  const navItems = isLevel3 ? getNavItems() : [];

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-xl no-print font-arabic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between h-16 sm:h-20 gap-3">
          
          {/* Logo & Navigation Context */}
          <div className="flex items-center gap-3">
            <div 
              onClick={onBackToHome}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-blue-700 via-indigo-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 border border-blue-400/40 cursor-pointer hover:scale-105 transition-transform shrink-0"
              title="الصفحة الرئيسية"
            >
              <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>

            <div>
              {/* Dynamic Breadcrumbs */}
              <div className="flex items-center gap-1.5 text-xs font-bold">
                <button
                  onClick={onBackToHome}
                  className={`transition ${isLevel1 ? 'text-cyan-400 font-black' : 'text-slate-400 hover:text-white'}`}
                >
                  الصفحة الرئيسية
                </button>

                {selectedSubject && (
                  <>
                    <span className="text-slate-600">/</span>
                    <button
                      onClick={onBackToSubject}
                      className={`transition ${isLevel2 ? 'text-cyan-300 font-black' : 'text-slate-400 hover:text-white'}`}
                    >
                      {isMath ? 'الرياضيات 1 (MTH 001)' : isChemistry ? 'الكيمياء الهندسية (CHM 001)' : 'اللغة الإنجليزية الفنية (HUM 001)'}
                    </button>
                  </>
                )}

                {selectedDivision && (
                  <>
                    <span className="text-slate-600">/</span>
                    <span className="text-amber-300 font-black">
                      {isCalculus ? 'حساب التفاضل (Calculus)' :
                       isAlgebra ? 'الجبر والفراغية (Algebra)' :
                       isThermal ? 'الكيمياء الحرارية (د. هناء)' :
                       isElectro ? 'الكيمياء الكهربية (د. سمر)' :
                       isVocabGrammar ? 'المصطلحات والقواعد (Vocab & Grammar)' :
                       'الكتابة الفنية والتقارير (Reports & Writing)'}
                    </span>
                  </>
                )}
              </div>

              <h1 className="text-sm sm:text-base font-black text-white leading-tight mt-0.5">
                {isLevel1 && 'بوابة إعدادي هندسة شبرا 🏛️'}
                {isLevel2 && (
                  isMath ? 'مادة الرياضيات 1 • قائمة الأقسام الأكاديمية' :
                  isChemistry ? 'مادة الكيمياء الهندسية • قائمة الأقسام الأكاديمية' :
                  'مادة اللغة الإنجليزية الفنية • قائمة الأقسام الأكاديمية'
                )}
                {isLevel3 && (
                  isCalculus ? 'قسم حساب التفاضل والتطبيقات (Calculus)' :
                  isAlgebra ? 'قسم الجبر والهندسة التحليلية والفراغية (Algebra & 3D)' :
                  isThermal ? 'قسم الكيمياء الحرارية والتطبيقات الصناعية (د. هناء)' :
                  isElectro ? 'قسم الكيمياء الكهربية وتطبيقات التآكل (د. سمر)' :
                  isVocabGrammar ? 'قسم المصطلحات الفنية وقواعد الكتابة الهندسية' :
                  'قسم الكتابة الفنية وإعداد التقارير والمراسلات'
                )}
              </h1>
            </div>
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2">
            
            {/* If Level 3: Button to Return to Subject Branches */}
            {isLevel3 && (
              <button
                onClick={onBackToSubject}
                className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-slate-700 text-xs font-black transition flex items-center gap-1.5"
                title="الرجوع إلى أقسام المادة"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">أقسام المادة</span>
              </button>
            )}

            {/* If Level 2 or Level 3: Button to Return to Main Hub (الصفحة الرئيسية) */}
            {(isLevel2 || isLevel3) && (
              <button
                onClick={onBackToHome}
                className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-black transition flex items-center gap-1.5 shadow-md shadow-blue-900/40"
                title="العودة إلى الصفحة الرئيسية للمنصة"
              >
                <Home className="w-3.5 h-3.5" />
                <span>الصفحة الرئيسية</span>
              </button>
            )}

            {/* Shoubra Campus Pill */}
            <div className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-blue-950/80 border border-blue-800/60 text-xs font-bold text-blue-200 shrink-0">
              <span>📍 108 شارع شبرا / الخلفاوي</span>
            </div>

          </div>

        </div>

        {/* Level 3 Bottom Navigation Tabs Bar (Visible ONLY inside an active Department) */}
        {isLevel3 && (
          <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-2 border-t border-slate-800/80 no-scrollbar">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-black whitespace-nowrap transition-all flex items-center gap-2 shrink-0 ${
                    isActive
                      ? isEnglish
                        ? isVocabGrammar
                          ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-900/40'
                          : 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-md shadow-teal-900/40'
                        : isMath
                          ? isCalculus
                            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-900/40'
                            : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-purple-900/40'
                          : isThermal
                            ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md shadow-amber-900/40'
                            : 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-900/40'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-cyan-400'}`} />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      isActive ? 'bg-black/30 text-white' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        )}

      </div>
    </header>
  );
}
