import React from 'react';
import { 
  Flame, Zap, Sparkles, BookOpen, Calculator, Printer, TestTube, 
  Award, FolderArchive, ArrowRight, CheckCircle2, GraduationCap, 
  ShieldAlert, Droplets, Building2, Layers, ChevronLeft, Info, Grid, Binary, Compass
} from 'lucide-react';
import { FACULTY_INFO, CHEMISTRY_DIVISIONS } from '../data/chemistryCurriculumData';
import { MATH_INFO, MATH_DIVISIONS } from '../data/mathCurriculumData';

export default function HomeView({ 
  setActiveTab, 
  activeDivision, 
  setActiveDivision,
  activeSubject = 'math',
  setActiveSubject = () => {}
}) {
  const isMath = activeSubject === 'math';

  const handleSelectDivision = (divisionId, targetTab = 'syllabus') => {
    setActiveDivision(divisionId);
    setActiveTab(targetTab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-8 pb-16 font-arabic animate-in fade-in duration-300">
      
      {/* 0. Top Multi-Subject Switcher Banner */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3 bg-slate-900/90 rounded-2xl border border-slate-800 shadow-lg">
        <div className="flex items-center gap-2 text-xs text-slate-300 font-bold">
          <GraduationCap className="w-4 h-4 text-cyan-400" />
          <span>اختر المادة الدراسية لتصفح محتواها بالكامل:</span>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            onClick={() => {
              setActiveSubject('math');
              setActiveDivision('all');
            }}
            className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs sm:text-sm font-black flex items-center justify-center gap-2 transition-all ${
              isMath
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-900/50'
                : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Calculator className="w-4 h-4 text-cyan-300" />
            <span>الرياضيات 1 (MTH 001)</span>
          </button>

          <button
            onClick={() => {
              setActiveSubject('chemistry');
              setActiveDivision('all');
            }}
            className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs sm:text-sm font-black flex items-center justify-center gap-2 transition-all ${
              !isMath
                ? 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-md shadow-cyan-900/50'
                : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <TestTube className="w-4 h-4 text-emerald-300" />
            <span>الكيمياء الهندسية (CHM 001)</span>
          </button>
        </div>
      </div>

      {/* ======================================================== */}
      {/* SUBJECT 1: ENGINEERING MATHEMATICS 1 (MTH 001)           */}
      {/* ======================================================== */}
      {isMath && (
        <div className="space-y-8 animate-in fade-in duration-300">
          
          {/* Main Welcome Portal Hero */}
          <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-10 border-2 border-indigo-500/40 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

            <div className="relative z-10 space-y-4 max-w-4xl text-center md:text-right mx-auto md:mx-0">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold border border-indigo-400/30">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span>بوابة المادة المعتمدة • كلية الهندسة بشبرا (جامعة بنها)</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                مَنَصَّةُ الرِّيَاضِيَّاتِ 1 الهَنْدَسِيَّةِ الشَّامِلَةِ
                <span className="block text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-300 font-bold mt-2">
                  Engineering Mathematics 1 (Calculus & Algebra - MTH 001)
                </span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                أهلاً بك يا باشمهندس في البوابة الرسمية لمادة الرياضيات 1. المقرر ينقسم أكاديمياً بهندسة شبرا إلى <strong className="text-white font-black">فرعين رئيسيين</strong>؛ اختر الفرع الذي تود دراسته للدخول مباشرة إلى بيئة تعليمية مخصصة تضم كافة وحداته، حاسباته التفاعلية، شيتات الـ A4، وبنك أسئلة الامتحانات:
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2 text-xs">
                <span className="px-3 py-1 rounded-xl bg-slate-800/80 text-amber-300 border border-slate-700/80 font-bold">
                  🏛️ لائحة كلية الهندسة بشبرا (150 درجة إجمالية)
                </span>
                <span className="px-3 py-1 rounded-xl bg-slate-800/80 text-cyan-300 border border-slate-700/80 font-mono font-bold">
                  90 تحريري فاينال + 30 ميدتيرم + 30 أعمال سنة
                </span>
                <span className="px-3 py-1 rounded-xl bg-slate-800/80 text-emerald-300 border border-slate-700/80 font-bold">
                  ✅ الإنجليزية أولاً مع زر الشرح بالعربي عند الحاجة
                </span>
                <span className="px-3 py-1 rounded-xl bg-slate-800/80 text-purple-300 border border-slate-700/80 font-bold">
                  🧮 حاسبات خطوة بخطوة لمصفوفات غاوس ونظرية لايبنتز
                </span>
              </div>
            </div>
          </div>

          {/* TWO MAIN BRANCH CARDS */}
          <div className="space-y-4">
            <div className="text-center sm:text-right">
              <h2 className="text-xl sm:text-2xl font-black text-white flex items-center justify-center sm:justify-start gap-2">
                <Sparkles className="w-5 h-5 text-indigo-400" />
                <span>اختر فرع الرياضيات المطلوب للدخول إليه:</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                عند اختيار الفرع، ستتفرغ جميع صفحات المنصة (المسائل، الشيتات، المعجم، الامتحانات، والمعمل) لعرض محتوى هذا القسم حصرياً.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* ================= CARD 1: CALCULUS BRANCH ================= */}
              <div className="bg-gradient-to-br from-slate-900 via-slate-850 to-blue-950/40 rounded-3xl p-6 sm:p-8 border-2 border-blue-500/50 hover:border-blue-400 transition-all shadow-xl hover:shadow-blue-950/40 flex flex-col justify-between group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>

                <div className="space-y-5 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-black flex items-center gap-1.5 shadow">
                      <Binary className="w-4 h-4 text-cyan-200" />
                      <span>الفرع الأول • قسم حساب التفاضل والتطبيقات</span>
                    </span>
                    <span className="text-xs font-bold text-cyan-400/90 font-mono">
                      5 وحدات دراسية
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-white group-hover:text-cyan-300 transition-colors leading-snug">
                      حساب التفاضل وتطبيقاته الهندسية (Calculus)
                    </h3>
                    <p className="text-xs font-bold text-slate-400 mt-1">
                      Calculus & Differential Calculus • <span className="text-cyan-300 font-black">قسم الرياضيات والفيزياء الهندسية</span>
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                    يشمل دراسة مجالات الدوال والنهايات المتقدمة وقاعدة لوبيتال، المشتقات العليا والمشتقة النونية بحاصل ضرب لايبنتز، مفكوك متسلسلات تايلور وماكلورين، رسم المنحنيات وخطوط التقارب والانحناء، والاشتقاق الجزئي ونظرية أويلر للدوال المتجانسة.
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-bold text-cyan-400 block">الوحدات المقررة في فرع التفاضل:</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <Binary className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>الدوال والنهايات وقاعدة لوبيتال</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <Calculator className="w-4 h-4 text-blue-400 shrink-0" />
                        <span>المشتقات العليا ونظرية لايبنتز</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <Layers className="w-4 h-4 text-indigo-400 shrink-0" />
                        <span>متسلسلات تايلور وماكلورين القياسية</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <Compass className="w-4 h-4 text-purple-400 shrink-0" />
                        <span>رسم المنحنيات وخطوط التقارب والانحناء</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    <span className="px-2.5 py-1 rounded-lg bg-blue-950/60 text-cyan-300 text-[11px] font-bold border border-blue-800/50">
                      🧮 حاسبة مشتقة لايبنتز خطوة بخطوة
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 text-[11px] font-bold border border-slate-700">
                      🖨️ 2 شيت A4 جاهز للطباعة
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 text-[11px] font-bold border border-slate-700">
                      📝 بنك أسئلة MCQ امتحانات شبرا
                    </span>
                  </div>

                  <div className="pt-2">
                    <div className="text-[11px] font-bold text-slate-400 mb-1.5">انتقال سريع لأدوات التفاضل:</div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <button
                        onClick={() => handleSelectDivision('calculus', 'lab')}
                        className="px-2.5 py-1.5 rounded-xl bg-slate-900/90 hover:bg-blue-950 text-cyan-300 border border-slate-700/80 text-[11px] font-bold transition flex items-center justify-center gap-1 shadow-sm"
                      >
                        <Calculator className="w-3.5 h-3.5" />
                        <span>حاسبة لايبنتز</span>
                      </button>
                      <button
                        onClick={() => handleSelectDivision('calculus', 'cheatsheets')}
                        className="px-2.5 py-1.5 rounded-xl bg-slate-900/90 hover:bg-indigo-950 text-indigo-300 border border-slate-700/80 text-[11px] font-bold transition flex items-center justify-center gap-1 shadow-sm"
                      >
                        <Printer className="w-3.5 h-3.5" />
                        <span>شيتات A4</span>
                      </button>
                      <button
                        onClick={() => handleSelectDivision('calculus', 'quiz')}
                        className="px-2.5 py-1.5 rounded-xl bg-slate-900/90 hover:bg-blue-950 text-blue-300 border border-slate-700/80 text-[11px] font-bold transition flex items-center justify-center gap-1 shadow-sm"
                      >
                        <Award className="w-3.5 h-3.5" />
                        <span>بنك الأسئلة</span>
                      </button>
                      <button
                        onClick={() => handleSelectDivision('calculus', 'glossary')}
                        className="px-2.5 py-1.5 rounded-xl bg-slate-900/90 hover:bg-purple-950 text-purple-300 border border-slate-700/80 text-[11px] font-bold transition flex items-center justify-center gap-1 shadow-sm"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>معجم القوانين</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800">
                  <button
                    onClick={() => handleSelectDivision('calculus', 'syllabus')}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-blue-950/60 transition-all active:scale-[0.98] group-hover:shadow-blue-500/20"
                  >
                    <span>دخول قسم حساب التفاضل والتطبيقات</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-[-4px] transition-transform" />
                  </button>
                </div>
              </div>

              {/* ================= CARD 2: ALGEBRA & 3D GEOMETRY BRANCH ================= */}
              <div className="bg-gradient-to-br from-slate-900 via-slate-850 to-indigo-950/40 rounded-3xl p-6 sm:p-8 border-2 border-indigo-500/50 hover:border-indigo-400 transition-all shadow-xl hover:shadow-indigo-950/40 flex flex-col justify-between group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none"></div>

                <div className="space-y-5 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-black flex items-center gap-1.5 shadow">
                      <Grid className="w-4 h-4 text-purple-200" />
                      <span>الفرع الثاني • قسم الجبر والهندسة الفراغية</span>
                    </span>
                    <span className="text-xs font-bold text-purple-400/90 font-mono">
                      5 وحدات دراسية
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-white group-hover:text-purple-300 transition-colors leading-snug">
                      الجبر العام والهندسة الفراغية (Algebra & 3D Geometry)
                    </h3>
                    <p className="text-xs font-bold text-slate-400 mt-1">
                      Linear Algebra & Solid Analytical Geometry • <span className="text-purple-300 font-black">قسم الرياضيات الهندسية</span>
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                    يشمل دراسة المصفوفات والمحددات وحذف غاوس-جوردان، رتبة المصفوفة والأنظمة الخطية، الأعداد المركبة ونظرية ديموافر وجذور الوحدة، نظرية ذات الحدين والاستقراء الرياضي، ونظرية المعادلات، والهندسة التحليلية في الفراغ ثلاثي الأبعاد.
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-bold text-purple-400 block">الوحدات المقررة في فرع الجبر والفراغية:</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <Grid className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>المصفوفات وحذف غاوس والرتبة</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <Sparkles className="w-4 h-4 text-purple-400 shrink-0" />
                        <span>الأعداد المركبة ونظرية ديموافر</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <Layers className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>نظرية ذات الحدين والاستقراء الرياضي</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <Compass className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>الهندسة الفراغية ثلاثية الأبعاد والمستويات</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    <span className="px-2.5 py-1 rounded-lg bg-indigo-950/60 text-purple-300 text-[11px] font-bold border border-indigo-800/50">
                      🧮 حاسبة مصفوفات 3×3 والرتبة والمقلوب
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 text-[11px] font-bold border border-slate-700">
                      ⚡ حاسبة ديموافر والجذور النونية
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 text-[11px] font-bold border border-slate-700">
                      🖨️ 3 شيتات A4 جاهزة للطباعة
                    </span>
                  </div>

                  <div className="pt-2">
                    <div className="text-[11px] font-bold text-slate-400 mb-1.5">انتقال سريع لأدوات الجبر:</div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <button
                        onClick={() => handleSelectDivision('algebra', 'lab')}
                        className="px-2.5 py-1.5 rounded-xl bg-slate-900/90 hover:bg-indigo-950 text-purple-300 border border-slate-700/80 text-[11px] font-bold transition flex items-center justify-center gap-1 shadow-sm"
                      >
                        <Grid className="w-3.5 h-3.5" />
                        <span>حاسبة المصفوفات</span>
                      </button>
                      <button
                        onClick={() => handleSelectDivision('algebra', 'cheatsheets')}
                        className="px-2.5 py-1.5 rounded-xl bg-slate-900/90 hover:bg-purple-950 text-purple-300 border border-slate-700/80 text-[11px] font-bold transition flex items-center justify-center gap-1 shadow-sm"
                      >
                        <Printer className="w-3.5 h-3.5" />
                        <span>شيتات A4</span>
                      </button>
                      <button
                        onClick={() => handleSelectDivision('algebra', 'quiz')}
                        className="px-2.5 py-1.5 rounded-xl bg-slate-900/90 hover:bg-blue-950 text-blue-300 border border-slate-700/80 text-[11px] font-bold transition flex items-center justify-center gap-1 shadow-sm"
                      >
                        <Award className="w-3.5 h-3.5" />
                        <span>بنك الأسئلة</span>
                      </button>
                      <button
                        onClick={() => handleSelectDivision('algebra', 'glossary')}
                        className="px-2.5 py-1.5 rounded-xl bg-slate-900/90 hover:bg-emerald-950 text-emerald-300 border border-slate-700/80 text-[11px] font-bold transition flex items-center justify-center gap-1 shadow-sm"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>معجم القوانين</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800">
                  <button
                    onClick={() => handleSelectDivision('algebra', 'syllabus')}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 hover:from-indigo-500 hover:to-purple-500 text-white font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-indigo-950/60 transition-all active:scale-[0.98] group-hover:shadow-indigo-500/20"
                  >
                    <span>دخول قسم الجبر والهندسة الفراغية</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-[-4px] transition-transform" />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* CARD 3: UNIFIED MATH 1 PORTAL */}
          <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 rounded-3xl p-6 sm:p-8 border-2 border-slate-700/80 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-right">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-cyan-300 text-xs font-bold border border-slate-700">
                <Sparkles className="w-3.5 h-3.5" />
                <span>مراجعة شاملة للفاينال (Unified Final Exam Review)</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                تصفح منهج الرياضيات 1 كاملاً (فرعي التفاضل والجبر معاً)
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-2xl font-normal leading-relaxed">
                إذا كنت في فترة مراجعة ليلة الامتحان أو ترغب في استعراض موسوعة المنهج وشيتات القوانين وحاسبات الحل دون تصفية مسبقة، يمكنك الدخول مباشرة إلى الوضع الشامل.
              </p>
            </div>

            <button
              onClick={() => handleSelectDivision('all', 'syllabus')}
              className="px-6 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-black text-xs sm:text-sm border border-slate-600 transition flex items-center gap-2 shrink-0 shadow-md"
            >
              <span>دخول المنهج الشامل للرياضيات (10 وحدات)</span>
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}

      {/* ======================================================== */}
      {/* SUBJECT 2: ENGINEERING CHEMISTRY (CHM 001)               */}
      {/* ======================================================== */}
      {!isMath && (
        <div className="space-y-8 animate-in fade-in duration-300">
          
          {/* Main Welcome Portal Hero */}
          <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-10 border-2 border-indigo-500/40 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

            <div className="relative z-10 space-y-4 max-w-4xl text-center md:text-right mx-auto md:mx-0">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold border border-indigo-400/30">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span>بوابة المادة المعتمدة • كلية الهندسة بشبرا (جامعة بنها)</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                مَنَصَّةُ الكِيمْيَاءِ الهَنْدَسِيَّةِ الشَّامِلَةِ
                <span className="block text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-300 font-bold mt-2">
                  Engineering Chemistry Portal (CHM 001) • الفرقة الإعدادية
                </span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                أهلاً بك يا باشمهندس في البوابة الهندسية الرسمية لمادة الكيمياء. المقرر ينقسم أكاديمياً بهندسة شبرا إلى <strong className="text-white font-black">قسمين رئيسيين</strong>؛ اختر القسم الذي تود دراسته للدخول مباشرة إلى بيئة تعليمية مخصصة تضم كافة محاضراته، مسائله الحسابية، شيتات الـ A4، ومذكراته:
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2 text-xs">
                <span className="px-3 py-1 rounded-xl bg-slate-800/80 text-amber-300 border border-slate-700/80 font-bold">
                  🏛️ لائحة كلية الهندسة بشبرا
                </span>
                <span className="px-3 py-1 rounded-xl bg-slate-800/80 text-cyan-300 border border-slate-700/80 font-mono font-bold">
                  150 درجة إجمالية للمقرر
                </span>
                <span className="px-3 py-1 rounded-xl bg-slate-800/80 text-emerald-300 border border-slate-700/80 font-bold">
                  ✅ محتوى معتمد ومطابق لدفعة 2024 / 2025
                </span>
                <span className="px-3 py-1 rounded-xl bg-slate-800/80 text-purple-300 border border-slate-700/80 font-bold">
                  🌐 نظام ثنائي اللغة (مصطلحات إنجليزية + فك شفرة الفكرة بالعربي)
                </span>
              </div>
            </div>
          </div>

          {/* TWO MAIN DIVISION CARDS */}
          <div className="space-y-4">
            <div className="text-center sm:text-right">
              <h2 className="text-xl sm:text-2xl font-black text-white flex items-center justify-center sm:justify-start gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span>اختر قسم الكيمياء المطلوب للدخول إليه:</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                عند اختيار القسم، ستتفرغ جميع صفحات المنصة (المسائل، الشيتات، المعجم، الامتحانات، والمعمل) لعرض محتوى هذا القسم حصرياً.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* ================= CARD 1: THERMOCHEMISTRY & INDUSTRIAL ================= */}
              <div className="bg-gradient-to-br from-slate-900 via-slate-850 to-amber-950/40 rounded-3xl p-6 sm:p-8 border-2 border-amber-500/50 hover:border-amber-400 transition-all shadow-xl hover:shadow-amber-950/40 flex flex-col justify-between group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>

                <div className="space-y-5 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 text-white text-xs font-black flex items-center gap-1.5 shadow">
                      <Flame className="w-4 h-4 text-amber-200" />
                      <span>القسم الأول • د. هناء عبد الوهاب</span>
                    </span>
                    <span className="text-xs font-bold text-amber-400/90 font-mono">
                      4 وحدات دراسية
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-white group-hover:text-amber-300 transition-colors leading-snug">
                      الكيمياء الحرارية والتطبيقات الصناعية
                    </h3>
                    <p className="text-xs font-bold text-slate-400 mt-1">
                      إشراف: <span className="text-amber-300 font-black">أ.د. هناء عبد الوهاب</span> • أستاذ الكيمياء الهندسية بشبرا
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                    يشمل دراسة الديناميكا الحرارية وتطبيقات الطاقة الصناعية، معادلة دولونج ومسعر القنبلة، تكنولوجيا معالجة عسر المياه ومشاكل الغلايات، كيمياء الأسمنت ومواد البناء، والبوليمرات وزيوت التزييت.
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-bold text-amber-400 block">الوحدات والموضوعات المقررة في هذا القسم:</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <Droplets className="w-4 h-4 text-blue-400 shrink-0" />
                        <span>تكنولوجيا معالجة المياه وعسر الماء</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <Flame className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>الكيمياء الحرارية والوقود وهس ودولونج</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <Building2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>الأسمنت البورتلاندي ومركبات بوج و LSF</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <Layers className="w-4 h-4 text-purple-400 shrink-0" />
                        <span>البوليمرات واللدائن وزيوت التزييت</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    <span className="px-2.5 py-1 rounded-lg bg-amber-950/60 text-amber-300 text-[11px] font-bold border border-amber-800/50">
                      🧮 4 حاسبات ذكية (Lime-Soda, Dulong, Bogue, Enthalpy)
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 text-[11px] font-bold border border-slate-700">
                      🖨️ 4 شيتات A4 جاهزة للطباعة
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 text-[11px] font-bold border border-slate-700">
                      🧪 3 تجارب معملية (EDTA, Viscosity, Flash Point)
                    </span>
                  </div>

                  <div className="pt-2">
                    <div className="text-[11px] font-bold text-slate-400 mb-1.5">انتقال سريع لأدوات قسم د. هناء:</div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <button
                        onClick={() => handleSelectDivision('thermal', 'lab')}
                        className="px-2.5 py-1.5 rounded-xl bg-slate-900/90 hover:bg-amber-950 text-amber-300 border border-slate-700/80 text-[11px] font-bold transition flex items-center justify-center gap-1 shadow-sm"
                      >
                        <Calculator className="w-3.5 h-3.5" />
                        <span>حاسبات القسم</span>
                      </button>
                      <button
                        onClick={() => handleSelectDivision('thermal', 'cheatsheets')}
                        className="px-2.5 py-1.5 rounded-xl bg-slate-900/90 hover:bg-emerald-950 text-emerald-300 border border-slate-700/80 text-[11px] font-bold transition flex items-center justify-center gap-1 shadow-sm"
                      >
                        <Printer className="w-3.5 h-3.5" />
                        <span>شيتات A4</span>
                      </button>
                      <button
                        onClick={() => handleSelectDivision('thermal', 'quiz')}
                        className="px-2.5 py-1.5 rounded-xl bg-slate-900/90 hover:bg-blue-950 text-blue-300 border border-slate-700/80 text-[11px] font-bold transition flex items-center justify-center gap-1 shadow-sm"
                      >
                        <Award className="w-3.5 h-3.5" />
                        <span>بنك الأسئلة</span>
                      </button>
                      <button
                        onClick={() => handleSelectDivision('thermal', 'materials')}
                        className="px-2.5 py-1.5 rounded-xl bg-slate-900/90 hover:bg-rose-950 text-rose-300 border border-slate-700/80 text-[11px] font-bold transition flex items-center justify-center gap-1 shadow-sm"
                      >
                        <FolderArchive className="w-3.5 h-3.5" />
                        <span>مذكرات د. هناء</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800">
                  <button
                    onClick={() => handleSelectDivision('thermal', 'syllabus')}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-500 hover:to-orange-500 text-white font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-amber-950/60 transition-all active:scale-[0.98] group-hover:shadow-amber-500/20"
                  >
                    <span>دخول قسم الكيمياء الحرارية والصناعية</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-[-4px] transition-transform" />
                  </button>
                </div>
              </div>

              {/* ================= CARD 2: ELECTROCHEMISTRY & CORROSION ================= */}
              <div className="bg-gradient-to-br from-slate-900 via-slate-850 to-cyan-950/40 rounded-3xl p-6 sm:p-8 border-2 border-cyan-500/50 hover:border-cyan-400 transition-all shadow-xl hover:shadow-cyan-950/40 flex flex-col justify-between group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>

                <div className="space-y-5 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-xs font-black flex items-center gap-1.5 shadow">
                      <Zap className="w-4 h-4 text-cyan-200" />
                      <span>القسم الثاني • د. سمر عبد الحميد</span>
                    </span>
                    <span className="text-xs font-bold text-cyan-400/90 font-mono">
                      وحدتان دراسيتان
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-white group-hover:text-cyan-300 transition-colors leading-snug">
                      الكيمياء الكهربية وتطبيقات التآكل والصدأ
                    </h3>
                    <p className="text-xs font-bold text-slate-400 mt-1">
                      إشراف: <span className="text-cyan-300 font-black">أ.د. سمر عبد الحميد</span> • أستاذ الكيمياء الهندسية بشبرا
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                    يشمل دراسة الخلايا الجلفانية والإلكتروليتية، متسلسلة الجهود القياسية وقوة الدفع الكهربية EMF، معادلة نيرنست، طاقة جيبس الحرة، ميكانيكية التآكل الكهروكيميائي، والحماية الكاثودية والأنودية ومثبطات التآكل.
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-bold text-cyan-400 block">الوحدات والموضوعات المقررة في هذا القسم:</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>الخلايا الجلفانية ومعادلة نيرنست وطاقة جيبس</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                        <span>ميكانيكية التآكل والصدأ والحماية الكاثودية</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    <span className="px-2.5 py-1 rounded-lg bg-cyan-950/60 text-cyan-300 text-[11px] font-bold border border-cyan-800/50">
                      🧮 2 حاسبة ذكية (Nernst, Gibbs Free Energy)
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 text-[11px] font-bold border border-slate-700">
                      🖨️ 2 شيت A4 مركز للتآكل ونيرنست
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 text-[11px] font-bold border border-slate-700">
                      🧪 تجربة محاكاة التآكل والطلاء الكهربي
                    </span>
                  </div>

                  <div className="pt-2">
                    <div className="text-[11px] font-bold text-slate-400 mb-1.5">انتقال سريع لأدوات قسم د. سمر:</div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <button
                        onClick={() => handleSelectDivision('electro', 'lab')}
                        className="px-2.5 py-1.5 rounded-xl bg-slate-900/90 hover:bg-cyan-950 text-cyan-300 border border-slate-700/80 text-[11px] font-bold transition flex items-center justify-center gap-1 shadow-sm"
                      >
                        <Calculator className="w-3.5 h-3.5" />
                        <span>حاسبات القسم</span>
                      </button>
                      <button
                        onClick={() => handleSelectDivision('electro', 'cheatsheets')}
                        className="px-2.5 py-1.5 rounded-xl bg-slate-900/90 hover:bg-emerald-950 text-emerald-300 border border-slate-700/80 text-[11px] font-bold transition flex items-center justify-center gap-1 shadow-sm"
                      >
                        <Printer className="w-3.5 h-3.5" />
                        <span>شيتات A4</span>
                      </button>
                      <button
                        onClick={() => handleSelectDivision('electro', 'quiz')}
                        className="px-2.5 py-1.5 rounded-xl bg-slate-900/90 hover:bg-blue-950 text-blue-300 border border-slate-700/80 text-[11px] font-bold transition flex items-center justify-center gap-1 shadow-sm"
                      >
                        <Award className="w-3.5 h-3.5" />
                        <span>بنك الأسئلة</span>
                      </button>
                      <button
                        onClick={() => handleSelectDivision('electro', 'materials')}
                        className="px-2.5 py-1.5 rounded-xl bg-slate-900/90 hover:bg-rose-950 text-rose-300 border border-slate-700/80 text-[11px] font-bold transition flex items-center justify-center gap-1 shadow-sm"
                      >
                        <FolderArchive className="w-3.5 h-3.5" />
                        <span>مذكرات د. سمر</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800">
                  <button
                    onClick={() => handleSelectDivision('electro', 'syllabus')}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 hover:from-cyan-500 hover:to-blue-500 text-white font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-cyan-950/60 transition-all active:scale-[0.98] group-hover:shadow-cyan-500/20"
                  >
                    <span>دخول قسم الكيمياء الكهربية والتآكل</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-[-4px] transition-transform" />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* CARD 3: UNIFIED CHEMISTRY PORTAL */}
          <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 rounded-3xl p-6 sm:p-8 border-2 border-slate-700/80 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-right">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-cyan-300 text-xs font-bold border border-slate-700">
                <Sparkles className="w-3.5 h-3.5" />
                <span>مراجعة شاملة للفاينال (Unified Final Exam Review)</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                تصفح منهج الكيمياء كاملاً (القسمان معاً)
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-2xl font-normal leading-relaxed">
                إذا كنت في فترة مراجعة ليلة الامتحان أو ترغب في استعراض موسوعة المنهج وشيتات القوانين والمعمل وحاسبات حل المسائل دون تصفية مسبقة، يمكنك الدخول مباشرة إلى الوضع الشامل.
              </p>
            </div>

            <button
              onClick={() => handleSelectDivision('all', 'syllabus')}
              className="px-6 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-black text-xs sm:text-sm border border-slate-600 transition flex items-center gap-2 shrink-0 shadow-md"
            >
              <span>دخول المنهج الشامل للكيمياء (6 وحدات)</span>
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}

    </div>
  );
}
