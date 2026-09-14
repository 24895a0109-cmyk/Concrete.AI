import { createFileRoute } from '@tanstack/react-router'
import { Leaf } from 'lucide-react'
import { ModulePage } from '@/components/module-page'
export const Route = createFileRoute('/app/sustainability')({ component: () => <ModulePage eyebrow="Analysis / impact" title="Sustainability" description="Estimate waste diversion, material reduction, and assumption-based environmental impact indicators." icon={Leaf} next="/app/reports" nextLabel="Open report center" /> })
