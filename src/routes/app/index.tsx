import { useState, useEffect } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { LayoutDashboard, Beaker, TrendingUp, Boxes, MapPin, FileText, Archive, Plus, ChevronRight, Activity, Cpu, Building2, Coins, Leaf, FlaskConical, Clock, CircleCheck as CheckCircle2, TriangleAlert as AlertTriangle } from 'lucide-react'
import { Card, CardHeader, Metric, PageHeading, Button, Badge, chartTooltipStyle, chartAxisStyle, ScoreBar } from '@/components/engineering-ui'
import { defaultMix, calculate, predict, predictCurve } from '@/lib/concrete'

export const Route = createFileRoute('/app/')({
  head: () => ({
    meta: [
      { title: 'Dashboard · CONCRETE.AI' },
      { name: 'description', content: 'Engineering project dashboard with mix designs, material searches, and strength predictions.' },
    ],
  }),
  component: DashboardHome,
})

type Project = {
  id: string
  name: string
  grade: string
  status: 'Active' | 'Draft' | 'Completed'
  created: string
  progress: number
}

const sampleProjects: Project[] = [
  { id: '1', name: 'M30 Sustainable Concrete', grade: 'M30', status: 'Active', created: '2026-09-12', progress: 75 },
  { id: '2', name: 'M40 High-Rise Columns', grade: 'M40', status: 'Active', created: '2026-09-10', progress: 45 },
  { id: '3', name: 'M25 Residential Slab', grade: 'M25', status: 'Completed', created: '2026-09-05', progress: 100 },
  { id: '4', name: 'M35 Bridge Deck', grade: 'M35', status: 'Draft', created: '2026-09-14', progress: 15 },
]

const activityItems = [
  { icon: Beaker, text: 'Mix design calculated for M30', time: '2 hours ago', tone: 'primary' as const },
  { icon: TrendingUp, text: 'Strength prediction updated — 34.2 MPa at 28 days', time: '3 hours ago', tone: 'green' as const },
  { icon: Boxes, text: 'Material comparison: OPC vs PPC vs PSC', time: '5 hours ago', tone: 'amber' as const },
  { icon: Coins, text: 'Cost analysis saved — ₹4,250/m³ sustainable', time: '1 day ago', tone: 'primary' as const },
  { icon: Leaf, text: 'Sustainability score: 82/100', time: '1 day ago', tone: 'green' as const },
]

