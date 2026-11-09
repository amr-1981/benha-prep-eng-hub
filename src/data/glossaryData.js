// Comprehensive Glossary, Laws & Exam Memorization Bank
// Tailored for Engineering Chemistry - Preparatory Year - Faculty of Engineering at Shoubra (FES)

export const GLOSSARY_MODULES = [
  { id: 'all', label: 'جميع الأقسام والوحدات', icon: 'Sparkles', color: 'text-cyan-400' },
  { id: 'water', label: '١. تكنولوجيا ومعالجة المياه', icon: 'Droplets', color: 'text-blue-400' },
  { id: 'fuels', label: '٢. الوقود والاحتراق', icon: 'Flame', color: 'text-amber-400' },
  { id: 'corrosion', label: '٣. التآكل وحماية المعادن', icon: 'ShieldAlert', color: 'text-rose-400' },
  { id: 'cement', label: '٤. الأسمنت ومواد البناء', icon: 'Building2', color: 'text-emerald-400' },
  { id: 'polymers', label: '٥. البوليمرات ومواد التزييت', icon: 'Layers', color: 'text-purple-400' }
];

export const GLOSSARY_TYPES = [
  { id: 'all', label: 'الكل (مصطلحات + قوانين + تعليلات)' },
  { id: 'definition', label: '📖 مصطلحات وتعريفات علمية' },
  { id: 'law', label: '📐 قوانين ومعادلات رياضية' },
  { id: 'reasoning', label: '❓ علل واذكر السبب العلمي (Why)' }
];

