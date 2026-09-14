export type MaterialCategory =
  | 'Cement' | 'Fine Aggregate' | 'Coarse Aggregate' | 'Sand' | 'Steel'
  | 'Bricks' | 'AAC Blocks' | 'Concrete Blocks' | 'Silica Fume' | 'GGBS'
  | 'Fly Ash' | 'Superplasticizers' | 'Fibres' | 'RMC' | 'Recycled Aggregate'
  | 'Plastic Waste' | 'Waterproofing' | 'Construction Chemicals'

export type Material = {
  id: string
  name: string
  category: MaterialCategory
  density: string
  densityValue: number
  strengthContribution: string
  durability: string
  workability: string
  applications: string[]
  advantages: string[]
  limitations: string[]
  approximateCost: string
  costPerKg: number
  sustainability: number
  suitableBuildingTypes: string[]
  suitableStructuralElements: string[]
  standards: string[]
  properties: { label: string; value: string }[]
}

export const materialCategories: { name: MaterialCategory; icon: string }[] = [
  { name: 'Cement', icon: 'Cement' },
  { name: 'Fine Aggregate', icon: 'Sand' },
  { name: 'Coarse Aggregate', icon: 'Gravel' },
  { name: 'Sand', icon: 'Sand' },
  { name: 'Steel', icon: 'Steel' },
  { name: 'Bricks', icon: 'Brick' },
  { name: 'AAC Blocks', icon: 'Box' },
  { name: 'Concrete Blocks', icon: 'Box' },
  { name: 'Silica Fume', icon: 'Flask' },
  { name: 'GGBS', icon: 'Flask' },
  { name: 'Fly Ash', icon: 'Flask' },
  { name: 'Superplasticizers', icon: 'Droplet' },
  { name: 'Fibres', icon: 'Link' },
  { name: 'RMC', icon: 'Truck' },
  { name: 'Recycled Aggregate', icon: 'Recycle' },
  { name: 'Plastic Waste', icon: 'Recycle' },
  { name: 'Waterproofing', icon: 'Umbrella' },
  { name: 'Construction Chemicals', icon: 'Flask' },
]

