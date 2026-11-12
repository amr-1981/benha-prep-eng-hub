// Comprehensive Technical English Terms, Grammar Rules, Phrasing & Templates Vault (HUM 001)
// Tailored Exclusively for Faculty of Engineering at Shoubra (FES) - Benha University (Term 1)
// Every item is English-First with Academic Formulation + On-Demand Arabic Explanation Toggle

export const ENGLISH_GLOSSARY_MODULES = [
  { id: 'all', label: 'جميع وحدات الإنجليزي الفني (10 وحدات)', icon: 'Sparkles', color: 'text-cyan-400' },
  // Division 1: Vocabulary & Grammar
  { id: 'affixes', label: '١. البادئات واللواحق الهندسية', icon: 'Scissors', color: 'text-emerald-400' },
  { id: 'word_formation', label: '٢. اشتقاق المصطلحات والتصنيف الفني', icon: 'Layers', color: 'text-teal-400' },
  { id: 'passive_voice', label: '٣. قواعد المبني للمجهول في التقارير', icon: 'Repeat', color: 'text-blue-400' },
  { id: 'connectors', label: '٤. أدوات الربط والسببية والشروط', icon: 'GitFork', color: 'text-indigo-400' },
  { id: 'dimensions', label: '٥. الأبعاد والمقاييس والخواص الفيزيائية', icon: 'Compass', color: 'text-cyan-400' },
  // Division 2: Technical Writing & Reports
  { id: 'report_structure', label: '٦. هيكل التقرير الهندسي والملخص', icon: 'FileText', color: 'text-amber-400' },
  { id: 'mechanism_desc', label: '٧. الوصف الفني للأجهزة والمعدات', icon: 'Cpu', color: 'text-orange-400' },
  { id: 'process_desc', label: '٨. وصف العمليات وخطوات التشغيل', icon: 'Activity', color: 'text-rose-400' },
  { id: 'correspondence', label: '٩. الإيميلات والمراسلات والمذكرات الفنية', icon: 'Mail', color: 'text-purple-400' },
  { id: 'style_clarity', label: '١٠. الإيجاز والدقة وتجنب الأخطاء', icon: 'CheckCircle2', color: 'text-pink-400' }
];

export const ENGLISH_GLOSSARY_TYPES = [
  { id: 'all', label: 'الكل (مصطلحات + قواعد + قوالب صياغة)' },
  { id: 'term', label: '📖 مصطلحات وبادئات هندسية (Technical Terms & Affixes)' },
  { id: 'rule', label: '📐 قواعد وتراكيب نحوية (Grammar Patterns & Rules)' },
  { id: 'template', label: '📝 قوالب تقارير وصياغات مهنية (Report Phrasing & Templates)' }
];