export const GLOSSARY_ITEMS = [
  // ==================== MODULE 1: WATER TECHNOLOGY ====================
  {
    id: 'w-def-01',
    module: 'water',
    type: 'definition',
    termAr: 'عسر الماء',
    termEn: 'Water Hardness',
    definitionEn: 'The characteristic of water that prevents easy lathering with soap due to dissolved divalent metal cations, primarily Calcium (Ca²⁺) and Magnesium (Mg²⁺), forming an insoluble precipitate (soap curd / scum).',
    definitionAr: 'خاصية في الماء تمنع تكوّن الرغوة بسهولة مع الصابون، وتنتج أساساً عن وجود أيونات الكالسيوم (Ca²⁺) والمغنيسيوم (Mg²⁺) الذائبة، وتؤدي لتكوين راسب صلب غير ذائب يُعرف برغوة الصابون غير القابلة للذوبان (Curd / Scum).',
    keywords: ['أملاح الكالسيوم والمغنيسيوم', 'رغوة الصابون', 'Ca²⁺', 'Mg²⁺'],
    examTip: 'يُطلب التمييز دائماً بين العسر المؤقت والعسر الدائم في جداول المقارنة.'
  },
  {
    id: 'w-def-02',
    module: 'water',
    type: 'definition',
    termAr: 'العسر المؤقت (الكربوني)',
    termEn: 'Temporary Hardness (Carbonate Hardness)',
    definitionEn: 'Hardness caused by dissolved bicarbonates of calcium [Ca(HCO3)2] and magnesium [Mg(HCO3)2]. It is termed "temporary" because it can be readily removed by simple boiling, precipitating insoluble carbonates and hydroxides.',
    definitionAr: 'العسر الناتج عن وجود بيكربونات الكالسيوم Ca(HCO3)2 وبيكربونات المغنيسيوم Mg(HCO3)2 الذائبة، وسُمي مؤقتاً لإمكانية التخلص منه بسهولة بمجرد غليان الماء حيث تتحلل البيكربونات وتترسب ككربونات غير ذائبة.',
    keywords: ['بيكربونات الكالسيوم', 'بيكربونات المغنيسيوم', 'الغليان'],
    formulaDisplay: 'Ca(HCO3)2 ──(Heat)──> CaCO3↓ + H2O + CO2↑',
    examTip: 'سؤال متكرر: لماذا يترسب CaCO3 بالغليان بينما يترسب المغنيسيوم كـ Mg(OH)2؟ لأن Mg(OH)2 أقل ذوبانية بكثير من MgCO3.'
  },
  {
    id: 'w-def-03',
    module: 'water',
    type: 'definition',
    termAr: 'العسر الدائم (غير الكربوني)',
    termEn: 'Permanent Hardness (Non-Carbonate Hardness)',
    definitionEn: 'Hardness caused by dissolved chlorides (Cl⁻), sulfates (SO4²⁻), and nitrates (NO3⁻) of calcium and magnesium (e.g., CaCl2, CaSO4, MgCl2, MgSO4). It cannot be removed by boiling and requires chemical precipitation (Lime-Soda) or ion exchange.',
    definitionAr: 'العسر الناتج عن وجود أملاح الكبريتات (SO4²⁻) والكلوريدات (Cl⁻) والنيترات (NO3⁻) الذائبة للكالسيوم والمغنيسيوم (مثل CaCl2, CaSO4, MgCl2, MgSO4). لا يزول بالغليان العادي ويتطلب معالجة كيميائية كالجير والصودا أو التبادل الأيوني.',
    keywords: ['كبريتات وكلوريدات', 'لا يزول بالغليان', 'معالجة كيميائية'],
    examTip: 'الشوائب المسببة له: CaSO4, CaCl2, MgSO4, MgCl2.'
  },
  {
    id: 'w-law-01',
    module: 'water',
    type: 'law',
    termAr: 'مكافئ كربونات الكالسيوم',
    termEn: 'CaCO3 Equivalent',
    definitionEn: 'The universal standard baseline for expressing concentrations of all hardness-causing salts in water on an equivalent scale of calcium carbonate (CaCO3), based on its equivalent weight of 50 g/eq and molar mass of 100 g/mol.',
    definitionAr: 'المعيار الموحد للتعبير عن تركيزات جميع الأملاح المسببة للعسر على أساس متكافئ من CaCO3 (نظراً لسهولة كتلته المكافئة = 50 وكتلته الجزيئية = 100).',
    formula: 'CaCO3 Eq (mg/L) = [ Mass of Salt (mg/L) × 50 ] / [ Equivalent Weight of Salt ]',
    variables: [
      { sym: 'Mass of Salt', desc: 'تركيز الملح بالـ mg/L أو ppm' },
      { sym: 'Eq. Wt', desc: 'الوزن المكافئ للملح (الوزن الجزيئي ÷ التكافؤ الكلي)' },
      { sym: '50', desc: 'الوزن المكافئ لكربونات الكالسيوم CaCO3 (100 / 2)' }
    ],
    examTip: 'احفظ الأوزان المكافئة الشائعة: Ca(HCO3)2 = 81, Mg(HCO3)2 = 73, CaSO4 = 68, CaCl2 = 55.5, MgSO4 = 60, MgCl2 = 47.5, CO2 = 22, HCl = 36.5.'
  },
  {
    id: 'w-law-02',
    module: 'water',
    type: 'law',
    termAr: 'كمية الجير التجاري المطلوب لمعالجة العسر',
    termEn: 'Commercial Lime Required',
    definitionEn: 'The stoichiometric equation calculating the mass of commercial hydrated lime [Ca(OH)2] required to precipitate magnesium salts, bicarbonates, dissolved carbon dioxide, and free mineral acids.',
    definitionAr: 'القانون الحاكم لكمية الجير المطفأ Ca(OH)2 المطلوب إضافتها بالمتر المكعب أو الكيلوجرام لترسيب جميع الأملاح المتفاعلة مع الجير.',
    formula: 'Lime (kg) = (74 / 100) × Σ [ CaCO3 Eq for Lime (mg/L) ] × V (L) × 10⁻⁶ × (100 / % Purity)',
    variables: [
      { sym: '74', desc: 'الوزن الجزيئي للجير النقي Ca(OH)2' },
      { sym: '100', desc: 'الوزن الجزيئي لـ CaCO3' },
      { sym: 'Σ Eq for Lime', desc: 'مجموع مكافئات: Ca(HCO3)2 + 2×Mg(HCO3)2 + MgSO4 + MgCl2 + CO2 + HCl - NaAlO2' },
      { sym: 'V', desc: 'حجم الماء المعالج باللترات' },
      { sym: '% Purity', desc: 'نسبة نقاوة الجير التجاري المعطاة في المسألة' }
    ],
    examTip: 'انتبه: أملاح المغنيسيوم تستهلك جير مضاعف (2 مكافئ في البيكربونات، و1 مكافئ في باقي أملاح المغنيسيوم) لترسيبها كـ Mg(OH)2.'
  },
  {
    id: 'w-law-03',
    module: 'water',
    type: 'law',
    termAr: 'كمية رماد الصودا التجاري المطلوب',
    termEn: 'Commercial Soda Required',
    definitionEn: 'The stoichiometric equation calculating the mass of commercial soda ash (Na2CO3) required to precipitate permanent calcium and magnesium hardness salts into insoluble calcium carbonate.',
    definitionAr: 'القانون الحاكم لكمية كربونات الصوديوم Na2CO3 المطلوبة لترسيب جميع أملاح الكالسيوم الدائمة الناتجة والأصلية.',
    formula: 'Soda (kg) = (106 / 100) × Σ [ CaCO3 Eq for Soda (mg/L) ] × V (L) × 10⁻⁶ × (100 / % Purity)',
    variables: [
      { sym: '106', desc: 'الوزن الجزيئي لرماد الصودا النقي Na2CO3' },
      { sym: 'Σ Eq for Soda', desc: 'مجموع مكافئات أملاح الكالسيوم والمغنيسيوم الدائمة: CaSO4 + CaCl2 + MgSO4 + MgCl2 + HCl' }
    ],
    examTip: 'بيكربونات الكالسيوم والمغنيسيوم لا تستهلك أي صودا (Soda = 0).'
  },
  {
    id: 'w-def-04',
    module: 'water',
    type: 'definition',
    termAr: 'الهشاشة الكاوية في الغلايات',
    termEn: 'Caustic Embrittlement',
    definitionEn: 'A localized intercrystalline cracking and mechanical failure of boiler steel plates at high-stress joints and rivets, caused by caustic soda (NaOH) concentration resulting from the hydrolysis of sodium carbonate (Na2CO3) at high boiler pressures.',
    definitionAr: 'نوع خطير من التآكل الإجهادي بين الحبيبات يصيب جدران الغلايات الفولاذية عند مناطق الثنيات والمسامير (Rivets) نتيجة ترسب وتركيز هيدروكسيد الصوديوم (NaOH) الناتج عن التحلل الحراري لكربونات الصوديوم الزائدة عند درجات الحرارة والضغوط العالية.',
    keywords: ['تآكل إجهادي', 'NaOH كاوٍ', 'مسامير الغلاية', 'تشقق الفولاذ'],
    examTip: 'طريقة الوقاية: إضافة فوسفات الصوديوم (Na3PO4) كبديل للصودا، أو إضافة اللجنين والتانين لسد المسام الدقيقة.'
  },
  {
    id: 'w-why-01',
    module: 'water',
    type: 'reasoning',
    termAr: 'علل: إضافة فوسفات الصوديوم إلى مياه الغلايات البخارية؟',
    termEn: 'Why Add Sodium Phosphate to Boiler Feedwater?',
    definitionEn: 'Sodium phosphate (Na3PO4) reacts with residual hardness ions (Ca²⁺, Mg²⁺) in boiler feedwater to form soft, non-adherent tricalcium phosphate [Ca3(PO4)2] sludge that is easily removed via blowdown, while controlling alkalinity and preventing caustic embrittlement.',
    definitionAr: '١) لترسيب أيونات الكالسيوم المتبقية على هيئة راسب رخو ناعم رخامي من فوسفات الكالسيوم Ca3(PO4)2 يسهل التخلص منه بعملية التفويج (Blowdown) بدلاً من تكوين قشور صلبة كلسية.\n٢) لمنع ظاهرة الهشاشة الكاوية (Caustic Embrittlement) لأن الفوسفات ينظم القاعدية دون إطلاق هيدروكسيد صوديوم حر زائد.',
    keywords: ['تكوين راسب رخو', 'سهولة التفويج', 'منع الهشاشة الكاوية']
  },
  {
    id: 'w-why-02',
    module: 'water',
    type: 'reasoning',
    termAr: 'علل: استخدام محلول منظم (Buffer pH=10) أثناء معايرة العسر بـ EDTA؟',
    termEn: 'Why Use Buffer Solution (pH = 10) in EDTA Hardness Titration?',
    definitionEn: 'The NH4OH/NH4Cl buffer maintains the solution strictly at pH = 10 because the metal-Eriochrome Black T (Mg-EBT) indicator complex is stable only between pH 9 and 10, ensuring a sharp wine-red to sky-blue endpoint transition without precipitating metal hydroxides.',
    definitionAr: 'لأن متراكب الكالسيوم والمغنيسيوم مع كاشف الإريوكروم بلاك تي (Mg-EBT) ومراكب الـ EDTA يكون مستقراً تماماً وثابتاً عند الأس الهيدروجيني pH = 10 فقط. إذا انخفض الـ pH عن 10 فإن متراكب الدليل يتفكك، وإذا زاد عن 10 تترسب أيونات الكالسيوم والمغنيسيوم كهيدروكسيدات وتفشل المعايرة.',
    keywords: ['استقرار متراكب EDTA', 'EBT', 'pH=10', 'منع ترسب الهيدروكسيدات']
  },

  // ==================== MODULE 2: FUELS & COMBUSTION ====================
  {
    id: 'f-def-01',
    module: 'fuels',
    type: 'definition',
    termAr: 'القيمة الحرارية العليا للوقود',
    termEn: 'Gross / Higher Calorific Value (GCV / HCV)',
    definitionEn: 'The total quantity of heat liberated when a unit mass (or volume) of fuel is burned completely and all combustion products (especially water vapor) are cooled back to 15°C, condensing steam and recovering its latent heat of vaporization.',
    definitionAr: 'إجمالي كمية الحرارة المنطلقة عند احتراق وحدة كتلة (1 كجم) من الوقود الصلب/السائل أو وحدة حجم (1 م³) من الوقود الغازي احتراقاً تاماً بالأكسجين، مع تبريد جميع نواتج الاحتراق إلى درجة حرارة الغرفة القياسية (15°C إلى 25°C) وتكثيف بخار الماء الناتج والاستفادة من حرارته الكامنة للتكثيف.',
    keywords: ['احتراق تام', 'تكثيف بخار الماء', 'الحرارة الكامنة'],
    examTip: 'تُقاس عملياً بواسطة جهاز المسعر القنبلي (Bomb Calorimeter).'
  },
  {
    id: 'f-def-02',
    module: 'fuels',
    type: 'definition',
    termAr: 'القيمة الحرارية الصغرى للوقود',
    termEn: 'Net / Lower Calorific Value (NCV / LCV)',
    definitionEn: 'The net usable heat released when a unit quantity of fuel is burned completely and the resulting water vapor escapes with hot flue gases into the exhaust without condensing (latent heat of steam is not recovered).',
    definitionAr: 'صافي كمية الحرارة المستفادة فعلياً عند احتراق 1 كجم من الوقود عندما يُسمح لبخار الماء الناتج بالهروب مع غازات العادم الساخنة دون تكثيف (الحرارة الفعلية المستغلة في الغلايات والأفران الهندسية).',
    keywords: ['هروب بخار الماء', 'دون تكثيف', 'الحرارة الفعلية'],
    formulaDisplay: 'NCV = GCV - (Mass of Water Vapor × Latent Heat of Steam: 587 kcal/kg)'
  },
  {
    id: 'f-law-01',
    module: 'fuels',
    type: 'law',
    termAr: 'معادلة دولونج للقيمة الحرارية العليا',
    termEn: "Dulong's Formula for GCV",
    definitionEn: 'An empirical equation used to compute the theoretical gross calorific value (GCV) of solid or liquid fuels from their ultimate elemental weight percentages of Carbon, Hydrogen, Oxygen, and Sulfur.',
    definitionAr: 'المعادلة النظرية المعتمدة لحساب القيمة الحرارية للوقود من معرفة التحليل العنصري النهائي (Ultimate Analysis) للكربون والهيدروجين والأكسجين والكبريت.',
    formula: 'GCV (kcal/kg) = (1 / 100) × [ 8080 C + 34500 (H - O / 8) + 2240 S ]',
    variables: [
      { sym: 'C, H, O, S', desc: 'النسب المئوية الكتلية لكل عنصر في عينة الوقود' },
      { sym: '8080', desc: 'الحرارة المنطلقة من احتراق 1 كجم كربون (kcal/kg)' },
      { sym: '34500', desc: 'الحرارة المنطلقة من احتراق 1 كجم هيدروجين نقي (kcal/kg)' },
      { sym: '(H - O / 8)', desc: 'الهيدروجين المتاح للاحتراق الفعلي (Available Hydrogen)' },
      { sym: '2240', desc: 'الحرارة المنطلقة من احتراق 1 كجم كبريت (kcal/kg)' }
    ],
    examTip: 'سؤال علل متكرر: لماذا يُطرح O/8 من الهيدروجين في معادلة دولونج؟ لأن الأكسجين في الوقود يتحد كيميائياً مع 8 أمثال وزنه من الهيدروجين مكوناً ماءً خاملاً غير قابل للاشتعال.'
  },
  {
    id: 'f-law-02',
    module: 'fuels',
    type: 'law',
    termAr: 'حساب القيمة الحرارية الصغرى NCV',
    termEn: 'Net Calorific Value Equation',
    definitionEn: 'The thermodynamic formula relating NCV to GCV by deducting the latent heat of condensation of water formed during combustion (NCV = GCV - 0.09 × %H × 587 cal/g).',
    definitionAr: 'طرح الحرارة الكامنة لتكثيف بخار الماء من القيمة الحرارية العليا.',
    formula: 'NCV (kcal/kg) = GCV - [ (0.09 × H% + 0.01 × Moisture%) × 587 ]',
    variables: [
      { sym: '0.09 × H%', desc: 'كل 1 جم هيدروجين ينتج 9 جم ماء عند الاحتراق (2H2 + O2 -> 2H2O)' },
      { sym: 'Moisture%', desc: 'النسبة المئوية للرطوبة الحرة الأولية في عينة الوقود' },
      { sym: '587', desc: 'الحرارة الكامنة لتبخير الماء بالكيلوكالوري/كجم (Latent Heat of Steam)' }
    ]
  },
  {
    id: 'f-def-03',
    module: 'fuels',
    type: 'definition',
    termAr: 'الرقم الأوكتاني للبنزين',
    termEn: 'Octane Number (ON)',
    definitionEn: 'A standardized rating measuring the anti-knock resistance of gasoline (petrol) in spark-ignition (SI) internal combustion engines, equivalent to the volume percentage of isooctane in a blend with n-heptane.',
    definitionAr: 'مقياس لمدى مقاومة وقود البنزين لظاهرة الخبط والفرقعة (Knocking) داخل محركات الاحتراق الداخلي التي تعمل بالشرارة (Spark Ignition Engines). يُعرّف بأنه النسبة المئوية الحجمية لمادة الآيزوأوكتان (Iso-octane, ON = 100) في خليط قياسي مع الهبتان العادي (n-Heptane, ON = 0) والذي يعطي نفس أداء الوقود المختبر.',
    keywords: ['مقاومة الخبط', 'محركات البنزين SI', 'الآيزوأوكتان 100', 'الهبتان العادي 0'],
    examTip: 'كلما زاد الرقم الأوكتاني زادت كفاءة المحرك وقدرته على تحمل نسب انضغاط أعلى (Compression Ratio).'
  },
  {
    id: 'f-def-04',
    module: 'fuels',
    type: 'definition',
    termAr: 'الرقم السيتاني لوقود الديزل',
    termEn: 'Cetane Number (CN)',
    definitionEn: 'A rating measuring the ignition delay and auto-ignition readiness of diesel fuel in compression-ignition (CI) engines, defined as the volume percentage of n-cetane in a reference blend with α-methylnaphthalene.',
    definitionAr: 'مقياس لسرعة الاشتعال الذاتي وسهولة بدء التشغيل (Ignition Delay) في محركات الديزل التي تعمل بالضغط (Compression Ignition Engines). يُعرّف بأنه النسبة المئوية للسيتان السداسي عشري (n-Cetane, CN = 100) في خليط مع ألفا-ميثيل نافثالين (α-Methyl naphthalene, CN = 0).',
    keywords: ['سرعة الاشتعال الذاتي', 'محركات الديزل CI', 'فترة تأخر الاشتعال', 'n-Cetane = 100']
  },
  {
    id: 'f-why-01',
    module: 'fuels',
    type: 'reasoning',
    termAr: 'علل: لماذا لا يصلح وقود الديزل ذو الرقم السيتاني العالي لمحركات البنزين؟',
    termEn: 'Why High Cetane Fuel is Unsuitable for Gasoline Engines?',
    definitionEn: 'Diesel fuel with a high Cetane rating ignites rapidly under pressure; when introduced into a spark-ignition petrol engine, it causes premature auto-ignition (knocking and pre-ignition) before the spark plug fires, damaging pistons and engine cylinders.',
    definitionAr: 'لأن محركات البنزين تتطلب وقوداً يقاوم الاشتعال الذاتي المبكر (رقم أوكتاني عالي) ويشتعل بالشرارة الكهربية فقط، بينما وقود الديزل مصمم ليشتعل ذاتياً وفورياً تحت الضغط، فإذا وُضع في محرك بنزين فإنه سيشتعل مسبقاً قبل وصول المكبس لأعلى نقطة مما يسبب فرقعة وتلفاً ميكانيكياً مدمراً (Pre-ignition Knocking).',
    keywords: ['اشتعال مسبق', 'فرق آلية الإشعال', 'تلف المكبس']
  },
  {
    id: 'f-law-03',
    module: 'fuels',
    type: 'law',
    termAr: 'قانون هس للمجموع الحراري الثابت (د. هناء عبد الوهاب)',
    termEn: "Hess's Law of Constant Heat Summation",
    definitionEn: 'Thermodynamic principle stating that the total enthalpy change (ΔH) for a chemical reaction is constant and completely independent of the reaction path or number of intermediate steps, depending solely on the initial and final states.',
    definitionAr: 'التغير في المحتوى الحراري (ΔH) لأي تفاعل كيميائي هو مقدار ثابت يعتمد فقط على طبيعة المتفاعلات والنواتج ولا يعتمد على المسار أو الخطوات التي يسلكها التفاعل.',
    formula: 'ΔH_rxn = Σ [ n · ΔH°f (Products) ] - Σ [ m · ΔH°f (Reactants) ]',
    variables: [
      { sym: 'ΔH_rxn', desc: 'حرارة التفاعل الكلية المقاسة بالكيلو جول أو الكيلو كالوري' },
      { sym: 'ΔH°f', desc: 'حرارة التكوين القياسية لكل مركب (Standard Enthalpy of Formation)' },
      { sym: 'n, m', desc: 'المعاملات الوزنية للمركبات في المعادلة الكيميائية الموزونة' }
    ],
    examTip: 'سؤال تعليل أساسي: لماذا نستعين بقانون هس؟ لحساب حرارة تفاعلات لا يمكن قياسها عملياً داخل المسعر لبطئها الشديد أو خطورتها كاحتراق الكربون لتكوين أول أكسيد الكربون فقط.'
  },
  {
    id: 'f-law-04',
    module: 'fuels',
    type: 'law',
    termAr: 'العلاقة بين التغير في الإنتالبي والطاقة الداخلية (ΔH vs ΔE)',
    termEn: 'Enthalpy and Internal Energy Relation (1st Law)',
    definitionEn: 'The fundamental thermodynamic relationship (ΔH = ΔE + Δn_g · R · T) connecting constant-pressure heat (enthalpy change ΔH) to constant-volume heat (internal energy change ΔE) via the change in gaseous mole count (Δn_g).',
    definitionAr: 'معادلة الربط بين حرارة التفاعل عند ثبوت الضغط (ΔH = q_p) وحرارة التفاعل عند ثبوت الحجم (ΔE = q_v) بافتراض السلوك المثالي للغازات والشغل W = -PΔV.',
    formula: 'ΔH = ΔE + (Δn_gas · R · T)     [ W = - Δn_gas · R · T ]',
    variables: [
      { sym: 'ΔH', desc: 'حرارة التفاعل عند ثبوت الضغط q_p (Enthalpy Change)' },
      { sym: 'ΔE', desc: 'حرارة التفاعل عند ثبوت الحجم q_v (Internal Energy Change)' },
      { sym: 'Δn_gas', desc: 'الفرق بين مولات النواتج الغازية ومولات المتفاعلات الغازية (Σ n_prod - Σ n_react)' },
      { sym: 'R', desc: 'الثابت العام للغازات (1.987 cal/mol·K أو 8.314 J/mol·K)' },
      { sym: 'T', desc: 'درجة الحرارة بالكلفن (T_K = T_°C + 273.15)' }
    ],
    examTip: 'إذا كان التفاعل يتضمن مواد صلبة وسائلة فقط (مثل التفاعلات في المحاليل)، أو كان عدد مولات الغازات متساوياً (Δn = 0)، فإن ΔH = ΔE.'
  },
  {
    id: 'f-law-05',
    module: 'fuels',
    type: 'law',
    termAr: 'معادلة مسعر القنبلة الحراري لحساب حرارة الاحتراق (د. هناء)',
    termEn: 'Bomb Calorimeter Heat Balance Equation',
    definitionEn: 'The heat conservation equation applied in a constant-volume bomb calorimeter to calculate the calorific value of fuels from temperature rise: q_rxn = -[(m_w · s_w + C_bomb) · ΔT].',
    definitionAr: 'الاتزان الحراري لمسعر القنبلة ثابت الحجم لحساب الطاقة الحرارية المنطلقة من احتراق الوقود من الارتفاع في درجة حرارة الماء وجسم المسعر.',
    formula: 'q_rxn = - [ (m_w · s_w · ΔT) + (C_bomb · ΔT) ]',
    variables: [
      { sym: 'q_rxn', desc: 'حرارة التفاعل المنطلقة (تكون سالبة للتفاعلات الطاردة للحرارة)' },
      { sym: 'm_w', desc: 'كتلة الماء المحيط بوعاء القنبلة بالجرام' },
      { sym: 's_w', desc: 'الحرارة النوعية للماء (4.184 J/g·°C أو 1 cal/g·°C)' },
      { sym: 'C_bomb', desc: 'السعة الحرارية لوعاء المسعر ومشتملاته (J/°C)' },
      { sym: 'ΔT', desc: 'مقدار الارتفاع في درجة الحرارة (T_final - T_initial)' }
    ],
    examTip: 'المسعر يعمل عند حجم ثابت (Constant Volume)، لذا فإن الحرارة المقاسة داخله مباشرة هي التغير في الطاقة الداخلية ΔE وليست ΔH.'
  },
  {
    id: 'f-def-05',
    module: 'fuels',
    type: 'definition',
    termAr: 'دالة الحالة ودالة المسار (الديناميكا الحرارية)',
    termEn: 'State Function vs Path Function',
    definitionEn: 'A State Function (e.g., ΔH, ΔE, P, V, T) depends strictly on the equilibrium state of the thermodynamic system regardless of history; a Path Function (e.g., Heat q, Work W) depends directly on the path taken between states.',
    definitionAr: 'دالة الحالة (State Function): خاصية تعتمد قيمتها فقط على الحالة الحالية للنظام (مثل ΔH, ΔE, P, V, T, G) دون النظر للمسار المتخذ للوصول إليها. بينما دالة المسار (Path Function): خاصية تعتمد قيمتها كلياً على كيفية حدوث التحول ومسار الخطوات مثل الحرارة q والشغل W.',
    keywords: ['دالة حالة', 'دالة مسار', 'تعتمد على الحالة الابتدائية والنهائية', 'الشغل والحرارة'],
    examTip: 'سؤال امتحاني معتاد: صنّف كلاً من (ΔH, W, q, E, T) إلى دالة حالة أو دالة مسار.'
  },

  // ==================== MODULE 3: CORROSION & CONTROL ====================
  {
    id: 'c-def-01',
    module: 'corrosion',
    type: 'definition',
    termAr: 'التآكل الكهروكيميائي للمعادن',
    termEn: 'Electrochemical Corrosion',
    definitionEn: 'The spontaneous chemical or electrochemical destruction and degradation of a metal through oxidation-reduction reactions with its surrounding environment (moisture, oxygen, or electrolyte solutions).',
    definitionAr: 'تدهور وتلف تدريجي لسطح المعدن نتيجة تفاعل أكسدة واختزال تلقائي غير مرغوب فيه مع الوسط البيئي المحيط (مثل الرطوبة والأكسجين والمحاليل الإلكتروليتية)، حيث يفقد المعدن إلكتروناته عند منطقة المصعد (Anode) ويتحول إلى أكاسيد أو أملاح مستقرة كيميائياً.',
    keywords: ['تدهور المعدن', 'أكسدة واختزال', 'أنود وكاثود', 'وسط إلكتروليتي']
  },
  {
    id: 'c-def-02',
    module: 'corrosion',
    type: 'definition',
    termAr: 'التآكل الجلفاني',
    termEn: 'Galvanic / Bimetallic Corrosion',
    definitionEn: 'Accelerated localized corrosion that takes place when two metals with different electrode potentials are in electrical contact within a conductive electrolyte; the more active metal acts as the anode and corrodes rapidly.',
    definitionAr: 'تآكل موضعي سريع يحدث عند اتصال معدنين مختلفين في السلسلة الكهروكيميائية اتصالاً كهربياً ومغمورين في إلكتروليت موصل، حيث يتآكل المعدن الأكثر نشاطاً كيميائياً (الأعلى جهداً تأكسدياً - الأنود) بمعدل أسرع بكثير، بينما يحمي المعدن الأقل نشاطاً (الكاثود).',
    keywords: ['معدنان مختلفان', 'السلسلة الكهروكيميائية', 'الأنود يتآكل', 'الكاثود محمي'],
    examTip: 'مثال شهير في امتحانات شبرا: مسامير نحاس في صفيحة فولاذ، أو تثبيت صفيحة زنك مع حديد السفن.'
  },
  {
    id: 'c-def-03',
    module: 'corrosion',
    type: 'definition',
    termAr: 'الحماية بقطب التضحية (المصعد الفدائي)',
    termEn: 'Sacrificial Anode Protection',
    definitionEn: 'A cathodic protection technique in which a more electrochemically active metal (such as Zinc or Magnesium) is electrically connected to the protected steel structure, sacrificing itself as an anode to preserve the steel cathode.',
    definitionAr: 'طريقة كهروكيميائية كاثودية لحماية المنشآت والخطوط الحديدية والمعدنية المدفونة أو المغمورة (مثل خطوط الأنابيب وهياكل السفن وخزانات الوقود)، بتوصيلها بكتل من معدن أكثر نشاطاً كيميائياً (مثل الماغنسيوم Mg أو الزنك Zn) ليضحي بنفسه ويتآكل كأنود بديلاً عن الحديد، مع استبدال هذه الكتل دورياً.',
    keywords: ['حماية كاثودية', 'زنك أو ماغنسيوم', 'تآكل بديل', 'أنابيب مدفونة'],
    formulaDisplay: 'Mg ──> Mg²⁺ + 2e⁻ (Sacrificial Anode Oxidation)'
  },
  {
    id: 'c-def-04',
    module: 'corrosion',
    type: 'definition',
    termAr: 'الحماية بالتيار القسري المفروض',
    termEn: 'Impressed Current Cathodic Protection (ICCP)',
    definitionEn: 'An active cathodic protection system wherein an external direct current (DC) power source supplies continuous electrons to the protected metal structure using non-consumable inert anodes (e.g., graphite or mixed-metal oxides).',
    definitionAr: 'طريقة حماية كاثودية للمنشآت الضخمة يتم فيها تزويد الهيكل الفولاذي بإلكترونات مستمرة من مصدر كهربائي خارجي مستمر (DC Power Source)، مع استخدام أنودات غير قابلة للاستهلاك (Inert Anodes مثل الجرافيت أو البلاتين)، مما يجبر المعدن المراد حمايته ليبقى كاثوداً دائماً.',
    keywords: ['مصدر تيار مستمر DC', 'أنودات خاملة', 'منشآت بحرية ضخمة']
  },
  {
    id: 'c-why-01',
    module: 'corrosion',
    type: 'reasoning',
    termAr: 'علل: خطورة استخدام مسامير من الحديد لتثبيت ألواح من النحاس؟',
    termEn: 'Why are Iron Rivets Dangerous on Copper Sheets?',
    definitionEn: 'Iron is electrochemically more active than copper (anode). When small iron rivets are paired with large copper plates, the unfavorable high cathode-to-anode surface area ratio (A_c / A_a >> 1) concentrates anodic corrosion current density onto the rivets, causing catastrophic rapid shearing.',
    definitionAr: 'لأن الحديد أكثر نشاطاً من النحاس في السلسلة الكهروكيميائية، فيعمل الحديد كمصعد (أنود) بمساحة سطح صغيرة جداً مقارنة بمساحة سطح النحاس الكبيرة (الكاثود). هذا التباين الشديد بين مساحة الأنود الصغيرة والكاثود الضخمة يسبب تركيزاً هائلاً لكثافة تيار التآكل، فيتآكل المسمار الحديدي بسرعة فائقة وتسقط الألواح وتنهار المنشأة.',
    keywords: ['الحديد أنود والنحاس كاثود', 'مساحة أنود صغيرة', 'تركيز كثافة تيار التآكل', 'انهيار سريع']
  },
  {
    id: 'c-why-02',
    module: 'corrosion',
    type: 'reasoning',
    termAr: 'علل: الجلفنة بالزنك أفضل للحديد من الطلاء بالقصدير عند حدوث خدش؟',
    termEn: 'Why Galvanizing (Zinc) is Better Than Tinning When Scratched?',
    definitionEn: 'Zinc is more active than iron (E° = -0.76 V vs -0.44 V) and provides sacrificial cathodic protection even across deep scratches. Conversely, Tin (Sn, E° = -0.14 V) is less active; if breached, the exposed iron becomes the anode and suffers intense localized pitting under the tin layer.',
    definitionAr: 'لأن الزنك أنشط كيميائياً من الحديد؛ فعند حدوث خدش في طبقة الجلفنة، يستمر الزنك في العمل كأنود مضحياً بنفسه لحماية الحديد كاثودياً. بينما القصدير (Sn) أقل نشاطاً من الحديد؛ فعند خدش طبقة القصدير يصبح الحديد المكشوف هو الأنود فيتآكل بضراوة وعمق تحت طبقة القصدير (Pitting Corrosion).',
    keywords: ['الزنك أنود حامي', 'القصدير كاثود ضار عند الخدش', 'تآكل نقري']
  },
  {
    id: 'c-law-01',
    module: 'corrosion',
    type: 'law',
    termAr: 'معادلة نيرنست لحساب جهد الخلية غير القياسي (د. سمر عبد الحميد)',
    termEn: 'Nernst Equation for Electrochemical Cell Potential',
    definitionEn: 'The fundamental electrochemical relation calculating the non-standard electrode or cell potential from standard potential, temperature, transferred electron count, and the reaction quotient: E = E° - (0.0592 / n) · log10(Q).',
    definitionAr: 'المعادلة الكهروكيميائية الأساسية لحساب جهد القطب أو جهد الخلية الجلفانية عند تراكيز أيونية تختلف عن التركيز القياسي (1 M) عند درجة حرارة 25°C.',
    formula: 'E_cell = E°_cell - (0.0592 / n) · log10(Q)',
    variables: [
      { sym: 'E_cell', desc: 'جهد الخلية الفعلي غير القياسي بالفولت' },
      { sym: 'E°_cell', desc: 'جهد الخلية القياسي E°_cathode - E°_anode' },
      { sym: 'n', desc: 'عدد مولات الإلكترونات المنتقلة في تفاعل الأكسدة والاختزال الموزون' },
      { sym: 'Q', desc: 'حاصل قسمة التفاعل [تراكيز النواتج الأيونية] / [تراكيز المتفاعلات الأيونية]' }
    ],
    examTip: 'عند وصول الخلية إلى حالة الاتزان الديناميكي، يتوقف مرور التيار الكهربي ويكون E_cell = 0، وبالتالي يصبح log K_eq = (n · E°_cell) / 0.0592.'
  },
  {
    id: 'c-law-02',
    module: 'corrosion',
    type: 'law',
    termAr: 'طاقة جيبس الحرة والتلقائية الكهروكيميائية (د. سمر)',
    termEn: 'Gibbs Free Energy & Electrochemical Spontaneity',
    definitionEn: 'The thermodynamic criterion determining electrochemical spontaneity: ΔG° = -n · F · E°_cell. A positive standard cell potential (E° > 0) yields a negative free energy change (ΔG° < 0), indicating a spontaneous electrochemical reaction.',
    definitionAr: 'العلاقة بين الطاقة الحرة القياسية لرد الفعل وجهد الخلية الكهروكيميائية لتحديد هل التفاعل تلقائي أم غير تلقائي.',
    formula: 'ΔG° = - n · F · E°_cell     (F = 96485 C/mol)',
    variables: [
      { sym: 'ΔG°', desc: 'طاقة جيبس الحرة القياسية بالجول/مول (تكون سالبة للتفاعل التلقائي)' },
      { sym: 'n', desc: 'عدد الإلكترونات المشاركة في التفاعل' },
      { sym: 'F', desc: 'ثابت فاراداي = 96485 كولوم/مول إلكترونات (أو 96500)' },
      { sym: 'E°_cell', desc: 'جهد الخلية القياسي (يكون موجباً للخلية الجلفانية التلقائية)' }
    ],
    examTip: 'سؤال امتحاني: إذا كان E°_cell موجباً فإن ΔG° تكون سالبة والتفاعل تلقائي وتعمل الخلية كخلية جلفانية منتجة للكهرباء.'
  },
  {
    id: 'c-def-05',
    module: 'corrosion',
    type: 'definition',
    termAr: 'تآكل فروق التهوية والأكسجين (تآكل النقر والشقوق)',
    termEn: 'Differential Aeration Corrosion (Pitting & Crevice)',
    definitionEn: 'A localized electrochemical corrosion process occurring when adjacent regions of a metal surface experience unequal dissolved oxygen concentrations; the oxygen-depleted zone (beneath droplets, dirt, or crevice gaps) acts as the anode and corrodes intensely.',
    definitionAr: 'تآكل كهروكيميائي موضعي ينشأ عند تعرض أجزاء مختلفة من نفس المعدن لتراكيز متفاوتة من الأكسجين؛ فالجزء شحيح الأكسجين (مثل قاع النقر، داخل الشقوق، وتحت رواسب الطين) يصبح أنوداً ويتآكل بتركيز شديد، بينما الجزء المعرض لوفرة الأكسجين يعمل ككاثود.',
    keywords: ['اختلاف تركيز الأكسجين', 'قاع الشق أنود', 'السطح الخارجي كاثود', 'تآكل نقري'],
    examTip: 'تفسير تكون الصدأ تحت قطرة ماء على الحديد: مركز القطرة معزول عن الهواء فيعمل كأنود ويتآكل، وحافة القطرة غنية بالأكسجين فتعمل ككاثود.'
  },

  // ==================== MODULE 4: PORTLAND CEMENT ====================
  {
    id: 'b-def-01',
    module: 'cement',
    type: 'definition',
    termAr: 'الأسمنت البورتلاندي العادي',
    termEn: 'Ordinary Portland Cement (OPC - Type I)',
    definitionEn: 'The standard hydraulic binder manufactured by pulverizing clinker (primarily calcium silicates) produced by calcining calcareous (limestone) and argillaceous (clay) materials at 1450°C, interground with 3–5% natural gypsum to regulate setting time.',
    definitionAr: 'مادة رابطة هيدروليكية دقيقة التنعيم تُصنع عن طريق حرق وتكليس خليط متجانس من المواد الجيرية (الحجر الجيري CaCO3 كمصدر للـ CaO) والمواد الطينية (الطمي Clay كمصدر لـ SiO2, Al2O3, Fe2O3) في فرن دوار عند درجات حرارة 1450°C لتكوين الكلنكر (Clinker)، ثم طحنه ناعماً مع إضافة 3-5% جبس خام للتحكم في زمن الشك.',
    keywords: ['مادة رابطة هيدروليكية', 'حجر جيري وطمي', 'كلنكر 1450°C', 'إضافة الجبس'],
    examTip: 'سؤال أساسي: ما هي المواد الخام الأساسية، ولماذا يُضاف الجبس في مرحلة الطحن؟'
  },
  {
    id: 'b-def-02',
    module: 'cement',
    type: 'definition',
    termAr: 'مركب الألايت C3S',
    termEn: 'Tricalcium Silicate (Alite - 3CaO.SiO2)',
    definitionEn: 'The principal clinker phase (45–65%) responsible for initial hydration, hardening, and the development of early compressive strength (first 7 to 28 days) in Portland cement concrete.',
    definitionAr: 'أهم مركبات بوج في الأسمنت (يمثل 45% إلى 65% من وزن الأسمنت). يتفاعل مع الماء بسرعة متوسطة وهو المسؤول الرئيسي عن التصلد وتطور المقاومة الميكانيكية المبكرة للخرسانة خلال أول 28 يوماً من الصب.',
    keywords: ['القوة المبكرة 28 يوم', '45 - 65%', 'مقاومة انضغاط']
  },
  {
    id: 'b-def-03',
    module: 'cement',
    type: 'definition',
    termAr: 'مركب البلايت C2S',
    termEn: 'Dicalcium Silicate (Belite - 2CaO.SiO2)',
    definitionEn: 'The clinker phase (15–30%) that hydrates slowly with low heat of hydration, responsible for the steady long-term gain in ultimate mechanical strength and chemical resistance of concrete beyond 28 days.',
    definitionAr: 'ثاني مركبات بوج الأساسية (يمثل 15% إلى 30%). يتفاعل ببطء شديد مع الماء ويُطلق حرارة إماهة منخفضة، وهو المسؤول عن زيادة المقاومة الميكانيكية النهائية للخرسانة على المدى الطويل (بعد سنة وأكثر) ومقاومة الهجمات الكيميائية.',
    keywords: ['القوة طويلة المدى', 'حرارة إماهة منخفضة', '15 - 30%']
  },
  {
    id: 'b-def-04',
    module: 'cement',
    type: 'definition',
    termAr: 'مركب السيلايت C3A',
    termEn: 'Tricalcium Aluminate (Celite - 3CaO.Al2O3)',
    definitionEn: 'The fastest-reacting clinker phase (6–12%) with the highest heat of hydration; causes immediate flash setting and stiffening upon water addition and is vulnerable to groundwater sulfate attack.',
    definitionAr: 'أسرع مركبات الأسمنت تفاعلاً مع الماء على الإطلاق؛ يتفاعل في الدقائق الأولى مُطلقاً حرارة هائلة ومسبباً الشك الابتدائي السريع (Flash Setting). يمثل 6% إلى 12%، وهو أضعف المركبات ميكانيكياً والأكثر عرضة للتلف بواسطة أملاح الكبريتات في المياه الجوفية.',
    keywords: ['شك سريع', 'حرارة إماهة عالية', 'عرضة لهجوم الكبريتات'],
    examTip: 'لتقليل أضرار C3A يُضاف الجبس (Gypsum) ليتفاعل معه ويكون مادة الإترنجايت (Ettringite) لتأخير الشك.'
  },
  {
    id: 'b-def-05',
    module: 'cement',
    type: 'definition',
    termAr: 'مركب الفيرايت C4AF',
    termEn: 'Tetracalcium Aluminoferrite (Ferrite - 4CaO.Al2O3.Fe2O3)',
    definitionEn: 'The clinker phase (6–10%) that imparts the characteristic grey color to Portland cement and acts as an essential fluxing agent during burning in the rotary kiln by lowering clinkering temperature.',
    definitionAr: 'يمثل 6% إلى 10% من الأسمنت. يتفاعل بسرعة مع الماء ومقاومته الميكانيكية ضعيفة جداً، ولكنه يمنح الأسمنت لونه الرمادي المميز ويعمل أثناء التصنيع في الفرن كعامل صهر (Fluxing Agent) يخفض درجة انصهار الكلنكر.',
    keywords: ['اللون الرمادي', 'عامل صهر في الفرن', '6 - 10%']
  },
  {
    id: 'b-law-01',
    module: 'cement',
    type: 'law',
    termAr: 'معامل تشبع الجير',
    termEn: 'Lime Saturation Factor (LSF)',
    definitionEn: 'A stoichiometric index controlling the chemical composition of raw mix in cement production: LSF = [CaO - 0.7·SO3] / [2.8·SiO2 + 1.2·Al2O3 + 0.65·Fe2O3]. Optimum range is 0.66 to 1.02 to eliminate harmful uncombined free lime.',
    definitionAr: 'معامل كيميائي دقيق يُحدد النسبة الرياضية بين كمية الجير الفعلية المتوفرة إلى أقصى كمية جير يمكنها التفاعل كيميائياً مع السيليكا والألومينا والحديد دون ترك جير حر ضار.',
    formula: 'LSF = [ CaO - 0.7 SO3 ] / [ 2.8 SiO2 + 1.2 Al2O3 + 0.65 Fe2O3 ]',
    variables: [
      { sym: 'المدى الهندسي القياسي', desc: 'يجب أن يقع بين 0.66 و 1.02' },
      { sym: 'إذا زاد LSF عن 1.02', desc: 'يتبقى جير حر غير متفاعل (Free Lime) يمتص الرطوبة بعد تصلد الخرسانة ويتمدد مسبباً تشققات وتفتت (Unsound Cement)' },
      { sym: 'إذا قل LSF عن 0.66', desc: 'تنخفض نسبة C3S بشدة وتصبح مقاومة الأسمنت الميكانيكية الأولية ضعيفة جداً وبطيئة الشك' }
    ],
    examTip: 'مسألة إجبارية متكررة: يُعطى تحليل الأكاسيد ويُطلب حساب LSF والحكم على جودة الأسمنت والتمدد.'
  },
  {
    id: 'b-why-01',
    module: 'cement',
    type: 'reasoning',
    termAr: 'علل: إضافة الجبس الخام (CaSO4.2H2O) إلى كلنكر الأسمنت أثناء الطحن النهائي؟',
    termEn: 'Why Gypsum is Added to Cement Clinker During Grinding?',
    definitionEn: 'Gypsum (CaSO4·2H2O) is added during grinding as a set retarder. It instantly reacts with highly active Tricalcium Aluminate (C3A) to deposit an insoluble protective ettringite film around C3A grains, preventing flash set and providing workable handling time (2–3 hours).',
    definitionAr: 'لتنظيم والتحكم في زمن الشك ومنع حدوث الشك المفاجئ السريع (Flash Set). حيث يتفاعل الجبس فور إضافة الماء مع مركب C3A فائق النشاط مكوناً بلورات إبرية غير ذائبة من ملح السلفوألومينات (الإترنجايت Ettringite)، فتغلف حبيبات C3A وتؤخر تفاعله لمدة ساعتين إلى ثلاث ساعات مما يتيح وقتاً كافياً لنقل وصب ودمج الخرسانة.',
    keywords: ['منع الشك الخاطف Flash Set', 'تكوين الإترنجايت', 'إتاحة وقت للتشغيل والصب']
  },

  // ==================== MODULE 5: POLYMERS & LUBRICANTS ====================
  {
    id: 'p-def-01',
    module: 'polymers',
    type: 'definition',
    termAr: 'البوليمر ودرجة البلمرة',
    termEn: 'Polymer & Degree of Polymerization (DP)',
    definitionEn: 'A high molecular mass macromolecule built of repeating structural units (monomers) linked by strong covalent bonds. The Degree of Polymerization (DP) denotes the total number of monomeric units in a single polymer chain.',
    definitionAr: 'البوليمر هو جزيء عملاق ذو وزن جزيئي ضخم يتكون من ارتباط أعداد هائلة من الوحدات البنائية المتكررة الصغيرة تسمى المونومرات (Monomers) بروابط تساهمية قوية. وتُعرّف درجة البلمرة (DP) بأنها العدد الإجمالي للوحدات المونومرية المرتبطة داخل السلسلة البوليمرية الواحدة.',
    keywords: ['جزيء عملاق', 'مونومرات متكررة', 'روابط تساهمية', 'DP']
  },
  {
    id: 'p-def-02',
    module: 'polymers',
    type: 'definition',
    termAr: 'اللدائن الملدنة بالحرارة',
    termEn: 'Thermoplastics',
    definitionEn: 'Linear or branched polymers bound by weak intermolecular secondary forces (van der Waals) that soften when heated and harden upon cooling, allowing them to be repeatedly melted, reshaped, and recycled without chemical breakdown.',
    definitionAr: 'بوليمرات ذات سلاسل خطية مستقيمة أو متفرعة تتجاذب فيما بينها بقوى فان دير فالس الفيزيائية الضعيفة (مثل البولي إيثيلين PE والـ PVC والنايلون). تتميز بأنها تلين وتنصهر بالحرارة ويمكن إعادة تشكيلها وتدويرها مرات عديدة دون تحلل كيميائي.',
    keywords: ['سلاسل خطية', 'قوى ضعيفة', 'قابلة للتدوير وإعادة التشكيل', 'PE, PVC']
  },
  {
    id: 'p-def-03',
    module: 'polymers',
    type: 'definition',
    termAr: 'اللدائن المتصلدة بالحرارة',
    termEn: 'Thermosetting Plastics',
    definitionEn: 'Three-dimensional cross-linked network polymers joined by permanent covalent cross-bonds that set permanently during initial heat molding; subsequent heating causes thermal decomposition and charring rather than softening.',
    definitionAr: 'بوليمرات ثلاثية الأبعاد ذات شبكات مترابطة تشابكياً بروابط تساهمية قوية جداً (Cross-linking مثل الباكلايت Bakelite وراتنجات الإيبوكسي Epoxy). تتصلد وتتصلب عند تسخينها وتشكيلها أول مرة، ولا تلين بالحرارة بعد ذلك بل تحترق وتتفحم إذا سُخنت، ولا يمكن إعادة تدويرها.',
    keywords: ['روابط تشابكية ثلاثية الأبعاد', 'لا تنصهر بالحرارة', 'غير قابلة للتدوير', 'الباكلايت، الإيبوكسي']
  },
  {
    id: 'p-def-04',
    module: 'polymers',
    type: 'definition',
    termAr: 'مؤشر اللزوجة لزيوت التزييت',
    termEn: 'Viscosity Index (VI)',
    definitionEn: 'An arbitrary, empirical unitless rating measuring the rate of variation in lubricating oil viscosity with changes in temperature. A higher Viscosity Index indicates minimal viscosity fluctuation between cold starts and high engine temperatures.',
    definitionAr: 'مقياس عددي تجريبي يعبر عن مدى تغير لزوجة زيت التزييت مع تغير درجات الحرارة. كلما كان مؤشر اللزوجة (VI) مرتفعاً، كان معدل التغير في اللزوجة طفيفاً مع ارتفاع الحرارة، وهو ما يضمن بقاء الغشاء الزيتي الفاصل بين الأجزاء الميكانيكية المتحركة للمحرك لمنع الاحتكاك والتآكل.',
    keywords: ['تغير اللزوجة مع الحرارة', 'VI مرتفع أفضل', 'حماية غشاء التزييت']
  },
  {
    id: 'p-def-05',
    module: 'polymers',
    type: 'definition',
    termAr: 'نقطة الوميض والاشتعال للزيوت',
    termEn: 'Flash Point & Fire Point',
    definitionEn: 'The Flash Point is the lowest temperature at which lubricating oil releases sufficient volatile vapors to ignite momentarily upon exposure to a flame; the Fire Point is the lowest temperature at which vapors continue burning steadily for at least 5 seconds.',
    definitionAr: 'نقطة الوميض (Flash Point) هي أقل درجة حرارة يبدأ عندها سائل الوقود أو الزيت في إطلاق أبخرة كافية لتكوين خليط قابل للاشتعال مع الهواء يُحدث وميضاً خاطفاً لحظياً عند تقريب لهب صغير دون استمرار الاشتعال. أما نقطة الاشتعال (Fire Point) فهي درجة الحرارة الأعلى التي يستمر عندها الزيت في الاحتراق المتواصل لمدة 5 ثوانٍ على الأقل بعد إبعاد اللهب.',
    keywords: ['أقل حرارة لإطلاق أبخرة', 'وميض لحظي', 'استمرار الاحتراق 5 ثوانٍ', 'أمان التخزين'],
    examTip: 'سؤال عملي وشفوي أساسي: قياس نقطة الوميض بجهاز بونسكي مارتنز المغلق (Pensky-Martens) أو أبيل (Abel).'
  },
  {
    id: 'p-law-01',
    module: 'polymers',
    type: 'law',
    termAr: 'رقم التصبن لزيوت التزييت',
    termEn: 'Saponification Value (S.V.)',
    definitionEn: 'The number of milligrams of Potassium Hydroxide (KOH) required to completely saponify the fatty acids and esters in 1 gram of oil. Used to detect the compounding or adulteration of mineral lubricants with animal or vegetable oils.',
    definitionAr: 'عدد ملليجرامات هيدروكسيد البوتاسيوم (KOH) المطلوبة لتصبن جميع الجلسريدات والأحماض الدهنية الموجودة في جرام واحد من الزيت. يُستخدم لكشف غش الزيوت البترولية المعدنية بالزيوت النباتية والحيوانية.',
    formula: 'S.V. (mg KOH / g oil) = [ (V_blank - V_titrated) × N × 56.1 ] / Weight of Oil (g)',
    variables: [
      { sym: 'V_blank', desc: 'حجم حمض الهيدروكلوريك HCl المستهلك في التجربة البيضاء بدون زيت (mL)' },
      { sym: 'V_titrated', desc: 'حجم حمض HCl المستهلك في معايرة الزيت المختبر (mL)' },
      { sym: 'N', desc: 'عيارية حمض HCl المستخدم (Normality)' },
      { sym: '56.1', desc: 'الوزن الجزيئي لـ KOH (mg/mmol)' }
    ],
    examTip: 'الزيوت المعدنية البترولية النقية لا تتصبن (S.V. ≈ 0). أي قيمة موجبة تدل على خلطها بزيوت عضوية.'
  },
  {
    id: 'p-why-01',
    module: 'polymers',
    type: 'reasoning',
    termAr: 'علل: إضافة بوليمرات خاصة (VI Improvers) إلى زيوت محركات السيارات متعددة الدرجات (Multi-grade Oils مثل 10W-40)؟',
    termEn: 'Why Add Viscosity Index Improvers to Multi-grade Motor Oils?',
    definitionEn: 'High-molecular-weight polymer coils remain compact at low ambient temperatures without thickening the oil during cold starts, but expand and uncoil into elongated chains at elevated engine operating temperatures, preventing oil thinning and maintaining hydrodynamic film thickness.',
    definitionAr: 'لأن سلاسل هذه البوليمرات تتكور على نفسها في درجات الحرارة المنخفضة شتاءً ولا تزيد لزوجة الزيت فيسهل تدوير المحرك وبدء التشغيل، بينما عند ارتفاع حرارة المحرك صيفاً أو أثناء السرعات العالية تتفتح السلاسل البوليمرية وتنتشر في الزيت فتقاوم انخفاض لزوجته وتحافظ على سمك غشاء التزييت وتمنع الاحتكاك الجاف.',
    keywords: ['تمدد السلاسل بالحرارة', 'حماية المحرك شتاءً وصيفاً', 'تثبيت اللزوجة']
  }
];
