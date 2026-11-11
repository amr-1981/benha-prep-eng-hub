import React, { useState } from 'react';
import { Play, ExternalLink, Search, Filter, Youtube, Clock, Eye, Sparkles, Flame, Zap } from 'lucide-react';
import { VIDEO_TOPICS, YOUTUBE_CHANNELS, LECTURE_VIDEOS } from '../data/videosData';

export default function LecturesView({ activeDivision = 'all', setActiveDivision }) {
  const [activeTopic, setActiveTopic] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredVideos = LECTURE_VIDEOS.filter((v) => {
    const isElectro = v.topic === 'corrosion' || v.title.includes('تآكل') || v.title.includes('كهربية') || v.title.includes('جلفانية') || v.title.includes('نيرنست');
    const matchDivision = !activeDivision || activeDivision === 'all' || activeDivision === 'calculus' || activeDivision === 'algebra' || (activeDivision === 'electro' ? isElectro : !isElectro);
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
      <div className="bg-gradient-to-r from-slate-900 via-rose-950 to-slate-900 rounded-3xl p-6 sm:p-8 border-2 border-rose-500/40 shadow-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold border border-rose-400/30 mb-2">
              <Youtube className="w-3.5 h-3.5 text-red-500" />
              <span>دليل المحاضرات المرئية • Curated Video Lectures</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white">
              مَحَطَّةُ فِيدْيُوهَاتِ وَشُرُوحَاتِ الكِيمْيَاءِ الهَنْدَسِيَّةِ
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm mt-1">
              تجميعة منتقاة لأفضل شروحات دكاترة ومهندسي الجامعات المصرية مع روابط مباشرة للدروس وقوائم التشغيل
            </p>
          </div>

          {/* Search Input */}
          <div className="w-full md:w-72 relative">
            <input
              type="text"
              placeholder="ابحث عن درس أو موضوع..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800/90 border border-slate-700 rounded-2xl pl-10 pr-4 py-2.5 text-xs font-bold text-white placeholder-slate-400 focus:outline-none focus:border-rose-400"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          </div>
        </div>
      </div>

      {/* Recommended Channels Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {YOUTUBE_CHANNELS.map((ch, i) => (
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

      {/* Two-Branch Academic Division Switcher */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs">
        <span className="text-slate-400 font-bold shrink-0 flex items-center gap-1 text-[11px]">
          <Sparkles className="w-3.5 h-3.5 text-rose-400" />
          <span>قسم الفيديوهات:</span>
        </span>
        <button
          onClick={() => setActiveDivision && setActiveDivision('all')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition whitespace-nowrap ${
            activeDivision === 'all'
              ? 'bg-rose-600 text-white shadow-md'
              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          جميع الفيديوهات (القسمان)
        </button>
        <button
          onClick={() => {
            setActiveDivision && setActiveDivision('thermal');
            setActiveTopic('all');
          }}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition flex items-center gap-1.5 whitespace-nowrap ${
            activeDivision === 'thermal'
              ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md'
              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          <Flame className="w-3.5 h-3.5 text-amber-300" />
          <span>فيديوهات الكيمياء الحرارية والصناعية (د. هناء)</span>
        </button>
        <button
          onClick={() => {
            setActiveDivision && setActiveDivision('electro');
            setActiveTopic('all');
          }}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition flex items-center gap-1.5 whitespace-nowrap ${
            activeDivision === 'electro'
              ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md'
              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          <Zap className="w-3.5 h-3.5 text-cyan-300" />
          <span>فيديوهات الكيمياء الكهربية والتآكل (د. سمر)</span>
        </button>
      </div>

      {/* Topic Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {VIDEO_TOPICS.map((top) => (
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
