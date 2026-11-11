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
    divisions: [
      { 
        id: 'calculus', 
        titleAr: 'قسم حساب التفاضل والتطبيقات', 
        titleEn: 'Calculus Branch',
        subtitleAr: 'الدوال والنهايات ولوبيتال، نظرية لايبنتز، متسلسلات تايلور، ورسم المنحنيات والانحناء',
        icon: 'Binary',
        badge: '5 وحدات دراسية'
      },
      { 
        id: 'algebra', 
        titleAr: 'قسم الجبر والهندسة التحليلية والفراغية', 
        titleEn: 'Algebra & 3D Geometry Branch',
        subtitleAr: 'المصفوفات وحذف غاوس-جوردان، الأعداد المركبة وديموافر، وهندسة المستويات ثلاثية الأبعاد',
        icon: 'Grid',
        badge: '5 وحدات دراسية'
      }
    ],
    descriptionAr: 'المقرر الأكاديمي المعتمد لإعدادي شبرا يشمل فرعين مستقلين: حساب التفاضل والمشتقات العليا، والجبر الخطي والمصفوفات والأعداد المركبة والهندسة الفراغية.'
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
    divisions: [
      { 
        id: 'thermal', 
        titleAr: 'قسم الكيمياء الحرارية والتطبيقات الصناعية', 
        titleEn: 'Thermal & Industrial Chemistry',
        subtitleAr: 'إشراف: أ.د. هناء عبد الوهاب • معالجة مياه الغلايات، الوقود ودولونج، الأسمنت وبوج، والبوليمرات',
        icon: 'Flame',
        badge: '4 وحدات دراسية'
      },
      { 
        id: 'electro', 
        titleAr: 'قسم الكيمياء الكهربية وتطبيقات التآكل', 
        titleEn: 'Electrochemistry & Corrosion',
        subtitleAr: 'إشراف: أ.د. سمر عبد الحميد • الخلايا الجلفانية، معادلة نيرنست، ميكانيكية الصدأ، والحماية الكاثودية',
        icon: 'Zap',
        badge: 'وحدتان دراسيتان'
      }
    ],
    descriptionAr: 'المقرر الأكاديمي المعتمد لإعدادي شبرا يشمل قسمين مستقلين: الكيمياء الحرارية والصناعية، والكيمياء الكهربية وهندسة التآكل.'
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
