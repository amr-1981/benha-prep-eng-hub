// Official Engineering Mechanics 1 (Statics) Curriculum (MEC 001)
// Faculty of Engineering at Shoubra (FES) - Benha University (Preparatory Year - Term 1)
// Strictly Divided into Two Distinct Academic Branches:
// 1. Force Systems, Moments & Equilibrium Branch (force_equilibrium)
// 2. Structures, Trusses, Friction & Inertia Branch (structures_inertia)

export const STATICS_FACULTY_INFO = {
  university: 'جامعة بنها',
  faculty: 'كلية الهندسة بشبرا',
  department: 'قسم الرياضيات والفيزياء الهندسية / قسم الهندسة الميكانيكية',
  courseNameAr: 'الميكانيكا الهندسية 1 (الاستاتيكا - علم السكون والاتزان)',
  courseNameEn: 'Engineering Mechanics 1 (Statics: Force Systems, Equilibrium & Structures)',
  courseCode: 'MEC 001',
  term: 'الفصل الدراسي الأول (الفرقة الإعدادية)',
  creditHours: 3,
  totalMarks: 125,
  finalExamMarks: 75,
  midtermExamMarks: 25,
  courseworkMarks: 25
};

export const STATICS_DIVISIONS = [
  {
    id: "all",
    titleAr: "المنهج الشامل للميكانيكا الهندسية 1 (استاتيكا)",
    titleEn: "Complete Engineering Statics Syllabus",
    shortTitleAr: "الكل (نظم القوى والاتزان + المنشآت والقصور الذاتي)",
    shortTitleEn: "Unified Statics",
    badge: "المنهج كاملاً (125 درجة)",
    icon: "Sparkles",
    color: "from-amber-600 via-orange-600 to-red-600",
    borderColor: "border-amber-500/40",
    description: "تصفح كافة موضوعات فرعي نظم القوى والعزوم والاتزان ثلاثي الأبعاد وتحليل الجمالونات والإطارات والاحتكاك ومراكز الثقل وعزوم القصور الذاتي."
  },
  {
    id: "force_equilibrium",
    titleAr: "الفرع الأول: نظم القوى والعزوم والازدواج والاتزان",
    titleEn: "Branch 1: Force Systems, Moments & Equilibrium",
    shortTitleAr: "نظم القوى والاتزان",
    shortTitleEn: "Forces & Equilibrium",
    badge: "نظم القوى والاتزان (Force & Equilibrium)",
    icon: "Compass",
    color: "from-amber-600 to-orange-600",
    borderColor: "border-amber-500/40",
    modulesCount: 5,
    topics: [
      "جبر المتجهات وتحليل القوى في المستوي والفراغ وزوايا الاتجاه (2D/3D Force Vectors & Direction Angles)",
      "عزم القوة حول نقطة ومحور ونظرية فارينون والازدواج (Moment of a Force, Varignon & Couple Systems)",
      "اختزال نظم القوى والازدواج والمحصلة المحورية (System Reduction, Single Resultant & Wrench)",
      "مخطط الجسم الحر واتزان الجسيم في الفراغ ونظم الزنبرك (Free-Body Diagram & Particle Equilibrium)",
      "ردود أفعال الركائز واتزان الجسم الجاسئ ثنائي وثلاثي الأبعاد (Rigid Body Equilibrium & Support Reactions)"
    ],
    description: "يشمل: تمثيل القوى كمتجهات كارتيزية بالفراغ، ضرب المتجهات القياسي والاتجاهي، حساب العزوم بالمحددات وعزم الازدواج، اختزال مجموعة قوى إلى قوة واحدة أو بريمة (Wrench)، شروط اتزان الجسيمات ومخطط الجسم الحر، ورسم ردود أفعال ركائز الأجسام الجاسئة في المستوي والفراغ وحسابها."
  },
  {
    id: "structures_inertia",
    titleAr: "الفرع الثاني: المنشآت والجمالونات والاحتكاك والقصور الذاتي",
    titleEn: "Branch 2: Structures, Friction, Centroids & Inertia",
    shortTitleAr: "المنشآت والاحتكاك والقصور",
    shortTitleEn: "Structures & Inertia",
    badge: "المنشآت والقصور الذاتي (Structures & Inertia)",
    icon: "Layers",
    color: "from-orange-600 to-red-600",
    borderColor: "border-orange-500/40",
    modulesCount: 5,
    topics: [
      "تحليل الجمالونات المستوية بطريقتي العقد والقطاعات والأعضاء الصفرية (Trusses: Joints, Sections & Zero-Force)",
      "تحليل الإطارات والآلات والقوى الداخلية (Frames, Machines & Multi-Force Members)",
      "قوانين الاحتكاك الجاف والانزلاق والانقلاب واحتكاك السيور (Dry Coulomb Friction, Tipping vs Slipping & Belts)",
      "مراكز الثقل والمراكز الهندسية ونظريتا بابوس-جولدين (Centroids of Composite Bodies & Pappus Theorems)",
      "عزوم القصور الذاتي للمساحات ونظرية المحاور المتوازية لشتينر (Area Moments of Inertia & Steiner's Theorem)"
    ],
    description: "يشمل: تحديد القوى في أعضاء الجمالونات بالشد والضغط، اكتشاف الأعضاء الصفرية بمجرد النظر، فصل الإطارات والآلات لحساب قوى المفصلات الداخلية، تحديد حدوث الانزلاق قبل الانقلاب للأجسام المعرضة لقوى أفقية، حساب إحداثيات مركز الثقل للأشكال المركبة بالجدول، ونظرية المحاور المتوازية لحساب عزم القصور الذاتي للقطاعات الإنشائية (I-Beam و T-Section)."
  }
];

