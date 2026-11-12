// Curated YouTube Video Lessons and Educational Playlists for Engineering Chemistry
// Focused on Egyptian Engineering Curricula (Benha, Shoubra, Cairo, Ain Shams)

export const VIDEO_TOPICS = [
  { id: "all", label: "جميع الدروس والمحاضرات", icon: "Layers" },
  { id: "water", label: "معالجة المياه وعسر الماء", icon: "Droplets" },
  { id: "fuels", label: "الوقود والاحتراق ودولونج", icon: "Flame" },
  { id: "corrosion", label: "التآكل والصدأ والحماية", icon: "ShieldAlert" },
  { id: "cement", label: "الأسمنت ومركبات بوج", icon: "Building2" },
  { id: "polymers", label: "البوليمرات والزيوت", icon: "Layers" },
  { id: "labs", label: "فيديوهات المعمل والعملي", icon: "TestTube" }
];

export const YOUTUBE_CHANNELS = [
  {
    name: "قناة د. حسام مغازي وكيمياء هندسية",
    badge: "شرح أكاديمي معتمد 🎓",
    description: "شرح مفصل ومسائل محلولة لمقرر الكيمياء الهندسية للجامعات المصرية مع التركيز على مسائل الشيتات والامتحانات.",
    subscribers: "+150 ألف طالب هندسة",
    searchQuery: "كيمياء هندسية إعدادي هندسة مياه وقود تآكل",
    avatar: "👨‍🏫"
  },
  {
    name: "منصة المهندس - إعدادي هندسة بنها وشبرا",
    badge: "مذكرات وشيتات بنها 🏛️",
    description: "مراجعات ليلة الامتحان وحل شيتات قسم الكيمياء بكلية الهندسة ببنها وكلية الهندسة بشبرا.",
    subscribers: "+85 ألف طالب",
    searchQuery: "كيمياء هندسة شبرا بنها شيتات محلولة فاينال",
    avatar: "📐"
  },
  {
    name: "Engineering Chemistry by NPTEL / Egyptian Academia",
    badge: "رسوم متحركة وتجارب معملية 🔬",
    description: "تجارب المعمل الحية (معايرة EDTA، جهاز ريدوود للزوجة، نقطة الوميض بنسكي مارتنز).",
    subscribers: "+300 ألف مشترك",
    searchQuery: "EDTA titration water hardness engineering chemistry lab",
    avatar: "🧪"
  }
];

