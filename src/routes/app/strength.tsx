import { createFileRoute } from '@tanstack/react-router'
import { TrendingUp } from 'lucide-react'
import { ModulePage } from '@/components/module-page'
export const Route = createFileRoute('/app/strength')({ component: () => <ModulePage eyebrow="Analysis / prediction" title="Strength Prediction" description="Explore curing-age strength estimates and compare sustainable and conventional mixes." icon={TrendingUp} next="/app/sustainability" nextLabel="Continue to sustainability" /> })
