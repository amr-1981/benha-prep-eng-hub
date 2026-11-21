// Official Engineering Physics 1 Curriculum (PHY 001)
// Faculty of Engineering at Shoubra (FES) - Benha University (Preparatory Year - Term 1)
// Strictly Divided into Two Distinct Academic Branches:
// 1. Properties of Matter & Mechanics Branch (properties_mechanics)
// 2. Heat, Thermodynamics & Wave Motion Branch (heat_waves)

export const PHYSICS_FACULTY_INFO = {
  university: 'جامعة بنها',
  faculty: 'كلية الهندسة بشبرا',
  department: 'قسم الرياضيات والفيزياء الهندسية (EMP)',
  courseNameAr: 'الفيزياء الهندسية 1 (خواص المادة، الميكانيكا، الحرارة والموجات)',
  courseNameEn: 'Engineering Physics 1 (Mechanics, Properties of Matter, Heat & Waves)',
  courseCode: 'PHY 001',
  term: 'الفصل الدراسي الأول (الفرقة الإعدادية)',
  creditHours: 3,
  totalMarks: 150,
  finalExamMarks: 90,
  practicalExamMarks: 30,
  courseworkMarks: 30
};

export const PHYSICS_DIVISIONS = [
  {
    id: "all",
    titleAr: "المنهج الشامل للفيزياء الهندسية 1",
    titleEn: "Complete Engineering Physics 1 Syllabus",
    shortTitleAr: "الكل (خواص المادة + الحرارة والموجات)",
    shortTitleEn: "Unified Physics 1",
    badge: "المنهج كاملاً (150 درجة)",
    icon: "Sparkles",
    color: "from-purple-600 via-violet-600 to-indigo-600",
    borderColor: "border-purple-500/40",
    description: "تصفح كافة موضوعات فرعي خواص المادة والميكانيكا والحرارة والموجات التوافقية والتطبيقات المعملية."
  },
  {
    id: "properties_mechanics",
    titleAr: "الفرع الأول: خواص المادة وميكانيكا الموائع والقياسات",
    titleEn: "Branch 1: Properties of Matter & Fluid Mechanics",
    shortTitleAr: "خواص المادة والميكانيكا",
    shortTitleEn: "Properties & Mechanics",
    badge: "خواص المادة والموائع (Properties & Mechanics)",
    icon: "Compass",
    color: "from-purple-600 to-violet-600",
    borderColor: "border-purple-500/40",
    modulesCount: 5,
    topics: [
      "التحليل البعدي ونظرية الأبعاد ووحدات القياس (Dimensional Analysis & Unit Consistency)",
      "مرونة المواد وقانون هوك ومعاملات يونج والقص والحجمي (Elasticity, Stress-Strain & Moduli)",
      "التوتر السطحي والضغط الإضافي والخاصية الشعرية (Surface Tension, Excess Pressure & Capillarity)",
      "لزوجة السوائل الحقيقية وقانون ستوكس والسرعة الحدية (Fluid Viscosity, Stokes' Law & Poiseuille)",
      "ديناميكا الموائع المثالية ومعادلة الاستمرارية وبرنولي (Hydrodynamics, Continuity & Bernoulli Equation)"
    ],
    description: "يشمل: تجانس المعادلات والأبعاد الأساسية، إجهاد الشد والانفعال وكسر المواد، زاوية التماس والفقاعات الكروية، سرعة هبوط الكرات في السوائل اللزجة، وتدفق السوائل في الأنابيب وأنبوب فنتوري ومقياس بيتوت."
  },
  {
    id: "heat_waves",
    titleAr: "الفرع الثاني: الحرارة والديناميكا الحرارية والاهتزازات والموجات",
    titleEn: "Branch 2: Heat, Thermodynamics & Wave Motion",
    shortTitleAr: "الحرارة والموجات",
    shortTitleEn: "Heat & Waves",
    badge: "الحرارة والموجات (Heat & Waves)",
    icon: "Activity",
    color: "from-indigo-600 to-purple-600",
    borderColor: "border-indigo-500/40",
    modulesCount: 5,
    topics: [
      "التمدد الحراري وكمية الحرارة والمسعر الحراري (Thermal Expansion & Calorimetry)",
      "انتقال الحرارة بالتوصيل وقانون فورييه والمقاومة الحرارية (Heat Conduction, Fourier's Law & Insulation)",
      "القانون الأول للديناميكا الحرارية والعمليات الغازية (First Law of Thermodynamics & Gas Processes)",
      "الحركة التوافقية البسيطة والبندول البسيط والزنبرك (Simple Harmonic Motion, Pendulum & Mass-Spring)",
      "الموجات الميكانيكية والصوتية وظاهرة دوبلر (Mechanical Waves, Sound Intensity & Doppler Effect)"
    ],
    description: "يشمل: التمدد الطولي والحجمي للأجسام الصلبة والسوائل، التوصيل الحراري في الجدران المركبة ومقاومة التوصيل، الشغل المبذول والطاقة الداخلية في التغيرات الإيزوبارية والإيزوثرمية والأديباتية، معادلة الحركة التوافقية وسرعة الصوت في الأوساط وظاهرة دوبلر لانزياح التردد."
  }
];

