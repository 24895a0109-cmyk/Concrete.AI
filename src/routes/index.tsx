import { createFileRoute, Link } from '@tanstack/react-router'
import { FlaskConical, Beaker, TrendingUp, Leaf, Coins, Building2, MapPin, FileText, ArrowRight, CircleCheck as CheckCircle2, Layers, Sparkles, ShieldCheck, Cpu, Database, Network, Zap, ChevronRight, ChartBar as BarChart3, Calculator, Boxes, Users, GraduationCap, HardHat } from 'lucide-react'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'CONCRETE.AI — AI-Powered Civil Engineering & Construction Intelligence Platform' },
      { name: 'description', content: 'AI-assisted concrete mix design, material intelligence, structural concepts, cost analysis, sustainability analysis, and supplier discovery for civil engineers, contractors, and researchers.' },
      { property: 'og:title', content: 'CONCRETE.AI — Civil Engineering Intelligence Platform' },
      { property: 'og:description', content: 'Build smarter. Design stronger. Analyze better.' },
      { property: 'og:type', content: 'website' },
    ],
  }),
  component: LandingPage,
})

function LandingPage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Nav />
      <Hero />
      <Capabilities />
      <Workflow />
      <MaterialIntelligence />
      <AIPrediction />
      <StructuralIntelligence />
      <Sustainability />
      <Audiences />
      <FinalCTA />
      <Footer />
    </div>
  )
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
            <FlaskConical className="h-5 w-5" />
          </div>
          <div className="text-[15px] font-semibold tracking-tight">CONCRETE<span className="text-primary">.AI</span></div>
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#capabilities" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Capabilities</a>
          <a href="#workflow" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Workflow</a>
          <a href="#audiences" className="text-sm text-muted-foreground transition-colors hover:text-foreground">For Teams</a>
          <a href="#sustainability" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Sustainability</a>
        </nav>
        <div className="flex items-center gap-2.5">
          <Link to="/app" className="inline-flex h-9 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 active:scale-[0.98]">
            Launch Platform
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs text-muted-foreground shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            AI-Powered Civil Engineering & Construction Intelligence Platform
          </div>
          <h1 className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
            Build smarter.<br />
            Design stronger.<br />
            <span className="text-primary">Analyze better.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            CONCRETE.AI combines AI-assisted engineering, concrete mix design, material intelligence,
            structural concepts, supplier discovery, cost analysis, and sustainability analysis in one
            professional platform.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/app" className="inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98]">
              Start Engineering Project
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/app" className="inline-flex h-12 items-center gap-2 rounded-xl border border-border bg-card px-6 text-sm font-semibold text-foreground shadow-sm transition-all hover:bg-muted active:scale-[0.98]">
              Explore Platform
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
          {[
            { icon: Beaker, label: 'Mix Design', value: 'IS 10262:2019' },
            { icon: TrendingUp, label: 'Strength Prediction', value: '3–90 day curve' },
            { icon: Boxes, label: 'Material Database', value: '15+ materials' },
            { icon: MapPin, label: 'Supplier Discovery', value: 'Location-aware' },
          ].map((item) => {
            const Icon = item.icon
            return (
              <div key={item.label} className="rounded-xl border border-border bg-card p-4 shadow-sm">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/8 text-primary">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="text-sm font-semibold">{item.label}</div>
                <div className="mt-0.5 text-xs text-muted-foreground">{item.value}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Capabilities() {
  const capabilities = [
    { icon: Beaker, title: 'Concrete Mix Design', desc: 'Transparent mix calculations following IS 10262:2019 principles with silica fume and recycled plastic aggregate support.' },
    { icon: Cpu, title: 'AI Build Advisor', desc: 'Preliminary recommendations for concrete grade, structural system, and materials based on building parameters.' },
    { icon: Boxes, title: 'Material Intelligence', desc: 'Comprehensive database of cement, aggregates, SCMs, admixtures, and sustainable alternatives with properties and standards.' },
    { icon: TrendingUp, title: 'Strength Prediction', desc: 'Model-based compressive strength estimates across curing ages from 3 to 90 days with confidence indicators.' },
    { icon: Building2, title: 'Structural Concept', desc: 'Preliminary structural layout with column grid, beam, slab, and footing concepts for planning and education.' },
    { icon: Calculator, title: 'Cost Analysis', desc: 'Compare conventional vs sustainable mix costs with editable local material prices and transportation estimates.' },
    { icon: Leaf, title: 'Sustainability Analysis', desc: 'Quantify plastic waste diversion, CO₂ reduction, and natural aggregate savings with assumption-based scoring.' },
    { icon: MapPin, title: 'Nearby Material Finder', desc: 'Search for suppliers by material type and location with filters for distance, rating, and delivery options.' },
    { icon: FileText, title: 'Engineering Reports', desc: 'Generate comprehensive project reports covering mix design, strength, materials, cost, and sustainability.' },
  ]
  return (
    <section id="capabilities" className="border-b border-border py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <div className="mb-2.5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
            <span className="h-1 w-1 rounded-full bg-primary" />
            Platform Capabilities
          </div>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Everything you need for concrete engineering</h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">A unified workspace for mix design, material selection, structural concepts, cost analysis, and sustainability — built on transparent engineering principles.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap) => {
            const Icon = cap.icon
            return (
              <div key={cap.title} className="group rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/8 text-primary transition-colors group-hover:bg-primary/12">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold">{cap.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cap.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Workflow() {
  const steps = [
    { icon: Building2, label: 'Create Project', desc: 'Define building parameters' },
    { icon: Cpu, label: 'AI Build Advisor', desc: 'Get preliminary recommendations' },
    { icon: Building2, label: 'Structural Concept', desc: 'Column grid and foundation' },
    { icon: Boxes, label: 'Material Selection', desc: 'Compare and select materials' },
    { icon: Beaker, label: 'Mix Design', desc: 'Calculate mix proportions' },
    { icon: TrendingUp, label: 'Strength Prediction', desc: 'Estimate compressive strength' },
    { icon: Coins, label: 'Cost Analysis', desc: 'Compare cost per m³' },
    { icon: Leaf, label: 'Sustainability', desc: 'Assess environmental impact' },
    { icon: MapPin, label: 'Nearby Suppliers', desc: 'Find material sources' },
    { icon: FileText, label: 'Engineering Report', desc: 'Generate project report' },
  ]
  return (
    <section id="workflow" className="border-b border-border bg-muted/30 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <div className="mb-2.5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
            <span className="h-1 w-1 rounded-full bg-primary" />
            Engineering Workflow
          </div>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">From concept to report in one platform</h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">A guided workflow that takes you from project creation to a complete engineering report.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={step.label} className="relative rounded-xl border border-border bg-card p-4 shadow-sm">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/8 text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="font-mono text-xs font-semibold text-muted-foreground">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="text-sm font-semibold">{step.label}</div>
                <div className="mt-0.5 text-xs text-muted-foreground">{step.desc}</div>
                {i < steps.length - 1 && (
                  <div className="absolute -right-2 top-1/2 hidden h-px w-4 bg-border lg:block" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function MaterialIntelligence() {
  return (
    <section className="border-b border-border py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-2.5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
              <span className="h-1 w-1 rounded-full bg-primary" />
              Material Intelligence
            </div>
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Know your materials before you pour</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">Access a comprehensive database of cement types, aggregates, supplementary cementitious materials, admixtures, and sustainable alternatives. Compare properties, costs, and suitability for your specific project.</p>
            <ul className="mt-6 space-y-3">
              {['Properties, density, strength contribution, and durability for each material', 'Search and filter by category, building type, or structural element', 'Side-by-side comparison of 2–4 materials with scoring', 'Sustainability ratings and relevant Indian standards'].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: Layers, label: 'Cement', count: '3 types' },
              { icon: Boxes, label: 'Aggregates', count: '4 types' },
              { icon: Sparkles, label: 'SCMs', count: '3 types' },
              { icon: Beaker, label: 'Admixtures', count: '2 types' },
              { icon: Building2, label: 'Blocks', count: '3 types' },
              { icon: Network, label: 'Recycled', count: '2 types' },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="rounded-xl border border-border bg-card p-4 shadow-sm">
                  <Icon className="h-5 w-5 text-primary" />
                  <div className="mt-3 text-sm font-semibold">{item.label}</div>
                  <div className="text-xs text-muted-foreground">{item.count}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function AIPrediction() {
  return (
    <section className="border-b border-border bg-muted/30 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 grid grid-cols-2 gap-3 lg:order-1">
            {[
              { label: '28-day prediction', value: '34.2', unit: 'MPa' },
              { label: 'Confidence', value: '87', unit: '%' },
              { label: 'Target grade', value: 'M30', unit: '' },
              { label: 'Curing ages', value: '6', unit: 'points' },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                <div className="text-xs text-muted-foreground">{item.label}</div>
                <div className="mt-2 font-mono text-2xl font-semibold">{item.value}<span className="ml-1 text-sm font-normal text-muted-foreground">{item.unit}</span></div>
              </div>
            ))}
          </div>
          <div className="order-1 lg:order-2">
            <div className="mb-2.5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
              <span className="h-1 w-1 rounded-full bg-primary" />
              AI Strength Prediction
            </div>
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Predict strength before you pour</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">Estimate compressive strength development from 3 to 90 days using a transparent model that accounts for binder content, water-binder ratio, silica fume benefit, and plastic replacement penalty.</p>
            <div className="mt-6 rounded-xl border border-primary/15 bg-primary/[0.03] p-4">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p className="text-xs leading-relaxed text-muted-foreground">Labeled as a prototype model-based estimate — not a trained ML model. The interface is prepared for future ML model integration. All predictions require laboratory validation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StructuralIntelligence() {
  return (
    <section className="border-b border-border py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-2.5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
              <span className="h-1 w-1 rounded-full bg-primary" />
              Structural Intelligence
            </div>
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Visualize your structure before you build</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">Generate a preliminary structural concept with column grid layout, beam and slab arrangement, foundation type, and seismic considerations based on your building parameters.</p>
            <ul className="mt-6 space-y-3">
              {['Column grid based on spacing and building dimensions', 'Foundation type recommendation based on soil conditions', 'Seismic zone considerations per IS 1893:2016', 'Element inspection: columns, beams, slabs, footings, shear walls'].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-md">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold">
              <Building2 className="h-4 w-4 text-primary" />
              Structural Concept Preview
            </div>
            <div className="grid grid-cols-4 gap-2">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="aspect-square rounded border-2 border-primary/20 bg-primary/5" />
              ))}
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
              <div className="rounded-lg bg-muted p-2.5">
                <div className="text-muted-foreground">Columns</div>
                <div className="font-mono font-semibold">16</div>
              </div>
              <div className="rounded-lg bg-muted p-2.5">
                <div className="text-muted-foreground">Grid</div>
                <div className="font-mono font-semibold">4×4</div>
              </div>
              <div className="rounded-lg bg-muted p-2.5">
                <div className="text-muted-foreground">Height</div>
                <div className="font-mono font-semibold">12.0m</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Sustainability() {
  return (
    <section id="sustainability" className="border-b border-border bg-muted/30 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <div className="mb-2.5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
            <span className="h-1 w-1 rounded-full bg-accent" />
            Sustainability
          </div>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Engineer for a greener future</h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">Quantify the environmental impact of your concrete mix. Track plastic waste diversion, CO₂ reduction, and natural aggregate savings with transparent, assumption-based scoring.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Leaf, label: 'Plastic diverted', value: '10.2 kg/m³' },
            { icon: Layers, label: 'Aggregate reduction', value: '10%' },
            { icon: Beaker, label: 'Cement replaced', value: '30.2 kg/m³' },
            { icon: TrendingUp, label: 'CO₂ reduction', value: '12.5 kg/m³' },
          ].map((item) => {
            const Icon = item.icon
            return (
              <div key={item.label} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="text-xs text-muted-foreground">{item.label}</div>
                <div className="mt-1.5 font-mono text-xl font-semibold">{item.value}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Audiences() {
  const audiences = [
    { icon: HardHat, title: 'Civil Engineers', desc: 'Transparent mix design, strength prediction, and structural concepts for project planning and analysis.' },
    { icon: Building2, title: 'Contractors', desc: 'Cost analysis, material comparison, and supplier discovery to optimize procurement and construction.' },
    { icon: Users, title: 'Construction Companies', desc: 'Project management, standardized workflows, and comprehensive reporting for multiple projects.' },
    { icon: GraduationCap, title: 'Researchers & Students', desc: 'Educational tool for understanding concrete technology, sustainable materials, and engineering principles.' },
  ]
  return (
    <section id="audiences" className="border-b border-border py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <div className="mb-2.5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
            <span className="h-1 w-1 rounded-full bg-primary" />
            For Engineering Teams
          </div>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Built for the entire construction ecosystem</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((aud) => {
            const Icon = aud.icon
            return (
              <div key={aud.title} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/8 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold">{aud.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{aud.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="border-b border-border bg-primary py-20 text-primary-foreground">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Start your engineering project today</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/80">Launch the platform and access mix design, material intelligence, structural concepts, cost analysis, and sustainability tools — all in one workspace.</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to="/app" className="inline-flex h-12 items-center gap-2 rounded-xl bg-primary-foreground px-6 text-sm font-semibold text-primary shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98]">
            Launch Platform
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a href="#capabilities" className="inline-flex h-12 items-center gap-2 rounded-xl border border-primary-foreground/20 px-6 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10 active:scale-[0.98]">
            Explore Capabilities
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <FlaskConical className="h-4 w-4" />
            </div>
            <div className="text-sm font-semibold">CONCRETE.AI</div>
          </div>
          <p className="text-xs text-muted-foreground">AI-Powered Civil Engineering & Construction Intelligence Platform. Preliminary engineering tool — requires validation by qualified professionals.</p>
        </div>
      </div>
    </footer>
  )
}