export const materials: Material[] = [
  {
    id: 'opc-53',
    name: 'OPC 53 Grade',
    category: 'Cement',
    density: '3.15 g/cm³',
    densityValue: 3.15,
    strengthContribution: 'High early strength, 53 MPa at 28 days',
    durability: 'Good durability in normal conditions',
    workability: 'Moderate — may require more water than PPC',
    applications: ['Structural concrete', 'High-strength concrete', 'Pre-cast elements', 'Rapid construction'],
    advantages: ['High early strength', 'Faster setting', 'Widely available', 'Consistent quality'],
    limitations: ['Higher heat of hydration', 'Less resistant to sulphate attack', 'Higher cost than PPC'],
    approximateCost: '₹8–10 per kg',
    costPerKg: 8,
    sustainability: 35,
    suitableBuildingTypes: ['High-rise', 'Bridge', 'Industrial', 'Commercial'],
    suitableStructuralElements: ['Columns', 'Beams', 'Slabs', 'Foundations'],
    standards: ['IS 12269:2013', 'IS 456:2000'],
    properties: [
      { label: 'Fineness', value: '225 m²/kg min' },
      { label: 'Setting time (initial)', value: '30 min min' },
      { label: 'Setting time (final)', value: '600 min max' },
      { label: 'Compressive strength (28d)', value: '53 MPa min' },
      { label: 'Soundness (Le Chatelier)', value: '10 mm max' },
    ],
  },
  {
    id: 'ppc',
    name: 'Portland Pozzolana Cement (PPC)',
    category: 'Cement',
    density: '3.0 g/cm³',
    densityValue: 3.0,
    strengthContribution: 'Progressive strength gain, comparable to OPC at 28+ days',
    durability: 'Excellent — resistant to sulphate and chloride attack',
    workability: 'Good — improves workability due to spherical fly ash particles',
    applications: ['Marine structures', 'Mass concrete', 'Plastering', 'Masonry', 'Dam construction'],
    advantages: ['Better durability', 'Lower heat of hydration', 'Improved workability', 'More economical', 'Reduced CO₂ footprint'],
    limitations: ['Slower early strength', 'Longer curing required', 'Less suitable for cold weather'],
    approximateCost: '₹7–9 per kg',
    costPerKg: 7.5,
    sustainability: 65,
    suitableBuildingTypes: ['Residential', 'Apartment', 'Hospital', 'School', 'Water tank'],
    suitableStructuralElements: ['Foundations', 'Slabs', 'Retaining walls', 'Plastering'],
    standards: ['IS 1489 Part 1:2015', 'IS 456:2000'],
    properties: [
      { label: 'Fly ash content', value: '15–35%' },
      { label: 'Fineness', value: '300 m²/kg min' },
      { label: 'Setting time (initial)', value: '30 min min' },
      { label: 'Compressive strength (28d)', value: '33 MPa min' },
      { label: 'Soundness', value: '10 mm max' },
    ],
  },
  {
    id: 'psc',
    name: 'Portland Slag Cement (PSC)',
    category: 'Cement',
    density: '2.9 g/cm³',
    densityValue: 2.9,
    strengthContribution: 'Excellent long-term strength, continues gaining beyond 28 days',
    durability: 'Superior — highly resistant to sulphate, chloride, and chemical attack',
    workability: 'Excellent — slag improves workability and reduces water demand',
    applications: ['Marine structures', 'Foundations', 'Mass concrete', 'Water retaining structures', 'Coastal construction'],
    advantages: ['Best durability in aggressive environments', 'Lowest heat of hydration', 'Excellent long-term strength', 'Most sustainable cement type'],
    limitations: ['Slowest early strength', 'Requires extended curing', 'Limited availability in some regions'],
    approximateCost: '₹7–9 per kg',
    costPerKg: 7.8,
    sustainability: 78,
    suitableBuildingTypes: ['Hospital', 'Water tank', 'Bridge', 'Industrial', 'High-rise'],
    suitableStructuralElements: ['Foundations', 'Piles', 'Retaining walls', 'Marine structures'],
    standards: ['IS 455:2015', 'IS 456:2000'],
    properties: [
      { label: 'Slag content', value: '25–70%' },
      { label: 'Fineness', value: '350 m²/kg min' },
      { label: 'Setting time (initial)', value: '30 min min' },
      { label: 'Compressive strength (28d)', value: '33 MPa min' },
      { label: 'Compressive strength (90d)', value: '43 MPa typical' },
    ],
  },
  {
    id: 'silica-fume',
    name: 'Silica Fume',
    category: 'Silica Fume',
    density: '2.2 g/cm³',
    densityValue: 2.2,
    strengthContribution: 'Significant strength enhancement, 10–20% increase at 28 days',
    durability: 'Excellent — reduces permeability, improves resistance to chemical attack',
    workability: 'Reduces workability — requires superplasticizer',
    applications: ['High-strength concrete', 'Shotcrete', 'Repair mortars', 'Dense concrete'],
    advantages: ['High pozzolanic reactivity', 'Fills voids between cement particles', 'Reduces bleeding', 'Improves bond strength'],
    limitations: ['Reduces workability', 'Increases water demand', 'Requires superplasticizer', 'More expensive'],
    approximateCost: '₹18–25 per kg',
    costPerKg: 18,
    sustainability: 82,
    suitableBuildingTypes: ['High-rise', 'Bridge', 'Industrial', 'Warehouse'],
    suitableStructuralElements: ['Columns', 'Beams', 'Slabs', 'Marine structures'],
    standards: ['IS 15388:2018', 'ASTM C1240'],
    properties: [
      { label: 'SiO₂ content', value: '>85%' },
      { label: 'Bulk density', value: '500–700 kg/m³ (undensified)' },
      { label: 'Specific surface', value: '15,000–30,000 m²/kg' },
      { label: 'Pozzolanic activity', value: '>75% (7-day)' },
      { label: 'Typical replacement', value: '5–10% by weight of cement' },
    ],
  },
  {
    id: 'ggbs',
    name: 'Ground Granulated Blast Furnace Slag (GGBS)',
    category: 'GGBS',
    density: '2.9 g/cm³',
    densityValue: 2.9,
    strengthContribution: 'Improves long-term strength, 15–30% gain at 56+ days',
    durability: 'Excellent — highly resistant to sulphate, chloride, and ASR',
    workability: 'Improves workability and reduces water demand',
    applications: ['Mass concrete', 'Marine structures', 'Foundations', 'Pavements', 'Dams'],
    advantages: ['Reduces heat of hydration', 'Improves durability', 'Lower CO₂ emissions', 'Economical', 'Better workability'],
    limitations: ['Slower early strength', 'Extended curing needed', 'May affect setting time'],
    approximateCost: '₹3–5 per kg',
    costPerKg: 4,
    sustainability: 88,
    suitableBuildingTypes: ['Hospital', 'Water tank', 'Bridge', 'Road', 'Industrial'],
    suitableStructuralElements: ['Foundations', 'Pavements', 'Mass concrete', 'Retaining walls'],
    standards: ['IS 12089:1987', 'IS 456:2000'],
    properties: [
      { label: 'Glass content', value: '>90%' },
      { label: 'Typical replacement', value: '30–70% by weight of cement' },
      { label: 'Fineness (Blaine)', value: '400–500 m²/kg' },
      { label: 'Specific gravity', value: '2.85–2.95' },
      { label: 'SiO₂ + Al₂O₃ + CaO', value: '>67%' },
    ],
  },
  {
    id: 'fly-ash',
    name: 'Fly Ash (Class F)',
    category: 'Fly Ash',
    density: '2.1 g/cm³',
    densityValue: 2.1,
    strengthContribution: 'Improves late-age strength, 10–20% gain at 56+ days',
    durability: 'Good — reduces permeability and heat of hydration',
    workability: 'Improves workability — spherical particles act as ball bearings',
    applications: ['Mass concrete', 'Pavements', 'Structural concrete', 'Bricks', 'Soil stabilization'],
    advantages: ['Reduces heat of hydration', 'Improves workability', 'Industrial by-product utilization', 'Economical', 'Reduces CO₂'],
    limitations: ['Slow early strength', 'Requires longer curing', 'Quality varies by source'],
    approximateCost: '₹1–3 per kg',
    costPerKg: 2,
    sustainability: 85,
    suitableBuildingTypes: ['Residential', 'Apartment', 'Road', 'Water tank', 'Industrial'],
    suitableStructuralElements: ['Foundations', 'Slabs', 'Pavements', 'Mass concrete'],
    standards: ['IS 3812 Part 1:2016', 'ASTM C618'],
    properties: [
      { label: 'Class', value: 'F (low calcium)' },
      { label: 'Typical replacement', value: '15–35% by weight of cement' },
      { label: 'SiO₂ + Al₂O₃ + Fe₂O₃', value: '>70%' },
      { label: 'Loss on ignition', value: '<6%' },
      { label: 'Fineness (Blaine)', value: '300–400 m²/kg' },
    ],
  },
  {
    id: 'fine-aggregate',
    name: 'Natural Fine Aggregate (River Sand)',
    category: 'Fine Aggregate',
    density: '2.6 g/cm³',
    densityValue: 2.6,
    strengthContribution: 'Fills voids in coarse aggregate, contributes to workability',
    durability: 'Good — depends on mineralogy and impurities',
    workability: 'Excellent — well-graded sand improves workability',
    applications: ['Concrete', 'Mortar', 'Plaster', 'All structural elements'],
    advantages: ['Widely available', 'Good workability', 'Well-graded options', 'Economical'],
    limitations: ['Environmental concerns from river extraction', 'Variable quality', 'May contain impurities', 'Depleting natural resources'],
    approximateCost: '₹1.0–1.5 per kg',
    costPerKg: 1.2,
    sustainability: 30,
    suitableBuildingTypes: ['All types'],
    suitableStructuralElements: ['All elements'],
    standards: ['IS 383:2016', 'IS 456:2000'],
    properties: [
      { label: 'Specific gravity', value: '2.5–2.7' },
      { label: 'Fineness modulus', value: '2.0–3.5' },
      { label: 'Water absorption', value: '<2%' },
      { label: 'Silt content', value: '<3% (IS 383)' },
      { label: 'Grading zone', value: 'I, II, III, IV' },
    ],
  },
  {
    id: 'coarse-aggregate',
    name: 'Natural Coarse Aggregate (Crushed Stone)',
    category: 'Coarse Aggregate',
    density: '2.65 g/cm³',
    densityValue: 2.65,
    strengthContribution: 'Primary load-bearing component in concrete',
    durability: 'Good — depends on rock type and crushing',
    workability: 'Depends on shape and grading — angular particles reduce workability',
    applications: ['Structural concrete', 'Road base', 'Drainage', 'All structural elements'],
    advantages: ['High strength', 'Good interlock', 'Widely available', 'Durable'],
    limitations: ['Environmental impact of quarrying', 'Angular shape reduces workability', 'Variable quality'],
    approximateCost: '₹1.0–1.3 per kg',
    costPerKg: 1.1,
    sustainability: 25,
    suitableBuildingTypes: ['All types'],
    suitableStructuralElements: ['All elements'],
    standards: ['IS 383:2016', 'IS 456:2000'],
    properties: [
      { label: 'Specific gravity', value: '2.5–2.8' },
      { label: 'Maximum size', value: '10, 20, 40 mm' },
      { label: 'Water absorption', value: '<2%' },
      { label: 'Aggregate crushing value', value: '<30%' },
      { label: 'Flakiness index', value: '<35%' },
    ],
  },
  {
    id: 'recycled-aggregate',
    name: 'Recycled Concrete Aggregate (RCA)',
    category: 'Recycled Aggregate',
    density: '2.4 g/cm³',
    densityValue: 2.4,
    strengthContribution: '10–15% lower than natural aggregate at same mix',
    durability: 'Moderate — higher water absorption, may reduce freeze-thaw resistance',
    workability: 'Reduced — higher water demand due to adhered mortar',
    applications: ['Non-structural concrete', 'Road base', 'Fill material', 'Pavements', 'Sustainable construction'],
    advantages: ['Reduces landfill waste', 'Conserves natural resources', 'Lower cost', 'Reduces CO₂ footprint'],
    limitations: ['Lower strength', 'Higher water absorption', 'Variable quality', 'Limited to non-critical applications'],
    approximateCost: '₹0.5–0.8 per kg',
    costPerKg: 0.6,
    sustainability: 80,
    suitableBuildingTypes: ['Road', 'Warehouse', 'Industrial'],
    suitableStructuralElements: ['Non-structural fills', 'Pavements', 'Sub-base'],
    standards: ['IS 383:2016 (Clause 6.3)', 'BIS 383 recycled aggregate provisions'],
    properties: [
      { label: 'Specific gravity', value: '2.2–2.5' },
      { label: 'Water absorption', value: '3–7%' },
      { label: 'Maximum replacement', value: '20–30% of coarse aggregate' },
      { label: 'Aggregate crushing value', value: '<35%' },
      { label: 'Recommended use', value: 'Non-structural or up to M25' },
    ],
  },
  {
    id: 'plastic-waste',
    name: 'Recycled Plastic Waste (PET)',
    category: 'Plastic Waste',
    density: '0.95 g/cm³',
    densityValue: 0.95,
    strengthContribution: 'Slight reduction in compressive strength (2–8%)',
    durability: 'Good — improves abrasion resistance, reduces shrinkage cracking',
    workability: 'Slightly reduced — depends on particle shape and size',
    applications: ['Sustainable concrete', 'Non-structural elements', 'Pavements', 'Blocks'],
    advantages: ['Diverts plastic from landfill', 'Reduces natural aggregate use', 'Improves abrasion resistance', 'Lightweight'],
    limitations: ['Reduces compressive strength', 'Bond with cement matrix is weaker', 'Limited standards', 'Quality varies by source'],
    approximateCost: '₹3–5 per kg',
    costPerKg: 4,
    sustainability: 90,
    suitableBuildingTypes: ['Road', 'Warehouse', 'Residential'],
    suitableStructuralElements: ['Non-structural blocks', 'Pavements', 'Filler'],
    standards: ['IRC SP:98-2013 (road)', 'Research-based guidelines'],
    properties: [
      { label: 'Typical replacement', value: '5–15% of fine or coarse aggregate' },
      { label: 'Particle form', value: 'Shredded flakes or pellets' },
      { label: 'Specific gravity', value: '0.9–1.4' },
      { label: 'Water absorption', value: 'Negligible' },
      { label: 'Strength impact', value: '2–8% reduction in compressive strength' },
    ],
  },
  {
    id: 'superplasticizer',
    name: 'Superplasticizer (Polycarboxylate Ether)',
    category: 'Superplasticizers',
    density: '1.1 g/cm³',
    densityValue: 1.1,
    strengthContribution: 'Indirect — enables lower w/c ratio for higher strength',
    durability: 'Improves — denser concrete from lower water content',
    workability: 'Dramatically improves — 20–30% water reduction at same workability',
    applications: ['High-strength concrete', 'Self-compacting concrete', 'Pumped concrete', 'Precast'],
    advantages: ['Reduces water demand', 'Improves workability', 'Enables high-strength mixes', 'Reduces shrinkage'],
    limitations: ['Over-dosage causes bleeding', 'Setting time may be affected', 'Cost factor', 'Compatibility with cement varies'],
    approximateCost: '₹80–120 per kg',
    costPerKg: 95,
    sustainability: 50,
    suitableBuildingTypes: ['High-rise', 'Bridge', 'Commercial', 'Industrial'],
    suitableStructuralElements: ['Columns', 'Beams', 'Slabs', 'Foundations'],
    standards: ['IS 9103:2018', 'ASTM C494 Type F/G'],
    properties: [
      { label: 'Type', value: 'Polycarboxylate Ether (PCE)' },
      { label: 'Solid content', value: '20–50%' },
      { label: 'Typical dosage', value: '0.5–2.0% by weight of binder' },
      { label: 'Water reduction', value: '20–30%' },
      { label: 'Setting time', value: 'May retard by 1–4 hours' },
    ],
  },
  {
    id: 'aac-blocks',
    name: 'Autoclaved Aerated Concrete (AAC) Blocks',
    category: 'AAC Blocks',
    density: '0.55 g/cm³',
    densityValue: 0.55,
    strengthContribution: 'Non-structural — used for wall infill and partition',
    durability: 'Good — fire resistant, frost resistant',
    workability: 'Excellent — lightweight, easy to cut and shape',
    applications: ['Wall infill', 'Partition walls', 'Non-load-bearing walls', 'Thermal insulation'],
    advantages: ['Lightweight (1/4 of clay brick)', 'Excellent thermal insulation', 'Fire resistant', 'Fast installation', 'Eco-friendly'],
    limitations: ['Non-load-bearing', 'Brittle — requires careful handling', 'Needs special mortar', 'Lower impact resistance'],
    approximateCost: '₹2,500–3,500 per m³',
    costPerKg: 5,
    sustainability: 75,
    suitableBuildingTypes: ['Residential', 'Apartment', 'Commercial', 'Office', 'School', 'Hospital'],
    suitableStructuralElements: ['Partition walls', 'Infill walls', 'Non-load-bearing'],
    standards: ['IS 2185 Part 3:2013', 'BIS AAC block specifications'],
    properties: [
      { label: 'Density', value: '451–800 kg/m³' },
      { label: 'Compressive strength', value: '2–7 MPa' },
      { label: 'Thermal conductivity', value: '0.12–0.20 W/mK' },
      { label: 'Fire resistance', value: '2–6 hours' },
      { label: 'Block size (typical)', value: '600×200×100-300 mm' },
    ],
  },
  {
    id: 'clay-bricks',
    name: 'Clay Bricks (Class A)',
    category: 'Bricks',
    density: '1.9 g/cm³',
    densityValue: 1.9,
    strengthContribution: 'Compressive strength 7–15 MPa (Class A)',
    durability: 'Excellent — weather resistant, ages well',
    workability: 'Good — standard masonry construction',
    applications: ['Load-bearing walls', 'Non-load-bearing walls', 'Facing', 'Pavements'],
    advantages: ['Durable', 'Good thermal mass', 'Fire resistant', 'Aesthetic appeal', 'Locally available'],
    limitations: ['Heavy weight', 'Environmental impact of firing', 'Variable quality', 'Labour intensive'],
    approximateCost: '₹6–10 per brick',
    costPerKg: 3.5,
    sustainability: 30,
    suitableBuildingTypes: ['Residential', 'Apartment', 'School', 'Industrial'],
    suitableStructuralElements: ['Load-bearing walls', 'Non-load-bearing walls'],
    standards: ['IS 1077:1992', 'IS 2222:1991'],
    properties: [
      { label: 'Compressive strength', value: '7–35 MPa (Class A: 10.5+)' },
      { label: 'Water absorption', value: '<20%' },
      { label: 'Standard size', value: '190×90×90 mm or 230×110×75 mm' },
      { label: 'Efflorescence', value: 'Slight to nil' },
      { label: 'Frog dimensions', value: 'As per IS 1077' },
    ],
  },
  {
    id: 'concrete-blocks',
    name: 'Solid Concrete Blocks',
    category: 'Concrete Blocks',
    density: '2.2 g/cm³',
    densityValue: 2.2,
    strengthContribution: 'Compressive strength 5–15 MPa',
    durability: 'Good — weather resistant, consistent quality',
    workability: 'Good — larger than bricks, faster construction',
    applications: ['Load-bearing walls', 'Retaining walls', 'Foundations', 'Non-structural walls'],
    advantages: ['Consistent quality', 'Faster construction than bricks', 'Good strength', 'Economical'],
    limitations: ['Heavier than AAC', 'Requires mortar', 'Less insulation than AAC', 'Not as aesthetic as clay'],
    approximateCost: '₹20–35 per block',
    costPerKg: 2.5,
    sustainability: 40,
    suitableBuildingTypes: ['Residential', 'Apartment', 'Industrial', 'Warehouse', 'Retaining wall'],
    suitableStructuralElements: ['Load-bearing walls', 'Retaining walls', 'Foundations'],
    standards: ['IS 2185 Part 1:2005'],
    properties: [
      { label: 'Compressive strength', value: '5–15 MPa' },
      { label: 'Water absorption', value: '<10%' },
      { label: 'Standard size', value: '400×200×100-200 mm' },
      { label: 'Dry density', value: '1800–2200 kg/m³' },
      { label: 'Drying shrinkage', value: '<0.06%' },
    ],
  },
  {
    id: 'steel-rebar',
    name: 'Steel Reinforcement (TMT Bars Fe 500D)',
    category: 'Steel',
    density: '7.85 g/cm³',
    densityValue: 7.85,
    strengthContribution: 'Yield strength 500 MPa, ultimate 545+ MPa',
    durability: 'Good — requires cover for corrosion protection',
    workability: 'Standard — cut, bend, and place as per design',
    applications: ['All RCC structural elements', 'Columns', 'Beams', 'Slabs', 'Foundations'],
    advantages: ['High strength', 'Ductile (Fe 500D grade)', 'Good bond with concrete', 'Fire resistant with cover', 'Widely available'],
    limitations: ['Corrosion risk in aggressive environments', 'Requires concrete cover', 'Cost factor', 'Thermal expansion differs from concrete'],
    approximateCost: '₹55–70 per kg',
    costPerKg: 62,
    sustainability: 45,
    suitableBuildingTypes: ['All RCC structures'],
    suitableStructuralElements: ['Columns', 'Beams', 'Slabs', 'Foundations', 'Shear walls'],
    standards: ['IS 1786:2008 (Fe 500D)', 'IS 456:2000'],
    properties: [
      { label: 'Grade', value: 'Fe 500D (Ductile)' },
      { label: 'Yield strength (min)', value: '500 MPa' },
      { label: 'Ultimate tensile strength (min)', value: '545 MPa' },
      { label: 'Elongation (min)', value: '14.5%' },
      { label: 'UTS/YS ratio (min)', value: '1.10' },
    ],
  },
]

