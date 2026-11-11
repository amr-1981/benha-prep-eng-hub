// Interactive Exam & Midterm MCQ Bank for Engineering Mathematics 1 (MTH 001)
// Faculty of Engineering at Shoubra (FES) - Benha University
// Preparatory Year (Term 1)

export const MATH_QUIZ_QUESTIONS = [
  {
    id: "mq1",
    module: "math-mod-limits",
    division: "calculus",
    topic: "النهايات غير المعينة وقاعدة لوبيتال",
    questionEn: "Evaluate the limit: lim [x → 0] (1 + 3x)^(2/x)",
    optionsEn: [
      "e^6",
      "e^3",
      "e^2",
      "1"
    ],
    explanationEn: "This is the indeterminate form 1^∞. Let y = (1 + 3x)^(2/x). Taking the natural logarithm: ln(y) = (2/x) · ln(1 + 3x) = 2 · [ln(1 + 3x) / x]. As x → 0, by L'Hôpital's rule or standard limit lim [ln(1+u)/u] = 1, lim ln(y) = 2 · 3 = 6. Exponentiating back gives lim y = e^6.",
    question: "احسب النهاية التالية: lim [x → 0] (1 + 3x)^(2/x)",
    options: [
      "e^6",
      "e^3",
      "e^2",
      "1"
    ],
    correctIndex: 0,
    explanation: "هذه صيغة غير معينة من النوع (1^∞). نأخذ اللوغاريتم الطبيعي لكلا الطرفين: ln(y) = (2/x) ln(1+3x) = 2 [ln(1+3x)/x]. بتطبيق قاعدة لوبيتال أو النهاية القياسية ينتج 2 × 3 = 6، وبالرفع للأس e نحصل على الناتج النهائي e^6."
  },
  {
    id: "mq2",
    module: "math-mod-leibniz",
    division: "calculus",
    topic: "نظرية لايبنتز والمشتقات العليا",
    questionEn: "If y = x² · e^(2x), what is the general n-th derivative y^(n) using Leibniz's theorem?",
    optionsEn: [
      "2^n · e^(2x) · [x² + n x + n(n-1)/4]",
      "2^n · e^(2x) · [x² + 2n x + n²]",
      "2^(n-1) · e^(2x) · [x² + n x]",
      "2^n · e^(2x) · [x² + n(n-1)/2]"
    ],
    explanationEn: "By Leibniz's theorem, with u = e^(2x) and v = x²: y^(n) = u^(n) v + n u^(n-1) v' + [n(n-1)/2] u^(n-2) v''. Here u^(k) = 2^k e^(2x), v' = 2x, and v'' = 2 (all higher derivatives of v are 0). Substituting: y^(n) = 2^n e^(2x) x² + n · 2^(n-1) e^(2x) · (2x) + [n(n-1)/2] · 2^(n-2) e^(2x) · 2 = 2^n e^(2x) [x² + n x + n(n-1)/4].",
    question: "إذا كانت y = x² · e^(2x)، فما هي المشتقة النونية العامة y^(n) باستخدام نظرية لايبنتز؟",
    options: [
      "2^n · e^(2x) · [x² + n x + n(n-1)/4]",
      "2^n · e^(2x) · [x² + 2n x + n²]",
      "2^(n-1) · e^(2x) · [x² + n x]",
      "2^n · e^(2x) · [x² + n(n-1)/2]"
    ],
    correctIndex: 0,
    explanation: "نطبق نظرية لايبنتز بوضع u = e^(2x) و v = x². مشتقات v تتوقف بعد المشتقة الثانية v'' = 2. بالتعويض: y^(n) = 2^n e^(2x) [x² + n x + n(n-1)/4]."
  },
  {
    id: "mq3",
    module: "math-mod-series",
    division: "calculus",
    topic: "متسلسلات ماكلورين وتايلور",
    questionEn: "What is the coefficient of x⁴ in the Maclaurin series expansion of f(x) = cos(2x)?",
    optionsEn: [
      "2/3",
      "-2/3",
      "1/24",
      "16"
    ],
    explanationEn: "The standard Maclaurin series for cos(u) is ∑ [k=0 to ∞] (-1)^k u^(2k) / (2k)! = 1 - u²/2! + u⁴/4! - ... Substituting u = 2x: the x⁴ term is (2x)⁴ / 4! = 16 x⁴ / 24 = (2/3) x⁴. Hence the coefficient of x⁴ is 2/3.",
    question: "ما هو معامل x⁴ في مفكوك ماكلورين للدالة f(x) = cos(2x)؟",
    options: [
      "2/3",
      "-2/3",
      "1/24",
      "16"
    ],
    correctIndex: 0,
    explanation: "مفكوك cos(u) هو 1 - u²/2! + u⁴/4! - ... بوضع u = 2x، الحد الذي يحتوي على x⁴ هو (2x)⁴ / 24 = 16/24 x⁴ = (2/3) x⁴، إذن المعامل هو 2/3."
  },
  {
    id: "mq4",
    module: "math-mod-curve",
    division: "calculus",
    topic: "نصف قطر الانحناء وخطوط التقارب",
    questionEn: "Find the radius of curvature ρ of the parabola y = 2x² at the origin (0, 0):",
    optionsEn: [
      "1/4",
      "1/2",
      "4",
      "0"
    ],
    explanationEn: "Differentiating: y' = 4x and y'' = 4. At the origin (0, 0), y' = 0 and y'' = 4. The radius of curvature formula is ρ = [1 + (y')²]^(3/2) / |y''| = [1 + 0]^(3/2) / 4 = 1/4.",
    question: "احسب نصف قطر الانحناء ρ للمنحنى y = 2x² عند نقطة الأصل (0, 0):",
    options: [
      "1/4",
      "1/2",
      "4",
      "0"
    ],
    correctIndex: 0,
    explanation: "المشتقة الأولى y' = 4x وتساوي 0 عند الأصل. المشتقة الثانية y'' = 4. نصف قطر الانحناء ρ = [1 + (y')²]^(3/2) / |y''| = 1 / 4."
  },
  {
    id: "mq5",
    module: "math-mod-partial",
    division: "calculus",
    topic: "الاشتقاق الجزئي ونظرية أويلر",
    questionEn: "If u(x, y) = (x³ + y³) / (x + y), what is the value of x · (∂u/∂x) + y · (∂u/∂y)?",
    optionsEn: [
      "2 u",
      "3 u",
      "u",
      "0"
    ],
    explanationEn: "Function u(x, y) is homogeneous of degree n = 3 - 1 = 2 because u(tx, ty) = t² u(x, y). By Euler's theorem for homogeneous functions of degree n, x (∂u/∂x) + y (∂u/∂y) = n · u = 2 u.",
    question: "إذا كانت u(x, y) = (x³ + y³) / (x + y)، فما قيمة المقدار x · (∂u/∂x) + y · (∂u/∂y)؟",
    options: [
      "2 u",
      "3 u",
      "u",
      "0"
    ],
    correctIndex: 0,
    explanation: "الدالة متجانسة من الدرجة n = 3 - 1 = 2 لأن البسط من الدرجة 3 والمقام من الدرجة 1. وبناء على نظرية أويلر للدوال المتجانسة: x (∂u/∂x) + y (∂u/∂y) = n · u = 2u."
  },
  {
    id: "mq6",
    module: "math-mod-matrices",
    division: "algebra",
    topic: "المصفوفات والمحددات",
    questionEn: "If A is a 3 × 3 matrix such that det(A) = 4, what is the value of det(3 · A^(-1))?",
    optionsEn: [
      "27/4",
      "3/4",
      "108",
      "12"
    ],
    explanationEn: "For an n × n matrix (here n = 3) and scalar k = 3: det(k M) = k^n · det(M). Therefore, det(3 · A^(-1)) = 3³ · det(A^(-1)) = 27 · (1 / det(A)) = 27 / 4.",
    question: "إذا كانت A مصفوفة مربعة من الرتبة 3 × 3 وكان det(A) = 4، فما قيمة det(3 · A^(-1))؟",
    options: [
      "27/4",
      "3/4",
      "108",
      "12"
    ],
    correctIndex: 0,
    explanation: "لأي مصفوفة من الرتبة n=3 وثابت k=3: det(k M) = k³ det(M). وبما أن det(A^(-1)) = 1/det(A)، ينتج: det(3 A^(-1)) = 3³ × (1/4) = 27/4."
  },
  {
    id: "mq7",
    module: "math-mod-matrices",
    division: "algebra",
    topic: "رتبة المصفوفة والأنظمة الخطية",
    questionEn: "A non-homogeneous linear system of 3 equations in 3 unknowns AX = B has rank(A) = 2 and rank([A|B]) = 3. What is the nature of the solutions?",
    optionsEn: [
      "No solution (System is inconsistent)",
      "A unique solution",
      "Infinitely many solutions with 1 free parameter",
      "Infinitely many solutions with 2 free parameters"
    ],
    explanationEn: "According to the Rouché–Capelli theorem, a linear system is consistent if and only if rank(A) = rank([A|B]). Since rank(A) = 2 < rank([A|B]) = 3, the augmented matrix contains a contradiction row of the form [0 0 0 | b] with b ≠ 0, meaning the system has No Solution (Inconsistent).",
    question: "نظام معادلات خطية غير متجانس مكون من 3 معادلات في 3 مجاهيل AX = B، وجد أن rank(A) = 2 وأن rank([A|B]) = 3. ما طبيعة الحلول؟",
    options: [
      "مستحيل الحل (لا يوجد أي حل)",
      "حل وحيد",
      "عدد لا نهائي من الحلول مع بارامتر حر واحد",
      "عدد لا نهائي من الحلول مع بارامترين حرين"
    ],
    correctIndex: 0,
    explanation: "طبقاً لنظرية روشيه-كابيلي، يكون النظام متسقاً فقط إذا تساوت رتبة المصفوفة المعاملة مع رتبة المصفوفة الموسعة. بما أن rank(A) = 2 < rank([A|B]) = 3، فإن النظام متناقض ومستحيل الحل."
  },
  {
    id: "mq8",
    module: "math-mod-complex",
    division: "algebra",
    topic: "الأعداد المركبة والصورة القطبية",
    questionEn: "Convert the complex number z = -√3 - i into exponential form r · e^(i θ):",
    optionsEn: [
      "2 · e^(-i 5π/6)",
      "2 · e^(i 5π/6)",
      "2 · e^(-i π/6)",
      "4 · e^(-i 5π/6)"
    ],
    explanationEn: "Modulus: r = √((-√3)² + (-1)²) = √(3 + 1) = 2. Since both real part (-√3) and imaginary part (-1) are negative, z lies in the 3rd quadrant. The reference angle is tan^(-1)(1/√3) = π/6. In the 3rd quadrant, the principal argument is θ = -π + π/6 = -5π/6. Hence z = 2 · e^(-i 5π/6).",
    question: "حول العدد المركب z = -√3 - i إلى الصورة الأسية r · e^(i θ):",
    options: [
      "2 · e^(-i 5π/6)",
      "2 · e^(i 5π/6)",
      "2 · e^(-i π/6)",
      "4 · e^(-i 5π/6)"
    ],
    correctIndex: 0,
    explanation: "المقياس r = √(3 + 1) = 2. بما أن الجزء الحقيقي سالب والتخيلي سالب فالعدد يقع في الربع الثالث. زاوية الإسناد π/6، والزاوية الأساسية في الربع الثالث هي -π + π/6 = -5π/6، إذن z = 2 e^(-i 5π/6)."
  },
  {
    id: "mq9",
    module: "math-mod-complex",
    division: "algebra",
    topic: "نظرية ديموافر وقوى الأعداد المركبة",
    questionEn: "Using De Moivre's theorem, evaluate the value of (1 + i)^12:",
    optionsEn: [
      "-64",
      "64",
      "-64 i",
      "64 i"
    ],
    explanationEn: "In polar form: 1 + i = √2 · e^(i π/4). Raising to the 12th power: (1 + i)^12 = (√2)^12 · e^(i 12π/4) = 2^6 · e^(i 3π) = 64 · [cos(3π) + i sin(3π)] = 64 · (-1 + 0) = -64.",
    question: "باستخدام نظرية ديموافر، احسب قيمة المقدار (1 + i)^12:",
    options: [
      "-64",
      "64",
      "-64 i",
      "64 i"
    ],
    correctIndex: 0,
    explanation: "العدد 1+i بصورته القطبية هو √2 e^(i π/4). برفع الطرفين للأس 12: (√2)^12 × e^(i 3π) = 64 × (cos 3π + i sin 3π) = 64 × (-1) = -64."
  },
  {
    id: "mq10",
    module: "math-mod-complex",
    division: "algebra",
    topic: "جذور الوحدة التكعيبية",
    questionEn: "If ω is a complex cube root of unity (ω ≠ 1), what is the value of (1 - ω + ω²) · (1 + ω - ω²)?",
    optionsEn: [
      "4",
      "-4",
      "1",
      "0"
    ],
    explanationEn: "Using the fundamental identity 1 + ω + ω² = 0: 1 + ω² = -ω, so the first factor becomes (-ω - ω) = -2ω. Also 1 + ω = -ω², so the second factor becomes (-ω² - ω²) = -2ω². The product is (-2ω) · (-2ω²) = 4 · ω³ = 4 · 1 = 4.",
    question: "إذا كانت ω أحد الجذور التكعيبية المركبة للواحد الصحيح (ω ≠ 1)، فما قيمة (1 - ω + ω²) · (1 + ω - ω²)؟",
    options: [
      "4",
      "-4",
      "1",
      "0"
    ],
    correctIndex: 0,
    explanation: "من متطابقة الجذور التكعيبية: 1 + ω + ω² = 0. ينتج أن 1 + ω² = -ω، فيصبح القوس الأول (-2ω). وينتج أن 1 + ω = -ω²، فيصبح القوس الثاني (-2ω²). حاصل ضربهما: (-2ω) × (-2ω²) = 4 ω³ = 4 × 1 = 4."
  },
  {
    id: "mq11",
    module: "math-mod-geometry3d",
    division: "algebra",
    topic: "جيوب تمام الاتجاه في الفراغ",
    questionEn: "A straight line makes angles α = 45° and β = 60° with the positive X and Y axes respectively. What acute angle γ does it make with the Z axis?",
    optionsEn: [
      "60°",
      "45°",
      "30°",
      "90°"
    ],
    explanationEn: "By the direction cosines identity: cos²(α) + cos²(β) + cos²(γ) = 1. Substituting: cos²(45°) + cos²(60°) + cos²(γ) = (1/√2)² + (1/2)² + cos²(γ) = 1/2 + 1/4 + cos²(γ) = 3/4 + cos²(γ) = 1. Thus cos²(γ) = 1/4 ⟹ cos(γ) = 1/2 (for acute angle), so γ = 60°.",
    question: "خط مستقيم يصنع زاويتين α = 45° و β = 60° مع المحورين X و Y الموجبين. ما الزاوية الحادة γ التي يصنعها مع محور Z؟",
    options: [
      "60°",
      "45°",
      "30°",
      "90°"
    ],
    correctIndex: 0,
    explanation: "نطبق متطابقة جيوب تمام الاتجاه: cos²(α) + cos²(β) + cos²(γ) = 1. بالتعويض: 1/2 + 1/4 + cos²(γ) = 1 ⟹ cos²(γ) = 1/4 ⟹ cos(γ) = 1/2، إذن الزاوية الحادة γ = 60°."
  },
  {
    id: "mq12",
    module: "math-mod-geometry3d",
    division: "algebra",
    topic: "المسافة العمودية بين نقطة ومستوى",
    questionEn: "Calculate the perpendicular distance from point P(1, 2, 3) to the plane 2x - 2y + z + 5 = 0:",
    optionsEn: [
      "2",
      "3",
      "6",
      "1"
    ],
    explanationEn: "The perpendicular distance formula is d = |A x0 + B y0 + C z0 + D| / √(A² + B² + C²). Here (x0, y0, z0) = (1, 2, 3) and plane is 2x - 2y + z + 5 = 0. Numerator: |2(1) - 2(2) + 1(3) + 5| = |2 - 4 + 3 + 5| = |6| = 6. Denominator: √(2² + (-2)² + 1²) = √(4 + 4 + 1) = √9 = 3. Therefore, d = 6 / 3 = 2.",
    question: "احسب البعد العمودي من النقطة P(1, 2, 3) إلى المستوى 2x - 2y + z + 5 = 0:",
    options: [
      "2",
      "3",
      "6",
      "1"
    ],
    correctIndex: 0,
    explanation: "قانون البعد العمودي d = |Ax0 + By0 + Cz0 + D| / √(A² + B² + C²). البسط = |2(1) - 2(2) + 3 + 5| = 6. المقام = √(4 + 4 + 1) = 3. إذن البعد = 6 / 3 = 2."
  }
];