export const LECTURE_VIDEOS = [
  {
    id: "v-water-1",
    topic: "water",
    title: "شرح عسر الماء وحسابات الجير والصودا (Lime-Soda Process) بالتفصيل",
    channel: "كيمياء إعدادي هندسة",
    duration: "42 دقيقة",
    views: "95,000 مشاهدة",
    description: "حل أفكار مسائل الشيتات، وجدول تحويل الأملاح إلى CaCO3 equivalent، وطريقة التعامل مع نسب النقاوة.",
    url: "https://www.youtube.com/results?search_query=كيمياء+هندسية+مسائل+الجير+والصودا+lime+soda",
    tags: ["عسر الماء", "Lime-Soda", "CaCO3 Eq", "مسائل شيتات"]
  },
  {
    id: "v-water-2",
    topic: "water",
    title: "مشاكل مياه الغلايات: التكلس (Boiler Scales) والهشاشة الكاوية (Embrittlement)",
    channel: "المحاضرات الهندسية المعتمدة",
    duration: "28 دقيقة",
    views: "54,000 مشاهدة",
    description: "المقارنة بين الحمأة والقشور، وتفاعل كربونات الصوديوم لتكوين NaOH وتآكل مسامير الفولاذ.",
    url: "https://www.youtube.com/results?search_query=Boiler+troubles+caustic+embrittlement+engineering+chemistry",
    tags: ["الغلايات", "الهشاشة الكاوية", "القشور"]
  },
  {
    id: "v-fuels-1",
    topic: "fuels",
    title: "معادلة دولونج (Dulong's Formula) وحساب كمية الهواء النظري للاحتراق الكامل",
    channel: "أكاديمية الهندسة المصرية",
    duration: "35 دقيقة",
    views: "72,000 مشاهدة",
    description: "شرح قانون GCV و NCV وطريقة حساب حجم وكتلة الهواء بالمعادلات الوزنية المتوازنة ونسبة 21% و 23%.",
    url: "https://www.youtube.com/results?search_query=Dulong+formula+calorific+value+combustion+air+engineering+chemistry",
    tags: ["دولونج", "القيمة الحرارية", "الهواء النظري", "الاحتراق"]
  },
  {
    id: "v-fuels-2",
    topic: "fuels",
    title: "تكرير البترول، رقم الأوكتان والسيتان، وظاهرة الصفع (Knocking)",
    channel: "هندسة البترول والكيمياء",
    duration: "30 دقيقة",
    views: "48,000 مشاهدة",
    description: "برج التقطير التجزيئي، التكسير الحفزي (Cracking)، ومقارنة الأيزو أوكتان والسيتان في المحركات.",
    url: "https://www.youtube.com/results?search_query=octane+number+petroleum+refining+engineering+chemistry",
    tags: ["أوكتان", "سيتان", "بترول", "صفع"]
  },
  {
    id: "v-corrosion-1",
    topic: "corrosion",
    title: "ميكانيكية تآكل المعادن والخلايا الكهروكيميائية للصدأ (Wet & Dry Corrosion)",
    channel: "قسم الكيمياء الهندسية",
    duration: "33 دقيقة",
    views: "61,000 مشاهدة",
    description: "معادلات المصعد والمهبط في الوسط الحمضي والمتعادل، وتآكل الفروق في التهوية (Differential Aeration).",
    url: "https://www.youtube.com/results?search_query=corrosion+mechanism+galvanic+differential+aeration+engineering+chemistry",
    tags: ["التآكل", "الصدأ", "المصعد", "المهبط"]
  },
  {
    id: "v-corrosion-2",
    topic: "corrosion",
    title: "طرق الحماية الكاثودية (Cathodic Protection) والجلفنة والقصدرة",
    channel: "المحاضرات الهندسية المعتمدة",
    duration: "25 دقيقة",
    views: "50,000 مشاهدة",
    description: "شرح أقطاب التضحية (Sacrificial Anode)، التيار القسري (Impressed Current)، وسلوك الخدش في الجلفنة والقصدرة.",
    url: "https://www.youtube.com/results?search_query=Galvanizing+vs+Tinning+Cathodic+protection+engineering+chemistry",
    tags: ["الحماية الكاثودية", "الجلفنة", "القصدرة"]
  },
  {
    id: "v-cement-1",
    topic: "cement",
    title: "كيمياء صناعة الأسمنت البورتلاندي ومركبات بوج (Bogue's Compounds)",
    channel: "كيمياء مواد البناء",
    duration: "38 دقيقة",
    views: "68,000 مشاهدة",
    description: "شرح تفصيلي لدور C3S و C2S و C3A و C4AF، ودور إضافة الجبس لمنع الشك الخاطف (Flash Setting).",
    url: "https://www.youtube.com/results?search_query=Bogue+compounds+Portland+cement+hydration+engineering+chemistry",
    tags: ["الأسمنت", "بوج", "الجبس", "الشك والتصلب"]
  },
  {
    id: "v-polymers-1",
    topic: "polymers",
    title: "البوليمرات (Polymers): بلمرة الإضافة والتكثيف، واللدائن الحرارية والمتصلدة",
    channel: "هندسة المواد والبوليمر",
    duration: "32 دقيقة",
    views: "45,000 مشاهدة",
    description: "معادلات تحضير البولي إيثيلين والنايلون والباكلايت، والمقارنة الكلاسيكية في امتحانات الفاينال.",
    url: "https://www.youtube.com/results?search_query=Addition+vs+Condensation+polymerization+Thermoplastics+engineering+chemistry",
    tags: ["البوليمرات", "اللدائن", "الباكلايت", "النايلون"]
  },
  {
    id: "v-labs-1",
    topic: "labs",
    title: "فيديو التجربة العملية: تعيين عسر الماء الكلي والدائم بمعايرة EDTA خطوة بخطوة",
    channel: "معمل الكيمياء الهندسية",
    duration: "18 دقيقة",
    views: "88,000 مشاهدة",
    description: "تصوير واقعي داخل المعمل لتحضير العينة، ضبط الـ pH عند 10، وملاحظة تحول اللون من الأحمر النبيذي للأزرق.",
    url: "https://www.youtube.com/results?search_query=EDTA+titration+water+hardness+determination+lab+experiment",
    tags: ["معمل", "EDTA", "عسر الماء", "عملي"]
  }
];

