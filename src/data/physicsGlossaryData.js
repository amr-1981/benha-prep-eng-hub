// Comprehensive Glossary, Laws, Formulas & Flashcards Bank for Engineering Physics 1 (PHY 001)
// Tailored Exclusively for Faculty of Engineering at Shoubra (FES) - Benha University (Term 1)
// Strictly Divided into Two Distinct Academic Branches:
// 1. Properties of Matter & Mechanics Branch (properties_mechanics)
// 2. Heat, Thermodynamics & Wave Motion Branch (heat_waves)

export const PHYSICS_GLOSSARY_MODULES = [
  { id: 'all', label: 'جميع وحدات الفيزياء 1 (10 وحدات)', icon: 'Sparkles', color: 'text-purple-400' },
  // Division 1: Properties of Matter & Mechanics
  { id: 'dimensions', label: '١. التحليل البعدي والوحدات', icon: 'Compass', color: 'text-purple-400' },
  { id: 'elasticity', label: '٢. مرونة المواد ومعامل يونج', icon: 'Layers', color: 'text-violet-400' },
  { id: 'surface_tension', label: '٣. التوتر السطحي والأنابيب الشعرية', icon: 'Droplets', color: 'text-indigo-400' },
  { id: 'viscosity', label: '٤. لزوجة الموائع وقانون ستوكس', icon: 'Repeat', color: 'text-purple-400' },
  { id: 'hydrodynamics', label: '٥. ديناميكا الموائع ومعادلة برنولي', icon: 'Zap', color: 'text-blue-400' },
  // Division 2: Heat, Thermodynamics & Waves
  { id: 'thermal_expansion', label: '٦. التمدد الحراري والمسعر', icon: 'Flame', color: 'text-indigo-400' },
  { id: 'heat_conduction', label: '٧. التوصيل الحراري وقانون فورييه', icon: 'Activity', color: 'text-violet-400' },
  { id: 'thermodynamics', label: '٨. القانون الأول والديناميكا الحرارية', icon: 'Calculator', color: 'text-purple-400' },
  { id: 'shm', label: '٩. الحركة التوافقية البسيطة والبندول', icon: 'Repeat', color: 'text-pink-400' },
  { id: 'acoustics', label: '١٠. الموجات الصوتية وظاهرة دوبلر', icon: 'Activity', color: 'text-cyan-400' }
];

export const PHYSICS_GLOSSARY_TYPES = [
  { id: 'all', label: 'الكل (قوانين + مفاهيم + تعليلات هندسية)' },
  { id: 'definition', label: '📖 مفاهيم ومصطلحات فيزيائية (Physical Definitions)' },
  { id: 'law', label: '📐 قوانين ومعادلات رياضية (Formulas & Laws)' },
  { id: 'application', label: '⚙️ تطبيقات هندسية وتجارب معملية (Engineering Applications)' }
];

