// Comprehensive Curriculum Data for Engineering Chemistry - Preparatory Year
// Specifically Tailored for Faculty of Engineering at Shoubra (FES) - Benha University (Term 1)

export const FACULTY_INFO = {
  universityAr: "جامعة بنها",
  universityEn: "Benha University",
  facultyNameAr: "كلية الهندسة بشبرا",
  facultyNameEn: "Faculty of Engineering at Shoubra (FES)",
  shortName: "هندسة شبرا",
  campusAr: "108 شارع شبرا / روض الفرج / مبنى الخلفاوي، القاهرة",
  establishmentYear: "1961",
  gradingSystem: "150 درجة إجمالية (أعمال سنة ومعمل 60 + امتحان فاينال تحريري 90)",
  subjectTitleAr: "الكيمياء الهندسية",
  subjectTitleEn: "Engineering Chemistry",
  code: "CHM 001",
  term: "الفصل الدراسي الأول",
  prepYear: "الفرقة الإعدادية (إعدادي هندسة شبرا)",
  faculties: [
    {
      id: "shoubra",
      nameAr: "كلية الهندسة بشبرا",
      nameEn: "Faculty of Engineering at Shoubra",
      short: "هندسة شبرا (الأساسي)",
      campus: "108 شارع شبرا / مبنى الخلفاوي، القاهرة",
      gradingSystem: "150 درجة (أعمال سنة 45 + معمل وشفوي 15 + فاينال 90)"
    },
    {
      id: "benha",
      nameAr: "كلية الهندسة ببنها",
      nameEn: "Faculty of Engineering at Benha",
      short: "هندسة بنها (كفر سعد)",
      campus: "مجمع الكليات - كفر سعد، بنها",
      gradingSystem: "100 درجة (أعمال سنة 40 + فاينال 60)"
    }
  ]
};

