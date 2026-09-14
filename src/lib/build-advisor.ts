export type BuildingType =
  | 'Residential' | 'Apartment' | 'Commercial' | 'Office' | 'School'
  | 'Hospital' | 'Industrial' | 'Warehouse' | 'High-rise' | 'Bridge'
  | 'Road' | 'Retaining wall' | 'Water tank' | 'Other'

export const buildingTypes: BuildingType[] = [
  'Residential', 'Apartment', 'Commercial', 'Office', 'School',
  'Hospital', 'Industrial', 'Warehouse', 'High-rise', 'Bridge',
  'Road', 'Retaining wall', 'Water tank', 'Other',
]

export type BuildAdvisorInput = {
  location: string
  buildingType: BuildingType
  plotLength: number
  plotWidth: number
  builtUpArea: number
  floors: number
  budget: number
  structuralPriority: number
  strengthPriority: number
  durabilityPriority: number
  sustainabilityPriority: number
}

export type BuildAdvisorResult = {
  concreteGrade: string
  concreteGradeReason: string
  structuralSystem: string
  structuralSystemReason: string
  masonrySystem: string
  masonrySystemReason: string
  recommendedMaterials: { name: string; reason: string }[]
  admixtures: { name: string; reason: string }[]
  sustainableAlternatives: { name: string; reason: string }[]
  durabilityConsiderations: string[]
  costConsiderations: string[]
  materialAvailability: string[]
  engineeringConsiderations: string[]
}

