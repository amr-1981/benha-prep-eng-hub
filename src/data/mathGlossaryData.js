// Comprehensive Glossary, Theorems, Laws & Flashcards Bank for Engineering Mathematics 1 (MTH 001)
// Tailored Exclusively for Faculty of Engineering at Shoubra (FES) - Benha University (Term 1)

export const MATH_GLOSSARY_MODULES = [
  { id: 'all', label: 'جميع وحدات الرياضيات 1 (10 وحدات)', icon: 'Sparkles', color: 'text-cyan-400' },
  { id: 'limits', label: '١. الدوال والنهايات ولوبيتال', icon: 'Activity', color: 'text-blue-400' },
  { id: 'leibniz', label: '٢. المشتقات العليا ونظرية لايبنتز', icon: 'TrendingUp', color: 'text-indigo-400' },
  { id: 'series', label: '٣. متسلسلات تايلور والقيمة المتوسطة', icon: 'Layers', color: 'text-purple-400' },
  { id: 'curve', label: '٤. رسم المنحنيات ونصف قطر الانحناء', icon: 'Compass', color: 'text-pink-400' },
  { id: 'partial', label: '٥. التفاضل الجزئي ونظرية أويلر', icon: 'GitFork', color: 'text-teal-400' },
  { id: 'matrices', label: '٦. المصفوفات ورتبة المصفوفة وغوس', icon: 'Grid', color: 'text-amber-400' },
  { id: 'complex', label: '٧. الأعداد المركبة ونظرية ديموافر', icon: 'Zap', color: 'text-rose-400' },
  { id: 'induction', label: '٨. الاستقراء ونظرية ذات الحدين', icon: 'Repeat', color: 'text-emerald-400' },
  { id: 'equations', label: '٩. نظرية المعادلات وجذور كثيرات الحدود', icon: 'Target', color: 'text-orange-400' },
  { id: 'geometry3d', label: '١٠. الفراغية: المستقيم والمستوى والكرة', icon: 'Box', color: 'text-cyan-400' }
];

export const MATH_GLOSSARY_TYPES = [
  { id: 'all', label: 'الكل (نظريات + قوانين + تعليلات)' },
  { id: 'definition', label: '📖 نظريات ومفاهيم رياضية (Theorems & Definitions)' },
  { id: 'law', label: '📐 قوانين وصيغ رياضية (Formulas & Equations)' },
  { id: 'reasoning', label: '❓ تعليلات وأسرار خطوات الحل (Why & Insights)' }
];