export const STATICS_MODULES = [
  // =======================================================================
  // BRANCH 1: FORCE SYSTEMS, MOMENTS & EQUILIBRIUM (MODULES 1-5)
  // =======================================================================
  {
    id: 'stat-mod-vectors',
    number: 1,
    division: 'force_equilibrium',
    divisionBadge: 'نظم القوى والاتزان (Force & Equilibrium)',
    titleAr: 'جبر المتجهات وتحليل القوى في المستوي والفراغ وزوايا الاتجاه',
    titleEn: 'Vector Algebra, 2D/3D Force Components & Coordinate Direction Angles',
    icon: 'Compass',
    color: 'from-amber-600 to-orange-600',
    badge: 'الوحدة 01 • متجهات القوى بالفراغ',
    summary: 'تمثيل القوى كمتجهات كارتيزية ثلاثية الأبعاد، زوايا الاتجاه الكارتيزية، متجهات الموضع والوحدة على طول خط عمل القوة، ومحصلة القوى المتلاقية والضرب القياسي للإسقاط.',
    learningObjectives: [
      'Resolve concurrent forces into rectangular Cartesian vector components in 2D and 3D space.',
      'Express spatial forces using coordinate direction angles [α, β, γ] and verify cos²α + cos²β + cos²γ = 1.',
      'Construct position vectors between two spatial points and formulate force vectors along cables: F = F · u_AB.',
      'Apply the dot product (scalar product) to determine the angle between two lines and the parallel/perpendicular projections of a force.'
    ],
    keyFormulas: [
      {
        title: '3D Cartesian Force Vector Representation:',
        formula: '\\vec{F} = F_x \\mathbf{i} + F_y \\mathbf{j} + F_z \\mathbf{k} = F (\\cos\\alpha\\,\\mathbf{i} + \\cos\\beta\\,\\mathbf{j} + \\cos\\gamma\\,\\mathbf{k})',
        notes: 'Magnitude: |F| = sqrt(F_x^2 + F_y^2 + F_z^2). Fundamental condition: cos^2(alpha) + cos^2(beta) + cos^2(gamma) = 1.'
      },
      {
        title: 'Force Directed Along a Position Vector (Cable Tension):',
        formula: '\\vec{r}_{AB} = (x_B - x_A)\\mathbf{i} + (y_B - y_A)\\mathbf{j} + (z_B - z_A)\\mathbf{k}, \\quad \\vec{F} = F \\cdot \\mathbf{u}_{AB} = F \\left(\\frac{\\vec{r}_{AB}}{|\\vec{r}_{AB}|}\\right)',
        notes: 'Always calculate coordinates as (Destination - Origin): B minus A.'
      },
      {
        title: 'Dot Product & Projection Along an Axis:',
        formula: '\\vec{A} \\cdot \\vec{B} = |\\vec{A}||\\vec{B}|\\cos\\theta = A_x B_x + A_y B_y + A_z B_z, \\quad F_a = \\vec{F} \\cdot \\mathbf{u}_a',
        notes: 'Parallel component: F_parallel = F_a · u_a. Perpendicular component: F_perp = sqrt(F^2 - F_a^2).'
      }
    ],
    examHotspots: [
      'Given two coordinate angles alpha = 60° and beta = 45°, calculate the obtuse angle gamma and express the force as a Cartesian vector.',
      'Determine the tension vector acting along a cable anchored at A(0, 2, 4) m to ring B(3, -1, 0) m carrying a tension of 750 N.',
      'Find the magnitude of the projected component of a 3D force along the line of action of another vector using the dot product.'
    ],
    bilingualInsight: {
      titleEn: "Spatial Vectors: The Cornerstone of Statics",
      titleAr: "💡 الفهم والربط الهندسي بالعربي: متجهات الفراغ وزوايا الاتجاه",
      points: [
        "سر النجاح في استاتيكا الفراغ يبدأ دائماً بنقطتي البداية والنهاية للكابلات. احسب إحداثيات النقطتين بدقة متناهية من الرسم الهندسي، ثم اطرح (إحداثي النهاية - إحداثي البداية) لتحصل على متجه الموضع r_AB.",
        "زوايا الاتجاه الكارتيزية (Coordinate Direction Angles): تذكر دائماً أن cos²α + cos²β + cos²γ = 1. إذا طلب زاوية منفرجة (obtuse angle)، فاختر القيمة السالبة لـ cos لأن cos(θ) سالبة في الربع الثاني.",
        "الضرب القياسي (Dot Product): استخدمه فوراً في حالتين: إيجاد الزاوية بين كابلين أو قضيبين cos(θ) = (A · B) / (|A||B|)، أو إيجاد المركبة الموازية لقوة على محور F_parallel = F · u_axis."
      ],
      examTip: "سؤال مضمون في ميدتيرم وفاينال شبرا (15 درجة): نقطة تخرج منها 3 كابلات مثبتة في حوائط أو أرضية، والمطلوب كتابة متجهات الشد وإيجاد المحصلة."
    }
  },

  {
    id: 'stat-mod-moments',
    number: 2,
    division: 'force_equilibrium',
    divisionBadge: 'نظم القوى والاتزان (Force & Equilibrium)',
    titleAr: 'عزم القوة حول نقطة ومحور ونظرية فارينون والازدواج',
    titleEn: 'Moment of a Force About Points & Axes, Varignon\'s Theorem & Couples',
    icon: 'Activity',
    color: 'from-amber-600 to-red-600',
    badge: 'الوحدة 02 • العزوم وعزم الازدواج',
    summary: 'العزم القياسي ثنائي الأبعاد، العزم الاتجاهي ثلاثي الأبعاد باستخدام الضرب الاتجاهي والمحددات r × F، نظرية فارينون، عزم القوة حول محور فراغي، وعزم الازدواج كمتجه حر.',
    learningObjectives: [
      'Calculate 2D moments using scalar perpendicular distances (M = F · d) and directional sign conventions.',
      'Compute 3D moment vectors about a reference origin or point using the determinant vector cross product: M_O = r × F.',
      'Apply Varignon\'s theorem to simplify moment calculations by summing component moments.',
      'Evaluate the moment of a spatial force about an arbitrary designated axis: M_a = u_a · (r × F).',
      'Formulate the resultant couple moment of parallel, equal, and opposite force systems.'
    ],
    keyFormulas: [
      {
        title: '3D Vector Moment About a Point (Determinant Expansion):',
        formula: '\\vec{M}_O = \\vec{r} \\times \\vec{F} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ r_x & r_y & r_z \\\\ F_x & F_y & F_z \\end{vmatrix} = (r_y F_z - r_z F_y)\\mathbf{i} - (r_x F_z - r_z F_x)\\mathbf{j} + (r_x F_y - r_y F_x)\\mathbf{k}',
        notes: 'r is the position vector from the reference point O to ANY point on the line of action of force F.'
      },
      {
        title: 'Moment of a Force About a Specified Axis (Triple Scalar Product):',
        formula: 'M_a = \\mathbf{u}_a \\cdot (\\vec{r} \\times \\vec{F}) = \\begin{vmatrix} u_{ax} & u_{ay} & u_{az} \\\\ r_x & r_y & r_z \\\\ F_x & F_y & F_z \\end{vmatrix}',
        notes: 'Vector representation along the axis: M_a_vec = M_a · u_a. If the line of action of F intersects or is parallel to axis a, M_a = 0.'
      },
      {
        title: 'Couple Moment (Free Vector Property):',
        formula: '\\vec{M}_c = \\vec{r} \\times \\vec{F}',
        notes: 'r is the position vector directed from any point on the line of action of -F to any point on +F. A couple produces identical moment about ANY point in space.'
      }
    ],
    examHotspots: [
      'Calculate the moment of a 3D force acting at point P about point Q, choosing the position vector correctly as r_QP.',
      'Determine the moment of a spatial pipe assembly load about the diagonal axis passing through the origin and point (2, 3, 4) m.',
      'Show that the moment of a couple is independent of the reference origin point.'
    ],
    bilingualInsight: {
      titleEn: "Vector Moments & Physical Intuition",
      titleAr: "💡 الفهم والربط الهندسي بالعربي: العزوم وقاعدة اليد اليمنى والازدواج",
      points: [
        "متجه الموضع r في قانون r × F: ليس بالضرورة أن تذهب لنقطة تأثير القوة تحديداً، بل يمكنك اختيار 'أي نقطة تقع على خط عمل القوة' لتسهيل الحسابات وجعل بعض المركبات مساوية للصفر!",
        "عزم القوة حول محور M_axis: متى يكون عزم قوة حول محور مساوياً للصفر؟ في حالتين بديهيتين جداً: 1) إذا كانت القوة توازي المحور، 2) إذا كان خط عمل القوة يقطع المحور. احفظ هذه القاعدة لتوفر وقتاً هائلاً في الامتحان.",
        "عزم الازدواج (Couple Moment): الازدواج هو المتجه الوحيد في الاستاتيكا المسمى 'Free Vector' (متجه حر)؛ قيمته واتجاهه ثابتان تماماً بصرف النظر عن النقطة التي تحسب العزم حولها."
      ],
      examTip: "انتبه لإشارة المحدد عند فك الصف الثاني (-j): الخطأ الشائع لدى الطلاب هو نسيان إشارة السالب لمركبة j في محدد العزم."
    }
  },

  {
    id: 'stat-mod-equivalent-systems',
    number: 3,
    division: 'force_equilibrium',
    divisionBadge: 'نظم القوى والاتزان (Force & Equilibrium)',
    titleAr: 'اختزال نظم القوى والازدواج والمحصلة المحورية (البريمة Wrench)',
    titleEn: 'Equivalent Force-Couple Systems, Resultants & Wrench Reduction',
    icon: 'Layers',
    color: 'from-amber-600 to-yellow-600',
    badge: 'الوحدة 03 • اختزال النظم والبريمة',
    summary: 'نقل القوى ومكافئاتها، اختزال مجموعة قوى وعزوم معقدة إلى قوة وحيدة وازدواج عند نقطة مختارة، شروط الاختزال إلى قوة محصلة وحيدة في المستوي، واختزال النظم الفراغية العامة إلى بريمة (Wrench / Central Axis).',
    learningObjectives: [
      'Reduce any complex system of forces and couples to an equivalent single resultant force R and resultant couple moment M_RO at a specified point O.',
      'Identify systems that can be reduced to a single resultant force (coplanar, parallel, and concurrent systems).',
      'Determine the line of action and location coordinates (x, y) where a single resultant force acts in 2D systems.',
      'Formulate the reduction of general 3D force systems to a Wrench (central axis, collinear force and couple, and pitch calculation).'
    ],
    keyFormulas: [
      {
        title: 'Equivalent System at Reference Point O:',
        formula: '\\vec{R} = \\sum \\vec{F}, \\quad \\vec{M}_{RO} = \\sum \\vec{M}_O = \\sum (\\vec{r}_i \\times \\vec{F}_i) + \\sum \\vec{M}_{c}',
        notes: 'The resultant force R is invariant under the choice of point O, whereas M_RO depends on the chosen point.'
      },
      {
        title: 'Location of Single Resultant in 2D Systems (Coplanar):',
        formula: 'R_x = \\sum F_x, \\quad R_y = \\sum F_y, \\quad R \\cdot d = M_{RO} \\implies x = \\frac{M_{RO}}{R_y}, \\quad y = -\\frac{M_{RO}}{R_x}',
        notes: 'Intersection with x-axis occurs at (x, 0) where x · R_y = M_RO.'
      },
      {
        title: 'Wrench (Screwing Central Axis) Formulation in 3D:',
        formula: '\\vec{R} \\parallel \\vec{M}_{||}, \\quad M_{||} = \\frac{\\vec{R} \\cdot \\vec{M}_{RO}}{|\\vec{R}|}, \\quad p = \\frac{M_{||}}{|\\vec{R}|} = \\frac{\\vec{R} \\cdot \\vec{M}_{RO}}{|\\vec{R}|^2}',
        notes: 'p is the pitch of the wrench (dimension of length). The central axis consists of points P where r_P satisfies r_P x R = M_RO - M_parallel.'
      }
    ],
    examHotspots: [
      'Replace the three coplanar loads on a building frame with an equivalent resultant force and specify where its line of action intersects member AB.',
      'Reduce a set of parallel distributed loads and concentrated loads on a foundation slab to a single vertical force and find its center of pressure (x, y).',
      'Given a 3D system with R = (3i + 4j) kN and M_O = (6i + 8j + 10k) kN·m, find the pitch and axis equation of the equivalent wrench.'
    ],
    bilingualInsight: {
      titleEn: "Engineering System Reduction & Structural Equivalents",
      titleAr: "💡 الفهم والربط الهندسي بالعربي: اختزال القوى ومفهوم البريمة Wrench",
      points: [
        "لماذا نحتاج لاختزال النظم؟ عند تصميم قاعدة مبنى خرساني أو ركيزة جسر، لا نصمم لكل مسمار أو عمود بمفرده، بل نختزل كافة الأحمال إلى قوة رأسية محصلة وعزم دوران عند المركز الهندسي للقاعدة.",
        "نقل القوة الموازية: إذا نقلت قوة F من نقطة إلى أخرى تبعد مسافة d، يجب إضافة عزم ازدواج قيمته F · d لتعويض الدوران المفقود.",
        "البريمة (Wrench): هي أقصى درجات الاختزال في الفراغ ثلاثي الأبعاد، حيث تكون المحصلة R وعزم الازدواج M متوازيين تماماً ويعملان على نفس المحور المركزي (مثل حركة المسمار القلاووظ الذي يتقدم ويدور في نفس الاتجاه)."
      ],
      examTip: "في امتحانات شبرا، عندما يطلب 'Specify where the resultant line of action intersects the beam', احسب M_O حول الركيزة A وساوِها بـ R_y · x واستخرج x مباشرة."
    }
  },

  {
    id: 'stat-mod-particle-equilibrium',
    number: 4,
    division: 'force_equilibrium',
    divisionBadge: 'نظم القوى والاتزان (Force & Equilibrium)',
    titleAr: 'مخطط الجسم الحر (FBD) واتزان الجسيم في الفراغ ونظم الزنبرك',
    titleEn: 'Free-Body Diagrams (FBD), 2D/3D Particle Equilibrium & Spring Systems',
    icon: 'Compass',
    color: 'from-amber-600 to-orange-500',
    badge: 'الوحدة 04 • اتزان الجسيم ومخطط FBD',
    summary: 'رسم مخطط الجسم الحر المعزول بدقة، تطبيق معادلات اتزان الجسيم في المستوي والفراغ، حساب الشد في كابلات التثبيت والبكرات الملساء، واستطالة النوابض المرنة الخطية بموجب قانون هوك.',
    learningObjectives: [
      'Construct a complete and rigorous Free-Body Diagram (FBD) isolating a single particle or concurrent concurrent ring.',
      'Formulate and solve the scalar equations of equilibrium for a particle in 2D: Σ F_x = 0, Σ F_y = 0.',
      'Solve 3D particle equilibrium problems with 3 cable unknowns using the vector equation: Σ F = 0 (Σ F_x = 0, Σ F_y = 0, Σ F_z = 0).',
      'Incorporate linear elastic springs (F = k · s = k(l - l_0)) and frictionless pulleys (constant cable tension).'
    ],
    keyFormulas: [
      {
        title: 'Conditions of Particle Equilibrium (Newton\'s First Law):',
        formula: '\\sum \\vec{F} = 0 \\implies \\sum F_x = 0, \\quad \\sum F_y = 0, \\quad \\sum F_z = 0',
        notes: 'Valid for concurrent force systems where the lines of action of all forces pass through a single point (no moment equations needed).'
      },
      {
        title: 'Linear Elastic Spring Constitutive Equation (Hooke\'s Law):',
        formula: 'F_s = k \\cdot s = k (l - l_0)',
        notes: 'k is the spring stiffness (N/m), l is the stretched length, l_0 is the unstretched original length, and s is the stretch or elongation.'
      },
      {
        title: 'Ideal Frictionless Pulley Condition:',
        formula: 'T_1 = T_2 = T',
        notes: 'A continuous cable passing over a smooth, frictionless pulley maintains identical tension throughout its length.'
      }
    ],
    examHotspots: [
      'Determine the tension in three cables AB, AC, and AD supporting a crate of mass 250 kg in spatial equilibrium.',
      'Find the required unstretched length of spring AC (stiffness k = 400 N/m) to hold a 20-kg cylinder in the horizontal position theta = 30°.',
      'Analyze a multi-pulley hoist system supporting a suspended concrete block and determine the operator pulling force.'
    ],
    bilingualInsight: {
      titleEn: "The Master Skill: Drawing an Uncompromising FBD",
      titleAr: "💡 الفهم والربط الهندسي بالعربي: مخطط الجسم الحر FBD وحل المجاهيل",
      points: [
        "قاعدة ذهبية معتمدة في هندسة شبرا: 50% من درجة أي مسألة استاتيكا تذهب لرسم مخطط الجسم الحر (FBD). إذا رسمت الـ FBD صحيحاً مع الأسهم والزوايا، فإن كتابة المعادلات تصبح مجرد تحصيل حاصل.",
        "قواعد الـ FBD الصارمة: 1) اعزل الجسيم تماماً عن محيطه، 2) استبدل كل كابل بقوة شد متجهة دائماً 'بعيداً عن الجسيم' (Cables can only pull, never push!), 3) استبدل البكرة الملساء بقوتي شد متساويتين على جانبيها.",
        "في مسائل الفراغ ثلاثية الأبعاد (3D): لا تحاول التحليل بزوايا مائلة معقدة! اكتب كل شد بصيغة متجهة T_i · u_i، ثم اجمع معاملات i و j و k وضعها مساوية للصفر لتحصل على نظام 3 معادلات بـ 3 مجاهيل يحل بالآلة الحاسبة فوراً (Mode 5-2)."
      ],
      examTip: "إذا احتوت المسألة على زنبرك (Spring)، حدد أولاً طوله الأصلي غير المشدود l_0 ثم طوله في وضع الاتزان l باستخدام نظرية فيثاغورس، لتجد الاستطالة s = l - l_0."
    }
  },

  {
    id: 'stat-mod-rigid-body-equilibrium',
    number: 5,
    division: 'force_equilibrium',
    divisionBadge: 'نظم القوى والاتزان (Force & Equilibrium)',
    titleAr: 'ردود أفعال الركائز واتزان الجسم الجاسئ في المستوي والفراغ',
    titleEn: 'Support Reactions & Rigid Body Equilibrium in 2D and 3D',
    icon: 'Activity',
    color: 'from-amber-600 to-yellow-500',
    badge: 'الوحدة 05 • اتزان الجسم الجاسئ والركائز',
    summary: 'النمذجة الرياضية لركائز المنشآت (المفصلات Pins، الأسطوانات Rollers، والركائز الثابتة Fixed Supports)، معادلات اتزان الجسم الجاسئ، تحليل الأعضاء ثنائية وثلاثية القوى، ومحددات الاستقرار والاستاتيكا المحددة.',
    learningObjectives: [
      'Model physical engineering supports accurately with their reactive forces and moments in 2D and 3D.',
      'Formulate and solve the 3 scalar equations of equilibrium for 2D rigid bodies: Σ F_x = 0, Σ F_y = 0, Σ M_A = 0.',
      'Identify two-force members (equal, opposite, collinear forces) and three-force members (concurrent or parallel lines of action) to accelerate problem solving.',
      'Analyze 3D rigid bodies with 6 equilibrium equations and compute reactions at ball-and-socket, hinge, and bearing supports.',
      'Evaluate static determinacy, statical indeterminacy, and geometric instability.'
    ],
    keyFormulas: [
      {
        title: '2D Rigid Body Equilibrium Equations (Full Determinacy):',
        formula: '\\sum F_x = 0, \\quad \\sum F_y = 0, \\quad \\sum M_A = 0',
        notes: 'Alternative set: Sum M_A = 0, Sum M_B = 0, Sum F_x = 0 (provided the line AB is not perpendicular to x-axis).'
      },
      {
        title: 'Support Reactions in 2D Engineering Mechanics:',
        formula: '\\text{Roller / Rocker: } 1 \\text{ Unknown } (N \\perp \\text{surface}), \\quad \\text{Pin / Hinge: } 2 \\text{ Unknowns } (A_x, A_y), \\quad \\text{Fixed Support: } 3 \\text{ Unknowns } (A_x, A_y, M_A)',
        notes: 'A smooth pin prevents translation in 2 directions but permits rotation (no moment). A fixed support prevents all translation and rotation.'
      },
      {
        title: 'Two-Force Member Equilibrium Theorem:',
        formula: '\\vec{F}_A + \\vec{F}_B = 0 \\implies |\\vec{F}_A| = |\\vec{F}_B| = F, \\quad \\text{Line of action collinear with segment } AB',
        notes: 'A member with no loads applied between its two pin-connected ends carries purely axial tension or compression.'
      }
    ],
    examHotspots: [
      'Calculate support reactions at pin A and roller B for an overhanging crane girder subjected to uniform distributed loads (UDL) and point loads.',
      'Solve for reactions of a bent rod supported by a ball-and-socket at A, a smooth journal bearing at B, and a cable at C.',
      'Identify two-force members in a complex lifting linkage to eliminate 4 unknown internal reaction components.'
    ],
    bilingualInsight: {
      titleEn: "Rigid Body Equilibrium & Support Reaction Mastery",
      titleAr: "💡 الفهم والربط الهندسي بالعربي: أنواع الركائز واتزان الجسم الجاسئ",
      points: [
        "الركيزة الدحرجة (Roller): تسمح بالحركة الأفقية وتمنع الحركة الرأسية، لذلك لها رد فعل واحد فقط عمودي على سطح التدحرج.",
        "المفصلة الملساء (Pin / Hinge): تسمح بالدوران الحر للكمرة حول المسمار، لكنها تمنع أي إزاحة رأسية أو أفقية، لذلك لها مركبتان مجهولتان (A_x, A_y) ولا يوجد عزم رد فعل.",
        "الركيزة المثبتة بالجدار (Fixed / Built-in Support): تمنع الحركة الأفقية والرأسية والدوران تماماً، ولذلك تمتلك 3 مجاهيل كاملة: رد فعل أفقي A_x، رد فعل رأسي A_y، وعزم تثبيت مقاوم M_A.",
        "أهم استراتيجية حسابية: عند كتابة معادلة العزوم Σ M = 0، اختر دائماً النقطة التي يمر بها أكبر عدد ممكن من المجاهيل (غالباً المفصلة Pin A) لتلغي عزومها وتستخرج مجهولاً واحداً بضربة واحدة."
      ],
      examTip: "سؤال أساسي في كل امتحان فاينال (20 درجة): كمرة أو إطار به ركيزة ثابتة ومفصلية وقوى موزعة مستطيلة ومثلثة، احسب ردود الأفعال بدقة."
    }
  },

  // =======================================================================
  // BRANCH 2: STRUCTURES, FRICTION & INERTIA (MODULES 6-10)
  // =======================================================================
  {
    id: 'stat-mod-trusses',
    number: 6,
    division: 'structures_inertia',
    divisionBadge: 'المنشآت والقصور الذاتي (Structures & Inertia)',
    titleAr: 'تحليل الجمالونات المستوية بطريقتي العقد والقطاعات والأعضاء الصفرية',
    titleEn: 'Structural Analysis of Plane Trusses: Joints, Sections & Zero-Force Members',
    icon: 'Layers',
    color: 'from-orange-600 to-red-600',
    badge: 'الوحدة 06 • تحليل الجمالونات Trusses',
    summary: 'افتراضات الجمالونات البسيطة، شرط التحديد الاستاتيكي b + r = 2j، طريقة العقد (Method of Joints)، قواعد اكتشاف الأعضاء الصفرية (Zero-Force Members) بالنظر، وطريقة القطاعات (Method of Sections) للأعضاء الداخلية.',
    learningObjectives: [
      'Verify the static determinacy and stability of plane trusses using the criterion: b + r = 2j.',
      'Identify zero-force members immediately by visual inspection using the 2-member and 3-member rules.',
      'Apply the Method of Joints to solve for internal forces in truss members and classify each as Tension (T) or Compression (C).',
      'Apply the Method of Sections to directly determine internal forces in specific target members by cutting through at most 3 non-concurrent members.'
    ],
    keyFormulas: [
      {
        title: 'Static Determinacy Criterion for Plane Trusses:',
        formula: 'b + r = 2j',
        notes: 'b = number of members, r = number of support reaction components, j = number of joints. If b + r > 2j: statically indeterminate.'
      },
      {
        title: 'Zero-Force Member Inspection Rules:',
        formula: '\\text{Rule 1: } 2 \\text{ non-collinear members at unloaded joint } \\implies F_1 = F_2 = 0 \\\\ \\text{Rule 2: } 2 \\text{ collinear } + 1 \\text{ non-collinear member at unloaded joint } \\implies F_{\\text{non-collinear}} = 0',
        notes: 'Eliminating zero-force members simplifies the truss geometry drastically before calculating reactions.'
      },
      {
        title: 'Method of Sections Equilibrium Equations:',
        formula: '\\sum F_x = 0, \\quad \\sum F_y = 0, \\quad \\sum M_O = 0',
        notes: 'Pass an imaginary cut through no more than 3 members with unknown forces. Select point O at the intersection of two unknown cut members.'
      }
    ],
    examHotspots: [
      'Inspect a Pratt or Howe bridge truss and identify all zero-force members, providing academic reasoning for each.',
      'Using the Method of Sections, find the force in members BC, CG, and GF of a roof truss and state whether in tension or compression.',
      'Use the Method of Joints to determine the force in every member of a loaded tower pin truss.'
    ],
    bilingualInsight: {
      titleEn: "Trusses: Fast Methods & Zero-Force Detection",
      titleAr: "💡 الفهم والربط الهندسي بالعربي: أسرار حل الجمالونات بدون تضييع وقت",
      points: [
        "ما هو الجمالون (Truss)؟ هيكل هندسي خفيف عالي المقاومة يتكون من قضبان مستقيمة متصلة بمفصلات ملساء (Pins)، وتؤثر كافة الأحمال عند العقد فقط (Joints). وبالتالي كل عضو هو Two-Force Member معرض لشد أو ضغط فقط.",
        "اكتشاف الأعضاء الصفرية (Zero-Force Members): 1) عقدة بها عضوان فقط غير متوازيين ولا توجد قوى خارجية -> كلاهما صفر فوراً! 2) عقدة بها 3 أعضاء، اثنان منهما على استقامة واحدة وبدون قوى خارجية -> العضو الثالث غير المشترك معهما في الاستقامة صفر فوراً!",
        "متى تستخدم طريقة العقد ومتى طريقة القطاعات؟ إذا طلب في السؤال القوى في كل الأعضاء (All members) استخدم طريقة العقد (Method of Joints). أما إذا طلب 2 أو 3 أعضاء محددة في منتصف الجمالون، فاستخدم طريقة القطاعات (Method of Sections) واقطع الجمالون بنصفين لتحصل على الحل في دقيقتين."
      ],
      examTip: "دائماً افرض القوى المجهولة في الأعضاء كـ 'شد' (Tension خارج من العقدة). إذا خرجت الإشارة موجبة فهو شد (T)، وإذا سالبة فهو ضغط (C)."
    }
  },

  {
    id: 'stat-mod-frames-machines',
    number: 7,
    division: 'structures_inertia',
    divisionBadge: 'المنشآت والقصور الذاتي (Structures & Inertia)',
    titleAr: 'تحليل الإطارات والآلات والقوى والمفصلات الداخلية',
    titleEn: 'Analysis of Frames & Machines: Internal Pin Forces & Multi-Force Members',
    icon: 'Activity',
    color: 'from-orange-600 to-amber-600',
    badge: 'الوحدة 07 • الإطارات والآلات Frames',
    summary: 'الفرق الجوهري بين الجمالونات والإطارات، الأعضاء متعددة القوى (Multi-Force Members)، فصل أجزاء الإطار ورسم مخططات FBD المستقلة، تطبيق قانون نيوتن الثالث (Action-Reaction Pairs)، وتحليل الميزة الميكانيكية للآلات.',
    learningObjectives: [
      'Distinguish clearly between trusses (only 2-force members) and frames/machines (containing at least one multi-force member).',
      'Disassemble multi-part structures into independent free bodies and apply Newton\'s 3rd law to internal pin reactions.',
      'Formulate independent equilibrium equations for each disassembled member to solve for internal and external reactions.',
      'Analyze the mechanical advantage and force amplification delivered by machines (pliers, vice grips, toggle clamps).'
    ],
    keyFormulas: [
      {
        title: 'Newton\'s Third Law for Internal Pin Connections:',
        formula: '\\vec{F}_{A \\text{ on } 1} = -\\vec{F}_{A \\text{ on } 2} \\implies A_{x1} = -A_{x2}, \\quad A_{y1} = -A_{y2}',
        notes: 'If an internal pin reaction is assumed to act right and up on member 1, it MUST be drawn acting left and down on member 2.'
      },
      {
        title: 'Number of Independent Equilibrium Equations:',
        formula: 'N_{\\text{eq}} = 3 \\times N_{\\text{members}}',
        notes: 'A frame composed of 3 separate multi-force members provides 3 x 3 = 9 independent scalar equilibrium equations.'
      },
      {
        title: 'Mechanical Advantage (MA) of Engineering Machines:',
        formula: '\\text{MA} = \\frac{F_{\\text{output}}}{F_{\\text{input}}}',
        notes: 'Calculated by isolating the handles, jaws, or gripping levers and applying moment equilibrium.'
      }
    ],
    examHotspots: [
      'Determine the horizontal and vertical components of force which the pin at C exerts on member ABC of an A-frame structure.',
      'Calculate the clamping force exerted on the pipe by the jaws of a toggle clamp mechanism given an input handle force of 150 N.',
      'Analyze a hydraulic excavator arm and find the force developed in hydraulic cylinder AB.'
    ],
    bilingualInsight: {
      titleEn: "Frames & Machines: Action-Reaction Integrity",
      titleAr: "💡 الفهم والربط الهندسي بالعربي: مفتاح حل الإطارات وقانون الفعل ورد الفعل",
      points: [
        "الفرق الجوهري: في الجمالونات (Trusses) كل الأعضاء هي Two-force members ولا توجد أحمال في منتصف القضيب. في الإطارات (Frames) يوجد عضو واحد على الأقل تؤثر عليه قوى في منتصفه (Multi-force member) مسببة عزوم انحناء.",
        "قانون نيوتن الثالث هو الحاكم: عندما تفصل المفصلة المشتركة (Pin C) بين عضوين: إذا وضعت C_x جهة اليمين و C_y للأعلى على العضو الأول، فيجب إجبارياً وبدون نقاش أن تضعهما جهة اليسار وللأسفل على العضو الثاني!",
        "استراتيجية حل مسائل الآلات (Machines): ابدأ بدراسة اتزان الهيكل ككل إذا كانت الركائز الخارجية قابلة للحل، ثم افصل العضو الذي يحتوي على القوة المطلوبة وابحث عن أعضاء Two-force members لتختصر عدد المجاهيل."
      ],
      examTip: "سؤال شبرا الكلاسيكي: كماشة (Pliers) أو مقص حديد: يعطيك قوة اليد (100 N) ويطلب قوة القطع على السلك عند الفك. افصل ذراعاً واحداً فقط وخذ العزم حول المسمار الرئيسي."
    }
  },

  {
    id: 'stat-mod-friction',
    number: 8,
    division: 'structures_inertia',
    divisionBadge: 'المنشآت والقصور الذاتي (Structures & Inertia)',
    titleAr: 'قوانين الاحتكاك الجاف (كولوم) والانزلاق والانقلاب واحتكاك السيور',
    titleEn: 'Dry Coulomb Friction, Slipping vs Tipping (Overturning) & Belt Friction',
    icon: 'Activity',
    color: 'from-orange-600 to-red-500',
    badge: 'الوحدة 08 • الاحتكاك الجاف والانقلاب',
    summary: 'قوانين الاحتكاك الجاف لكولوم، معامل الاحتكاك السكوني الحرج وحالة وشك الحركة (Impending Motion)، زاوية الاحتكاك، تحليل الانزلاق مقابل الانقلاب (Slipping vs Tipping)، واحتكاك السيور الملفوفة حول أسطوانة ثابتة.',
    learningObjectives: [
      'Apply Coulomb\'s laws of dry friction and distinguish between static equilibrium, impending motion, and kinetic sliding.',
      'Calculate the angle of static friction: φ_s = tan⁻¹(μ_s) and the resultant contact reaction angle.',
      'Perform rigorous Slipping vs. Tipping (Overturning) analyses for blocks subjected to lateral loads.',
      'Determine the position x of the normal force reaction N to verify that the contact remains within the base dimension (x ≤ b/2).',
      'Solve belt friction problems using the exponential capstan formula: T_2 = T_1 · e^(μ β).'
    ],
    keyFormulas: [
      {
        title: 'Coulomb\'s Law of Dry Friction:',
        formula: 'F_s \\le \\mu_s N, \\quad F_{\\text{max}} = \\mu_s N \\text{ (Impending Motion)}, \\quad F_k = \\mu_k N \\text{ (Sliding)}',
        notes: 'Friction force always opposes the relative motion or the tendency of motion. mu_k is typically 20-30% less than mu_s.'
      },
      {
        title: 'Critical Horizontal Force for Slipping vs Tipping:',
        formula: 'P_{\\text{slip}} = \\mu_s W, \\quad P_{\\text{tip}} = W \\left(\\frac{b}{2 h}\\right)',
        notes: 'The smaller of the two critical forces dictates the failure mode: If P_slip < P_tip, the block slips first; if P_tip < P_slip, it tips first.'
      },
      {
        title: 'Belt Friction Equation (Capstan Formula):',
        formula: 'T_2 = T_1 \\, e^{\\mu \\beta} \\quad (T_2 > T_1)',
        notes: 'beta is the total angle of contact in RADIANS (beta_rad = beta_deg x pi/180). T_2 is the tension pulling in the direction of impending motion.'
      }
    ],
    examHotspots: [
      'A uniform crate of mass 50 kg rests on a rough floor (mu_s = 0.35). If a horizontal force P is applied at height h, determine the maximum height h so the crate slips before tipping.',
      'Calculate the location x of the normal reaction on a machine base and verify whether tipping occurs under working loads.',
      'Find the minimum force required to hold a 500-kg load using a rope wrapped 2.5 turns around a rough bollard (mu_s = 0.25).'
    ],
    bilingualInsight: {
      titleEn: "Friction Mechanics: Will It Slide or Will It Tip?",
      titleAr: "💡 الفهم والربط الهندسي بالعربي: الاحتكاك، الانزلاق والانقلاب واحتكاك السيور",
      points: [
        "أهم خطأ في الاستاتيكا: وضع F = μ_s N تلقائياً في أي مسألة! قوة الاحتكاك الساكن هي قوة ذاتية الضبط (Self-adjusting) تأخذ القيمة اللازمة فقط لمنع الحركة (F ≤ μ_s N). لا تضع F = μ_s N إلا إذا ذكر السؤال صراحة: 'On the verge of slipping' أو 'Impending motion'.",
        "مسألة الانزلاق مقابل الانقلاب (Slipping vs Tipping): احسب القوة اللازمة للانزلاق P_slip = μ_s N، ثم احسب القوة اللازمة للانقلاب P_tip بأخذ العزم حول حافة الانقلاب (حيث ينتقل رد الفعل N بالكامل إلى الحافة). القوة الأقل هي التي ستحدث أولاً في الواقع!",
        "احتكاك السيور (Belt Friction): احرص دائماً على تحويل زاوية الالتفاف β من درجات إلى راديان (Radians). لفتان ونصف = 2.5 × 2π = 5π راديان. وتذكر أن T_2 دائماً هي الشد الأكبر الذي يوشك على سحب الحبل."
      ],
      examTip: "سؤال شبرا الدائم: كتلة خشبية على أرضية خشنة بقوة مائلة، حدد هل يحدث انزلاق أم انقلاب أم يظل الجسم متزناً تماماً."
    }
  },

  {
    id: 'stat-mod-centroids',
    number: 9,
    division: 'structures_inertia',
    divisionBadge: 'المنشآت والقصور الذاتي (Structures & Inertia)',
    titleAr: 'مراكز الثقل والمراكز الهندسية للمساحات المركبة ونظريتا بابوس-جولدين',
    titleEn: 'Centroids of Areas & Composite Bodies, Center of Gravity & Pappus Theorems',
    icon: 'Compass',
    color: 'from-orange-600 to-amber-500',
    badge: 'الوحدة 09 • مراكز الثقل Centroids',
    summary: 'مفهوم مركز الثقل G والمركز الهندسي C، التكامل المحدد لإيجاد مراكز المساحات والخطوط، طريقة المساحات المركبة (Composite Areas Method) بالجدول النظامي، ومعالجة التجاويف كأوزان سالبة، ونظريتا بابوس-جولدين لحساب مساحات وحجوم الأجسام الدورانية.',
    learningObjectives: [
      'Locate the centroid of areas bounded by analytical curves using single and double calculus integration.',
      'Determine the centroid coordinates (x_bar, y_bar) for complex composite engineering cross-sections using tabular summation.',
      'Treat holes, cutouts, and voids accurately as negative areas in composite centroid formulations.',
      'Apply the First and Second Theorems of Pappus-Guldinus to compute the surface area and volume of revolution.'
    ],
    keyFormulas: [
      {
        title: 'Centroid of Composite Areas (Tabular Formulation):',
        formula: '\\bar{x} = \\frac{\\sum \\tilde{x}_i A_i}{\\sum A_i}, \\quad \\bar{y} = \\frac{\\sum \\tilde{y}_i A_i}{\\sum A_i}',
        notes: 'Construct a 5-column table: Part | Area A_i | Centroid x_tilde | Centroid y_tilde | A_i · x_tilde | A_i · y_tilde. Holes have negative area.'
      },
      {
        title: 'Centroids of Standard Geometrical Shapes:',
        formula: '\\text{Triangle: } \\bar{y} = \\frac{h}{3} \\text{ (from base)}, \\quad \\text{Semicircle of radius } r: \\bar{y} = \\frac{4r}{3\\pi}, \\quad \\text{Quarter circle: } \\bar{x} = \\bar{y} = \\frac{4r}{3\\pi}',
        notes: 'For circular arc (wire): y_bar = 2r / pi.'
      },
      {
        title: 'Theorems of Pappus-Guldinus (Bodies of Revolution):',
        formula: '\\text{Surface Area: } A = 2\\pi \\bar{y} L, \\quad \\text{Volume of Revolution: } V = 2\\pi \\bar{y} A',
        notes: 'The revolving curve or area must not cross the axis of revolution. y_bar is the distance from the generating curve/area centroid to the axis.'
      }
    ],
    examHotspots: [
      'Locate the centroid (x_bar, y_bar) of an asymmetric structural channel with a circular hole cutout.',
      'Find the centroid of the parabolic area bounded by y = x^2 and y = 4 using a vertical differential element dA = y dx.',
      'Using Pappus-Guldinus theorems, calculate the volume and total surface area of a toroidal ring (doughnut) formed by revolving a circle about an axis.'
    ],
    bilingualInsight: {
      titleEn: "Centroids: Table Setup & Pappus Elegance",
      titleAr: "💡 الفهم والربط الهندسي بالعربي: جدول مراكز الثقل ونظريتا بابوس-جولدين",
      points: [
        "طريقة الجدول هي سر السرعة والدقة: في أي مسألة مركز ثقل لشكل مركب (مثل حرف T أو L أو كمرة بقنوات مجوفة)، قسّم الشكل إلى مستطيلات ومثلثات وأشكال قياسية. وخصص سطراً لكل فراغ أو ثقب بإشارة مساحة سالبة (-A).",
        "احذر من نقطة المرجع (Origin): حدد محورين متعامدين (x, y) من أقصى أسفل ويسار الشكل، وقس كل إحداثيات مراكز الأجزاء من هذا المرجع تحديداً.",
        "نظريتا بابوس-جولدين (Pappus Theorems): تمنحك اختصاراً سحرياً لإيجاد مساحة سطح أو حجم أي جسم دوراني (خزان كروي، ماسورة دائرية مخروطية) بضرب محيط الدوران 2π·y_bar في طول الخط L للمساحة السطحية، أو في مساحة المقطع A للحجم."
      ],
      examTip: "حفظ فوري للامتحان: مركز نصف الدائرة المصمتة y_bar = 4r / (3π)، بينما مركز القوس السلكي لنصف الدائرة y_bar = 2r / π."
    }
  },

  {
    id: 'stat-mod-moments-of-inertia',
    number: 10,
    division: 'structures_inertia',
    divisionBadge: 'المنشآت والقصور الذاتي (Structures & Inertia)',
    titleAr: 'عزوم القصور الذاتي للمساحات ونظرية المحاور المتوازية لشتينر',
    titleEn: 'Area Moments of Inertia, Polar Inertia & Steiner\'s Parallel-Axis Theorem',
    icon: 'Layers',
    color: 'from-orange-600 to-red-600',
    badge: 'الوحدة 10 • عزم القصور الذاتي Inertia',
    summary: 'العزم الثاني للمساحة (Second Moment of Area)، عزم القصور الذاتي القطبي (Polar Moment J_O)، نظرية المحاور المتوازية (Steiner\'s Parallel-Axis Theorem)، نصف قطر القصور الذاتي (Radius of Gyration k)، وحساب عزم القصور الذاتي للقطاعات الإنشائية المركبة (I-Beams, T-Beams, Channels).',
    learningObjectives: [
      'Define the second moment of area (area moment of inertia) about horizontal and vertical axes: I_x = ∫ y² dA, I_y = ∫ x² dA.',
      'Compute the polar moment of inertia J_O and verify the perpendicular axis theorem: J_O = I_x + I_y.',
      'Apply Steiner\'s Parallel-Axis Theorem (I = I_bar + A · d²) to transfer moments of inertia to arbitrary parallel axes.',
      'Calculate the area moments of inertia I_x and I_y for composite structural sections (I-beams, T-sections, angles).',
      'Determine the radius of gyration: k_x = sqrt(I_x / A).'
    ],
    keyFormulas: [
      {
        title: 'Area Moments of Inertia of Standard Geometrical Cross-Sections:',
        formula: '\\text{Rectangle: } \\bar{I}_x = \\frac{b h^3}{12}, \\quad I_{\\text{base}} = \\frac{b h^3}{3}, \\quad \\text{Circle: } \\bar{I}_x = \\bar{I}_y = \\frac{\\pi r^4}{4}, \\quad J_O = \\frac{\\pi r^4}{2}',
        notes: 'For a triangle with base b and height h: I_bar_x = (b h^3)/36, and I_base = (b h^3)/12.'
      },
      {
        title: 'Steiner\'s Parallel-Axis Theorem (Transfer Formula):',
        formula: 'I_x = \\bar{I}_{x\'} + A \\, d_y^2, \\quad I_y = \\bar{I}_{y\'} + A \\, d_x^2',
        notes: 'I_bar MUST be the moment of inertia passing through the component\'s own centroidal axis! d is the perpendicular distance between the two parallel axes.'
      },
      {
        title: 'Radius of Gyration:',
        formula: 'k_x = \\sqrt{\\frac{I_x}{A}}, \\quad k_y = \\sqrt{\\frac{I_y}{A}}, \\quad k_O = \\sqrt{\\frac{J_O}{A}}',
        notes: 'Represents the distance from the reference axis at which the entire area could be concentrated without altering its moment of inertia.'
      }
    ],
    examHotspots: [
      'Calculate the centroidal moment of inertia I_x about the neutral horizontal axis for a built-up welded I-beam section.',
      'Given an asymmetric T-section, first locate the centroid y_bar, then evaluate the moment of inertia about the centroidal x-axis.',
      'Determine the polar moment of inertia and radius of gyration k_O for a hollow circular shaft with outer radius 60 mm and inner radius 40 mm.'
    ],
    bilingualInsight: {
      titleEn: "Area Inertia: The Structural Engineer's Lifeline",
      titleAr: "💡 الفهم والربط الهندسي بالعربي: عزم القصور الذاتي ونظرية شتينر",
      points: [
        "لماذا تصنع كمرات الجسور على شكل حرف I؟ لأن عزم القصور الذاتي I_x يتناسب طردياً مع مربع المسافة y² من المحور المحايد (Neutral Axis). بوضع معظم مساحة المعدن في الجناحين (Flanges) بعيداً عن المركز، نحصل على أقصى مقاومة للانحناء بأقل وزن ممكن!",
        "نظرية شتينر (Parallel-Axis Theorem): I = I_bar + A·d². احذر: I_bar يجب إجبارياً أن تكون حول محور يمر بمركز ثقل الشكل الفرعي نفسه! لا تنقل أبداً من محور غير مركزي إلى محور غير مركزي مباشرة.",
        "خطوات حل مسألة الفاينال للكمرات المركبة: 1) احسب y_bar للمقطع كاملاً أولاً من جدول مراكز الثقل، 2) أنشئ جدول القصور الذاتي واحسب I_bar لكل مستطيل (bh³/12)، 3) احسب المسافة d بين مركز ثقل كل مستطيل و y_bar العام، 4) اجمع I_bar + A·d² لكل الأجزاء لتحصل على I_total."
      ],
      examTip: "سؤال ختام امتحان فاينال شبرا (20 درجة كاملة): كمرة I-Beam أو T-Section: احسب مكان المركز الهندسي y_bar ثم احسب عزم القصور الذاتي I_x ونصف قطر القصور k_x."
    }
  }
];

