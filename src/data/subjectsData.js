// Multi-Subject Registry for Faculty of Engineering at Shoubra (FES) - Benha University
// Preparatory Year (Term 1)

export const AVAILABLE_SUBJECTS = [
  {
    id: 'math',
    code: 'MTH 001',
    titleAr: 'الرياضيات 1 (حساب التفاضل والتكامل والجبر)',
    titleEn: 'Engineering Mathematics 1 (Calculus & Algebra)',
    shortTitleAr: 'الرياضيات 1',
    shortTitleEn: 'Math 1',
    icon: 'Calculator',
    color: 'from-blue-600 via-indigo-600 to-cyan-500',
    borderColor: 'border-blue-500/50',
    badge: '150 درجة إجمالية',
    divisions: [
      { id: 'all', titleAr: 'المنهج الشامل (القسمان)', titleEn: 'Unified Math 1' },
      { id: 'calculus', titleAr: 'قسم التفاضل والتطبيقات', titleEn: 'Calculus Branch' },
      { id: 'algebra', titleAr: 'قسم الجبر والهندسة الفراغية', titleEn: 'Algebra & 3D Geometry' }
    ],
    descriptionAr: 'حساب التفاضل، نظرية لايبنتز، متسلسلات تايلور، رسم المنحنيات، المصفوفات، الأعداد المركبة وديموافر، والهندسة الفراغية ثلاثية الأبعاد.'
  },
  {
    id: 'chemistry',
    code: 'CHM 001',
    titleAr: 'الكيمياء الهندسية',
    titleEn: 'Engineering Chemistry',
    shortTitleAr: 'الكيمياء الهندسية',
    shortTitleEn: 'Chemistry',
    icon: 'FlaskConical',
    color: 'from-cyan-600 via-teal-600 to-emerald-500',
    borderColor: 'border-cyan-500/50',
    badge: '150 درجة إجمالية',
    divisions: [
      { id: 'all', titleAr: 'المنهج الشامل (القسمان)', titleEn: 'Unified Chemistry' },
      { id: 'thermal', titleAr: 'الكيمياء الحرارية والصناعية', titleEn: 'Thermal & Industrial' },
      { id: 'electro', titleAr: 'الكيمياء الكهربية والتآكل', titleEn: 'Electrochemistry & Corrosion' }
    ],
    descriptionAr: 'معالجة مياه الغلايات، هندسة الوقود ودولونج، الأسمنت وبوج، البوليمرات وزيوت التزييت، ومعادلة نيرنست والحماية الكاثودية.'
  }
];