export function generateBuildRecommendation(input: BuildAdvisorInput): BuildAdvisorResult {
  const { buildingType, floors, builtUpArea, budget, structuralPriority, strengthPriority, durabilityPriority, sustainabilityPriority } = input

  let concreteGrade = 'M25'
  let concreteGradeReason = 'M25 is suitable for general residential and low-rise construction per IS 456:2000.'
  if (floors >= 7 || buildingType === 'High-rise') {
    concreteGrade = 'M40'
    concreteGradeReason = `M40 is recommended for high-rise structures (${floors} floors) per IS 456:2000, ensuring adequate strength and stiffness for lateral loads.`
  } else if (floors >= 4 || buildingType === 'Hospital' || buildingType === 'Commercial') {
    concreteGrade = 'M30'
    concreteGradeReason = `M30 is recommended for ${buildingType.toLowerCase()} with ${floors} floors, providing sufficient strength for medium-rise structures.`
  } else if (buildingType === 'Bridge' || buildingType === 'Water tank') {
    concreteGrade = 'M35'
    concreteGradeReason = `M35 is recommended for ${buildingType.toLowerCase()} due to higher durability and structural demands.`
  } else if (buildingType === 'Road') {
    concreteGrade = 'M30'
    concreteGradeReason = 'M30 is typical for concrete roads per IRC guidelines, providing adequate flexural strength.'
  }

  let structuralSystem = 'RCC Frame'
  let structuralSystemReason = 'RCC framed structure is the standard choice for most buildings in India, offering flexibility in layout and proven performance.'
  if (floors >= 12 || buildingType === 'High-rise') {
    structuralSystem = 'Shear Wall + RCC Frame'
    structuralSystemReason = `For ${floors}-storey buildings, shear walls combined with RCC frames provide the necessary lateral load resistance against wind and seismic forces per IS 1893:2016.`
  } else if (buildingType === 'Warehouse' || buildingType === 'Industrial') {
    structuralSystem = 'Steel Frame'
    structuralSystemReason = 'Steel framed structures are preferred for industrial buildings due to large clear spans, faster construction, and lighter weight.'
  } else if (buildingType === 'Road' || buildingType === 'Retaining wall') {
    structuralSystem = 'RCC Slab/Retaining Structure'
    structuralSystemReason = `RCC is the standard for ${buildingType.toLowerCase()} structures, providing durability and resistance to environmental exposure.`
  } else if (floors <= 2 && buildingType === 'Residential') {
    structuralSystem = 'Load-Bearing Masonry'
    structuralSystemReason = 'For low-rise residential (≤2 floors), load-bearing masonry is economical and sufficient, reducing RCC costs.'
  }

  let masonrySystem = 'AAC Block Masonry'
  let masonrySystemReason = 'AAC blocks are recommended for their lightweight, thermal insulation, and faster construction, reducing dead load on the structure.'
  if (sustainabilityPriority < 40 && budget < 50) {
    masonrySystem = 'Clay Brick Masonry'
    masonrySystemReason = 'Clay bricks are economical for budget-conscious projects and widely available locally.'
  } else if (buildingType === 'Industrial' || buildingType === 'Warehouse') {
    masonrySystem = 'Concrete Block Masonry'
    masonrySystemReason = 'Concrete blocks provide better durability for industrial environments and are faster to construct than clay bricks.'
  }

  const recommendedMaterials: { name: string; reason: string }[] = [
    { name: concreteGrade === 'M40' ? 'OPC 53 Grade Cement' : 'PPC Cement', reason: `${concreteGrade === 'M40' ? 'OPC 53 provides high early strength for M40+' : 'PPC offers better durability and workability for ' + concreteGrade} concrete.` },
    { name: 'TMT Steel Fe 500D', reason: 'Fe 500D grade TMT bars provide excellent ductility for seismic resistance per IS 1786:2008.' },
    { name: 'Natural River Sand (Zone II)', reason: 'Well-graded Zone II sand provides good workability and strength for the concrete mix.' },
    { name: 'Crushed Coarse Aggregate (20mm)', reason: '20mm crushed stone aggregate provides good interlock and strength for structural concrete.' },
  ]

  if (sustainabilityPriority > 50) {
    recommendedMaterials.push({ name: 'Fly Ash (15–25% replacement)', reason: 'Fly ash replaces cement, reducing CO₂ emissions and improving long-term strength.' })
  }
  if (strengthPriority > 60 && floors >= 4) {
    recommendedMaterials.push({ name: 'Silica Fume (5–8% replacement)', reason: 'Silica fume enhances strength and reduces permeability for higher-grade concrete.' })
  }

  const admixtures: { name: string; reason: string }[] = [
    { name: 'Polycarboxylate Ether Superplasticizer', reason: 'Reduces water content by 20–30%, enabling lower w/c ratio for higher strength and better workability.' },
  ]
  if (durabilityPriority > 60) {
    admixtures.push({ name: 'Integral Waterproofing Admixture', reason: 'Reduces permeability and capillary water absorption, improving durability in moist environments.' })
  }
  if (buildingType === 'Water tank' || buildingType === 'Hospital') {
    admixtures.push({ name: 'Shrinkage-Reducing Admixture', reason: 'Minimizes drying shrinkage cracks in water-retaining and critical structures.' })
  }

  const sustainableAlternatives: { name: string; reason: string }[] = []
  if (sustainabilityPriority > 30) {
    sustainableAlternatives.push({ name: 'GGBS (30–50% cement replacement)', reason: 'GGBS significantly reduces CO₂ footprint while improving long-term durability.' })
    sustainableAlternatives.push({ name: 'Recycled Concrete Aggregate (up to 20%)', reason: 'RCA reduces natural aggregate extraction and diverts construction waste from landfill.' })
  }
  if (sustainabilityPriority > 50) {
    sustainableAlternatives.push({ name: 'Recycled Plastic Waste (5–10% aggregate replacement)', reason: 'Diverts plastic from landfill while reducing natural aggregate consumption.' })
    sustainableAlternatives.push({ name: 'Fly Ash Bricks or AAC Blocks', reason: 'Avoids clay excavation and firing energy, with better thermal performance.' })
  }

  const durabilityConsiderations: string[] = [
    `Concrete cover: ${buildingType === 'Water tank' || buildingType === 'Bridge' ? '40–50 mm' : '30–40 mm'} per IS 456:2000 Clause 26.4.1`,
    'Use low w/c ratio (≤0.45) to minimize permeability and improve durability',
    'Ensure proper curing for minimum 14 days (28 days for PPC/PSC)',
  ]
  if (durabilityPriority > 60) {
    durabilityConsiderations.push('Consider anti-corrosive coating on reinforcement for aggressive environments')
    durabilityConsiderations.push('Use sulphate-resistant cement if soil sulphate content is high')
  }
  if (buildingType === 'Water tank') {
    durabilityConsiderations.push('Use M35+ concrete with waterproofing admixture for water-retaining structures')
  }

  const costConsiderations: string[] = [
    `Estimated concrete volume: ~${(builtUpArea * floors * 0.035).toFixed(0)} m³ (typical 3.5% of built-up area)`,
    `Estimated steel: ~${(builtUpArea * floors * 4).toFixed(0)} kg (typical 4 kg/m² for RCC)`,
    budget < 40 ? 'Consider load-bearing masonry for cost optimization' : 'RCC frame provides better long-term value and flexibility',
    'Local material sourcing reduces transportation cost by 10–15%',
  ]

  const materialAvailability: string[] = [
    'Cement and steel are widely available across India through established supply chains',
    'Natural sand availability may be restricted in some states — check local regulations',
    'Manufactured sand (M-sand) is an approved alternative per IS 383:2016',
    'Fly ash and GGBS availability depends on proximity to thermal/s steel plants',
  ]

  const engineeringConsiderations: string[] = [
    `Seismic design: Follow IS 1893:2016 for the applicable seismic zone at ${input.location || 'the project location'}`,
    `Soil investigation: Conduct geotechnical investigation for foundation design (${floors} storeys)`,
    'Structural design must be carried out by a qualified structural engineer',
    'All mix designs must be validated by laboratory trial mixes per IS 10262:2019',
    'This is a preliminary recommendation — not a substitute for detailed engineering',
  ]
  if (floors >= 7) {
    engineeringConsiderations.push('Wind load analysis required per IS 875 Part 3 for tall buildings')
    engineeringConsiderations.push('Consider dynamic analysis for buildings >40m height')
  }

  return {
    concreteGrade,
    concreteGradeReason,
    structuralSystem,
    structuralSystemReason,
    masonrySystem,
    masonrySystemReason,
    recommendedMaterials,
    admixtures,
    sustainableAlternatives,
    durabilityConsiderations,
    costConsiderations,
    materialAvailability,
    engineeringConsiderations,
  }
}
