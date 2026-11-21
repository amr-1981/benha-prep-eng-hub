// Printable A4 Cheat Sheets & High-Yield Exam Reviews for Engineering Physics 1 (PHY 001)
// Prepared Exclusively for Faculty of Engineering at Shoubra (FES) - Benha University
// Preparatory Year (Term 1)
// Strictly Separated by Academic Branch:
// 1. Properties of Matter & Mechanics Branch (properties_mechanics)
// 2. Heat, Thermodynamics & Wave Motion Branch (heat_waves)

export const PHYSICS_CHEAT_SHEETS_CATEGORIES = [
  { id: "all", label: "جميع شيتات الفيزياء 1 (5 شيتات A4)", icon: "FileText" },
  { id: "phys-elasticity", label: "شيت المرونة والإجهاد ومعامل يونج (A4)", icon: "Layers" },
  { id: "phys-fluids", label: "شيت التوتر السطحي ولزوجة ستوكس (A4)", icon: "Droplets" },
  { id: "phys-hydro", label: "شيت ديناميكا الموائع ومعادلة برنولي (A4)", icon: "Zap" },
  { id: "phys-heat", label: "شيت التمدد والتوصيل والديناميكا الحرارية (A4)", icon: "Flame" },
  { id: "phys-waves", label: "شيت الحركة التوافقية وموجات الصوت ودوبلر (A4)", icon: "Activity" }
];

