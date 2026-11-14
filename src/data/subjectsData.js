// Multi-Subject Registry for Faculty of Engineering at Shoubra (FES) - Benha University
// Preparatory Year (Term 1)

export const AVAILABLE_SUBJECTS = [
  {
    id: 'math',
    code: 'MTH 001',
    status: 'active',
    titleAr: 'الرياضيات 1 (حساب التفاضل والتكامل والجبر)',
    titleEn: 'Engineering Mathematics 1 (Calculus & Algebra)',
    shortTitleAr: 'الرياضيات 1',
    shortTitleEn: 'Math 1',
    icon: 'Calculator',
    color: 'from-blue-600 via-indigo-600 to-cyan-500',
    borderColor: 'border-blue-500/50',
    badge: '150 درجة إجمالية',
    badgeEn: '150 Total Marks (90 Final + 30 Midterm + 30 Coursework)',
    divisions: [
      { 
        id: 'calculus', 
        titleAr: 'قسم حساب التفاضل والتطبيقات', 
        titleEn: 'Calculus & Engineering Applications Branch',
        subtitleAr: 'الدوال والنهايات ولوبيتال، نظرية لايبنتز، متسلسلات تايلور، ورسم المنحنيات والانحناء',
        subtitleEn: 'Limits & L\'Hôpital, Higher Derivatives, Leibniz Formula, Taylor Series, Curvature & Partial Differentiation',
        icon: 'Binary',
        badge: '5 وحدات دراسية',
        badgeEn: '5 Modules • Calculus'
      },
      { 
        id: 'algebra', 
        titleAr: 'قسم الجبر والهندسة التحليلية والفراغية', 
        titleEn: 'Linear Algebra & 3D Analytical Geometry Branch',
        subtitleAr: 'المصفوفات وحذف غاوس-جوردان، الأعداد المركبة وديموافر، وهندسة المستويات ثلاثية الأبعاد',
        subtitleEn: 'Matrix Rank & Inverse, Gauss-Jordan Elimination, Complex Numbers, De Moivre Theorem & 3D Spatial Geometry',
        icon: 'Grid',
        badge: '5 وحدات دراسية',
        badgeEn: '5 Modules • Algebra & 3D'
      }
    ],
    descriptionAr: 'المقرر الأكاديمي المعتمد لإعدادي شبرا يشمل فرعين مستقلين: حساب التفاضل والمشتقات العليا، والجبر الخطي والمصفوفات والأعداد المركبة والهندسة الفراغية.',
    descriptionEn: 'The accredited curriculum for Preparatory Engineering at Shoubra (MTH 001) is divided into two independent branches: Differential Calculus (higher derivatives, Leibniz rule, Taylor series, and curvature) and Linear Algebra (matrices, Gauss-Jordan elimination, complex numbers, De Moivre theorem, and 3D spatial analytical geometry).'
  },
  {
    id: 'chemistry',
    code: 'CHM 001',
    status: 'active',
    titleAr: 'الكيمياء الهندسية',
    titleEn: 'Engineering Chemistry',
    shortTitleAr: 'الكيمياء الهندسية',
    shortTitleEn: 'Chemistry',
    icon: 'TestTube',
    color: 'from-cyan-600 via-teal-600 to-emerald-500',
    borderColor: 'border-cyan-500/50',
    badge: '150 درجة إجمالية',
    badgeEn: '150 Total Marks (90 Final + 30 Practical + 30 Coursework)',
    divisions: [
      { 
        id: 'thermal', 
        titleAr: 'قسم الكيمياء الحرارية والتطبيقات الصناعية', 
        titleEn: 'Thermal, Fuels & Industrial Chemistry Division',
        subtitleAr: 'إشراف: أ.د. هناء عبد الوهاب • معالجة مياه الغلايات، الوقود ودولونج، الأسمنت وبوج، والبوليمرات',
        subtitleEn: 'Supervised by Prof. Dr. Hanaa Abdelwahaab • Boiler Water Softening, Fuel Combustion & Dulong, Portland Cement Clinker & Polymers',
        icon: 'Flame',
        badge: '4 وحدات دراسية',
        badgeEn: '4 Modules • Dr. Hanaa'
      },
      { 
        id: 'electro', 
        titleAr: 'قسم الكيمياء الكهربية وتطبيقات التآكل', 
        titleEn: 'Electrochemistry & Corrosion Engineering Division',
        subtitleAr: 'إشراف: أ.د. سمر عبد الحميد • الخلايا الجلفانية، معادلة نيرنست، ميكانيكية الصدأ، والحماية الكاثودية',
        subtitleEn: 'Supervised by Prof. Dr. Samar Abdelhamed • Galvanic Cells, SHE & Reduction Series, Nernst Equation, Rusting & Cathodic Protection',
        icon: 'Zap',
        badge: 'وحدتان دراسيتان',
        badgeEn: '2 Modules • Dr. Samar'
      }
    ],
    descriptionAr: 'المقرر الأكاديمي المعتمد لإعدادي شبرا يشمل قسمين مستقلين: الكيمياء الحرارية والصناعية، والكيمياء الكهربية وهندسة التآكل.',
    descriptionEn: 'The accredited syllabus for Preparatory Engineering at Shoubra (CHM 001) comprises two core academic divisions: Thermal & Industrial Chemistry (industrial water conditioning, fuel calorific values, Portland cement, and polymers) and Electrochemical Corrosion Engineering (galvanic cells, Nernst EMF calculations, rust mechanisms, and cathodic protection).'
  },
  {
    id: 'english',
    code: 'HUM 001',
    status: 'active',
    titleAr: 'اللغة الإنجليزية الفنية والتقارير الهندسية',
    titleEn: 'Technical English & Engineering Report Writing',
    shortTitleAr: 'إنجليزي فني',
    shortTitleEn: 'Technical English',
    icon: 'FileText',
    color: 'from-emerald-600 via-teal-600 to-cyan-500',
    borderColor: 'border-emerald-500/50',
    badge: '100 درجة إجمالية',
    badgeEn: '100 Total Marks (60 Final + 20 Midterm + 20 Coursework)',
    divisions: [
      { 
        id: 'vocab_grammar', 
        titleAr: 'قسم المصطلحات الفنية وقواعد الكتابة الهندسية', 
        titleEn: 'Technical Vocabulary & Engineering Grammar Branch',
        subtitleAr: 'اشتقاق المصطلحات والبادئات اللاتينية واليونانية، قواعد المبني للمجهول، أدوات الربط والسبب، والأبعاد والقياسات',
        subtitleEn: 'Greek & Latin Morphological Decoding, Lab Passive Voice Conventions, Precision Connectors & Engineering Dimensions',
        icon: 'BookOpen',
        badge: '5 وحدات دراسية',
        badgeEn: '5 Modules • Vocab & Grammar'
      },
      { 
        id: 'reports_writing', 
        titleAr: 'قسم الكتابة الفنية وإعداد التقارير والمراسلات', 
        titleEn: 'Technical Writing & Engineering Reports Branch',
        subtitleAr: 'هيكل التقرير الهندسي الشامل والملخص التنفيذي، الوصف الفني للأجهزة والعمليات، والإيميلات والمذكرات المهنية',
        subtitleEn: '10-Part Report Architecture, Standalone Abstract Blueprint, Mechanism & Process Descriptions & Formal Memos',
        icon: 'FileEdit',
        badge: '5 وحدات دراسية',
        badgeEn: '5 Modules • Reports & Writing'
      }
    ],
    descriptionAr: 'المقرر الأكاديمي المعتمد لإعدادي شبرا يشمل فرعين: المصطلحات والقواعد الفنية المتخصصة، وهندسة كتابة التقارير والمراسلات والمذكرات المهنية.',
    descriptionEn: 'The accredited engineering communication curriculum at Shoubra (HUM 001) covers two core branches: Specialized Technical Vocabulary & Grammar (etymological affixes, laboratory passive voice style, and cause-effect connectors) and Technical Writing & Formal Reports (10-stage report blueprints, standalone executive abstract architecture, mechanism descriptions, and site incident memos).'
  },
  {
    id: 'physics',
    code: 'PHY 001',
    status: 'coming_soon',
    titleAr: 'الفيزياء الهندسية 1 (الخواص الميكانيكية والحرارية والموجات)',
    titleEn: 'Engineering Physics 1 (Mechanics, Heat & Waves)',
    shortTitleAr: 'الفيزياء 1',
    shortTitleEn: 'Physics 1',
    icon: 'Compass',
    color: 'from-purple-600 via-violet-600 to-indigo-500',
    borderColor: 'border-purple-500/40',
    badge: '150 درجة • قيد التجهيز',
    divisions: [],
    descriptionAr: 'قريباً: مرونة المواد، التوتر السطحي، اللزوجة، انتقال الحرارة والديناميكا الحرارية، والحركة التوافقية البسيطة والموجات الصوتية.'
  },
  {
    id: 'mechanics',
    code: 'MEC 001',
    status: 'coming_soon',
    titleAr: 'الميكانيكا الهندسية 1 (الاستاتيكا - علم السكون)',
    titleEn: 'Engineering Mechanics 1 (Statics)',
    shortTitleAr: 'الميكانيكا (استاتيكا)',
    shortTitleEn: 'Statics',
    icon: 'Activity',
    color: 'from-amber-600 via-orange-600 to-red-500',
    borderColor: 'border-amber-500/40',
    badge: '125 درجة • قيد التجهيز',
    divisions: [],
    descriptionAr: 'قريباً: تحليل القوى وعزوم القوى في المستوي والفراغ، الاتزان، الجمالونات (Trusses)، والمركز الهندسي والقصور الذاتي.'
  },
  {
    id: 'drawing',
    code: 'MDP 001',
    status: 'coming_soon',
    titleAr: 'الرسم الهندسي والإسقاط والعمليات الهندسية',
    titleEn: 'Engineering Drawing & Projection',
    shortTitleAr: 'الرسم الهندسي',
    shortTitleEn: 'Drawing',
    icon: 'Layers',
    color: 'from-slate-600 via-zinc-600 to-neutral-500',
    borderColor: 'border-slate-500/40',
    badge: '125 درجة • قيد التجهيز',
    divisions: [],
    descriptionAr: 'قريباً: العمليات الهندسية، استنتاج المساقط الثلاثة، والقطاعات والتهشير، والرسم المنظوري (Isometric).'
  }
];
