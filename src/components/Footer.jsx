import React from 'react';
import { GraduationCap, Heart, Github } from 'lucide-react';
import { FACULTY_INFO } from '../data/chemistryCurriculumData';

export default function Footer({ setActiveTab }) {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8 no-print text-xs text-slate-400 font-bold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-white font-black">بوابة إعدادي هندسة شبرا | كلية الهندسة بشبرا - جامعة بنها (FES)</span>
              <p className="text-[11px] text-slate-500 font-normal">
                منصة أكاديمية وتفاعلية غير ربحية مخصصة لطلاب إعدادي هندسة شبرا (مبنى روض الفرج ومبنى الخلفاوي - 108 شارع شبرا)
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs">
            <button onClick={() => setActiveTab('syllabus')} className="hover:text-cyan-400 transition">المنهج</button>
            <button onClick={() => setActiveTab('glossary')} className="hover:text-cyan-400 transition">معجم الحفظ</button>
            <button onClick={() => setActiveTab('lab')} className="hover:text-cyan-400 transition">المعمل (حاسبات وتجارب)</button>
            <button onClick={() => setActiveTab('cheatsheets')} className="hover:text-cyan-400 transition">شيتات A4</button>
            <button onClick={() => setActiveTab('quiz')} className="hover:text-cyan-400 transition">الامتحانات</button>
            <button onClick={() => setActiveTab('materials')} className="hover:text-cyan-400 transition">الماتريال</button>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
          <span>المواد القادمة قريباً: الرياضيات الهندسية 1 • الميكانيكا الهندسية • الفيزياء • الرسم الهندسي الإسقاطي</span>
          <span className="flex items-center gap-1">
            صنع بكل 💙 لدعم مهندسي المستقبل
          </span>
        </div>

      </div>
    </footer>
  );
}
