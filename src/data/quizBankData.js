// Interactive Exam & Midterm MCQ Bank for Engineering Chemistry - Benha University
// Mapped to actual exams with detailed rationales

export const QUIZ_QUESTIONS = [
  {
    id: "q1",
    module: "water-treatment",
    topic: "عسر الماء والـ Lime-Soda",
    question: "أي من الأملاح التالية يسبب عسراً مؤقتاً (Temporary Hardness) للماء ويزال بالغليان البسيط؟",
    questionEn: "Which of the following dissolved salts causes Temporary Hardness in water and can be eliminated by simple boiling?",
    optionsEn: [
          "Calcium bicarbonate [Ca(HCO3)2]",
          "Calcium sulfate [CaSO4]",
          "Magnesium chloride [MgCl2]",
          "Calcium nitrate [Ca(NO3)2]"
    ],
    explanationEn: "Temporary hardness is caused solely by bicarbonates of calcium and magnesium, which decompose on heating to precipitate insoluble carbonates (CaCO3↓).",
    options: [
      "بيكربونات الكالسيوم Ca(HCO3)2",
      "كبريتات الكالسيوم CaSO4",
      "كلوريد المغنيسيوم MgCl2",
      "نترات الكالسيوم Ca(NO3)2"
    ],
    correctIndex: 0,
    explanation: "العسر المؤقت ينشأ حصراً عن بيكربونات الكالسيوم والمغنيسيوم، والتي تتحلل عند الغليان إلى كربونات كالسيوم غير ذائبة (CaCO3↓) تترسب كقشور."
  },
  {
    id: "q2",
    module: "water-treatment",
    topic: "مشاكل مياه الغلايات",
    question: "تحدث ظاهرة الهشاشة الكاوية (Caustic Embrittlement) في غلايات البخار بسبب التركيز المفرط لمادة:",
    questionEn: "Caustic Embrittlement in high-pressure steam boilers occurs due to excessive localized concentration of:",
    optionsEn: [
          "Sodium hydroxide (NaOH)",
          "Sodium sulfate (Na2SO4)",
          "Sodium chloride (NaCl)",
          "Sulfuric acid (H2SO4)"
    ],
    explanationEn: "Hydrolysis of sodium carbonate at high boiler pressures generates free NaOH, which concentrates in hairline fissures and rivets, dissolving iron and causing intercrystalline cracking.",
    options: [
      "هيدروكسيد الصوديوم (NaOH)",
      "كبريتات الصوديوم (Na2SO4)",
      "كلوريد الصوديوم (NaCl)",
      "حمض الكبريتيك (H2SO4)"
    ],
    correctIndex: 0,
    explanation: "تنتج الهشاشة الكاوية عن تحلل كربونات الصوديوم المستخدمة في معالجة الغلايات إلى هيدروكسيد صوديوم (NaOH)، والذي يتركز في شقوق ولحامات الحديد مسبباً تآكل بين حبيبات الصلب وفشلها ميكانيكياً."
  },
  {
    id: "q3",
    module: "water-treatment",
    topic: "حسابات الجير والصودا",
    question: "لماذا يستهلك ملح بيكربونات المغنيسيوم Mg(HCO3)2 جزيئين (2 Moles) من الجير المطفأ Ca(OH)2 في المعالجة؟",
    questionEn: "Why does Magnesium Bicarbonate [Mg(HCO3)2] require two equivalents (2 moles) of hydrated lime [Ca(OH)2] during softening?",
    optionsEn: [
          "One mole neutralizes bicarbonate ions, and the second mole precipitates magnesium as insoluble Mg(OH)2",
          "Because magnesium is divalent while calcium is monovalent",
          "Because lime does not react with magnesium carbonate except in highly acidic media",
          "Because MgCO3 is completely insoluble and only precipitates as an oxide"
    ],
    explanationEn: "Magnesium carbonate is appreciably soluble in water (~84 mg/L); an additional equivalent of lime is mandatory to precipitate magnesium completely as the highly insoluble hydroxide Mg(OH)2↓.",
    options: [
      "لأنه يحتاج جزيء لمعادلة البيكربونات وجزيء آخر لترسيب المغنيسيوم كـ Mg(OH)2 غير الذائب",
      "لأن المغنيسيوم ثنائي التكافؤ والكالسيوم أحادي التكافؤ",
      "لأن الجير لا يتفاعل مع كربونات المغنيسيوم إلا في وسط عالي الحموضة",
      "لأن MgCO3 مركب شديد الذوبان ولا يترسب إلا كأكسيد مغنيسيوم"
    ],
    correctIndex: 0,
    explanation: "كربونات المغنيسيوم MgCO3 قابلة للذوبان جزئياً في الماء (ذائبيتها ~84 mg/L)، لذلك يلزم جزيء إضافي من الجير لتحويلها إلى هيدروكسيد المغنيسيوم Mg(OH)2 غير الذائب تماماً."
  },
  {
    id: "q4",
    module: "fuels-combustion",
    topic: "القيمة الحرارية ومعادلة دولونج",
    question: "في معادلة دولونج لحساب القيمة الحرارية (Dulong's formula)، لماذا يطرح جزء من الهيدروجين بالكسر (H - O/8)؟",
    questionEn: "In Dulong's formula for Gross Calorific Value (GCV), why is available hydrogen calculated as (H - O / 8)?",
    optionsEn: [
          "Because every 8 parts by mass of oxygen combine with 1 part of hydrogen to form chemically combined, non-combustible water",
          "Because oxygen reduces coal flame temperature",
          "Because hydrogen volatilizes before air reaches the furnace",
          "Because the relative density of hydrogen is one-eighth that of oxygen"
    ],
    explanationEn: "In water (H2O), the mass ratio of Oxygen to Hydrogen is 16:2 (8:1). Therefore, O/8 of hydrogen is already bound to oxygen as moisture, leaving (H - O/8) available for combustion.",
    options: [
      "لأن كل 8 أجزاء من الأكسجين تكون متحدة مسبقاً مع جزء هيدروجين في صورة ماء خامل لا يحترق",
      "لأن الأكسجين يقلل درجة حرارة لهب الفحم",
      "لأن الهيدروجين يتطاير قبل وصول الهواء للفرن",
      "لأن الكثافة النسبية للهيدروجين تساوي ثُمن كثافة الأكسجين"
    ],
    correctIndex: 0,
    explanation: "في جزيء الماء H2O، نسبة كتلة الأكسجين إلى الهيدروجين هي 16 : 2 أي 8 : 1. لذا فإن كمية الهيدروجين المتحد مع الأكسجين الموجود داخل الوقود هي O/8، والهيدروجين المتبقي الفعلي المتاح لإنتاج الطاقة هو (H - O/8)."
  },
  {
    id: "q5",
    module: "fuels-combustion",
    topic: "رقم الأوكتان ومحركات البنزين",
    question: "وقود بنزين ذو رقم أوكتان (Octane Rating = 95) يمتلك خصائص مقاومة صفع مطابقة لخليط يتكون من:",
    questionEn: "A gasoline fuel rated with an Octane Number of 95 (ON = 95) exhibits the knock resistance equivalent to a reference blend of:",
    optionsEn: [
          "95% Isooctane and 5% n-Heptane by volume",
          "95% n-Heptane and 5% Isooctane by volume",
          "95% n-Cetane and 5% α-Methylnaphthalene by volume",
          "95% Pure Ethanol and 5% Lead Tetraethyl by mass"
    ],
    explanationEn: "Octane Number is defined as the volume percentage of isooctane (anti-knock rating 100) in a standard binary mixture with n-heptane (anti-knock rating 0).",
    options: [
      "95% أيزو أوكتان و 5% نورمال هبتان بالحجم",
      "95% بنزين نقي و 5% إيثانول",
      "95% نورمال هبتان و 5% أيزو أوكتان",
      "95% سيتان و 5% ألفا ميثيل نافثالين"
    ],
    correctIndex: 0,
    explanation: "رقم الأوكتان هو النسبة المئوية الحجمية للأيزو أوكتان (مانع الصفع = 100) في خليط مع النورمال هبتان (شديد الصفع = 0)."
  },
  {
    id: "q6",
    module: "corrosion-control",
    topic: "الجلفنة مقابل القصدرة",
    question: "إذا حُدث خدش عميق في صفيحة حديد مجلفنة (Galvanized Iron) وفي صفيحة حديد مقصدرة (Tinned Iron)، ماذا يحدث هندسياً؟",
    questionEn: "If a galvanized iron sheet (coated with Zinc) suffers a deep scratch exposing the underlying steel, what occurs electrochemically?",
    optionsEn: [
          "Zinc acts as a sacrificial anode (E° = -0.76 V) and preferentially corrodes, cathodically protecting the exposed iron (E° = -0.44 V)",
          "Iron corrodes acceleratedly because zinc becomes the cathode",
          "Corrosion halts completely due to immediate passivation by nitrogen",
          "Both metals corrode at identical rates independent of electrode potentials"
    ],
    explanationEn: "Zinc has a more negative standard reduction potential than iron (-0.76 V vs -0.44 V). Zinc oxidizes preferentially, providing sacrificial cathodic protection to the exposed iron.",
    options: [
      "يستمر الزنك في حماية الحديد المتكشف جلفانياً، بينما يتآكل الحديد المقصدر بشراسة مضاعفة كأنود",
      "يتآكل الحديد في الحالتين بنفس المعدل تماماً",
      "يتآكل الحديد المجلفن ويبقى المقصدر سليماً",
      "يتوقف التآكل تماماً بسبب تكون طبقة أكسيد عازلة"
    ],
    correctIndex: 0,
    explanation: "الزنك أنشط من الحديد في المتسلسلة الكهروكيميائية (أنود تضحوي) فيحمي الحديد المكشوف. أما القصدير فهو أقل نشاطاً (كاثود بالنسبة للحديد)، فعند الخدش يصبح الحديد أنوداً صغيراً والقصدير كاثوداً كبيراً، مما يسبب تآكل الحديد بسرعة كارثية."
  },
  {
    id: "q7",
    module: "corrosion-control",
    topic: "الحماية الكاثودية بالأنود القرباني",
    question: "لحماية خطوط أنابيب النفط الفولاذية المدفونة تحت الأرض من الصدأ، يتم توصيلها بكتل خارجية من:",
    questionEn: "To cathodically protect buried steel petroleum pipelines using the sacrificial anode method, which metal is preferred?",
    optionsEn: [
          "Magnesium (Mg) or Zinc (Zn)",
          "Copper (Cu) or Silver (Ag)",
          "Lead (Pb) or Tin (Sn)",
          "Platinum (Pt) or Gold (Au)"
    ],
    explanationEn: "Sacrificial anodes must be electrochemically more active than iron (higher oxidation potential), such as Mg and Zn, which sacrifice themselves to protect the steel cathode.",
    options: [
      "المغنيسيوم (Mg) أو الزنك (Zn)",
      "النحاس (Cu) أو الرصاص (Pb)",
      "القصدير (Sn) أو النيكل (Ni)",
      "الكربون (C) أو البلاتين (Pt)"
    ],
    correctIndex: 0,
    explanation: "المغنيسيوم والزنك يمتلكان جهود اختزال سالبة أكثر بكثير من الحديد، فيتأكسدان ويفقدان الإلكترونات تضحيةً بهما، وتتدفق الإلكترونات إلى خط الأنابيب ليصبح كاثوداً محمياً."
  },
  {
    id: "q8",
    module: "building-materials",
    topic: "مركبات بوج في الأسمنت البورتلاندي",
    question: "أي من مركبات بوج في الأسمنت البورتلاندي مسؤول عن إعطاء الخرسانة مقاومتها المبكرة (Early Strength) خلال أول شهر؟",
    questionEn: "Which Bogue clinker compound in Ordinary Portland Cement (OPC) is responsible for early compressive strength development during the first 7 to 28 days?",
    optionsEn: [
          "Tricalcium Silicate (Alite - C3S)",
          "Dicalcium Silicate (Belite - C2S)",
          "Tricalcium Aluminate (Celite - C3A)",
          "Tetracalcium Aluminoferrite (Ferrite - C4AF)"
    ],
    explanationEn: "C3S hydrates rapidly with high heat release and accounts for most of the early strength (up to 28 days), while C2S provides steady long-term ultimate strength.",
    options: [
      "ثلاثي سيليكات الكالسيوم C3S (Alite)",
      "ثنائي سيليكات الكالسيوم C2S (Belite)",
      "ثلاثي ألومينات الكالسيوم C3A (Celite)",
      "رباعي ألومينو فيريت الكالسيوم C4AF (Ferrite)"
    ],
    correctIndex: 0,
    explanation: "مركب C3S (3CaO.SiO2) سريع الإماهة نسبياً وهو المسؤول الأساسي عن صلابة الخرسانة في أول 7 إلى 28 يوماً، بينما C2S بطيء جداً ويكتسب القوة على المدى الطويل."
  },
  {
    id: "q9",
    module: "building-materials",
    topic: "دور الجبس في صناعة الأسمنت",
    question: "تضاف نسبة 2% إلى 3% من الجبس (Gypsum: CaSO4.2H2O) إلى كلنكر الأسمنت أثناء الطحن النهائي بغرض:",
    questionEn: "Why is 2% to 3% gypsum (CaSO4·2H2O) added to cement clinker during the final grinding stage?",
    optionsEn: [
          "To retard the rapid hydration of C3A and prevent premature Flash Setting",
          "To accelerate initial setting time for underwater concreting",
          "To increase the ultimate compressive strength of C2S after one year",
          "To bleach the cement powder and give it a lighter color"
    ],
    explanationEn: "Gypsum acts as a set retarder by reacting with highly reactive C3A to form an insoluble ettringite film around C3A particles, delaying setting for 2-3 hours to allow proper mixing and placement.",
    options: [
      "إبطاء زمن الشك الابتدائي ومنع الشك الخاطف (Flash Setting) لمركب C3A",
      "تسريع زمن الشك وزيادة حرارة التفاعل",
      "تفتيح لون الأسمنت وزيادة بياضه",
      "تقليل استهلاك الماء في الخلطة الخرسانية"
    ],
    correctIndex: 0,
    explanation: "مركب C3A يتفاعل فوراً مع الماء مسبباً الشك الخاطف في دقائق. إضافة الجبس تؤخر التفاعل وتكون طبقة الإترينجايت غير المنفذة مما يتيح وقتاً كافياً لنقل وصب الخرسانة."
  },
  {
    id: "q10",
    module: "polymers-lubricants",
    topic: "اللدائن المتصلدة والملدنة",
    question: "تتميز اللدائن المتصلدة بالحرارة (Thermosetting Plastics) مثل الباكلايت (Bakelite) بأنها:",
    questionEn: "Thermosetting plastics (such as Bakelite and Epoxy resins) differ fundamentally from Thermoplastics because they:",
    optionsEn: [
          "Possess cross-linked three-dimensional network covalent bonds and permanently harden upon heating without melting",
          "Can be repeatedly softened, melted, and reshaped by heating",
          "Dissolve readily in water and organic solvents at room temperature",
          "Are held together exclusively by weak secondary van der Waals forces"
    ],
    explanationEn: "Thermosets form extensive irreversible covalent cross-links during curing; subsequent heating causes thermal decomposition and charring rather than softening.",
    options: [
      "تمتلك بنية شبكية ثلاثية الأبعاد بروابط تساهمية متصالبة ولا يمكن إعادة صهرها أو تشكيلها",
      "تلين بالحرارة وتتصلب بالتبريد وقابلة للتدوير 100%",
      "تتكون من سلاسل بوليمرية خطية سهلة الانزلاق",
      "تذوب بسهولة في المذيبات العضوية كالبنزين والأسيتون"
    ],
    correctIndex: 0,
    explanation: "الروابط المتصالبة (Cross-links) القوية تمنع انزلاق السلاسل فوق بعضها، فتتصلب نهائياً بالتسخين وإذا زادت الحرارة تتفحم دون أن تنصهر."
  },
  {
    id: "q11",
    module: "polymers-lubricants",
    topic: "مؤشر لزوجة زيوت التزييت (Viscosity Index)",
    question: "زيت محركات يتمتع بمؤشر لزوجة مرتفع (High Viscosity Index - VI)، هذا يعني هندسياً أن:",
    questionEn: "An automotive engine lubricating oil possessing a High Viscosity Index (High VI) indicates that:",
    optionsEn: [
          "Its viscosity exhibits minimal variation across cold start-up and high engine operating temperatures",
          "Its viscosity drops rapidly to zero upon warming up",
          "The oil possesses high acidity and causes rapid corrosion of bearings",
          "The oil can only be utilized under strict sub-zero Arctic conditions"
    ],
    explanationEn: "A higher Viscosity Index signifies minimal rate of viscosity change with temperature, maintaining adequate hydrodynamic lubricating film thickness at high speeds and temperatures.",
    options: [
      "معدل تغير لزوجته مع تغير درجات حرارة المحرك منخفض جداً ومستقر",
      "لزوجته عالية جداً كالشحم الصلب في جميع الأوقات",
      "الزيت يحتوي على نسبة شوائب وشمع بارافين مرتفعة",
      "الزيت يشتعل فور تشغيل المحرك في درجات الحرارة المنخفضة"
    ],
    correctIndex: 0,
    explanation: "مؤشر اللزوجة المرتفع يعني ثبات أداء الزيت؛ فهو لا يصبح سائلاً خفيفاً في حرارة الصيف ولا يتجمد سميكاً في شتاء الفجر، فيحمي أجزاء المحرك دائماً."
  },
  {
    id: "q12",
    module: "polymers-lubricants",
    topic: "أنواع البلمرة",
    question: "أي من البوليمرات التالية ينتج عبر بلمرة التكثيف (Condensation Polymerization) مع خروج جزيء ماء ثانوي؟",
    questionEn: "Which of the following engineering polymers is produced via Step-Growth Condensation Polymerization with the elimination of a small byproduct molecule?",
    optionsEn: [
          "Nylon 6,6 (Polyamide)",
          "Polyethylene (PE)",
          "Polypropylene (PP)",
          "Polyvinyl chloride (PVC)"
    ],
    explanationEn: "Nylon 6,6 is synthesized by condensation of adipic acid and hexamethylenediamine, eliminating water molecules (H2O), whereas PE, PP, and PVC are addition (chain-growth) polymers.",
    options: [
      "النايلون 6,6 (Nylon 6,6)",
      "البولي إيثيلين (Polyethylene - PE)",
      "بولي فينيل كلوريد (PVC)",
      "التفلون (Teflon - PTFE)"
    ],
    correctIndex: 0,
    explanation: "النايلون 6,6 ينتج من تفاعل حمض الأديبيك مع هيكسا ميثيلين داي أمين مع طرد جزيء ماء (H2O) عند تكوين رابطة الأميد، بينما الباقي بلمرة إضافة مونيمرات ثنائية الرابطة."
  }
];
