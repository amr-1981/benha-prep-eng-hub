import React, { useState, useEffect } from 'react';
import { 
  BookOpen, Droplets, Flame, ShieldAlert, Building2, Layers, Zap, 
  CheckCircle2, AlertTriangle, ArrowRight, Sparkles, Lightbulb, 
  Calculator, Binary, Compass, Grid, Activity 
} from 'lucide-react';
import { CHEMISTRY_MODULES, CHEMISTRY_DIVISIONS, BENHA_EXAM_TIPS } from '../data/chemistryCurriculumData';
import { MATH_MODULES, MATH_DIVISIONS, MATH_INFO } from '../data/mathCurriculumData';
import { ConceptAccordion } from '../components/BilingualExplainer';

const MATH_EXAM_TIPS = [
  {
    title: "اختيار العامل v في نظرية لايبنتز (Leibniz Formula)",
    tip: "اختر دائماً كثيرة الحدود (x² أو x³) لتكون العامل v لأن مشتقاتها تصبح صفراً بعد خطوات معدودة، مما يختصر مفكوك المجموع اللانهائي إلى حدين أو ثلاثة فقط."
  },
  {
    title: "شرط قاعدة لوبيتال للنهايات (L'Hôpital Constraint)",
    tip: "لا تشتق إلا بعد التأكد من التعويض المباشر وظهور كمية غير معينة [0/0 أو ∞/∞]. تذكر أن تشتق البسط وحده والمقام وحده، ولا تطبق قاعدة قسمة دالتين!"
  },
  {
    title: "تحديد الربع والزاوية في الأعداد المركبة (Arg z)",
    tip: "إذا كان الجزء الحقيقي سالباً والتخيلي سالباً، فالعدد يقع في الربع الثالث وتكون السعة الأساسية θ = -π + tan⁻¹(|y/x|). لا تكتفِ بآلة الحاسبة وحدها."
  },
  {
    title: "رتبة المصفوفة والحل الفريد (Rouché–Capelli)",
    tip: "النظام الخطي AX = B له حل وحيد فقط إذا وفقط إذا كانت رتبة مصفوفة المعاملات تساوي رتبة المصفوفة الموسعة وتساوي عدد المجاهيل rank(A) = rank([A|B]) = n."
  }
];