export const ENGLISH_GLOSSARY_ITEMS = [
  // =========================================================================
  // DIVISION 1: VOCABULARY & GRAMMAR BRANCH
  // =========================================================================
  
  // --- 1. AFFIXES ---
  {
    id: 'eng-aff-01',
    module: 'affixes',
    division: 'vocab_grammar',
    type: 'term',
    termEn: 'Thermo- (Prefix: Greek)',
    definitionEn: 'A classical Greek combining form denoting heat, thermal energy, or temperature. Used extensively in thermodynamics, thermocouple, and thermoplastic.',
    formula: 'Thermo- + Root (e.g., Dynamics = Thermodynamics)',
    example: 'A thermocouple generates a voltage proportional to the thermal gradient across its junction.',
    termAr: 'البادئة "ثيرمو-" (الدالة على الحرارة)',
    definitionAr: 'بادئة يونانية الأصل تعني "حرارة" أو "حراري". تدخل في تركيب مئات المصطلحات الهندسية مثل الديناميكا الحرارية (Thermodynamics)، والازدواج الحراري (Thermocouple)، واللدائن الحرارية (Thermoplastics).',
    examTip: 'سؤال متكرر: ما هو المعنى الدقيق للبادئة thermo- في كلمة "thermostat"؟ الإجابة: Thermo = heat; stat = stationary (منظم حرارة ثابت).',
    keywords: ['thermo', 'prefix', 'heat', 'thermal', 'temperature']
  },
  {
    id: 'eng-aff-02',
    module: 'affixes',
    division: 'vocab_grammar',
    type: 'term',
    termEn: '-able / -ible (Suffix: Latin)',
    definitionEn: 'A Latin-derived adjectival suffix meaning "capable of being", "fit for", or "tending to". Transforms engineering verbs into passive material properties.',
    formula: 'Verb + -able / -ible -> Adjective (e.g., Deform + able = Deformable)',
    example: 'Copper is highly malleable, meaning it is capable of being hammered or rolled into thin sheets without fracture.',
    termAr: 'اللاحقة "-able / -ible" (القابلية والتوصيف)',
    definitionAr: 'لاحقة لاتينية تضاف لنهاية الأفعال لتحويلها إلى صفات تعبر عن قابلية المادة للخضوع لعملية تصنيعية، مثل قابل للطرق (Malleable)، قابل للاحتراق (Combustible)، وقابل للانضغاط (Compressible).',
    examTip: 'في الامتحان: إذا انتهت الكلمة بـ -able فهي دائماً صفة (Adjective) تعبر عن خاصية المادة.',
    keywords: ['suffix', 'able', 'ible', 'adjective', 'property', 'malleable']
  },
  {
    id: 'eng-aff-03',
    module: 'affixes',
    division: 'vocab_grammar',
    type: 'term',
    termEn: 'Hydro- vs Hygro- (Prefix Distinction)',
    definitionEn: 'Precise lexical distinction: "Hydro-" refers to liquid water or fluid pressure (Hydraulics, Hydroelectric), while "Hygro-" refers specifically to atmospheric moisture or relative humidity (Hygrometer, Hygroscopic).',
    formula: 'Hydro- = Water/Liquid | Hygro- = Moisture/Humidity',
    example: 'A hygrometer measures ambient air humidity, whereas a hydraulic press relies on fluid power transmission.',
    termAr: 'الفرق بين البادئتين Hydro- و Hygro-',
    definitionAr: 'Hydro تدل على الماء السائل وضغط الموائع كالهيدروليكا (Hydraulics)، بينما Hygro تدل على رطوبة الجو والغازات مثل مقياس الرطوبة (Hygrometer) والمواد الماصة للرطوبة (Hygroscopic).',
    examTip: 'فخ امتحاني كلاسيكي: "An instrument that measures humidity in air is a..." -> الإجابة الصحيحة: Hygrometer (وليس Hydrometer الذي يقيس كثافة السوائل).',
    keywords: ['hydro', 'hygro', 'humidity', 'water', 'prefix']
  },

  // --- 2. WORD FORMATION & CONFUSING PAIRS ---
  {
    id: 'eng-wf-01',
    module: 'word_formation',
    division: 'vocab_grammar',
    type: 'term',
    termEn: 'Accuracy vs Precision in Engineering',
    definitionEn: 'Accuracy is the degree of closeness between measured values and the true reference standard. Precision is the degree of mutual agreement or repeatability among repeated independent measurements, regardless of bias.',
    formula: 'Accuracy = Closeness to Truth | Precision = Closeness of Repeatability',
    example: 'A micrometer may yield high precision with four identical readings (10.02, 10.02, 10.02, 10.02 mm), yet possess poor accuracy if the true dimension is 10.50 mm due to zero error.',
    termAr: 'الفرق العلمي بين Accuracy و Precision',
    definitionAr: 'الدقة (Accuracy) تعني مدى قرب القراءة من القيمة الحقيقية المعيارية. بينما الإحكام أو الضبط (Precision) يعني مدى تكرار وتطابق القراءات عند قياس نفس الشيء عدة مرات حتى لو كانت القراءات خاطئة بسبب عطل بالجهاز.',
    examTip: 'سؤال تعريفي دائم في امتحانات شبرا: يطلب رسم أسهم الهدف (Target Bullseye) لشرح الأربع حالات بين دقيق ومحكم.',
    keywords: ['accuracy', 'precision', 'measurements', 'error', 'repeatability']
  },
  {
    id: 'eng-wf-02',
    module: 'word_formation',
    division: 'vocab_grammar',
    type: 'term',
    termEn: 'Stress vs Strain',
    definitionEn: 'Stress (σ) is the internal restoring force exerted per unit cross-sectional area of a material (N/m² or Pa). Strain (ε) is the dimensionless ratio of geometric deformation to original dimension (ΔL / L₀).',
    formula: '\\sigma = \\frac{F}{A} \\quad [\\text{Pa}], \\qquad \\varepsilon = \\frac{\\Delta L}{L_0} \\quad [\\text{Dimensionless}]',
    example: 'When tensile stress exceeds the yield strength, permanent plastic strain develops in the steel specimen.',
    termAr: 'الإجهاد (Stress) مقابل الانفعال (Strain)',
    definitionAr: 'الإجهاد (Stress) هو القوة الداخلية المؤثرة على وحدة المساحات ووحدته باسكال. أما الانفعال (Strain) فهو نسبة التغير في الطول إلى الطول الأصلي وهو كمية لا بعدية (بدون وحدة قياس).',
    examTip: 'تنبيه الامتحان: دائماً اذكر أن Strain لا يملك وحدة قياس (Dimensionless).',
    keywords: ['stress', 'strain', 'mechanics', 'force', 'deformation']
  },

  // --- 3. PASSIVE VOICE IN PROCEDURES ---
  {
    id: 'eng-pass-01',
    module: 'passive_voice',
    division: 'vocab_grammar',
    type: 'rule',
    termEn: 'Past Simple Passive in Experimental Procedures',
    definitionEn: 'The grammatical standard for laboratory reports and completed tests. It emphasizes the physical action applied to the specimen rather than the researcher, omitting the agent ("by us").',
    formula: '\\text{Subject (Specimen/Reagent)} + \\text{was / were} + \\text{Past Participle} + [\\text{Condition}]',
    example: 'Active: "We clamped the steel rod and applied 50 kN load." -> Passive: "The steel rod was clamped and a 50 kN load was applied."',
    termAr: 'المبني للمجهول في الماضي البسيط لخطوات التجارب',
    definitionAr: 'الصيغة الإلزامية في كتابة خطوات المعمل التي تمت بالفعل. يتم تقديم العينة أو الأداة وحذف الفاعل (We, I) لتحقيق الأسلوب العلمي الموضوعي المحايد.',
    examTip: 'قاعدة ذهبية: لا تكتب أبداً "was done by me" أو "was calculated by us" في التقارير الهندسية، بل احذف الفاعل تماماً.',
    keywords: ['passive voice', 'past simple', 'lab report', 'procedure', 'grammar']
  },
  {
    id: 'eng-pass-02',
    module: 'passive_voice',
    division: 'vocab_grammar',
    type: 'rule',
    termEn: 'Present Simple Passive in Operational Principles',
    definitionEn: 'The grammatical standard for describing general engineering facts, continuous industrial cycles, and how mechanisms normally operate.',
    formula: '\\text{Subject} + \\text{is / are} + \\text{Past Participle} + [\\text{Manner / Mechanism}]',
    example: 'Raw bauxite is crushed, dissolved in caustic soda, and filtered to precipitate pure aluminium hydroxide.',
    termAr: 'المبني للمجهول في المضارع البسيط لنظريات العمل',
    definitionAr: 'الصيغة القياسية لوصف العمليات الصناعية المستمرة وكيفية عمل المحركات والآلات بشكل دائم ومستمر كحقائق علمية مثبتة.',
    examTip: 'في الامتحان: استخدم Present Passive لوصف جهاز أو خط إنتاج يعمل باستمرار، واستخدم Past Passive للتجربة التي قمت بها في المعمل.',
    keywords: ['present passive', 'operation', 'mechanism', 'industrial', 'grammar']
  },
  {
    id: 'eng-pass-03',
    module: 'passive_voice',
    division: 'vocab_grammar',
    type: 'rule',
    termEn: 'Modal Passive for Safety & Design Specifications',
    definitionEn: 'Passive voice combined with modal verbs (must be, should be, can be, may be) to express engineering regulations, constraints, and safety tolerances.',
    formula: '\\text{Component} + \\text{Modal (must / should / can)} + \\text{be} + \\text{Past Participle}',
    example: 'All electrical conduits must be grounded, and protective goggles should be worn during arc welding.',
    termAr: 'المبني للمجهول مع الأفعال الناقصة لمواصفات الأمان',
    definitionAr: 'الصيغة المتبعة لكتابة اشتراطات الكود الهندسي ومعايير السلامة المهنية ومواصفات التشغيل القياسية لمنع الحوادث.',
    examTip: 'تفرقة هامة: "must be inspected" تعني فحص إلزامي وجوبي طبقاً للكود؛ بينما "should be inspected" تعني توصية هندسية مفضلة.',
    keywords: ['modal passive', 'safety', 'specifications', 'must be', 'should be']
  },

  // --- 4. CONNECTORS & LOGICAL RELATIONS ---
  {
    id: 'eng-conn-01',
    module: 'connectors',
    division: 'vocab_grammar',
    type: 'rule',
    termEn: 'Due to / Because of vs Therefore / Consequently',
    definitionEn: '"Due to" and "Because of" are prepositions followed by a noun phrase expressing cause. "Therefore" and "Consequently" are conjunctive adverbs followed by an independent clause expressing effect.',
    formula: '\\text{Effect} + \\text{due to / because of} + \\text{Noun Phrase.} \\quad \\longleftrightarrow \\quad \\text{Cause;} + \\text{therefore, } + \\text{Clause.}',
    example: 'Due to excessive thermal expansion, the railway tracks buckled. -> The tracks expanded excessively; consequently, they buckled.',
    termAr: 'قواعد روابط السبب والنتيجة (Due to مقابل Therefore)',
    definitionAr: 'Due to و Because of يأتي بعدهما اسم أو شبه جملة اسمية لبيان السبب. أما Therefore و Consequently فتأتيان في بداية جملة جديدة كاملة لبيان النتيجة المترتبة على ذلك.',
    examTip: 'خطأ شائع في الفاينال: كتابة "Due to it was hot". الصواب: "Due to high temperature" أو "Because it was hot".',
    keywords: ['connectors', 'due to', 'because of', 'therefore', 'cause effect']
  },
  {
    id: 'eng-conn-02',
    module: 'connectors',
    division: 'vocab_grammar',
    type: 'rule',
    termEn: 'Technical Conditionals (Zero & First)',
    definitionEn: 'Zero Conditional states deterministic physical laws (If + Present, Present). First Conditional predicts operational behavior under defined conditions (If + Present, Will + Verb).',
    formula: '\\text{Zero: } \\text{If } P \\text{ increases, } V \\text{ decreases.} \\quad | \\quad \\text{First: } \\text{If the pump fails, the alarm will sound.}',
    example: 'If a metal is heated, it expands. / Unless the coolant is replenished, the cutting tool will overheat.',
    termAr: 'الجمل الشرطية الهندسية (الحالة الصفرية والأولى)',
    definitionAr: 'الحالة الصفرية تعبر عن القوانين الطبيعية المؤكدة (إذا زاد الضغط قل الحجم). بينما الحالة الأولى تعبر عن سيناريوهات التشغيل والإنذار المحتملة في الموقع.',
    examTip: 'تذكر أن "Unless" تعني "If not" ويليها دائماً فعل مثبت وليس منفي.',
    keywords: ['conditionals', 'if', 'unless', 'physical laws', 'engineering scenarios']
  },

  // --- 5. DIMENSIONS & MEASUREMENTS ---
  {
    id: 'eng-dim-01',
    module: 'dimensions',
    division: 'vocab_grammar',
    type: 'rule',
    termEn: 'Dimension Pairs (Adjective vs Noun Syntax)',
    definitionEn: 'Formulation for expressing dimensions: Object + is + Number + Unit + Adjective (long/wide/high), OR Object + has a + Noun (length/width/height) + of + Number + Unit.',
    formula: '\\text{Syntax A: } X \\text{ is } 12\\text{ m long.} \\quad \\longleftrightarrow \\quad \\text{Syntax B: } X \\text{ has a length of } 12\\text{ m.}',
    example: 'The shaft is 50 mm in diameter. -> The shaft has a diameter of 50 mm. -> The diameter of the shaft is 50 mm.',
    termAr: 'صيغ كتابة الأبعاد الهندسية (الصفات والأسماء)',
    definitionAr: 'تراكيب التعبير عن الأبعاد: إما باستخدام الصفة (long, wide, deep, thick) في نهاية الجملة، أو باستخدام الاسم (length, width, depth, thickness) مع حرف الجر of.',
    examTip: 'سؤال إعادة صياغة مكرر: "Rewrite using the noun form of deep": "The foundation is 10 m deep" -> "The foundation has a depth of 10 m".',
    keywords: ['dimensions', 'length', 'width', 'depth', 'height', 'measurements']
  },

  // =========================================================================
  // DIVISION 2: TECHNICAL WRITING & REPORTS BRANCH
  // =========================================================================

  // --- 6. REPORT STRUCTURE & ABSTRACT ---
  {
    id: 'eng-rep-01',
    module: 'report_structure',
    division: 'reports_writing',
    type: 'template',
    termEn: 'Executive Summary / Abstract Blueprint',
    definitionEn: 'A concise, standalone synthesis of the entire engineering report structured into four mandatory elements: 1. Purpose/Problem, 2. Methodology/Procedure, 3. Key Results/Data, 4. Core Conclusion/Recommendation.',
    formula: '\\text{Abstract} = \\text{Objective (1 sent.)} + \\text{Method (2 sent.)} + \\text{Key Findings (2 sent.)} + \\text{Conclusion (1 sent.)}',
    example: '"This report investigates the tensile strength of composite rebar. Three specimens were subjected to axial tension up to failure using an Instron machine. Ultimate tensile strength averaged 850 MPa, exceeding the ASTM standard by 12%. Therefore, the material is recommended for structural implementation."',
    termAr: 'هيكل وقالب الملخص التنفيذي (Executive Summary)',
    definitionAr: 'ملخص شامل ومكثف (150-250 كلمة) يقرأه المدير أو المشرف الفني بشكل مستقل. يحتوي إجبارياً على: هدف التقرير، طريقة الاختبار، أبرز النتائج بالأرقام، والتوصية النهائية.',
    examTip: 'سؤال فاينال شبرا الثابت: "What are the four essential elements that must be included in a technical report abstract?"',
    keywords: ['abstract', 'executive summary', 'report structure', 'methodology', 'results']
  },
  {
    id: 'eng-rep-02',
    module: 'report_structure',
    division: 'reports_writing',
    type: 'template',
    termEn: 'Standard Hierarchy of Engineering Report Sections',
    definitionEn: 'The canonical sequential order of technical report sections: 1. Title Page, 2. Table of Contents, 3. Abstract, 4. Introduction, 5. Equipment & Methodology, 6. Results & Data, 7. Discussion, 8. Conclusions, 9. Recommendations, 10. References & Appendices.',
    formula: '\\text{Title} \\to \\text{Abstract} \\to \\text{Intro} \\to \\text{Method} \\to \\text{Results} \\to \\text{Discussion} \\to \\text{Conclusion} \\to \\text{References}',
    example: 'Raw experimental data tables and Python simulation scripts are placed in Appendix A, while key summary curves appear in Section 6 (Results).',
    termAr: 'الترتيب القياسي المعتمد لأقسام التقرير الهندسي',
    definitionAr: 'الترتيب المنطقي الصارم لأجزاء التقرير: الغلاف ثم الفهرس ثم الملخص ثم المقدمة ثم الأجهزة وطريقة العمل ثم النتائج ومناقشتها ثم الاستنتاجات والتوصيات، وأخيراً المراجع والملاحق.',
    examTip: 'سؤال رتب الأقسام التالية: يعطيك 5 أقسام مبعثرة ويطلب ترتيبها كما تظهر في التقرير الفني المعتمد.',
    keywords: ['report hierarchy', 'introduction', 'conclusion', 'appendices', 'sections']
  },

  // --- 7. MECHANISM DESCRIPTION ---
  {
    id: 'eng-mech-01',
    module: 'mechanism_desc',
    division: 'reports_writing',
    type: 'template',
    termEn: '4-Stage Model for Mechanism Description',
    definitionEn: 'The rigorous pedagogical framework for describing any mechanical or electrical device: 1. Identification and General Function, 2. Working Principle, 3. Detailed Component Breakdown, 4. Operating Cycle Walkthrough.',
    formula: '1.\\;\\text{Definition} \\;\\longrightarrow\\; 2.\\;\\text{Principle} \\;\\longrightarrow\\; 3.\\;\\text{Components} \\;\\longrightarrow\\; 4.\\;\\text{Cycle}',
    example: 'A Vernier Caliper is a precision measuring instrument designed to measure internal/external dimensions. It operates on the vernier differential scale principle. It comprises a main scale, sliding vernier scale, measuring jaws, and depth probe.',
    termAr: 'النموذج الرباعي للوصف الفني للأجهزة الهندسية',
    definitionAr: 'المنهجية المعتمدة لوصف أي جهاز هندسي: 1. التعريف والوظيفة -> 2. نظرية العمل -> 3. حصر المكونات وأماكنها وخاماتها -> 4. شرح دورة التشغيل كاملة.',
    examTip: 'عند وصف أي جهاز في الامتحان، قسم إجابتك بعناوين جانبية طبقاً لهذه المراحل الأربع لتحصل على الدرجة النهائية.',
    keywords: ['mechanism description', 'components', 'working principle', 'caliper', 'device']
  },
  {
    id: 'eng-mech-02',
    module: 'mechanism_desc',
    division: 'reports_writing',
    type: 'rule',
    termEn: 'Spatial and Structural Relational Prepositions',
    definitionEn: 'Specific engineering prepositions designating mechanical assembly and spatial attachment: mounted on, housed in, enclosed within, pivoted around, bolted to, concentric with, coaxial with.',
    formula: '\\text{Component A} + \\text{is [prepositional phrase]} + \\text{Component B}',
    example: 'The rotor is mounted on high-grade ceramic bearings and enclosed within a cast-iron casing.',
    termAr: 'حروف الجر المكانية لوصف تجميع الأجزاء الميكانيكية',
    definitionAr: 'حروف جر وتعبيرات هندسية دقيقة لوصف كيفية اتصال وتثبيت أجزاء الماكينة ببعضها (مثبت على، محاط بـ، متمحور حول، مربوط بمسامير مع).',
    examTip: 'تجنب استخدام "put on" أو "near to" واكتب بدلاً منها "mounted on" أو "adjacent to" للحصول على أسلوب هندسي احترافي.',
    keywords: ['spatial prepositions', 'mounted on', 'enclosed within', 'assembly', 'components']
  },

  // --- 8. PROCESS DESCRIPTION ---
  {
    id: 'eng-proc-01',
    module: 'process_desc',
    division: 'reports_writing',
    type: 'template',
    termEn: 'Process Sequence Markers & Time Transitions',
    definitionEn: 'Standard discourse markers for documenting sequential stages of an industrial or experimental process: Initially, In the first phase, Simultaneously, Concurrently, Subsequently, Following this, Ultimately.',
    formula: '\\text{Initially, } \\dots \\longrightarrow \\text{Subsequently, } \\dots \\longrightarrow \\text{Concurrently, } \\dots \\longrightarrow \\text{Finally, } \\dots',
    example: 'Initially, hard water enters the lime reactor. Subsequently, calcium ions precipitate as CaCO3. Simultaneously, sludge is drawn from the conical hopper.',
    termAr: 'ظروف التتابع والترتيب الزمني لمراحل العمليات',
    definitionAr: 'كلمات الربط التي تحدد التتابع الزمني للعملية الصناعية بدقة، وخاصة العمليات التي تحدث بالتوازي في نفس الوقت (Concurrently / Simultaneously).',
    examTip: 'كلمة "Simultaneously" تعني حدوث خطوتين في آن واحد معاً وتعد من أهم الكلمات في وصف دورات التبريد ومحطات المعالجة.',
    keywords: ['process description', 'sequence markers', 'initially', 'subsequently', 'simultaneously']
  },

  // --- 9. PROFESSIONAL CORRESPONDENCE ---
  {
    id: 'eng-corr-01',
    module: 'correspondence',
    division: 'reports_writing',
    type: 'template',
    termEn: 'Formal Engineering Email Structure',
    definitionEn: 'Standard architecture of professional correspondence: 1. Clear subject line with Project ID, 2. Formal salutation (Dear Eng. / Dr.), 3. Context & Objective, 4. Action details/attachments, 5. Specific Call to Action (deadline), 6. Professional sign-off.',
    formula: '\\text{Subject} \\to \\text{Salutation} \\to \\text{Context} \\to \\text{Details} \\to \\text{Call to Action} \\to \\text{Sign-off}',
    example: 'Subject: Inspection Report - Foundation Concrete Core Tests [Project #402]\nDear Dr. Ahmed,\nAttached is the compression test report for Zone B. All cores achieved 35 MPa target. Please confirm approval by Thursday 2 PM to initiate column casting.\nBest regards,\nEng. Amr (Site Engineer)',
    termAr: 'الهيكل القياسي للإيميل الهندسي الرسمي',
    definitionAr: 'البنية الرسمية لمراسلات المهندسين: عنوان واضح برقم المشروع، تحية مهنية، الدخول المباشر في صلب الموضوع، تحديد الإجراء المطلوب بموعد محدد (Call to Action)، وتوقيع يحمل المسمى الوظيفي ورقم الهاتف.',
    examTip: 'في الامتحان: ابتعد عن التحيات غير الرسمية مثل "Hi" أو "Hey" واستخدم "Dear Eng. [Last Name]"، واختم بـ "Best regards" أو "Sincerely".',
    keywords: ['email structure', 'formal correspondence', 'subject line', 'salutation', 'call to action']
  },
  {
    id: 'eng-corr-02',
    module: 'correspondence',
    division: 'reports_writing',
    type: 'template',
    termEn: 'Internal Engineering Memorandum (Memo) Format',
    definitionEn: 'Standard header format for intra-organization technical communication: TO (Recipient & Title), FROM (Sender & Title), DATE, SUBJECT (Concise & specific). Followed by Summary, Discussion, and Action Required.',
    formula: '\\text{MEMO HEADER: } \\mathbf{TO:} \\dots \\quad \\mathbf{FROM:} \\dots \\quad \\mathbf{DATE:} \\dots \\quad \\mathbf{SUBJECT:} \\dots',
    example: 'MEMORANDUM\nTO: Maintenance Dept. Manager\nFROM: Site Electrical Engineer\nDATE: 12 November 2026\nSUBJECT: Transformer Overheating in Substation #3\n\nSUMMARY: Phase B temperature exceeded 95°C during peak load...',
    termAr: 'تنسيق وقالب المذكرة الداخلية الفنية (Memo)',
    definitionAr: 'المذكرة الرسمية الموجهة داخلياً بين أقسام الشركة أو الموقع. تتميز بوجود ترويسة ثابتة (إلى، من، التاريخ، الموضوع) وتتميز بالتركيز والصرامة دون مقدمات إنشائية.',
    examTip: 'سؤال عملي مكرر: اكتب Memo من 80 كلمة توجهها لقسم الصيانة للإبلاغ عن تلف مضخة وطلب استبدالها.',
    keywords: ['memo', 'memorandum', 'internal communication', 'header', 'site report']
  },

  // --- 10. EDITING & CLARITY ---
  {
    id: 'eng-edit-01',
    module: 'style_clarity',
    division: 'reports_writing',
    type: 'rule',
    termEn: 'Eliminating Wordiness & Technical Redundancy',
    definitionEn: 'The engineering imperative to replace verbose conversational phrases with concise, precise technical verbs and single words to maintain rigor and clarity.',
    formula: '\\text{Verbose Phrase} \\;\\xrightarrow{\\quad\\text{Prune}\\quad}\\; \\text{Concise Technical Word}',
    example: '"At the present moment in time" -> "Currently" | "Made an examination of" -> "Examined" | "Owing to the fact that" -> "Because" | "In the near future" -> "Soon / Shortly".',
    termAr: 'قواعد حذف الحشو والترهل اللغوي (Conciseness)',
    definitionAr: 'القاعدة الأساسية في الكتابة الهندسية: "أقل عدد من الكلمات، وأكبر قدر من المعنى الدقيق". استبدال العبارات المطولة المترهلة بكلمات موجزة مباشرة.',
    examTip: 'سؤال تحريري مباشر: يعطيك فقرة من 4 أسطر ويطلب اختصارها للنصف دون فقدان أي معلومة فنية أو رقمية.',
    keywords: ['conciseness', 'wordiness', 'editing', 'redundancy', 'clarity']
  },
  {
    id: 'eng-edit-02',
    module: 'style_clarity',
    division: 'reports_writing',
    type: 'rule',
    termEn: 'Avoiding Subjective and Vague Adjectives',
    definitionEn: 'Engineering specifications reject subjective adjectives (big, small, very fast, cheap, hot) in favor of measurable, quantifiable quantitative metrics and standardized tolerances.',
    formula: '\\text{Subjective Adjective} \\;\\xrightarrow{\\quad\\text{Quantify}\\quad}\\; \\text{Exact Numerical Metric}',
    example: 'Poor: "The pump moves a large amount of water quickly." -> Professional: "The centrifugal pump delivers 250 m³/h at 1450 RPM."',
    termAr: 'استبدال التقديرات الذاتية الغامضة بالقيم الرقمية',
    definitionAr: 'تجنب استخدام كلمات عامة وغير محددة (مثل: كبير، سريع جداً، رخيص) واستبدالها دائماً بأرقام دقيقة ووحدات قياس قياسية (مثل: 250 م³/ساعة، عند 1450 دورة/دقيقة).',
    examTip: 'تنبيه الامتحان: الجملة المقبولة هندسياً هي التي يستطيع مهندس آخر تكرارها والتحقق منها معملياً بالأرقام.',
    keywords: ['quantification', 'metrics', 'subjective', 'tolerances', 'precision']
  }
];