export function getMaterialsByCategory(category: MaterialCategory | 'All'): Material[] {
  if (category === 'All') return materials
  return materials.filter((m) => m.category === category)
}

export function searchMaterials(query: string): Material[] {
  const q = query.toLowerCase()
  return materials.filter(
    (m) =>
      m.name.toLowerCase().includes(q) ||
      m.category.toLowerCase().includes(q) ||
      m.applications.some((a) => a.toLowerCase().includes(q)),
  )
}

export type MaterialScore = {
  material: Material
  scores: { strength: number; durability: number; cost: number; availability: number; sustainability: number; workability: number }
  overall: number
  reason: string
}

export function scoreMaterial(
  material: Material,
  criteria: {
    strengthReq: number
    durabilityReq: number
    budget: number
    sustainabilityReq: number
  },
): MaterialScore {
  const strength = Math.min(100, material.strengthContribution.includes('High') ? 90 : material.strengthContribution.includes('Excellent') ? 85 : material.strengthContribution.includes('significant') ? 88 : material.strengthContribution.includes('Good') ? 70 : 50)
  const durability = Math.min(100, material.durability.includes('Excellent') ? 90 : material.durability.includes('Superior') ? 95 : material.durability.includes('Good') ? 70 : 50)
  const cost = Math.min(100, Math.max(20, 100 - material.costPerKg * 2))
  const availability = Math.min(100, material.applications.length > 3 ? 85 : 60)
  const sustainability = material.sustainability
  const workability = Math.min(100, material.workability.includes('Excellent') ? 90 : material.workability.includes('Good') ? 75 : material.workability.includes('Moderate') ? 60 : 45)

  const overall = Math.round(
    (strength * (criteria.strengthReq / 100) +
      durability * (criteria.durabilityReq / 100) +
      cost * ((100 - criteria.budget) / 100) +
      sustainability * (criteria.sustainabilityReq / 100) +
      availability * 0.15 +
      workability * 0.1) /
      (criteria.strengthReq / 100 + criteria.durabilityReq / 100 + (100 - criteria.budget) / 100 + criteria.sustainabilityReq / 100 + 0.25),
  )

  const reason = `${material.name} scores ${overall}/100 overall, with strong ${strength > 80 ? 'strength' : ''} ${durability > 80 ? 'and durability' : ''} ${sustainability > 70 ? 'and good sustainability' : ''} performance.`

  return { material, scores: { strength, durability, cost, availability, sustainability, workability }, overall, reason }
}
