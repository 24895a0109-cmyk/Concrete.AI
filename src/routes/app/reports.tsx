import { createFileRoute } from '@tanstack/react-router'
import { FileText } from 'lucide-react'
import { ModulePage } from '@/components/module-page'
export const Route = createFileRoute('/app/reports')({ component: () => <ModulePage eyebrow="Network / documentation" title="Report Center" description="Bring mix design, prediction, cost, and sustainability outputs together for engineering review." icon={FileText} next="/app" nextLabel="Return to dashboard" /> })
