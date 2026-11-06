import React, { useState } from 'react';
import { Calculator, Droplets, Flame, Building2, Zap, ArrowLeft, RefreshCw, CheckCircle2, AlertCircle } from 'lucide-react';

export default function CalculatorsView() {
  const [activeCalc, setActiveCalc] = useState('lime-soda');

  // ================= 1. LIME-SODA STATE =================
  const [waterVolume, setWaterVolume] = useState(50000);
  const [limePurity, setLimePurity] = useState(90);
  const [sodaPurity, setSodaPurity] = useState(95);
  const [salts, setSalts] = useState({
    ca_hco3: 81,
    mg_hco3: 73,
    caso4: 0,
    cacl2: 111,
    mgso4: 120,
    mgcl2: 0,
    co2: 22,
    hcl: 0,
    naalo2: 0
  });

  // Calculate CaCO3 Equivalents: Eq = (mg/L × 50) / Eq.wt
  const eqData = [
    { formula: 'Ca(HCO3)2', arabicName: 'بيكربونات كالسيوم', val: salts.ca_hco3, eqWt: 81, factor: 50 / 81, reqLime: 1, reqSoda: 0 },
    { formula: 'Mg(HCO3)2', arabicName: 'بيكربونات مغنيسيوم', val: salts.mg_hco3, eqWt: 73, factor: 50 / 73, reqLime: 2, reqSoda: 0 },
    { formula: 'CaSO4', arabicName: 'كبريتات كالسيوم', val: salts.caso4, eqWt: 68, factor: 50 / 68, reqLime: 0, reqSoda: 1 },
    { formula: 'CaCl2', arabicName: 'كلوريد كالسيوم', val: salts.cacl2, eqWt: 55.5, factor: 50 / 55.5, reqLime: 0, reqSoda: 1 },
    { formula: 'MgSO4', arabicName: 'كبريتات مغنيسيوم', val: salts.mgso4, eqWt: 60, factor: 50 / 60, reqLime: 1, reqSoda: 1 },
    { formula: 'MgCl2', arabicName: 'كلوريد مغنيسيوم', val: salts.mgcl2, eqWt: 47.5, factor: 50 / 47.5, reqLime: 1, reqSoda: 1 },
    { formula: 'CO2', arabicName: 'ثاني أكسيد كربون ذائب', val: salts.co2, eqWt: 22, factor: 50 / 22, reqLime: 1, reqSoda: 0 },
    { formula: 'HCl', arabicName: 'حمض هيدروكلوريك', val: salts.hcl, eqWt: 36.5, factor: 50 / 36.5, reqLime: 1, reqSoda: 1 },
    { formula: 'NaAlO2', arabicName: 'مخثر ألومينات صوديوم', val: salts.naalo2, eqWt: 82, factor: 50 / 82, reqLime: -1, reqSoda: 0 }
  ];

  let sumLimeEq = 0;
  let sumSodaEq = 0;

  const processedSalts = eqData.map((s) => {
    const caco3Eq = (Number(s.val) || 0) * s.factor;
    const limeContribution = caco3Eq * s.reqLime;
    const sodaContribution = caco3Eq * s.reqSoda;
    sumLimeEq += limeContribution;
    sumSodaEq += sodaContribution;
    return {
      ...s,
      caco3Eq: caco3Eq.toFixed(2),
      limeContribution: limeContribution.toFixed(2),
      sodaContribution: sodaContribution.toFixed(2)
    };
  });

  const pureLimeKg = (74 / 100) * sumLimeEq * waterVolume * 1e-6;
  const commLimeKg = pureLimeKg * (100 / (Number(limePurity) || 90));

  const pureSodaKg = (106 / 100) * sumSodaEq * waterVolume * 1e-6;
  const commSodaKg = pureSodaKg * (100 / (Number(sodaPurity) || 95));

  // ================= 2. DULONG'S FUEL STATE =================
  const [fuelC, setFuelC] = useState(82);
  const [fuelH, setFuelH] = useState(6);
  const [fuelO, setFuelO] = useState(8);
  const [fuelS, setFuelS] = useState(2);
  const [fuelMoisture, setFuelMoisture] = useState(0);

  const availableH = Math.max(0, fuelH - (fuelO / 8));
  const gcvKcal = (1 / 100) * (8080 * fuelC + 34500 * availableH + 2240 * fuelS);
  const gcvKj = gcvKcal * 4.184;
  const totalWaterVapor = (9 * fuelH + Number(fuelMoisture)) / 100;
  const ncvKcal = gcvKcal - (totalWaterVapor * 587);
  const ncvKj = ncvKcal * 4.184;

  const o2ReqKg = ((32 / 12) * fuelC + 8 * availableH + (32 / 32) * fuelS) / 100;
  const airReqMass = o2ReqKg * (100 / 23);
  const o2ReqM3 = o2ReqKg * (22.4 / 32);
  const airReqVol = o2ReqM3 * (100 / 21);

  // ================= 3. BOGUE'S CEMENT STATE =================
  const [cementCao, setCementCao] = useState(64);
  const [cementSio2, setCementSio2] = useState(21);
  const [cementAl2o3, setCementAl2o3] = useState(5.5);
  const [cementFe2o3, setCementFe2o3] = useState(3.0);
  const [cementSo3, setCementSo3] = useState(2.0);

  // Bogue Formulas
  const c4af = 3.04 * cementFe2o3;
  const c3a = 2.65 * cementAl2o3 - 1.69 * cementFe2o3;
  const c3s = 4.07 * cementCao - 7.60 * cementSio2 - 6.72 * cementAl2o3 - 1.43 * cementFe2o3 - 2.85 * cementSo3;
  const c2s = 2.87 * cementSio2 - 0.754 * c3s;
  const lsf = (cementCao - 0.7 * cementSo3) / (2.8 * cementSio2 + 1.2 * cementAl2o3 + 0.65 * cementFe2o3);

  const saltLabels = {
    ca_hco3: { formula: 'Ca(HCO3)2', name: 'بيكربونات كالسيوم' },
    mg_hco3: { formula: 'Mg(HCO3)2', name: 'بيكربونات مغنيسيوم' },
    caso4: { formula: 'CaSO4', name: 'كبريتات كالسيوم' },
    cacl2: { formula: 'CaCl2', name: 'كلوريد كالسيوم' },
    mgso4: { formula: 'MgSO4', name: 'كبريتات مغنيسيوم' },
    mgcl2: { formula: 'MgCl2', name: 'كلوريد مغنيسيوم' },
    co2: { formula: 'CO2', name: 'ثاني أكسيد كربون' },
    hcl: { formula: 'HCl', name: 'حمض هيدروكلوريك' },
    naalo2: { formula: 'NaAlO2', name: 'مخثر ألومينات صوديوم' }
  };

  return (
    <div className="space-y-8 pb-16">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-6 sm:p-8 border-2 border-blue-500/40 shadow-xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-400/30 mb-2">
              <Calculator className="w-4 h-4 text-cyan-400" />
              <span>المعمل الحسابي الهندسي • Engineering Solvers</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white">
              حاسبات مسائل الكيمياء الهندسية الذكية
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm mt-1">
              حل فوري مع خطوات التعويض والتحويل لمسائل شيتات وامتحانات كلية الهندسة بشبرا
            </p>
          </div>

          {/* Calculator Selector Tabs */}
          <div className="flex items-center gap-2 bg-slate-800/80 p-1.5 rounded-2xl border border-slate-700">
            <button
              onClick={() => setActiveCalc('lime-soda')}
              className={`px-3 py-2 rounded-xl text-xs font-extrabold flex items-center gap-1.5 transition-all ${
                activeCalc === 'lime-soda'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Droplets className="w-3.5 h-3.5" />
              <span>الجير والصودا (Lime-Soda)</span>
            </button>

            <button
              onClick={() => setActiveCalc('dulong')}
              className={`px-3 py-2 rounded-xl text-xs font-extrabold flex items-center gap-1.5 transition-all ${
                activeCalc === 'dulong'
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Flame className="w-3.5 h-3.5" />
              <span>دولونج والوقود (GCV / NCV)</span>
            </button>

            <button
              onClick={() => setActiveCalc('bogue')}
              className={`px-3 py-2 rounded-xl text-xs font-extrabold flex items-center gap-1.5 transition-all ${
                activeCalc === 'bogue'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>مركبات بوج للأسمنت</span>
            </button>
          </div>
        </div>
      </div>

      {/* ================= 1. LIME-SODA CALCULATOR ================= */}
      {activeCalc === 'lime-soda' && (
        <div className="space-y-6">
          <div className="bg-slate-800/90 rounded-3xl p-6 border border-slate-700 shadow-md">
            <div className="flex items-center justify-between border-b border-slate-700 pb-4 mb-6">
              <div>
                <span className="text-xs font-extrabold text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-full border border-cyan-800/50">
                  مسألة شيت وامتحان متكررة • 15 درجة
                </span>
                <h2 className="text-xl font-black text-white mt-2">
                  حاسبة معالجة عسر المياه بطريقة الجير والصودا (Lime-Soda Process)
                </h2>
              </div>
              <button
                onClick={() => {
                  setWaterVolume(50000);
                  setLimePurity(90);
                  setSodaPurity(95);
                  setSalts({
                    ca_hco3: 81,
                    mg_hco3: 73,
                    caso4: 0,
                    cacl2: 111,
                    mgso4: 120,
                    mgcl2: 0,
                    co2: 22,
                    hcl: 0,
                    naalo2: 0
                  });
                }}
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-300 bg-slate-700/50 hover:bg-slate-700 px-3 py-1.5 rounded-xl transition"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>إعادة ضبط القيم النموذجية</span>
              </button>
            </div>

            {/* General Parameters */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 p-4 rounded-2xl bg-slate-900/60 border border-slate-700/60">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  حجم الماء المراد معالجته (Liters):
                </label>
                <input
                  type="number"
                  value={waterVolume}
                  onChange={(e) => setWaterVolume(Number(e.target.value))}
                  className="w-full bg-slate-800 border border-slate-600 rounded-xl px-3 py-2 text-sm font-bold text-white focus:outline-none focus:border-cyan-400 font-mono"
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  نسبة نقاوة الجير التجاري (Lime Purity %):
                </label>
                <input
                  type="number"
                  value={limePurity}
                  onChange={(e) => setLimePurity(Number(e.target.value))}
                  className="w-full bg-slate-800 border border-slate-600 rounded-xl px-3 py-2 text-sm font-bold text-white focus:outline-none focus:border-cyan-400 font-mono"
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  نسبة نقاوة الصودا التجارية (Soda Purity %):
                </label>
                <input
                  type="number"
                  value={sodaPurity}
                  onChange={(e) => setSodaPurity(Number(e.target.value))}
                  className="w-full bg-slate-800 border border-slate-600 rounded-xl px-3 py-2 text-sm font-bold text-white focus:outline-none focus:border-cyan-400 font-mono"
                  dir="ltr"
                />
              </div>
            </div>

            {/* Salt Concentrations Input Grid */}
            <h3 className="text-sm font-black text-cyan-300 mb-3">
              أدخل تركيزات الأملاح والشوائب في عينة الماء (بالـ mg/L أو ppm):
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
              {Object.keys(salts).map((key) => {
                const info = saltLabels[key];
                return (
                  <div key={key} className="p-3 rounded-xl bg-slate-900/60 border border-slate-700/60">
                    <div className="flex items-center justify-between mb-1.5">
                      <span dir="ltr" className="font-mono text-cyan-300 font-bold text-xs bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800">
                        {info.formula}
                      </span>
                      <span className="text-[11px] text-slate-300 font-medium truncate">
                        {info.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        value={salts[key]}
                        onChange={(e) => setSalts({ ...salts, [key]: Number(e.target.value) })}
                        className="w-full bg-slate-800 border border-slate-600 rounded-lg px-2.5 py-1.5 text-xs font-bold text-white focus:outline-none focus:border-cyan-400 font-mono"
                        dir="ltr"
                      />
                      <span className="text-[10px] text-slate-400 font-bold font-mono">mg/L</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Step 1 Table: Conversion to CaCO3 Equivalent */}
            <div className="overflow-x-auto rounded-2xl border border-slate-700 mb-6">
              <table className="w-full text-right text-xs">
                <thead className="bg-slate-900 text-slate-300 font-black">
                  <tr>
                    <th className="p-3">الملح المسبب للعسر</th>
                    <th className="p-3">التركيز (mg/L)</th>
                    <th className="p-3">معامل التحويل (50 / Eq.wt)</th>
                    <th className="p-3">مكافئ CaCO3 Eq (mg/L)</th>
                    <th className="p-3">مكافئ الجير المطلوب</th>
                    <th className="p-3">مكافئ الصودا المطلوب</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/60 font-bold">
                  {processedSalts.map((item, idx) => (
                    <tr key={idx} className={Number(item.val) > 0 ? 'bg-slate-800/80' : 'bg-slate-900/30 text-slate-500'}>
                      <td className="p-3">
                        <div className="flex items-center gap-2">
                          <span dir="ltr" className="font-mono font-bold text-cyan-300 bg-slate-900 px-2 py-0.5 rounded border border-slate-700/70 text-xs">
                            {item.formula}
                          </span>
                          <span className="text-slate-300 text-xs">{item.arabicName}</span>
                        </div>
                      </td>
                      <td className="p-3 font-mono">{item.val}</td>
                      <td className="p-3 text-slate-400 font-mono" dir="ltr">50 / {item.eqWt}</td>
                      <td className="p-3 font-mono font-black text-amber-300" dir="ltr">{item.caco3Eq}</td>
                      <td className="p-3 font-mono text-blue-300" dir="ltr">{item.limeContribution}</td>
                      <td className="p-3 font-mono text-emerald-300" dir="ltr">{item.sodaContribution}</td>
                    </tr>
                  ))}
                  <tr className="bg-slate-950 font-black text-sm">
                    <td colSpan="4" className="p-3 text-white">إجمالي المكافئات Σ (mg/L):</td>
                    <td className="p-3 text-blue-400 font-mono text-base" dir="ltr">{sumLimeEq.toFixed(2)}</td>
                    <td className="p-3 text-emerald-400 font-mono text-base" dir="ltr">{sumSodaEq.toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Results Output Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-950 to-slate-900 border-2 border-blue-500 shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-extrabold text-blue-300">كمية الجير التجاري المطلوبة (Commercial Lime)</span>
                  <span className="text-xs bg-blue-500/20 text-blue-200 px-2 py-0.5 rounded-full font-bold">نقاوة {limePurity}%</span>
                </div>
                <div className="text-3xl font-black text-white font-mono" dir="ltr">
                  {commLimeKg.toFixed(2)} <span className="text-lg font-bold text-blue-300">kg</span>
                </div>
                <div className="mt-2 p-2 rounded-xl bg-slate-950/70 border border-slate-800 font-mono text-[11px] text-blue-300" dir="ltr">
                  Lime = (74/100) × {sumLimeEq.toFixed(2)} × {waterVolume.toLocaleString()} × 10⁻⁶ × (100/{limePurity})
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-950 to-slate-900 border-2 border-emerald-500 shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-extrabold text-emerald-300">كمية رماد الصودا التجاري المطلوب (Commercial Soda)</span>
                  <span className="text-xs bg-emerald-500/20 text-emerald-200 px-2 py-0.5 rounded-full font-bold">نقاوة {sodaPurity}%</span>
                </div>
                <div className="text-3xl font-black text-white font-mono" dir="ltr">
                  {commSodaKg.toFixed(2)} <span className="text-lg font-bold text-emerald-300">kg</span>
                </div>
                <div className="mt-2 p-2 rounded-xl bg-slate-950/70 border border-slate-800 font-mono text-[11px] text-emerald-300" dir="ltr">
                  Soda = (106/100) × {sumSodaEq.toFixed(2)} × {waterVolume.toLocaleString()} × 10⁻⁶ × (100/{sodaPurity})
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= 2. DULONG'S CALCULATOR ================= */}
      {activeCalc === 'dulong' && (
        <div className="space-y-6">
          <div className="bg-slate-800/90 rounded-3xl p-6 border border-slate-700 shadow-md">
            <div className="flex items-center justify-between border-b border-slate-700 pb-4 mb-6">
              <div>
                <span className="text-xs font-extrabold text-amber-400 bg-amber-950/80 px-2.5 py-1 rounded-full border border-amber-800/50">
                  معادلة دولونج وحسابات الاحتراق
                </span>
                <h2 className="text-xl font-black text-white mt-2">
                  حاسبة القيمة الحرارية للوقود والهواء النظري (Dulong & Combustion Air)
                </h2>
              </div>
              <button
                onClick={() => {
                  setFuelC(82);
                  setFuelH(6);
                  setFuelO(8);
                  setFuelS(2);
                  setFuelMoisture(0);
                }}
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-amber-300 bg-slate-700/50 hover:bg-slate-700 px-3 py-1.5 rounded-xl transition"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>عينة فحم قياسية</span>
              </button>
            </div>

            {/* Fuel Ultimate Analysis Inputs */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-700">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-slate-300">الكربون</span>
                  <span dir="ltr" className="font-mono text-amber-400 font-bold text-xs">C %</span>
                </div>
                <input
                  type="number"
                  value={fuelC}
                  onChange={(e) => setFuelC(Number(e.target.value))}
                  className="w-full bg-slate-800 border border-slate-600 rounded-lg px-2.5 py-1.5 text-sm font-bold text-white focus:outline-none focus:border-amber-400 font-mono"
                  dir="ltr"
                />
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-700">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-slate-300">الهيدروجين</span>
                  <span dir="ltr" className="font-mono text-amber-400 font-bold text-xs">H %</span>
                </div>
                <input
                  type="number"
                  value={fuelH}
                  onChange={(e) => setFuelH(Number(e.target.value))}
                  className="w-full bg-slate-800 border border-slate-600 rounded-lg px-2.5 py-1.5 text-sm font-bold text-white focus:outline-none focus:border-amber-400 font-mono"
                  dir="ltr"
                />
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-700">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-slate-300">الأكسجين</span>
                  <span dir="ltr" className="font-mono text-amber-400 font-bold text-xs">O %</span>
                </div>
                <input
                  type="number"
                  value={fuelO}
                  onChange={(e) => setFuelO(Number(e.target.value))}
                  className="w-full bg-slate-800 border border-slate-600 rounded-lg px-2.5 py-1.5 text-sm font-bold text-white focus:outline-none focus:border-amber-400 font-mono"
                  dir="ltr"
                />
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-700">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-slate-300">الكبريت</span>
                  <span dir="ltr" className="font-mono text-amber-400 font-bold text-xs">S %</span>
                </div>
                <input
                  type="number"
                  value={fuelS}
                  onChange={(e) => setFuelS(Number(e.target.value))}
                  className="w-full bg-slate-800 border border-slate-600 rounded-lg px-2.5 py-1.5 text-sm font-bold text-white focus:outline-none focus:border-amber-400 font-mono"
                  dir="ltr"
                />
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-700">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-slate-300">الرطوبة</span>
                  <span dir="ltr" className="font-mono text-amber-400 font-bold text-xs">Moisture %</span>
                </div>
                <input
                  type="number"
                  value={fuelMoisture}
                  onChange={(e) => setFuelMoisture(Number(e.target.value))}
                  className="w-full bg-slate-800 border border-slate-600 rounded-lg px-2.5 py-1.5 text-sm font-bold text-white focus:outline-none focus:border-amber-400 font-mono"
                  dir="ltr"
                />
              </div>
            </div>

            {/* Calculations Breakdown */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-700 mb-6 space-y-2 text-xs font-bold text-slate-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-800 pb-2">
                <span>الهيدروجين المتاح للاحتراق (Available Hydrogen):</span>
                <span className="font-mono text-amber-300 text-sm" dir="ltr">H - (O / 8) = {availableH.toFixed(2)} %</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-800 pb-2">
                <span>معادلة دولونج GCV: (1/100) × [8080 C + 34500 (H - O/8) + 2240 S]:</span>
                <span className="font-mono text-cyan-300 text-sm" dir="ltr">{gcvKcal.toFixed(2)} kcal/kg</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span>القيمة بالوحدات الدولية (kJ/kg = kcal/kg × 4.184):</span>
                <span className="font-mono text-emerald-300 text-sm" dir="ltr">{gcvKj.toFixed(2)} kJ/kg</span>
              </div>
            </div>

            {/* Output Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-amber-950/60 border border-amber-500/60">
                <span className="text-[11px] font-bold text-amber-300">القيمة الحرارية العليا GCV</span>
                <div className="text-2xl font-black text-white font-mono mt-1" dir="ltr">
                  {gcvKcal.toFixed(1)} <span className="text-xs text-amber-300">kcal/kg</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-orange-950/60 border border-orange-500/60">
                <span className="text-[11px] font-bold text-orange-300">القيمة الحرارية الصغرى NCV</span>
                <div className="text-2xl font-black text-white font-mono mt-1" dir="ltr">
                  {ncvKcal.toFixed(1)} <span className="text-xs text-orange-300">kcal/kg</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-cyan-950/60 border border-cyan-500/60">
                <span className="text-[11px] font-bold text-cyan-300">كتلة الهواء النظري (بالكتلة 23%)</span>
                <div className="text-2xl font-black text-white font-mono mt-1" dir="ltr">
                  {airReqMass.toFixed(2)} <span className="text-xs text-cyan-300">kg air / kg fuel</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-950/60 border border-blue-500/60">
                <span className="text-[11px] font-bold text-blue-300">حجم الهواء النظري (بالحجم 21%)</span>
                <div className="text-2xl font-black text-white font-mono mt-1" dir="ltr">
                  {airReqVol.toFixed(2)} <span className="text-xs text-blue-300">m³ air / kg fuel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= 3. BOGUE'S CEMENT CALCULATOR ================= */}
      {activeCalc === 'bogue' && (
        <div className="space-y-6">
          <div className="bg-slate-800/90 rounded-3xl p-6 border border-slate-700 shadow-md">
            <div className="flex items-center justify-between border-b border-slate-700 pb-4 mb-6">
              <div>
                <span className="text-xs font-extrabold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-800/50">
                  كيمياء الأسمنت البورتلاندي
                </span>
                <h2 className="text-xl font-black text-white mt-2">
                  حاسبة مركبات بوج الأربعة في الأسمنت (Bogue's Compounds)
                </h2>
              </div>
              <button
                onClick={() => {
                  setCementCao(64);
                  setCementSio2(21);
                  setCementAl2o3(5.5);
                  setCementFe2o3(3.0);
                  setCementSo3(2.0);
                }}
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-emerald-300 bg-slate-700/50 hover:bg-slate-700 px-3 py-1.5 rounded-xl transition"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>أسمنت بورتلاندي عادي (Type I)</span>
              </button>
            </div>

            {/* Oxides Input */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-700">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-slate-300">الجير</span>
                  <span dir="ltr" className="font-mono text-emerald-400 font-bold text-xs">CaO %</span>
                </div>
                <input
                  type="number"
                  value={cementCao}
                  onChange={(e) => setCementCao(Number(e.target.value))}
                  className="w-full bg-slate-800 border border-slate-600 rounded-lg px-2.5 py-1.5 text-sm font-bold text-white focus:outline-none focus:border-emerald-400 font-mono"
                  dir="ltr"
                />
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-700">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-slate-300">السيليكا</span>
                  <span dir="ltr" className="font-mono text-emerald-400 font-bold text-xs">SiO2 %</span>
                </div>
                <input
                  type="number"
                  value={cementSio2}
                  onChange={(e) => setCementSio2(Number(e.target.value))}
                  className="w-full bg-slate-800 border border-slate-600 rounded-lg px-2.5 py-1.5 text-sm font-bold text-white focus:outline-none focus:border-emerald-400 font-mono"
                  dir="ltr"
                />
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-700">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-slate-300">الألومينا</span>
                  <span dir="ltr" className="font-mono text-emerald-400 font-bold text-xs">Al2O3 %</span>
                </div>
                <input
                  type="number"
                  value={cementAl2o3}
                  onChange={(e) => setCementAl2o3(Number(e.target.value))}
                  className="w-full bg-slate-800 border border-slate-600 rounded-lg px-2.5 py-1.5 text-sm font-bold text-white focus:outline-none focus:border-emerald-400 font-mono"
                  dir="ltr"
                />
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-700">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-slate-300">أكسيد الحديد</span>
                  <span dir="ltr" className="font-mono text-emerald-400 font-bold text-xs">Fe2O3 %</span>
                </div>
                <input
                  type="number"
                  value={cementFe2o3}
                  onChange={(e) => setCementFe2o3(Number(e.target.value))}
                  className="w-full bg-slate-800 border border-slate-600 rounded-lg px-2.5 py-1.5 text-sm font-bold text-white focus:outline-none focus:border-emerald-400 font-mono"
                  dir="ltr"
                />
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-700">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-slate-300">ثالث أكسيد الكبريت</span>
                  <span dir="ltr" className="font-mono text-emerald-400 font-bold text-xs">SO3 %</span>
                </div>
                <input
                  type="number"
                  value={cementSo3}
                  onChange={(e) => setCementSo3(Number(e.target.value))}
                  className="w-full bg-slate-800 border border-slate-600 rounded-lg px-2.5 py-1.5 text-sm font-bold text-white focus:outline-none focus:border-emerald-400 font-mono"
                  dir="ltr"
                />
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/60">
                <div className="flex items-center gap-2 mb-1">
                  <span dir="ltr" className="font-mono font-black text-xs px-2 py-0.5 rounded bg-emerald-900 text-white border border-emerald-500/40">C3S</span>
                  <span className="text-xs font-bold text-emerald-300">Alite (القوة المبكرة)</span>
                </div>
                <div className="text-3xl font-black text-white font-mono mt-2" dir="ltr">{c3s.toFixed(2)} %</div>
                <p className="text-[10px] text-slate-400 mt-1">النسبة المثالية: 45 - 65%</p>
              </div>

              <div className="p-4 rounded-2xl bg-teal-950/60 border border-teal-500/60">
                <div className="flex items-center gap-2 mb-1">
                  <span dir="ltr" className="font-mono font-black text-xs px-2 py-0.5 rounded bg-teal-900 text-white border border-teal-500/40">C2S</span>
                  <span className="text-xs font-bold text-teal-300">Belite (القوة طويلة المدى)</span>
                </div>
                <div className="text-3xl font-black text-white font-mono mt-2" dir="ltr">{c2s.toFixed(2)} %</div>
                <p className="text-[10px] text-slate-400 mt-1">النسبة المثالية: 15 - 30%</p>
              </div>

              <div className="p-4 rounded-2xl bg-amber-950/60 border border-amber-500/60">
                <div className="flex items-center gap-2 mb-1">
                  <span dir="ltr" className="font-mono font-black text-xs px-2 py-0.5 rounded bg-amber-900 text-white border border-amber-500/40">C3A</span>
                  <span className="text-xs font-bold text-amber-300">Celite (حرارة التفاعل والشك)</span>
                </div>
                <div className="text-3xl font-black text-white font-mono mt-2" dir="ltr">{c3a.toFixed(2)} %</div>
                <p className="text-[10px] text-slate-400 mt-1">النسبة المثالية: 6 - 12%</p>
              </div>

              <div className="p-4 rounded-2xl bg-purple-950/60 border border-purple-500/60">
                <div className="flex items-center gap-2 mb-1">
                  <span dir="ltr" className="font-mono font-black text-xs px-2 py-0.5 rounded bg-purple-900 text-white border border-purple-500/40">C4AF</span>
                  <span className="text-xs font-bold text-purple-300">Ferrite (اللون الرمادي)</span>
                </div>
                <div className="text-3xl font-black text-white font-mono mt-2" dir="ltr">{c4af.toFixed(2)} %</div>
                <p className="text-[10px] text-slate-400 mt-1">النسبة المثالية: 6 - 10%</p>
              </div>
            </div>

            {/* Lime Saturation Factor Card */}
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-cyan-300">معامل تشبع الجير (Lime Saturation Factor - LSF):</span>
                <div className="text-2xl font-black text-white font-mono mt-0.5" dir="ltr">{lsf.toFixed(3)}</div>
              </div>
              <div className="text-xs font-bold text-slate-300 max-w-md">
                {lsf >= 0.66 && lsf <= 1.02 ? (
                  <span className="text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    الأسمنت ذو جودة ممتازة ومتوازن كيميائياً (القيمة تقع في المدى الهندسي المطلوب 0.66 - 1.02).
                  </span>
                ) : (
                  <span className="text-rose-400 flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    تحذير: القيمة خارج المدى القياسي (أقل من 0.66 تعني مقاومة ضعيفة، أكبر من 1.02 تعني جير حر غير متفاعل وتمدد خرساني).
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