// ==================== ENGINEERING MATHEMATICS 1 (MTH 001) ====================
export const MATH_VIDEO_TOPICS = [
  { id: "all", label: "جميع دروس الرياضيات 1", icon: "Layers" },
  { id: "limits", label: "لوبيتال والنهايات", icon: "Activity" },
  { id: "leibniz", label: "المشتقات العليا ولايبنتز", icon: "TrendingUp" },
  { id: "series", label: "متسلسلات تايلور وماكلورين", icon: "Layers" },
  { id: "partial", label: "التفاضل الجزئي وأويلر", icon: "GitFork" },
  { id: "matrices", label: "المصفوفات وحذف غاوس والرتبة", icon: "Grid" },
  { id: "complex", label: "الأعداد المركبة وديموافر", icon: "Zap" },
  { id: "induction", label: "الاستقراء وذات الحدين", icon: "Repeat" },
  { id: "geometry3d", label: "الهندسة الفراغية والمستوى والكرة", icon: "Box" }
];

export const MATH_YOUTUBE_CHANNELS = [
  {
    name: "رياضيات إعدادي هندسة - د. وائل شتا / دكاترة شبرا",
    badge: "شرح أكاديمي معتمد 🎓",
    description: "شرح مفصل ومسائل محلولة لمقرر الرياضيات 1 (تفاضل وجبر) لطلاب كليات الهندسة والتركيز على أفكار امتحانات شبرا.",
    subscribers: "+200 ألف طالب هندسة",
    searchQuery: "رياضيات اعدادي هندسة تفاضل جبر لايبنتز مصفوفات ديموافر",
    avatar: "📐"
  },
  {
    name: "Engineering Mathematics - Shoubra Prep Hub",
    badge: "حل شيتات وامتحانات 🏛️",
    description: "حلول نموذجية لشيتات قسم الرياضيات بكلية الهندسة بشبرا وامتحانات الفاينال السابقة خطوة بخطوة.",
    subscribers: "+110 ألف طالب",
    searchQuery: "رياضيات اعدادي هندسة شبرا شيتات تفاضل جبر",
    avatar: "🔢"
  },
  {
    name: "3Blue1Brown & Linear Algebra Visualized",
    badge: "فهم هندسي وبصري 💡",
    description: "فيديوهات الرسوم البيانية والبصرية لفهم التفاضل والمصفوفات والتحويلات الهندسية ثلاثية الأبعاد بعمق.",
    subscribers: "+6 مليون مشترك",
    searchQuery: "Essence of calculus linear algebra 3blue1brown",
    avatar: "🌌"
  }
];

