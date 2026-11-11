import React, { useState } from 'react';
import { 
  FolderArchive, Download, ExternalLink, Search, Filter, BookOpen, 
  FileText, Award, Sparkles, FileCode, CheckCircle2, FolderPlus, 
  Share2, HardDrive, Send, AlertCircle, Info, ChevronRight, Flame, Zap, Lightbulb
} from 'lucide-react';
import { MATERIAL_CATEGORIES, CLOUD_DRIVES, MATERIAL_FILES } from '../data/materialsData';

export default function MaterialsView({ setActiveTab, activeDivision = 'all', setActiveDivision, activeSubject = 'chemistry' }) {
  const isMath = activeSubject === 'math';
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showIntegrateModal, setShowIntegrateModal] = useState(false);
  const [expandedArabicFiles, setExpandedArabicFiles] = useState(new Set());

  const toggleArabicFile = (id) => {
    setExpandedArabicFiles(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  // Filter materials strictly to this department
  const filteredFiles = MATERIAL_FILES.filter((file) => {
    let matchDivision = true;
    if (activeDivision && activeDivision !== 'all') {
      matchDivision = file.division === activeDivision || (file.division === 'all' && (isMath ? file.tags?.includes('Math 1') : !file.tags?.includes('Math 1')));
    }
    const matchCat = activeCategory === 'all' || file.category === activeCategory;
    const query = searchQuery.trim().toLowerCase();
    const matchQuery = query === '' ||
      file.title.toLowerCase().includes(query) ||
      file.description.toLowerCase().includes(query) ||
      file.author.toLowerCase().includes(query) ||
      file.tags.some(t => t.toLowerCase().includes(query));
    
    return matchDivision && matchCat && matchQuery;
  });

  return (
    <div className="space-y-8 pb-16 font-arabic">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 rounded-3xl p-6 sm:p-8 border-2 border-blue-500/40 shadow-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-right">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-400/30">
              <FolderArchive className="w-3.5 h-3.5 text-cyan-400" />
              <span>مستودع الماتريال والملفات • Course Repository & Downloads</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-white">
              {isMath ? 'مَكْتَبَةُ المَاتِرْيَالِ وَمُسْتَوْدَعُ مِلَفَّاتِ الرِّيَاضِيَّاتِ 1' : 'مَكْتَبَةُ المَاتِرْيَالِ وَمُسْتَوْدَعُ مِلَفَّاتِ الكِيمْيَاءِ الهَنْدَسِيَّةِ'}
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl font-normal leading-relaxed">
              {isMath 
                ? 'تحميل وتصفح مباشر لمذكرات وسلايدات دكاترة ومعيدي قسم الرياضيات الهندسية بهندسة شبرا، شيتات A4 للطباعة، وبنك القوانين والامتحانات.'
                : 'تحميل وتصفح مباشر لكتب وسلايدات دكاترة هندسة شبرا، شيتات وسكاشن المعيدين بالحلول النموذجية، امتحانات الفاينال السابقة، وملخصات ليلة الامتحان.'}
            </p>
          </div>

          {/* Quick Add / Integrate Material Action */}
          <div className="shrink-0 flex flex-col gap-2 w-full sm:w-auto">
            <button
              onClick={() => setShowIntegrateModal(true)}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-900/40 transition hover:scale-[1.02]"
            >
              <FolderPlus className="w-4 h-4" />
              <span>كيف تدمج ماتريال إضافية في الموقع؟</span>
            </button>
            <span className="text-[11px] text-slate-400 text-center font-bold">
              يدعم ملفات PDF، درايف، وروابط التليجرام
            </span>
          </div>
        </div>
      </div>

      {/* Integration Guide Box (Modal or In-Page Callout) */}
      {showIntegrateModal && (
        <div className="p-6 rounded-3xl bg-slate-800/95 border-2 border-cyan-400/80 shadow-2xl space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between border-b border-slate-700 pb-3">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-800">
                <HardDrive className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-black text-base text-white">طرق دمج الماتريال الخاصة بكم مع المشروع</h3>
                <p className="text-xs text-slate-400">يمكنكم دمج أي مذكرات أو ملفات أو شيتات بثلاث طرق مباشرة ومرنة:</p>
              </div>
            </div>
            <button
              onClick={() => setShowIntegrateModal(false)}
              className="text-xs text-slate-400 hover:text-white bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-700"
            >
              إغلاق الإرشادات ✕
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            
            {/* Method 1 */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-700/80 space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-black">
                <span className="w-6 h-6 rounded-full bg-cyan-950 flex items-center justify-center border border-cyan-800">١</span>
                <span>وضع الملفات في مجلد المشروع</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                ضع ملفات الـ PDF أو الصور داخل مجلد:
                <code className="block my-1.5 p-1.5 rounded bg-slate-950 text-cyan-300 text-[11px] font-mono text-left" dir="ltr">
                  /public/materials/
                </code>
                وستعمل روابط التحميل والتصفح الفوري في الموقع مباشرة دون الحاجة لأي خوادم خارجية!
              </p>
            </div>

            {/* Method 2 */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-700/80 space-y-2">
              <div className="flex items-center gap-2 text-blue-400 text-xs font-black">
                <span className="w-6 h-6 rounded-full bg-blue-950 flex items-center justify-center border border-blue-800">٢</span>
                <span>روابط Google Drive أو Telegram</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                إذا كانت الماتريال مرفوعة على درايف أو قناة تليجرام، ما عليك سوى تزويدنا بالروابط، وسنقوم بتحديث <code className="text-cyan-300 font-mono">materialsData.js</code> لربطها فوراً بأزرار التحميل المباشرة.
              </p>
            </div>

            {/* Method 3 */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-700/80 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-black">
                <span className="w-6 h-6 rounded-full bg-emerald-950 flex items-center justify-center border border-emerald-800">٣</span>
                <span>تحويلها لمحتوى تفاعلي حي</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                ارفع لنا أي شيت أو امتحان هنا في الشات؛ وسنقوم باستخراج مسائله وإضافتها فوراً إلى <strong>المعمل الحسابي</strong>، وأسئلته النظرية إلى <strong>بنك الامتحانات (MCQ)</strong> ومعجم الحفظ!
              </p>
            </div>

          </div>
        </div>
      )}

      {/* Cloud Drives & Channels Cards */}
      <div className="space-y-3">
        <h2 className="text-base font-black text-white flex items-center gap-2">
          <HardDrive className="w-4 h-4 text-cyan-400" />
          <span>المصادر السحابية والقنوات الرسمية لدفعة هندسة شبرا:</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {isMath ? (
            <div className="p-5 rounded-3xl bg-slate-800/90 border border-slate-700 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-black text-cyan-300 bg-cyan-950 px-2.5 py-0.5 rounded-full border border-cyan-800/60">
                    قسم الرياضيات 1
                  </span>
                  <HardDrive className="w-4 h-4 text-cyan-400" />
                </div>
                <h3 className="font-black text-sm text-white">
                  {activeDivision === 'calculus' ? 'مستودع مذكرات حساب التفاضل والتطبيقات' : 'مستودع مذكرات الجبر والهندسة الفراغية'}
                </h3>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  سلايدات وشيتات الدكاترة والمعيدين بشبرا، شيتات A4 للطباعة التفاعلية، وبنك امتحانات الفاينال.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between text-[11px] font-bold text-cyan-400">
                <span>تصفح وتحميل مباشر للملفات أدناه</span>
                <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </div>
            </div>
          ) : (
            CLOUD_DRIVES.map((drive, idx) => (
              <a
                key={idx}
                href={drive.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-3xl bg-slate-800/90 hover:bg-slate-800 border border-slate-700 hover:border-cyan-400/60 transition-all shadow-md group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-black text-cyan-300 bg-cyan-950 px-2.5 py-0.5 rounded-full border border-cyan-800/60">
                      {drive.badge}
                    </span>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition" />
                  </div>
                  <h3 className="font-black text-sm text-white group-hover:text-cyan-300 transition-colors">
                    {drive.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    {drive.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between text-[11px] font-bold text-cyan-400">
                  <span>فتح الرابط السحابي</span>
                  <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </div>
              </a>
            ))
          )}
        </div>
      </div>

      {/* Active Department Isolation Badge */}
      <div className="flex items-center gap-2 text-xs">
        <span className="text-slate-400 font-bold shrink-0 flex items-center gap-1 text-[11px]">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>المستودع المعتمد للقسم الأكاديمي:</span>
        </span>
        <div className="px-3.5 py-1.5 rounded-xl text-xs font-black bg-slate-800/90 text-cyan-300 border border-slate-700 shadow-sm flex items-center gap-2">
          {isMath ? (
            activeDivision === 'calculus' ? (
              <>
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <span>قسم حساب التفاضل والتطبيقات (Calculus MTH 001)</span>
              </>
            ) : (
              <>
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
                <span>قسم الجبر الخطي والهندسة الفراغية (Algebra MTH 001)</span>
              </>
            )
          ) : (
            activeDivision === 'thermal' ? (
              <>
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                <span>قسم الكيمياء الحرارية والوقود ومواد البناء (د. هناء عبد الوهاب)</span>
              </>
            ) : (
              <>
                <Zap className="w-3.5 h-3.5 text-cyan-400" />
                <span>قسم الكيمياء الكهربية وتآكل المعادن وحمايتها (د. سمر عبد الحميد)</span>
              </>
            )
          )}
        </div>
      </div>

      {/* Search & Category Filter Navigation */}
      <div className="bg-slate-800/90 p-4 sm:p-5 rounded-2xl border border-slate-700 shadow-md space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 no-scrollbar text-xs">
            {MATERIAL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-black whitespace-nowrap transition-all flex items-center gap-2 shrink-0 ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-slate-900/60 text-slate-300 hover:text-white border border-slate-700/60 hover:bg-slate-700/60'
                }`}
              >
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72 shrink-0">
            <input
              type="text"
              placeholder="ابحث عن شيت أو محاضرة أو ملخص..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-9 pr-4 py-2 text-xs font-bold text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          </div>

        </div>
      </div>

      {/* Materials List Cards Grid */}
      <div className="space-y-4">
        
        <div className="flex items-center justify-between text-xs font-bold text-slate-400 px-2">
          <span>عدد الملفات المتاحة: {filteredFiles.length} ملف</span>
          <span>كلية الهندسة بشبرا - جامعة بنها</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredFiles.map((file) => (
            <div
              key={file.id}
              className="p-5 rounded-3xl bg-slate-800/90 border border-slate-700/80 hover:border-cyan-500/50 transition-all shadow-md flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                
                {/* Header row: Format pill + Size + Pages */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-mono text-[10px] font-black px-2.5 py-0.5 rounded-full bg-rose-950 text-rose-300 border border-rose-800/60">
                      {file.format}
                    </span>
                    <span className="text-[11px] font-bold text-slate-400 font-mono">
                      {file.size} • {file.pages} صفحة
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                      file.division === 'thermal'
                        ? 'text-amber-300 bg-amber-950/80 border-amber-800/60'
                        : file.division === 'electro'
                        ? 'text-cyan-300 bg-cyan-950/80 border-cyan-800/60'
                        : 'text-indigo-300 bg-indigo-950/80 border-indigo-800/60'
                    }`}>
                      {file.division === 'thermal' ? '🔥 حرارية (د. هناء)' : file.division === 'electro' ? '⚡ كهربية (د. سمر)' : '📑 منصة شبرا'}
                    </span>
                  </div>

                  {file.isOfficial && (
                    <span className="text-[10px] font-bold text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-800/50 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>معتمد</span>
                    </span>
                  )}
                </div>

                {/* Primary English File Title */}
                <h3 className="text-base font-black text-white font-mono text-left leading-snug" dir="ltr">
                  {file.titleEn || file.title}
                </h3>

                {/* Primary English Description */}
                <p className="text-xs font-mono text-slate-300 leading-relaxed text-left font-normal" dir="ltr">
                  {file.descriptionEn || file.description}
                </p>

                {/* Small Button for On-Demand Arabic Explanation */}
                <div className="pt-1">
                  <button
                    onClick={() => toggleArabicFile(file.id)}
                    className={`px-2.5 py-1.5 rounded-xl text-[11px] font-bold transition-all flex items-center gap-1.5 border ${
                      expandedArabicFiles.has(file.id)
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-xs'
                        : 'bg-slate-900/90 hover:bg-slate-900 text-amber-400/90 hover:text-amber-300 border-slate-700/80 hover:border-amber-500/40'
                    }`}
                  >
                    <Lightbulb className={`w-3.5 h-3.5 ${expandedArabicFiles.has(file.id) ? 'text-amber-300' : 'text-amber-400'}`} />
                    <span>{expandedArabicFiles.has(file.id) ? 'إخفاء الشرح بالعربي' : '💡 الشرح بالعربي (Arabic Summary)'}</span>
                    <span className="text-[9px] opacity-70 px-1 rounded bg-black/30 font-mono">
                      {expandedArabicFiles.has(file.id) ? '▲' : '▼'}
                    </span>
                  </button>
                </div>

                {/* Expandable Arabic Drawer */}
                {expandedArabicFiles.has(file.id) && (
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-amber-950/25 to-slate-900/90 border border-amber-500/30 space-y-2 text-right animate-in fade-in duration-200 mt-2" dir="rtl">
                    <div className="flex items-center justify-between border-b border-amber-500/20 pb-1">
                      <span className="text-xs font-black text-amber-300">{file.title}</span>
                      <span className="text-[10px] text-amber-400/80 font-bold bg-amber-950/60 px-2 py-0.5 rounded border border-amber-700/40">توصيف الماتريال</span>
                    </div>
                    <p className="text-xs font-medium text-slate-200 leading-relaxed">
                      {file.description}
                    </p>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {file.tags.map((tag, ti) => (
                    <span key={ti} className="text-[10px] font-mono text-cyan-300 bg-slate-900 px-2 py-0.5 rounded-md border border-slate-700/60">
                      #{tag}
                    </span>
                  ))}
                </div>

              </div>

              {/* Author & Real Action Buttons (No dead or dummy links) */}
              <div className="pt-3 border-t border-slate-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="text-[11px] text-slate-400">
                  <span className="text-slate-500 block text-[10px]">المصدر / الإعداد:</span>
                  <span className="font-bold text-slate-300">{file.author}</span>
                </div>

                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  {file.actionType === 'external_link' && (
                    <>
                      <a
                        href={file.viewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-xl bg-slate-700/80 hover:bg-slate-700 text-slate-200 hover:text-white font-bold text-xs flex items-center gap-1.5 transition border border-slate-600 shadow"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                        <span>معاينة Google Drive</span>
                      </a>
                      <a
                        href={file.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-black text-xs flex items-center gap-1.5 transition shadow-md"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>تحميل PDF مباشر</span>
                      </a>
                    </>
                  )}

                  {file.actionType === 'platform_sheet' && (
                    <button
                      onClick={() => setActiveTab && setActiveTab(file.targetTab)}
                      className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-xs flex items-center gap-1.5 transition shadow"
                    >
                      <FileText className="w-3.5 h-3.5 text-cyan-300" />
                      <span>فتح وعرض الشيت للطباعة A4 🖨️</span>
                    </button>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
