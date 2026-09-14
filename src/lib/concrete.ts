export type Mix = {
  targetGrade: string
  targetStrength: number
  maxAggregate: number
  wcRatio: number
  slump: number
  cementDensity: number
  silicaPct: number
  silicaDensity: number
  fine: number
  coarse: number
  water: number
  spDosage: number
  spDensity: number
  plasticPct: number
  plasticDensity: number
  plasticReplaces: 'fine' | 'coarse'
}

export const defaultMix: Mix = {
  targetGrade: 'M30',
  targetStrength: 30,
  maxAggregate: 20,
  wcRatio: 0.45,
  slump: 100,
  cementDensity: 3.15,
  silicaPct: 8,
  silicaDensity: 2.2,
  fine: 720,
  coarse: 1080,
  water: 170,
  spDosage: 1.2,
  spDensity: 1.1,
  plasticPct: 10,
  plasticDensity: 0.95,
  plasticReplaces: 'fine',
}

export const curingAges = [3, 7, 14, 28, 56, 90]

export type MixCalculation = {
  binder: number
  silica: number
  cement: number
  water: number
  fineNatural: number
  coarseNatural: number
  plastic: number
  sp: number
  waterBinder: number
}

export function calculate(mix: Mix): MixCalculation {
  const binder = mix.water / Math.max(0.25, mix.wcRatio)
  const silica = (binder * mix.silicaPct) / 100
  const cement = binder - silica
  const plasticBase = mix.plasticReplaces === 'fine' ? mix.fine : mix.coarse
  const plastic = (plasticBase * mix.plasticPct) / 100
  return {
    binder,
    silica,
    cement,
    water: mix.water,
    fineNatural: mix.fine - (mix.plasticReplaces === 'fine' ? plastic : 0),
    coarseNatural: mix.coarse - (mix.plasticReplaces === 'coarse' ? plastic : 0),
    plastic,
    sp: (binder * mix.spDosage) / 100,
    waterBinder: mix.water / binder,
  }
}

export function predict(mix: Mix, age: number): number {
  const calc = calculate(mix)
  const base =
    18 +
    calc.binder * 0.035 -
    calc.waterBinder * 11 +
    mix.silicaPct * 0.18 -
    mix.plasticPct * 0.055 +
    mix.spDosage * 0.9
  const ageFactor =
    age <= 3 ? 0.42 : age <= 7 ? 0.65 : age <= 14 ? 0.84 : age <= 28 ? 1 : age <= 56 ? 1.08 : 1.12
  return Math.max(8, base * ageFactor)
}

export function predictCurve(mix: Mix): { age: string; sustainable: number; conventional: number }[] {
  const prediction = predict(mix, 28)
  return curingAges.map((age) => ({
    age: `${age}d`,
    sustainable: Number(predict(mix, age).toFixed(1)),
    conventional: Number(
      (prediction * (age === 28 ? 1.05 : 1.05 + (age / 28 - 1) * 0.04)).toFixed(1),
    ),
  }))
}

export type DataConfidence = 'CALCULATED' | 'USER_PROVIDED' | 'MODEL_ESTIMATE' | 'SUPPLIER_LISTED' | 'VERIFIED' | 'REQUIRES_VALIDATION'

export const confidenceConfig: Record<DataConfidence, { label: string; color: string; bg: string }> = {
  CALCULATED: { label: 'Calculated', color: 'text-primary', bg: 'bg-primary/8 border-primary/15' },
  USER_PROVIDED: { label: 'User Provided', color: 'text-foreground', bg: 'bg-muted border-border' },
  MODEL_ESTIMATE: { label: 'Model Estimate', color: 'text-chart-3', bg: 'bg-chart-3/10 border-chart-3/20' },
  SUPPLIER_LISTED: { label: 'Supplier Listed', color: 'text-chart-4', bg: 'bg-chart-4/10 border-chart-4/20' },
  VERIFIED: { label: 'Verified', color: 'text-accent', bg: 'bg-accent/10 border-accent/15' },
  REQUIRES_VALIDATION: { label: 'Requires Validation', color: 'text-destructive', bg: 'bg-destructive/8 border-destructive/15' },
}
