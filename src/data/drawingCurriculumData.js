// Official Engineering Drawing & Projection Curriculum (MDP 001)
// Faculty of Engineering at Shoubra (FES) - Benha University (Preparatory Year - Term 1)
// Department of Mechanical Design and Production Engineering (قسم هندسة التصميم الميكانيكي والإنتاج)
// Strictly Divided into Two Distinct Academic Branches:
// 1. Geometric Constructions & Orthographic Projection Branch (geometric_orthographic)
// 2. Isometric Drawing, Sections & Dimensioning Branch (isometric_sections)

export const DRAWING_FACULTY_INFO = {
  university: 'جامعة بنها',
  faculty: 'كلية الهندسة بشبرا',
  department: 'قسم هندسة التصميم الميكانيكي والإنتاج',
  courseNameAr: 'الرسم الهندسي والإسقاط والعمليات الهندسية',
  courseNameEn: 'Engineering Drawing, Projection & Geometric Constructions',
  courseCode: 'MDP 001',
  term: 'الفصل الدراسي الأول (الفرقة الإعدادية)',
  creditHours: 3,
  totalMarks: 125,
  finalExamMarks: 75,
  midtermExamMarks: 25,
  courseworkMarks: 25
};

export const DRAWING_DIVISIONS = [
  {
    id: "all",
    titleAr: "المنهج الشامل للرسم الهندسي والإسقاط (MDP 001)",
    titleEn: "Complete Engineering Drawing & Projection Syllabus",
    shortTitleAr: "الكل (العمليات الهندسية والإسقاط + المنظور والقطاعات)",
    shortTitleEn: "Unified Drawing",
    badge: "المنهج كاملاً (125 درجة)",
    icon: "Sparkles",
    color: "from-slate-600 via-zinc-600 to-cyan-700",
    borderColor: "border-slate-500/40",
    description: "تصفح كافة موضوعات فرعي العمليات الهندسية وأقواس المماسات والإسقاط المتعامد بزاوية الإسقاط الأولى واستنتاج المسقط الثالث والمنظور الهندسي بزاوية 30° ورسم الدوائر بالمراكز الأربعة والقطاعات وقواعد التهشير والأبعاد."
  },
  {
    id: "geometric_orthographic",
    titleAr: "الفرع الأول: العمليات الهندسية والإسقاط المتعامد والمسقط الثالث",
    titleEn: "Branch 1: Geometric Constructions, Orthographic Projection & Missing Views",
    shortTitleAr: "العمليات والإسقاط المتعامد",
    shortTitleEn: "Geom & Orthographic",
    badge: "العمليات والإسقاط (Geometric & Orthographic)",
    icon: "Compass",
    color: "from-slate-700 via-zinc-700 to-cyan-700",
    borderColor: "border-slate-500/40",
    modulesCount: 5,
    topics: [
      "أدوات الرسم وتخطيط اللوحة ومقاييس الرسم وأنواع الخطوط القياسية (Drawing Tools, Layout, Scales & ISO Line Types)",
      "العمليات الهندسية وأقواس المماسات للدوائر والخطوط المستقيمة (Geometric Constructions & Tangency Arcs)",
      "مبادئ الإسقاط المتعامد بزاوية الإسقاط الأولى والمحاذاة بخط الـ 45° (First-Angle Multi-View Projection & 45° Miter Line)",
      "استنتاج المسقط الثالث المفقود وقراءة المساقط المستوية (Systematic Extraction of the Missing Third View)",
      "إسقاط الأسطح المائلة والأسطوانات والثقوب النافذة (Inclined Surfaces, Cylindrical Features & Holes in Projection)"
    ],
    description: "يشمل: معايير ISO لسمك وأنواع الخطوط (المستمر العريض، المتقطع للخطوط المخفية، وسلسلة المحاور)، العمليات الهندسية لتنصيف الزوايا والقطع الناقص، حساب مراكز أقواس التماس الخارجية والداخلية، توزيع المساقط الثلاثة (الرأسي والأفقي والجانبي) بنظام زاوية الإسقاط الأولى، نقل الأبعاد الأفقية والرأسية بخط الـ 45°، واستنتاج المسقط الثالث المفقود بالتحليل المستوي والكتلي."
  },
  {
    id: "isometric_sections",
    titleAr: "الفرع الثاني: المنظور الهندسي والقطاعات وقواعد التهشير والأبعاد",
    titleEn: "Branch 2: Isometric Drawing, Sectional Views, Hatching & Dimensioning",
    shortTitleAr: "المنظور والقطاعات والأبعاد",
    shortTitleEn: "Isometric & Sections",
    badge: "المنظور والقطاعات (Isometric & Sections)",
    icon: "Layers",
    color: "from-zinc-700 via-slate-700 to-teal-700",
    borderColor: "border-zinc-500/40",
    modulesCount: 5,
    topics: [
      "مبادئ الرسم الأيزومتري بزاوية 30° وصندوق الإسقاط ومحاور المنظور (30° Isometric Projection & The Isometric Box)",
      "رسم الدوائر والأسطوانات في المنظور بطريقة المراكز الأربعة (The Four-Center Method for Isometric Ellipses)",
      "القطاعات الكاملة ونصف القطاعات وقواعد التهشير 45° ومستويات القطع (Full/Half Sections & 45° Hatching Conventions)",
      "استنتاج المسقط الثالث مع إجراء قطاع كامل أو متنقل (Missing View Extraction with Full / Offset Sectioning)",
      "القواعد الهندسية لوضع الأبعاد ورموز التشغيل والتفاوتات (Standard Engineering Dimensioning & Tolerancing)"
    ],
    description: "يشمل: إنشاء المحاور الأيزومترية بزوايا 30° و 90°، رسم متوازي المستطيلات المحيط (Isometric Box)، طريقة المراكز الأربعة لتشكيل القطوع الناقصة على الأوجه العلوية والجانبية والأمامية، مستويات القطع وسهام اتجاه النظر، القواعد الصارمة للتهشير بزاوية 45° وخطوط رقيقة مع استثناء الأعصاب والمسامير والأعمدة، وتطبيق النظام الموحد لوضع الأبعاد الهندسية."
  }
];

