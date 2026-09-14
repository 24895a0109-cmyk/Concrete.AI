import { createFileRoute } from '@tanstack/react-router'
import { Archive } from 'lucide-react'
import { ModulePage } from '@/components/module-page'
export const Route = createFileRoute('/app/saved')({ component: () => <ModulePage eyebrow="Library" title="Saved Projects" description="Return to locally saved engineering projects and mix design scenarios." icon={Archive} next="/app" nextLabel="Return to dashboard" /> })
