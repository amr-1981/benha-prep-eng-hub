// Comprehensive Curriculum Data for Engineering Mathematics 1 (Calculus & Algebra)
// Tailored Exclusively for Faculty of Engineering at Shoubra (FES) - Benha University (Term 1)

export const MATH_INFO = {
  universityAr: "جامعة بنها",
  universityEn: "Benha University",
  facultyNameAr: "كلية الهندسة بشبرا",
  facultyNameEn: "Faculty of Engineering at Shoubra (FES)",
  shortName: "هندسة شبرا",
  departmentAr: "قسم الرياضيات والفيزياء الهندسية",
  departmentEn: "Department of Engineering Mathematics & Physics",
  subjectTitleAr: "الرياضيات 1 (حساب التفاضل والجبر والهندسة الفراغية)",
  subjectTitleEn: "Engineering Mathematics 1 (Calculus, Algebra & 3D Geometry)",
  code: "MTH 001",
  term: "الفصل الدراسي الأول",
  prepYear: "الفرقة الإعدادية (إعدادي هندسة شبرا)",
  gradingSystem: "150 درجة إجمالية (ميدتيرم 30 + كويزات وشيتات 20 + حضور ومشاريع 10 + فاينال تحريري 90)"
};

export const MATH_DIVISIONS = [
  {
    id: "all",
    titleAr: "المنهج الشامل للرياضيات 1",
    titleEn: "Complete Engineering Mathematics 1 Syllabus",
    shortTitleAr: "الكل (التفاضل + الجبر معاً)",
    shortTitleEn: "Unified Math 1",
    badge: "المنهج كاملاً (150 درجة)",
    icon: "Sparkles",
    color: "from-blue-600 to-indigo-600",
    borderColor: "border-blue-500/40",
    description: "تصفح كافة موضوعات ونظريات وحاسبات وشيتات فرعي التفاضل والجبر والهندسة الفراغية معاً."
  },
  {
    id: "calculus",
    titleAr: "الفرع الأول: حساب التفاضل والتطبيقات الهندسية",
    titleEn: "Branch 1: Differential Calculus & Applications",
    shortTitleAr: "التفاضل والتطبيقات",
    shortTitleEn: "Calculus",
    badge: "حساب التفاضل (Calculus)",
    icon: "TrendingUp",
    color: "from-cyan-600 to-blue-600",
    borderColor: "border-cyan-500/40",
    modulesCount: 5,
    topics: [
      "الدوال والنهايات والاتصال (Functions, Limits & Continuity)",
      "قواعد الاشتقاق والمشتقات النونية ونظرية لايبنتز (Leibniz Theorem)",
      "متسلسلات تايلور وماكلورين ونظريات القيمة المتوسطة (Taylor & Maclaurin)",
      "تطبيقات التفاضل ورسم المنحنيات وخطوط التقارب (Curve Sketching & Asymptotes)",
      "الاشتقاق الجزئي ونظرية أويلر للدوال المتجانسة (Partial Differentiation)"
    ],
    description: "يشمل: النهايات المتقدمة وقاعدة لوبيتال، مشتقة الضرب النونية للايبنتز، متسلسلات القوى، نصف قطر الانحناء، ونظرية أويلر."
  },
  {
    id: "algebra",
    titleAr: "الفرع الثاني: الجبر الخطي والأعداد المركبة والهندسة الفراغية",
    titleEn: "Branch 2: Linear Algebra, Complex Numbers & 3D Geometry",
    shortTitleAr: "الجبر والهندسة الفراغية",
    shortTitleEn: "Algebra & 3D Geometry",
    badge: "الجبر والهندسة الفراغية",
    icon: "Boxes",
    color: "from-purple-600 to-pink-600",
    borderColor: "border-purple-500/40",
    modulesCount: 5,
    topics: [
      "المصفوفات ورتبة المصفوفة وحل الأنظمة الخطية (Matrices & Gauss Elimination)",
      "الأعداد المركبة ونظرية ديموافر وجذور الوحدة (Complex Numbers & De Moivre)",
      "نظرية ذات الحدين لأي أس والكسور الجزئية (Binomial Theorem & Partial Fractions)",
      "نظرية المعادلات والعلاقة بين الجذور والمعاملات (Theory of Equations)",
      "الهندسة التحليلية في الفراغ ثلاثي الأبعاد: المستقيم والمستوى والكرة (3D Geometry)"
    ],
    description: "يشمل: مقلوب المصفوفة وحذف غاوس-جوردان، صيغة أويلر والقوى المركبة، تحليل الكسور، ومعادلات المستوى والخط والكرة في 3D."
  }
];

