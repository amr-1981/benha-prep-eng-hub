// Comprehensive Glossary, Laws, Formulas & Flashcards Bank for Engineering Mechanics 1 (Statics - MEC 001)
// Tailored Exclusively for Faculty of Engineering at Shoubra (FES) - Benha University (Term 1)
// Strictly Divided into Two Distinct Academic Branches:
// 1. Force Systems, Moments & Equilibrium Branch (force_equilibrium)
// 2. Structures, Trusses, Friction & Inertia Branch (structures_inertia)

export const STATICS_GLOSSARY_MODULES = [
  { id: 'all', label: 'جميع وحدات الاستاتيكا (10 وحدات)', icon: 'Sparkles', color: 'text-amber-400' },
  // Division 1: Force Systems & Equilibrium
  { id: 'vectors', label: '١. متجهات القوى وزوايا الاتجاه', icon: 'Compass', color: 'text-amber-400' },
  { id: 'moments', label: '٢. العزوم والازدواج وفارينون', icon: 'Activity', color: 'text-orange-400' },
  { id: 'equivalent_systems', label: '٣. اختزال النظم والبريمة Wrench', icon: 'Layers', color: 'text-yellow-400' },
  { id: 'particle_equilibrium', label: '٤. اتزان الجسيم ومخطط FBD', icon: 'Compass', color: 'text-amber-400' },
  { id: 'rigid_body_equilibrium', label: '٥. اتزان الجسم الجاسئ والركائز', icon: 'Activity', color: 'text-orange-400' },
  // Division 2: Structures, Friction & Inertia
  { id: 'trusses', label: '٦. الجمالونات والأعضاء الصفرية', icon: 'Layers', color: 'text-red-400' },
  { id: 'frames_machines', label: '٧. الإطارات والآلات والمفصلات', icon: 'Activity', color: 'text-orange-400' },
  { id: 'friction', label: '٨. الاحتكاك والانزلاق والانقلاب', icon: 'Activity', color: 'text-amber-400' },
  { id: 'centroids', label: '٩. مراكز الثقل ونظريتا بابوس', icon: 'Compass', color: 'text-yellow-400' },
  { id: 'moments_of_inertia', label: '١٠. عزم القصور ونظرية شتينر', icon: 'Layers', color: 'text-red-400' }
];

export const STATICS_GLOSSARY_TYPES = [
  { id: 'all', label: 'الكل (قوانين + مفاهيم + تعليلات هندسية)' },
  { id: 'definition', label: '📖 مفاهيم ومصطلحات استاتيكية (Statics Definitions)' },
  { id: 'law', label: '📐 قوانين ومعادلات رياضية (Formulas & Equations)' },
  { id: 'application', label: '⚙️ شروط وتطبيقات هندسية (Engineering Applications)' }
];