export const DRAWING_MODULES = [
  // =======================================================================
  // BRANCH 1: GEOMETRIC CONSTRUCTIONS & ORTHOGRAPHIC PROJECTION (MODULES 1-5)
  // =======================================================================
  {
    id: 'draw-mod-instruments-lines',
    number: 1,
    examHotspots: [
        "Line precedence order when visible outlines, hidden lines, and centerlines coincide on the same drawing path (ISO 128).",
        "Dimension value invariance: In a 1:2 or 2:1 scale drawing, verify that the dimension text is always the TRUE 1:1 physical size.",
        "Standard title block dimensions and border margin specifications (20 mm filing border, 10 mm other borders)."
    ],
    
    division: 'geometric_orthographic',
    divisionBadge: 'العمليات والإسقاط (Geometric & Orthographic)',
    titleAr: 'أدوات الرسم الهندسي، تخطيط اللوحة، مقاييس الرسم وأنواع الخطوط القياسية',
    titleEn: 'Engineering Drawing Equipment, Sheet Layout, Scales & ISO Line Conventions',
    icon: 'Compass',
    color: 'from-slate-700 via-zinc-700 to-cyan-700',
    badge: 'الوحدة 01 • الخطوط وتخطيط اللوحة',
    summary: 'معايير إعداد لوحات الرسم A3/A2، جدول البيانات Title Block، مقاييس الرسم (التكبير والتصغير)، ومواصفات أنواع وسمك الخطوط الهندسية وفقاً للمواصفة القياسية الدولية ISO 128.',
    learningObjectives: [
      'Set up engineering drawing boards, T-squares, 30°-60° / 45° triangles, and draft standard A3/A2 borders and title blocks.',
      'Differentiate standard engineering scales: Full size (1:1), Reduction scales (1:2, 1:5, 1:10), and Enlargement scales (2:1, 5:1).',
      'Classify ISO 128 line conventions: Continuous thick (visible outlines), Continuous thin (dimensions & hatching), Dashed (hidden outlines), and Chain-thin (centerlines).',
      'Apply standard line precedence hierarchy when visible outlines, hidden lines, and centerlines overlap on drawing sheets.'
    ],
    keyFormulas: [
      {
        title: 'ISO 128 Standard Line Types & Line Weight Hierarchy:',
        formula: 'Continuous Thick (0.7 mm) > Dashed Hidden (0.35 mm) > Cutting Plane (0.7/0.35 mm) > Chain Thin Centerline (0.25 mm)',
        notes: 'Outlines are always drawn with crisp 2B/HB pencils (0.7 mm); construction lines and dimension lines with 2H/3H pencils (0.25-0.35 mm).'
      },
      {
        title: 'Drawing Scale Ratio Formula:',
        formula: 'Scale = (Drawing Dimension) / (True Physical Dimension)',
        notes: 'In a 1:2 scale, a 100 mm shaft is drawn at 50 mm length, but its dimension text must still read 100 mm!'
      }
    ],
    bilingualInsight: {
      titleEn: "Engineering Line Conventions & Sheet Preparation Rules",
      titleAr: "💡 افهم الفكرة والربط الهندسي بالعربي: أنواع الخطوط وأولويات التراكب",
      points: [
        "لماذا توجد سماكات مختلفة لأقلام الرصاص في الرسم الهندسي؟ لأن الرسومات الهندسية هي لغة التخاطب بين المهندس والمصنع؛ فالخط العريض المتصل (Continuous Thick 0.7mm) يمثل الحواف المرئية الحقيقية للمجسم، بينما الخط الرقيق (Continuous Thin 0.25mm) يمثل خطوط الأبعاد والإنشاء حتى لا تختلط مع الجسم الفعلي.",
        "قاعدة تراكب الخطوط عند التطابق (Line Precedence Rule): إذا تطابق خط ظاهر مع خط مخفي وخط سنتر لاين على نفس الاستقامة في المسقط، فالأولوية المطلقة للخط الظاهر، يليه الخط المخفي، يليه خط مستوى القطع، وأخيراً خط السنتر لاين.",
        "خطوط المحاور (Centerlines): تُرسم كخط طويل ونقطة/شرطة صغيرة بنظام (Long Dash - Gap - Short Dash - Gap - Long Dash)، ويجب إجبارياً أن يبرز خط المحور بمقدار 2 إلى 3 مم خارج حدود الدائرة أو الأسطوانة، ويجب أن يتقاطع خطان طويلان عند مركز الدائرة تماماً.",
        "قاعدة أبعاد الرسم المقياسي: مهما كان مقياس الرسم المستخدم (تصغير 1:2 أو تكبير 2:1)، فإن الرقم المكتوب على خط البعد هو دائماً البعد الحقيقي الفعلي للمنتج بالملليمتر، ولا يتم ضرب الرقم في المقياس إطلاقاً!"
      ],
      examTip: "سؤال شيت وامتحان شفوي متكرر: ما هو الخط الذي يُرسم عند تطابق خط مخفي (Hidden) مع خط محور (Centerline)؟ الإجابة: يُرسم الخط المخفي وتُلغى السنتر لاين لأن الخط المخفي أعلى في هرم الأسبقية."
    }
  },

  {
    id: 'draw-mod-tangency-arcs',
    number: 2,
    examHotspots: [
        "Constructing external tangency arcs: adding radii d1 = R1 + R and d2 = R2 + R and marking tangent contact points T1 and T2.",
        "Internal enclosing tangency: subtracting radii d = R - R_circle and locating center O for enclosing curves.",
        "Fillet blending between a straight line and a circle: constructing the parallel offset line at distance R."
    ],
    
    division: 'geometric_orthographic',
    divisionBadge: 'العمليات والإسقاط (Geometric & Orthographic)',
    titleAr: 'العمليات الهندسية المتقدمة وأقواس المماسات للدوائر والخطوط المستقيمة',
    titleEn: 'Advanced Geometric Constructions & Tangency Arcs for Circles and Lines',
    icon: 'Activity',
    color: 'from-slate-700 via-zinc-700 to-cyan-700',
    badge: 'الوحدة 02 • أقواس التماس والعمليات',
    summary: 'قواعد وحسابات رسم أقواس التماس بنصف قطر معلوم R بين دائرتين من الخارج، أو من الداخل، أو قوس تماس مركب (داخلي وخارجي)، وأقواس التماس مع الخطوط المستقيمة ونقاط التماس T.',
    learningObjectives: [
      'Locate center of tangency arc R connecting two known circles (R1, R2) externally: Centers located by arcs of radius (R1 + R) and (R2 + R).',
      'Locate center of tangency arc R enclosing two known circles (R1, R2) internally: Centers located by arcs of radius (R - R1) and (R - R2).',
      'Formulate mixed tangency arcs that touch one circle externally (R1 + R) and enclose another internally (R - R2).',
      'Identify and mark exact points of tangency (T1, T2) on circle circumferences before drawing the smooth blending arc.'
    ],
    keyFormulas: [
      {
        title: 'External Tangency Arc (C1 and C2 Outside the Blend Arc R):',
        formula: 'd_1 = R_1 + R, \\quad d_2 = R_2 + R',
        notes: 'Intersecting arc radius d1 from center O1 and d2 from center O2 locates the compass center O.'
      },
      {
        title: 'Internal Enclosing Tangency Arc (C1 and C2 Enclosed by Arc R):',
        formula: 'd_1 = R - R_1, \\quad d_2 = R - R_2',
        notes: 'Requires R > (R1 + center distance) and R > (R2 + center distance).'
      },
      {
        title: 'Line-to-Circle Tangency Blend Arc:',
        formula: 'd_{line} = R \\text{ (parallel offset)}, \\quad d_{circle} = R_1 + R',
        notes: 'Tangent point T on the line is the foot of the perpendicular dropped from compass center O.'
      }
    ],
    bilingualInsight: {
      titleEn: "Tangency Arc Geometric Rules & Point of Contact Protocols",
      titleAr: "💡 افهم الفكرة والربط الهندسي بالعربي: قوانين أقواس التماس ونقاط الالتماس",
      points: [
        "القاعدة الذهبية لأقواس التماس: للربط بين شكلين بقوس ناعم نصف قطره R، ابحث عن المحل الهندسي لمركز القوس الجديد O. إذا كان التماس من الخارج نجمع أنصاف الأقطار (R1 + R)، وإذا كان التماس يحتضن الدائرة من الداخل نطرح أنصاف الأقطار (R - R1).",
        "تحديد نقط التماس (Tangent Points T1, T2): لا تضع سن الفرجار وترسم القوس عشوائياً! يجب إجبارياً رسم خط خفيف يصل بين مركز القوس O ومركز الدائرة الأصلية؛ نقطة تقاطع هذا الخط مع محيط الدائرة هي نقطة بداية ونهاية القوس تماماً.",
        "تماس قوس مع خط مستقيم: المحل الهندسي لمركز القوس هو خط موازٍ للخط المستقيم الأصلي على مسافة R. نقطة التماس على الخط المستقيم هي المسقط العمودي لمركز القوس O على الخط.",
        "نظافة ودقة لوحة العمليات: يجب أن تترك خطوط الإنشاء المتقاطعة (أقواس تحديد المركز ونقاط التماس) خفيفة جداً بقلم 3H دون مسحها، لأن أستاذ المادة يصحح طريقة استنتاج المراكز ويعطي عليها نصف درجات اللوحة!"
      ],
      examTip: "سؤال لوحة العمليات رقم 1 (25 درجة): رسم الكامة أو الشوكة الميكانيكية: تأكد من تبيين نقاط التماس T1 و T2 بخطوط رقيقة تصل بالمراكز؛ ترك خطوط الإنشاء يثبت صحة خطواتك الهندسية بنسبة 100%."
    }
  },

  {
    id: 'draw-mod-orthographic-projection',
    number: 3,
    examHotspots: [
        "First-Angle projection view arrangement: Elevation top-left, Plan directly below, Left Side View on the RIGHT.",
        "The 45° Miter line: mechanical depth coordinate reflection between Plan and Side View without ruler measurement.",
        "Horizontal height alignment with T-square and vertical length alignment with 90° set-square."
    ],
    
    division: 'geometric_orthographic',
    divisionBadge: 'العمليات والإسقاط (Geometric & Orthographic)',
    titleAr: 'مبادئ الإسقاط المتعامد بزاوية الإسقاط الأولى والمحاذاة بخط الـ 45°',
    titleEn: 'Principles of First-Angle Multi-View Orthographic Projection & 45° Miter Line',
    icon: 'Layers',
    color: 'from-slate-700 via-zinc-700 to-cyan-700',
    badge: 'الوحدة 03 • الإسقاط المتعامد وزاوية 1',
    summary: 'نظرية الإسقاط المتعامد للرسم الهندسي، زاوية الإسقاط الأولى (First-Angle Projection)، استنتاج المساقط الأساسية الثلاثة (الرأسي والأفقي والجانبي)، واستخدام خط الميتر 45° لنقل الأبعاد.',
    learningObjectives: [
      'Understand the 3D viewing glass box concept and formulate 2D views using First-Angle Projection conventions (ISO Standard).',
      'Layout the 3 primary engineering views: Front View (Elevation), Top View (Plan directly beneath Front), and Side View (Left Side View drawn on the RIGHT).',
      'Construct and apply the 45° Miter line in the fourth quadrant to accurately transfer width/depth dimensions between Plan and Side View without manual scaling.',
      'Ensure strict horizontal alignment between Front and Side Views, and strict vertical alignment between Front and Plan Views.'
    ],
    keyFormulas: [
      {
        title: 'First-Angle View Arrangement Matrix (ISO Standard):',
        formula: '\\text{Elevation (Front)} \\quad | \\quad \\text{Left Side View (Drawn on Right)} \\\\ \\hline \\text{Plan (Top View, Directly Below)} \\quad | \\quad 45^\\circ \\text{ Miter Quadrant}',
        notes: 'In First-Angle, the object is between the observer and the projection plane.'
      },
      {
        title: 'Miter Projection Dimension Invariance:',
        formula: '\\text{Height (Front)} = \\text{Height (Side)}, \\quad \\text{Length (Front)} = \\text{Length (Plan)}, \\quad \\text{Width (Plan)} = \\text{Width (Side)}',
        notes: 'Any feature depth in the Plan view reflects identically into horizontal depth in the Side view via the 45° line.'
      }
    ],
    bilingualInsight: {
      titleEn: "First-Angle Projection Logic & The 45° Miter Alignment Line",
      titleAr: "💡 افهم الفكرة والربط الهندسي بالعربي: زاوية الإسقاط الأولى وخط الـ 45°",
      points: [
        "لماذا يُرسم المسقط الجانبي الأيسر (Left Side View) على يمين المسقط الرأسي؟ في نظام زاوية الإسقاط الأولى (First-Angle)، يقع المجسم بين عين الناظر ومستوى الإسقاط؛ فعندما تنظر للمجسم من جهة اليسار، ينطبع ظله وإسقاطه على الجدار الواقع خلفه جهة اليمين!",
        "ترتيب المساقط الصارم في اللوحة: المسقط الرأسي (Elevation) يُرسم في الربع العلوي الأيسر، والمسقط الأفقي (Plan) يُرسم إجبارياً تحته تماماً، والمسقط الجانبي الأيسر يُرسم بجوار الرأسي على يمينه.",
        "سحر خط الـ 45° (Miter Line): يُرسم خط بزاوية 45° في الربع السفلي الأيمن، وظيفته نقل كافة أعماق وتفاصيل المسقط الأفقي رأسياً إلى خط الـ 45° ثم بزاوية 90° أفقياً إلى المسقط الجانبي دون استخدام المسطرة إطلاقاً!",
        "المحاذاة التامة (Alignment): خطوط الارتفاعات للمسقط الرأسي والجانبي تكون على استقامة أفقية تامة بمسطرة الـ T، وأطوال المسقط الرأسي والأفقي تكون على استقامة رأسية تامة بالمثلث القائم."
      ],
      examTip: "خطأ قاتل يخصم نصف الدرجة: رسم المسقط الأفقي (Plan) فوق المسقط الرأسي، أو وضعه بجانبه بدلاً من تحته! في هندسة شبرا المعتمد هو First-Angle Projection دائماً."
    }
  },

  {
    id: 'draw-mod-missing-view',
    number: 4,
    examHotspots: [
        "The 4-step missing third view protocol: bounding box construction, feature projection, line-of-sight inspection.",
        "Classification of planes: true shape vs. foreshortened area vs. edge view across the three views.",
        "Hidden line junction rules: short dashes contacting solid outlines at corners without leaving gaps."
    ],
    
    division: 'geometric_orthographic',
    divisionBadge: 'العمليات والإسقاط (Geometric & Orthographic)',
    titleAr: 'المنهجية الهندسية لاستنتاج المسقط الثالث المفقود وقراءة المساقط',
    titleEn: 'Systematic Engineering Methodology for Extracting the Missing Third View',
    icon: 'GitFork',
    color: 'from-slate-700 via-zinc-700 to-cyan-700',
    badge: 'الوحدة 04 • استنتاج المسقط الثالث',
    summary: 'خطوات التحليل الهندسي لاستنتاج المسقط الثالث (Side View أو Plan) بمعلومية مسقطين معطيين، مطابقة الأسطح والمستويات، وتحويل الحواف المخفية إلى خطوط متقطعة (Dashed Lines).',
    learningObjectives: [
      'Execute the 4-step missing view extraction protocol: Bounding Box construction, Surface Classification, Feature Projection, and Line Type Assignment.',
      'Correlate 2D planes across views: Normal surfaces (true shape in one view, edge line in other two), Inclined surfaces (foreshortened in two views, edge line in one), and Oblique surfaces.',
      'Map internal recesses, steps, slots, and blind holes to proper dashed hidden lines in the extracted third view.',
      'Check consistency of line junctions: Dashed lines must touch solid lines at corner intersections without leaving gaps.'
    ],
    keyFormulas: [
      {
        title: 'Missing View Bounding Box Dimensions:',
        formula: '\\text{Height}_{Side} = \\text{Height}_{Elevation}, \\quad \\text{Width}_{Side} = \\text{Depth}_{Plan}',
        notes: 'Draw the enclosing rectangle in the missing view quadrant first before detailing interior features.'
      },
      {
        title: 'Surface Projection Law:',
        formula: '\\text{Plane Edge in View 1} + \\text{Plane Area in View 2} \\implies \\text{Corresponding Area in View 3}',
        notes: 'Every continuous plane in 3D appears as an edge or area across all three views.'
      }
    ],
    bilingualInsight: {
      titleEn: "Step-by-Step Protocol for Missing View Deducing",
      titleAr: "💡 افهم الفكرة والربط الهندسي بالعربي: خطوات استنتاج المسقط الثالث",
      points: [
        "الخطوة 1: رسم صندوق المسقط المفقود (Bounding Box): استنتج أقصى أبعاد للمسقط الثالث؛ فإذا كان المطلوب استنتاج المسقط الجانبي، فإن ارتفاعه هو نفس ارتفاع المسقط الرأسي تماماً، وعرضه هو نفس عرض المسقط الأفقي (عن طريق خط الـ 45°).",
        "الخطوة 2: تقسيم المجسم إلى كتل هندسية أساسية: لا تنظر للمجسم ككتلة واحدة معقدة؛ بل قسمه إلى أجزاء: قاعدة سفلية (Base Plate) + جدار قائم (Vertical Wall) + تجويف أسطواني (Cylindrical Hole) + عصب مائل (Web).",
        "الخطوة 3: إسقاط الحواف والمستويات خطوة بخطوة: اسحب خطوط إسقاط أفقية من الرأسي وخطوط رأسية من الأفقي عبر خط الـ 45°، ونقطة التقاطع تحدد حواف وتفاصيل المسقط الثالث.",
        "الخطوة 4: تحديد الخطوط الظاهرة والمخفية: انظر للمسقطين المعطيين من جهة المسقط الثالث المطلوب؛ الحواف التي تراها عينك مباشرة تُرسم كخطوط متصلة سميكة (Continuous Thick)، والحواف التي تقع خلف المعدن وتُحجب عن الرؤية تُرسم كخطوط متقطعة (Hidden Dashed Lines)."
      ],
      examTip: "سؤال امتحان الفاينال الأكبر (30 درجة كاملة): يعطيك المسقط الرأسي والأفقي ويطلب استنتاج المسقط الجانبي الأيسر؛ رسم الصندوق الخارجي للمسقط الجانبي بالارتفاع والعرض الصحيح يضمن لك ثلث الدرجة فوراً قبل التفاصيل الداخلية!"
    }
  },

  {
    id: 'draw-mod-cylinders-inclined',
    number: 5,
    examHotspots: [
        "The one-circle two-rectangles cylinder projection axiom: circle in one view, rectangles with centerlines in other two views.",
        "Centerline protrusion rule: extending 2 to 3 mm past circle and cylinder boundaries.",
        "Representation of through-holes, blind drilled holes (with 118° drill point), counterbores, and countersinks."
    ],
    
    division: 'geometric_orthographic',
    divisionBadge: 'العمليات والإسقاط (Geometric & Orthographic)',
    titleAr: 'إسقاط الأسطح المائلة والأسطوانات والثقوب النافذة وتقاطعات الأسطح',
    titleEn: 'Inclined Surfaces, Cylindrical Features, Holes & Fillet Transitions in Projection',
    icon: 'Compass',
    color: 'from-slate-700 via-zinc-700 to-cyan-700',
    badge: 'الوحدة 05 • الأسطوانات والأسطح المائلة',
    summary: 'إسقاط الأشكال الأسطوانية المجوفة والمصمتة في المساقط الثلاثة (دائرة ومستطيلين)، رسم الثقوب النافذة والغائرة (Blind Holes)، التعامل مع الأسطح المائلة المشطوفة والفتحات المائلة.',
    learningObjectives: [
      'Project standard cylinders across 3 views: Appears as a true circle in one view and as rectangles of dimension (Diameter × Length) in the other two views.',
      'Draft central axis lines (Centerlines) with proper standard extensions (2-3 mm) across circular and rectangular projections of cylinders.',
      'Represent through-holes, counterbores, and countersinks using hidden dashed lines and centerlines in longitudinal projection.',
      'Determine true projection of inclined planar cuts across circular cylinders and construct elliptical contours when necessary.'
    ],
    keyFormulas: [
      {
        title: 'Cylinder Multi-View Geometry Representation:',
        formula: '\\text{View 1: Circle } (\\varnothing D), \\quad \\text{View 2: Rectangle } (D \\times H), \\quad \\text{View 3: Rectangle } (D \\times H)',
        notes: 'Both rectangular views MUST include a longitudinal centerline passing along the cylinder axis.'
      },
      {
        title: 'Inclined Plane Cutting a Cylinder:',
        formula: '\\text{True Intersection Curve} = \\text{Ellipse with Major Axis } (D / \\sin\\theta) \\text{ and Minor Axis } D',
        notes: 'In orthographic projection, an inclined cylinder cut projects as an ellipse if viewed at an angle.'
      }
    ],
    bilingualInsight: {
      titleEn: "Cylindrical Projection & Centerline Placement Conventions",
      titleAr: "💡 افهم الفكرة والربط الهندسي بالعربي: إتقان إسقاط الأسطوانات والثقوب",
      points: [
        "القاعدة الأبدية للأسطوانة في الرسم الهندسي: أي أسطوانة أو ثقب دائري يظهر كدائرة حقيقية في مسقط واحد فقط، ويظهر كمستطيل في المسقطين الآخرين! ولا يمكن أبداً أن يظهر كدائرة في مسقطين معاً.",
        "خط المحور (Centerline) إلزامي مع كل أسطوانة: إذا رسمت أسطوانة أو ثقباً دائرياً دون رسم خط السنتر لاين بنظام (شرطة طويلة - فراغ - شرطة قصيرة - فراغ - شرطة طويلة)، تُخصم درجات فورية لأن السنتر لاين هو الذي يعرف القارئ أن هذا المستطيل يمثل جسماً دورانياً أسطوانياً وليس مكعباً مستطيلاً!",
        "الثقوب النافذة (Through Holes) مقابل الثقوب غير النافذة (Blind Holes): الثقب النافذ يستمر خطه المتقطع (Hidden Line) من أول المجسم لآخره، بينما الثقب الأعمى ينتهي عند عمق محدد بزاوية حفر قياسية 118° (تُرسم بزاوية 30° تقريباً مع خط المحور بواسطة المثلث 30°-60°).",
        "الأسطح المائلة (Inclined Surfaces): السطح المائل لا يظهر بأبعاده الحقيقية إلا في المسقط الذي يراه كخط حافة مائل (Edge View)، بينما يظهر في المسقطين الآخرين كمستطيل منكمش الطول (Foreshortened)."
      ],
      examTip: "انتبه عند استنتاج المسقط الثالث لثقب أسطواني: إذا كان الثقب يظهر كدائرة في المسقط الرأسي، فإنه سيظهر كخطين متقطعين (Hidden Lines) وبينهما خط سنتر لاين في المسقط الأفقي وفي المسقط الجانبي معاً."
    }
  },

  // =======================================================================
  // BRANCH 2: ISOMETRIC DRAWING, SECTIONS & DIMENSIONING (MODULES 6-10)
  // =======================================================================
  {
    id: 'draw-mod-isometric-box',
    number: 6,
    examHotspots: [
        "Standard 30° isometric axes construction using the 30°-60° triangle and T-square (30° left, 30° right, 90° vertical).",
        "Isometric Box construction: using overall maximum dimensions (L × W × H) from orthographic views.",
        "Non-isometric slanted lines rule: plotting endpoints via isometric coordinates rather than measuring directly."
    ],
    
    division: 'isometric_sections',
    divisionBadge: 'المنظور والقطاعات (Isometric & Sections)',
    titleAr: 'مبادئ الرسم الأيزومتري بزاوية 30° وصندوق الإسقاط ومحاور المنظور',
    titleEn: 'Principles of 30° Axonometric Isometric Drawing & The Isometric Box',
    icon: 'Box',
    color: 'from-zinc-700 via-slate-700 to-teal-700',
    badge: 'الوحدة 06 • المنظور الأيزومتري بزاوية 30°',
    summary: 'إنشاء المحاور الأيزومترية الثلاثة بزاوية 30° مع الأفق ومحور رأسي 90°، رسم صندوق المنظور المحيط (Isometric Box)، نقل الأبعاد الأيزومترية 1:1، والأسطح غير الأيزومترية (Non-Isometric Lines).',
    learningObjectives: [
      'Construct the 3 primary isometric axes: Vertical axis (90°) and two receding axes inclined at 30° to the horizontal using the 30°-60° triangle.',
      'Build the bounding Isometric Box using maximum overall dimensions (Length × Width × Height) taken directly from orthographic views.',
      'Differentiate isometric lines (parallel to isometric axes, measurable 1:1) from non-isometric lines (slanted lines, plotted via endpoints).',
      'Cut and subtract recesses, steps, and chamfers systematically from the enclosing isometric envelope.'
    ],
    keyFormulas: [
      {
        title: 'Standard Isometric Axes Geometry:',
        formula: '\\theta_1 = 30^\\circ \\text{ (Left Axis)}, \\quad \\theta_2 = 30^\\circ \\text{ (Right Axis)}, \\quad \\theta_3 = 90^\\circ \\text{ (Vertical Axis)}',
        notes: 'The three axes meet at the lowest front corner of the object with 120° angles between each other in 3D.'
      },
      {
        title: 'Non-Isometric Slanted Line Rule:',
        formula: '\\text{Slanted Length on Isometric} \\neq \\text{True Length}',
        notes: 'Non-isometric lines CANNOT be measured directly with a ruler; their start and end points must be located on isometric lines and connected.'
      }
    ],
    bilingualInsight: {
      titleEn: "Isometric 30° Projection & The Bounding Box Protocol",
      titleAr: "💡 افهم الفكرة والربط الهندسي بالعربي: المنظور الهندسي بزاوية 30° وصندوق البداية",
      points: [
        "لماذا نستخدم زاوية 30° تحديداً في المنظور الأيزومتري؟ الأيزومتري (Isometric = متساوي القياس) يميل فيه المجسم بحيث تتساوى الزوايا الفراغية بين المحاور الثلاثة (120° بين كل محورين)، وعند إسقاط هذه المحاور على ورقة الرسم يظهر المحور الرأسي بزاوية 90° والمحوران الآخران يميلان بزاوية 30° تماماً مع خط الأفق باستخدام مثلث الـ 30°-60°.",
        "الخطوط الأيزومترية تقاس بمقياس كامل 1:1: في الرسم الأيزومتري المعتمد بالجامعات المصرية (Isometric Drawing)، ننقل الأبعاد الحقيقية مباشرة بالمسطرة على المحاور الثلاثة دون أي تصغير (عكس الإسقاط الأيزومتري الدقيق الذي يصغر بنسبة 0.816).",
        "احذر قياس الخطوط المائلة (Non-Isometric Lines): أي خط مائل في المنظور لا يوازي أحد المحاور الثلاثة هو خط غير أيزومتري! إياك أن تقيس طوله بالمسطرة، بل حدد نقطة بدايته بإحداثيات أيزومترية، ثم حدد نقطة نهايته بنفس الطريقة، ثم صل بين النقطتين بالمسطرة.",
        "صندوق الإسقاط المحيط (Bounding Box): الطريقة الاحترافية للرسم الأيزومتري تبدأ دائماً برسم متوازي مستطيلات خفيف جداً بقلم 3H يحتوي المجسم بأكمله، ثم نبدأ 'بنحت' وحذف الأجزاء المفرغة والكتل خطوة بخطوة."
      ],
      examTip: "سؤال المنظور في الامتحان (25 درجة): يعطيك مسقطين ويطلب رسم المنظور الأيزومتري: ابدأ دائماً برسم خط أفقي وضع عليه نقطة الأساس O، ثم اسحب المحاور الثلاثة (رأسي و 30° يمين و 30° يسار)، وارسم الصندوق الخارجي أولاً."
    }
  },

  {
    id: 'draw-mod-four-center-ellipse',
    number: 7,
    examHotspots: [
        "The Four-Center Method: constructing the bounding rhombus with side D parallel to isometric axes.",
        "Obtuse corners (120°) as centers C1 and C2 for the two large arcs, and line intersections as centers C3 and C4 for small arcs.",
        "Extruding 4-center isometric circles to create 3D cylinders with depth L and tangent outer profiles."
    ],
    
    division: 'isometric_sections',
    divisionBadge: 'المنظور والقطاعات (Isometric & Sections)',
    titleAr: 'طريقة المراكز الأربعة لرسم الدوائر والأسطوانات في المنظور الأيزومتري',
    titleEn: 'The Four-Center Approximate Method for Isometric Circles and Cylinders',
    icon: 'Compass',
    color: 'from-zinc-700 via-slate-700 to-teal-700',
    badge: 'الوحدة 07 • الدوائر في المنظور بالمراكز الأربعة',
    summary: 'الهندسة الرياضية لتمثيل الدوائر كقطوع ناقصة أيزومترية (Isometric Ellipses) على الأوجه الثلاثة (العلوي والجانبي والأمامي)، تحديد المراكز الأربعة C1, C2, C3, C4، ورسم الأسطوانات ذات العمق.',
    learningObjectives: [
      'Construct the isometric bounding rhombus (معين المنظور) for a circle of diameter D with sides of length D parallel to the isometric axes.',
      'Identify the two obtuse corner angles (120°) of the rhombus as the first two compass arc centers (C1, C2).',
      'Locate the other two compass centers (C3, C4) at the intersection of lines drawn from obtuse corners to the midpoints of opposite sides.',
      'Extrude the 4-center ellipse along the depth axis by distance L to complete 3D isometric cylinders with tangent boundary lines.'
    ],
    keyFormulas: [
      {
        title: 'Four-Center Arc Radii Formulation:',
        formula: 'R_{large} = \\text{Distance from Obtuse Corner to Opposite Midpoint}, \\quad R_{small} = \\text{Distance from C3/C4 to Side Midpoint}',
        notes: 'Two large arcs from C1 and C2 blend seamlessly with two small arcs from C3 and C4.'
      },
      {
        title: 'Cylinder Tangency Extension Rule:',
        formula: '\\text{Tangent Line Slope} = \\pm 30^\\circ \\text{ or Vertical (Parallel to Cylinder Axis)}',
        notes: 'Connect the front and back ellipses with straight lines tangent to their outer profiles.'
      }
    ],
    bilingualInsight: {
      titleEn: "The Four-Center Rhombus Protocol on Any Isometric Plane",
      titleAr: "💡 افهم الفكرة والربط الهندسي بالعربي: طريقة المراكز الأربعة لرسم الدائرة في المنظور",
      points: [
        "لماذا تظهر الدائرة كقطع ناقص (بيضاوي) في المنظور؟ لأن الدائرة الدائرية تقع في مستوى مائل بزاوية 30°، وتشوه الإسقاط يحول المربع المحيط بالدائرة إلى معين (Rhombus) وتتحول الدائرة داخله إلى قطع ناقص ملامس لأضلاع المعين في منتصفاتها الأربعة.",
        "قاعدة المراكز الأربعة في 4 خطوات محكمة: 1) ارسم المعين بأضلاع تساوي قطر الدائرة D موازية لمحاور المنظور، 2) حدد الرأسين المنفرجين للمعين (الزاويتين الكبريين 120°)، 3) من كل رأس منفرج مد خطين إلى منتصفات الأضلاع المقابلة (شكل الرقم 7 أو 8 بالعربي)، 4) نقط تقاطع هذه الخطوط تعطي المركزين الصغيرين C3 و C4، والرأسان المنفرجان هما المركزان الكبيران C1 و C2.",
        "رسم الأقواس الأربعة بالفرجار: ركّز في المركزين المنفرجين وافتح الفرجار إلى منتصف الضلع المقابل وارسم القوسين الكبيرين، ثم ركّز في المركزين المتقاطعين وارسم القوسين الصغيرين لتكتمل البيضاوية بنعومة تامة دون أي تكسير.",
        "رسم أسطوانة لها عمق L: لا تعيد الخطوات كلها في الخلف! فقط انقل المراكز الأربعة (C1, C2, C3, C4) إلى الخلف بمقدار العمق L على خطوط توازي محور العمق، وارسم نفس الأقواس بنفس فتحات الفرجار، ثم صل بين البيضاويتين بخطين مماسين خارجيين."
      ],
      examTip: "خطأ يقع فيه 70% من الطلاب: رسم المعين على وجه خاطئ! تأكد هل الدائرة أفقية (على الوجه العلوي) أم رأسية (على الوجه الجانبي أو الأمامي). أضلاع المعين يجب أن توازي دائماً محاور الوجه الذي تقع فيه الدائرة."
    }
  },

  {
    id: 'draw-mod-sections-hatching',
    number: 8,
    examHotspots: [
        "Standard 45° hatching lines: thin continuous lines (0.25-0.35 mm) spaced uniformly at 1.5 to 3.0 mm.",
        "The Golden Longitudinal Web/Rib Non-Hatching Exception Rule: thin ribs cut along their flat plane are NEVER hatched.",
        "Fastener and solid shaft non-hatching rule: bolts, nuts, solid shafts, and pins cut longitudinally are shown unsectioned."
    ],
    
    division: 'isometric_sections',
    divisionBadge: 'المنظور والقطاعات (Isometric & Sections)',
    titleAr: 'القطاعات الهندسية الكاملة ونصف القطاعات وقواعد التهشير القياسية 45°',
    titleEn: 'Full Sections, Half Sections & Standard ISO 45° Hatching Conventions',
    icon: 'Scissors',
    color: 'from-zinc-700 via-slate-700 to-teal-700',
    badge: 'الوحدة 08 • القطاعات وقواعد التهشير',
    summary: 'أنواع القطاعات الهندسية (القطاع الكامل Full Section، نصف القطاع Half Section، والقطاع المتنقل Offset Section)، تمثيل مستويات القطع بأسهم اتجاه النظر، والقواعد الصارمة لخطوط التهشير بزاوية 45° وفقاً للمواصفة ISO 128.',
    learningObjectives: [
      'Differentiate sectional view types: Full Section (cuts entirely through object), Half Section (cuts 1/4 of symmetrical object), and Offset Section (stepped cutting plane).',
      'Draw standard ISO cutting plane lines (Type H: Chain thin line with thick ends and change-of-direction bends) with bold arrows indicating line of sight.',
      'Execute standard 45° hatching lines using thin continuous lines (0.25-0.35 mm) spaced evenly at 1.5 to 3 mm intervals.',
      'Apply the critical Non-Hatching Exceptions Rule: Thin webs/ribs, shafts, bolts, nuts, pins, and rivets cut longitudinally must NEVER be hatched!'
    ],
    keyFormulas: [
      {
        title: 'Hatching Line Geometry (ISO Standard):',
        formula: '\\theta_{hatch} = 45^\\circ \\text{ to main outlines or centerlines}, \\quad \\text{Spacing } s = 1.5 - 3.0 \\text{ mm}',
        notes: 'Hatching lines must be continuous, thin, parallel, uniform in darkness and spacing, and stop cleanly at visible solid outlines.'
      },
      {
        title: 'Half-Section Centerline Boundary Rule:',
        formula: '\\text{Divider between Sectioned & Unsectioned Halves} = \\text{Chain Thin Centerline (NOT a solid line)}',
        notes: 'In a half-section, hidden lines are omitted from both halves unless strictly needed for dimensioning.'
      }
    ],
    bilingualInsight: {
      titleEn: "Cutting Planes, Hatching Rules & Web Non-Hatching Exceptions",
      titleAr: "💡 افهم الفكرة والربط الهندسي بالعربي: أسرار القطاعات وقواعد التهشير الـ 45°",
      points: [
        "لماذا نقوم بإجراء القطاعات الهندسية؟ لأن المساقط الخارجية للمجسمات الميكانيكية المعقدة تمتلئ بالخطوط المتقطعة المخفية (Hidden Lines) التي تصبح صعبة القراءة؛ فالقطاع يتخيل شق المعدن بمنشار ونزع الجزء الأمامي لإظهار التجاويف الداخلية بخطوط ظاهرة واضحة وتهشير المعدن المقطوع.",
        "التهشير (Hatching): خطوط رقيقة جداً متوازية تُرسم بزاوية 45° بمثلث الـ 45° مع المسطرة الـ T، والمسافة بينها ثابتة (من 2 إلى 3 مم). خطوط التهشير تمثل المعدن الصلب المصمت الذي مر به نصل المنشار فقط، والتجاويف الفارغة لا تُهشر إطلاقاً.",
        "القاعدة الذهبية رقم 1 في هندسة شبرا (استثناء الأعصاب): العصب المائل أو الضلع الرقيق (Web / Rib) إذا مر مستوى القطع بموازاة سطحه الأكبر طولياً (Longitudinal Section) فإنه لا يُهشر إطلاقاً! أما إذا قُطع العصب عرضياً فيُهشر طبيعياً.",
        "استثناءات التهشير الأخرى: المسامير (Bolts)، الصواميل (Nuts)، الخوابير (Keys)، التيل والمسامير الأسطوانية (Pins)، الأعمدة المصمتة (Solid Shafts)، وكرات البلي (Ball Bearings) لا تُهشر إذا قُطعت طولياً لأن تهشيرها يعطي انطباعاً مضللاً بأنها أجزاء مجوفة ومفرغة."
      ],
      examTip: "أكبر فخ في امتحان الفاينال (يقع فيه نصف الدفعة): تهشير العصب (Web) في القطاع الطولي! تذكر دائماً: العصب المقطوع طولياً يظل مساحة بيضاء خالية من خطوط التهشير وتُحاط بخط متصل سميك."
    }
  },

  {
    id: 'draw-mod-sectioned-missing-view',
    number: 9,
    examHotspots: [
        "Deducing missing views with full sectioning: converting cut hidden lines into solid visible outlines.",
        "Omission of remaining hidden lines behind the cutting plane in hatched sectional views.",
        "Offset (stepped) cutting planes: 90° transition bends leave NO dividing line in the resulting section."
    ],
    
    division: 'isometric_sections',
    divisionBadge: 'المنظور والقطاعات (Isometric & Sections)',
    titleAr: 'استنتاج المسقط الثالث مع إجراء قطاع كامل أو قطاع متنقل مركب',
    titleEn: 'Missing Third View Extraction Combined with Full or Offset Sectioning',
    icon: 'Layers',
    color: 'from-zinc-700 via-slate-700 to-teal-700',
    badge: 'الوحدة 09 • استنتاج المسقط بقطاع كامل',
    summary: 'الدمج بين مهارة استنتاج المسقط الثالث ومهارة إجراء القطاعات الهندسية (Sectional Elevation أو Sectional Side View)، تحويل الخطوط المخفية المقطوعة إلى خطوط ظاهرة صلبة، وحذف الخطوط المخفية غير الضرورية.',
    learningObjectives: [
      'Synthesize missing view deduction with sectional conventions in high-weight exam problems (35+ marks).',
      'Track the cutting plane through the given orthographic views and identify which material regions are sliced versus void regions.',
      'Convert hidden dashed lines that lie in the cut plane into solid continuous visible outlines in the sectioned view.',
      'Eliminate all hidden dashed lines in the hatched regions of a full sectional view according to ISO drafting rules.'
    ],
    keyFormulas: [
      {
        title: 'Hidden Lines in Sectional Views Protocol:',
        formula: '\\text{Hidden Lines in Full Section} \\implies \\text{Omitted entirely (unless required for dimension clarity)}',
        notes: 'Once a section is made, only visible outlines and hatched solid cross-sections are shown.'
      },
      {
        title: 'Offset Cutting Plane Transitions:',
        formula: '\\text{Bends in Offset Cutting Plane} \\implies \\text{No dividing line shown on the resulting sectional view}',
        notes: 'The sectional view appears as one continuous planar cut; 90° stepping lines are never drawn in the section.'
      }
    ],
    bilingualInsight: {
      titleEn: "Mastering Missing View Extraction with Integrated Sectioning",
      titleAr: "💡 افهم الفكرة والربط الهندسي بالعربي: استنتاج المسقط بقطاع كامل خطوة بخطوة",
      points: [
        "سؤال الفاينال الملكي في هندسة شبرا: يعطيك مسقطين (رأسي وأفقي) ويطلب: 1) رسم المسقط الرأسي بقطاع كامل عند A-A، 2) استنتاج المسقط الجانبي الأيسر بقطاع كامل عند B-B، 3) إعادة رسم المسقط الأفقي مع توضيح خطوط القطع.",
        "قاعدة التحول السحري للخطوط المتقطعة: أي خط مخفي (Dashed Line) في المسقط العادي، إذا مر به مستوى القطع، فإنه يتحول فوراً في المسقط المقطوع إلى خط ظاهر متصل سميك (Continuous Solid Line) لأنه أصبح مكشوفاً أمام عين الناظر مباشرة!",
        "حذف الخطوط المخفية المتبقية: في المسقط المقطوع بالكامل (Full Section)، القاعدة القياسية في الرسم الهندسي هي حذف كافة الخطوط المخفية (Hidden Lines) التي لم يمر بها القطع، ولا تُرسم إلا إذا كان هناك ثقب خلفي لا يمكن وضع بعده في أي مسقط آخر.",
        "تسمية القطاع والأسهم: لا تنسَ كتابة عنوان المسقط أسفله بخط هندسي منسق: (SECTION A-A) أو (SECTION B-B)، وتأكد أن اتجاه أسهم القطع على المسقط الآخر تشير إلى نصف المجسم الذي تنظر إليه وليس النصف المحذوف."
      ],
      examTip: "نصيحة ذهبية للفاينال: تتبع خط القطع A-A من بدايته لنهايته؛ كلما دخل خط القطع في معدن مصمت فهذا الجزء سيهشر بزاوية 45°، وكلما دخل في ثقب أو تجويف فارغ يظل هذا الجزء أبيض بدون تهشير ويحده خطان ظاهران."
    }
  },

  {
    id: 'draw-mod-dimensioning-rules',
    number: 10,
    examHotspots: [
        "Aligned dimensioning system: dimension text placed 1 mm above and parallel to lines, readable from bottom or right.",
        "Diameter (⌀) for full circles and shafts vs. Radius (R) for rounded corners and blend fillets.",
        "Dimensioning taboos: never dimension to hidden lines, never cross dimension lines, and never duplicate dimensions."
    ],
    
    division: 'isometric_sections',
    divisionBadge: 'المنظور والقطاعات (Isometric & Sections)',
    titleAr: 'القواعد الهندسية لوضع الأبعاد ورموز التشغيل والتفاوتات وتخطيط اللوحة',
    titleEn: 'Engineering Dimensioning Rules, Tolerances, Machining Symbols & Detailing',
    icon: 'FileText',
    color: 'from-zinc-700 via-slate-700 to-teal-700',
    badge: 'الوحدة 10 • وضع الأبعاد الهندسية القياسية',
    summary: 'معايير وضع الأبعاد الهندسية وفقاً لـ ISO: خطوط الأبعاد والامتداد، الأسهم القياسية، نظام الأبعاد المحاذية (Aligned System)، وضع أقطار الدوائر وأنصاف الأقطار، وتجنب الأبعاد المكررة والمتعارضة.',
    learningObjectives: [
      'Master the 5 elements of dimensioning: Dimension line, Extension line, Leader line, Arrowhead (3:1 ratio), and Dimension text value.',
      'Apply the Aligned Dimensioning System: Dimension numbers placed above and parallel to dimension lines, readable from the bottom or right of the sheet.',
      'Dimension circular features accurately: Use diameter symbol (⌀) for full circles, radius symbol (R) for fillet/corner arcs, and locate centers with centerlines.',
      'Avoid critical dimensioning errors: Never cross dimension lines with other dimension lines, never dimension to hidden lines, and never duplicate dimensions across views.'
    ],
    keyFormulas: [
      {
        title: 'Standard Arrowhead Proportions (ISO Standard):',
        formula: '\\text{Length } L = 3 \\times \\text{Width } W \\quad (L \\approx 3 \\text{ mm}, W \\approx 1 \\text{ mm}), \\quad \\text{Filled Closed Arrowhead}',
        notes: 'Arrowheads must touch extension lines cleanly without passing through.'
      },
      {
        title: 'Extension Line Gap and Extension Distances:',
        formula: '\\text{Gap from Object Outline} = 1 - 2 \\text{ mm}, \\quad \\text{Extension Beyond Dimension Line} = 2 - 3 \\text{ mm}',
        notes: 'First dimension line must be at least 10 mm away from object; parallel dimension lines spaced 8 mm apart.'
      }
    ],
    bilingualInsight: {
      titleEn: "ISO Dimensioning Hierarchy & Best Practices on Drawing Plates",
      titleAr: "💡 افهم الفكرة والربط الهندسي بالعربي: القواعد الذهبية لوضع الأبعاد الهندسية",
      points: [
        "لماذا تُعتبر الأبعاد أهم جزء في اللوحة الهندسية؟ رسم بدون أبعاد هو مجرد لوحة فنية لا تصلح للتصنيع! العامل في الورشة أو ماكينة الـ CNC لا تقيس بالمسطرة من الورقة؛ بل تعتمد بنسبة 100% على الأرقام المكتوبة، وأي بعد ناقص أو غامض يعني تلف قطعة التشغيل بالكامل.",
        "نظام وضع الأبعاد المحاذي (Aligned System): في الجامعات المصرية نستخدم النظام المحاذي، حيث يُكتب رقم البعد في منتصف خط البعد وفوقه بمقدار 1 مم، ويوازي خط البعد تماماً بحيث يمكن قراءته من أسفل اللوحة أو من يمينها.",
        "قاعدة عدم التقاطع (No Crossing): خطوط الأبعاد الصغرى توضع دائماً أقرب للمجسم (على مسافة 10 مم)، تليها خطوط الأبعاد الكلية الكبرى (على مسافة 8 مم إضافية)، وذلك لمنع تقاطع خطوط الامتداد مع خطوط الأبعاد نهائياً.",
        "محظورات وضع الأبعاد: 1) إياك أن تضع بعداً على خط مخفي (Hidden Line) بل انقله للمسقط الذي يظهر فيه كخط ظاهر، 2) إياك أن تكرر نفس البعد في مسقطين، 3) الدائرة الكاملة يُوضع لها قطر (⌀) وقوس الانحناء الخارجي يوضع له نصف قطر (R)."
      ],
      examTip: "توزيع الدرجات على الأبعاد: في كل لوحة شيت أو فاينال، تُخصص 10 درجات كاملة على دقة وضع الأبعاد؛ التزامك بالفراغ 1 مم قبل خط الامتداد وشكل السهم المغلق الممتلئ (3:1) يضمن لك الدرجة النهائية للأبعاد."
    }
  }
];

