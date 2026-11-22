// Official Engineering Drawing & Projection Past Exam MCQ Bank (MDP 001)
// Faculty of Engineering at Shoubra (FES) - Benha University
// Tailored to Shoubra Preparatory Engineering Exams with Academic Rationale and Arabic Clarification
// Strictly Separated by Academic Branch:
// 1. Geometric Constructions & Orthographic Projection Branch (geometric_orthographic)
// 2. Isometric Drawing, Sections & Dimensioning Branch (isometric_sections)

export const DRAWING_QUIZ_QUESTIONS = [
  // =========================================================================
  // DIVISION 1: GEOMETRIC CONSTRUCTIONS & ORTHOGRAPHIC PROJECTION (QUESTIONS 1 - 10)
  // =========================================================================
  {
    id: 'dq-01',
    division: 'geometric_orthographic',
    module: 'instruments_lines',
    examSource: 'فاينال هندسة شبرا - يناير 2024',
    question: 'According to ISO 128 standards, when a hidden dashed line, a visible continuous solid outline, and a centerline coincide along the exact same path in an orthographic view, which line must be drawn?',
    questionAr: 'وفقاً لمواصفة الرسم القياسية ISO 128، عند تطابق خط مخفي (Hidden Line) وخط ظاهر متصل (Visible Outline) وخط محور (Centerline) على نفس الاستقامة في المسقط، فإن الخط الذي يجب رسمه هو:',
    options: [
      'The centerline, to show symmetry',
      'The visible continuous solid outline',
      'The hidden dashed line, to reveal internal geometry',
      'Both the solid line and hidden line side by side'
    ],
    correctAnswer: 1,
    rationaleEn: 'Under the international ISO line precedence hierarchy: Visible solid outlines (Type A) take absolute highest precedence, followed by hidden dashed lines (Type E), cutting plane lines (Type H), and lastly centerlines (Type G). Thus, the visible outline must be drawn, superseding all others.',
    rationaleAr: 'وفقاً لهرم أسبقية تراكب الخطوط القياسي (Line Precedence): الخط الظاهر المتصل العريض (0.7 مم) له الأولوية القصوى المطلقة، يليه الخط المخفي، ثم خط مستوى القطع، وأخيراً خط المحور. لذلك يُرسم الخط الظاهر ويلغي ما دونه.'
  },
  {
    id: 'dq-02',
    division: 'geometric_orthographic',
    module: 'instruments_lines',
    examSource: 'ميدتيرم هندسة شبرا - نوفمبر 2023',
    question: 'A machine shaft of true physical length 150 mm is drawn on an engineering drawing sheet using a standard reduction scale of 1:2. The dimension value that must be written above the dimension line is:',
    questionAr: 'عمود ماكينة طوله الحقيقي الفعلي 150 مم، تم رسمه على اللوحة بمقياس تصغير قياسي 1:2. إن قيمة البعد الرقمية التي يجب كتابتها فوق خط البعد هي:',
    options: [
      '75 mm',
      '75',
      '150',
      '300'
    ],
    correctAnswer: 2,
    rationaleEn: 'The universal golden rule of engineering dimensioning states that the numerical value placed on a drawing is ALWAYS the true 1:1 physical size of the manufactured component in millimeters, regardless of the drawing scale used. Furthermore, the unit abbreviation "mm" is omitted on standard mechanical drawings.',
    rationaleAr: 'القاعدة الذهبية لوضع الأبعاد: الرقم المكتوب على خط البعد هو دائماً وأبداً البعد الحقيقي الفعلي للقطعة (150) بالملليمتر بغض النظر عن مقياس الرسم المستخدم، كما تُحذف كلمة mm لأن جميع الأبعاد بالملليمتر قياسياً.'
  },
  {
    id: 'dq-03',
    division: 'geometric_orthographic',
    module: 'tangency_arcs',
    examSource: 'شيت العمليات الهندسية - هندسة شبرا 2024',
    question: 'To construct an arc of radius R = 50 mm that blends smoothly and touches two known circles of radii R1 = 20 mm and R2 = 30 mm externally, the compass radii swung from centers O1 and O2 are:',
    questionAr: 'لرسم قوس تماس بنصف قطر R = 50 مم يمس دائرتين معلومتين نصف قطريهما R1 = 20 مم و R2 = 30 مم من الخارج، فإن فتحتي الفرجار من المركزين O1 و O2 هما:',
    options: [
      '30 mm and 20 mm',
      '50 mm and 50 mm',
      '70 mm and 80 mm',
      '20 mm and 30 mm'
    ],
    correctAnswer: 2,
    rationaleEn: 'For external tangency between an arc of radius R and two circles of radii R1 and R2, the center of the blend arc is located at distance (R1 + R) from center O1 and distance (R2 + R) from center O2. Therefore, d1 = 20 + 50 = 70 mm, and d2 = 30 + 50 = 80 mm.',
    rationaleAr: 'في التماس الخارجي بين قوس ودائرتين، نجمع أنصاف الأقطار: فتحة الفرجار من مركز الدائرة الأولى = R1 + R = 20 + 50 = 70 مم، ومن مركز الدائرة الثانية = R2 + R = 30 + 50 = 80 مم.'
  },
  {
    id: 'dq-04',
    division: 'geometric_orthographic',
    module: 'tangency_arcs',
    examSource: 'فاينال هندسة شبرا - يناير 2023',
    question: 'When constructing a tangency blend arc of radius R = 100 mm that internally encloses a circle of radius R1 = 35 mm, the radius of the construction locus arc swung from circle center O1 is:',
    questionAr: 'عند رسم قوس تماس بنصف قطر R = 100 مم يحتضن دائرة نصف قطرها R1 = 35 مم من الداخل، فإن نصف قطر قوس الإنشاء المرسوم من مركز الدائرة O1 هو:',
    options: [
      '135 mm',
      '100 mm',
      '65 mm',
      '35 mm'
    ],
    correctAnswer: 2,
    rationaleEn: 'For internal enclosing tangency where the blend arc encloses the circle within its interior curvature, the compass radius swung from the circle center is the difference of radii: d = R - R1 = 100 - 35 = 65 mm.',
    rationaleAr: 'في التماس الداخلي المحتضن للدائرة، نطرح نصف قطر الدائرة من نصف قطر القوس: d = R - R1 = 100 - 35 = 65 مم.'
  },
  {
    id: 'dq-05',
    division: 'geometric_orthographic',
    module: 'orthographic_projection',
    examSource: 'فاينال هندسة شبرا - يناير 2024',
    question: 'In First-Angle Orthographic Projection (ISO Standard as taught at Shoubra Faculty of Engineering), the Left Side View of an object is positioned:',
    questionAr: 'في نظام زاوية الإسقاط الأولى (First-Angle Projection المعتمد في هندسة شبرا)، فإن المسقط الجانبي الأيسر (Left Side View) يوضع في اللوحة:',
    options: [
      'To the left of the Front View',
      'Directly above the Front View',
      'To the right of the Front View',
      'Directly below the Plan View'
    ],
    correctAnswer: 2,
    rationaleEn: 'In First-Angle Projection, the object lies between the observer and the projection plane. When an observer looks at the object from the left side, the resulting view is projected onto the profile plane situated on the RIGHT-hand side of the Front View (Elevation).',
    rationaleAr: 'في نظام زاوية الإسقاط الأولى، يقع المجسم بين عين الناظر ومستوى الإسقاط؛ فعند النظر للمجسم من جهة اليسار، ينطبع مسقطه على المستوى الواقع على يمين المسقط الرأسي.'
  },
  {
    id: 'dq-06',
    division: 'geometric_orthographic',
    module: 'orthographic_projection',
    examSource: 'ميدتيرم هندسة شبرا - نوفمبر 2022',
    question: 'The 45° Miter line is drafted in the unoccupied fourth quadrant of an engineering drawing sheet specifically to:',
    questionAr: 'يُرسم خط الميتر بزاوية 45° في الربع الرابع الخالي من لوحة الرسم الهندسي خصيصاً لـ:',
    options: [
      'Indicate the title block boundary',
      'Transfer depth dimensions accurately between the Plan View and Side View without measuring',
      'Calculate the center of gravity of the workpiece',
      'Determine the scale enlargement factor'
    ],
    correctAnswer: 1,
    rationaleEn: 'The 45° Miter line serves as a mechanical geometric reflector (since tan 45° = 1.0). Horizontal depth dimensions in the Top/Plan View projected downward onto the 45° line turn 90° directly into horizontal depth dimensions of the Side View without manual ruler measurement.',
    rationaleAr: 'وظيفة خط الـ 45° هي عكس أبعاد العمق من المسقط الأفقي رأسياً ثم تحويلها بزاوية 90° أفقياً إلى المسقط الجانبي بدقة هندسية تامة دون الحاجة للقياس بالمسطرة.'
  },
  {
    id: 'dq-07',
    division: 'geometric_orthographic',
    module: 'missing_view',
    examSource: 'فاينال هندسة شبرا - يناير 2023',
    question: 'Given an Elevation of width 90 mm and height 60 mm, and a Plan of width 90 mm and depth 45 mm, the bounding box of the missing Left Side View has dimensions of:',
    questionAr: 'إذا كان المسقط الرأسي بعرض 90 مم وارتفاع 60 مم، والمسقط الأفقي بعرض 90 مم وعمق 45 مم، فإن الصندوق المحيط بالمسقط الجانبي المفقود تكون أبعاده:',
    options: [
      'Width 90 mm and Height 60 mm',
      'Width 45 mm and Height 60 mm',
      'Width 60 mm and Height 45 mm',
      'Width 90 mm and Height 45 mm'
    ],
    correctAnswer: 1,
    rationaleEn: 'In orthographic projection, the Side View derives its height directly from the Elevation (Height = 60 mm) and its width directly from the depth of the Plan View (Width = Depth = 45 mm). Thus, the bounding box is 45 mm wide by 60 mm high.',
    rationaleAr: 'أبعاد المسقط الجانبي تُشتق دائماً كالتالي: الارتفاع مأخوذ من المسقط الرأسي (60 مم)، والعرض مأخوذ من عمق المسقط الأفقي (45 مم). إذن الصندوق أبعاده 45 مم عرض × 60 مم ارتفاع.'
  },
  {
    id: 'dq-08',
    division: 'geometric_orthographic',
    module: 'missing_view',
    examSource: 'شيت استنتاج المسقط الثالث - 2024',
    question: 'When drawing a hidden dashed line that terminates at a corner where it meets a visible solid continuous outline, the drafting standard requires:',
    questionAr: 'عند رسم خط مخفي متقطع ينتهي عند ركن يلتقي فيه مع خط ظاهر متصل، فإن المواصفة القياسية تشترط:',
    options: [
      'Leaving a 2 mm gap before the solid line',
      'The dash of the hidden line must contact the solid line without any gap',
      'Extending the hidden dash 1 mm past the solid line',
      'Drawing an arrowhead at the corner intersection'
    ],
    correctAnswer: 1,
    rationaleEn: 'Under ISO 128 hidden line rules, a dashed line representing a concealed edge must begin and end with a solid dash that touches the visible boundary line cleanly, ensuring unambiguous corner definition.',
    rationaleAr: 'وفقاً لمواصفات ISO، يجب أن تبدأ وتنتهي الخطوط المخفية بشرطة تلامس الخط المتصل تماماً عند الأركان والزوايا دون ترك أي فراغ لتحديد الركن بوضوح.'
  },
  {
    id: 'dq-09',
    division: 'geometric_orthographic',
    module: 'cylinders_inclined',
    examSource: 'فاينال هندسة شبرا - يناير 2024',
    question: 'A vertical solid cylinder of diameter D and height H is projected in three standard orthographic views. The views will appear as:',
    questionAr: 'أسطوانة مصمتة رأسية قطرها D وارتفاعها H أُسقطت في المساقط الهندسية الثلاثة. فإن المساقط ستظهر على النحو التالي:',
    options: [
      'Three circles of diameter D',
      'Two circles of diameter D and one rectangle of dimension D × H',
      'One circle of diameter D in the Plan, and two rectangles of dimension D × H with centerlines in Elevation and Side View',
      'Three rectangles with centerlines'
    ],
    correctAnswer: 2,
    rationaleEn: 'A fundamental rule of cylindrical projection is that any circular cylinder appears as a true circular shape in exactly ONE view (here, the Top/Plan View looking down the axis) and as rectangles of size D × H containing central symmetry centerlines in the other two orthogonal views.',
    rationaleAr: 'القاعدة الأساسية لإسقاط الأسطوانة: تظهر كدائرة حقيقية في مسقط واحد فقط (المسقط الأفقي هنا)، وتظهر كمستطيلين بأبعاد D × H يتوسطهما خط سنتر لاين في المسقطين الآخرين.'
  },
  {
    id: 'dq-10',
    division: 'geometric_orthographic',
    module: 'cylinders_inclined',
    examSource: 'ميدتيرم هندسة شبرا - نوفمبر 2023',
    question: 'When a flat surface is inclined to two projection planes but perpendicular to the third, its projection on the two inclined planes will appear:',
    questionAr: 'عندما يكون سطح مستوٍ مائلاً على مستويي إسقاط وعمودياً على المستوى الثالث، فإن مسقطه على المستويين المائلين سيظهر:',
    options: [
      'In its true shape and true dimensions',
      'As a single straight line in both views',
      'Foreshortened in area (smaller than its true dimensions)',
      'As an exact circular contour'
    ],
    correctAnswer: 2,
    rationaleEn: 'An inclined plane that is not parallel to a projection plane undergoes foreshortening (L_proj = L_true · cos theta). Its projected area appears contracted and smaller than true physical dimensions in both inclined views, appearing as an edge line (Edge View) only in the perpendicular plane.',
    rationaleAr: 'السطح المائل على مستويات الإسقاط ينكمش طوله ومساحته ظاهرياً (Foreshortened) في المساقط المائلة، ولا يظهر كخط حافة إلا في المستوى العمودي عليه فقط.'
  },

  // =========================================================================
  // DIVISION 2: ISOMETRIC DRAWING, SECTIONS & DIMENSIONING (QUESTIONS 11 - 20)
  // =========================================================================
  {
    id: 'dq-11',
    division: 'isometric_sections',
    module: 'isometric_box',
    examSource: 'فاينال هندسة شبرا - يناير 2024',
    question: 'In standard 30° Isometric Drawing, the two receding axes used to construct the isometric box are inclined to the horizontal at an angle of:',
    questionAr: 'في الرسم الأيزومتري القياسي (Isometric Drawing)، فإن المحورين المائلين المستخدمين لإنشاء صندوق المنظور يميلان على خط الأفق بزاوية قدرها:',
    options: [
      '45°',
      '30°',
      '60°',
      '120°'
    ],
    correctAnswer: 1,
    rationaleEn: 'In isometric drawing, the axes configuration consists of one vertical axis (90°) and two receding axes inclined at exactly 30° to the horizontal on either side, drafted using the 30°-60° triangle against the T-square.',
    rationaleAr: 'محاور الرسم الأيزومتري تتكون من محور رأسي (90°) ومحورين مائلين بزاوية 30° تماماً مع خط الأفق يميناً ويساراً باستخدام مثلث 30°-60°.'
  },
  {
    id: 'dq-12',
    division: 'isometric_sections',
    module: 'isometric_box',
    examSource: 'ميدتيرم هندسة شبرا - نوفمبر 2022',
    question: 'Which of the following statements regarding non-isometric lines in an isometric drawing is TRUE?',
    questionAr: 'أي من العبارات التالية بخصوص الخطوط غير الأيزومترية (Non-Isometric Lines) في المنظور تُعد صحيحة؟',
    options: [
      'They can be measured directly with an ordinary ruler along their slant',
      'They must be plotted by finding their end coordinates along isometric lines and connecting them',
      'They are always drawn using a 45° triangle',
      'They must be hatched with 45° lines'
    ],
    correctAnswer: 1,
    rationaleEn: 'Non-isometric lines are lines that do not run parallel to any of the three principal isometric axes. Because angular distortion occurs in isometric projection, non-isometric lines CANNOT be measured directly with a ruler; their terminal endpoints must be plotted along isometric axes and joined with a straight line.',
    rationaleAr: 'الخطوط غير الأيزومترية لا توازي محاور المنظور الثلاثة، ونظراً لحدوث تشوه زاوي، يحظر قياسها بالمسطرة، بل يجب تحديد إحداثيات نقطتي بدايتها ونهايتها على محاور أيزومترية ثم التوصيل بينهما.'
  },
  {
    id: 'dq-13',
    division: 'isometric_sections',
    module: 'four_center_ellipse',
    examSource: 'فاينال هندسة شبرا - يناير 2023',
    question: 'When using the Four-Center Method to draw an isometric circle on the top horizontal face, the major axis of the resulting ellipse is oriented:',
    questionAr: 'عند استخدام طريقة المراكز الأربعة لرسم دائرة أيزومترية على الوجه الأفقي العلوي (Top Face)، فإن المحور الأكبر للقطع الناقص الناتج يكون:',
    options: [
      'Vertical (90°)',
      'Horizontal (parallel to T-square baseline)',
      'Inclined at 30° to the horizontal',
      'Inclined at 60° to the horizontal'
    ],
    correctAnswer: 1,
    rationaleEn: 'On the top horizontal isometric face (rhombus sides at 30° left and 30° right), the major axis connecting the two furthest opposite rounded vertices is strictly HORIZONTAL (parallel to the T-square baseline).',
    rationaleAr: 'على الوجه الأفقي العلوي للمنظور (أضلاع المعين تميل 30° يمين و 30° يسار)، يكون المحور الأكبر (Major Axis) للقطع الناقص أفقياً تماماً وموازياً لمسطرة الـ T.'
  },
  {
    id: 'dq-14',
    division: 'isometric_sections',
    module: 'four_center_ellipse',
    examSource: 'شيت المنظور والدوائر - هندسة شبرا 2024',
    question: 'In the Four-Center Method for constructing an isometric circle within a rhombus, the centers for the TWO LARGE ARCS (R_large) are located at:',
    questionAr: 'في طريقة المراكز الأربعة لرسم الدائرة في المنظور داخل المعين، فإن مركزي القوسين الكبيرين (R_large) يقعان عند:',
    options: [
      'The two acute corners of the rhombus (60°)',
      'The exact geometric center of the rhombus',
      'The two obtuse corners of the rhombus (120°)',
      'The midpoints of the rhombus sides'
    ],
    correctAnswer: 2,
    rationaleEn: 'In the four-center construction protocol, the two obtuse corners of the bounding rhombus (angles equal to 120°) serve as the compass centers (C1 and C2) for the two large blending arcs spanning between opposite side midpoints.',
    rationaleAr: 'في طريقة المراكز الأربعة، الرأسان المنفرجان للمعين (الزاويتان 120°) هما المركزان الفرجاريان C1 و C2 لرسم القوسين الكبيرين الواصلين لمنتصفات الأضلاع المقابلة.'
  },
  {
    id: 'dq-15',
    division: 'isometric_sections',
    module: 'sections_hatching',
    examSource: 'فاينال هندسة شبرا - يناير 2024',
    question: 'Standard ISO hatching lines representing solid cut material in engineering sectional views must be drawn:',
    questionAr: 'خطوط التهشير القياسية ISO التي تمثل المعدن المصمت المقطوع في القطاعات الهندسية يجب أن تُرسم:',
    options: [
      'Thick continuous lines (0.7 mm) at 90°',
      'Thin continuous lines (0.25-0.35 mm) inclined at 45° to the main outlines or symmetry axis',
      'Dashed lines inclined at 30°',
      'Chain-dotted lines spaced 10 mm apart'
    ],
    correctAnswer: 1,
    rationaleEn: 'Under ISO 128 conventions, hatching lines must be thin continuous lines (0.25-0.35 mm, drawn with 2H/3H pencils), inclined at 45° to the principal outlines or centerline, and uniformly spaced at 1.5 to 3.0 mm intervals.',
    rationaleAr: 'وفقاً لمواصفة ISO 128، خطوط التهشير هي خطوط رقيقة مستمرة (0.25 إلى 0.35 مم بقلم 2H)، تُرسم بزاوية 45° مع الحواف الرئيسية أو المحاور، وبمسافات منتظمة (من 1.5 إلى 3 مم).'
  },
  {
    id: 'dq-16',
    division: 'isometric_sections',
    module: 'sections_hatching',
    examSource: 'فاينال هندسة شبرا - يناير 2023',
    question: 'A thin reinforcing rib (web) supporting a mechanical bracket is sliced along its longitudinal flat plane by a cutting plane. According to standard drafting rules, the rib must be:',
    questionAr: 'عصب تقوية رقيق (Web / Rib) يسند كابولاً ميكانيكياً، مر به مستوى القطع طولياً بموازاة مساحته المستوية الكبيرة. وفقاً لقواعد الرسم القياسية، فإن هذا العصب:',
    options: [
      'Hatched with double-spaced 45° lines',
      'Left completely unhatched (white area bounded by solid visible lines)',
      'Hatched at 90° horizontal lines',
      'Crossed with hidden dashed lines'
    ],
    correctAnswer: 1,
    rationaleEn: 'The universal longitudinal web non-hatching rule states that thin webs, ribs, and gussets sliced longitudinally must NEVER be hatched. Hatching them creates a false visual impression of massive solid metal thickness. They are outlined with solid continuous lines and left blank inside.',
    rationaleAr: 'القاعدة الذهبية لاستثناء الأعصاب: العصب أو ضلع التقوية إذا قُطع طولياً بموازاة سطحه الأكبر، يُحظر تهشيره نهائياً ويُترك مساحة بيضاء محاطة بخطوط ظاهرة، لمنع إعطاء انطباع مضلل بأن الجسم كتلة مصمتة سميكة.'
  },
  {
    id: 'dq-17',
    division: 'isometric_sections',
    module: 'sections_hatching',
    examSource: 'ميدتيرم هندسة شبرا - نوفمبر 2023',
    question: 'In an engineering assembly sectional view, standard solid components such as bolts, nuts, solid shafts, and pins cut along their longitudinal axis are:',
    questionAr: 'في القطاع الهندسي التجميعي، فإن الأجزاء المصمتة القياسية مثل المسامير والصواميل والأعمدة المصمتة والخوابير إذا مر القطع بمحورها الطولي، فإنها:',
    options: [
      'Hatched at an angle of 60°',
      'Drawn in full unsectioned view without any hatching',
      'Omitted entirely from the drawing',
      'Represented by phantom lines'
    ],
    correctAnswer: 1,
    rationaleEn: 'Standard mechanical parts (bolts, nuts, pins, keys, solid shafts, ball bearings) cut along their longitudinal axis are always shown in full unsectioned exterior elevation without hatching, as slicing them longitudinally provides no useful internal geometry.',
    rationaleAr: 'الأجزاء الميكانيكية القياسية المصمتة (المسامير، الصواميل، الأعمدة المصمتة، التيل، الخوابير) لا تُهشر إذا قُطعت طولياً، بل تُرسم كأجسام سليمة كاملة بدون تهشير لأنها لا تحوي تجاويف داخلية.'
  },
  {
    id: 'dq-18',
    division: 'isometric_sections',
    module: 'sectioned_missing_view',
    examSource: 'فاينال هندسة شبرا - يناير 2024',
    question: 'When a Full Sectional View (e.g. Sectional Elevation) is executed, what is the standard drafting rule regarding hidden dashed lines?',
    questionAr: 'عند تنفيذ مسقط بقطاع كامل (مثل Sectional Elevation)، ما هي القاعدة القياسية المعتمدة بخصوص الخطوط المخفية المتقطعة (Hidden Lines)؟',
    options: [
      'All hidden lines must be retained and hatched over',
      'Hidden dashed lines lying behind the cutting plane are generally omitted entirely from the sectional view',
      'Hidden lines are converted into chain-dotted lines',
      'Hidden lines are replaced by leader lines'
    ],
    correctAnswer: 1,
    rationaleEn: 'In a full sectional view, the primary goal is clarity of internal cut geometry. Therefore, hidden dashed lines for features lying behind the cutting plane are omitted entirely according to ISO rules, unless absolutely indispensable for dimensioning or clarity.',
    rationaleAr: 'في المساقط المقطوعة بالكامل، تُحذف وتُلغى كافة الخطوط المخفية المتبقية خلف مستوى القطع لتفادي تشويش خطوط التهشير، ولا تُرسم إلا إذا كان هناك تفصيلة ضرورية جداً لوضع الأبعاد.'
  },
  {
    id: 'dq-19',
    division: 'isometric_sections',
    module: 'dimensioning_rules',
    examSource: 'فاينال هندسة شبرا - يناير 2023',
    question: 'In the Aligned Dimensioning System (the standard system used in Egyptian Engineering Faculties), numerical dimension values are placed:',
    questionAr: 'في نظام وضع الأبعاد المحاذي (Aligned System المعتمد في كليات الهندسة المصرية)، فإن الأرقام والبيانات توضع:',
    options: [
      'In the middle of broken dimension lines, readable only horizontally',
      'Above and parallel to the dimension lines, readable from the bottom or right-hand edge of the sheet',
      'Below the dimension line with a leader note',
      'At the extreme right corner of the drawing sheet border'
    ],
    correctAnswer: 1,
    rationaleEn: 'Under the ISO Aligned Dimensioning System, dimension numbers are oriented parallel to the dimension lines and placed slightly above them (with approximately 1 mm clearance), positioned so they can be read upright from the bottom of the sheet (for horizontal dimensions) or from the right-hand edge (for vertical dimensions).',
    rationaleAr: 'في النظام المحاذي (Aligned System)، يُكتب رقم البعد موازياً لخط البعد وفوقه بمقدار 1 مم تقريباً، وتكون الأبعاد قابلة للقراءة من أسفل اللوحة (للأبعاد الأفقية) أو من جهة اليمين (للأبعاد الرأسية).'
  },
  {
    id: 'dq-20',
    division: 'isometric_sections',
    module: 'dimensioning_rules',
    examSource: 'ميدتيرم هندسة شبرا - نوفمبر 2022',
    question: 'According to ISO dimensioning standards, which of the following is considered a SERIOUS PROHIBITED ERROR (Taboo)?',
    questionAr: 'وفقاً لمعايير وضع الأبعاد القياسية ISO، أي من الممارسات التالية يُعد خطأً هندسياً فادحاً محظوراً (Taboo)؟',
    options: [
      'Placing the smaller intermediate dimensions closer to the object and overall dimensions further outside',
      'Using the prefix ⌀ before the diameter of a drilled hole',
      'Attaching a dimension line directly to a hidden dashed line',
      'Leaving a 1 to 2 mm gap between the object outline and the extension line'
    ],
    correctAnswer: 2,
    rationaleEn: 'It is a fundamental taboo of engineering drawing to dimension directly to hidden dashed lines. Dimensions must always be attached to visible continuous outlines where features appear in their true descriptive profile. Dimensioning to hidden lines causes ambiguity in manufacturing and machining.',
    rationaleAr: 'من المحظورات الصارمة في الرسم الهندسي: وضع خط البعد على خط مخفي منقط (Hidden Line)؛ بل يجب دائماً وضع البعد على المسقط الذي يظهر فيه هذا الجزء كخط ظاهر صريح لتفادي اللبس أثناء التصنيع.'
  }
];