export const PHYSICS_MODULES = [
  // =======================================================================
  // BRANCH 1: PROPERTIES OF MATTER & FLUID MECHANICS (MODULES 1-5)
  // =======================================================================
  {
    id: 'phys-mod-dimensions',
    number: 1,
    division: 'properties_mechanics',
    divisionBadge: 'خواص المادة والميكانيكا (Properties & Mechanics)',
    titleAr: 'التحليل البعدي وتجانس المعادلات والقياسات الهندسية',
    titleEn: 'Dimensional Analysis, Physical Dimensions & Measurement Units',
    icon: 'Compass',
    color: 'from-purple-600 to-violet-600',
    badge: 'الوحدة 01 • الأبعاد وتجانس القوانين',
    summary: 'تحليل الأبعاد الفيزيائية الأساسية [M, L, T, θ]، التحقق من صحة القوانين الهندسية، استنتاج صيغ العلاقات الفيزيائية بطريقة رايلي، وتحديد وحدات الثوابت الكونية في النظام الدولي SI.',
    learningObjectives: [
      'Express mechanical and thermal physical quantities in fundamental dimensions [M, L, T].',
      'Verify the dimensional homogeneity of engineering and fluid dynamics equations.',
      'Derive theoretical relations and functional dependencies using Rayleigh\'s method of dimensional analysis.',
      'Determine the dimensions and SI units of key physical constants (Universal Gravitational G, Viscosity η, Surface Tension γ, Thermal Conductivity k).'
    ],
    keyFormulas: [
      {
        title: 'Principle of Dimensional Homogeneity:',
        formula: '[\\text{Left Hand Side}] = [\\text{Right Hand Side}] = [\\text{Each Individual Term Added or Subtracted}]',
        notes: 'Terms separated by + or - must have identical dimensions; arguments of sin, cos, exp, and ln must be dimensionless [M^0 L^0 T^0].'
      },
      {
        title: 'Rayleigh\'s Formulation of Physical Dependencies:',
        formula: 'Q = C \\cdot X^a \\cdot Y^b \\cdot Z^c \\implies [M]^0 [L]^0 [T]^0 = [X]^a [Y]^b [Z]^c [Q]^{-1}',
        notes: 'Equating powers of M, L, and T yields linear algebraic equations to solve for powers a, b, c.'
      },
      {
        title: 'Fundamental Physical Dimensions of Engineering Quantities:',
        formula: '[\\text{Force}] = M L T^{-2}, \\quad [\\text{Pressure / Stress}] = M L^{-1} T^{-2}, \\quad [\\text{Viscosity } \\eta] = M L^{-1} T^{-1}, \\quad [\\text{Surface Tension}] = M T^{-2}',
        notes: 'Work / Energy = M L^2 T^-2, Power = M L^2 T^-3, Modulus of Elasticity = M L^-1 T^-2.'
      }
    ],
    examHotspots: [
      'Verify the dimensional consistency of the Stokes viscous drag formula: F = 6 π η r v.',
      'Using dimensional analysis, derive the expression for the periodic time T of a simple pendulum depending on mass m, length L, and acceleration due to gravity g.',
      'Find the dimensions of constants a and b in Van der Waals equation: (P + a/V^2)(V - b) = R T.'
    ],
    bilingualInsight: {
      titleEn: "Dimensional Analysis: Engineering Gatekeeper",
      titleAr: "💡 الفهم والربط الهندسي بالعربي: التحليل البعدي وتجانس القوانين",
      points: [
        "لماذا يعد التحليل البعدي سلاح المهندس الأول؟ قبل تشغيل أي نموذج محاكاة أو إرسال تقرير حسابات إنشائية، يتم التأكد من أن طرفي المعادلة متجانسان بعدياً. المعادلة المتجانسة بعدياً قد تكون خاطئة عددياً، لكن المعادلة غير المتجانسة بعدياً هي حتماً خاطئة فيزيائياً!",
        "قاعدة ذهبية للامتحان: أي دالة مثلثية (sin, cos) أو دالة أسية (e^x) أو لوغاريتمية (ln) يجب أن يكون داخلها كمية عديمة الأبعاد تماماً [M^0 L^0 T^0]. إذا رأيت sin(k x - ω t)، فإن بعد [k] هو L^-1 وبعد [ω] هو T^-1 فوراً.",
        "استنتاج القوانين: عندما يعطيك السؤال عوامل يعتمد عليها متغير فيزيائي (مثل زمن اهتزاز قطرة أو سرعة انتشار موجة في وتر)، افترض دالة ضرب بأسس مجهولة (x, y, z) وساوِ قوى M و L و T لتشكل نظام معادلات خطي يحل بدقيقة واحدة."
      ],
      examTip: "سؤال فاينال شبرا الدائم (10 درجات): إثبات تجانس معادلة معقدة أو إيجاد أبعاد الثوابت في معادلة غاز حقيقي (a و b في Van der Waals)."
    }
  },

  {
    id: 'phys-mod-elasticity',
    number: 2,
    division: 'properties_mechanics',
    divisionBadge: 'خواص المادة والميكانيكا (Properties & Mechanics)',
    titleAr: 'مرونة المواد وقانون هوك ومعاملات المرونة (يونج، القص، والحجمي)',
    titleEn: 'Mechanical Elasticity, Hooke\'s Law & Moduli (Young, Shear & Bulk)',
    icon: 'Layers',
    color: 'from-purple-600 to-indigo-600',
    badge: 'الوحدة 02 • الإجهاد والانفعال ومعامل يونج',
    summary: 'دراسة استجابة المواد الصلبة للأحمال الخارجية: الإجهاد الطولي والانفعال النسبي، قانون هوك وحد المرونة ونقطة الخضوع والإجهاد الأقصى، معامل يونج Y، معامل القص n، المعامل الحجمي B، ونسبة بواسون ν.',
    learningObjectives: [
      'Define normal tensile/compressive stress (σ = F/A) and longitudinal strain (ε = ΔL/L0).',
      'Interpret the complete Stress-Strain curve for ductile materials (Proportional limit, Yield point, Ultimate tensile strength, Fracture).',
      'Calculate Young\'s Modulus Y, Shear Modulus n (Rigidity), and Bulk Modulus B with unit analysis (N/m² or Pa).',
      'Apply Poisson\'s ratio (ν = -lateral strain / longitudinal strain) and establish inter-moduli relationships.',
      'Compute the strain energy stored per unit volume in a deformed elastic wire: U/V = 1/2 σ ε.'
    ],
    keyFormulas: [
      {
        title: 'Young\'s Modulus & Wire Elongation:',
        formula: 'Y = \\frac{\\sigma}{\\varepsilon} = \\frac{F / A}{\\Delta L / L_0} \\implies \\Delta L = \\frac{F L_0}{A Y} = \\frac{4 F L_0}{\\pi d^2 Y}',
        notes: 'Units: N/m² = Pascal (Pa). For steel Y ≈ 200 GPa; for copper Y ≈ 110 GPa.'
      },
      {
        title: 'Bulk Modulus & Volume Elasticity:',
        formula: 'B = -\\frac{\\Delta P}{\\Delta V / V_0} \\quad \\text{and Compressibility } k = \\frac{1}{B}',
        notes: 'The negative sign ensures B is positive since an increase in pressure ΔP causes a decrease in volume ΔV.'
      },
      {
        title: 'Shear Modulus (Modulus of Rigidity) & Poisson\'s Ratio:',
        formula: 'n = \\frac{F / A}{\\tan \\theta} \\approx \\frac{F}{A \\theta}, \\quad \\nu = -\\frac{\\Delta d / d_0}{\\Delta L / L_0} \\quad (0 \\le \\nu \\le 0.5)',
        notes: 'Theoretical bounds for isotropic materials: -1 ≤ ν ≤ 0.5. For most engineering metals ν ≈ 0.25 to 0.35.'
      },
      {
        title: 'Elastic Strain Energy Stored:',
        formula: 'U = \\frac{1}{2} F \\Delta L = \\frac{1}{2} \\frac{Y A (\\Delta L)^2}{L_0}, \\quad u = \\frac{U}{\\text{Volume}} = \\frac{1}{2} \\sigma \\varepsilon = \\frac{\\sigma^2}{2 Y}',
        notes: 'Represents the area under the linear elastic portion of the stress-strain graph.'
      }
    ],
    examHotspots: [
      'Calculate elongation of a structural steel wire of length 3 m and diameter 2 mm under a tensile load of 500 N (Y = 2.0 × 10^11 Pa).',
      'Explain the physical significance of the yield point and ultimate strength on a tensile stress-strain diagram.',
      'A spherical ball of volume 1.0 L is submerged to a depth where pressure increases by 10 MPa. Find the decrease in volume if B = 1.4 × 10^11 Pa.'
    ],
    bilingualInsight: {
      titleEn: "Elasticity: Structural Integrity Principles",
      titleAr: "💡 الفهم والربط الهندسي بالعربي: مرونة المواد وسلوك المعادن",
      points: [
        "ما الفرق بين الجسم المرن (Elastic) والجسم اللدن (Plastic)؟ الجسم المرن يعود لشكل وأبعاده الأصلية تماماً بمجرد زوال القوة الخارجية المؤثرة (مثل زنبرك المساعدين في السيارة). أما إذا تجاوز الإجهاد حد المرونة (Elastic Limit)، تحدث تشوهات دائمة (Plastic Deformation) ولا يعود السلك لطوله الأصلي أبداً.",
        "معامل يونج مقياس لجساءة المادة (Stiffness): كلما زادت قيمة Y، تطلب الأمر قوة عملاقة لإحداث استطالة طفيفة. الصلب له معامل يونج أعلى بكثير من النحاس والألمنيوم، ولهذا يستخدم في الهياكل الإنشائية والجسور.",
        "نسبة بواسون (Poisson's Ratio): عندما تشد سلكاً طولياً، لا يزداد طوله مجاناً! بل ينقص قطره العرضي ليحافظ على استقرار الحجم الذري، والنسبة بين الانكماش العرضي والاستطالة الطولية هي ν وتتراوح هندسياً بين 0.25 و 0.35 لمعظم المعادن."
      ],
      examTip: "مسألة معملية ونظرية متكررة: حساب معامل يونج من ميل خط الرسم البياني بين القوة F والاستطالة ΔL، مع حساب الشغل المبذول لتمديد السلك W = 1/2 F ΔL."
    }
  },

  {
    id: 'phys-mod-surface-tension',
    number: 3,
    division: 'properties_mechanics',
    divisionBadge: 'خواص المادة والميكانيكا (Properties & Mechanics)',
    titleAr: 'التوتر السطحي للسوائل والضغط الإضافي والخاصية الشعرية',
    titleEn: 'Surface Tension, Excess Pressure in Drops & Capillary Action',
    icon: 'Droplets',
    color: 'from-violet-600 to-purple-600',
    badge: 'الوحدة 03 • الأغشية والفقاعات والارتفاع الشعري',
    summary: 'قوى التماسك والتلاصق بين جزيئات السوائل، طاقة السطح الحرة والتوتر السطحي γ، الضغط الإضافي داخل الفقاعات والقطرات الكروية (معادلة يانج-لابلاس)، زاوية التماس θ، وارتفاع السوائل في الأنابيب الشعرية.',
    learningObjectives: [
      'Define surface tension γ as force per unit length (N/m) and surface energy per unit area (J/m²).',
      'Derive the excess pressure inside a liquid droplet (ΔP = 2γ/r) and inside a hollow soap bubble (ΔP = 4γ/r).',
      'Analyze the angle of contact θ and classify liquids as wetting (θ < 90°, meniscus concave) or non-wetting (θ > 90°, meniscus convex).',
      'Formulate Jurin\'s law for capillary rise/depression: h = (2 γ cos θ) / (r ρ g).',
      'Calculate the total work required to blow a soap bubble or coalesce multiple micro-droplets into a single drop.'
    ],
    keyFormulas: [
      {
        title: 'Surface Tension Definition:',
        formula: '\\gamma = \\frac{F}{L} = \\frac{\\Delta W}{\\Delta A} \\quad [\\text{SI Unit: N/m or } \\text{J/m}^2]',
        notes: 'For a wire frame film with two surfaces, L = 2 l.'
      },
      {
        title: 'Excess Pressure (Young-Laplace):',
        formula: '\\Delta P_{\\text{liquid drop / air bubble in liquid}} = \\frac{2 \\gamma}{r}, \\quad \\Delta P_{\\text{soap bubble (2 surfaces)}} = \\frac{4 \\gamma}{r}',
        notes: 'Smaller bubbles have much higher internal excess pressure than larger bubbles.'
      },
      {
        title: 'Jurin\'s Law of Capillary Rise:',
        formula: 'h = \\frac{2 \\gamma \\cos \\theta}{r \\rho g} \\implies \\gamma = \\frac{r h \\rho g}{2 \\cos \\theta}',
        notes: 'For pure water in clean glass: θ ≈ 0° (cos θ = 1), liquid rises. For mercury: θ ≈ 138° (cos θ < 0), liquid is depressed.'
      },
      {
        title: 'Work Done in Splitting / Merging Drops:',
        formula: 'W = \\gamma \\cdot \\Delta A = \\gamma \\cdot [N (4 \\pi r^2) - 4 \\pi R^2] \\quad \\text{where } R = N^{1/3} r',
        notes: 'Splitting an atomized spray absorbs energy; merging droplets releases surface energy as heat.'
      }
    ],
    examHotspots: [
      'Calculate the height to which water rises in a glass capillary tube of internal radius 0.25 mm (γ = 0.073 N/m, ρ = 1000 kg/m³, θ = 0°).',
      'Compare the excess pressure inside a raindrop of radius 1 mm with a soap bubble of the same radius.',
      'Find the work done in blowing a soap bubble from radius 2 cm to radius 5 cm (γ = 0.03 N/m).'
    ],
    bilingualInsight: {
      titleEn: "Surface Tension: Interfacial Energy",
      titleAr: "💡 الفهم والربط الهندسي بالعربي: التوتر السطحي وقوى التماسك",
      points: [
        "لماذا تأخذ قطرات المطر والشحوم شكلاً كروياً؟ لأن جزيء السائل في الداخل ينجذب بقوى تماسك متساوية في جميع الاتجاهات، بينما الجزيء على السطح الحر يفتقد جزيئات تجذبه من الأعلى، فتنشأ محصلة قوة تشد سطح السائل للداخل كأنه غشاء مرن مشدود يقلص مساحة السطح لأدنى حد ممكن هندسياً (وهو الكرة).",
        "الفرق الحاسم في الامتحان بين القطرة وفقاعة الصابون: القطرة (أو فقاعة الهواء داخل الماء) لها سطح حر واحد فقط يلامس الهواء، وبالتالي الضغط الإضافي ΔP = 2γ/r. أما فقاعة الصابون في الهواء فلها سطحان حران (سطح داخلي وسطح خارجي)، فيتضاعف الضغط الإضافي ليصبح ΔP = 4γ/r!",
        "الخاصية الشعرية والري: كيف يصل الماء من جذور الأشجار الشاهقة إلى أوراقها؟ الأنابيب الميكروسكوبية تصنع زاوية تماس تقترب من الصفر مع الماء، فيرتفع عمود السائل لأعلى ضد الجاذبية عكس الزئبق الذي ينخفض لأسفل لأن قوى تلاصقه مع الزجاج أضعف من تماسكه الذاتي."
      ],
      examTip: "تنبيه امتحان شبرا: انتبه دائماً لنصف القطر (r)؛ فإذا أعطاك القطر (Diameter) في المسألة يجب قسمته على 2 قبل التعويض في قانون يوران!"
    }
  },

  {
    id: 'phys-mod-viscosity',
    number: 4,
    division: 'properties_mechanics',
    divisionBadge: 'خواص المادة والميكانيكا (Properties & Mechanics)',
    titleAr: 'لزوجة الموائع الحقيقية وقانون ستوكس وسريان بوازيه',
    titleEn: 'Fluid Viscosity, Stokes\' Law, Poiseuille Flow & Terminal Velocity',
    icon: 'Repeat',
    color: 'from-purple-700 to-violet-700',
    badge: 'الوحدة 04 • الاحتكاك الداخلي والسرعة الحدية',
    summary: 'الاحتكاك الداخلي بين طبقات السوائل المتحركة، قانون نيوتن للزوجة، معامل اللزوجة الديناميكي η واللزوجة الكينماتيكية ν، حركة الأجسام الكروية في الموائع اللزجة وقانون ستوكس، سرعة الهبوط الحدية (Terminal Velocity)، وتدفق السوائل في الأنابيب الضيقة وقانون بوازيه.',
    learningObjectives: [
      'State Newton\'s law of viscosity: Shear stress τ = η (dv/dy) and understand velocity gradients.',
      'Distinguish dynamic viscosity η (Pa·s or Poise) from kinematic viscosity ν = η/ρ (m²/s or Stokes).',
      'Apply Stokes\' law for drag force on a spherical particle moving at low Reynolds number: F_d = 6 π η r v.',
      'Derive the terminal velocity formula by balancing gravitational force, buoyancy, and Stokes drag: v_t = [2 r² (ρ_s - ρ_f) g] / (9 η).',
      'Solve fluid discharge in circular laminar pipes using Poiseuille\'s equation: Q = (π ΔP r^4) / (8 η L).'
    ],
    keyFormulas: [
      {
        title: 'Newton\'s Law of Dynamic Viscosity:',
        formula: '\\tau = \\frac{F}{A} = \\eta \\frac{dv}{dy} \\implies \\eta = \\frac{F / A}{dv / dy} \\quad [\\text{Units: } \\text{Pa}\\cdot\\text{s} = \\text{N}\\cdot\\text{s}/\\text{m}^2 = 10 \\text{ Poise}]',
        notes: 'Kinematic viscosity: ν = η / ρ [Units: m²/s = 10^4 Stokes].'
      },
      {
        title: 'Stokes\' Viscous Drag Law:',
        formula: 'F_d = 6 \\pi \\eta r v \\quad (\\text{Applicable for laminar flow around spheres, } Re < 1)',
        notes: 'F_d opposes the direction of relative velocity between the sphere and fluid.'
      },
      {
        title: 'Terminal Velocity of Falling Sphere:',
        formula: 'F_g = F_b + F_d \\implies \\frac{4}{3} \\pi r^3 \\rho_s g = \\frac{4}{3} \\pi r^3 \\rho_f g + 6 \\pi \\eta r v_t \\implies v_t = \\frac{2 r^2 (\\rho_s - \\rho_f) g}{9 \\eta}',
        notes: 'If ρ_s > ρ_f, the sphere descends; if ρ_s < ρ_f (e.g., air bubble in oil), it ascends at terminal velocity.'
      },
      {
        title: 'Poiseuille\'s Law for Laminar Pipe Flow:',
        formula: 'Q = \\frac{\\Delta V}{\\Delta t} = \\frac{\\pi r^4 (P_1 - P_2)}{8 \\eta L} = \\frac{\\pi d^4 \\Delta P}{128 \\eta L}',
        notes: 'Flow rate is extremely sensitive to pipe radius: doubling radius increases discharge by 2^4 = 16 times!'
      }
    ],
    examHotspots: [
      'A steel sphere (density 7800 kg/m³, radius 2 mm) falls through glycerin (density 1260 kg/m³, viscosity 0.95 Pa·s). Find its terminal velocity.',
      'Derive the terminal velocity expression for a small sphere starting from Newton\'s second law.',
      'Explain why motor oil viscosity decreases rapidly with rising engine temperature and how multigrade oils solve this.'
    ],
    bilingualInsight: {
      titleEn: "Viscosity: Internal Fluid Friction",
      titleAr: "💡 الفهم والربط الهندسي بالعربي: لزوجة السوائل والسرعة الحدية",
      points: [
        "ما هي اللزوجة هندسياً؟ هي مقياس مقاومة السائل للسريان أو قوى الاحتكاك الداخلي بين طبقاته المتجاورة. العسل وزيت المحركات لهما لزوجة عالية، بينما الماء والبنزين لهما لزوجة منخفضة.",
        "مفهوم السرعة الحدية (Terminal Velocity): عندما تسقط كرة معدنية في سائل لزج (مثل تجربة الجلسرين في معمل شبرا)، تتسارع الكرة في البداية تحت وزنها، لكن تزداد قوة مقاومة ستوكس Fd طردياً مع السرعة، حتى تتساوى قوة الجاذبية للأسفل مع مجموع قوة الطفو وقوة الاحتكاك للأعلى. عند هذه اللحظة تصبح محصلة القوى صفراً والعجلة صفراً، وتهبط الكرة بسرعة ثابتة تماماً!",
        "حساسية قانون بوازيه لنصف القطر (r^4): إذا انسد شريان في جسم الإنسان أو ماسورة زيت في مصنع بنسبة 20% فقط من نصف قطرها (أي أصبح r الجديد 0.8r)، فإن معدل التدفق ينخفض إلى (0.8)^4 = 41% من قيمته الأصلية، ويتطلب ضغطاً مضاعفاً لتمرير نفس كمية السائل!"
      ],
      examTip: "سؤال المعمل الحتمي (30 درجة): رسم العلاقة بين المسافة والزمن لكرة تسقط في عمود جلسرين، وحساب الميل (السرعة الحدية vt)، ومنها استخراج معامل اللزوجة η للجلسرين."
    }
  },

  {
    id: 'phys-mod-hydrodynamics',
    number: 5,
    division: 'properties_mechanics',
    divisionBadge: 'خواص المادة والميكانيكا (Properties & Mechanics)',
    titleAr: 'ديناميكا الموائع المثالية ومعادلة الاستمرارية وبرنولي وتطبيقاتها',
    titleEn: 'Ideal Fluid Dynamics, Continuity Equation & Bernoulli\'s Principle',
    icon: 'Zap',
    color: 'from-violet-700 to-indigo-700',
    badge: 'الوحدة 05 • حفظ الطاقة وتدفق الموائع وفنتوري',
    summary: 'خصائص المائع المثالي (غير قابل للانضغاط، عديم اللزوجة، سريان خطي ثابت وغير دوراني)، معادلة الاستمرارية وحفظ الكتلة، معادلة برنولي وحفظ الطاقة الميكانيكية، مقياس فنتوري (Venturi meter)، قانون تورشيللي للتدفق من الخزانات، وأنبوب بيتوت.',
    learningObjectives: [
      'Define ideal fluid criteria: Incompressible (ρ = const), Non-viscous (η = 0), Steady streamline flow, Irrotational.',
      'Apply the continuity equation A1 v1 = A2 v2 and calculate volumetric flow rate Q (m³/s).',
      'Derive and interpret Bernoulli\'s equation: P + 1/2 ρ v² + ρ g y = constant.',
      'Analyze Venturi tubes to measure flow rates using differential manometer height: v1 = sqrt[2 g Δh / ((A1/A2)² - 1)].',
      'Calculate efflux velocity from an orifice using Torricelli\'s theorem: v = sqrt(2 g h).'
    ],
    keyFormulas: [
      {
        title: 'Equation of Continuity (Conservation of Mass):',
        formula: 'A_1 v_1 = A_2 v_2 = Q = \\text{Constant} \\implies v_2 = v_1 \\left(\\frac{d_1}{d_2}\\right)^2',
        notes: 'Velocity is inversely proportional to cross-sectional area; fluid speeds up in constrictions.'
      },
      {
        title: 'Bernoulli\'s Equation (Conservation of Mechanical Energy):',
        formula: 'P_1 + \\frac{1}{2} \\rho v_1^2 + \\rho g y_1 = P_2 + \\frac{1}{2} \\rho v_2^2 + \\rho g y_2 = \\text{Constant}',
        notes: 'Static Pressure P + Dynamic Pressure (1/2 ρ v²) + Hydrostatic Pressure (ρ g y) = Total Head.'
      },
      {
        title: 'Venturi Meter Flow Discharge Equation:',
        formula: 'v_1 = \\sqrt{\\frac{2 (P_1 - P_2)}{\\rho [ (A_1 / A_2)^2 - 1 ]}} = \\sqrt{\\frac{2 g \\Delta h}{ (A_1 / A_2)^2 - 1 }}',
        notes: 'Discharge Q = A1 v1. The throat area A2 has lower pressure P2 and higher velocity v2.'
      },
      {
        title: 'Torricelli\'s Law of Efflux:',
        formula: 'v = \\sqrt{2 g h} \\quad \\text{and discharge } Q = A_{\\text{hole}} \\sqrt{2 g h}',
        notes: 'Identical to the speed of a freely falling body from height h in a gravitational field.'
      }
    ],
    examHotspots: [
      'A horizontal pipe of diameter 10 cm narrows to 5 cm. If water flows at 2 m/s in the wide section under 200 kPa pressure, calculate velocity and pressure in the constriction.',
      'Water leaks from a small hole at the bottom of an open tank of depth 4.5 m. Find the initial speed of efflux.',
      'Explain how airplane wings generate aerodynamic lift using Bernoulli\'s principle.'
    ],
    bilingualInsight: {
      titleEn: "Bernoulli: Energy Dynamics in Fluids",
      titleAr: "💡 الفهم والربط الهندسي بالعربي: معادلة برنولي وتطبيقات السريان",
      points: [
        "أهم مفارقة في ميكانيكا الموائع: يظن الكثيرون بالخطأ أنه كلما زادت سرعة السائل زاد ضغطه! لكن معادلة برنولي تثبت العكس تماماً: عندما يضيق المجرى تزداد السرعة الحركية (1/2 ρ v²)، ولكي تظل الطاقة الكلية ثابتة يجب أن ينخفض الضغط الاستاتيكي (P).",
        "تطبيقات هندسية مذهلة لقاعدة برنولي: إقلاع الطائرات (شكل الجناح العلوي المنحني يجعل الهواء أسرع فوقه فينخفض الضغط لأعلى مما يرفع الطائرة)، ورذاذ العطور والرشاشات، ومقياس فنتوري في قياس تصرف خطوط الأنابيب بدون تفكيكها.",
        "نصيحة لحل مسائل الأنابيب الأفقية: إذا كانت الماسورة أفقية تماماً، فإن y1 = y2 ويختفي الحد (ρ g y) من طرفي معادلة برنولي تماماً، لتصبح العلاقة بسيطة جداً بين فرق الضغط وفرق مربعي السرعتين: P1 - P2 = 1/2 ρ (v2² - v1²)."
      ],
      examTip: "سؤال فاينال شبرا الكلاسيكي (15 درجة): مسألة أنبوب فنتوري أو ماسورة أفقية متغيرة المقطع، يطلب فيها حساب السرعة في المقطع الضيق وفرق الضغط أو قراءة مانومتر زئبقي."
    }
  },

  // =======================================================================
  // BRANCH 2: HEAT, THERMODYNAMICS & WAVE MOTION (MODULES 6-10)
  // =======================================================================
  {
    id: 'phys-mod-thermal-expansion',
    number: 6,
    division: 'heat_waves',
    divisionBadge: 'الحرارة والموجات (Heat & Waves)',
    titleAr: 'التمدد الحراري للأجسام وكمية الحرارة والمسعر الحراري',
    titleEn: 'Thermal Expansion of Solids & Liquids, Calorimetry & Heat Capacity',
    icon: 'Flame',
    color: 'from-indigo-600 to-purple-600',
    badge: 'الوحدة 06 • التمدد الطولي والحجمي ومبدأ التبادل الحراري',
    summary: 'معاملات التمدد الطولي α والسطحي β والحجمي γ للأجسام الصلبة والسوائل، الإجهاد الحراري في القضبان المقيدة، كمية الحرارة المكتسبة والمفقودة Q، السعة الحرارية النوعية c، والحرارة الكامنة للتحول L ومسعر الخلط.',
    learningObjectives: [
      'Calculate linear expansion (ΔL = α L0 ΔT), area expansion (ΔA = 2 α A0 ΔT), and volume expansion (ΔV = 3 α V0 ΔT).',
      'Compute thermal stress in clamped structural bars: σ = Y α ΔT and preventing thermal buckling.',
      'Explain anomalous expansion of water between 0°C and 4°C and its biological importance.',
      'Apply the law of heat exchange in calorimeters: Heat Lost = Heat Gained, to determine specific heat capacities.',
      'Calculate energy required for phase changes: Q = m L_f (latent heat of fusion) and Q = m L_v (vaporization).'
    ],
    keyFormulas: [
      {
        title: 'Thermal Linear & Volumetric Expansion:',
        formula: '\\Delta L = \\alpha L_0 \\Delta T \\implies L = L_0 (1 + \\alpha \\Delta T), \\quad \\Delta V = \\gamma V_0 \\Delta T \\approx 3 \\alpha V_0 \\Delta T',
        notes: 'For isotropic solids, area coefficient β = 2α and volume coefficient γ = 3α. Units: (°C)^-1 or K^-1.'
      },
      {
        title: 'Thermal Stress in Constrained Rods:',
        formula: '\\sigma_{\\text{thermal}} = \\frac{F}{A} = Y \\frac{\\Delta L}{L_0} = Y \\alpha \\Delta T',
        notes: 'If a rail or bridge beam is completely clamped and prevented from expanding, it experiences massive compressive stress.'
      },
      {
        title: 'Heat Transfer & Phase Change Calorimetry:',
        formula: 'Q_{\\text{sensible}} = m c \\Delta T, \\quad Q_{\\text{latent}} = m L_f \\quad \\text{or} \\quad m L_v',
        notes: 'Specific heat of liquid water c_w ≈ 4186 J/(kg·K) = 1 cal/(g·°C). Latent heat of ice fusion L_f = 3.34 × 10^5 J/kg.'
      },
      {
        title: 'Principle of Calorimetric Heat Exchange:',
        formula: '\\sum Q_{\\text{lost (hot bodies)}} = \\sum Q_{\\text{gained (cold bodies + calorimeter)}}',
        notes: 'Enables precise determination of unknown specific heats in laboratory mixing experiments.'
      }
    ],
    examHotspots: [
      'A steel railway track of length 20 m is laid at 15°C with no gap between segments. Find the stress induced when temperature rises to 45°C (Y = 2 × 10^11 Pa, α = 12 × 10^-6 K^-1).',
      'An aluminum block of mass 200 g at 100°C is placed in a copper calorimeter containing 150 g of water at 20°C. Find the equilibrium temperature.',
      'Explain why water pipes burst when freezing in cold climates.'
    ],
    bilingualInsight: {
      titleEn: "Thermal Expansion: Civil & Mechanical Impacts",
      titleAr: "💡 الفهم والربط الهندسي بالعربي: التمدد الحراري والإجهادات المحبوسة",
      points: [
        "لماذا تترك فواصل تمدد (Expansion Joints) في الكباري وخطوط السكك الحديدية؟ لأن الأجسام الصلبة عندما ترتفع حرارتها تزداد سعة اهتزاز ذراتها وتتباعد شبكتها البلورية. وإذا كان القضيب مقيداً من الطرفين ولا يجد مسافة ليتمدد فيها، يتحول التمدد المحبوس إلى إجهاد ضغط حراري هائل (Thermal Stress) يحني القضبان الفولاذية ويكسر دعامات الجسور الخرسانية!",
        "شذوذ الماء وتجمد البحيرات: معظم السوائل تنكمش ويزداد ثقلها بالتبريد المستمر، إلا الماء! بين 4 درجات مئوية وصفر مئوي يتمدد الماء وتقل كثافته، ولهذا يطفو الجليد على السطح عازلاً قاع البحيرات لتبقى الكائنات المائية حية عند 4 درجات مئوية.",
        "الحرارة المحسوسة مقابل الحرارة الكامنة: أثناء تسخين قطعة ثلج من -10 إلى 0°C ترتفع درجة الحرارة (حرارة محسوسة m c ΔT). لكن عند الصفر المئوي بالضبط تستهلك طاقة هائلة لكسر الروابط البلورية دون أي ارتفاع في قراءة الترمومتر (حرارة كامنة m Lf) حتى يتحول الثلج كله إلى ماء!"
      ],
      examTip: "سؤال مضمون في الميدتيرم والفاينال: حساب الإجهاد الحراري σ = Y α ΔT أو حساب درجة الحرارة النهائية لخليط مسعر يحتوي ماء وقطعة ثلج."
    }
  },

  {
    id: 'phys-mod-heat-conduction',
    number: 7,
    division: 'heat_waves',
    divisionBadge: 'الحرارة والموجات (Heat & Waves)',
    titleAr: 'انتقال الحرارة بالتوصيل وقانون فورييه والمقاومة الحرارية',
    titleEn: 'Thermal Conduction, Fourier\'s Law & Composite Wall Resistance',
    icon: 'Activity',
    color: 'from-indigo-600 to-purple-700',
    badge: 'الوحدة 07 • قانون فورييه والعزل الحراري للجدران المركبة',
    summary: 'آليات انتقال الحرارة (التوصيل، الحمل، والإشعاع)، قانون فورييه للتوصيل الحراري في الحالة المستقرة، معامل التوصيل الحراري k، التدرج الحراري (dT/dx)، المقاومة الحرارية R_th ومفهوم التماثل مع الدوائر الكهربية (قانون أوم الحراري)، وسريان الحرارة في الجدران المركبة على التوالي والتوازي.',
    learningObjectives: [
      'Formulate Fourier\'s law of 1D steady heat conduction: dQ/dt = -k A (dT/dx).',
      'Calculate steady heat flow through a uniform slab: H = k A (T_H - T_C) / L.',
      'Apply the thermal resistance analogy: R_th = L / (k A) and H = ΔT / R_th (Thermal Ohm\'s Law).',
      'Determine interface junction temperatures and equivalent thermal resistance for multi-layered composite walls (series and parallel).',
      'Evaluate engineering thermal insulation materials (rockwool, fiberglass, air gaps).'
    ],
    keyFormulas: [
      {
        title: 'Fourier\'s Law of 1D Heat Conduction (Steady State):',
        formula: 'H = \\frac{dQ}{dt} = k A \\frac{T_H - T_C}{L} \\quad [\\text{SI Units: Watts (W) = J/s}]',
        notes: 'k is thermal conductivity [W/(m·K) or W/(m·°C)]. Silver and copper have highest k; aerated concrete and foam have lowest k.'
      },
      {
        title: 'Thermal Resistance Analogy (Thermal Ohm\'s Law):',
        formula: 'R_{\\text{th}} = \\frac{L}{k A} \\implies H = \\frac{\\Delta T}{R_{\\text{th}}} \\quad \\left(\\text{Analogous to } I = \\frac{V}{R}\\right)',
        notes: 'Units of thermal resistance: K/W or °C/W.'
      },
      {
        title: 'Heat Flow Through Multi-layer Composite Wall (Series):',
        formula: 'H = \\frac{T_{\\text{in}} - T_{\\text{out}}}{\\sum R_{\\text{th}}} = \\frac{T_{\\text{in}} - T_{\\text{out}}}{\\frac{L_1}{k_1 A} + \\frac{L_2}{k_2 A} + \\dots + \\frac{L_n}{k_n A}}',
        notes: 'Heat flux rate H is identical across all series layers in steady state.'
      },
      {
        title: 'Interface Temperature Between Two Layers in Series:',
        formula: 'H = \\frac{k_1 A (T_1 - T_x)}{L_1} = \\frac{k_2 A (T_x - T_2)}{L_2} \\implies T_x = \\frac{\\frac{k_1}{L_1} T_1 + \\frac{k_2}{L_2} T_2}{\\frac{k_1}{L_1} + \\frac{k_2}{L_2}}',
        notes: 'Used extensively to check if condensation or freezing occurs inside building insulation layers.'
      }
    ],
    examHotspots: [
      'A composite wall consists of 10 cm brick (k = 0.8 W/m·K) and 5 cm insulation foam (k = 0.04 W/m·K). If inner temp is 25°C and outer is -5°C, find heat loss per square meter and the interface temperature.',
      'Explain why double-glazed windows with an air gap provide superior thermal insulation compared to a single glass pane of double thickness.',
      'Derive the equivalent thermal conductivity k_eq for two slabs of equal thickness L connected in series.'
    ],
    bilingualInsight: {
      titleEn: "Fourier Heat Transfer: Electrical Analogy",
      titleAr: "💡 الفهم والربط الهندسي بالعربي: قانون فورييه والمقاومة الحرارية",
      points: [
        "أروع تماثل فيزيائي يتعلمه المهندس: سريان الحرارة يشبه تماماً سريان التيار الكهربي! فرق درجات الحرارة (ΔT) يقابل فرق الجهد الكهربي (V)، ومعدل تدفق الحرارة (H بالوات) يقابل شدة التيار (I بالأمبير)، والمقاومة الحرارية Rth = L / (kA) تقابل المقاومة الكهربية R = ρ L / A.",
        "حل مسائل الجدران المركبة بلمح البصر: عندما يكون لديك جدار منزل مكون من طوب + عازل صوف صخري + محارة إسمنتية على التوالي، لا ترتبك! احسب Rth لكل طبقة واجمعها كأنها مقاومات كهربية على التوالي: R_total = R1 + R2 + R3، ثم اقسم فرق درجات الحرارة الكلي على R_total فتحصل على كمية الحرارة المفقودة H فوراً!",
        "ثبات معدل الحرارة H في الحالة المستقرة (Steady State): في السريان المستقر، نفس كمية الحرارة التي تعبر الطبقة الأولى يجب أن تعبر الطبقة الثانية ثم الثالثة، مما يمكنك من إيجاد درجة حرارة التلامس بين الطبقتين (Tx) بسهولة تامة بمساواة H1 = H2."
      ],
      examTip: "سؤال فاينال شبرا الدائم (15 درجة): جدار مركب من طبقتين أو ثلاث (طوب + عازل)، يطلب حساب معدل الفقد في المتر المربع ودرجة حرارة السطح الفاصل Tx."
    }
  },

  {
    id: 'phys-mod-thermodynamics',
    number: 8,
    division: 'heat_waves',
    divisionBadge: 'الحرارة والموجات (Heat & Waves)',
    titleAr: 'القانون الأول للديناميكا الحرارية والعمليات الغازية والشغل المبذول',
    titleEn: 'First Law of Thermodynamics, Gas Work Done & Thermodynamic Cycles',
    icon: 'Calculator',
    color: 'from-purple-700 to-indigo-700',
    badge: 'الوحدة 08 • حفظ الطاقة والتغيرات الإيزوبارية والإيزوثرمية والأديباتية',
    summary: 'الأنظمة الديناميكية الحرارية (المفتوحة، المغلقة، والمعزولة)، القانون الأول للديناميكا الحرارية وحفظ الطاقة (ΔU = Q - W)، الطاقة الداخلية لدالة الحالة U(T)، حساب الشغل المبذول في العمليات الغازية: الإيزوبارية (ضغط ثابت)، الإيزوكورية (حجم ثابت)، الإيزوثرمية (حرارة ثابتة)، والأديباتية (معزولة حرارياً Q = 0)، وكفاءة الدورات المغلقة.',
    learningObjectives: [
      'State the First Law of Thermodynamics: ΔU = Q - W with standard sign conventions (Q > 0 absorbed, W > 0 work done by system).',
      'Calculate boundary work done by an expanding or compressing gas: W = ∫ P dV.',
      'Analyze Isobaric processes (P = const, W = P ΔV, Q = n C_p ΔT).',
      'Analyze Isochoric processes (V = const, W = 0, ΔU = Q = n C_v ΔT).',
      'Analyze Isothermal processes (T = const, ΔU = 0, Q = W = n R T ln(V2/V1)).',
      'Analyze Adiabatic processes (Q = 0, P V^γ = const, W = -ΔU = [P1 V1 - P2 V2] / (γ - 1)).'
    ],
    keyFormulas: [
      {
        title: 'First Law of Thermodynamics:',
        formula: '\\Delta U = Q - W \\quad \\text{where } W = \\int_{V_1}^{V_2} P \\, dV',
        notes: 'U is a state function: for ideal gas ΔU = n C_v ΔT depends only on temperature change, regardless of path.'
      },
      {
        title: 'Molar Heat Capacities Relation (Mayer\'s Relation):',
        formula: 'C_p - C_v = R, \\quad \\gamma = \\frac{C_p}{C_v} \\implies C_v = \\frac{R}{\\gamma - 1}, \\quad C_p = \\frac{\\gamma R}{\\gamma - 1}',
        notes: 'For monatomic gas (He, Ar): γ = 5/3 ≈ 1.67. For diatomic gas (N2, O2, Air): γ = 7/5 = 1.40.'
      },
      {
        title: 'Work Done in Gas Processes:',
        formula: 'W_{\\text{isobaric}} = P (V_2 - V_1), \\quad W_{\\text{isothermal}} = n R T \\ln\\left(\\frac{V_2}{V_1}\\right), \\quad W_{\\text{adiabatic}} = \\frac{P_1 V_1 - P_2 V_2}{\\gamma - 1}',
        notes: 'For isochoric process (constant volume), dV = 0, hence W = 0.'
      },
      {
        title: 'Adiabatic Relations (Poisson\'s Laws for Q = 0):',
        formula: 'P V^\\gamma = \\text{Constant}, \\quad T V^{\\gamma - 1} = \\text{Constant}, \\quad T^\\gamma P^{1 - \\gamma} = \\text{Constant}',
        notes: 'In adiabatic expansion, gas cools down (T2 < T1) because work is done at the expense of internal energy.'
      }
    ],
    examHotspots: [
      'Two moles of ideal diatomic gas (γ = 1.4) at 300 K expand isothermally from 2 L to 6 L. Calculate work done, heat added, and change in internal energy.',
      'A gas at 1 atm and 27°C is compressed adiabatically to 1/8 of its original volume. Find the final pressure and final temperature (γ = 1.5).',
      'Explain why the slope of an adiabatic curve on a P-V indicator diagram is steeper than that of an isothermal curve by a factor of γ.'
    ],
    bilingualInsight: {
      titleEn: "Thermodynamics: Energy Conservation Laws",
      titleAr: "💡 الفهم والربط الهندسي بالعربي: القانون الأول للديناميكا الحرارية ومخطط P-V",
      points: [
        "اتفاق الإشارات في امتحان شبرا: انتبه جداً لصيغة القانون ΔU = Q - W. الحرارة الداخلة للنظام موجبة (+Q)، والحرارة الخارجة سالبة (-Q). الشغل الذي يبذله الغاز بالتمدد موجب (+W)، والشغل المبذول عليه بالضغط الخارجي سالب (-W).",
        "الطاقة الداخلية U دالة حالة تعتمد فقط على درجة الحرارة: إذا كانت العملية إيزوثرمية (درجة الحرارة ثابتة T = const)، فإن تغير الطاقة الداخلية ΔU = 0 فوراً، وتتحول كل الحرارة الممتصة إلى شغل ميكانيكي كامل Q = W!",
        "لماذا يبرد الغاز عند التمدد الأديباتي السريع؟ في العمليات الأديباتية (مثل خروج الغاز من بخاخة أو في شوط التمدد بمحرك الديزل)، لا يوجد وقت لتبادل حرارة مع الوسط المحيط (Q = 0). ولأن الغاز يتمدد ويبذل شغلاً موجباً W، فإن القانون الأول يقول ΔU = -W، أي أن الشغل يُدفع مباشرة من الطاقة الداخلية للغاز فتنخفض حرارته فوراً!"
      ],
      examTip: "سؤال فاينال متكرر: رسم دورة حرارية مغلقة على منحنى (P-V) وتحديد الشغل الكلي (وهو المساحة المحصورة داخل منحنى الدورة المغلقة)."
    }
  },

  {
    id: 'phys-mod-shm',
    number: 9,
    division: 'heat_waves',
    divisionBadge: 'الحرارة والموجات (Heat & Waves)',
    titleAr: 'الحركة التوافقية البسيطة (SHM) والبندول البسيط والكتلة والزنبرك',
    titleEn: 'Simple Harmonic Motion (SHM), Pendulum & Mass-Spring Oscillators',
    icon: 'Repeat',
    color: 'from-purple-600 to-indigo-600',
    badge: 'الوحدة 09 • معادلة الحركة والتردد الزاوي وحفظ الطاقة التوافقية',
    summary: 'معادلة الحركة التوافقية البسيطة والشرط الديناميكي (العجلة تتناسب طردياً مع الإزاحة ومعاكسة لها في الاتجاه)، السعة A، التردد الزاوي ω، الزمن الدوري T، البندول البسيط والبندول المركب، اهتزاز كتلة معلقة بزنبرك، وتحولات طاقة الحركة وطاقة الوضع التوافقية.',
    learningObjectives: [
      'Define SHM condition: a = -ω² x and solve differential equation d²x/dt² + ω² x = 0.',
      'Express displacement x(t) = A cos(ω t + φ), velocity v(t) = -A ω sin(ω t + φ), and acceleration a(t) = -A ω² cos(ω t + φ).',
      'Derive period of simple pendulum: T = 2 π sqrt(L/g) for small angular amplitudes (θ < 10°).',
      'Derive period of mass-spring system: T = 2 π sqrt(m/k) and analyze springs in series and parallel.',
      'Verify conservation of mechanical energy in SHM: E_total = K + U = 1/2 m v² + 1/2 k x² = 1/2 k A² = constant.'
    ],
    keyFormulas: [
      {
        title: 'General Equation of SHM:',
        formula: 'x(t) = A \\cos(\\omega t + \\phi) \\implies v = \\pm \\omega \\sqrt{A^2 - x^2}, \\quad a = -\\omega^2 x',
        notes: 'Maximum speed vmax = A ω occurs at equilibrium (x = 0); maximum acceleration amax = A ω² occurs at extremes (x = ±A).'
      },
      {
        title: 'Simple Pendulum Periodic Time:',
        formula: 'T = 2 \\pi \\sqrt{\\frac{L}{g}} \\implies g = \\frac{4 \\pi^2 L}{T^2}, \\quad \\omega = \\sqrt{\\frac{g}{L}}',
        notes: 'Period is independent of the bob\'s mass m and depends solely on string length L and local gravity g.'
      },
      {
        title: 'Mass-Spring Oscillator Periodic Time:',
        formula: 'T = 2 \\pi \\sqrt{\\frac{m}{k}} \\quad \\text{where } k = \\frac{F}{\\Delta x} \\text{ is spring stiffness}',
        notes: 'Springs in parallel: k_eq = k1 + k2. Springs in series: 1/k_eq = 1/k1 + 1/k2.'
      },
      {
        title: 'Total Mechanical Energy in SHM:',
        formula: 'E = K + U = \\frac{1}{2} m v^2 + \\frac{1}{2} k x^2 = \\frac{1}{2} k A^2 = \\frac{1}{2} m \\omega^2 A^2 = \\text{Constant}',
        notes: 'Energy oscillates between pure potential at endpoints and pure kinetic at center.'
      }
    ],
    examHotspots: [
      'A particle executes SHM with amplitude 5 cm and period 2 s. Find its speed and acceleration when displacement is 3 cm from center.',
      'Calculate the length of a "seconds pendulum" whose period is exactly 2.0 s on Earth (g = 9.8 m/s²).',
      'At what displacement x is the kinetic energy of an oscillator equal to three times its potential energy?'
    ],
    bilingualInsight: {
      titleEn: "SHM: Harmonic Resonance & Mechanics",
      titleAr: "💡 الفهم والربط الهندسي بالعربي: الحركة التوافقية البسيطة والاهتزازات",
      points: [
        "الشرط الحتمي لتصنيف أي حركة بأنها توافقية بسيطة (SHM): يجب أن تكون قوة الإرجاع Restoring Force متناسبة طردياً مع الإزاحة وتعاكسها في الاتجاه: F = -k x، وبالتالي تكون العجلة a = -ω² x. الإشارة السالبة تعني أن العجلة تشير دائماً نحو نقطة الاتزان.",
        "تبادل الطاقة التوافقية: عندما يمر الجسم بنقطة الاتزان (x = 0)، تكون طاقة الوضع U = 0 وتصل سرعته لأعلى قيمة vmax = A ω وتكون الطاقة كلها حركية. وعندما يصل لأقصى إزاحة (x = A)، يسكن الجسم لحظياً وتصبح طاقته كلها طاقة وضع مرنة U = 1/2 k A².",
        "البندول في معمل شبرا: تجربة قياس عجلة الجاذبية الأرضية g عن طريق رسم العلاقة البيانية بين طول الخيط L ومربع الزمن الدوري T²، حيث يكون ميل الخط المستقيم Slope = L / T²، ومنه تحسب g = 4 π² × Slope بدقة بالغة."
      ],
      examTip: "سؤال فاينال متكرر: إيجاد الإزاحة x التي تتساوى عندها طاقة الحركة مع طاقة الوضع، والحل الفوري: 1/2 k x² = 1/2 (1/2 k A²) فتكون x = A / √2 ≈ 0.707 A!"
    }
  },

  {
    id: 'phys-mod-acoustics',
    number: 10,
    division: 'heat_waves',
    divisionBadge: 'الحرارة والموجات (Heat & Waves)',
    titleAr: 'الموجات الميكانيكية والصوتية وشدة الصوت وظاهرة دوبلر',
    titleEn: 'Mechanical Waves, Sound Waves, Decibel Scale & Doppler Effect',
    icon: 'Activity',
    color: 'from-indigo-700 to-purple-700',
    badge: 'الوحدة 10 • سرعة الموجات ومستوى الشدة ودوبلر',
    summary: 'طبيعة الموجات الميكانيكية (المستعرضة والطولية)، معادلة الموجة الجيبية المنتقلة، سرعة انتشار الموجات في الأوتار المشدودة والأنابيب والغازات، شدة الصوت I ومستوى شدة الصوت بالديسيبل (dB)، الرنين وتكوين الموجات الموقوفة، وظاهرة دوبلر لانزياح التردد الظاهري.',
    learningObjectives: [
      'Express traveling wave function: y(x, t) = A sin(k x - ω t + φ) with wave number k = 2π/λ and wave speed v = λ f = ω/k.',
      'Calculate speed of transverse waves on a stretched string: v = sqrt(T / μ) where μ = m/L is linear mass density.',
      'Calculate speed of longitudinal sound waves in gases: v = sqrt(γ R T / M).',
      'Compute sound intensity level in decibels: β = 10 log10(I / I0) with hearing threshold I0 = 10^-12 W/m².',
      'Apply Doppler effect formula for moving sources and observers: f\' = f [ (v ± vo) / (v ∓ vs) ].'
    ],
    keyFormulas: [
      {
        title: 'Wave Speed Relationships:',
        formula: 'v = f \\lambda = \\frac{\\omega}{k}, \\quad v_{\\text{string}} = \\sqrt{\\frac{T_{\\text{tension}}}{\\mu}}, \\quad v_{\\text{sound in gas}} = \\sqrt{\\frac{\\gamma R T}{M}}',
        notes: 'In air at 20°C (293 K): v ≈ 343 m/s. Notice speed of sound is directly proportional to sqrt(T).'
      },
      {
        title: 'Sound Intensity & Decibel Scale:',
        formula: 'I = \\frac{\\text{Power}}{4 \\pi r^2} \\quad [\\text{W/m}^2], \\quad \\beta = 10 \\log_{10}\\left(\\frac{I}{I_0}\\right) \\quad [\\text{dB}]',
        notes: 'Threshold of hearing I0 = 10^-12 W/m² (0 dB). If intensity doubles, sound level increases by ~3 dB.'
      },
      {
        title: 'General Doppler Effect Formula:',
        formula: 'f\' = f \\left( \\frac{v \\pm v_o}{v \\mp v_s} \\right)',
        notes: 'Upper signs for approaching (+ vo, - vs -> f\' increases). Lower signs for receding (- vo, + vs -> f\' decreases). v is speed of sound.'
      },
      {
        title: 'Standing Waves in Resonant Air Columns:',
        formula: '\\text{Open Pipe (both ends): } f_n = n \\frac{v}{2 L} \\quad (n = 1, 2, 3), \\quad \\text{Closed Pipe: } f_n = n \\frac{v}{4 L} \\quad (n = 1, 3, 5)',
        notes: 'Open pipes produce all harmonics; pipes closed at one end produce only odd harmonics.'
      }
    ],
    examHotspots: [
      'An ambulance siren emits sound at 800 Hz. If the ambulance speeds towards a stationary pedestrian at 30 m/s, find the frequency heard by the pedestrian (v = 340 m/s).',
      'The sound level at 5 m from a machine is 80 dB. What will be the sound level at a distance of 50 m?',
      'Calculate the fundamental resonant frequency of an open organ pipe of length 0.85 m when temperature is 27°C.'
    ],
    bilingualInsight: {
      titleEn: "Acoustics & Waves: Frequency Dynamics",
      titleAr: "💡 الفهم والربط الهندسي بالعربي: الصوت والديسيبل وظاهرة دوبلر",
      points: [
        "لماذا نقيس الصوت بمقياس لوغاريتمي (Decibel dB)؟ لأن الأذن البشرية تتمتع بمدى حساسية مذهل يمتد من أضعف همسة مسموعة (10^-12 W/m²) وحتى عتبة الألم وانفجار طبلة الأذن (1 W/m²)، أي بنسبة 1 إلى تريليون! المقياس اللوغاريتمي يضغط هذا المدى الهائل ليصبح من 0 إلى 120 ديسيبل فقط.",
        "القاعدة الذهبية لظاهرة دوبلر (Doppler Effect): عند الاقتراب (سواء تحرك المصدر أو السامع)، تنضغط الموجات ويسمع الراصد تردداً أعلى ونغمة أرفع (Pitch حاد: f' > f). وعند الابتعاد تتباعد قمم الموجات ويسمع الراصد تردداً أقل ونغمة أغلظ (Pitch منخفض: f' < f).",
        "تطبيقات دوبلر في الهندسة: رادارات قياس سرعة السيارات على الطرق السريعة، وأجهزة السونار في الغواصات، وجهاز الإيكو (Echocardiogram) في المستشفيات لقياس سرعة تدفق الدم داخل صمامات القلب بدقة فائقة."
      ],
      examTip: "سؤال فاينال شبرا المضمون (12 درجة): مسألة دوبلر لقطار أو سيارة شرطة تقترب ثم تبتعد عن راصد واقف، مع حساب النسبة بين الترددين f'_approach / f'_recede."
    }
  }
];