export const MATH_LECTURE_VIDEOS = [
  {
    id: "vm-limits-1",
    topic: "limits",
    division: "calculus",
    title: "شرح قاعدة لوبيتال والحالات الأسية غير المعينة (1^∞, 0^0, ∞^0) باللوغاريتم",
    channel: "رياضيات هندسية",
    duration: "38 دقيقة",
    views: "120,000 مشاهدة",
    description: "خطوات تحويل الحالات غير المعينة باستخدام اللوغاريتم الطبيعي، وحل أمثلة امتحانات فاينال شبرا.",
    url: "https://www.youtube.com/results?search_query=lhopital+rule+limits+engineering+calculus",
    tags: ["لوبيتال", "نهايات", "تفاضل", "L'Hopital"]
  },
  {
    id: "vm-leibniz-1",
    topic: "leibniz",
    division: "calculus",
    title: "نظرية لايبنتز لإيجاد المشتقة النونية لحاصل ضرب دالتين (Leibniz's Formula)",
    channel: "أكاديمية الرياضيات الهندسية",
    duration: "45 دقيقة",
    views: "95,000 مشاهدة",
    description: "استنتاج صيغة لايبنتز، واختيار الدالة u القابلة للانتهاء بالاشتقاق، وإثبات المعادلات التفاضلية بالمشتقة النونية.",
    url: "https://www.youtube.com/results?search_query=leibniz+theorem+nth+derivative+engineering+math",
    tags: ["لايبنتز", "مشتقة نونية", "تفاضل", "Leibniz"]
  },
  {
    id: "vm-series-1",
    topic: "series",
    division: "calculus",
    title: "مفكوك تايلور وماكلورين (Taylor & Maclaurin Series) مع حساب باقي تايلور",
    channel: "رياضيات إعدادي هندسة",
    duration: "40 دقيقة",
    views: "80,000 مشاهدة",
    description: "حفظ المفكوك القياسي لدوال sin x, cos x, e^x, ln(1+x)، وحل مسائل التقريب مع حد الخطأ Lagrange remainder.",
    url: "https://www.youtube.com/results?search_query=taylor+maclaurin+series+engineering+math",
    tags: ["تايلور", "ماكلورين", "متسلسلات", "Taylor"]
  },
  {
    id: "vm-partial-1",
    topic: "partial",
    division: "calculus",
    title: "التفاضل الجزئي، قاعدة السلسلة ونظرية أويلر للدوال المتجانسة (Euler's Theorem)",
    channel: "رياضيات هندسية متقدمة",
    duration: "35 دقيقة",
    views: "75,000 مشاهدة",
    description: "حساب المشتقات الجزئية من الرتب العليا، إثبات تجانس الدوال وتطبيق علاقة أويلر x(dz/dx) + y(dz/dy) = n*z.",
    url: "https://www.youtube.com/results?search_query=partial+differentiation+euler+theorem+homogeneous+functions",
    tags: ["تفاضل جزئي", "أويلر", "دوال متجانسة", "Euler"]
  },
  {
    id: "vm-matrices-1",
    topic: "matrices",
    division: "algebra",
    title: "رتبة المصفوفة (Matrix Rank) وحل أنظمة المعادلات الخطية بحذف غاوس-جوردان",
    channel: "جبر خطي هندسي",
    duration: "52 دقيقة",
    views: "140,000 مشاهدة",
    description: "تحويل المصفوفة الموسعة للصورة المدرجة Row-Echelon Form، وحالات الحل الوحيد وعدد لا نهائي ولا يوجد حل.",
    url: "https://www.youtube.com/results?search_query=gauss+jordan+elimination+matrix+rank+engineering+algebra",
    tags: ["مصفوفات", "غاوس", "رتبة", "Gauss Jordan"]
  },
  {
    id: "vm-complex-1",
    topic: "complex",
    division: "algebra",
    title: "الأعداد المركبة، الصورة القطبية والأسية، ونظرية ديموافر والجذور النونية",
    channel: "جبر إعدادي هندسة",
    duration: "46 دقيقة",
    views: "110,000 مشاهدة",
    description: "تطبيق نظرية ديموافر لحساب قوى الأعداد المركبة وإيجاد الجذور التكعيبية والرباعية وتمثيلها على دائرة الوحدة في مستوى أرجاند.",
    url: "https://www.youtube.com/results?search_query=de+moivre+theorem+complex+numbers+roots+engineering+math",
    tags: ["ديموافر", "مركبة", "أرجاند", "De Moivre"]
  },
  {
    id: "vm-induction-1",
    topic: "induction",
    division: "algebra",
    title: "الاستقراء الرياضي (Mathematical Induction) ونظرية ذات الحدين لأي أس",
    channel: "أكاديمية الرياضيات",
    duration: "34 دقيقة",
    views: "65,000 مشاهدة",
    description: "خطوات الإثبات بالاستقراء، ومفكوك ذات الحدين Binomial expansion للأسس السالبة والكسرية وشرط التقارب |x| < 1.",
    url: "https://www.youtube.com/results?search_query=mathematical+induction+binomial+theorem+negative+fractional+index",
    tags: ["استقراء", "ذات الحدين", "Binomial", "Induction"]
  },
  {
    id: "vm-geometry3d-1",
    topic: "geometry3d",
    division: "algebra",
    title: "الهندسة التحليلية في الفراغ: معادلة المستقيم والمستوى والكرة والزوايا والمسافات",
    channel: "هندسة فراغية متقدمة",
    duration: "50 دقيقة",
    views: "98,000 مشاهدة",
    description: "إيجاد معادلة المستوى بمعلومية 3 نقاط أو مستقيمين متقاطعين، والبعد العمودي من نقطة إلى مستوى، ومعادلة الكرة المماسة للمستويات.",
    url: "https://www.youtube.com/results?search_query=3D+planes+lines+sphere+analytical+geometry+engineering+math",
    tags: ["فراغية", "مستوى", "مستقيم", "كرة", "3D Geometry"]
  }
];

