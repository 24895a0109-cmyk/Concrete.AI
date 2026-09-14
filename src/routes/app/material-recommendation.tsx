import { createFileRoute } from '@tanstack/react-router'
import { Sparkles } from 'lucide-react'
import { ModulePage } from '@/components/module-page'
export const Route = createFileRoute('/app/material-recommendation')({ component: () => <ModulePage eyebrow="Materials / advisor" title="Best Material Engine" description="Review transparent material recommendations based on project priorities and availability assumptions." icon={Sparkles} next="/app/comparison" nextLabel="Compare materials" /> })
