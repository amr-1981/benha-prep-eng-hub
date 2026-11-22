// Printable A4 Cheat Sheets & High-Yield Exam Reviews for Engineering Mechanics 1 (Statics - MEC 001)
// Prepared Exclusively for Faculty of Engineering at Shoubra (FES) - Benha University
// Preparatory Year (Term 1)
// Strictly Separated by Academic Branch:
// 1. Force Systems, Moments & Equilibrium Branch (force_equilibrium)
// 2. Structures, Trusses, Friction & Inertia Branch (structures_inertia)

export const STATICS_CHEAT_SHEETS_CATEGORIES = [
  { id: "all", label: "جميع شيتات الاستاتيكا 1 (5 شيتات A4)", icon: "FileText" },
  { id: "stat-vectors-moments", label: "شيت متجهات الفراغ والعزوم والازدواج (A4)", icon: "Compass" },
  { id: "stat-equilibrium", label: "شيت ردود أفعال الركائز واتزان الجسم الجاسئ (A4)", icon: "Activity" },
  { id: "stat-trusses-frames", label: "شيت الجمالونات والإطارات والأعضاء الصفرية (A4)", icon: "Layers" },
  { id: "stat-friction", label: "شيت الاحتكاك الجاف والانزلاق والانقلاب والسيور (A4)", icon: "Activity" },
  { id: "stat-centroids-inertia", label: "شيت مراكز الثقل وعزوم القصور ونظرية شتينر (A4)", icon: "Layers" }
];

