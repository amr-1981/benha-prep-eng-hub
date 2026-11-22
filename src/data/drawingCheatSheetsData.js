// Printable A4 Cheat Sheets & High-Yield Exam Reviews for Engineering Drawing & Projection (MDP 001)
// Prepared Exclusively for Faculty of Engineering at Shoubra (FES) - Benha University
// Preparatory Year (Term 1)
// Department of Mechanical Design and Production Engineering
// Strictly Separated by Academic Branch:
// 1. Geometric Constructions & Orthographic Projection Branch (geometric_orthographic)
// 2. Isometric Drawing, Sections & Dimensioning Branch (isometric_sections)

export const DRAWING_CHEAT_SHEETS_CATEGORIES = [
  { id: "all", label: "جميع شيتات الرسم الهندسي (5 شيتات A4)", icon: "FileText" },
  { id: "draw-lines-tangency", label: "شيت أنواع الخطوط القياسية وأقواس المماسات والعمليات (A4)", icon: "Compass" },
  { id: "draw-orthographic-miter", label: "شيت الإسقاط المتعامد زاوية 1 وخط الـ 45° والمسقط الثالث (A4)", icon: "Layers" },
  { id: "draw-isometric-ellipse", label: "شيت المنظور 30° ورسم الدوائر بالمراكز الأربعة (A4)", icon: "Box" },
  { id: "draw-sections-hatching", label: "شيت القطاعات الهندسية وقواعد التهشير واستثناء الأعصاب (A4)", icon: "Scissors" },
  { id: "draw-dimensioning-rules", label: "شيت القواعد القياسية لوضع الأبعاد والتفاوتات الهندسية (A4)", icon: "FileText" }
];

