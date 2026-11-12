// Official Technical English Past Exam MCQ Bank (HUM 001)
// Faculty of Engineering at Shoubra (FES) - Benha University
// Tailored to Past Midterm & Final Exams with Academic Rationale and Arabic Clarification

export const ENGLISH_QUIZ_QUESTIONS = [
  // =========================================================================
  // DIVISION 1: VOCABULARY & GRAMMAR (8 QUESTIONS)
  // =========================================================================
  {
    id: 'eq-01',
    division: 'vocab_grammar',
    module: 'affixes',
    examSource: 'فاينال هندسة شبرا - يناير 2024',
    question: 'The prefix "nano-" corresponds to a metric scale factor of:',
    questionAr: 'البادئة "نانو-" (nano-) تعبر عن معامل قياسي مقداره:',
    options: [
      '10^-3',
      '10^-6',
      '10^-9',
      '10^-12'
    ],
    correctAnswer: 2,
    rationaleEn: 'In the International System of Units (SI), "milli-" is 10^-3, "micro-" is 10^-6, "nano-" is 10^-9, and "pico-" is 10^-12.',
    rationaleAr: 'في النظام الدولي للوحدات: الميلي هو 10^-3، والمايكرو 10^-6، والنانو هو 10^-9، والبيكو 10^-12.'
  },
  {
    id: 'eq-02',
    division: 'vocab_grammar',
    module: 'affixes',
    examSource: 'ميدتيرم هندسة شبرا - نوفمبر 2023',
    question: 'An instrument used specifically to measure the relative humidity of the air is called a:',
    questionAr: 'الجهاز المستخدم خصيصاً لقياس الرطوبة النسبية في الهواء يسمى:',
    options: [
      'Hydrometer',
      'Hygrometer',
      'Barometer',
      'Tachometer'
    ],
    correctAnswer: 1,
    rationaleEn: 'A "hygrometer" (from Greek hygro- = moisture) measures atmospheric moisture/humidity. A "hydrometer" measures specific gravity of liquids, a "barometer" measures atmospheric pressure, and a "tachometer" measures rotational speed (RPM).',
    rationaleAr: 'جهاز الـ Hygrometer يقيس رطوبة الهواء. بينما الـ Hydrometer يقيس كثافة السوائل، والـ Barometer يقيس الضغط الجوي، والـ Tachometer يقيس سرعة الدوران (RPM).'
  },
  {
    id: 'eq-03',
    division: 'vocab_grammar',
    module: 'affixes',
    examSource: 'فاينال هندسة شبرا - يناير 2023',
    question: 'The suffix "-able" or "-ible" in engineering terms transforms a verb into an adjective expressing:',
    questionAr: 'اللاحقة "-able" أو "-ible" تحول الفعل إلى صفة هندسية تعبر عن:',
    options: [
      'The person performing the action',
      'The capacity or fitness of a material to undergo a process',
      'The chemical reaction rate',
      'A unit of measurement'
    ],
    correctAnswer: 1,
    rationaleEn: 'The Latin suffix "-able / -ible" signifies capability or capacity, turning verbs into material property adjectives (e.g., weld -> weldable, deform -> deformable).',
    rationaleAr: 'اللاحقة -able تعني القابلية لإجراء عملية معينة على المادة، مثل قابل للتلحيم (Weldable) أو قابل للتشكيل (Deformable).'
  },
  {
    id: 'eq-04',
    division: 'vocab_grammar',
    module: 'word_formation',
    examSource: 'فاينال هندسة شبرا - يناير 2024',
    question: 'Which of the following statements accurately distinguishes "Accuracy" from "Precision"?',
    questionAr: 'أي العبارات التالية تميز بدقة بين المصطلحين "Accuracy" و "Precision"؟',
    options: [
      'Accuracy means measurements are close to each other; Precision means they are close to the true value.',
      'Accuracy is closeness to the true standard; Precision is repeatability and mutual agreement among repeated readings.',
      'Accuracy has units; Precision is always dimensionless.',
      'Both terms are synonyms and interchangeable in engineering data sheets.'
    ],
    correctAnswer: 1,
    rationaleEn: 'Accuracy represents correctness relative to a true reference value, whereas precision measures repeatability and consistency regardless of whether the reading is biased.',
    rationaleAr: 'الدقة (Accuracy) هي مدى قرب القياس من القيمة الحقيقية المرجعية. أما الإحكام (Precision) فهو مدى تكرار وتطابق القراءات عند إعادتها.'
  },
  {
    id: 'eq-05',
    division: 'vocab_grammar',
    module: 'word_formation',
    examSource: 'ميدتيرم هندسة شبرا - 2022',
    question: 'Engineering strain (ε) is defined as the change in length divided by original length. Its unit of measurement is:',
    questionAr: 'يُعرَّف الانفعال الهندسي (Strain) بأنه مقدار التغير في الطول مقسوماً على الطول الأصلي. وحدة قياسه هي:',
    options: [
      'Pascals (Pa)',
      'N/m²',
      'Millimeters (mm)',
      'Dimensionless (No unit)'
    ],
    correctAnswer: 3,
    rationaleEn: 'Strain is a ratio of two lengths (ΔL / L₀ = meters / meters), meaning the units cancel out completely, making it dimensionless.',
    rationaleAr: 'الانفعال هو قسمة طول على طول (متر / متر)، وبالتالي تختصر الوحدات ويكون كمية لا بعدية بدون أي وحدة قياس (Dimensionless).'
  },
  {
    id: 'eq-06',
    division: 'vocab_grammar',
    module: 'passive_voice',
    examSource: 'فاينال هندسة شبرا - يناير 2024',
    question: 'Choose the correct passive transformation for an engineering lab report:\nActive: "We subjected the concrete cube to a compressive load of 250 kN."',
    questionAr: 'اختر التحويل الصحيح للمبني للمجهول لتقرير معملي:\n"We subjected the concrete cube to a compressive load of 250 kN."',
    options: [
      'The concrete cube was subjected to a compressive load of 250 kN by us.',
      'The concrete cube is subjected to a compressive load of 250 kN.',
      'The concrete cube was subjected to a compressive load of 250 kN.',
      'A compressive load has subjected by the concrete cube.'
    ],
    correctAnswer: 2,
    rationaleEn: 'In formal engineering laboratory reports, the past simple passive ("was subjected") is used, and personal agent phrases like "by us" are strictly omitted for objectivity.',
    rationaleAr: 'في التقارير المعملية نستخدم الماضي البسيط للمبني للمجهول (was subjected)، مع حذف الفاعل "by us" تماماً للالتزام بالحياد والموضوعية الأكاديمية.'
  },
  {
    id: 'eq-07',
    division: 'vocab_grammar',
    module: 'connectors',
    examSource: 'فاينال هندسة شبرا - يناير 2023',
    question: 'Select the grammatically correct sentence showing cause and effect in engineering:',
    questionAr: 'اختر الجملة الصحيحة نحوياً للتعبير عن السبب والنتيجة في السياق الهندسي:',
    options: [
      'Due to the motor was overheated, the circuit breaker tripped.',
      'Due to motor overheating, the circuit breaker tripped.',
      'Because of the motor overheated, the circuit breaker tripped.',
      'The motor overheated therefore tripped the circuit breaker.'
    ],
    correctAnswer: 1,
    rationaleEn: '"Due to" is a preposition that must be followed by a noun phrase ("motor overheating"), not a finite verbal clause ("the motor was overheated").',
    rationaleAr: 'الرابط "Due to" حرف جر يجب أن يتبعه اسم أو شبه جملة اسمية (motor overheating) ولا يجوز أن تتبعه جملة فعلية كاملة.'
  },
  {
    id: 'eq-08',
    division: 'vocab_grammar',
    module: 'dimensions',
    examSource: 'ميدتيرم هندسة شبرا - نوفمبر 2023',
    question: 'Which sentence correctly expresses the dimension of a structural beam using noun syntax?',
    questionAr: 'أي الجمل التالية تعبر بصورة صحيحة عن أبعاد كمرة إنشائية باستخدام صيغة الاسم (Noun Syntax)؟',
    options: [
      'The beam is 6 meters length.',
      'The beam has a length of 6 meters.',
      'The beam has 6 meters long.',
      'The length of the beam is 6 meters long.'
    ],
    correctAnswer: 1,
    rationaleEn: 'Correct noun syntax requires: "has a length of [X] meters" or "The length of the beam is [X] meters". "Long" is an adjective, whereas "length" is the corresponding noun.',
    rationaleAr: 'الصياغة الصحيحة بالاسم هي: "has a length of 6 meters" أو "The length of the beam is 6 meters". أما كلمة long فهي صفة وليست اسماً.'
  },

  // =========================================================================
  // DIVISION 2: TECHNICAL WRITING & REPORTS (8 QUESTIONS)
  // =========================================================================
  {
    id: 'eq-09',
    division: 'reports_writing',
    module: 'report_structure',
    examSource: 'فاينال هندسة شبرا - يناير 2024',
    question: 'An Executive Summary or Abstract in an engineering report must be written so that:',
    questionAr: 'يجب أن يُكتب الملخص التنفيذي (Executive Summary) في التقرير الهندسي بحيث:',
    options: [
      'It cannot be understood without reading the full body of the report.',
      'It functions as a self-contained, standalone document providing purpose, methodology, key findings, and conclusion.',
      'It contains detailed mathematical equations and extensive raw data tables.',
      'It only contains the table of contents and acknowledgments.'
    ],
    correctAnswer: 1,
    rationaleEn: 'An executive summary must be completely self-contained (standalone), allowing busy engineering managers and clients to understand the core problem, testing method, key numerical findings, and final decision without reading the full report.',
    rationaleAr: 'الملخص التنفيذي وثيقة مستقلة بذاتها تمكن المديرين والمشرفين من معرفة الهدف، وطريقة العمل، والنتائج بالأرقام، والاستنتاج النهائي دون الحاجة لقراءة التقرير بأكمله.'
  },
  {
    id: 'eq-10',
    division: 'reports_writing',
    module: 'report_structure',
    examSource: 'فاينال هندسة شبرا - يناير 2023',
    question: 'Where should voluminous raw experimental data tables and supplementary computer code be placed in an engineering report?',
    questionAr: 'أين يجب وضع جداول البيانات المعملية الضخمة وأكواد البرمجة التكميلية في التقرير الفني؟',
    options: [
      'In the Executive Summary',
      'In the Introduction section',
      'In the Appendices (Malaheq)',
      'In the Recommendations section'
    ],
    correctAnswer: 2,
    rationaleEn: 'Extended raw data, lengthy coding scripts, full instrument calibration sheets, and oversized schematics are compiled in the Appendices to keep the report narrative clear and unburdened.',
    rationaleAr: 'الجداول الضخمة والبيانات الخام والأكواد البرمجية الطويلة توضع دائماً في قسم الملاحق (Appendices) ليبقى صلب التقرير مقروءاً وخالياً من التشتيت.'
  },
  {
    id: 'eq-11',
    division: 'reports_writing',
    module: 'mechanism_desc',
    examSource: 'فاينال هندسة شبرا - يناير 2024',
    question: 'According to the standard 4-stage mechanism description model, which phase immediately follows the Identification and Purpose stage?',
    questionAr: 'وفقاً للنموذج الرباعي القياسي لوصف الأجهزة الهندسية، ما هي المرحلة التي تلي مرحلة التعريف والغرض مباشرة؟',
    options: [
      'Component breakdown',
      'Working principle',
      'Maintenance schedule',
      'Purchasing cost analysis'
    ],
    correctAnswer: 1,
    rationaleEn: 'The 4 canonical stages are: 1. Identification & Purpose -> 2. Working Principle -> 3. Component Breakdown -> 4. Operating Cycle.',
    rationaleAr: 'المراحل الأربع القياسية لوصف جهاز هي: 1. التعريف والوظيفة -> 2. نظرية العمل (Working Principle) -> 3. حصر المكونات -> 4. دورة التشغيل.'
  },
  {
    id: 'eq-12',
    division: 'reports_writing',
    module: 'mechanism_desc',
    examSource: 'ميدتيرم هندسة شبرا - 2023',
    question: 'Which prepositional phrase best describes an engineering component securely fixed to a stationary baseplate?',
    questionAr: 'أي العبارات التالية تصف بأفضل أسلوب فني جزءاً هندسياً مثبتاً بإحكام على قاعدة ثابتة؟',
    options: [
      'Put over',
      'Mounted on',
      'Stuck upon',
      'Placed around'
    ],
    correctAnswer: 1,
    rationaleEn: '"Mounted on" is the precise mechanical engineering terminology for securing, bolting, or assembling a piece of machinery onto a base or structure.',
    rationaleAr: 'التعبير الهندسي الميكانيكي الدقيق لتثبيت المعدات على القواعد هو "Mounted on"، بينما التعبيرات الأخرى غير احترافية.'
  },
  {
    id: 'eq-13',
    division: 'reports_writing',
    module: 'process_desc',
    examSource: 'فاينال هندسة شبرا - يناير 2023',
    question: 'When describing two engineering steps that take place at the exact same moment in an industrial cycle, which sequence marker is most appropriate?',
    questionAr: 'عند وصف خطوتين هندسيتين تحدثان في نفس التوقيت تماماً في دورة صناعية، ما هو رابط التتابع الأنسب؟',
    options: [
      'Subsequently',
      'Simultaneously (or Concurrently)',
      'Initially',
      'Eventually'
    ],
    correctAnswer: 1,
    rationaleEn: '"Simultaneously" and "Concurrently" denote events occurring at the exact same instant, essential for parallel industrial processes (e.g., fuel injection and spark ignition).',
    rationaleAr: 'الكلمتان "Simultaneously" أو "Concurrently" تعنيان الحدوث بالتزامن في نفس اللحظة، وتستخدمان لوصف المراحل المتوازية في المصانع والمحركات.'
  },
  {
    id: 'eq-14',
    division: 'reports_writing',
    module: 'correspondence',
    examSource: 'فاينال هندسة شبرا - يناير 2024',
    question: 'Which of the following represents the most professional subject line for a formal engineering email?',
    questionAr: 'أي الخيارات التالية يمثل أفضل صياغة لعنوان إيميل هندسي رسمي (Subject Line)؟',
    options: [
      'Urgent question please reply asap!!',
      'Project #104 - Foundation Concrete Core Test Report for Approval',
      'Hello Eng. Ahmed',
      'Site report update'
    ],
    correctAnswer: 1,
    rationaleEn: 'A professional engineering subject line must be specific and informative, identifying the Project ID, the topic, and the requested action (Approval).',
    rationaleAr: 'العنوان الاحترافي للإيميل يجب أن يحدد رقم المشروع والموضوع الدقيق والإجراء المطلوب (للاعتماد)، بعيداً عن العناوين الغامضة.'
  },
  {
    id: 'eq-15',
    division: 'reports_writing',
    module: 'correspondence',
    examSource: 'ميدتيرم هندسة شبرا - نوفمبر 2023',
    question: 'The standard header of an internal engineering memorandum (Memo) must include:',
    questionAr: 'الترويسة القياسية للمذكرة الداخلية (Memo) بين أقسام الشركة يجب أن تتضمن:',
    options: [
      'Dear Sir / Madam and Sincerely yours',
      'TO, FROM, DATE, and SUBJECT',
      'Company profit and loss statement',
      'List of references and equations'
    ],
    correctAnswer: 1,
    rationaleEn: 'An internal memorandum header universally consists of four fields: TO (Recipient), FROM (Sender), DATE, and SUBJECT.',
    rationaleAr: 'ترويسة المذكرة الفنية الداخلية تتكون دوماً وبشكل ثابت من 4 حقول: TO (إلى)، FROM (من)، DATE (التاريخ)، و SUBJECT (الموضوع).'
  },
  {
    id: 'eq-16',
    division: 'reports_writing',
    module: 'style_clarity',
    examSource: 'فاينال هندسة شبرا - يناير 2024',
    question: 'To achieve technical conciseness, the wordy phrase "owing to the fact that" should be replaced by:',
    questionAr: 'لتحقيق الإيجاز الهندسي (Conciseness)، يجب استبدال العبارة المطولة "owing to the fact that" بكلمة:',
    options: [
      'Because (or Since)',
      'In addition to',
      'With regard to',
      'As a consequence of the fact'
    ],
    correctAnswer: 0,
    rationaleEn: 'Technical editing rules mandate replacing verbose multi-word conjunctions like "owing to the fact that" with concise, direct words like "because" or "since".',
    rationaleAr: 'قواعد التحرير الهندسي تفرض حذف الحشو واستبدال العبارة الطويلة بكلمة واحدة مباشرة مثل "because" أو "since".'
  }
];