function DashboardHome() {
  const [projects, setProjects] = useState<Project[]>(() => {
    try { return JSON.parse(localStorage.getItem('concrete-projects') || 'null') || sampleProjects } catch { return sampleProjects }
  })
  const [savedMixes] = useState<number>(() => {
    try { return JSON.parse(localStorage.getItem('concrete-mixes') || '[]').length } catch { return 0 }
  })

  const calc = calculate(defaultMix)
  const prediction = predict(defaultMix, 28)
  const curve = predictCurve(defaultMix)

  const stats = [
    { label: 'Active Projects', value: String(projects.filter(p => p.status === 'Active').length), detail: `${projects.length} total projects`, icon: LayoutDashboard, tone: 'blue' as const },
    { label: 'Mix Designs', value: String(savedMixes), detail: 'Saved locally', icon: Beaker, tone: 'green' as const },
    { label: 'Material Searches', value: '0', detail: 'This session', icon: Boxes, tone: 'amber' as const },
    { label: 'Strength Predictions', value: '1', detail: `${prediction.toFixed(1)} MPa current`, icon: TrendingUp, tone: 'green' as const },
  ]

  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">
      <PageHeading
        eyebrow="Engineering Dashboard"
        title="Project Overview"
        description="Track your engineering projects, mix designs, material selections, and analysis in one workspace."
        action={
          <Link to="/app/build-advisor">
            <Button size="lg"><Plus className="h-4 w-4" /> New Project</Button>
          </Link>
        }
      />

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((s) => <Metric key={s.label} {...s} />)}
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.5fr_1fr]">
        <Card>
          <CardHeader
            icon={Archive}
            title="Recent Projects"
            subtitle="Engineering project workspace"
            action={<Link to="/app/saved"><Button variant="ghost" size="sm">View all <ChevronRight className="h-3.5 w-3.5" /></Button></Link>}
          />
          <div className="space-y-2">
            {projects.map((p) => (
              <div key={p.id} className="flex items-center justify-between rounded-lg border border-border p-3 transition-colors hover:bg-muted/50">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/8 text-primary">
                    <FlaskConical className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">{p.name}</div>
                    <div className="text-xs text-muted-foreground">{p.grade} · Created {p.created}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="hidden w-24 sm:block">
                    <ScoreBar score={p.progress} tone={p.status === 'Completed' ? 'accent' : 'primary'} />
                  </div>
                  <Badge tone={p.status === 'Active' ? 'green' : p.status === 'Completed' ? 'accent' : 'default'}>{p.status}</Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <CardHeader icon={Activity} title="Recent Activity" subtitle="Engineering workflow events" />
          <div className="space-y-3">
            {activityItems.map((item, i) => {
              const Icon = item.icon
              const toneClasses = {
                primary: 'bg-primary/8 text-primary',
                green: 'bg-accent/10 text-accent',
                amber: 'bg-chart-3/15 text-chart-3',
              }
              return (
                <div key={i} className="flex items-start gap-3">
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${toneClasses[item.tone]}`}>
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm leading-snug">{item.text}</p>
                    <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />{item.time}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </Card>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <Card>
          <CardHeader icon={TrendingUp} title="Strength Prediction" subtitle="Current mix · 28-day prediction" />
          <div className="mb-4 flex items-baseline gap-2">
            <span className="font-mono text-3xl font-semibold">{prediction.toFixed(1)}</span>
            <span className="text-sm text-muted-foreground">MPa</span>
            <Badge tone="green" >{prediction >= 30 ? 'Meets target' : 'Below target'}</Badge>
          </div>
          <div className="h-[180px]">
            <ResponsiveContainer>
              <BarChart data={curve.slice(0, 4)} margin={{ left: -20, right: 5, top: 5, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                <XAxis dataKey="age" tick={{ fontSize: 11 }} stroke="var(--muted-foreground)" tickLine={false} axisLine={false} />
                <YAxis tick={{ fontSize: 11 }} stroke="var(--muted-foreground)" tickLine={false} axisLine={false} />
                <Tooltip contentStyle={chartTooltipStyle} />
                <Bar dataKey="sustainable" name="Strength" fill="var(--chart-1)" radius={[4, 4, 0, 0]} barSize={24} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <Link to="/app/strength" className="mt-3 flex items-center gap-1 text-xs font-medium text-primary hover:text-primary/80">
            View full prediction <ChevronRight className="h-3.5 w-3.5" />
          </Link>
        </Card>

        <Card>
          <CardHeader icon={Coins} title="Cost Overview" subtitle="Sustainable vs conventional" />
          <div className="space-y-3">
            <div className="rounded-xl border border-border bg-muted/40 p-3.5">
              <div className="text-xs text-muted-foreground">Conventional mix</div>
              <div className="mt-1 font-mono text-xl font-semibold">₹{(calc.binder * 8 + 720 * 1.2 + 1080 * 1.1 + 170 * 0.05 + calc.binder * 1.2 / 100 * 95).toFixed(0)}</div>
              <div className="text-[11px] text-muted-foreground">per m³</div>
            </div>
            <div className="rounded-xl border border-primary/15 bg-primary/[0.04] p-3.5">
              <div className="text-xs text-primary">Sustainable mix</div>
              <div className="mt-1 font-mono text-xl font-semibold text-primary">₹{(calc.cement * 8 + calc.silica * 18 + calc.fineNatural * 1.2 + calc.coarseNatural * 1.1 + 170 * 0.05 + calc.sp * 95 + calc.plastic * 4).toFixed(0)}</div>
              <div className="text-[11px] text-muted-foreground">per m³</div>
            </div>
          </div>
          <Link to="/app/cost" className="mt-3 flex items-center gap-1 text-xs font-medium text-primary hover:text-primary/80">
            Full cost analysis <ChevronRight className="h-3.5 w-3.5" />
          </Link>
        </Card>

        <Card>
          <CardHeader icon={Leaf} title="Sustainability Score" subtitle="Environmental impact assessment" />
          <div className="mb-4 flex items-baseline gap-2">
            <span className="font-mono text-3xl font-semibold text-accent">{Math.min(98, Math.round(62 + 8 * 1.2 + 10 * 0.9))}</span>
            <span className="text-sm text-muted-foreground">/ 100</span>
          </div>
          <ScoreBar score={Math.min(98, 62 + 8 * 1.2 + 10 * 0.9)} tone="accent" />
          <div className="mt-4 space-y-2 text-xs">
            <div className="flex justify-between"><span className="text-muted-foreground">Plastic diverted</span><span className="font-mono font-semibold">{calc.plastic.toFixed(1)} kg/m³</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Cement replaced</span><span className="font-mono font-semibold">{calc.silica.toFixed(1)} kg/m³</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">CO₂ reduction</span><span className="font-mono font-semibold">{(calc.silica * 0.02 + 10 * 0.15 + calc.cement * 0.08 * 0.82).toFixed(1)} kg/m³</span></div>
          </div>
          <Link to="/app/sustainability" className="mt-3 flex items-center gap-1 text-xs font-medium text-primary hover:text-primary/80">
            Full analysis <ChevronRight className="h-3.5 w-3.5" />
          </Link>
        </Card>
      </div>

      <Card>
        <CardHeader icon={Cpu} title="Engineering Workflow" subtitle="Guided project workflow from concept to report" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { icon: Cpu, label: 'Build Advisor', to: '/app/build-advisor' },
            { icon: Building2, label: 'Structural', to: '/app/structural' },
            { icon: Beaker, label: 'Mix Design', to: '/app/mix-design' },
            { icon: TrendingUp, label: 'Strength', to: '/app/strength' },
            { icon: FileText, label: 'Reports', to: '/app/reports' },
          ].map((step, i) => {
            const Icon = step.icon
            return (
              <Link key={step.label} to={step.to}>
                <div className="group rounded-xl border border-border p-4 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/8 text-primary transition-colors group-hover:bg-primary/12">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="font-mono text-xs font-semibold text-muted-foreground">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="text-sm font-semibold">{step.label}</div>
                </div>
              </Link>
            )
          })}
        </div>
      </Card>
    </div>
  )
}