// ==================== TECHNICAL ENGLISH (HUM 001) ====================
export const ENGLISH_VIDEO_TOPICS = [
  { id: "all", label: "جميع دروس اللغة الإنجليزية الفنية", icon: "Layers" },
  { id: "affixes", label: "السوابق واللواحق وفك المصطلحات", icon: "Hash" },
  { id: "grammar", label: "المبني للمجهول في المعامل والتقارير", icon: "Activity" },
  { id: "reports", label: "هيكل التقرير الفني والمستخلص التنفيذي", icon: "FileText" },
  { id: "mechanism", label: "وصف الأجهزة والعمليات الصناعية", icon: "Cpu" },
  { id: "correspondence", label: "الإيميل الفني ومذكرات الموقع", icon: "Send" }
];

export const ENGLISH_YOUTUBE_CHANNELS = [
  {
    name: "Engineering Communication & Technical English Hub",
    badge: "شرح أكاديمي معتمد 🎓",
    description: "شرح مفصل لمنهج اللغة الإنجليزية الفنية وإعداد التقارير الهندسية لطلاب كليات الهندسة المصرية (شبرا وبنها).",
    subscribers: "+95 ألف مهندس وطالب",
    searchQuery: "technical english engineering report writing Shoubra Benha",
    avatar: "📝"
  },
  {
    name: "Technical Writing for Engineers (IEEE & Academic Writing)",
    badge: "قوالب ومعايير دولية 🏛️",
    description: "ورش عمل لصياغة المستخلص التنفيذي Abstract، وصف الأنظمة الميكانيكية، وكتابة إيميلات العمل والمذكرات الفنية.",
    subscribers: "+140 ألف مشترك",
    searchQuery: "technical writing engineering abstract passive voice laboratory report",
    avatar: "📑"
  },
  {
    name: "Scientific & Engineering Grammar Essentials",
    badge: "قواعد وأخطاء الامتحانات 💡",
    description: "شروحات مركزة للتفريق بين الدقة والصحة (Accuracy vs Precision)، أدوات الربط، وحذف الركاكة اللغوية في الامتحانات.",
    subscribers: "+180 ألف مشترك",
    searchQuery: "engineering vocabulary affixes passive voice concise writing",
    avatar: "🇬🇧"
  }
];

