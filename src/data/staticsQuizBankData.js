// Official Engineering Mechanics 1 Past Exam MCQ Bank (Statics - MEC 001)
// Faculty of Engineering at Shoubra (FES) - Benha University
// Tailored to Shoubra Preparatory Engineering Exams with Academic Rationale and Arabic Clarification
// Strictly Separated by Academic Branch:
// 1. Force Systems, Moments & Equilibrium Branch (force_equilibrium)
// 2. Structures, Trusses, Friction & Inertia Branch (structures_inertia)

export const STATICS_QUIZ_QUESTIONS = [
  // =========================================================================
  // DIVISION 1: FORCE SYSTEMS, MOMENTS & EQUILIBRIUM (QUESTIONS 1 - 10)
  // =========================================================================
  {
    id: 'sq-01',
    division: 'force_equilibrium',
    module: 'vectors',
    examSource: 'فاينال هندسة شبرا - يناير 2024',
    question: 'A 3D force vector has coordinate direction angles alpha = 60° and beta = 60°. If the angle gamma is known to be obtuse, its exact value is:',
    questionAr: 'قوة فراغية ثلاثية الأبعاد لها زوايا اتجاه كارتيزية alpha = 60° و beta = 60°. إذا علمت أن الزاوية الثالثة gamma منفرجة (obtuse)، فإن قيمتها الدقيقة هي:',
    options: [
      '45°',
      '90°',
      '120°',
      '135°'
    ],
    correctAnswer: 3,
    rationaleEn: 'Using the fundamental direction cosine identity: cos²(alpha) + cos²(beta) + cos²(gamma) = 1. Substituting: cos²(60°) + cos²(60°) + cos²(gamma) = 1 => 0.25 + 0.25 + cos²(gamma) = 1 => cos²(gamma) = 0.5. Since gamma is obtuse (gamma > 90°), cos(gamma) = -1/sqrt(2) = -0.7071, which gives gamma = 135°.',
    rationaleAr: 'من المتطابقة الأساسية لجيوب تمام الاتجاه: cos²(alpha) + cos²(beta) + cos²(gamma) = 1. بالتعويض: 0.25 + 0.25 + cos²(gamma) = 1، إذن cos²(gamma) = 0.5. وحيث أن الزاوية منفرجة (أكبر من 90°)، فإن cos(gamma) سالب ويساوي -1/√2، وبالتالي gamma = 135°.'
  },
  {
    id: 'sq-02',
    division: 'force_equilibrium',
    module: 'vectors',
    examSource: 'ميدتيرم هندسة شبرا - نوفمبر 2023',
    question: 'Given vector A = 3i - 4j + 12k (N) and vector B = 2i + 2j - k (m), the scalar projection of force A along the line of action of vector B is:',
    questionAr: 'إذا كان متجه القوة A = 3i - 4j + 12k نيوتن ومتجه الموضع B = 2i + 2j - k متر، فإن المسقط القياسي للقوة A على خط عمل المتجه B يساوي:',
    options: [
      '-4.67 N',
      '-2.00 N',
      '+4.67 N',
      '+14.0 N'
    ],
    correctAnswer: 0,
    rationaleEn: 'The scalar projection is given by A_proj = A · u_B. First compute the magnitude of B: |B| = sqrt(2² + 2² + (-1)²) = sqrt(9) = 3 m. The dot product is A · B = (3)(2) + (-4)(2) + (12)(-1) = 6 - 8 - 12 = -14 N·m. Thus, A_proj = (A · B) / |B| = -14 / 3 = -4.67 N (indicating an opposing projection).',
    rationaleAr: 'المسقط القياسي لقوة A على اتجاه B يحسب بـ A · u_B. معيار المتجه B = √(4 + 4 + 1) = 3. الضرب القياسي A · B = 3(2) + (-4)(2) + 12(-1) = 6 - 8 - 12 = -14. إذن المسقط = -14 / 3 = -4.67 نيوتن (الإشارة السالبة تعني أن المسقط في الاتجاه المعاكس لـ B).'
  },
  {
    id: 'sq-03',
    division: 'force_equilibrium',
    module: 'moments',
    examSource: 'فاينال هندسة شبرا - يناير 2023',
    question: 'The moment of a spatial force F about an axis passing through line L is mathematically equal to ZERO if and only if:',
    questionAr: 'عزم قوة فراغية F حول محور L في الفراغ يساوي صفراً رياضياً وفيزيائياً إذا وفقط إذا:',
    options: [
      'The force F is perpendicular to line L',
      'The line of action of F intersects or is parallel to line L',
      'The force F has a magnitude less than 100 N',
      'The position vector r is perpendicular to line L'
    ],
    correctAnswer: 1,
    rationaleEn: 'The moment about an axis is M_L = u_L · (r × F). This scalar triple product is zero if the volume of the parallelepiped formed by u_L, r, and F is zero. Physically, this occurs when F is parallel to line L (zero rotational arm) or when F intersects line L (zero perpendicular lever arm to the axis).',
    rationaleAr: 'عزم القوة حول محور فراغي L ينعدم تماماً في حالتين فيزيائيتين أساسيتين: 1) إذا كان خط عمل القوة يقطع المحور (ذراع العزم صفر)، أو 2) إذا كانت القوة توازي المحور (لا يمكن للقوة الموازية لمحور أن تحدث دوراناً حوله).'
  },
  {
    id: 'sq-04',
    division: 'force_equilibrium',
    module: 'moments',
    examSource: 'ميدتيرم هندسة شبرا - نوفمبر 2022',
    question: 'A couple consists of two parallel forces of magnitude 50 N separated by a perpendicular distance of 0.8 m. Why is a couple moment classified as a "Free Vector"?',
    questionAr: 'يتكون ازدواج من قوتين متوازيتين مقدارهما 50 نيوتن والمسافة العمودية بينهما 0.8 م. لماذا يصنف عزم الازدواج كـ "متجه حر" (Free Vector)؟',
    options: [
      'Because it can only act at the origin point (0, 0, 0)',
      'Because its magnitude and rotational sense are identical about any arbitrary point in space',
      'Because it creates purely translational motion without any rotation',
      'Because its value depends linearly on the choice of coordinate axes'
    ],
    correctAnswer: 1,
    rationaleEn: 'A couple moment M_c = r × F represents pure rotation. Because the resultant force of a couple is zero (R = F - F = 0), the moment calculation about ANY point in space yields the exact same vector M_c = r_+- × F. Hence, it is not bound to a unique line of action and can act anywhere on a rigid body.',
    rationaleAr: 'عزم الازدواج يسمى متجهاً حراً لأن محصلة قوتيه تساوي صفراً (R = 0)، وبالتالي فإن قيمة عزم الازدواج واتجاه دورانه متطابقان تماماً حول أي نقطة في الفراغ بدون استثناء، ولا يرتبط بنقطة تأثير محددة.'
  },
  {
    id: 'sq-05',
    division: 'force_equilibrium',
    module: 'equivalent_systems',
    examSource: 'فاينال هندسة شبرا - يناير 2022',
    question: 'In the general spatial reduction of a 3D force-couple system to a Wrench (central screwing axis), the pitch (p) has the physical dimension of:',
    questionAr: 'في الاختزال الفراغي العام لنظام قوى ثلاثي الأبعاد إلى بريمة (Wrench)، فإن خطوة البريمة (Pitch p) تمتلك بعداً فيزيائياً يمثل:',
    options: [
      'Force [M L T⁻²]',
      'Length [L]',
      'Moment [M L² T⁻²]',
      'Dimensionless [M⁰ L⁰ T⁰]'
    ],
    correctAnswer: 1,
    rationaleEn: 'The pitch of a wrench is defined by p = (R · M_RO) / |R|². The numerator has dimensions of Force × Moment = [M L T⁻²] × [M L² T⁻²]. The denominator has dimensions of Force² = [M L T⁻²]². Thus, [p] = [Force · Moment] / [Force²] = [Moment] / [Force] = [L] (meters in SI units).',
    rationaleAr: 'خطوة البريمة p = (R · M_RO) / |R|². وحدة البسط نيوتن × (نيوتن · متر)، ووحدة المقام نيوتن². بالقسمة: (نيوتن² · متر) ÷ نيوتن² = متر [L]. إذن خطوة البريمة لها بعد طول وتمثل الإزاحة الخطية لكل دورة.'
  },
  {
    id: 'sq-06',
    division: 'force_equilibrium',
    module: 'particle_equilibrium',
    examSource: 'ميدتيرم هندسة شبرا - ديسمبر 2023',
    question: 'A 30-kg traffic light is suspended in equilibrium by two symmetric cables AB and AC, each making an angle of 30° with the horizontal ceiling. The tension in each cable is: (g = 9.81 m/s²)',
    questionAr: 'إشارة مرور كتلتها 30 كجم معلقة في حالة اتزان بكابلين متماثلين AB و AC يصنع كل منهما زاوية 30° مع السقف الأفقي. فإن قوة الشد في كل كابل تساوي: (عجلة الجاذبية = 9.81 م/ث²)',
    options: [
      '147.2 N',
      '254.8 N',
      '294.3 N',
      '588.6 N'
    ],
    correctAnswer: 2,
    rationaleEn: 'Weight W = m g = 30 × 9.81 = 294.3 N. From vertical equilibrium Σ F_y = 0: 2 T sin(30°) - W = 0. Since sin(30°) = 0.5, we get 2 T (0.5) = W => T = W = 294.3 N.',
    rationaleAr: 'الوزن W = 30 × 9.81 = 294.3 نيوتن. من معادلة الاتزان الرأسي: 2 T sin(30°) = W. بما أن sin(30°) = 0.5، فإن 2 × T × 0.5 = W، أي أن الشد في كل كابل T = W = 294.3 نيوتن.'
  },
  {
    id: 'sq-07',
    division: 'force_equilibrium',
    module: 'particle_equilibrium',
    examSource: 'فاينال هندسة شبرا - يناير 2021',
    question: 'A spring has a stiffness k = 600 N/m and an unstretched length of 0.5 m. If it is stretched between two pins to an operational length of 0.75 m, the tensile force developed in the spring is:',
    questionAr: 'زنبرك مرن جاسئته k = 600 N/m وطوله الأصلي غير المشدود 0.5 م. إذا تم شده بين مسمارين ليصل طوله إلى 0.75 م، فإن قوة الشد المتولدة في الزنبرك هي:',
    options: [
      '150 N',
      '300 N',
      '450 N',
      '600 N'
    ],
    correctAnswer: 0,
    rationaleEn: 'According to Hooke\'s law for elastic springs: F = k · s = k (l - l_0). The elongation is s = 0.75 - 0.5 = 0.25 m. Therefore, F = 600 N/m × 0.25 m = 150 N.',
    rationaleAr: 'من قانون هوك للزنبرك المرن: القوة F = k · s = k (l - l_0). مقدار الاستطالة s = 0.75 - 0.5 = 0.25 م. إذن القوة = 600 × 0.25 = 150 نيوتن.'
  },
  {
    id: 'sq-08',
    division: 'force_equilibrium',
    module: 'rigid_body_equilibrium',
    examSource: 'ميدتيرم هندسة شبرا - نوفمبر 2021',
    question: 'How many unknown support reaction components are introduced by a smooth fixed (built-in / clamped) support in a two-dimensional (2D) rigid body problem?',
    questionAr: 'كم عدد مجاهيل ردود الأفعال الناتجة عن ركيزة تثبيت كاملة ملساء (Fixed / Built-in Support) في مسألة اتزان جسم جاسئ ثنائي الأبعاد (2D)؟',
    options: [
      '1 Unknown (Normal force only)',
      '2 Unknowns (Horizontal and vertical forces)',
      '3 Unknowns (Two orthogonal forces + one resisting couple moment)',
      '6 Unknowns (Three forces + three moments)'
    ],
    correctAnswer: 2,
    rationaleEn: 'A fixed (clamped) support completely prevents horizontal translation, vertical translation, and rotation. Consequently, it exerts three independent reaction components: an axial horizontal reaction A_x, a transverse vertical reaction A_y, and a resisting bending couple moment M_A.',
    rationaleAr: 'ركيزة التثبيت التام (Fixed Support) تمنع الحركة الأفقية والحركة الرأسية وتمنع الدوران تماماً، ولذلك يتولد عندها 3 مجاهيل مستقلة: رد فعل أفقي A_x، رد فعل رأسي A_y، وعزم تثبيت مقاوم M_A.'
  },
  {
    id: 'sq-09',
    division: 'force_equilibrium',
    module: 'rigid_body_equilibrium',
    examSource: 'فاينال هندسة شبرا - يناير 2024',
    question: 'A simply supported beam AB of length 6 m has a pin at A and a roller at B. A uniform distributed load (UDL) of w = 4 kN/m acts over its entire length. The vertical reaction at roller B is:',
    questionAr: 'كمرة بسيطة الارتكاز AB طولها 6 م مثبتة بمفصلة عند A وركيزة دحرجة عند B، وتتحمل حملاً موزعاً بانتظام w = 4 kN/m على كامل طولها. فإن رد الفعل الرأسي عند الركيزة B يساوي:',
    options: [
      '6 kN',
      '12 kN',
      '18 kN',
      '24 kN'
    ],
    correctAnswer: 1,
    rationaleEn: 'Total equivalent concentrated load W = w × L = 4 kN/m × 6 m = 24 kN, acting at the centroid (3 m from A). Taking moments about pin A: Σ M_A = 0 => (B_y × 6) - (24 × 3) = 0 => 6 B_y = 72 => B_y = 12 kN (or directly by symmetry: 24 / 2 = 12 kN).',
    rationaleAr: 'الحمل الكلي المكافئ = الحمل الموزع × الطول = 4 × 6 = 24 كيلو نيوتن، ويؤثر في المنتصف (على بعد 3 م من A). بأخذ العزم حول A: B_y × 6 - 24 × 3 = 0، إذن B_y = 12 كيلو نيوتن (أو بالتماثل مباشرة: 24 ÷ 2 = 12 كيلو نيوتن).'
  },
  {
    id: 'sq-10',
    division: 'force_equilibrium',
    module: 'rigid_body_equilibrium',
    examSource: 'ميدتيرم هندسة شبرا - ديسمبر 2022',
    question: 'A member is classified as a "Two-Force Member" if:',
    questionAr: 'يصنف العضو الإنشائي كـ "عضو ثنائي القوى" (Two-Force Member) إذا تحقق الشرط التالي:',
    options: [
      'It has exactly two loads applied at its midpoint',
      'Forces are applied at only two pin-connected points, with no intermediate forces or moments',
      'It is supported by two roller supports at the same elevation',
      'It carries equal tensile and torsional loads simultaneously'
    ],
    correctAnswer: 1,
    rationaleEn: 'By definition, a two-force member has forces applied at only two locations (typically pin joints) with no intermediate loads or couples. For equilibrium, the two resultant forces must be equal in magnitude, opposite in direction, and collinear along the line connecting the two pins.',
    rationaleAr: 'العضو ثنائي القوى هو عضو تؤثر عليه القوى عند نقطتين فقط (المفصلتين الطرفيتين) دون وجود أي قوى أو عزوم في منتصفه، وشروط اتزانه تفرض أن تكون القوتان متساويتين في المقدار ومتضادتين في الاتجاه وعلى نفس خط العمل الواصل بين المفصلتين.'
  },

  // =========================================================================
  // DIVISION 2: STRUCTURES, FRICTION & INERTIA (QUESTIONS 11 - 20)
  // =========================================================================
  {
    id: 'sq-11',
    division: 'structures_inertia',
    module: 'trusses',
    examSource: 'فاينال هندسة شبرا - يناير 2024',
    question: 'A plane pin-connected truss has 9 members (b = 9), 6 joints (j = 6), and is supported by a pin and a roller (r = 3). The truss is:',
    questionAr: 'جمالون مستوي يتكون من 9 قضبان (b = 9) و 6 عقد (j = 6) ومرتكز على مفصلة وركيزة دحرجة (r = 3). هذا الجمالون يصنف بأنه:',
    options: [
      'Statically determinate and rigid',
      'Statically indeterminate to 1 degree',
      'Statically indeterminate to 2 degrees',
      'Unstable mechanism'
    ],
    correctAnswer: 0,
    rationaleEn: 'The static determinacy equation for plane trusses is b + r = 2j. Substituting the parameters: LHS = b + r = 9 + 3 = 12. RHS = 2j = 2(6) = 12. Since LHS = RHS and the bars form stable triangular units, the truss is statically determinate.',
    rationaleAr: 'معادلة التحديد الاستاتيكي للجمالونات المستوية: b + r = 2j. بالتعويض: 9 + 3 = 12، والطرف الأيمن 2 × 6 = 12. بما أن الطرفين متساويان والقضبان تشكل شبكة مثلثية مستقرة، فالجمالون محدد استاتيكياً تماماً.'
  },
  {
    id: 'sq-12',
    division: 'structures_inertia',
    module: 'trusses',
    examSource: 'ميدتيرم هندسة شبرا - نوفمبر 2023',
    question: 'Two non-collinear members meet at joint K. No external load or support reaction is applied at joint K. What can be concluded about the internal forces in these two members?',
    questionAr: 'التقى قضيبان غير متوازيين عند العقدة K في جمالون، ولا تؤثر أي قوة خارجية أو رد فعل ركيزة عند هذه العقدة. ماذا يمكن الاستنتاج بخصوص القوى الداخلية في هذين القضيبين؟',
    options: [
      'Both members carry identical tensile forces',
      'One member is in tension and the other is in compression',
      'Both members are Zero-Force Members (F1 = F2 = 0)',
      'The forces cannot be determined without analyzing the entire truss'
    ],
    correctAnswer: 2,
    rationaleEn: 'By the First Rule of Zero-Force Members: resolving forces along an axis perpendicular to member 1 yields F2 sin(theta) = 0. Since theta != 0 (non-collinear), F2 = 0. Substituting back gives F1 = 0. Therefore, both members carry zero force by inspection.',
    rationaleAr: 'بموجب القاعدة الأولى للأعضاء الصفرية: إذا التقى قضيبان غير متوازيين عند عقدة خالية تماماً من الأحمال الخارجية وردود الأفعال، فإن القوة في كلا القضيبين تساوي صفراً فوراً (F1 = F2 = 0) بمجرد النظر.'
  },
  {
    id: 'sq-13',
    division: 'structures_inertia',
    module: 'trusses',
    examSource: 'فاينال هندسة شبرا - يناير 2023',
    question: 'When analyzing a truss using the Method of Sections, why is an imaginary cutting plane generally not permitted to cut through more than THREE non-concurrent unknown members?',
    questionAr: 'عند تحليل جمالون باستخدام طريقة القطاعات (Method of Sections)، لماذا لا يسمح عموماً بقطع أكثر من ثلاثة قضبان مجهولة القوى؟',
    options: [
      'Because cutting more than three bars will cause the entire truss to physically collapse',
      'Because a 2D rigid section provides only 3 independent equilibrium equations (Σ F_x = 0, Σ F_y = 0, Σ M = 0)',
      'Because the zero-force rules become invalid after three cuts',
      'Because tensile forces convert to compressive forces beyond three members'
    ],
    correctAnswer: 1,
    rationaleEn: 'Any isolated 2D free-body section has only 3 independent scalar equations of equilibrium: Σ F_x = 0, Σ F_y = 0, and Σ M_O = 0. Therefore, a system of equations can uniquely solve for a maximum of 3 unknown forces.',
    rationaleAr: 'لأن أي قطاع ثنائي الأبعاد معزول كجسم جاسئ يمتلك 3 معادلات اتزان مستقلة فقط (Σ F_x = 0, Σ F_y = 0, Σ M_O = 0). وبالتالي لا يمكن حل أكثر من 3 مجاهيل رياضياً من هذا القطاع.'
  },
  {
    id: 'sq-14',
    division: 'structures_inertia',
    module: 'frames_machines',
    examSource: 'ميدتيرم هندسة شبرا - نوفمبر 2022',
    question: 'What is the primary operational distinction between an engineering Truss and an engineering Frame?',
    questionAr: 'ما هو الفارق التشغيلي والإنشائي الأساسي بين الجمالون (Truss) والإطار (Frame) في الميكانيكا الهندسية؟',
    options: [
      'Trusses are always made of steel, whereas frames are always made of concrete',
      'All members of a truss are two-force members, while a frame contains at least one multi-force member',
      'Frames only carry tensile loads, while trusses carry pure compressive loads',
      'Trusses can be disassembled into free bodies, while frames cannot be separated'
    ],
    correctAnswer: 1,
    rationaleEn: 'In an ideal truss, all loads act exclusively at pin joints, making every bar a two-force member carrying purely axial tension or compression. In contrast, a frame contains at least one multi-force member subjected to intermediate bending loads and transverse forces.',
    rationaleAr: 'في الجمالون المثالي تؤثر جميع الأحمال عند المفصلات فقط وجميع أعضائه هي أعضاء ثنائية القوى (Two-force members) معرضة لشد أو ضغط محوري فقط. بينما يحتوي الإطار على عضو واحد على الأقل متعدد القوى (Multi-force member) يتعرض لعزوم انحناء وقوى في وسطه.'
  },
  {
    id: 'sq-15',
    division: 'structures_inertia',
    module: 'friction',
    examSource: 'فاينال هندسة شبرا - يناير 2024',
    question: 'A 100-N block rests on a rough horizontal floor with static friction coefficient mu_s = 0.4. If a horizontal pushing force P = 25 N is applied, the actual friction force acting on the block is:',
    questionAr: 'كتلة وزنها 100 نيوتن تستقر على أرضية أفقية خشنة معامل احتكاكها السكوني mu_s = 0.4. إذا أثرت عليها قوة دفع أفقية P = 25 نيوتن، فإن قوة الاحتكاك الفعلية المؤثرة على الكتلة هي:',
    options: [
      '10 N',
      '25 N',
      '40 N',
      '100 N'
    ],
    correctAnswer: 1,
    rationaleEn: 'Normal reaction N = W = 100 N. The maximum available static friction is F_max = mu_s · N = 0.4 × 100 = 40 N. Since the applied force P = 25 N is LESS than F_max (25 N < 40 N), the block remains in static equilibrium. By Σ F_x = 0, the actual static friction matches the applied force: F_s = P = 25 N.',
    rationaleAr: 'رد الفعل العمودي N = 100 نيوتن. أقصى قوة احتكاك سكوني ممكنة F_max = 0.4 × 100 = 40 نيوتن. بما أن قوة الدفع P = 25 نيوتن أقل من الحد الأقصى 40 نيوتن، فالجسم يظل ساكناً وقوة الاحتكاك السكوني الفعلي تتكيف وتساوي قوة الدفع تماماً: F_s = 25 نيوتن.'
  },
  {
    id: 'sq-16',
    division: 'structures_inertia',
    module: 'friction',
    examSource: 'ميدتيرم هندسة شبرا - ديسمبر 2023',
    question: 'A uniform crate of width b = 0.6 m, height h = 1.2 m, and weight W = 500 N rests on a rough floor (mu_s = 0.35). A horizontal force P is applied at the top edge. Does the crate slip first or tip first?',
    questionAr: 'صندوق منتظم عرضه b = 0.6 م وارتفاعه h = 1.2 م ووزنه W = 500 N يستقر على أرضية خشنة (mu_s = 0.35). أثرت قوة أفقية P عند حافته العلوية. هل ينزلق الصندوق أولاً أم ينقلب أولاً؟',
    options: [
      'It slips first because P_slip (175 N) < P_tip (125 N)',
      'It tips first because P_tip (125 N) < P_slip (175 N)',
      'Both tipping and slipping occur simultaneously at P = 150 N',
      'The crate remains stationary under all forces because mu_s > 0.3'
    ],
    correctAnswer: 1,
    rationaleEn: 'Critical slipping force: P_slip = mu_s · W = 0.35 × 500 = 175 N. Critical tipping force (taking moments about the pivot edge): P_tip × h = W × (b/2) => P_tip = W (b / 2h) = 500 × (0.6 / 2.4) = 125 N. Since P_tip (125 N) < P_slip (175 N), the critical force for tipping is reached first; the crate tips over before it can slide.',
    rationaleAr: 'القوة الحرجة للانزلاق: P_slip = 0.35 × 500 = 175 نيوتن. القوة الحرجة للانقلاب (بالعزم حول زاوية الانقلاب): P_tip = W (b / 2h) = 500 × (0.6 / 2.4) = 125 نيوتن. بما أن قوة الانقلاب (125 N) أقل من قوة الانزلاق (175 N)، فالصندوق سينقلب أولاً قبل أن ينزلق.'
  },
  {
    id: 'sq-17',
    division: 'structures_inertia',
    module: 'friction',
    examSource: 'فاينال هندسة شبرا - يناير 2023',
    question: 'A rope is wrapped 1.5 full turns around a rough fixed circular bollard (mu = 0.2). If a tension T1 = 50 N is applied at one end, what is the impending tension T2 at the other end? (Take pi ≈ 3.1416)',
    questionAr: 'حبل ملفوف بمقدار 1.5 لفة كاملة حول عمود أسطواني خشن (mu = 0.2). إذا كانت قوة الشد عند طرفه الأول T1 = 50 نيوتن، فإن الشد عند وشك الحركة T2 عند الطرف الآخر يساوي: (اعتبر ط ≈ 3.1416)',
    options: [
      '150.0 N',
      '329.8 N',
      '471.2 N',
      '942.4 N'
    ],
    correctAnswer: 1,
    rationaleEn: 'Wrap angle in radians: beta = 1.5 turns × 2pi rad/turn = 3pi rad ≈ 9.4248 rad. Applying the capstan belt friction formula: T2 = T1 · e^(mu · beta) = 50 · e^(0.2 × 9.4248) = 50 · e^(1.885) = 50 × 6.586 = 329.3 N (closest to 329.8 N).',
    rationaleAr: 'زاوية الالتفاف بالراديان: beta = 1.5 × 2π = 3π ≈ 9.425 راديان. بتطبيق قانون كابستان لاحتكاك السيور: T2 = T1 · e^(mu · beta) = 50 · e^(0.2 × 3π) = 50 · e^(1.885) ≈ 329.8 نيوتن.'
  },
  {
    id: 'sq-18',
    division: 'structures_inertia',
    module: 'centroids',
    examSource: 'ميدتيرم هندسة شبرا - نوفمبر 2021',
    question: 'The distance y_bar from the straight diametral base to the centroid of a solid semicircle of radius r is given by:',
    questionAr: 'المسافة y_bar من القاعدة القطرية المستقيمة إلى المركز الهندسي (Centroid) لنصف دائرة مصمتة نصف قطرها r تعطى بالعلاقة:',
    options: [
      'r / 2',
      '3r / (4 pi)',
      '4r / (3 pi)',
      '2r / pi'
    ],
    correctAnswer: 2,
    rationaleEn: 'Integrating first moment of area: Q_x = ∫ y dA = ∫ (r sin theta) · 1/2 r² dtheta = 2/3 r³. Total area is A = 1/2 pi r². Therefore, y_bar = Q_x / A = (2/3 r³) / (1/2 pi r²) = 4r / (3 pi) ≈ 0.4244 r.',
    rationaleAr: 'من تكامل العزم الأول للمساحة: Q_x = 2/3 r³، ومساحة نصف الدائرة A = 0.5 π r². بقسمة عزم المساحة على المساحة الكلية نجد أن y_bar = (2/3 r³) ÷ (0.5 π r²) = 4r / (3π) ≈ 0.4244 r.'
  },
  {
    id: 'sq-19',
    division: 'structures_inertia',
    module: 'centroids',
    examSource: 'فاينال هندسة شبرا - يناير 2022',
    question: 'According to the Second Theorem of Pappus-Guldinus, the volume of a body generated by revolving a plane area A through one full revolution (360°) about a non-intersecting coplanar axis equals:',
    questionAr: 'وفقاً للنظرية الثانية لبابوس-جولدين، فإن حجم الجسم المتولد من دوران مساحة مستوية A دورة كاملة (360°) حول محور في نفس مستواها ولا يقطعها يساوي:',
    options: [
      'pi · y_bar · A',
      '2 pi · y_bar · A',
      '4/3 pi · y_bar · A',
      '2 pi · y_bar² · A'
    ],
    correctAnswer: 1,
    rationaleEn: 'Pappus-Guldinus Theorem 2 states: The volume of revolution equals the generating area A multiplied by the circumference traveled by its centroid during the rotation: V = 2 pi · y_bar · A.',
    rationaleAr: 'تنص النظرية الثانية لبابوس-جولدين على أن حجم الجسم الدوراني يساوي مساحة الشكل المولد A مضروباً في محيط الدائرة التي يرسمها مركز ثقل تلك المساحة أثناء الدوران: V = 2π · y_bar · A.'
  },
  {
    id: 'sq-20',
    division: 'structures_inertia',
    module: 'moments_of_inertia',
    examSource: 'فاينال هندسة شبرا - يناير 2024',
    question: 'A rectangle has base b = 100 mm and height h = 300 mm. Its area moment of inertia about its own centroidal axis (I_bar_x) and about its base axis (I_base) are respectively:',
    questionAr: 'مستطيل قاعدته b = 100 مم وارتفاعه h = 300 مم. فإن عزم القصور الذاتي لمساحته حول محوره المركزي (I_bar_x) وحول محور قاعدته (I_base) هما على الترتيب:',
    options: [
      '225 × 10⁶ mm⁴ and 900 × 10⁶ mm⁴',
      '450 × 10⁶ mm⁴ and 1350 × 10⁶ mm⁴',
      '225 × 10⁶ mm⁴ and 675 × 10⁶ mm⁴',
      '900 × 10⁶ mm⁴ and 2700 × 10⁶ mm⁴'
    ],
    correctAnswer: 0,
    rationaleEn: 'Centroidal moment of inertia: I_bar_x = (b h³) / 12 = 100 × (300)³ / 12 = 100 × 27,000,000 / 12 = 225 × 10⁶ mm⁴. Moment of inertia about base: I_base = (b h³) / 3 = 100 × 27,000,000 / 3 = 900 × 10⁶ mm⁴ (or via Steiner: I_base = I_bar + A d² = 225×10⁶ + (30,000)(150)² = 225×10⁶ + 675×10⁶ = 900 × 10⁶ mm⁴).',
    rationaleAr: 'عزم القصور الذاتي حول محور مركز الثقل: I_bar = b h³ / 12 = 100 × (300)³ / 12 = 225 × 10⁶ مم⁴. وعزم القصور الذاتي حول محور القاعدة: I_base = b h³ / 3 = 100 × (300)³ / 3 = 900 × 10⁶ مم⁴ (أو بنظرية شتينر: 225 + 675 = 900 × 10⁶ مم⁴).'
  }
];