export const PHYSICS_EXAM_TIPS = [
  {
    title: "التحقق البعدي الفوري من القوانين والحلول (Dimensional Homogeneity)",
    tip: "قبل كتابة إجابتك النهائية في أي مسألة ميكانيكا أو حرارة، تأكد أن وحدات الناتج تطابق الكمية المطلوبة. مثلاً: وحدات معامل اللزوجة η هي Pa·s = kg/(m·s)، ومعامل التوتر السطحي N/m = kg/s²، ومعامل فورييه W/(m·K)."
  },
  {
    title: "الفرق بين القطرة والفقاعة في التوتر السطحي (Excess Pressure)",
    tip: "في مسائل التوتر السطحي: انتبه فوراً لنوع الجسم! إذا كانت قطرة سائل أو فقاعة هواء داخل سائل فلها سطح حر واحد فقط ΔP = 2γ/r. أما فقاعة صابون في الهواء فلها سطحان حران وتأخذ 4γ/r."
  },
  {
    title: "مقاومة التوصيل الحراري كدائرة كهربية (Thermal Resistance Analogy)",
    tip: "في مسائل الجدران المركبة: تعامل مع الطبقات كأنها مقاومات أومية على التوالي R_th = L / (k A). اجمع المقاومات للحصول على R_total، ثم قسّم فرق درجات الحرارة الإجمالي على R_total لحساب معدل فقد الحرارة H."
  },
  {
    title: "إشارات ظاهرة دوبلر التلقائية (Doppler Sign Rule)",
    tip: "تذكر دائماً: 'الاقتراب يزيد التردد، والابتعاد يقلل التردد'. لكي يزيد التردد عند اقتراب المصدر، يجب أن يصغر المقام، لذا نستخدم الإشارة السالبة في المقام (v - vs)."
  }
];
