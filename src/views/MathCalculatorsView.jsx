import React, { useState, useMemo } from 'react';
import { 
  Calculator, Grid, Sparkles, RefreshCw, CheckCircle2, ChevronDown, 
  ChevronUp, ArrowRight, Lightbulb, Compass, Layers, Binary
} from 'lucide-react';

export default function MathCalculatorsView({ activeDivision = 'all', setActiveDivision }) {
  const [activeTab, setActiveTab] = useState('leibniz'); // 'leibniz' | 'matrices' | 'complex' | 'geometry3d'
  const [showArabicExplanation, setShowArabicExplanation] = useState(false);

  // ----------------------------------------------------
  // TOOL 1: Leibniz Higher Derivatives Solver State
  // ----------------------------------------------------
  const [leibnizN, setLeibnizN] = useState(3);
  const [leibnizPreset, setLeibnizPreset] = useState('x2_exp'); // 'x2_exp' | 'x2_sin' | 'x3_exp'
  const [leibnizA, setLeibnizA] = useState(2);

  // Helper for binomial coefficient (n C k)
  const comb = (n, k) => {
    if (k < 0 || k > n) return 0;
    if (k === 0 || k === n) return 1;
    let c = 1;
    for (let i = 1; i <= k; i++) {
      c = (c * (n - i + 1)) / i;
    }
    return c;
  };

  // Leibniz computation
  const leibnizResult = useMemo(() => {
    const n = Math.max(1, Math.min(6, Number(leibnizN) || 3));
    const a = Number(leibnizA) || 2;
    const terms = [];

    let polyDegree = 2;
    let polyName = `x²`;
    let expType = 'exp'; // 'exp' | 'sin'

    if (leibnizPreset === 'x2_exp') {
      polyDegree = 2;
      polyName = 'x²';
      expType = 'exp';
    } else if (leibnizPreset === 'x2_sin') {
      polyDegree = 2;
      polyName = 'x²';
      expType = 'sin';
    } else if (leibnizPreset === 'x3_exp') {
      polyDegree = 3;
      polyName = 'x³';
      expType = 'exp';
    }

    const maxK = Math.min(n, polyDegree);

    for (let k = 0; k <= maxK; k++) {
      const c = comb(n, k);
      let vDeriv = '';
      if (polyDegree === 2) {
        if (k === 0) vDeriv = 'x²';
        else if (k === 1) vDeriv = '2x';
        else if (k === 2) vDeriv = '2';
      } else if (polyDegree === 3) {
        if (k === 0) vDeriv = 'x³';
        else if (k === 1) vDeriv = '3x²';
        else if (k === 2) vDeriv = '6x';
        else if (k === 3) vDeriv = '6';
      }

      let uDeriv = '';
      let termFormula = '';

      if (expType === 'exp') {
        const power = Math.max(0, n - k);
        const coeff = Math.pow(a, power);
        uDeriv = `${coeff > 1 ? coeff + ' · ' : ''}e^(${a}x)`;
        termFormula = `${c !== 1 ? c + ' · ' : ''}(${uDeriv}) · (${vDeriv})`;
      } else {
        const power = Math.max(0, n - k);
        const coeff = Math.pow(a, power);
        uDeriv = `${coeff > 1 ? coeff + ' · ' : ''}sin(${a}x + ${(n-k)}π/2)`;
        termFormula = `${c !== 1 ? c + ' · ' : ''}(${uDeriv}) · (${vDeriv})`;
      }

      terms.push({
        k,
        c,
        uDeriv,
        vDeriv,
        termFormula
      });
    }

    return {
      n,
      a,
      polyName,
      expType,
      terms
    };
  }, [leibnizN, leibnizPreset, leibnizA]);

  // ----------------------------------------------------
  // TOOL 2: 3x3 Matrix Inverter & Determinant State
  // ----------------------------------------------------
  const [matrix, setMatrix] = useState([
    [1, 2, 3],
    [0, 1, 4],
    [5, 6, 0]
  ]);

  const updateMatrixCell = (r, c, val) => {
    const num = parseFloat(val) || 0;
    const next = matrix.map((row, ri) => 
      row.map((col, ci) => (ri === r && ci === c ? num : col))
    );
    setMatrix(next);
  };

  const matrixCalc = useMemo(() => {
    const [[a, b, c], [d, e, f], [g, h, i]] = matrix;

    // 2x2 minors
    const m11 = e * i - f * h;
    const m12 = d * i - f * g;
    const m13 = d * h - e * g;

    const m21 = b * i - c * h;
    const m22 = a * i - c * g;
    const m23 = a * h - b * g;

    const m31 = b * f - c * e;
    const m32 = a * f - c * d;
    const m33 = a * e - b * d;

    // Determinant
    const det = a * m11 - b * m12 + c * m13;

    // Cofactor matrix C
    const C = [
      [m11, -m12, m13],
      [-m21, m22, -m23],
      [m31, -m32, m33]
    ];

    // Adjoint = C^T
    const adj = [
      [C[0][0], C[1][0], C[2][0]],
      [C[0][1], C[1][1], C[2][1]],
      [C[0][2], C[1][2], C[2][2]]
    ];

    // Inverse
    let inv = null;
    let rank = 3;
    if (Math.abs(det) > 1e-9) {
      inv = adj.map(row => row.map(v => Number((v / det).toFixed(3))));
      rank = 3;
    } else {
      // Check if rank is 2 or 1
      const minors2x2 = [m11, m12, m13, m21, m22, m23, m31, m32, m33];
      const hasNonZeroMinor = minors2x2.some(m => Math.abs(m) > 1e-9);
      if (hasNonZeroMinor) rank = 2;
      else {
        const hasNonZeroElem = matrix.some(row => row.some(x => Math.abs(x) > 1e-9));
        rank = hasNonZeroElem ? 1 : 0;
      }
    }

    return { det, m11, m12, m13, C, adj, inv, rank };
  }, [matrix]);

  // ----------------------------------------------------
  // TOOL 3: Complex Numbers & De Moivre State
  // ----------------------------------------------------
  const [complexX, setComplexX] = useState(1);
  const [complexY, setComplexY] = useState(1);
  const [complexPower, setComplexPower] = useState(4);
  const [complexRootsN, setComplexRootsN] = useState(3);

  const complexCalc = useMemo(() => {
    const x = Number(complexX) || 0;
    const y = Number(complexY) || 0;
    const n = Math.max(1, Math.min(12, Number(complexPower) || 1));
    const m = Math.max(1, Math.min(8, Number(complexRootsN) || 3));

    const r = Math.sqrt(x * x + y * y);
    const thetaRad = Math.atan2(y, x); // in (-π, π]
    const thetaDeg = (thetaRad * 180) / Math.PI;

    // Power via De Moivre
    const powerR = Math.pow(r, n);
    const powerThetaRad = n * thetaRad;
    const powerX = powerR * Math.cos(powerThetaRad);
    const powerY = powerR * Math.sin(powerThetaRad);

    // m-th Roots
    const rootR = Math.pow(r, 1 / m);
    const roots = [];
    for (let k = 0; k < m; k++) {
      const angle = (thetaRad + 2 * Math.PI * k) / m;
      const rx = rootR * Math.cos(angle);
      const ry = rootR * Math.sin(angle);
      const angleDeg = (angle * 180) / Math.PI;
      roots.push({
        k,
        angleRad: angle,
        angleDeg: angleDeg.toFixed(1),
        rx: rx.toFixed(3),
        ry: ry.toFixed(3)
      });
    }

    return {
      r: r.toFixed(3),
      thetaRad: thetaRad.toFixed(3),
      thetaDeg: thetaDeg.toFixed(1),
      powerR: powerR.toFixed(3),
      powerX: powerX.toFixed(3),
      powerY: powerY.toFixed(3),
      rootR: rootR.toFixed(3),
      roots
    };
  }, [complexX, complexY, complexPower, complexRootsN]);

  // ----------------------------------------------------
  // TOOL 4: 3D Analytical Geometry (Plane & Distance)
  // ----------------------------------------------------
  const [pointP, setPointP] = useState({ x: 1, y: 2, z: 3 });
  const [plane, setPlane] = useState({ a: 2, b: -2, c: 1, d: 5 });

  const geometryCalc = useMemo(() => {
    const { x, y, z } = pointP;
    const { a, b, c, d } = plane;

    const numerator = Math.abs(a * x + b * y + c * z + d);
    const normalMagSq = a * a + b * b + c * c;
    const denominator = Math.sqrt(normalMagSq);
    const distance = denominator > 0 ? numerator / denominator : 0;

    return {
      numerator,
      denominator: denominator.toFixed(3),
      distance: distance.toFixed(3),
      normalVector: `(${a}, ${b}, ${c})`
    };
  }, [pointP, plane]);

  return (
    <div className="space-y-8 pb-16">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 border-2 border-indigo-500/40 shadow-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold border border-indigo-400/30 mb-2">
              <Calculator className="w-3.5 h-3.5" />
              <span>معمل حاسبات الرياضيات الهندسية 1 (MTH 001) • هندسة شبرا</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white">
              حَاسِبَاتُ الرِّيَاضِيَّاتِ التَّفَاعُلِيَّةِ وخُطُوَاتُ الحَلِّ
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm mt-1">
              أدوات حل برمجية دقيقة خطوة بخطوة لمسائل: <strong>مشتقة لايبنتز</strong>، <strong>مصفوفات غاوس والرتبة</strong>، <strong>الأعداد المركبة وديموافر</strong>، و<strong>هندسة المستويات الفراغية</strong>.
            </p>
          </div>

          {/* Toggle All Arabic Drawer */}
          <button
            onClick={() => setShowArabicExplanation(prev => !prev)}
            className={`px-4 py-2 rounded-2xl text-xs font-bold transition flex items-center gap-2 border shrink-0 ${
              showArabicExplanation
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                : 'bg-slate-800 text-amber-400 hover:text-amber-300 border-slate-700'
            }`}
          >
            <Lightbulb className="w-4 h-4 text-amber-400" />
            <span>{showArabicExplanation ? 'إخفاء الشرح بالعربي' : '💡 الشرح بالعربي للأدوات'}</span>
          </button>
        </div>
      </div>

      {/* Tool Selector Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-800">
        {[
          { id: 'leibniz', label: 'حاسبة نظرية لايبنتز (Leibniz Formula)', icon: Binary, division: 'calculus' },
          { id: 'matrices', label: 'حاسبة المصفوفات والمحدد والرتبة (3x3 Matrix)', icon: Grid, division: 'algebra' },
          { id: 'complex', label: 'حاسبة الأعداد المركبة وديموافر (De Moivre)', icon: Sparkles, division: 'algebra' },
          { id: 'geometry3d', label: 'حاسبة هندسة الفراغ والمستويات (3D Plane)', icon: Compass, division: 'algebra' }
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 border ${
                isActive
                  ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white border-indigo-400 shadow-md'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border-slate-800'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-indigo-400'}`} />
              <span>{tab.label}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-black/30 font-mono opacity-80">
                {tab.division === 'calculus' ? 'تفاضل' : 'جبر'}
              </span>
            </button>
          );
        })}
      </div>

      {/* ======================================================== */}
      {/* TOOL 1: LEIBNIZ SOLVER                                  */}
      {/* ======================================================== */}
      {activeTab === 'leibniz' && (
        <div className="bg-slate-850/90 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
                <Binary className="w-5 h-5 text-indigo-400" />
                <span>Leibniz's Formula Step-by-Step Solver for (u · v)^(n)</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Computes the n-th derivative of a product using Leibniz's theorem: (u · v)^(n) = ∑ (n C k) u^(n-k) v^(k)
              </p>
            </div>

            {/* Presets */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 font-bold">Presets:</span>
              <button
                onClick={() => { setLeibnizPreset('x2_exp'); setLeibnizA(2); setLeibnizN(3); }}
                className={`px-2.5 py-1 rounded-xl text-xs font-bold border ${leibnizPreset === 'x2_exp' ? 'bg-indigo-600 text-white border-indigo-400' : 'bg-slate-900 text-slate-400 border-slate-800'}`}
              >
                x² · e^(2x)
              </button>
              <button
                onClick={() => { setLeibnizPreset('x2_sin'); setLeibnizA(3); setLeibnizN(4); }}
                className={`px-2.5 py-1 rounded-xl text-xs font-bold border ${leibnizPreset === 'x2_sin' ? 'bg-indigo-600 text-white border-indigo-400' : 'bg-slate-900 text-slate-400 border-slate-800'}`}
              >
                x² · sin(3x)
              </button>
              <button
                onClick={() => { setLeibnizPreset('x3_exp'); setLeibnizA(1); setLeibnizN(5); }}
                className={`px-2.5 py-1 rounded-xl text-xs font-bold border ${leibnizPreset === 'x3_exp' ? 'bg-indigo-600 text-white border-indigo-400' : 'bg-slate-900 text-slate-400 border-slate-800'}`}
              >
                x³ · e^x
              </button>
            </div>
          </div>

          {/* Interactive Parameters */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <label className="text-xs font-bold text-slate-300 block">
                Derivative Order (n): <span className="text-indigo-400 font-mono text-sm">{leibnizN}</span>
              </label>
              <input 
                type="range" 
                min="1" 
                max="6" 
                value={leibnizN} 
                onChange={(e) => setLeibnizN(Number(e.target.value))}
                className="w-full accent-indigo-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>n = 1</span>
                <span>n = 3</span>
                <span>n = 6</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <label className="text-xs font-bold text-slate-300 block">
                Polynomial Factor v(x):
              </label>
              <div className="p-2.5 rounded-xl bg-slate-950 font-mono text-sm font-bold text-cyan-300 border border-slate-800 text-center">
                v(x) = {leibnizResult.polyName} (Degree: {leibnizPreset === 'x3_exp' ? 3 : 2})
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <label className="text-xs font-bold text-slate-300 block">
                Transcendental Factor u(x):
              </label>
              <div className="p-2.5 rounded-xl bg-slate-950 font-mono text-sm font-bold text-amber-300 border border-slate-800 text-center">
                u(x) = {leibnizResult.expType === 'exp' ? `e^(${leibnizResult.a}x)` : `sin(${leibnizResult.a}x)`}
              </div>
            </div>
          </div>

          {/* Mathematical Step Expansion */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center justify-between">
              <span>Step-by-Step Binomial Expansion (Leibniz Terms):</span>
              <span className="text-xs text-indigo-400 font-mono font-normal">
                Terminating after k = {leibnizResult.terms.length - 1} because v^(k) = 0 for higher derivatives
              </span>
            </h3>

            <div className="space-y-2">
              {leibnizResult.terms.map((term) => (
                <div 
                  key={term.k}
                  className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-3 text-left font-mono text-xs"
                  dir="ltr"
                >
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="px-2 py-0.5 rounded-md bg-indigo-950 text-indigo-300 border border-indigo-800/60 font-bold">
                      k = {term.k}
                    </span>
                    <span className="text-slate-400">
                      ({leibnizResult.n} C {term.k}) = <strong className="text-white">{term.c}</strong>
                    </span>
                  </div>

                  <div className="text-slate-300 text-xs overflow-x-auto">
                    <span className="text-amber-300 font-bold">u^({leibnizResult.n - term.k}):</span> [{term.uDeriv}]
                    <span className="text-slate-500 mx-2">×</span>
                    <span className="text-cyan-300 font-bold">v^({term.k}):</span> [{term.vDeriv}]
                  </div>

                  <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-emerald-400 font-bold shrink-0">
                    = {term.termFormula}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arabic Conceptual Drawer */}
          {showArabicExplanation && (
            <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-950/25 to-slate-900/90 border border-amber-500/30 text-right space-y-2" dir="rtl">
              <div className="flex items-center gap-2 text-amber-300 text-xs font-black">
                <Lightbulb className="w-4 h-4 text-amber-400" />
                <span>سر الامتحان في نظرية لايبنتز (Shoubra Exam Tip):</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed">
                في امتحانات هندسة شبرا، عند طلب المشتقة النونية لحاصل ضرب دالتين، نختار دائماً <strong>v</strong> لتكون الدالة كثيرة الحدود (مثل x² أو x³)، لأن مشتقاتها تنعدم وتصل للصفر بعد عدد محدد من الخطوات (v'' = 2 ثم v''' = 0). هذا يحول المجموع اللانهائي إلى مجرد حدين أو ثلاثة حدود فقط!
              </p>
            </div>
          )}
        </div>
      )}

      {/* ======================================================== */}
      {/* TOOL 2: 3x3 MATRIX SOLVER                               */}
      {/* ======================================================== */}
      {activeTab === 'matrices' && (
        <div className="bg-slate-850/90 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
                <Grid className="w-5 h-5 text-cyan-400" />
                <span>3×3 Matrix Determinant, Rank & Adjoint Inverter</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Computes determinant via cofactor expansion along Row 1, evaluates matrix rank, and inverts via A^(-1) = (1/det) · adj(A).
              </p>
            </div>

            {/* Presets */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setMatrix([[1, 2, 3], [0, 1, 4], [5, 6, 0]])}
                className="px-2.5 py-1 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-slate-700"
              >
                Invertible Matrix
              </button>
              <button
                onClick={() => setMatrix([[1, 2, 3], [2, 4, 6], [1, 0, 1]])}
                className="px-2.5 py-1 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-amber-300 border border-slate-700"
              >
                Singular (det=0)
              </button>
              <button
                onClick={() => setMatrix([[1, 0, 0], [0, 1, 0], [0, 0, 1]])}
                className="px-2.5 py-1 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700"
              >
                Identity Matrix
              </button>
            </div>
          </div>

          {/* Matrix Input Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-300 block">
                Input 3×3 Matrix A:
              </label>
              <div className="grid grid-cols-3 gap-2.5 p-4 rounded-2xl bg-slate-900 border border-slate-800 max-w-sm">
                {matrix.map((row, r) =>
                  row.map((val, c) => (
                    <input
                      key={`${r}-${c}`}
                      type="number"
                      value={val}
                      onChange={(e) => updateMatrixCell(r, c, e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-center font-mono text-sm font-bold text-white focus:border-cyan-400 focus:outline-none"
                    />
                  ))
                )}
              </div>
            </div>

            {/* Determinant & Rank Stats */}
            <div className="space-y-4">
              <label className="text-xs font-bold text-slate-300 block">
                Calculated Properties:
              </label>
              
              <div className="grid grid-cols-2 gap-3 font-mono text-left" dir="ltr">
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-sans">Determinant det(A):</span>
                  <div className={`text-xl font-black ${Math.abs(matrixCalc.det) > 1e-9 ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {matrixCalc.det.toFixed(2)}
                  </div>
                  <span className="text-[10px] text-slate-500 font-sans block">
                    {Math.abs(matrixCalc.det) > 1e-9 ? 'Non-singular (Invertible)' : 'Singular (No Inverse)'}
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-sans">Matrix Rank ρ(A):</span>
                  <div className="text-xl font-black text-cyan-400">
                    {matrixCalc.rank} / 3
                  </div>
                  <span className="text-[10px] text-slate-500 font-sans block">
                    {matrixCalc.rank === 3 ? 'Full Rank' : `Deficient (Nullity = ${3 - matrixCalc.rank})`}
                  </span>
                </div>
              </div>

              {/* Cofactor expansion formula */}
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 font-mono text-xs text-slate-300 text-left" dir="ltr">
                <span className="text-[10px] text-cyan-400 font-bold block mb-1">Cofactor Expansion along Row 1:</span>
                det(A) = ({matrix[0][0]})·({matrixCalc.m11}) - ({matrix[0][1]})·({matrixCalc.m12}) + ({matrix[0][2]})·({matrixCalc.m13}) = <strong>{matrixCalc.det}</strong>
              </div>
            </div>
          </div>

          {/* Adjoint and Inverse Matrix Display */}
          {matrixCalc.inv ? (
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center justify-between">
                <span>Inverse Matrix A^(-1) = (1 / det) · adj(A):</span>
                <span className="text-xs text-emerald-400 font-mono">Verification: A · A^(-1) = I</span>
              </h3>

              <div className="grid grid-cols-3 gap-2 p-4 rounded-2xl bg-slate-900 border border-slate-800 max-w-md font-mono text-left" dir="ltr">
                {matrixCalc.inv.map((row, r) =>
                  row.map((val, c) => (
                    <div key={`inv-${r}-${c}`} className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-center text-xs font-bold text-cyan-300">
                      {val}
                    </div>
                  ))
                )}
              </div>
            </div>
          ) : (
            <div className="p-4 rounded-2xl bg-rose-950/40 border border-rose-500/40 text-rose-300 text-xs font-bold">
              ⚠️ Matrix A is singular (det(A) = 0). The inverse A^(-1) does not exist, and system AX = B does not have a unique solution.
            </div>
          )}

          {/* Arabic Drawer */}
          {showArabicExplanation && (
            <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-950/25 to-slate-900/90 border border-amber-500/30 text-right space-y-2" dir="rtl">
              <div className="flex items-center gap-2 text-amber-300 text-xs font-black">
                <Lightbulb className="w-4 h-4 text-amber-400" />
                <span>كيف تجيب في ورقة الامتحان بشبرا:</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed">
                في امتحان الجبر، لحساب مقلوب مصفوفة 3×3، اتبع 3 خطوات رئيسية: أولاً احسب المحدد det(A) للتأكد أنه لا يساوي صفراً. ثانياً كوّن مصفوفة العوامل المرافقة C ثم دوّرها لتحصل على المصفوفة الملحقة adj(A) = C^T. وأخيراً اقسم كل عنصر على المحدد det(A).
              </p>
            </div>
          )}
        </div>
      )}

      {/* ======================================================== */}
      {/* TOOL 3: COMPLEX NUMBERS & DE MOIVRE                     */}
      {/* ======================================================== */}
      {activeTab === 'complex' && (
        <div className="bg-slate-850/90 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <span>Complex Numbers: Polar Form & De Moivre Calculator</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Converts z = x + iy to polar form r · e^(i θ), computes powers z^n, and determines the m distinct complex roots.
              </p>
            </div>

            {/* Presets */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => { setComplexX(1); setComplexY(1); setComplexPower(4); }}
                className="px-2.5 py-1 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-purple-300 border border-slate-700"
              >
                1 + i
              </button>
              <button
                onClick={() => { setComplexX(1); setComplexY(-Math.sqrt(3)); setComplexPower(6); }}
                className="px-2.5 py-1 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-purple-300 border border-slate-700"
              >
                1 - i√3
              </button>
              <button
                onClick={() => { setComplexX(-1); setComplexY(1); setComplexPower(8); }}
                className="px-2.5 py-1 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-purple-300 border border-slate-700"
              >
                -1 + i
              </button>
            </div>
          </div>

          {/* Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 font-mono" dir="ltr">
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
              <label className="text-[10px] text-slate-400 uppercase font-sans font-bold">Real Part x = Re(z):</label>
              <input
                type="number"
                step="any"
                value={complexX}
                onChange={(e) => setComplexX(e.target.value)}
                className="w-full p-2 rounded-xl bg-slate-950 border border-slate-700 text-white font-bold text-center"
              />
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
              <label className="text-[10px] text-slate-400 uppercase font-sans font-bold">Imaginary Part y = Im(z):</label>
              <input
                type="number"
                step="any"
                value={complexY}
                onChange={(e) => setComplexY(e.target.value)}
                className="w-full p-2 rounded-xl bg-slate-950 border border-slate-700 text-white font-bold text-center"
              />
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
              <label className="text-[10px] text-slate-400 uppercase font-sans font-bold">Power n for z^n:</label>
              <input
                type="number"
                min="1"
                max="12"
                value={complexPower}
                onChange={(e) => setComplexPower(e.target.value)}
                className="w-full p-2 rounded-xl bg-slate-950 border border-slate-700 text-white font-bold text-center"
              />
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
              <label className="text-[10px] text-slate-400 uppercase font-sans font-bold">Number of Roots m:</label>
              <input
                type="number"
                min="2"
                max="8"
                value={complexRootsN}
                onChange={(e) => setComplexRootsN(e.target.value)}
                className="w-full p-2 rounded-xl bg-slate-950 border border-slate-700 text-white font-bold text-center"
              />
            </div>
          </div>

          {/* Results Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left font-mono" dir="ltr">
            
            {/* Polar Form */}
            <div className="p-5 rounded-3xl bg-slate-900 border border-slate-800 space-y-3">
              <span className="text-xs text-purple-400 font-bold font-sans uppercase tracking-wider block">
                Polar & Exponential Representation:
              </span>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex justify-between border-b border-slate-800/80 pb-1">
                  <span>Modulus r = √(x² + y²):</span>
                  <strong className="text-white font-black">{complexCalc.r}</strong>
                </div>
                <div className="flex justify-between border-b border-slate-800/80 pb-1">
                  <span>Argument θ = Arg(z):</span>
                  <strong className="text-white font-black">{complexCalc.thetaRad} rad ({complexCalc.thetaDeg}°)</strong>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-purple-300 font-bold text-center">
                  z = {complexCalc.r} · e^(i · {complexCalc.thetaRad})
                </div>
              </div>
            </div>

            {/* De Moivre Power */}
            <div className="p-5 rounded-3xl bg-slate-900 border border-slate-800 space-y-3">
              <span className="text-xs text-emerald-400 font-bold font-sans uppercase tracking-wider block">
                De Moivre's Power Result z^{complexPower}:
              </span>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex justify-between border-b border-slate-800/80 pb-1">
                  <span>New Modulus r^n:</span>
                  <strong className="text-white font-black">{complexCalc.powerR}</strong>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-emerald-400 font-bold text-center">
                  z^{complexPower} = {complexCalc.powerX} + ({complexCalc.powerY}) i
                </div>
              </div>
            </div>

          </div>

          {/* Distinct Complex Roots List */}
          <div className="space-y-3 pt-2">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              The {complexRootsN} Distinct Complex Roots w_k = r^(1/m) · e^(i(θ + 2kπ)/m):
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 font-mono text-left" dir="ltr">
              {complexCalc.roots.map((root) => (
                <div key={root.k} className="p-3 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-400">
                    <span className="text-purple-300">k = {root.k}</span>
                    <span>{root.angleDeg}°</span>
                  </div>
                  <div className="text-xs font-bold text-cyan-300">
                    w_{root.k} = {root.rx} + ({root.ry}) i
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arabic Drawer */}
          {showArabicExplanation && (
            <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-950/25 to-slate-900/90 border border-amber-500/30 text-right space-y-2" dir="rtl">
              <div className="flex items-center gap-2 text-amber-300 text-xs font-black">
                <Lightbulb className="w-4 h-4 text-amber-400" />
                <span>قاعدة الإشارات وتحديد الربع للعدد المركب:</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed">
                انتبه دائماً لإشارة x و y: إذا كان x موجب و y سالب (الربع الرابع) فالزاوية سالبة مباشرة -θ. إذا كان x سالب و y موجب (الربع الثاني) فالزاوية π - θ. وإذا كان كلاهما سالباً (الربع الثالث) فالزاوية -π + θ. جذور الوحدة تتوزع دائماً بانتظام على محيط دائرة نصف قطرها r^(1/m).
              </p>
            </div>
          )}
        </div>
      )}

      {/* ======================================================== */}
      {/* TOOL 4: 3D GEOMETRY SOLVER                             */}
      {/* ======================================================== */}
      {activeTab === 'geometry3d' && (
        <div className="bg-slate-850/90 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
                <Compass className="w-5 h-5 text-emerald-400" />
                <span>3D Solid Geometry: Distance from Point to Plane</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Computes perpendicular distance d = |Ax0 + By0 + Cz0 + D| / √(A² + B² + C²) from point P to plane.
              </p>
            </div>

            {/* Presets */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => { setPointP({ x: 1, y: 2, z: 3 }); setPlane({ a: 2, b: -2, c: 1, d: 5 }); }}
                className="px-2.5 py-1 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-emerald-300 border border-slate-700"
              >
                Exam Example (d = 2)
              </button>
              <button
                onClick={() => { setPointP({ x: 0, y: 0, z: 0 }); setPlane({ a: 1, b: 2, c: 2, d: -6 }); }}
                className="px-2.5 py-1 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-emerald-300 border border-slate-700"
              >
                Origin to Plane (d = 2)
              </button>
            </div>
          </div>

          {/* Inputs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono" dir="ltr">
            
            {/* Point P Coordinates */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-300 block font-sans">
                Point P Coordinates (x0, y0, z0):
              </label>
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <span className="text-[10px] text-slate-400 block mb-1">x0:</span>
                  <input
                    type="number"
                    value={pointP.x}
                    onChange={(e) => setPointP({ ...pointP, x: parseFloat(e.target.value) || 0 })}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-center font-bold text-white"
                  />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block mb-1">y0:</span>
                  <input
                    type="number"
                    value={pointP.y}
                    onChange={(e) => setPointP({ ...pointP, y: parseFloat(e.target.value) || 0 })}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-center font-bold text-white"
                  />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block mb-1">z0:</span>
                  <input
                    type="number"
                    value={pointP.z}
                    onChange={(e) => setPointP({ ...pointP, z: parseFloat(e.target.value) || 0 })}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-center font-bold text-white"
                  />
                </div>
              </div>
            </div>

            {/* Plane Equation Coefficients */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-300 block font-sans">
                Plane Ax + By + Cz + D = 0:
              </label>
              <div className="grid grid-cols-4 gap-2">
                <div>
                  <span className="text-[10px] text-slate-400 block mb-1">A:</span>
                  <input
                    type="number"
                    value={plane.a}
                    onChange={(e) => setPlane({ ...plane, a: parseFloat(e.target.value) || 0 })}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-center font-bold text-white"
                  />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block mb-1">B:</span>
                  <input
                    type="number"
                    value={plane.b}
                    onChange={(e) => setPlane({ ...plane, b: parseFloat(e.target.value) || 0 })}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-center font-bold text-white"
                  />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block mb-1">C:</span>
                  <input
                    type="number"
                    value={plane.c}
                    onChange={(e) => setPlane({ ...plane, c: parseFloat(e.target.value) || 0 })}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-center font-bold text-white"
                  />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block mb-1">D:</span>
                  <input
                    type="number"
                    value={plane.d}
                    onChange={(e) => setPlane({ ...plane, d: parseFloat(e.target.value) || 0 })}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-center font-bold text-white"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Step-by-Step Calculation */}
          <div className="p-5 rounded-3xl bg-slate-900 border border-slate-800 space-y-3 font-mono text-left" dir="ltr">
            <span className="text-xs text-emerald-400 font-bold font-sans uppercase tracking-wider block">
              Step-by-Step Distance Breakdown:
            </span>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                1. Numerator: |({plane.a})·({pointP.x}) + ({plane.b})·({pointP.y}) + ({plane.c})·({pointP.z}) + ({plane.d})| = |{geometryCalc.numerator}|
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                2. Denominator: √(({plane.a})² + ({plane.b})² + ({plane.c})²) = √{plane.a*plane.a + plane.b*plane.b + plane.c*plane.c} = {geometryCalc.denominator}
              </div>
              <div className="p-3.5 rounded-2xl bg-emerald-950/60 border border-emerald-500/60 text-emerald-300 text-sm font-black flex items-center justify-between">
                <span>Perpendicular Distance d:</span>
                <span>{geometryCalc.distance} units</span>
              </div>
            </div>
          </div>

          {/* Arabic Drawer */}
          {showArabicExplanation && (
            <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-950/25 to-slate-900/90 border border-amber-500/30 text-right space-y-2" dir="rtl">
              <div className="flex items-center gap-2 text-amber-300 text-xs font-black">
                <Lightbulb className="w-4 h-4 text-amber-400" />
                <span>المعنى الهندسي للبعد في الفراغ:</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed">
                البعد العمودي هو أقصر مسافة خطية من النقطة إلى أي نقطة على سطح المستوى. المتجه N = (A, B, C) هو العمودي على المستوى. إذا كان الناتج صفراً، فهذا يعني أن النقطة تقع تماماً على المستوى وتحقق معادلته.
              </p>
            </div>
          )}
        </div>
      )}

    </div>
  );
}
