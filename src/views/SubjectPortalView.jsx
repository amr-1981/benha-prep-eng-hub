import React from 'react';
import { 
  Flame, Zap, Sparkles, BookOpen, Calculator, Printer, TestTube, 
  Award, FolderArchive, ArrowRight, CheckCircle2, GraduationCap, 
  ShieldAlert, Droplets, Building2, Layers, ChevronRight, Info, Grid, Binary, Compass, ArrowLeft,
  FileText, Mail, FileEdit, Scissors, Repeat 
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

  return (
    <div className="space-y-8 pb-16 font-arabic animate-in fade-in duration-300">
      
      {/* 1. Top Breadcrumb & Return to Main Hub */}
      <div className="flex items-center justify-between gap-3 p-3.5 bg-slate-900/90 rounded-2xl border border-slate-800 shadow-lg">
        <div className="flex items-center gap-2 text-xs text-slate-300 font-bold">
          <button
            onClick={onBackToMainHub}
            className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition font-black"
          >
            <span>الصفحة الرئيسية</span>
          </button>
          <span className="text-slate-600">/</span>
          <span className="text-white font-black">
            {isMath ? 'مادة الرياضيات 1 (MTH 001)' : isChemistry ? 'مادة الكيمياء الهندسية (CHM 001)' : 'مادة اللغة الإنجليزية الفنية (HUM 001)'}
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
          
          {/* Main Subject Welcome Hero */}
          <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-10 border-2 border-indigo-500/40 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

            <div className="relative z-10 space-y-4 max-w-4xl text-center md:text-right mx-auto md:mx-0">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold border border-indigo-400/30">
                <Calculator className="w-4 h-4 text-cyan-400" />
                <span>الصفحة الرئيسية لمادة الرياضيات 1 • هندسة شبرا (MTH 001)</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                مَنَصَّةُ الرِّيَاضِيَّاتِ 1 الهَنْدَسِيَّةِ
                <span className="block text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-300 font-bold mt-2">
                  Engineering Mathematics 1 (Calculus & Algebra) • 150 درجة
                </span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                أهلاً بك يا باشمهندس في الصفحة الرئيسية لمادة الرياضيات 1. المقرر ينقسم أكاديمياً بهندسة شبرا إلى <strong className="text-white font-black">قسمين رئيسيين</strong>؛ اضغط على كارت القسم المطلوب للدخول إليه حصرياً وتصفح كامل أدواته ومحاضراته وحاسباته دون أي تشتيت:
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 pt-2 text-xs">
                <span className="px-3 py-1 rounded-xl bg-slate-800/80 text-amber-300 border border-slate-700/80 font-bold">
                  🏛️ كود المادة: MTH 001
                </span>
                <span className="px-3 py-1 rounded-xl bg-slate-800/80 text-cyan-300 border border-slate-700/80 font-mono font-bold">
                  150 درجة (90 فاينال + 30 ميدتيرم + 30 أعمال سنة)
                </span>
                <span className="px-3 py-1 rounded-xl bg-slate-800/80 text-emerald-300 border border-slate-700/80 font-bold">
                  ✅ الإنجليزية أولاً مع زر الشرح بالعربي
                </span>
              </div>
            </div>
          </div>

          {/* TWO MAIN BRANCH CARDS ONLY */}
          <div className="space-y-4">
            <div className="text-center sm:text-right">
              <h2 className="text-xl sm:text-2xl font-black text-white flex items-center justify-center sm:justify-start gap-2">
                <Sparkles className="w-5 h-5 text-indigo-400" />
                <span>أقسام مادة الرياضيات 1 (اضغط للدخول إلى القسم):</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                عند اختيار القسم، ستدخل إلى بيئته الخاصة ولن يظهر لك أي محتوى أو أدوات لأي قسم آخر.
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
                      <span>القسم الأول • حساب التفاضل والتطبيقات</span>
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
                      Differential Calculus & Applications • <span className="text-cyan-300 font-black">قسم الرياضيات والفيزياء الهندسية</span>
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                    يشمل دراسة مجالات الدوال والنهايات المتقدمة وقاعدة لوبيتال، المشتقات العليا والمشتقة النونية بحاصل ضرب لايبنتز، متسلسلات تايلور وماكلورين، رسم المنحنيات وخطوط التقارب والانحناء، والاشتقاق الجزئي ونظرية أويلر.
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-bold text-cyan-400 block">المحتوى الأكاديمي الحصري لهذا القسم:</span>
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
                        <span>متسلسلات تايلور وماكلورين</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <Compass className="w-4 h-4 text-purple-400 shrink-0" />
                        <span>رسم المنحنيات وخطوط التقارب</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    <span className="px-2.5 py-1 rounded-lg bg-blue-950/60 text-cyan-300 text-[11px] font-bold border border-blue-800/50">
                      🧮 حاسبة مشتقة لايبنتز خطوة بخطوة
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 text-[11px] font-bold border border-slate-700">
                      🖨️ شيتات تفاضل A4 جاهزة للطباعة
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 text-[11px] font-bold border border-slate-700">
                      📝 بنك أسئلة MCQ لامتحانات التفاضل
                    </span>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800">
                  <button
                    onClick={() => onSelectDivision('calculus')}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-blue-950/60 transition-all active:scale-[0.98] group-hover:shadow-blue-500/20"
                  >
                    <span>الدخول إلى قسم حساب التفاضل والتطبيقات</span>
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
                      <span>القسم الثاني • الجبر والهندسة الفراغية</span>
                    </span>
                    <span className="text-xs font-bold text-purple-400/90 font-mono">
                      5 وحدات دراسية
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-white group-hover:text-purple-300 transition-colors leading-snug">
                      الجبر العام والهندسة الفراغية (Algebra & 3D)
                    </h3>
                    <p className="text-xs font-bold text-slate-400 mt-1">
                      Linear Algebra & Solid Geometry • <span className="text-purple-300 font-black">قسم الرياضيات الهندسية</span>
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                    يشمل دراسة المصفوفات والمحددات وحذف غاوس-جوردان، رتبة المصفوفة والأنظمة الخطية، الأعداد المركبة ونظرية ديموافر وجذور الوحدة، نظرية ذات الحدين والاستقراء الرياضي، ونظرية المعادلات، والهندسة التحليلية في الفراغ ثلاثي الأبعاد.
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-bold text-purple-400 block">المحتوى الأكاديمي الحصري لهذا القسم:</span>
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
                        <span>نظرية ذات الحدين والاستقراء</span>
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
                      📐 حاسبة مستويات الفراغ والمسافة
                    </span>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800">
                  <button
                    onClick={() => onSelectDivision('algebra')}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 hover:from-indigo-500 hover:to-purple-500 text-white font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-indigo-950/60 transition-all active:scale-[0.98] group-hover:shadow-indigo-500/20"
                  >
                    <span>الدخول إلى قسم الجبر والهندسة الفراغية</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-[-4px] transition-transform" />
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
          <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 rounded-3xl p-6 sm:p-10 border-2 border-emerald-500/40 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

            <div className="relative z-10 space-y-4 max-w-4xl text-center md:text-right mx-auto md:mx-0">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-400/30">
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>الصفحة الرئيسية لمادة اللغة الإنجليزية الفنية • هندسة شبرا (HUM 001)</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                مَنَصَّةُ اللُّغَةِ الإِنْجِلِيزِيَّةِ الفَنِّيَّةِ وَالتَّقَارِيرِ
                <span className="block text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 font-bold mt-2">
                  Technical English & Engineering Report Writing (HUM 001) • 100 درجة
                </span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                أهلاً بك في الصفحة الرئيسية لمقرر <strong className="text-white font-bold">اللغة الإنجليزية الفنية</strong> لإعدادي هندسة شبرا. تتكون المادة من <strong className="text-emerald-400 font-bold">قسمين أكاديميين معزولين تماماً</strong>؛ اختر القسم المراد أدناه للدخول إلى بيئته المستقلة بكافة مصطلحاته، قوالبه، حاسباته، شيتات الـ A4، وبنك امتحانات الفاينال:
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2 text-xs">
                <span className="px-3 py-1 rounded-xl bg-slate-800 text-cyan-300 border border-slate-700 font-bold">
                  📖 10 وحدات دراسية مبوبة
                </span>
                <span className="px-3 py-1 rounded-xl bg-slate-800 text-emerald-300 border border-slate-700 font-bold">
                  💡 الشرح بالعربي متاح في كل بطاقة
                </span>
                <span className="px-3 py-1 rounded-xl bg-slate-800 text-amber-300 border border-slate-700 font-bold">
                  📝 مولد تقارير وإيميلات ذكي
                </span>
              </div>
            </div>
          </div>

          {/* Department Cards Section */}
          <div className="space-y-4">
            <div className="text-center md:text-right space-y-1">
              <h2 className="text-xl sm:text-2xl font-black text-white flex items-center justify-center md:justify-start gap-2">
                <Sparkles className="w-5 h-5 text-emerald-400" />
                <span>أقسام مادة اللغة الإنجليزية الفنية (اختر قسماً للدخول):</span>
              </h2>
              <p className="text-xs text-slate-400 font-medium">
                تنبيه: عند الدخول إلى أي قسم، ستعمل داخل بيئته الأكاديمية المستقلة فقط دون أي تشتيت مع القسم الآخر.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* ======================================================== */}
              {/* DEPARTMENT 1: VOCABULARY & GRAMMAR                      */}
              {/* ======================================================== */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-850/95 border-2 border-emerald-500/40 hover:border-emerald-400 shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-black text-emerald-300 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800/80">
                      الفرع الأول • 5 وحدات
                    </span>
                    <span className="p-2.5 rounded-2xl bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
                      <BookOpen className="w-6 h-6" />
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-mono font-bold text-emerald-400 tracking-wider uppercase block">
                      Branch 1: Technical Vocabulary & Grammar
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-emerald-300 transition-colors mt-1">
                      المصطلحات الفنية وقواعد الكتابة الهندسية
                    </h3>
                    <p className="text-xs font-bold text-slate-400 mt-1">
                      اشتقاق المصطلحات من اللاتينية واليونانية، قواعد المبني للمجهول، وأدوات الربط والسببية
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                    يركز على البادئات واللواحق (Prefixes & Suffixes)، التمييز بين المصطلحات المربكة (Accuracy vs Precision)، صياغة خطوات المعمل بالمبني للمجهول (Passive Voice)، وأدوات الربط (Due to, Therefore)، والتعبير عن الأبعاد والخواص الفيزيائية.
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-bold text-emerald-400 block">المحتوى الأكاديمي الحصري للقسم:</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <Scissors className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>البادئات واللواحق والجذور (Affixes & Roots)</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <Repeat className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>المبني للمجهول لخطوات المعمل (Passive Voice)</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <Sparkles className="w-4 h-4 text-indigo-400 shrink-0" />
                        <span>أدوات السبب والنتيجة (Due to, Consequently)</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <Compass className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>صيغ الأبعاد والتفاوتات (Dimensions & Units)</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-950/60 text-emerald-300 text-[11px] font-bold border border-emerald-800/50">
                      ✂️ مفكك ومولد المصطلحات الهندسية
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 text-[11px] font-bold border border-slate-700">
                      🔄 محول المبني للمجهول التفاعلي
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 text-[11px] font-bold border border-slate-700">
                      🖨️ 2 شيت A4 مركز للطباعة
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 text-[11px] font-bold border border-slate-700">
                      🏆 8 أسئلة امتحانات سابقة
                    </span>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800">
                  <button
                    onClick={() => onSelectDivision('vocab_grammar')}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-emerald-950/60 transition-all active:scale-[0.98] group-hover:shadow-emerald-500/20"
                  >
                    <span>الدخول إلى قسم المصطلحات والقواعد الهندسية</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-[-4px] transition-transform" />
                  </button>
                </div>
              </div>

              {/* ======================================================== */}
              {/* DEPARTMENT 2: TECHNICAL WRITING & REPORTS                */}
              {/* ======================================================== */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-850/95 border-2 border-cyan-500/40 hover:border-cyan-400 shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-black text-cyan-300 bg-cyan-950 px-3 py-1 rounded-full border border-cyan-800/80">
                      الفرع الثاني • 5 وحدات
                    </span>
                    <span className="p-2.5 rounded-2xl bg-cyan-950/80 text-cyan-400 border border-cyan-800/60">
                      <FileEdit className="w-6 h-6" />
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-mono font-bold text-cyan-400 tracking-wider uppercase block">
                      Branch 2: Technical Writing & Reports
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-cyan-300 transition-colors mt-1">
                      الكتابة الفنية وإعداد التقارير والمراسلات
                    </h3>
                    <p className="text-xs font-bold text-slate-400 mt-1">
                      هيكل التقرير الهندسي الشامل، الملخص التنفيذي، وصف الأجهزة، والإيميلات والمذكرات
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                    يركز على الأجزاء العشرة القياسية للتقرير الفني، معادلة كتابة الملخص التنفيذي المستقل (Abstract)، النموذج الرباعي لوصف الأجهزة (Mechanism Description)، وتوثيق العمليات الصناعية والإيميلات والمذكرات الموقعية الرسمية.
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-bold text-cyan-400 block">المحتوى الأكاديمي الحصري للقسم:</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <FileText className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>هيكل التقرير والملخص (Report & Abstract)</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <Cpu className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>الوصف الفني للأجهزة (Mechanism Description)</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <Activity className="w-4 h-4 text-rose-400 shrink-0" />
                        <span>وصف العمليات والخطوات (Process Description)</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                        <span>الإيميلات والمذكرات الموقعية (Emails & Memos)</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    <span className="px-2.5 py-1 rounded-lg bg-cyan-950/60 text-cyan-300 text-[11px] font-bold border border-cyan-800/50">
                      📝 مساعد بناء التقارير والملخص التنفيذي
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 text-[11px] font-bold border border-slate-700">
                      ✉️ مولد الإيميلات والمذكرات الرسمية
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 text-[11px] font-bold border border-slate-700">
                      🖨️ 3 شيتات A4 للطباعة الفورية
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 text-[11px] font-bold border border-slate-700">
                      🏆 8 أسئلة امتحانات سابقة
                    </span>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800">
                  <button
                    onClick={() => onSelectDivision('reports_writing')}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-600 via-teal-600 to-cyan-700 hover:from-cyan-500 hover:to-teal-500 text-white font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-cyan-950/60 transition-all active:scale-[0.98] group-hover:shadow-cyan-500/20"
                  >
                    <span>الدخول إلى قسم الكتابة الفنية وإعداد التقارير</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-[-4px] transition-transform" />
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
          <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-10 border-2 border-indigo-500/40 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

            <div className="relative z-10 space-y-4 max-w-4xl text-center md:text-right mx-auto md:mx-0">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold border border-cyan-400/30">
                <TestTube className="w-4 h-4 text-emerald-400" />
                <span>الصفحة الرئيسية لمادة الكيمياء الهندسية • هندسة شبرا (CHM 001)</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                مَنَصَّةُ الكِيمْيَاءِ الهَنْدَسِيَّةِ
                <span className="block text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-300 font-bold mt-2">
                  Engineering Chemistry Portal (CHM 001) • 150 درجة
                </span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                أهلاً بك يا باشمهندس في الصفحة الرئيسية لمادة الكيمياء الهندسية. المقرر ينقسم أكاديمياً بهندسة شبرا إلى <strong className="text-white font-black">قسمين رئيسيين</strong>؛ اضغط على كارت القسم المطلوب للدخول إليه حصرياً وتصفح كامل أدواته ومعمله ومذكراته دون أي تشتيت:
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 pt-2 text-xs">
                <span className="px-3 py-1 rounded-xl bg-slate-800/80 text-amber-300 border border-slate-700/80 font-bold">
                  🏛️ كود المادة: CHM 001
                </span>
                <span className="px-3 py-1 rounded-xl bg-slate-800/80 text-cyan-300 border border-slate-700/80 font-mono font-bold">
                  150 درجة إجمالية للمقرر
                </span>
                <span className="px-3 py-1 rounded-xl bg-slate-800/80 text-emerald-300 border border-slate-700/80 font-bold">
                  ✅ محتوى معتمد ومطابق لدفعة 2024 / 2025
                </span>
              </div>
            </div>
          </div>

          {/* TWO MAIN DIVISION CARDS ONLY */}
          <div className="space-y-4">
            <div className="text-center sm:text-right">
              <h2 className="text-xl sm:text-2xl font-black text-white flex items-center justify-center sm:justify-start gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span>أقسام مادة الكيمياء الهندسية (اضغط للدخول إلى القسم):</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                عند اختيار القسم، ستدخل إلى بيئته الخاصة ولن يظهر لك أي محتوى أو أدوات لأي قسم آخر.
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
                    يشمل دراسة تكنولوجيا معالجة عسر المياه ومشاكل الغلايات، الديناميكا الحرارية والوقود وهس ودولونج، كيمياء الأسمنت البورتلاندي ومركبات بوج، والبوليمرات وزيوت التزييت والتشحيم.
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-bold text-amber-400 block">المحتوى الأكاديمي الحصري لقسم د. هناء:</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <Droplets className="w-4 h-4 text-blue-400 shrink-0" />
                        <span>تكنولوجيا معالجة المياه وعسر الماء</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <Flame className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>الكيمياء الحرارية والوقود ودولونج</span>
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
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800">
                  <button
                    onClick={() => onSelectDivision('thermal')}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-500 hover:to-orange-500 text-white font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-amber-950/60 transition-all active:scale-[0.98] group-hover:shadow-amber-500/20"
                  >
                    <span>الدخول إلى قسم الكيمياء الحرارية والصناعية</span>
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
                    يشمل دراسة الخلايا الجلفانية والإلكتروليتية، متسلسلة الجهود القياسية EMF، معادلة نيرنست، طاقة جيبس، ميكانيكية التآكل الكهروكيميائي، والحماية الكاثودية والأنودية ومثبطات التآكل.
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-bold text-cyan-400 block">المحتوى الأكاديمي الحصري لقسم د. سمر:</span>
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
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800">
                  <button
                    onClick={() => onSelectDivision('electro')}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 hover:from-cyan-500 hover:to-blue-500 text-white font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-cyan-950/60 transition-all active:scale-[0.98] group-hover:shadow-cyan-500/20"
                  >
                    <span>الدخول إلى قسم الكيمياء الكهربية والتآكل</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-[-4px] transition-transform" />
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
          <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 rounded-3xl p-6 sm:p-10 border-2 border-emerald-500/40 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

            <div className="relative z-10 space-y-4 max-w-4xl text-center md:text-right mx-auto md:mx-0">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-400/30">
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>الصفحة الرئيسية لمادة اللغة الإنجليزية الفنية • هندسة شبرا (HUM 001)</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                مَنَصَّةُ اللُّغَةِ الإِنْجِلِيزِيَّةِ الفَنِّيَّةِ وَالتَّقَارِيرِ
                <span className="block text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 font-bold mt-2">
                  Technical English & Engineering Report Writing (HUM 001) • 100 درجة
                </span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                أهلاً بك في الصفحة الرئيسية لمقرر <strong className="text-white font-bold">اللغة الإنجليزية الفنية</strong> لإعدادي هندسة شبرا. تتكون المادة من <strong className="text-emerald-400 font-bold">قسمين أكاديميين معزولين تماماً</strong>؛ اختر القسم المراد أدناه للدخول إلى بيئته المستقلة بكافة مصطلحاته، قوالبه، حاسباته، شيتات الـ A4، وبنك امتحانات الفاينال:
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2 text-xs">
                <span className="px-3 py-1 rounded-xl bg-slate-800 text-cyan-300 border border-slate-700 font-bold">
                  📖 10 وحدات دراسية مبوبة
                </span>
                <span className="px-3 py-1 rounded-xl bg-slate-800 text-emerald-300 border border-slate-700 font-bold">
                  💡 الشرح بالعربي متاح في كل بطاقة
                </span>
                <span className="px-3 py-1 rounded-xl bg-slate-800 text-amber-300 border border-slate-700 font-bold">
                  📝 مولد تقارير وإيميلات ذكي
                </span>
              </div>
            </div>
          </div>

          {/* Department Cards Section */}
          <div className="space-y-4">
            <div className="text-center md:text-right space-y-1">
              <h2 className="text-xl sm:text-2xl font-black text-white flex items-center justify-center md:justify-start gap-2">
                <Sparkles className="w-5 h-5 text-emerald-400" />
                <span>أقسام مادة اللغة الإنجليزية الفنية (اختر قسماً للدخول):</span>
              </h2>
              <p className="text-xs text-slate-400 font-medium">
                تنبيه: عند الدخول إلى أي قسم، ستعمل داخل بيئته الأكاديمية المستقلة فقط دون أي تشتيت مع القسم الآخر.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* ======================================================== */}
              {/* DEPARTMENT 1: VOCABULARY & GRAMMAR                      */}
              {/* ======================================================== */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-850/95 border-2 border-emerald-500/40 hover:border-emerald-400 shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-black text-emerald-300 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800/80">
                      الفرع الأول • 5 وحدات
                    </span>
                    <span className="p-2.5 rounded-2xl bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
                      <BookOpen className="w-6 h-6" />
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-mono font-bold text-emerald-400 tracking-wider uppercase block">
                      Branch 1: Technical Vocabulary & Grammar
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-emerald-300 transition-colors mt-1">
                      المصطلحات الفنية وقواعد الكتابة الهندسية
                    </h3>
                    <p className="text-xs font-bold text-slate-400 mt-1">
                      اشتقاق المصطلحات من اللاتينية واليونانية، قواعد المبني للمجهول، وأدوات الربط والسببية
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                    يركز على البادئات واللواحق (Prefixes & Suffixes)، التمييز بين المصطلحات المربكة (Accuracy vs Precision)، صياغة خطوات المعمل بالمبني للمجهول (Passive Voice)، وأدوات الربط (Due to, Therefore)، والتعبير عن الأبعاد والخواص الفيزيائية.
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-bold text-emerald-400 block">المحتوى الأكاديمي الحصري للقسم:</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <Scissors className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>البادئات واللواحق والجذور (Affixes & Roots)</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <Repeat className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>المبني للمجهول لخطوات المعمل (Passive Voice)</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <Sparkles className="w-4 h-4 text-indigo-400 shrink-0" />
                        <span>أدوات السبب والنتيجة (Due to, Consequently)</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <Compass className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>صيغ الأبعاد والتفاوتات (Dimensions & Units)</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-950/60 text-emerald-300 text-[11px] font-bold border border-emerald-800/50">
                      ✂️ مفكك ومولد المصطلحات الهندسية
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 text-[11px] font-bold border border-slate-700">
                      🔄 محول المبني للمجهول التفاعلي
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 text-[11px] font-bold border border-slate-700">
                      🖨️ 2 شيت A4 مركز للطباعة
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 text-[11px] font-bold border border-slate-700">
                      🏆 8 أسئلة امتحانات سابقة
                    </span>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800">
                  <button
                    onClick={() => onSelectDivision('vocab_grammar')}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-emerald-950/60 transition-all active:scale-[0.98] group-hover:shadow-emerald-500/20"
                  >
                    <span>الدخول إلى قسم المصطلحات والقواعد الهندسية</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-[-4px] transition-transform" />
                  </button>
                </div>
              </div>

              {/* ======================================================== */}
              {/* DEPARTMENT 2: TECHNICAL WRITING & REPORTS                */}
              {/* ======================================================== */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-850/95 border-2 border-cyan-500/40 hover:border-cyan-400 shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-black text-cyan-300 bg-cyan-950 px-3 py-1 rounded-full border border-cyan-800/80">
                      الفرع الثاني • 5 وحدات
                    </span>
                    <span className="p-2.5 rounded-2xl bg-cyan-950/80 text-cyan-400 border border-cyan-800/60">
                      <FileEdit className="w-6 h-6" />
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-mono font-bold text-cyan-400 tracking-wider uppercase block">
                      Branch 2: Technical Writing & Reports
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-cyan-300 transition-colors mt-1">
                      الكتابة الفنية وإعداد التقارير والمراسلات
                    </h3>
                    <p className="text-xs font-bold text-slate-400 mt-1">
                      هيكل التقرير الهندسي الشامل، الملخص التنفيذي، وصف الأجهزة، والإيميلات والمذكرات
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                    يركز على الأجزاء العشرة القياسية للتقرير الفني، معادلة كتابة الملخص التنفيذي المستقل (Abstract)، النموذج الرباعي لوصف الأجهزة (Mechanism Description)، وتوثيق العمليات الصناعية والإيميلات والمذكرات الموقعية الرسمية.
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-bold text-cyan-400 block">المحتوى الأكاديمي الحصري للقسم:</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <FileText className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>هيكل التقرير والملخص (Report & Abstract)</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <Cpu className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>الوصف الفني للأجهزة (Mechanism Description)</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <Activity className="w-4 h-4 text-rose-400 shrink-0" />
                        <span>وصف العمليات والخطوات (Process Description)</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                        <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                        <span>الإيميلات والمذكرات الموقعية (Emails & Memos)</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    <span className="px-2.5 py-1 rounded-lg bg-cyan-950/60 text-cyan-300 text-[11px] font-bold border border-cyan-800/50">
                      📝 مساعد بناء التقارير والملخص التنفيذي
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 text-[11px] font-bold border border-slate-700">
                      ✉️ مولد الإيميلات والمذكرات الرسمية
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 text-[11px] font-bold border border-slate-700">
                      🖨️ 3 شيتات A4 للطباعة الفورية
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 text-[11px] font-bold border border-slate-700">
                      🏆 8 أسئلة امتحانات سابقة
                    </span>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800">
                  <button
                    onClick={() => onSelectDivision('reports_writing')}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-600 via-teal-600 to-cyan-700 hover:from-cyan-500 hover:to-teal-500 text-white font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-cyan-950/60 transition-all active:scale-[0.98] group-hover:shadow-cyan-500/20"
                  >
                    <span>الدخول إلى قسم الكتابة الفنية وإعداد التقارير</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-[-4px] transition-transform" />
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
