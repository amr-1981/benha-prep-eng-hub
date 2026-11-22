// Verified Real Course Materials & Repository Data - Shoubra Engineering (FES)
// All files here have genuine, working download/view links with zero dummy or dead links.

export const MATERIAL_CATEGORIES = [
  { id: 'all', label: 'جميع الماتريال المتاحة حالياً', icon: 'FolderArchive' },
  { id: 'lectures', label: '📚 كشاكيل وسلايدات المحاضرات', icon: 'BookOpen' },
  { id: 'cheatsheets', label: '🖨️ شيتات A4 الجاهزة للطباعة والـ PDF', icon: 'FileText' },
  { id: 'vault', label: '🧠 بنك الحفظ والمصطلحات المعتمد', icon: 'Sparkles' }
];

export const CLOUD_DRIVES = [
  {
    title: 'رابط ملف ملخص المحاضرات على Google Drive',
    subtitle: 'ملخص محاضرات د. سمر عبد الحميد ود. هناء عبد الوهاب (33 صفحة ممسوحة ضوئياً)',
    link: 'https://drive.google.com/file/d/1TvPbTdmj_b8lzBEvgS0BS_ddN3lfCF7N/view?usp=sharing',
    type: 'drive',
    badge: 'ملف Drive حقيقي معتمد',
    color: 'from-blue-600 to-indigo-700'
  }
];

