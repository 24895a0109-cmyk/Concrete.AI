export type StructuralSystem = 'RCC Frame' | 'Steel Frame' | 'Load-Bearing' | 'Composite' | 'Shear Wall + Frame'

export const structuralSystems: StructuralSystem[] = [
  'RCC Frame', 'Steel Frame', 'Load-Bearing', 'Composite', 'Shear Wall + Frame',
]

export type SoilType = 'Hard Rock' | 'Soft Rock' | 'Medium Soil' | 'Soft Soil' | 'Loose Soil'

export const soilTypes: SoilType[] = ['Hard Rock', 'Soft Rock', 'Medium Soil', 'Soft Soil', 'Loose Soil']

export type SeismicZone = 'Zone II' | 'Zone III' | 'Zone IV' | 'Zone V'

export const seismicZones: SeismicZone[] = ['Zone II', 'Zone III', 'Zone IV', 'Zone V']

export const seismicFactors: Record<SeismicZone, number> = {
  'Zone II': 0.10,
  'Zone III': 0.16,
  'Zone IV': 0.24,
  'Zone V': 0.36,
}

export type StructuralInput = {
  plotLength: number
  plotWidth: number
  buildingLength: number
  buildingWidth: number
  floors: number
  floorHeight: number
  columnSpacingX: number
  columnSpacingY: number
  soilType: SoilType
  seismicZone: SeismicZone
  structuralSystem: StructuralSystem
  liveLoad: number
}

export type StructuralElement = {
  type: 'Column' | 'Beam' | 'Slab' | 'Footing' | 'Shear Wall' | 'Staircase'
  label: string
  description: string
  dimensions: string
  material: string
  designBasis: string
}

export type StructuralResult = {
  gridX: number
  gridY: number
  totalColumns: number
  totalBeams: number
  totalSlabs: number
  totalFootings: number
  buildingHeight: number
  elements: StructuralElement[]
  foundationType: string
  foundationReason: string
  seismicFactor: number
  estimatedConcreteVolume: number
  estimatedSteelWeight: number
  warnings: string[]
}

