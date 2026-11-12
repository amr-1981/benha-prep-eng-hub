// Official Technical English & Engineering Report Writing Curriculum (HUM 001)
// Faculty of Engineering at Shoubra (FES) - Benha University (Preparatory Year - Term 1)
// Strictly Divided into Two Distinct Academic Branches:
// 1. Technical Vocabulary & Grammar Branch (vocab_grammar)
// 2. Technical Writing & Engineering Reports Branch (reports_writing)

export const ENGLISH_FACULTY_INFO = {
  university: 'جامعة بنها',
  faculty: 'كلية الهندسة بشبرا',
  department: 'قسم العلوم الأساسية والإنسانية (HUM)',
  courseNameAr: 'اللغة الإنجليزية الفنية وإعداد التقارير الهندسية',
  courseNameEn: 'Technical English & Engineering Report Writing',
  courseCode: 'HUM 001',
  term: 'الفصل الدراسي الأول (الفرقة الإعدادية)',
  creditHours: 2,
  totalMarks: 100,
  finalExamMarks: 60,
  midtermAndCoursework: 40
};

export const ENGLISH_DIVISIONS = [
  {
    id: "all",
    titleAr: "المنهج الشامل للغة الإنجليزية الفنية",
    titleEn: "Complete Technical English Syllabus",
    shortTitleAr: "الكل (المصطلحات + التقارير معاً)",
    shortTitleEn: "Unified English",
    badge: "المنهج كاملاً (100 درجة)",
    icon: "Sparkles",
    color: "from-emerald-600 to-teal-600",
    borderColor: "border-emerald-500/40",
    description: "تصفح كافة موضوعات وقواعد وبادئات وقوالب تقارير وإيميلات فرعي المقرر معاً."
  },
  {
    id: "vocab_grammar",
    titleAr: "الفرع الأول: المصطلحات الفنية وقواعد الكتابة الهندسية",
    titleEn: "Branch 1: Technical Vocabulary & Engineering Grammar",
    shortTitleAr: "المصطلحات والقواعد",
    shortTitleEn: "Vocab & Grammar",
    badge: "المصطلحات والقواعد (Vocab & Grammar)",
    icon: "BookOpen",
    color: "from-emerald-600 to-teal-600",
    borderColor: "border-emerald-500/40",
    modulesCount: 5,
    topics: [
      "البادئات واللواحق اللاتينية واليونانية (Greek & Latin Affixes in Engineering)",
      "اشتقاق المصطلحات والتصنيف الفني للألفاظ (Technical Word Formation)",
      "المبني للمجهول في التقارير الهندسية والتجارب (Passive Voice in Lab Procedures)",
      "أدوات الربط والسببية والشروط الهندسية (Cause, Effect, Condition & Contrast)",
      "الأبعاد والمقاييس والخواص الهندسية للمواد (Dimensions, Measurements & Properties)"
    ],
    description: "يشمل: تفكيك المصطلحات الهندسية إلى بادئات وجذور، المبني للمجهول لخطوات المعمل، الروابط المنطقية Due to و Therefore، وصيغ الأبعاد والتفاوتات."
  },
  {
    id: "reports_writing",
    titleAr: "الفرع الثاني: الكتابة الفنية وإعداد التقارير والمراسلات",
    titleEn: "Branch 2: Technical Writing & Engineering Reports",
    shortTitleAr: "الكتابة والتقارير",
    shortTitleEn: "Reports & Writing",
    badge: "الكتابة والتقارير (Reports & Writing)",
    icon: "FileText",
    color: "from-teal-600 to-cyan-600",
    borderColor: "border-teal-500/40",
    modulesCount: 5,
    topics: [
      "هيكل التقرير الهندسي الشامل والملخص التنفيذي (Report Architecture & Executive Summary)",
      "الوصف الفني للأجهزة والمعدات الهندسية (Mechanism Description Framework)",
      "وصف العمليات والتجارب وخطوات التشغيل (Process Description & Flowcharts)",
      "المراسلات المهنية والإيميلات والمذكرات الفنية (Professional Emails & Memos)",
      "قواعد الإيجاز والدقة وتجنب الأخطاء الشائعة (Technical Editing & Conciseness)"
    ],
    description: "يشمل: الأقسام العشرة للتقرير الأكاديمي، كتابة Abstract مستقل في 4 جمل، النموذج الرباعي لوصف الأجهزة، صياغة الإيميلات الرسمية، وحذف الحشو."
  }
];