export const CHEMISTRY_MODULES = [
  {
    id: "water-treatment",
    number: 1,
    titleAr: "تكنولوجيا ومعالجة المياه وعسر الماء",
    titleEn: "Water Technology & Hardness Treatment",
    icon: "Droplets",
    color: "from-blue-600 to-cyan-600",
    badge: "الوحدة الأولى • 25% من الامتحان",
    summary: "دراسة مصادر المياه الهندسية، أنواع عسر الماء، ومشاكل مياه الغلايات (القشور والتآكل والرغوة)، وطرق المعالجة الصناعية (الجير والصودا والتبادل الأيوني والتناضح العكسي).",
    learningObjectives: [
      "التمييز الرياضي والكيميائي بين العسر المؤقت (Temporary) والعسر الدائم (Permanent).",
      "حساب درجات العسر بوحدات ppm أو mg/L مكافئ لكربونات الكالسيوم (CaCO3 Equivalent).",
      "إتقان حسابات كميات الجير والصودا (Lime-Soda Calculations) بدقة مع نسبة النقاوة (Purity %).",
      "فهم ظواهر الغلايات: التكلس (Scaling)، الحمأة (Sludge)، الهشاشة الكاوية (Caustic Embrittlement)، والفوران (Priming & Foaming).",
      "دراسة التناضح العكسي (Reverse Osmosis) وأغشية البوليمر لتحلية مياه البحر."
    ],
    keyFormulas: [
      {
        title: "مكافئ كربونات الكالسيوم (CaCO3 Equivalent)",
        formula: "CaCO3 Eq (mg/L) = [Mass of Salt (mg/L) × 50] / [Eq. Wt of Salt]",
        notes: "الوزن المكافئ لـ CaCO3 يساوي 50. الوزن المكافئ لأيون الكالسيوم = 20، والمغنيسيوم = 12.16."
      },
      {
        title: "حساب كمية الجير النقي المطلوب (Lime Required)",
        formula: "Lime (kg) = (74 / 100) × [Temp Ca + 2 × Temp Mg + Perm Mg + CO2 + HCl + H2SO4 - NaAlO2] × (V / 10^6) × (100 / Purity %)",
        notes: "الوزن الجزيئي لـ Ca(OH)2 هو 74. يضاف ضعف العسر المؤقت للمغنيسيوم لأنه يستهلك جزيئين من الجير لترسيب Mg(OH)2."
      },
      {
        title: "حساب كمية رماد الصودا (Soda Required)",
        formula: "Soda (kg) = (106 / 100) × [Perm Ca + Perm Mg + HCl + H2SO4] × (V / 10^6) × (100 / Purity %)",
        notes: "الوزن الجزيئي لـ Na2CO3 هو 106. رماد الصودا يرسب أملاح الكالسيوم الدائمة والمغنيسيوم الناتجة بعد خطوة الجير."
      }
    ],
    examHotspots: [
      "مسألة إزالة العسر بطريقة Lime-Soda مع نقاوة 90% للجير و 95% للصودا (سؤال أساسي في فاينال بنها وشبرا).",
      "اشرح ميكانيكية الهشاشة الكاوية (Caustic Embrittlement) وكيفية منعها بإضافة فوسفات الصوديوم أو التانين.",
      "مقارنة بين طريقة التبادل الأيوني (Zeolite / Resins) وطريقة التناضح العكسي (RO) من حيث التكلفة ونقاوة الماء الناتج."
    ]
  },
  {
    id: "fuels-combustion",
    number: 2,
    titleAr: "الوقود والاحتراق وتكرير البترول",
    titleEn: "Fuels, Combustion & Petroleum Refining",
    icon: "Flame",
    color: "from-amber-600 to-orange-600",
    badge: "الوحدة الثانية • 20% من الامتحان",
    summary: "تصنيف أنواع الوقود الصناعي، حسابات القيمة الحرارية (Dulong's Formula)، تكرير البترول، رقم الأوكتان والسيتان، وحسابات الهواء النظري للاحتراق الكامل.",
    learningObjectives: [
      "التفريق بين القيمة الحرارية العليا (Gross Calorific Value - GCV) والصغرى (Net Calorific Value - NCV).",
      "استخدام معادلة دولونج (Dulong) لحساب القيمة الحرارية بناءً على التحليل العنصري للوقود (C, H, O, S).",
      "فهم أبراج التقطير التجزيئي للبترول الخام ونواتجها (النافثا، الجازولين، الكيروسين، المازوت).",
      "معرفة ظاهرة الصفع (Knocking) وتحسين رقم الأوكتان بإضافة رابع إيثيل الرصاص (TEL) أو MTBE وعمليات التكسير (Cracking) وإعادة التشكيل (Reforming).",
      "حساب وزن وحجم الهواء النظري اللازم لاحتراق الوقود وتحديد نسبة غازات العادم (Flue Gas Analysis - Orsat Apparatus)."
    ],
    keyFormulas: [
      {
        title: "معادلة دولونج للقيمة الحرارية العليا (GCV)",
        formula: "GCV (kcal/kg) = (1 / 100) × [8080 C + 34500 (H - O / 8) + 2240 S]",
        notes: "الكسر (H - O / 8) يمثل الهيدروجين المتاح للاحتراق (Available Hydrogen)، لأن باقي الهيدروجين متحد مع الأكسجين في صورة ماء."
      },
      {
        title: "القيمة الحرارية الصغرى (NCV)",
        formula: "NCV = GCV - (0.09 × H % × Latent Heat of Steam = 587 kcal/kg)",
        notes: "حيث أن كل 1 جرام من الهيدروجين يعطي 9 جرامات من بخار الماء عند الاحتراق."
      },
      {
        title: "الهواء النظري اللازم للاحتراق (Theoretical Air)",
        formula: "O2 (kg) = (32/12) C + (32/4) (H - O/8) + (32/32) S | Air (kg) = O2 (kg) × (100 / 23) بالكتلة",
        notes: "الهواء يحتوي على 23% أكسجين بالكتلة و 21% بالحجم. لحساب الحجم: Air (m³) = O2 (m³) × (100 / 21)."
      }
    ],
    examHotspots: [
      "مسألة كاملة لحساب GCV و NCV وحجم الهواء المطلوب لاحتراق 1 كجم من الفحم الحجري.",
      "ما هو رقم الأوكتان (Octane Number)؟ وما هي المركبات المرجعية المستخدمة في قياسه (Iso-octane = 100, n-Heptane = 0)؟",
      "اشرح فكرة عمل جهاز أورسات (Orsat Apparatus) في تحليل غازات العادم ومحاليل الامتصاص المستخدمة (KOH لـ CO2، البيروجالول لـ O2، كلوريد النحاسوز لـ CO)."
    ]
  },
  {
    id: "corrosion-control",
    number: 3,
    titleAr: "التآكل والصدأ وطرق الحماية الهندسية",
    titleEn: "Corrosion & Corrosion Protection",
    icon: "ShieldAlert",
    color: "from-rose-600 to-red-700",
    badge: "الوحدة الثالثة • 25% من الامتحان",
    summary: "الميكانيكية الكهروكيميائية لتآكل المعادن والمنشآت الهندسية، أنواع الخلايا التآكلية، وتطبيقات الحماية الكاثودية والأنودية والجلفنة.",
    learningObjectives: [
      "فهم معادلات أكسدة المصعد (Anodic Oxidation) واختزال المهبط (Cathodic Reduction) في الوسط الحمضي والمتعادل.",
      "تطبيق معادلة نيرنست (Nernst Equation) للتنبؤ باتجاه حركة الإلكترونات والجهد الكهروكيميائي.",
      "التمييز العملي بين أنواع التآكل: التآكل الجلفاني، تآكل الفروق في التهوية (Differential Aeration Pitting)، وتآكل الإجهاد.",
      "شرح الحماية الكاثودية بقطب التضحية (Sacrificial Anode: الزنك أو المغنيسيوم لحماية أنابيب الحديد المدفونة).",
      "المقارنة الهندسية بين الجلفنة (Galvanizing - غمر في الزنك المنصهر) والقصدرة (Tinning - غمر في القصدير المنصهر) وسلوك كل منهما عند حدوث خدش."
    ],
    keyFormulas: [
      {
        title: "معادلة نيرنست لجهد القطب (Nernst Equation)",
        formula: "E = E° - (0.0592 / n) × log ([Ox] / [Red]) عند 25°C",
        notes: "المعدن ذو جهد الاختزال الأقل (الأكثر سالبية) يكون أكثر نشاطاً ويمثل الأنود المتآكل."
      },
      {
        title: "تفاعلات صدأ الحديد في الوسط المائي المؤكسد",
        formula: "Anode: Fe → Fe²⁺ + 2e⁻ | Cathode: O2 + 2H2O + 4e⁻ → 4OH⁻ | Overall: Fe(OH)2 → Fe2O3.xH2O (الصدأ)",
        notes: "في غياب الأكسجين في وسط حمضي: Cathode: 2H⁺ + 2e⁻ → H2."
      }
    ],
    examHotspots: [
      "لماذا تعتبر الجلفنة حماية ذاتية حتى عند خدش طبقة الزنك، بينما القصدرة تسرع تآكل الحديد بمجرد الخدش؟",
      "وضح بالرسم والبيانات فكرة الحماية الكاثودية بالتيار القسري (Impressed Current Cathodic Protection).",
      "ما هي مثبطات التآكل الأنودية والكاثودية (Anodic & Cathodic Inhibitors)؟ مع ذكر أمثلة كيميائية."
    ]
  },
  {
    id: "building-materials",
    number: 4,
    titleAr: "مواد البناء والأسمنت البورتلاندي والحراريات",
    titleEn: "Building Materials: Portland Cement & Refractories",
    icon: "Building2",
    color: "from-emerald-600 to-teal-700",
    badge: "الوحدة الرابعة • 15% من الامتحان",
    summary: "كيمياء وتصنيع الأسمنت البورتلاندي، مركبات بوج الأربعة المسؤولة عن الشك والتصلب، وظيفة الجبس، والحراريات الصناعية المقاومة للحرارة.",
    learningObjectives: [
      "معرفة النسب المئوية لأكاسيد المواد الخام للأسمنت (CaO 60-67%, SiO2 17-25%, Al2O3 3-8%, Fe2O3 0.5-6%).",
      "التعرف على مركبات بوج (Bogue's Compounds): C3S, C2S, C3A, C4AF وحساب نسبتها.",
      "فهم كيمياء مرحلة الشك الابتدائي (Initial Setting) والنهائي (Final Hardening) وتفاعلات الإماهة (Hydration).",
      "معرفة دور إضافة الجبس (CaSO4.2H2O بنسبة 2-3%) في منع الشك الخاطف (Flash Setting) لمركب C3A.",
      "تصنيف المواد الحرارية (Refractories: حامضية مثل السيليكا، قاعدية مثل الماغنيسيا، ومتعادلة مثل الألومينا والكروميت) ومعامل الانصهار."
    ],
    keyFormulas: [
      {
        title: "مركبات بوج في الأسمنت البورتلاندي (Bogue's Equations)",
        formula: "C3S = 4.07(CaO) - 7.60(SiO2) - 6.72(Al2O3) - 1.43(Fe2O3) - 2.85(SO3)",
        notes: "C2S = 2.87(SiO2) - 0.754(C3S) | C3A = 2.65(Al2O3) - 1.69(Fe2O3) | C4AF = 3.04(Fe2O3)"
      },
      {
        title: "معامل تشبع الجير (Lime Saturation Factor - LSF)",
        formula: "LSF = (CaO - 0.7 SO3) / (2.8 SiO2 + 1.2 Al2O3 + 0.65 Fe2O3)",
        notes: "يجب أن تتراوح قيمة LSF في الأسمنت عالي الجودة بين 0.66 و 1.02."
      }
    ],
    examHotspots: [
      "جدول مقارنة بين مركبات بوج الأربعة من حيث: سرعة التفاعل، كمية الحرارة المنبعثة (Heat of Hydration)، ومساهمة كل منها في القوة المبكرة وطويلة المدى.",
      "لماذا يستخدم أسمنت منخفض الحرارة (Low Heat Cement) في بناء السدود والكتل الخرسانية الضخمة؟",
      "ما الفرق بين الطريقة الجافة والطريقة الرطبة في تصنيع الأسمنت، وما هي مزايا وعيوب كل طريقة؟"
    ]
  },
  {
    id: "polymers-lubricants",
    number: 5,
    titleAr: "البوليمرات واللدائن والزيوت ومواد التزييت",
    titleEn: "Polymers, Plastics & Lubricants",
    icon: "Layers",
    color: "from-purple-600 to-indigo-700",
    badge: "الوحدة الخامسة • 15% من الامتحان",
    summary: "كيمياء وتصنيف البوليمرات، الفرق بين البلمرة بالإضافة والتكثيف، اللدائن الحرارية والمتصلبة، ونظرية التزييت وخواص الزيوت الهندسية.",
    learningObjectives: [
      "التمييز بين بلمرة الإضافة (Addition / Chain Growth) وبلمرة التكثيف (Condensation / Step Growth) مع أمثلة المعادلات (البولي إيثيلين والنايلون والباكلايت).",
      "المقارنة الجوهرية بين اللدائن الملدنة بالحرارة (Thermoplastics) واللدائن المتصلبة بالحرارة (Thermosetting Plastics).",
      "فهم ميكانيكية التزييت: التزييت الهيدروديناميكي الكامل (Hydrodynamic)، وتزييت الحدود (Boundary)، وتزييت الضغوط القصوى (Extreme Pressure).",
      "تحديد الخواص الفيزيائية والكيميائية للزيوت: مؤشر اللزوجة (Viscosity Index)، نقطة الوميض والاشتعال (Flash & Fire Points)، نقطة الانسكاب (Pour Point)، ورقم التصبن (Saponification Value)."
    ],
    keyFormulas: [
      {
        title: "مؤشر اللزوجة (Viscosity Index - Dean & Davis)",
        formula: "VI = [(L - U) / (L - H)] × 100",
        notes: "U: لزوجة الزيت المختبر عند 40°C. L: لزوجة زيت مرجعي ضعيف الحساسية للحرارة. H: لزوجة زيت عالي الجودة قليل التغير بالحرارة."
      },
      {
        title: "رقم التصبن (Saponification Value)",
        formula: "S.V. (mg KOH / g oil) = [(V_blank - V_titrated) × N × 56.1] / Weight of Oil (g)",
        notes: "يساعد في كشف غش الزيوت المعدنية بالزيوت النباتية أو الحيوانية القابلة للتصبن."
      }
    ],
    examHotspots: [
      "مقارنة جدولية شاملة بين اللدائن الملدنة بالحرارة (Thermoplastics) والمتصلدة بالحرارة (Thermosetting) مع 3 أمثلة لكل نوع.",
      "معادلة تحضير راتنج الفينول فورمالدهيد (الباكلايت - Bakelite) ودوره كعازل كهربي فائق.",
      "ما هي الإضافات الهندسية لزيوت التزييت (Lubricant Additives) مثل: مضادات الأكسدة، خافضات نقطة الانسكاب، ومحسنات مؤشر اللزوجة؟"
    ]
  }
];

