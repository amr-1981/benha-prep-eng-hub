import React, { useState, useEffect } from 'react';
import { TestTube, Play, RotateCcw, CheckCircle2, AlertCircle, HelpCircle, Sparkles, Flame, Zap } from 'lucide-react';
import { LAB_EXPERIMENTS } from '../data/labExperimentsData';
import { ConceptAccordion, TermBadge } from '../components/BilingualExplainer';

export default function VirtualLabView({ activeDivision = 'all', setActiveDivision, studyMode = 'bilingual' }) {
  const filteredExperiments = LAB_EXPERIMENTS.filter(exp => {
    return !activeDivision || activeDivision === 'all' || exp.division === activeDivision;
  });

  const [selectedExp, setSelectedExp] = useState(filteredExperiments[0] || LAB_EXPERIMENTS[0]);

  useEffect(() => {
    if (!filteredExperiments.some(e => e.id === selectedExp.id)) {
      if (filteredExperiments.length > 0) {
        setSelectedExp(filteredExperiments[0]);
      }
    }
  }, [activeDivision, filteredExperiments, selectedExp]);

  const getExpExplanation = (id) => {
    switch (id) {
      case 'exp-edta':
        return {
          titleEn: "EDTA Hardness Titration: Chemistry & Viva Secrets",
          titleAr: "💡 افهم الفكرة المعملية والسر الكيميائي بالعربي: معايرة عسر الماء",
          points: [
            "لماذا نستخدم المحلول المنظم Ammonia Buffer pH = 10؟ لأن مركب EDTA يرتبط بالكالسيوم والمغنيسيوم بثبات تام عند pH = 10 فقط. إذا قل الـ pH عن 10 يتفكك المعقد ويفشل التفاعل، وإذا زاد عن 10 يترسب المغنيسيوم في صورة هيدروكسيد المغنيسيوم Mg(OH)2 قبل المعايرة.",
            "سر التحول اللوني من الأحمر النبيذي (Wine Red) إلى الأزرق (Steel Blue): دليل EBT يرتبط بجزء ضئيل من أيونات Mg مكوناً لوناً أحمر نبيذي. وعند التنقيط بـ EDTA، يسحب الإديتا كل الكالسيوم أولاً ثم ينتزع المغنيسيوم من الدليل لأن ارتباط الإديتا أقوى بكثير، فيتحرر الدليل EBT حراً بلونه الأزرق النقي.",
            "كيف نفرق بين العسر المؤقت والدائم عملياً؟ نعاير 50 مل ماء مباشرة لنعرف العسر الكلي (V1). ثم نغلي 100 مل ماء لترسيب بيكربونات الكالسيوم ونرشحها ونبردها، ونعاير الراشح لنعرف العسر الدائم (V2). ونطرحهما لنحصل على العسر المؤقت!"
          ],
          examTip: "سؤال شفوي متكرر في شبرا: لماذا يترسب الكالسيوم بالغليان كـ CaCO3 بينما يترسب المغنيسيوم كـ Mg(OH)2؟ لأن Mg(OH)2 أقل ذوبانية بكثير من MgCO3."
        };
      case 'exp-viscosity':
        return {
          titleEn: "Redwood Viscosity: Flow Rate & Temperature Effects",
          titleAr: "💡 افهم الفكرة المعملية والسر الكيميائي بالعربي: لزوجة الزيوت ومقياس ريدوود",
          points: [
            "ما هي فكرة مقياس ريدوود؟ نقيس الزمن بالثواني اللازم لتدفق 50 مل من الزيت عبر فوهة عيارية ضيقة مصنوعة من العقيق تحت تأثير وزنه فقط.",
            "لماذا تقل اللزوجة بارتفاع درجة الحرارة؟ لأن الحرارة تكسب جزيئات السائل طاقة حركية تباعد بينها وتضعف قوى التجاذب بين الجزيئات (Cohesive forces)، فيتدفق الزيت أسرع ويقل زمن ريدوود.",
            "مؤشر اللزوجة (Viscosity Index - VI): مقياس لمدى احتفاظ الزيت بلزوجته مع تغير الحرارة؛ المحركات تحتاج زيوتاً ذات VI مرتفع لتحافظ على طبقة التزييت ومنع احتكاك وتآكل المعادن عند سخونة المحرك."
          ],
          examTip: "سؤال شفوي: ما الفرق بين مقياس ريدوود رقم 1 ورقم 2؟ رقم 1 للزيوت الخفيفة (زمن تدفق أقل من 2000 ثانية)، ورقم 2 للزيوت الثقيلة جداً (فوهته أوسع بمقدار 10 أضعاف تقريباً)."
        };
      case 'exp-flash':
        return {
          titleEn: "Pensky-Martens Flash & Fire Points: Oil Safety Decoded",
          titleAr: "💡 افهم الفكرة المعملية والسر الكيميائي بالعربي: نقطة الوميض واشتعال الزيوت",
          points: [
            "الفرق بين نقطة الوميض ونقطة الاشتعال: نقطة الوميض (Flash Point) هي أدنى حرارة يطلق عندها الزيت أبخرة تشتعل لحظياً (ومضة) مع لهب الاختبار، بينما نقطة الاشتعال (Fire Point) تليها بنحو 5 إلى 20 درجة مئوية ويستمر الاشتعال بعدها 5 ثوانٍ على الأقل.",
            "الأهمية الهندسية لاختبار الوميض: معيار أمان وقائي لتحديد أقصى درجات حرارة آمنة لنقل وتخزين واستخدام الزيوت والوقود في المصانع والمحركات لمنع اندلاع الحرائق.",
            "جهاز بنسكي مارتنز (Pensky-Martens Closed Cup): يُستخدم الكوب المغلق للوقود والزيوت المتطايرة لمنع هروب الأبخرة وإعطاء قراءة دقيقة لحرارة الوميض."
          ],
          examTip: "سؤال شفوي: إذا احتوى زيت التزييت على شوائب من البنزين أو الكيروسين، ماذا يحدث لنقطة وميضه؟ تنخفض نقطة الوميض بشدة مما يمثل خطراً جسيماً على سلامة المحرك."
        };
      case 'exp-corrosion-galvanic':
        return {
          titleEn: "Galvanic EMF & Cathodic Sacrificial Anode: Protection Chemistry",
          titleAr: "💡 افهم الفكرة المعملية والسر الكيميائي بالعربي: الخلية الجلفانية وقطب التضحية",
          points: [
            "تفاعل الأنود والكاثود: قطب الزنك ذو جهد اختزال قياسي سالب (-0.76 V) فيعمل كأنود يتأكسد ويفقد إلكترونات ويتآكل كيميائياً. بينما النحاس (+0.34 V) يعمل ككاثود يكتسب الإلكترونات ويترسب عليه النحاس دون تآكل.",
            "ميكانيكية قطب التضحية لحماية الحديد: نوصل كتل من معدن أنشط من الحديد (كالزنك أو المغنيسيوم) بالمنشأة؛ فيضحي الزنك بنفسه ويتآكل كأنود، بينما يظل الحديد كاثوداً سالباً ومحمياً من الصدأ تماماً.",
            "دور القنطرة الملحية (Salt Bridge): تحافظ على التعادل الكهربائي بين نصفي الخلية بالسماح بهجرة الأيونات دون اختلاط السوائل."
          ],
          examTip: "سؤال شفوي: لماذا نستخدم قطب تضحية من المغنيسيوم في التربة الجافة أو عالية المقاومة؟ لأن المغنيسيوم له جهد اختزال سالب جداً (-2.37 V) فيوفر فارق جهد كافٍ لدفع تيار الحماية."
        };
      default:
        return null;
    }
  };

  // Titration simulator state for Experiment 1
  const [edtaVolume, setEdtaVolume] = useState(0);
  const equivalencePoint = 18.5; // mL

  // Calculate current color based on titration progress
  const getFlaskColor = () => {
    if (edtaVolume === 0) return 'bg-rose-900 text-rose-100 border-rose-500'; // Initial wine red
    if (edtaVolume < equivalencePoint - 1.5) return 'bg-rose-800 text-rose-100 border-rose-400';
    if (edtaVolume < equivalencePoint) return 'bg-purple-800 text-purple-100 border-purple-400'; // Transition
    return 'bg-blue-600 text-white border-cyan-300'; // Steel blue endpoint!
  };

  const getFlaskStatusText = () => {
    if (edtaVolume === 0) return 'أحمر نبيذي (Wine Red) - بداية التجربة، متراكب Mg-EBT نشط';
    if (edtaVolume < equivalencePoint) return `جاري التنقيط... الحجم: ${edtaVolume.toFixed(1)} mL (اللون أرجواني انتقالي)`;
    return `نقطة النهاية (Endpoint reached)! تحول اللون للأزرق النقي عند ${equivalencePoint} mL`;
  };

  return (
    <div className="space-y-8 pb-16">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 border-2 border-indigo-500/40 shadow-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold border border-indigo-400/30 mb-2">
              <TestTube className="w-3.5 h-3.5 text-cyan-400" />
              <span>معمل الكيمياء الافتراضي • Virtual Engineering Lab</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white">
              تَجَارِبُ المَعْمَلِ وَأَسْئِلَةُ الامْتِحَانِ الشَّفَوِي (VIVA)
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm mt-1">
              شرح تفاعلي للأجهزة وخطوات العمل مقسم بين: <strong>تجارب الكيمياء الحرارية والصناعية (د. هناء)</strong> و <strong>تجارب الكيمياء الكهربية والتآكل (د. سمر)</strong>.
            </p>
          </div>

          <div className="bg-slate-800/80 p-3.5 rounded-2xl border border-slate-700 text-center shrink-0">
            <span className="text-xs font-bold text-slate-400">امتحان العملي والشفوي:</span>
            <div className="text-xl font-black text-amber-400">15 - 20 درجة</div>
          </div>
        </div>
      </div>

      {/* Two-Branch Academic Division Switcher */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs">
        <span className="text-slate-400 font-bold shrink-0 flex items-center gap-1 text-[11px]">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>قسم التجارب:</span>
        </span>
        <button
          onClick={() => setActiveDivision && setActiveDivision('all')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition whitespace-nowrap ${
            activeDivision === 'all'
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          جميع التجارب (القسمان)
        </button>
        <button
          onClick={() => setActiveDivision && setActiveDivision('thermal')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition flex items-center gap-1.5 whitespace-nowrap ${
            activeDivision === 'thermal'
              ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md'
              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          <Flame className="w-3.5 h-3.5 text-amber-300" />
          <span>تجارب الكيمياء الحرارية والصناعية (د. هناء)</span>
        </button>
        <button
          onClick={() => setActiveDivision && setActiveDivision('electro')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition flex items-center gap-1.5 whitespace-nowrap ${
            activeDivision === 'electro'
              ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md'
              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          <Zap className="w-3.5 h-3.5 text-cyan-300" />
          <span>تجارب الكيمياء الكهربية والتآكل (د. سمر)</span>
        </button>
      </div>

      {/* Experiment Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {filteredExperiments.map((exp) => (
          <button
            key={exp.id}
            onClick={() => {
              setSelectedExp(exp);
              setEdtaVolume(0);
            }}
            className={`p-4 rounded-2xl border-2 text-right transition-all flex flex-col justify-between ${
              selectedExp.id === exp.id
                ? exp.division === 'thermal'
                  ? 'bg-gradient-to-br from-amber-950/80 to-slate-900 border-amber-400 shadow-lg shadow-amber-950/50'
                  : 'bg-gradient-to-br from-cyan-950/80 to-slate-900 border-cyan-400 shadow-lg shadow-cyan-950/50'
                : 'bg-slate-800/80 hover:bg-slate-800 border-slate-700 text-slate-300'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full border ${
                selectedExp.id === exp.id
                  ? 'bg-white text-slate-950 border-white font-mono'
                  : 'bg-slate-900 text-slate-400 border-slate-700'
              }`}>
                تجربة {exp.number}
              </span>
              <span className={`text-[10px] font-black px-2 py-0.5 rounded-full border ${
                exp.division === 'thermal'
                  ? 'text-amber-300 bg-amber-950/80 border-amber-800/60'
                  : 'text-cyan-300 bg-cyan-950/80 border-cyan-800/60'
              }`}>
                {exp.division === 'thermal' ? '🔥 حرارية (د. هناء)' : '⚡ كهربية (د. سمر)'}
              </span>
            </div>
            <h3 className="font-mono font-black text-xs text-white leading-snug line-clamp-2 text-left" dir="ltr">{exp.titleEn}</h3>
            <span className="text-[10px] text-slate-400 line-clamp-1 mt-1">{exp.titleAr}</span>
          </button>
        ))}
      </div>

      {/* Interactive Titration Simulator (For Exp 1) */}
      {selectedExp.id === 'exp-edta' && (
        <div className="bg-slate-800/90 rounded-3xl p-6 border-2 border-indigo-500/40 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-700 pb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
              <h2 className="text-base font-black text-white">محاكي معايرة عسر الماء بالسحاحة (Virtual Titration Flask)</h2>
            </div>
            <button
              onClick={() => setEdtaVolume(0)}
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1 bg-slate-700/60 px-3 py-1.5 rounded-xl"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>تفريغ الدورق والبدء من جديد</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Visual Flask Representation */}
            <div className="flex flex-col items-center justify-center p-6 bg-slate-950 rounded-2xl border border-slate-700">
              <div className="text-xs font-bold text-slate-400 mb-3">دورق المعايرة المخروطي (Conical Flask 250 mL)</div>
              
              {/* Flask Container */}
              <div className={`w-36 h-44 rounded-b-3xl rounded-t-lg border-4 flex flex-col items-center justify-end p-4 transition-colors duration-500 shadow-2xl relative ${getFlaskColor()}`}>
                <div className="absolute top-2 text-[10px] font-mono text-center opacity-80">
                  Buffer pH 10 + EBT
                </div>
                <div className="text-center font-black text-xs">
                  {edtaVolume >= equivalencePoint ? 'لون أزرق نقي 🔵' : 'لون أحمر نبيذي 🍷'}
                </div>
              </div>

              <div className="text-xs font-bold mt-4 text-center text-slate-300">
                الحالة: <span className="font-mono text-cyan-300">{getFlaskStatusText()}</span>
              </div>
            </div>

            {/* Titration Controls & Burette Reading */}
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-700 space-y-2">
                <div className="flex justify-between text-xs font-bold text-slate-300">
                  <span>قراءة السحاحة (Burette Reading):</span>
                  <span className="font-mono text-base font-black text-cyan-300">{edtaVolume.toFixed(1)} mL</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="25"
                  step="0.5"
                  value={edtaVolume}
                  onChange={(e) => setEdtaVolume(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>0 mL</span>
                  <span>نقطة التعادل المتوقعة: 18.5 mL</span>
                  <span>25 mL</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setEdtaVolume(prev => Math.min(25, prev + 1))}
                  className="flex-1 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition"
                >
                  + إضافة 1.0 mL إديتا
                </button>
                <button
                  onClick={() => setEdtaVolume(prev => Math.min(25, prev + 0.1))}
                  className="flex-1 py-2 rounded-xl bg-cyan-700 hover:bg-cyan-600 text-white font-bold text-xs transition"
                >
                  + تنقيط 0.1 mL بالقطرة
                </button>
                <button
                  onClick={() => setEdtaVolume(equivalencePoint)}
                  className="px-3 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs transition"
                  title="القفز لنقطة النهاية مباشرة"
                >
                  نقطة النهاية 🎯
                </button>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-700 text-[11px] text-slate-300 font-medium leading-relaxed">
                <strong className="text-cyan-300">ملاحظة معملية:</strong> لاحظ التغير التدريجي من اللون الأحمر النبيذي إلى البنفسجي، ثم الانقلاب الحاد عند 18.5 مل إلى اللون الأزرق النقي (Steel Blue).
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Selected Experiment Detailed Guide */}
      <div className="bg-slate-800/90 rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-xl space-y-6">
        
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-white font-mono tracking-tight text-left leading-snug" dir="ltr">
            {selectedExp.titleEn}
          </h2>
          <p className="text-xs font-bold text-amber-300 mt-1">{selectedExp.titleAr}</p>
        </div>

        {/* Theory & Principle */}
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-700 space-y-1.5">
          <h4 className="text-xs font-black text-cyan-300">الأساس العلمي والنظري للتجربة (Principle & Theory):</h4>
          <p className="text-xs text-slate-300 font-medium leading-relaxed">{selectedExp.theory}</p>
        </div>

        {/* Bilingual Conceptual Decoded Insight */}
        {getExpExplanation(selectedExp.id) && (
          <ConceptAccordion
            titleEn={getExpExplanation(selectedExp.id).titleEn}
            titleAr={getExpExplanation(selectedExp.id).titleAr}
            studyMode={studyMode}
            points={getExpExplanation(selectedExp.id).points}
            examTip={getExpExplanation(selectedExp.id).examTip}
          />
        )}

        {/* Apparatus List */}
        <div>
          <h4 className="text-xs font-black text-amber-300 mb-2">الأدوات والمحاليل المعملية المستخدمة (Apparatus & Reagents):</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {selectedExp.apparatus.map((app, i) => (
              <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/40 border border-slate-700/60 text-xs font-bold text-slate-300">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <span>{app}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Step-by-Step Procedure */}
        <div>
          <h4 className="text-xs font-black text-emerald-300 mb-3">خطوات التجربة داخل المعمل (Procedure Steps):</h4>
          <div className="space-y-2">
            {selectedExp.procedureSteps.map((step) => (
              <div key={step.step} className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-700/60 text-xs font-medium text-slate-200">
                <span className="w-6 h-6 rounded-lg bg-emerald-900/80 text-emerald-300 font-black text-xs flex items-center justify-center shrink-0 border border-emerald-700">
                  {step.step}
                </span>
                <span className="leading-relaxed">{step.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Calculations */}
        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-700 space-y-2">
          <h4 className="text-xs font-black text-cyan-300">قوانين وحسابات استخراج النتائج (Calculations):</h4>
          {selectedExp.calculationsFormula.map((calc, i) => (
            <div key={i} className="p-2.5 rounded-lg bg-slate-950 font-mono text-xs font-bold text-amber-300 text-left" dir="ltr">
              {calc}
            </div>
          ))}
        </div>

        {/* Viva Questions */}
        <div className="space-y-3 pt-2">
          <h4 className="text-sm font-black text-purple-300 flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-purple-400" />
            <span>أسئلة الامتحان الشفوي المعتادة (Viva Questions & Answers):</span>
          </h4>
          <div className="space-y-3">
            {selectedExp.vivaQuestions.map((viva, i) => (
              <div key={i} className="p-4 rounded-2xl bg-slate-900/80 border border-purple-900/50 space-y-2">
                <div className="text-xs font-black text-white flex items-center gap-2">
                  <span className="text-purple-400">س:</span>
                  <span>{viva.q}</span>
                </div>
                <div className="text-xs font-bold text-slate-300 bg-slate-950/60 p-3 rounded-xl border border-slate-800 leading-relaxed flex items-start gap-2">
                  <span className="text-emerald-400 font-black shrink-0">ج:</span>
                  <span>{viva.a}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
