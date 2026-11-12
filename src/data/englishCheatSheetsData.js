// High-Density Printable A4 Cheat Sheets & Fast Review Cards for Technical English (HUM 001)
// Faculty of Engineering at Shoubra (FES) - Benha University (Term 1)
// Strictly Separated by Academic Branch:
// 1. Technical Vocabulary & Grammar Branch (vocab_grammar)
// 2. Technical Writing & Engineering Reports Branch (reports_writing)

export const ENGLISH_CHEAT_SHEETS = [
  // =========================================================================
  // BRANCH 1: TECHNICAL VOCABULARY & GRAMMAR (2 A4 SHEETS)
  // =========================================================================
  {
    id: 'sheet-affixes',
    division: 'vocab_grammar',
    titleAr: 'شيت مصفوفة البادئات واللواحق والجذور الهندسية (A4)',
    titleEn: 'Engineering Greek & Latin Affixes & Roots Matrix (A4 Sheet)',
    descriptionEn: 'High-density A4 cheat sheet containing 30+ classical prefixes, suffixes, combining roots, numerical multipliers, and conversion rules tailored for Shoubra Engineering exams.',
    descriptionAr: 'ورقة A4 مكثفة جاهزة للطباعة: جدول البادئات الدالة على المقادير والأبعاد، اللواحق الدالة على خواص المواد، وجذور الكلمات العلمية مع أمثلة امتحانية محلولة.',
    badge: 'ورقة A4 • معجم الجذور والاشتقاق',
    color: 'from-emerald-600 via-teal-600 to-cyan-700',
    borderColor: 'border-emerald-500/50',
    sections: [
      {
        titleEn: '1. Prefixes of Scale & Multipliers (Greek/Latin)',
        titleAr: '١. بادئات المقادير والنسب الرقمية القياسية',
        content: [
          { key: 'Nano- (10^-9)', val: 'Nanoscale, Nanometer (متناهي الصغر بمقياس النانو)' },
          { key: 'Micro- (10^-6)', val: 'Microprocessor, Microscope (أجزاء من المليون)' },
          { key: 'Milli- (10^-3)', val: 'Millivolt, Millimeter (جزء من الألف)' },
          { key: 'Kilo- (10^3)', val: 'Kilowatt, Kilopascal (ألف ضعف)' },
          { key: 'Mega- (10^6)', val: 'Megawatt, Megapascal (مليون ضعف / وحدات الإجهاد)' },
          { key: 'Giga- (10^9)', val: 'Gigawatt, Gigahertz (مليار ضعف / الترددات)' }
        ]
      },
      {
        titleEn: '2. Scientific Functional Prefixes in Engineering',
        titleAr: '٢. البادئات الدالة على التخصص العلمي ونوع الطاقة',
        content: [
          { key: 'Thermo- (Heat)', val: 'Thermodynamics, Thermocouple, Thermoplastic (حراري)' },
          { key: 'Hydro- (Liquid)', val: 'Hydraulics, Hydroelectric, Hydrodynamics (مائع سائل)' },
          { key: 'Aero- / Pneu- (Air/Gas)', val: 'Aerodynamics, Pneumatic tools (هواء وغازات مضغوطة)' },
          { key: 'Photo- (Light)', val: 'Photovoltaic cells, Photon, Photodiode (ضوئي / خلايا شمسية)' },
          { key: 'Electro- (Electricity)', val: 'Electrolysis, Electrode, Electromagnetic (كهربي / كهرومغناطيسي)' },
          { key: 'Iso- (Equal / Same)', val: 'Isothermal, Isometric, Isotropic (متساوي / ثابت)' }
        ]
      },
      {
        titleEn: '3. Material Properties Suffixes & Transformation',
        titleAr: '٣. اللواحق الدالة على الخواص الميكانيكية والفيزيائية',
        content: [
          { key: '-able / -ible (Capacity)', val: 'Malleable (قابل للطرق), Combustible (قابل للاحتراق), Ductile (قابل للسحب)' },
          { key: '-ity / -ance (Property)', val: 'Conductivity (التوصيلية), Resistivity (المقاومة النوعية), Ductility (الممطولية)' },
          { key: '-meter (Measuring device)', val: 'Voltmeter, Thermometer, Hydrometer, Tachometer (أجهزة القياس)' },
          { key: '-scope (Observing tool)', val: 'Oscilloscope, Microscope, Endoscope (أجهزة الملاحظة والعرض)' }
        ]
      },
      {
        titleEn: '4. Shoubra Exam Pattern: Word Breakdown Walkthrough',
        titleAr: '٤. نموذج حل سؤال التفكيك الاشتقاقي في امتحان الفاينال',
        content: [
          { key: 'Thermodynamics', val: 'Thermo (Prefix: Heat) + Dynamis (Root: Power/Force) + -ics (Suffix: Science/Study)' },
          { key: 'Electrolysis', val: 'Electro (Prefix: Electricity) + Lysis (Root: Splitting/Dissolution)' },
          { key: 'Semiconductor', val: 'Semi (Prefix: Half/Partial) + Conduct (Root: Transmit) + -or (Suffix: Device/Material)' }
        ]
      }
    ]
  },
  {
    id: 'sheet-grammar',
    division: 'vocab_grammar',
    titleAr: 'شيت قواعد الكتابة الهندسية والمبني للمجهول والربط (A4)',
    titleEn: 'Engineering Grammar Blueprint: Passive Voice & Connectors (A4 Sheet)',
    descriptionEn: 'High-density A4 cheat sheet summarizing active-to-passive transformation, cause/effect sentence linkers, zero/first conditionals, and dimension formulations.',
    descriptionAr: 'ورقة A4 للمراجعة السريعة: قواعد تحويل خطوات المعمل لمبني للمجهول، جدول أدوات الربط والسببية والنتيجة، والجمل الشرطية لوصف سلوك الآلات.',
    badge: 'ورقة A4 • قواعد التقارير والامتحان',
    color: 'from-blue-600 via-indigo-600 to-cyan-600',
    borderColor: 'border-blue-500/50',
    sections: [
      {
        titleEn: '1. Laboratory Passive Transformation Golden Rules',
        titleAr: '١. القواعد الذهبية لصياغة المبني للمجهول بالمعمل',
        content: [
          { key: 'Rule 1 (Omit Agent)', val: 'Never write "by us" or "by me" in engineering reports (حذف الفاعل تماماً للموضوعية).' },
          { key: 'Rule 2 (Past Simple Lab)', val: 'Obj + was/were + P.P.: "The solution was stirred continuously for 10 minutes."' },
          { key: 'Rule 3 (Present Fact)', val: 'Obj + is/are + P.P.: "Alternating current is converted to direct current by diodes."' },
          { key: 'Rule 4 (Modal Directives)', val: 'Obj + must/should be + P.P.: "Overload protection must be installed before energizing."' }
        ]
      },
      {
        titleEn: '2. Cause, Effect & Logical Connectors Matrix',
        titleAr: '٢. مصفوفة أدوات الربط والسببية والمقارنة الفنية',
        content: [
          { key: 'Due to / Owing to (+ Noun)', val: 'Due to excessive friction, heat increased rapidly. (متبوع باسم)' },
          { key: 'Therefore / Consequently (+ Clause)', val: 'Friction was high; consequently, the motor stalled. (متبوع بجملة كاملة)' },
          { key: 'Whereas / While (Contrast)', val: 'Cast iron is brittle, whereas mild steel is ductile and tough. (مقارنة خامات)' },
          { key: 'Despite / In spite of (+ Noun)', val: 'Despite high cyclic loading, no fatigue cracks developed. (رغم الإجهاد العالي)' }
        ]
      },
      {
        titleEn: '3. Technical Dimension Formulas & Tolerances',
        titleAr: '٣. الصيغ اللغوية لكتابة الأبعاد والتفاوتات الهندسية',
        content: [
          { key: 'Adjective Form', val: 'The cylindrical specimen is 150 mm long and 25 mm wide.' },
          { key: 'Noun Form', val: 'The specimen has a length of 150 mm and a width of 25 mm.' },
          { key: 'Diameter & Cross-Section', val: 'The cross-sectional area equals 490.8 mm² with a tolerance of ±0.02 mm.' }
        ]
      }
    ]
  },

  // =========================================================================
  // BRANCH 2: TECHNICAL WRITING & REPORTS (3 A4 SHEETS)
  // =========================================================================
  {
    id: 'sheet-report-blueprint',
    division: 'reports_writing',
    titleAr: 'شيت هيكل التقرير الهندسي وخريطة الملخص التنفيذي (A4)',
    titleEn: 'Master Technical Report Architecture & Executive Summary Map (A4 Sheet)',
    descriptionEn: 'Complete A4 roadmap detailing the canonical 10 sections of an engineering report, Abstract writing templates, citation protocols, and appendix rules.',
    descriptionAr: 'ورقة A4 معتمدة: الترتيب الصارم لأقسام التقرير الهندسي، قالب كتابة الملخص التنفيذي (Abstract) في 4 أسطر، وقواعد صياغة التوصيات والمراجع.',
    badge: 'ورقة A4 • هيكل التقرير الأكاديمي',
    color: 'from-amber-600 via-orange-600 to-rose-700',
    borderColor: 'border-amber-500/50',
    sections: [
      {
        titleEn: '1. Standard 10 Sections in Technical Reports',
        titleAr: '١. الأقسام العشرة القياسية للتقرير الفني بالترتيب',
        content: [
          { key: '1. Title Page', val: 'Project title, Course, Student name/ID, Supervisor, Date (صفحة الغلاف وبيانات الفريق).' },
          { key: '2. Table of Contents', val: 'Numbered sections, subsections, and list of figures/tables (الفهرس والجداول).' },
          { key: '3. Executive Summary / Abstract', val: 'Standalone synopsis: Objective + Method + Results + Conclusion (الملخص التنفيذي).' },
          { key: '4. Introduction', val: 'Background, problem statement, project scope and objectives (المقدمة والأهداف).' },
          { key: '5. Equipment & Methodology', val: 'Apparatus list, specifications, and procedural steps in passive voice (الأجهزة وطريقة العمل).' },
          { key: '6. Results & Data', val: 'Experimental curves, graphs, and summary tables (النتائج والمنحنيات البيانية).' },
          { key: '7. Discussion', val: 'Interpreting results, error analysis, and comparing with theoretical values (مناقشة النتائج وأسباب الخطأ).' },
          { key: '8. Conclusions', val: 'Summary of verified outcomes answering the initial objective (الاستنتاجات المثبتة).' },
          { key: '9. Recommendations', val: 'Actionable suggestions for future design or optimization (التوصيات الهندسية القادمة).' },
          { key: '10. References & Appendices', val: 'IEEE/Harvard citations and raw measurements/schematics (المراجع والملاحق).' }
        ]
      },
      {
        titleEn: '2. Abstract / Executive Summary 4-Sentence Formula',
        titleAr: '٢. معادلة كتابة الملخص التنفيذي في 4 جُمل نموذجية',
        content: [
          { key: 'Sentence 1 (Objective)', val: '"This report evaluates the thermal efficiency of a counter-flow shell-and-tube heat exchanger."' },
          { key: 'Sentence 2 (Methodology)', val: '"Hot and cold water streams were tested across four flow rates ranging from 2 to 8 L/min."' },
          { key: 'Sentence 3 (Key Result)', val: '"Overall heat transfer coefficient averaged 1450 W/m²·K, yielding an optimal effectiveness of 78%."' },
          { key: 'Sentence 4 (Conclusion)', val: '"Counter-flow arrangement proved 22% more efficient than parallel flow under identical thermal loads."' }
        ]
      }
    ]
  },
  {
    id: 'sheet-mechanism-process',
    division: 'reports_writing',
    titleAr: 'شيت الوصف الفني للأجهزة والعمليات الصناعية (A4)',
    titleEn: 'Mechanism & Process Description Framework (A4 Sheet)',
    descriptionEn: 'A4 cheat sheet featuring the 4-stage mechanism description framework, spatial relationship prepositions, sequence markers, and procedural flowcharts.',
    descriptionAr: 'ورقة A4 شاملة: دليل كتابة الوصف الفني لأي جهاز في 4 مراحل، حروف الجر الميكانيكية الدقيقة، وكلمات التتابع الزمني لوصف العمليات المعملية والصناعية.',
    badge: 'ورقة A4 • وصف الأجهزة والعمليات',
    color: 'from-orange-600 via-amber-600 to-yellow-600',
    borderColor: 'border-orange-500/50',
    sections: [
      {
        titleEn: '1. Mechanism Description 4-Stage Model',
        titleAr: '١. النموذج الرباعي لكتابة الوصف الفني لأي أداة أو جهاز',
        content: [
          { key: 'Stage 1: Identification & Purpose', val: 'State name, category, and what it does: "A micrometer is a handheld precision instrument used to measure dimensions up to 0.01 mm."' },
          { key: 'Stage 2: Working Principle', val: 'Explain underlying physics: "It operates on the principle of converting the rotation of a fine screw into axial displacement."' },
          { key: 'Stage 3: Component Breakdown', val: 'Detail each part, material, and role: "It consists of a U-shaped frame, fixed anvil, movable spindle, thimble, and ratchet stop."' },
          { key: 'Stage 4: Operating Cycle', val: 'Walk through execution: "The workpiece is placed between anvil and spindle; the thimble is turned until ratchet clicks."' }
        ]
      },
      {
        titleEn: '2. Spatial Prepositions in Machine Assembly',
        titleAr: '٢. حروف الجر المكانية لوصف تجميع وتثبيت الأجزاء',
        content: [
          { key: 'Mounted on / Attached to', val: 'The electric motor is mounted on a vibration-damped baseplate.' },
          { key: 'Housed in / Enclosed within', val: 'The precision gears are enclosed within a sealed lubricating oil sump.' },
          { key: 'Pivoted around / Bolted to', val: 'The rocker arm is pivoted around a central hardened steel pin.' },
          { key: 'Coaxial with / Concentric with', val: 'The inner impeller is mounted coaxial with the outer drive shaft.' }
        ]
      },
      {
        titleEn: '3. Process Chronological Markers',
        titleAr: '٣. علامات التتابع الزمني للمراحل الصناعية المتزامنة',
        content: [
          { key: 'First / Initially', val: 'Initially, raw materials are blended and fed into the preheater kiln.' },
          { key: 'Simultaneously / Concurrently', val: 'Simultaneously, cooling water circulates through jacket cooling channels.' },
          { key: 'Subsequently / Following this', val: 'Subsequently, clinker is discharged and pulverized in ball mills.' }
        ]
      }
    ]
  },
  {
    id: 'sheet-correspondence',
    division: 'reports_writing',
    titleAr: 'شيت الإيميلات الهندسية الرسمية والمذكرات الموقعية (A4)',
    titleEn: 'Professional Engineering Emails & Incident Memos Handbook (A4 Sheet)',
    descriptionEn: 'A4 cheat sheet with ready-to-use formal email templates, site memorandum layouts, failure reports, RFQ quotation requests, and conciseness rules.',
    descriptionAr: 'ورقة A4 ممتازة للمراسلات: قوالب إيميلات رسمية جاهزة للاستخدام، هيكل المذكرة الفنية (Memo)، تقرير الإبلاغ عن عطل، وقاموس حذف الحشو والكلمات الزائدة.',
    badge: 'ورقة A4 • مراسلات المهندسين',
    color: 'from-purple-600 via-indigo-600 to-violet-700',
    borderColor: 'border-purple-500/50',
    sections: [
      {
        titleEn: '1. Standard Formal Email Structure & Phrasing',
        titleAr: '١. الهيكل والعبارات المعتمدة للإيميل الهندسي الرسمي',
        content: [
          { key: 'Subject Line', val: 'Formula: [Project Name / Code] - [Action Required] - [Brief Topic]' },
          { key: 'Salutation', val: 'Formal: "Dear Eng. [Last Name]," / "Dear Dr. [Last Name],"' },
          { key: 'Opening Sentence', val: '"I am writing to submit the weekly site inspection report for Block C."' },
          { key: 'Call to Action (CTA)', val: '"Please review the attached concrete test results and confirm approval by Thursday, 3 PM."' },
          { key: 'Sign-off', val: '"Best regards,\nEng. Amr (Structural Site Engineer)\nFaculty of Engineering at Shoubra"' }
        ]
      },
      {
        titleEn: '2. Internal Memorandum (Memo) Header & Body',
        titleAr: '٢. ترويسة وقالب المذكرة الفنية الموقعية (Site Memo)',
        content: [
          { key: 'TO:', val: 'Eng. Khaled Mostafa (Project Manager)' },
          { key: 'FROM:', val: 'Eng. Amr (Site Quality Control Engineer)' },
          { key: 'DATE / SUBJECT:', val: '12 November 2026 | URGENT: Pump #2 Hydraulic Seal Failure' },
          { key: 'Summary & Action', val: 'State problem in 2 lines, root cause in 1 line, and required decision with deadline.' }
        ]
      },
      {
        titleEn: '3. Technical Conciseness: Wordiness Elimination Dictionary',
        titleAr: '٣. قاموس حذف الحشو والترهل في التقارير (قبل وبعد)',
        content: [
          { key: 'At this point in time -> Now / Currently', val: 'استبدل العبارة بكلمة واحدة مباشرة' },
          { key: 'Owing to the fact that -> Because / Since', val: 'تقليل الكلمات وحفظ المساحة' },
          { key: 'Has the capability of -> Can', val: 'اختصار أفعال المقدرة' },
          { key: 'Take into consideration -> Consider', val: 'استبدال التراكيب الثقيلة بأفعال بسيطة' },
          { key: 'In the event that -> If', val: 'تسهيل الجمل الشرطية' }
        ]
      }
    ]
  }
];