export const PHYSICS_CHEAT_SHEETS = [
  // =========================================================================
  // BRANCH 1: PROPERTIES OF MATTER & FLUID MECHANICS (SHEETS 1 - 3)
  // =========================================================================
  {
    id: "sheet-phys-elasticity",
    category: "phys-elasticity",
    division: "properties_mechanics",
    professor: "قسم الرياضيات والفيزياء الهندسية (EMP)",
    title: "ملخص قوانين المرونة والإجهاد والانفعال ومعاملات المرونة (A4)",
    titleEn: "Mechanical Elasticity, Hooke's Law & Elastic Moduli (A4 Matrix)",
    subtitleEn: "Tensile stress-strain relations, Young's modulus, Bulk modulus, Poisson's ratio, and strain energy",
    subtitle: "ورقة قوانين مكثفة لمعاملات المرونة ونسبة بواسون وطاقة الانفعال المخزونة - هندسة شبرا",
    paperSize: "A4",
    pagesCount: 1,
    color: "border-purple-500",
    sections: [
      {
        title: "1. Fundamental Stress, Strain & Moduli Formulas",
        type: "table",
        headers: ["Quantity / Modulus", "Mathematical Formula", "SI Unit & Dimensions", "Engineering Notes"],
        rows: [
          ["Tensile Stress (σ)", "σ = F / A = 4F / (π d²)", "N/m² (Pa) [M L⁻¹ T⁻²]", "Normal load divided by initial cross-sectional area"],
          ["Tensile Strain (ε)", "ε = ΔL / L₀", "Dimensionless [M⁰ L⁰ T⁰]", "Fractional longitudinal elongation"],
          ["Young's Modulus (Y)", "Y = σ / ε = (F L₀) / (A ΔL)", "N/m² (Pa) [M L⁻¹ T⁻²]", "Slope of linear elastic region; for steel Y ≈ 200 GPa"],
          ["Bulk Modulus (B)", "B = -ΔP / (ΔV / V₀)", "N/m² (Pa) [M L⁻¹ T⁻²]", "Volume stiffness; Compressibility k = 1 / B"],
          ["Shear Modulus (n)", "n = (F / A) / θ", "N/m² (Pa) [M L⁻¹ T⁻²]", "Rigidity modulus under tangential shear stress"],
          ["Poisson's Ratio (ν)", "ν = - (Δd / d₀) / (ΔL / L₀)", "Dimensionless", "Theoretical bounds: -1 ≤ ν ≤ 0.5 (metals ≈ 0.3)"]
        ]
      },
      {
        title: "2. Energy & Structural Deformation Equations",
        type: "reactions",
        items: [
          { name: "Wire Elongation", eq: "ΔL = (F · L₀) / (A · Y) = (4 · F · L₀) / (π · d² · Y)" },
          { name: "Total Elastic Strain Energy", eq: "U = 1/2 · F · ΔL = 1/2 · (Y · A · (ΔL)²) / L₀" },
          { name: "Strain Energy Density (per volume)", eq: "u = U / V = 1/2 · σ · ε = σ² / (2 · Y) = 1/2 · Y · ε²" },
          { name: "Inter-Moduli Relationship (Isotropic)", eq: "Y = 3 · B · (1 - 2ν) = 2 · n · (1 + ν)" }
        ]
      },
      {
        title: "3. Shoubra Exam Hotspots & Traps",
        type: "table",
        headers: ["Exam Scenario", "Quick Formula / Action", "Critical Pitfall to Avoid"],
        rows: [
          ["Wire diameter halved under same load", "ΔL increases 4x (ΔL ∝ 1/d²)", "Do not forget to square the diameter in area A = π r² = π d²/4"],
          ["Elongation work from F-ΔL graph", "Area under triangular curve = 1/2 F ΔL", "Do not multiply F × ΔL directly (must divide by 2)"],
          ["Volume change under water pressure", "ΔV = - (V₀ · ΔP) / B", "Depth h gives pressure ΔP = ρ g h"]
        ]
      }
    ]
  },

  {
    id: "sheet-phys-fluids",
    category: "phys-fluids",
    division: "properties_mechanics",
    professor: "قسم الرياضيات والفيزياء الهندسية (EMP)",
    title: "ملخص قوانين التوتر السطحي والخاصية الشعرية ولزوجة ستوكس (A4)",
    titleEn: "Surface Tension, Jurin's Capillarity & Stokes' Viscosity (A4 Matrix)",
    subtitleEn: "Young-Laplace excess pressure, capillary rise, Newton's viscosity law, Stokes drag, and terminal velocity",
    subtitle: "ورقة قوانين مكثفة للضغط الإضافي وقانون يوران وقانون ستوكس والسرعة الحدية وسريان بوازيه",
    paperSize: "A4",
    pagesCount: 1,
    color: "border-violet-500",
    sections: [
      {
        title: "1. Surface Tension & Capillary Action Formulas",
        type: "table",
        headers: ["Phenomenon", "Governing Formula", "Variables & Constants", "Standard Conditions"],
        rows: [
          ["Surface Tension (γ)", "γ = F / L = ΔW / ΔA", "F = force, L = line length", "SI Units: N/m or J/m² [M T⁻²]"],
          ["Excess Pressure: Drop", "ΔP = 2γ / r", "One free liquid surface", "Raindrop, water droplet, bubble in water"],
          ["Excess Pressure: Soap Bubble", "ΔP = 4γ / r", "Two free surfaces (inner + outer)", "Hollow soap bubble suspended in air"],
          ["Jurin's Capillary Rise", "h = (2γ cos θ) / (r ρ g)", "r = tube radius, θ = contact angle", "For water/clean glass: θ ≈ 0° (cos θ = 1)"],
          ["Work Done in Blowing Bubble", "W = γ · ΔA = γ · [8π(r₂² - r₁²)]", "Two spherical surfaces", "Factor of 2 accounted for (8π instead of 4π)"]
        ]
      },
      {
        title: "2. Viscosity, Stokes' Drag & Pipe Flow Formulas",
        type: "reactions",
        items: [
          { name: "Newton's Viscosity Law", eq: "τ = F / A = η · (dv/dy)  ==>  [η] = M L⁻¹ T⁻¹ (Pa·s = 10 Poise)" },
          { name: "Stokes' Viscous Retarding Drag", eq: "F_d = 6 · π · η · r · v  (For smooth spherical particle in laminar flow)" },
          { name: "Terminal Velocity (Descent)", eq: "v_t = [2 · r² · (ρ_s - ρ_f) · g] / (9 · η)  (When F_gravity = F_buoyant + F_drag)" },
          { name: "Poiseuille Volumetric Discharge", eq: "Q = (π · r⁴ · ΔP) / (8 · η · L) = (π · d⁴ · ΔP) / (128 · η · L)" }
        ]
      },
      {
        title: "3. Lab & Past Exam Calculation Rules",
        type: "table",
        headers: ["Experimental Target", "Laboratory Formula", "Key Unit Conversion"],
        rows: [
          ["Viscosity of Glycerin (η)", "η = [2 r² (ρ_steel - ρ_glyc) g] / (9 v_t)", "Convert radius from mm to m (×10⁻³); v_t in m/s"],
          ["Surface Tension by Capillary Rise", "γ = (r · h · ρ · g) / (2 · cos θ)", "Capillary tube diameter must be halved to get r!"],
          ["Poiseuille Flow Sensitivity", "Q₂ / Q₁ = (r₂ / r₁)⁴", "If radius decreases by 10%, flow drops to (0.9)⁴ ≈ 65.6%"]
        ]
      }
    ]
  },

  {
    id: "sheet-phys-hydro",
    category: "phys-hydro",
    division: "properties_mechanics",
    professor: "قسم الرياضيات والفيزياء الهندسية (EMP)",
    title: "ملخص قوانين ديناميكا الموائع ومعادلتي الاستمرارية وبرنولي (A4)",
    titleEn: "Fluid Dynamics: Continuity, Bernoulli & Flowmeters (A4 Matrix)",
    subtitleEn: "Incompressible flow, conservation of mass and mechanical energy, Venturi tubes, and Torricelli efflux",
    subtitle: "ورقة قوانين مكثفة لمعدل التصرف وسرعة السريان ومقياس فنتوري وقانون تورشيللي",
    paperSize: "A4",
    pagesCount: 1,
    color: "border-indigo-500",
    sections: [
      {
        title: "1. Continuity & Conservation of Mass Equations",
        type: "table",
        headers: ["Concept / Law", "Equation", "Physical Meaning", "Unit & Constraints"],
        rows: [
          ["Volumetric Flow Rate (Q)", "Q = A · v = V / t", "Volume passing section per second", "m³/s; constant for steady incompressible flow"],
          ["Mass Flow Rate (ṁ)", "ṁ = ρ · A · v = ρ · Q", "Mass passing section per second", "kg/s; constant for all steady flows"],
          ["Continuity Equation", "A₁ v₁ = A₂ v₂", "Velocity inversely proportional to area", "v₂ = v₁ · (d₁ / d₂)²"]
        ]
      },
      {
        title: "2. Bernoulli's Equation & Hydraulic Applications",
        type: "reactions",
        items: [
          { name: "General Bernoulli Equation", eq: "P₁ + 1/2 · ρ · v₁² + ρ · g · y₁ = P₂ + 1/2 · ρ · v₂² + ρ · g · y₂ = Constant" },
          { name: "Horizontal Pipe (y₁ = y₂)", eq: "P₁ - P₂ = 1/2 · ρ · (v₂² - v₁²) = 1/2 · ρ · v₁² · [(A₁/A₂)² - 1]" },
          { name: "Venturi Meter Throat Velocity", eq: "v₁ = sqrt[ (2 · g · Δh) / ((A₁/A₂)² - 1) ]  where Q = A₁ · v₁" },
          { name: "Torricelli Efflux Speed", eq: "v = sqrt(2 · g · h)  and discharge Q = A_orifice · sqrt(2 · g · h)" },
          { name: "Pitot Tube Stagnation Speed", eq: "v = sqrt[ 2 · (P_stagnation - P_static) / ρ ] = sqrt(2 · g · Δh)" }
        ]
      },
      {
        title: "3. High-Yield Exam Problem Templates",
        type: "table",
        headers: ["Problem Type", "Direct Working Steps", "Watch Out"],
        rows: [
          ["Horizontal Venturi pipe with Manometer", "ΔP = (ρ_mercury - ρ_water) g h_mano; equate to 1/2 ρ (v₂² - v₁²)", "Check liquid in manometer (usually Hg, density 13600 kg/m³)"],
          ["Tank draining with hole at depth h", "v = sqrt(2 g h); time to empty: t = (2 A_tank / A_hole) sqrt(h/2g)", "Applies only when tank surface area >> hole area"],
          ["Dynamic lift on aircraft wing", "F_lift = 1/2 · ρ_air · A_wing · (v_top² - v_bottom²)", "v_top is faster than v_bottom, giving lower pressure on top"]
        ]
      }
    ]
  },

  // =========================================================================
  // BRANCH 2: HEAT, THERMODYNAMICS & WAVE MOTION (SHEETS 4 - 5)
  // =========================================================================
  {
    id: "sheet-phys-heat",
    category: "phys-heat",
    division: "heat_waves",
    professor: "قسم الرياضيات والفيزياء الهندسية (EMP)",
    title: "ملخص قوانين التمدد والتوصيل الحراري والديناميكا الحرارية (A4)",
    titleEn: "Thermal Physics: Expansion, Fourier Conduction & 1st Law (A4 Matrix)",
    subtitleEn: "Thermal stress, heat exchange, Fourier's law, composite walls, and thermodynamic gas work",
    subtitle: "ورقة قوانين مكثفة للإجهاد الحراري والتوصيل فورييه والعمليات الغازية الإيزوبارية والأديباتية",
    paperSize: "A4",
    pagesCount: 1,
    color: "border-purple-600",
    sections: [
      {
        title: "1. Thermal Expansion & Calorimetry Matrix",
        type: "table",
        headers: ["Phenomenon", "Formula", "Coefficients / Constants", "Units & Remarks"],
        rows: [
          ["Linear Expansion", "ΔL = α · L₀ · ΔT", "α = coefficient of linear expansion", "K⁻¹ or (°C)⁻¹; L = L₀(1 + α ΔT)"],
          ["Volume Expansion", "ΔV = γ · V₀ · ΔT ≈ 3α · V₀ · ΔT", "γ = 3α for isotropic solids", "Liquids have γ >> solids"],
          ["Thermal Stress in Rod", "σ = F / A = Y · α · ΔT", "Y = Young's modulus, α = exp. coeff.", "Independent of rod length L₀!"],
          ["Sensible Heat Transfer", "Q = m · c · ΔT", "c = specific heat capacity", "Water c ≈ 4186 J/(kg·K) = 1 cal/(g·°C)"],
          ["Latent Phase Change Heat", "Q = m · L_f  or  m · L_v", "L_f = fusion, L_v = vaporization", "Ice fusion L_f = 3.34 × 10⁵ J/kg; temp stays constant"]
        ]
      },
      {
        title: "2. Fourier's Conduction & Thermal Resistance",
        type: "reactions",
        items: [
          { name: "Fourier's Law (1D Steady State)", eq: "H = dQ/dt = k · A · (T_H - T_C) / L  [Watts = J/s]" },
          { name: "Thermal Resistance (R_th)", eq: "R_th = L / (k · A)  ==>  H = ΔT / R_th  (Thermal Ohm's Law: I = V / R)" },
          { name: "Series Composite Wall Total Resistance", eq: "R_total = R₁ + R₂ + ... + R_n = (L₁ / k₁ A) + (L₂ / k₂ A) + ..." },
          { name: "Interface Temperature (2 Layers)", eq: "T_interface = [ (k₁/L₁) T₁ + (k₂/L₂) T₂ ] / [ (k₁/L₁) + (k₂/L₂) ]" }
        ]
      },
      {
        title: "3. First Law of Thermodynamics & Gas Processes",
        type: "table",
        headers: ["Process Type", "Work Done (W = ∫ P dV)", "Heat Added (Q)", "Internal Energy Change (ΔU = Q - W)"],
        rows: [
          ["Isobaric (P = const)", "W = P · (V₂ - V₁) = n R ΔT", "Q = n · C_p · ΔT", "ΔU = n · C_v · ΔT = Q - W"],
          ["Isochoric (V = const)", "W = 0 (since dV = 0)", "Q = n · C_v · ΔT", "ΔU = Q = n · C_v · ΔT"],
          ["Isothermal (T = const)", "W = n R T · ln(V₂ / V₁) = n R T · ln(P₁ / P₂)", "Q = W", "ΔU = 0 (Ideal gas U depends only on T)"],
          ["Adiabatic (Q = 0)", "W = (P₁ V₁ - P₂ V₂) / (γ - 1) = -ΔU", "Q = 0", "ΔU = -W = n · C_v · (T₂ - T₁)"]
        ]
      }
    ]
  },

  {
    id: "sheet-phys-waves",
    category: "phys-waves",
    division: "heat_waves",
    professor: "قسم الرياضيات والفيزياء الهندسية (EMP)",
    title: "ملخص قوانين الحركة التوافقية وموجات الصوت وظاهرة دوبلر (A4)",
    titleEn: "Acoustics & Waves: SHM, Sound Levels & Doppler Effect (A4 Matrix)",
    subtitleEn: "Simple pendulum, mass-spring energy, travelling waves, decibel scale, and Doppler frequency shifts",
    subtitle: "ورقة قوانين مكثفة للبندول البسيط وسرعة الموجات وشدة الصوت بالديسيبل وظاهرة دوبلر",
    paperSize: "A4",
    pagesCount: 1,
    color: "border-pink-500",
    sections: [
      {
        title: "1. Simple Harmonic Motion (SHM) Equations",
        type: "table",
        headers: ["Kinematic Quantity", "Equation of Motion", "Maximum Value", "Position of Maximum"],
        rows: [
          ["Displacement (x)", "x(t) = A · cos(ω t + φ)", "x_max = A (Amplitude)", "Extreme positions (x = ±A)"],
          ["Velocity (v)", "v(t) = -A ω · sin(ω t + φ) = ±ω sqrt(A² - x²)", "v_max = A · ω", "Equilibrium position (x = 0)"],
          ["Acceleration (a)", "a(t) = -A ω² · cos(ω t + φ) = -ω² · x", "a_max = A · ω²", "Extreme positions (x = ±A)"],
          ["Simple Pendulum Period", "T = 2π · sqrt(L / g)  ==>  g = (4π² L) / T²", "ω = sqrt(g / L)", "Independent of bob mass m"],
          ["Mass-Spring Period", "T = 2π · sqrt(m / k)  ==>  ω = sqrt(k / m)", "k = spring constant (N/m)", "Total energy E = 1/2 k A² = constant"]
        ]
      },
      {
        title: "2. Mechanical Waves & Decibel Acoustics Formulas",
        type: "reactions",
        items: [
          { name: "Wave Fundamental Speed", eq: "v = f · λ = ω / k  where k = 2π / λ (angular wave number)" },
          { name: "Transverse Wave on Stretched String", eq: "v = sqrt(T_tension / μ)  where μ = m / L (linear mass density in kg/m)" },
          { name: "Speed of Sound in Ideal Gas", eq: "v = sqrt(γ · R · T / M)  (Directly proportional to sqrt(Absolute Temperature K))" },
          { name: "Sound Intensity & Decibels", eq: "I = Power / (4π r²),  β = 10 · log₁₀(I / I₀) [dB]  where I₀ = 10⁻¹² W/m²" },
          { name: "Open Pipe Resonant Harmonics", eq: "f_n = n · (v / 2L)  (n = 1, 2, 3...)  All harmonics present" }
        ]
      },
      {
        title: "3. Doppler Effect Complete Master Formula & Signs",
        type: "table",
        headers: ["Relative Motion Case", "Apparent Frequency Formula (f')", "Frequency Shift Effect"],
        rows: [
          ["Source moving toward stationary Observer", "f' = f · [ v / (v - v_s) ]", "f' > f (Higher pitch / tone as siren approaches)"],
          ["Source moving away from stationary Observer", "f' = f · [ v / (v + v_s) ]", "f' < f (Lower pitch / tone as siren recedes)"],
          ["Observer moving toward stationary Source", "f' = f · [ (v + v_o) / v ]", "f' > f (Observer intercepts wave fronts faster)"],
          ["Observer moving away from stationary Source", "f' = f · [ (v - v_o) / v ]", "f' < f (Observer intercepts wave fronts slower)"],
          ["General (Both moving toward each other)", "f' = f · [ (v + v_o) / (v - v_s) ]", "Upper signs (+) top / (-) bottom for approaching"]
        ]
      }
    ]
  }
];
