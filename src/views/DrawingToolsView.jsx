import React, { useState } from 'react';
import { 
  Compass, Layers, Activity, Scissors, Box, FileText, CheckCircle2, 
  AlertTriangle, Copy, Check, RefreshCw, Lightbulb, Sparkles, ArrowRight, Eye
} from 'lucide-react';

export default function DrawingToolsView({ activeDivision = 'geometric_orthographic' }) {
  const isGeometric = activeDivision === 'geometric_orthographic';

  // Sub-tabs for geometric_orthographic
  const [geomTool, setGeomTool] = useState('tangency'); // 'tangency' | 'miter' | 'lines'

  // Sub-tabs for isometric_sections
  const [isoTool, setIsoTool] = useState('four_center'); // 'four_center' | 'sections'

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
  // TOOL 1: TANGENCY ARC SOLVER (GEOMETRIC CONSTRUCTIONS)
  // =========================================================================
  const [tangencyType, setTangencyType] = useState('external'); // 'external' | 'internal' | 'mixed' | 'line'
  const [r1, setR1] = useState(25); // Circle 1 radius (mm)
  const [r2, setR2] = useState(35); // Circle 2 radius (mm)
  const [centerDist, setCenterDist] = useState(90); // Distance between O1 and O2 (mm)
  const [blendR, setBlendR] = useState(40); // Tangency blend arc radius (mm)

  // Tangency calculations
  let d1 = 0;
  let d2 = 0;
  let isFeasible = true;
  let feasibilityMsg = '';

  if (tangencyType === 'external') {
    d1 = r1 + blendR;
    d2 = r2 + blendR;
    if (d1 + d2 < centerDist) {
      isFeasible = false;
      feasibilityMsg = `Cannot span centers: (R1+R) + (R2+R) = ${d1 + d2} mm < Center Distance (${centerDist} mm). Increase Blend Radius R.`;
    } else if (Math.abs(d1 - d2) > centerDist) {
      isFeasible = false;
      feasibilityMsg = `One arc entirely inside the other: |d1 - d2| > Center Distance. Adjust radii.`;
    }
  } else if (tangencyType === 'internal') {
    d1 = blendR - r1;
    d2 = blendR - r2;
    if (blendR <= r1 || blendR <= r2) {
      isFeasible = false;
      feasibilityMsg = `Blend radius R (${blendR} mm) must be strictly greater than both R1 (${r1} mm) and R2 (${r2} mm).`;
    } else if (d1 + d2 < centerDist) {
      isFeasible = false;
      feasibilityMsg = `Difference radii (R-R1) + (R-R2) = ${d1 + d2} mm < Center Distance (${centerDist} mm). Increase Blend Radius R.`;
    }
  } else if (tangencyType === 'mixed') {
    d1 = r1 + blendR; // external to circle 1
    d2 = blendR - r2; // internal to circle 2
    if (blendR <= r2) {
      isFeasible = false;
      feasibilityMsg = `Blend radius R (${blendR} mm) must be greater than enclosed circle R2 (${r2} mm).`;
    } else if (d1 + d2 < centerDist) {
      isFeasible = false;
      feasibilityMsg = `Radii sum (d1 + d2) < Center Distance. Adjust radii.`;
    }
  } else {
    // Line and circle
    d1 = r1 + blendR;
    d2 = blendR; // parallel offset from line
  }

  // Calculate intersection point (Compass Center O) for 2D SVG
  // O1 at (cx1, cy1), O2 at (cx2, cy2)
  const svgWidth = 460;
  const svgHeight = 240;
  const cx1 = 120;
  const cy1 = 140;
  const cx2 = cx1 + centerDist * 1.6;
  const cy2 = cy1;

  // Triangle intersection of d1 and d2 over base centerDist
  let compassOX = cx1;
  let compassOY = cy1;
  let t1X = cx1;
  let t1Y = cy1;
  let t2X = cx2;
  let t2Y = cy2;

  if (isFeasible && tangencyType !== 'line') {
    const scale = 1.6;
    const D_scaled = centerDist * scale;
    const d1_scaled = d1 * scale;
    const d2_scaled = d2 * scale;
    // Cosine rule on triangle (O1, O2, O)
    const cosAngle = (d1_scaled * d1_scaled + D_scaled * D_scaled - d2_scaled * d2_scaled) / (2 * d1_scaled * D_scaled);
    const clampedCos = Math.max(-1, Math.min(1, cosAngle));
    const sinAngle = Math.sqrt(Math.max(0, 1 - clampedCos * clampedCos));

    // Choose top intersection for blend arc
    compassOX = cx1 + d1_scaled * clampedCos;
    compassOY = cy1 - d1_scaled * sinAngle;

    // Unit vector from O to O1
    const v1x = (cx1 - compassOX);
    const v1y = (cy1 - compassOY);
    const mag1 = Math.sqrt(v1x * v1x + v1y * v1y) || 1;
    // Tangent point T1
    if (tangencyType === 'external') {
      t1X = compassOX + (v1x / mag1) * (blendR * scale);
      t1Y = compassOY + (v1y / mag1) * (blendR * scale);
    } else {
      t1X = compassOX - (v1x / mag1) * (blendR * scale);
      t1Y = compassOY - (v1y / mag1) * (blendR * scale);
    }

    // Unit vector from O to O2
    const v2x = (cx2 - compassOX);
    const v2y = (cy2 - compassOY);
    const mag2 = Math.sqrt(v2x * v2x + v2y * v2y) || 1;
    if (tangencyType === 'external') {
      t2X = compassOX + (v2x / mag2) * (blendR * scale);
      t2Y = compassOY + (v2y / mag2) * (blendR * scale);
    } else {
      t2X = compassOX - (v2x / mag2) * (blendR * scale);
      t2Y = compassOY - (v2y / mag2) * (blendR * scale);
    }
  }

  // =========================================================================
  // TOOL 2: 45° MITER LINE & ORTHOGRAPHIC ALIGNER
  // =========================================================================
  const [objWidth, setObjWidth] = useState(70);   // mm (Length / X)
  const [objHeight, setObjHeight] = useState(55);  // mm (Height / Y)
  const [objDepth, setObjDepth] = useState(45);   // mm (Depth / Z)
  const [stepCut, setStepCut] = useState(25);     // mm step cut width/height
  const [showRays, setShowRays] = useState(true);

  // =========================================================================
  // TOOL 3: LINE TYPES & PRECEDENCE INSPECTOR
  // =========================================================================
  const [hasVisible, setHasVisible] = useState(true);
  const [hasHidden, setHasHidden] = useState(true);
  const [hasCenterline, setHasCenterline] = useState(true);
  const [hasCuttingPlane, setHasCuttingPlane] = useState(false);

  const getDominantLine = () => {
    if (hasVisible) return { name: 'Continuous Thick (Type A)', priority: 1, color: 'text-cyan-400', lead: '0.7 mm (HB)', rule: 'Visible solid outlines always take highest precedence!' };
    if (hasHidden) return { name: 'Dashed Thin Line (Type E)', priority: 2, color: 'text-amber-400', lead: '0.35 mm (H)', rule: 'Hidden dashed line supersedes cutting planes and centerlines.' };
    if (hasCuttingPlane) return { name: 'Cutting Plane Line (Type H)', priority: 3, color: 'text-red-400', lead: '0.7 / 0.35 mm', rule: 'Cutting plane line takes precedence over normal centerlines.' };
    if (hasCenterline) return { name: 'Chain Thin Centerline (Type G)', priority: 4, color: 'text-emerald-400', lead: '0.25 mm (2H)', rule: 'Centerline is drawn when no other line coincides.' };
    return { name: 'No Line Selected', priority: 5, color: 'text-slate-500', lead: '-', rule: 'Enable at least one line type.' };
  };

  const dominant = getDominantLine();

  // =========================================================================
  // TOOL 4: ISOMETRIC FOUR-CENTER ELLIPSE GENERATOR
  // =========================================================================
  const [isoFace, setIsoFace] = useState('top'); // 'top' | 'left' | 'right'
  const [circleDia, setCircleDia] = useState(60); // mm
  const [cylinderExtrusion, setCylinderExtrusion] = useState(30); // mm
  const [isoStep, setIsoStep] = useState(4); // 1: Rhombus, 2: Obtuse corners, 3: Midpoints, 4: Full Ellipse, 5: 3D Cylinder

  // =========================================================================
  // TOOL 5: SECTIONAL VIEWS & HATCHING VALIDATOR
  // =========================================================================
  const [hatchAngle, setHatchAngle] = useState(45); // deg
  const [hatchSpacing, setHatchSpacing] = useState(2.0); // mm
  const [sectionType, setSectionType] = useState('full'); // 'full' | 'half' | 'offset'
  const [testedComponent, setTestedComponent] = useState('web'); // 'web' | 'solid_wall' | 'shaft' | 'bolt' | 'hole'

  const getComponentHatchRule = () => {
    switch (testedComponent) {
      case 'web':
        return {
          shouldHatch: false,
          status: 'EXCEPTION (DO NOT HATCH)',
          badgeColor: 'bg-amber-950/80 text-amber-300 border-amber-500/50',
          explanationEn: 'Thin webs, ribs, and stiffener brackets cut along their longitudinal flat plane must NEVER be hatched under standard ISO 128 conventions. Hatching would falsely portray a solid monolithic block.',
          explanationAr: 'العصب المائل أو ضلع التقوية إذا قُطع طولياً بموازاة سطحه الأكبر يُحظر تهشيره نهائياً ويُترك مساحة بيضاء محاطة بخطوط ظاهرة لمنع إعطاء انطباع خاطئ بأن الجسم كتلة مصمتة سميكة.'
        };
      case 'shaft':
      case 'bolt':
        return {
          shouldHatch: false,
          status: 'STANDARD PART (DO NOT HATCH)',
          badgeColor: 'bg-orange-950/80 text-orange-300 border-orange-500/50',
          explanationEn: 'Standard solid engineering elements (bolts, screws, nuts, solid shafts, keys, and pins) sliced along their longitudinal axes are shown in full unsectioned exterior elevation.',
          explanationAr: 'الأجزاء الميكانيكية القياسية المصمتة (المسامير، الأعمدة المصمتة، الخوابير، التيل) لا تُهشر إذا قُطعت طولياً، بل تُرسم كأجسام سليمة كاملة بدون تهشير لأنها لا تحوي تجاويف داخلية.'
        };
      case 'hole':
        return {
          shouldHatch: false,
          status: 'EMPTY VOID (DO NOT HATCH)',
          badgeColor: 'bg-blue-950/80 text-blue-300 border-blue-500/50',
          explanationEn: 'Internal hollow bores, slots, and cavities contain no metal; the cutting saw cuts through empty air, so they must remain clean white unhatched areas.',
          explanationAr: 'التجاويف والثقوب والمجاري الداخلية فراغ خالي من المعدن؛ نصل المنشار يمر في الهواء، لذلك تظل بيضاء نقية دون تهشير.'
        };
      default: // solid_wall
        return {
          shouldHatch: true,
          status: 'SOLID METAL (HATCH AT 45°)',
          badgeColor: 'bg-emerald-950/80 text-emerald-300 border-emerald-500/50',
          explanationEn: 'Continuous solid workpiece metal sliced directly by the cutting plane must be hatched with thin continuous lines (0.25-0.35 mm) inclined at 45° with 1.5-3 mm spacing.',
          explanationAr: 'المعدن المصمت الحقيقي الذي شقه نصل المنشار يُهشر إجبارياً بخطوط رقيقة متوازية بزاوية 45° وبمسافات منتظمة (1.5 إلى 3 مم).'
        };
    }
  };

  const hatchRule = getComponentHatchRule();

  return (
    <div className="space-y-6 text-left font-sans" dir="ltr">

      {/* Top Banner & Division Sub-Tabs */}
      <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-zinc-900 to-slate-900 border border-slate-700/80 shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-300 text-xs font-mono font-bold border border-cyan-800/60">
              <Compass className="w-3.5 h-3.5 text-cyan-400" />
              <span>MDP 001 • Interactive Drafting Solvers & Simulators</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white font-mono">
              {isGeometric ? 'Geometric Constructions & Orthographic View Inspector' : 'Isometric Box, Four-Center Ellipse & Sectioning Validator'}
            </h2>
            <p className="text-xs text-slate-300 font-arabic" dir="rtl">
              {isGeometric 
                ? 'أدوات وحاسبات تفاعلية لحل أقواس التماس الهندسية ومحاذاة المساقط بخط الـ 45° وفحص أسبقية تراكب الخطوط القياسية.'
                : 'أدوات تفاعلية لرسم المنظور الأيزومتري بزاوية 30° وتوليد القطع الناقص بالمراكز الأربعة والتحقق من قواعد التهشير والقطاعات.'}
            </p>
          </div>

          {/* Sub-Tabs switcher strictly within division */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-950 border border-slate-800 shrink-0">
            {isGeometric ? (
              <>
                <button
                  onClick={() => setGeomTool('tangency')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition ${
                    geomTool === 'tangency'
                      ? 'bg-cyan-600 text-white shadow-md shadow-cyan-950/60'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Tangency Arc Solver
                </button>
                <button
                  onClick={() => setGeomTool('miter')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition ${
                    geomTool === 'miter'
                      ? 'bg-cyan-600 text-white shadow-md shadow-cyan-950/60'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  45° Miter Aligner
                </button>
                <button
                  onClick={() => setGeomTool('lines')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition ${
                    geomTool === 'lines'
                      ? 'bg-cyan-600 text-white shadow-md shadow-cyan-950/60'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Line Precedence
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setIsoTool('four_center')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition ${
                    isoTool === 'four_center'
                      ? 'bg-teal-600 text-white shadow-md shadow-teal-950/60'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  4-Center Ellipse & Box
                </button>
                <button
                  onClick={() => setIsoTool('sections')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition ${
                    isoTool === 'sections'
                      ? 'bg-teal-600 text-white shadow-md shadow-teal-950/60'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Sectional Hatching Validator
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* =================================================================== */}
      {/* TOOL 1: TANGENCY ARC SOLVER (GEOMETRIC CONSTRUCTIONS)                */}
      {/* =================================================================== */}
      {isGeometric && geomTool === 'tangency' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left Column: Interactive Inputs & Formulas */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                    Tangency Blend Arc Geometry
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    Step-by-Step Solver
                  </span>
                </div>

                {/* Tangency Case Selector */}
                <div className="space-y-1.5">
                  <label className="text-xs text-slate-400 font-bold block">
                    Tangency Mode:
                  </label>
                  <div className="grid grid-cols-2 gap-1.5 text-xs font-mono">
                    <button
                      onClick={() => setTangencyType('external')}
                      className={`p-2 rounded-xl border text-center transition font-bold ${
                        tangencyType === 'external'
                          ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500/60'
                          : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                      }`}
                    >
                      External Tangency
                    </button>
                    <button
                      onClick={() => setTangencyType('internal')}
                      className={`p-2 rounded-xl border text-center transition font-bold ${
                        tangencyType === 'internal'
                          ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500/60'
                          : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                      }`}
                    >
                      Internal Enclosing
                    </button>
                    <button
                      onClick={() => setTangencyType('mixed')}
                      className={`p-2 rounded-xl border text-center transition font-bold ${
                        tangencyType === 'mixed'
                          ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500/60'
                          : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                      }`}
                    >
                      Mixed Tangency
                    </button>
                    <button
                      onClick={() => setTangencyType('line')}
                      className={`p-2 rounded-xl border text-center transition font-bold ${
                        tangencyType === 'line'
                          ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500/60'
                          : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                      }`}
                    >
                      Line & Circle Fillet
                    </button>
                  </div>
                </div>

                {/* Parameter Sliders */}
                <div className="space-y-3 pt-2">
                  <div>
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-300">Circle 1 Radius (R1):</span>
                      <span className="text-cyan-400 font-bold">{r1} mm</span>
                    </div>
                    <input
                      type="range"
                      min={10}
                      max={50}
                      value={r1}
                      onChange={(e) => setR1(Number(e.target.value))}
                      className="w-full accent-cyan-500"
                    />
                  </div>

                  {tangencyType !== 'line' && (
                    <>
                      <div>
                        <div className="flex justify-between text-xs font-mono">
                          <span className="text-slate-300">Circle 2 Radius (R2):</span>
                          <span className="text-cyan-400 font-bold">{r2} mm</span>
                        </div>
                        <input
                          type="range"
                          min={10}
                          max={60}
                          value={r2}
                          onChange={(e) => setR2(Number(e.target.value))}
                          className="w-full accent-cyan-500"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between text-xs font-mono">
                          <span className="text-slate-300">Center Distance (D = O1-O2):</span>
                          <span className="text-amber-400 font-bold">{centerDist} mm</span>
                        </div>
                        <input
                          type="range"
                          min={60}
                          max={130}
                          value={centerDist}
                          onChange={(e) => setCenterDist(Number(e.target.value))}
                          className="w-full accent-amber-500"
                        />
                      </div>
                    </>
                  )}

                  <div>
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-300">Blend Arc Radius (R):</span>
                      <span className="text-emerald-400 font-bold">{blendR} mm</span>
                    </div>
                    <input
                      type="range"
                      min={20}
                      max={90}
                      value={blendR}
                      onChange={(e) => setBlendR(Number(e.target.value))}
                      className="w-full accent-emerald-500"
                    />
                  </div>
                </div>

                {/* Radius Formulation Box */}
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs font-mono">
                  <div className="text-slate-400 font-bold">Compass Radii from Centers:</div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 block text-[11px]">Radius from O1 (d1):</span>
                      <span className="text-cyan-300 font-bold text-sm">
                        {tangencyType === 'internal' ? `R - R1 = ${d1} mm` : `R1 + R = ${d1} mm`}
                      </span>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 block text-[11px]">
                        {tangencyType === 'line' ? 'Offset from Line:' : 'Radius from O2 (d2):'}
                      </span>
                      <span className="text-emerald-300 font-bold text-sm">
                        {tangencyType === 'line' ? `d = R = ${d2} mm` : tangencyType === 'internal' || tangencyType === 'mixed' ? `R - R2 = ${d2} mm` : `R2 + R = ${d2} mm`}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Feasibility Alert */}
                {!isFeasible && (
                  <div className="p-3 rounded-xl bg-red-950/80 border border-red-500/50 text-red-200 text-xs flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>{feasibilityMsg}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Visual SVG Graphic & Contact Points */}
            <div className="lg:col-span-7 space-y-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-300 font-bold">Tangency Geometry & Contact Points Visualizer</span>
                  <span className="text-emerald-400 font-bold">
                    {isFeasible ? '✓ Centers Blended Smoothly' : '⚠️ Adjust Parameters'}
                  </span>
                </div>

                {/* SVG Visual Canvas */}
                <div className="w-full bg-slate-950 rounded-xl p-3 border border-slate-800 overflow-hidden flex items-center justify-center">
                  <svg width={svgWidth} height={svgHeight} className="overflow-visible">
                    {/* Grid background reference lines */}
                    <line x1={0} y1={cy1} x2={svgWidth} y2={cy1} stroke="#334155" strokeWidth="0.7" strokeDasharray="4 4" />
                    
                    {tangencyType !== 'line' ? (
                      <>
                        {/* Circle 1 */}
                        <circle cx={cx1} cy={cy1} r={r1 * 1.6} fill="none" stroke="#38bdf8" strokeWidth="2" />
                        <circle cx={cx1} cy={cy1} r="3" fill="#38bdf8" />
                        <text x={cx1 - 10} y={cy1 + 18} fill="#94a3b8" fontSize="10" fontFamily="monospace">O1 (R={r1})</text>

                        {/* Circle 2 */}
                        <circle cx={cx2} cy={cy2} r={r2 * 1.6} fill="none" stroke="#38bdf8" strokeWidth="2" />
                        <circle cx={cx2} cy={cy2} r="3" fill="#38bdf8" />
                        <text x={cx2 - 10} y={cy2 + 18} fill="#94a3b8" fontSize="10" fontFamily="monospace">O2 (R={r2})</text>

                        {isFeasible && (
                          <>
                            {/* Construction Arcs from O1 and O2 */}
                            <circle cx={cx1} cy={cy1} r={d1 * 1.6} fill="none" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                            <circle cx={cx2} cy={cy2} r={d2 * 1.6} fill="none" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />

                            {/* Compass Center O */}
                            <circle cx={compassOX} cy={compassOY} r="4" fill="#10b981" />
                            <text x={compassOX + 8} y={compassOY - 6} fill="#10b981" fontSize="11" fontWeight="bold" fontFamily="monospace">
                              Center O
                            </text>

                            {/* Ray from O to O1 (shows tangent point T1) */}
                            <line x1={compassOX} y1={compassOY} x2={cx1} y2={cy1} stroke="#64748b" strokeWidth="1" strokeDasharray="2 2" />
                            <circle cx={t1X} cy={t1Y} r="3" fill="#ef4444" />
                            <text x={t1X - 16} y={t1Y - 6} fill="#ef4444" fontSize="10" fontWeight="bold" fontFamily="monospace">T1</text>

                            {/* Ray from O to O2 (shows tangent point T2) */}
                            <line x1={compassOX} y1={compassOY} x2={cx2} y2={cy2} stroke="#64748b" strokeWidth="1" strokeDasharray="2 2" />
                            <circle cx={t2X} cy={t2Y} r="3" fill="#ef4444" />
                            <text x={t2X + 6} y={t2Y - 6} fill="#ef4444" fontSize="10" fontWeight="bold" fontFamily="monospace">T2</text>

                            {/* The Final Tangency Blend Arc R */}
                            <path
                              d={`M ${t1X} ${t1Y} A ${blendR * 1.6} ${blendR * 1.6} 0 0 1 ${t2X} ${t2Y}`}
                              fill="none"
                              stroke="#10b981"
                              strokeWidth="3.5"
                            />
                          </>
                        )}
                      </>
                    ) : (
                      <>
                        {/* Straight reference line */}
                        <line x1={30} y1={190} x2={430} y2={190} stroke="#38bdf8" strokeWidth="2.5" />
                        <text x={40} y={205} fill="#94a3b8" fontSize="10" fontFamily="monospace">Reference Datum Line</text>

                        {/* Circle */}
                        <circle cx={260} cy={90} r={r1 * 1.6} fill="none" stroke="#38bdf8" strokeWidth="2" />
                        <circle cx={260} cy={90} r="3" fill="#38bdf8" />
                        <text x={260 - 20} y={75} fill="#94a3b8" fontSize="10" fontFamily="monospace">O1 (R={r1})</text>

                        {/* Parallel offset line at distance R */}
                        <line x1={30} y1={190 - blendR * 1.6} x2={430} y2={190 - blendR * 1.6} stroke="#f59e0b" strokeWidth="1" strokeDasharray="4 4" />

                        {/* Blend arc center */}
                        <circle cx={180} cy={190 - blendR * 1.6} r="4" fill="#10b981" />
                        <text x={190} y={190 - blendR * 1.6 - 6} fill="#10b981" fontSize="10" fontWeight="bold" fontFamily="monospace">
                          Center O
                        </text>

                        {/* Blend fillet arc */}
                        <path
                          d={`M ${180} ${190} A ${blendR * 1.6} ${blendR * 1.6} 0 0 1 ${225} ${125}`}
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="3"
                        />
                      </>
                    )}
                  </svg>
                </div>

                {/* Legend and Drafting Step Guide */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-[11px] font-mono">
                  <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                    <span className="text-slate-300">Base Circles</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                    <span className="text-slate-300">Offset Arcs (d1, d2)</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                    <span className="text-slate-300">Blend Arc (R)</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                    <span className="text-slate-300">Tangency Points (T)</span>
                  </div>
                </div>

                {/* Collapsible Arabic Explainer */}
                <div className="pt-2">
                  <button
                    onClick={() => toggleArabicCalc('tangency')}
                    className="w-full py-2 px-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-xs text-amber-300 font-bold border border-slate-800 flex items-center justify-between transition font-arabic"
                    dir="rtl"
                  >
                    <span>💡 الشرح وطريقة الرسم بالفرجار في ورقة الامتحان:</span>
                    <span className="text-xs font-mono">{expandedArabicCalc.has('tangency') ? '▲ إخفاء' : '▼ إظهار'}</span>
                  </button>
                  {expandedArabicCalc.has('tangency') && (
                    <div className="p-3.5 mt-2 rounded-xl bg-amber-950/20 border border-amber-500/30 text-xs text-slate-200 leading-relaxed space-y-1.5 font-arabic text-right" dir="rtl">
                      <p>
                        <strong>1. في التماس الخارجي:</strong> نفتح الفرجار بفتحة تساوي (R1 + R) ونركز في مركز الدائرة الأولى O1 ونرسم قوساً خفيفاً. ثم نفتح الفرجار بفتحة (R2 + R) ونركز في O2 ونرسم قوساً يقطع الأول في نقطة المركز O.
                      </p>
                      <p>
                        <strong>2. تحديد نقطتي التماس T1 و T2:</strong> صل خطاً خفيفاً بالمسطرة بين المركز O ومركز الدائرة O1؛ نقطة تقاطعه مع محيط الدائرة هي نقطة التماس T1. وكرر مع O2 للحصول على T2.
                      </p>
                      <p>
                        <strong>3. رسم القوس النهائي:</strong> ركّز سن الفرجار في O وافتحه إلى T1 وارسم القوس الذي سيلتحم تماماً مع T2 دون أي زيادة أو انكسار.
                      </p>
                    </div>
                  )}
                </div>

              </div>
            </div>

          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* TOOL 2: 45° MITER LINE & ORTHOGRAPHIC ALIGNER                       */}
      {/* =================================================================== */}
      {isGeometric && geomTool === 'miter' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-sm font-black text-white font-mono uppercase tracking-wider">
                  First-Angle Orthographic Views & 45° Miter Line Simulator
                </h3>
                <p className="text-xs text-slate-400 font-arabic" dir="rtl">
                  محاكاة محاذاة المساقط الثلاثة (الرأسي والأفقي والجانبي) ونقل أبعاد العمق عبر خط الـ 45° بزاوية الإسقاط الأولى.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowRays(!showRays)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold border transition ${
                    showRays ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500/60' : 'bg-slate-950 text-slate-400 border-slate-800'
                  }`}
                >
                  {showRays ? 'Projection Rays: ON' : 'Projection Rays: OFF'}
                </button>
              </div>
            </div>

            {/* Slider Controls */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono">
              <div>
                <div className="flex justify-between text-slate-400">
                  <span>Width (L):</span>
                  <span className="text-cyan-400 font-bold">{objWidth} mm</span>
                </div>
                <input
                  type="range"
                  min={50}
                  max={90}
                  value={objWidth}
                  onChange={(e) => setObjWidth(Number(e.target.value))}
                  className="w-full accent-cyan-500"
                />
              </div>

              <div>
                <div className="flex justify-between text-slate-400">
                  <span>Height (H):</span>
                  <span className="text-cyan-400 font-bold">{objHeight} mm</span>
                </div>
                <input
                  type="range"
                  min={40}
                  max={75}
                  value={objHeight}
                  onChange={(e) => setObjHeight(Number(e.target.value))}
                  className="w-full accent-cyan-500"
                />
              </div>

              <div>
                <div className="flex justify-between text-slate-400">
                  <span>Depth (D):</span>
                  <span className="text-amber-400 font-bold">{objDepth} mm</span>
                </div>
                <input
                  type="range"
                  min={30}
                  max={60}
                  value={objDepth}
                  onChange={(e) => setObjDepth(Number(e.target.value))}
                  className="w-full accent-amber-500"
                />
              </div>

              <div>
                <div className="flex justify-between text-slate-400">
                  <span>Step Cut:</span>
                  <span className="text-emerald-400 font-bold">{stepCut} mm</span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={Math.min(objWidth - 10, objHeight - 10)}
                  value={stepCut}
                  onChange={(e) => setStepCut(Number(e.target.value))}
                  className="w-full accent-emerald-500"
                />
              </div>
            </div>

            {/* Orthographic 4-Quadrant Visual Layout */}
            <div className="w-full bg-slate-950 rounded-2xl p-4 border border-slate-800 flex items-center justify-center overflow-x-auto">
              <svg width="560" height="420" className="overflow-visible font-mono">
                {/* 4 Quadrants Divider Axes */}
                <line x1="260" y1="20" x2="260" y2="400" stroke="#475569" strokeWidth="1.2" strokeDasharray="6 4" />
                <line x1="20" y1="210" x2="540" y2="210" stroke="#475569" strokeWidth="1.2" strokeDasharray="6 4" />

                {/* Quadrant 4: 45° Miter Construction Line */}
                <line x1="260" y1="210" x2="480" y2="430" stroke="#f59e0b" strokeWidth="2" />
                <text x="350" y="325" fill="#f59e0b" fontSize="11" fontWeight="bold">45° Miter Line</text>

                {/* 1. FRONT VIEW (ELEVATION) - Top Left Quadrant */}
                <g id="front-view">
                  <rect x={260 - 20 - objWidth * 2} y={210 - 20 - objHeight * 2} width={objWidth * 2} height={objHeight * 2} fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
                  {/* Step cut */}
                  <rect x={260 - 20 - stepCut * 2} y={210 - 20 - objHeight * 2} width={stepCut * 2} height={stepCut * 2} fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
                  <text x={260 - 20 - objWidth * 2} y={210 - 25 - objHeight * 2} fill="#38bdf8" fontSize="11" fontWeight="bold">
                    Elevation (Front View)
                  </text>
                  <text x={260 - 20 - objWidth} y={210 - 30} fill="#94a3b8" fontSize="10">L = {objWidth} mm</text>
                </g>

                {/* 2. TOP VIEW (PLAN) - Bottom Left Quadrant */}
                <g id="plan-view">
                  <rect x={260 - 20 - objWidth * 2} y={210 + 20} width={objWidth * 2} height={objDepth * 2} fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
                  {/* Step cut in Plan */}
                  <rect x={260 - 20 - stepCut * 2} y={210 + 20} width={stepCut * 2} height={objDepth * 2} fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
                  <text x={260 - 20 - objWidth * 2} y={210 + 35 + objDepth * 2} fill="#38bdf8" fontSize="11" fontWeight="bold">
                    Plan (Top View - Below Front)
                  </text>
                </g>

                {/* 3. SIDE VIEW - Top Right Quadrant (Left Side View on Right) */}
                <g id="side-view">
                  <rect x={260 + 20} y={210 - 20 - objHeight * 2} width={objDepth * 2} height={objHeight * 2} fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
                  {/* Step cut in Side */}
                  <line x1={260 + 20} y1={210 - 20 - (objHeight - stepCut) * 2} x2={260 + 20 + objDepth * 2} y2={210 - 20 - (objHeight - stepCut) * 2} stroke="#38bdf8" strokeWidth="1.8" />
                  <text x={260 + 20} y={210 - 25 - objHeight * 2} fill="#38bdf8" fontSize="11" fontWeight="bold">
                    Left Side View (Drawn on Right)
                  </text>
                </g>

                {/* Dynamic Projection Rays (Cyan Dashed Lines) */}
                {showRays && (
                  <g id="projection-rays" stroke="#06b6d4" strokeWidth="1" strokeDasharray="3 3" opacity="0.75">
                    {/* Vertical rays between Front and Plan */}
                    <line x1={260 - 20 - objWidth * 2} y1={210 - 20} x2={260 - 20 - objWidth * 2} y2={210 + 20} />
                    <line x1={260 - 20} y1={210 - 20} x2={260 - 20} y2={210 + 20} />
                    <line x1={260 - 20 - stepCut * 2} y1={210 - 20} x2={260 - 20 - stepCut * 2} y2={210 + 20} />

                    {/* Horizontal rays between Front and Side View */}
                    <line x1={260 - 20} y1={210 - 20 - objHeight * 2} x2={260 + 20} y2={210 - 20 - objHeight * 2} />
                    <line x1={260 - 20} y1={210 - 20} x2={260 + 20} y2={210 - 20} />
                    <line x1={260 - 20} y1={210 - 20 - stepCut * 2} x2={260 + 20} y2={210 - 20 - stepCut * 2} />

                    {/* Rays from Plan to 45° Line then Upward into Side View */}
                    {/* Front edge ray */}
                    <line x1={260 - 20} y1={210 + 20} x2={260 + 20} y2={210 + 20} />
                    <line x1={260 + 20} y1={210 + 20} x2={260 + 20} y2={210 - 20} stroke="#10b981" strokeWidth="1.2" />

                    {/* Back edge ray (Reflected on 45° line) */}
                    <line x1={260 - 20} y1={210 + 20 + objDepth * 2} x2={260 + 20 + objDepth * 2} y2={210 + 20 + objDepth * 2} />
                    <line x1={260 + 20 + objDepth * 2} y1={210 + 20 + objDepth * 2} x2={260 + 20 + objDepth * 2} y2={210 - 20} stroke="#10b981" strokeWidth="1.2" />
                  </g>
                )}
              </svg>
            </div>

            {/* Alignment Axioms Box */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-cyan-400 font-bold block">1. Length Alignment</span>
                <span className="text-slate-300">Front and Plan share identical X length ({objWidth} mm) directly aligned vertically.</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-cyan-400 font-bold block">2. Height Alignment</span>
                <span className="text-slate-300">Front and Side View share identical Y height ({objHeight} mm) directly aligned horizontally.</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-emerald-400 font-bold block">3. Depth Reflection</span>
                <span className="text-slate-300">Plan depth ({objDepth} mm) reflects via 45° line into Side View horizontal width.</span>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* TOOL 3: LINE TYPES & PRECEDENCE INSPECTOR                           */}
      {/* =================================================================== */}
      {isGeometric && geomTool === 'lines' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left Column: Coincidence Tester */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                    Line Coincidence Priority Simulator
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    ISO 128 Standard
                  </span>
                </div>

                <p className="text-xs text-slate-300">
                  Select which lines coincide on the same drawing path to observe the real-time dominant line rendered:
                </p>

                {/* Checkboxes for coinciding lines */}
                <div className="space-y-2 pt-1">
                  <label className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer hover:border-cyan-500/50 transition">
                    <div className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        checked={hasVisible}
                        onChange={(e) => setHasVisible(e.target.checked)}
                        className="w-4 h-4 accent-cyan-500"
                      />
                      <span className="text-xs font-mono font-bold text-white">Visible Solid Outline (Type A)</span>
                    </div>
                    <span className="text-[11px] font-mono text-cyan-400 font-bold">0.7 mm (2B/HB)</span>
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer hover:border-amber-500/50 transition">
                    <div className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        checked={hasHidden}
                        onChange={(e) => setHasHidden(e.target.checked)}
                        className="w-4 h-4 accent-amber-500"
                      />
                      <span className="text-xs font-mono font-bold text-white">Hidden Dashed Line (Type E)</span>
                    </div>
                    <span className="text-[11px] font-mono text-amber-400 font-bold">0.35 mm (H)</span>
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer hover:border-red-500/50 transition">
                    <div className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        checked={hasCuttingPlane}
                        onChange={(e) => setHasCuttingPlane(e.target.checked)}
                        className="w-4 h-4 accent-red-500"
                      />
                      <span className="text-xs font-mono font-bold text-white">Cutting Plane Line (Type H)</span>
                    </div>
                    <span className="text-[11px] font-mono text-red-400 font-bold">0.7 / 0.35 mm</span>
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer hover:border-emerald-500/50 transition">
                    <div className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        checked={hasCenterline}
                        onChange={(e) => setHasCenterline(e.target.checked)}
                        className="w-4 h-4 accent-emerald-500"
                      />
                      <span className="text-xs font-mono font-bold text-white">Chain Thin Centerline (Type G)</span>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-400 font-bold">0.25 mm (2H)</span>
                  </label>
                </div>

                {/* Dominant Winner Card */}
                <div className="p-4 rounded-xl bg-slate-950 border-2 border-cyan-500/40 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-400 uppercase">Winning Dominant Line:</span>
                    <span className="text-xs font-mono font-black px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                      Priority Rank: #{dominant.priority}
                    </span>
                  </div>
                  <div className={`text-base font-mono font-black ${dominant.color}`}>
                    {dominant.name}
                  </div>
                  <p className="text-xs text-slate-300 font-mono">
                    {dominant.rule}
                  </p>
                </div>

              </div>
            </div>

            {/* Right Column: Visual Line Renderer on Paper Canvas */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
                <span className="text-xs font-mono font-bold text-slate-300 uppercase block">
                  Simulated Paper Rendering (ISO Line Weights)
                </span>

                <div className="w-full bg-slate-950 rounded-xl p-5 border border-slate-800 space-y-6">
                  {/* Active Dominant Line */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[11px] font-mono text-slate-400">
                      <span>Resulting Line on Drawing Sheet:</span>
                      <span className="text-white font-bold">{dominant.name}</span>
                    </div>
                    <div className="h-10 bg-slate-900 rounded-lg flex items-center px-4">
                      {hasVisible ? (
                        <div className="w-full h-1 bg-cyan-400 rounded"></div>
                      ) : hasHidden ? (
                        <div className="w-full h-0.5 border-t-2 border-dashed border-amber-400"></div>
                      ) : hasCuttingPlane ? (
                        <div className="w-full flex items-center">
                          <div className="w-4 h-1 bg-red-400"></div>
                          <div className="flex-1 h-0.5 border-t border-dashed border-red-400 mx-1"></div>
                          <div className="w-4 h-1 bg-red-400"></div>
                        </div>
                      ) : hasCenterline ? (
                        <div className="w-full h-0.5 border-t border-emerald-400" style={{ borderStyle: 'dotted' }}></div>
                      ) : (
                        <span className="text-xs text-slate-600 font-mono">No line drawn</span>
                      )}
                    </div>
                  </div>

                  {/* Complete Reference Hierarchy Table */}
                  <div className="space-y-2 pt-2 border-t border-slate-800 text-xs font-mono">
                    <span className="text-slate-400 font-bold block">Standard Hierarchy of Coincidence:</span>
                    <div className="space-y-1.5">
                      <div className="p-2 rounded-lg bg-slate-900/80 flex items-center justify-between">
                        <span className="text-cyan-400 font-bold">1. Solid Visible Edge (Type A)</span>
                        <span className="text-slate-400">0.7 mm • Never suppressed</span>
                      </div>
                      <div className="p-2 rounded-lg bg-slate-900/80 flex items-center justify-between">
                        <span className="text-amber-400 font-bold">2. Hidden Dashed Line (Type E)</span>
                        <span className="text-slate-400">0.35 mm • Suppresses centerlines</span>
                      </div>
                      <div className="p-2 rounded-lg bg-slate-900/80 flex items-center justify-between">
                        <span className="text-red-400 font-bold">3. Cutting Plane Track (Type H)</span>
                        <span className="text-slate-400">0.7/0.35 mm • Thick ends & bends</span>
                      </div>
                      <div className="p-2 rounded-lg bg-slate-900/80 flex items-center justify-between">
                        <span className="text-emerald-400 font-bold">4. Centerline / Symmetry (Type G)</span>
                        <span className="text-slate-400">0.25 mm • Lowest precedence</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* TOOL 4: ISOMETRIC FOUR-CENTER ELLIPSE GENERATOR                     */}
      {/* =================================================================== */}
      {!isGeometric && isoTool === 'four_center' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left Column: Isometric Controls & Step-by-Step Selector */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-wider">
                    Four-Center Ellipse Parameters
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    30° Isometric
                  </span>
                </div>

                {/* Target Face Selector */}
                <div className="space-y-1.5">
                  <label className="text-xs text-slate-400 font-bold block">
                    Isometric Plane Orientation:
                  </label>
                  <div className="grid grid-cols-3 gap-1.5 text-xs font-mono">
                    <button
                      onClick={() => setIsoFace('top')}
                      className={`p-2 rounded-xl border text-center transition font-bold ${
                        isoFace === 'top'
                          ? 'bg-teal-950/80 text-teal-300 border-teal-500/60'
                          : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                      }`}
                    >
                      Top Face
                    </button>
                    <button
                      onClick={() => setIsoFace('left')}
                      className={`p-2 rounded-xl border text-center transition font-bold ${
                        isoFace === 'left'
                          ? 'bg-teal-950/80 text-teal-300 border-teal-500/60'
                          : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                      }`}
                    >
                      Left Face
                    </button>
                    <button
                      onClick={() => setIsoFace('right')}
                      className={`p-2 rounded-xl border text-center transition font-bold ${
                        isoFace === 'right'
                          ? 'bg-teal-950/80 text-teal-300 border-teal-500/60'
                          : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                      }`}
                    >
                      Right Face
                    </button>
                  </div>
                </div>

                {/* Slider for Circle Diameter */}
                <div className="space-y-3 pt-2">
                  <div>
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-300">Circle Diameter (D):</span>
                      <span className="text-teal-400 font-bold">{circleDia} mm</span>
                    </div>
                    <input
                      type="range"
                      min={40}
                      max={90}
                      value={circleDia}
                      onChange={(e) => setCircleDia(Number(e.target.value))}
                      className="w-full accent-teal-500"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-300">Cylinder Depth Extrusion (L):</span>
                      <span className="text-amber-400 font-bold">{cylinderExtrusion} mm</span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={60}
                      value={cylinderExtrusion}
                      onChange={(e) => setCylinderExtrusion(Number(e.target.value))}
                      className="w-full accent-amber-500"
                    />
                  </div>
                </div>

                {/* Step Progression Buttons */}
                <div className="space-y-1.5 pt-2">
                  <span className="text-xs font-mono text-slate-400 font-bold block">
                    Geometric Construction Stage:
                  </span>
                  <div className="flex flex-wrap gap-1 text-[11px] font-mono">
                    {[
                      { step: 1, label: '1. Rhombus' },
                      { step: 2, label: '2. Obtuse C1,C2' },
                      { step: 3, label: '3. Midpoints C3,C4' },
                      { step: 4, label: '4. Ellipse' },
                      { step: 5, label: '5. 3D Cylinder' }
                    ].map((s) => (
                      <button
                        key={s.step}
                        onClick={() => setIsoStep(s.step)}
                        className={`px-2.5 py-1.5 rounded-lg border font-bold transition ${
                          isoStep === s.step
                            ? 'bg-teal-600 text-white border-teal-400 shadow-md'
                            : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                        }`}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Four Center Geometry Specs */}
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5 text-xs font-mono">
                  <div className="text-teal-400 font-bold">Rhombus & Centers Axioms:</div>
                  <div className="text-slate-300">
                    • Rhombus Side: <strong>{circleDia} mm</strong> parallel to isometric axes.
                  </div>
                  <div className="text-slate-300">
                    • Obtuse Angles: <strong>120°</strong> (Centers C1, C2 for large arcs).
                  </div>
                  <div className="text-slate-300">
                    • Acute Angles: <strong>60°</strong>.
                  </div>
                  <div className="text-slate-300">
                    • Centers C3, C4: Intersections of lines to side midpoints.
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Visual Isometric SVG Canvas */}
            <div className="lg:col-span-7 space-y-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-300 font-bold">30° Isometric Ellipse Visualizer</span>
                  <span className="text-teal-400 font-bold">
                    {isoFace === 'top' ? 'Top Face (Major Axis Horizontal)' : 'Vertical Face'}
                  </span>
                </div>

                {/* SVG Visual Canvas */}
                <div className="w-full bg-slate-950 rounded-xl p-4 border border-slate-800 flex items-center justify-center overflow-hidden">
                  <svg width="460" height="300" className="overflow-visible font-mono">
                    {/* Isometric 30° Axis Guides */}
                    <line x1="230" y1="150" x2="230" y2="40" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="230" y1="150" x2="380" y2="235" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="230" y1="150" x2="80" y2="235" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" />
                    <text x="385" y="240" fill="#64748b" fontSize="10">30° Right</text>
                    <text x="35" y="240" fill="#64748b" fontSize="10">30° Left</text>

                    {/* Step 1: Bounding Rhombus on Top Face */}
                    {isoFace === 'top' && (
                      <g id="top-face-rhombus">
                        {/* Rhombus Corners: Top, Right, Bottom, Left */}
                        {/* Center at (230, 150) */}
                        {/* dx = circleDia * cos(30°) * 1.5, dy = circleDia * sin(30°) * 1.5 */}
                        {(() => {
                          const s = circleDia * 1.4;
                          const dx = s * 0.866;
                          const dy = s * 0.5;
                          const pTop = { x: 230, y: 150 - dy * 2 };
                          const pRight = { x: 230 + dx, y: 150 - dy };
                          const pBottom = { x: 230, y: 150 };
                          const pLeft = { x: 230 - dx, y: 150 - dy };

                          // Midpoints
                          const m1 = { x: (pTop.x + pRight.x) / 2, y: (pTop.y + pRight.y) / 2 };
                          const m2 = { x: (pRight.x + pBottom.x) / 2, y: (pRight.y + pBottom.y) / 2 };
                          const m3 = { x: (pBottom.x + pLeft.x) / 2, y: (pBottom.y + pLeft.y) / 2 };
                          const m4 = { x: (pLeft.x + pTop.x) / 2, y: (pLeft.y + pTop.y) / 2 };

                          // Centers C3, C4
                          const c3 = { x: 230 - dx * 0.333, y: 150 - dy };
                          const c4 = { x: 230 + dx * 0.333, y: 150 - dy };

                          return (
                            <>
                              {/* Rhombus Path */}
                              <polygon
                                points={`${pTop.x},${pTop.y} ${pRight.x},${pRight.y} ${pBottom.x},${pBottom.y} ${pLeft.x},${pLeft.y}`}
                                fill="none"
                                stroke={isoStep >= 1 ? '#38bdf8' : 'none'}
                                strokeWidth="1.8"
                                strokeDasharray={isoStep >= 4 ? '4 4' : 'none'}
                              />

                              {/* Obtuse Corners (C1 and C2) */}
                              {isoStep >= 2 && (
                                <>
                                  <circle cx={pTop.x} cy={pTop.y} r="4" fill="#f59e0b" />
                                  <text x={pTop.x - 22} y={pTop.y - 6} fill="#f59e0b" fontSize="10" fontWeight="bold">C1 (120°)</text>
                                  <circle cx={pBottom.x} cy={pBottom.y} r="4" fill="#f59e0b" />
                                  <text x={pBottom.x - 22} y={pBottom.y + 16} fill="#f59e0b" fontSize="10" fontWeight="bold">C2 (120°)</text>
                                </>
                              )}

                              {/* Midpoints & Radiating Lines */}
                              {isoStep >= 3 && (
                                <>
                                  {/* Midpoint markers */}
                                  <circle cx={m1.x} cy={m1.y} r="3" fill="#ef4444" />
                                  <circle cx={m2.x} cy={m2.y} r="3" fill="#ef4444" />
                                  <circle cx={m3.x} cy={m3.y} r="3" fill="#ef4444" />
                                  <circle cx={m4.x} cy={m4.y} r="3" fill="#ef4444" />

                                  {/* Lines from C1 to M2 and M3 */}
                                  <line x1={pTop.x} y1={pTop.y} x2={m2.x} y2={m2.y} stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3" />
                                  <line x1={pTop.x} y1={pTop.y} x2={m3.x} y2={m3.y} stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3" />

                                  {/* Lines from C2 to M1 and M4 */}
                                  <line x1={pBottom.x} y1={pBottom.y} x2={m1.x} y2={m1.y} stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3" />
                                  <line x1={pBottom.x} y1={pBottom.y} x2={m4.x} y2={m4.y} stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3" />

                                  {/* Small Arc Centers C3 and C4 */}
                                  <circle cx={c3.x} cy={c3.y} r="4" fill="#10b981" />
                                  <text x={c3.x - 22} y={c3.y - 6} fill="#10b981" fontSize="10" fontWeight="bold">C3</text>
                                  <circle cx={c4.x} cy={c4.y} r="4" fill="#10b981" />
                                  <text x={c4.x + 8} y={c4.y - 6} fill="#10b981" fontSize="10" fontWeight="bold">C4</text>
                                </>
                              )}

                              {/* Step 4: The Four-Center Ellipse */}
                              {isoStep >= 4 && (
                                <ellipse
                                  cx={230}
                                  cy={150 - dy}
                                  rx={dx * 0.95}
                                  ry={dy * 0.95}
                                  fill="none"
                                  stroke="#14b8a6"
                                  strokeWidth="3"
                                />
                              )}

                              {/* Step 5: 3D Cylinder Extrusion */}
                              {isoStep === 5 && cylinderExtrusion > 0 && (
                                <>
                                  {/* Rear Ellipse */}
                                  <ellipse
                                    cx={230}
                                    cy={150 - dy + cylinderExtrusion * 1.4}
                                    rx={dx * 0.95}
                                    ry={dy * 0.95}
                                    fill="none"
                                    stroke="#14b8a6"
                                    strokeWidth="2"
                                    strokeDasharray="4 4"
                                  />
                                  {/* Side Tangent Extrusion Outlines */}
                                  <line
                                    x1={230 - dx * 0.95}
                                    y1={150 - dy}
                                    x2={230 - dx * 0.95}
                                    y2={150 - dy + cylinderExtrusion * 1.4}
                                    stroke="#14b8a6"
                                    strokeWidth="2.5"
                                  />
                                  <line
                                    x1={230 + dx * 0.95}
                                    y1={150 - dy}
                                    x2={230 + dx * 0.95}
                                    y2={150 - dy + cylinderExtrusion * 1.4}
                                    stroke="#14b8a6"
                                    strokeWidth="2.5"
                                  />
                                </>
                              )}
                            </>
                          );
                        })()}
                      </g>
                    )}

                    {/* Left / Right Vertical Face Mode */}
                    {isoFace !== 'top' && (
                      <g id="vertical-face-ellipse">
                        <ellipse
                          cx={230}
                          cy={140}
                          rx={circleDia * 0.9}
                          ry={circleDia * 0.55}
                          transform={`rotate(${isoFace === 'left' ? -30 : 30} 230 140)`}
                          fill="none"
                          stroke="#14b8a6"
                          strokeWidth="3"
                        />
                        <text x="140" y="240" fill="#94a3b8" fontSize="11">
                          Vertical Face Ellipse (Major Axis at 60°)
                        </text>
                      </g>
                    )}
                  </svg>
                </div>

                {/* Collapsible Arabic Explainer */}
                <div className="pt-2">
                  <button
                    onClick={() => toggleArabicCalc('four_center')}
                    className="w-full py-2 px-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-xs text-teal-300 font-bold border border-slate-800 flex items-center justify-between transition font-arabic"
                    dir="rtl"
                  >
                    <span>💡 الشرح وطريقة رسم البيضاوية بالمراكز الأربعة في الامتحان:</span>
                    <span className="text-xs font-mono">{expandedArabicCalc.has('four_center') ? '▲ إخفاء' : '▼ إظهار'}</span>
                  </button>
                  {expandedArabicCalc.has('four_center') && (
                    <div className="p-3.5 mt-2 rounded-xl bg-teal-950/20 border border-teal-500/30 text-xs text-slate-200 leading-relaxed space-y-1.5 font-arabic text-right" dir="rtl">
                      <p>
                        <strong>1. رسم المعين:</strong> ارسم معيناً أضلاعه موازية لمحاور المنظور وطول ضلعه يساوي قطر الدائرة D (60 مم).
                      </p>
                      <p>
                        <strong>2. تحديد الرأسين المنفرجين C1 و C2:</strong> الزاويتان المنفرجتان (120°) هما المركزان للقوسين الكبيرين.
                      </p>
                      <p>
                        <strong>3. شبكة الخطوط (رقم 7 و 8):</strong> من كل رأس منفرج مد خطين بالمسطرة إلى منتصفي الضلعين المقابلين له. نقط تقاطع هذه الخطوط تعطي المركزين الصغيرين C3 و C4.
                      </p>
                      <p>
                        <strong>4. رسم الأقواس الأربعة:</strong> ركز في C1 وافتح الفرجار لمنتصف الضلع المقابل وارسم القوس الكبير الأول، وكرر من C2 للقوس الثاني. ثم ركز في C3 و C4 وارسم القوسين الصغيرين لتكتمل البيضاوية بنعومة تامة.
                      </p>
                    </div>
                  )}
                </div>

              </div>
            </div>

          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* TOOL 5: SECTIONAL VIEWS & HATCHING VALIDATOR                       */}
      {/* =================================================================== */}
      {!isGeometric && isoTool === 'sections' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left Column: Hatching & Exception Inspector */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-wider">
                    ISO 128 Hatching Rules & Exceptions
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    Rule Validator
                  </span>
                </div>

                {/* Component Type Selector */}
                <div className="space-y-1.5">
                  <label className="text-xs text-slate-400 font-bold block">
                    Component Sliced by Cutting Plane:
                  </label>
                  <div className="grid grid-cols-2 gap-1.5 text-xs font-mono">
                    <button
                      onClick={() => setTestedComponent('web')}
                      className={`p-2.5 rounded-xl border text-center transition font-bold ${
                        testedComponent === 'web'
                          ? 'bg-amber-950/80 text-amber-300 border-amber-500/60'
                          : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                      }`}
                    >
                      Longitudinal Web / Rib (العصب)
                    </button>
                    <button
                      onClick={() => setTestedComponent('solid_wall')}
                      className={`p-2.5 rounded-xl border text-center transition font-bold ${
                        testedComponent === 'solid_wall'
                          ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/60'
                          : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                      }`}
                    >
                      Solid Workpiece Wall
                    </button>
                    <button
                      onClick={() => setTestedComponent('bolt')}
                      className={`p-2.5 rounded-xl border text-center transition font-bold ${
                        testedComponent === 'bolt'
                          ? 'bg-orange-950/80 text-orange-300 border-orange-500/60'
                          : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                      }`}
                    >
                      Longitudinal Bolt / Shaft
                    </button>
                    <button
                      onClick={() => setTestedComponent('hole')}
                      className={`p-2.5 rounded-xl border text-center transition font-bold ${
                        testedComponent === 'hole'
                          ? 'bg-blue-950/80 text-blue-300 border-blue-500/60'
                          : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                      }`}
                    >
                      Internal Hollow Cavity
                    </button>
                  </div>
                </div>

                {/* Hatching Angle Slider */}
                <div className="space-y-3 pt-2">
                  <div>
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-300">Hatching Angle:</span>
                      <span className={hatchAngle === 45 ? 'text-emerald-400 font-bold' : 'text-amber-400 font-bold'}>
                        {hatchAngle}° {hatchAngle === 45 ? '(Standard ISO)' : '(Non-standard)'}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={90}
                      step={5}
                      value={hatchAngle}
                      onChange={(e) => setHatchAngle(Number(e.target.value))}
                      className="w-full accent-emerald-500"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-300">Hatching Spacing Pitch:</span>
                      <span className="text-teal-400 font-bold">{hatchSpacing} mm</span>
                    </div>
                    <input
                      type="range"
                      min={1.0}
                      max={5.0}
                      step={0.5}
                      value={hatchSpacing}
                      onChange={(e) => setHatchSpacing(Number(e.target.value))}
                      className="w-full accent-teal-500"
                    />
                  </div>
                </div>

                {/* Validation Status Card */}
                <div className={`p-4 rounded-xl border ${hatchRule.badgeColor} space-y-2`}>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold">Hatching Rule Status:</span>
                    <span className="font-black px-2 py-0.5 rounded bg-black/40">
                      {hatchRule.status}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-slate-200">
                    {hatchRule.explanationEn}
                  </p>
                  <p className="text-xs font-arabic text-slate-300 text-right pt-1 border-t border-slate-700/60" dir="rtl">
                    {hatchRule.explanationAr}
                  </p>
                </div>

              </div>
            </div>

            {/* Right Column: Visual Sectional Cut Simulation */}
            <div className="lg:col-span-7 space-y-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-300 font-bold">Simulated Sectional Cut & Hatching Matrix</span>
                  <span className="text-teal-400 font-bold">Angle: {hatchAngle}° • Spacing: {hatchSpacing}mm</span>
                </div>

                {/* SVG Visual Canvas */}
                <div className="w-full bg-slate-950 rounded-xl p-4 border border-slate-800 flex items-center justify-center">
                  <svg width="440" height="260" className="overflow-visible font-mono">
                    {/* SVG Definitions for 45° Hatching Pattern */}
                    <defs>
                      <pattern
                        id="hatchPattern"
                        width={hatchSpacing * 8}
                        height={hatchSpacing * 8}
                        patternTransform={`rotate(${hatchAngle} 0 0)`}
                        patternUnits="userSpaceOnUse"
                      >
                        <line x1="0" y1="0" x2="0" y2={hatchSpacing * 8} stroke="#14b8a6" strokeWidth="1.2" />
                      </pattern>
                    </defs>

                    {/* Machine Bracket Section Example */}
                    {/* Outer Solid Profile */}
                    <path
                      d="M 50 40 L 150 40 L 150 120 L 390 120 L 390 220 L 50 220 Z"
                      fill="url(#hatchPattern)"
                      stroke="#38bdf8"
                      strokeWidth="2.5"
                    />

                    {/* Drilled Hole / Cavity (Left Empty White/Black) */}
                    <rect x="80" y="40" width="40" height="180" fill="#020617" stroke="#38bdf8" strokeWidth="2" />
                    <text x="86" y="130" fill="#94a3b8" fontSize="10">Hole</text>

                    {/* Web / Rib Area */}
                    {/* If testedComponent === 'web', highlight rib non-hatching rule */}
                    <polygon
                      points="150,120 150,50 320,120"
                      fill={testedComponent === 'web' ? '#0f172a' : 'url(#hatchPattern)'}
                      stroke="#f59e0b"
                      strokeWidth="2"
                    />
                    <text x="180" y="90" fill="#f59e0b" fontSize="11" fontWeight="bold">
                      {testedComponent === 'web' ? 'Web (Unhatched!)' : 'Web Area'}
                    </text>

                    {/* Cutting Plane Line at top */}
                    <line x1="30" y1="20" x2="410" y2="20" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="6 2 2 2" />
                    <line x1="20" y1="20" x2="40" y2="20" stroke="#ef4444" strokeWidth="4" />
                    <line x1="400" y1="20" x2="420" y2="20" stroke="#ef4444" strokeWidth="4" />
                    {/* Direction arrows */}
                    <polygon points="25,20 35,10 35,30" fill="#ef4444" />
                    <text x="15" y="12" fill="#ef4444" fontSize="11" fontWeight="bold">A</text>
                    <polygon points="415,20 405,10 405,30" fill="#ef4444" />
                    <text x="420" y="12" fill="#ef4444" fontSize="11" fontWeight="bold">A</text>
                    <text x="170" y="15" fill="#ef4444" fontSize="10">SECTION A-A</text>
                  </svg>
                </div>

                {/* 4 Golden Hatching Axioms */}
                <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] font-mono">
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="text-teal-400 font-bold block">1. Thin Continuous Line</span>
                    <span className="text-slate-400">0.25 - 0.35 mm (drawn with 2H/3H pencil)</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="text-teal-400 font-bold block">2. Standard 45° Angle</span>
                    <span className="text-slate-400">Drawn with 45° set-square against T-square</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="text-amber-400 font-bold block">3. Web Long Cut Rule</span>
                    <span className="text-slate-400">Webs sliced along plane are NEVER hatched</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="text-blue-400 font-bold block">4. Internal Voids Blank</span>
                    <span className="text-slate-400">Drilled holes and cavities remain unhatched</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
