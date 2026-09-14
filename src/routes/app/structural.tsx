import { createFileRoute } from '@tanstack/react-router'
import { Building2 } from 'lucide-react'
import { ModulePage } from '@/components/module-page'
export const Route = createFileRoute('/app/structural')({ component: () => <ModulePage eyebrow="Design / structural" title="Structural Concept" description="Review preliminary structural system concepts and planning assumptions for your project." icon={Building2} next="/app/mix-design" nextLabel="Continue to mix design" /> })
