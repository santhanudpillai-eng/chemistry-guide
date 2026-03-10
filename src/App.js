import { useState } from "react";

const topics = [
  {
    id: 1,
    name: "Periodic Table & Periodic Properties",
    emoji: "🧪",
    importance: "HIGH",
    marks: "8–10",
    color: "#e63946",
    why: "Appears every year in both Section A (MCQs, Assertion-Reason) and Section B. Questions on trends like atomic size, ionization energy, electronegativity, and electron affinity are highly predictable.",
    subtopics: [
      "Trends across periods & down groups",
      "Atomic size, metallic/non-metallic character",
      "Ionization potential, electron affinity, electronegativity",
      "Dobereiner's Triads, Newlands' Law, Mendeleev's Table",
      "Modern Periodic Law",
    ],
    modelQ: [
      "State and explain the trend in ionization potential as you move across Period 3 from Na to Cl.",
      "Element X has atomic number 13. Predict its position in the Periodic Table and state its properties.",
      "Assertion: Chlorine has a higher electron affinity than Fluorine. Reason: Chlorine has a larger atomic size than Fluorine. Choose the correct option.",
    ],
  },
  {
    id: 2,
    name: "Chemical Bonding",
    emoji: "⚛️",
    importance: "HIGH",
    marks: "6–8",
    color: "#2a9d8f",
    why: "Electrovalent and covalent bonding with electron dot diagrams appear consistently. Students often lose marks on coordinate bonds and exceptions to the octet rule.",
    subtopics: [
      "Electrovalent (Ionic) bonding – formation & properties",
      "Covalent bonding – single, double, triple bonds",
      "Coordinate (Dative) bonding",
      "Electron dot (Lewis) structures",
      "Comparison of ionic and covalent compounds",
    ],
    modelQ: [
      "Draw the electron dot structure of: (a) H₂O (b) N₂ (c) NH₄⁺",
      "Why does NaCl conduct electricity in the molten state but not in the solid state?",
      "Define coordinate bond. Give one example with electron dot structure.",
    ],
  },
  {
    id: 3,
    name: "Acids, Bases & Salts",
    emoji: "⚗️",
    importance: "HIGH",
    marks: "8–10",
    color: "#f4a261",
    why: "One of the most concept-dense chapters. Questions on pH, indicators, types of salts, and reactions between acids/bases are exam staples. Dilution of H₂SO₄ is a common practical question.",
    subtopics: [
      "Arrhenius, Bronsted-Lowry concepts",
      "Strong vs. weak acids/bases",
      "pH scale and indicators",
      "Normal, acidic, basic, double, complex salts",
      "Reactions: acid + base, acid + metal, acid + carbonate",
      "Preparation of salts (titration, precipitation, dry synthesis)",
    ],
    modelQ: [
      "How is the salt lead sulphate prepared? Give the balanced equation.",
      "What happens when dilute H₂SO₄ reacts with: (a) Zinc (b) Copper (c) Sodium carbonate?",
      "Differentiate between a strong acid and a weak acid with one example each.",
    ],
  },
  {
    id: 4,
    name: "Analytical Chemistry (Salt Analysis)",
    emoji: "🔬",
    importance: "MEDIUM-HIGH",
    marks: "5–7",
    color: "#457b9d",
    why: "Directly linked to practical work. Questions identify cations (Ca²⁺, Cu²⁺, Fe²⁺, Fe³⁺, Zn²⁺, Pb²⁺, NH₄⁺) and anions (CO₃²⁻, Cl⁻, SO₄²⁻, NO₃⁻, S²⁻) using NaOH and NH₄OH reactions.",
    subtopics: [
      "Action of NaOH on salt solutions",
      "Action of NH₄OH on salt solutions",
      "Anion identification: carbonate, sulphate, chloride, nitrate",
      "Colour and smell of precipitates",
    ],
    modelQ: [
      "Identify the cation if: a white precipitate is formed with NaOH which dissolves in excess NaOH, but no precipitate is formed with NH₄OH.",
      "Name the gas evolved when dilute H₂SO₄ is added to a sulphite salt. How would you test it?",
      "A salt solution gives a brick-red precipitate with NaOH. Identify the cation.",
    ],
  },
  {
    id: 5,
    name: "Mole Concept & Stoichiometry",
    emoji: "🔢",
    importance: "HIGH",
    marks: "8–10",
    color: "#7b2d8b",
    why: "The most numerical chapter. Every year 1–2 full questions are based on mole calculations, Gay-Lussac's law, and Avogadro's number. Students who master this chapter gain a significant scoring edge.",
    subtopics: [
      "Mole, molar mass, Avogadro's number (6.022 × 10²³)",
      "Gay-Lussac's Law of combining volumes",
      "Molar volume at STP (22.4 L)",
      "Calculations: mass ↔ moles ↔ volume ↔ molecules",
      "Stoichiometric calculations from balanced equations",
      "Percentage composition & empirical/molecular formula",
    ],
    modelQ: [
      "Calculate the volume of CO₂ at STP produced when 10g of CaCO₃ is heated. [Ca=40, C=12, O=16]",
      "What is the mass of 3.011 × 10²³ atoms of Sulphur? [S = 32]",
      "A compound contains 40% C, 6.67% H, and 53.33% O. Find its empirical formula.",
    ],
  },
  {
    id: 6,
    name: "Electrolysis",
    emoji: "⚡",
    importance: "HIGH",
    marks: "8–10",
    color: "#1d3557",
    why: "Appears every year with diagram-based questions. Electroplating, electrolysis of water, brine (CuSO₄, dil. H₂SO₄) and Faraday's laws are always tested. Numerical problems from this chapter are very scoring.",
    subtopics: [
      "Electrolytes and non-electrolytes",
      "Electrolysis of water, dil. H₂SO₄, brine, CuSO₄",
      "Preferential discharge theory",
      "Faraday's First and Second Law",
      "Electroplating – procedure and uses",
      "Anode and cathode reactions",
    ],
    modelQ: [
      "Draw a labelled diagram for electrolysis of acidified water. State the products at anode and cathode.",
      "In electrolysis of CuSO₄ using copper electrodes, what change do you observe in the mass of the anode and cathode?",
      "Calculate the mass of silver deposited when 0.5 Faraday is passed. [Ag = 108]",
    ],
  },
  {
    id: 7,
    name: "Metallurgy",
    emoji: "⚒️",
    importance: "MEDIUM",
    marks: "5–7",
    color: "#6b4226",
    why: "Covers extraction of metals, particularly aluminium and iron. The Blast Furnace and Hall-Heroult process diagrams are frequently asked. Reactivity series concepts appear in MCQs.",
    subtopics: [
      "Reactivity series and its applications",
      "Ore, gangue, flux, slag concepts",
      "Extraction of Aluminium (Hall-Heroult process)",
      "Extraction of Iron (Blast Furnace)",
      "Refining of metals",
      "Corrosion and its prevention",
    ],
    modelQ: [
      "With the help of a labelled diagram, explain the extraction of aluminium by electrolysis.",
      "Write the reactions occurring in the Blast Furnace for the extraction of iron.",
      "Why is cryolite added during the extraction of aluminium?",
    ],
  },
  {
    id: 8,
    name: "Study of Compounds (HCl, NH₃, HNO₃, H₂SO₄)",
    emoji: "🧬",
    importance: "HIGH",
    marks: "10–12",
    color: "#e76f51",
    why: "This is the most marks-heavy topic. Each compound (HCl, NH₃, HNO₃, H₂SO₄) has predictable questions on preparation, properties, uses, and reactions. Lab preparation questions with diagrams are very common.",
    subtopics: [
      "HCl: preparation, properties, uses, tests",
      "NH₃: Haber's process, lab preparation, properties, uses",
      "HNO₃: Ostwald's process, reactions with metals",
      "H₂SO₄: Contact process, dilute vs. concentrated properties",
      "Reactions with metals, oxides, carbonates",
    ],
    modelQ: [
      "Draw a labelled diagram for the lab preparation of Ammonia. State two uses of Ammonia.",
      "How does concentrated H₂SO₄ react with: (a) Sugar (b) Copper? Give equations.",
      "Describe Ostwald's process for the manufacture of HNO₃ with equations.",
    ],
  },
  {
    id: 9,
    name: "Organic Chemistry",
    emoji: "🌿",
    importance: "MEDIUM-HIGH",
    marks: "6–8",
    color: "#52b788",
    why: "Homologous series, IUPAC naming, and functional groups are regularly asked. Addition and substitution reactions, isomerism, and ethanol/ethanoic acid are key scoring areas. Vapour density numericals appear in MCQs.",
    subtopics: [
      "Homologous series – alkanes, alkenes, alkynes",
      "IUPAC nomenclature",
      "Functional groups (OH, COOH, CHO, CO, NH₂)",
      "Isomerism (structural)",
      "Reactions: addition, substitution, combustion, esterification",
      "Ethanol and Ethanoic acid properties",
      "Molecular formula from vapour density",
    ],
    modelQ: [
      "Name the compound: CH₃-CH₂-CH₂-OH. What type of compound is it? Give its IUPAC name.",
      "An organic compound has vapour density = 23. Find its molecular formula. [C=12, H=1, O=16]",
      "Distinguish between an alkane and alkene based on: (a) bonding (b) reaction with Br₂ water.",
    ],
  },
];

