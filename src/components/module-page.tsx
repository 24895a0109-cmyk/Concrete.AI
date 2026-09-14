import type { ComponentType } from 'react'
import { ArrowRight, Construction } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { Button, Card, EngineeringDisclaimer, PageHeading } from '@/components/engineering-ui'

export function ModulePage({ eyebrow, title, description, icon: Icon, next, nextLabel }: { eyebrow: string; title: string; description: string; icon: ComponentType<{ className?: string }>; next: string; nextLabel: string }) {
  return <div className="space-y-6 p-4 sm:p-6 lg:p-8"><PageHeading eyebrow={eyebrow} title={title} description={description} /><Card className="flex min-h-[360px] flex-col items-center justify-center text-center"><div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/8 text-primary"><Icon className="h-8 w-8" /></div><h2 className="mt-5 text-lg font-semibold">Engineering workspace ready</h2><p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">This module is connected to the CONCRETE.AI workspace. Continue through the workflow to use its engineering analysis tools.</p><Link to={next} className="mt-6"><Button>{nextLabel}<ArrowRight className="h-4 w-4" /></Button></Link></Card><EngineeringDisclaimer /></div>
}
