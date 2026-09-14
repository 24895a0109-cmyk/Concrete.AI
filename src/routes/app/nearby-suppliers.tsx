import { createFileRoute } from '@tanstack/react-router'
import { MapPin } from 'lucide-react'
import { ModulePage } from '@/components/module-page'
export const Route = createFileRoute('/app/nearby-suppliers')({ component: () => <ModulePage eyebrow="Network" title="Nearby Suppliers" description="Organize supplier discovery around material type, location, distance, and delivery assumptions." icon={MapPin} next="/app/materials" nextLabel="Review material intelligence" /> })
