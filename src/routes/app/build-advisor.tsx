import { useMemo, useState } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, Building2, Calculator, CheckCircle2, Cpu, Leaf, ShieldCheck, Sparkles, TriangleAlert } from 'lucide-react'
import { Badge, Button, Card, CardHeader, EngineeringDisclaimer, Field, PageHeading } from '@/components/engineering-ui'
import { buildingTypes, generateBuildRecommendation, type BuildingType, type BuildAdvisorInput } from '@/lib/build-advisor'

export const Route = createFileRoute('/app/build-advisor')({
  head: () => ({ meta: [{ title: 'AI Build Advisor · CONCRETE.AI' }, { name: 'description', content: 'Generate a preliminary, transparent construction recommendation.' }] }),
  component: BuildAdvisorPage,
})

const initialInput: BuildAdvisorInput = {
  location: 'Pune, Maharashtra', buildingType: 'Residential', plotLength: 30, plotWidth: 20,
  builtUpArea: 1200, floors: 2, budget: 55, structuralPriority: 70, strengthPriority: 70,
  durabilityPriority: 65, sustainabilityPriority: 75,
}

function BuildAdvisorPage() {
  const [input, setInput] = useState<BuildAdvisorInput>(initialInput)
  const result = useMemo(() => generateBuildRecommendation(input), [input])
  const set = <K extends keyof BuildAdvisorInput>(key: K, value: BuildAdvisorInput[K]) => setInput(current => ({ ...current, [key]: value }))
  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">
      <PageHeading eyebrow="AI Engineering Assistant" title="AI Build Advisor" description="Set the project context and receive a transparent preliminary recommendation for materials, structural systems, durability, and sustainability." action={<Badge tone="accent"><Sparkles className="h-3 w-3" /> Prototype advisor</Badge>} />
      <div className="grid gap-5 xl:grid-cols-[0.8fr_1.2fr]">
        <Card className="h-fit xl:sticky xl:top-6">
          <CardHeader icon={Cpu} title="Project inputs" subtitle="Adjust assumptions to update the recommendation" />
          <div className="space-y-4">
            <Field label="Project location" value={input.location} type="text" onChange={value => set('location', value)} />
            <Field label="Building type" value={input.buildingType} options={buildingTypes} onChange={value => set('buildingType', value as BuildingType)} />
            <div className="grid gap-4 sm:grid-cols-2"><Field label="Plot length" value={input.plotLength} suffix="m" onChange={value => set('plotLength', Number(value))} /><Field label="Plot width" value={input.plotWidth} suffix="m" onChange={value => set('plotWidth', Number(value))} /></div>
            <div className="grid gap-4 sm:grid-cols-2"><Field label="Built-up area" value={input.builtUpArea} suffix="m²" onChange={value => set('builtUpArea', Number(value))} /><Field label="Number of floors" value={input.floors} onChange={value => set('floors', Number(value))} /></div>
            <Field label="Budget band" value={input.budget} suffix="₹ lakh" onChange={value => set('budget', Number(value))} />
            <div className="border-t border-border pt-4"><div className="mb-3 text-xs font-semibold text-foreground">Design priorities · 0–100</div><div className="space-y-4"><Priority label="Structural performance" value={input.structuralPriority} onChange={value => set('structuralPriority', value)} /><Priority label="Strength" value={input.strengthPriority} onChange={value => set('strengthPriority', value)} /><Priority label="Durability" value={input.durabilityPriority} onChange={value => set('durabilityPriority', value)} /><Priority label="Sustainability" value={input.sustainabilityPriority} onChange={value => set('sustainabilityPriority', value)} /></div></div>
          </div>
        </Card>
        <div className="space-y-5">
          <div className="grid gap-3 sm:grid-cols-3"><Summary icon={Calculator} label="Recommended grade" value={result.concreteGrade} detail="Concrete" /><Summary icon={Building2} label="Structural system" value={result.structuralSystem} detail="Preliminary concept" /><Summary icon={Leaf} label="Masonry system" value={result.masonrySystem} detail="Material selection" /></div>
          <Recommendation title="Concrete recommendation" value={result.concreteGrade} reason={result.concreteGradeReason} icon={Calculator} />
          <Recommendation title="Structural concept" value={result.structuralSystem} reason={result.structuralSystemReason} icon={Building2} />
          <Card><CardHeader icon={Sparkles} title="Recommended materials & admixtures" subtitle="Starting points for detailed engineering review" /><div className="grid gap-3 md:grid-cols-2">{[...result.recommendedMaterials, ...result.admixtures].map(item => <div key={item.name} className="rounded-lg border border-border p-3"><div className="flex items-start gap-2 text-sm font-medium"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{item.name}</div><p className="mt-1.5 pl-6 text-xs leading-relaxed text-muted-foreground">{item.reason}</p></div>)}</div></Card>
          <div className="grid gap-5 md:grid-cols-2"><ListCard title="Sustainable alternatives" items={result.sustainableAlternatives} icon={Leaf} /><ListCard title="Durability considerations" items={result.durabilityConsiderations.map(item => ({ name: item, reason: '' }))} icon={ShieldCheck} /></div>
          <EngineeringDisclaimer text="This is a preliminary recommendation for planning and educational purposes. Validate all structural systems, material selections, loads, soil conditions, quantities, and mix proportions with qualified engineers and applicable IS codes before use." />
          <div className="flex flex-wrap gap-3"><Link to="/app/mix-design"><Button><Calculator className="h-4 w-4" /> Open mix design <ArrowRight className="h-4 w-4" /></Button></Link><Link to="/app/structural"><Button variant="secondary">Review structural concept</Button></Link></div>
        </div>
      </div>
    </div>
  )
}

function Priority({ label, value, onChange }: { label: string; value: number; onChange: (value: number) => void }) { return <label className="block"><div className="mb-1.5 flex justify-between text-xs text-muted-foreground"><span>{label}</span><span className="font-mono font-semibold text-foreground">{value}</span></div><input aria-label={label} type="range" min="0" max="100" value={value} onChange={event => onChange(Number(event.target.value))} className="w-full accent-primary" /></label> }
function Summary({ icon: Icon, label, value, detail }: { icon: typeof Calculator; label: string; value: string; detail: string }) { return <Card className="p-4"><Icon className="h-4 w-4 text-primary" /><div className="mt-3 text-[11px] text-muted-foreground">{label}</div><div className="mt-1 text-base font-semibold leading-tight">{value}</div><div className="mt-1 text-[10px] text-muted-foreground">{detail}</div></Card> }
function Recommendation({ title, value, reason, icon: Icon }: { title: string; value: string; reason: string; icon: typeof Calculator }) { return <Card><CardHeader icon={Icon} title={title} /><div className="rounded-xl bg-primary/[0.04] p-4"><div className="flex items-center gap-2 text-lg font-semibold text-primary">{value}<Badge tone="green">Suggested</Badge></div><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{reason}</p></div></Card> }
function ListCard({ title, items, icon: Icon }: { title: string; items: { name: string; reason: string }[]; icon: typeof Leaf }) { return <Card><CardHeader icon={Icon} title={title} /><div className="space-y-3">{items.length ? items.map(item => <div key={item.name} className="flex gap-2 text-sm"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><div><div className="font-medium">{item.name}</div>{item.reason && <div className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.reason}</div>}</div></div>) : <div className="flex gap-2 text-sm text-muted-foreground"><TriangleAlert className="h-4 w-4 shrink-0" /> No alternatives for the current priority mix.</div>}</div></Card> }