export const PHYSICS_GLOSSARY_ITEMS = [
  // =========================================================================
  // DIVISION 1: PROPERTIES OF MATTER & MECHANICS (MODULES 1 - 5)
  // =========================================================================

  // --- MODULE 1: DIMENSIONAL ANALYSIS ---
  {
    id: 'phys-term-homogeneity',
    module: 'dimensions',
    division: 'properties_mechanics',
    type: 'definition',
    termEn: 'Principle of Dimensional Homogeneity',
    definitionEn: 'The physical axiom stating that an equation representing a physical law must have identical fundamental dimensions [M, L, T, θ] on both sides and across all additive terms.',
    formula: '[\\text{LHS}] = [\\text{RHS}], \\quad [A + B] \\implies [A] = [B]',
    unit: 'Dimensionless criterion',
    example: 'In s = v0 t + 1/2 a t^2, each term has the dimension of length [L].',
    termAr: 'مبدأ تجانس الأبعاد الفيزيائية',
    definitionAr: 'القاعدة الأساسية التي تنص على أن أي علاقة رياضية صحيحة فيزيائياً يجب أن تتساوى أبعاد أطرافها [M, L, T]، وأن أي حدين مجموعين أو مطروحين يجب أن يحملا نفس الأبعاد تماماً.',
    examTip: 'سؤال متكرر: هل المعادلة المتجانسة بعدياً صحيحة بالضرورة؟ الإجابة: لا، لأن التحليل البعدي لا يستطيع اكتشاف الثوابت العددية المجردة مثل 1/2 أو 2π.',
    keywords: ['homogeneity', 'dimensions', 'rayleigh', 'units', 'consistency']
  },
  {
    id: 'phys-term-viscosity-dim',
    module: 'dimensions',
    division: 'properties_mechanics',
    type: 'law',
    termEn: 'Dimension of Dynamic Viscosity [η]',
    definitionEn: 'Derived dimension of dynamic viscosity obtained from Newton\'s law of viscosity τ = η (dv/dy) or Stokes\' drag law.',
    formula: '[\\eta] = \\frac{[\\text{Force}]}{[\\text{Area}] \\cdot [\\text{Velocity Gradient}]} = \\frac{M L T^{-2}}{L^2 \\cdot T^{-1}} = M L^{-1} T^{-1}',
    unit: 'kg·m^-1·s^-1 or Pa·s (SI), Poise (CGS)',
    example: 'Water at 20°C has η ≈ 1.0 × 10^-3 Pa·s = 1.0 cP.',
    termAr: 'أبعاد ووحدة معامل اللزوجة الديناميكية',
    definitionAr: 'البعد الفيزيائي لمقاومة السائل للسريان هو [M L^-1 T^-1]. وحدته في النظام الدولي هي باسكال في ثانية (Pa·s) أو كيلوجرام/(متر·ثانية).',
    examTip: 'مهم جداً: 1 Pa·s = 10 Poise = 1000 Centipoise (cP). للتحويل من Poise إلى SI اقسم على 10.',
    keywords: ['viscosity dimension', 'poise', 'pascal second', 'newton']
  },

  // --- MODULE 2: ELASTICITY & MODULI ---
  {
    id: 'phys-term-youngs-modulus',
    module: 'elasticity',
    division: 'properties_mechanics',
    type: 'law',
    termEn: 'Young\'s Modulus of Elasticity (Y)',
    definitionEn: 'The ratio of longitudinal tensile (or compressive) stress to longitudinal strain within the proportional elastic limit of a material.',
    formula: 'Y = \\frac{\\sigma}{\\varepsilon} = \\frac{F / A}{\\Delta L / L_0} = \\frac{4 F L_0}{\\pi d^2 \\Delta L}',
    unit: 'N/m² = Pascal (Pa)',
    example: 'Structural steel has Y ≈ 200 GPa (2.0 × 10^11 N/m²).',
    termAr: 'معامل يونج لمرونة الشد الطولي (Y)',
    definitionAr: 'النسبة بين الإجهاد الطولي (القوة المؤثرة عمودياً على وحدة المساحة) إلى الانفعال النسبي (الاستطالة مقسومة على الطول الأصلي) في حدود المرونة. يقيس جساءة المادة وصلابتها ضد التمدد.',
    examTip: 'مسألة المعمل: إذا تضاعف قطر السلك مع ثبات الحمل والطول الأصلي، فإن الاستطالة ΔL تقل إلى الربع (1/4) لأن ΔL تتناسب عكسياً مع d².',
    keywords: ['young modulus', 'stress', 'strain', 'elasticity', 'hooke']
  },
  {
    id: 'phys-term-bulk-modulus',
    module: 'elasticity',
    division: 'properties_mechanics',
    type: 'law',
    termEn: 'Bulk Modulus of Elasticity (B)',
    definitionEn: 'The measure of a substance\'s resistance to uniform volume compression under hydrostatic pressure.',
    formula: 'B = -\\frac{\\Delta P}{\\Delta V / V_0} \\quad \\text{and Compressibility } k = \\frac{1}{B}',
    unit: 'N/m² = Pascal (Pa)',
    example: 'Water has B ≈ 2.2 × 10^9 Pa; steel has B ≈ 1.6 × 10^11 Pa.',
    termAr: 'المعامل الحجمي للمرونة وقابلية الانضغاط (B)',
    definitionAr: 'النسبة بين التغير في الضغط الهيدروستاتيكي المؤثر على الجسم إلى الانفعال الحجمي الناتج (النقص النسبي في الحجم). الإشارة السالبة لضمان بقاء B موجباً.',
    examTip: 'سؤال نظري: السوائل والأجسام الصلبة لها معامل حجمي B كبير جداً (غير قابلة للانضغاط عملياً)، بينما الغازات لها معامل حجمي منخفض جداً.',
    keywords: ['bulk modulus', 'compressibility', 'volume strain', 'hydrostatic']
  },
  {
    id: 'phys-term-poisson-ratio',
    module: 'elasticity',
    division: 'properties_mechanics',
    type: 'definition',
    termEn: 'Poisson\'s Ratio (ν)',
    definitionEn: 'The absolute ratio of transverse (lateral) contraction strain to axial (longitudinal) tensile strain under uniaxial loading.',
    formula: '\\nu = -\\frac{\\varepsilon_{\\text{lateral}}}{\\varepsilon_{\\text{axial}}} = -\\frac{\\Delta d / d_0}{\\Delta L / L_0}',
    unit: 'Dimensionless (typically 0.25 to 0.35 for metals)',
    example: 'For aluminum ν ≈ 0.33; for cork ν ≈ 0 (does not expand laterally when compressed).',
    termAr: 'نسبة بواسون للتشكل الجانبي (ν)',
    definitionAr: 'النسبة بين الانفعال العرضي (الانكماش في القطر) إلى الانفعال الطولي (الاستطالة في الطول). تصف استجابة أبعاد المادة في الاتجاه العمودي على اتجاه الشد.',
    examTip: 'الحدود النظرية لنسبة بواسون للأجسام المتجانسة: تتراوح قيمتها نظرياً بين -1 و 0.5. والقيمة 0.5 تعني مادة غير قابلة للانضغاط تماماً مع ثبات الحجم.',
    keywords: ['poisson ratio', 'lateral strain', 'longitudinal', 'metals']
  },

  // --- MODULE 3: SURFACE TENSION ---
  {
    id: 'phys-term-surface-tension',
    module: 'surface_tension',
    division: 'properties_mechanics',
    type: 'definition',
    termEn: 'Surface Tension (γ or T)',
    definitionEn: 'The cohesive force per unit length acting tangentially across any line on a liquid surface, or the work required to increase surface area by one unit.',
    formula: '\\gamma = \\frac{F}{L} = \\frac{\\Delta W}{\\Delta A}',
    unit: 'N/m or J/m²',
    example: 'Pure water at 20°C has γ ≈ 0.073 N/m; Mercury has γ ≈ 0.485 N/m.',
    termAr: 'التوتر السطحي للسوائل (γ)',
    definitionAr: 'القوة المؤثرة عمودياً على وحدة الأطوال المماسية لسطح السائل، والناشئة عن قوى التماسك الجزيئي غير المتوازنة التي تجعل السطح الحر يسلك كغشاء مرن مشدود يقلص مساحته لأقل قدر ممكن.',
    examTip: 'سؤال علل: تقل قيمة التوتر السطحي للسائل بارتفاع درجة الحرارة؟ لأن التسخين يضعف قوى التماسك بين جزيئات السائل وتتلاشى تماماً عند درجة الحرارة الحرجة.',
    keywords: ['surface tension', 'cohesion', 'adhesion', 'surface energy']
  },
  {
    id: 'phys-term-excess-pressure',
    module: 'surface_tension',
    division: 'properties_mechanics',
    type: 'law',
    termEn: 'Excess Pressure in Droplets & Soap Bubbles',
    definitionEn: 'The Young-Laplace formula giving the net pressure difference between the interior and exterior of a spherical liquid drop or hollow soap bubble.',
    formula: '\\Delta P_{\\text{liquid drop}} = \\frac{2 \\gamma}{r}, \\quad \\Delta P_{\\text{soap bubble}} = \\frac{4 \\gamma}{r}',
    unit: 'N/m² = Pascal (Pa)',
    example: 'A soap bubble of radius 1 cm with γ = 0.03 N/m has ΔP = 4(0.03)/0.01 = 12 Pa.',
    termAr: 'الضغط الإضافي داخل القطرات وفقاعات الصابون',
    definitionAr: 'فرق الضغط بين داخل وخارج الغشاء الكروي. القطرة لها سطح حر واحد (2γ/r)، بينما فقاعة الصابون في الهواء لها سطحان حران داخلي وخارجي فيتضاعف الضغط إلى (4γ/r).',
    examTip: 'سؤال فخ متكرر: فقاعة هواء داخل حوض ماء تأخذ قانون القطرة (2γ/r) لأن لها سطح تلامس واحد فقط مع الماء وليس سطحين!',
    keywords: ['excess pressure', 'young laplace', 'soap bubble', 'drop']
  },
  {
    id: 'phys-term-jurin-law',
    module: 'surface_tension',
    division: 'properties_mechanics',
    type: 'application',
    termEn: 'Jurin\'s Law of Capillary Rise',
    definitionEn: 'The equilibrium formula determining the height to which a liquid climbs in a narrow capillary tube due to surface tension and contact angle.',
    formula: 'h = \\frac{2 \\gamma \\cos \\theta}{r \\rho g} \\implies \\gamma = \\frac{r h \\rho g}{2 \\cos \\theta}',
    unit: 'Height in meters (m)',
    example: 'Water in glass has θ ≈ 0° (cos θ = 1), hence h = 2γ / (r ρ g).',
    termAr: 'قانون يوران للارتفاع في الأنابيب الشعرية',
    definitionAr: 'المعادلة المعملية لحساب ارتفاع السائل في أنبوبة شعرية بدلالة معامل التوتر السطحي γ ونصف قطر الأنبوبة r وكثافة السائل ρ وزاوية التماس θ.',
    examTip: 'تذكر: إذا كانت زاوية التماس حادة θ < 90° (مثل الماء مع الزجاج) يرتفع السائل لأعلى ويكون السطح مقعراً. وإذا كانت منفرجة θ > 90° (كالزئبق) ينخفض السائل لأسفل ويكون السطح محدباً.',
    keywords: ['jurin law', 'capillary rise', 'meniscus', 'contact angle']
  },

  // --- MODULE 4: VISCOSITY ---
  {
    id: 'phys-term-stokes-law',
    module: 'viscosity',
    division: 'properties_mechanics',
    type: 'law',
    termEn: 'Stokes\' Drag Law',
    definitionEn: 'The theoretical formula for the viscous retarding force experienced by a small spherical body moving through a viscous fluid at low Reynolds number (laminar flow).',
    formula: 'F_d = 6 \\pi \\eta r v',
    unit: 'Newton (N)',
    example: 'For a 1 mm radius ball moving at 0.05 m/s in oil of viscosity 0.5 Pa·s: F_d = 6π(0.5)(0.001)(0.05) ≈ 4.71 × 10^-4 N.',
    termAr: 'قانون ستوكس لقوة المقاومة اللزجة',
    definitionAr: 'القوة المعيقة التي يفرضها مائع لزج على كرة صلبة تتحرك فيه بسريان طبقي هادئ. تتناسب القوة طردياً مع معامل لزوجة المائع η ونصف قطر الكرة r وسرعتها v.',
    examTip: 'شروط تطبيق قانون ستوكس: (1) المائع غير محدود الأبعاد (2) الجسم كروي أملس وصلب (3) السرعة صغيرة تضمن سرياناً طبقياً هادئاً (Re < 1).',
    keywords: ['stokes law', 'viscous drag', 'sphere', 'laminar flow']
  },
  {
    id: 'phys-term-terminal-velocity',
    module: 'viscosity',
    division: 'properties_mechanics',
    type: 'application',
    termEn: 'Terminal Velocity in Viscous Fluids (v_t)',
    definitionEn: 'The maximum steady speed attained by a falling body through a viscous fluid when the downward gravitational force equals the sum of buoyant upthrust and Stokes drag.',
    formula: 'v_t = \\frac{2 r^2 (\\rho_s - \\rho_f) g}{9 \\eta}',
    unit: 'm/s',
    example: 'In the physics lab experiment, steel spheres drop through glycerin at a steady terminal velocity.',
    termAr: 'السرعة الحدية للهبوط في مائع لزج (v_t)',
    definitionAr: 'السرعة الثابتة التي تهبط بها كرة في سائل لزج عندما تصبح العجلة صفراً ومحصلة القوى صفراً (الوزن لأسفل = قوة الطفو + قوة مقاومة ستوكس للأعلى).',
    examTip: 'العلاقة في المعمل: السرعة الحدية تتناسب طردياً مع مربع نصف القطر (r²). إذا كبر نصف قطر الكرة مرتين، تزداد سرعتها الحدية 4 أضعاف!',
    keywords: ['terminal velocity', 'glycerin', 'buoyancy', 'steady fall']
  },
  {
    id: 'phys-term-poiseuille-law',
    module: 'viscosity',
    division: 'properties_mechanics',
    type: 'law',
    termEn: 'Poiseuille\'s Law of Pipe Flow',
    definitionEn: 'The volumetric flow rate of an incompressible viscous fluid in steady laminar flow through a horizontal cylindrical tube of circular cross section.',
    formula: 'Q = \\frac{V}{t} = \\frac{\\pi r^4 (P_1 - P_2)}{8 \\eta L}',
    unit: 'm³/s',
    example: 'Used to calculate blood flow discharge through arteries and lubricant flow in industrial machinery.',
    termAr: 'قانون بوازيه لتدفق السوائل اللزجة في الأنابيب',
    definitionAr: 'معادلة حساب معدل التصرف الحجمي لسائل لزج يسري سرياناً هادئاً في أنبوبة أسطوانية نصف قطرها r وطولها L وفرق الضغط بين طرفيها ΔP.',
    examTip: 'سؤال امتحان مشهور: يعتمد معدل السريان Q على نصف قطر الأنبوبة مرفوعاً للأس الرابع (r^4)؛ أي نقصان طفيف في قطر الأنبوبة يخنق التدفق بشدة.',
    keywords: ['poiseuille', 'flow rate', 'pipe flow', 'viscous discharge']
  },

  // --- MODULE 5: HYDRODYNAMICS ---
  {
    id: 'phys-term-continuity-eqn',
    module: 'hydrodynamics',
    division: 'properties_mechanics',
    type: 'law',
    termEn: 'Equation of Continuity (Conservation of Mass)',
    definitionEn: 'The fundamental hydrodynamics relation stating that for an incompressible fluid in steady flow, the volumetric mass flow rate remains constant across any cross-section.',
    formula: 'A_1 v_1 = A_2 v_2 = Q = \\text{Constant} \\implies \\frac{v_2}{v_1} = \\frac{A_1}{A_2} = \\left(\\frac{d_1}{d_2}\\right)^2',
    unit: 'Flow rate Q in m³/s',
    example: 'Water flowing from a garden hose speeds up when you place your thumb over the nozzle to reduce area.',
    termAr: 'معادلة الاستمرارية وحفظ الكتلة',
    definitionAr: 'تطبيق قانون بقاء الكتلة على الموائع غير القابلة للانضغاط؛ حاصل ضرب مساحة المقطع في سرعة التدفق يظل ثابتاً عند أي نقطة في مسار السريان المستقر.',
    examTip: 'سؤال حسابي: إذا قل قطر الماسورة للنصف (d2 = d1 / 2)، فإن السرعة تتضاعف 4 مرات (v2 = 4 v1) لأن المساحة تقل للربع.',
    keywords: ['continuity equation', 'flow rate', 'conservation of mass', 'nozzle']
  },
  {
    id: 'phys-term-bernoulli-eqn',
    module: 'hydrodynamics',
    division: 'properties_mechanics',
    type: 'law',
    termEn: 'Bernoulli\'s Equation (Conservation of Energy)',
    definitionEn: 'The total mechanical energy per unit volume in a steady, irrotational, incompressible, non-viscous fluid stream is constant along any streamline.',
    formula: 'P_1 + \\frac{1}{2} \\rho v_1^2 + \\rho g y_1 = P_2 + \\frac{1}{2} \\rho v_2^2 + \\rho g y_2 = \\text{Constant}',
    unit: 'N/m² = Pascal (Pa)',
    example: 'Generates the dynamic lift under airplane wings and atomizes fuel in carburetors.',
    termAr: 'معادلة برنولي لحفظ الطاقة في الموائع',
    definitionAr: 'تطبيق قانون بقاء الطاقة الميكانيكية على المائع المثالي؛ مجموع طاقة الضغط وطاقة الحركة لوحدة الحجوم وطاقة الوضع لوحدة الحجوم يظل ثابتاً على امتداد خط السريان.',
    examTip: 'أهم قاعدة: في الأنابيب الأفقية (y1 = y2)، حيثما زادت السرعة انخفض الضغط الاستاتيكي، وحيثما تباطأ السائل ارتفع الضغط.',
    keywords: ['bernoulli equation', 'static pressure', 'dynamic pressure', 'streamline']
  },
  {
    id: 'phys-term-venturi-meter',
    module: 'hydrodynamics',
    division: 'properties_mechanics',
    type: 'application',
    termEn: 'Venturi Meter Principle',
    definitionEn: 'A pipeline device with a constricted throat used to measure fluid flow speed and volumetric discharge by reading pressure differential ΔP via manometer.',
    formula: 'v_1 = \\sqrt{\\frac{2 g \\Delta h}{(A_1 / A_2)^2 - 1}}, \\quad Q = A_1 v_1',
    unit: 'Flow rate in m³/s',
    example: 'Industrial water supply pipelines use Venturi meters to monitor municipal volumetric flow.',
    termAr: 'مقياس فنتوري لقياس معدل التدفق',
    definitionAr: 'جهاز هيدروليكي يركب في خطوط الأنابيب يتكون من مدخل متقارب وخناق ضيق ومخرج متباعد، يقيس سرعة وتصرف السائل بقياس فرق الضغط بين المدخل والخناق.',
    examTip: 'في المسألة: إذا أعطاك قراءة المانومتر الزئبقي h، فإن فرق الضغط هو ΔP = (ρ_Hg - ρ_fluid) g h.',
    keywords: ['venturi meter', 'manometer', 'flow velocity', 'throat']
  },

  // =========================================================================
  // DIVISION 2: HEAT, THERMODYNAMICS & WAVES (MODULES 6 - 10)
  // =========================================================================

  // --- MODULE 6: THERMAL EXPANSION & CALORIMETRY ---
  {
    id: 'phys-term-linear-expansion',
    module: 'thermal_expansion',
    division: 'heat_waves',
    type: 'law',
    termEn: 'Linear Thermal Expansion Coefficient (α)',
    definitionEn: 'The fractional increase in length of a solid rod per degree change in temperature.',
    formula: '\\Delta L = \\alpha L_0 \\Delta T \\implies L = L_0 (1 + \\alpha \\Delta T)',
    unit: '(°C)^-1 or K^-1',
    example: 'Steel has α ≈ 12 × 10^-6 K^-1; Concrete has α ≈ 12 × 10^-6 K^-1 (matched for reinforced concrete).',
    termAr: 'معامل التمدد الطولي (α)',
    definitionAr: 'مقدار الزيادة في وحدة الأطوال من المادة الصلبة عند رفع درجة حرارتها درجة سيليزية واحدة. يعتمد على نوع المادة وقوة الروابط بين ذراتها.',
    examTip: 'سؤال علل: لماذا يسلح الخرسانة بحديد التسليح تحديداً؟ لأن معامل التمدد الحراري للصلب والخرسانة متطابق تقريباً، فلا تحدث تشققات أو انفصال عند تقلبات الطقس.',
    keywords: ['linear expansion', 'thermal coefficient', 'railway track', 'expansion joint']
  },
  {
    id: 'phys-term-thermal-stress',
    module: 'thermal_expansion',
    division: 'heat_waves',
    type: 'application',
    termEn: 'Thermal Stress in Constrained Rods',
    definitionEn: 'The elastic stress generated in a structural member when its natural thermal expansion or contraction is prevented by rigid supports.',
    formula: '\\sigma_{\\text{thermal}} = \\frac{F}{A} = Y \\frac{\\Delta L}{L_0} = Y \\alpha \\Delta T',
    unit: 'N/m² = Pascal (Pa)',
    example: 'Long structural pipeline sections use U-bends to relieve thermal stresses caused by seasonal temp swings.',
    termAr: 'الإجهاد الحراري في القضبان المقيدة',
    definitionAr: 'إجهاد ضغط هائل ينشأ داخل القضيب الصلب إذا تم تثبيت طرفيه بإحكام ومُنِع من التمدد الطولي عند ارتفاع درجة حرارته. يحسب بضرب معامل يونج في معامل التمدد في فرق الحرارة.',
    examTip: 'لاحظ أن الإجهاد الحراري σ لا يعتمد نهائياً على الطول الأصلي للقضيب L0 ولا على مساحة مقطعه A، بل يعتمد فقط على Y و α و ΔT!',
    keywords: ['thermal stress', 'young modulus', 'constrained', 'buckling']
  },
  {
    id: 'phys-term-latent-heat',
    module: 'thermal_expansion',
    division: 'heat_waves',
    type: 'definition',
    termEn: 'Latent Heat of Phase Transformation (L)',
    definitionEn: 'The quantity of thermal energy absorbed or released per unit mass of a substance during a constant-temperature phase change (solid-liquid or liquid-gas).',
    formula: 'Q = m L_f \\quad (\\text{Fusion}), \\quad Q = m L_v \\quad (\\text{Vaporization})',
    unit: 'J/kg or cal/g',
    example: 'Latent heat of fusion of ice L_f = 3.34 × 10^5 J/kg; Latent heat of vaporization of water L_v = 2.26 × 10^6 J/kg.',
    termAr: 'الحرارة الكامنة لتحول المادة (L)',
    definitionAr: 'كمية الحرارة اللازمة لتحويل وحدة الكتل من المادة من حالة إلى أخرى (انصهار أو تبخير) عند ثبوت درجة الحرارة والضغط الجوي.',
    examTip: 'في مسائل المسعر الحراري: عند تحويل ثلج عند 0°C إلى ماء عند 0°C نستخدم Q = m Lf، ولا نستخدم أي ΔT لأن درجة الحرارة تظل ثابتة أثناء التحول.',
    keywords: ['latent heat', 'fusion', 'vaporization', 'calorimetry']
  },

  // --- MODULE 7: HEAT CONDUCTION ---
  {
    id: 'phys-term-fourier-law',
    module: 'heat_conduction',
    division: 'heat_waves',
    type: 'law',
    termEn: 'Fourier\'s Law of Thermal Conduction',
    definitionEn: 'The empirical law stating that the rate of heat flow through a homogeneous solid is proportional to cross-sectional area and the temperature gradient normal to that area.',
    formula: 'H = \\frac{dQ}{dt} = -k A \\frac{dT}{dx} = k A \\frac{T_H - T_C}{L}',
    unit: 'Heat transfer rate in Watts (W = J/s)',
    example: 'Copper has k ≈ 400 W/(m·K); Polyurethane insulation foam has k ≈ 0.025 W/(m·K).',
    termAr: 'قانون فورييه للتوصيل الحراري',
    definitionAr: 'القانون الفيزيائي الأساسي لانتقال الحرارة بالتوصيل؛ معدل تدفق الطاقة الحرارية بالوات يتناسب طردياً مع مساحة المقطع والتدرج الحراري بين السطحين وعكسياً مع السُمك L.',
    examTip: 'وحدات معامل التوصيل الحراري k في النظام الدولي: W/(m·K) أو W/(m·°C) أو J/(s·m·°C).',
    keywords: ['fourier law', 'thermal conduction', 'heat transfer rate', 'thermal conductivity']
  },
  {
    id: 'phys-term-thermal-resistance',
    module: 'heat_conduction',
    division: 'heat_waves',
    type: 'application',
    termEn: 'Thermal Resistance (R_th) & Series Walls',
    definitionEn: 'The thermal analogue of electrical resistance, measuring the opposition offered by a material layer to steady heat conduction.',
    formula: 'R_{\\text{th}} = \\frac{L}{k A} \\implies H = \\frac{\\Delta T}{R_{\\text{th}}}, \\quad R_{\\text{total}} = R_1 + R_2 + \\dots + R_n',
    unit: 'K/W or °C/W',
    example: 'Double-glazed glass windows utilize an argon gas gap to maximize thermal resistance and cut air conditioning bills.',
    termAr: 'المقاومة الحرارية والجدران المركبة على التوالي',
    definitionAr: 'مقياس إعاقة المادة لسريان الحرارة بالتوصيل، وتماثل المقاومة الكهربية في قانون أوم. في الجدران متعددة الطبقات (طوب + عازل + إسمنت) تجمع المقاومات الحرارية توالياً.',
    examTip: 'خطوة أساسية لحساب حرارة السطح الفاصل Tx: اكتب H1 = H2، أي k1 A (T1 - Tx)/L1 = k2 A (Tx - T2)/L2 واختصر المساحة A لتحسب Tx مباشرة.',
    keywords: ['thermal resistance', 'composite wall', 'insulation', 'ohms law analogue']
  },

  // --- MODULE 8: THERMODYNAMICS ---
  {
    id: 'phys-term-first-law-thermo',
    module: 'thermodynamics',
    division: 'heat_waves',
    type: 'law',
    termEn: 'First Law of Thermodynamics (Energy Conservation)',
    definitionEn: 'The principle of conservation of energy applied to thermodynamic systems: the change in internal energy equals the heat added minus the work done by the system.',
    formula: '\\Delta U = Q - W \\quad \\text{where } W = \\int P \\, dV',
    unit: 'Joules (J)',
    example: 'In an insulated thermos (adiabatic Q = 0), compressing the gas does work on it (-W), increasing its internal energy and temp (+ΔU).',
    termAr: 'القانون الأول للديناميكا الحرارية',
    definitionAr: 'صياغة قانون بقاء الطاقة للأنظمة الحرارية؛ التغير في الطاقة الداخلية للنظام يساوي كمية الحرارة المتبادلة ناقص الشغل الميكانيكي المبذول بواسطة الغاز.',
    examTip: 'اتفاق الإشارات الأكاديمي المعتمد في شبرا: Q موجبة إذا دخلت للنظام، وسالبة إذا فقدها. W موجبة إذا تمدد الغاز وبذل شغلاً، وسالبة إذا تم ضغطه.',
    keywords: ['first law', 'internal energy', 'work done', 'heat added']
  },
  {
    id: 'phys-term-isothermal-process',
    module: 'thermodynamics',
    division: 'heat_waves',
    type: 'law',
    termEn: 'Isothermal Expansion of Ideal Gas',
    definitionEn: 'A reversible thermodynamic process carried out at constant temperature (T = const, ΔU = 0), governed by Boyle\'s Law P V = const.',
    formula: 'W = n R T \\ln\\left(\\frac{V_2}{V_1}\\right) = n R T \\ln\\left(\\frac{P_1}{P_2}\\right), \\quad Q = W, \\quad \\Delta U = 0',
    unit: 'Work in Joules (J)',
    example: 'Very slow gas expansion in a thin-walled cylinder kept in a large constant-temperature water bath.',
    termAr: 'التمدد الإيزوثرمي للغاز المثالي (ثبوت درجة الحرارة)',
    definitionAr: 'عملية تمدد تتم ببطء شديد عند ثبوت درجة الحرارة T. لأن T ثابتة، فإن التغير في الطاقة الداخلية للغاز المثالي صفر (ΔU = 0)، وتتحول كل الحرارة الممتصة إلى شغل ميكانيكي (Q = W).',
    examTip: 'تذكر: في التمدد الإيزوثرمي، إذا تضاعف الحجم مرتين (V2/V1 = 2) فإن الشغل هو W = n R T ln(2) ≈ 0.693 n R T.',
    keywords: ['isothermal', 'boyle law', 'constant temperature', 'gas work']
  },
  {
    id: 'phys-term-adiabatic-process',
    module: 'thermodynamics',
    division: 'heat_waves',
    type: 'law',
    termEn: 'Adiabatic Expansion & Poisson Relations',
    definitionEn: 'A thermodynamic process in which no heat enters or leaves the system (Q = 0). The work is performed entirely at the expense of internal energy.',
    formula: 'P V^\\gamma = \\text{Const}, \\quad T V^{\\gamma - 1} = \\text{Const}, \\quad W = -\\Delta U = \\frac{P_1 V_1 - P_2 V_2}{\\gamma - 1}',
    unit: 'Work in Joules (J)',
    example: 'Fast compression of air in a diesel engine cylinder heats it to the auto-ignition temperature of fuel.',
    termAr: 'التمدد الأديباتي وقوانين بواسون (انعدام التبادل الحراري)',
    definitionAr: 'تغير سريع جداً أو في وسط معزول حرارياً تماماً (Q = 0). الشغل المبذول بواسطة الغاز يتم سحبه مباشرة من طاقته الداخلية فيبرد الغاز وتنخفض درجة حرارته.',
    examTip: 'سؤال علل: منحنى التمدد الأديباتي أكثر انحداراً (Steeper) من منحنى التمدد الإيزوثرمي على مخطط P-V؟ لأن ميل الأديباتي يساوي γ ضعف ميل الإيزوثرمي (حيث γ > 1).',
    keywords: ['adiabatic', 'poisson', 'isentropic', 'gamma ratio']
  },

  // --- MODULE 9: SIMPLE HARMONIC MOTION ---
  {
    id: 'phys-term-shm-definition',
    module: 'shm',
    division: 'heat_waves',
    type: 'definition',
    termEn: 'Simple Harmonic Motion (SHM)',
    definitionEn: 'A periodic oscillatory motion where the restoring force and acceleration are directly proportional to displacement from equilibrium and directed toward it.',
    formula: 'a = -\\omega^2 x \\implies \\frac{d^2 x}{dt^2} + \\omega^2 x = 0',
    unit: 'Displacement in meters (m), Acceleration in m/s²',
    example: 'Small oscillations of a pendulum, mass on a spring, and vibrations of molecules.',
    termAr: 'الحركة التوافقية البسيطة (SHM)',
    definitionAr: 'حركة اهتزازية دورية تتناسب فيها عجلة الجسم طردياً مع إزاحته عن موضع سكونه وتعاكسها دائماً في الاتجاه نحو موضع الاتزان.',
    examTip: 'أهم سؤال في الامتحان: ما هو شرط الحركة التوافقية البسيطة؟ الإجابة: a = -ω² x، والإشارة السالبة تعني أن القوة والعجلة دائماً في اتجاه معاكس للإزاحة نحو نقطة الصفر.',
    keywords: ['shm', 'restoring force', 'acceleration', 'angular frequency']
  },
  {
    id: 'phys-term-simple-pendulum',
    module: 'shm',
    division: 'heat_waves',
    type: 'law',
    termEn: 'Simple Pendulum Period & Gravity Formula',
    definitionEn: 'The periodic time for small angular amplitude swings of a point mass suspended by a light inextensible cord.',
    formula: 'T = 2 \\pi \\sqrt{\\frac{L}{g}} \\implies g = \\frac{4 \\pi^2 L}{T^2}, \\quad \\omega = \\sqrt{\\frac{g}{L}}',
    unit: 'Period in seconds (s)',
    example: 'A 1.0 m long pendulum on Earth oscillates with period T ≈ 2.006 s.',
    termAr: 'الزمن الدوري للبندول البسيط وحساب عجلة الجاذبية g',
    definitionAr: 'معادلة حساب الزمن الدوري لاهتزازة كاملة للبندول البسيط. يعتمد فقط على طول الخيط L وعجلة الجاذبية g ولا يعتمد نهائياً على كتلة الثقل المعلق.',
    examTip: 'تجربة معمل شبرا الشهيرة: لرسم العلاقة بين L و T²، يكون الميل Slope = L / T²، ونستنتج عجلة الجاذبية g = 4 π² × Slope.',
    keywords: ['simple pendulum', 'gravity experiment', 'periodic time', 'string length']
  },

  // --- MODULE 10: MECHANICAL WAVES & ACOUSTICS ---
  {
    id: 'phys-term-sound-intensity-db',
    module: 'acoustics',
    division: 'heat_waves',
    type: 'law',
    termEn: 'Sound Intensity Level (Decibel Scale)',
    definitionEn: 'The logarithmic measure of sound power per unit area relative to the standard human auditory threshold of hearing I0 = 10^-12 W/m².',
    formula: '\\beta = 10 \\log_{10}\\left(\\frac{I}{I_0}\\right) \\quad [\\text{dB}]',
    unit: 'Decibel (dB)',
    example: 'Normal conversation is ~60 dB (I = 10^-6 W/m²); Rock concert is ~120 dB (I = 1 W/m²).',
    termAr: 'مستوى شدة الصوت ومقياس الديسيبل اللوغاريتمي',
    definitionAr: 'المقياس اللوغاريتمي لشدة الصوت بالنسبة إلى عتبة السمع البشرية I0 = 10^-12 W/m². يعكس الإدراك الفعلي للأذن لارتفاع الصوت.',
    examTip: 'سؤال حسابي مضمون: إذا تضاعفت شدة الصوت مرتين (I2 = 2 I1)، فإن مستوى الصوت يزداد بمقدار 10 log10(2) ≈ 3 dB فقط.',
    keywords: ['decibel', 'sound intensity', 'threshold of hearing', 'acoustics']
  },
  {
    id: 'phys-term-doppler-effect',
    module: 'acoustics',
    division: 'heat_waves',
    type: 'law',
    termEn: 'Doppler Effect in Sound Waves',
    definitionEn: 'The apparent change in wave frequency detected by an observer when there is relative motion between the sound source and the observer.',
    formula: 'f\' = f \\left(\\frac{v \\pm v_o}{v \\mp v_s}\\right)',
    unit: 'Hertz (Hz)',
    example: 'The high-pitched wail of an approaching police siren abruptly drops in pitch as it passes and speeds away.',
    termAr: 'ظاهرة دوبلر في الموجات الصوتية',
    definitionAr: 'التغير الظاهري في تردد النغمة الصوتية التي يسمعها الراصد نتيجة الحركة النسبية بين مصدر الصوت والراصد في وسط الانتشار.',
    examTip: "قاعدة الإشارات الذهبية: في حالة الاقتراب يزداد التردد f' > f (استخدم + للراصد و - للمصدر). وفي حالة الابتعاد يقل التردد f' < f (استخدم - للراصد و + للمصدر).",
    keywords: ['doppler effect', 'apparent frequency', 'moving source', 'siren pitch']
  }
];
