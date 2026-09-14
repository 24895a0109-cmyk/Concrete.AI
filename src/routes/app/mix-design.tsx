import { createFileRoute } from '@tanstack/react-router'
import { Beaker } from 'lucide-react'
import { ModulePage } from '@/components/module-page'
export const Route = createFileRoute('/app/mix-design')({ component: () => <ModulePage eyebrow="Design / concrete" title="Mix Design" description="Open the concrete mix design workspace to calculate quantities and sustainable replacements." icon={Beaker} next="/app/strength" nextLabel="Continue to strength prediction" /> })
