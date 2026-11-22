// Comprehensive Glossary, Conventions, Rules & Flashcards Bank for Engineering Drawing & Projection (MDP 001)
// Tailored Exclusively for Faculty of Engineering at Shoubra (FES) - Benha University (Term 1)
// Department of Mechanical Design and Production Engineering
// Strictly Divided into Two Distinct Academic Branches:
// 1. Geometric Constructions & Orthographic Projection Branch (geometric_orthographic)
// 2. Isometric Drawing, Sections & Dimensioning Branch (isometric_sections)

export const DRAWING_GLOSSARY_MODULES = [
  { id: 'all', label: 'جميع وحدات الرسم الهندسي (10 وحدات)', icon: 'Sparkles', color: 'text-slate-300' },
  // Division 1: Geometric Constructions & Orthographic Projection
  { id: 'instruments_lines', label: '١. أدوات الرسم وأنواع الخطوط ISO', icon: 'Compass', color: 'text-cyan-400' },
  { id: 'tangency_arcs', label: '٢. أقواس التماس والعمليات الهندسية', icon: 'Activity', color: 'text-blue-400' },
  { id: 'orthographic_projection', label: '٣. الإسقاط المتعامد وزاوية 1', icon: 'Layers', color: 'text-teal-400' },
  { id: 'missing_view', label: '٤. منهجية استنتاج المسقط الثالث', icon: 'GitFork', color: 'text-indigo-400' },
  { id: 'cylinders_inclined', label: '٥. الأسطوانات والأسطح المائلة', icon: 'Compass', color: 'text-sky-400' },
  // Division 2: Isometric Drawing, Sections & Dimensioning
  { id: 'isometric_box', label: '٦. المنظور الأيزومتري بزاوية 30°', icon: 'Box', color: 'text-emerald-400' },
  { id: 'four_center_ellipse', label: '٧. الدوائر بالمراكز الأربعة', icon: 'Compass', color: 'text-amber-400' },
  { id: 'sections_hatching', label: '٨. القطاعات وقواعد التهشير 45°', icon: 'Scissors', color: 'text-red-400' },
  { id: 'sectioned_missing_view', label: '٩. استنتاج المسقط بقطاع كامل', icon: 'Layers', color: 'text-orange-400' },
  { id: 'dimensioning_rules', label: '١٠. وضع الأبعاد الهندسية القياسية', icon: 'FileText', color: 'text-zinc-300' }
];

export const DRAWING_GLOSSARY_TYPES = [
  { id: 'all', label: 'الكل (مواصفات + قواعد رسم + مصطلحات هندسية)' },
  { id: 'definition', label: '📖 مفاهيم ومصطلحات الرسم الهندسي (Drafting Definitions)' },
  { id: 'convention', label: '📐 معايير ومواصفات قياسية دولية (ISO Drafting Standards)' },
  { id: 'application', label: '⚙️ قواعد استنتاج وتطبيقات عملية (Drafting Protocols & Rules)' }
];