export const REAL_MATERIAL_FILES = [
  // 1. Scanned Lectures Part 1: Dr. Samar Abdelhamed (Electrochemistry & Corrosion)
  {
    id: 'mat-notebook-samar',
    category: 'lectures',
    division: 'electro',
    title: 'كشكول محاضرات الكيمياء الكهربية والتآكل (د. سمر عبد الحميد)',
    titleEn: 'Electrochemistry & Corrosion Course Lectures Notebook (Dr. Samar Abdelhamed)',
    descriptionEn: 'Handwritten lecture notebook for Shoubra Engineering: Galvanic cells, reduction potential series, SHE electrode, Nernst equation, Gibbs free energy, corrosion mechanisms, and cathodic protection.',
    description: 'الملخص المكتوب بخط اليد والمعتمد من طلاب شبرا (الصفحات 1 إلى 14): الخلايا الجلفانية، السلسلة الكهروكيميائية، قطب SHE، معادلة نيرنست، طاقة جيبس ΔG°، ميكانيكية التآكل والصدأ، الحماية الكاثودية (قطب التضحية والتيار القسري)، والطلاء ومثبطات التآكل.',
    author: 'محاضرات د. سمر عبد الحميد - هندسة شبرا',
    format: 'PDF',
    size: 'متاح للتحميل',
    pages: 14,
    date: 'الفصل الدراسي الأول',
    isOfficial: true,
    actionType: 'external_link',
    viewUrl: 'https://drive.google.com/file/d/1TvPbTdmj_b8lzBEvgS0BS_ddN3lfCF7N/view?usp=sharing',
    downloadUrl: 'https://drive.usercontent.google.com/download?id=1TvPbTdmj_b8lzBEvgS0BS_ddN3lfCF7N&export=download',
    tags: ['Dr. Samar', 'Electrochemistry', 'Nernst Equation', 'Corrosion', 'Cathodic Protection']
  },

  // 2. Scanned Lectures Part 2: Dr. Hanaa Abdelwahaab (Thermochemistry & Fuels)
  {
    id: 'mat-notebook-hanaa',
    category: 'lectures',
    division: 'thermal',
    title: 'كشكول محاضرات الكيمياء الحرارية وهندسة الوقود (د. هناء عبد الوهاب)',
    titleEn: 'Thermochemistry & Fuels Engineering Lectures Notebook (Dr. Hanaa Abdelwahaab)',
    descriptionEn: 'Handwritten lecture notebook: First law of thermodynamics, enthalpy vs internal energy, Hess\'s law, bomb calorimetry, proximate & ultimate fuel analysis, and Dulong formula.',
    description: 'الملخص المكتوب بخط اليد والمعتمد من طلاب شبرا (الصفحات 15 إلى 33): القانون الأول للديناميكا، وحدات الطاقة، حسابات ΔH = ΔE + ΔnRT والشغل، قانون هس وطاقات الروابط، مسعر القنبلة والقهوة، التحليل التقريبي والنهائي للفحم، ومعادلة دولونج.',
    author: 'محاضرات د. هناء عبد الوهاب - هندسة شبرا',
    format: 'PDF',
    size: 'متاح للتحميل',
    pages: 19,
    date: 'الفصل الدراسي الأول',
    isOfficial: true,
    actionType: 'external_link',
    viewUrl: 'https://drive.google.com/file/d/1TvPbTdmj_b8lzBEvgS0BS_ddN3lfCF7N/view?usp=sharing',
    downloadUrl: 'https://drive.usercontent.google.com/download?id=1TvPbTdmj_b8lzBEvgS0BS_ddN3lfCF7N&export=download',
    tags: ['Dr. Hanaa', 'Thermochemistry', 'Hess Law', 'Bomb Calorimeter', 'Fuels', 'Dulong']
  },

  // 3. Real Platform Printable A4 Sheet: Water Treatment
  {
    id: 'mat-sheet-water',
    category: 'cheatsheets',
    division: 'thermal',
    title: 'شيت ملخص قوانين ومعادلات معالجة المياه والجير والصودا (A4)',
    titleEn: 'Water Technology, Hardness & Lime-Soda Softening Formulas (A4)',
    descriptionEn: 'Printable A4 formula sheet with CaCO3 equivalent conversion tables, lime & soda equations, and boiler problem prevention walkthroughs.',
    description: 'ورقة A4 ملخصة جاهزة للطباعة والتصدير كـ PDF: جميع معادلات الترسيب، جدول تحويل مكافئ CaCO3 Eq، وقوانين الجير والصودا التجارية مع مسألة فاينال نموذجية محلولة بالخطوات.',
    author: 'منصة إعدادي هندسة شبرا • قسم الكيمياء (د. هناء)',
    format: 'A4 / PDF',
    size: 'محتوى تفاعلي',
    pages: 1,
    date: '2024 / 2025',
    isOfficial: true,
    actionType: 'platform_sheet',
    targetTab: 'cheatsheets',
    targetSheetId: 'sheet-water',
    tags: ['Water Treatment', 'Lime Soda', 'A4 Printable', 'Model Solution']
  },

  // 4. Real Platform Printable A4 Sheet: Fuels & Combustion
  {
    id: 'mat-sheet-fuels',
    category: 'cheatsheets',
    division: 'thermal',
    title: 'شيت ملخص قوانين الوقود والاحتراق ومعادلة دولونج (A4)',
    titleEn: 'Fuels & Combustion: GCV, NCV & Dulong Empirical Laws (A4)',
    descriptionEn: 'Printable A4 formula sheet with Dulong formula for GCV, net calorific value, and theoretical combustion air volume calculations.',
    description: 'ورقة A4 ملخصة جاهزة للطباعة: معادلة دولونج للقيمة الحرارية GCV و NCV، قوانين حساب كتلة وحجم الهواء النظري للاحتراق، ومقارنة الرقم الأوكتاني والرقم السيتاني.',
    author: 'منصة إعدادي هندسة شبرا • قسم الكيمياء (د. هناء)',
    format: 'A4 / PDF',
    size: 'محتوى تفاعلي',
    pages: 1,
    date: '2024 / 2025',
    isOfficial: true,
    actionType: 'platform_sheet',
    targetTab: 'cheatsheets',
    targetSheetId: 'sheet-fuels',
    tags: ['Fuels', 'Dulong Formula', 'Combustion Air', 'Octane Number']
  },

  // 5. Real Platform Printable A4 Sheet: Corrosion & Cathodic Protection
  {
    id: 'mat-sheet-corrosion',
    category: 'cheatsheets',
    division: 'electro',
    title: 'شيت ملخص كيمياء التآكل والصدأ والحماية الكاثودية (A4)',
    titleEn: 'Corrosion Electrochemistry, PBR & Cathodic Protection Map (A4)',
    descriptionEn: 'Printable A4 summary with differential aeration cell mechanisms, galvanic bimetallic corrosion, sacrificial anodes, and ICCP systems.',
    description: 'ورقة A4 ملخصة جاهزة للطباعة: تفاعلات الأنود والكاثود، أنواع التآكل، مقارنة الجلفنة بالقصدير، وقوانين الحماية بقطب التضحية والتيار القسري المفروض.',
    author: 'منصة إعدادي هندسة شبرا • قسم الكيمياء (د. سمر)',
    format: 'A4 / PDF',
    size: 'محتوى تفاعلي',
    pages: 1,
    date: '2024 / 2025',
    isOfficial: true,
    actionType: 'platform_sheet',
    targetTab: 'cheatsheets',
    targetSheetId: 'sheet-corrosion',
    tags: ['Corrosion', 'Cathodic Protection', 'Rust Reactions', 'Galvanizing']
  },

  // 6. Real Platform Printable A4 Sheet: Cement & Bogue
  {
    id: 'mat-sheet-cement',
    category: 'cheatsheets',
    division: 'thermal',
    title: 'شيت ملخص كيمياء الأسمنت البورتلاندي ومركبات بوج و LSF (A4)',
    titleEn: 'Portland Cement Clinker Phases & Bogue Compounds Matrix (A4)',
    descriptionEn: 'Printable A4 sheet with C3S, C2S, C3A, C4AF clinker phase roles, Lime Saturation Factor (LSF) calculations, and gypsum retardation.',
    description: 'ورقة A4 ملخصة جاهزة للطباعة: معادلات بوج الأربعة (C3S, C2S, C3A, C4AF)، قانون معامل تشبع الجير LSF والمدى القياسي، ودور الجبس في منع الشك الخاطف.',
    author: 'منصة إعدادي هندسة شبرا • قسم الكيمياء (د. هناء)',
    format: 'A4 / PDF',
    size: 'محتوى تفاعلي',
    pages: 1,
    date: '2024 / 2025',
    isOfficial: true,
    actionType: 'platform_sheet',
    targetTab: 'cheatsheets',
    targetSheetId: 'sheet-cement',
    tags: ['Cement', 'Bogue', 'LSF Ratio', 'Concrete Durability']
  },

  // 7. Real Platform Printable A4 Sheet: Polymers & Lubricants
  {
    id: 'mat-sheet-polymers',
    category: 'cheatsheets',
    division: 'thermal',
    title: 'شيت ملخص البوليمرات واللدائن وزيوت التزييت والتشحيم (A4)',
    titleEn: 'Polymers Classification & Lubricating Oils Comparison Matrix (A4)',
    descriptionEn: 'Printable A4 comparison sheet covering Thermoplastics vs Thermosets, Viscosity Index (VI), flash & fire point safety, and saponification testing.',
    description: 'ورقة A4 ملخصة جاهزة للطباعة: مقارنة اللدائن الحرارية والمتصلدة، مؤشر اللزوجة VI، نقطة الوميض، وقانون رقم التصبن S.V. لكشف غش الزيوت.',
    author: 'منصة إعدادي هندسة شبرا • قسم الكيمياء (د. هناء)',
    format: 'A4 / PDF',
    size: 'محتوى تفاعلي',
    pages: 1,
    date: '2024 / 2025',
    isOfficial: true,
    actionType: 'platform_sheet',
    targetTab: 'cheatsheets',
    targetSheetId: 'sheet-polymers',
    tags: ['Polymers', 'Lubricants', 'Flash Point', 'Saponification']
  },

  // 8. Full Memorization Glossary Vault
  {
    id: 'mat-glossary-vault',
    category: 'vault',
    division: 'all',
    title: 'بنك ومعجم مصطلحات وقوانين الكيمياء الهندسية ليلة الامتحان',
    titleEn: 'Engineering Chemistry Comprehensive Glossary & Formulas Vault',
    descriptionEn: 'Academic definitions, governing mathematical laws, and exam reasoning questions tailored for Preparatory Engineering at Shoubra.',
    description: 'الدليل الكامل للمصطلحات العلمية والقوانين والتعليلات (علل) للمنهج كاملاً مع نظام الفلاش كاردز التفاعلي للحفظ بنسبة إتقان وإمكانية الطباعة المباشرة A4.',
    author: 'منصة إعدادي هندسة شبرا • قسم الكيمياء',
    format: 'تفاعلي / طباعة',
    size: 'بنك شامل',
    pages: 35,
    date: 'مراجعة نهائية',
    isOfficial: true,
    actionType: 'platform_sheet',
    targetTab: 'glossary',
    tags: ['Glossary', 'Definitions', 'Formulas', 'Flashcards', 'Exam Review']
  },

  // 9. Real Platform Printable A4 Sheet: Math 1 Calculus & Leibniz
  {
    id: 'mat-sheet-math-calculus',
    category: 'cheatsheets',
    division: 'calculus',
    title: 'شيت قوانين المشتقات العليا ونظرية لايبنتز وتايلور (A4)',
    titleEn: 'Calculus Higher Derivatives, Leibniz & Taylor Series Formulas (A4)',
    descriptionEn: 'Printable A4 summary sheet covering standard derivatives, L\'Hôpital indeterminate forms, Leibniz product rule, and Taylor expansions for Shoubra Engineering.',
    description: 'ورقة قوانين مكثفة لمقرر التفاضل بهندسة شبرا: المشتقات القياسية، قاعدة لوبيتال للحالات غير المعينة، ومفكوك لايبنتز بحاصل ضرب الدوال.',
    author: 'منصة إعدادي هندسة شبرا • قسم الرياضيات 1',
    format: 'A4 / PDF',
    size: 'محتوى تفاعلي',
    pages: 1,
    date: '2024 / 2025',
    isOfficial: true,
    actionType: 'platform_sheet',
    targetTab: 'cheatsheets',
    tags: ['Math 1', 'Calculus', 'Leibniz', 'Taylor Series', 'Derivatives']
  },

  // 10. Real Platform Printable A4 Sheet: Math 1 Algebra & 3D Geometry
  {
    id: 'mat-sheet-math-algebra',
    category: 'cheatsheets',
    division: 'algebra',
    title: 'شيت المصفوفات وحذف غاوس والأعداد المركبة والهندسة الفراغية (A4)',
    titleEn: 'Linear Algebra, Matrices, Complex Numbers & 3D Geometry Formulas (A4)',
    descriptionEn: 'Printable A4 cheat sheet covering 3x3 matrix inverse, Gauss-Jordan elimination, De Moivre roots of unity, and plane equations in space.',
    description: 'ورقة قوانين مكثفة لمقرر الجبر بهندسة شبرا: محدد ورتبة ومقلوب المصفوفات، نظرية ديموافر والجذور النونية، ومعادلات المستقيم والمستوى والمسافات في الفراغ.',
    author: 'منصة إعدادي هندسة شبرا • قسم الرياضيات 1',
    format: 'A4 / PDF',
    size: 'محتوى تفاعلي',
    pages: 1,
    date: '2024 / 2025',
    isOfficial: true,
    actionType: 'platform_sheet',
    targetTab: 'cheatsheets',
    tags: ['Math 1', 'Algebra', 'Matrices', 'Complex Numbers', '3D Geometry']
  },

  // ==================== TECHNICAL ENGLISH (HUM 001) ====================
  // 11. Real Platform Printable A4 Sheet: Affixes & Technical Vocabulary
  {
    id: 'mat-sheet-eng-affixes',
    category: 'cheatsheets',
    division: 'vocab_grammar',
    title: 'شيت فك وتفكيك السوابق واللواحق والمصطلحات الهندسية (A4)',
    titleEn: 'Engineering Affixes, Greek & Latin Roots & Morphological Decoding (A4)',
    descriptionEn: 'High-density printable A4 cheat sheet for Shoubra Engineering: Prefix matrix (nano-, micro-, ultra-, poly-), Latin roots (duct, fer, vert), and noun/adjective formers.',
    description: 'ورقة A4 ملخصة ومكثفة لفك الكلمات الهندسية المركبة: مصفوفة السوابق القياسية، الجذور اللاتينية واليونانية المتكررة، وقواعد تحويل الأفعال لصفات ومصطلحات معتمدة.',
    author: 'منصة إعدادي هندسة شبرا • قسم اللغة الإنجليزية الفنية',
    format: 'A4 / PDF',
    size: 'محتوى تفاعلي',
    pages: 1,
    date: '2024 / 2025',
    isOfficial: true,
    actionType: 'platform_sheet',
    targetTab: 'cheatsheets',
    tags: ['Technical English', 'HUM 001', 'Prefixes', 'Suffixes', 'Roots', 'Decoding']
  },

  // 12. Real Platform Printable A4 Sheet: Engineering Grammar & Passive Voice
  {
    id: 'mat-sheet-eng-grammar',
    category: 'cheatsheets',
    division: 'vocab_grammar',
    title: 'شيت قواعد الكتابة الهندسية والمبني للمجهول في المعامل والتقارير (A4)',
    titleEn: 'Engineering Grammar, Passive Voice Lab Conventions & Cause-Effect Connectors (A4)',
    descriptionEn: 'Printable A4 reference sheet covering active-to-passive conversion in methodology, hedging modals, and precision measurement clauses.',
    description: 'ورقة A4 جاهزة للطباعة: قواعد تحويل أفعال التجارب المعملية للمبني للمجهول، أدوات الربط السببية المقارنة، وصياغة الأبعاد الفيزيائية بدون أخطاء ركاكة.',
    author: 'منصة إعدادي هندسة شبرا • قسم اللغة الإنجليزية الفنية',
    format: 'A4 / PDF',
    size: 'محتوى تفاعلي',
    pages: 1,
    date: '2024 / 2025',
    isOfficial: true,
    actionType: 'platform_sheet',
    targetTab: 'cheatsheets',
    tags: ['Technical English', 'HUM 001', 'Passive Voice', 'Lab Reports', 'Connectors', 'Grammar']
  },

  // 13. Real Platform Printable A4 Sheet: Technical Report Blueprint & Abstract
  {
    id: 'mat-sheet-eng-report',
    category: 'cheatsheets',
    division: 'reports_writing',
    title: 'مخطط الهيكل المعماري للتقرير الهندسي والمستخلص التنفيذي المستقل (A4)',
    titleEn: 'Formal Technical Report Blueprint & 5-Step Standalone Abstract Architecture (A4)',
    descriptionEn: 'Printable A4 blueprint outlining the 10 standard report components (Title Page, Abstract, TOC, Intro, Methodology, Results, Discussion, Conclusion, Recommendations, References).',
    description: 'مخطط هيكلي معتمد لكتابة التقارير الهندسية الرسمية: خطوات صياغة المستخلص التنفيذي الخمس، صياغة التوصيات، والتوثيق الأكاديمي IEEE.',
    author: 'منصة إعدادي هندسة شبرا • قسم اللغة الإنجليزية الفنية',
    format: 'A4 / PDF',
    size: 'محتوى تفاعلي',
    pages: 1,
    date: '2024 / 2025',
    isOfficial: true,
    actionType: 'platform_sheet',
    targetTab: 'cheatsheets',
    tags: ['Technical English', 'HUM 001', 'Report Blueprint', 'Abstract', 'IEEE', 'Technical Writing']
  },

  // 14. Real Platform Printable A4 Sheet: Mechanism & Process Flow Description
  {
    id: 'mat-sheet-eng-mechanism',
    category: 'cheatsheets',
    division: 'reports_writing',
    title: 'شيت وصف الأجهزة الميكانيكية وتدفق العمليات الصناعية خطوة بخطوة (A4)',
    titleEn: 'Mechanism & Technical Device Description vs Process Flow SOP Guide (A4)',
    descriptionEn: 'Printable cheat sheet for Shoubra Engineering: The 4-stage mechanism description model and chronological process writing for engineering systems.',
    description: 'دليل كتابة وصف المعدات والأجهزة الهندسية (المفهوم، المكونات، الوظيفة، الدورة التشغيلية) وتوثيق العمليات الصناعية بمحددات زمنية قياسية.',
    author: 'منصة إعدادي هندسة شبرا • قسم اللغة الإنجليزية الفنية',
    format: 'A4 / PDF',
    size: 'محتوى تفاعلي',
    pages: 1,
    date: '2024 / 2025',
    isOfficial: true,
    actionType: 'platform_sheet',
    targetTab: 'cheatsheets',
    tags: ['Technical English', 'HUM 001', 'Mechanism Description', 'Process Flow', 'SOP']
  },

  // 15. Real Platform Printable A4 Sheet: Professional Engineering Correspondence & Memos
  {
    id: 'mat-sheet-eng-correspondence',
    category: 'cheatsheets',
    division: 'reports_writing',
    title: 'شيت المراسلات الهندسية الاحترافية ومذكرات حوادث الموقع (A4)',
    titleEn: 'Engineering Correspondence: Formal Email Protocols & Site Incident Memos (A4)',
    descriptionEn: 'Printable A4 cheat sheet containing formal engineering email structure, action request closing formulas, and internal technical memo templates.',
    description: 'قوالب وصيغ جاهزة للمراسلات الهندسية: إيميلات طلب البيانات وموافقة الاستشاري، ومذكرات حوادث الموقع الطارئة بأسلوب فني حاسم واحترافي.',
    author: 'منصة إعدادي هندسة شبرا • قسم اللغة الإنجليزية الفنية',
    format: 'A4 / PDF',
    size: 'محتوى تفاعلي',
    pages: 1,
    date: '2024 / 2025',
    isOfficial: true,
    actionType: 'platform_sheet',
    targetTab: 'cheatsheets',
    tags: ['Technical English', 'HUM 001', 'Formal Email', 'Technical Memo', 'Site Incident']
  },

  // 16. Technical English Vocabulary & Rules Vault
  {
    id: 'mat-eng-glossary-vault',
    category: 'vault',
    division: 'all',
    title: 'معجم المصطلحات الفنية وقواعد الكتابة الهندسية الشامل (HUM 001)',
    titleEn: 'Comprehensive Technical English Glossary & Writing Vault (HUM 001)',
    descriptionEn: 'Interactive vault of academic definitions, affixes, grammar conventions, report templates, and concise editing rules with instant Arabic explanations.',
    description: 'بنك شامل للمصطلحات الهندسية الشائعة وقواعد الكتابة لمهندسي إعدادي شبرا، مزود بنظام فلاش كاردز تفاعلي وشرح بالعربي عند الحاجة.',
    author: 'منصة إعدادي هندسة شبرا • قسم اللغة الإنجليزية الفنية',
    format: 'تفاعلي / طباعة',
    size: 'بنك شامل',
    pages: 20,
    date: 'مراجعة نهائية',
    isOfficial: true,
    actionType: 'platform_sheet',
    targetTab: 'glossary',
    tags: ['Technical English', 'HUM 001', 'Vocabulary', 'Grammar', 'Report Writing', 'Flashcards']
  },

  // 17. Real Platform Printable A4 Sheet: Elasticity & Hooke's Law
  {
    id: 'mat-sheet-phys-elasticity',
    category: 'cheatsheets',
    division: 'properties_mechanics',
    title: 'شيت قوانين المرونة والإجهاد والانفعال ومعامل يونج (A4)',
    titleEn: 'Mechanical Elasticity, Stress-Strain & Young\'s Modulus (A4 Sheet)',
    descriptionEn: 'Printable A4 cheat sheet containing tensile stress-strain relations, Young\'s modulus, Bulk modulus, Poisson\'s ratio, and strain energy formulas.',
    description: 'ورقة A4 مكثفة ومجهزة للطباعة: قوانين المرونة ومعامل يونج ومعامل القص ونسبة بواسون مع خطوات حل مسائل استطالة الأسلاك في امتحانات شبرا.',
    author: 'منصة إعدادي هندسة شبرا • قسم الرياضيات والفيزياء الهندسية',
    format: 'A4 / PDF',
    size: 'محتوى تفاعلي',
    pages: 1,
    date: '2024 / 2025',
    isOfficial: true,
    actionType: 'platform_sheet',
    targetTab: 'cheatsheets',
    tags: ['Physics 1', 'PHY 001', 'Elasticity', 'Young Modulus', 'Poisson Ratio']
  },

  // 18. Real Platform Printable A4 Sheet: Surface Tension & Stokes' Viscosity
  {
    id: 'mat-sheet-phys-viscosity',
    category: 'cheatsheets',
    division: 'properties_mechanics',
    title: 'شيت قوانين التوتر السطحي والأنابيب الشعرية ولزوجة ستوكس (A4)',
    titleEn: 'Surface Tension, Jurin\'s Law & Stokes\' Viscosity (A4 Sheet)',
    descriptionEn: 'Printable A4 cheat sheet covering Young-Laplace excess pressure in bubbles/drops, Jurin\'s capillary rise, Stokes drag, and terminal velocity.',
    description: 'ورقة A4 مكثفة ومجهزة للطباعة: الضغط الإضافي داخل الفقاعات والقطرات، قانون يوران للارتفاع الشعري، وقانون ستوكس والسرعة الحدية وسريان بوازيه.',
    author: 'منصة إعدادي هندسة شبرا • قسم الرياضيات والفيزياء الهندسية',
    format: 'A4 / PDF',
    size: 'محتوى تفاعلي',
    pages: 1,
    date: '2024 / 2025',
    isOfficial: true,
    actionType: 'platform_sheet',
    targetTab: 'cheatsheets',
    tags: ['Physics 1', 'PHY 001', 'Surface Tension', 'Stokes Law', 'Terminal Velocity', 'Viscosity']
  },

  // 19. Real Platform Printable A4 Sheet: Fluid Dynamics & Bernoulli
  {
    id: 'mat-sheet-phys-hydro',
    category: 'cheatsheets',
    division: 'properties_mechanics',
    title: 'شيت ديناميكا الموائع ومعادلتي الاستمرارية وبرنولي ومقياس فنتوري (A4)',
    titleEn: 'Fluid Dynamics: Continuity, Bernoulli & Flowmeters (A4 Sheet)',
    descriptionEn: 'Printable A4 cheat sheet containing continuity equation, Bernoulli energy conservation, Venturi meter discharge, and Torricelli efflux speed.',
    description: 'ورقة A4 مكثفة ومجهزة للطباعة: معادلة الاستمرارية وحفظ الكتلة، معادلة برنولي للأنابيب الأفقية والمائلة، وحساب معدل التدفق في أنبوب فنتوري وتفريغ الخزانات.',
    author: 'منصة إعدادي هندسة شبرا • قسم الرياضيات والفيزياء الهندسية',
    format: 'A4 / PDF',
    size: 'محتوى تفاعلي',
    pages: 1,
    date: '2024 / 2025',
    isOfficial: true,
    actionType: 'platform_sheet',
    targetTab: 'cheatsheets',
    tags: ['Physics 1', 'PHY 001', 'Bernoulli', 'Continuity', 'Venturi Meter', 'Hydrodynamics']
  },

  // 20. Real Platform Printable A4 Sheet: Thermal Conduction & Thermodynamics
  {
    id: 'mat-sheet-phys-thermal',
    category: 'cheatsheets',
    division: 'heat_waves',
    title: 'شيت قوانين التمدد الحراري والتوصيل فورييه والديناميكا الحرارية (A4)',
    titleEn: 'Thermal Physics: Expansion, Fourier Conduction & 1st Law (A4 Sheet)',
    descriptionEn: 'Printable A4 cheat sheet containing thermal stress, Fourier steady-state heat conduction, thermal resistance in composite walls, and thermodynamic gas work.',
    description: 'ورقة A4 مكثفة ومجهزة للطباعة: الإجهاد الحراري في القضبان المقيدة، قانون فورييه للجدران متعددة الطبقات وحساب درجة حرارة الفاصل Tx، وشغل الغاز في التغيرات الإيزوثرمية والأديباتية.',
    author: 'منصة إعدادي هندسة شبرا • قسم الرياضيات والفيزياء الهندسية',
    format: 'A4 / PDF',
    size: 'محتوى تفاعلي',
    pages: 1,
    date: '2024 / 2025',
    isOfficial: true,
    actionType: 'platform_sheet',
    targetTab: 'cheatsheets',
    tags: ['Physics 1', 'PHY 001', 'Thermal Expansion', 'Fourier Conduction', 'Thermodynamics']
  },

  // 21. Real Platform Printable A4 Sheet: SHM & Acoustics Doppler
  {
    id: 'mat-sheet-phys-waves',
    category: 'cheatsheets',
    division: 'heat_waves',
    title: 'شيت الحركة التوافقية البسيطة وموجات الصوت وظاهرة دوبلر (A4)',
    titleEn: 'Acoustics & Waves: SHM, Sound Decibels & Doppler Effect (A4 Sheet)',
    descriptionEn: 'Printable A4 cheat sheet covering simple pendulum, mass-spring oscillators, speed of sound in gases, decibel scale, and Doppler frequency shifts.',
    description: 'ورقة A4 مكثفة ومجهزة للطباعة: معادلة الحركة التوافقية وعلاقة البندول البسيط بعجلة الجاذبية g، طاقة الاهتزاز، مقياس الديسيبل اللوغاريتمي، وقاعدة إشارات ظاهرة دوبلر.',
    author: 'منصة إعدادي هندسة شبرا • قسم الرياضيات والفيزياء الهندسية',
    format: 'A4 / PDF',
    size: 'محتوى تفاعلي',
    pages: 1,
    date: '2024 / 2025',
    isOfficial: true,
    actionType: 'platform_sheet',
    targetTab: 'cheatsheets',
    tags: ['Physics 1', 'PHY 001', 'SHM', 'Simple Pendulum', 'Sound Intensity', 'Doppler Effect']
  },

  // 22. Engineering Physics 1 Laws & Formulas Vault
  {
    id: 'mat-phys-glossary-vault',
    category: 'vault',
    division: 'all',
    title: 'معجم قوانين ومصطلحات الفيزياء الهندسية 1 الشامل (PHY 001)',
    titleEn: 'Comprehensive Engineering Physics 1 Laws & Formulas Vault (PHY 001)',
    descriptionEn: 'Interactive vault of 26+ physical laws, definitions, unit dimensions, and laboratory derivations covering properties of matter, fluid mechanics, heat, and wave motion.',
    description: 'بنك شامل لجميع قوانين وتعريفات وتجارب معمل الفيزياء 1 المقررة على طلاب إعدادي هندسة شبرا، مزود بفلاش كاردز تفاعلية وشرح بالعربي.',
    author: 'منصة إعدادي هندسة شبرا • قسم الرياضيات والفيزياء الهندسية',
    format: 'تفاعلي / طباعة',
    size: 'بنك شامل',
    pages: 26,
    date: 'مراجعة نهائية',
    isOfficial: true,
    actionType: 'platform_sheet',
    targetTab: 'glossary',
    tags: ['Physics 1', 'PHY 001', 'Glossary', 'Flashcards', 'EMP Department']
  },

  // 23. Real Platform Printable A4 Sheet: 3D Force Vectors & Moments
  {
    id: 'mat-sheet-stat-vectors',
    category: 'cheatsheets',
    division: 'force_equilibrium',
    title: 'شيت متجهات الفراغ 3D، العزوم بالمحددات والازدواج والبريمة Wrench (A4)',
    titleEn: '3D Cartesian Vectors, Determinant Moments & Wrench Reduction (A4 Sheet)',
    descriptionEn: 'Printable A4 cheat sheet containing 3D coordinate direction angles, cable position vectors, vector cross products r x F, Varignon theorem, and wrench pitch.',
    description: 'ورقة A4 مكثفة ومجهزة للطباعة: متجهات القوى الكارتيزية ثلاثية الأبعاد، زوايا الاتجاه الكارتيزية، ضرب المتجهات الاتجاهي بالمحددات، عزم الازدواج كمتجه حر، والبريمة.',
    author: 'منصة إعدادي هندسة شبرا • قسم الرياضيات والفيزياء الهندسية / الميكانيكا',
    format: 'A4 / PDF',
    size: 'محتوى تفاعلي',
    pages: 1,
    date: '2024 / 2025',
    isOfficial: true,
    actionType: 'platform_sheet',
    targetTab: 'cheatsheets',
    tags: ['Statics', 'MEC 001', '3D Vectors', 'Cross Product', 'Varignon', 'Wrench']
  },

  // 24. Real Platform Printable A4 Sheet: Rigid Body Equilibrium & Support Reactions
  {
    id: 'mat-sheet-stat-equilibrium',
    category: 'cheatsheets',
    division: 'force_equilibrium',
    title: 'شيت شروط اتزان الجسيم والجسم الجاسئ وردود أفعال الركائز 2D/3D (A4)',
    titleEn: 'Rigid Body Equilibrium, Support Reactions & Spring Systems (A4 Sheet)',
    descriptionEn: 'Printable A4 cheat sheet covering 2D and 3D support reactions (roller, pin, fixed support), free-body diagrams, linear elastic springs, and two-force members.',
    description: 'ورقة A4 مكثفة ومجهزة للطباعة: نمذجة ردود أفعال الركائز في المستوي والفراغ، معادلات اتزان الجسم الجاسئ، قانون هوك للزنبرك، ومبدأ العضو ثنائي القوى Two-Force Member.',
    author: 'منصة إعدادي هندسة شبرا • قسم الرياضيات والفيزياء الهندسية / الميكانيكا',
    format: 'A4 / PDF',
    size: 'محتوى تفاعلي',
    pages: 1,
    date: '2024 / 2025',
    isOfficial: true,
    actionType: 'platform_sheet',
    targetTab: 'cheatsheets',
    tags: ['Statics', 'MEC 001', 'Equilibrium', 'FBD', 'Support Reactions', 'Two-Force Member']
  },

  // 25. Real Platform Printable A4 Sheet: Trusses & Zero-Force Rules
  {
    id: 'mat-sheet-stat-trusses',
    category: 'cheatsheets',
    division: 'structures_inertia',
    title: 'شيت تحليل الجمالونات (العقد والقطاعات) وقواعد التصفير الفوري والإطارات (A4)',
    titleEn: 'Truss Analysis (Joints & Sections), Zero-Force Rules & Frame Mechanics (A4 Sheet)',
    descriptionEn: 'Printable A4 cheat sheet covering method of joints, visual inspection rules for zero-force members, method of sections cutting protocol, and frame pin reactions.',
    description: 'ورقة A4 مكثفة ومجهزة للطباعة: شرط التحديد الاستاتيكي b + r = 2j، القواعد الهندسية لاكتشاف الأعضاء الصفرية بمجرد النظر، وطريقة القطاعات للأعضاء الداخلية.',
    author: 'منصة إعدادي هندسة شبرا • قسم الرياضيات والفيزياء الهندسية / الميكانيكا',
    format: 'A4 / PDF',
    size: 'محتوى تفاعلي',
    pages: 1,
    date: '2024 / 2025',
    isOfficial: true,
    actionType: 'platform_sheet',
    targetTab: 'cheatsheets',
    tags: ['Statics', 'MEC 001', 'Trusses', 'Zero-Force', 'Method of Sections', 'Frames']
  },

  // 26. Real Platform Printable A4 Sheet: Dry Friction & Slipping vs Tipping
  {
    id: 'mat-sheet-stat-friction',
    category: 'cheatsheets',
    division: 'structures_inertia',
    title: 'شيت قوانين الاحتكاك الجاف (كولوم)، معايير الانزلاق والانقلاب واحتكاك السيور (A4)',
    titleEn: 'Dry Coulomb Friction, Slipping vs Tipping Criterion & Belt Friction (A4 Sheet)',
    descriptionEn: 'Printable A4 cheat sheet containing static friction laws, impending motion conditions, slipping vs. tipping threshold formulas, normal force shift, and capstan belt formula.',
    description: 'ورقة A4 مكثفة ومجهزة للطباعة: قانون كولوم F = μ_s N، مقارنة القوة الحرجة للانزلاق مع قوة الانقلاب P_tip = W(b/2h)، ومضاعفة الشد في السيور T2 = T1 · e^(μβ).',
    author: 'منصة إعدادي هندسة شبرا • قسم الرياضيات والفيزياء الهندسية / الميكانيكا',
    format: 'A4 / PDF',
    size: 'محتوى تفاعلي',
    pages: 1,
    date: '2024 / 2025',
    isOfficial: true,
    actionType: 'platform_sheet',
    targetTab: 'cheatsheets',
    tags: ['Statics', 'MEC 001', 'Friction', 'Coulomb', 'Tipping', 'Slipping', 'Belt Friction']
  },

  // 27. Real Platform Printable A4 Sheet: Centroids & Inertia (Steiner)
  {
    id: 'mat-sheet-stat-inertia',
    category: 'cheatsheets',
    division: 'structures_inertia',
    title: 'شيت مراكز الثقل، نظريتي بابوس، وعزوم القصور الذاتي ونظرية شتينر للكمرات (A4)',
    titleEn: 'Centroids, Pappus Theorems, Area Moments of Inertia & Steiner Parallel Axis (A4 Sheet)',
    descriptionEn: 'Printable A4 cheat sheet covering tabular composite centroids, Pappus surface/volume theorems, centroidal area inertia, Steiner parallel-axis theorem, and radius of gyration.',
    description: 'ورقة A4 مكثفة ومجهزة للطباعة: جدول حساب مركز الثقل y_bar للأشكال المركبة، نظريتا بابوس للأجسام الدورانية، ونظرية شتينر I = I_bar + A·d² للكمرات المركبة (I-Beam).',
    author: 'منصة إعدادي هندسة شبرا • قسم الرياضيات والفيزياء الهندسية / الميكانيكا',
    format: 'A4 / PDF',
    size: 'محتوى تفاعلي',
    pages: 1,
    date: '2024 / 2025',
    isOfficial: true,
    actionType: 'platform_sheet',
    targetTab: 'cheatsheets',
    tags: ['Statics', 'MEC 001', 'Centroids', 'Pappus', 'Moment of Inertia', 'Steiner Theorem']
  },

  // 28. Engineering Statics 1 Laws & Formulas Vault
  {
    id: 'mat-stat-glossary-vault',
    category: 'vault',
    division: 'all',
    title: 'معجم قوانين ومصطلحات الميكانيكا الهندسية 1 الشامل (استاتيكا - MEC 001)',
    titleEn: 'Comprehensive Engineering Statics 1 Laws & Formulas Vault (MEC 001)',
    descriptionEn: 'Interactive vault of 26+ statics laws, equilibrium axioms, free-body diagram rules, and structural mechanics derivations covering vectors, trusses, friction, and inertia.',
    description: 'بنك شامل لجميع قوانين وتعريفات ومعايير الاستاتيكا المقررة على طلاب إعدادي هندسة شبرا، مزود بفلاش كاردز تفاعلية وأمثلة تطبيقية وشرح بالعربي.',
    author: 'منصة إعدادي هندسة شبرا • قسم الرياضيات والفيزياء الهندسية / الميكانيكا',
    format: 'تفاعلي / طباعة',
    size: 'بنك شامل',
    pages: 26,
    date: 'مراجعة نهائية',
    isOfficial: true,
    actionType: 'platform_sheet',
    targetTab: 'glossary',
    tags: ['Statics', 'MEC 001', 'Glossary', 'Flashcards', 'Mechanics Department']
  },

  // =========================================================================
  // ENGINEERING DRAWING & PROJECTION (MDP 001) - AUTHENTIC PLATFORM MATERIALS
  // =========================================================================

  // 29. Real Platform Printable A4 Sheet: ISO 128 Lines & Tangency Arcs
  {
    id: 'mat-sheet-draw-lines',
    category: 'cheatsheets',
    division: 'geometric_orthographic',
    title: 'شيت مصفوفة أنواع وسمك الخطوط ISO 128 وقوانين أقواس التماس الهندسية (A4)',
    titleEn: 'ISO 128 Standard Line Conventions & Tangency Arcs Matrix (A4 Sheet)',
    descriptionEn: 'Printable A4 cheat sheet containing ISO 128 line types, line precedence hierarchy, title block border margins, and external/internal tangency radius formulas.',
    description: 'ورقة A4 مكثفة ومجهزة للطباعة: أنواع الخطوط وسماكاتها (0.7 مم، 0.35 مم، 0.25 مم)، هرم أسبقية تراكب الخطوط، مقاييس الرسم 1:2 و 2:1، وقواعد أقواس التماس الخارجية والداخلية.',
    author: 'منصة إعدادي هندسة شبرا • قسم هندسة التصميم الميكانيكي والإنتاج',
    format: 'A4 / PDF',
    size: 'محتوى تفاعلي',
    pages: 1,
    date: '2024 / 2025',
    isOfficial: true,
    actionType: 'platform_sheet',
    targetTab: 'cheatsheets',
    tags: ['Drawing', 'MDP 001', 'ISO 128', 'Line Types', 'Tangency Arcs', 'Scales']
  },

  // 30. Real Platform Printable A4 Sheet: First-Angle Projection & 45° Miter
  {
    id: 'mat-sheet-draw-orthographic',
    category: 'cheatsheets',
    division: 'geometric_orthographic',
    title: 'شيت الإسقاط المتعامد زاوية أولى ونقل الأبعاد بخط الميتر 45° والمسقط الثالث (A4)',
    titleEn: 'First-Angle Orthographic Projection, 45° Miter Line & Missing View Protocol (A4 Sheet)',
    descriptionEn: 'Printable A4 cheat sheet covering First-Angle view arrangement (Elevation, Plan, Left Side View on right), 45° miter line transfer, and the 4-step missing view protocol.',
    description: 'ورقة A4 مكثفة ومجهزة للطباعة: محاذاة المساقط الهندسية، نقل أبعاد العمق عبر خط الـ 45° ميكانيكياً، وإسقاط الأسطوانات (دائرة واحدة ومستطيلان مع سنتر لاين).',
    author: 'منصة إعدادي هندسة شبرا • قسم هندسة التصميم الميكانيكي والإنتاج',
    format: 'A4 / PDF',
    size: 'محتوى تفاعلي',
    pages: 1,
    date: '2024 / 2025',
    isOfficial: true,
    actionType: 'platform_sheet',
    targetTab: 'cheatsheets',
    tags: ['Drawing', 'MDP 001', 'First-Angle', 'Orthographic', '45 Miter Line', 'Missing View']
  },

  // 31. Real Platform Printable A4 Sheet: 30° Isometric & Four-Center Ellipse
  {
    id: 'mat-sheet-draw-isometric',
    category: 'cheatsheets',
    division: 'isometric_sections',
    title: 'شيت المنظور الأيزومتري بزاوية 30° ورسم الدوائر بطريقة المراكز الأربعة (A4)',
    titleEn: '30° Isometric Drawing, Isometric Box & The Four-Center Ellipse Method (A4 Sheet)',
    descriptionEn: 'Printable A4 cheat sheet covering 30° isometric axes, bounding isometric box, non-isometric slanted lines, the four-center rhombus method, and 3D cylinder extrusion.',
    description: 'ورقة A4 مكثفة ومجهزة للطباعة: محاور المنظور الأيزومتري بمثلث 30°-60°، صندوق المنظور، تحديد المعين والرؤوس المنفرجة (120°)، ورسم البيضاويات على الأوجه الثلاثة.',
    author: 'منصة إعدادي هندسة شبرا • قسم هندسة التصميم الميكانيكي والإنتاج',
    format: 'A4 / PDF',
    size: 'محتوى تفاعلي',
    pages: 1,
    date: '2024 / 2025',
    isOfficial: true,
    actionType: 'platform_sheet',
    targetTab: 'cheatsheets',
    tags: ['Drawing', 'MDP 001', 'Isometric', 'Four-Center Ellipse', '30 Degrees', 'Rhombus']
  },

  // 32. Real Platform Printable A4 Sheet: Sections & Hatching Rules
  {
    id: 'mat-sheet-draw-sections',
    category: 'cheatsheets',
    division: 'isometric_sections',
    title: 'شيت القطاعات الهندسية، مواصفات خطوط التهشير 45° واستثناءات الأعصاب (A4)',
    titleEn: 'Sectional Views, ISO 45° Hatching Conventions & Web Non-Hatching Exceptions (A4 Sheet)',
    descriptionEn: 'Printable A4 cheat sheet covering full, half, and offset sections, cutting plane line (Type H), 45° hatching rules, and strict non-hatching of webs, ribs, shafts, and bolts.',
    description: 'ورقة A4 مكثفة ومجهزة للطباعة: أنواع القطاعات ومستويات القطع، القواعد الذهبية لخطوط التهشير 45°، واستثناء الأعصاب والمسامير والأعمدة المصمتة من التهشير الطولي.',
    author: 'منصة إعدادي هندسة شبرا • قسم هندسة التصميم الميكانيكي والإنتاج',
    format: 'A4 / PDF',
    size: 'محتوى تفاعلي',
    pages: 1,
    date: '2024 / 2025',
    isOfficial: true,
    actionType: 'platform_sheet',
    targetTab: 'cheatsheets',
    tags: ['Drawing', 'MDP 001', 'Sections', 'Hatching', 'Web Exception', 'Full Section', 'Half Section']
  },

  // 33. Real Platform Printable A4 Sheet: Dimensioning Rules
  {
    id: 'mat-sheet-draw-dimensioning',
    category: 'cheatsheets',
    division: 'isometric_sections',
    title: 'شيت القواعد الهندسية القياسية لوضع الأبعاد ورموز التشغيل والتفاوتات (A4)',
    titleEn: 'Standard Engineering Dimensioning Rules, Tolerances & Machining Symbols (A4 Sheet)',
    descriptionEn: 'Printable A4 cheat sheet detailing the 5 elements of dimensioning, Aligned Dimensioning System, 3:1 arrowhead proportions, diameter (⌀) vs. radius (R), and dimension taboos.',
    description: 'ورقة A4 مكثفة ومجهزة للطباعة: نظام الأبعاد المحاذي (Aligned System)، نسب الأسهم 3:1، قواعد وضع أقطار الدوائر وأنصاف الأقطار، ومحظورات وضع الأبعاد على الخطوط المخفية.',
    author: 'منصة إعدادي هندسة شبرا • قسم هندسة التصميم الميكانيكي والإنتاج',
    format: 'A4 / PDF',
    size: 'محتوى تفاعلي',
    pages: 1,
    date: '2024 / 2025',
    isOfficial: true,
    actionType: 'platform_sheet',
    targetTab: 'cheatsheets',
    tags: ['Drawing', 'MDP 001', 'Dimensioning', 'Aligned System', 'Arrowheads', 'Tolerances']
  },

  // 34. Engineering Drawing & Projection ISO Standards Vault
  {
    id: 'mat-draw-glossary-vault',
    category: 'vault',
    division: 'all',
    title: 'معجم مواصفات وقواعد الرسم الهندسي والإسقاط القياسية الشامل (ISO 128 - MDP 001)',
    titleEn: 'Comprehensive Engineering Drawing & Projection ISO 128 Standards Vault (MDP 001)',
    descriptionEn: 'Interactive vault of 26+ engineering drawing standards, ISO 128 line conventions, tangency formulas, first-angle projection rules, four-center ellipse methods, and sectioning exceptions.',
    description: 'بنك شامل لجميع قواعد ومواصفات ومعايير الرسم الهندسي والإسقاط المقررة على طلاب إعدادي هندسة شبرا، مزود بفلاش كاردز تفاعلية وأمثلة تطبيقية وشرح بالعربي.',
    author: 'منصة إعدادي هندسة شبرا • قسم هندسة التصميم الميكانيكي والإنتاج',
    format: 'تفاعلي / طباعة',
    size: 'بنك شامل',
    pages: 26,
    date: 'مراجعة نهائية',
    isOfficial: true,
    actionType: 'platform_sheet',
    targetTab: 'glossary',
    tags: ['Drawing', 'MDP 001', 'ISO 128', 'Glossary', 'Flashcards', 'Mechanical Design Department']
  }
];

export const MATERIAL_FILES = REAL_MATERIAL_FILES;