export const STATICS_EXAM_TIPS = [
  {
    category: 'spatial_vectors',
    title: 'قاعدة الإشارات ومتجهات الموضع في الفراغ 3D',
    tipAr: 'في مسائل الفراغ، احسب إحداثيات النقاط بعناية من محاور الرسم. ثم اطرح إحداثيات نقطة الوصول من نقطة البداية لمتجه الموضع. اقسم على المعيار لتحصل على متجه الوحدة u، واضرب في قيمة القوة القياسية. هذا يضمن إشارات صحيحة 100% لمركبات i و j و k.',
    tipEn: 'In 3D problems, compute coordinate coordinates (Destination - Origin) to get r. Divide by magnitude to get unit vector u, then multiply by scalar F. This guarantees 100% correct signs.'
  },
  {
    category: 'equilibrium_fbd',
    title: 'قاعدة اختيار نقطة العزوم الذهبية في اتزان الأجسام الجاسئة',
    tipAr: 'عند كتابة معادلة اتزان العزوم Σ M = 0، اختر دائماً النقطة التي يلتقي عندها أكبر عدد من ردود الأفعال المجهولة (عادة المفصلة Pin A). هذا يلغي عزومها جميعاً من المعادلة وينتج معادلة خطية بمجهول واحد فقط يحل مباشرة.',
    tipEn: 'Always select the moment center at the point where the maximum number of unknown forces intersect. This eliminates them and yields a single equation in one unknown.'
  },
  {
    category: 'trusses_zero_force',
    title: 'استراتيجية التصفير الفوري لأعضاء الجمالونات بالنظر',
    tipAr: 'قبل حساب ردود أفعال الجمالون، فتش عن الأعضاء الصفرية (Zero-Force Members) بالقاعدتين الذهبيتين (عضوان غير متوازيين عند عقدة خالية، أو 3 أعضاء اثنان على استقامة وثالث مائل عند عقدة خالية). شطب هذه الأعضاء يوفر عليك نصف وقت الامتحان.',
    tipEn: 'Inspect zero-force members using the 2-member and 3-member rules before solving reactions. Crossing them out saves half your exam time.'
  },
  {
    category: 'friction_tipping',
    title: 'التفريق بين الانزلاق والانقلاب في الاحتكاك',
    tipAr: 'في مسائل الاحتكاك الجاف، احسب P_slip = μ_s N أولاً، ثم احسب P_tip بأخذ العزم حول زاوية الانقلاب. القيمة الأصغر بينهما هي التي ستحدث فيزيائياً في الواقع، وهي القوة الحرجة القصوى التي يتحملها الجسم قبل فقدان الاتزان.',
    tipEn: 'Compute P_slip = mu_s * N and P_tip via moment equilibrium about the pivot edge. The smaller value dictates what physically occurs first.'
  }
];