export const MATH_MODULES = [
  // ==================== BRANCH 1: CALCULUS ====================
  {
    id: "math-mod-limits",
    number: 1,
    division: "calculus",
    divisionBadge: "تفاضل وتكامل (Calculus)",
    titleAr: "الدوال والنهايات وقاعدة لوبيتال",
    titleEn: "Functions, Limits, Continuity & L'Hôpital's Rule",
    icon: "Activity",
    color: "from-cyan-600 to-blue-600",
    badge: "الوحدة 01 • أساس التفاضل",
    summary: "دراسة مجال ومدى الدوال الهندسية، الدوال الفردية والزوجية والعكسية، وحساب النهايات الصعبة للحالات غير المعينة باستخدام قاعدة لوبيتال والتحويلات اللوغاريتمية.",
    learningObjectives: [
      "Determine Domain and Range for algebraic, rational, trigonometric, and logarithmic functions.",
      "Evaluate indeterminate limit forms (0/0, ∞/∞, 0·∞, ∞-∞, 1^∞, 0^0, ∞^0) rigorously using L'Hôpital's Rule.",
      "Analyze continuity and types of discontinuities (removable, jump, essential) at critical boundary points.",
      "Differentiate composite and inverse trigonometric functions [arcsin(x), arctan(x), arccos(x)]."
    ],
    keyFormulas: [
      {
        title: "L'Hôpital's Rule for Indeterminate Quotients:",
        formula: "\\lim_{x \\to c} \\frac{f(x)}{g(x)} = \\lim_{x \\to c} \\frac{f'(x)}{g'(x)} \\quad \\text{when form is } \\left[\\frac{0}{0}\\right] \\text{ or } \\left[\\frac{\\infty}{\\infty}\\right]",
        notes: "Differentiate numerator and denominator separately with respect to x. Do NOT use the quotient rule here!"
      },
      {
        title: "Exponential Indeterminate Form [1^∞, 0^0, ∞^0]:",
        formula: "y = [f(x)]^{g(x)} \\implies \\ln y = g(x) \\cdot \\ln f(x) \\implies \\lim y = e^{\\lim [g(x) \\cdot \\ln f(x)]}",
        notes: "Convert 0 · (±∞) into a quotient (0 / [1/∞]) to apply L'Hôpital's rule."
      },
      {
        title: "Standard Fundamental Trigonometric Limits:",
        formula: "\\lim_{x \\to 0} \\frac{\\sin ax}{x} = a, \\quad \\lim_{x \\to 0} \\frac{\\tan ax}{x} = a, \\quad \\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2} = \\frac{1}{2}",
        notes: "Angles must strictly be in radians."
      }
    ],
    examHotspots: [
      "Evaluate lim as x->0 of (tan x - x) / (x - sin x) - classical double L'Hôpital exam question (Answer = 2).",
      "Evaluate lim as x->0 of (cos x)^(1/x^2) using natural log transformation (Answer = e^(-1/2)).",
      "Find the domain and range of f(x) = sqrt(9 - x^2) / (x - 1)."
    ],
    bilingualInsight: {
      titleEn: "Limits & L'Hôpital: Conceptual Intuition",
      titleAr: "💡 الفهم الهندسي والفيزيائي بالعربي: النهايات وقاعدة لوبيتال",
      points: [
        "لماذا نحتاج النهايات في الهندسة؟ لأن معظم القوانين الفيزيائية والهندسية (مثل السرعة اللحظية ومعدل التدفق والانفعال) تُعرف كنسبة كميتين تقتربان من الصفر (0/0)، والنهاية هي الأداة الرياضية الوحيدة لاستكشاف السلوك الفعلي عند تلك النقطة الحرجة.",
        "فكرة قاعدة لوبيتال: عندما يقترب كل من البسط والمقام من الصفر، فإن النسبة بينهما تقترب من النسبة بين معدلي تغيرهما (سرعتي اقترابهما من الصفر)، وهو ما تمثله مشتقتاهما f'(x) / g'(x).",
        "التعامل مع الصيغ الأسية (1^∞): الرقم 1 المرفوع لما لا نهاية ليس 1 كما يظن البعض، لأن الأساس يقترب من 1 ولا يساويه تماماً! لذا نأخذ اللوغاريتم الطبيعي ln لتحويل الأس إلى معامل ضرب ثم نطبق لوبيتال."
      ],
      examTip: "سؤال متكرر في شبرا: لا تطبق لوبيتال إلا بعد التعويض المباشر والتأكد 100% أن الناتج كمية غير معينة. إذا طبقتها على ناتج محدد ستعطي إجابة خاطئة تماماً!"
    }
  },

  {
    id: "math-mod-leibniz",
    number: 2,
    division: "calculus",
    divisionBadge: "تفاضل وتكامل (Calculus)",
    titleAr: "المشتقات العليا ونظرية لايبنتز",
    titleEn: "Higher-Order Derivatives & Leibniz's Theorem",
    icon: "TrendingUp",
    color: "from-blue-600 to-indigo-600",
    badge: "الوحدة 02 • سؤال امتحان إجباري",
    summary: "استنتاج المشتقة النونية (n-th derivative) للدوال القياسية وتطبيق نظرية لايبنتز لحساب المشتقة من الرتبة n لحاصل ضرب دالتين وإثبات المتطابقات التفاضلية.",
    learningObjectives: [
      "Derive the general n-th derivative formula for standard functions: e^(ax), sin(ax+b), cos(ax+b), (ax+b)^m, ln(ax+b).",
      "Apply Leibniz's Theorem to compute the n-th derivative of products [u · v] using binomial coefficients.",
      "Solve classical differential identity proofs by forming differential equations and differentiating n times.",
      "Evaluate y^(n)(0) at x = 0 by establishing recurrence relations."
    ],
    keyFormulas: [
      {
        title: "Leibniz's Theorem for n-th Derivative of a Product:",
        formula: "(u \\cdot v)^{(n)} = \\sum_{r=0}^{n} \\binom{n}{r} u^{(n-r)} v^{(r)} = u^{(n)} v + n u^{(n-1)} v' + \\frac{n(n-1)}{2!} u^{(n-2)} v'' + \\dots + u v^{(n)}",
        notes: "Choose v as the polynomial function whose derivatives eventually terminate to zero!"
      },
      {
        title: "n-th Derivative of Sine and Cosine:",
        formula: "\\frac{d^n}{dx^n} [\\sin(ax + b)] = a^n \\sin\\left(ax + b + \\frac{n\\pi}{2}\\right), \\quad \\frac{d^n}{dx^n} [\\cos(ax + b)] = a^n \\cos\\left(ax + b + \\frac{n\\pi}{2}\\right)",
        notes: "Each differentiation advances the phase angle by π/2 (90 degrees)."
      },
      {
        title: "n-th Derivative of Logarithmic and Rational Functions:",
        formula: "\\frac{d^n}{dx^n} [\\ln(ax + b)] = \\frac{(-1)^{n-1} (n-1)! a^n}{(ax + b)^n}, \\quad \\frac{d^n}{dx^n} [(ax + b)^{-1}] = \\frac{(-1)^n n! a^n}{(ax + b)^{n+1}}",
        notes: "Valid for n >= 1."
      }
    ],
    examHotspots: [
      "If y = (x^2 - 1)^n, prove that (x^2 - 1) y^(n+2) + 2x y^(n+1) - n(n+1) y^(n) = 0 (Rodrigues' formula problem).",
      "Find the n-th derivative of y = x^2 · e^(3x) using Leibniz's rule.",
      "If y = sin(m arcsin x), prove (1 - x^2) y_(n+2) - (2n+1) x y_(n+1) + (m^2 - n^2) y_n = 0, then find y^(n)(0)."
    ],
    bilingualInsight: {
      titleEn: "Leibniz Theorem: The Secret Strategy",
      titleAr: "💡 الفهم الهندسي والفيزيائي بالعربي: سر نظرية لايبنتز",
      points: [
        "ما هي نظرية لايبنتز ببساطة؟ هي تعميم لنظرية ذات الحدين (Binomial Theorem) ولكن على مؤثر التفاضل بدلاً من الأسس الجبرية لحساب مشتقة حاصل ضرب دالتين من أي رتبة عيارية n.",
        "القاعدة الذهبية للاختيار: دائماً اختر الدالة كثير الحدود (مثل x^2 أو x^3) لتكون v، واختر الدالة الدورية أو الأسية لتكون u. لماذا؟ لأن مشتقات v ستتلاشى وتصبح صفراً بعد خطوتين أو ثلاث، فيختصر القانون الطويل إلى حدود معدودة!",
        "سر إثباتات شبرا الشهيرة: إذا كان المطلوب إثبات معادلة فيها y_(n+2)، نبدأ باشتقاق الدالة الأصلية مرتين حتى تظهر y''، ثم نتخلص من الجذور والكسور بضرب المعادلة في المقام، ثم نطبق لايبنتز n مرة على كل حد."
      ],
      examTip: "سؤال فاينال إجباري مضمون 15 درجة: مسألة y = sin(m arcsin x) أو y = cos(m ln x). رتب حدود لايبنتز بعناية وستحصل على الدرجة كاملة."
    }
  },

  {
    id: "math-mod-series",
    number: 3,
    division: "calculus",
    divisionBadge: "تفاضل وتكامل (Calculus)",
    titleAr: "متسلسلات تايلور وماكلورين ونظريات القيمة المتوسطة",
    titleEn: "Taylor & Maclaurin Series & Mean Value Theorems",
    icon: "Layers",
    color: "from-indigo-600 to-purple-600",
    badge: "الوحدة 03 • تقريب الدوال",
    summary: "توليد مفكوكات القوى للدوال الهندسية عند نقطة الأصل (ماكلورين) أو أي نقطة اختيارية (تايلور)، مع دراسة نظريات رول ولاجرانج وكوشي للقيمة المتوسطة.",
    learningObjectives: [
      "State and apply Rolle's Theorem, Lagrange's MVT, and Cauchy's Generalized MVT.",
      "Expand elementary and composite functions into Maclaurin series up to x^4 or x^5 terms.",
      "Construct Taylor series expansions around x = a with Remainder estimation.",
      "Use power series for approximating definite integrals and evaluating indeterminate limits."
    ],
    keyFormulas: [
      {
        title: "Maclaurin Series Expansion (Expansion about x = 0):",
        formula: "f(x) = f(0) + f'(0) x + \\frac{f''(0)}{2!} x^2 + \\frac{f'''(0)}{3!} x^3 + \\dots + \\frac{f^{(n)}(0)}{n!} x^n + \\dots",
        notes: "Standard series: e^x = Σ x^n/n!, sin x = x - x^3/3! + x^5/5!, cos x = 1 - x^2/2! + x^4/4!, ln(1+x) = x - x^2/2 + x^3/3! - ..."
      },
      {
        title: "Taylor Series Expansion (Expansion about x = a):",
        formula: "f(x) = f(a) + f'(a)(x - a) + \\frac{f''(a)}{2!}(x - a)^2 + \\dots + \\frac{f^{(n)}(a)}{n!}(x - a)^n + R_n(x)",
        notes: "Also written in increment form: f(a + h) = f(a) + h f'(a) + (h^2 / 2!) f''(a) + ..."
      },
      {
        title: "Lagrange's Mean Value Theorem (MVT):",
        formula: "f'(c) = \\frac{f(b) - f(a)}{b - a} \\quad \\text{for at least one } c \\in (a, b)",
        notes: "Requires f(x) continuous on [a, b] and differentiable on (a, b). Geometrically: tangent is parallel to secant."
      }
    ],
    examHotspots: [
      "Expand f(x) = e^(x) · cos x in ascending powers of x up to x^4 using Maclaurin series.",
      "Find the expansion of ln(cos x) about x = 0 up to x^4.",
      "Verify Rolle's Theorem for f(x) = (x - 1)(x - 2)(x - 3) on [1, 3] and find all values of c."
    ],
    bilingualInsight: {
      titleEn: "Taylor Series & MVT: Intuition",
      titleAr: "💡 الفهم الهندسي والفيزيائي بالعربي: متسلسلات تايلور والقيمة المتوسطة",
      points: [
        "لماذا نحتاج متسلسلات تايلور في الهندسة؟ أجهزة الكمبيوتر ومعالجات الصواريخ والسيارات لا تفهم الدوال المثلثية أو اللوغاريتمية المعقدة كـ sin(x) أو ln(x)؛ تايلور يحول هذه الدوال المعقدة إلى مجرد جمع وضرب بسيط لكثيرات حدود (Polynomials) يسهل حسابها بدقة فائقة في الميكروثانية!",
        "نظرية رول (Rolle's Theorem): فكرتها الفيزيائية بسيطة جداً؛ إذا قذفت كرة لأعلى وعادت لنفس الارتفاع، فلا بد أنها في لحظة ما في المنتصف وصلت لأعلى نقطة وتوقفت تماماً وسرعتها أصبحت صفراً (f'(c) = 0).",
        "نظرية لاجرانج (Lagrange MVT): تعني أنه إذا قطعت سيارة مسافة 120 كم في ساعة واحدة، فلا بد أن عداد سرعتها سجل في لحظة ما سرعة 120 كم/ساعة بالضبط (السرعة اللحظية ساوت السرعة المتوسطة)."
      ],
      examTip: "طريقة سريعة للامتحان: بدلاً من اشتقاق الدالة 4 مرات بمشقة، إذا كانت الدالة حاصل ضرب دالتين معروفتين (مثل e^x · cos x)، اكتب مفكوك e^x ومفكوك cos x ثم اضرب القوسين في بعض واجمع قوى x حتى الرتبة المطلوبة."
    }
  },

  {
    id: "math-mod-curve",
    number: 4,
    division: "calculus",
    divisionBadge: "تفاضل وتكامل (Calculus)",
    titleAr: "تطبيقات التفاضل ورسم المنحنيات والانحناء",
    titleEn: "Applications of Differentiation: Curve Sketching & Curvature",
    icon: "Compass",
    color: "from-purple-600 to-pink-600",
    badge: "الوحدة 04 • هندسة المنحنيات",
    summary: "التحليل الهندسي الكامل للدوال: التزايد والتناقص، التحدب ونقاط الانقلاب، خطوط التقارب الأفقية والرأسية والمائلة، وحساب نصف قطر الانحناء ودائرة الانحناء.",
    learningObjectives: [
      "Calculate all types of Asymptotes: Vertical (poles), Horizontal (limits at ±∞), and Oblique (y = mx + c).",
      "Determine intervals of increase/decrease, local extrema (First & Second derivative tests).",
      "Analyze concavity (upward/downward) and find Points of Inflection via f''(x).",
      "Calculate the Radius of Curvature ρ and the coordinates of the Center of Curvature (X_c, Y_c)."
    ],
    keyFormulas: [
      {
        title: "Radius of Curvature (Cartesian Coordinates):",
        formula: "\\rho = \\frac{[1 + (y')^2]^{3/2}}{|y''|}, \\quad \\kappa = \\frac{1}{\\rho} \\quad (\\text{Curvature})",
        notes: "At points where y' = 0, the formula simplifies to ρ = 1 / |y''|."
      },
      {
        title: "Oblique (Slant) Asymptote Formula y = mx + c:",
        formula: "m = \\lim_{x \\to \\pm\\infty} \\frac{f(x)}{x}, \\quad c = \\lim_{x \\to \\pm\\infty} [f(x) - m x]",
        notes: "Occurs in rational functions when degree of numerator is exactly one higher than denominator."
      },
      {
        title: "Center of Curvature (α, β):",
        formula: "\\alpha = x - \\frac{y'[1 + (y')^2]}{y''}, \\quad \\beta = y + \\frac{1 + (y')^2}{y''}",
        notes: "The circle of curvature has radius ρ and center (α, β)."
      }
    ],
    examHotspots: [
      "Find the radius of curvature of the catenary y = c · cosh(x/c) at the vertex x = 0 (Answer: ρ = c).",
      "Sketch the curve y = (x^2 + 1) / (x^2 - 1) identifying all asymptotes, extrema, and concavity.",
      "Find all asymptotes of y = x + 1 / (x - 2)."
    ],
    bilingualInsight: {
      titleEn: "Curve Sketching & Curvature: Practical Application",
      titleAr: "💡 الفهم الهندسي والفيزيائي بالعربي: رسم المنحنيات ونصف قطر الانحناء",
      points: [
        "التطبيق الهندسي لنصف قطر الانحناء (ρ): يستخدمه مهندسو الطرق والكباري والسكك الحديدية لتصميم المنحنيات عند المنعطفات؛ حتى لا تنقلب السيارات والقطارات بفعل قوة الطرد المركزي، يجب ألا يقل نصف قطر الانحناء عن قيمة معيارية معينة.",
        "خطوط التقارب (Asymptotes): هي مسارات استرشادية وهمية يقترب منها المنحنى اقتراباً لا نهائياً دون أن يمسها، وتدل على حدود استقرار المنظومة الهندسية.",
        "نقطة الانقلاب (Inflection Point): هي النقطة التي يتغير عندها شكل المنحنى من مقعر لأعلى (يحبس الماء) إلى مقعر لأسفل (يسكب الماء)، وتحدث عندما تنعدم المشتقة الثانية f''(x) = 0 مع تغير إشارتها."
      ],
      examTip: "خطوة امتحان ذكية: قبل البدء برسم أي منحنى، افحص التماثل (Symmetry) أولاً؛ إذا كانت f(-x) = f(x) فالدالة متماثلة حول محور الصادات y، مما يوفر نصف وقت الرسم والحل!"
    }
  },

  {
    id: "math-mod-partial",
    number: 5,
    division: "calculus",
    divisionBadge: "تفاضل وتكامل (Calculus)",
    titleAr: "الاشتقاق الجزئي ونظرية أويلر",
    titleEn: "Partial Differentiation & Euler's Theorem",
    icon: "GitFork",
    color: "from-teal-600 to-cyan-600",
    badge: "الوحدة 05 • دوال المتغيرات المتعددة",
    summary: "دراسة دوال المتغيرين والثلاثة، المشتقات الجزئية من الرتب العليا، قاعدة السلسلة متعددة المسارات، ونظرية أويلر للدوال المتجانسة وتطبيقاتها.",
    learningObjectives: [
      "Calculate first and higher-order partial derivatives: ∂f/∂x, ∂f/∂y, ∂²f/∂x², ∂²f/∂y∂x.",
      "Verify Clairaut-Schwarz theorem on equality of mixed partials: ∂²f/∂x∂y = ∂²f/∂y∂x.",
      "Apply the Multivariable Chain Rule for composite functions z = f(u(t), v(t)).",
      "State, verify, and apply Euler's Theorem on Homogeneous Functions of degree n."
    ],
    keyFormulas: [
      {
        title: "Euler's Theorem on Homogeneous Functions (First Order):",
        formula: "x \\frac{\\partial u}{\\partial x} + y \\frac{\\partial u}{\\partial y} = n u(x, y)",
        notes: "Where u(x, y) is a homogeneous function of degree n, meaning u(tx, ty) = t^n u(x, y)."
      },
      {
        title: "Euler's Theorem (Second Order Extension):",
        formula: "x^2 \\frac{\\partial^2 u}{\\partial x^2} + 2xy \\frac{\\partial^2 u}{\\partial x \\partial y} + y^2 \\frac{\\partial^2 u}{\\partial y^2} = n(n - 1) u(x, y)",
        notes: "Saves massive tedious differentiation in exam problems!"
      },
      {
        title: "Total Differential dz:",
        formula: "dz = \\frac{\\partial z}{\\partial x} dx + \\frac{\\partial z}{\\partial y} dy",
        notes: "Used in error analysis and thermodynamics: Δz ≈ (∂z/∂x) Δx + (∂z/∂y) Δy."
      }
    ],
    examHotspots: [
      "If u = arcsin[(x + y) / (sqrt(x) + sqrt(y))], prove that x (∂u/∂x) + y (∂u/∂y) = (1/2) tan u.",
      "If u = ln[(x^4 + y^4) / (x + y)], prove x (∂u/∂x) + y (∂u/∂y) = 3.",
      "Verify Euler's Theorem for u = (x^2 y^2) / (x + y)."
    ],
    bilingualInsight: {
      titleEn: "Partial Derivatives & Euler: Conceptual Meaning",
      titleAr: "💡 الفهم الهندسي والفيزيائي بالعربي: التفاضل الجزئي ونظرية أويلر",
      points: [
        "لماذا نحتاج التفاضل الجزئي؟ في الواقع العملي، لا توجد كمية هندسية تعتمد على متغير واحد فقط؛ فضغط الغاز P يعتمد على الحجم V ودرجة الحرارة T، وإجهاد العمود يعتمد على الطول والعرض والحمل. التفاضل الجزئي يتيح لنا دراسة أثر متغير واحد مع تثبيت باقي المتغيرات كأنها ثوابت مؤقتة.",
        "سحر نظرية أويلر للدوال المتجانسة: تخيل مسألة كسرية معقدة تحتاج لصفحتين لحساب مشتقاتها، نظرية أويلر تمكنك من كتابة الناتج في سطر واحد بمجرد تحديد درجة التجانس n!",
        "التعامل مع الدوال غير المتجانسة ذات الدوال العكسية (مثل u = arcsin(z)): لا تطبق أويلر على u مباشرة، بل خذ sin للطرفين: sin u = z، حيث z دالة متجانسة من الدرجة n، ثم طبق أويلر لتحصل فوراً على: x ∂u/∂x + y ∂u/∂y = n · tan u."
      ],
      examTip: "سؤال متكرر سنوياً في امتحانات شبرا: يأتيك إثبات يحتوي على x ∂u/∂x + y ∂u/∂y، تذكر فوراً أن الحل يكمن في نظرية أويلر وليس التفاضل اليدوي المطول."
    }
  },

  // ==================== BRANCH 2: ALGEBRA & 3D GEOMETRY ====================
  {
    id: "math-mod-matrices",
    number: 6,
    division: "algebra",
    divisionBadge: "جبر وهندسة فراغية (Algebra)",
    titleAr: "المصفوفات ورتبة المصفوفة وحل المعادلات الخطية",
    titleEn: "Matrices, Rank & Systems of Linear Equations",
    icon: "Grid",
    color: "from-purple-600 to-indigo-600",
    badge: "الوحدة 06 • عمود الجبر الخطي",
    summary: "دراسة جبر المصفوفات، المحددات، مصفوفة المعاملات المرافقة، مقلوب المصفوفة A^(-1)، رتبة المصفوفة (Rank)، وحل منظومات المعادلات الخطية بحذف غاوس-جوردان وطريقة كرامر.",
    learningObjectives: [
      "Compute matrix operations, determinants, and matrix inverses using the Adjoint Matrix method: A^(-1) = adj(A) / |A|.",
      "Transform matrices to Row Echelon Form (REF) and Reduced Row Echelon Form (RREF) using Elementary Row Operations.",
      "Determine the Rank of a Matrix [Rank(A)] and check system consistency using Rouché-Capelli Theorem.",
      "Solve homogeneous and non-homogeneous linear systems: Unique solution, Infinitely many solutions (parameterized), or No solution."
    ],
    keyFormulas: [
      {
        title: "Matrix Inverse Formula:",
        formula: "A^{-1} = \\frac{1}{|A|} \\text{adj}(A) = \\frac{1}{|A|} [C_{ij}]^T \\quad \\text{provided } |A| \\neq 0",
        notes: "Where C_ij = (-1)^(i+j) M_ij is the cofactor of element a_ij."
      },
      {
        title: "Rouché-Capelli Consistency Criterion for A · X = B:",
        formula: "\\begin{cases} \\text{Rank}(A) = \\text{Rank}(A|B) = n & \\implies \\text{Unique Solution} \\\\ \\text{Rank}(A) = \\text{Rank}(A|B) = r < n & \\implies \\text{Infinitely Many Solutions } (n-r \\text{ parameters}) \\\\ \\text{Rank}(A) < \\text{Rank}(A|B) & \\implies \\text{Inconsistent (No Solution)} \\end{cases}",
        notes: "Where n is the number of unknowns and (A|B) is the Augmented Matrix."
      },
      {
        title: "Cramer's Rule for n = 3:",
        formula: "x = \\frac{\\Delta_x}{\\Delta}, \\quad y = \\frac{\\Delta_y}{\\Delta}, \\quad z = \\frac{\\Delta_z}{\\Delta} \\quad (\\Delta = |A| \\neq 0)",
        notes: "Fast for 2x2 and 3x3 systems."
      }
    ],
    examHotspots: [
      "Find values of λ and μ for which the system [x + y + z = 6, x + 2y + 3z = 10, x + 2y + λz = μ] has: (i) unique solution, (ii) infinite solutions, (iii) no solution.",
      "Find the rank of matrix A using elementary row operations and reduce it to echelon form.",
      "Solve the linear system using Gauss-Jordan elimination."
    ],
    bilingualInsight: {
      titleEn: "Linear Systems & Matrix Rank: Real-World Role",
      titleAr: "💡 الفهم الهندسي والفيزيائي بالعربي: المصفوفات والرتبة وحل المعادلات",
      points: [
        "أين تظهر المصفوفات في الهندسة؟ في تحليل الدوائر الكهربية (قوانين كيرشوف للتيارات والجهود)، وتحليل المنشآت والجمالونات (Trusses) في الهندسة المدنية، وبرمجة الجرافيكس ثلاثي الأبعاد والذكاء الاصطناعي. جميعها تتحول إلى أنظمة معادلات خطية A·X = B.",
        "ماذا تعني رتبة المصفوفة (Rank)؟ الرتبة هي عدد المعادلات المستقلة حقاً التي تحتوي على معلومات جديدة مفيدة. إذا كان لديك 3 معادلات ولكن المعادلة الثالثة مجرد حاصل جمع الأولى والثانية، فإن الرتبة تساوي 2 لأن المعادلة الثالثة تكرار لا فائدة منه!",
        "سر مسألة الثوابت الشهيرة (λ و μ): نضع المصفوفة الموسعة (A|B) ثم نجري عمليات الصف البسيط حتى يصبح الصف الأخير على الصورة: [0  0  (λ - 3) | (μ - 10)]. إذا كان λ = 3 و μ ≠ 10، يظهر تناقض [0 = رقم] فيكون لا يوجد حل."
      ],
      examTip: "سؤال كلاسيكي في هندسة شبرا (20 درجة): مسألة فحص قيم المعاملات λ و μ. تمرن جيداً على تثبيت الأصفار أسفل القطر الرئيسي."
    }
  },

  {
    id: "math-mod-complex",
    number: 7,
    division: "algebra",
    divisionBadge: "جبر وهندسة فراغية (Algebra)",
    titleAr: "الأعداد المركبة ونظرية ديموافر",
    titleEn: "Complex Numbers & De Moivre's Theorem",
    icon: "Zap",
    color: "from-pink-600 to-rose-600",
    badge: "الوحدة 07 • كيمياء الرياضيات الكهربية",
    summary: "التمثيل الهندسي للأعداد المركبة على مخطط أرجاند، الصورة القطبية والأسية (أويلر)، تطبيق نظرية ديموافر لحساب القوى العليا، واستخراج الجذور النونية وجذور الوحدة الصحيحة.",
    learningObjectives: [
      "Convert complex numbers between Cartesian form (x + iy), Polar form [r(cos θ + i sin θ)], and Exponential form (r e^(iθ)).",
      "Apply De Moivre's Theorem to simplify powers: [cos θ + i sin θ]^n = cos(nθ) + i sin(nθ).",
      "Calculate all n-th roots of a complex number: z^(1/n) distributed symmetrically on the Argand plane.",
      "Derive trigonometric expansions for cos(nθ) and sin(nθ) in terms of powers of cos θ and sin θ, and vice versa."
    ],
    keyFormulas: [
      {
        title: "De Moivre's Theorem for Any Integer n:",
        formula: "[r (\\cos \\theta + i \\sin \\theta)]^n = r^n [\\cos(n\\theta) + i \\sin(n\\theta)] = r^n e^{i n \\theta}",
        notes: "r = |z| = sqrt(x^2 + y^2), θ = arg(z) = arctan(y / x) adjusted for quadrant."
      },
      {
        title: "n-th Roots of Complex Number z = r e^(i θ):",
        formula: "z_k = \\sqrt[n]{r} \\left[ \\cos\\left(\\frac{\\theta + 2k\\pi}{n}\\right) + i \\sin\\left(\\frac{\\theta + 2k\\pi}{n}\\right) \\right], \\quad k = 0, 1, 2, \\dots, n - 1",
        notes: "The n roots form the vertices of a regular polygon of n sides inscribed in a circle of radius r^(1/n)."
      },
      {
        title: "Roots of Unity (Cube roots of 1: 1, ω, ω²):",
        formula: "1 + \\omega + \\omega^2 = 0, \\quad \\omega^3 = 1, \\quad \\omega = \\frac{-1 + i\\sqrt{3}}{2}, \\quad \\omega^2 = \\frac{-1 - i\\sqrt{3}}{2}",
        notes: "Extremely useful in factoring algebraic equations."
      }
    ],
    examHotspots: [
      "Find all values of (1 + i)^(1/3) and plot them on the Argand diagram.",
      "Express cos^5 θ in terms of cosines of multiples of θ using Euler identities.",
      "If (x + iy)^3 = u + iv, prove that u/x + v/y = 4(x^2 - y^2)."
    ],
    bilingualInsight: {
      titleEn: "Complex Numbers: The Electrical Engineering Engine",
      titleAr: "💡 الفهم الهندسي والفيزيائي بالعربي: الأعداد المركبة ونظرية ديموافر",
      points: [
        "لماذا يدرس المهندسون الأعداد المركبة؟ في الهندسة الكهربية وهندسة الاتصالات والميكاترونكس، يمثل الجزء الحقيقي Real المقاومة R، ويمثل الجزء التخيلي Imaginary المفاعلة الحثية والسعوية X (المعاوقة Z = R + jX). تحليل دوائر التيار المتردد AC مستحيل بدون الأعداد المركبة!",
        "روعة نظرية ديموافر: الضرب في المستوى المركب يعني ببساطة جمع الزوايا وضرب الأطوال؛ بدلاً من فك قوس مرفوع لأس 10 بالضرب المطول، نرفع نصف القطر r لأس 10 ونضرب الزاوية θ في 10 فقط!",
        "التناظر الهندسي للجذور النونية: جذور أي عدد مركب z^(1/n) ليست أرقاماً عشوائية، بل تشكل دائماً رؤوس مضلع منتظم متساوي الأضلاع يقع داخل دائرة مركزها نقطة الأصل، وتفصل بين كل جذر والذي يليه زاوية ثابتة مقدارها (2π/n)."
      ],
      examTip: "انتبه لزاوية الربع (Quadrant): إذا كان x سالباً (الربع الثاني والثالث)، فإن الزاوية ليست مجرد arctan(y/x)، بل يجب إضافة π أو طرح π لتحديد الزاوية الصحيحة على مخطط أرجاند."
    }
  },

  {
    id: "math-mod-induction",
    number: 8,
    division: "algebra",
    divisionBadge: "جبر وهندسة فراغية (Algebra)",
    titleAr: "الاستقراء الرياضي ونظرية ذات الحدين والكسور الجزئية",
    titleEn: "Mathematical Induction, Binomial Theorem & Partial Fractions",
    icon: "Repeat",
    color: "from-amber-600 to-orange-600",
    badge: "الوحدة 08 • التقنيات الجبرية",
    summary: "إثبات القضايا الرياضية بالاستقراء التام، مفكوك ذات الحدين للأسس الكسرية والسالبة وشروط التقارب (|x| < 1)، وتفكيك الدوال الكسرية إلى كسور جزئية قياسية.",
    learningObjectives: [
      "Prove mathematical propositions and summation formulas using the Principle of Mathematical Induction (Base step, Hypothesis, Inductive step).",
      "Expand (1 + x)^n for negative and rational powers n when |x| < 1.",
      "Approximate roots and evaluate numerical expressions using the Binomial expansion.",
      "Decompose rational algebraic fractions into partial fractions for all denominator cases (linear, repeated linear, irreducible quadratic)."
    ],
    keyFormulas: [
      {
        title: "Binomial Theorem for Any Rational Index n (|x| < 1):",
        formula: "(1 + x)^n = 1 + n x + \\frac{n(n - 1)}{2!} x^2 + \\frac{n(n - 1)(n - 2)}{3!} x^3 + \\dots + \\frac{n(n - 1)\\dots(n - r + 1)}{r!} x^r + \\dots",
        notes: "Infinite series valid only when |x| < 1. If (a + x)^n, factor out a^n first: a^n (1 + x/a)^n."
      },
      {
        title: "Common Binomial Expansions:",
        formula: "(1 - x)^{-1} = 1 + x + x^2 + x^3 + \\dots, \\quad (1 + x)^{-1} = 1 - x + x^2 - x^3 + \\dots, \\quad (1 - x)^{-2} = 1 + 2x + 3x^2 + 4x^3 + \\dots",
        notes: "Crucial in integration and series summation."
      },
      {
        title: "Mathematical Induction Principle:",
        formula: "\\text{Step 1: Verify } P(1) \\implies \\text{Step 2: Assume } P(k) \\text{ true} \\implies \\text{Step 3: Prove } P(k+1) \\text{ true}",
        notes: "Concludes that P(n) is true for all integers n >= 1."
      }
    ],
    examHotspots: [
      "Prove by induction that 7^(2n) + (2^(3n-3)) · (3^(n-1)) is divisible by 25 for all n >= 1.",
      "Expand 1 / sqrt(4 - x) in ascending powers of x up to x^3, stating the interval of convergence.",
      "Resolve (x^2 + 1) / [(x - 1)^2 (x^2 + 4)] into partial fractions."
    ],
    bilingualInsight: {
      titleEn: "Induction & Binomial: Logical Structure",
      titleAr: "💡 الفهم الهندسي والفيزيائي بالعربي: الاستقراء ونظرية ذات الحدين",
      points: [
        "تشبيه قطع الدومينو للاستقراء الرياضي: إذا أثبتنا أن القطعة الأولى تسقط (P(1))، وأثبتنا أن أي قطعة تسقط ستسقط القطعة التي تليها حتماً (P(k) -> P(k+1))، فإن جميع قطع الدومينو ستسقط بلا استثناء إلى ما لا نهاية!",
        "شرط التقارب في ذات الحدين (|x| < 1): عندما يكون الأس سالباً أو كسرياً، المفكوك لا ينتهي بل يصبح متسلسلة لا نهائية؛ ولكي يكون لها مجموع حقيقي ولا تتباعد للما لا نهاية، يجب أن يكون المتغير أصغر من 1.",
        "الكسور الجزئية في الهندسة: تمثل الخطوة التحضيرية الإجبارية قبل إجراء التكاملات الصعبة أو تحويلات لابلاس (Laplace Transforms) في التحكم الآلي والأنظمة الديناميكية."
      ],
      examTip: "خطأ شائع في الفاينال: عند فك (2 + x)^(-1)، لا تبدأ بالفك مباشرة! يجب أخذ 2 عامل مشترك أولاً لتصبح: 2^(-1) · (1 + x/2)^(-1) ويكون شرط التقارب |x/2| < 1 أي |x| < 2."
    }
  },

  {
    id: "math-mod-equations",
    number: 9,
    division: "algebra",
    divisionBadge: "جبر وهندسة فراغية (Algebra)",
    titleAr: "نظرية المعادلات وجذور كثيرات الحدود",
    titleEn: "Theory of Equations & Polynomial Roots",
    icon: "Target",
    color: "from-rose-600 to-red-600",
    badge: "الوحدة 09 • حل المعادلات الجبرية",
    summary: "دراسة العلاقات الجبرية بين جذور ومعاملات المعادلات التكعيبية والرباعية، قاعدة ديكارت للإشارات، وتحويل المعادلات لتكوين معادلات جديدة بجذور معدلة.",
    learningObjectives: [
      "Relate roots and coefficients for cubic [ax^3 + bx^2 + cx + d = 0] and quartic polynomial equations.",
      "Solve cubic equations whose roots are in Arithmetic Progression (A.P.), Geometric Progression (G.P.), or Harmonic Progression (H.P.).",
      "Apply Descartes' Rule of Signs to determine the maximum number of positive and negative real roots.",
      "Transform equations: Remove the second term, increase/decrease roots by h, or form equations whose roots are squares/reciprocals of the original roots."
    ],
    keyFormulas: [
      {
        title: "Root-Coefficient Relations for Cubic ax^3 + bx^2 + cx + d = 0:",
        formula: "\\Sigma \\alpha = \\alpha + \\beta + \\gamma = -\\frac{b}{a}, \\quad \\Sigma \\alpha\\beta = \\alpha\\beta + \\beta\\gamma + \\gamma\\alpha = \\frac{c}{a}, \\quad \\alpha\\beta\\gamma = -\\frac{d}{a}",
        notes: "If roots are in A.P., assume roots as (a - d, a, a + d). If in G.P., assume (a/r, a, ar)."
      },
      {
        title: "Removal of the Second Term (x^(n-1)):",
        formula: "h = -\\frac{a_1}{n \\cdot a_0} \\quad \\text{substitute } x = y + h",
        notes: "Reduces cubic x^3 + b x^2 + c x + d = 0 to y^3 + p y + q = 0."
      },
      {
        title: "Descartes' Rule of Signs:",
        formula: "\\text{Max Positive Roots} = \\text{Number of sign variations in } f(x), \\quad \\text{Max Negative Roots} = \\text{Variations in } f(-x)",
        notes: "Complex roots always appear in conjugate pairs (α ± iβ) for polynomials with real coefficients."
      }
    ],
    examHotspots: [
      "Solve the equation 2x^3 - x^2 - 22x - 20 = 0 given that two of its roots are in the ratio 3 : 4.",
      "Solve x^3 - 12x^2 + 39x - 28 = 0 given that its roots are in Arithmetic Progression.",
      "Transform the equation x^3 - 6x^2 + 11x - 6 = 0 into one whose roots are diminished by 2."
    ],
    bilingualInsight: {
      titleEn: "Theory of Equations: Intuitive Meaning",
      titleAr: "💡 الفهم الهندسي والفيزيائي بالعربي: نظرية المعادلات وجذور كثيرات الحدود",
      points: [
        "أهمية جذور المعادلات: جذور كثيرات الحدود هي نقاط الاتزان والترددات الطبيعية (Eigenfrequencies) في المنظومات الاهتزازية الميكانيكية وشبكات الطاقة؛ ومواقع الجذور (سواء كانت موجبة أو سالبة أو مركبة) تحدد ما إذا كان المبنى أو الدائرة مستقرة أم ستنهار اهتزازياً!",
        "خدعة المتتابعة الحسابية (A.P.): إذا علمت أن الجذور في متتابعة حسابية، افترضها (a - d, a, a + d)؛ عند جمع الجذور يختفي d فوراً ويتبقى: 3a = -b/a فتحصل على أحد الجذور a في خطوة واحدة!",
        "قاعدة ديكارت للإشارات: تمنحك كشفاً مبدئياً سريعاً لعدد الجذور الحقيقية الموجبة والسالبة والتخيلية بمجرد عد مرات تغير الإشارة بين حدود المعادلة."
      ],
      examTip: "سؤال متكرر: تذكر أن الجذور التخيلية والجذور الصماء غير النسبية (مثل a + sqrt(b)) تظهر دائماً في أزواج مترافقة متماثلة؛ فإذا كان 2 + 3i جذراً، فإن 2 - 3i جذر مؤكد بدون تفكير."
    }
  },

  {
    id: "math-mod-geometry3d",
    number: 10,
    division: "algebra",
    divisionBadge: "جبر وهندسة فراغية (Algebra)",
    titleAr: "الهندسة التحليلية في الفراغ ثلاثي الأبعاد",
    titleEn: "Solid Analytical Geometry in 3D: Lines, Planes & Spheres",
    icon: "Box",
    color: "from-blue-700 to-cyan-700",
    badge: "الوحدة 10 • الفراغية ثلاثية الأبعاد",
    summary: "الهندسة الاتجاهية في الفضاء ثلاثي الأبعاد: جيوب تمام الاتجاه، معادلة الخط المستقيم (المتماثلة والبارامترية)، معادلة المستوى العام ومستويات الإحداثيات، والأوضاع النسبية والمسافات والزوايا ومعادلة الكرة.",
    learningObjectives: [
      "Calculate Direction Cosines (l, m, n) and Direction Ratios (a, b, c) where l^2 + m^2 + n^2 = 1.",
      "Formulate equations of Straight Lines in 3D (Vector, Parametric, and Symmetric forms).",
      "Formulate the general equation of a Plane in 3D: A(x - x0) + B(y - y0) + C(z - z0) = 0 and Intercept form (x/a + y/b + z/c = 1).",
      "Calculate shortest perpendicular distance from a point to a plane, and shortest distance between two skew lines.",
      "Formulate and analyze the equation of a Sphere in 3D: (x - a)^2 + (y - b)^2 + (z - c)^2 = R^2."
    ],
    keyFormulas: [
      {
        title: "General Equation of a Plane in 3D:",
        formula: "A x + B y + C z + D = 0 \\quad \\text{where } \\vec{N} = \\langle A, B, C \\rangle \\text{ is the Normal Vector}",
        notes: "Plane through 3 points (x1, y1, z1), (x2, y2, z2), (x3, y3, z3) is given by a 3x3 determinant = 0."
      },
      {
        title: "Perpendicular Distance from Point (x1, y1, z1) to Plane Ax + By + Cz + D = 0:",
        formula: "d = \\frac{|A x_1 + B y_1 + C z_1 + D|}{\\sqrt{A^2 + B^2 + C^2}}",
        notes: "If d = 0, the point lies on the plane."
      },
      {
        title: "Equations of a Straight Line in 3D passing through (x0, y0, z0) with direction (a, b, c):",
        formula: "\\frac{x - x_0}{a} = \\frac{y - y_0}{b} = \\frac{z - z_0}{c} = t \\quad (\\text{Symmetric & Parametric})",
        notes: "Angle θ between two planes with normals N1 and N2: cos θ = |N1 · N2| / (|N1| |N2|)."
      },
      {
        title: "Equation of a Sphere with Center (a, b, c) and Radius R:",
        formula: "(x - a)^2 + (y - b)^2 + (z - c)^2 = R^2 \\implies x^2 + y^2 + z^2 + 2ux + 2vy + 2wz + d = 0",
        notes: "Center is (-u, -v, -w) and Radius R = sqrt(u^2 + v^2 + w^2 - d)."
      }
    ],
    examHotspots: [
      "Find the equation of the plane passing through (1, 1, 1) and perpendicular to the two planes x - 2y + z = 2 and 2x - y - z = 3.",
      "Find the perpendicular distance from point (2, 3, -1) to the plane 3x - 4y + 12z + 5 = 0.",
      "Find the coordinates of the point of intersection of the line (x-1)/2 = (y+1)/-1 = (z-3)/4 with the plane 2x + 4y - z + 1 = 0."
    ],
    bilingualInsight: {
      titleEn: "3D Geometry: The Spatial Engineering Language",
      titleAr: "💡 الفهم الهندسي والفيزيائي بالعربي: الهندسة الفراغية ثلاثية الأبعاد",
      points: [
        "لماذا نحتاج الهندسة الفراغية؟ الهندسة المدنية والعمارة والميكانيكا وهندسة الطيران لا تعمل في صفحة ورقية ثنائية الأبعاد، بل في الفضاء الحقيقي (X, Y, Z). تصميم الأعمدة، الأسطح المائلة، مسارات الطائرات، وحركة أذرع الروبوتات يتم التعبير عنها كمعادلات خطوط ومستويات في 3D.",
        "المفهوم الحاسم للمستوى: المتجه العمودي Normal Vector هو هوية المستوى؛ إذا عرفت المتجه العمودي عليه N = (A, B, C) ونقطة يمر بها، فقد كتبت معادلته بالكامل في ثانية واحدة: A(x-x0) + B(y-y0) + C(z-z0) = 0.",
        "الخط المستقيم في 3D: في الفراغ، لا يمكن التعبير عن الخط المستقيم بمعادلة واحدة أبداً! بل يحتاج لمعادلتين (تقاطع مستويين) أو بالصورة المتماثلة بنسبة متساوية لمعامل الاتجاه (a, b, c)."
      ],
      examTip: "سؤال فاينال شبرا المضمون (15 درجة): إيجاد معادلة مستوى عمودي على مستويين ويمر بنقطة؛ نأخذ الضرب الاتجاهي Cross Product لمتجهي العمودي للمستويين المعطيين (N1 × N2) لنحصل فوراً على المتجه العمودي للمستوى المطلوب N!"
    }
  }
];
