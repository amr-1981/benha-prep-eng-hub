import React, { useState } from 'react';
import { Play, ExternalLink, Search, Filter, Youtube, Clock, Eye, Sparkles, Flame, Zap } from 'lucide-react';
import { 
  VIDEO_TOPICS, YOUTUBE_CHANNELS, LECTURE_VIDEOS,
  MATH_VIDEO_TOPICS, MATH_YOUTUBE_CHANNELS, MATH_LECTURE_VIDEOS,
  ENGLISH_VIDEO_TOPICS, ENGLISH_YOUTUBE_CHANNELS, ENGLISH_LECTURE_VIDEOS 
} from '../data/videosData';

export default function LecturesView({ activeDivision = 'all', setActiveDivision, activeSubject = 'chemistry' }) {
  const isMath = activeSubject === 'math';
  const isEnglish = activeSubject === 'english';
  const rawTopics = isMath ? MATH_VIDEO_TOPICS : isEnglish ? ENGLISH_VIDEO_TOPICS : VIDEO_TOPICS;
  const rawChannels = isMath ? MATH_YOUTUBE_CHANNELS : isEnglish ? ENGLISH_YOUTUBE_CHANNELS : YOUTUBE_CHANNELS;
  const rawVideos = isMath ? MATH_LECTURE_VIDEOS : isEnglish ? ENGLISH_LECTURE_VIDEOS : LECTURE_VIDEOS;

  const [activeTopic, setActiveTopic] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Isolate topics by active division
  const divisionTopics = React.useMemo(() => {
    if (isMath) {
      if (activeDivision === 'calculus') {
        return rawTopics.filter(t => t.id === 'all' || ['limits', 'leibniz', 'series', 'partial'].includes(t.id));
      } else if (activeDivision === 'algebra') {
        return rawTopics.filter(t => t.id === 'all' || ['matrices', 'complex', 'induction', 'geometry3d'].includes(t.id));
      }
    } else if (isEnglish) {
      if (activeDivision === 'vocab_grammar') {
        return rawTopics.filter(t => t.id === 'all' || ['affixes', 'grammar'].includes(t.id));
      } else if (activeDivision === 'reports_writing') {
        return rawTopics.filter(t => t.id === 'all' || ['reports', 'mechanism', 'correspondence'].includes(t.id));
      }
    } else {
      if (activeDivision === 'electro') {
        return rawTopics.filter(t => t.id === 'all' || t.id === 'corrosion');
      } else if (activeDivision === 'thermal') {
        return rawTopics.filter(t => t.id === 'all' || ['water', 'fuels', 'cement', 'polymers', 'labs'].includes(t.id));
      }
    }
    return rawTopics;
  }, [rawTopics, activeDivision, isMath, isEnglish]);

  const filteredVideos = rawVideos.filter((v) => {
    let matchDivision = true;
    if (activeDivision && activeDivision !== 'all') {
      if (isMath || isEnglish) {
        matchDivision = v.division === activeDivision;
      } else {
        const isElectro = v.topic === 'corrosion' || v.title.includes('تآكل') || v.title.includes('كهربية') || v.title.includes('جلفانية') || v.title.includes('نيرنست');
        matchDivision = (activeDivision === 'electro' ? isElectro : !isElectro);
      }
    }
    const matchTopic = activeTopic === 'all' || v.topic === activeTopic;
    const matchSearch = searchQuery.trim() === '' ||
      v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.channel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchDivision && matchTopic && matchSearch;
  });

  return (
    <div className="space-y-8 pb-16">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-rose-950 to-slate-900 rounded-3xl p-6 sm:p-8 border-2 border-rose-500/40 shadow-xl font-arabic">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold border border-rose-400/30 mb-2">
              <Youtube className="w-3.5 h-3.5 text-red-500" />
              <span>دليل المحاضرات المرئية • Curated Video Lectures</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white">
              {isMath ? 'مَحَطَّةُ فِيدْيُوهَاتِ وَشُرُوحَاتِ الرِّيَاضِيَّاتِ 1' : 
               isEnglish ? 'مَحَطَّةُ شُرُوحَاتِ وَفِيدْيُوهَاتِ اللُّغَةِ الإِنْجِلِيزِيَّةِ الفَنِّيَّةِ' : 
               'مَحَطَّةُ فِيدْيُوهَاتِ وَشُرُوحَاتِ الكِيمْيَاءِ الهَنْدَسِيَّةِ'}
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm mt-1">
              {isMath 
                ? 'تجميعة منتقاة لأفضل شروحات التفاضل والجبر لأساتذة ومهندسي الجامعات المصرية مع أفكار امتحانات شبرا.'
                : isEnglish
                ? 'شروحات مرئية لقواعد السوابق واللواحق، تحويل المعامل للمبني للمجهول، وهيكل التقارير والإيميلات الرسمية.'
                : 'تجميعة منتقاة لأفضل شروحات دكاترة ومهندسي الجامعات المصرية مع روابط مباشرة للدروس وقوائم التشغيل.'}
            </p>
          </div>

          {/* Search Input */}
          <div className="w-full md:w-72 relative">
            <input
              type="text"
              placeholder="ابحث عن درس أو موضوع..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800/90 border border-slate-700 rounded-2xl pl-10 pr-4 py-2.5 text-xs font-bold text-white placeholder-slate-400 focus:outline-none focus:border-rose-400 font-arabic"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          </div>
        </div>
      </div>

      {/* Recommended Channels Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-arabic">
        {rawChannels.map((ch, i) => (
          <a
            key={i}
            href={`https://www.youtube.com/results?search_query=${encodeURIComponent(ch.searchQuery)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-rose-400 transition-all shadow group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">{ch.avatar}</span>
                <span className="text-[10px] font-black text-rose-300 bg-rose-950 px-2 py-0.5 rounded-full border border-rose-800">
                  {ch.badge}
                </span>
              </div>
              <h3 className="font-black text-sm text-white group-hover:text-rose-300 transition-colors">
                {ch.name}
              </h3>
              <p className="text-[11px] text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                {ch.description}
              </p>
            </div>
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-700/60 text-[10px] text-slate-500 font-bold">
              <span>{ch.subscribers}</span>
              <span className="text-rose-400 flex items-center gap-1 group-hover:underline">
                فتح القناة <ExternalLink className="w-3 h-3" />
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* Active Department Isolation Badge */}
      <div className="flex items-center gap-2 text-xs font-arabic">
        <span className="text-slate-400 font-bold shrink-0 flex items-center gap-1 text-[11px]">
          <Sparkles className="w-3.5 h-3.5 text-rose-400" />
          <span>القسم الأكاديمي النشط:</span>
        </span>
        <div className="px-3.5 py-1.5 rounded-xl text-xs font-black bg-slate-800/90 text-rose-300 border border-slate-700 shadow-sm flex items-center gap-2">
          {isMath ? (
            activeDivision === 'calculus' ? (
              <>
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <span>فيديوهات وشروحات حساب التفاضل والتطبيقات (Calculus)</span>
              </>
            ) : (
              <>
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
                <span>فيديوهات وشروحات الجبر الخطي والهندسة الفراغية (Algebra)</span>
              </>
            )
          ) : isEnglish ? (
            activeDivision === 'vocab_grammar' ? (
              <>
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                <span>فيديوهات المصطلحات الفنية وقواعد الكتابة الهندسية (Vocabulary & Grammar)</span>
              </>
            ) : (
              <>
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                <span>فيديوهات إعداد التقارير والمراسلات الرسمية (Reports & Writing)</span>
              </>
            )
          ) : (
            activeDivision === 'thermal' ? (
              <>
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                <span>فيديوهات الكيمياء الحرارية والوقود ومواد البناء (د. هناء عبد الوهاب)</span>
              </>
            ) : (
              <>
                <Zap className="w-3.5 h-3.5 text-cyan-400" />
                <span>فيديوهات الكيمياء الكهربية وتآكل المعادن (د. سمر عبد الحميد)</span>
              </>
            )
          )}
        </div>
      </div>

      {/* Topic Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 font-arabic">
        {divisionTopics.map((top) => (
          <button
            key={top.id}
            onClick={() => setActiveTopic(top.id)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              activeTopic === top.id
                ? 'bg-rose-600 text-white shadow-md'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
            }`}
          >
            {top.label}
          </button>
        ))}
      </div>

      {/* Videos List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredVideos.map((video) => (
          <div
            key={video.id}
            className="bg-slate-800/90 rounded-2xl p-5 border border-slate-700 hover:border-rose-400/60 transition shadow-md flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between text-[11px] text-slate-400 font-bold mb-2">
                <span className="text-rose-400">{video.channel}</span>
                <span className="flex items-center gap-1 font-mono">
                  <Clock className="w-3 h-3" /> {video.duration}
                </span>
              </div>

              <h3 className="font-black text-sm text-white group-hover:text-rose-200 transition-colors leading-snug">
                {video.title}
              </h3>

              <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                {video.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-3">
                {video.tags.map((tag, ti) => (
                  <span key={ti} className="text-[10px] bg-slate-900 text-slate-400 px-2 py-0.5 rounded-md border border-slate-800">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 w-full py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white font-black text-xs flex items-center justify-center gap-2 shadow-md transition active:scale-95"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>مشاهدة الشرح على YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        ))}
      </div>

    </div>
  );
}
