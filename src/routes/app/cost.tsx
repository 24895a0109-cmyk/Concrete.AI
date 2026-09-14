import { createFileRoute } from '@tanstack/react-router'
import { Coins } from 'lucide-react'
import { ModulePage } from '@/components/module-page'
export const Route = createFileRoute('/app/cost')({ component: () => <ModulePage eyebrow="Analysis / economics" title="Cost Analysis" description="Compare material costs per cubic metre and evaluate conventional versus sustainable mix economics." icon={Coins} next="/app/sustainability" nextLabel="Continue to sustainability" /> })