export const STATICS_CHEAT_SHEETS = [
  // =========================================================================
  // BRANCH 1: FORCE SYSTEMS, MOMENTS & EQUILIBRIUM (SHEETS 1 - 2)
  // =========================================================================
  {
    id: "sheet-stat-vectors-moments",
    category: "stat-vectors-moments",
    division: "force_equilibrium",
    professor: "قسم الرياضيات والفيزياء الهندسية / الهندسة الميكانيكية",
    title: "ملخص متجهات الفراغ 3D، العزوم بالمحددات والازدواج والبريمة Wrench (A4)",
    titleEn: "3D Cartesian Vectors, Determinant Moments & Wrench Reduction (A4 Matrix)",
    subtitleEn: "Direction angles, position vectors, cable tension, r × F cross products, Varignon theorem, and wrench pitch",
    subtitle: "ورقة قوانين مكثفة لمتجهات الفراغ والضرب القياسي والاتجاهي واختزال النظم - هندسة شبرا",
    paperSize: "A4",
    pagesCount: 1,
    color: "border-amber-500",
    sections: [
      {
        title: "1. 3D Spatial Vector & Position Formulation",
        type: "table",
        headers: ["Vector Operation", "Mathematical Formula", "Coordinate Geometry", "Exam Notes"],
        rows: [
          ["Cartesian Vector", "F = F_x i + F_y j + F_z k", "F_x = F cos(alpha), F_y = F cos(beta), F_z = F cos(gamma)", "Magnitude: |F| = sqrt(F_x^2 + F_y^2 + F_z^2)"],
          ["Direction Angles Condition", "cos²(alpha) + cos²(beta) + cos²(gamma) = 1", "u = cos(alpha) i + cos(beta) j + cos(gamma) k", "If obtuse (> 90°), cos is negative"],
          ["Position Vector (r_AB)", "r_AB = (x_B - x_A)i + (y_B - y_A)j + (z_B - z_A)k", "Destination coords minus Origin coords", "Length: d = |r_AB|"],
          ["Force Along a Cable", "F_vec = F · u_AB = F · (r_AB / |r_AB|)", "Unit vector: u_AB = r_AB / d", "Always points from anchor toward pull direction"],
          ["Dot Product (Projection)", "A · B = A_x B_x + A_y B_y + A_z B_z", "Angle: cos(theta) = (A · B) / (|A||B|)", "F_parallel = F · u_axis, F_perp = sqrt(F^2 - F_parallel^2)"]
        ]
      },
      {
        title: "2. Moment of a Force, Couples & Wrench Reduction",
        type: "reactions",
        items: [
          {
            equation: "\\vec{M}_O = \\vec{r} \\times \\vec{F} = (r_y F_z - r_z F_y)\\mathbf{i} - (r_x F_z - r_z F_x)\\mathbf{j} + (r_x F_y - r_y F_x)\\mathbf{k}",
            description: "3D Moment about Origin: r is position vector from O to ANY point on the line of action of F (watch -j sign!)."
          },
          {
            equation: "M_a = \\mathbf{u}_a \\cdot (\\vec{r} \\times \\vec{F}) = \\det [\\mathbf{u}_a, \\vec{r}, \\vec{F}]",
            description: "Scalar moment about an arbitrary axis a. If F intersects or is parallel to axis a, then M_a = 0."
          },
          {
            equation: "\\vec{M}_c = \\vec{r}_{+-} \\times \\vec{F}, \\quad \\vec{R} = \\sum \\vec{F}, \\quad \\vec{M}_{RO} = \\sum (\\vec{r} \\times \\vec{F}) + \\sum \\vec{M}_c",
            description: "Couple moment is a Free Vector (independent of reference point). System reduction at point O."
          },
          {
            equation: "p = \\frac{\\vec{R} \\cdot \\vec{M}_{RO}}{|\\vec{R}|^2}, \\quad \\vec{M}_{||} = p \\, \\vec{R}",
            description: "Wrench (Central Axis) Reduction: pitch p in meters. The resultant force R and couple M_parallel are collinear."
          }
        ]
      }
    ]
  },

  {
    id: "sheet-stat-equilibrium",
    category: "stat-equilibrium",
    division: "force_equilibrium",
    professor: "قسم الرياضيات والفيزياء الهندسية / الهندسة الميكانيكية",
    title: "ملخص شروط اتزان الجسيم والجسم الجاسئ وردود أفعال الركائز 2D/3D (A4)",
    titleEn: "Particle & Rigid Body Equilibrium, Support Reactions & Springs (A4 Matrix)",
    subtitleEn: "Free-body diagrams, support reactions (roller, pin, fixed), spring systems, and 2-force member simplification",
    subtitle: "ورقة قوانين مكثفة لرسم مخطط FBD وحساب ردود أفعال الركائز في المستوي والفراغ - هندسة شبرا",
    paperSize: "A4",
    pagesCount: 1,
    color: "border-amber-500",
    sections: [
      {
        title: "1. Support Reactions Modeling in Engineering Statics",
        type: "table",
        headers: ["Support Type", "2D Unknown Reactions", "3D Unknown Reactions", "Physical Constraint"],
        rows: [
          ["Roller / Rocker", "1 Unknown: N perpendicular to surface", "1 Unknown: N normal to contact plane", "Prevents translation normal to plane; free rotation"],
          ["Smooth Pin / Hinge", "2 Unknowns: A_x, A_y (no moment)", "3 Force components: A_x, A_y, A_z", "Prevents all linear translation; free pin rotation"],
          ["Fixed / Built-in Support", "3 Unknowns: A_x, A_y, and resisting moment M_A", "6 Unknowns: 3 forces + 3 couples", "Prevents all translations and all rotations (cantilever)"],
          ["Smooth Cable / Rope", "1 Unknown: Tension T pulling away", "1 Unknown: Tension T along cable line", "Cables only carry tension (T >= 0), never push"],
          ["Ball-and-Socket", "N/A (Spatial only)", "3 Unknowns: A_x, A_y, A_z (no couples)", "Free ball rotation in all 3 directions"],
          ["Journal Bearing", "N/A (Spatial only)", "2 Force components + 2 couple moments", "Allows axial translation and axial rotation"]
        ]
      },
      {
        title: "2. Equilibrium Equations & Two-Force Member Theorems",
        type: "reactions",
        items: [
          {
            equation: "\\sum F_x = 0, \\quad \\sum F_y = 0, \\quad \\sum M_A = 0 \\quad (\\text{2D Rigid Body})",
            description: "3 independent equations for 2D rigid bodies. Best strategy: place moment center at the pin support to eliminate 2 unknowns."
          },
          {
            equation: "\\sum \\vec{F} = 0, \\quad \\sum \\vec{M}_O = 0 \\implies 6 \\text{ scalar equations in 3D: } \\sum F_x=\\sum F_y=\\sum F_z=0, \\; \\sum M_x=\\sum M_y=\\sum M_z=0",
            description: "3D Spatial Rigid Body Equilibrium: determines up to 6 support reactions."
          },
          {
            equation: "F_s = k \\cdot s = k (l - l_0), \\quad T_1 = T_2 \\quad (\\text{Ideal Smooth Pulley})",
            description: "Linear spring: elongation s = current length l minus unstretched length l_0. Smooth pulley has constant tension."
          },
          {
            equation: "\\text{Two-Force Member: } \\vec{F}_A = -\\vec{F}_B \\implies \\text{pure axial load along segment } AB",
            description: "Two-Force Member: no intermediate loads; internal force acts directly along the line connecting its two pins."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // BRANCH 2: STRUCTURES, FRICTION & INERTIA (SHEETS 3 - 5)
  // =========================================================================
  {
    id: "sheet-stat-trusses-frames",
    category: "stat-trusses-frames",
    division: "structures_inertia",
    professor: "قسم الرياضيات والفيزياء الهندسية / الهندسة الميكانيكية",
    title: "ملخص تحليل الجمالونات (العقد والقطاعات) وقواعد التصفير والإطارات (A4)",
    titleEn: "Truss Analysis (Joints & Sections), Zero-Force Rules & Frame Disassembly (A4 Matrix)",
    subtitleEn: "Method of joints, zero-force inspection, method of sections, multi-force members, and pin reactions",
    subtitle: "ورقة قوانين مكثفة لاكتشاف الأعضاء الصفرية وحل الجمالونات والإطارات والآلات - هندسة شبرا",
    paperSize: "A4",
    pagesCount: 1,
    color: "border-orange-500",
    sections: [
      {
        title: "1. Zero-Force Members Visual Inspection Blueprint",
        type: "table",
        headers: ["Inspection Case", "Geometric Condition", "Zero-Force Conclusion", "Visual Rule"],
        rows: [
          ["Case 1: 2-Member Unloaded Joint", "Two non-collinear bars meet at a joint with NO external load", "F_1 = 0 AND F_2 = 0", "Both members carry zero load immediately"],
          ["Case 2: 3-Member Unloaded Joint", "Two members are collinear and the third is at an angle, NO load", "F_third = 0 (F_1 = F_2)", "Third non-collinear bar carries zero load"],
          ["Case 3: 2-Member Loaded Joint", "Two non-collinear bars where load acts collinear with bar 1", "F_2 = 0 (F_1 = P)", "Bar perpendicular/angled to load carries zero load"],
          ["Determinacy Check", "b + r = 2j (b = bars, r = reactions, j = joints)", "Determinate if stable", "If b + r < 2j: unstable collapse mechanism"]
        ]
      },
      {
        title: "2. Method of Sections & Frame Action-Reaction Protocol",
        type: "reactions",
        items: [
          {
            equation: "\\sum M_{\\text{intersection}} = 0 \\implies F_{\\text{target}} \\text{ solved in 1 step!}",
            description: "Method of Sections: cut through at most 3 unknown members. Take moment at the intersection of 2 cut members to isolate the 3rd."
          },
          {
            equation: "\\vec{F}_{C \\text{ on member 1}} = -\\vec{F}_{C \\text{ on member 2}} \\implies C_{x1} = -C_{x2}, \\quad C_{y1} = -C_{y2}",
            description: "Newton's 3rd Law for Frames: equal and opposite internal pin reactions upon disassembly."
          },
          {
            equation: "\\text{Assumed Sign Convention: } F > 0 \\implies \\text{Tension (T)}, \\quad F < 0 \\implies \\text{Compression (C)}",
            description: "Always draw member forces pulling AWAY from the joint (Tension). A positive result confirms tension."
          }
        ]
      }
    ]
  },

  {
    id: "sheet-stat-friction",
    category: "stat-friction",
    division: "structures_inertia",
    professor: "قسم الرياضيات والفيزياء الهندسية / الهندسة الميكانيكية",
    title: "ملخص قوانين الاحتكاك الجاف (كولوم)، الانزلاق مقابل الانقلاب واحتكاك السيور (A4)",
    titleEn: "Dry Coulomb Friction, Slipping vs Tipping Criterion & Belt Friction (A4 Matrix)",
    subtitleEn: "Static friction coefficient, impending motion, critical lateral loads, normal force shift, and capstan belt formula",
    subtitle: "ورقة قوانين مكثفة لمعايير الانزلاق والانقلاب وقانون السيور الأسية كابستان - هندسة شبرا",
    paperSize: "A4",
    pagesCount: 1,
    color: "border-orange-500",
    sections: [
      {
        title: "1. Dry Coulomb Friction States & Governing Laws",
        type: "table",
        headers: ["Friction State", "Governing Equation", "Relative Surface Motion", "Physical Significance"],
        rows: [
          ["Static Equilibrium", "F_s < mu_s · N", "Zero relative velocity (stationary)", "Friction self-adjusts to match external driving load"],
          ["Impending Motion (Critical)", "F_max = mu_s · N", "On the verge of slipping (threshold)", "Maximum possible resistance before breakaway"],
          ["Kinetic Friction (Sliding)", "F_k = mu_k · N", "Active continuous relative sliding", "Typically mu_k ≈ 0.75 mu_s (constant resistance)"],
          ["Angle of Static Friction", "tan(phi_s) = mu_s", "Resultant reaction angle R with normal N", "Block slides on incline when incline angle theta >= phi_s"]
        ]
      },
      {
        title: "2. Slipping vs. Tipping (Overturning) & Belt Mechanics",
        type: "reactions",
        items: [
          {
            equation: "P_{\\text{slip}} = \\mu_s W, \\quad P_{\\text{tip}} = W \\left(\\frac{b}{2 h}\\right)",
            description: "Compare critical forces: the smaller force dictates reality. If P_slip < P_tip, it slips; if P_tip < P_slip, it tips over."
          },
          {
            equation: "x = \\frac{P \\cdot h}{W} \\le \\frac{b}{2} \\quad (\\text{Location of Normal Reaction } N)",
            description: "Moment about base center: normal force shifts distance x toward the pivot edge. If x > b/2, tipping occurs."
          },
          {
            equation: "T_2 = T_1 \\, e^{\\mu \\beta} \\quad (T_2 > T_1, \\; \\beta \\text{ in RADIANS})",
            description: "Capstan Belt Friction: beta_rad = beta_deg x pi/180. One turn = 2pi rad. T2 is the tension on the impending motion side."
          }
        ]
      }
    ]
  },

  {
    id: "sheet-stat-centroids-inertia",
    category: "stat-centroids-inertia",
    division: "structures_inertia",
    professor: "قسم الرياضيات والفيزياء الهندسية / الهندسة الميكانيكية",
    title: "ملخص مراكز الثقل، نظريتي بابوس، وعزوم القصور الذاتي ونظرية شتينر للكمرات (A4)",
    titleEn: "Centroids, Pappus Theorems, Area Moments of Inertia & Steiner's Parallel Axis (A4 Matrix)",
    subtitleEn: "Composite area centroids, Pappus surface/volume theorems, parallel axis theorem, I-beam cross sections, and radius of gyration",
    subtitle: "ورقة قوانين مكثفة لجدول مراكز الثقل وعزوم القصور للقطاعات الإنشائية (I-Beam و T-Section) - هندسة شبرا",
    paperSize: "A4",
    pagesCount: 1,
    color: "border-red-500",
    sections: [
      {
        title: "1. Standard Geometrical Centroids & Inertia Formulas",
        type: "table",
        headers: ["Geometric Shape", "Area (A)", "Centroid Coordinates", "Centroidal Moment of Inertia (I_bar_x)"],
        rows: [
          ["Rectangle (b × h)", "A = b · h", "x_bar = b/2, y_bar = h/2", "I_bar_x = (b h³) / 12, I_base = (b h³) / 3"],
          ["Triangle (base b, height h)", "A = 1/2 b · h", "y_bar = h / 3 (measured from base)", "I_bar_x = (b h³) / 36, I_base = (b h³) / 12"],
          ["Circle (radius r)", "A = pi · r²", "x_bar = 0, y_bar = 0 (at center)", "I_bar_x = I_bar_y = (pi r⁴) / 4, J_O = (pi r⁴) / 2"],
          ["Semicircle (radius r)", "A = (pi r²) / 2", "y_bar = 4r / (3 pi) from diameter base", "I_base = (pi r⁴) / 8, I_bar_x ≈ 0.1098 r⁴"],
          ["Circular Arc (wire radius r)", "Length L = pi · r", "y_bar = 2r / pi from base diameter", "Linear centroid"]
        ]
      },
      {
        title: "2. Steiner's Parallel-Axis Theorem & Composite Beams Protocol",
        type: "reactions",
        items: [
          {
            equation: "\\bar{y} = \\frac{\\sum \\tilde{y}_i A_i}{\\sum A_i} \\quad (\\text{Holes and cutouts treated as } -A_i)",
            description: "Step 1 for Composite Sections: find the overall centroid y_bar (neutral axis) using the tabular method."
          },
          {
            equation: "I_x = \\sum \\left( \\bar{I}_{x\'i} + A_i \\, d_{yi}^2 \\right), \\quad d_{yi} = |\\tilde{y}_i - \\bar{y}|",
            description: "Steiner's Parallel-Axis Theorem: I_bar must be about each part's own centroid! d is the vertical distance to the overall neutral axis."
          },
          {
            equation: "k_x = \\sqrt{\\frac{I_x}{A}}, \\quad k_y = \\sqrt{\\frac{I_y}{A}} \\quad (\\text{Radius of Gyration})",
            description: "Structural column buckling criterion: smaller radius of gyration governs allowable compressive loads."
          },
          {
            equation: "A = 2\\pi \\bar{y} L \\quad (\\text{Surface of Revolution}), \\quad V = 2\\pi \\bar{y} A \\quad (\\text{Volume of Revolution})",
            description: "Theorems of Pappus-Guldinus: generating curve/area must not cross the axis of revolution."
          }
        ]
      }
    ]
  }
];