export default function SyllabusView({ 
  activeDivision = 'all', 
  setActiveDivision, 
  studyMode = 'bilingual',
  activeSubject = 'math'
}) {
  const isMath = activeSubject === 'math';
  const [showObjectivesAr, setShowObjectivesAr] = useState(false);

  const iconMap = {
    Droplets: Droplets,
    Flame: Flame,
    ShieldAlert: ShieldAlert,
    Building2: Building2,
    Layers: Layers,
    Zap: Zap,
    Calculator: Calculator,
    Binary: Binary,
    Compass: Compass,
    Grid: Grid,
    Activity: Activity,
    Sparkles: Sparkles,
    BookOpen: BookOpen
  };

  const modulesList = isMath ? MATH_MODULES : CHEMISTRY_MODULES;
  const divisionsList = isMath ? MATH_DIVISIONS : CHEMISTRY_DIVISIONS;

  const filteredModules = modulesList.filter(m => {
    return !activeDivision || activeDivision === 'all' || m.division === activeDivision;
  });

  const [selectedModule, setSelectedModule] = useState(filteredModules[0] || modulesList[0]);

  // Keep selected module valid when division or subject filter changes
  useEffect(() => {
    if (!filteredModules.some(m => m.id === selectedModule?.id)) {
      if (filteredModules.length > 0) {
        setSelectedModule(filteredModules[0]);
      }
    }
  }, [activeDivision, filteredModules, selectedModule, activeSubject]);

  const currentDivisionInfo = divisionsList.find(d => d.id === activeDivision) || divisionsList[0];

  const getModuleBilingualInsight = (mod) => {
    if (!mod) return null;
    if (isMath) {
      return mod.bilingualInsight || null;
    }

    switch (mod.id) {
      case 'mod-water':
        return {
          titleEn: "Water Treatment & Boiler Problems: Conceptual Overview",
          titleAr: "💡 افهم الفكرة والربط الهندسي بالعربي: تكنولوجيا المياه ومشاكل الغلايات",
          points: [
            "لماذا نهتم بمعالجة مياه التغذية (Boiler Feed Water) في المصانع ومحطات الكهرباء؟ لأن العسر وأملاح الكالسيوم والمغنيسيوم تترسب عند غليان الماء على جدران الغلايات مكونة قشوراً صلبة (Boiler Scales) رديئة التوصيل للحرارة مما يهدر الوقود ويؤدي لانفجار المواسير!",
            "الفرق بين القشور (Scale) والحمأة (Sludge): القشور رواسب بلورية شديدة الصلابة تلتصق بجدران المواسير (CaSO4, CaCO3)، بينما الحمأة رواسب طينية طرية تترسب في قاع الغلاية ويسهل إزالتها بنفخ الغلاية (Blow-down).",
            "طريقة الجير والصودا: الجير يزيل العسر المؤقت وأملاح المغنيسيوم، بينما الصودا تزيل أملاح الكالسيوم الدائمة."
          ],
          examTip: "سؤال فاينال متكرر: اذكر 4 مشاكل تسببها المياه العسرة في الغلايات؟ (1) Scales & Sludges (2) Boiler Corrosion (3) Caustic Embrittlement (4) Priming & Foaming."
        };
      case 'mod-fuels':
        return {
          titleEn: "Fuels, Combustion & Thermochemistry: Core Principles",
          titleAr: "💡 افهم الفكرة والربط الهندسي بالعربي: الوقود والاحتراق والديناميكا الحرارية",
          points: [
            "التحليل التقريبي (Proximate Analysis) مقابل النهائي (Ultimate Analysis): التحليل التقريبي يحدد رطوبة الفحم والمواد المتطايرة والكربون الثابت والرماد بطرق فيزيائية سريعة. بينما التحليل النهائي يحدد النسب المئوية الكيميائية الدقيقة لعناصر C, H, O, N, S.",
            "لماذا نقسم O على 8 في معادلة دولونج؟ لأن كل 1 كجم هيدروجين يرتبط بـ 8 كجم أكسجين لتكوين ماء خامل، فالهيدروجين الفعلي المتاح للاشتعال المنتج للطاقة هو (H - O/8).",
            "الفرق بين المحتوى الحراري ΔH والطاقة الداخلية ΔE: المحتوى الحراري ΔH يُقاس عند ثبوت الضغط (q_p)، بينما ΔE تُقاس عند ثبوت الحجم (q_v) داخل مسعر القنبلة المغلق، والعلاقة الحاكمة بينهما: ΔH = ΔE + ΔnRT."
          ],
          examTip: "في حسابات Δn: نحسب فقط عدد مولات النواتج الغازية ناقص المتفاعلات الغازية (المواد الصلبة والسائلة تهمل تماماً لأن Δn = 0 لها)."
        };
      case 'mod-cement':
        return {
          titleEn: "Cement Clinker Mineralogy & Bogue Phase Roles",
          titleAr: "💡 افهم الفكرة والربط الهندسي بالعربي: كيمياء الأسمنت البورتلاندي",
          points: [
            "المركبات الأربعة: C3S يعطي المقاومة المبكرة السريعة، C2S يعطي المقاومة المتأخرة طويلة الأجل، C3A مسؤول عن سرعة الشك وحرارة التفاعل العالية، C4AF يعطي اللون الرمادي ويخفض حرارة الحرق.",
            "دور الجبس (Gypsum 2-3%): يمنع التصلب الفوري المفاجئ (Flash Set) لمركب C3A، ليعطي المهندسين والعمال وقتاً كافياً لنقل وصب الخرسانة.",
            "معامل تشبع الجير LSF: يعبر عن النسبة المثالية للجير بالنسبة للأكاسيد الحمضية، ويجب أن يقع بين 0.66 و 1.02."
          ],
          examTip: "علل: يضاف الجبس بنسبة محددة ولا تزيد؟ لأن زيادة الجبس تؤدي لتكوين بلورات الإترنجايت لاحقاً مما يسبب انتفاخ وتشقق الخرسانة المتصلبة."
        };
      case 'mod-polymers':
        return {
          titleEn: "Polymers & Lubrication Engineering Principles",
          titleAr: "💡 افهم الفكرة والربط الهندسي بالعربي: البوليمرات واللدائن وزيوت التزييت",
          points: [
            "اللدائن الحرارية (Thermoplastics) مقابل المتصلدة بالحرارة (Thermosetting): اللدائن الحرارية تلين بالتسخين وتتشكل عدة مرات ولها سلاسل خطية غير متشابكة (مثل البولي إيثيلين PVC). أما المتصلدة فتتصلب بروابط ثلاثية الأبعاد ولا تلين بالتسخين إطلاقاً (مثل الباكلايت ومقابض الأواني).",
            "ميكانيكية التزييت والتشحيم: المحركات تحتاج زيوتاً ذات مؤشر لزوجة مرتفع (High VI) ونقطة وميض عالية لمنع احتكاك الأسطح المعدنية وامتصاص الحرارة دون احتراق الزيت.",
            "رقم التصبن (Saponification Value): يُستخدم لكشف غش الزيوت المعدنية البترولية الرخيصة بالزيوت النباتية أو الحيوانية."
          ],
          examTip: "سؤال علل متكرر: علل يفضل استخدام الزيوت البرافينية عن النفثينية في تزييت المحركات؟ لأن الزيوت البرافينية لها مؤشر لزوجة VI مرتفع (يقارب 100) فلا تفقد لزوجتها بسهولة عند سخونة المحرك."
        };
      case 'mod-electrochemistry':
        return {
          titleEn: "Electrochemical Principles, EMF & Nernst Equation",
          titleAr: "💡 افهم الفكرة والربط الهندسي بالعربي: الخلايا الجلفانية ومعادلة نيرنست",
          points: [
            "الأنود مقابل الكاثود: الأنود هو القطب الذي تحدث عنده عملية الأكسدة (فقد الإلكترونات)، بينما الكاثود تحدث عنده عملية الاختزال (اكتساب الإلكترونات).",
            "السلسلة الكهروكيميائية: المعدن الأعلى في السلسلة (الأكثر سالبية في جهود الاختزال) يعمل كأنود ويحل محل المعدن الأسفل منه في محاليل أملاحه.",
            "معادلة نيرنست وطاقة جيبس: تمكننا من حساب الجهد الحقيقي المتولد عند أي تركيز غير قياسي للمحاليل (E = E° - 0.0592/n log Q)، وقيمة ΔG° = -nFE° تحدد مقدار الشغل الكهربائي وتلقائية التفاعل."
          ],
          examTip: "إذا طلب في الامتحان رمز الاصطلاح للخلية (Cell Notation): الأنود دائماً على اليسار، تليه القنطرة الملحية ||، ثم الكاثود على اليمين."
        };
      case 'mod-corrosion':
        return {
          titleEn: "Corrosion Electrochemistry, Pilling-Bedworth & Cathodic Protection",
          titleAr: "💡 افهم الفكرة والربط الهندسي بالعربي: ميكانيكية التآكل والصدأ والحماية الهندسية",
          points: [
            "ميكانيكية الصدأ الرطب: تآكل كهروكيميائي يتطلب وجود الماء والأكسجين معاً؛ الحديد يتأكسد كأنود مفرزاً Fe²⁺، والأكسجين يختزل عند الكاثود مكوناً أيونات الهيدروكسيل OH⁻، فيتكون هيدروكسيد الحديد ثم يتأكسد للصدأ الأحمر Fe2O3·xH2O.",
            "قاعدة بيلينج-بيدورث (Pilling-Bedworth Ratio): إذا كان حجم أكسيد المعدن أكبر من حجم المعدن نفسه (PBR > 1)، تكون طبقة الأكسيد واقية وتحمي المعدن من استمرار الصدأ (مثل الألومنيوم). أما إذا كان أقل من 1 (كالصوديوم والمغنيسيوم)، تكون الطبقة مسامية وممزقة ويستمر التآكل.",
            "الحماية الكاثودية: حماية الحديد بتوصيله بمعدن أنشط منه كقطب تضحية (الزنك)، أو بضخ تيار كهربائي مستمر (ICCP) يجعله كاثوداً سالباً دائماً."
          ],
          examTip: "علل: الصدأ في الحديد لا يتوقف بينما في الألومنيوم يتوقف فوراً؟ لأن أكسيد الألومنيوم Al2O3 له PBR > 1 ويكون طبقة متماسكة تمنع وصول الهواء، بينما صدأ الحديد Fe2O3 هش ومسامي وله PBR غير منتظم فيسمح بنفاذ الرطوبة وتآكل كامل المعدن."
        };
      default:
        return null;
    }
  };

  const insight = getModuleBilingualInsight(selectedModule);

  return (
    <div className="space-y-8 pb-16 font-arabic">
      
      {/* Hero Welcome Banner */}
      <div className={`rounded-3xl p-6 sm:p-8 border-2 shadow-xl ${
        isMath
          ? 'bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 border-blue-500/40'
          : 'bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 border-blue-500/40'
      }`}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-right">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-400/30">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              مقرر الفصل الدراسي الأول • كلية الهندسة بشبرا (جامعة بنها)
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-white">
              {isMath ? 'موسوعة الرياضيات 1 (Engineering Mathematics 1)' : 'موسوعة الكيمياء الهندسية (Engineering Chemistry)'}
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl font-normal leading-relaxed">
              {isMath 
                ? 'الدليل الشامل لمقرر رياضيات إعدادي هندسة شبرا مقسماً بين: فرع حساب التفاضل والتطبيقات (Calculus) وفرع الجبر والهندسة الفراغية (Algebra & 3D Geometry).'
                : 'الدليل الشامل لمقرر كيمياء إعدادي هندسة شبرا مقسماً أكاديمياً بين: الكيمياء الحرارية والتطبيقات الصناعية (د. هناء عبد الوهاب) و الكيمياء الكهربية والتآكل (د. سمر عبد الحميد).'}
            </p>
          </div>

          <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700/80 shrink-0 text-center sm:text-right space-y-1">
            <span className="text-[11px] font-bold text-slate-400">كود المادة بلائحة شبرا:</span>
            <div className="text-lg font-black text-cyan-400 font-mono">{isMath ? 'MTH 001' : 'CHM 001'}</div>
            <div className="text-[11px] text-amber-300 font-bold">150 درجة إجمالية (شبرا)</div>
          </div>
        </div>
      </div>

      {/* Active Academic Division Highlight Banner (Isolated Department) */}
      <div className="p-4 sm:p-5 rounded-3xl bg-slate-900/90 border border-slate-700/80 shadow-md">
        <div className="space-y-1 text-right">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black text-amber-400 bg-amber-950/80 px-2.5 py-0.5 rounded-full border border-amber-800/50">
              {currentDivisionInfo?.badge || 'القسم الأكاديمي'}
            </span>
            <h2 className="text-sm sm:text-base font-black text-white">
              {currentDivisionInfo?.titleAr}
            </h2>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed max-w-3xl">
            {currentDivisionInfo?.description}
          </p>
        </div>
      </div>

      {/* Module Navigation Tabs */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${isMath ? 'lg:grid-cols-5' : 'xl:grid-cols-6'} gap-3`}>
        {filteredModules.map((mod) => {
          const Icon = iconMap[mod.icon] || BookOpen;
          const isSelected = selectedModule?.id === mod.id;
          const isPrimary = isMath ? mod.division === 'calculus' : mod.division === 'thermal';
          return (
            <button
              key={mod.id}
              onClick={() => setSelectedModule(mod)}
              className={`p-4 rounded-2xl border-2 text-right transition-all flex flex-col justify-between h-36 ${
                isSelected
                  ? isPrimary
                    ? 'bg-gradient-to-br from-blue-950/90 to-slate-900 border-blue-400 shadow-lg shadow-blue-950/50 scale-[1.02]'
                    : 'bg-gradient-to-br from-indigo-950/90 to-slate-900 border-purple-400 shadow-lg shadow-purple-950/50 scale-[1.02]'
                  : 'bg-slate-800/60 hover:bg-slate-800 border-slate-700 text-slate-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`p-2 rounded-xl ${isSelected ? (isPrimary ? 'bg-blue-500 text-white' : 'bg-purple-500 text-white') : 'bg-slate-700 text-slate-300'}`}>
                  <Icon className="w-5 h-5" />
                </span>
                <span className={`text-[10px] font-black px-2 py-0.5 rounded-full border ${
                  isPrimary 
                    ? 'text-cyan-300 bg-blue-950/80 border-blue-800/50' 
                    : 'text-purple-300 bg-purple-950/80 border-purple-800/50'
                }`}>
                  {isMath ? (isPrimary ? 'تفاضل (Calculus)' : 'جبر (Algebra)') : (isPrimary ? 'حرارية (د. هناء)' : 'كهربية (د. سمر)')}
                </span>
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-cyan-400 block mb-0.5">MODULE {mod.number < 10 ? `0${mod.number}` : mod.number}</span>
                <h3 className="font-mono font-black text-xs text-white line-clamp-1 text-left" dir="ltr">{mod.titleEn}</h3>
                <span className="text-[10px] text-slate-400 line-clamp-1">{mod.titleAr}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Module Detailed View */}
      {selectedModule && (
        <div className="bg-slate-800/90 rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-xl space-y-6">
          
          {/* Module Header */}
          <div className="border-b border-slate-700 pb-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className={`text-xs font-black px-3 py-1 rounded-full border ${
                  (isMath ? selectedModule.division === 'calculus' : selectedModule.division === 'thermal')
                    ? 'text-cyan-300 bg-blue-950 border-blue-800'
                    : 'text-purple-300 bg-purple-950 border-purple-800'
                }`}>
                  {selectedModule.divisionBadge}
                </span>
                <span className="text-xs font-bold text-slate-400 font-mono">
                  {selectedModule.badge}
                </span>
              </div>
              {/* Primary English Module Title */}
              <h2 className="text-xl sm:text-2xl font-black text-white font-mono tracking-tight text-left mt-2 leading-snug" dir="ltr">
                {selectedModule.titleEn}
              </h2>
              <p className="text-xs font-bold text-amber-300 mt-1">{selectedModule.titleAr}</p>
            </div>
            <div className="space-y-2 max-w-xl">
              <p className="text-xs text-slate-300 font-medium leading-relaxed bg-slate-900/60 p-3.5 rounded-2xl border border-slate-700/60">
                {selectedModule.summary}
              </p>
            </div>
          </div>

          {/* Learning Objectives */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-black text-cyan-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Core Learning Objectives & Concepts:</span>
              </h3>

              <button
                onClick={() => setShowObjectivesAr(prev => !prev)}
                className={`px-2.5 py-1 rounded-xl text-[11px] font-bold transition flex items-center gap-1.5 border ${
                  showObjectivesAr
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                    : 'bg-slate-900 text-amber-400/90 hover:text-amber-300 border-slate-700 hover:border-amber-500/40'
                }`}
              >
                <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                <span>{showObjectivesAr ? 'إخفاء الشرح بالعربي' : '💡 الشرح بالعربي (Arabic Explanation)'}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3" dir="ltr">
              {selectedModule.learningObjectives.map((obj, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/50 border border-slate-700/60 text-xs font-bold text-slate-200 text-left font-mono">
                  <span className="w-5 h-5 rounded-full bg-cyan-900/60 text-cyan-300 flex items-center justify-center shrink-0 text-[11px] font-black border border-cyan-700">
                    {i + 1}
                  </span>
                  <span>{obj}</span>
                </div>
              ))}
            </div>

            {/* Arabic Objectives Drawer if opened */}
            {showObjectivesAr && (
              <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-950/25 to-slate-900/90 border border-amber-500/30 text-right space-y-2 animate-in fade-in duration-200" dir="rtl">
                <div className="text-xs font-black text-amber-300 flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4 text-amber-400" />
                  <span>توضيح الأهداف ونقاط التركيز بالعربي:</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  هذه الوحدة تختبر قدرتك على التطبيق المباشر للقوانين الرياضية باللغة الإنجليزية في كراسة إجابة هندسة شبرا. تأكد من حفظ خطوات الحل القياسية والتعويض خطوة بخطوة لضمان الدرجة النهائية الكاملة.
                </p>
              </div>
            )}
          </div>

          {/* Key Formulas Section */}
          <div className="space-y-3 pt-2">
            <h3 className="text-sm font-black text-amber-300 flex items-center gap-2">
              <span className="text-base">📐</span>
              <span>القوانين والمعادلات الحاكمة (Key Formulas):</span>
            </h3>
            <div className="space-y-3">
              {selectedModule.keyFormulas.map((f, i) => (
                <div key={i} className="p-4 rounded-2xl bg-slate-900 border border-slate-700/80 space-y-2">
                  <div className="text-xs font-black text-slate-200">{f.title}</div>
                  <div className="p-3 rounded-xl bg-slate-950 font-mono text-xs sm:text-sm font-bold text-cyan-300 border border-cyan-900/50 overflow-x-auto text-left" dir="ltr">
                    {f.formula}
                  </div>
                  <p className="text-[11px] text-slate-400 font-bold">{f.notes}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bilingual Conceptual Decoded Insight for Syllabus Module */}
          {insight && (
            <ConceptAccordion
              titleEn={insight.titleEn}
              titleAr={insight.titleAr}
              studyMode={studyMode}
              points={insight.points}
              examTip={insight.examTip}
            />
          )}

          {/* Exam Hotspots */}
          <div className="space-y-3 pt-2">
            <h3 className="text-sm font-black text-rose-300 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-rose-400" />
              <span>النقاط المتكررة وأسئلة الفاينال المفضلة لدكاترة هندسة شبرا (Exam Hotspots):</span>
            </h3>
            <div className="space-y-2">
              {selectedModule.examHotspots.map((spot, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-800/40 text-xs font-bold text-rose-200 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-400 shrink-0"></span>
                  <span>{spot}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* Benha Exam Pro-Tips Section */}
      <div className="bg-slate-800/80 rounded-3xl p-6 border border-slate-700 shadow-md">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl">💡</span>
          <h2 className="text-lg font-black text-white">
            نصائح وتوجيهات الامتحانات لطلاب إعدادي هندسة شبرا (جامعة بنها) • {isMath ? 'الرياضيات 1' : 'الكيمياء الهندسية'}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {(isMath ? MATH_EXAM_TIPS : BENHA_EXAM_TIPS).map((tip, i) => (
            <div key={i} className="p-4 rounded-2xl bg-slate-900/80 border border-slate-700/60 space-y-1">
              <h4 className="text-xs font-black text-amber-300 flex items-center gap-1.5">
                <span>📌</span>
                <span>{tip.title}</span>
              </h4>
              <p className="text-xs text-slate-300 font-bold leading-relaxed">{tip.tip}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