export const DRAWING_CHEAT_SHEETS = [
  // =========================================================================
  // BRANCH 1: GEOMETRIC CONSTRUCTIONS & ORTHOGRAPHIC PROJECTION (SHEETS 1 - 2)
  // =========================================================================
  {
    id: "sheet-draw-lines-tangency",
    category: "draw-lines-tangency",
    division: "geometric_orthographic",
    professor: "قسم هندسة التصميم الميكانيكي والإنتاج",
    title: "مصفوفة أنواع وسمك الخطوط القياسية ISO 128 وقوانين أقواس التماس الهندسية (A4)",
    titleEn: "ISO 128 Standard Line Conventions, Line Hierarchy & Tangency Arcs Matrix (A4)",
    subtitleEn: "Continuous thick, hidden dashed, chain-thin centerline, line precedence, and external/internal tangency radius formulas",
    subtitle: "ورقة قوانين مكثفة لأنواع الخطوط ومقاييس الرسم وعمليات المماسات للدوائر والخطوط - هندسة شبرا",
    paperSize: "A4",
    pagesCount: 1,
    color: "border-slate-500",
    sections: [
      {
        title: "1. ISO 128 Standard Engineering Line Types & Precedence Hierarchy",
        type: "table",
        headers: ["Line Type & Code", "Appearance & Standard Pattern", "Pen / Lead Weight", "Standard Application in Drawing"],
        rows: [
          ["Continuous Thick (Type A)", "Solid bold continuous line", "0.7 mm (HB / 2B)", "Visible outlines, visible edges, and boundary contours"],
          ["Continuous Thin (Type B)", "Solid thin crisp line", "0.25 - 0.35 mm (2H / 3H)", "Dimension lines, extension lines, leader lines, and 45° hatching"],
          ["Dashed Thin (Type E)", "Dashes: 3 mm, Gaps: 1 mm", "0.35 mm (HB / H)", "Hidden outlines, concealed interior edges, and internal holes"],
          ["Chain Thin (Type G)", "Long dash: 15 mm, gap: 1 mm, short dash: 2 mm", "0.25 mm (2H / 3H)", "Axes of symmetry, cylinder centerlines, pitch circles (extends 2-3 mm)"],
          ["Cutting Plane (Type H)", "Chain thin body with THICK 0.7 mm ends & bends", "0.7 mm / 0.35 mm", "Cutting plane track with directional sight arrows and letter labels"],
          ["Line Precedence Rule", "Solid Visible > Hidden Dashed > Cutting Plane > Centerline", "Highest priority dominates", "When lines coincide, the higher ranked line is drawn exclusively"]
        ]
      },
      {
        title: "2. Tangency Arcs Center Offsets & Tangency Contact Points (T1, T2)",
        type: "reactions",
        items: [
          {
            equation: "d_1 = R_1 + R, \\quad d_2 = R_2 + R \\quad \\implies \\quad \\text{Compass Center } O",
            description: "External Tangency: Arc R blends externally between circles R1 and R2. Tangent points T1 and T2 lie on the straight line connecting O to O1 and O2."
          },
          {
            equation: "d_1 = R - R_1, \\quad d_2 = R - R_2 \\quad (R > R_1 + \\text{distance}, \\; R > R_2 + \\text{distance})",
            description: "Internal Enclosing Tangency: Arc R encloses circles R1 and R2. Tangent points lie on extensions of lines O-O1 and O-O2 outwards."
          },
          {
            equation: "d_1 = R_1 + R \\text{ (External)}, \\quad d_2 = R - R_2 \\text{ (Internal)} \\quad \\implies \\quad \\text{Mixed Tangency}",
            description: "Mixed Blend Arc: Touches circle 1 externally (sum) and encloses circle 2 internally (difference)."
          },
          {
            equation: "\\text{Offset Line } \\parallel \\text{ Straight Line at distance } R, \\quad d_{circle} = R_1 + R",
            description: "Line-to-Circle Tangency: Compass center O is intersection of parallel line and radius offset arc. Point T on line is perpendicular foot."
          }
        ]
      },
      {
        title: "3. Title Block Layout & Drawing Scales Reference",
        type: "notes",
        items: [
          "Sheet Border Margins: Left filing border = 20 mm; Top, Right, and Bottom borders = 10 mm on A3/A2 drawing sheets.",
          "Title Block Position: Bottom right-hand corner of the sheet (standard width 170-185 mm, height 50-65 mm).",
          "Reduction Scales: 1:2 (half size), 1:5, 1:10; Full Scale: 1:1; Enlargement Scales: 2:1 (double size), 5:1, 10:1.",
          "Golden Scale Rule: Regardless of the scale ratio, the dimension number written on the drawing is always the TRUE 1:1 physical size in millimeters."
        ]
      }
    ]
  },

  {
    id: "sheet-draw-orthographic-miter",
    category: "draw-orthographic-miter",
    division: "geometric_orthographic",
    professor: "قسم هندسة التصميم الميكانيكي والإنتاج",
    title: "شيت الإسقاط المتعامد زاوية أولى ونقل الأبعاد بخط الميتر 45° والمسقط الثالث (A4)",
    titleEn: "First-Angle Orthographic Projection, 45° Miter Line & Missing View Protocol (A4)",
    subtitleEn: "Elevation, Plan, Left Side View placement, 45° quadrant alignment, and 4-step missing third view deduction",
    subtitle: "ورقة مراجعة مكثفة لقواعد توزيع المساقط والمحاذاة التامة واستنتاج المسقط المفقود - هندسة شبرا",
    paperSize: "A4",
    pagesCount: 1,
    color: "border-slate-500",
    sections: [
      {
        title: "1. First-Angle Projection Multi-View Arrangement (ISO Standard)",
        type: "table",
        headers: ["Quadrant / Position", "View Name & Designation", "Source Dimensions", "Alignment Protocol"],
        rows: [
          ["Top-Left Quadrant", "Elevation / Front View (الرأسي)", "Length × Height (L × H)", "Baseline aligned with Side View; shows major profile"],
          ["Bottom-Left Quadrant", "Plan / Top View (الأفقي)", "Length × Depth (L × D)", "Positioned DIRECTLY underneath Front View; length aligned"],
          ["Top-Right Quadrant", "Left Side View (الجانبي الأيسر)", "Depth × Height (D × H)", "Positioned to the RIGHT of Front View; height aligned"],
          ["Bottom-Right Quadrant", "45° Miter Construction Quadrant", "Depth transfer reflector", "Contains 45° line passing through intersection of view spacing"]
        ]
      },
      {
        title: "2. The 45° Miter Line Dimension Transfer Mechanism",
        type: "reactions",
        items: [
          {
            equation: "\\tan(45^\\circ) = 1.000 \\implies \\Delta x_{Plan} = \\Delta y_{Side} \\quad \\text{(Perfect 1:1 Geometric Reflection)}",
            description: "Any feature located at distance d from front edge in Plan view projects vertically down to the 45° line, then turns 90° horizontally into the Side View."
          },
          {
            equation: "\\text{Height}_{Side View} = \\text{Height}_{Elevation}, \\quad \\text{Width}_{Side View} = \\text{Depth}_{Plan View}",
            description: "Strict invariance of bounding box dimensions ensures no feature can fall outside the enclosing frame."
          },
          {
            equation: "\\text{Cylinder in 3 Views: 1 True Circle } (\\varnothing D) + 2 \\text{ Rectangles } (D \\times L) \\text{ with Centerlines}",
            description: "A cylinder never projects as a circle in more than one view. The rectangular views must always feature a longitudinal centerline."
          }
        ]
      },
      {
        title: "3. Systematic 4-Step Missing View Deduction Protocol",
        type: "notes",
        items: [
          "Step 1 (Bounding Box): Draw the enclosing rectangle in the missing view quadrant using height from Elevation and depth from Plan (via 45° line).",
          "Step 2 (Primary Blocks): Decompose the object into baseline, vertical walls, ribs, and cylinder bosses; project their outlines step by step.",
          "Step 3 (Line of Sight Inspection): Look at the object from the missing view direction: edges directly seen become Continuous Thick (0.7 mm); edges concealed behind solid material become Hidden Dashed Lines (0.35 mm).",
          "Step 4 (Line Junction Check): Ensure hidden dashed lines touch solid lines cleanly at corners and centerlines extend 2-3 mm past circular boundaries."
        ]
      }
    ]
  },

  // =========================================================================
  // BRANCH 2: ISOMETRIC DRAWING, SECTIONS & DIMENSIONING (SHEETS 3 - 5)
  // =========================================================================
  {
    id: "sheet-draw-isometric-ellipse",
    category: "draw-isometric-ellipse",
    division: "isometric_sections",
    professor: "قسم هندسة التصميم الميكانيكي والإنتاج",
    title: "شيت المنظور الأيزومتري بزاوية 30° ورسم الدوائر بطريقة المراكز الأربعة (A4)",
    titleEn: "30° Isometric Drawing, Isometric Box & The Four-Center Ellipse Method (A4 Matrix)",
    subtitleEn: "Isometric axes, bounding rhombus, 4 arc centers (C1-C4), cylinder depth extrusion, and non-isometric lines",
    subtitle: "ورقة مكثفة لقواعد المنظور الهندسي ورسم البيضاويات الأيزومترية على الأوجه الثلاثة - هندسة شبرا",
    paperSize: "A4",
    pagesCount: 1,
    color: "border-zinc-500",
    sections: [
      {
        title: "1. Isometric Axes & Bounding Box Foundations",
        type: "table",
        headers: ["Axis Direction", "Inclination Angle", "Measuring Protocol", "Physical Dimension Represented"],
        rows: [
          ["Vertical Axis", "90° to horizontal", "Full scale 1:1 direct measurement", "Object Overall Height (H)"],
          ["Left Receding Axis", "30° to horizontal (30°-60° triangle)", "Full scale 1:1 direct measurement", "Object Overall Length / Width (L)"],
          ["Right Receding Axis", "30° to horizontal (30°-60° triangle)", "Full scale 1:1 direct measurement", "Object Overall Depth (D)"],
          ["Non-Isometric Lines", "Slanted lines not parallel to axes", "Cannot be measured directly!", "Must be plotted by finding (x, y, z) endpoints on axes and connecting"]
        ]
      },
      {
        title: "2. The Four-Center Ellipse Construction Protocol",
        type: "reactions",
        items: [
          {
            equation: "\\text{Rhombus: Side length } = D \\text{ (circle diameter)}, \\quad \\text{Sides parallel to plane isometric axes}",
            description: "Step 1: Construct the bounding isometric rhombus on the target face (Top, Front, or Side) enclosing the intended circle of diameter D."
          },
          {
            equation: "C_1, C_2 = \\text{The 2 Obtuse Corners (120°)}, \\quad R_{large} = \\text{Distance from corner to opposite side midpoint}",
            description: "Step 2: Obtuse vertices serve as compass centers C1 and C2. Draw the two large blending arcs between opposite side midpoints."
          },
          {
            equation: "C_3, C_4 = \\text{Intersections of lines connecting obtuse corners to opposite midpoints}, \\quad R_{small}",
            description: "Step 3: Draw lines from obtuse corners to midpoints (forming 7 and 8 pattern). Their intersections give small arc centers C3 and C4."
          },
          {
            equation: "\\text{Cylinder Depth Extrusion: Shift Centers } C_1 - C_4 \\text{ by distance } L \\text{ along depth axis}",
            description: "Step 4: Shift the 4 centers back by depth L, draw identical arcs, and connect front and rear ellipses with straight tangent boundary lines."
          }
        ]
      },
      {
        title: "3. Isometric Ellipse Orientation on the 3 Principal Faces",
        type: "notes",
        items: [
          "Top Face (Horizontal / Plan): Rhombus sides drawn at 30° left and 30° right. The major axis of the resulting ellipse is HORIZONTAL.",
          "Left Face (Isometric Front): Rhombus sides drawn vertical (90°) and 30° left. The major axis of the ellipse is inclined at 60° to the horizontal.",
          "Right Face (Isometric Side): Rhombus sides drawn vertical (90°) and 30° right. The major axis of the ellipse is inclined at 60° to the horizontal.",
          "Critical Check: Ensure the 4 arcs blend seamlessly at the 4 midpoints without sharp kinks, steps, or double lines."
        ]
      }
    ]
  },

  {
    id: "sheet-draw-sections-hatching",
    category: "draw-sections-hatching",
    division: "isometric_sections",
    professor: "قسم هندسة التصميم الميكانيكي والإنتاج",
    title: "شيت القطاعات الهندسية، مواصفات خطوط التهشير 45° واستثناءات الأعصاب (A4)",
    titleEn: "Sectional Views, ISO 45° Hatching Conventions & Web Non-Hatching Exceptions (A4)",
    subtitleEn: "Full, half, and offset sections, cutting plane line (Type H), hatching spacing, and non-hatching of webs, ribs, shafts, and bolts",
    subtitle: "ورقة مراجعة شاملة لجميع معايير التهشير واستثناءات الأجزاء المصمتة في القطاعات - هندسة شبرا",
    paperSize: "A4",
    pagesCount: 1,
    color: "border-zinc-500",
    sections: [
      {
        title: "1. Sectional View Classifications & Cutting Conventions",
        type: "table",
        headers: ["Section Type", "Cutting Plane Geometry", "Portion Removed", "Key Drafting Rules"],
        rows: [
          ["Full Section (قطاع كامل)", "Straight plane passing entirely through object", "Full half of object removed", "Converts cut hidden lines into solid outlines; omits background hidden lines"],
          ["Half Section (نصف قطاع)", "Two perpendicular planes meeting at centerline", "One quarter (1/4) removed", "Used for symmetrical parts; centerline divides sectioned half from exterior half"],
          ["Offset Section (قطاع متنقل)", "Plane steps at 90° angles through features", "Irregular half removed", "No dividing line shown at 90° steps; section appears as continuous cut"],
          ["Cutting Plane Line (Type H)", "Chain thin with 0.7 mm ends and corners", "Terminated with bold arrows", "Arrows point toward the remaining half (direction of sight for the section)"]
        ]
      },
      {
        title: "2. The 10 Golden Rules of Standard 45° Hatching (ISO 128)",
        type: "reactions",
        items: [
          {
            equation: "\\theta_{hatch} = 45^\\circ \\text{ to main outlines or symmetry axis}, \\quad \\text{Spacing } s = 1.5 - 3.0 \\text{ mm}",
            description: "Rule 1 & 2: Hatching lines must be thin continuous (0.25-0.35 mm), uniform in darkness, perfectly parallel, and spaced evenly."
          },
          {
            equation: "\\text{Cutting Plane } \\parallel \\text{ Web / Rib Flat Surface} \\implies \\text{DO NOT HATCH!}",
            description: "Rule 3 (Web Exception): Thin ribs, webs, and stiffening brackets cut longitudinally are NEVER hatched (prevents false solid impression)."
          },
          {
            equation: "\\text{Shafts, Bolts, Screws, Nuts, Pins, Keys, Ball Bearings} \\implies \\text{Unsectioned longitudinally}",
            description: "Rule 4 (Standard Parts Exception): Solid cylindrical shafts and fasteners cut along their axes are shown in full unsectioned view."
          },
          {
            equation: "\\text{Opposite Adjacent Parts in Assembly} \\implies \\text{Hatched at opposite angles (45° vs 135°) or different spacing}",
            description: "Rule 5 (Assembly Rule): Adjacent mating components are distinguished by reversing hatching direction or altering pitch."
          }
        ]
      },
      {
        title: "3. Hidden Lines Protocol in Sectional Views",
        type: "notes",
        items: [
          "Rule 6: Hidden lines lying directly in the path of the cutting plane are CONVERTED to solid continuous thick outlines.",
          "Rule 7: Hidden lines behind the cutting plane are OMITTED entirely from hatched sectional views to avoid cluttering.",
          "Rule 8: In a Half Section, hidden lines are omitted from BOTH the unsectioned and sectioned halves unless essential for dimensioning.",
          "Rule 9: Hatching lines must NEVER cross solid visible outline boundaries, and hollow voids/cavities are left completely blank white."
        ]
      }
    ]
  },

  {
    id: "sheet-draw-dimensioning-rules",
    category: "draw-dimensioning-rules",
    division: "isometric_sections",
    professor: "قسم هندسة التصميم الميكانيكي والإنتاج",
    title: "شيت القواعد الهندسية القياسية لوضع الأبعاد ورموز التشغيل والتفاوتات (A4)",
    titleEn: "Standard Engineering Dimensioning Rules, Tolerances & Machining Symbols (A4 Matrix)",
    subtitleEn: "Aligned dimensioning system, extension lines, leader lines, diameter (⌀) vs radius (R), and dimension placement taboos",
    subtitle: "ورقة مراجعة مكثفة للقواعد الصارمة لوضع الأبعاد الهندسية ونسب الأسهم 3:1 - هندسة شبرا",
    paperSize: "A4",
    pagesCount: 1,
    color: "border-zinc-500",
    sections: [
      {
        title: "1. The 5 Anatomical Elements of Engineering Dimensioning",
        type: "table",
        headers: ["Dimension Element", "Standard Specifications (ISO)", "Spacing & Clearance Rules", "Drafting Function"],
        rows: [
          ["Dimension Line", "Continuous thin (0.25-0.35 mm)", "Spaced 10 mm from object; 8 mm between parallels", "Line indicating the extent and direction of the measured value"],
          ["Extension Line", "Continuous thin (0.25-0.35 mm)", "Gap: 1-2 mm from object outline; extends 2-3 mm past arrow", "Projected perpendicular lines bounding the dimension line"],
          ["Arrowhead", "Filled closed triangle (3:1 ratio)", "Length ≈ 3 mm, Width ≈ 1 mm", "Terminates dimension line sharply against extension line"],
          ["Dimension Text", "Technical lettering (3.5 mm font height)", "Placed 1 mm above and parallel to dimension line", "Numerical size in millimeters without writing 'mm' unit"],
          ["Leader Line", "Continuous thin terminating in arrow or dot", "Inclined at 30°, 45°, or 60° with horizontal landing", "Points to circular holes, fillets, chamfers, or notes"]
        ]
      },
      {
        title: "2. Aligned Dimensioning Rules & Feature Symbols",
        type: "reactions",
        items: [
          {
            equation: "\\text{Full Circle / Hole / Shaft Cylinder} \\implies \\varnothing D \\quad (\\text{e.g. } \\varnothing 28, \\; \\varnothing 50)",
            description: "Diameter Symbol: Always prefix full circles and cylinders with ⌀. The dimension line passes through or points to the center."
          },
          {
            equation: "\\text{Circular Corner Fillet / Blend Arc} \\implies R r \\quad (\\text{e.g. } R 12, \\; R 25)",
            description: "Radius Symbol: Always prefix rounded corners and blend arcs with R. The leader arrow touches the arc pointing toward the center."
          },
          {
            equation: "\\text{Chamfer Dimensioning} \\implies \\text{Width} \\times \\text{Angle} \\quad (\\text{e.g. } 2 \\times 45^\\circ)",
            description: "Standard 45° chamfers are designated by axial width times angle; other chamfers require separate linear and angular dimensions."
          }
        ]
      },
      {
        title: "3. The 6 Critical Dimensioning Taboos (Forbidden Mistakes)",
        type: "notes",
        items: [
          "Taboo 1: NEVER cross a dimension line with another dimension line (place smaller intermediate dimensions inside, larger overall dimensions outside).",
          "Taboo 2: NEVER attach a dimension line to a hidden dashed line (always dimension features on the view where they appear as solid visible outlines).",
          "Taboo 3: NEVER duplicate dimensions across different views (dimension each feature exactly ONCE in its most descriptive view).",
          "Taboo 4: NEVER use an outline or centerline directly as a dimension line (always use dedicated external dimension lines).",
          "Taboo 5: NEVER place dimensions directly inside hatched sectional areas unless an empty white gap is cleared for the text.",
          "Taboo 6: NEVER write the abbreviation 'mm' after numbers (all engineering drawings in Egypt are implicitly in millimeters)."
        ]
      }
    ]
  }
];