export const DRAWING_GLOSSARY_ITEMS = [
  // =========================================================================
  // DIVISION 1: GEOMETRIC CONSTRUCTIONS & ORTHOGRAPHIC PROJECTION (MODULES 1-5)
  // =========================================================================

  // --- MODULE 1: INSTRUMENTS & LINE CONVENTIONS ---
  {
    id: 'draw-term-line-precedence',
    module: 'instruments_lines',
    division: 'geometric_orthographic',
    type: 'convention',
    termEn: 'Line Precedence Hierarchy (Order of Coincidence)',
    definitionEn: 'The standardized ranking rule that dictates which line must be drawn when two or more different line types coincide along the exact same path in an orthographic view.',
    formula: '\\text{Solid Visible Outline (0.7mm)} > \\text{Hidden Dashed Line (0.35mm)} > \\text{Cutting Plane Line (0.7/0.35mm)} > \\text{Centerline (0.25mm)}',
    unit: 'Dimensionless ranking hierarchy',
    example: 'When a hidden internal cavity edge coincides with a solid outer edge, the solid continuous line is drawn and completely supersedes the hidden line.',
    termAr: 'هرم أسبقية تراكب الخطوط عند التطابق',
    definitionAr: 'القاعدة القياسية المعتمدة لتحديد الخط الذي يجب رسمه عند تطابق نوعين أو أكثر من الخطوط الهندسية على نفس الاستقامة في المسقط.',
    examTip: 'في الامتحان، إذا تطابق خط محور (Centerline) مع خط مخفي (Hidden Line)، يُرسم الخط المخفي إجبارياً وتُلغى السنتر لاين لأن الخط المخفي أعلى في هرم الأسبقية.',
    keywords: ['line precedence', 'coincidence', 'visible line', 'hidden line', 'centerline', 'ISO 128']
  },

  {
    id: 'draw-term-centerline-iso',
    module: 'instruments_lines',
    division: 'geometric_orthographic',
    type: 'convention',
    termEn: 'Centerline (Chain Thin Line - ISO Type G)',
    definitionEn: 'A thin line composed of alternating long dashes (10-20 mm) and short dashes/dots (2 mm) separated by 1 mm gaps, used to denote axes of symmetry, circle centers, and cylindrical pitch circles.',
    formula: '\\text{Pattern: } [\\text{Long Dash } 15\\text{mm}] - [\\text{Gap } 1\\text{mm}] - [\\text{Short Dash } 2\\text{mm}] - [\\text{Gap } 1\\text{mm}], \\quad \\text{Extension } = 2-3\\text{ mm}',
    unit: 'Thickness: 0.25 mm (2H/3H pencil)',
    example: 'Drilled hole of ⌀20 mm requires two perpendicular centerlines intersecting at their long dashes exactly at the center point.',
    termAr: 'خط المحور والتماثل (سنتر لاين - كود ISO G)',
    definitionAr: 'خط رقيق يتكون من شرطة طويلة تليها شرطة قصيرة بفراغات منتظمة، يمثل محاور التماثل ومراكز الدوائر والأسطوانات الدائرية.',
    examTip: 'يجب أن يبرز خط المحور بمقدار 2 إلى 3 مم خارج حدود الدائرة أو الأسطوانة. لا تجعله يتوقف عند حافة الدائرة بالضبط.',
    keywords: ['centerline', 'axis of symmetry', 'chain thin', 'long dash', 'short dash', 'ISO Type G']
  },

  {
    id: 'draw-term-drawing-scales',
    module: 'instruments_lines',
    division: 'geometric_orthographic',
    type: 'definition',
    termEn: 'Engineering Drawing Scales (Full, Reduction & Enlargement)',
    definitionEn: 'The proportional ratio of the linear dimension of an element of an object as represented in the drawing to the real linear dimension of the same element itself.',
    formula: '\\text{Scale Ratio} = \\frac{\\text{Length on Paper}}{\\text{True Physical Length}} \\quad (1:1 \\text{ Full}, \\; 1:2, 1:5 \\text{ Reduction}, \\; 2:1, 5:1 \\text{ Enlargement})',
    unit: 'Dimensionless ratio (e.g. 1:2)',
    example: 'A machine shaft of length 120 mm drawn at 1:2 scale is drawn on paper at 60 mm, but the dimension text written above the line remains 120.',
    termAr: 'مقاييس الرسم الهندسي (كامل وتصغير وتكبير)',
    definitionAr: 'النسبة الرياضية بين طول العنصر المرسوم على لوحة الرسم وطوله الحقيقي الفعلي في الواقع الصناعي.',
    examTip: 'الرقم المكتوب على خط البعد هو دائماً وأبداً البعد الحقيقي الفعلي للمنتج بالملليمتر، ولا يتم ضربه في مقياس الرسم إطلاقاً!',
    keywords: ['scale', 'reduction scale', 'enlargement scale', 'full size', '1:1', '1:2']
  },

  // --- MODULE 2: TANGENCY ARCS ---
  {
    id: 'draw-term-external-tangency',
    module: 'tangency_arcs',
    division: 'geometric_orthographic',
    type: 'application',
    termEn: 'External Tangency Arc (Sum of Radii Rule)',
    definitionEn: 'Geometric construction to locate the compass center of an arc of radius R blending smoothly with two external circles of radii R1 and R2 by adding the radii.',
    formula: 'd_1 = R_1 + R, \\quad d_2 = R_2 + R \\implies \\text{Intersection of Arcs from } O_1, O_2 \\text{ gives Compass Center } O',
    unit: 'Millimeters (mm)',
    example: 'Connecting two pulley circles (R1=20 mm, R2=30 mm, center distance=70 mm) externally with a fillet arc of R=40 mm: Strike arcs of 60 mm from O1 and 70 mm from O2.',
    termAr: 'قوس التماس الخارجي بين دائرتين (قاعدة جمع أنصاف الأقطار)',
    definitionAr: 'عملية هندسية لتحديد مركز قوس نصف قطره R يمس دائرتين من الخارج بنعومة، وتعتمد على فتح الفرجار بمجموع نصفي القطرين من مركزي الدائرتين.',
    examTip: 'لتحديد نقطتي التماس بدقة تامة: صل خطاً خفيفاً بين مركز القوس المستنتج O ومركز كل دائرة؛ نقطة قطع الخط لمحيط الدائرة هي نقطة التماس T.',
    keywords: ['tangency', 'external tangency', 'sum of radii', 'fillet arc', 'tangent point']
  },

  {
    id: 'draw-term-internal-tangency',
    module: 'tangency_arcs',
    division: 'geometric_orthographic',
    type: 'application',
    termEn: 'Internal Enclosing Tangency Arc (Difference of Radii Rule)',
    definitionEn: 'Geometric construction to locate the compass center of an arc of radius R that encloses two known circles of radii R1 and R2 inside its curvature by subtracting the radii.',
    formula: 'd_1 = R - R_1, \\quad d_2 = R - R_2 \\implies \\text{Intersection gives Compass Center } O',
    unit: 'Millimeters (mm)',
    example: 'An enclosing arc R=90 mm over circles R1=25 mm and R2=20 mm: Strike arcs of radius (90-25)=65 mm from O1 and (90-20)=70 mm from O2.',
    termAr: 'قوس التماس الداخلي المحتضن لدائرتين (قاعدة طرح أنصاف الأقطار)',
    definitionAr: 'عملية هندسية لتحديد مركز قوس نصف قطره R يحتضن دائرتين داخله، وتعتمد على فتح الفرجار بفرق نصفي القطرين من مركزي الدائرتين.',
    examTip: 'في التماس الداخلي، تقع نقطة التماس T على امتداد الخط الواصل بين مركز القوس O ومركز الدائرة الأصلية وخارجها.',
    keywords: ['internal tangency', 'enclosing arc', 'difference of radii', 'subtraction', 'tangent point']
  },

  {
    id: 'draw-term-line-arc-tangency',
    module: 'tangency_arcs',
    division: 'geometric_orthographic',
    type: 'application',
    termEn: 'Fillet Arc Tangent to a Straight Line and a Circle',
    definitionEn: 'Locating the center of an arc R that touches a straight line and blends with a circle of radius R1: Constructed via a parallel line at distance R and an arc of radius (R1 + R).',
    formula: '\\text{Line locus: Parallel line at offset } R, \\quad \\text{Circle locus: Arc of radius } (R_1 + R) \\text{ from } O_1',
    unit: 'Millimeters (mm)',
    example: 'Connecting a base reference line to a cylinder boss of R1=15 mm using a blend fillet of R=25 mm.',
    termAr: 'قوس التماس الواصل بين خط مستقيم ودائرة',
    definitionAr: 'عملية هندسية لإنشاء قوس انحناء بنصف قطر R يمس خطاً مستقيماً ويمس دائرة في آن واحد.',
    examTip: 'نقطة التماس على الخط المستقيم هي المسقط العمودي الساقط من مركز القوس O على الخط المستقيم بزاوية 90° تماماً.',
    keywords: ['fillet', 'straight line tangency', 'parallel offset', 'perpendicular foot']
  },

  // --- MODULE 3: ORTHOGRAPHIC PROJECTION ---
  {
    id: 'draw-term-first-angle-projection',
    module: 'orthographic_projection',
    division: 'geometric_orthographic',
    type: 'convention',
    termEn: 'First-Angle Orthographic Projection (ISO Standard)',
    definitionEn: 'The international standard multi-view projection system where the object is placed in the First Quadrant between the observer and the projection planes, causing views to be projected through the object onto planes behind it.',
    formula: '\\text{Elevation (Front): Top Left}, \\quad \\text{Plan (Top): Below Elevation}, \\quad \\text{Left Side View: To the RIGHT of Elevation}',
    unit: 'Standard ISO Symbol (Truncated Cone with Apex Left and Circles Right)',
    example: 'Viewing an object from its left side projects its image onto the right-hand profile plane.',
    termAr: 'نظام زاوية الإسقاط الأولى (المواصفة القياسية ISO)',
    definitionAr: 'نظام الإسقاط المعتمد في الجامعات المصرية وأوروبا حيث يقع المجسم بين عين الناظر ومستوى الإسقاط، مما يجعل المسقط يرتسم خلف المجسم.',
    examTip: 'الرمز القياسي لزاوية الإسقاط الأولى في جدول البيانات (Title Block) هو مخروط ناقص قاعدته الكبرى لليمين وأمامه دائرتان مركزيتان لليمين.',
    keywords: ['first-angle projection', 'ISO standard', 'elevation', 'plan', 'side view', 'truncated cone symbol']
  },

  {
    id: 'draw-term-miter-line',
    module: 'orthographic_projection',
    division: 'geometric_orthographic',
    type: 'application',
    termEn: '45° Miter Line (Alignment & Dimension Transfer Line)',
    definitionEn: 'A construction line drawn at exactly 45° in the unoccupied fourth quadrant used to mechanically reflect horizontal depth lines from the Plan view into vertical depth lines of the Side view without measuring.',
    formula: '\\tan(45^\\circ) = 1 \\implies \\Delta x_{Plan} = \\Delta y_{Side} \\quad \\text{(Perfect 1:1 Coordinate Transfer)}',
    unit: 'Degrees: 45° inclination to horizontal/vertical',
    example: 'A slot located 35 mm from the back in the Top view is projected onto the 45° miter line and turned upward into the Side view exactly at 35 mm.',
    termAr: 'خط الميتر 45° لنقل الأبعاد والمحاذاة',
    definitionAr: 'خط إنشائي يميل بزاوية 45° في الربع الرابع للوحة، يُستخدم لعكس أبعاد العمق من المسقط الأفقي إلى المسقط الجانبي بزاوية 90° دون الحاجة للقياس بالمسطرة.',
    examTip: 'ارسم خط الـ 45° دائماً بقلم 3H خفيف جداً يمر بنقطة تقاطع محاور التباعد بين المساقط.',
    keywords: ['miter line', '45 degree line', 'depth transfer', 'plan to side view', 'orthographic alignment']
  },

  // --- MODULE 4: MISSING VIEW EXTRACTION ---
  {
    id: 'draw-term-missing-view-box',
    module: 'missing_view',
    division: 'geometric_orthographic',
    type: 'application',
    termEn: 'Bounding Box Method for Missing View Extraction',
    definitionEn: 'The initial foundational step of constructing the outer boundary rectangle of the missing third view using the corresponding dimensions extracted from the two given views.',
    formula: '\\text{Height}_{Side} = \\text{Height}_{Elevation}, \\quad \\text{Width}_{Side} = \\text{Depth}_{Plan}',
    unit: 'Millimeters (mm)',
    example: 'Given Front View (Width 80 mm, Height 60 mm) and Plan View (Width 80 mm, Depth 50 mm), the missing Side View bounding box is exactly 50 mm wide by 60 mm high.',
    termAr: 'صندوق الإحاطة لاستنتاج المسقط الثالث (Bounding Box)',
    definitionAr: 'المستطيل الخارجي الإنشائي الذي يحدد الحدود القصوى للمسقط الثالث المفقود، ويُشتق ارتفاعه من المسقط الرأسي وعرضه من عمق المسقط الأفقي.',
    examTip: 'رسم صندوق المسقط الثالث بأبعاده الصحيحة يمنحك علامة فورية ويمنع خروج أي تفصيلة خارج حدود المجسم.',
    keywords: ['missing view', 'bounding box', 'overall dimensions', 'third view deduction']
  },

  {
    id: 'draw-term-hidden-lines-convention',
    module: 'missing_view',
    division: 'geometric_orthographic',
    type: 'convention',
    termEn: 'Hidden Line Rules & Junction Conventions (ISO Type E)',
    definitionEn: 'Dashed line standard (short dashes 3 mm, gaps 1 mm) representing edges and surfaces concealed behind solid material, requiring strict junction contact with visible outlines.',
    formula: '\\text{Dash length: } 3\\text{ mm}, \\quad \\text{Gap: } 1\\text{ mm}, \\quad \\text{Rule: Starts with a dash contacting the solid line}',
    unit: 'Thickness: 0.35 mm (HB pencil)',
    example: 'When a hidden line meets a solid outline at a corner, it must touch the solid line without leaving an empty gap.',
    termAr: 'قواعد رسم الخطوط المتقطعة المخفية (Hidden Lines)',
    definitionAr: 'خطوط متقطعة تمثل الحواف غير المرئية الواقعة خلف المعدن، ويشترط معيارياً أن تلامس الخطوط المتصلة عند نقاط الالتقاء دون ترك فراغ.',
    examTip: 'إذا كان هناك خطان مخفيان متقاطعان على شكل T، فيجب أن تلامس شرطة الخط الأول شرطة الخط الثاني دون فراغ.',
    keywords: ['hidden line', 'dashed line', 'junction rules', 'ISO Type E', 'concealed edge']
  },

  // --- MODULE 5: CYLINDERS & INCLINED SURFACES ---
  {
    id: 'draw-term-cylinder-projection-rule',
    module: 'cylinders_inclined',
    division: 'geometric_orthographic',
    type: 'definition',
    termEn: 'The One-Circle Two-Rectangles Cylindrical Rule',
    definitionEn: 'The fundamental projection axiom stating that any circular cylinder or cylindrical hole appears as a true circular contour in exactly ONE orthographic view and as rectangular projections with centerlines in the other two views.',
    formula: '\\text{View 1: Circle } (\\varnothing D), \\quad \\text{View 2: Rectangle } (D \\times L), \\quad \\text{View 3: Rectangle } (D \\times L)',
    unit: 'Millimeters (mm)',
    example: 'A vertical pin: Circle in Top View, solid rectangle with vertical centerline in Front View and Side View.',
    termAr: 'قاعدة إسقاط الأسطوانة (دائرة ومستطيلان)',
    definitionAr: 'المبدأ الهندسي القاطع بأن أي أسطوانة أو ثقب دائري يظهر كدائرة حقيقية في مسقط واحد فقط، ويظهر كمستطيل في المسقطين الآخرين.',
    examTip: 'المستطيل الذي يمثل أسطوانة يجب إجبارياً أن يمر في منتصفه خط سنتر لاين؛ بدونه يعتبر مستطيلاً لمنشور رباعي مصمت وتُخصم درجات.',
    keywords: ['cylinder projection', 'circular hole', 'centerline', 'true shape', 'one circle two rectangles']
  },

  {
    id: 'draw-term-foreshortening',
    module: 'cylinders_inclined',
    division: 'geometric_orthographic',
    type: 'definition',
    termEn: 'Foreshortening of Inclined Surfaces',
    definitionEn: 'The apparent shortening of a surface or line when projected onto an orthographic plane that is not parallel to the surface itself.',
    formula: 'L_{projected} = L_{true} \\cdot \\cos(\\theta), \\quad \\text{where } \\theta \\text{ is inclination angle to projection plane}',
    unit: 'Millimeters (mm)',
    example: 'A 45° chamfered plane of true length 50 mm projects onto the vertical plane with a foreshortened apparent height of 50 · cos(45°) = 35.35 mm.',
    termAr: 'الانكماش الظاهري للأسطح المائلة (Foreshortening)',
    definitionAr: 'نقصان الطول الظاهري للسطح أو الحافة عند إسقاطها على مستوى غير موازٍ لها، وتظهر بأبعادها الحقيقية فقط في المسقط الموازي لها.',
    examTip: 'السطح المائل يظهر كخط مائل (Edge View) في مسقط واحد، ويظهر كمساحة منكمشة الطول (Foreshortened) في المسقطين الآخرين.',
    keywords: ['foreshortening', 'inclined plane', 'true length', 'apparent length', 'cosine projection']
  },

  // =========================================================================
  // DIVISION 2: ISOMETRIC DRAWING, SECTIONS & DIMENSIONING (MODULES 6-10)
  // =========================================================================

  // --- MODULE 6: ISOMETRIC DRAWING & AXES ---
  {
    id: 'draw-term-isometric-axes',
    module: 'isometric_box',
    division: 'isometric_sections',
    type: 'convention',
    termEn: 'Standard 30° Isometric Axes Configuration',
    definitionEn: 'The three principal axes of axonometric isometric drawing meeting at the front origin: one vertical axis at 90° and two receding axes inclined at 30° to the horizontal drawn with a 30°-60° set square.',
    formula: '\\theta_{left} = 30^\\circ, \\quad \\theta_{right} = 30^\\circ, \\quad \\theta_{vertical} = 90^\\circ \\implies 120^\\circ \\text{ spatial separation in 3D}',
    unit: 'Degrees (30° / 90° / 30°)',
    example: 'Constructing an isometric block: Width measured along 30° left axis, Depth along 30° right axis, Height along 90° vertical axis.',
    termAr: 'محاور المنظور الأيزومتري القياسية بزاوية 30°',
    definitionAr: 'المحاور الثلاثة الرئيسية للرسم الأيزومتري، وتتكون من محور رأسي 90° ومحورين مائلين بزاوية 30° تماماً مع خط الأفق باستخدام مثلث 30°-60°.',
    examTip: 'في الرسم الأيزومتري (Isometric Drawing)، تُنقل الأبعاد الحقيقية بمقياس 1:1 مباشرة على المحاور الثلاثة بالمسطرة دون أي تصغير.',
    keywords: ['isometric axes', '30 degrees', '30-60 triangle', 'isometric drawing', 'vertical axis']
  },

  {
    id: 'draw-term-non-isometric-lines',
    module: 'isometric_box',
    division: 'isometric_sections',
    type: 'application',
    termEn: 'Non-Isometric Slanted Lines Construction Rule',
    definitionEn: 'Lines that are not parallel to any of the three isometric axes cannot be measured directly with a ruler; their terminal endpoints must be plotted along isometric coordinates and connected.',
    formula: '\\text{Length on Isometric} \\neq \\text{True Length} \\implies \\text{Plot } (x_1, y_1, z_1) \\text{ and } (x_2, y_2, z_2) \\text{ then connect}',
    unit: 'Plotting coordinate method',
    example: 'A triangular rib with an inclined top edge: Locate its top height on the vertical axis and its base distance along the 30° axis, then connect.',
    termAr: 'قاعدة رسم الخطوط المائلة غير الأيزومترية',
    definitionAr: 'الخطوط التي لا توازي أي محور من محاور المنظور الثلاثة، ويحظر قياسها بالمسطرة، بل يجب تحديد إحداثيات نقطتي البداية والنهاية على محاور أيزومترية ثم التوصيل بينهما.',
    examTip: 'إياك أن تقيس طول خط مائل بمسطرة في المنظور! طوله في المنظور مشوه هندسياً ولا يساوي طوله الحقيقي أبداً.',
    keywords: ['non-isometric line', 'slanted line', 'coordinate plotting', 'distortion', 'endpoint method']
  },

  // --- MODULE 7: FOUR-CENTER ELLIPSE ---
  {
    id: 'draw-term-four-center-rhombus',
    module: 'four_center_ellipse',
    division: 'isometric_sections',
    type: 'application',
    termEn: 'The Isometric Bounding Rhombus for Circles',
    definitionEn: 'The four-sided equilateral parallelogram drawn on an isometric plane with sides equal to the circle diameter D parallel to the isometric axes, enclosing the isometric ellipse.',
    formula: '\\text{Side length } s = D, \\quad \\text{Obtuse angles } = 120^\\circ, \\quad \\text{Acute angles } = 60^\\circ',
    unit: 'Millimeters (mm)',
    example: 'A circle of ⌀60 mm on the top horizontal face requires a rhombus with 60 mm sides drawn at 30° left and 30° right.',
    termAr: 'معين المنظور المحيط بالدائرة (Rhombus)',
    definitionAr: 'الشكل الرباعي متساوي الأضلاع الذي يحيط بالدائرة في المنظور، وتكون أضلاعه مساوية لقطر الدائرة D وموازية لمحاور الوجه الأيزومتري.',
    examTip: 'أضلاع المعين يجب أن توازي دائماً محاور الوجه الذي تقع فيه الدائرة (أفقي أو جانبي أو أمامي)؛ رسم المعين على محاور خاطئة يقلب اتجاه البيضاوية.',
    keywords: ['rhombus', 'isometric circle', 'four-center method', 'obtuse angle', '120 degrees']
  },

  {
    id: 'draw-term-four-center-centers',
    module: 'four_center_ellipse',
    division: 'isometric_sections',
    type: 'application',
    termEn: 'The 4 Compass Centers (C1, C2, C3, C4) Determination',
    definitionEn: 'The geometric protocol where the 2 obtuse corners of the rhombus act as large arc centers (C1, C2), while the intersection points of lines connecting obtuse corners to opposite side midpoints act as small arc centers (C3, C4).',
    formula: 'C_1, C_2 = \\text{Obtuse Vertices (120°)}, \\quad C_3, C_4 = \\text{Intersections of opposite midpoint lines}',
    unit: '4 compass center points',
    example: 'From top obtuse corner C1, draw lines to midpoints M1 and M2; from bottom obtuse corner C2, draw lines to M3 and M4. The lines cross at C3 and C4.',
    termAr: 'المراكز الأربعة الفرجارية لرسم القطع الناقص الأيزومتري',
    definitionAr: 'المراكز الأربعة المحددة هندسياً: المركزان المنفرجان (C1 و C2) للأقواس الكبيرة، ونقطتا تقاطع الخطوط الواصلة لمنتصفات الأضلاع (C3 و C4) للأقواس الصغيرة.',
    examTip: 'شكل الخطوط الواصلة من الرأسين المنفرجين لمنتصفات الأضلاع يشبه تماماً الرقمين 7 و 8 بالعربي؛ نقطتا تقاطع أضلاعهما هما المركزان الصغيران.',
    keywords: ['four-center method', 'arc centers', 'midpoint lines', 'large arc', 'small arc']
  },

  // --- MODULE 8: SECTIONS & HATCHING CONVENTIONS ---
  {
    id: 'draw-term-cutting-plane-line',
    module: 'sections_hatching',
    division: 'isometric_sections',
    type: 'convention',
    termEn: 'Cutting Plane Line (ISO Type H Line)',
    definitionEn: 'A chain thin line with thick ends (0.7 mm) and thick directional change bends, terminated by bold arrows indicating the direction of viewing for the sectional view.',
    formula: '\\text{Line Body: Chain Thin (0.25mm)}, \\quad \\text{Ends & Corners: Thick (0.7mm)}, \\quad \\text{Arrowheads point toward remaining half}',
    unit: 'ISO Type H line convention',
    example: 'Section A-A drawn with cutting line labeled A at both arrows across the Plan view.',
    termAr: 'خط مستوى القطع وسهام اتجاه النظر (كود ISO H)',
    definitionAr: 'خط محور رقيق ينتهي بطرفين سميكين وسهمين عريضين يحددان اتجاه نظر الراصد للقطاع، ويسمى القطاع بحرفين كبيرين (SECTION A-A).',
    examTip: 'أسهم خط القطع تشير دائماً إلى الجزء المتبقي الذي تنظر إليه عينك، وليس إلى النصف المقطوع المحذوف!',
    keywords: ['cutting plane line', 'ISO Type H', 'section arrows', 'direction of view', 'section A-A']
  },

  {
    id: 'draw-term-hatching-angle-spacing',
    module: 'sections_hatching',
    division: 'isometric_sections',
    type: 'convention',
    termEn: 'Standard 45° Hatching Lines Convention (ISO 128)',
    definitionEn: 'Thin continuous parallel lines drawn at 45° to the main outlines or symmetry axes, spaced uniformly between 1.5 mm and 3 mm, used exclusively to represent solid cut material.',
    formula: '\\theta_{hatch} = 45^\\circ, \\quad \\text{Line thickness} = 0.25-0.35\\text{ mm (2H)}, \\quad \\text{Uniform spacing } s = 2\\text{ mm}',
    unit: '45 degrees inclination / 2 mm pitch',
    example: 'Cast iron machine frame sectioned: Filled with uniform 45° lines that stop sharply at visible boundaries.',
    termAr: 'معايير خطوط التهشير القياسية بزاوية 45° (ISO 128)',
    definitionAr: 'خطوط رقيقة مستمرة متوازية تُرسم بزاوية 45° وبمسافات منتظمة (2 مم تقريباً) لتمثيل المعدن المصمت الذي قطعه المنشار.',
    examTip: 'إياك أن تجعل خطوط التهشير تخرج خارج حدود الخط المتصل السميك للمجسم، والتجاويف الفارغة والثقوب تظل بيضاء نقية دون تهشير.',
    keywords: ['hatching', 'cross-hatching', '45 degrees', 'uniform spacing', 'ISO 128', 'section line']
  },

  {
    id: 'draw-term-web-rib-non-hatching',
    module: 'sections_hatching',
    division: 'isometric_sections',
    type: 'convention',
    termEn: 'Longitudinal Web / Rib Non-Hatching Exception Rule',
    definitionEn: 'The universal engineering drafting rule stating that thin stiffening webs, ribs, or gusset plates cut along their longitudinal flat plane must NEVER be hatched to prevent false impression of solid thickness.',
    formula: '\\text{Cutting plane } \\parallel \\text{ Web flat surface} \\implies \\text{DO NOT HATCH (Leave clear white area)}',
    unit: 'Universal Drafting Exemption',
    example: 'A 10 mm thick reinforcing rib cut down its length in a bracket section is outlined with thick visible lines but left entirely unhatched.',
    termAr: 'القاعدة الذهبية لاستثناء الأعصاب (Webs) من التهشير الطولي',
    definitionAr: 'القاعدة القياسية التي تحظر تهشير الأعصاب وألواح التقوية إذا مر بها القطع بموازاة سطحها الأكبر طولياً، لمنع إعطاء انطباع خاطئ بأن الجسم كتلة مصمتة سميكة.',
    examTip: 'سؤال الامتحان الكلاسيكي: إذا قُطع العصب طولياً يظل أبيض بدون تهشير، أما إذا قُطع العصب عرضياً (مقطع عرضي متعامد) فإنه يُهشر كأي معدن عادي.',
    keywords: ['web exception', 'rib non-hatching', 'longitudinal section', 'reinforcing rib', 'drafting rule']
  },

  {
    id: 'draw-term-standard-parts-non-hatching',
    module: 'sections_hatching',
    division: 'isometric_sections',
    type: 'convention',
    termEn: 'Fasteners, Shafts & Pins Non-Hatching Exception',
    definitionEn: 'Standard solid engineering elements including bolts, screws, nuts, washers, solid shafts, keys, cotter pins, and ball bearings cut along their longitudinal axis are never sectioned or hatched.',
    formula: '\\text{Longitudinal cut through Shaft / Bolt / Pin / Key} \\implies \\text{Shown in Full (Unsectioned)}',
    unit: 'Assembly Drafting Convention',
    example: 'An assembly drawing cut along the shaft axis: The housing is hatched, but the solid shaft and hex bolt inside remain completely unhatched.',
    termAr: 'استثناء المسامير والأعمدة والخوابير من التهشير الطولي',
    definitionAr: 'معيار في الرسم التجميعي يقضي بعدم تهشير الأجزاء المصمتة القياسية (المسامير، الصواميل، الأعمدة المصمتة، الخوابير، كرات المحامل) إذا مر القطع بمحورها الطولي.',
    examTip: 'في امتحانات الرسم، العمود المصمت والمسمار يُرسمان كجسم كامل سليم بدون تهشير حتى لو مر بهما خط القطع A-A.',
    keywords: ['fasteners', 'bolts', 'shafts', 'pins', 'keys', 'non-hatching', 'assembly drawing']
  },

  {
    id: 'draw-term-half-section',
    module: 'sections_hatching',
    division: 'isometric_sections',
    type: 'definition',
    termEn: 'Half Section for Symmetrical Components',
    definitionEn: 'A sectional view of a symmetrical object where one quarter is removed by two perpendicular cutting planes, resulting in a view that is half sectioned and half exterior elevation.',
    formula: '\\text{Left/Top Half: Unsectioned Exterior}, \\quad \\text{Right/Bottom Half: Sectioned & Hatched}, \\quad \\text{Divider: Centerline}',
    unit: 'Quarter cut convention',
    example: 'Symmetrical wheel hub: Right side hatched showing bore and keyway, left side shows exterior flange profile.',
    termAr: 'نصف القطاع للأجسام المتماثلة (Half Section)',
    definitionAr: 'قطاع هندسي للأجسام المتماثلة يُزال فيه ربع المجسم فقط، فيظهر نصف المسقط كقطاع مهشر داخلي ويظهر النصف الآخر كمسقط خارجي عادي يفصلهما خط سنتر لاين.',
    examTip: 'الخط الفاصل بين النصف المقطوع والنصف الخارجي هو دائماً خط محور (Centerline) وليس خطاً متصلاً سميكاً!',
    keywords: ['half section', 'symmetry', 'centerline divider', 'quarter removal', 'internal external']
  },

  // --- MODULE 9: SECTIONED MISSING VIEW ---
  {
    id: 'draw-term-hidden-lines-in-section',
    module: 'sectioned_missing_view',
    division: 'isometric_sections',
    type: 'convention',
    termEn: 'Omission of Hidden Lines in Sectional Views',
    definitionEn: 'The ISO drafting standard stipulating that hidden dashed lines should be entirely omitted from sectioned views unless strictly indispensable for understanding or dimensioning.',
    formula: '\\text{Sectional View} \\implies \\text{Omit all hidden dashed lines behind the cutting plane}',
    unit: 'Drafting clarity rule',
    example: 'In a full sectional elevation, do not draw dashed lines for holes lying in the background unless a dimension attaches to them.',
    termAr: 'قاعدة حذف الخطوط المخفية في المساقط المقطوعة',
    definitionAr: 'القاعدة القياسية في الرسم الهندسي التي تقضي بإلغاء وحذف كافة الخطوط المتقطعة المخفية في المسقط المقطوع بالكامل لتفادي تشويش خطوط التهشير.',
    examTip: 'في مسألة استنتاج المسقط بقطاع كامل (Sectional Side View): لا ترسم أي خط منقط (Dashed Line) داخل المساحة المهشرة نهائياً.',
    keywords: ['hidden lines omission', 'sectional view', 'clarity rule', 'hatched area']
  },

  {
    id: 'draw-term-offset-section',
    module: 'sectioned_missing_view',
    division: 'isometric_sections',
    type: 'definition',
    termEn: 'Offset (Stepped) Sectional View',
    definitionEn: 'A sectional view where the cutting plane is stepped at 90° angles to pass through various non-collinear features (e.g. holes, slots) across different depths of the workpiece.',
    formula: '\\text{90° Stepped Cutting Plane Transitions} \\implies \\text{No dividing line shown in the resulting sectional view}',
    unit: 'Stepped cutting plane convention',
    example: 'Cutting plane steps sideways to pass through a mounting hole in the flange and then through the central cylinder bore.',
    termAr: 'القطاع المتنقل أو المدرج (Offset Section)',
    definitionAr: 'قطاع هندسي ينكسر فيه مستوى القطع بزوايا قائمة 90° ليمر بعدة تفاصيل وتجاويف لا تقع على استقامة واحدة، ويُرسم المسقط الناتج كأنه قطاع مستوٍ دون إظهار خطوط الانكسار.',
    examTip: 'في القطاع المتنقل، انكسار خط القطع بزاوية 90° لا يُرسم له أي خط فاصل في المسقط المهشر؛ يظهر التهشير كسطح مستمر واحد.',
    keywords: ['offset section', 'stepped cutting plane', '90 degree bend', 'non-collinear features']
  },

  // --- MODULE 10: DIMENSIONING RULES ---
  {
    id: 'draw-term-aligned-dimensioning',
    module: 'dimensioning_rules',
    division: 'isometric_sections',
    type: 'convention',
    termEn: 'Aligned Dimensioning System (ISO Standard)',
    definitionEn: 'The dimensioning convention where dimension numbers are placed parallel to and slightly above the dimension line, readable from the bottom or right-hand edge of the drawing sheet.',
    formula: '\\text{Text placement: 1 mm above dimension line}, \\quad \\text{Readable from Bottom (horizontal) & Right (vertical)}',
    unit: 'ISO Dimensioning System',
    example: 'A vertical dimension line has its numerical value written vertically alongside, reading upright when viewing from the right side of the sheet.',
    termAr: 'نظام وضع الأبعاد المحاذي (Aligned System)',
    definitionAr: 'النظام القياسي المعتمد لكتابة الأبعاد، حيث يُكتب الرقم موازياً لخط البعد وفوقه بمقدار 1 مم، وتُقرأ الأبعاد من أسفل اللوحة أو من يمينها.',
    examTip: 'في البعد الرأسي، يُكتب الرقم على يسار خط البعد ويقرأ بتدوير الرأس لليمين؛ لا تكتب الرقم مقلوباً أو أسفل الخط.',
    keywords: ['aligned dimensioning', 'dimension text', 'ISO standard', 'readable from bottom and right']
  },

  {
    id: 'draw-term-diameter-radius-symbols',
    module: 'dimensioning_rules',
    division: 'isometric_sections',
    type: 'convention',
    termEn: 'Diameter (⌀) and Radius (R) Precedence Symbols',
    definitionEn: 'Standard prefix symbols used in engineering dimensioning: ⌀ precedes numerical values for full circles and cylindrical diameters; R precedes values for circular corner fillets and arcs.',
    formula: '\\text{Full Circle / Cylinder} \\implies \\varnothing D \\quad (\\text{e.g. } \\varnothing 40), \\quad \\text{Arc / Corner Fillet} \\implies R r \\quad (\\text{e.g. } R 15)',
    unit: 'Symbol prefix',
    example: 'Drilled hole: ⌀25 mm with centerline; Rounded corner: R12 with leader arrow pointing toward arc center.',
    termAr: 'رموز أقطار الدوائر (⌀) وأنصاف أقطار الأقواس (R)',
    definitionAr: 'الرموز الهندسية الإلزامية التي تسبق رقم البعد: رمز القطر (⌀) يوضع للدوائر والأسطوانات الكاملة، ورمز نصف القطر (R) يوضع لأقواس الانحناء.',
    examTip: 'لا تضع أبداً رمز R لدائرة كاملة، ولا تضع رمز ⌀ لقوس انحناء ركني؛ الخلط بينهما خطأ فادح في معايير الرسم.',
    keywords: ['diameter symbol', 'radius symbol', 'fillet', 'hole dimensioning', 'prefix']
  },

  {
    id: 'draw-term-arrowhead-proportions',
    module: 'dimensioning_rules',
    division: 'isometric_sections',
    type: 'convention',
    termEn: 'Standard Arrowhead Proportions (3:1 Ratio)',
    definitionEn: 'The geometric standard for engineering dimension arrowheads: length must be approximately 3 times the base width, filled solid black, touching extension lines cleanly.',
    formula: '\\text{Length } L = 3 \\times \\text{Width } W \\quad (L \\approx 3 \\text{ mm}, W \\approx 1 \\text{ mm}), \\quad \\text{Filled closed style}',
    unit: '3:1 aspect ratio',
    example: 'An arrowhead drawn 3 mm long and 1 mm wide with straight filled sides terminating at extension lines.',
    termAr: 'النسب القياسية لأسهم الأبعاد الهندسية (نسبة 3 إلى 1)',
    definitionAr: 'المواصفة الهندسية لأسهم خطوط الأبعاد، حيث يكون طول السهم ثلاثة أضعاف عرضه (3 مم طول و 1 مم عرض)، ويكون مغلقاً ومظللاً بالكامل.',
    examTip: 'ارسم الأسهم دائماً مدببة وأنيقة بمثلث الرصاص؛ الأسهم المفتوحة العشوائية تشوه مظهر اللوحة وتخصم درجات التنسيق.',
    keywords: ['arrowhead', '3 to 1 ratio', 'dimension line', 'extension line', 'filled arrowhead']
  }
];
