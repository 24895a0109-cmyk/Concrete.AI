import type { ReactNode, ComponentType } from 'react'
import { ChevronDown, ChevronRight, Info, TriangleAlert as AlertTriangle, ShieldCheck, CircleCheck as CheckCircle2 } from 'lucide-react'
import { useState } from 'react'
import type { DataConfidence } from '@/lib/concrete'
import { confidenceConfig } from '@/lib/concrete'

export function PageHeading({ eyebrow, title, description, action }: { eyebrow: string; title: string; description: string; action?: ReactNode }) {
  return (
    <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div className="animate-slide-in">
        <div className="mb-2.5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
          <span className="h-1 w-1 rounded-full bg-primary" />
          <span className="h-1 w-1 rounded-full bg-primary/50" />
          {eyebrow}
        </div>
        <h1 className="font-serif text-2xl font-semibold tracking-tight sm:text-[2rem] sm:leading-[1.15]">{title}</h1>
        <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
      {action && <div className="shrink-0 animate-fade-in">{action}</div>}
    </div>
  )
}

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <section className={`rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md ${className}`}>
      {children}
    </section>
  )
}

export function CardHeader({ icon: Icon, title, subtitle, action }: { icon?: ComponentType<{ className?: string }>; title: string; subtitle?: string; action?: ReactNode }) {
  return (
    <div className="mb-5 flex items-start justify-between gap-3">
      <div className="flex items-start gap-2.5">
        {Icon && (
          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/8 text-primary">
            <Icon className="h-4 w-4" />
          </div>
        )}
        <div>
          <h2 className="font-semibold leading-tight">{title}</h2>
          {subtitle && <p className="mt-0.5 text-xs text-muted-foreground">{subtitle}</p>}
        </div>
      </div>
      {action}
    </div>
  )
}

export function Metric({ label, value, detail, tone = 'default', icon: Icon }: { label: string; value: string; detail: string; tone?: 'default' | 'green' | 'amber' | 'blue'; icon?: ComponentType<{ className?: string }> }) {
  const toneClasses = {
    default: 'bg-muted text-muted-foreground',
    green: 'bg-accent/10 text-accent',
    amber: 'bg-chart-3/15 text-chart-3',
    blue: 'bg-primary/8 text-primary',
  }
  const accentBar = {
    default: 'bg-border',
    green: 'bg-accent',
    amber: 'bg-chart-3',
    blue: 'bg-primary',
  }
  return (
    <Card className="relative overflow-hidden">
      <div className={`absolute left-0 top-0 h-full w-1 ${accentBar[tone]}`} />
      <div className="relative pl-2">
        <div className="flex items-center justify-between">
          <div className="text-xs font-medium text-muted-foreground">{label}</div>
          {Icon && (
            <div className={`flex h-7 w-7 items-center justify-center rounded-lg ${toneClasses[tone]}`}>
              <Icon className="h-3.5 w-3.5" />
            </div>
          )}
        </div>
        <div className="mt-2.5 font-mono text-[1.75rem] font-semibold leading-none tracking-tight">{value}</div>
        <div className="mt-2 text-[11px] leading-relaxed text-muted-foreground">{detail}</div>
      </div>
    </Card>
  )
}