export const DRAWING_EXAM_TIPS = [
  {
    category: 'tangency_arcs',
    title: 'قاعدة الجمع والطرح في أقواس التماس',
    tipAr: 'إذا كان القوس يمس دائرتين من الخارج: اجمع أنصاف الأقطار دائماً (R1 + R) و (R2 + R) لتحديد المركز. وإذا كان القوس يحتضن الدائرتين من الداخل: اطرح دائماً (R - R1) و (R - R2). لا تنسَ وضع خطوط الإنشاء الخفيفة التي تحدد نقطتي التماس T1 و T2.',
    tipEn: 'For external fillet arcs touching two circles: Add radii (R1 + R) and (R2 + R) to find center O. For enclosing internal arcs: Subtract radii (R - R1) and (R - R2). Always mark tangent points T1 and T2.'
  },
  {
    category: 'orthographic_miter',
    title: 'نقل الأبعاد بدقة خط الـ 45° بدون قياس',
    tipAr: 'في الإسقاط المتعامد زاوية أولى (First-Angle): المسقط الرأسي Elevation فوق الأفقي Plan تماماً، والمسقط الجانبي Side View يمين الرأسي. خط الـ 45° في الربع الرابع ينقل كافة أعماق المسقط الأفقي إلى المسقط الجانبي بدقة ميكانيكية 100% وتوفر نصف وقت القياس.',
    tipEn: 'In First-Angle: Elevation is directly above Plan, and Left Side View is on the right. The 45° miter line in the 4th quadrant transfers depth from Plan to Side View without manual scaling.'
  },
  {
    category: 'four_center_ellipse',
    title: 'تحديد المعين والرؤوس المنفرجة في الأيزومتري',
    tipAr: 'عند رسم دائرة في المنظور بزاوية 30°: ارسم المعين أولاً بأضلاع تساوي قطر الدائرة D موازية لمحاور الوجه. الرأسان المنفرجان (الزاويتان الأكبر من 90°) هما دائماً المركزان للأقواس الكبيرة، ومنهما تخرج الخطوط لمنتصفات الأضلاع لتحديد مركزي الأقواس الصغيرة.',
    tipEn: 'For an isometric circle: Draw the bounding rhombus with side D parallel to isometric axes. The two obtuse corners (> 90°) are always the centers for the large arcs, projecting lines to side midpoints to locate small arc centers.'
  },
  {
    category: 'sectional_hatching',
    title: 'القاعدة الذهبية لاستثناء الأعصاب والمسامير من التهشير',
    tipAr: 'في القطاعات الهندسية: العصب المائل (Web/Rib) إذا قُطع طولياً بموازاة مساحته الكبيرة، يُرسم كخط متصل سميك ولا يُهشر إطلاقاً! كما تستثنى المسامير والصواميل والأعمدة المصمتة من التهشير الطولي. خطوط التهشير دائماً بزاوية 45° وبخطوط رقيقة مستمرة.',
    tipEn: 'In sectional views: Webs/ribs cut longitudinally must NEVER be hatched. Solid shafts, bolts, nuts, and pins cut along their axes are also never hatched. Hatching is strictly thin continuous at 45°.'
  }
];