export const ENGLISH_MODULES = [
  // =======================================================================
  // BRANCH 1: TECHNICAL VOCABULARY & GRAMMAR (MODULES 1-5)
  // =======================================================================
  {
    id: 'eng-mod-affixes',
    number: 1,
    division: 'vocab_grammar',
    divisionBadge: 'المصطلحات والقواعد (Vocab & Grammar)',
    titleAr: 'البادئات واللواحق اللاتينية واليونانية في الهندسة',
    titleEn: 'Greek & Latin Prefixes and Suffixes in Engineering',
    icon: 'Scissors',
    color: 'from-emerald-600 to-teal-600',
    badge: 'الوحدة 01 • جذور واشتقاق المصطلحات',
    summary: 'تحليل البادئات واللواحق والجذور اليونانية واللاتينية الشائعة في المصطلحات الهندسية وتفكيك الكلمات المركبة في ورقة إجابة الامتحان.',
    learningObjectives: [
      'Deconstruct complex technical words into Prefix + Root + Suffix components.',
      'Differentiate metric scale prefixes: nano- (10^-9), micro- (10^-6), mega- (10^6), giga- (10^9).',
      'Distinguish prefix functions: Thermo- (heat), Hydro- (water), Photo- (light), Sub- (below).',
      'Transform verbs into material property adjectives using suffixes -able, -ible, -ile.'
    ],
    keyFormulas: [
      {
        title: 'Word Breakdown Architecture:',
        formula: '\\text{Technical Word} = \\text{Prefix (Scope/Direction)} + \\text{Root (Core Concept)} + \\text{Suffix (Part of Speech)}',
        notes: 'Example: Thermo (Heat) + meter (Instrument) = Thermometer (Noun).'
      },
      {
        title: 'Material Property Adjective Conversion:',
        formula: '\\text{Verb (Process)} + \\text{-able / -ible} \\implies \\text{Adjective (Capacity / Passive Tolerance)}',
        notes: 'Weld + -able = Weldable (Capable of being welded without brittle cracking).'
      }
    ],
    examHotspots: [
      'Deconstruct the word "Thermodynamics" into Prefix, Root, Suffix and state the meaning of each part.',
      'Explain the difference between Hydrometer (liquid density) and Hygrometer (air humidity).',
      'Form engineering adjectives from: combust, conduct, compress, magnetize.'
    ],
    bilingualInsight: {
      titleEn: "Affixes: Engineering Etymology Decoded",
      titleAr: "💡 الفهم والربط الهندسي بالعربي: البادئات واللواحق اللاتينية",
      points: [
        "لماذا يعتمد المعجم الهندسي على اللاتينية واليونانية؟ لأن المصطلحات العلمية توضع بلغات قديمة ثابتة لا تتغير معانيها بمرور الزمن، مما يوحد لغة التخاطب بين مهندسي العالم في المواصفات القياسية.",
        "قاعدة سريعة للامتحان: اللاحقة (Suffix) تحدد دائماً نوع الكلمة من حيث الإعراب: إذا انتهت بـ -ics أو -tion فهي اسم (Noun)، وإذا انتهت بـ -able أو -ic فهي صفة (Adjective).",
        "الفرق الدقيق بين Hydro و Hygro: كلمة Hydro تدل على الماء السائل مثل هيدروليكا (Hydraulics)، أما Hygro فتدل على رطوبة الغازات مثل مقياس رطوبة الهواء (Hygrometer)."
      ],
      examTip: "سؤال فاينال شبرا الدائم: يعطيك كلمة مركبة ويطلب جدولاً من 3 أعمدة (Prefix - Root - Suffix) مع المعنى الإنجليزي لكل مقطع."
    }
  },

  {
    id: 'eng-mod-word-formation',
    number: 2,
    division: 'vocab_grammar',
    divisionBadge: 'المصطلحات والقواعد (Vocab & Grammar)',
    titleAr: 'اشتقاق المصطلحات والتصنيف الفني للألفاظ',
    titleEn: 'Technical Word Formation & Engineering Taxonomy',
    icon: 'Layers',
    color: 'from-teal-600 to-emerald-600',
    badge: 'الوحدة 02 • دقة التعبير والمصطلحات',
    summary: 'التمييز بين الأزواج اللغوية المتشابهة والمربكة في الهندسة، تركيب الأسماء الفنية، والاختصارات الهندسية القياسية (Acronyms & Initialisms).',
    learningObjectives: [
      'Distinguish mathematically and linguistically between Accuracy (correctness) and Precision (repeatability).',
      'Differentiate physical concepts: Stress (force/area in Pa) vs Strain (dimensionless ratio).',
      'Form compound engineering nouns and noun-adjunct modifiers (e.g., heat exchanger, reinforced concrete).',
      'Classify engineering acronyms (pronounced as words: RADAR, LASER) vs initialisms (letter-by-letter: CAD, RPM, AC/DC).'
    ],
    keyFormulas: [
      {
        title: 'Accuracy vs Precision Distinction Formula:',
        formula: '\\text{Accuracy} = |\\bar{x} - x_{\\text{true}}| \\;\\longrightarrow\\; \\text{Low Error}, \\qquad \\text{Precision} = \\text{Standard Deviation } (\\sigma) \\;\\longrightarrow\\; \\text{Repeatability}',
        notes: 'A calibrated gauge can be highly precise without being accurate if systematic zero error exists.'
      },
      {
        title: 'Stress vs Strain Mechanics Form:',
        formula: '\\sigma = \\frac{F}{A} \\quad [\\text{Pa} = \\text{N/m}^2], \\qquad \\varepsilon = \\frac{\\Delta L}{L_0} \\quad [\\text{Dimensionless / Unitless}]',
        notes: 'Always state in exams that strain carries no units of measurement.'
      }
    ],
    examHotspots: [
      'Compare between Accuracy and Precision with engineering examples and target bullseye diagrams.',
      'Define Stress and Strain and state their standard SI units of measurement.',
      'Differentiate between Acronyms and Initialisms in technical literature.'
    ],
    bilingualInsight: {
      titleEn: "Confusing Engineering Terms: Conceptual Clarity",
      titleAr: "💡 الفهم والربط الهندسي بالعربي: المصطلحات الهندسية الدقيقة",
      points: [
        "الفرق العملي بين Accuracy و Precision: تخيل ميزاناً يزن قالباً كتلته الحقيقية 10 كجم. إذا قرأ الميزان (12.01, 12.00, 12.01, 12.00 كجم) فهو ميزان محكم جداً (Highly Precise) لأن قراءاته متطابقة، لكنه غير دقيق (Inaccurate) لأن القراءة تبعد عن الحقيقة بـ 2 كجم!",
        "لماذا الانفعال Strain بدون وحدة؟ لأنه ناتج قسمة مليمتر على مليمتر، وبالتالي تختصر الوحدات الفيزيائية ويبقى رقماً مجرداً يعبر عن نسبة التشوه المئوية.",
        "الأسماء المركبة: في مصطلح 'Control Valve'، كلمة Control اسم يعمل كصفة لتحديد نوع الصمام، والكلمة الأساسية هي الأخيرة (Valve)."
      ],
      examTip: "سؤال متكرر: اذكر وحدة قياس كل من Stress و Strain؟ الإجابة: Stress بوحدة Pascal أو N/m²، بينما Strain بدون وحدة (Dimensionless)."
    }
  },

  {
    id: 'eng-mod-passive-voice',
    number: 3,
    division: 'vocab_grammar',
    divisionBadge: 'المصطلحات والقواعد (Vocab & Grammar)',
    titleAr: 'المبني للمجهول في التقارير الهندسية والتجارب',
    titleEn: 'The Passive Voice in Technical Reports & Lab Procedures',
    icon: 'Repeat',
    color: 'from-blue-600 to-indigo-600',
    badge: 'الوحدة 03 • الأسلوب الأكاديمي الموضوعي',
    summary: 'احتراف صياغة خطوات التجارب المعملية والعمليات الصناعية بصيغة المبني للمجهول الموضوعي الخالي من ضمائر المتكلم (I, We) لضمان الحياد العلمي.',
    learningObjectives: [
      'Convert active experimental statements into objective past simple passive constructions.',
      'Apply present simple passive for describing continuous physical cycles and permanent machine operations.',
      'Utilize modal passive (must be, should be, can be) in safety specifications and maintenance standards.',
      'Eliminate personal agent phrases (by us, by me) to achieve academic rigor.'
    ],
    keyFormulas: [
      {
        title: 'Laboratory Procedure Passive Formula (Past Simple):',
        formula: '\\text{Specimen / Reagent (Subject)} + \\text{was / were} + \\text{Past Participle} + [\\text{Conditions / Method}]',
        notes: 'Active: "We heated the alloy to 800°C" -> Passive: "The alloy was heated to 800°C."'
      },
      {
        title: 'Safety Directives Modal Passive Formula:',
        formula: '\\text{Component} + \\text{must / should} + \\text{be} + \\text{Past Participle} + [\\text{Circumstance}]',
        notes: '"Protective grounding must be connected before main breaker closure."'
      }
    ],
    examHotspots: [
      'Rewrite the following experimental steps in passive voice for an engineering lab report.',
      'Why do technical writers avoid active voice and personal pronouns (I, We) in published research?',
      'Formulate a safety regulation using modal passive (must be inspected / should be lubricated).'
    ],
    bilingualInsight: {
      titleEn: "Passive Voice: Why Engineers Depersonalize Writing",
      titleAr: "💡 الفهم والربط الهندسي بالعربي: لماذا يكتب المهندسون بالمبني للمجهول؟",
      points: [
        "السر وراء المبني للمجهول: في الهندسة، لا يهم من قام بالتجربة سواء كان طالباً أو مهندساً أو باحثاً؛ المهم هو التجربة نفسها والعينة المقاسة وكيفية إجرائها لكي يتمكن أي مهندس آخر من تكرارها والوصول لنفس النتائج.",
        "القاعدة الذهبية في التصحيح: إذا كتبت 'was tested by us'، تخصم منك درجات! لأن 'by us' تعيد ضمير المتكلم غير المرغوب فيه.",
        "الفرق بين الماضي والمضارع: خطوات المعمل التي انتهيت منها تكتب بالماضي (was measured)، أما شرح كيف يعمل المحرك باستمرار فيكتب بالمضارع (is rotated)."
      ],
      examTip: "سؤال تحويل مؤكد: 'We poured the acid and calculated the density' -> الإجابة النموذجية: 'The acid was poured and the density was calculated.'"
    }
  },

  {
    id: 'eng-mod-connectors',
    number: 4,
    division: 'vocab_grammar',
    divisionBadge: 'المصطلحات والقواعد (Vocab & Grammar)',
    titleAr: 'أدوات الربط والسببية والشروط الهندسية',
    titleEn: 'Cause, Effect, Condition & Contrast Connectors',
    icon: 'GitFork',
    color: 'from-indigo-600 to-purple-600',
    badge: 'الوحدة 04 • الربط المنطقي للجمل',
    summary: 'قواعد استخدام أدوات الربط السببي (Due to, Because of, Therefore)، والجمل الشرطية لوصف السلوك الميكانيكي، والتباين والمقارنة بين المواد.',
    learningObjectives: [
      'Differentiate syntactically between prepositions of cause (due to + noun) and conjunctions of result (therefore + clause).',
      'Formulate Zero Conditional sentences for invariant physical laws (If temperature rises, resistance increases).',
      'Construct First Conditional sentences for operational alarms and industrial scenarios.',
      'Employ contrast connectors (whereas, while, however, despite) in material comparison tables.'
    ],
    keyFormulas: [
      {
        title: 'Due to (+ Noun) vs Therefore (+ Independent Clause):',
        formula: '\\text{Effect} + \\text{due to / because of} + \\mathbf{[\\text{Noun Phrase}]} \\quad \\longleftrightarrow \\quad \\text{Cause}; + \\mathbf{\\text{therefore / consequently,}} + \\mathbf{[\\text{Complete Clause}]}',
        notes: 'Incorrect: "Due to it rained." -> Correct: "Due to heavy rain." / "It rained; therefore, work stopped."'
      },
      {
        title: 'Zero Conditional for Physical Determinism:',
        formula: '\\text{If } + \\text{Present Simple (Condition)}, \\;\\; \\text{Present Simple (Physical Law)}',
        notes: '"If hydraulic pressure exceeds 200 bar, the relief valve opens automatically."'
      }
    ],
    examHotspots: [
      'Choose the correct connector: "The foundation cracked [due to / therefore] excessive differential settlement."',
      'Rewrite using "Unless": "If the bearing is not lubricated, it will seize."',
      'Join two sentences using "whereas" to contrast the ductility of copper and cast iron.'
    ],
    bilingualInsight: {
      titleEn: "Connectors: The Logic of Engineering Argumentation",
      titleAr: "💡 الفهم والربط الهندسي بالعربي: الروابط المنطقية والسببية",
      points: [
        "الفخ القواعدي الأكبر في امتحانات شبرا: الخلط بين Due to و Therefore. كلمة Due to تعني 'بسبب' ويجب أن يأتي بعدها اسم وليس فعلاً! أما كلمة Therefore فتعني 'وبناءً على ذلك' وتأتي في جملة جديدة متبوعة بفاصلة.",
        "أداة الشرط Unless: تعني حرفياً 'إذا لم' (If not). لذا لا تضع معها كلمة not أبداً في نفس جملة الشرط لتجنب نفي النفي.",
        "المقارنة الفنية بـ Whereas: تستخدم للمقارنة بين خاصيتين متضادتين لخامتين (مثال: النحاس قابل للسحب بينما الزهر هش وقابل للكسر)."
      ],
      examTip: "في أسئلة تصحيح الأخطاء: إذا وجدت 'Due to the machine was broken' صححها فوراً إلى: 'Due to machine failure' أو 'Because the machine was broken'."
    }
  },

  {
    id: 'eng-mod-dimensions',
    number: 5,
    division: 'vocab_grammar',
    divisionBadge: 'المصطلحات والقواعد (Vocab & Grammar)',
    titleAr: 'الأبعاد والمقاييس والخواص الهندسية للمواد',
    titleEn: 'Technical Dimensions, Measurements & Material Properties',
    icon: 'Compass',
    color: 'from-cyan-600 to-teal-600',
    badge: 'الوحدة 05 • التوصيف الهندسي للمقاييس',
    summary: 'الصياغة اللغوية الدقيقة للأبعاد والأشكال الهندسية، التمييز بين صيغ الأسماء والصفات (long/length)، وكتابة التفاوتات المسموحة (Tolerances).',
    learningObjectives: [
      'Convert dimension descriptions between adjective syntax (is 5 m long) and noun syntax (has a length of 5 m).',
      'Articulate engineering tolerances, cross-sectional areas, and thickness dimensions correctly.',
      'Distinguish qualitative material traits: brittle, ductile, malleable, porous, impermeable.',
      'Express numerical ranges and operational thresholds in technical data sheets.'
    ],
    keyFormulas: [
      {
        title: 'Dimension Transformation Dual Syntax:',
        formula: '\\text{Object} + \\text{is} + [\\text{Number}] + [\\text{Unit}] + \\mathbf{\\text{Adjective (long / wide / deep / high)}} \\quad \\longleftrightarrow \\quad \\text{Object} + \\text{has a} + \\mathbf{\\text{Noun (length / width / depth / height)}} + \\text{of} + [\\text{Number}] + [\\text{Unit}]',
        notes: '"The pipe is 2 meters long" <-> "The pipe has a length of 2 meters."'
      },
      {
        title: 'Tolerance & Allowable Variance Notation:',
        formula: '\\text{Nominal Dimension} \\pm \\text{Tolerance} \\quad [\\text{e.g., } 50\\text{ mm} \\pm 0.05\\text{ mm}]',
        notes: 'Read in technical English as: "Fifty millimeters plus or minus zero point zero five millimeters."'
      }
    ],
    examHotspots: [
      'Rewrite the sentence: "The chemical storage tank is 4 meters deep" using the noun form of deep.',
      'Match the dimension adjectives with their corresponding nouns (broad -> breadth, thick -> thickness).',
      'Define what is meant by an engineering tolerance of ±0.02 mm.'
    ],
    bilingualInsight: {
      titleEn: "Dimensions: Precision in Specification Sheets",
      titleAr: "💡 الفهم والربط الهندسي بالعربي: صياغة الأبعاد والتفاوتات",
      points: [
        "لماذا يهتم دكاترة شبرا بتحويل الصفة إلى اسم؟ لأن في كراسات الشروط والمواصفات (Data Sheets) يفضل المهندسون دائماً كتابة صيغة الاسم (Length: 10 m, Width: 4 m) لسهولة قراءتها في الجداول.",
        "التفاوت المسموح (Tolerance): في التصنيع الميكانيكي، يستحيل إنتاج قطعة بقطر 50 ملم بالضبط بدون خطأ جزء من الألف! لذا تحدد المواصفة مدى مسموح به مثل 50 ± 0.05 ملم لضمان سهولة التركيب.",
        "الصفات والأسماء الشائعة: Long تقابلها Length، و Wide تقابلها Width، و Deep تقابلها Depth، و High تقابلها Height."
      ],
      examTip: "سؤال متكرر: 'Rewrite using the noun form': 'The foundation is 12 meters deep' -> الإجابة النموذجية: 'The foundation has a depth of 12 meters'."
    }
  },

  // =======================================================================
  // BRANCH 2: TECHNICAL WRITING & REPORTS (MODULES 6-10)
  // =======================================================================
  {
    id: 'eng-mod-report-structure',
    number: 6,
    division: 'reports_writing',
    divisionBadge: 'الكتابة والتقارير (Reports & Writing)',
    titleAr: 'هيكل التقرير الهندسي الشامل والملخص التنفيذي',
    titleEn: 'Standard Technical Report Architecture & Executive Summary',
    icon: 'FileText',
    color: 'from-amber-600 to-orange-600',
    badge: 'الوحدة 06 • هيكل التقرير الأكاديمي المعتمد',
    summary: 'التشريح الأكاديمي المعتمد لأقسام التقرير الفني العشرة، وقواعد كتابة الملخص التنفيذي المستقل (Abstract) في 4 أسطر متكاملة.',
    learningObjectives: [
      'Order the 10 canonical sections of an engineering technical report sequentially.',
      'Compose a self-contained 4-part Executive Summary (Objective, Method, Results, Conclusion).',
      'Distinguish between the purpose of the Introduction (scope) and Conclusion (verified outcomes).',
      'Format citations (IEEE style) and allocate oversized data into Appendices.'
    ],
    keyFormulas: [
      {
        title: 'Canonical 10-Section Report Hierarchy:',
        formula: '\\text{Title} \\to \\text{Abstract} \\to \\text{TOC} \\to \\text{Intro} \\to \\text{Apparatus/Method} \\to \\text{Results} \\to \\text{Discussion} \\to \\text{Conclusions} \\to \\text{Recommendations} \\to \\text{References/Appendices}',
        notes: 'Never invert the position of Results and Discussion.'
      },
      {
        title: 'Executive Summary 4-Sentence Formula:',
        formula: '\\text{Abstract} = \\mathbf{\\text{Objective (1 sent.)}} + \\mathbf{\\text{Method (1-2 sent.)}} + \\mathbf{\\text{Key Numerical Results (1-2 sent.)}} + \\mathbf{\\text{Final Decision (1 sent.)}}',
        notes: 'Must be completely standalone without relying on figures or references in the main body.'
      }
    ],
    examHotspots: [
      'List the four essential components that must be present in a technical report Executive Summary.',
      'Arrange the following report sections in their correct sequential order.',
      'What is the primary function of an Appendix in an engineering report?'
    ],
    bilingualInsight: {
      titleEn: "Report Structure: The Professional Engineering Blueprint",
      titleAr: "💡 الفهم والربط الهندسي بالعربي: هيكل التقرير الهندسي المتكامل",
      points: [
        "أهمية الملخص التنفيذي (Executive Summary): مديرو المشروعات والعملاء لا يملكون وقتاً لقراءة تقرير من 50 صفحة؛ لذا يقرؤون فقط هذا الملخص المكون من 150-200 كلمة ليتخذوا قرار الصب أو الشراء فوراً!",
        "الفرق بين Results و Discussion: قسم Results يعرض الأرقام والجداول والمنحنيات كما خرجت من أجهزة القياس دون تأويل. أما قسم Discussion فيفسر لماذا ظهرت هذه الأرقام وما هي أسباب حيودها عن القيم النظرية.",
        "وظيفة الملاحق (Appendices): توضع بها الجداول الكبيرة وكود بايثون وحسابات المعايرة حتى لا يتقطع تسلسل القراءة في صلب التقرير."
      ],
      examTip: "سؤال فاينال لا يخلو منه امتحان: رتب الأقسام التالية: (Discussion, Introduction, Abstract, Title Page, Results) -> الترتيب: Title Page -> Abstract -> Introduction -> Results -> Discussion."
    }
  },

  {
    id: 'eng-mod-mechanism-desc',
    number: 7,
    division: 'reports_writing',
    divisionBadge: 'الكتابة والتقارير (Reports & Writing)',
    titleAr: 'الوصف الفني للأجهزة والمعدات الهندسية',
    titleEn: 'Technical Description of Mechanisms & Engineering Tools',
    icon: 'Cpu',
    color: 'from-orange-600 to-amber-600',
    badge: 'الوحدة 07 • النموذج الرباعي لوصف الأجهزة',
    summary: 'المنهجية القياسية لكتابة الوصف الفني لأي أداة أو جهاز ميكانيكي أو كهربي عبر النموذج الرباعي وحروف الجر المكانية المنضبطة.',
    learningObjectives: [
      'Apply the 4-stage mechanism description model: 1. Identification -> 2. Principle -> 3. Components -> 4. Cycle.',
      'Utilize spatial engineering prepositions: mounted on, enclosed within, pivoted around, coaxial with.',
      'Describe materials, cross-sections, and structural interconnections of machine parts.',
      'Draft a comprehensive technical description for standard tools (e.g., Vernier Caliper, Micrometer, Centrifugal Pump).'
    ],
    keyFormulas: [
      {
        title: '4-Stage Mechanism Description Model:',
        formula: '1.\\;\\mathbf{\\text{Identification \\& Purpose}} \\;\\longrightarrow\\; 2.\\;\\mathbf{\\text{Operating Principle}} \\;\\longrightarrow\\; 3.\\;\\mathbf{\\text{Component Breakdown}} \\;\\longrightarrow\\; 4.\\;\\mathbf{\\text{Operational Cycle}}',
        notes: 'Each stage must be separated with clear technical subheadings in the exam booklet.'
      },
      {
        title: 'Spatial Assembly Syntax:',
        formula: '\\text{Component A} + \\text{is} + \\mathbf{[\\text{mounted on / enclosed within / pivoted around / bolted to}]} + \\text{Component B}',
        notes: '"The rotating impeller is enclosed within a volute cast-iron casing and mounted coaxial with the motor shaft."'
      }
    ],
    examHotspots: [
      'Write a technical description of a Vernier Caliper following the standard 4-stage model.',
      'Choose the correct spatial preposition: "The gears are [housed in / put on] an oil-tight cast iron casing."',
      'State the underlying operating principle of a micrometer screw gauge.'
    ],
    bilingualInsight: {
      titleEn: "Mechanism Description: Deconstructing Physical Systems",
      titleAr: "💡 الفهم والربط الهندسي بالعربي: وصف الأجهزة والمعدات",
      points: [
        "النموذج الرباعي الذهبي: عند سؤالك عن وصف جهاز في الامتحان، قسّم إجابتك إجبارياً إلى: 1. تعريف الجهاز ووظيفته، 2. نظرية عمله الفيزيائية، 3. حصر مكوناته وخاماتها، 4. دورة التشغيل من البداية للنهاية.",
        "حروف الجر الميكانيكية الدقيقة: تجنب الكلمات العامية مثل 'near' أو 'put on'. استخدم بدلاً منها 'mounted on' (مثبت على)، و 'enclosed within' (محاط داخل)، و 'coaxial with' (متحد المحور مع).",
        "توصيف الخامات: اذكر دائماً خامة كل جزء وسبب اختيارها (مثال: الإطار مصنوع من حديد الزهر لامتصاص الاهتزازات)."
      ],
      examTip: "في سؤال وصف الورنية (Vernier Caliper): اذكر أن نظرية عملها تعتمد على الفرق بين تدريج المليمتر وتدريج الورنية المتحركة (0.02 مم أو 0.05 مم)."
    }
  },

  {
    id: 'eng-mod-process-desc',
    number: 8,
    division: 'reports_writing',
    divisionBadge: 'الكتابة والتقارير (Reports & Writing)',
    titleAr: 'وصف العمليات والتجارب وخطوات التشغيل',
    titleEn: 'Process Description & Standard Operating Procedures (SOP)',
    icon: 'Activity',
    color: 'from-rose-600 to-red-600',
    badge: 'الوحدة 08 • توثيق العمليات الصناعية',
    summary: 'طرق توثيق العمليات الصناعية والتجارب المعملية المتتابعة والمتزامنة باستخدام ظروف التتابع الزمني والمخططات الانسيابية (Flowcharts).',
    learningObjectives: [
      'Differentiate between Instructions (Imperative mood: "Turn valve") and Process Descriptions (Passive voice: "Valve is turned").',
      'Incorporate chronological sequence markers: Initially, Subsequently, Concurrently, Simultaneously, Ultimately.',
      'Convert industrial engineering flowcharts and block diagrams into coherent technical prose.',
      'Describe chemical and mechanical manufacturing cycles (e.g., Cement manufacturing, Water softening, Bauxite refining).'
    ],
    keyFormulas: [
      {
        title: 'Instructional Mood vs Process Description Mood:',
        formula: '\\text{Operator Instructions: } \\mathbf{\\text{Imperative Verb}} + \\text{Object} \\quad \\longleftrightarrow \\quad \\text{Process Report: } \\text{Object} + \\mathbf{\\text{is / are + Past Participle}}',
        notes: 'Manual: "Tighten bolt to 50 Nm." <-> Report: "The bolt is tightened to a torque of 50 Nm."'
      },
      {
        title: 'Simultaneous Process Phrasing:',
        formula: '\\text{Stage A is executed}; \\;\\; \\mathbf{\\text{simultaneously / concurrently,}} \\;\\; \\text{Stage B takes place.}',
        notes: 'Essential for parallel multi-stream industrial cycles.'
      }
    ],
    examHotspots: [
      'Convert the provided cement manufacturing flowchart into a formal 5-step process description.',
      'Which word describes two industrial actions occurring at the exact same instant? (Answer: Simultaneously).',
      'Explain the grammatical difference between an operating manual instruction and a technical process report.'
    ],
    bilingualInsight: {
      titleEn: "Process Writing: Chronology & Concurrency in Engineering",
      titleAr: "💡 الفهم والربط الهندسي بالعربي: وصف العمليات والخطوات المتزامنة",
      points: [
        "الفرق بين كتالوج التعليمات والتقرير الفني: في كتالوج التشغيل تخاطب الفني بأسلوب الأمر المباشر (Press the start button). أما في التقرير الفني فتوثق ما حدث بالمبني للمجهول (The start button is pressed).",
        "العمليات المتزامنة (Simultaneously / Concurrently): عندما تعمل مضخة سحب المياه ومضخة حقن الكلور في نفس اللحظة في محطة المعالجة، نستخدم الرابط Simultaneously.",
        "تحويل الفلوتشارت إلى نص: ابدأ بـ 'Initially'، ثم اربط المراحل بـ 'Subsequently' و 'Following this'، واختم بـ 'Ultimately' أو 'In the final phase'."
      ],
      examTip: "سؤال كلاسيكي: يعطيك رسم تخطيطي لتجربة تعيين عسر الماء أو دورة تبريد ويطلب كتابة Process Description من 6 خطوات متسلسلة زمنياً."
    }
  },

  {
    id: 'eng-mod-correspondence',
    number: 9,
    division: 'reports_writing',
    divisionBadge: 'الكتابة والتقارير (Reports & Writing)',
    titleAr: 'المراسلات المهنية والإيميلات والمذكرات الفنية',
    titleEn: 'Professional Engineering Correspondence: Emails & Memos',
    icon: 'Mail',
    color: 'from-purple-600 to-indigo-600',
    badge: 'الوحدة 09 • مراسلات المهندسين الرسمية',
    summary: 'بروتوكولات كتابة الإيميلات الرسمية، المذكرات الداخلية (Memos)، تقارير الأعطال العاجلة، وصياغة الـ Call to Action بمهنية وانضباط.',
    learningObjectives: [
      'Draft professional engineering emails with informative subject lines, formal salutations, and clear sign-offs.',
      'Structure an internal engineering memorandum (Memo) using the mandatory header: TO, FROM, DATE, SUBJECT.',
      'Formulate effective Calls to Action (CTA) with explicit deadlines and required decision points.',
      'Write site incident notification memos detailing problem summary, immediate containment, and remedial steps.'
    ],
    keyFormulas: [
      {
        title: 'Professional Subject Line Formula:',
        formula: '\\mathbf{\\text{Subject:}} \\;\\; [\\text{Project Code}] \\;-\\; [\\text{Action Required / Document Type}] \\;-\\; [\\text{Specific System}]',
        notes: 'Example: "Subject: Project #402 - Core Compression Test Report for Official Approval"'
      },
      {
        title: 'Internal Engineering Memorandum Header Template:',
        formula: '\\mathbf{\\text{TO:}} \\text{ Recipient, Title} \\quad | \\quad \\mathbf{\\text{FROM:}} \\text{ Sender, Title} \\quad | \\quad \\mathbf{\\text{DATE:}} \\text{ Date} \\quad | \\quad \\mathbf{\\text{SUBJECT:}} \\text{ Concise Topic}',
        notes: 'Memos omit formal salutations (Dear...) and complimentary closes (Best regards) to stay direct.'
      }
    ],
    examHotspots: [
      'Write a formal email of 80 words requesting approval from the project consultant to pour concrete.',
      'What are the four mandatory fields in an internal memorandum (Memo) header?',
      'Identify and correct unprofessional phrasing in a sample engineering email.'
    ],
    bilingualInsight: {
      titleEn: "Correspondence: Engineering Professionalism in Practice",
      titleAr: "💡 الفهم والربط الهندسي بالعربي: أصول المراسلات وإيميلات الموقع",
      points: [
        "عنوان الإيميل (Subject Line): المدير في شركة المقاولات يستقبل مئات الإيميلات يومياً؛ لذا يجب أن يوضح العنوان رقم المشروع والمطلوب بوضوح (مثال: Project #104 - Request for Inspection).",
        "المذكرة الداخلية (Memo): تختلف عن الإيميل بأنها داخل نفس المؤسسة ولا تحتاج إلى 'Dear Sir' أو 'Sincerely'، بل تبدأ مباشرة بالترويسة الرباعية (TO, FROM, DATE, SUBJECT) ثم المشكلة والإجراء المطلوب فوراً.",
        "تحديد الموعد النهائي (Call to Action): لا تكتب 'يرجى الرد قريباً'، بل اكتب موعداً محدداً: 'Please confirm approval by Thursday, 2 PM to avoid pouring delays'."
      ],
      examTip: "سؤال عملي مكرر بشبرا: اكتب Memo رسمية لمدير الموقع تبلغه فيها بحدوث تسريب في ماسورة الهيدروليك للرافعة وتطلب أمر شراء لقطع الغيار."
    }
  },

  {
    id: 'eng-mod-style-clarity',
    number: 10,
    division: 'reports_writing',
    divisionBadge: 'الكتابة والتقارير (Reports & Writing)',
    titleAr: 'قواعد الإيجاز والدقة وتجنب الأخطاء الشائعة',
    titleEn: 'Technical Editing, Conciseness & Common Writing Pitfalls',
    icon: 'CheckCircle2',
    color: 'from-pink-600 to-rose-600',
    badge: 'الوحدة 10 • التحرير الهندسي وحذف الحشو',
    summary: 'مهارات تحرير النصوص الهندسية: حذف الكلمات الزائدة والترهل اللغوي، التعبير بقيم رقمية محددة بدلاً من الأوصاف الذاتية، وضبط علامات الترقيم.',
    learningObjectives: [
      'Eliminate wordy conversational phrases in favor of concise technical verbs (e.g., "made an examination of" -> "examined").',
      'Replace subjective qualitative adjectives (big, very hot, cheap) with measurable quantitative metrics.',
      'Apply technical punctuation rules: hyphens in compound modifiers (a 10-meter cable), semicolons between data items.',
      'Correct common dangling modifiers and ambiguous pronoun references in engineering descriptions.'
    ],
    keyFormulas: [
      {
        title: 'Wordiness Elimination Transformations:',
        formula: '\\text{"At the present moment in time"} \\to \\mathbf{\\text{"Currently"}}, \\qquad \\text{"Owing to the fact that"} \\to \\mathbf{\\text{"Because"}}, \\qquad \\text{"Has the capability of"} \\to \\mathbf{\\text{"Can"}}',
        notes: 'Fewer words with identical or sharper technical meaning.'
      },
      {
        title: 'Quantification Transformation Rule:',
        formula: '\\text{Subjective Description (Vague)} \\;\\xrightarrow{\\quad\\text{Replace}\\quad}\\; \\mathbf{\\text{Numerical Metric + Standard Engineering Unit}}',
        notes: 'Vague: "The motor runs very fast." -> Metric: "The motor operates at 3000 RPM under rated load."'
      }
    ],
    examHotspots: [
      'Make the following sentence concise: "At this point in time, we are in a position to begin testing."',
      'Identify the ambiguous phrase in an engineering specification and rewrite it quantitatively.',
      'Where is a hyphen required in compound technical modifiers? (e.g., "a 15-minute test" vs "a test lasting 15 minutes").'
    ],
    bilingualInsight: {
      titleEn: "Style & Clarity: The Engineering Economy of Words",
      titleAr: "💡 الفهم والربط الهندسي بالعربي: الإيجاز الهندسي وحذف الحشو",
      points: [
        "مبدأ الاقتصاد في الكلمات: في التقارير الهندسية، كل كلمة زائدة تهدر وقت المراجع وتزيد من احتمالية سوء الفهم في الموقع.",
        "حذف الأوصاف الذاتية: لا تكتب أبداً في مواصفة 'المضخة قوية جداً ورخيصة الثمن'! المهندس يكتب: 'مضخة قدرة 15 كيلوواط بتكلفة 4000 دولار'. الأرقام وحدها هي التي تحكم.",
        "الواصلة (Hyphen) في الأبعاد: عندما نستخدم الرقم والوحدة كصفة قبل الاسم نضع بينهما واصلة ونحذف علامة الجمع (مثال: a 5-meter beam وليس a 5 meters beam)."
      ],
      examTip: "سؤال تحريري ثابت: يعطيك جملة من 20 كلمة ويطلب صياغتها في 8 كلمات بأسلوب هندسي موجز دون فقد أي معلومة فنية."
    }
  }
];
