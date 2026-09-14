import { createFileRoute } from '@tanstack/react-router'
import { GitCompare } from 'lucide-react'
import { ModulePage } from '@/components/module-page'
export const Route = createFileRoute('/app/comparison')({ component: () => <ModulePage eyebrow="Materials / analysis" title="Material Comparison" description="Compare conventional and sustainable material options side by side for early-stage decisions." icon={GitCompare} next="/app/cost" nextLabel="Continue to cost analysis" /> })
