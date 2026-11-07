import React from 'react';
import { 
  Flame, Zap, Sparkles, BookOpen, Calculator, Printer, TestTube, 
  Award, FolderArchive, ArrowRight, CheckCircle2, GraduationCap, 
  ShieldAlert, Droplets, Building2, Layers, ChevronLeft, Info
} from 'lucide-react';
import { FACULTY_INFO, CHEMISTRY_DIVISIONS } from '../data/chemistryCurriculumData';

export default function HomeView({ setActiveTab, setActiveDivision }) {
  const handleSelectDivision = (divisionId, targetTab = 'syllabus') => {
    setActiveDivision(divisionId);
    setActiveTab(targetTab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const thermalDivision = CHEMISTRY_DIVISIONS.find(d => d.id === 'thermal');
  const electroDivision = CHEMISTRY_DIVISIONS.find(d => d.id === 'electro');

  return (
    <div className="space-y-10 pb-16 font-arabic animate-in fade-in duration-300">
      
      {/* 1. Main Welcome Portal Hero */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-10 border-2 border-indigo-500/40 shadow-2xl relative overflow-hidden">
        {/* Subtle decorative glow */}
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
          </div>
        </div>
      </div>

      {/* 2. THE TWO MAIN DIVISION CARDS */}
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
              
              {/* Header Badge */}
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 text-white text-xs font-black flex items-center gap-1.5 shadow">
                  <Flame className="w-4 h-4 text-amber-200" />
                  <span>القسم الأول • د. هناء عبد الوهاب</span>
                </span>
                <span className="text-xs font-bold text-amber-400/90 font-mono">
                  4 وحدات دراسية
                </span>
              </div>

              {/* Title & Professor */}
              <div>
                <h3 className="text-2xl font-black text-white group-hover:text-amber-300 transition-colors leading-snug">
                  الكيمياء الحرارية والتطبيقات الصناعية
                </h3>
                <p className="text-xs font-bold text-slate-400 mt-1">
                  إشراف: <span className="text-amber-300 font-black">أ.د. هناء عبد الوهاب</span> • أستاذ الكيمياء الهندسية بشبرا
                </p>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                يشمل دراسة الديناميكا الحرارية وتطبيقات الطاقة الصناعية، معادلة دولونج ومسعر القنبلة، تكنولوجيا معالجة عسر المياه ومشاكل الغلايات، كيمياء الأسمنت ومواد البناء، والبوليمرات وزيوت التزييت.
              </p>

              {/* Topics Grid */}
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

              {/* Feature Highlights Pills */}
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
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 text-[11px] font-bold border border-slate-700">
                  📑 كشكول محاضرات د. هناء (19 صفحة)
                </span>
              </div>

              {/* Direct Jump Shortcuts for Thermal */}
              <div className="pt-2">
                <div className="text-[11px] font-bold text-slate-400 mb-1.5">انتقال سريع لأدوات قسم د. هناء:</div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button
                    onClick={() => handleSelectDivision('thermal', 'calculators')}
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

            {/* Enter Button */}
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
              
              {/* Header Badge */}
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-xs font-black flex items-center gap-1.5 shadow">
                  <Zap className="w-4 h-4 text-cyan-200" />
                  <span>القسم الثاني • د. سمر عبد الحميد</span>
                </span>
                <span className="text-xs font-bold text-cyan-400/90 font-mono">
                  وحدتان دراسيتان
                </span>
              </div>

              {/* Title & Professor */}
              <div>
                <h3 className="text-2xl font-black text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  الكيمياء الكهربائية وتطبيقات التآكل
                </h3>
                <p className="text-xs font-bold text-slate-400 mt-1">
                  إشراف: <span className="text-cyan-300 font-black">أ.د. سمر عبد الحميد</span> • أستاذ الكيمياء الهندسية بشبرا
                </p>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                يشمل دراسة الخلايا الجلفانية والإلكتروليتية، السلسلة الكهروكيميائية وقطب SHE، حسابات معادلة نيرنست غير القياسية وطاقة جيبس الحرة، ميكانيكية تآكل المنشآت الهندسية، وطرق الحماية الكاثودية والأنودية ومثبطات التآكل.
              </p>

              {/* Topics Grid */}
              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-bold text-cyan-400 block">الوحدات والموضوعات المقررة في هذا القسم:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                    <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>الخلايا الجلفانية ونيرنست وطاقة جيبس</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                    <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>ميكانيكية التآكل والصدأ والحماية الهندسية</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>الحماية الكاثودية بقطب التضحية والتيار القسري</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center gap-2 text-slate-200">
                    <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>الجلفنة مقابل القصدرة ومثبطات التآكل</span>
                  </div>
                </div>
              </div>

              {/* Feature Highlights Pills */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                <span className="px-2.5 py-1 rounded-lg bg-cyan-950/60 text-cyan-300 text-[11px] font-bold border border-cyan-800/50">
                  ⚡ حاسبة معادلة نيرنست و ΔG° وثابت الاتزان K_eq
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 text-[11px] font-bold border border-slate-700">
                  🖨️ شيتان A4 جاهزان للطباعة (نيرنست + التآكل)
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 text-[11px] font-bold border border-slate-700">
                  🔬 تجربة الخلية الجلفانية وقطب التضحية
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 text-[11px] font-bold border border-slate-700">
                  📑 كشكول محاضرات د. سمر (14 صفحة)
                </span>
              </div>

              {/* Direct Jump Shortcuts for Electro */}
              <div className="pt-2">
                <div className="text-[11px] font-bold text-slate-400 mb-1.5">انتقال سريع لأدوات قسم د. سمر:</div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button
                    onClick={() => handleSelectDivision('electro', 'calculators')}
                    className="px-2.5 py-1.5 rounded-xl bg-slate-900/90 hover:bg-cyan-950 text-cyan-300 border border-slate-700/80 text-[11px] font-bold transition flex items-center justify-center gap-1 shadow-sm"
                  >
                    <Calculator className="w-3.5 h-3.5" />
                    <span>حاسبة نيرنست</span>
                  </button>
                  <button
                    onClick={() => handleSelectDivision('electro', 'cheatsheets')}
                    className="px-2.5 py-1.5 rounded-xl bg-slate-900/90 hover:bg-emerald-950 text-emerald-300 border border-slate-700/80 text-[11px] font-bold transition flex items-center justify-center gap-1 shadow-sm"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>شيتات A4</span>
                  </button>
                  <button
                    onClick={() => handleSelectDivision('electro', 'lab')}
                    className="px-2.5 py-1.5 rounded-xl bg-slate-900/90 hover:bg-purple-950 text-purple-300 border border-slate-700/80 text-[11px] font-bold transition flex items-center justify-center gap-1 shadow-sm"
                  >
                    <TestTube className="w-3.5 h-3.5" />
                    <span>تجارب التآكل</span>
                  </button>
                  <button
                    onClick={() => handleSelectDivision('electro', 'materials')}
                    className="px-2.5 py-1.5 rounded-xl bg-slate-900/90 hover:bg-rose-950 text-rose-300 border border-slate-700/80 text-[11px] font-bold transition flex items-center justify-center gap-1 shadow-sm"
                  >
                    <FolderArchive className="w-3.5 h-3.5" />
                    <span>كشكول د. سمر</span>
                  </button>
                </div>
              </div>

            </div>

            {/* Enter Button */}
            <div className="pt-6 mt-6 border-t border-slate-800">
              <button
                onClick={() => handleSelectDivision('electro', 'syllabus')}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 hover:from-cyan-500 hover:to-blue-500 text-white font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-cyan-950/60 transition-all active:scale-[0.98] group-hover:shadow-cyan-500/20"
              >
                <span>دخول قسم الكيمياء الكهربية والتآكل</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-[-4px] transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* 3. Option: Comprehensive Combined Curriculum */}
      <div className="bg-slate-900/90 rounded-3xl p-6 border border-slate-800 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-center sm:text-right">
          <div className="w-12 h-12 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/30">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-base font-black text-white">
              هل ترغب في تصفح المنهج كاملاً بشقيه معاً؟
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              مناسب للمراجعة الشاملة ليلة امتحان الفاينال (عرض جميع الـ 6 وحدات، وكافة الحاسبات والشيتات معاً).
            </p>
          </div>
        </div>

        <button
          onClick={() => handleSelectDivision('all', 'syllabus')}
          className="px-6 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-black text-xs sm:text-sm flex items-center gap-2 transition border border-slate-600 shrink-0 shadow"
        >
          <span>تصفح المنهج كاملاً (القسمان معاً)</span>
          <ChevronLeft className="w-4 h-4" />
        </button>
      </div>

      {/* 4. Quick Subject Portal Shortcuts */}
      <div className="space-y-4 pt-2">
        <h3 className="text-lg font-black text-white flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-cyan-400" />
          <span>أقسام وأدوات المنصة الهندسية:</span>
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <button
            onClick={() => handleSelectDivision('all', 'calculators')}
            className="p-4 rounded-2xl bg-slate-900/70 hover:bg-slate-850 border border-slate-800 hover:border-cyan-500/50 transition-all text-center sm:text-right space-y-2 group"
          >
            <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-cyan-300 flex items-center justify-center border border-blue-500/30 group-hover:scale-110 transition-transform">
              <Calculator className="w-5 h-5" />
            </div>
            <div className="font-black text-xs text-white">المعمل الحسابي الذكي</div>
            <div className="text-[10px] text-slate-400">حل فوري لمسائل الشيت والفاينال</div>
          </button>

          <button
            onClick={() => handleSelectDivision('all', 'cheatsheets')}
            className="p-4 rounded-2xl bg-slate-900/70 hover:bg-slate-850 border border-slate-800 hover:border-emerald-500/50 transition-all text-center sm:text-right space-y-2 group"
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center border border-emerald-500/30 group-hover:scale-110 transition-transform">
              <Printer className="w-5 h-5" />
            </div>
            <div className="font-black text-xs text-white">شيتات A4 للطباعة</div>
            <div className="text-[10px] text-slate-400">ملخصات مكثفة جاهزة للورق والـ PDF</div>
          </button>

          <button
            onClick={() => handleSelectDivision('all', 'glossary')}
            className="p-4 rounded-2xl bg-slate-900/70 hover:bg-slate-850 border border-slate-800 hover:border-purple-500/50 transition-all text-center sm:text-right space-y-2 group"
          >
            <div className="w-9 h-9 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center border border-purple-500/30 group-hover:scale-110 transition-transform">
              <Award className="w-5 h-5" />
            </div>
            <div className="font-black text-xs text-white">معجم الحفظ والفلاش كاردز</div>
            <div className="text-[10px] text-slate-400">بنك المصطلحات والقوانين والتعليلات</div>
          </button>

          <button
            onClick={() => handleSelectDivision('all', 'materials')}
            className="p-4 rounded-2xl bg-slate-900/70 hover:bg-slate-850 border border-slate-800 hover:border-rose-500/50 transition-all text-center sm:text-right space-y-2 group"
          >
            <div className="w-9 h-9 rounded-xl bg-rose-500/20 text-rose-300 flex items-center justify-center border border-rose-500/30 group-hover:scale-110 transition-transform">
              <FolderArchive className="w-5 h-5" />
            </div>
            <div className="font-black text-xs text-white">مكتبة المذكرات الرسمية</div>
            <div className="text-[10px] text-slate-400">كشاكيل دكاترة شبرا ممسوحة ضوئياً</div>
          </button>
        </div>
      </div>

    </div>
  );
}