export const MATH_GLOSSARY_ITEMS = [
  // ==================== 1. LIMITS & CONTINUITY ====================
  {
    id: 'm-limits-01',
    module: 'limits',
    division: 'calculus',
    type: 'definition',
    termEn: "L'Hôpital's Rule",
    definitionEn: 'A fundamental theorem in differential calculus stating that for functions approaching indeterminate forms 0/0 or ±∞/±∞, the limit of their quotient equals the limit of the quotient of their derivatives, provided that limit exists.',
    formula: '\\lim_{x \\to c} \\frac{f(x)}{g(x)} = \\lim_{x \\to c} \\frac{f\'(x)}{g\'(x)} \\quad \\left[\\text{Form: } \\frac{0}{0} \\text{ or } \\frac{\\infty}{\\infty}\\right]',
    termAr: 'قاعدة لوبيتال للحالات غير المعينة',
    definitionAr: 'قاعدة رياضية تتيح حساب نهاية خارج قسمة دالتين عندما يعطي التعويض المباشر صيغة غير معينة مثل صفر/صفر أو ما لا نهاية/ما لا نهاية، باشتقاق البسط وحده والمقام وحده.',
    examTip: 'سؤال متكرر: تأكد دائماً من أن التعويض المباشر يعطي [0/0] أو [∞/∞] قبل الاشتقاق. وإذا استمرت الحالة غير معينة كرر تطبيق القاعدة.'
  },
  {
    id: 'm-limits-02',
    module: 'limits',
    division: 'calculus',
    type: 'law',
    termEn: 'Exponential Indeterminate Transformation (1^∞, 0^0, ∞^0)',
    definitionEn: 'The algebraic transformation using natural logarithms to evaluate exponential indeterminate limits by converting them into standard indeterminate products and quotients.',
    formula: '\\lim_{x \\to c} [f(x)]^{g(x)} = \\exp\\left( \\lim_{x \\to c} [g(x) \\cdot \\ln f(x)] \\right) = \\exp\\left( \\lim_{x \\to c} \\frac{\\ln f(x)}{1 / g(x)} \\right)',
    termAr: 'تحويل الحالات الأسية غير المعينة',
    definitionAr: 'أخذ اللوغاريتم الطبيعي ln لتحويل الأس g(x) إلى معامل ضرب، ثم إنزاله للمقام بالصورة 1/g(x) لتطبيق قاعدة لوبيتال.',
    examTip: 'الحالة الأشهر في امتحانات شبرا: lim (cos x)^(1/x^2) عند x -> 0 تساوي e^(-1/2).'
  },
  {
    id: 'm-limits-03',
    module: 'limits',
    division: 'calculus',
    type: 'reasoning',
    termEn: 'Why is 1^∞ an Indeterminate Form rather than Equal to 1?',
    definitionEn: 'Because the base is not an exact integer 1, but rather a variable quantity approaching 1, while the exponent simultaneously grows without bound. The interplay between the rate of approach to 1 and the rate of growth to ∞ determines the actual limit, which can equal any positive real number.',
    termAr: 'علل: لماذا يعتبر 1^∞ كمية غير معينة وليس مساوياً للرقم 1؟',
    definitionAr: 'لأن الأساس ليس الرقم 1 الصريح الثابت، بل هو دالة متغيرة تقترب تدريجياً من 1، وتتنافس مع الأس الذي ينمو لما لا نهاية، وقيمة الناتج الحقيقي تعتمد على سرعة اقتراب كل منهما.',
    examTip: 'سؤال شفوي ونظري معتاد في اختبار الميدتيرم.'
  },

  // ==================== 2. LEIBNIZ & HIGHER DERIVATIVES ====================
  {
    id: 'm-leib-01',
    module: 'leibniz',
    division: 'calculus',
    type: 'law',
    termEn: "Leibniz's Formula for the n-th Derivative of a Product",
    definitionEn: 'A generalized theorem that expresses the n-th derivative of the product of two differentiable functions u and v as a finite linear combination involving binomial coefficients.',
    formula: '\\frac{d^n}{dx^n}[u \\cdot v] = \\sum_{r=0}^{n} \\binom{n}{r} u^{(n-r)} v^{(r)} = u^{(n)} v + n u^{(n-1)} v\' + \\frac{n(n-1)}{2!} u^{(n-2)} v\'\' + \\dots + u v^{(n)}',
    variables: [
      { sym: 'u^(n-r)', desc: 'The (n-r)-th derivative of function u(x)' },
      { sym: 'v^(r)', desc: 'The r-th derivative of function v(x)' },
      { sym: 'C(n, r)', desc: 'The binomial coefficient n! / [r! (n - r)!]' }
    ],
    termAr: 'نظرية لايبنتز لمشتقة حاصل الضرب من الرتبة n',
    definitionAr: 'قانون لحساب المشتقة من أي رتبة نونية n لحاصل ضرب دالتين باستخدام معاملات ذات الحدين، مما يغني عن الاشتقاق المتتابع الطويل.',
    examTip: 'دائماً اختر الدالة كثير الحدود (مثل x^2 أو x^3) لتكون v لأن مشتقاتها تصبح أصفاراً بعد خطوتين أو ثلاث.'
  },
  {
    id: 'm-leib-02',
    module: 'leibniz',
    division: 'calculus',
    type: 'definition',
    termEn: 'n-th Derivative of Sine and Cosine Functions',
    definitionEn: 'The closed-form analytical expression for the n-th derivative of sin(ax+b) and cos(ax+b), which introduces an amplitude scaling of a^n and a phase advance of n(π/2) radians.',
    formula: '\\frac{d^n}{dx^n}[\\sin(ax + b)] = a^n \\sin\\left(ax + b + \\frac{n\\pi}{2}\\right), \\quad \\frac{d^n}{dx^n}[\\cos(ax + b)] = a^n \\cos\\left(ax + b + \\frac{n\\pi}{2}\\right)',
    termAr: 'المشتقة النونية لدوال الجيب وجيب التمام',
    definitionAr: 'كل عملية اشتقاق للدوال المثلثية تزيد زاوية الطور بمقدار 90 درجة (π/2) مع ضرب المقدار في معامل الزاوية a.',
    examTip: 'في المسائل التي تطلب قيمة المشتقة عند x = 0، عوض مباشرة بعد كتابة القانون المختصر لتحديد الإشارة.'
  },
  {
    id: 'm-leib-03',
    module: 'leibniz',
    division: 'calculus',
    type: 'reasoning',
    termEn: 'Why Choose the Polynomial Term as v in Leibniz Expansion?',
    definitionEn: 'Because differentiating a polynomial of degree m exactly (m+1) times yields zero [v^(m+1) = 0]. This abruptly terminates the infinite series of Leibniz terms into a finite sum of only (m+1) non-zero terms, making manual evaluation feasible.',
    termAr: 'علل: لماذا نختار دالة كثير الحدود لتكون v دائماً في نظرية لايبنتز؟',
    definitionAr: 'لأن اشتقاق كثير الحدود من الدرجة m ينتهي إلى الصفر حتماً بعد (m+1) اشتقاق، فيختصر المتسلسلة إلى حدود معدودة بدلاً من الاستمرار إلى ما لا نهاية.',
    examTip: 'إذا كان لديك x^2 · e^(3x)، فإن v = x^2 تجعل الحدود بعد v\'\' تساوي صفراً فوراً.'
  },

  // ==================== 3. TAYLOR & MEAN VALUE THEOREMS ====================
  {
    id: 'm-tay-01',
    module: 'series',
    division: 'calculus',
    type: 'definition',
    termEn: 'Maclaurin Series Expansion',
    definitionEn: 'A power series representation of a function infinitely differentiable in a neighborhood of the origin (x = 0), expressing the function as an infinite sum of polynomial powers of x.',
    formula: 'f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(0)}{n!} x^n = f(0) + f\'(0) x + \\frac{f\'\'(0)}{2!} x^2 + \\frac{f\'\'\'(0)}{3!} x^3 + \\dots',
    termAr: 'متسلسلة ماكلورين لنشر الدوال حول نقطة الأصل',
    definitionAr: 'تمثيل الدوال الرياضية المعقدة على صورة متسلسلة قوى لكثيرات حدود بمشتقات الدالة المحسوبة عند x = 0.',
    examTip: 'احفظ مفكوكات الدوال القياسية عن ظهر قلب: e^x, sin x, cos x, ln(1+x), (1+x)^m.'
  },
  {
    id: 'm-tay-02',
    module: 'series',
    division: 'calculus',
    type: 'definition',
    termEn: 'Taylor Series Expansion (about x = a)',
    definitionEn: 'The generalization of Maclaurin series representing a smooth function in terms of powers of (x - a) evaluated at an arbitrary point a in its domain of analyticity.',
    formula: 'f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!} (x - a)^n = f(a) + f\'(a)(x - a) + \\frac{f\'\'(a)}{2!}(x - a)^2 + \\dots',
    termAr: 'متسلسلة تايلور لنشر الدوال حول أي نقطة a',
    definitionAr: 'نشر الدالة في صورة قوى تصاعدية لـ (x - a)، وتستخدم لتقريب قيمة الدالة بالقرب من النقطة a.',
    examTip: 'تأتي بصيغة: Expand f(x) in powers of (x - 2) أو (x - π/4).'
  },
  {
    id: 'm-tay-03',
    module: 'series',
    division: 'calculus',
    type: 'definition',
    termEn: "Rolle's Theorem",
    definitionEn: 'A foundational theorem stating that if f(x) is continuous on [a, b], differentiable on (a, b), and f(a) = f(b), then there exists at least one point c in (a, b) where the instantaneous derivative vanishes: f\'(c) = 0.',
    formula: 'f\'(c) = 0 \\quad \\text{for at least one } c \\in (a, b) \\quad \\text{if } f(a) = f(b)',
    termAr: 'نظرية رول للقيمة المتوسطة',
    definitionAr: 'إذا كانت الدالة متصلة وقابلة للاشتقاق ولها نفس القيمة عند طرفي الفترة f(a)=f(b)، فلا بد أن يكون مماس المنحنى أفقياً تماماً عند نقطة ما داخل الفترة.',
    examTip: 'يجب كتابة الشروط الثلاثة كاملة في ورقة الإجابة قبل حساب قيمة c للحصول على الدرجة كاملة.'
  },
  {
    id: 'm-tay-04',
    module: 'series',
    division: 'calculus',
    type: 'law',
    termEn: "Lagrange's Mean Value Theorem",
    definitionEn: 'A fundamental theorem of calculus stating that the average rate of change between two points on a smooth curve is equal to the instantaneous rate of change at some intermediate point.',
    formula: 'f\'(c) = \\frac{f(b) - f(a)}{b - a} \\quad \\text{for at least one } c \\in (a, b)',
    termAr: 'نظرية لاجرانج للقيمة المتوسطة',
    definitionAr: 'يوجد مماس للمنحنى عند نقطة ما c يوازي تماماً الوتر الواصل بين نقطتي البداية والنهاية (a, f(a)) و (b, f(b)).',
    examTip: 'تأكد أن قيمة c الناتجة تقع حصراً داخل الفترة المفتوحة (a, b) وليس على الأطراف.'
  },

  // ==================== 4. CURVE SKETCHING & CURVATURE ====================
  {
    id: 'm-curv-01',
    module: 'curve',
    division: 'calculus',
    type: 'law',
    termEn: 'Radius of Curvature (ρ)',
    definitionEn: 'The radius of the osculating circle that best approximates the local circular bending of a plane curve at a given point.',
    formula: '\\rho = \\frac{[1 + (y\')^2]^{3/2}}{|y\'\'|}, \\quad \\kappa = \\frac{1}{\\rho} \\quad (\\text{Curvature})',
    variables: [
      { sym: "y'", desc: 'First derivative dy/dx (slope of the tangent)' },
      { sym: "y''", desc: 'Second derivative d²y/dx² (rate of change of slope)' },
      { sym: 'κ', desc: 'Curvature (sharpness of bending)' }
    ],
    termAr: 'نصف قطر الانحناء لمنحنى مستوي',
    definitionAr: 'مقياس لمدى انحناء المنحنى عند أي نقطة، ويمثل نصف قطر الدائرة الملاصقة التي تلامس المنحنى تلامساً تاماً عند تلك النقطة.',
    examTip: 'عند النقطة التي يكون عندها المماس أفقياً (y\' = 0)، يصبح القانون بسيطاً جداً: ρ = 1 / |y\'\'|.'
  },
  {
    id: 'm-curv-02',
    module: 'curve',
    division: 'calculus',
    type: 'definition',
    termEn: 'Asymptotes of a Curve (Vertical, Horizontal & Oblique)',
    definitionEn: 'Straight lines such that the perpendicular distance between the curve and the line approaches zero as the point on the curve recedes to infinity.',
    formula: '\\text{Vertical: } x = a \\text{ if } \\lim_{x \\to a} f(x) = \\pm\\infty; \\quad \\text{Oblique: } y = mx + c \\text{ where } m = \\lim \\frac{f(x)}{x}, c = \\lim [f(x) - mx]',
    termAr: 'خطوط التقارب للمنحنيات (رأسية وأفقية ومائلة)',
    definitionAr: 'خطوط مستقيمة يقترب منها المنحنى اقتراباً لا نهائياً دون أن يقطعها عندما تؤول x أو y إلى ما لا نهاية.',
    examTip: 'في الدوال الكسرية، أصفار المقام تعطي خطوط التقارب الرأسية مباشرة بشرط عدم وجود اختصار مع البسط.'
  },

  // ==================== 5. PARTIAL DIFFERENTIATION & EULER ====================
  {
    id: 'm-part-01',
    module: 'partial',
    division: 'calculus',
    type: 'definition',
    termEn: 'Homogeneous Function of Degree n',
    definitionEn: 'A multivariable function f(x, y) satisfying the scaling property that multiplying all independent variables by a constant scalar t scales the output by t^n.',
    formula: 'f(t x, t y) = t^n f(x, y) \\quad \\text{for all } t > 0',
    termAr: 'الدالة المتجانسة من الدرجة n',
    definitionAr: 'دالة تتميز بأنه عند ضرب كل متغير x و y في ثابت t، يخرج الثابت كعامل مشترك مرفوعاً للأس n خارج الدالة الأصلية.',
    examTip: 'إذا كان البسط متجانساً من الدرجة p والمقام من الدرجة q، فإن الدالة ككل متجانسة من الدرجة n = p - q.'
  },
  {
    id: 'm-part-02',
    module: 'partial',
    division: 'calculus',
    type: 'law',
    termEn: "Euler's Theorem on Homogeneous Functions",
    definitionEn: 'A fundamental multivariable calculus theorem establishing that a linear differential operator acting on a homogeneous function equals the degree of homogeneity times the function.',
    formula: 'x \\frac{\\partial u}{\\partial x} + y \\frac{\\partial u}{\\partial y} = n u(x, y)',
    variables: [
      { sym: 'u(x, y)', desc: 'Homogeneous function of degree n' },
      { sym: '∂u/∂x', desc: 'First partial derivative with respect to x' },
      { sym: '∂u/∂y', desc: 'First partial derivative with respect to y' },
      { sym: 'n', desc: 'Degree of homogeneity' }
    ],
    termAr: 'نظرية أويلر للدوال المتجانسة (الرتبة الأولى)',
    definitionAr: 'علاقة تفاضلية تمكننا من إيجاد قيمة x ∂u/∂x + y ∂u/∂y في خطوة واحدة بضرب درجة التجانس n في الدالة الأصلية u دون عناء الاشتقاق المطول.',
    examTip: 'سؤال إجباري سنوي في امتحانات شبرا: يطلب إثبات علاقة تفاضلية تحل مباشرة بنظرية أويلر.'
  },
  {
    id: 'm-part-03',
    module: 'partial',
    division: 'calculus',
    type: 'law',
    termEn: "Euler's Theorem for Second-Order Partial Derivatives",
    definitionEn: 'The extension of Euler theorem governing the second-order partial differential operator on homogeneous functions.',
    formula: 'x^2 \\frac{\\partial^2 u}{\\partial x^2} + 2xy \\frac{\\partial^2 u}{\\partial x \\partial y} + y^2 \\frac{\\partial^2 u}{\\partial y^2} = n(n - 1) u(x, y)',
    termAr: 'نظرية أويلر للمشتقات الجزئية من الرتبة الثانية',
    definitionAr: 'علاقة تختصر حساب المشتقات الجزئية الثانية للدوال المتجانسة إلى مجرد ضرب n(n - 1) في الدالة u.',
    examTip: 'انتبه: إذا كانت n = 1 (دالة متجانسة من الدرجة الأولى)، فإن ناتج الرتبة الثانية يساوي صفراً لأن n(n - 1) = 1(0) = 0.'
  },

  // ==================== 6. MATRICES & LINEAR SYSTEMS ====================
  {
    id: 'm-mat-01',
    module: 'matrices',
    division: 'algebra',
    type: 'definition',
    termEn: 'Rank of a Matrix [Rank(A)]',
    definitionEn: 'The maximum number of linearly independent row vectors (or column vectors) in a matrix, equivalently the order of the highest-order non-zero minor determinant.',
    formula: '\\text{Rank}(A) = \\text{Number of non-zero rows in Row Echelon Form (REF)}',
    termAr: 'رتبة المصفوفة (Rank)',
    definitionAr: 'العدد الأقصى لصفوف المصفوفة المستقلة خطياً، وتساوي عملياً عدد الصفوف غير الصفرية بعد تحويل المصفوفة للصورة المدرجة صفياً.',
    examTip: 'لحساب الرتبة بسرعة، حول المصفوفة لصورة الدرج Echelon Form باستخدام عمليات الصف البسيط ثم عد الصفوف غير الصفرية.'
  },
  {
    id: 'm-mat-02',
    module: 'matrices',
    division: 'algebra',
    type: 'law',
    termEn: 'Matrix Inverse by Adjoint Matrix Method',
    definitionEn: 'The classical analytical formula for computing the multiplicative inverse of a non-singular square matrix using its adjugate matrix.',
    formula: 'A^{-1} = \\frac{1}{|A|} \\text{adj}(A) = \\frac{1}{|A|} [C_{ij}]^T \\quad \\text{provided } |A| \\neq 0',
    variables: [
      { sym: '|A|', desc: 'Determinant of matrix A (must be non-zero)' },
      { sym: 'adj(A)', desc: 'Adjoint matrix: transpose of the cofactor matrix' },
      { sym: 'C_ij', desc: 'Cofactor of element a_ij = (-1)^(i+j) · Minor(M_ij)' }
    ],
    termAr: 'مقلوب المصفوفة بطريقة المصفوفة الملحقة (Adjoint)',
    definitionAr: 'قانون إيجاد المعكوس الضربي للمصفوفة بقسمة منقول مصفوفة العوامل المرافقة على قيمة محدد المصفوفة.',
    examTip: 'لا تنسَ تدوير مصفوفة العوامل المرافقة (Transpose) للحصول على adj(A)، وإلا ستفقد نصف الدرجة!'
  },
  {
    id: 'm-mat-03',
    module: 'matrices',
    division: 'algebra',
    type: 'definition',
    termEn: 'Rouché-Capelli Consistency Theorem',
    definitionEn: 'A fundamental theorem stating that a linear system of equations A·X = B is consistent (has at least one solution) if and only if the rank of the coefficient matrix equals the rank of the augmented matrix.',
    formula: '\\text{Consistent} \\iff \\text{Rank}(A) = \\text{Rank}(A|B)',
    termAr: 'نظرية روتشيه-كابيلي لتوافق الأنظمة الخطية',
    definitionAr: 'المعيار الحاكم لوجود حل للنظام الخطي من عدمه: يوجد حل إذا وفقط إذا تساوت رتبة مصفوفة المعاملات A مع رتبة المصفوفة الموسعة (A|B).',
    examTip: 'إذا كانت الرتبة = عدد المجاهيل n فالنظام له حل وحيد. وإذا كانت الرتبة r < n فالنظام له عدد لا نهائي من الحلول.'
  },

  // ==================== 7. COMPLEX NUMBERS & DE MOIVRE ====================
  {
    id: 'm-cplx-01',
    module: 'complex',
    division: 'algebra',
    type: 'definition',
    termEn: 'Polar and Exponential (Euler) Forms of a Complex Number',
    definitionEn: 'The trigonometric and exponential representations of a complex number z = x + iy in terms of its absolute modulus r and phase argument θ.',
    formula: 'z = x + i y = r (\\cos \\theta + i \\sin \\theta) = r e^{i \\theta}, \\quad r = \\sqrt{x^2 + y^2}, \\quad \\theta = \\text{atan2}(y, x)',
    termAr: 'الصورة القطبية والأسية للعدد المركب (صيغة أويلر)',
    definitionAr: 'التعبير عن العدد المركب بدلالة طول مقياسه r وزاوية ميله θ بالنسبة للاتجاه الموجب لمحور السينات، باستخدام صيغة أويلر e^(iθ) = cos θ + i sin θ.',
    examTip: 'في الربع الثاني: θ = π - α. في الربع الثالث: θ = -π + α أو π + α. في الربع الرابع: θ = -α.'
  },
  {
    id: 'm-cplx-02',
    module: 'complex',
    division: 'algebra',
    type: 'law',
    termEn: "De Moivre's Theorem",
    definitionEn: 'A fundamental theorem connecting complex numbers and trigonometry, stating that raising a unit complex number to the n-th power multiplies its argument by n.',
    formula: '(\\cos \\theta + i \\sin \\theta)^n = \\cos(n \\theta) + i \\sin(n \\theta) = e^{i n \\theta}',
    termAr: 'نظرية ديموافر للأعداد المركبة',
    definitionAr: 'قانون رياضي يتيح حساب القوى العليا للعدد المركب بضرب الزاوية θ في الأس n بدلاً من الضرب الجبري المطول.',
    examTip: 'تُستخدم أيضاً في فك cos(nθ) و sin(nθ) إلى قوى لـ cos θ و sin θ بمقارنة الأجزاء الحقيقية والتخيلية مع مفكوك ذات الحدين.'
  },
  {
    id: 'm-cplx-03',
    module: 'complex',
    division: 'algebra',
    type: 'law',
    termEn: 'n-th Roots of a Complex Number',
    definitionEn: 'The complete set of n distinct complex solutions to the equation w^n = z, which lie on a circle of radius r^(1/n) separated by equal angles of 2π/n.',
    formula: 'z_k = r^{1/n} \\left[ \\cos\\left(\\frac{\\theta + 2k\\pi}{n}\\right) + i \\sin\\left(\\frac{\\theta + 2k\\pi}{n}\\right) \\right], \\quad k = 0, 1, 2, \\dots, n - 1',
    termAr: 'الجذور النونية للعدد المركب',
    definitionAr: 'كل عدد مركب له n من الجذور المختلفة تشكل رؤوس مضلع منتظم متساوي الأضلاع داخل دائرة في مستوى أرجاند.',
    examTip: 'الجذور التكعيبية للواحد الصحيح (1, ω, ω²) لها خواص سحرية: 1 + ω + ω² = 0 و ω³ = 1.'
  },

  // ==================== 8. BINOMIAL THEOREM & INDUCTION ====================
  {
    id: 'm-ind-01',
    module: 'induction',
    division: 'algebra',
    type: 'definition',
    termEn: 'Principle of Mathematical Induction',
    definitionEn: 'A deductive proof method establishing that a proposition P(n) holds for all positive integers n by proving the base case P(1) and the inductive implication P(k) => P(k+1).',
    formula: 'P(1) \\text{ is True } \\land [P(k) \\implies P(k+1)] \\implies P(n) \\text{ is True } \\forall n \\ge 1',
    termAr: 'مبدأ الاستقراء الرياضي التام',
    definitionAr: 'منهجية برهان رياضي من ثلاث خطوات (إثبات صحة القضية عند n=1، ثم فرض صحتها عند n=k، ثم إثبات أنها تترتب عليها صحتها عند n=k+1).',
    examTip: 'في خطوة k+1: حاول دائماً استخراج المقدار P(k) المفروض سابقاً لتستبدله بالفرضية الجبرية.'
  },
  {
    id: 'm-ind-02',
    module: 'induction',
    division: 'algebra',
    type: 'law',
    termEn: 'Binomial Theorem for Rational/Negative Powers (|x| < 1)',
    definitionEn: 'The infinite series expansion of (1 + x)^n for non-integer rational powers, converging if and only if |x| < 1.',
    formula: '(1 + x)^n = 1 + n x + \\frac{n(n - 1)}{2!} x^2 + \\frac{n(n - 1)(n - 2)}{3!} x^3 + \\dots + \\frac{n(n - 1)\\dots(n - r + 1)}{r!} x^r + \\dots',
    termAr: 'نظرية ذات الحدين للأسس الكسرية والسالبة',
    definitionAr: 'مفكوك لا نهائي للقوس (1 + x)^n عندما يكون n كسراً أو عدداً سالباً، وشرط تقاربه أن تكون القيمة المطلقة لـ x أقل تماماً من 1.',
    examTip: 'احفظ شرط التقارب دائماً: Interval of convergence هو |x| < 1.'
  },

  // ==================== 9. THEORY OF EQUATIONS ====================
  {
    id: 'm-eq-01',
    module: 'equations',
    division: 'algebra',
    type: 'law',
    termEn: "Viète's Formulas (Root-Coefficient Relations for Cubic)",
    definitionEn: 'The algebraic formulas relating the roots α, β, γ of a polynomial equation to its coefficients without explicitly solving the equation.',
    formula: '\\alpha + \\beta + \\gamma = -\\frac{b}{a}, \\quad \\alpha\\beta + \\beta\\gamma + \\gamma\\alpha = \\frac{c}{a}, \\quad \\alpha\\beta\\gamma = -\\frac{d}{a} \\quad [a x^3 + b x^2 + c x + d = 0]',
    termAr: 'علاقات فييتا بين جذور ومعاملات المعادلة التكعيبية',
    definitionAr: 'قوانين تربط مجموع الجذور ومجموع حواضل ضرب كل اثنين وحاصل ضرب الجذور الثلاثة بمعاملات المعادلة التكعيبية.',
    examTip: 'إذا قيل أن الجذور في متتابعة حسابية A.P.، افرضها (a - d, a, a + d). وإذا كانت في متتابعة هندسية G.P.، افرضها (a/r, a, ar).'
  },
  {
    id: 'm-eq-02',
    module: 'equations',
    division: 'algebra',
    type: 'definition',
    termEn: "Descartes' Rule of Signs",
    definitionEn: 'A theorem providing an upper bound on the number of positive and negative real roots of a polynomial with real coefficients based on the number of sign changes in its sequence of coefficients.',
    formula: '\\text{Number of Positive Roots} \\le \\text{Variations in sign of } f(x); \\quad \\text{Negative Roots} \\le \\text{Variations in } f(-x)',
    termAr: 'قاعدة ديكارت للإشارات لجذور كثيرات الحدود',
    definitionAr: 'قاعدة تحدد الحد الأقصى لعدد الجذور الحقيقية الموجبة والسالبة بمعاينة عدد مرات تغير الإشارة بين حدود الدالة f(x) و f(-x).',
    examTip: 'الفرق بين عدد مرات تغير الإشارة وعدد الجذور الحقيقي يكون دائماً عدداً زوجياً (بسبب وجود الجذور المركبة في أزواج مترافقة).'
  },

  // ==================== 10. SOLID 3D GEOMETRY ====================
  {
    id: 'm-geo-01',
    module: 'geometry3d',
    division: 'algebra',
    type: 'definition',
    termEn: 'Direction Cosines and Direction Ratios in 3D',
    definitionEn: 'The cosines of the angles α, β, γ that a directed line vector makes with the positive Cartesian coordinate axes X, Y, Z, satisfying the fundamental identity l² + m² + n² = 1.',
    formula: 'l = \\cos\\alpha, \\quad m = \\cos\\beta, \\quad n = \\cos\\gamma \\implies l^2 + m^2 + n^2 = 1',
    termAr: 'جيوب تمام الاتجاه ونسب الاتجاه في الفراغ',
    definitionAr: 'جيوب تمام الزوايا التي يصنعها الخط مع محاور الإحداثيات الثلاثة، ومجموع مربعاتها يساوي الواحد الصحيح دائماً.',
    examTip: 'للتحويل من نسب الاتجاه (a, b, c) إلى جيوب تمام الاتجاه (l, m, n): اقسم كل مركبة على جذر مجموع المربعات sqrt(a^2 + b^2 + c^2).'
  },
  {
    id: 'm-geo-02',
    module: 'geometry3d',
    division: 'algebra',
    type: 'law',
    termEn: 'General Equation of a Plane in 3D Space',
    definitionEn: 'The linear algebraic equation representing a flat surface in three-dimensional space determined by a point P0(x0, y0, z0) and a normal vector N = <A, B, C>.',
    formula: 'A(x - x_0) + B(y - y_0) + C(z - z_0) = 0 \\implies A x + B y + C z + D = 0',
    variables: [
      { sym: 'N = <A, B, C>', desc: 'Normal vector perpendicular to the plane surface' },
      { sym: '(x0, y0, z0)', desc: 'Coordinates of a known point lying on the plane' },
      { sym: 'D', desc: 'Constant scalar term: D = -(A x0 + B y0 + C z0)' }
    ],
    termAr: 'المعادلة العامة للمستوى في الفراغ ثلاثي الأبعاد',
    definitionAr: 'معادلة السطح المستوي في 3D وتتحدد بمعرفة متجه العمودي عليه N ونقطة يمر بها المستوى.',
    examTip: 'إذا كان المستويان متعامدين فإن حاصل الضرب القياسي لمتجهي العمودي N1 · N2 = 0. وإذا كانا متوازيين فإن N1 = k N2.'
  },
  {
    id: 'm-geo-03',
    module: 'geometry3d',
    division: 'algebra',
    type: 'law',
    termEn: 'Perpendicular Distance from Point to Plane in 3D',
    definitionEn: 'The shortest geometric distance from an arbitrary point (x1, y1, z1) to the plane Ax + By + Cz + D = 0.',
    formula: 'd = \\frac{|A x_1 + B y_1 + C z_1 + D|}{\\sqrt{A^2 + B^2 + C^2}}',
    termAr: 'طول العمود الساقط من نقطة على مستوى في الفراغ',
    definitionAr: 'المسافة العمودية الأقصر بين نقطة وسطح مستوى ثلاثي الأبعاد.',
    examTip: 'المسافة بين مستويين متوازيين Ax+By+Cz+D1=0 و Ax+By+Cz+D2=0 هي: |D1 - D2| / sqrt(A^2 + B^2 + C^2).'
  },
  {
    id: 'm-geo-04',
    module: 'geometry3d',
    division: 'algebra',
    type: 'law',
    termEn: 'Equations of a Straight Line in 3D Space',
    definitionEn: 'The symmetric and parametric representations of a straight line in three dimensions passing through point (x0, y0, z0) with direction vector <a, b, c>.',
    formula: '\\frac{x - x_0}{a} = \\frac{y - y_0}{b} = \\frac{z - z_0}{c} = t \\implies \\begin{cases} x = x_0 + a t \\\\ y = y_0 + b t \\\\ z = z_0 + c t \\end{cases}',
    termAr: 'معادلات الخط المستقيم في الفراغ ثلاثي الأبعاد',
    definitionAr: 'الصورة المتماثلة والبارامترية للخط المستقيم في الفضاء، وتتحدد بنقطة يمر بها ومتجه موازٍ له (متجه الاتجاه).',
    examTip: 'لإيجاد نقطة تقاطع خط مع مستوى: عوض بالصيغة البارامترية x(t), y(t), z(t) في معادلة المستوى وأوجد قيمة المعامل t ثم عوض به في إحداثيات النقطة.'
  }
];