export function generateStructuralConcept(input: StructuralInput): StructuralResult {
  const { buildingLength, buildingWidth, floors, floorHeight, columnSpacingX, columnSpacingY, soilType, seismicZone, structuralSystem, liveLoad } = input

  const gridX = Math.ceil(buildingLength / columnSpacingX) + 1
  const gridY = Math.ceil(buildingWidth / columnSpacingY) + 1
  const totalColumns = gridX * gridY
  const totalBeams = (gridX - 1) * gridY + (gridY - 1) * gridX
  const totalSlabs = (gridX - 1) * (gridY - 1)
  const totalFootings = totalColumns
  const buildingHeight = floors * floorHeight
  const seismicFactor = seismicFactors[seismicZone]

  const elements: StructuralElement[] = [
    {
      type: 'Column',
      label: `RCC Columns (${totalColumns} nos.)`,
      description: `Vertical load-carrying members at ${columnSpacingX}m × ${columnSpacingY}m grid spacing, designed for gravity and seismic loads.`,
      dimensions: structuralSystem === 'Shear Wall + Frame' ? '300×600 mm (typical)' : structuralSystem === 'Steel Frame' ? 'ISMB 400 (typical)' : '300×450 mm (typical)',
      material: structuralSystem === 'Steel Frame' ? 'Structural Steel (Fe 345)' : 'RCC M30/M35',
      designBasis: `Designed for ${floors} storey loads, seismic ${seismicZone} (Z=${seismicFactor}), IS 456:2000 & IS 1893:2016`,
    },
    {
      type: 'Beam',
      label: `RCC Beams (${totalBeams} nos.)`,
      description: `Horizontal flexural members connecting columns, supporting slab loads and transferring to columns.`,
      dimensions: '230×450 mm (typical primary), 230×300 mm (secondary)',
      material: structuralSystem === 'Steel Frame' ? 'ISMB 350 (typical)' : 'RCC M25/M30',
      designBasis: `Supporting ${liveLoad} kN/m² live load + dead load, designed per IS 456:2000`,
    },
    {
      type: 'Slab',
      label: `RCC Slabs (${totalSlabs} nos.)`,
      description: `Two-way slabs spanning between beams, designed for floor loads.`,
      dimensions: `${columnSpacingX}m × ${columnSpacingY}m span, 150 mm thick (typical)`,
      material: 'RCC M25',
      designBasis: `Live load ${liveLoad} kN/m², designed as two-way slab per IS 456:2000 Clause 31`,
    },
    {
      type: 'Footing',
      label: `${totalFootings} nos. ${soilType === 'Hard Rock' ? 'Isolated' : soilType === 'Soft Soil' || soilType === 'Loose Soil' ? 'Pile/Raft' : 'Isolated/Combined'} Footings`,
      description: `Foundation elements transferring column loads to soil, sized based on SBC of ${soilType}.`,
      dimensions: soilType === 'Hard Rock' ? '1.5×1.5×0.5 m (typical)' : soilType === 'Soft Soil' ? 'Pile foundation (8m depth, 450mm dia)' : '2.0×2.0×0.75 m (typical)',
      material: 'RCC M25/M30',
      designBasis: `Soil type: ${soilType}, designed per IS 456:2000 Section 34`,
    },
    {
      type: 'Shear Wall',
      label: structuralSystem === 'Shear Wall + Frame' ? 'RCC Shear Walls (at lift/core)' : 'Not applicable for this system',
      description: structuralSystem === 'Shear Wall + Frame' ? 'Lateral load-resisting elements at building core, resisting seismic and wind forces.' : 'Shear walls are not part of the selected structural system.',
      dimensions: structuralSystem === 'Shear Wall + Frame' ? '200–250 mm thick, full building height' : 'N/A',
      material: structuralSystem === 'Shear Wall + Frame' ? 'RCC M35' : 'N/A',
      designBasis: structuralSystem === 'Shear Wall + Frame' ? `Seismic ${seismicZone}, designed per IS 13920:2016` : 'N/A',
    },
    {
      type: 'Staircase',
      label: 'RCC Dog-Legged Staircase',
      description: `Typical dog-legged staircase with ${Math.ceil(floorHeight / 0.18)} risers per flight.`,
      dimensions: '1.0–1.5m wide, 150mm waist slab',
      material: 'RCC M25',
      designBasis: `Floor height ${floorHeight}m, tread 250mm, riser ~180mm per IS 456:2000`,
    },
  ]

  let foundationType = 'Isolated Spread Footings'
  let foundationReason = 'Hard rock/medium soil conditions allow economical isolated footings.'
  if (soilType === 'Soft Soil' || soilType === 'Loose Soil') {
    foundationType = 'Pile Foundation or Raft'
    foundationReason = `Soft/loose soil conditions require deep foundation (piles) or raft for adequate bearing capacity.`
  } else if (soilType === 'Soft Rock') {
    foundationType = 'Isolated or Combined Footings'
    foundationReason = 'Soft rock provides moderate bearing capacity suitable for spread footings.'
  }
  if (floors >= 7) {
    foundationType = soilType === 'Hard Rock' ? 'Raft Foundation' : 'Pile Foundation'
    foundationReason = `${floors}-storey building requires ${foundationType.toLowerCase()} for adequate load distribution on ${soilType}.`
  }

  const footprintArea = buildingLength * buildingWidth
  const estimatedConcreteVolume = Math.round(footprintArea * floors * 0.035 * 100) / 100
  const estimatedSteelWeight = Math.round(footprintArea * floors * 4)

  const warnings: string[] = [
    'This is a preliminary structural concept for planning purposes only.',
    'Detailed structural design must be carried out by a qualified structural engineer.',
    'Soil investigation report is required before foundation design.',
    'Seismic design must follow IS 1893:2016 and IS 13920:2016 (ductile detailing).',
    'All dimensions shown are typical/indicative — actual sizes depend on detailed analysis.',
  ]
  if (floors >= 12) {
    warnings.push('Buildings above 40m require peer review of structural design.')
  }
  if (seismicZone === 'Zone V') {
    warnings.push('Zone V is the highest seismic zone — strict ductile detailing per IS 13920:2016 is mandatory.')
  }

  return {
    gridX,
    gridY,
    totalColumns,
    totalBeams,
    totalSlabs,
    totalFootings,
    buildingHeight,
    elements,
    foundationType,
    foundationReason,
    seismicFactor,
    estimatedConcreteVolume,
    estimatedSteelWeight,
    warnings,
  }
}
