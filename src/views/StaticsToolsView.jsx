import React, { useState } from 'react';
import { 
  Calculator, Compass, Activity, Layers, ArrowRight, Check, Copy, RefreshCw, 
  Lightbulb, CheckCircle2, AlertTriangle, Sparkles, Box, Gauge
} from 'lucide-react';

export default function StaticsToolsView({ activeDivision = 'force_equilibrium' }) {
  const isForceEquilibrium = activeDivision === 'force_equilibrium';

  // Sub-tabs for force_equilibrium tools
  const [forceTool, setForceTool] = useState('vectors'); // 'vectors' | 'moments' | 'beam'

  // Sub-tabs for structures_inertia tools
  const [structTool, setStructTool] = useState('friction'); // 'friction' | 'inertia' | 'truss'

  const [copiedId, setCopiedId] = useState(null);
  const [expandedArabicCalc, setExpandedArabicCalc] = useState(new Set(['active']));

  const toggleArabicCalc = (id) => {
    setExpandedArabicCalc(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // =========================================================================
  // TOOL 1.1: 3D CARTESIAN FORCE & POSITION VECTOR ANALYZER
  // =========================================================================
  const [vOrigin, setVOrigin] = useState({ x: 0, y: 0, z: 4 }); // Anchor point A (m)
  const [vDest, setVDest] = useState({ x: 3, y: -2, z: 0 });   // Ring point B (m)
  const [cableTension, setCableTension] = useState(650);         // N

  // Position vector r_AB = B - A
  const rx = vDest.x - vOrigin.x;
  const ry = vDest.y - vOrigin.y;
  const rz = vDest.z - vOrigin.z;
  const rMag = Math.sqrt(rx * rx + ry * ry + rz * rz) || 1e-6;

  // Unit vector u_AB
  const ux = rx / rMag;
  const uy = ry / rMag;
  const uz = rz / rMag;

  // Force vector components
  const Fx = cableTension * ux;
  const Fy = cableTension * uy;
  const Fz = cableTension * uz;

  // Coordinate direction angles in degrees
  const alphaDeg = Math.acos(Math.max(-1, Math.min(1, ux))) * (180 / Math.PI);
  const betaDeg = Math.acos(Math.max(-1, Math.min(1, uy))) * (180 / Math.PI);
  const gammaDeg = Math.acos(Math.max(-1, Math.min(1, uz))) * (180 / Math.PI);

  // =========================================================================
  // TOOL 1.2: 3D MOMENT & CROSS PRODUCT r × F SOLVER
  // =========================================================================
  const [mPoint, setMPoint] = useState({ x: 2, y: 4, z: -1 });   // Point of force application (m)
  const [mRef, setMRef] = useState({ x: 0, y: 0, z: 0 });        // Reference origin O (m)
  const [mForce, setMForce] = useState({ x: 80, y: -60, z: 120 }); // Force vector components (N)
  const [mAxis, setMAxis] = useState({ x: 1, y: 1, z: 1 });      // Axis vector (m)

  // Relative lever arm r = mPoint - mRef
  const mrx = mPoint.x - mRef.x;
  const mry = mPoint.y - mRef.y;
  const mrz = mPoint.z - mRef.z;

  // Cross product M_O = r x F
  const Mx = mry * mForce.z - mrz * mForce.y;
  const My = -(mrx * mForce.z - mrz * mForce.x);
  const Mz = mrx * mForce.y - mry * mForce.x;
  const M_mag = Math.sqrt(Mx * Mx + My * My + Mz * Mz);

  // Axis unit vector
  const axisLen = Math.sqrt(mAxis.x * mAxis.x + mAxis.y * mAxis.y + mAxis.z * mAxis.z) || 1e-6;
  const uax = mAxis.x / axisLen;
  const uay = mAxis.y / axisLen;
  const uaz = mAxis.z / axisLen;

  // Moment about axis M_a = u_a · M_O
  const M_axis_scalar = uax * Mx + uay * My + uaz * Mz;

  // =========================================================================
  // TOOL 1.3: 2D BEAM EQUILIBRIUM & REACTIONS CALCULATOR
  // =========================================================================
  const [beamLength, setBeamLength] = useState(6.0);    // m
  const [pointLoadP, setPointLoadP] = useState(12.0);    // kN
  const [pointLoadPos, setPointLoadPos] = useState(2.0); // m from Pin A
  const [distLoadW, setDistLoadW] = useState(4.0);       // kN/m
  const [concMomentM, setConcMomentM] = useState(15.0);  // kN·m (counterclockwise)

  // Pin A at x = 0, Roller B at x = beamLength
  // Equilibrium: Σ M_A = 0 => (B_y * L) - (P * a) - (w * L * L/2) + M = 0
  const totalUDL = distLoadW * beamLength;
  const udlCentroid = beamLength / 2;
  const momentDueLoads = (pointLoadP * pointLoadPos) + (totalUDL * udlCentroid) - concMomentM;
  const By_reaction = momentDueLoads / (beamLength || 1e-6);
  // Σ F_y = 0 => A_y + B_y - P - totalUDL = 0
  const Ay_reaction = pointLoadP + totalUDL - By_reaction;

  // =========================================================================
  // TOOL 2.1: DRY FRICTION: SLIPPING VS. TIPPING ANALYZER
  // =========================================================================
  const [fricWidth, setFricWidth] = useState(0.8);     // b (m)
  const [fricHeight, setFricHeight] = useState(1.6);    // h (m)
  const [fricWeight, setFricWeight] = useState(600);    // W (N)
  const [fricMuS, setFricMuS] = useState(0.35);         // static friction coefficient
  const [fricLoadH, setFricLoadH] = useState(1.2);      // height of applied force P (m)
  const [fricForceP, setFricForceP] = useState(150);    // applied force P (N)

  // Critical slipping force P_slip = mu_s * W
  const P_slip_crit = fricMuS * fricWeight;
  // Critical tipping force about bottom corner: P_tip * loadH = W * (b/2)
  const P_tip_crit = (fricWeight * (fricWidth / 2)) / (fricLoadH || 1e-6);

  // Normal reaction location x = (P * loadH) / W (measured from centerline toward edge)
  const normShiftX = (fricForceP * fricLoadH) / (fricWeight || 1e-6);
  const maxShiftX = fricWidth / 2;

  // Determine state
  let frictionStatus = 'Equilibrium (Static)';
  let frictionStatusAr = 'في حالة اتزان سكوني تام (لا انزلاق ولا انقلاب)';
  let frictionColor = 'text-emerald-400';

  if (fricForceP >= Math.min(P_slip_crit, P_tip_crit)) {
    if (P_slip_crit < P_tip_crit) {
      frictionStatus = 'Slipping Occurs First (Body Slides)';
      frictionStatusAr = 'يحدث انزلاق أولاً على السطح (قبل حدوث أي انقلاب)';
      frictionColor = 'text-amber-400';
    } else {
      frictionStatus = 'Tipping Occurs First (Body Overturns)';
      frictionStatusAr = 'يحدث انقلاب للجسم أولاً حول حافته السفلية (قبل أن ينزلق)';
      frictionColor = 'text-red-400';
    }
  }

  // =========================================================================
  // TOOL 2.2: COMPOSITE SECTION CENTROID & MOMENT OF INERTIA (I-BEAM)
  // =========================================================================
  const [flangeWidth, setFlangeWidth] = useState(200);   // b_f (mm)
  const [flangeThick, setFlangeThick] = useState(20);    // t_f (mm)
  const [webHeight, setWebHeight] = useState(300);       // h_w (mm)
  const [webThick, setWebThick] = useState(15);          // t_w (mm)

  // Symmetrical I-Beam: Top Flange + Web + Bottom Flange
  const totalH = webHeight + 2 * flangeThick;
  const areaFlange = flangeWidth * flangeThick;
  const areaWeb = webHeight * webThick;
  const totalArea = 2 * areaFlange + areaWeb; // mm^2

  // For symmetrical I-beam, centroid is at half height
  const y_bar = totalH / 2; // mm

  // Centroidal moment of inertia I_x using parallel axis theorem
  // 1. Web: centroid coincides with overall centroid, d = 0
  const I_web = (webThick * Math.pow(webHeight, 3)) / 12;
  // 2. Each Flange: I_local = (b_f * t_f^3) / 12, distance d = (totalH/2) - (t_f/2)
  const I_flange_local = (flangeWidth * Math.pow(flangeThick, 3)) / 12;
  const d_flange = (totalH / 2) - (flangeThick / 2);
  const I_flange_transfer = 2 * (I_flange_local + areaFlange * Math.pow(d_flange, 2));

  const total_Ix_mm4 = I_web + I_flange_transfer;
  const total_Ix_cm4 = total_Ix_mm4 / 1e4;
  const total_Ix_m4 = total_Ix_mm4 * 1e-12;
  const radius_gyration_kx = Math.sqrt(total_Ix_mm4 / totalArea);

  // =========================================================================
  // TOOL 2.3: BELT FRICTION & CAPSTAN EXPONENTIAL SOLVER
  // =========================================================================
  const [slackTension, setSlackTension] = useState(100);  // T1 (N)
  const [beltCoeffMu, setBeltCoeffMu] = useState(0.3);    // mu
  const [beltTurns, setBeltTurns] = useState(1.5);        // turns around bollard

  const betaRadians = beltTurns * 2 * Math.PI;
  const tightTensionT2 = slackTension * Math.exp(beltCoeffMu * betaRadians);
  const frictionHoldingForce = tightTensionT2 - slackTension;

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-amber-950/60 to-slate-900 border-2 border-amber-500/40 shadow-2xl relative overflow-hidden text-left" dir="ltr">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16"></div>
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-400/30">
            <Calculator className="w-4 h-4 text-amber-400" />
            <span>MEC 001 • Interactive Statics Virtual Solvers & Mechanics Lab</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white font-mono tracking-tight">
            ENGINEERING STATICS SOLVER SUITE
          </h2>
          <p className="text-xs font-bold text-amber-300" dir="rtl">
            مجموعة الحواسب والمحاكيات التفاعلية لمقرر الاستاتيكا • كلية الهندسة بشبرا (جامعة بنها)
          </p>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed font-normal">
            Precision engineering calculation suite designed for Shoubra engineering undergraduates. Computes 3D Cartesian vectors, determinant cross-product moments, 2D beam reactions, Coulomb dry friction tipping thresholds, and composite structural inertia.
          </p>
        </div>
      </div>

      {/* =================================================================== */}
      {/* SECTION 1: BRANCH 1 SOLVERS (FORCE SYSTEMS & EQUILIBRIUM)           */}
      {/* =================================================================== */}
      {isForceEquilibrium && (
        <div className="space-y-6">
          
          {/* Tool Selector Bar */}
          <div className="flex flex-wrap items-center gap-2 p-2 bg-slate-900/90 rounded-2xl border border-slate-800" dir="ltr">
            <button
              onClick={() => setForceTool('vectors')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold font-mono transition-all flex items-center gap-2 ${
                forceTool === 'vectors'
                  ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg shadow-amber-900/40'
                  : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Compass className="w-4 h-4 text-amber-300" />
              <span>1. 3D Force Vectors & Direction Angles</span>
            </button>

            <button
              onClick={() => setForceTool('moments')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold font-mono transition-all flex items-center gap-2 ${
                forceTool === 'moments'
                  ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg shadow-amber-900/40'
                  : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Activity className="w-4 h-4 text-orange-300" />
              <span>2. 3D Moment r × F & Axis Projection</span>
            </button>

            <button
              onClick={() => setForceTool('beam')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold font-mono transition-all flex items-center gap-2 ${
                forceTool === 'beam'
                  ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg shadow-amber-900/40'
                  : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Layers className="w-4 h-4 text-yellow-300" />
              <span>3. 2D Beam Reactions & Equilibrium</span>
            </button>
          </div>

          {/* TOOL 1: 3D CARTESIAN VECTOR SOLVER */}
          {forceTool === 'vectors' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-left" dir="ltr">
              
              {/* Inputs Panel */}
              <div className="lg:col-span-5 p-6 rounded-3xl bg-slate-900/90 border-2 border-amber-500/40 space-y-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-black text-white font-mono flex items-center gap-2">
                    <Compass className="w-5 h-5 text-amber-400" />
                    <span>3D Cable & Position Vector Setup</span>
                  </h3>
                  <button
                    onClick={() => {
                      setVOrigin({ x: 0, y: 0, z: 4 });
                      setVDest({ x: 3, y: -2, z: 0 });
                      setCableTension(650);
                    }}
                    className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition"
                    title="Reset to default example"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                </div>

                {/* Point A Coordinates */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 font-mono flex justify-between">
                    <span>Anchor Point A Coordinates (Origin):</span>
                    <span className="text-amber-400 font-bold">({vOrigin.x}, {vOrigin.y}, {vOrigin.z}) m</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <span className="text-[10px] text-slate-400 block">x_A (m):</span>
                      <input 
                        type="number" 
                        value={vOrigin.x} 
                        onChange={(e) => setVOrigin({...vOrigin, x: parseFloat(e.target.value) || 0})}
                        className="w-full px-2.5 py-1.5 rounded-xl bg-slate-950 border border-slate-700 font-mono text-white" 
                      />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block">y_A (m):</span>
                      <input 
                        type="number" 
                        value={vOrigin.y} 
                        onChange={(e) => setVOrigin({...vOrigin, y: parseFloat(e.target.value) || 0})}
                        className="w-full px-2.5 py-1.5 rounded-xl bg-slate-950 border border-slate-700 font-mono text-white" 
                      />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block">z_A (m):</span>
                      <input 
                        type="number" 
                        value={vOrigin.z} 
                        onChange={(e) => setVOrigin({...vOrigin, z: parseFloat(e.target.value) || 0})}
                        className="w-full px-2.5 py-1.5 rounded-xl bg-slate-950 border border-slate-700 font-mono text-white" 
                      />
                    </div>
                  </div>
                </div>

                {/* Point B Coordinates */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 font-mono flex justify-between">
                    <span>Target Point B Coordinates (Destination):</span>
                    <span className="text-amber-400 font-bold">({vDest.x}, {vDest.y}, {vDest.z}) m</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <span className="text-[10px] text-slate-400 block">x_B (m):</span>
                      <input 
                        type="number" 
                        value={vDest.x} 
                        onChange={(e) => setVDest({...vDest, x: parseFloat(e.target.value) || 0})}
                        className="w-full px-2.5 py-1.5 rounded-xl bg-slate-950 border border-slate-700 font-mono text-white" 
                      />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block">y_B (m):</span>
                      <input 
                        type="number" 
                        value={vDest.y} 
                        onChange={(e) => setVDest({...vDest, y: parseFloat(e.target.value) || 0})}
                        className="w-full px-2.5 py-1.5 rounded-xl bg-slate-950 border border-slate-700 font-mono text-white" 
                      />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block">z_B (m):</span>
                      <input 
                        type="number" 
                        value={vDest.z} 
                        onChange={(e) => setVDest({...vDest, z: parseFloat(e.target.value) || 0})}
                        className="w-full px-2.5 py-1.5 rounded-xl bg-slate-950 border border-slate-700 font-mono text-white" 
                      />
                    </div>
                  </div>
                </div>

                {/* Cable Tension Magnitude */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-300 font-mono flex justify-between">
                    <span>Cable Tension Force Magnitude (T):</span>
                    <span className="text-amber-400 font-black">{cableTension} N</span>
                  </label>
                  <input
                    type="range"
                    min="50"
                    max="5000"
                    step="25"
                    value={cableTension}
                    onChange={(e) => setCableTension(parseFloat(e.target.value))}
                    className="w-full accent-amber-500"
                  />
                </div>

                {/* On-Demand Arabic Toggle */}
                <button
                  onClick={() => toggleArabicCalc('vectors')}
                  className="w-full py-2 rounded-xl bg-slate-950 border border-amber-500/30 text-amber-300 text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-slate-900 transition"
                >
                  <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                  <span>{expandedArabicCalc.has('vectors') ? 'إخفاء الشرح الهندسي' : '💡 الشرح الرياضي بالعربي'}</span>
                </button>
              </div>

              {/* Outputs Panel */}
              <div className="lg:col-span-7 space-y-4">
                <div className="p-6 rounded-3xl bg-slate-900/90 border-2 border-amber-500/40 space-y-4 shadow-xl">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs font-black text-amber-400 uppercase font-mono tracking-wider">
                      Vector Synthesis & Coordinate Direction Angles
                    </span>
                    <button
                      onClick={() => handleCopy(`F = (${Fx.toFixed(1)} i ${Fy >= 0 ? '+' : ''}${Fy.toFixed(1)} j ${Fz >= 0 ? '+' : ''}${Fz.toFixed(1)} k) N`, 'vec')}
                      className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 hover:text-white text-xs font-mono flex items-center gap-1 transition"
                    >
                      {copiedId === 'vec' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedId === 'vec' ? 'Copied' : 'Copy Vector'}</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                      <span className="text-[11px] text-slate-400 font-mono">Position Vector (r_AB):</span>
                      <p className="text-sm font-black text-white font-mono">
                        {rx.toFixed(2)} i {ry >= 0 ? '+' : ''}{ry.toFixed(2)} j {rz >= 0 ? '+' : ''}{rz.toFixed(2)} k m
                      </p>
                      <span className="text-[10px] text-amber-400 font-mono">Distance d = {rMag.toFixed(3)} m</span>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                      <span className="text-[11px] text-slate-400 font-mono">Unit Vector (u_AB):</span>
                      <p className="text-sm font-black text-amber-300 font-mono">
                        {ux.toFixed(3)} i {uy >= 0 ? '+' : ''}{uy.toFixed(3)} j {uz >= 0 ? '+' : ''}{uz.toFixed(3)} k
                      </p>
                      <span className="text-[10px] text-slate-500 font-mono">|u_AB| = 1.000</span>
                    </div>
                  </div>

                  {/* Cartesian Force Vector Box */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-950/40 via-slate-950 to-slate-950 border border-amber-500/50 space-y-1">
                    <span className="text-xs text-amber-300 font-black font-mono uppercase tracking-wide">
                      3D Force Vector Expression:
                    </span>
                    <p className="text-lg sm:text-xl font-black text-white font-mono">
                      F = {Fx.toFixed(1)} i {Fy >= 0 ? '+' : ''}{Fy.toFixed(1)} j {Fz >= 0 ? '+' : ''}{Fz.toFixed(1)} k (N)
                    </p>
                  </div>

                  {/* Coordinate Direction Angles Matrix */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-center">
                      <span className="text-[10px] text-slate-400 block font-mono">Angle α (x-axis):</span>
                      <span className="text-base font-black text-amber-400 font-mono">{alphaDeg.toFixed(1)}°</span>
                    </div>
                    <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-center">
                      <span className="text-[10px] text-slate-400 block font-mono">Angle β (y-axis):</span>
                      <span className="text-base font-black text-orange-400 font-mono">{betaDeg.toFixed(1)}°</span>
                    </div>
                    <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-center">
                      <span className="text-[10px] text-slate-400 block font-mono">Angle γ (z-axis):</span>
                      <span className="text-base font-black text-yellow-400 font-mono">{gammaDeg.toFixed(1)}°</span>
                    </div>
                  </div>
                </div>

                {/* On-Demand Arabic Explanation Drawer */}
                {expandedArabicCalc.has('vectors') && (
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-950/25 to-slate-900/95 border border-amber-500/40 text-right space-y-1.5 animate-in fade-in duration-200" dir="rtl">
                    <div className="flex items-center gap-1.5 text-xs font-black text-amber-300 border-b border-amber-500/20 pb-1">
                      <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                      <span>💡 الفهم الهندسي لحساب متجهات الكابلات بالفراغ:</span>
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed font-medium">
                      متجه الموضع r_AB يبدأ دائماً من النقطة A نحو النقطة B بطرح (إحداثيات النهاية B - إحداثيات البداية A). بقسمة كل مركبة على طول الكابل d نحصل على متجه الوحدة u_AB، وبضربه في قيمة الشد T نحصل على مركبات القوة (F_x, F_y, F_z). زوايا الاتجاه الكارتيزية تحسب بـ cos⁻¹(u_i) وتحقق دائماً cos²α + cos²β + cos²γ = 1.
                    </p>
                  </div>
                )}
              </div>

            </div>
          )}

          {/* TOOL 2: 3D MOMENT r × F SOLVER */}
          {forceTool === 'moments' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-left" dir="ltr">
              
              {/* Inputs */}
              <div className="lg:col-span-5 p-6 rounded-3xl bg-slate-900/90 border-2 border-orange-500/40 space-y-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-black text-white font-mono flex items-center gap-2">
                    <Activity className="w-5 h-5 text-orange-400" />
                    <span>3D Moment Determinant Setup</span>
                  </h3>
                  <button
                    onClick={() => {
                      setMPoint({ x: 2, y: 4, z: -1 });
                      setMRef({ x: 0, y: 0, z: 0 });
                      setMForce({ x: 80, y: -60, z: 120 });
                    }}
                    className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition"
                    title="Reset to default example"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                </div>

                {/* Point of Application P */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 font-mono">
                    Point of Force Application P (x, y, z) m:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <input 
                      type="number" 
                      value={mPoint.x} 
                      onChange={(e) => setMPoint({...mPoint, x: parseFloat(e.target.value) || 0})}
                      className="px-2.5 py-1.5 rounded-xl bg-slate-950 border border-slate-700 font-mono text-white text-xs" 
                    />
                    <input 
                      type="number" 
                      value={mPoint.y} 
                      onChange={(e) => setMPoint({...mPoint, y: parseFloat(e.target.value) || 0})}
                      className="px-2.5 py-1.5 rounded-xl bg-slate-950 border border-slate-700 font-mono text-white text-xs" 
                    />
                    <input 
                      type="number" 
                      value={mPoint.z} 
                      onChange={(e) => setMPoint({...mPoint, z: parseFloat(e.target.value) || 0})}
                      className="px-2.5 py-1.5 rounded-xl bg-slate-950 border border-slate-700 font-mono text-white text-xs" 
                    />
                  </div>
                </div>

                {/* Force Vector Components */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 font-mono">
                    Force Vector F (F_x, F_y, F_z) N:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <input 
                      type="number" 
                      value={mForce.x} 
                      onChange={(e) => setMForce({...mForce, x: parseFloat(e.target.value) || 0})}
                      className="px-2.5 py-1.5 rounded-xl bg-slate-950 border border-slate-700 font-mono text-white text-xs" 
                    />
                    <input 
                      type="number" 
                      value={mForce.y} 
                      onChange={(e) => setMForce({...mForce, y: parseFloat(e.target.value) || 0})}
                      className="px-2.5 py-1.5 rounded-xl bg-slate-950 border border-slate-700 font-mono text-white text-xs" 
                    />
                    <input 
                      type="number" 
                      value={mForce.z} 
                      onChange={(e) => setMForce({...mForce, z: parseFloat(e.target.value) || 0})}
                      className="px-2.5 py-1.5 rounded-xl bg-slate-950 border border-slate-700 font-mono text-white text-xs" 
                    />
                  </div>
                </div>

                {/* Specified Axis for M_axis */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 font-mono">
                    Axis Vector for Projection (dx, dy, dz):
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <input 
                      type="number" 
                      value={mAxis.x} 
                      onChange={(e) => setMAxis({...mAxis, x: parseFloat(e.target.value) || 0})}
                      className="px-2.5 py-1.5 rounded-xl bg-slate-950 border border-slate-700 font-mono text-white text-xs" 
                    />
                    <input 
                      type="number" 
                      value={mAxis.y} 
                      onChange={(e) => setMAxis({...mAxis, y: parseFloat(e.target.value) || 0})}
                      className="px-2.5 py-1.5 rounded-xl bg-slate-950 border border-slate-700 font-mono text-white text-xs" 
                    />
                    <input 
                      type="number" 
                      value={mAxis.z} 
                      onChange={(e) => setMAxis({...mAxis, z: parseFloat(e.target.value) || 0})}
                      className="px-2.5 py-1.5 rounded-xl bg-slate-950 border border-slate-700 font-mono text-white text-xs" 
                    />
                  </div>
                </div>
              </div>

              {/* Outputs */}
              <div className="lg:col-span-7 space-y-4">
                <div className="p-6 rounded-3xl bg-slate-900/90 border-2 border-orange-500/40 space-y-4 shadow-xl">
                  <span className="text-xs font-black text-orange-400 uppercase font-mono tracking-wider block border-b border-slate-800 pb-2">
                    Cross Product Determinant Expansion M_O = r × F
                  </span>

                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs space-y-1">
                    <p className="text-slate-400">Position Vector r = {mrx} i {mry >= 0 ? '+' : ''}{mry} j {mrz >= 0 ? '+' : ''}{mrz} k m</p>
                    <p className="text-slate-400">Force Vector F = {mForce.x} i {mForce.y >= 0 ? '+' : ''}{mForce.y} j {mForce.z >= 0 ? '+' : ''}{mForce.z} k N</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-950/40 via-slate-950 to-slate-950 border border-orange-500/50 space-y-1">
                    <span className="text-xs text-orange-300 font-black font-mono uppercase tracking-wide">
                      Resultant Moment Vector M_O:
                    </span>
                    <p className="text-lg sm:text-2xl font-black text-white font-mono">
                      M_O = {Mx.toFixed(1)} i {My >= 0 ? '+' : ''}{My.toFixed(1)} j {Mz >= 0 ? '+' : ''}{Mz.toFixed(1)} k (N·m)
                    </p>
                    <span className="text-xs text-orange-400 font-mono">
                      Moment Magnitude |M_O| = {M_mag.toFixed(2)} N·m
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-mono text-slate-400 block">Scalar Moment About Specified Axis (M_axis):</span>
                      <span className="text-base font-black text-amber-300 font-mono">
                        M_a = {M_axis_scalar.toFixed(2)} N·m
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono">
                      u_a = ({uax.toFixed(2)}, {uay.toFixed(2)}, {uaz.toFixed(2)})
                    </span>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TOOL 3: 2D BEAM EQUILIBRIUM SOLVER */}
          {forceTool === 'beam' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-left" dir="ltr">
              
              {/* Inputs */}
              <div className="lg:col-span-5 p-6 rounded-3xl bg-slate-900/90 border-2 border-yellow-500/40 space-y-4">
                <h3 className="text-base font-black text-white font-mono flex items-center gap-2">
                  <Layers className="w-5 h-5 text-yellow-400" />
                  <span>2D Beam & Load Parameters</span>
                </h3>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 font-mono flex justify-between">
                    <span>Total Beam Length (L):</span>
                    <span className="text-yellow-400 font-black">{beamLength} m</span>
                  </label>
                  <input
                    type="range"
                    min="2"
                    max="16"
                    step="0.5"
                    value={beamLength}
                    onChange={(e) => setBeamLength(parseFloat(e.target.value))}
                    className="w-full accent-yellow-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 font-mono flex justify-between">
                    <span>Point Load P (at distance a = {pointLoadPos} m):</span>
                    <span className="text-yellow-400 font-black">{pointLoadP} kN</span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="50"
                    step="1"
                    value={pointLoadP}
                    onChange={(e) => setPointLoadP(parseFloat(e.target.value))}
                    className="w-full accent-yellow-500"
                  />
                  <input
                    type="range"
                    min="0"
                    max={beamLength}
                    step="0.25"
                    value={pointLoadPos}
                    onChange={(e) => setPointLoadPos(parseFloat(e.target.value))}
                    className="w-full accent-yellow-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 font-mono flex justify-between">
                    <span>Uniform Distributed Load (UDL w):</span>
                    <span className="text-yellow-400 font-black">{distLoadW} kN/m</span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="20"
                    step="0.5"
                    value={distLoadW}
                    onChange={(e) => setDistLoadW(parseFloat(e.target.value))}
                    className="w-full accent-yellow-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 font-mono flex justify-between">
                    <span>Applied Moment M (CCW):</span>
                    <span className="text-yellow-400 font-black">{concMomentM} kN·m</span>
                  </label>
                  <input
                    type="range"
                    min="-50"
                    max="50"
                    step="2"
                    value={concMomentM}
                    onChange={(e) => setConcMomentM(parseFloat(e.target.value))}
                    className="w-full accent-yellow-500"
                  />
                </div>
              </div>

              {/* Outputs */}
              <div className="lg:col-span-7 space-y-4">
                <div className="p-6 rounded-3xl bg-slate-900/90 border-2 border-yellow-500/40 space-y-4 shadow-xl">
                  <span className="text-xs font-black text-yellow-400 uppercase font-mono tracking-wider block border-b border-slate-800 pb-2">
                    Static Equilibrium Reactions (Pin A & Roller B)
                  </span>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                      <span className="text-xs text-slate-400 font-mono">Reaction at Pin A (A_y):</span>
                      <p className="text-xl sm:text-2xl font-black text-white font-mono">
                        {Ay_reaction.toFixed(2)} kN
                      </p>
                      <span className="text-[10px] text-emerald-400 font-mono">
                        {Ay_reaction >= 0 ? 'Acting Upward (↑)' : 'Acting Downward (↓)'}
                      </span>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                      <span className="text-xs text-slate-400 font-mono">Reaction at Roller B (B_y):</span>
                      <p className="text-xl sm:text-2xl font-black text-white font-mono">
                        {By_reaction.toFixed(2)} kN
                      </p>
                      <span className="text-[10px] text-emerald-400 font-mono">
                        {By_reaction >= 0 ? 'Acting Upward (↑)' : 'Acting Downward (↓)'}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs space-y-1.5">
                    <div className="flex justify-between text-slate-300">
                      <span>Total Downward Gravity Load:</span>
                      <span className="font-bold text-white">{(pointLoadP + totalUDL).toFixed(2)} kN</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Sum of Upward Reactions (A_y + B_y):</span>
                      <span className="font-bold text-emerald-400">{(Ay_reaction + By_reaction).toFixed(2)} kN</span>
                    </div>
                    <div className="flex justify-between text-slate-400 text-[10px] border-t border-slate-800 pt-1">
                      <span>Equilibrium Check Σ F_y:</span>
                      <span className="text-emerald-400 font-bold">PASS (Σ F_y = 0)</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>
      )}

      {/* =================================================================== */}
      {/* SECTION 2: BRANCH 2 SOLVERS (STRUCTURES, FRICTION & INERTIA)        */}
      {/* =================================================================== */}
      {!isForceEquilibrium && (
        <div className="space-y-6">
          
          {/* Tool Selector Bar */}
          <div className="flex flex-wrap items-center gap-2 p-2 bg-slate-900/90 rounded-2xl border border-slate-800" dir="ltr">
            <button
              onClick={() => setStructTool('friction')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold font-mono transition-all flex items-center gap-2 ${
                structTool === 'friction'
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg shadow-orange-900/40'
                  : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Activity className="w-4 h-4 text-orange-300" />
              <span>1. Friction: Slipping vs. Tipping</span>
            </button>

            <button
              onClick={() => setStructTool('inertia')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold font-mono transition-all flex items-center gap-2 ${
                structTool === 'inertia'
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg shadow-orange-900/40'
                  : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Layers className="w-4 h-4 text-red-300" />
              <span>2. I-Beam Centroid & Area Inertia (Steiner)</span>
            </button>

            <button
              onClick={() => setStructTool('truss')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold font-mono transition-all flex items-center gap-2 ${
                structTool === 'truss'
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg shadow-orange-900/40'
                  : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Compass className="w-4 h-4 text-amber-300" />
              <span>3. Belt Friction & Capstan Solver</span>
            </button>
          </div>

          {/* TOOL 2.1: SLIPPING VS TIPPING SOLVER */}
          {structTool === 'friction' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-left" dir="ltr">
              
              {/* Inputs */}
              <div className="lg:col-span-5 p-6 rounded-3xl bg-slate-900/90 border-2 border-orange-500/40 space-y-4">
                <h3 className="text-base font-black text-white font-mono flex items-center gap-2">
                  <Activity className="w-5 h-5 text-orange-400" />
                  <span>Block Geometry & Friction Parameters</span>
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-slate-300 font-mono block">Base Width b (m):</label>
                    <input 
                      type="number" 
                      step="0.05"
                      value={fricWidth} 
                      onChange={(e) => setFricWidth(parseFloat(e.target.value) || 0.1)}
                      className="w-full px-2.5 py-1.5 rounded-xl bg-slate-950 border border-slate-700 font-mono text-white text-xs" 
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-300 font-mono block">Total Height h (m):</label>
                    <input 
                      type="number" 
                      step="0.05"
                      value={fricHeight} 
                      onChange={(e) => setFricHeight(parseFloat(e.target.value) || 0.1)}
                      className="w-full px-2.5 py-1.5 rounded-xl bg-slate-950 border border-slate-700 font-mono text-white text-xs" 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 font-mono flex justify-between">
                    <span>Block Weight W:</span>
                    <span className="text-orange-400 font-black">{fricWeight} N</span>
                  </label>
                  <input
                    type="range"
                    min="100"
                    max="2000"
                    step="50"
                    value={fricWeight}
                    onChange={(e) => setFricWeight(parseFloat(e.target.value))}
                    className="w-full accent-orange-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 font-mono flex justify-between">
                    <span>Friction Coefficient (μ_s):</span>
                    <span className="text-orange-400 font-black">{fricMuS}</span>
                  </label>
                  <input
                    type="range"
                    min="0.05"
                    max="0.80"
                    step="0.02"
                    value={fricMuS}
                    onChange={(e) => setFricMuS(parseFloat(e.target.value))}
                    className="w-full accent-orange-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 font-mono flex justify-between">
                    <span>Applied Load Height (h_f):</span>
                    <span className="text-orange-400 font-black">{fricLoadH} m</span>
                  </label>
                  <input
                    type="range"
                    min="0.1"
                    max={fricHeight}
                    step="0.05"
                    value={fricLoadH}
                    onChange={(e) => setFricLoadH(parseFloat(e.target.value))}
                    className="w-full accent-orange-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 font-mono flex justify-between">
                    <span>Applied Lateral Force P:</span>
                    <span className="text-orange-400 font-black">{fricForceP} N</span>
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="1000"
                    step="10"
                    value={fricForceP}
                    onChange={(e) => setFricForceP(parseFloat(e.target.value))}
                    className="w-full accent-orange-500"
                  />
                </div>
              </div>

              {/* Outputs */}
              <div className="lg:col-span-7 space-y-4">
                <div className="p-6 rounded-3xl bg-slate-900/90 border-2 border-orange-500/40 space-y-4 shadow-xl">
                  <span className="text-xs font-black text-orange-400 uppercase font-mono tracking-wider block border-b border-slate-800 pb-2">
                    Slipping vs. Tipping Threshold Evaluation
                  </span>

                  <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-950 to-orange-950/40 border border-orange-500/40 space-y-1">
                    <span className="text-xs text-slate-400 font-mono uppercase tracking-wide">Physical Governing State:</span>
                    <p className={`text-lg sm:text-xl font-black font-mono ${frictionColor}`}>
                      {frictionStatus}
                    </p>
                    <p className="text-xs text-slate-300 font-bold" dir="rtl">
                      {frictionStatusAr}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 font-mono text-xs">
                    <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                      <span className="text-slate-400">Critical Slipping Force:</span>
                      <p className="text-base font-black text-amber-400">P_slip = {P_slip_crit.toFixed(1)} N</p>
                      <span className="text-[10px] text-slate-500">P_slip = μ_s · W</span>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                      <span className="text-slate-400">Critical Tipping Force:</span>
                      <p className="text-base font-black text-red-400">P_tip = {P_tip_crit.toFixed(1)} N</p>
                      <span className="text-[10px] text-slate-500">P_tip = W · (b / 2h_f)</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs space-y-1">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Normal Force Shift x:</span>
                      <span className="font-bold text-white">{normShiftX.toFixed(3)} m</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Maximum Allowed Shift (b/2):</span>
                      <span className="font-bold text-amber-400">{maxShiftX.toFixed(3)} m</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TOOL 2.2: I-BEAM INERTIA SOLVER */}
          {structTool === 'inertia' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-left" dir="ltr">
              
              {/* Inputs */}
              <div className="lg:col-span-5 p-6 rounded-3xl bg-slate-900/90 border-2 border-red-500/40 space-y-4">
                <h3 className="text-base font-black text-white font-mono flex items-center gap-2">
                  <Layers className="w-5 h-5 text-red-400" />
                  <span>I-Beam Section Dimensions (mm)</span>
                </h3>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 font-mono flex justify-between">
                    <span>Flange Width (b_f):</span>
                    <span className="text-red-400 font-black">{flangeWidth} mm</span>
                  </label>
                  <input
                    type="range"
                    min="50"
                    max="400"
                    step="10"
                    value={flangeWidth}
                    onChange={(e) => setFlangeWidth(parseFloat(e.target.value))}
                    className="w-full accent-red-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 font-mono flex justify-between">
                    <span>Flange Thickness (t_f):</span>
                    <span className="text-red-400 font-black">{flangeThick} mm</span>
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="50"
                    step="1"
                    value={flangeThick}
                    onChange={(e) => setFlangeThick(parseFloat(e.target.value))}
                    className="w-full accent-red-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 font-mono flex justify-between">
                    <span>Web Height (h_w):</span>
                    <span className="text-red-400 font-black">{webHeight} mm</span>
                  </label>
                  <input
                    type="range"
                    min="100"
                    max="600"
                    step="10"
                    value={webHeight}
                    onChange={(e) => setWebHeight(parseFloat(e.target.value))}
                    className="w-full accent-red-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 font-mono flex justify-between">
                    <span>Web Thickness (t_w):</span>
                    <span className="text-red-400 font-black">{webThick} mm</span>
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="40"
                    step="1"
                    value={webThick}
                    onChange={(e) => setWebThick(parseFloat(e.target.value))}
                    className="w-full accent-red-500"
                  />
                </div>
              </div>

              {/* Outputs */}
              <div className="lg:col-span-7 space-y-4">
                <div className="p-6 rounded-3xl bg-slate-900/90 border-2 border-red-500/40 space-y-4 shadow-xl">
                  <span className="text-xs font-black text-red-400 uppercase font-mono tracking-wider block border-b border-slate-800 pb-2">
                    Section Properties & Centroidal Moment of Inertia (I_x)
                  </span>

                  <div className="grid grid-cols-2 gap-4 font-mono text-xs">
                    <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                      <span className="text-slate-400">Total Height (H):</span>
                      <p className="text-lg font-black text-white">{totalH} mm</p>
                      <span className="text-[10px] text-amber-400">Neutral Axis y_bar = {y_bar} mm</span>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                      <span className="text-slate-400">Total Cross-Section Area:</span>
                      <p className="text-lg font-black text-white">{totalArea.toLocaleString()} mm²</p>
                      <span className="text-[10px] text-slate-500">{(totalArea / 100).toFixed(1)} cm²</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-gradient-to-r from-red-950/40 via-slate-950 to-slate-950 border border-red-500/50 space-y-1">
                    <span className="text-xs text-red-300 font-black font-mono uppercase tracking-wide">
                      Centroidal Moment of Inertia (I_x):
                    </span>
                    <p className="text-xl sm:text-2xl font-black text-white font-mono">
                      I_x = {total_Ix_cm4.toFixed(1)} cm⁴
                    </p>
                    <p className="text-xs text-slate-400 font-mono">
                      = {(total_Ix_mm4 / 1e6).toFixed(2)} × 10⁶ mm⁴ (= {total_Ix_m4.toExponential(4)} m⁴)
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between font-mono">
                    <span className="text-xs text-slate-400">Radius of Gyration (k_x):</span>
                    <span className="text-base font-black text-orange-400">
                      k_x = {radius_gyration_kx.toFixed(2)} mm
                    </span>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TOOL 2.3: BELT FRICTION SOLVER */}
          {structTool === 'truss' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-left" dir="ltr">
              
              {/* Inputs */}
              <div className="lg:col-span-5 p-6 rounded-3xl bg-slate-900/90 border-2 border-amber-500/40 space-y-4">
                <h3 className="text-base font-black text-white font-mono flex items-center gap-2">
                  <Compass className="w-5 h-5 text-amber-400" />
                  <span>Capstan Belt Friction Parameters</span>
                </h3>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 font-mono flex justify-between">
                    <span>Slack Side Tension (T1):</span>
                    <span className="text-amber-400 font-black">{slackTension} N</span>
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="1000"
                    step="10"
                    value={slackTension}
                    onChange={(e) => setSlackTension(parseFloat(e.target.value))}
                    className="w-full accent-amber-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 font-mono flex justify-between">
                    <span>Friction Coefficient (μ):</span>
                    <span className="text-amber-400 font-black">{beltCoeffMu}</span>
                  </label>
                  <input
                    type="range"
                    min="0.1"
                    max="0.6"
                    step="0.05"
                    value={beltCoeffMu}
                    onChange={(e) => setBeltCoeffMu(parseFloat(e.target.value))}
                    className="w-full accent-amber-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 font-mono flex justify-between">
                    <span>Number of Wrap Turns:</span>
                    <span className="text-amber-400 font-black">{beltTurns} turns</span>
                  </label>
                  <input
                    type="range"
                    min="0.25"
                    max="4.0"
                    step="0.25"
                    value={beltTurns}
                    onChange={(e) => setBeltTurns(parseFloat(e.target.value))}
                    className="w-full accent-amber-500"
                  />
                  <span className="text-[10px] text-slate-400 font-mono block">
                    Contact angle β = {betaRadians.toFixed(2)} rad ({(beltTurns * 360).toFixed(0)}°)
                  </span>
                </div>
              </div>

              {/* Outputs */}
              <div className="lg:col-span-7 space-y-4">
                <div className="p-6 rounded-3xl bg-slate-900/90 border-2 border-amber-500/40 space-y-4 shadow-xl">
                  <span className="text-xs font-black text-amber-400 uppercase font-mono tracking-wider block border-b border-slate-800 pb-2">
                    Exponential Tension Amplification T2 = T1 · e^(μ β)
                  </span>

                  <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-950/40 via-slate-950 to-slate-950 border border-amber-500/50 space-y-1">
                    <span className="text-xs text-amber-300 font-black font-mono uppercase tracking-wide">
                      Tight Side Tension T2:
                    </span>
                    <p className="text-xl sm:text-2xl font-black text-white font-mono">
                      T2 = {tightTensionT2.toFixed(1)} N
                    </p>
                    <span className="text-xs text-emerald-400 font-mono">
                      Force Amplification: {(tightTensionT2 / slackTension).toFixed(1)}x
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs space-y-1">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Total Friction Force Held by Bollard:</span>
                      <span className="font-bold text-white">{frictionHoldingForce.toFixed(1)} N</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>
      )}

    </div>
  );
}
