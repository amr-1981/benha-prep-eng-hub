import React, { useState } from 'react';
import { Award, BarChart3, TrendingUp, CheckCircle2, AlertCircle, Compass, Sparkles, Building, Cpu, Zap, Hammer } from 'lucide-react';

export default function GpaTrackerView({ facultyId }) {
  // Grading scale state
  const isShoubra = facultyId === 'shoubra';
  const totalMax = isShoubra ? 150 : 100;

  const [midterm, setMidterm] = useState(isShoubra ? 25 : 18);
  const [quizzes, setQuizzes] = useState(isShoubra ? 15 : 10);
  const [lab, setLab] = useState(isShoubra ? 20 : 12);
  const [finalExam, setFinalExam] = useState(isShoubra ? 75 : 50);

  const totalObtained = Number(midterm) + Number(quizzes) + Number(lab) + Number(finalExam);
  const percentage = (totalObtained / totalMax) * 100;

  // Grade calculation
  const getGradeInfo = (pct) => {
    if (pct >= 90) return { grade: 'A+', gpa: '4.00', label: 'امتياز مرتفع (Excellent)', color: 'text-emerald-400', bg: 'bg-emerald-950 border-emerald-500' };
    if (pct >= 85) return { grade: 'A', gpa: '3.75', label: 'امتياز (Excellent)', color: 'text-emerald-400', bg: 'bg-emerald-950 border-emerald-500' };
    if (pct >= 80) return { grade: 'B+', gpa: '3.30', label: 'جيد جداً مرتفع (Very Good)', color: 'text-blue-400', bg: 'bg-blue-950 border-blue-500' };
    if (pct >= 75) return { grade: 'B', gpa: '3.00', label: 'جيد جداً (Very Good)', color: 'text-blue-400', bg: 'bg-blue-950 border-blue-500' };
    if (pct >= 70) return { grade: 'C+', gpa: '2.70', label: 'جيد مرتفع (Good)', color: 'text-amber-400', bg: 'bg-amber-950 border-amber-500' };
    if (pct >= 65) return { grade: 'C', gpa: '2.40', label: 'جيد (Good)', color: 'text-amber-400', bg: 'bg-amber-950 border-amber-500' };
    if (pct >= 60) return { grade: 'D+', gpa: '2.00', label: 'مقبول مرتفع (Pass)', color: 'text-orange-400', bg: 'bg-orange-950 border-orange-500' };
    if (pct >= 50) return { grade: 'D', gpa: '1.50', label: 'مقبول (Pass)', color: 'text-orange-400', bg: 'bg-orange-950 border-orange-500' };
    return { grade: 'F', gpa: '0.00', label: 'راسب (Fail)', color: 'text-rose-500', bg: 'bg-rose-950 border-rose-500' };
  };

  const gradeInfo = getGradeInfo(percentage);

  // Benha Engineering Departments Data & historical cut-offs
  const departments = [
    {
      id: 'cse',
      nameAr: 'هندسة الحاسبات والتحكم النظمي',
      nameEn: 'Computer & Systems Engineering',
      icon: Cpu,
      historicalCutoff: '82% - 85%',
      color: 'from-cyan-600 to-blue-700',
      description: 'الذكاء الاصطناعي، البرمجيات، النظم المدمجة، والأمن السيبراني. القسم الأعلى طلباً في السنوات الأخيرة.'
    },
    {
      id: 'ece',
      nameAr: 'الهندسة الكهربية والاتصالات والإلكترونيات',
      nameEn: 'Electrical & Communications Engineering',
      icon: Zap,
      historicalCutoff: '76% - 80%',
      color: 'from-amber-600 to-orange-700',
      description: 'شبكات المحمول، معالجة الإشارات، الدوائر الإلكترونية المتكاملة، وتوليد ونقل الطاقة الكهربائية.'
    },
    {
      id: 'mech',
      nameAr: 'الهندسة الميكانيكية والميكاترونكس',
      nameEn: 'Mechanical Engineering & Mechatronics',
      icon: Hammer,
      historicalCutoff: '72% - 76%',
      color: 'from-red-600 to-rose-700',
      description: 'محطات القوى، التكييف والتبريد، التصميم الميكانيكي، والتحكم الآلي والروبوتات.'
    },
    {
      id: 'civil',
      nameAr: 'الهندسة المدنية (إنشاءات ومياه ومساحة)',
      nameEn: 'Civil Engineering',
      icon: Building,
      historicalCutoff: '68% - 73%',
      color: 'from-emerald-600 to-teal-700',
      description: 'تصميم المنشآت الخرسانية والمعدنية، الكباري، الطرق والكباري، ميكانيكا التربة، وهندسة الموانئ والري.'
    },
    {
      id: 'arch',
      nameAr: 'الهندسة المعمارية والتخطيط العمراني',
      nameEn: 'Architectural Engineering',
      icon: Compass,
      historicalCutoff: '70% - 75% + اختبار قدرات',
      color: 'from-purple-600 to-indigo-700',
      description: 'التصميم المعماري، تكنولوجيا البناء، والتخطيط الحضري للمدن الذكية والمستدامة.'
    }
  ];

  return (
    <div className="space-y-8 pb-16">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-6 sm:p-8 border-2 border-blue-500/40 shadow-xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-400/30 mb-2">
              <BarChart3 className="w-3.5 h-3.5 text-cyan-400" />
              <span>متابعة المعدل والتنسيق الداخلي • GPA & Departments</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white">
              حَاسِبَةُ دَرَجَاتِ الكِيمْيَاءِ وَمُحَاكِي تَنْسِيقِ الأَقْسَامِ
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm mt-1">
              احسب مجموعك المتوقع في الكيمياء الهندسية، واكتشف متطلبات التنسيق الداخلي لأقسام هندسة بنها وشبرا
            </p>
          </div>

          <div className="bg-slate-800/80 p-3.5 rounded-2xl border border-slate-700 text-center shrink-0">
            <span className="text-xs text-slate-400 font-bold">الكلية المحددة:</span>
            <div className="text-sm font-black text-cyan-400 mt-0.5">
              {isShoubra ? 'كلية الهندسة بشبرا (150 درجة)' : 'كلية الهندسة ببنها (100 درجة)'}
            </div>
          </div>
        </div>
      </div>

      {/* Grade Calculator Section */}
      <div className="bg-slate-800/90 rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-xl space-y-6">
        <h2 className="text-lg font-black text-white border-b border-slate-700 pb-3">
          ١. حاسبة درجات مادة الكيمياء الهندسية (أعمال السنة + العملي + التحريري)
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-700">
            <label className="block text-xs font-bold text-slate-300 mb-1">
              امتحان الميدتيرم (Midterm):
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={midterm}
                onChange={(e) => setMidterm(Number(e.target.value))}
                className="w-full bg-slate-800 border border-slate-600 rounded-xl px-3 py-2 text-sm font-bold text-white focus:outline-none focus:border-cyan-400"
              />
              <span className="text-xs text-slate-400 font-bold">/ {isShoubra ? 30 : 20}</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-700">
            <label className="block text-xs font-bold text-slate-300 mb-1">
              الشيتات والكويزات والغياب:
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={quizzes}
                onChange={(e) => setQuizzes(Number(e.target.value))}
                className="w-full bg-slate-800 border border-slate-600 rounded-xl px-3 py-2 text-sm font-bold text-white focus:outline-none focus:border-cyan-400"
              />
              <span className="text-xs text-slate-400 font-bold">/ {isShoubra ? 15 : 10}</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-700">
            <label className="block text-xs font-bold text-slate-300 mb-1">
              امتحان المعمل والشفوي (Lab):
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={lab}
                onChange={(e) => setLab(Number(e.target.value))}
                className="w-full bg-slate-800 border border-slate-600 rounded-xl px-3 py-2 text-sm font-bold text-white focus:outline-none focus:border-cyan-400"
              />
              <span className="text-xs text-slate-400 font-bold">/ {isShoubra ? 15 : 10}</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-700">
            <label className="block text-xs font-bold text-slate-300 mb-1">
              توقع امتحان الفاينال (Final):
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={finalExam}
                onChange={(e) => setFinalExam(Number(e.target.value))}
                className="w-full bg-slate-800 border border-slate-600 rounded-xl px-3 py-2 text-sm font-bold text-white focus:outline-none focus:border-cyan-400"
              />
              <span className="text-xs text-slate-400 font-bold">/ {isShoubra ? 90 : 60}</span>
            </div>
          </div>
        </div>

        {/* Result KPI Showcase */}
        <div className={`p-6 rounded-3xl border-2 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl ${gradeInfo.bg}`}>
          <div>
            <span className="text-xs font-bold text-slate-300">التقدير المتوقع في مادة الكيمياء:</span>
            <div className="flex items-baseline gap-3 mt-1">
              <span className={`text-4xl sm:text-5xl font-black font-mono ${gradeInfo.color}`}>
                {gradeInfo.grade}
              </span>
              <span className="text-lg font-black text-white">({gradeInfo.label})</span>
              <span className="text-xs font-bold text-slate-400 font-mono">GPA: {gradeInfo.gpa}</span>
            </div>
          </div>

          <div className="text-center sm:text-left">
            <span className="text-xs font-bold text-slate-300">المجموع والنسبة المئوية:</span>
            <div className="text-3xl font-black text-white font-mono mt-1">
              {totalObtained} / {totalMax} <span className="text-xl text-cyan-300 font-sans">({percentage.toFixed(1)}%)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Benha Engineering Departments Guide & Coordination */}
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-black text-white">
            ٢. دليل التنسيق الداخلي لأقسام كلية الهندسة (بنها وشبرا)
          </h2>
          <p className="text-xs text-slate-400 font-bold mt-1">
            مجموع سنة إعدادي هو الذي يحدد قسمك الأكاديمي للسنوات الأربع التالية. إليك خريطة الأقسام والحدود التقريبية:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {departments.map((dept) => {
            const Icon = dept.icon;
            return (
              <div
                key={dept.id}
                className="p-5 rounded-3xl bg-slate-800/90 border border-slate-700 hover:border-cyan-500/60 transition shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="p-2.5 rounded-2xl bg-slate-900 border border-slate-700 text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="text-[11px] font-black text-amber-300 bg-amber-950 px-2.5 py-1 rounded-full border border-amber-800">
                      تنسيق تقريبي: {dept.historicalCutoff}
                    </span>
                  </div>

                  <h3 className="font-black text-base text-white">{dept.nameAr}</h3>
                  <p className="text-[11px] font-mono text-slate-400 mb-2">{dept.nameEn}</p>
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">{dept.description}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-700/60 text-[10px] text-slate-400 font-bold flex items-center justify-between">
                  <span>أهمية الكيمياء للقسم:</span>
                  <span className="text-cyan-300 font-extrabold">
                    {dept.id === 'civil' ? 'عالية جداً (الأسمنت والمياه)' : dept.id === 'mech' ? 'عالية (الوقود والزيوت)' : 'أساسية'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