const importanceColor = {
  HIGH: "#e63946",
  "MEDIUM-HIGH": "#f4a261",
  MEDIUM: "#2a9d8f",
};

export default function ICSeChemistryGuide() {
  const [selected, setSelected] = useState(null);
  const [tab, setTab] = useState("overview");

  const topic = topics.find((t) => t.id === selected);

  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", background: "#0d0d0d", minHeight: "100vh", color: "#f0ead6" }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        padding: "40px 32px 32px",
        borderBottom: "3px solid #e63946",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundImage: "radial-gradient(circle at 20% 50%, rgba(230,57,70,0.08) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(42,157,143,0.08) 0%, transparent 50%)" }} />
        <div style={{ position: "relative" }}>
          <div style={{ fontSize: 11, letterSpacing: 4, textTransform: "uppercase", color: "#e63946", marginBottom: 8, fontFamily: "monospace" }}>ICSE Class 10 • Board Exam 2026</div>
          <h1 style={{ fontSize: "clamp(24px, 5vw, 42px)", margin: "0 0 8px", fontWeight: 700, letterSpacing: -1, color: "#fff" }}>
            Chemistry <span style={{ color: "#e63946" }}>Master Guide</span>
          </h1>
          <p style={{ margin: 0, color: "#a8b2d8", fontSize: 15 }}>
            Syllabus analysis · Previous year trends · Model questions
          </p>
          <div style={{ marginTop: 20, display: "flex", gap: 16, flexWrap: "wrap" }}>
            {[["📋 Chapters", "9"], ["⏱ Exam Time", "2 hrs"], ["📊 Theory Marks", "80"], ["🧪 Practical", "20"]].map(([label, val]) => (
              <div key={label} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, padding: "8px 16px" }}>
                <div style={{ fontSize: 11, color: "#a8b2d8", marginBottom: 2 }}>{label}</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#fff" }}>{val}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Exam Pattern Banner */}
      <div style={{ background: "#1a1a1a", borderBottom: "1px solid #2a2a2a", padding: "14px 32px", display: "flex", gap: 24, flexWrap: "wrap", alignItems: "center" }}>
        <span style={{ fontSize: 12, color: "#a8b2d8", letterSpacing: 2, textTransform: "uppercase" }}>Exam Pattern:</span>
        {[
          ["Section A (Compulsory)", "40 marks – MCQs, Assertion-Reason, Short Answers"],
          ["Section B (Attempt 4/6)", "40 marks – Long Answer Questions (10 marks each)"],
        ].map(([s, d]) => (
          <div key={s} style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#e63946", display: "inline-block" }} />
            <span style={{ fontSize: 13 }}><b style={{ color: "#f0ead6" }}>{s}</b> <span style={{ color: "#888" }}>— {d}</span></span>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", minHeight: "calc(100vh - 240px)" }}>
        {/* Sidebar */}
        <div style={{ width: 280, flexShrink: 0, borderRight: "1px solid #1e1e1e", padding: "16px 0", overflowY: "auto", background: "#0d0d0d" }}>
          <div style={{ padding: "0 16px 12px", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: "#555" }}>All Topics</div>
          {topics.map((t) => (
            <button
              key={t.id}
              onClick={() => { setSelected(t.id); setTab("overview"); }}
              style={{
                display: "flex", alignItems: "center", gap: 12, width: "100%",
                padding: "12px 20px", border: "none", background: selected === t.id ? "#1a1a1a" : "transparent",
                borderLeft: selected === t.id ? `3px solid ${t.color}` : "3px solid transparent",
                cursor: "pointer", textAlign: "left",
                transition: "all 0.15s"
              }}
            >
              <span style={{ fontSize: 20 }}>{t.emoji}</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, color: selected === t.id ? "#fff" : "#c0c0c0", fontWeight: selected === t.id ? 600 : 400, lineHeight: 1.3 }}>{t.name}</div>
                <div style={{ display: "flex", gap: 6, marginTop: 4, alignItems: "center" }}>
                  <span style={{ fontSize: 10, background: importanceColor[t.importance] + "22", color: importanceColor[t.importance], padding: "1px 6px", borderRadius: 3, fontFamily: "monospace" }}>{t.importance}</span>
                  <span style={{ fontSize: 10, color: "#555" }}>{t.marks} marks</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, padding: "32px", overflowY: "auto" }}>
          {!topic ? (
            <div>
              <h2 style={{ color: "#fff", marginTop: 0, fontSize: 22 }}>📌 Quick Priority Overview</h2>
              <p style={{ color: "#888", fontSize: 14, marginBottom: 24 }}>Based on previous year papers (2022–2025) and the official ICSE 2026 syllabus. Click any topic on the left for details, subtopics, and model questions.</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
                {topics.map((t) => (
                  <button key={t.id} onClick={() => { setSelected(t.id); setTab("overview"); }}
                    style={{ background: "#111", border: `1px solid ${t.color}33`, borderRadius: 12, padding: 20, textAlign: "left", cursor: "pointer", transition: "all 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.background = "#1a1a1a"}
                    onMouseLeave={e => e.currentTarget.style.background = "#111"}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                      <span style={{ fontSize: 28 }}>{t.emoji}</span>
                      <span style={{ fontSize: 11, background: importanceColor[t.importance] + "22", color: importanceColor[t.importance], padding: "3px 8px", borderRadius: 4, fontFamily: "monospace", fontWeight: 700 }}>{t.importance}</span>
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#fff", marginBottom: 4 }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: "#888" }}>Avg. {t.marks} marks per paper</div>
                    <div style={{ marginTop: 10, height: 3, background: "#1e1e1e", borderRadius: 2 }}>
                      <div style={{ height: "100%", width: t.importance === "HIGH" ? "90%" : t.importance === "MEDIUM-HIGH" ? "65%" : "45%", background: t.color, borderRadius: 2, transition: "width 0.5s" }} />
                    </div>
                  </button>
                ))}
              </div>

              <div style={{ marginTop: 36, background: "#111", border: "1px solid #2a2a2a", borderRadius: 12, padding: 24 }}>
                <h3 style={{ color: "#e63946", marginTop: 0 }}>📊 Key Insights from Previous Year Papers (2022–2025)</h3>
                {[
                  ["Mole Concept & Electrolysis numericals", "Always appear together, contribute 15–18 marks total"],
                  ["Study of Compounds (HCl, NH₃, H₂SO₄, HNO₃)", "Most marks-dense section; 2 long questions typically from here"],
                  ["Assertion-Reason questions", "Consistently from Periodic Table and Chemical Bonding"],
                  ["Organic Chemistry vapour density", "MCQ shortcut — always appears in Section A"],
                  ["Salt Analysis", "1 full question in Section B almost every year"],
                  ["No out-of-syllabus questions", "2025 analysis confirmed strict adherence to ICSE textbook"],
                ].map(([key, val]) => (
                  <div key={key} style={{ display: "flex", gap: 12, marginBottom: 12, alignItems: "flex-start" }}>
                    <span style={{ color: "#e63946", marginTop: 2, flexShrink: 0 }}>▸</span>
                    <div><span style={{ color: "#fff", fontWeight: 600 }}>{key}</span> — <span style={{ color: "#888", fontSize: 13 }}>{val}</span></div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <button onClick={() => setSelected(null)} style={{ background: "none", border: "none", color: "#888", cursor: "pointer", fontSize: 13, marginBottom: 16, padding: 0 }}>← Back to Overview</button>
              <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 8 }}>
                <span style={{ fontSize: 36 }}>{topic.emoji}</span>
                <div>
                  <h2 style={{ margin: 0, color: "#fff", fontSize: "clamp(18px, 3vw, 26px)" }}>{topic.name}</h2>
                  <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
                    <span style={{ fontSize: 11, background: importanceColor[topic.importance] + "22", color: importanceColor[topic.importance], padding: "2px 8px", borderRadius: 4, fontFamily: "monospace", fontWeight: 700 }}>{topic.importance} PRIORITY</span>
                    <span style={{ fontSize: 12, color: "#888" }}>~{topic.marks} marks</span>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div style={{ display: "flex", gap: 0, marginBottom: 24, borderBottom: "1px solid #2a2a2a" }}>
                {[["overview", "📋 Overview"], ["subtopics", "📚 Subtopics"], ["questions", "✏️ Model Questions"]].map(([id, label]) => (
                  <button key={id} onClick={() => setTab(id)}
                    style={{ padding: "10px 18px", border: "none", background: "none", cursor: "pointer", fontSize: 13, color: tab === id ? "#fff" : "#666", borderBottom: tab === id ? `2px solid ${topic.color}` : "2px solid transparent", fontFamily: "Georgia, serif" }}>
                    {label}
                  </button>
                ))}
              </div>

              {tab === "overview" && (
                <div>
                  <div style={{ background: "#111", border: `1px solid ${topic.color}44`, borderRadius: 12, padding: 24, marginBottom: 20 }}>
                    <h3 style={{ margin: "0 0 12px", color: topic.color, fontSize: 15 }}>🎯 Why This Chapter Matters</h3>
                    <p style={{ margin: 0, color: "#c0c0c0", lineHeight: 1.7, fontSize: 14 }}>{topic.why}</p>
                  </div>
                  <div style={{ background: "#111", borderRadius: 12, padding: 24, border: "1px solid #1e1e1e" }}>
                    <h3 style={{ margin: "0 0 12px", color: "#fff", fontSize: 15 }}>📈 Exam Weightage</h3>
                    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 8 }}>
                      <div style={{ flex: 1, background: "#1e1e1e", borderRadius: 4, height: 10 }}>
                        <div style={{ height: "100%", width: topic.importance === "HIGH" ? "90%" : topic.importance === "MEDIUM-HIGH" ? "65%" : "45%", background: topic.color, borderRadius: 4 }} />
                      </div>
                      <span style={{ color: "#fff", fontWeight: 700, fontSize: 16 }}>{topic.marks} marks</span>
                    </div>
                    <p style={{ margin: 0, color: "#666", fontSize: 12 }}>Based on analysis of 2022–2025 ICSE board papers</p>
                  </div>
                </div>
              )}

              {tab === "subtopics" && (
                <div style={{ background: "#111", borderRadius: 12, padding: 24, border: "1px solid #1e1e1e" }}>
                  <h3 style={{ margin: "0 0 16px", color: "#fff", fontSize: 15 }}>📚 Key Subtopics to Study</h3>
                  {topic.subtopics.map((s, i) => (
                    <div key={i} style={{ display: "flex", gap: 12, marginBottom: 12, padding: "10px 14px", background: "#0d0d0d", borderRadius: 8, borderLeft: `3px solid ${topic.color}` }}>
                      <span style={{ color: topic.color, fontFamily: "monospace", fontSize: 12, minWidth: 20 }}>{String(i + 1).padStart(2, "0")}</span>
                      <span style={{ color: "#d0d0d0", fontSize: 14 }}>{s}</span>
                    </div>
                  ))}
                </div>
              )}

              {tab === "questions" && (
                <div>
                  <h3 style={{ color: "#fff", marginTop: 0, fontSize: 15 }}>✏️ Model Questions (Exam-Style)</h3>
                  {topic.modelQ.map((q, i) => (
                    <div key={i} style={{ background: "#111", border: "1px solid #1e1e1e", borderRadius: 10, padding: 20, marginBottom: 14 }}>
                      <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <span style={{ background: topic.color, color: "#fff", borderRadius: "50%", width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, flexShrink: 0 }}>Q{i + 1}</span>
                        <p style={{ margin: 0, color: "#d0d0d0", lineHeight: 1.7, fontSize: 14 }}>{q}</p>
                      </div>
                    </div>
                  ))}
                  <div style={{ background: "#1a1205", border: "1px solid #3d2b00", borderRadius: 10, padding: 16, marginTop: 8 }}>
                    <p style={{ margin: 0, fontSize: 12, color: "#c9a227" }}>💡 <b>Pro tip:</b> For Section B, always write balanced chemical equations, use proper state symbols (s, l, g, aq), and draw clear labelled diagrams wherever applicable.</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