export const STATICS_GLOSSARY_ITEMS = [
  // =========================================================================
  // DIVISION 1: FORCE SYSTEMS, MOMENTS & EQUILIBRIUM (MODULES 1 - 5)
  // =========================================================================

  // --- MODULE 1: 3D VECTORS ---
  {
    id: 'stat-term-direction-angles',
    module: 'vectors',
    division: 'force_equilibrium',
    type: 'definition',
    termEn: 'Coordinate Direction Angles (alpha, beta, gamma)',
    definitionEn: 'The three spatial angles measured between the positive x, y, and z coordinate axes and the line of action of a Cartesian vector.',
    formula: '\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1, \\quad \\mathbf{u} = \\cos\\alpha\\,\\mathbf{i} + \\cos\\beta\\,\\mathbf{j} + \\cos\\gamma\\,\\mathbf{k}',
    unit: 'Degrees (deg) or Radians (rad)',
    example: 'A tension cable acting along angles alpha = 60° and beta = 45° must have gamma = 60° (acute) or 120° (obtuse).',
    termAr: 'زوايا الاتجاه الكارتيزية بالفراغ',
    definitionAr: 'الزوايا الثلاث الفراغية المحصورة بين الاتجاهات الموجبة لمحاور الإحداثيات (x, y, z) وخط عمل المتجه في الفراغ ثلاثي الأبعاد.',
    examTip: 'في الامتحان، إذا قال السؤال "The angle gamma is obtuse"، فهذا يعني أن gamma > 90° ويكون cos(gamma) سالباً حتماً.',
    keywords: ['coordinate direction angles', 'unit vector', 'cartesian components', 'direction cosines']
  },

  {
    id: 'stat-term-position-vector',
    module: 'vectors',
    division: 'force_equilibrium',
    type: 'law',
    termEn: 'Position Vector Along a Line of Action',
    definitionEn: 'The directed spatial line segment from a known origin or reference point A to destination point B used to formulate the force along a cable: F = F · (r_AB / |r_AB|).',
    formula: '\\vec{r}_{AB} = (x_B - x_A)\\mathbf{i} + (y_B - y_A)\\mathbf{j} + (z_B - z_A)\\mathbf{k}, \\quad \\vec{F} = F \\cdot \\mathbf{u}_{AB}',
    unit: 'Meters (m) for position vector, Newtons (N) for force',
    example: 'Cable AB tied from A(0, 0, 6) m to ground anchor B(3, -2, 0) m.',
    termAr: 'متجه الموضع على امتداد خط عمل القوة',
    definitionAr: 'المتجه الهندسي الواصل بين نقطة بداية ونقطة نهاية على طول خط عمل قوة الشد في الكابل، ويستخدم لتوليد متجه الوحدة الكارتيزي.',
    examTip: 'دائماً اطرح إحداثيات نقطة الوصول (Destination) ناقص نقطة الانطلاق (Origin). الخطأ في الترتيب يقلب جميع الإشارات.',
    keywords: ['position vector', 'cable tension', 'unit vector', 'line of action']
  },

  {
    id: 'stat-term-dot-product',
    module: 'vectors',
    division: 'force_equilibrium',
    type: 'law',
    termEn: 'Dot Product (Scalar Product) & Vector Projection',
    definitionEn: 'The algebraic multiplication of two spatial vectors yielding a scalar quantity proportional to the cosine of the included angle: A · B = |A||B| cos(theta).',
    formula: '\\vec{A} \\cdot \\vec{B} = A_x B_x + A_y B_y + A_z B_z, \\quad F_a = \\vec{F} \\cdot \\mathbf{u}_a',
    unit: 'Scalar value (N·m for Force · Displacement, or N for Force projection on unit vector)',
    example: 'Computing the projection of a cable tension along a structural boom axis.',
    termAr: 'الضرب القياسي وإسقاط القوى',
    definitionAr: 'حاصل الضرب الجبري لمركبات متجهين متعامدين أو مائلين، ويعطي كمية قياسية تستخدم لحساب الزاوية بين خطين أو إسقاط قوة على محور.',
    examTip: 'إذا كان الضرب القياسي A · B = 0، فإن المتجهين متعامدان تماماً (theta = 90°). استخدمه للتحقق من التعامد فوراً.',
    keywords: ['dot product', 'scalar product', 'projection', 'angle between vectors']
  },

  // --- MODULE 2: MOMENTS & COUPLES ---
  {
    id: 'stat-term-moment-point',
    module: 'moments',
    division: 'force_equilibrium',
    type: 'law',
    termEn: 'Moment of a Force About a Point (Vector Cross Product)',
    definitionEn: 'A measure of the rotational tendency imparted to a rigid body about a point, determined mathematically by the vector cross product r × F.',
    formula: '\\vec{M}_O = \\vec{r} \\times \\vec{F} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ r_x & r_y & r_z \\\\ F_x & F_y & F_z \\end{vmatrix}',
    unit: 'Newton-meter (N·m)',
    example: 'The turning moment produced at the elbow joint by a load held in the hand.',
    termAr: 'عزم القوة حول نقطة (الضرب الاتجاهي)',
    definitionAr: 'المقياس الاتجاهي لمقدرة القوة على إحداث دوران للجسم حول نقطة معينة، ويحسب بمحدد الضرب الاتجاهي لمتجه الموضع في متجه القوة.',
    examTip: 'متجه الموضع r يجب أن ينطلق دائماً من النقطة المراد حساب العزم حولها (O) نحو أي نقطة تقع على خط عمل القوة.',
    keywords: ['moment of a force', 'cross product', 'determinant', 'right hand rule']
  },

  {
    id: 'stat-term-varignon',
    module: 'moments',
    division: 'force_equilibrium',
    type: 'definition',
    termEn: 'Varignon\'s Theorem (Principle of Moments)',
    definitionEn: 'The theorem stating that the moment of a force about any point equals the sum of the moments of the components of the force about that same point.',
    formula: '\\vec{M}_O = \\vec{r} \\times (\\vec{F}_1 + \\vec{F}_2 + \\dots) = (\\vec{r} \\times \\vec{F}_1) + (\\vec{r} \\times \\vec{F}_2) + \\dots',
    unit: 'Newton-meter (N·m)',
    example: 'Resolving an inclined force into F_x and F_y to calculate 2D moments without measuring the perpendicular lever arm d.',
    termAr: 'نظرية فارينون (مبدأ العزوم)',
    definitionAr: 'النظرية التي تنص على أن عزم أي قوة حول نقطة يساوي المجموع الجبري لعزوم مركبات تلك القوة حول نفس النقطة.',
    examTip: 'أسرع طريقة لحساب عزم قوة مائلة في المستوى ثنائي الأبعاد هي تحليلها إلى F_x و F_y وضرب كل مركبة في ذراعها المتعامد.',
    keywords: ['varignon theorem', 'principle of moments', 'lever arm', 'components']
  },

  {
    id: 'stat-term-moment-axis',
    module: 'moments',
    division: 'force_equilibrium',
    type: 'law',
    termEn: 'Moment of a Force About a Specified Axis',
    definitionEn: 'The scalar projection of the moment vector M_O along the direction of a line or axis defined by unit vector u_a: M_a = u_a · (r × F).',
    formula: 'M_a = \\mathbf{u}_a \\cdot (\\vec{r} \\times \\vec{F}) = \\begin{vmatrix} u_{ax} & u_{ay} & u_{az} \\\\ r_x & r_y & r_z \\\\ F_x & F_y & F_z \\end{vmatrix}',
    unit: 'Newton-meter (N·m)',
    example: 'The twisting moment developed along the shaft of a pipe wrench.',
    termAr: 'عزم القوة حول محور معين في الفراغ',
    definitionAr: 'إسقاط متجه العزم على اتجاه محور محدد في الفراغ، ويحسب بالضرب الثلاثي القياسي بوضع مركبات متجه وحدة المحور في الصف الأول للمحدد.',
    examTip: 'عزم القوة حول محور يساوي صفراً تماماً إذا كانت القوة توازي المحور أو إذا كان خط عملها يقطع المحور.',
    keywords: ['moment about axis', 'triple scalar product', 'axis projection', 'pipe assembly']
  },

  {
    id: 'stat-term-couple-moment',
    module: 'moments',
    division: 'force_equilibrium',
    type: 'definition',
    termEn: 'Couple Moment (Free Vector Property)',
    definitionEn: 'Two parallel forces that have the same magnitude, opposite directions, and are separated by a perpendicular distance d, creating a purely rotational moment independent of any reference point.',
    formula: '\\vec{M}_c = \\vec{r} \\times \\vec{F}, \\quad M_c = F \\cdot d',
    unit: 'Newton-meter (N·m)',
    example: 'Turning a steering wheel with two hands applying equal and opposite forces.',
    termAr: 'عزم الازدواج (المتجه الحر)',
    definitionAr: 'نظام يتكون من قوتين متساويتين في المقدار ومتضادتين في الاتجاه وخطا عملهما متوازيان، ويحدث دوران خالص وقيمته مستقلة عن موضع نقطة العزم.',
    examTip: 'الازدواج يسمى Free Vector لأنه لا يرتبط بنقطة تأثير محددة؛ يمكنك نقله إلى أي مكان على الجسم الجاسئ دون تغيير تأثيره الخارجي.',
    keywords: ['couple moment', 'free vector', 'pure rotation', 'parallel forces']
  },

  // --- MODULE 3: EQUIVALENT SYSTEMS & WRENCH ---
  {
    id: 'stat-term-equivalent-system',
    module: 'equivalent_systems',
    division: 'force_equilibrium',
    type: 'application',
    termEn: 'Equivalent Force-Couple System',
    definitionEn: 'The simplification of a general force and couple system into a single resultant force R acting at a chosen point O, accompanied by a resultant couple moment M_RO.',
    formula: '\\vec{R} = \\sum \\vec{F}, \\quad \\vec{M}_{RO} = \\sum (\\vec{r}_i \\times \\vec{F}_i) + \\sum \\vec{M}_{c}',
    unit: 'Resultant Force in N, Resultant Couple in N·m',
    example: 'Replacing wind loads acting on a tall communications mast with an equivalent force and moment at the base foundation.',
    termAr: 'نظام القوة وعزم الازدواج المكافئ',
    definitionAr: 'اختزال مجموعة من القوى والعزوم الموزعة على الجسم إلى قوة محصلة واحدة تؤثر عند نقطة مرجعية مختارة، بالإضافة إلى عزم ازدواج مكافئ.',
    examTip: 'قيمة القوة المحصلة R لا تتغير باختيار النقطة، لكن عزم الازدواج M_RO يتغير باختلاف النقطة التي تحسب العزم حولها.',
    keywords: ['equivalent system', 'force-couple', 'system reduction', 'resultant']
  },

  {
    id: 'stat-term-wrench',
    module: 'equivalent_systems',
    division: 'force_equilibrium',
    type: 'definition',
    termEn: 'Wrench (Screwing / Central Axis System)',
    definitionEn: 'The ultimate spatial reduction of a 3D force-couple system where the resultant force R and resultant couple moment M are collinear and share a common central axis.',
    formula: '\\vec{M}_{||} = \\left(\\frac{\\vec{R} \\cdot \\vec{M}_{RO}}{|\\vec{R}|^2}\\right) \\vec{R}, \\quad p = \\frac{\\vec{R} \\cdot \\vec{M}_{RO}}{|\\vec{R}|^2}',
    unit: 'Pitch p in meters (m)',
    example: 'A screwdriver driving a screw forward while twisting it along the identical axis.',
    termAr: 'البريمة (المحور المركزي Wrench)',
    definitionAr: 'أقصى اختزال لنظام قوى فراغي ثلاثي الأبعاد، حيث تصبح القوة المحصلة وعزم الازدواج المحصل متوازيين ويعملان على نفس المحور تماماً كالبريمة.',
    examTip: 'الخطوة الأولى لحساب البريمة: احسب R و M_O، ثم احسب الخطوة (Pitch) بالقانون: p = (R · M_O) / |R|².',
    keywords: ['wrench', 'central axis', 'screwing motion', 'pitch', 'collinear']
  },

  // --- MODULE 4: PARTICLE EQUILIBRIUM ---
  {
    id: 'stat-term-fbd',
    module: 'particle_equilibrium',
    division: 'force_equilibrium',
    type: 'application',
    termEn: 'Free-Body Diagram (FBD)',
    definitionEn: 'An isolated sketch of a particle or rigid body showing all external active forces, reactive forces, and applied moments acting upon it, detached from its physical surroundings.',
    formula: '\\sum \\vec{F} = 0 \\implies \\sum F_x = 0, \\; \\sum F_y = 0, \\; \\sum F_z = 0',
    unit: 'Dimensionless schematic methodology',
    example: 'Drawing an isolated suspension ring with cable tension vectors pointing away and crate weight directed downward.',
    termAr: 'مخطط الجسم الحر (FBD)',
    definitionAr: 'رسم تخطيطي هندسي يمثل الجسم أو الجسيم معزولاً تماماً عن محيطه، موضحاً عليه جميع القوى المؤثرة وردود الأفعال والعزوم الخارجية كمتجهات موجهة.',
    examTip: 'في هندسة شبرا، رسم الـ FBD بدون أسهم واضحة أو نسيان قوة الوزن W ينقصك نصف درجة المسألة فوراً.',
    keywords: ['free-body diagram', 'fbd', 'isolation', 'particle equilibrium', 'active forces']
  },

  {
    id: 'stat-term-spring-law',
    module: 'particle_equilibrium',
    division: 'force_equilibrium',
    type: 'law',
    termEn: 'Linear Elastic Spring (Hooke\'s Law in Statics)',
    definitionEn: 'The restoring force generated by a linearly stretched or compressed elastic coil spring directly proportional to its displacement from its natural unstretched length.',
    formula: 'F_s = k \\cdot s = k (l - l_0)',
    unit: 'Spring stiffness k in N/m, displacement s in m',
    example: 'A suspension spring of stiffness k = 500 N/m stretched from 0.4 m to 0.6 m exerts a force of 100 N.',
    termAr: 'قوة الزنبرك المرن الخطي (قانون هوك)',
    definitionAr: 'القوة المتولدة في الزنبرك نتيجة استطالته أو انضغاطه، وتتناسب طردياً مع مقدار الاستطالة s عن طوله الطبيعي غير المشدود l_0.',
    examTip: 'الاستطالة s = الطول المشدود النهائي (l) ناقص الطول الأصلي غير المشدود (l_0). احسب l دائماً من هندسة الشكل بفيثاغورس.',
    keywords: ['spring', 'hooke law', 'stiffness', 'unstretched length', 'elongation']
  },

  // --- MODULE 5: RIGID BODY EQUILIBRIUM ---
  {
    id: 'stat-term-two-force-member',
    module: 'rigid_body_equilibrium',
    division: 'force_equilibrium',
    type: 'definition',
    termEn: 'Two-Force Member Principle',
    definitionEn: 'A structural member subjected to no external forces or moments at any intermediate points, having forces applied at only two pin-connected ends; the forces must be equal in magnitude, opposite in direction, and collinear.',
    formula: '\\vec{F}_A + \\vec{F}_B = 0 \\implies |\\vec{F}_A| = |\\vec{F}_B| = F, \\quad \\text{aligned along line } AB',
    unit: 'Newtons (N)',
    example: 'A hydraulic actuator cylinder or a pin-connected link in an excavator arm.',
    termAr: 'مبدأ العضو ثنائي القوى (Two-Force Member)',
    definitionAr: 'عضو إنشائي مثبت من طرفيه بمفصلات ولا تؤثر عليه أي قوى أو عزوم في وسطه؛ يجب حتماً أن تكون القوتان عند طرفيه متساويتين ومتضادتين وعلى نفس خط العمل.',
    examTip: 'اكتشاف الـ Two-force member يختصر 3 مجاهيل إلى مجهول واحد فقط (قيمة القوة F باتجاه يوازي محور القضيب AB).',
    keywords: ['two-force member', 'pin-connected link', 'collinear', 'axial force']
  },

  {
    id: 'stat-term-support-reactions',
    module: 'rigid_body_equilibrium',
    division: 'force_equilibrium',
    type: 'application',
    termEn: 'Support Reactions (Roller, Pin, Fixed Support)',
    definitionEn: 'The constraining forces and moments exerted by structural supports preventing translation and rotation: Roller (1 force normal to surface), Pin (2 force components), Fixed (2 forces + 1 resisting moment).',
    formula: '\\text{Roller: } N_y, \\quad \\text{Pin: } A_x, A_y, \\quad \\text{Fixed: } A_x, A_y, M_A',
    unit: 'Forces in N, Moments in N·m',
    example: 'A cantilever bridge girder fixed into a massive concrete abutment.',
    termAr: 'ردود أفعال الركائز الهندسية (دحرجة، مفصلة، تثبيت كامل)',
    definitionAr: 'القوى والعزوم المقاومة التي تبذلها الركائز لمنع الحركة الانتقالية أو الدورانية للجسم: الركيزة المتدحرجة تمنع حركة واحدة، المفصلة تمنع حركتين، والتثبيت يمنع كل حركة ودوران.',
    examTip: 'المفصلة الملساء (Pin) تسمح بالدوران، لذلك لا تضع عندها عزم رد فعل أبداً! العزم المقاوم M يوضع فقط عند الركيزة الثابتة (Fixed).',
    keywords: ['support reactions', 'roller', 'pin', 'fixed support', 'constraints']
  },

  // =========================================================================
  // DIVISION 2: STRUCTURES, FRICTION & INERTIA (MODULES 6 - 10)
  // =========================================================================

  // --- MODULE 6: TRUSSES ---
  {
    id: 'stat-term-truss-determinacy',
    module: 'trusses',
    division: 'structures_inertia',
    type: 'law',
    termEn: 'Static Determinacy Criterion for Plane Trusses (b + r = 2j)',
    definitionEn: 'The mathematical condition for a simple pin-connected plane truss to be statically determinate: the total number of members (b) plus support reaction components (r) must equal twice the number of joints (2j).',
    formula: 'b + r = 2j \\quad (\\text{Determinate if stable})',
    unit: 'Dimensionless integer count',
    example: 'A 7-member bridge truss with 5 pin joints and 3 support reactions: 7 + 3 = 2(5) = 10 (Determinate).',
    termAr: 'شرط التحديد الاستاتيكي للجمالونات المستوية',
    definitionAr: 'العلاقة الحسابية التي تحدد قابلية حل الجمالون بمعادلات الاتزان فقط: عدد القضبان (b) زائد عدد ردود الأفعال (r) يجب أن يساوي ضعف عدد العقد (2j).',
    examTip: 'إذا كان b + r < 2j فالجمالون غير مستقر وينهار (Unstable). إذا كان b + r > 2j فالجمالون غير محدد استاتيكياً (Indeterminate).',
    keywords: ['truss determinacy', 'plane trusses', 'joints', 'bars', 'stability']
  },

  {
    id: 'stat-term-zero-force-members',
    module: 'trusses',
    division: 'structures_inertia',
    type: 'application',
    termEn: 'Zero-Force Members Inspection Rules',
    definitionEn: 'Engineering inspection criteria used to identify truss members that carry zero force under a specific loading condition without writing equilibrium equations.',
    formula: '\\text{Rule 1: } 2 \\text{ non-collinear bars at unloaded joint} \\implies F_1 = F_2 = 0 \\\\ \\text{Rule 2: } 2 \\text{ collinear } + 1 \\text{ non-collinear bar at unloaded joint} \\implies F_3 = 0',
    unit: 'Newtons (F = 0)',
    example: 'Top chord knee joints in a roof truss with no applied external joint loads.',
    termAr: 'قواعد اكتشاف الأعضاء الصفرية في الجمالونات',
    definitionAr: 'قاعدتان هندسيتان تمكنان المهندس من تحديد القضبان التي لا تحمل أي قوة (قوتها صفر) بمجرد النظر لتسهيل وتجريد شبكة الجمالون قبل الحسابات.',
    examTip: 'شطب الأعضاء الصفرية هو أول خطوة إلزامية في حل أي مسألة جمالونات لتوفير وقت الامتحان وتجنب المعادلات المعقدة.',
    keywords: ['zero force members', 'truss inspection', 'collinear', 'unloaded joint']
  },

  {
    id: 'stat-term-method-of-sections',
    module: 'trusses',
    division: 'structures_inertia',
    type: 'law',
    termEn: 'Method of Sections for Trusses',
    definitionEn: 'An analytical method for directly calculating internal forces in specific target members of a truss by passing an imaginary cutting plane through no more than three members and applying rigid body equilibrium.',
    formula: '\\sum F_x = 0, \\quad \\sum F_y = 0, \\quad \\sum M_O = 0',
    unit: 'Newtons (Tension or Compression)',
    example: 'Cutting across the center span of a Warren truss to find the chord tension force.',
    termAr: 'طريقة القطاعات لتحليل الجمالونات (Method of Sections)',
    definitionAr: 'طريقة إنشائية لحساب القوى في قضبان داخلية محددة مباشرة بقطع الجمالون إلى نصفين عبر قطع لا يزيد عن 3 قضبان مجهولة، ثم تطبيق معادلات الاتزان.',
    examTip: 'خذ العزم حول نقطة تقاطع قضيبين مجهولين لتستخرج القوة في القضيب الثالث المجهول بمعادلة عزم واحدة فقط!',
    keywords: ['method of sections', 'cutting plane', 'internal forces', 'tension', 'compression']
  },

  // --- MODULE 7: FRAMES & MACHINES ---
  {
    id: 'stat-term-multi-force-member',
    module: 'frames_machines',
    division: 'structures_inertia',
    type: 'definition',
    termEn: 'Multi-Force Member in Engineering Frames',
    definitionEn: 'A structural element subjected to forces applied at three or more points along its length, or subjected to forces and applied moments, causing internal bending moments and shear stresses.',
    formula: '\\sum \\vec{F} = 0, \\quad \\sum \\vec{M}_A = 0 \\quad (\\text{Applied to each member separately})',
    unit: 'Dimensionless classification',
    example: 'The main boom of a construction crane receiving loads at the hinge, hydraulic piston, and tip cable.',
    termAr: 'العضو متعدد القوى في الإطارات الهندسية',
    definitionAr: 'عضو إنشائي تؤثر عليه قوى عند ثلاثة مواضع أو أكثر على امتداده (أو قوى وعزوم)، مما يولد داخله عزوم انحناء وقوى قص ويفرقه عن قضبان الجمالونات.',
    examTip: 'وجود عضو متعدد القوى (Multi-force member) هو ما يميز الإطار (Frame) عن الجمالون (Truss)؛ ولذلك يجب فك الإطار ودراسة اتزان كل عضو بمفرده.',
    keywords: ['multi-force member', 'frames', 'machines', 'pin connections', 'internal forces']
  },

  // --- MODULE 8: DRY FRICTION ---
  {
    id: 'stat-term-coulomb-friction',
    module: 'friction',
    division: 'structures_inertia',
    type: 'law',
    termEn: 'Coulomb\'s Law of Dry Friction & Impending Motion',
    definitionEn: 'The constitutive law governing tangential contact resistance between dry surfaces: the maximum static friction force equals the coefficient of static friction multiplied by the normal contact force: F_max = mu_s · N.',
    formula: 'F_s \\le \\mu_s N, \\quad F_{\\text{max}} = \\mu_s N \\text{ (Impending Motion)}, \\quad F_k = \\mu_k N \\text{ (Sliding)}',
    unit: 'Newtons (N), mu is dimensionless',
    example: 'A shipping container resting on a loading ramp about to slide down when tilted to 22°.',
    termAr: 'قانون كولوم للاحتكاك الجاف وحالة وشك الحركة',
    definitionAr: 'القانون الفيزيائي الذي يربط قوة الاحتكاك المماسي برد الفعل العمودي، حيث تصل قوة الاحتكاك السكوني لأقصى قيمة ممكنة F_max = μ_s N عند وشك الانزلاق.',
    examTip: 'قوة الاحتكاك الساكن الفعلي F تحسب من معادلات الاتزان أولاً (Σ F_x = 0). إذا كانت F < μ_s N فالجسم ساكن، وإذا ساوت μ_s N فهو على وشك الحركة.',
    keywords: ['coulomb friction', 'dry friction', 'impending motion', 'static friction coefficient']
  },

  {
    id: 'stat-term-tipping-slipping',
    module: 'friction',
    division: 'structures_inertia',
    type: 'application',
    termEn: 'Slipping vs Tipping (Overturning) Criterion',
    definitionEn: 'The critical analysis comparing the horizontal force required to cause sliding (P_slip = mu_s · W) against the force causing the body to overturn about its pivot edge (P_tip = W · b / 2h).',
    formula: 'P_{\\text{slip}} = \\mu_s W, \\quad P_{\\text{tip}} = W \\left(\\frac{b}{2 h}\\right), \\quad x = \\frac{P \\cdot h}{W} \\le \\frac{b}{2}',
    unit: 'Newtons (N) for critical loads, meters (m) for reaction offset x',
    example: 'Determining whether a tall laboratory bookcase will slide across the floor or topple over when pushed near its top.',
    termAr: 'معيار الانزلاق مقابل الانقلاب (Slipping vs Tipping)',
    definitionAr: 'التحليل الاستاتيكي الهندسي لتحديد السلوك الحرج للجسم عند دفعه بقوة أفقية: هل ينزلق أولاً على السطح أم ينقلب حول حافته السفلية، باختيار القوة الأقل.',
    examTip: 'عند وشك الانقلاب (Impending Tipping)، يهاجر رد الفعل العمودي N بالكامل إلى حافة الانقلاب القصوى (x = b/2).',
    keywords: ['tipping', 'slipping', 'overturning', 'impending motion', 'normal reaction position']
  },

  {
    id: 'stat-term-belt-friction',
    module: 'friction',
    division: 'structures_inertia',
    type: 'law',
    termEn: 'Belt Friction Equation (Capstan Formula)',
    definitionEn: 'The exponential relationship governing the tension difference between the tight side T2 and slack side T1 of a flexible rope or belt wrapped around a rough curved post: T2 = T1 · e^(mu · beta).',
    formula: 'T_2 = T_1 \\, e^{\\mu \\beta} \\quad (T_2 > T_1)',
    unit: 'Tensions in Newtons (N), contact angle beta in RADIANS (rad)',
    example: 'A single deckhand holding a massive cruise ship moored to a pier bollard with two turns of hawser rope.',
    termAr: 'معادلة احتكاك السيور والأحبال (قانون كابستان)',
    definitionAr: 'العلاقة الأسية التي تصف تضاعف قوة الشد في حبل ملفوف بزاوية تلامس β حول أسطوانة خشنة، حيث تزداد قدرة التثبيت بشكل أسي هائل مع كل لفة.',
    examTip: 'أكبر فخ في هذا القانون: زاوية الالتفاف β يجب أن تكون بالراديان (Radians) حصراً! لفة كاملة = 2π راديان، ونصف لفة = π راديان.',
    keywords: ['belt friction', 'capstan formula', 'rope tension', 'contact angle', 'exponential growth']
  },

  // --- MODULE 9: CENTROIDS & PAPPUS ---
  {
    id: 'stat-term-centroid',
    module: 'centroids',
    division: 'structures_inertia',
    type: 'definition',
    termEn: 'Centroid of an Area (Center of Mass & Gravity)',
    definitionEn: 'The geometric point defining the average position of all points in an area, corresponding to the point where the first moment of area about any axis equals zero.',
    formula: '\\bar{x} = \\frac{\\sum \\tilde{x}_i A_i}{\\sum A_i}, \\quad \\bar{y} = \\frac{\\sum \\tilde{y}_i A_i}{\\sum A_i}',
    unit: 'Meters (m) or Millimeters (mm)',
    example: 'Finding the neutral horizontal axis y_bar of an asymmetric concrete T-beam cross-section.',
    termAr: 'المركز الهندسي للمساحة ومركز الثقل (Centroid)',
    definitionAr: 'النقطة الهندسية التي تمثل الموقع المتوسط لجميع نقاط المساحة، وتتطابق مع مركز ثقل الصفيحة إذا كانت متجانسة الكثافة والسمك.',
    examTip: 'في طريقة الجدول، تعامل مع أي تجويف أو ثقب (Hole) كمساحة سالبة (-A)، مما يطرح عزم المساحة تلقائياً في البسط والمقام.',
    keywords: ['centroid', 'center of gravity', 'first moment of area', 'composite areas']
  },

  {
    id: 'stat-term-pappus-theorems',
    module: 'centroids',
    division: 'structures_inertia',
    type: 'law',
    termEn: 'Theorems of Pappus-Guldinus (Surfaces & Volumes of Revolution)',
    definitionEn: 'Two classical geometric theorems stating that the surface area generated by rotating a plane curve about an axis equals 2pi · y_bar · L, and the generated volume equals 2pi · y_bar · A.',
    formula: '\\text{Surface Area: } A = 2\\pi \\bar{y} L, \\quad \\text{Volume: } V = 2\\pi \\bar{y} A',
    unit: 'Area in m^2, Volume in m^3',
    example: 'Calculating the volume of a toroidal pressure tank formed by revolving a circle of radius r at radius R: V = 2pi^2 R r^2.',
    termAr: 'نظريتا بابوس-جولدين للأجسام الدورانية',
    definitionAr: 'نظريتان هندسيتان لحساب المساحة السطحية وحجم أي جسم ناتج من دوران منحنى أو مساحة مستوية حول محور خارجي بضرب محيط مسار المركز في طول الخط أو المساحة.',
    examTip: 'الشرط الحاسم لتطبيق نظريتي بابوس: خط الدوران أو المساحة الدائرة يجب ألا تقطع محور الدوران الذي تدور حوله.',
    keywords: ['pappus guldinus', 'surface of revolution', 'volume of revolution', 'torus']
  },

  // --- MODULE 10: MOMENTS OF INERTIA ---
  {
    id: 'stat-term-steiner-parallel-axis',
    module: 'moments_of_inertia',
    division: 'structures_inertia',
    type: 'law',
    termEn: 'Steiner\'s Parallel-Axis Theorem for Area Moments of Inertia',
    definitionEn: 'The transfer theorem establishing that the moment of inertia about any axis parallel to a centroidal axis equals the centroidal moment of inertia plus the product of the area and the squared transfer distance.',
    formula: 'I_x = \\bar{I}_{x\'} + A \\, d_y^2, \\quad I_y = \\bar{I}_{y\'} + A \\, d_x^2',
    unit: 'Meters to the fourth power (m^4) or mm^4',
    example: 'Transferring the moment of inertia of the top flange of an I-beam from its local centroid to the overall neutral axis.',
    termAr: 'نظرية المحاور المتوازية لشتينر (Steiner Theorem)',
    definitionAr: 'النظرية الرياضية التي تنص على أن عزم القصور الذاتي حول أي محور يوازي محور مركز الثقل يساوي عزم القصور حول مركز الثقل مضافاً إليه حاصل ضرب المساحة في مربع البعد العمودي.',
    examTip: 'تحذير امتحاني خطير: I_bar في القانون يجب أن تكون حول محور يمر بمركز ثقل الجزء نفسه (مثل bh³/12 للمستطيل). لا تنقل من محور عشوائي!',
    keywords: ['parallel axis theorem', 'steiner theorem', 'moment of inertia', 'second moment of area']
  },

  {
    id: 'stat-term-radius-of-gyration',
    module: 'moments_of_inertia',
    division: 'structures_inertia',
    type: 'definition',
    termEn: 'Radius of Gyration (k_x, k_y)',
    definitionEn: 'The imaginary distance from an axis at which the entire area of a cross-section could be concentrated as a thin strip while maintaining an identical second moment of area.',
    formula: 'k_x = \\sqrt{\\frac{I_x}{A}}, \\quad k_y = \\sqrt{\\frac{I_y}{A}}, \\quad I_x = A \\, k_x^2',
    unit: 'Meters (m) or Millimeters (mm)',
    example: 'Determining the slenderness ratio of a steel compression column to assess its susceptibility to structural buckling.',
    termAr: 'نصف قطر القصور الذاتي (Radius of Gyration)',
    definitionAr: 'المسافة الافتراضية من محور الدوران التي لو تركزت عندها كامل مساحة المقطع لأعطت نفس عزم القصور الذاتي تماماً، وهو المعيار الأساسي لمقاومة الانبعاج (Buckling).',
    examTip: 'في تصميم الأعمدة الفولاذية، الاتجاه الذي يمتلك نصف قطر قصور ذاتي أصغر (k_min) هو الاتجاه الأضعف المعرض للانبعاج أولاً.',
    keywords: ['radius of gyration', 'slenderness ratio', 'buckling', 'area inertia']
  }
];
