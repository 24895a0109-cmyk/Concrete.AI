import { createFileRoute } from '@tanstack/react-router'
import { CircleHelp } from 'lucide-react'
import { ModulePage } from '@/components/module-page'
export const Route = createFileRoute('/app/about')({ component: () => <ModulePage eyebrow="Library" title="About CONCRETE.AI" description="Understand the educational scope, transparent assumptions, and engineering validation requirements of this prototype." icon={CircleHelp} next="/app" nextLabel="Return to dashboard" /> })
