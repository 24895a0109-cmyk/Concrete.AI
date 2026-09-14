import { createFileRoute } from '@tanstack/react-router'
import { Boxes } from 'lucide-react'
import { ModulePage } from '@/components/module-page'
export const Route = createFileRoute('/app/materials')({ component: () => <ModulePage eyebrow="Materials" title="Material Intelligence" description="Review material properties, standards, and sustainable alternatives for concrete engineering." icon={Boxes} next="/app/comparison" nextLabel="Compare materials" /> })
