// Printable A4 Cheat Sheets & High-Yield Exam Reviews for Engineering Mathematics 1 (MTH 001)
// Prepared Exclusively for Faculty of Engineering at Shoubra (FES) - Benha University
// Preparatory Year (Term 1)

export const MATH_CHEAT_SHEETS_CATEGORIES = [
  { id: "all", label: "جميع شيتات الرياضيات 1 (5)", icon: "FileText" },
  { id: "calculus-derivatives", label: "شيت التفاضل والمشتقات العليا ولايبنتز (A4)", icon: "Calculator" },
  { id: "calculus-series", label: "شيت متسلسلات تايلور ورسم المنحنيات (A4)", icon: "Layers" },
  { id: "algebra-matrices", label: "شيت المصفوفات وحذف غاوس-جوردان (A4)", icon: "Building2" },
  { id: "algebra-complex", label: "شيت الأعداد المركبة ونظرية ديموافر (A4)", icon: "Zap" },
  { id: "geometry-3d", label: "شيت الهندسة الفراغية والمستويات (A4)", icon: "Award" }
];

export const MATH_CHEAT_SHEETS_DATA = [
  {
    id: "sheet-math-derivatives",
    category: "calculus-derivatives",
    division: "calculus",
    professor: "قسم الرياضيات الهندسية (Calculus)",
    title: "ملخص قوانين التفاضل والمشتقات العليا ونظرية لايبنتز",
    titleEn: "Calculus & Higher Derivatives: Standard Derivatives, L'Hôpital & Leibniz's Theorem",
    subtitleEn: "Standard derivatives, parametric/implicit rules, and general Leibniz product differentiation",
    subtitle: "ورقة قوانين مكثفة لمقرر التفاضل - هندسة شبرا",
    paperSize: "A4",
    pagesCount: 1,
    color: "border-blue-500",
    sections: [
      {
        title: "1. Standard Derivatives Table (قوانين المشتقات القياسية)",
        type: "table",
        headers: ["Function f(x)", "First Derivative f'(x)", "Standard n-th Derivative f^(n)(x)", "Notes & Constraints"],
        rows: [
          ["x^m (m ∈ ℝ)", "m · x^(m-1)", "m(m-1)...(m-n+1) · x^(m-n)", "Valid for x > 0 when m is real"],
          ["e^(ax)", "a · e^(ax)", "a^n · e^(ax)", "Always positive, never zero"],
          ["a^x (a > 0)", "a^x · ln(a)", "(ln a)^n · a^x", "Derivative of general exponential"],
          ["ln(ax + b)", "a / (ax + b)", "(-1)^(n-1) · (n-1)! · a^n / (ax + b)^n", "Domain: ax + b > 0"],
          ["sin(ax + b)", "a · cos(ax + b)", "a^n · sin(ax + b + nπ/2)", "Phase shift formula for n-th derivative"],
          ["cos(ax + b)", "-a · sin(ax + b)", "a^n · cos(ax + b + nπ/2)", "Phase shift formula for n-th derivative"],
          ["tan^(-1)(x)", "1 / (1 + x²)", "(-1)^(n-1) (n-1)! sin^n(θ) sin(nθ)", "θ = cot^(-1)(x)"],
          ["sinh(ax)", "a · cosh(ax)", "a^n · sinh(ax) [n even] / a^n cosh(ax) [n odd]", "Hyperbolic sine"],
          ["cosh(ax)", "a · sinh(ax)", "a^n · cosh(ax) [n even] / a^n sinh(ax) [n odd]", "Hyperbolic cosine"]
        ]
      },
      {
        title: "2. Leibniz's Theorem for Product Differentiation (نظرية لايبنتز)",
        type: "reactions",
        items: [
          {
            equation: "(u · v)^(n) = ∑ [k=0 to n] (n C k) · u^(n-k) · v^(k)",
            label: "Leibniz General Formula",
            desc: "Expands as: u^(n) v + n u^(n-1) v' + [n(n-1)/2!] u^(n-2) v'' + ... + u v^(n). Choose v as polynomial of lowest degree so v^(k) terminates to 0 quickly."
          },
          {
            equation: "x² y'' + x y' + (x² - n²) y = 0 ⟹ Differentiate n times via Leibniz",
            label: "Exam Hotspot Application",
            desc: "For each product term (e.g. x² y''), choose u = y'', v = x². v terminates after v'' = 2, giving only 3 non-zero terms."
          }
        ]
      },
      {
        title: "3. L'Hôpital's Rule & 7 Indeterminate Forms",
        type: "table",
        headers: ["Indeterminate Form", "Required Transformation", "Standard Method", "Watch Out"],
        rows: [
          ["0 / 0", "Direct application", "lim [f'(x) / g'(x)]", "Differentiate numerator & denominator separately; NOT quotient rule!"],
          ["∞ / ∞", "Direct application", "lim [f'(x) / g'(x)]", "Check if highest power factoring is faster than repeated differentiation."],
          ["0 · ∞", "Invert one factor: f / (1/g)", "Converts to 0/0 or ∞/∞", "Usually invert the polynomial or trig, keep log on top."],
          ["∞ - ∞", "Common denominator / Conjugate", "Combine fractions into single fraction", "Multiply and divide by conjugate for radical terms √(x+a) - √x."],
          ["1^∞, 0^0, ∞^0", "Let y = [f(x)]^g(x), take ln(y)", "ln(y) = g(x) · ln[f(x)] ⟹ 0 · ∞ ⟹ L'Hôpital", "Remember to take exp of the limit result: lim y = e^L."]
        ]
      },
      {
        title: "4. Parametric & Implicit Differentiation Rules",
        type: "notes",
        items: [
          "Parametric 1st Derivative: dy/dx = (dy/dt) / (dx/dt)",
          "Parametric 2nd Derivative (CRUCIAL EXAM TRAP): d²y/dx² = [ d/dt (dy/dx) ] / (dx/dt). NEVER simply divide (d²y/dt²) by (d²x/dt²)!",
          "Implicit Differentiation: Treat y as a function of x; whenever differentiating y^k, multiply by dy/dx using chain rule."
        ]
      }
    ]
  },
  {
    id: "sheet-math-series",
    category: "calculus-series",
    division: "calculus",
    professor: "قسم الرياضيات الهندسية (Calculus)",
    title: "ملخص متسلسلات تايلور وماكلورين ورسم المنحنيات والانحناء",
    titleEn: "Taylor & Maclaurin Series, Curve Asymptotes & Curvature",
    subtitleEn: "Standard power series expansions, horizontal/vertical/oblique asymptotes, and radius of curvature",
    subtitle: "قوانين مفكوك المتسلسلات وخطوط التقارب ونصف قطر الانحناء - هندسة شبرا",
    paperSize: "A4",
    pagesCount: 1,
    color: "border-indigo-500",
    sections: [
      {
        title: "1. Six Fundamental Maclaurin Power Series (مفكوك ماكلورين القياسي)",
        type: "table",
        headers: ["Function f(x)", "Maclaurin Series Expansion", "Sigma Notation ∑", "Interval of Convergence"],
        rows: [
          ["e^x", "1 + x + x²/2! + x³/3! + ...", "∑ [n=0 to ∞] x^n / n!", "-∞ < x < ∞ (R = ∞)"],
          ["sin(x)", "x - x³/3! + x⁵/5! - x⁷/7! + ...", "∑ [n=0 to ∞] (-1)^n x^(2n+1) / (2n+1)!", "-∞ < x < ∞ (R = ∞)"],
          ["cos(x)", "1 - x²/2! + x⁴/4! - x⁶/6! + ...", "∑ [n=0 to ∞] (-1)^n x^(2n) / (2n)!", "-∞ < x < ∞ (R = ∞)"],
          ["ln(1 + x)", "x - x²/2 + x³/3 - x⁴/4 + ...", "∑ [n=1 to ∞] (-1)^(n-1) x^n / n", "-1 < x ≤ 1"],
          ["1 / (1 - x)", "1 + x + x² + x³ + x⁴ + ...", "∑ [n=0 to ∞] x^n", "|x| < 1 (Geometric series)"],
          ["(1 + x)^m", "1 + m x + [m(m-1)/2!] x² + ...", "1 + ∑ [k=1 to ∞] (m C k) x^k", "|x| < 1 (Binomial expansion)"]
        ]
      },
      {
        title: "2. Taylor Series Expansion about x = a (مفكوك تايلور حول نقطة)",
        type: "reactions",
        items: [
          {
            equation: "f(x) = f(a) + f'(a)(x-a) + [f''(a)/2!](x-a)² + ... = ∑ [n=0 to ∞] [f^(n)(a) / n!] (x - a)^n",
            label: "Taylor Series Formula",
            desc: "To approximate f(x) near x = a, compute derivatives at x = a. In powers of h = (x - a): f(a + h) = f(a) + h f'(a) + (h²/2!) f''(a) + ..."
          }
        ]
      },
      {
        title: "3. Complete Asymptotes Checklist for Curve Sketching",
        type: "table",
        headers: ["Type of Asymptote", "Mathematical Condition", "How to Find", "Geometric Interpretation"],
        rows: [
          ["Vertical Asymptote (VA)", "lim [x → c^±] f(x) = ±∞", "Set denominator = 0 in rational function after cancelling common factors", "Line x = c; curve approaches it vertically"],
          ["Horizontal Asymptote (HA)", "lim [x → ±∞] f(x) = L", "Compute limit as x → ∞ or x → -∞", "Line y = L; curve flattens horizontally at extremes"],
          ["Oblique / Slant Asymptote (OA)", "Degree of numerator = Degree of denominator + 1", "Divide numerator by denominator: f(x) = mx + c + R(x)/Q(x)", "Line y = mx + c where m = lim [f(x)/x], c = lim [f(x) - mx]"]
        ]
      },
      {
        title: "4. Curvature & Radius of Curvature Formulas",
        type: "reactions",
        items: [
          {
            equation: "κ = |y''| / [1 + (y')²]^(3/2)   ⟹   ρ = 1/κ = [1 + (y')²]^(3/2) / |y''|",
            label: "Cartesian Curvature & Radius",
            desc: "At a critical point where y' = 0, the radius simplifies to ρ = 1 / |y''|. Center of curvature: (α, β) = (x - y'(1+y'²)/y'', y + (1+y'²)/y'')."
          },
          {
            equation: "ρ = [r² + (dr/dθ)²]^(3/2) / |r² + 2(dr/dθ)² - r(d²r/dθ²)|",
            label: "Polar Curvature Radius",
            desc: "For polar curves r = f(θ), used in curves like cardioids r = a(1 + cos θ)."
          }
        ]
      }
    ]
  },
  {
    id: "sheet-math-matrices",
    category: "algebra-matrices",
    division: "algebra",
    professor: "قسم الرياضيات الهندسية (Algebra)",
    title: "ملخص المصفوفات والمحددات وحل المعادلات الخطية بطريقة غاوس",
    titleEn: "Matrices, Determinants, Rank & Gauss-Jordan Linear Systems",
    subtitleEn: "Determinant properties, matrix inverse by adjoint, row echelon reduction, and consistency conditions",
    subtitle: "رتبة المصفوفة والمقلوب وحل المعادلات الخطية - هندسة شبرا",
    paperSize: "A4",
    pagesCount: 1,
    color: "border-cyan-500",
    sections: [
      {
        title: "1. Determinant Properties & Matrix Inversion",
        type: "table",
        headers: ["Property / Formula", "Mathematical Law", "Engineering Significance & Practical Rule"],
        rows: [
          ["Matrix Inversion by Adjoint", "A^(-1) = (1 / det(A)) · adj(A)", "adj(A) = C^T (transpose of cofactor matrix). Only exists if det(A) ≠ 0 (non-singular)."],
          ["Determinant of Product", "det(A · B) = det(A) · det(B)", "Allows computing det of composite transformations easily."],
          ["Scalar Multiplication in Det", "det(k · A) = k^n · det(A)", "Crucial! For an n×n matrix, every row pulls out a factor of k."],
          ["Transpose Determinant", "det(A^T) = det(A)", "Row operations and column operations have identical effects on det."],
          ["Row Interchange", "R_i ⟷ R_j ⟹ det becomes -det", "Each swap changes determinant sign."],
          ["Zero Determinant Criteria", "Two rows/cols identical or proportional ⟹ det = 0", "A row or column of all zeros immediately gives det = 0."]
        ]
      },
      {
        title: "2. Rank & System Consistency Theorem (Rouché–Capelli)",
        type: "table",
        headers: ["Rank Comparison", "Condition on Augmented [A|B]", "Nature of Solutions", "Geometric Meaning"],
        rows: [
          ["rank(A) = rank([A|B]) = n", "Full rank equals number of unknowns", "Unique Solution (حل وحيد)", "Planes intersect at a single unique point"],
          ["rank(A) = rank([A|B]) = r < n", "Equal rank but strictly less than n", "Infinite Solutions (عدد لا نهائي)", "Intersection along a line or plane; (n - r) free parameters"],
          ["rank(A) < rank([A|B])", "Augmented rank is strictly greater", "Inconsistent / No Solution (مستحيل الحل)", "Parallel or disjoint planes; contradictory row [0 0 ... 0 | b] where b ≠ 0"],
          ["Homogeneous AX = 0", "rank(A) = n ⟹ Trivial only (X=0); rank(A) < n ⟹ Non-trivial exists", "Always consistent since rank([A|0]) = rank(A)", "det(A) = 0 is necessary and sufficient condition for non-trivial solutions"]
        ]
      },
      {
        title: "3. Gauss-Jordan Elimination: Elementary Row Operations (EROs)",
        type: "reactions",
        items: [
          {
            equation: "[ A | I ]  ──(Elementary Row Operations)──>  [ I | A^(-1) ]",
            label: "Gauss-Jordan Matrix Inversion",
            desc: "1. Pick pivot in col 1; make it 1 by row scaling. 2. Eliminate entries below and above pivot. 3. Repeat for cols 2..n. If any pivot is zero and cannot be swapped, rank < n and A has no inverse."
          },
          {
            equation: "Cramer's Rule: x_i = det(A_i) / det(A)",
            label: "Cramer's Determinant Solver",
            desc: "A_i is matrix A with the i-th column replaced by constants vector B. Applicable only when det(A) ≠ 0 and system is square (n×n)."
          }
        ]
      }
    ]
  },
  {
    id: "sheet-math-complex",
    category: "algebra-complex",
    division: "algebra",
    professor: "قسم الرياضيات الهندسية (Algebra)",
    title: "ملخص الأعداد المركبة ونظرية ديموافر وجذور الوحدة",
    titleEn: "Complex Numbers, Polar/Exponential Forms & De Moivre's Theorem",
    subtitleEn: "Cartesian to polar conversion, De Moivre's formula, Euler's identity, and finding n distinct complex roots",
    subtitle: "التحويل القطبي والأسي ونظرية ديموافر والجذور النونية - هندسة شبرا",
    paperSize: "A4",
    pagesCount: 1,
    color: "border-purple-500",
    sections: [
      {
        title: "1. Three Representations of Complex Numbers (أشكال العدد المركب)",
        type: "table",
        headers: ["Form Name", "Expression", "Components & Definitions", "Quadrant Adjustment for Arg(z)"],
        rows: [
          ["Cartesian / Rectangular", "z = x + i y", "Re(z) = x, Im(z) = y, i² = -1", "Quadrant 1 (x>0, y>0): θ = tan^(-1)(y/x)"],
          ["Polar / Trigonometric", "z = r (cos θ + i sin θ)", "Modulus r = √(x² + y²), Argument θ = Arg(z)", "Quadrant 2 (x<0, y>0): θ = tan^(-1)(y/x) + π"],
          ["Exponential / Euler's Form", "z = r · e^(i θ)", "e^(i θ) = cos θ + i sin θ (Euler's Formula)", "Quadrant 3 (x<0, y<0): θ = tan^(-1)(y/x) - π"],
          ["Euler's Famous Identity", "e^(i π) + 1 = 0", "Links e, i, π, 1, and 0 in one elegant law", "Quadrant 4 (x>0, y<0): θ = tan^(-1)(y/x)"]
        ]
      },
      {
        title: "2. De Moivre's Theorem & Power Calculations (نظرية ديموافر)",
        type: "reactions",
        items: [
          {
            equation: "[ r (cos θ + i sin θ) ]^n = r^n [ cos(nθ) + i sin(nθ) ] = r^n · e^(i nθ)",
            label: "De Moivre's Formula for Powers (n ∈ ℤ)",
            desc: "Multiplication in polar form multiplies moduli and adds arguments: z1 · z2 = r1 r2 e^(i(θ1+θ2)). Division divides moduli and subtracts arguments: z1 / z2 = (r1/r2) e^(i(θ1-θ2))."
          },
          {
            equation: "w_k = r^(1/n) · [ cos((θ + 2kπ)/n) + i sin((θ + 2kπ)/n) ] , k = 0, 1, ..., n-1",
            label: "Formula for the n Distinct Complex Roots (الجذور النونية)",
            desc: "Every complex number z ≠ 0 has exactly n distinct n-th roots. All lie evenly spaced on a circle of radius r^(1/n) with angular spacing Δθ = 2π/n."
          }
        ]
      },
      {
        title: "3. Properties of n-th Roots of Unity (جذور الواحد الصحيح)",
        type: "notes",
        items: [
          "Roots of 1: 1^(1/n) = e^(i 2kπ/n) for k = 0, 1, ..., n-1. Let ω = e^(i 2π/n), then roots are 1, ω, ω², ..., ω^(n-1).",
          "Cube Roots of Unity (n=3): 1, ω, ω² where ω = -1/2 + i √3/2 and ω² = -1/2 - i √3/2.",
          "Fundamental Properties: 1 + ω + ω² = 0, and ω³ = 1. Therefore: 1 + ω = -ω², 1 + ω² = -ω, ω + ω² = -1.",
          "Geometric Symmetry: The n roots form the vertices of a regular n-sided polygon inscribed in the unit circle |z| = 1."
        ]
      }
    ]
  },
  {
    id: "sheet-math-geometry3d",
    category: "geometry-3d",
    division: "algebra",
    professor: "قسم الرياضيات الهندسية (Solid Geometry)",
    title: "ملخص الهندسة التحليلية ثلاثية الأبعاد والمستويات والفراغ",
    titleEn: "Solid Analytical Geometry: Direction Cosines, Straight Lines & Planes in 3D",
    subtitleEn: "Direction ratios/cosines, parametric line equations, general plane equations, and perpendicular distances",
    subtitle: "معادلات المستقيم والمستوى والمسافات والزوايا في الفراغ - هندسة شبرا",
    paperSize: "A4",
    pagesCount: 1,
    color: "border-emerald-500",
    sections: [
      {
        title: "1. Direction Cosines and Direction Ratios (جيوب تمام الاتجاه)",
        type: "table",
        headers: ["Concept", "Mathematical Definition / Law", "Key Formula & Normalization", "Essential Identity"],
        rows: [
          ["Direction Angles", "Angles α, β, γ made with positive X, Y, Z axes", "l = cos(α), m = cos(β), n = cos(γ)", "cos²(α) + cos²(β) + cos²(γ) = 1 (l² + m² + n² = 1)"],
          ["Direction Ratios (a, b, c)", "Any numbers proportional to (l, m, n)", "l = a / √(a² + b² + c²), m = b / √(a² + b² + c²), n = c / √(a² + b² + c²)", "a : b : c = l : m : n"],
          ["Vector joining P1 to P2", "Vector P1P2 = (x2 - x1, y2 - y1, z2 - z1)", "Direction ratios: a = x2-x1, b = y2-y1, c = z2-z1", "Distance |P1P2| = √[(x2-x1)² + (y2-y1)² + (z2-z1)²]"],
          ["Angle between 2 Lines", "cos θ = (a1 a2 + b1 b2 + c1 c2) / [√(∑a1²) √(∑a2²)]", "Perpendicular (θ = 90°): a1 a2 + b1 b2 + c1 c2 = 0", "Parallel (θ = 0°): a1/a2 = b1/b2 = c1/c2"]
        ]
      },
      {
        title: "2. Equation of Straight Line in Space (معادلة الخط المستقيم في الفراغ)",
        type: "reactions",
        items: [
          {
            equation: "Symmetric Form: (x - x0) / a = (y - y0) / b = (z - z0) / c = t",
            label: "Symmetric Equation of a Line",
            desc: "Line passes through point (x0, y0, z0) with direction ratios (a, b, c). Parametric equations: x = x0 + a t, y = y0 + b t, z = z0 + c t."
          }
        ]
      },
      {
        title: "3. Equation of Plane & Geometric Distances (معادلة المستوى والمسافات)",
        type: "table",
        headers: ["Plane Formula", "Mathematical Law", "Engineering Meaning & Application"],
        rows: [
          ["General Plane Equation", "A x + B y + C z + D = 0", "Vector N = (A, B, C) is the Normal Vector perpendicular to the plane."],
          ["Point-Normal Plane Form", "A (x - x0) + B (y - y0) + C (z - z0) = 0", "Plane passing through (x0, y0, z0) with normal vector N = (A, B, C)."],
          ["Plane through 3 Points", "det [ x-x1 y-y1 z-z1 ; x2-x1 y2-y1 z2-z1 ; x3-x1 y3-y1 z3-z1 ] = 0", "Determinant condition that any 3 non-collinear points determine a unique plane."],
          ["Distance from Point to Plane", "d = |A x0 + B y0 + C z0 + D| / √(A² + B² + C²)", "Perpendicular shortest distance from point (x0, y0, z0) to plane Ax + By + Cz + D = 0."],
          ["Distance between Parallel Planes", "d = |D1 - D2| / √(A² + B² + C²)", "Planes Ax + By + Cz + D1 = 0 and Ax + By + Cz + D2 = 0."]
        ]
      },
      {
        title: "4. Angle between Two Planes & Sphere Equation",
        type: "notes",
        items: [
          "Angle θ between planes A1 x + B1 y + C1 z + D1 = 0 and A2 x + B2 y + C2 z + D2 = 0: cos θ = |A1 A2 + B1 B2 + C1 C2| / [√(A1² + B1² + C1²) √(A2² + B2² + C2²)].",
          "Perpendicular Planes: A1 A2 + B1 B2 + C1 C2 = 0 (Normal vectors are orthogonal).",
          "Parallel Planes: A1 / A2 = B1 / B2 = C1 / C2.",
          "Standard Sphere Equation: (x - a)² + (y - b)² + (z - c)² = R² (Center at (a, b, c) with radius R)."
        ]
      }
    ]
  }
];