export const ENGLISH_LECTURE_VIDEOS = [
  {
    id: "ve-affixes-1",
    topic: "affixes",
    division: "vocab_grammar",
    title: "فك شفرات المصطلحات الهندسية: السوابق واللواحق والجذور اللاتينية واليونانية",
    channel: "Technical English Hub",
    duration: "32 دقيقة",
    views: "85,000 مشاهدة",
    description: "طريقة استنتاج معاني الكلمات المعقدة في امتحانات شبرا من خلال مصفوفة السوابق (mega-, nano-, poly-) والجذور (duct, tract, vert).",
    url: "https://www.youtube.com/results?search_query=engineering+prefixes+suffixes+latin+roots+technical+english",
    tags: ["سوابق", "لواحق", "Affixes", "Roots", "Prefixes"]
  },
  {
    id: "ve-grammar-1",
    topic: "grammar",
    division: "vocab_grammar",
    title: "المبني للمجهول (Passive Voice) في كتابة التجارب المعملية والتقارير الفنية",
    channel: "Engineering Communication",
    duration: "28 دقيقة",
    views: "92,000 مشاهدة",
    description: "لماذا تمنع كتابة (I, We) في قسم الإجراءات بالمعمل، وكيفية التحويل الاحترافي للمبني للمجهول بالماضي البسيط.",
    url: "https://www.youtube.com/results?search_query=passive+voice+in+scientific+and+technical+writing",
    tags: ["Passive Voice", "المبني للمجهول", "Lab Reports", "Grammar"]
  },
  {
    id: "ve-grammar-2",
    topic: "grammar",
    division: "vocab_grammar",
    title: "أدوات الربط الفنية (Connectors & Transitions) والتعبير عن الأبعاد والقياسات",
    channel: "Scientific Writing Essentials",
    duration: "25 دقيقة",
    views: "64,000 مشاهدة",
    description: "استخدام روابط السبب والنتيجة (Consequently, Due to, Thereby) وصياغة أبعاد القطع الميكانيكية بدقة متناهية.",
    url: "https://www.youtube.com/results?search_query=technical+writing+cause+and+effect+connectors+transitions",
    tags: ["Connectors", "Transitions", "Cause and Effect", "Dimensions"]
  },
  {
    id: "ve-reports-1",
    topic: "reports",
    division: "reports_writing",
    title: "الهيكل المعماري للتقرير الهندسي الرسمي (Formal Technical Report Structure)",
    channel: "Technical Writing for Engineers",
    duration: "42 دقيقة",
    views: "115,000 مشاهدة",
    description: "تشريح الأقسام العشرة للتقرير الهندسي من صفحة الغلاف والمستخلص وحتى التوصيات والمراجع بأسلوب هندسي دقيق.",
    url: "https://www.youtube.com/results?search_query=engineering+technical+report+writing+structure+format",
    tags: ["Report Structure", "Technical Report", "Format", "Architecture"]
  },
  {
    id: "ve-reports-2",
    topic: "reports",
    division: "reports_writing",
    title: "كتابة المستخلص التنفيذي المستقل (Standalone Abstract) في 5 خطوات قياسية",
    channel: "Engineering Communication Hub",
    duration: "30 دقيقة",
    views: "78,000 مشاهدة",
    description: "نموذج صياغة المستخلص في 150-250 كلمة: الدافع، المشكلة، المنهجية، النتائج الرقمية، والاستنتاج دون اختصارات مجهولة.",
    url: "https://www.youtube.com/results?search_query=how+to+write+an+abstract+for+engineering+paper",
    tags: ["Abstract", "Executive Summary", "Technical Writing"]
  },
  {
    id: "ve-mechanism-1",
    topic: "mechanism",
    division: "reports_writing",
    title: "الوصف الفني للأجهزة والمعدات الميكانيكية (Mechanism & Device Description)",
    channel: "Technical Writing for Engineers",
    duration: "35 دقيقة",
    views: "58,000 مشاهدة",
    description: "نموذج المراحل الأربع لوصف الأجهزة: التعريف العام، المكونات المادية، الوظيفة التفاعلية، ودورة العمل التشغيلية كاملة.",
    url: "https://www.youtube.com/results?search_query=mechanism+description+technical+writing+engineering",
    tags: ["Mechanism", "Device Description", "Technical Writing"]
  },
  {
    id: "ve-correspondence-1",
    topic: "correspondence",
    division: "reports_writing",
    title: "أصول المراسلات الهندسية: الإيميل المهني الرسمي ومذكرات حوادث الموقع (Memos)",
    channel: "Professional Engineering Communication",
    duration: "38 دقيقة",
    views: "89,000 مشاهدة",
    description: "قواعد كتابة الإيميلات الرسمية للشركات والاستشاريين وصياغة مذكرات الحوادث الفنية الموقع وتوصيات السلامة العاجلة.",
    url: "https://www.youtube.com/results?search_query=engineering+formal+email+memo+incident+report+writing",
    tags: ["Formal Email", "Technical Memo", "Incident Report", "Correspondence"]
  }
];
