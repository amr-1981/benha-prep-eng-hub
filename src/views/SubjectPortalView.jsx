import React, { useState } from 'react';
import { 
  Flame, Zap, Sparkles, BookOpen, Calculator, Printer, TestTube, 
  Award, FolderArchive, ArrowRight, CheckCircle2, GraduationCap, 
  ShieldAlert, Droplets, Building2, Layers, ChevronRight, Info, Grid, Binary, Compass, ArrowLeft,
  FileText, Mail, FileEdit, Scissors, Repeat, Cpu, Activity, Lightbulb 
} from 'lucide-react';
import { FACULTY_INFO } from '../data/chemistryCurriculumData';

export default function SubjectPortalView({ 
  subject = 'math', 
  onSelectDivision, 
  onBackToMainHub 
}) {
  const isMath = subject === 'math';
  const isChemistry = subject === 'chemistry';
  const isEnglish = subject === 'english';

  const [expandedArabicDivisions, setExpandedArabicDivisions] = useState(new Set());

  const toggleArabicDivision = (divId) => {
    setExpandedArabicDivisions(prev => {
      const next = new Set(prev);
      if (next.has(divId)) next.delete(divId);
      else next.add(divId);
      return next;
    });
  };

  return (
    <div className="space-y-8 pb-16 font-arabic animate-in fade-in duration-300">
      
      {/* 1. Top Breadcrumb & Return to Main Hub */}
      <div className="flex items-center justify-between gap-3 p-3.5 bg-slate-900/90 rounded-2xl border border-slate-800 shadow-lg">
        <div className="flex items-center gap-2 text-xs text-slate-300 font-bold" dir="ltr">
          <button
            onClick={onBackToMainHub}
            className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition font-black"
          >
            <span>الصفحة الرئيسية</span>
          </button>
          <span className="text-slate-600">/</span>
          <span className="text-white font-mono font-black">
            {isMath ? 'Engineering Mathematics 1 (MTH 001)' : isChemistry ? 'Engineering Chemistry (CHM 001)' : 'Technical English (HUM 001)'}
          </span>
        </div>

        <button
          onClick={onBackToMainHub}
          className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-bold border border-slate-700 transition flex items-center gap-1.5 shrink-0"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-cyan-400" />
          <span>العودة إلى الصفحة الرئيسية</span>
        </button>
      </div>

      {/* ======================================================== */}
      {/* SUBJECT 1: ENGINEERING MATHEMATICS 1 (MTH 001)           */}
      {/* ======================================================== */}
      {isMath && (
        <div className="space-y-8">
          
          {/* Main Subject Welcome Hero (English-First with Academic Context) */}
          <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-10 border-2 border-indigo-500/40 shadow-2xl relative overflow-hidden text-left" dir="ltr">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

            <div className="relative z-10 space-y-4 max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold border border-indigo-400/30">
                <Calculator className="w-4 h-4 text-cyan-400" />
                <span>MTH 001 • Engineering Mathematics 1 Academic Portal • Shoubra</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight font-mono">
                ENGINEERING MATHEMATICS 1
                <span className="block text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-300 font-bold mt-2">
                  Calculus, Higher Derivatives, Linear Algebra & 3D Analytical Geometry • 150 Marks
                </span>
              </h1>

              <p className="text-xs font-bold text-amber-300" dir="rtl">
                الصفحة الرئيسية لمادة الرياضيات 1 • كلية الهندسة بشبرا (جامعة بنها)
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                Welcome to the Engineering Mathematics 1 Academic Portal at Shoubra Engineering. The accredited curriculum is structurally split into two independent academic branches. Select a branch below to enter its dedicated academic environment with full syllabus modules, step-by-step solvers, printable cheat sheets, and past exam questions:
              </p>

              <div className="flex flex-wrap items-center justify-start gap-2.5 pt-2 text-xs">
                <span className="px-3 py-1 rounded-xl bg-slate-800/80 text-amber-300 border border-slate-700/80 font-bold">
                  🏛️ Course Code: MTH 001
                </span>
                <span className="px-3 py-1 rounded-xl bg-slate-800/80 text-cyan-300 border border-slate-700/80 font-mono font-bold">
                  150 Total Marks (90 Final + 30 Midterm + 30 Coursework)
                </span>
                <span className="px-3 py-1 rounded-xl bg-slate-800/80 text-emerald-300 border border-slate-700/80 font-bold">
                  ✅ English-First with On-Demand Arabic Explanations
                </span>
              </div>
            </div>
          </div>

          {/* TWO MAIN BRANCH CARDS ONLY */}
          <div className="space-y-4">
            <div className="text-left" dir="ltr">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-400" />
                <h2 className="text-xl sm:text-2xl font-black text-white font-mono uppercase tracking-wide">
                  Academic Branches & Divisions (Select to Enter)
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Upon selecting a branch, you enter its dedicated workspace with zero interference from other branches or courses.
              </p>
              <p className="text-xs text-amber-300 font-bold mt-1" dir="rtl">
                أقسام مادة الرياضيات 1 (اضغط للدخول المباشر إلى القسم):
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* ================= CARD 1: CALCULUS BRANCH ================= */}
              <div className="bg-gradient-to-br from-slate-900 via-slate-850 to-blue-950/40 rounded-3xl p-6 sm:p-8 border-2 border-blue-500/50 hover:border-blue-400 transition-all shadow-xl hover:shadow-blue-950/40 flex flex-col justify-between group relative overflow-hidden text-left" dir="ltr">
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>

                <div className="space-y-5 relative z-10">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-black flex items-center gap-1.5 shadow font-mono">
                      <Binary className="w-4 h-4 text-cyan-200" />
                      <span>Branch 1 • Differential Calculus & Applications</span>
                    </span>

                    <button
                      onClick={() => toggleArabicDivision('calculus')}
                      className={`px-2.5 py-1 rounded-xl text-[11px] font-bold transition flex items-center gap-1.5 border ${
                        expandedArabicDivisions.has('calculus')
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                          : 'bg-slate-900 text-amber-400/90 hover:text-amber-300 border-slate-700 hover:border-amber-500/40'
                      }`}
                    >
                      <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                      <span>{expandedArabicDivisions.has('calculus') ? 'إخفاء الشرح' : '💡 الشرح بالعربي'}</span>
                    </button>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-white group-hover:text-cyan-300 transition-colors leading-snug font-mono">
                      Differential Calculus & Engineering Applications
                    </h3>
                    <p className="text-xs font-bold text-slate-400 mt-1" dir="rtl">
                      قسم حساب التفاضل والتطبيقات • <span className="text-cyan-300 font-black">قسم الرياضيات والفيزياء الهندسية بشبرا</span>
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal font-mono">
                    Covers advanced functions and limits, L'Hôpital's rule for indeterminate forms, higher-order derivatives and Leibniz's product rule for nth derivatives, Taylor and Maclaurin expansions, curve tracing, asymptotes, curvature, and partial differentiation via Euler's theorem.
                  </p>

                  {/* On-Demand Arabic Explanation Drawer */}
                  {expandedArabicDivisions.has('calculus') && (
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-950/25 to-slate-900/95 border border-amber-500/40 text-right space-y-1.5 animate-in fade-in duration-200" dir="rtl">
                      <div className="flex items-center gap-1.5 text-xs font-black text-amber-300 border-b border-amber-500/20 pb-1">
                        <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                        <span>💡 الفهم والتوجيه الأكاديمي بالعربي لقسم التفاضل:</span>
                      </div>
                      <p className="text-xs text-slate-200 leading-relaxed font-medium">
                        يشمل دراسة مجالات الدوال والنهايات المتقدمة وقاعدة لوبيتال، المشتقات العليا والمشتقة النونية بحاصل ضرب لايبنتز، متسلسلات تايلور وماكلورين، رسم المنحنيات وخطوط التقارب والانحناء، والاشتقاق الجزئي ونظرية أويلر للدوال المتجانسة.
                      </p>
                    </div>
                  )}

                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-bold text-cyan-400 block font-mono uppercase tracking-wider">
                      Accredited Academic Modules:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <Binary className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>Functions, Limits & L'Hôpital's Rule</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <Calculator className="w-4 h-4 text-blue-400 shrink-0" />
                        <span>Higher Derivatives & Leibniz Formula</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <Layers className="w-4 h-4 text-indigo-400 shrink-0" />
                        <span>Taylor & Maclaurin Series Expansions</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <Compass className="w-4 h-4 text-purple-400 shrink-0" />
                        <span>Curve Tracing, Curvature & Partial Derivs</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    <span className="px-2.5 py-1 rounded-lg bg-blue-950/60 text-cyan-300 text-[11px] font-bold border border-blue-800/50 font-mono">
                      🧮 Step-by-Step Leibniz Derivative Solver
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 text-[11px] font-bold border border-slate-700 font-mono">
                      🖨️ Printable A4 Calculus Cheat Sheets
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 text-[11px] font-bold border border-slate-700 font-mono">
                      📝 Shoubra Past MCQ Exam Bank
                    </span>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800">
                  <button
                    onClick={() => onSelectDivision('calculus')}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-blue-950/60 transition-all active:scale-[0.98] group-hover:shadow-blue-500/20 font-mono"
                  >
                    <span>Enter Differential Calculus Branch</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* ================= CARD 2: ALGEBRA & 3D GEOMETRY BRANCH ================= */}
              <div className="bg-gradient-to-br from-slate-900 via-slate-850 to-indigo-950/40 rounded-3xl p-6 sm:p-8 border-2 border-indigo-500/50 hover:border-indigo-400 transition-all shadow-xl hover:shadow-indigo-950/40 flex flex-col justify-between group relative overflow-hidden text-left" dir="ltr">
                <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none"></div>

                <div className="space-y-5 relative z-10">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-black flex items-center gap-1.5 shadow font-mono">
                      <Grid className="w-4 h-4 text-purple-200" />
                      <span>Branch 2 • Linear Algebra & 3D Geometry</span>
                    </span>

                    <button
                      onClick={() => toggleArabicDivision('algebra')}
                      className={`px-2.5 py-1 rounded-xl text-[11px] font-bold transition flex items-center gap-1.5 border ${
                        expandedArabicDivisions.has('algebra')
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                          : 'bg-slate-900 text-amber-400/90 hover:text-amber-300 border-slate-700 hover:border-amber-500/40'
                      }`}
                    >
                      <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                      <span>{expandedArabicDivisions.has('algebra') ? 'إخفاء الشرح' : '💡 الشرح بالعربي'}</span>
                    </button>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-white group-hover:text-purple-300 transition-colors leading-snug font-mono">
                      Linear Algebra & 3D Analytical Geometry
                    </h3>
                    <p className="text-xs font-bold text-slate-400 mt-1" dir="rtl">
                      الجبر الخطي والهندسة الفراغية • <span className="text-purple-300 font-black">قسم الرياضيات الهندسية بشبرا</span>
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal font-mono">
                    Covers matrix algebra, determinants, Gauss-Jordan elimination, matrix rank and linear system consistency, complex numbers in polar/exponential forms, De Moivre's theorem and roots of unity, mathematical induction, binomial theorem for any index, and 3D spatial analytical geometry of planes, lines, and spheres.
                  </p>

                  {/* On-Demand Arabic Explanation Drawer */}
                  {expandedArabicDivisions.has('algebra') && (
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-950/25 to-slate-900/95 border border-amber-500/40 text-right space-y-1.5 animate-in fade-in duration-200" dir="rtl">
                      <div className="flex items-center gap-1.5 text-xs font-black text-amber-300 border-b border-amber-500/20 pb-1">
                        <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                        <span>💡 الفهم والتوجيه الأكاديمي بالعربي لقسم الجبر والفراغية:</span>
                      </div>
                      <p className="text-xs text-slate-200 leading-relaxed font-medium">
                        يشمل دراسة مصفوفات 3×3 والمحددات وحذف غاوس-جوردان، رتبة المصفوفة والأنظمة الخطية، الأعداد المركبة ونظرية ديموافر وجذور الوحدة، نظرية ذات الحدين والاستقراء الرياضي، والهندسة التحليلية في الفراغ ثلاثي الأبعاد ومعادلات المستويات والمستقيمات والكرة.
                      </p>
                    </div>
                  )}

                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-bold text-purple-400 block font-mono uppercase tracking-wider">
                      Accredited Academic Modules:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <Grid className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>Matrices, Gauss-Jordan & Matrix Rank</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <Sparkles className="w-4 h-4 text-purple-400 shrink-0" />
                        <span>Complex Numbers & De Moivre Theorem</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <Layers className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Mathematical Induction & Binomial Series</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <Compass className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>3D Spatial Geometry & Plane Equations</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    <span className="px-2.5 py-1 rounded-lg bg-indigo-950/60 text-purple-300 text-[11px] font-bold border border-indigo-800/50 font-mono">
                      🧮 3x3 Matrix, Rank & Inverse Solver
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 text-[11px] font-bold border border-slate-700 font-mono">
                      ⚡ De Moivre & nth Roots Calculator
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 text-[11px] font-bold border border-slate-700 font-mono">
                      📐 3D Plane Equation & Distance Solver
                    </span>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800">
                  <button
                    onClick={() => onSelectDivision('algebra')}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 hover:from-indigo-500 hover:to-purple-500 text-white font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-indigo-950/60 transition-all active:scale-[0.98] group-hover:shadow-indigo-500/20 font-mono"
                  >
                    <span>Enter Linear Algebra & 3D Geometry Branch</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      )}

      {/* ======================================================== */}
      {/* SUBJECT 2: ENGINEERING CHEMISTRY (CHM 001)               */}
      {/* ======================================================== */}
      {isChemistry && (
        <div className="space-y-8">
          
          {/* Main Subject Welcome Hero */}
          <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-10 border-2 border-indigo-500/40 shadow-2xl relative overflow-hidden text-left" dir="ltr">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

            <div className="relative z-10 space-y-4 max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold border border-cyan-400/30">
                <TestTube className="w-4 h-4 text-emerald-400" />
                <span>CHM 001 • Engineering Chemistry Academic Portal • Shoubra</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight font-mono">
                ENGINEERING CHEMISTRY
                <span className="block text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-300 font-bold mt-2">
                  Thermochemistry, Industrial Water, Fuels, Cement, Polymers & Corrosion • 150 Marks
                </span>
              </h1>

              <p className="text-xs font-bold text-amber-300" dir="rtl">
                الصفحة الرئيسية لمادة الكيمياء الهندسية • كلية الهندسة بشبرا (جامعة بنها)
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                Welcome to the Engineering Chemistry Academic Portal at Shoubra Engineering. The accredited curriculum is divided into two distinct academic divisions. Select a division below to access its dedicated lectures, formula sheets, virtual calculators, and past exam questions:
              </p>

              <div className="flex flex-wrap items-center justify-start gap-2.5 pt-2 text-xs">
                <span className="px-3 py-1 rounded-xl bg-slate-800/80 text-amber-300 border border-slate-700/80 font-bold">
                  🏛️ Course Code: CHM 001
                </span>
                <span className="px-3 py-1 rounded-xl bg-slate-800/80 text-cyan-300 border border-slate-700/80 font-mono font-bold">
                  150 Total Marks (90 Final + 30 Practical + 30 Coursework)
                </span>
                <span className="px-3 py-1 rounded-xl bg-slate-800/80 text-emerald-300 border border-slate-700/80 font-bold">
                  ✅ Approved 2024 / 2025 Syllabus
                </span>
              </div>
            </div>
          </div>

          {/* TWO MAIN DIVISION CARDS ONLY */}
          <div className="space-y-4">
            <div className="text-left" dir="ltr">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <h2 className="text-xl sm:text-2xl font-black text-white font-mono uppercase tracking-wide">
                  Academic Divisions (Select to Enter)
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Select an academic division to enter its 100% isolated workspace.
              </p>
              <p className="text-xs text-amber-300 font-bold mt-1" dir="rtl">
                أقسام مادة الكيمياء الهندسية (اضغط للدخول المباشر إلى القسم):
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* ================= CARD 1: THERMOCHEMISTRY & INDUSTRIAL ================= */}
              <div className="bg-gradient-to-br from-slate-900 via-slate-850 to-amber-950/40 rounded-3xl p-6 sm:p-8 border-2 border-amber-500/50 hover:border-amber-400 transition-all shadow-xl hover:shadow-amber-950/40 flex flex-col justify-between group relative overflow-hidden text-left" dir="ltr">
                <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>

                <div className="space-y-5 relative z-10">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 text-white text-xs font-black flex items-center gap-1.5 shadow font-mono">
                      <Flame className="w-4 h-4 text-amber-200" />
                      <span>Division 1 • Prof. Dr. Hanaa Abdelwahaab</span>
                    </span>

                    <button
                      onClick={() => toggleArabicDivision('thermal')}
                      className={`px-2.5 py-1 rounded-xl text-[11px] font-bold transition flex items-center gap-1.5 border ${
                        expandedArabicDivisions.has('thermal')
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                          : 'bg-slate-900 text-amber-400/90 hover:text-amber-300 border-slate-700 hover:border-amber-500/40'
                      }`}
                    >
                      <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                      <span>{expandedArabicDivisions.has('thermal') ? 'إخفاء الشرح' : '💡 الشرح بالعربي'}</span>
                    </button>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-white group-hover:text-amber-300 transition-colors leading-snug font-mono">
                      Thermal, Fuels & Industrial Materials Chemistry
                    </h3>
                    <p className="text-xs font-bold text-slate-400 mt-1" dir="rtl">
                      الكيمياء الحرارية والتطبيقات الصناعية • <span className="text-amber-300 font-black">أ.د. هناء عبد الوهاب</span>
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal font-mono">
                    In-depth study of industrial water conditioning, Lime-Soda softening calculations, boiler troubles, solid/liquid fuel combustion, Hess and Dulong calorific formulas, Portland cement phase chemistry (Bogue compounds), and polymer engineering.
                  </p>

                  {/* On-Demand Arabic Explanation Drawer */}
                  {expandedArabicDivisions.has('thermal') && (
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-950/25 to-slate-900/95 border border-amber-500/40 text-right space-y-1.5 animate-in fade-in duration-200" dir="rtl">
                      <div className="flex items-center gap-1.5 text-xs font-black text-amber-300 border-b border-amber-500/20 pb-1">
                        <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                        <span>💡 الفهم والتوجيه الأكاديمي بالعربي لقسم د. هناء:</span>
                      </div>
                      <p className="text-xs text-slate-200 leading-relaxed font-medium">
                        يشمل دراسة تكنولوجيا معالجة عسر المياه ومشاكل الغلايات، الديناميكا الحرارية والوقود وهس ودولونج، كيمياء الأسمنت البورتلاندي ومركبات بوج، والبوليمرات وزيوت التزييت والتشحيم.
                      </p>
                    </div>
                  )}

                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-bold text-amber-400 block font-mono uppercase tracking-wider">
                      Accredited Academic Modules:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <Droplets className="w-4 h-4 text-blue-400 shrink-0" />
                        <span>Water Treatment & Lime-Soda Softening</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <Flame className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>Fuels, Combustion & Dulong Calorific Laws</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <Building2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Portland Cement Clinker & Bogue Phases</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <Layers className="w-4 h-4 text-purple-400 shrink-0" />
                        <span>Polymers Classification & Lubricating Oils</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    <span className="px-2.5 py-1 rounded-lg bg-amber-950/60 text-amber-300 text-[11px] font-bold border border-amber-800/50 font-mono">
                      🧮 4 Virtual Solvers (Lime-Soda, Dulong, Bogue, Enthalpy)
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 text-[11px] font-bold border border-slate-700 font-mono">
                      🖨️ 4 Printable A4 Cheat Sheets
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 text-[11px] font-bold border border-slate-700 font-mono">
                      🧪 3 Virtual Lab Experiments (EDTA, Viscosity, Flash)
                    </span>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800">
                  <button
                    onClick={() => onSelectDivision('thermal')}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-500 hover:to-orange-500 text-white font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-amber-950/60 transition-all active:scale-[0.98] group-hover:shadow-amber-500/20 font-mono"
                  >
                    <span>Enter Thermal & Industrial Chemistry Division</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* ================= CARD 2: ELECTROCHEMISTRY & CORROSION ================= */}
              <div className="bg-gradient-to-br from-slate-900 via-slate-850 to-cyan-950/40 rounded-3xl p-6 sm:p-8 border-2 border-cyan-500/50 hover:border-cyan-400 transition-all shadow-xl hover:shadow-cyan-950/40 flex flex-col justify-between group relative overflow-hidden text-left" dir="ltr">
                <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>

                <div className="space-y-5 relative z-10">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-xs font-black flex items-center gap-1.5 shadow font-mono">
                      <Zap className="w-4 h-4 text-cyan-200" />
                      <span>Division 2 • Prof. Dr. Samar Abdelhamed</span>
                    </span>

                    <button
                      onClick={() => toggleArabicDivision('electro')}
                      className={`px-2.5 py-1 rounded-xl text-[11px] font-bold transition flex items-center gap-1.5 border ${
                        expandedArabicDivisions.has('electro')
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                          : 'bg-slate-900 text-amber-400/90 hover:text-amber-300 border-slate-700 hover:border-amber-500/40'
                      }`}
                    >
                      <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                      <span>{expandedArabicDivisions.has('electro') ? 'إخفاء الشرح' : '💡 الشرح بالعربي'}</span>
                    </button>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-white group-hover:text-cyan-300 transition-colors leading-snug font-mono">
                      Electrochemistry & Corrosion Engineering
                    </h3>
                    <p className="text-xs font-bold text-slate-400 mt-1" dir="rtl">
                      الكيمياء الكهربية وهندسة التآكل والصدأ • <span className="text-cyan-300 font-black">أ.د. سمر عبد الحميد</span>
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal font-mono">
                    Comprehensive exploration of galvanic and electrolytic cells, standard electrode potentials, Nernst equation EMF calculations, thermodynamic Gibbs free energy, electrochemical rust mechanisms, and cathodic/anodic protection techniques.
                  </p>

                  {/* On-Demand Arabic Explanation Drawer */}
                  {expandedArabicDivisions.has('electro') && (
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-950/25 to-slate-900/95 border border-amber-500/40 text-right space-y-1.5 animate-in fade-in duration-200" dir="rtl">
                      <div className="flex items-center gap-1.5 text-xs font-black text-amber-300 border-b border-amber-500/20 pb-1">
                        <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                        <span>💡 الفهم والتوجيه الأكاديمي بالعربي لقسم د. سمر:</span>
                      </div>
                      <p className="text-xs text-slate-200 leading-relaxed font-medium">
                        يشمل دراسة الخلايا الجلفانية والإلكتروليتية، متسلسلة الجهود القياسية EMF، معادلة نيرنست، طاقة جيبس، ميكانيكية التآكل الكهروكيميائي، والحماية الكاثودية والأنودية ومثبطات التآكل.
                      </p>
                    </div>
                  )}

                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-bold text-cyan-400 block font-mono uppercase tracking-wider">
                      Accredited Academic Modules:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>Galvanic Cells, Nernst Equation & Gibbs Energy</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                        <span>Corrosion Mechanisms & Cathodic Protection</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    <span className="px-2.5 py-1 rounded-lg bg-cyan-950/60 text-cyan-300 text-[11px] font-bold border border-cyan-800/50 font-mono">
                      🧮 2 Virtual Solvers (Nernst EMF, Gibbs Free Energy)
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 text-[11px] font-bold border border-slate-700 font-mono">
                      🖨️ 2 Printable A4 Cheat Sheets
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 text-[11px] font-bold border border-slate-700 font-mono">
                      🧪 Virtual Corrosion Simulation & Electroplating
                    </span>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800">
                  <button
                    onClick={() => onSelectDivision('electro')}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 hover:from-cyan-500 hover:to-blue-500 text-white font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-cyan-950/60 transition-all active:scale-[0.98] group-hover:shadow-cyan-500/20 font-mono"
                  >
                    <span>Enter Electrochemistry & Corrosion Division</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      )}

      {/* ======================================================== */}
      {/* SUBJECT 3: TECHNICAL ENGLISH (HUM 001)                    */}
      {/* ======================================================== */}
      {isEnglish && (
        <div className="space-y-8">
          
          {/* Main Subject Welcome Hero */}
          <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 rounded-3xl p-6 sm:p-10 border-2 border-emerald-500/40 shadow-2xl relative overflow-hidden text-left" dir="ltr">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

            <div className="relative z-10 space-y-4 max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-400/30">
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>HUM 001 • Technical English & Report Writing Portal • Shoubra</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight font-mono">
                TECHNICAL ENGLISH & REPORT WRITING
                <span className="block text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 font-bold mt-2">
                  Engineering Etymology, Passive Voice Lab Style, Formal Reports & Technical Memos • 100 Marks
                </span>
              </h1>

              <p className="text-xs font-bold text-amber-300" dir="rtl">
                الصفحة الرئيسية لمادة اللغة الإنجليزية الفنية وإعداد التقارير • كلية الهندسة بشبرا (جامعة بنها)
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                Welcome to the Technical English and Engineering Communication Portal at Shoubra Engineering. The curriculum is structured into two core academic branches. Choose a branch below to explore its comprehensive syllabus, morphological decoders, interactive report builders, and past exam questions:
              </p>

              <div className="flex flex-wrap items-center justify-start gap-3 pt-2 text-xs">
                <span className="px-3 py-1 rounded-xl bg-slate-800 text-cyan-300 border border-slate-700 font-bold font-mono">
                  📖 10 Accredited Curriculum Modules
                </span>
                <span className="px-3 py-1 rounded-xl bg-slate-800 text-emerald-300 border border-slate-700 font-bold">
                  💡 On-Demand Arabic Explanations Available
                </span>
                <span className="px-3 py-1 rounded-xl bg-slate-800 text-amber-300 border border-slate-700 font-bold font-mono">
                  📝 Smart Report & Correspondence Builders
                </span>
              </div>
            </div>
          </div>

          {/* Department Cards Section */}
          <div className="space-y-4">
            <div className="text-left" dir="ltr">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-400" />
                <h2 className="text-xl sm:text-2xl font-black text-white font-mono uppercase tracking-wide">
                  Academic Branches (Select to Enter)
                </h2>
              </div>
              <p className="text-xs text-slate-400 font-normal">
                Notice: Upon entering either branch, you operate strictly within its isolated curriculum with zero cross-branch distractions.
              </p>
              <p className="text-xs text-amber-300 font-bold mt-1" dir="rtl">
                أقسام مادة اللغة الإنجليزية الفنية (اختر قسماً للدخول المباشر):
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* ======================================================== */}
              {/* DEPARTMENT 1: VOCABULARY & GRAMMAR                      */}
              {/* ======================================================== */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-850/95 border-2 border-emerald-500/40 hover:border-emerald-400 shadow-xl transition-all duration-300 flex flex-col justify-between group text-left" dir="ltr">
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="text-[11px] font-black text-emerald-300 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800/80 font-mono">
                      Branch 1 • 5 Curriculum Modules
                    </span>

                    <button
                      onClick={() => toggleArabicDivision('vocab_grammar')}
                      className={`px-2.5 py-1 rounded-xl text-[11px] font-bold transition flex items-center gap-1.5 border ${
                        expandedArabicDivisions.has('vocab_grammar')
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                          : 'bg-slate-900 text-amber-400/90 hover:text-amber-300 border-slate-700 hover:border-amber-500/40'
                      }`}
                    >
                      <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                      <span>{expandedArabicDivisions.has('vocab_grammar') ? 'إخفاء الشرح' : '💡 الشرح بالعربي'}</span>
                    </button>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-emerald-300 transition-colors mt-1 font-mono">
                      Technical Vocabulary & Engineering Grammar
                    </h3>
                    <p className="text-xs font-bold text-slate-400 mt-1" dir="rtl">
                      المصطلحات الفنية وقواعد الكتابة الهندسية • <span className="text-emerald-300 font-black">هندسة شبرا</span>
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal font-mono">
                    Focuses on morphological decoding of technical terms, disambiguating confusing engineering terms (Accuracy vs Precision), writing agentless passive procedures in lab reports, and expressing physical dimensions, tolerances, and cause-effect relationships.
                  </p>

                  {/* On-Demand Arabic Explanation Drawer */}
                  {expandedArabicDivisions.has('vocab_grammar') && (
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-950/25 to-slate-900/95 border border-amber-500/40 text-right space-y-1.5 animate-in fade-in duration-200" dir="rtl">
                      <div className="flex items-center gap-1.5 text-xs font-black text-amber-300 border-b border-amber-500/20 pb-1">
                        <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                        <span>💡 الفهم والتوجيه الأكاديمي بالعربي لقسم المصطلحات والقواعد:</span>
                      </div>
                      <p className="text-xs text-slate-200 leading-relaxed font-medium">
                        يركز على البادئات واللواحق (Prefixes & Suffixes)، التمييز بين المصطلحات المربكة (Accuracy vs Precision)، صياغة خطوات المعمل بالمبني للمجهول (Passive Voice)، وأدوات الربط (Due to, Therefore)، والتعبير عن الأبعاد والخواص الفيزيائية.
                      </p>
                    </div>
                  )}

                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-bold text-emerald-400 block font-mono uppercase tracking-wider">
                      Accredited Academic Modules:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <Scissors className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Prefixes, Suffixes & Etymological Roots</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <Repeat className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>Passive Voice in Laboratory Methodologies</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <Sparkles className="w-4 h-4 text-indigo-400 shrink-0" />
                        <span>Cause & Effect Technical Connectors</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <Compass className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>Dimensions, Tolerances & Units Formulations</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-950/60 text-emerald-300 text-[11px] font-bold border border-emerald-800/50 font-mono">
                      ✂️ Affix & Root Word Decoder
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 text-[11px] font-bold border border-slate-700 font-mono">
                      🔄 Active-to-Passive Lab Sentence Converter
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 text-[11px] font-bold border border-slate-700 font-mono">
                      🖨️ 2 High-Density Printable A4 Sheets
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 text-[11px] font-bold border border-slate-700 font-mono">
                      🏆 Past Exam MCQ Bank
                    </span>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800">
                  <button
                    onClick={() => onSelectDivision('vocab_grammar')}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-emerald-950/60 transition-all active:scale-[0.98] group-hover:shadow-emerald-500/20 font-mono"
                  >
                    <span>Enter Technical Vocabulary & Grammar Branch</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* ======================================================== */}
              {/* DEPARTMENT 2: TECHNICAL WRITING & REPORTS                */}
              {/* ======================================================== */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-850/95 border-2 border-cyan-500/40 hover:border-cyan-400 shadow-xl transition-all duration-300 flex flex-col justify-between group text-left" dir="ltr">
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="text-[11px] font-black text-cyan-300 bg-cyan-950 px-3 py-1 rounded-full border border-cyan-800/80 font-mono">
                      Branch 2 • 5 Curriculum Modules
                    </span>

                    <button
                      onClick={() => toggleArabicDivision('reports_writing')}
                      className={`px-2.5 py-1 rounded-xl text-[11px] font-bold transition flex items-center gap-1.5 border ${
                        expandedArabicDivisions.has('reports_writing')
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                          : 'bg-slate-900 text-amber-400/90 hover:text-amber-300 border-slate-700 hover:border-amber-500/40'
                      }`}
                    >
                      <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                      <span>{expandedArabicDivisions.has('reports_writing') ? 'إخفاء الشرح' : '💡 الشرح بالعربي'}</span>
                    </button>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-cyan-300 transition-colors mt-1 font-mono">
                      Technical Writing & Engineering Reports
                    </h3>
                    <p className="text-xs font-bold text-slate-400 mt-1" dir="rtl">
                      الكتابة الفنية وإعداد التقارير والمراسلات الرسمية • <span className="text-cyan-300 font-black">هندسة شبرا</span>
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal font-mono">
                    Covers the 10 structural sections of an engineering report, the 5-sentence standalone abstract model, 4-stage mechanism descriptions, process flow SOPs, and formal business emails and on-site incident memos.
                  </p>

                  {/* On-Demand Arabic Explanation Drawer */}
                  {expandedArabicDivisions.has('reports_writing') && (
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-950/25 to-slate-900/95 border border-amber-500/40 text-right space-y-1.5 animate-in fade-in duration-200" dir="rtl">
                      <div className="flex items-center gap-1.5 text-xs font-black text-amber-300 border-b border-amber-500/20 pb-1">
                        <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                        <span>💡 الفهم والتوجيه الأكاديمي بالعربي لقسم التقارير والمراسلات:</span>
                      </div>
                      <p className="text-xs text-slate-200 leading-relaxed font-medium">
                        يركز على الأجزاء العشرة القياسية للتقرير الفني، معادلة كتابة الملخص التنفيذي المستقل (Abstract)، النموذج الرباعي لوصف الأجهزة (Mechanism Description)، وتوثيق العمليات الصناعية والإيميلات والمذكرات الموقعية الرسمية.
                      </p>
                    </div>
                  )}

                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-bold text-cyan-400 block font-mono uppercase tracking-wider">
                      Accredited Academic Modules:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <FileText className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>10-Part Formal Technical Report Blueprint</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <Cpu className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>Mechanism & Technical Device Descriptions</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <Activity className="w-4 h-4 text-rose-400 shrink-0" />
                        <span>Process Flow & SOP Chronological Writing</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                        <span>Formal Business Emails & Site Incident Memos</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    <span className="px-2.5 py-1 rounded-lg bg-cyan-950/60 text-cyan-300 text-[11px] font-bold border border-cyan-800/50 font-mono">
                      📝 Standalone Abstract & Report Builder
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 text-[11px] font-bold border border-slate-700 font-mono">
                      ✉️ Formal Email & Incident Memo Generator
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 text-[11px] font-bold border border-slate-700 font-mono">
                      🖨️ 3 High-Density Printable A4 Sheets
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 text-[11px] font-bold border border-slate-700 font-mono">
                      🏆 Past Exam MCQ Bank
                    </span>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800">
                  <button
                    onClick={() => onSelectDivision('reports_writing')}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-600 via-teal-600 to-cyan-700 hover:from-cyan-500 hover:to-teal-500 text-white font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-cyan-950/60 transition-all active:scale-[0.98] group-hover:shadow-cyan-500/20 font-mono"
                  >
                    <span>Enter Technical Writing & Reports Branch</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      )}

    </div>
  );
}