export function Button({ children, variant = 'primary', size = 'md', onClick, className = '', type = 'button' }: { children: ReactNode; variant?: 'primary' | 'secondary' | 'ghost' | 'destructive'; size?: 'sm' | 'md' | 'lg'; onClick?: () => void; className?: string; type?: 'button' | 'submit' }) {
  const variants = {
    primary: 'bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 active:scale-[0.98]',
    secondary: 'border border-border bg-card text-foreground hover:bg-muted active:scale-[0.98]',
    ghost: 'text-muted-foreground hover:bg-muted hover:text-foreground',
    destructive: 'border border-destructive/20 bg-destructive/8 text-destructive hover:bg-destructive/12 active:scale-[0.98]',
  }
  const sizes = {
    sm: 'h-8 px-3 text-xs gap-1.5 rounded-lg',
    md: 'h-9 px-4 text-sm gap-2 rounded-lg',
    lg: 'h-11 px-5 text-sm gap-2 rounded-xl',
  }
  return (
    <button type={type} onClick={onClick} className={`inline-flex items-center justify-center font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </button>
  )
}

export function Badge({ children, tone = 'default' }: { children: ReactNode; tone?: 'default' | 'accent' | 'amber' | 'green' | 'destructive' }) {
  const tones = {
    default: 'bg-muted text-muted-foreground border-border',
    accent: 'bg-primary/8 text-primary border-primary/15',
    amber: 'bg-chart-3/15 text-chart-3 border-chart-3/20',
    green: 'bg-accent/10 text-accent border-accent/15',
    destructive: 'bg-destructive/8 text-destructive border-destructive/15',
  }
  return <span className={`inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${tones[tone]}`}>{children}</span>
}

export function ConfidenceBadge({ confidence }: { confidence: DataConfidence }) {
  const config = confidenceConfig[confidence]
  return (
    <span className={`inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${config.bg} ${config.color}`}>
      {config.label}
    </span>
  )
}

export function Field({ label, value, onChange, suffix, type = 'number', options, placeholder }: { label: string; value: string | number; onChange: (v: string) => void; suffix?: string; type?: string; options?: string[]; placeholder?: string }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-muted-foreground">{label}</span>
      <div className="relative">
        {options ? (
          <select
            value={value}
            onChange={e => onChange(e.target.value)}
            className="h-10 w-full appearance-none rounded-lg border border-input bg-background px-3 pr-9 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/12 hover:border-primary/40"
          >
            {options.map(o => <option key={o}>{o}</option>)}
          </select>
        ) : (
          <input
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={e => onChange(e.target.value)}
            className="h-10 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/12 hover:border-primary/40"
          />
        )}
        {options ? (
          <ChevronDown className="pointer-events-none absolute right-3 top-3.5 h-4 w-4 text-muted-foreground" />
        ) : suffix && (
          <span className="pointer-events-none absolute right-3 top-2.5 text-xs font-medium text-muted-foreground">{suffix}</span>
        )}
      </div>
    </label>
  )
}

export function InfoNote({ icon: Icon = Info, tone = 'default', children }: { icon?: ComponentType<{ className?: string }>; tone?: 'default' | 'primary' | 'accent' | 'warning'; children: ReactNode }) {
  const tones = {
    default: 'border-border bg-muted/50',
    primary: 'border-primary/15 bg-primary/[0.03]',
    accent: 'border-accent/15 bg-accent/[0.04]',
    warning: 'border-chart-3/20 bg-chart-3/[0.05]',
  }
  const iconTones = {
    default: 'text-muted-foreground',
    primary: 'text-primary',
    accent: 'text-accent',
    warning: 'text-chart-3',
  }
  return (
    <div className={`flex gap-3 rounded-xl border p-4 ${tones[tone]}`}>
      <Icon className={`mt-0.5 h-4 w-4 shrink-0 ${iconTones[tone]}`} />
      <div className="text-xs leading-relaxed text-muted-foreground">{children}</div>
    </div>
  )
}

export function EngineeringDisclaimer({ text }: { text?: string }) {
  return (
    <InfoNote icon={ShieldCheck} tone="primary">
      {text || 'This is a preliminary engineering recommendation for planning and educational purposes. It must be verified by a qualified structural engineer and validated through laboratory testing. Do not use for construction without professional engineering review.'}
    </InfoNote>
  )
}

export function Collapsible({ title, children, defaultOpen = false, icon: Icon }: { title: string; children: ReactNode; defaultOpen?: boolean; icon?: ComponentType<{ className?: string }> }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="rounded-xl border border-border bg-card">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-muted/50"
      >
        <span className="flex items-center gap-2">
          {Icon && <Icon className="h-4 w-4 text-primary" />}
          {title}
        </span>
        <ChevronRight className={`h-4 w-4 text-muted-foreground transition-transform ${open ? 'rotate-90' : ''}`} />
      </button>
      {open && <div className="border-t border-border p-4">{children}</div>}
    </div>
  )
}

export function SectionTitle({ icon: Icon, title, subtitle }: { icon?: ComponentType<{ className?: string }>; title: string; subtitle?: string }) {
  return (
    <div className="mb-4 flex items-center gap-2.5">
      {Icon && (
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/8 text-primary">
          <Icon className="h-4 w-4" />
        </div>
      )}
      <div>
        <h2 className="font-semibold leading-tight">{title}</h2>
        {subtitle && <p className="mt-0.5 text-xs text-muted-foreground">{subtitle}</p>}
      </div>
    </div>
  )
}

export const chartTooltipStyle = {
  background: 'var(--card)',
  border: '1px solid var(--border)',
  borderRadius: '10px',
  fontSize: '12px',
  boxShadow: 'var(--shadow-lg)',
  padding: '8px 12px',
} as React.CSSProperties

export const chartAxisStyle = { fontSize: 11 } as React.CSSProperties

export function EmptyState({ icon: Icon, title, description, action }: { icon: ComponentType<{ className?: string }>; title: string; description: string; action?: ReactNode }) {
  return (
    <Card className="flex min-h-[300px] flex-col items-center justify-center text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-muted">
        <Icon className="h-8 w-8 text-muted-foreground" />
      </div>
      <h2 className="mt-5 text-lg font-semibold">{title}</h2>
      <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-muted-foreground">{description}</p>
      {action && <div className="mt-5">{action}</div>}
    </Card>
  )
}

export function ScoreBar({ score, max = 100, tone = 'primary' }: { score: number; max?: number; tone?: 'primary' | 'accent' | 'amber' }) {
  const tones = { primary: 'bg-primary', accent: 'bg-accent', amber: 'bg-chart-3' }
  return (
    <div className="h-2 overflow-hidden rounded-full bg-border">
      <div className={`h-full rounded-full ${tones[tone]} transition-all duration-500 ease-out`} style={{ width: `${Math.min(100, (score / max) * 100)}%` }} />
    </div>
  )
}

export { CheckCircle2, AlertTriangle, ChevronRight }
