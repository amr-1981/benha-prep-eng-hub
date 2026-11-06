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
