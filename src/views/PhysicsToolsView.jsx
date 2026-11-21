import React, { useState } from 'react';
import { 
  Calculator, Compass, Activity, Droplets, Flame, Zap, Layers, 
  Repeat, ArrowRight, Check, Copy, RefreshCw, Lightbulb, CheckCircle2,
  AlertTriangle, Sparkles, Box, Gauge
} from 'lucide-react';

export default function PhysicsToolsView({ activeDivision = 'properties_mechanics' }) {
  const isPropertiesMechanics = activeDivision === 'properties_mechanics';

  // Sub-tabs for properties_mechanics tools
  const [mechanicsTool, setMechanicsTool] = useState('young'); // 'young' | 'stokes' | 'capillary' | 'venturi'

  // Sub-tabs for heat_waves tools
  const [heatTool, setHeatTool] = useState('fourier'); // 'fourier' | 'thermo' | 'pendulum' | 'doppler'

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
  // TOOL 1.1: YOUNG'S MODULUS & WIRE ELONGATION SOLVER
  // =========================================================================
  const [youngForce, setYoungForce] = useState(500); // N
  const [youngLength, setYoungLength] = useState(3.0); // m
  const [youngDiameter, setYoungDiameter] = useState(2.0); // mm
  const [youngMaterial, setYoungMaterial] = useState('steel'); // preset
  const [customY, setCustomY] = useState(200); // GPa

  const MATERIAL_PRESETS = {
    steel: { name: 'Structural Steel (صلب إنشائي)', Y: 200 },
    copper: { name: 'Pure Copper (نحاس أحمر)', Y: 110 },
    aluminum: { name: 'Duralumin / Aluminum (ألمنيوم)', Y: 70 },
    brass: { name: 'Brass (نحاس أصفر)', Y: 100 },
    custom: { name: 'Custom Material Value', Y: customY }
  };

  const currentY_GPa = youngMaterial === 'custom' ? customY : MATERIAL_PRESETS[youngMaterial].Y;
  const currentY_Pa = currentY_GPa * 1e9;
  const radius_m = (youngDiameter / 2) * 1e-3;
  const area_m2 = Math.PI * Math.pow(radius_m, 2);
  const stress_Pa = youngForce / area_m2;
  const stress_MPa = stress_Pa / 1e6;
  const elongation_m = (youngForce * youngLength) / (area_m2 * currentY_Pa);
  const elongation_mm = elongation_m * 1e3;
  const strain = elongation_m / youngLength;
  const strainEnergy_J = 0.5 * youngForce * elongation_m;

  // =========================================================================
  // TOOL 1.2: STOKES' LAW & TERMINAL VELOCITY SOLVER
  // =========================================================================
  const [stokesRadius, setStokesRadius] = useState(1.5); // mm
  const [sphereMaterial, setSphereMaterial] = useState('steel');
  const [fluidPreset, setFluidPreset] = useState('glycerin');
  const [stokesViscosity, setStokesViscosity] = useState(0.95); // Pa.s

  const SPHERE_DENSITIES = {
    steel: { name: 'Steel Ball (ρ = 7800 kg/m³)', rho: 7800 },
    glass: { name: 'Glass Bead (ρ = 2500 kg/m³)', rho: 2500 },
    aluminum: { name: 'Aluminum Ball (ρ = 2700 kg/m³)', rho: 2700 }
  };

  const FLUID_PRESETS = {
    glycerin: { name: 'Pure Glycerin (ρ = 1260 kg/m³, η ≈ 0.95 Pa·s)', rho: 1260, defaultEta: 0.95 },
    castor_oil: { name: 'Castor Oil (ρ = 960 kg/m³, η ≈ 0.65 Pa·s)', rho: 960, defaultEta: 0.65 },
    machine_oil: { name: 'Heavy Machine Oil (ρ = 890 kg/m³, η ≈ 0.25 Pa·s)', rho: 890, defaultEta: 0.25 },
    water: { name: 'Water at 20°C (ρ = 1000 kg/m³, η ≈ 0.001 Pa·s)', rho: 1000, defaultEta: 0.001 }
  };

  const rho_s = SPHERE_DENSITIES[sphereMaterial].rho;
  const rho_f = FLUID_PRESETS[fluidPreset].rho;
  const r_m = stokesRadius * 1e-3;
  const g_acc = 9.80665;
  const eta_val = stokesViscosity > 0 ? stokesViscosity : 0.001;
  const terminal_v_mps = (2 * Math.pow(r_m, 2) * (rho_s - rho_f) * g_acc) / (9 * eta_val);
  const terminal_v_cmps = terminal_v_mps * 100;
  const reynoldsNumber = (2 * r_m * Math.abs(terminal_v_mps) * rho_f) / eta_val;
  const dragForce_N = 6 * Math.PI * eta_val * r_m * Math.abs(terminal_v_mps);

  // =========================================================================
  // TOOL 1.3: CAPILLARY RISE & SURFACE TENSION SOLVER
  // =========================================================================
  const [capillaryRadius, setCapillaryRadius] = useState(0.25); // mm
  const [liquidType, setLiquidType] = useState('water');
  const [customGamma, setCustomGamma] = useState(0.073); // N/m
  const [customContactAngle, setCustomContactAngle] = useState(0); // deg

  const LIQUID_PRESETS = {
    water: { name: 'Pure Water (γ = 0.073 N/m, θ = 0°, ρ = 1000)', gamma: 0.073, theta: 0, rho: 1000 },
    soap: { name: 'Soap Solution (γ = 0.030 N/m, θ = 0°, ρ = 1000)', gamma: 0.030, theta: 0, rho: 1000 },
    mercury: { name: 'Mercury in Glass (γ = 0.485 N/m, θ = 138°, ρ = 13600)', gamma: 0.485, theta: 138, rho: 13600 }
  };

  const curGamma = liquidType === 'custom' ? customGamma : LIQUID_PRESETS[liquidType].gamma;
  const curThetaDeg = liquidType === 'custom' ? customContactAngle : LIQUID_PRESETS[liquidType].theta;
  const curThetaRad = (curThetaDeg * Math.PI) / 180;
  const curRho = LIQUID_PRESETS[liquidType]?.rho || 1000;
  const capR_m = capillaryRadius * 1e-3;
  const capHeight_m = (2 * curGamma * Math.cos(curThetaRad)) / (capR_m * curRho * g_acc);
  const capHeight_mm = capHeight_m * 1000;
  const excessDrop_Pa = (2 * curGamma) / capR_m;
  const excessBubble_Pa = (4 * curGamma) / capR_m;

  // =========================================================================
  // TOOL 1.4: VENTURI METER & BERNOULLI FLOW SOLVER
  // =========================================================================
  const [venturiD1, setVenturiD1] = useState(10); // cm
  const [venturiD2, setVenturiD2] = useState(5); // cm
  const [venturiDeltaH, setVenturiDeltaH] = useState(15); // cm of Hg
  const [manoFluid, setManoFluid] = useState('mercury');

  const rho_pipe = 1000; // Water
  const rho_mano = manoFluid === 'mercury' ? 13600 : 1000;
  const d1_m = venturiD1 * 1e-2;
  const d2_m = venturiD2 * 1e-2;
  const a1_m2 = Math.PI * Math.pow(d1_m / 2, 2);
  const a2_m2 = Math.PI * Math.pow(d2_m / 2, 2);
  const h_mano_m = venturiDeltaH * 1e-2;
  const deltaP_Pa = (rho_mano - rho_pipe) * g_acc * h_mano_m;
  const deltaP_kPa = deltaP_Pa / 1000;
  const areaRatio = a1_m2 / a2_m2;
  const venturiV1 = areaRatio > 1 && deltaP_Pa > 0 
    ? Math.sqrt((2 * deltaP_Pa) / (rho_pipe * (Math.pow(areaRatio, 2) - 1))) 
    : 0;
  const venturiV2 = venturiV1 * areaRatio;
  const discharge_m3s = a1_m2 * venturiV1;
  const discharge_Lps = discharge_m3s * 1000;

  // =========================================================================
  // TOOL 2.1: FOURIER HEAT CONDUCTION & COMPOSITE WALL SOLVER
  // =========================================================================
  const [wallArea, setWallArea] = useState(12.0); // m²
  const [layer1L, setLayer1L] = useState(12.0); // cm
  const [layer1K, setLayer1K] = useState(0.8); // Brick
  const [layer2L, setLayer2L] = useState(5.0); // cm
  const [layer2K, setLayer2K] = useState(0.04); // Foam insulation
  const [tempInside, setTempInside] = useState(24.0); // °C
  const [tempOutside, setTempOutside] = useState(-2.0); // °C

  const l1_m = layer1L * 1e-2;
  const l2_m = layer2L * 1e-2;
  const r1_th = l1_m / (layer1K * wallArea);
  const r2_th = l2_m / (layer2K * wallArea);
  const r_total_th = r1_th + r2_th;
  const deltaT_wall = tempInside - tempOutside;
  const heatRate_W = r_total_th > 0 ? deltaT_wall / r_total_th : 0;
  const heatFlux_Wpm2 = heatRate_W / wallArea;
  const interfaceTemp = tempInside - (heatRate_W * r1_th);
  const k_equivalent = (l1_m + l2_m) / ((l1_m / layer1K) + (l2_m / layer2K));

  // =========================================================================
  // TOOL 2.2: THERMODYNAMIC 1ST LAW & GAS WORK CALCULATOR
  // =========================================================================
  const [thermoProcess, setThermoProcess] = useState('isothermal'); // 'isothermal' | 'isobaric' | 'adiabatic' | 'isochoric'
  const [molesGas, setMolesGas] = useState(1.5);
  const [gasType, setGasType] = useState('diatomic'); // gamma 1.4
  const [initVolume_L, setInitVolume_L] = useState(4.0);
  const [finalVolume_L, setFinalVolume_L] = useState(12.0);
  const [initTemp_C, setInitTemp_C] = useState(27.0); // 300 K
  const [initPressure_kPa, setInitPressure_kPa] = useState(101.3);

  const R_CONST = 8.314;
  const gamma_gas = gasType === 'monatomic' ? 5 / 3 : 7 / 5;
  const cv_gas = R_CONST / (gamma_gas - 1);
  const cp_gas = (gamma_gas * R_CONST) / (gamma_gas - 1);
  const t1_K = initTemp_C + 273.15;
  const v1_m3 = initVolume_L * 1e-3;
  const v2_m3 = finalVolume_L * 1e-3;
  const p1_Pa = initPressure_kPa * 1e3;

  let calcW_J = 0;
  let calcDeltaU_J = 0;
  let calcQ_J = 0;
  let finalTemp_K = t1_K;

  if (thermoProcess === 'isothermal') {
    finalTemp_K = t1_K;
    calcW_J = molesGas * R_CONST * t1_K * Math.log(v2_m3 / v1_m3);
    calcDeltaU_J = 0;
    calcQ_J = calcW_J;
  } else if (thermoProcess === 'isobaric') {
    calcW_J = p1_Pa * (v2_m3 - v1_m3);
    finalTemp_K = t1_K * (v2_m3 / v1_m3);
    calcDeltaU_J = molesGas * cv_gas * (finalTemp_K - t1_K);
    calcQ_J = molesGas * cp_gas * (finalTemp_K - t1_K);
  } else if (thermoProcess === 'adiabatic') {
    finalTemp_K = t1_K * Math.pow(v1_m3 / v2_m3, gamma_gas - 1);
    calcQ_J = 0;
    calcDeltaU_J = molesGas * cv_gas * (finalTemp_K - t1_K);
    calcW_J = -calcDeltaU_J;
  } else {
    // Isochoric
    finalTemp_K = t1_K * 1.5; // hypothetical pressure rise
    calcW_J = 0;
    calcDeltaU_J = molesGas * cv_gas * (finalTemp_K - t1_K);
    calcQ_J = calcDeltaU_J;
  }

  // =========================================================================
  // TOOL 2.3: SIMPLE PENDULUM & SHM FREQUENCY SOLVER
  // =========================================================================
  const [pendulumLength, setPendulumLength] = useState(1.0); // m
  const [pendulumAmp, setPendulumAmp] = useState(5.0); // cm
  const [pendulumMass, setPendulumMass] = useState(0.2); // kg
  const [pendulumGravity, setPendulumGravity] = useState(9.80);

  const pendT = 2 * Math.PI * Math.sqrt(pendulumLength / pendulumGravity);
  const pendFreq = 1 / pendT;
  const pendOmega = Math.sqrt(pendulumGravity / pendulumLength);
  const pendAmp_m = pendulumAmp * 1e-2;
  const pendVmax = pendAmp_m * pendOmega;
  const pendAmax = pendAmp_m * Math.pow(pendOmega, 2);
  const pendTotalEnergy = 0.5 * pendulumMass * Math.pow(pendOmega, 2) * Math.pow(pendAmp_m, 2);

  // =========================================================================
  // TOOL 2.4: DOPPLER EFFECT FREQUENCY SHIFT CALCULATOR
  // =========================================================================
  const [dopplerF, setDopplerF] = useState(800); // Hz
  const [soundSpeed, setSoundSpeed] = useState(343); // m/s
  const [sourceSpeed, setSourceSpeed] = useState(30); // m/s
  const [sourceDirection, setSourceDirection] = useState('approach'); // 'approach' | 'recede'
  const [observerSpeed, setObserverSpeed] = useState(0); // m/s
  const [observerDirection, setObserverDirection] = useState('stationary'); // 'stationary' | 'approach' | 'recede'

  const vs_eff = sourceDirection === 'approach' ? -sourceSpeed : (sourceDirection === 'recede' ? sourceSpeed : 0);
  const vo_eff = observerDirection === 'approach' ? observerSpeed : (observerDirection === 'recede' ? -observerSpeed : 0);
  const dopplerFPrime = (soundSpeed + vs_eff !== 0) 
    ? dopplerF * ((soundSpeed + vo_eff) / (soundSpeed + vs_eff))
    : dopplerF;
  const dopplerShift = dopplerFPrime - dopplerF;
  const dopplerPercent = (dopplerShift / dopplerF) * 100;

  return (
    <div className="space-y-8 pb-16 font-arabic animate-in fade-in duration-200">
      
      {/* Top Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-purple-950 to-slate-900 border-2 border-purple-500/40 shadow-xl relative overflow-hidden text-left" dir="ltr">
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16"></div>
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold border border-purple-400/30">
            <Calculator className="w-4 h-4 text-cyan-400" />
            <span>Interactive Engineering Physics Solvers • معمل الحاسبات الفيزيائية التفاعلية</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-white font-mono tracking-tight">
            {isPropertiesMechanics ? 'PROPERTIES OF MATTER & FLUID MECHANICS SOLVERS' : 'HEAT, THERMODYNAMICS & WAVE MOTION SOLVERS'}
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 font-mono">
            {isPropertiesMechanics
              ? 'Real-time laboratory and exam numerical solvers for Young\'s Modulus, Stokes\' Viscosity, Jurin\'s Capillarity, and Venturi Flow Discharge.'
              : 'Interactive numerical solvers for Fourier\'s Heat Conduction, Thermodynamic Work Done, Simple Pendulum SHM, and Acoustic Doppler Effect.'}
          </p>

          <p className="text-xs text-amber-300 font-bold" dir="rtl">
            {isPropertiesMechanics
              ? 'حاسبات الفرع الأول: معامل يونج والاستطالة، لزوجة ستوكس والسرعة الحدية، التوتر السطحي والأنابيب الشعرية، وديناميكا الموائع ومقياس فنتوري.'
              : 'حاسبات الفرع الثاني: التوصيل الحراري فورييه للجدران المركبة، القانون الأول وشغل الغاز، البندول والحركة التوافقية، وموجات الصوت ودوبلر.'}
          </p>
        </div>
      </div>

      {/* ======================================================================= */}
      {/* BRANCH 1 TOOLS: PROPERTIES OF MATTER & MECHANICS                        */}
      {/* ======================================================================= */}
      {isPropertiesMechanics && (
        <div className="space-y-6">
          {/* Tool Selector Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar" dir="ltr">
            {[
              { id: 'young', label: '1. Young\'s Modulus & Elongation', icon: Layers, badge: 'Hooke\'s Law' },
              { id: 'stokes', label: '2. Stokes Viscosity & Terminal Velocity', icon: Repeat, badge: 'Fluid Friction' },
              { id: 'capillary', label: '3. Jurin\'s Capillary Rise & Surface Tension', icon: Droplets, badge: 'Interfacial Energy' },
              { id: 'venturi', label: '4. Venturi Meter & Continuity Flow', icon: Gauge, badge: 'Bernoulli' }
            ].map(t => {
              const Icon = t.icon;
              const isActive = mechanicsTool === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setMechanicsTool(t.id)}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-mono font-black transition-all flex items-center gap-2 shrink-0 border ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-purple-400/60 shadow-lg shadow-purple-900/50'
                      : 'bg-slate-900/90 text-slate-300 hover:text-white border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-purple-400'}`} />
                  <span>{t.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? 'bg-black/30 text-white' : 'bg-slate-800 text-slate-400'}`}>
                    {t.badge}
                  </span>
                </button>
              );
            })}
          </div>

          {/* TOOL 1.1: YOUNG'S MODULUS */}
          {mechanicsTool === 'young' && (
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border-2 border-purple-500/30 space-y-6 shadow-xl">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <h3 className="text-lg font-black text-white font-mono flex items-center gap-2">
                    <Layers className="w-5 h-5 text-purple-400" />
                    Young's Modulus & Wire Tensile Elongation Solver
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    Calculates tensile stress σ, longitudinal strain ε, total elongation ΔL, and stored elastic strain energy U.
                  </p>
                </div>
                <button
                  onClick={() => toggleArabicCalc('young')}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 transition flex items-center gap-1.5"
                >
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>{expandedArabicCalc.has('young') ? 'إخفاء الشرح بالعربي' : '💡 الشرح بالعربي'}</span>
                </button>
              </div>

              {expandedArabicCalc.has('young') && (
                <div className="p-4 rounded-2xl bg-amber-950/25 border border-amber-500/30 text-right space-y-1.5 animate-in fade-in" dir="rtl">
                  <span className="text-xs font-black text-amber-300">💡 الفكرة الهندسية وتطبيقات الامتحان:</span>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    معامل يونج Y = (F L₀) / (A ΔL) يقيس جساءة المادة وصلابتها ضد الاستطالة. في الامتحان: تذكر دائماً أن مساحة المقطع لسلك دائري هي A = π d² / 4، وأن الاستطالة تتناسب عكسياً مع مربع القطر؛ أي أن مضاعفة القطر مرتين تقلل الاستطالة إلى الربع!
                  </p>
                </div>
              )}

              {/* Inputs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" dir="ltr">
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 block font-mono">Tensile Force F (N):</label>
                  <input
                    type="number"
                    value={youngForce}
                    onChange={(e) => setYoungForce(Math.max(0, parseFloat(e.target.value) || 0))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm font-mono text-cyan-300 font-bold focus:outline-none focus:border-purple-500"
                  />
                  <span className="text-[10px] text-slate-500">Equivalent mass: {(youngForce / 9.8).toFixed(1)} kg</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 block font-mono">Original Length L₀ (m):</label>
                  <input
                    type="number"
                    step="0.1"
                    value={youngLength}
                    onChange={(e) => setYoungLength(Math.max(0.01, parseFloat(e.target.value) || 0.01))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm font-mono text-cyan-300 font-bold focus:outline-none focus:border-purple-500"
                  />
                  <span className="text-[10px] text-slate-500">Specimen wire gauge length</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 block font-mono">Wire Diameter d (mm):</label>
                  <input
                    type="number"
                    step="0.1"
                    value={youngDiameter}
                    onChange={(e) => setYoungDiameter(Math.max(0.01, parseFloat(e.target.value) || 0.01))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm font-mono text-cyan-300 font-bold focus:outline-none focus:border-purple-500"
                  />
                  <span className="text-[10px] text-slate-500">Radius r = {(youngDiameter / 2).toFixed(2)} mm</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 block font-mono">Material Preset (Y):</label>
                  <select
                    value={youngMaterial}
                    onChange={(e) => setYoungMaterial(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs font-mono text-purple-300 font-bold focus:outline-none focus:border-purple-500"
                  >
                    {Object.entries(MATERIAL_PRESETS).map(([k, v]) => (
                      <option key={k} value={k}>{v.name} ({v.Y} GPa)</option>
                    ))}
                  </select>
                  <span className="text-[10px] text-slate-500">Y = {currentY_GPa} GPa ({currentY_Pa.toExponential(1)} Pa)</span>
                </div>
              </div>

              {/* Results Display */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2" dir="ltr">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-950/60 to-slate-950 border border-purple-500/40">
                  <span className="text-[11px] font-bold text-purple-300 block font-mono">Total Elongation (ΔL):</span>
                  <div className="text-2xl font-black text-white font-mono mt-1">
                    {elongation_mm < 0.01 ? elongation_m.toExponential(3) : elongation_mm.toFixed(3)} <span className="text-xs text-purple-400 font-normal">mm</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono block mt-1">ΔL = {elongation_m.toExponential(3)} meters</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <span className="text-[11px] font-bold text-slate-400 block font-mono">Tensile Stress (σ = F/A):</span>
                  <div className="text-xl font-black text-cyan-300 font-mono mt-1">
                    {stress_MPa.toFixed(2)} <span className="text-xs text-slate-400 font-normal">MPa (N/mm²)</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono block mt-1">Area A = {(area_m2 * 1e6).toFixed(3)} mm²</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <span className="text-[11px] font-bold text-slate-400 block font-mono">Longitudinal Strain (ε):</span>
                  <div className="text-xl font-black text-emerald-300 font-mono mt-1">
                    {strain.toExponential(3)}
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono block mt-1">Percent: {(strain * 100).toFixed(4)}%</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <span className="text-[11px] font-bold text-slate-400 block font-mono">Strain Energy Stored (U):</span>
                  <div className="text-xl font-black text-amber-300 font-mono mt-1">
                    {strainEnergy_J.toFixed(4)} <span className="text-xs text-slate-400 font-normal">Joules</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono block mt-1">Work done = 1/2 · F · ΔL</span>
                </div>
              </div>

              {/* Step by Step Working Steps */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs space-y-1 text-slate-300 text-left" dir="ltr">
                <div className="text-purple-400 font-bold border-b border-slate-800 pb-1">Mathematical Working Steps:</div>
                <div>1. Area A = π · (d/2)² = π · ({radius_m.toExponential(2)} m)² = <span className="text-cyan-300">{area_m2.toExponential(4)} m²</span></div>
                <div>2. Stress σ = F / A = {youngForce} N / {area_m2.toExponential(4)} m² = <span className="text-cyan-300">{stress_Pa.toExponential(4)} Pa ({stress_MPa.toFixed(2)} MPa)</span></div>
                <div>3. Elongation ΔL = (F · L₀) / (A · Y) = ({youngForce} × {youngLength}) / ({area_m2.toExponential(4)} × {currentY_Pa.toExponential(2)}) = <span className="text-purple-300 font-bold">{elongation_mm.toFixed(3)} mm</span></div>
              </div>
            </div>
          )}

          {/* TOOL 1.2: STOKES' LAW & TERMINAL VELOCITY */}
          {mechanicsTool === 'stokes' && (
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border-2 border-purple-500/30 space-y-6 shadow-xl">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <h3 className="text-lg font-black text-white font-mono flex items-center gap-2">
                    <Repeat className="w-5 h-5 text-purple-400" />
                    Stokes' Viscosity & Terminal Velocity Calculator
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    Computes steady terminal descent speed v_t, Stokes viscous retarding drag F_d, and verifies laminar flow via Reynolds number Re.
                  </p>
                </div>
                <button
                  onClick={() => toggleArabicCalc('stokes')}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 transition flex items-center gap-1.5"
                >
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>{expandedArabicCalc.has('stokes') ? 'إخفاء الشرح بالعربي' : '💡 الشرح بالعربي'}</span>
                </button>
              </div>

              {expandedArabicCalc.has('stokes') && (
                <div className="p-4 rounded-2xl bg-amber-950/25 border border-amber-500/30 text-right space-y-1.5 animate-in fade-in" dir="rtl">
                  <span className="text-xs font-black text-amber-300">💡 الفكرة وتجربة معمل شبرا:</span>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    عندما تسقط كرة فولاذية في مخبار الجلسرين بالمعمل، تتساوى قوة الجاذبية لأسفل مع مجموع قوة الطفو للأعلى وقوة لزوجة ستوكس Fd = 6πηrv، فتهبط بسرعة ثابتة تسمى السرعة الحدية vt. من قياس المسافة والزمن تحسب vt، ومنها تستنتج لزوجة السائل η = [2 r² (ρs - ρf) g] / (9 vt).
                  </p>
                </div>
              )}

              {/* Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" dir="ltr">
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 block font-mono">Sphere Radius r (mm):</label>
                  <input
                    type="number"
                    step="0.1"
                    value={stokesRadius}
                    onChange={(e) => setStokesRadius(Math.max(0.1, parseFloat(e.target.value) || 0.1))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm font-mono text-cyan-300 font-bold focus:outline-none focus:border-purple-500"
                  />
                  <span className="text-[10px] text-slate-500">Diameter = {(stokesRadius * 2).toFixed(1)} mm</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 block font-mono">Sphere Material (ρ_s):</label>
                  <select
                    value={sphereMaterial}
                    onChange={(e) => setSphereMaterial(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs font-mono text-purple-300 font-bold focus:outline-none focus:border-purple-500"
                  >
                    {Object.entries(SPHERE_DENSITIES).map(([k, v]) => (
                      <option key={k} value={k}>{v.name}</option>
                    ))}
                  </select>
                  <span className="text-[10px] text-slate-500">Density = {rho_s} kg/m³</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 block font-mono">Fluid Preset (ρ_f):</label>
                  <select
                    value={fluidPreset}
                    onChange={(e) => {
                      setFluidPreset(e.target.value);
                      setStokesViscosity(FLUID_PRESETS[e.target.value].defaultEta);
                    }}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs font-mono text-purple-300 font-bold focus:outline-none focus:border-purple-500"
                  >
                    {Object.entries(FLUID_PRESETS).map(([k, v]) => (
                      <option key={k} value={k}>{v.name}</option>
                    ))}
                  </select>
                  <span className="text-[10px] text-slate-500">Fluid Density = {rho_f} kg/m³</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 block font-mono">Dynamic Viscosity η (Pa·s):</label>
                  <input
                    type="number"
                    step="0.01"
                    value={stokesViscosity}
                    onChange={(e) => setStokesViscosity(Math.max(0.0001, parseFloat(e.target.value) || 0.0001))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm font-mono text-cyan-300 font-bold focus:outline-none focus:border-purple-500"
                  />
                  <span className="text-[10px] text-slate-500">{(stokesViscosity * 10).toFixed(2)} Poise = {(stokesViscosity * 1000).toFixed(0)} cP</span>
                </div>
              </div>

              {/* Outputs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" dir="ltr">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-950/60 to-slate-950 border border-purple-500/40">
                  <span className="text-[11px] font-bold text-purple-300 block font-mono">Terminal Velocity (v_t):</span>
                  <div className="text-2xl font-black text-white font-mono mt-1">
                    {terminal_v_cmps.toFixed(2)} <span className="text-xs text-purple-400 font-normal">cm/s</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono block mt-1">v_t = {terminal_v_mps.toFixed(4)} m/s</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <span className="text-[11px] font-bold text-slate-400 block font-mono">Stokes Drag Force (F_d = 6πηrv):</span>
                  <div className="text-xl font-black text-cyan-300 font-mono mt-1">
                    {(dragForce_N * 1e3).toFixed(3)} <span className="text-xs text-slate-400 font-normal">mN (10⁻³ N)</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono block mt-1">F_d = {dragForce_N.toExponential(3)} N</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <span className="text-[11px] font-bold text-slate-400 block font-mono">Reynolds Number (Re):</span>
                  <div className="text-xl font-black text-emerald-300 font-mono mt-1">
                    {reynoldsNumber.toFixed(4)}
                  </div>
                  <span className={`text-[10px] font-mono block mt-1 font-bold ${reynoldsNumber < 1 ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {reynoldsNumber < 1 ? '✓ Laminar flow (Stokes Law Valid)' : '⚠️ Re > 1 (Turbulent boundary)'}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* TOOL 1.3: CAPILLARY RISE & SURFACE TENSION */}
          {mechanicsTool === 'capillary' && (
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border-2 border-purple-500/30 space-y-6 shadow-xl">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <h3 className="text-lg font-black text-white font-mono flex items-center gap-2">
                    <Droplets className="w-5 h-5 text-purple-400" />
                    Jurin's Capillary Rise & Surface Tension Calculator
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    Solves capillary tube rise height h = (2γ cos θ) / (r ρ g) and Young-Laplace internal excess pressure in drops and soap bubbles.
                  </p>
                </div>
                <button
                  onClick={() => toggleArabicCalc('capillary')}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 transition flex items-center gap-1.5"
                >
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>{expandedArabicCalc.has('capillary') ? 'إخفاء الشرح بالعربي' : '💡 الشرح بالعربي'}</span>
                </button>
              </div>

              {expandedArabicCalc.has('capillary') && (
                <div className="p-4 rounded-2xl bg-amber-950/25 border border-amber-500/30 text-right space-y-1.5 animate-in fade-in" dir="rtl">
                  <span className="text-xs font-black text-amber-300">💡 قانون يوران والفقاعات:</span>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    في الأنابيب الشعرية يرتفع السائل إذا كانت زاوية التماس حادة θ &lt; 90° (كالماء) لأن قوى التلاصق مع الجدار أكبر من التماسك، وينخفض إذا كانت منفرجة θ &gt; 90° (كالزئبق). انتبه في المسائل: الضغط الإضافي في فقاعة الصابون (4γ/r) هو ضعف قطرة الماء (2γ/r) لوجود سطحين حرين.
                  </p>
                </div>
              )}

              {/* Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" dir="ltr">
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 block font-mono">Tube Internal Radius r (mm):</label>
                  <input
                    type="number"
                    step="0.05"
                    value={capillaryRadius}
                    onChange={(e) => setCapillaryRadius(Math.max(0.01, parseFloat(e.target.value) || 0.01))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm font-mono text-cyan-300 font-bold focus:outline-none focus:border-purple-500"
                  />
                  <span className="text-[10px] text-slate-500">r = {capR_m.toExponential(2)} meters</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 block font-mono">Liquid System Preset:</label>
                  <select
                    value={liquidType}
                    onChange={(e) => setLiquidType(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs font-mono text-purple-300 font-bold focus:outline-none focus:border-purple-500"
                  >
                    {Object.entries(LIQUID_PRESETS).map(([k, v]) => (
                      <option key={k} value={k}>{v.name}</option>
                    ))}
                  </select>
                  <span className="text-[10px] text-slate-500">γ = {curGamma} N/m, θ = {curThetaDeg}°</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 block font-mono">Liquid Density ρ (kg/m³):</label>
                  <div className="w-full bg-slate-900/60 border border-slate-800 rounded-xl px-3 py-2 text-sm font-mono text-slate-300">
                    {curRho} kg/m³
                  </div>
                  <span className="text-[10px] text-slate-500">Standard liquid density</span>
                </div>
              </div>

              {/* Outputs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" dir="ltr">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-950/60 to-slate-950 border border-purple-500/40">
                  <span className="text-[11px] font-bold text-purple-300 block font-mono">Capillary Column Height (h):</span>
                  <div className="text-2xl font-black text-white font-mono mt-1">
                    {capHeight_mm.toFixed(2)} <span className="text-xs text-purple-400 font-normal">mm</span>
                  </div>
                  <span className={`text-[10px] font-mono block mt-1 font-bold ${capHeight_mm >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {capHeight_mm >= 0 ? '▲ Capillary Rise (Wetting)' : '▼ Capillary Depression (Non-wetting)'}
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <span className="text-[11px] font-bold text-slate-400 block font-mono">Excess Pressure in Drop (2γ/r):</span>
                  <div className="text-xl font-black text-cyan-300 font-mono mt-1">
                    {excessDrop_Pa.toFixed(1)} <span className="text-xs text-slate-400 font-normal">Pa</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono block mt-1">One free liquid surface</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <span className="text-[11px] font-bold text-slate-400 block font-mono">Excess Pressure Soap Bubble (4γ/r):</span>
                  <div className="text-xl font-black text-amber-300 font-mono mt-1">
                    {excessBubble_Pa.toFixed(1)} <span className="text-xs text-slate-400 font-normal">Pa</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono block mt-1">Two free surfaces (2x drop pressure)</span>
                </div>
              </div>
            </div>
          )}

          {/* TOOL 1.4: VENTURI METER & BERNOULLI FLOW */}
          {mechanicsTool === 'venturi' && (
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border-2 border-purple-500/30 space-y-6 shadow-xl">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <h3 className="text-lg font-black text-white font-mono flex items-center gap-2">
                    <Gauge className="w-5 h-5 text-purple-400" />
                    Venturi Meter & Continuity Volumetric Discharge Solver
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    Applies Continuity A1 v1 = A2 v2 and Bernoulli energy conservation to determine pipeline velocities and volumetric discharge Q.
                  </p>
                </div>
                <button
                  onClick={() => toggleArabicCalc('venturi')}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 transition flex items-center gap-1.5"
                >
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>{expandedArabicCalc.has('venturi') ? 'إخفاء الشرح بالعربي' : '💡 الشرح بالعربي'}</span>
                </button>
              </div>

              {expandedArabicCalc.has('venturi') && (
                <div className="p-4 rounded-2xl bg-amber-950/25 border border-amber-500/30 text-right space-y-1.5 animate-in fade-in" dir="rtl">
                  <span className="text-xs font-black text-amber-300">💡 مقياس فنتوري وقاعدة برنولي:</span>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    عندما يضيق مقطع الماسورة من d1 إلى d2 تزداد السرعة طبقا لمعادلة الاستمرارية، وبالتالي ينخفض الضغط الاستاتيكي عند الخناق طبقاً لمعادلة برنولي. فرق الضغط بين المدخل والخناق يقاس بمانومتر زئبقي ΔP = (ρm - ρf) g Δh، ومنه يحسب معدل تدفق المياه بدقة.
                  </p>
                </div>
              )}

              {/* Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" dir="ltr">
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 block font-mono">Inlet Diameter d₁ (cm):</label>
                  <input
                    type="number"
                    step="0.5"
                    value={venturiD1}
                    onChange={(e) => setVenturiD1(Math.max(1, parseFloat(e.target.value) || 1))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm font-mono text-cyan-300 font-bold focus:outline-none focus:border-purple-500"
                  />
                  <span className="text-[10px] text-slate-500">Area A₁ = {(a1_m2 * 1e4).toFixed(1)} cm²</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 block font-mono">Throat Diameter d₂ (cm):</label>
                  <input
                    type="number"
                    step="0.5"
                    value={venturiD2}
                    onChange={(e) => setVenturiD2(Math.max(0.5, parseFloat(e.target.value) || 0.5))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm font-mono text-cyan-300 font-bold focus:outline-none focus:border-purple-500"
                  />
                  <span className="text-[10px] text-slate-500">Area A₂ = {(a2_m2 * 1e4).toFixed(1)} cm²</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 block font-mono">Manometer Reading Δh (cm):</label>
                  <input
                    type="number"
                    step="0.5"
                    value={venturiDeltaH}
                    onChange={(e) => setVenturiDeltaH(Math.max(0, parseFloat(e.target.value) || 0))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm font-mono text-cyan-300 font-bold focus:outline-none focus:border-purple-500"
                  />
                  <span className="text-[10px] text-slate-500">Δh = {h_mano_m} m</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 block font-mono">Manometer Fluid:</label>
                  <select
                    value={manoFluid}
                    onChange={(e) => setManoFluid(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs font-mono text-purple-300 font-bold focus:outline-none focus:border-purple-500"
                  >
                    <option value="mercury">Mercury (Hg, ρ = 13600 kg/m³)</option>
                    <option value="water">Differential Water Head (ρ = 1000)</option>
                  </select>
                  <span className="text-[10px] text-slate-500">ΔP = {deltaP_kPa.toFixed(2)} kPa</span>
                </div>
              </div>

              {/* Outputs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" dir="ltr">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-950/60 to-slate-950 border border-purple-500/40">
                  <span className="text-[11px] font-bold text-purple-300 block font-mono">Volumetric Discharge (Q):</span>
                  <div className="text-2xl font-black text-white font-mono mt-1">
                    {discharge_Lps.toFixed(2)} <span className="text-xs text-purple-400 font-normal">Liters / sec</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono block mt-1">Q = {discharge_m3s.toFixed(4)} m³/s</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <span className="text-[11px] font-bold text-slate-400 block font-mono">Inlet Velocity (v₁):</span>
                  <div className="text-xl font-black text-cyan-300 font-mono mt-1">
                    {venturiV1.toFixed(3)} <span className="text-xs text-slate-400 font-normal">m/s</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono block mt-1">In main pipe section</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <span className="text-[11px] font-bold text-slate-400 block font-mono">Throat Velocity (v₂):</span>
                  <div className="text-xl font-black text-amber-300 font-mono mt-1">
                    {venturiV2.toFixed(3)} <span className="text-xs text-slate-400 font-normal">m/s</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono block mt-1">Velocity ratio: v₂/v₁ = {(venturiV2 / (venturiV1 || 1)).toFixed(2)}x</span>
                </div>
              </div>
            </div>
          )}

        </div>
      )}

      {/* ======================================================================= */}
      {/* BRANCH 2 TOOLS: HEAT, THERMODYNAMICS & WAVE MOTION                     */}
      {/* ======================================================================= */}
      {!isPropertiesMechanics && (
        <div className="space-y-6">
          {/* Tool Selector Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar" dir="ltr">
            {[
              { id: 'fourier', label: '1. Fourier Heat Conduction & Walls', icon: Activity, badge: 'Thermal Ohm\'s Law' },
              { id: 'thermo', label: '2. First Law & Gas Work Calculator', icon: Calculator, badge: 'Thermodynamics' },
              { id: 'pendulum', label: '3. Simple Pendulum & SHM Oscillator', icon: Repeat, badge: 'Harmonic Motion' },
              { id: 'doppler', label: '4. Doppler Effect Frequency Shift', icon: Activity, badge: 'Acoustics' }
            ].map(t => {
              const Icon = t.icon;
              const isActive = heatTool === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setHeatTool(t.id)}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-mono font-black transition-all flex items-center gap-2 shrink-0 border ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-indigo-400/60 shadow-lg shadow-indigo-900/50'
                      : 'bg-slate-900/90 text-slate-300 hover:text-white border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-indigo-400'}`} />
                  <span>{t.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? 'bg-black/30 text-white' : 'bg-slate-800 text-slate-400'}`}>
                    {t.badge}
                  </span>
                </button>
              );
            })}
          </div>

          {/* TOOL 2.1: FOURIER HEAT CONDUCTION */}
          {heatTool === 'fourier' && (
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border-2 border-indigo-500/30 space-y-6 shadow-xl">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <h3 className="text-lg font-black text-white font-mono flex items-center gap-2">
                    <Activity className="w-5 h-5 text-indigo-400" />
                    Fourier Heat Conduction & Composite Wall Thermal Resistance Solver
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    Solves steady-state 1D heat flow H = ΔT / R_total, interface junction temperature Tx, and equivalent thermal conductivity.
                  </p>
                </div>
                <button
                  onClick={() => toggleArabicCalc('fourier')}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 transition flex items-center gap-1.5"
                >
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>{expandedArabicCalc.has('fourier') ? 'إخفاء الشرح بالعربي' : '💡 الشرح بالعربي'}</span>
                </button>
              </div>

              {expandedArabicCalc.has('fourier') && (
                <div className="p-4 rounded-2xl bg-amber-950/25 border border-amber-500/30 text-right space-y-1.5 animate-in fade-in" dir="rtl">
                  <span className="text-xs font-black text-amber-300">💡 قانون فورييه ومقاومة الجدران المركبة:</span>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    انتقال الحرارة بالتوصيل يشبه تماماً قانون أوم الكهربي! المقاومة الحرارية Rth = L / (kA). في الجدران المركبة على التوالي نجمع المقاومات R_total = R1 + R2، ومعدل سريان الحرارة H = ΔT / R_total ثابت عبر كل الطبقات.
                  </p>
                </div>
              )}

              {/* Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" dir="ltr">
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <span className="text-xs font-bold text-indigo-400 block font-mono border-b border-slate-800 pb-1">Layer 1: Inner Wall (Brick / Concrete)</span>
                  <div className="flex items-center gap-2">
                    <div className="flex-1">
                      <label className="text-[10px] text-slate-400 block font-mono">Thickness L₁ (cm):</label>
                      <input
                        type="number"
                        step="1"
                        value={layer1L}
                        onChange={(e) => setLayer1L(Math.max(0.5, parseFloat(e.target.value) || 0.5))}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs font-mono text-cyan-300 font-bold"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="text-[10px] text-slate-400 block font-mono">k₁ (W/m·K):</label>
                      <input
                        type="number"
                        step="0.05"
                        value={layer1K}
                        onChange={(e) => setLayer1K(Math.max(0.001, parseFloat(e.target.value) || 0.001))}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs font-mono text-cyan-300 font-bold"
                      />
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-500">R₁ = {r1_th.toFixed(4)} K/W</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <span className="text-xs font-bold text-purple-400 block font-mono border-b border-slate-800 pb-1">Layer 2: Outer Insulation (Foam / Rockwool)</span>
                  <div className="flex items-center gap-2">
                    <div className="flex-1">
                      <label className="text-[10px] text-slate-400 block font-mono">Thickness L₂ (cm):</label>
                      <input
                        type="number"
                        step="1"
                        value={layer2L}
                        onChange={(e) => setLayer2L(Math.max(0.5, parseFloat(e.target.value) || 0.5))}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs font-mono text-purple-300 font-bold"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="text-[10px] text-slate-400 block font-mono">k₂ (W/m·K):</label>
                      <input
                        type="number"
                        step="0.01"
                        value={layer2K}
                        onChange={(e) => setLayer2K(Math.max(0.001, parseFloat(e.target.value) || 0.001))}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs font-mono text-purple-300 font-bold"
                      />
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-500">R₂ = {r2_th.toFixed(4)} K/W</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
                  <span className="text-xs font-bold text-cyan-400 block font-mono border-b border-slate-800 pb-1">Wall Area & Boundary Temperatures</span>
                  <div className="grid grid-cols-3 gap-1.5">
                    <div>
                      <label className="text-[10px] text-slate-400 block font-mono">Area (m²):</label>
                      <input
                        type="number"
                        value={wallArea}
                        onChange={(e) => setWallArea(Math.max(0.1, parseFloat(e.target.value) || 0.1))}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2 py-1.5 text-xs font-mono text-white font-bold"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-slate-400 block font-mono">T_in (°C):</label>
                      <input
                        type="number"
                        value={tempInside}
                        onChange={(e) => setTempInside(parseFloat(e.target.value) || 0)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2 py-1.5 text-xs font-mono text-rose-300 font-bold"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-slate-400 block font-mono">T_out (°C):</label>
                      <input
                        type="number"
                        value={tempOutside}
                        onChange={(e) => setTempOutside(parseFloat(e.target.value) || 0)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2 py-1.5 text-xs font-mono text-blue-300 font-bold"
                      />
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-500">ΔT = {deltaT_wall.toFixed(1)} °C</span>
                </div>
              </div>

              {/* Outputs */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4" dir="ltr">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-950/60 to-slate-950 border border-indigo-500/40">
                  <span className="text-[11px] font-bold text-indigo-300 block font-mono">Heat Loss Rate (H = dQ/dt):</span>
                  <div className="text-2xl font-black text-white font-mono mt-1">
                    {heatRate_W.toFixed(1)} <span className="text-xs text-indigo-400 font-normal">Watts (J/s)</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono block mt-1">Flux q = {heatFlux_Wpm2.toFixed(1)} W/m²</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <span className="text-[11px] font-bold text-slate-400 block font-mono">Interface Temp (T_x):</span>
                  <div className="text-xl font-black text-amber-300 font-mono mt-1">
                    {interfaceTemp.toFixed(2)} <span className="text-xs text-slate-400 font-normal">°C</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono block mt-1">At junction between layers</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <span className="text-[11px] font-bold text-slate-400 block font-mono">Total Thermal Resistance (R_th):</span>
                  <div className="text-xl font-black text-cyan-300 font-mono mt-1">
                    {r_total_th.toFixed(4)} <span className="text-xs text-slate-400 font-normal">K/W</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono block mt-1">R_total = R₁ + R₂</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <span className="text-[11px] font-bold text-slate-400 block font-mono">Equivalent Conductivity (k_eq):</span>
                  <div className="text-xl font-black text-emerald-300 font-mono mt-1">
                    {k_equivalent.toFixed(4)} <span className="text-xs text-slate-400 font-normal">W/m·K</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono block mt-1">Total thickness = {(layer1L + layer2L)} cm</span>
                </div>
              </div>
            </div>
          )}

          {/* TOOL 2.2: FIRST LAW & THERMODYNAMIC PROCESSES */}
          {heatTool === 'thermo' && (
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border-2 border-indigo-500/30 space-y-6 shadow-xl">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <h3 className="text-lg font-black text-white font-mono flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-indigo-400" />
                    First Law of Thermodynamics & Gas Work Done Solver
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    Solves ΔU = Q - W across Isobaric, Isothermal, Adiabatic (Q = 0), and Isochoric (W = 0) transformations.
                  </p>
                </div>
                <button
                  onClick={() => toggleArabicCalc('thermo')}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 transition flex items-center gap-1.5"
                >
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>{expandedArabicCalc.has('thermo') ? 'إخفاء الشرح بالعربي' : '💡 الشرح بالعربي'}</span>
                </button>
              </div>

              {expandedArabicCalc.has('thermo') && (
                <div className="p-4 rounded-2xl bg-amber-950/25 border border-amber-500/30 text-right space-y-1.5 animate-in fade-in" dir="rtl">
                  <span className="text-xs font-black text-amber-300">💡 القانون الأول والعمليات الغازية:</span>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    ΔU = Q - W. في التمدد الإيزوثرمي (ثبوت T) تكون ΔU = 0 ويكون الشغل W = nRT ln(V2/V1). وفي التمدد الأديباتي (Q = 0) يبذل الغاز شغلاً على حساب طاقته الداخلية فيبرد الغاز وتكون W = -ΔU = (P1 V1 - P2 V2) / (γ - 1).
                  </p>
                </div>
              )}

              {/* Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" dir="ltr">
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 block font-mono">Process Type:</label>
                  <select
                    value={thermoProcess}
                    onChange={(e) => setThermoProcess(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs font-mono text-indigo-300 font-bold focus:outline-none focus:border-indigo-500"
                  >
                    <option value="isothermal">Isothermal (T = const, ΔU = 0)</option>
                    <option value="isobaric">Isobaric (P = const, W = P ΔV)</option>
                    <option value="adiabatic">Adiabatic (Q = 0, P V^γ = const)</option>
                    <option value="isochoric">Isochoric (V = const, W = 0)</option>
                  </select>
                  <span className="text-[10px] text-slate-500">Thermodynamic path</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 block font-mono">Gas Type (Molar Ratio γ):</label>
                  <select
                    value={gasType}
                    onChange={(e) => setGasType(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs font-mono text-cyan-300 font-bold focus:outline-none focus:border-indigo-500"
                  >
                    <option value="diatomic">Diatomic (Air, N₂, O₂: γ = 1.40)</option>
                    <option value="monatomic">Monatomic (He, Ar: γ = 1.67)</option>
                  </select>
                  <span className="text-[10px] text-slate-500">C_v = {(cv_gas).toFixed(2)} J/(mol·K)</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 block font-mono">Moles n & Temp T₁ (°C):</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      step="0.5"
                      value={molesGas}
                      onChange={(e) => setMolesGas(Math.max(0.1, parseFloat(e.target.value) || 0.1))}
                      className="w-1/2 bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs font-mono text-white font-bold"
                    />
                    <input
                      type="number"
                      value={initTemp_C}
                      onChange={(e) => setInitTemp_C(parseFloat(e.target.value) || 0)}
                      className="w-1/2 bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs font-mono text-rose-300 font-bold"
                    />
                  </div>
                  <span className="text-[10px] text-slate-500">T₁ = {t1_K.toFixed(1)} K</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 block font-mono">Volumes V₁ ➔ V₂ (Liters):</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={initVolume_L}
                      onChange={(e) => setInitVolume_L(Math.max(0.1, parseFloat(e.target.value) || 0.1))}
                      className="w-1/2 bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs font-mono text-cyan-300 font-bold"
                    />
                    <input
                      type="number"
                      value={finalVolume_L}
                      onChange={(e) => setFinalVolume_L(Math.max(0.1, parseFloat(e.target.value) || 0.1))}
                      className="w-1/2 bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs font-mono text-emerald-300 font-bold"
                    />
                  </div>
                  <span className="text-[10px] text-slate-500">Expansion ratio = {(finalVolume_L / initVolume_L).toFixed(2)}x</span>
                </div>
              </div>

              {/* Outputs */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4" dir="ltr">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-950/60 to-slate-950 border border-indigo-500/40">
                  <span className="text-[11px] font-bold text-indigo-300 block font-mono">Work Done by Gas (W):</span>
                  <div className="text-2xl font-black text-white font-mono mt-1">
                    {calcW_J.toFixed(1)} <span className="text-xs text-indigo-400 font-normal">Joules</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono block mt-1">{calcW_J >= 0 ? '+W (Work by gas)' : '-W (Work on gas)'}</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <span className="text-[11px] font-bold text-slate-400 block font-mono">Internal Energy Change (ΔU):</span>
                  <div className="text-xl font-black text-cyan-300 font-mono mt-1">
                    {calcDeltaU_J.toFixed(1)} <span className="text-xs text-slate-400 font-normal">Joules</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono block mt-1">ΔU = n C_v ΔT</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <span className="text-[11px] font-bold text-slate-400 block font-mono">Heat Added / Removed (Q):</span>
                  <div className="text-xl font-black text-amber-300 font-mono mt-1">
                    {calcQ_J.toFixed(1)} <span className="text-xs text-slate-400 font-normal">Joules</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono block mt-1">First Law: Q = ΔU + W</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <span className="text-[11px] font-bold text-slate-400 block font-mono">Final Temperature (T₂):</span>
                  <div className="text-xl font-black text-rose-300 font-mono mt-1">
                    {(finalTemp_K - 273.15).toFixed(1)} <span className="text-xs text-slate-400 font-normal">°C</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono block mt-1">T₂ = {finalTemp_K.toFixed(1)} K</span>
                </div>
              </div>
            </div>
          )}

          {/* TOOL 2.3: SIMPLE PENDULUM & SHM */}
          {heatTool === 'pendulum' && (
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border-2 border-indigo-500/30 space-y-6 shadow-xl">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <h3 className="text-lg font-black text-white font-mono flex items-center gap-2">
                    <Repeat className="w-5 h-5 text-indigo-400" />
                    Simple Pendulum & Harmonic Oscillator Solver
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    Solves natural periodic time T = 2π sqrt(L/g), frequency f, angular speed ω, and kinematic maximums v_max and a_max.
                  </p>
                </div>
                <button
                  onClick={() => toggleArabicCalc('pendulum')}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 transition flex items-center gap-1.5"
                >
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>{expandedArabicCalc.has('pendulum') ? 'إخفاء الشرح بالعربي' : '💡 الشرح بالعربي'}</span>
                </button>
              </div>

              {expandedArabicCalc.has('pendulum') && (
                <div className="p-4 rounded-2xl bg-amber-950/25 border border-amber-500/30 text-right space-y-1.5 animate-in fade-in" dir="rtl">
                  <span className="text-xs font-black text-amber-300">💡 البندول في معمل شبرا:</span>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    الزمن الدوري للبندول البسيط يعتمد حصرياً على طول الخيط L وعجلة الجاذبية g، ولا يتأثر إطلاقاً بكتلة الثقل m. في المعمل نرسم العلاقة البيانية بين L و T²، حيث ميل الخط المستقيم هو L/T²، ونستخرج منه عجلة الجاذبية g = 4π² × Slope.
                  </p>
                </div>
              )}

              {/* Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" dir="ltr">
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 block font-mono">Pendulum Length L (m):</label>
                  <input
                    type="number"
                    step="0.05"
                    value={pendulumLength}
                    onChange={(e) => setPendulumLength(Math.max(0.01, parseFloat(e.target.value) || 0.01))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm font-mono text-cyan-300 font-bold focus:outline-none focus:border-indigo-500"
                  />
                  <span className="text-[10px] text-slate-500">{(pendulumLength * 100).toFixed(0)} cm cord length</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 block font-mono">Oscillation Amplitude A (cm):</label>
                  <input
                    type="number"
                    step="0.5"
                    value={pendulumAmp}
                    onChange={(e) => setPendulumAmp(Math.max(0.1, parseFloat(e.target.value) || 0.1))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm font-mono text-purple-300 font-bold focus:outline-none focus:border-indigo-500"
                  />
                  <span className="text-[10px] text-slate-500">Small amplitude (θ &lt; 10°)</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 block font-mono">Bob Mass m (kg):</label>
                  <input
                    type="number"
                    step="0.05"
                    value={pendulumMass}
                    onChange={(e) => setPendulumMass(Math.max(0.01, parseFloat(e.target.value) || 0.01))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm font-mono text-amber-300 font-bold focus:outline-none focus:border-indigo-500"
                  />
                  <span className="text-[10px] text-slate-500">Affects energy, not period T!</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 block font-mono">Gravity Acceleration g (m/s²):</label>
                  <input
                    type="number"
                    step="0.01"
                    value={pendulumGravity}
                    onChange={(e) => setPendulumGravity(Math.max(1, parseFloat(e.target.value) || 1))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm font-mono text-emerald-300 font-bold focus:outline-none focus:border-indigo-500"
                  />
                  <span className="text-[10px] text-slate-500">Default Earth g = 9.80 m/s²</span>
                </div>
              </div>

              {/* Outputs */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4" dir="ltr">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-950/60 to-slate-950 border border-indigo-500/40">
                  <span className="text-[11px] font-bold text-indigo-300 block font-mono">Periodic Time (T):</span>
                  <div className="text-2xl font-black text-white font-mono mt-1">
                    {pendT.toFixed(3)} <span className="text-xs text-indigo-400 font-normal">seconds</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono block mt-1">T = 2π √(L / g)</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <span className="text-[11px] font-bold text-slate-400 block font-mono">Frequency (f = 1/T):</span>
                  <div className="text-xl font-black text-cyan-300 font-mono mt-1">
                    {pendFreq.toFixed(3)} <span className="text-xs text-slate-400 font-normal">Hz</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono block mt-1">Angular ω = {pendOmega.toFixed(2)} rad/s</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <span className="text-[11px] font-bold text-slate-400 block font-mono">Max Speed (v_max = A ω):</span>
                  <div className="text-xl font-black text-emerald-300 font-mono mt-1">
                    {pendVmax.toFixed(3)} <span className="text-xs text-slate-400 font-normal">m/s</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono block mt-1">At center x = 0</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <span className="text-[11px] font-bold text-slate-400 block font-mono">Total Energy (E = 1/2 m ω² A²):</span>
                  <div className="text-xl font-black text-amber-300 font-mono mt-1">
                    {(pendTotalEnergy * 1e3).toFixed(2)} <span className="text-xs text-slate-400 font-normal">mJ</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono block mt-1">Constant mechanical energy</span>
                </div>
              </div>
            </div>
          )}

          {/* TOOL 2.4: DOPPLER EFFECT */}
          {heatTool === 'doppler' && (
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border-2 border-indigo-500/30 space-y-6 shadow-xl">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <h3 className="text-lg font-black text-white font-mono flex items-center gap-2">
                    <Activity className="w-5 h-5 text-indigo-400" />
                    Doppler Effect Frequency Shift Calculator
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    Solves apparent detected frequency f' = f · [(v ± vo) / (v ∓ vs)] for moving sirens, vehicles, and observers.
                  </p>
                </div>
                <button
                  onClick={() => toggleArabicCalc('doppler')}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 transition flex items-center gap-1.5"
                >
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>{expandedArabicCalc.has('doppler') ? 'إخفاء الشرح بالعربي' : '💡 الشرح بالعربي'}</span>
                </button>
              </div>

              {expandedArabicCalc.has('doppler') && (
                <div className="p-4 rounded-2xl bg-amber-950/25 border border-amber-500/30 text-right space-y-1.5 animate-in fade-in" dir="rtl">
                  <span className="text-xs font-black text-amber-300">💡 قاعدة إشارات دوبلر السحرية:</span>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    احفظ القاعدة: 'الاقتراب يزيد التردد، والابتعاد يقلل التردد'. لكي يزيد التردد f' عند اقتراب المصدر، يجب أن يصغر المقام، لذا نستخدم الإشارة السالبة (v - vs). وعندما يقترب الراصد نستخدم الإشارة الموجبة في البسط (v + vo).
                  </p>
                </div>
              )}

              {/* Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" dir="ltr">
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 block font-mono">Source Frequency f (Hz):</label>
                  <input
                    type="number"
                    value={dopplerF}
                    onChange={(e) => setDopplerF(Math.max(1, parseFloat(e.target.value) || 1))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm font-mono text-cyan-300 font-bold focus:outline-none focus:border-indigo-500"
                  />
                  <span className="text-[10px] text-slate-500">True acoustic tone pitch</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 block font-mono">Sound Speed v (m/s):</label>
                  <input
                    type="number"
                    value={soundSpeed}
                    onChange={(e) => setSoundSpeed(Math.max(10, parseFloat(e.target.value) || 10))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm font-mono text-purple-300 font-bold focus:outline-none focus:border-indigo-500"
                  />
                  <span className="text-[10px] text-slate-500">Air at 20°C ≈ 343 m/s</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 block font-mono">Source Motion & Speed:</label>
                  <div className="space-y-1">
                    <select
                      value={sourceDirection}
                      onChange={(e) => setSourceDirection(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2 py-1 text-xs font-mono text-indigo-300 font-bold"
                    >
                      <option value="approach">Approaching Observer (-vs)</option>
                      <option value="recede">Receding from Observer (+vs)</option>
                      <option value="stationary">Stationary Source (vs = 0)</option>
                    </select>
                    <input
                      type="number"
                      value={sourceSpeed}
                      onChange={(e) => setSourceSpeed(Math.max(0, parseFloat(e.target.value) || 0))}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2 py-1 text-xs font-mono text-white font-bold"
                      placeholder="Source Speed (m/s)"
                    />
                  </div>
                  <span className="text-[10px] text-slate-500">{(sourceSpeed * 3.6).toFixed(0)} km/h</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 block font-mono">Observer Motion & Speed:</label>
                  <div className="space-y-1">
                    <select
                      value={observerDirection}
                      onChange={(e) => setObserverDirection(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2 py-1 text-xs font-mono text-indigo-300 font-bold"
                    >
                      <option value="stationary">Stationary Observer (vo = 0)</option>
                      <option value="approach">Approaching Source (+vo)</option>
                      <option value="recede">Receding from Source (-vo)</option>
                    </select>
                    <input
                      type="number"
                      value={observerSpeed}
                      onChange={(e) => setObserverSpeed(Math.max(0, parseFloat(e.target.value) || 0))}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2 py-1 text-xs font-mono text-white font-bold"
                      placeholder="Observer Speed (m/s)"
                    />
                  </div>
                  <span className="text-[10px] text-slate-500">{(observerSpeed * 3.6).toFixed(0)} km/h</span>
                </div>
              </div>

              {/* Outputs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" dir="ltr">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-950/60 to-slate-950 border border-indigo-500/40">
                  <span className="text-[11px] font-bold text-indigo-300 block font-mono">Apparent Frequency (f'):</span>
                  <div className="text-2xl font-black text-white font-mono mt-1">
                    {dopplerFPrime.toFixed(1)} <span className="text-xs text-indigo-400 font-normal">Hz</span>
                  </div>
                  <span className={`text-[10px] font-mono block mt-1 font-bold ${dopplerShift > 0 ? 'text-emerald-400' : (dopplerShift < 0 ? 'text-amber-400' : 'text-slate-400')}`}>
                    {dopplerShift > 0 ? '▲ Higher Pitch (Frequency increased)' : (dopplerShift < 0 ? '▼ Lower Pitch (Frequency decreased)' : 'Unchanged')}
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <span className="text-[11px] font-bold text-slate-400 block font-mono">Absolute Shift (Δf = f' - f):</span>
                  <div className="text-xl font-black text-cyan-300 font-mono mt-1">
                    {dopplerShift > 0 ? `+${dopplerShift.toFixed(1)}` : dopplerShift.toFixed(1)} <span className="text-xs text-slate-400 font-normal">Hz</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono block mt-1">Original emitted = {dopplerF} Hz</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <span className="text-[11px] font-bold text-slate-400 block font-mono">Relative Doppler Shift:</span>
                  <div className="text-xl font-black text-amber-300 font-mono mt-1">
                    {dopplerPercent > 0 ? `+${dopplerPercent.toFixed(2)}` : dopplerPercent.toFixed(2)}%
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono block mt-1">(Δf / f) × 100%</span>
                </div>
              </div>
            </div>
          )}

        </div>
      )}

    </div>
  );
}
