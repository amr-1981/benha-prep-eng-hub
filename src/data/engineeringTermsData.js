// Comprehensive Bilingual Engineering Dictionary & Conceptual Decoder
// Tailored for Engineering Chemistry - Faculty of Engineering at Shoubra (Benha University)
// Enables instant hover/click tooltips for English technical terms with Arabic engineering intuition.

export const ENGINEERING_TERMS = {
  "Water Hardness": {
    ar: "عسر الماء",
    category: "water",
    definitionEn: "A characteristic of water that prevents easy lathering with soap due to dissolved divalent cations (mainly Ca²⁺ and Mg²⁺).",
    explanationAr: "خاصية في الماء تمنع الصابون من تكوين رغوة بسهولة، سببها ذوبان أملاح الكالسيوم والمغنيسيوم التي ترسب الصابون وتسبب انسداد وتكلس مواسير ومراجل الغلايات البخارية.",
    examTip: "يُقاس دائماً بوحدات ppm أو mg/L منسوباً إلى كربونات الكالسيوم CaCO3."
  },
  "Temporary Hardness": {
    ar: "العسر المؤقت (الكربوني)",
    category: "water",
    definitionEn: "Hardness caused by dissolved bicarbonates of calcium and magnesium [Ca(HCO3)2 and Mg(HCO3)2].",
    explanationAr: "عسر يمكن التخلص منه بمجرد الغليان البسيط، حيث تتحلل البيكربونات بالحرارة وتترسب ككربونات غير ذائبة.",
    examTip: "المعادلة: Ca(HCO3)2 + Heat → CaCO3↓ + CO2↑ + H2O."
  },
  "Permanent Hardness": {
    ar: "العسر الدائم (غير الكربوني)",
    category: "water",
    definitionEn: "Hardness caused by sulfates, chlorides, and nitrates of calcium and magnesium (CaCl2, CaSO4, MgCl2, MgSO4).",
    explanationAr: "عسر لا يزول بالغليان إطلاقاً، ويتطلب إضافة مواد كيميائية (كالجير والصودا أو التبادل الأيوني) لترسيب الأيونات.",
    examTip: "كلوريد وكبريتات الكالسيوم تتطلب صودا فقط، بينما أملاح المغنيسيوم تتطلب جيراً وصودا معاً."
  },
  "CaCO3 Equivalent": {
    ar: "مكافئ كربونات الكالسيوم",
    category: "water",
    definitionEn: "Standard chemical reference unit used to express the concentration of all hardness salts on a common basis.",
    explanationAr: "المعيار العالمي الموحد للتعبير عن جميع أملاح العسر المختلفة برقم موحد؛ تم اختيار CaCO3 لسهولة كتلته الجزيئية (100) وكتلته المكافئة (50).",
    examTip: "القانون: CaCO3 Eq = [ Mass of Salt (mg/L) × 50 ] / Equivalent Weight."
  },
  "Lime-Soda Process": {
    ar: "طريقة الجير والصودا",
    category: "water",
    definitionEn: "Chemical precipitation method using hydrated lime [Ca(OH)2] and soda ash [Na2CO3] to soften water.",
    explanationAr: "عملية ترسيب كيميائية: الجير المطفا يزيل العسر المؤقت وأملاح المغنيسيوم، ورماد الصودا يزيل أملاح الكالسيوم الدائمة.",
    examTip: "الجير يحسب بضرب المكافئات في (74/100) والصودا بضربها في (106/100)."
  },
  "Coagulant (NaAlO2)": {
    ar: "المخثر (ألومينات الصوديوم)",
    category: "water",
    definitionEn: "Chemical coagulant added to aggregate finely divided precipitates; it hydrolyzes producing NaOH.",
    explanationAr: "مادة تجلط وتخثير تجمع الرواسب الغروية الدقيقة؛ عند تفاعلها مع الماء تنتج هيدروكسيد صوديوم (NaOH) يعادل البيكربونات ويوفر جيراً بمقدار مكافئها.",
    examTip: "تنبيه هام جداً في المسائل: يطرح مكافئ NaAlO2 من مجموع مكافئات الجير (- NaAlO2 Eq)."
  },
  "Calorific Value": {
    ar: "القيمة الحرارية للوقود",
    category: "fuels",
    definitionEn: "Total quantity of heat liberated when a unit mass of fuel is burnt completely in excess oxygen.",
    explanationAr: "كمية الحرارة الكلية الناتجة عن احتراق 1 كجم من الوقود احتراقاً تاماً بوجود وفرة من الأكسجين (تقاس بـ kcal/kg أو kJ/kg).",
    examTip: "تنقسم إلى قيمة حرارية عليا (GCV) وقيمة حرارية صغرى (NCV)."
  },
  "Dulong Formula": {
    ar: "معادلة دولونج",
    category: "fuels",
    definitionEn: "Empirical formula used to calculate theoretical Gross Calorific Value from elemental carbon, hydrogen, oxygen, and sulfur percentages.",
    explanationAr: "معادلة تجريبية لحساب القيمة الحرارية العليا للفحم والوقود من نسب عناصره التحليلية: C و H و O و S.",
    examTip: "GCV (kcal/kg) = (1/100) × [ 8080 C + 34500 (H - O/8) + 2240 S ]."
  },
  "Available Hydrogen": {
    ar: "الهيدروجين المتاح للاحتراق (H - O/8)",
    category: "fuels",
    definitionEn: "Fraction of hydrogen available to produce heat after subtracting hydrogen combined with oxygen as inert water.",
    explanationAr: "الأكسجين الموجود أصلاً في الوقود يكون متحداً مع جزء من الهيدروجين في صورة ماء خامل بنسبة 1 هيدروجين إلى 8 أكسجين بالكتلة؛ لذلك يطرح (O/8) ليعبر الباقي عن الهيدروجين الفعلي المنتج للطاقة.",
    examTip: "الحد هو دائماً (H - O/8)."
  },
  "Theoretical Air": {
    ar: "الهواء النظري للاحتراق",
    category: "fuels",
    definitionEn: "Minimum stoichiometric mass or volume of air required for the complete combustion of 1 kg of fuel.",
    explanationAr: "الحد الأدنى المحسوب كيميائياً من الهواء التام اللازم لاحتراق كل عناصر الوقود دون نقص ودون زيادة.",
    examTip: "الهواء يحتوي على 23% أكسجين بالكتلة (نضرب في 100/23) و 21% أكسجين بالحجم عند STP (نضرب في 100/21)."
  },
  "Octane Number": {
    ar: "رقم الأوكتان",
    category: "fuels",
    definitionEn: "Standard measure of gasoline fuel resistance to engine knocking (pre-ignition) in spark-ignition (SI) engines.",
    explanationAr: "مقياس لمقاومة وقود البنزين لظاهرة الصفع والطرق في المحرك؛ كلما زاد رقم الأوكتان كان الوقود أكفأ وأقل صفعاً (الآيزوأوكتان = 100، والهبتان العادي = 0).",
    examTip: "خاص بمحركات البنزين بالشرارة SI، عكس رقم السيتان الخاص بالديزل."
  },
  "Viscosity Index (VI)": {
    ar: "مؤشر اللزوجة",
    category: "lubricants",
    definitionEn: "Arbitrary measure of the change in viscosity of an oil with temperature; high VI indicates minimal viscosity change.",
    explanationAr: "رقم يدل على مدى تأثر لزوجة زيت التزييت بتغير درجة الحرارة؛ الزيت الممتاز ذو مؤشر لزوجة مرتفع (VI عالي) لأنه يحتفظ بلزوجته عند سخونة المحرك دون أن يصبح سائلاً كالمياه.",
    examTip: "الزيوت البرافينية لها VI = 100، والزيوت النفثينية لها VI = 0."
  },
  "Flash Point": {
    ar: "نقطة الوميض",
    category: "lubricants",
    definitionEn: "Lowest temperature at which oil gives off sufficient vapor to momentarily ignite (flash) upon application of a test flame.",
    explanationAr: "أدنى درجة حرارة يبدأ عندها الزيت في إطلاق أبخرة قابلة للاشتعال بومضة سريعة (لحظية) عند تقريب لهب صغير منها دون استمرار الاحتراق.",
    examTip: "معيار أمان هام جداً لنقل وتخزين الزيوت لتجنب الحرائق داخل المصانع والمحركات."
  },
  "Fire Point": {
    ar: "نقطة الاشتعال",
    category: "lubricants",
    definitionEn: "Lowest temperature at which oil vapors ignite and continue to burn steadily for at least 5 seconds.",
    explanationAr: "درجة الحرارة التي تلي نقطة الوميض بنحو (5 إلى 20 درجة مئوية)، وتكفي لاستمرار اشتعال الزيت لمدة 5 ثوانٍ على الأقل.",
    examTip: "دائماً: Fire Point > Flash Point."
  },
  "Bogue Compounds": {
    ar: "مركبات بوج الأربعة في الأسمنت",
    category: "cement",
    definitionEn: "The four primary clinker mineral phases formed during cement manufacture: C3S, C2S, C3A, and C4AF.",
    explanationAr: "المركبات الكيميائية الأساسية الأربعة الناتجة من حرق المواد الخام في الفرن الدوار للأسمنت، وتتحكم في سرعة الشك، وتوليد الحرارة، ومقاومة الضغط على المدى القريب والبعيد.",
    examTip: "C3S (Alite), C2S (Belite), C3A (Celite), C4AF (Felite)."
  },
  "Flash Set": {
    ar: "الشك الخاطف (المفاجئ)",
    category: "cement",
    definitionEn: "Premature, violent hardening of cement paste within minutes caused by rapid uninhibited hydration of C3A.",
    explanationAr: "تصلب فجائي سريع جداً يحدث خلال دقائق من خلط الأسمنت بالماء بسبب النشاط الشديد لمركب C3A، مما يمنع تشكيل أو صب الخرسانة ويفسدها.",
    examTip: "يُمنع بإضافة 2% إلى 3% من الجبس (Gypsum) الذي يؤخر هذا التفاعل لمدة ساعتين إلى ثلاث ساعات."
  },
  "Lime Saturation Factor (LSF)": {
    ar: "معامل تشبع الجير LSF",
    category: "cement",
    definitionEn: "Ratio determining the balance between lime (CaO) and acidic oxides (SiO2, Al2O3, Fe2O3) in cement raw mix (0.66 to 1.02).",
    explanationAr: "مقياس دقيق لنسبة الجير في خلطة الأسمنت؛ إذا زاد LSF عن 1.02 يتبقى جير حر غير متحد (Free Lime) يمتص الرطوبة لاحقاً ويتمدد مسبباً تشقق الخرسانة وانهيارها.",
    examTip: "القيمة القياسية لأسمنت شبرا واللائحة المصرية: 0.66 إلى 1.02."
  },
  "Standard Hydrogen Electrode (SHE)": {
    ar: "قطب الهيدروجين القياسي",
    category: "electro",
    definitionEn: "Universal primary reference electrode consisting of Pt wire in 1 M H⁺ bubbling with H2 at 1 atm, assigned potential of 0.00 V.",
    explanationAr: "القطب المرجعي القياسي الذي اتخذه العلماء كصفر لجميع جهود الأقطاب الكهربية (E° = 0.00 V) لقياس ميل أي عنصر للأكسدة أو الاختزال.",
    examTip: "جهده المعياري المتفق عليه دولياً يساوي 0.00 فولت عند 25°C وضغط 1 atm وتركيز 1 M."
  },
  "Nernst Equation": {
    ar: "معادلة نيرنست",
    category: "electro",
    definitionEn: "Fundamental electrochemical relationship relating non-standard cell potential to standard potential (E°) and reaction quotient (Q).",
    explanationAr: "معادلة تصحيح جهد الخلية عندما تكون تراكيز الأيونات في المحلول غير قياسية (لا تساوي 1 مولار)؛ تحسب الجهد الحقيقي المتولد عند أي تركيز.",
    examTip: "E_cell = E°_cell - (0.0592 / n) × log10(Q) عند درجة حرارة 25°C."
  },
  "Gibbs Free Energy (ΔG)": {
    ar: "طاقة جيبس الحرة",
    category: "electro",
    definitionEn: "Thermodynamic quantity indicating the maximum non-expansion electrical work obtainable from a chemical reaction.",
    explanationAr: "مقياس التلقائية الكيميائية؛ إذا كانت ΔG° سالبة، يكون التفاعل تلقائياً وينتج تياراً كهربائياً نافعاً (خلية جلفانية).",
    examTip: "العلاقة: ΔG° = - n × F × E°_cell (حيث F = 96485 كولوم)."
  },
  "Sacrificial Anode": {
    ar: "قطب التضحية الكاثودي",
    category: "corrosion",
    definitionEn: "Highly active metal (e.g., Zinc or Magnesium) connected electrically to iron/steel to oxidize preferentially and protect the structure.",
    explanationAr: "طريقة حماية كاثودية للمنشآت والخطوط المدفونة: نوصل بالحديد معدناً أكثر نشاطاً منه (كالزنك أو الماغنسيوم)، فيعمل كأنود متآكل يضحي بنفسه ويتآكل أولاً، بينما يظل الحديد كاثوداً سليماً محمياً بالكامل.",
    examTip: "لا يتطلب أي مصدر كهرباء خارجي (يعتمد فقط على فارق الجهد الطبيعي بالسلسلة الكهروكيميائية)."
  },
  "Impressed Current Protection (ICCP)": {
    ar: "الحماية الكاثودية بالتيار القسري المفروض",
    category: "corrosion",
    definitionEn: "Cathodic protection method using an external DC power source and inert anodes (e.g., graphite or platinum) to supply protective electrons.",
    explanationAr: "حماية كاثودية للهياكل الضخمة جداً (كخطوط أنابيب البترول والسفن الكبيرة): نستخدم مصدر كهرباء تيار مستمر (DC) خارجي يضخ إلكترونات باستمرار إلى الهيكل الحديدي ليجعله كاثوداً سالباً دائماً ومحمياً من الصدأ.",
    examTip: "الأنودات هنا خاملة لا تذوب (مثل الجرافيت أو البلاتين) والكهرباء هي التي توفر الحماية."
  },
  "Galvanizing vs Tinning": {
    ar: "الجلفنة بالزنك مقابل القصدرة بالقصدير",
    category: "corrosion",
    definitionEn: "Galvanizing coats iron with active Zinc (anodic protection, safe even if scratched); Tinning coats with noble Tin (cathodic coating, accelerates rust if scratched).",
    explanationAr: "مقارنة هامة في الامتحان: الجلفنة بالزنك تحمي الحديد حتى لو خُدش لأن الزنك أنشط من الحديد فيتآكل هو ويبقى الحديد سليماً. أما القصدرة (علب الصفيح للأغذية) فإن خدشها يجعل الحديد أنوداً ويتآكل أسرع مما لو كان بمفرده!",
    examTip: "علل: طلاء الحديد بالزنك أفضل هندسياً من طلائه بالقصدير؟ لأن الزنك يعطي حماية أنودية تضحوية حتى بعد الخدش."
  }
};