export const SHOUBRA_EXAM_TIPS = [
  {
    title: "لا تهمل كتابة المعادلات الكيميائية الموزونة",
    tip: "دكاترة قسم الكيمياء بهندسة شبرا يمنحون نصف درجة السؤال على المعادلات الكيميائية الموزونة (مثل تفاعلات الجير، وترسيب فوسفات الكالسيوم، وتفاعلات الصدأ)."
  },
  {
    title: "خطوات مسألة الـ Lime-Soda في فاينال شبرا (15-20 درجة)",
    tip: "ابدأ دائماً بجدول تحويل كل ملح إلى مكافئ كربونات الكالسيوم (CaCO3 Equivalent = Salt mg/L × 50 / Eq.wt). الخطوة الخاطئة في الجدول تعطل حسابات الجير والصودا بالكامل."
  },
  {
    title: "الرسم التوضيحي للجهاز في الامتحان التحريري",
    tip: "رسم جهاز أورسات (Orsat)، البومب كالوريميتر، خلية التآكل الجلفاني، وقطب التضحية يعتبر شرطاً أساسياً للحصول على الدرجة الكاملة في أسئلة المقال بهندسة شبرا."
  },
  {
    title: "امتحان العملي والشفوي (الـ Viva)",
    tip: "يُسأل الطالب في شبرا عن ألوان الأدلة (EBT مع EDTA ولماذا pH=10)، والفرق بين ريدوود 1 و 2، وأهمية نقطة الوميض في تأمين مخازن الوقود."
  }
];

export const BENHA_EXAM_TIPS = SHOUBRA_EXAM_TIPS;
