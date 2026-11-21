// Official Engineering Physics 1 Past Exam MCQ Bank (PHY 001)
// Faculty of Engineering at Shoubra (FES) - Benha University
// Tailored to Shoubra Preparatory Engineering Exams with Academic Rationale and Arabic Clarification
// Strictly Separated by Academic Branch:
// 1. Properties of Matter & Mechanics Branch (properties_mechanics)
// 2. Heat, Thermodynamics & Wave Motion Branch (heat_waves)

export const PHYSICS_QUIZ_QUESTIONS = [
  // =========================================================================
  // DIVISION 1: PROPERTIES OF MATTER & MECHANICS (QUESTIONS 1 - 10)
  // =========================================================================
  {
    id: 'pq-01',
    division: 'properties_mechanics',
    module: 'dimensions',
    examSource: 'فاينال هندسة شبرا - يناير 2024',
    question: 'The dimensional formula of dynamic viscosity coefficient (η) in terms of [M, L, T] is:',
    questionAr: 'صيغة الأبعاد لمعامل اللزوجة الديناميكية (η) بدلالة [M, L, T] هي:',
    options: [
      '[M L T⁻¹]',
      '[M L⁻¹ T⁻¹]',
      '[M L⁻¹ T⁻²]',
      '[M L² T⁻¹]'
    ],
    correctAnswer: 1,
    rationaleEn: 'From Newton\'s law of viscosity τ = η (dv/dy), we have η = (F/A) / (dv/dy). Substituting dimensions: [F/A] = M L⁻¹ T⁻² and [dv/dy] = T⁻¹, yielding [η] = (M L⁻¹ T⁻²) / (T⁻¹) = M L⁻¹ T⁻¹ (SI unit: Pa·s or kg/(m·s)).',
    rationaleAr: 'من قانون نيوتن للزوجة: الإجهاد τ = η (dv/dy)، إذن [η] = [القوة/المساحة] ÷ [ممال السرعة] = (M L⁻¹ T⁻²) ÷ (T⁻¹) = M L⁻¹ T⁻¹. وحدتها في النظام الدولي باسكال في ثانية (Pa·s).'
  },
  {
    id: 'pq-02',
    division: 'properties_mechanics',
    module: 'elasticity',
    examSource: 'ميدتيرم هندسة شبرا - نوفمبر 2023',
    question: 'A wire of length L and diameter d elongates by ΔL when subjected to tensile load F. If the diameter is halved while the load and length remain constant, the new elongation will be:',
    questionAr: 'سلك طوله L وقطره d استطال بمقدار ΔL تحت حمل شد F. إذا انخفض القطر إلى النصف مع ثبات الحمل والطول الأصلي، فإن الاستطالة الجديدة تصبح:',
    options: [
      '2 ΔL',
      '4 ΔL',
      '8 ΔL',
      '16 ΔL'
    ],
    correctAnswer: 1,
    rationaleEn: 'Young\'s modulus relation gives ΔL = (F L) / (A Y) = (4 F L) / (π d² Y). Thus, elongation is inversely proportional to the square of diameter (ΔL ∝ 1/d²). Halving diameter (d\' = d/2) multiplies elongation by (1 / 0.5²) = 4.',
    rationaleAr: 'من قانون معامل يونج: الاستطالة ΔL = 4 F L / (π d² Y). نلاحظ أن الاستطالة تتناسب عكسياً مع مربع القطر (1/d²). عند تقليل القطر للنصف، يقل مربع القطر للربع، فتتضاعف الاستطالة 4 مرات.'
  },
  {
    id: 'pq-03',
    division: 'properties_mechanics',
    module: 'elasticity',
    examSource: 'فاينال هندسة شبرا - يناير 2023',
    question: 'For an isotropic elastic solid material, the theoretical upper bound of Poisson\'s ratio (ν) for incompressible behavior is:',
    questionAr: 'لأي مادة صلبة مرنة ومتجانسة، الحد الأقصى النظري لنسبة بواسون (ν) لسلوك عديم الانضغاط هو:',
    options: [
      '0.25',
      '0.33',
      '0.50',
      '1.00'
    ],
    correctAnswer: 2,
    rationaleEn: 'The inter-moduli relationship is Y = 3 B (1 - 2ν). For a perfectly incompressible material, Bulk Modulus B → ∞, which requires (1 - 2ν) = 0, meaning ν = 0.50. For standard structural metals, ν ranges between 0.25 and 0.35.',
    rationaleAr: 'من العلاقة بين معاملات المرونة: Y = 3 B (1 - 2ν). لكي تكون المادة غير قابلة للانضغاط تماماً مع بقاء الحجم ثابتاً (B يؤول لما لا نهاية)، يجب أن يكون (1 - 2ν) = 0، أي أن ν = 0.50 كحد أقصى نظري.'
  },
  {
    id: 'pq-04',
    division: 'properties_mechanics',
    module: 'surface_tension',
    examSource: 'فاينال هندسة شبرا - يناير 2024',
    question: 'The excess pressure inside a hollow soap bubble of radius r suspended in air compared to the excess pressure inside a spherical water drop of the same radius is:',
    questionAr: 'الضغط الإضافي داخل فقاعة صابون مجوفة نصف قطرها r معلقة في الهواء مقارنة بالضغط الإضافي داخل قطرة ماء بنفس نصف القطر يكون:',
    options: [
      'Half as large',
      'Equal',
      'Twice as large',
      'Four times as large'
    ],
    correctAnswer: 2,
    rationaleEn: 'A spherical liquid drop in air has only one free surface, giving ΔP_drop = 2γ / r. A hollow soap bubble has two concentric liquid-air interfaces (inner and outer), resulting in ΔP_bubble = 4γ / r = 2 × ΔP_drop (twice as large).',
    rationaleAr: 'قطرة الماء في الهواء لها سطح تلامس حر واحد، فيكون ΔP = 2γ/r. أما فقاعة الصابون فغشاؤها الرقيق له سطحان حران (داخلي وخارجي ملامسان للهواء)، فيتضاعف الضغط الإضافي ليصبح ΔP = 4γ/r، أي ضعف ضغط القطرة.'
  },
  {
    id: 'pq-05',
    division: 'properties_mechanics',
    module: 'surface_tension',
    examSource: 'ميدتيرم هندسة شبرا - نوفمبر 2022',
    question: 'When a clean glass capillary tube of radius r is dipped vertically into mercury (contact angle θ ≈ 138°), the mercury level in the tube:',
    questionAr: 'عند غمس أنبوبة شعرية نظيفة من الزجاج رأسياً في حوض زئبق (زاوية التماس θ ≈ 138°)، فإن مستوى الزئبق داخل الأنبوبة:',
    options: [
      'Rises above the surrounding level with a concave meniscus',
      'Depresses below the surrounding level with a convex meniscus',
      'Remains at the same height as the outside reservoir',
      'Fluctuates periodically in simple harmonic motion'
    ],
    correctAnswer: 1,
    rationaleEn: 'Mercury has an obtuse contact angle with glass (θ > 90°), which makes cos θ negative in Jurin\'s law h = (2γ cos θ)/(r ρ g). This results in capillary depression (level drops below reservoir) and forms a convex upward meniscus due to cohesive forces exceeding adhesive forces.',
    rationaleAr: 'زاوية التماس للزئبق مع الزجاج منفرجة (θ > 90°)، مما يجعل cos θ سالباً في قانون يوران؛ وبالتالي ينخفض عمود الزئبق لأسفل ويكون سطح التماس محدباً لأن قوى التماسك بين جزيئات الزئبق أكبر بكثير من قوى تلاصقها بالزجاج.'
  },
  {
    id: 'pq-06',
    division: 'properties_mechanics',
    module: 'viscosity',
    examSource: 'فاينال هندسة شبرا - يناير 2023',
    question: 'A small steel sphere falls through a viscous fluid. When it reaches its terminal velocity (v_t), the net downward acceleration of the sphere is:',
    questionAr: 'تسقط كرة فولاذية صغيرة في مائع لزج. عندما تصل الكرة إلى سرعتها الحدية (v_t)، فإن العجلة المحصلة المؤثرة عليها لأسفل تساوي:',
    options: [
      'g (9.8 m/s²)',
      'g / 2',
      'Exactly Zero',
      'Dependent on viscosity η'
    ],
    correctAnswer: 2,
    rationaleEn: 'At terminal velocity, the downward gravitational force is exactly balanced by the sum of the buoyant upthrust and Stokes viscous drag force (F_g = F_b + F_d). Therefore, the net resultant force is zero (ΣF = 0), and according to Newton\'s second law, acceleration is exactly zero.',
    rationaleAr: 'عند الوصول للسرعة الحدية، تتساوى قوة الجاذبية لأسفل مع مجموع قوة الطفو وقوة الاحتكاك اللزج لستوكس للأعلى؛ فتصبح محصلة القوى صفراً تماماً (ΣF = 0) وتتحرك الكرة بسرعة منتظمة ثابتة بعجلة تساوي صفراً.'
  },
  {
    id: 'pq-07',
    division: 'properties_mechanics',
    module: 'viscosity',
    examSource: 'ميدتيرم هندسة شبرا - ديسمبر 2023',
    question: 'According to Poiseuille\'s law of laminar pipe flow, if the internal radius of a circular pipe is increased by a factor of 2 under constant pressure difference, the volumetric flow rate Q multiplies by:',
    questionAr: 'وفقاً لقانون بوازيه للسريان الطبقي في الأنابيب، إذا زاد نصف القطر الداخلي لأنبوبة أسطوانية بمقدار الضعف (2x) عند ثبوت فرق الضغط، فإن معدل التدفق الحجمي Q يتضاعف بمقدار:',
    options: [
      '2 times',
      '4 times',
      '8 times',
      '16 times'
    ],
    correctAnswer: 3,
    rationaleEn: 'Poiseuille\'s equation states Q = (π r⁴ ΔP) / (8 η L). Because volumetric flow rate Q depends on radius to the fourth power (Q ∝ r⁴), doubling the radius (r\' = 2r) scales the flow rate by 2⁴ = 16 times.',
    rationaleAr: 'من قانون بوازيه: معدل التدفق Q = (π r⁴ ΔP) / (8 η L). يتناسب التصرف طردياً مع نصف القطر مرفوعاً للأس الرابع (r⁴). عند مضاعفة نصف القطر مرتين، يتضاعف التدفق بمقدار 2⁴ = 16 مرة!'
  },
  {
    id: 'pq-08',
    division: 'properties_mechanics',
    module: 'hydrodynamics',
    examSource: 'فاينال هندسة شبرا - يناير 2024',
    question: 'In a horizontal pipeline conveying water, section 1 has diameter 10 cm and section 2 has diameter 5 cm. If water enters section 1 at velocity 1.5 m/s, the velocity in section 2 is:',
    questionAr: 'في ماسورة أفقية يسري بها ماء، المقطع 1 قطره 10 سم والمقطع 2 قطره 5 سم. إذا كانت سرعة التدفق في المقطع 1 هي 1.5 م/ث، فإن سرعة الماء في المقطع 2 تساوي:',
    options: [
      '3.0 m/s',
      '4.5 m/s',
      '6.0 m/s',
      '12.0 m/s'
    ],
    correctAnswer: 2,
    rationaleEn: 'By the equation of continuity for incompressible flow: A₁ v₁ = A₂ v₂. Therefore v₂ = v₁ (d₁ / d₂)² = 1.5 × (10 / 5)² = 1.5 × 4 = 6.0 m/s.',
    rationaleAr: 'من معادلة الاستمرارية وحفظ الكتلة: A₁ v₁ = A₂ v₂. إذن v₂ = v₁ (d₁ / d₂)² = 1.5 × (10 / 5)² = 1.5 × 4 = 6.0 م/ث.'
  },
  {
    id: 'pq-09',
    division: 'properties_mechanics',
    module: 'hydrodynamics',
    examSource: 'ميدتيرم هندسة شبرا - نوفمبر 2023',
    question: 'According to Bernoulli\'s equation for the steady flow of an ideal fluid along a streamline, where fluid speed is highest, the static fluid pressure is:',
    questionAr: 'وفقاً لمعادلة برنولي للسريان المستقر لمائع مثالي، حيثما تكون سرعة المائع أعلى ما يمكن على امتداد خط السريان، فإن الضغط الاستاتيكي يكون:',
    options: [
      'Highest',
      'Lowest',
      'Zero',
      'Equal to atmospheric pressure always'
    ],
    correctAnswer: 1,
    rationaleEn: 'In a streamline flow where height is constant (P + 1/2 ρ v² = const), total mechanical energy is conserved. An increase in kinetic energy (higher velocity v) must be accompanied by an equivalent reduction in static pressure energy (P decreases).',
    rationaleAr: 'في السريان الأفقي (P + 1/2 ρ v² = ثابت)، لكي تظل الطاقة الكلية ثابتة، فإن أي زيادة في طاقة الحركة (السرعة) تقابلها حتماً خسارة مكافئة في طاقة الضغط الاستاتيكي (ينخفض الضغط لأدنى قيمة).'
  },
  {
    id: 'pq-10',
    division: 'properties_mechanics',
    module: 'hydrodynamics',
    examSource: 'فاينال هندسة شبرا - يناير 2022',
    question: 'Water flows out of a small hole drilled in the side of a tall open tank at a depth h below the free water surface. According to Torricelli\'s theorem, the efflux speed is:',
    questionAr: 'يتدفق الماء من ثقب صغير في جدار خزان مفتوح عند عمق h أسفل سطح الماء الحر. طبقاً لنظرية تورشيللي، فإن سرعة خروج السائل تساوي:',
    options: [
      'v = g h',
      'v = 2 g h',
      'v = √(g h)',
      'v = √(2 g h)'
    ],
    correctAnswer: 3,
    rationaleEn: 'Applying Bernoulli\'s equation between the tank top surface and the discharge orifice yields v = sqrt(2 g h), which is identical to the speed of a particle falling freely from rest through height h.',
    rationaleAr: 'بتطبيق معادلة برنولي بين سطح الخزان العلوي وموضع الثقب، نجد أن سرعة الخروج v = √(2 g h)، وهي تطابق تماماً سرعة جسم يسقط سقوطاً حراً من ارتفاع h.'
  },

  // =========================================================================
  // DIVISION 2: HEAT, THERMODYNAMICS & WAVES (QUESTIONS 11 - 20)
  // =========================================================================
  {
    id: 'pq-11',
    division: 'heat_waves',
    module: 'thermal_expansion',
    examSource: 'فاينال هندسة شبرا - يناير 2024',
    question: 'A solid steel bar of cross-sectional area A and length L is rigidly clamped between two immovable walls. When its temperature rises by ΔT, the thermal stress developed is:',
    questionAr: 'قضيب صلب مساحة مقطعه A وطوله L تم تثبيته بإحكام بين حائطين غير قابلين للحركة. عند رفع درجة حرارته بمقدار ΔT، فإن الإجهاد الحراري المتولد فيه يساوي:',
    options: [
      'σ = Y · α · ΔT / L',
      'σ = Y · α · ΔT',
      'σ = Y · α · ΔT · A',
      'σ = α · ΔT / Y'
    ],
    correctAnswer: 1,
    rationaleEn: 'The natural thermal strain would be ε = ΔL / L = α ΔT. To keep length constant, the rigid walls exert compressive stress σ = Y ε = Y α ΔT. Notice that thermal stress is completely independent of the bar\'s initial length and cross-sectional area.',
    rationaleAr: 'الانفعال الحراري الطبيعي هو ε = α ΔT. وبما أن الحوائط تمنع التمدد، فإنها تولد إجهاد ضغط حراري σ = Y ε = Y α ΔT. لاحظ أن الإجهاد الحراري لا يعتمد نهائياً على طول القضيب أو مساحة مقطعه.'
  },
  {
    id: 'pq-12',
    division: 'heat_waves',
    module: 'thermal_expansion',
    examSource: 'ميدتيرم هندسة شبرا - نوفمبر 2023',
    question: 'Between 0°C and 4°C, water exhibits anomalous thermal behavior because as temperature rises, its volume:',
    questionAr: 'بين درجتي صفر مئوي و 4 درجات مئوية، يسلك الماء سلوكاً شاذاً؛ حيث أنه مع ارتفاع درجة الحرارة فإن حجمه:',
    options: [
      'Increases and its density decreases',
      'Decreases and its density reaches a maximum at 4°C',
      'Remains strictly constant',
      'Turns into solid ice lattice'
    ],
    correctAnswer: 1,
    rationaleEn: 'Unlike almost all liquids, liquid water between 0°C and 4°C contracts upon heating due to the collapse of open hexagonal ice-like hydrogen bonded clusters. Its volume decreases, reaching maximum density (1000 kg/m³) at 4°C.',
    rationaleAr: 'الماء بين صفر مئوي و 4 مئوية ينكمش بالحرارة وتتكسر بنيته الهيدروجينية المفتوحة، فينخفض حجمه وتزداد كثافته لتصل لأقصى قيمة (1000 كجم/م³) عند 4 درجات مئوية.'
  },
  {
    id: 'pq-13',
    division: 'heat_waves',
    module: 'heat_conduction',
    examSource: 'فاينال هندسة شبرا - يناير 2023',
    question: 'The SI unit of thermal conductivity (k) in Fourier\'s law of heat conduction is:',
    questionAr: 'الوحدة الدولية لمعامل التوصيل الحراري (k) في قانون فورييه لانتقال الحرارة هي:',
    options: [
      'W / m²',
      'W / (m · K)',
      'J / (kg · K)',
      'W · m / K'
    ],
    correctAnswer: 1,
    rationaleEn: 'From Fourier\'s law H = dQ/dt = k A (ΔT / L), we solve for k = (H · L) / (A · ΔT) = (W · m) / (m² · K) = W / (m · K) or W / (m · °C).',
    rationaleAr: 'من قانون فورييه: معدل الحرارة H = k A (ΔT / L)، إذن k = (H · L) / (A · ΔT) = (وات × متر) ÷ (متر² × كلفن) = W / (m · K).'
  },
  {
    id: 'pq-14',
    division: 'heat_waves',
    module: 'heat_conduction',
    examSource: 'ميدتيرم هندسة شبرا - ديسمبر 2022',
    question: 'In steady-state 1D heat conduction through two slabs connected in series (thicknesses L1, L2 and conductivities k1, k2), which of the following is identical across both slabs?',
    questionAr: 'في التوصيل الحراري المستقر في بعد واحد عبر جدار مركب من طبقتين على التوالي، أي الكميات التالية تكون متساوية تماماً عبر كلتا الطبقتين؟',
    options: [
      'Temperature drop (ΔT)',
      'Temperature gradient (dT/dx)',
      'Heat transfer rate (H = dQ/dt)',
      'Thermal conductivity (k)'
    ],
    correctAnswer: 2,
    rationaleEn: 'By conservation of energy in the steady state, there is no heat accumulation in any layer. Therefore, the heat transfer rate H (in Watts) entering the first slab must equal the heat transfer rate crossing the interface and exiting the second slab (analogous to electric current in series).',
    rationaleAr: 'في الحالة المستقرة (Steady State)، يمنع تراكم الطاقة داخل أي طبقة؛ ولذلك فإن معدل سريان الحرارة H (بالوات) المتدفق عبر الطبقة الأولى يساوي تماماً معدل السريان عبر الطبقة الثانية توالياً (مثل شدة التيار الكهربي في التوالي).'
  },
  {
    id: 'pq-15',
    division: 'heat_waves',
    module: 'thermodynamics',
    examSource: 'فاينال هندسة شبرا - يناير 2024',
    question: 'In an isothermal expansion of an ideal gas at temperature T from initial volume V1 to final volume V2, the change in internal energy (ΔU) is:',
    questionAr: 'في التمدد الإيزوثرمي لغاز مثالي عند درجة حرارة T من حجم V1 إلى V2، فإن التغير في الطاقة الداخلية (ΔU) يساوي:',
    options: [
      'n R T ln(V2 / V1)',
      'P (V2 - V1)',
      'Exactly Zero',
      '- n C_v T'
    ],
    correctAnswer: 2,
    rationaleEn: 'For an ideal gas, internal energy depends solely on temperature: U = n C_v T. In an isothermal process, temperature is held constant (ΔT = 0), so the change in internal energy is strictly zero (ΔU = 0), which implies that all absorbed heat is converted to work (Q = W).',
    rationaleAr: 'الطاقة الداخلية للغاز المثالي دالة في درجة الحرارة فقط (U = n Cv T). وبما أن العملية إيزوثرمية (درجة الحرارة ثابتة ΔT = 0)، فإن التغير في الطاقة الداخلية يساوي صفراً تماماً (ΔU = 0) وتتحول كل الحرارة الممتصة إلى شغل ميكانيكي Q = W.'
  },
  {
    id: 'pq-16',
    division: 'heat_waves',
    module: 'thermodynamics',
    examSource: 'فاينال هندسة شبرا - يناير 2023',
    question: 'During a reversible adiabatic expansion of an ideal gas, no heat is exchanged with the surroundings (Q = 0). The work done by the gas is performed at the expense of:',
    questionAr: 'أثناء التمدد الأديباتي العكوس لغاز مثالي، لا يوجد تبادل حراري مع الوسط الخارجي (Q = 0). الشغل المبذول بواسطة الغاز يتم دفعه على حساب:',
    options: [
      'Atmospheric pressure',
      'The gas internal energy, causing temperature to drop',
      'External latent heat',
      'Potential gravitational energy'
    ],
    correctAnswer: 1,
    rationaleEn: 'By the First Law of Thermodynamics, ΔU = Q - W. When Q = 0 (adiabatic), ΔU = -W. As the gas expands and does positive work (W > 0), its internal energy must decrease (ΔU < 0), causing its temperature to drop.',
    rationaleAr: 'من القانون الأول للديناميكا: ΔU = Q - W. عند انعدام التبادل الحراري (Q = 0)، يصبح ΔU = -W. وعندما يتمدد الغاز ويبذل شغلاً موجباً، تنخفض طاقته الداخلية فوراً فتنخفض درجة حرارته ويبرد.'
  },
  {
    id: 'pq-17',
    division: 'heat_waves',
    module: 'shm',
    examSource: 'ميدتيرم هندسة شبرا - نوفمبر 2023',
    question: 'A simple pendulum of length L has periodic time T on Earth. If the mass of the bob is doubled while keeping length L constant, the new periodic time will be:',
    questionAr: 'بندول بسيط طوله L وزمنه الدوري T على الأرض. إذا تضاعفت كتلة ثقل البندول مرتين مع بقاء طول الخيط L ثابتاً، فإن زمنه الدوري الجديد يصبح:',
    options: [
      'T / 2',
      'T',
      '√2 T',
      '2 T'
    ],
    correctAnswer: 1,
    rationaleEn: 'The periodic time of a simple pendulum is given by T = 2π sqrt(L / g). Notice that the mass m of the bob does not appear anywhere in the formula. Thus, doubling the mass has zero effect on the period (remains T).',
    rationaleAr: 'الزمن الدوري للبندول البسيط يعطى بالعلاقة: T = 2π √(L / g). نلاحظ أن كتلة الثقل m لا تظهر في القانون إطلاقاً، وبالتالي فإن مضاعفة كتلة الثقل لا تغير الزمن الدوري ويبقى مساوياً لـ T.'
  },
  {
    id: 'pq-18',
    division: 'heat_waves',
    module: 'shm',
    examSource: 'فاينال هندسة شبرا - يناير 2024',
    question: 'A particle executes simple harmonic motion with amplitude A. At what displacement x from the center of oscillation is the kinetic energy equal to the potential energy?',
    questionAr: 'يتحرك جسيم حركة توافقية بسيطة بسعة اهتزاز A. عند أي إزاحة x عن مركز الاتزان تتساوى طاقة الحركة مع طاقة الوضع التوافقية؟',
    options: [
      'x = A / 2',
      'x = A / √2',
      'x = A / 4',
      'x = A / √3'
    ],
    correctAnswer: 1,
    rationaleEn: 'Total energy is E = 1/2 k A². When K = U, each must equal half the total energy: U = 1/2 E ==> 1/2 k x² = 1/2 (1/2 k A²). Dividing both sides by 1/2 k gives x² = A² / 2, hence x = ± A / √2 ≈ ± 0.707 A.',
    rationaleAr: 'الطاقة الكلية E = 1/2 k A². عندما تتساوى طاقة الحركة مع طاقة الوضع (K = U)، تأخذ طاقة الوضع نصف الطاقة الكلية: 1/2 k x² = 1/2 (1/2 k A²)، باختصار الثوابت نجد أن x² = A² / 2 ومنها x = A / √2.'
  },
  {
    id: 'pq-19',
    division: 'heat_waves',
    module: 'acoustics',
    examSource: 'ميدتيرم هندسة شبرا - ديسمبر 2023',
    question: 'If the acoustic intensity of a sound source is multiplied by a factor of 100, the sound intensity level in decibels (β) increases by:',
    questionAr: 'إذا تضاعفت شدة مصدر صوتي 100 مرة (I2 = 100 I1)، فإن مستوى شدة الصوت بالديسيبل (β) يزداد بمقدار:',
    options: [
      '10 dB',
      '20 dB',
      '50 dB',
      '100 dB'
    ],
    correctAnswer: 1,
    rationaleEn: 'The decibel change is Δβ = 10 log10(I2 / I1). Substituting I2 / I1 = 100 gives Δβ = 10 log10(100) = 10 × 2 = 20 dB.',
    rationaleAr: 'الزيادة في مستوى الصوت بالديسيبل تعطى بـ: Δβ = 10 log10(I2 / I1) = 10 log10(100) = 10 × 2 = 20 ديسيبل.'
  },
  {
    id: 'pq-20',
    division: 'heat_waves',
    module: 'acoustics',
    examSource: 'فاينال هندسة شبرا - يناير 2023',
    question: 'An ambulance siren emits sound at frequency f while traveling at speed vs directly toward a stationary pedestrian. The speed of sound in air is v. The frequency detected by the pedestrian is:',
    questionAr: 'تطلق سيارة إسعاف سارينة بتردد f وتتحرك بسرعة vs مباشرة نحو راصد ساكن. إذا كانت سرعة الصوت في الهواء v، فإن التردد الذي يسمعه الراصد هو:',
    options: [
      'f\' = f · [ (v - vs) / v ]',
      'f\' = f · [ v / (v - vs) ]',
      'f\' = f · [ v / (v + vs) ]',
      'f\' = f · [ (v + vs) / v ]'
    ],
    correctAnswer: 1,
    rationaleEn: 'By the Doppler effect, when a sound source approaches a stationary listener (vo = 0), wave fronts are compressed in front of the source, resulting in a higher apparent frequency: f\' = f · [ v / (v - vs) ].',
    rationaleAr: 'وفقاً لظاهرة دوبلر، عند اقتراب المصدر من راصد ساكن تنضغط جبهات الموجات في اتجاه الحركة، مما يؤدي لسماع تردد أعلى بنغمة أرفع: f\' = f · [ v / (v - vs) ].'
  }
];
