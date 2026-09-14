import { useState, useEffect, useCallback } from 'react'
import type { ReactNode } from 'react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,
} from '@/components/ui/tooltip'
import { LayoutDashboard, LogOut, PanelLeft, Beaker, TrendingUp, Leaf, Coins, Archive, Circle as CircleHelp, Cpu, Boxes, Building2, MapPin, FileText, GitCompare, FlaskConical } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Link, useLocation } from '@tanstack/react-router'

const SIDEBAR_KEY = 'sidebar_collapsed'

interface NavItemDef {
  href: string
  icon: ReactNode
  label: string
  badge?: string
}

const NAV_GROUPS: { title: string; items: NavItemDef[] }[] = [
  {
    title: 'Overview',
    items: [
      { href: '/app', icon: <LayoutDashboard className="h-4 w-4" />, label: 'Dashboard' },
    ],
  },
  {
    title: 'Design',
    items: [
      { href: '/app/build-advisor', icon: <Cpu className="h-4 w-4" />, label: 'AI Build Advisor', badge: 'AI' },
      { href: '/app/structural', icon: <Building2 className="h-4 w-4" />, label: 'Structural Concept' },
      { href: '/app/mix-design', icon: <Beaker className="h-4 w-4" />, label: 'Mix Design' },
      { href: '/app/strength', icon: <TrendingUp className="h-4 w-4" />, label: 'Strength Prediction' },
    ],
  },
  {
    title: 'Materials',
    items: [
      { href: '/app/materials', icon: <Boxes className="h-4 w-4" />, label: 'Material Intelligence' },
      { href: '/app/material-recommendation', icon: <Sparkles className="h-4 w-4" />, label: 'Best Material Engine' },
      { href: '/app/comparison', icon: <GitCompare className="h-4 w-4" />, label: 'Material Comparison' },
    ],
  },
  {
    title: 'Analysis',
    items: [
      { href: '/app/cost', icon: <Coins className="h-4 w-4" />, label: 'Cost Analysis' },
      { href: '/app/sustainability', icon: <Leaf className="h-4 w-4" />, label: 'Sustainability' },
    ],
  },
  {
    title: 'Network',
    items: [
      { href: '/app/nearby-suppliers', icon: <MapPin className="h-4 w-4" />, label: 'Nearby Suppliers' },
      { href: '/app/reports', icon: <FileText className="h-4 w-4" />, label: 'Report Center' },
    ],
  },
  {
    title: 'Library',
    items: [
      { href: '/app/saved', icon: <Archive className="h-4 w-4" />, label: 'Saved Projects' },
      { href: '/app/about', icon: <CircleHelp className="h-4 w-4" />, label: 'About' },
    ],
  },
]

import { Sparkles } from 'lucide-react'

function NavItem({ item, collapsed }: { item: NavItemDef; collapsed: boolean }) {
  const location = useLocation()
  const active = location.pathname === item.href || (item.href !== '/app' && location.pathname.startsWith(item.href))
  const link = (
    <Link
      to={item.href}
      className={cn(
        'flex items-center gap-2.5 rounded-lg text-sm transition-all duration-150 cursor-pointer',
        collapsed ? 'justify-center w-8 h-8 mx-auto' : 'px-3 py-2 w-full',
        active
          ? 'bg-primary/8 font-medium text-primary'
          : 'text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground'
      )}
    >
      <span className="shrink-0">{item.icon}</span>
      {!collapsed && <span className="flex-1 truncate">{item.label}</span>}
      {!collapsed && item.badge && (
        <span className="rounded-md bg-primary/10 px-1.5 py-0.5 text-[10px] font-semibold text-primary">{item.badge}</span>
      )}
    </Link>
  )
  if (!collapsed) return link
  return (
    <Tooltip>
      <TooltipTrigger asChild>{link}</TooltipTrigger>
      <TooltipContent side="right">{item.label}</TooltipContent>
    </Tooltip>
  )
}

export function AppSidebarShell() {
  const [collapsed, setCollapsed] = useState(false)
  useEffect(() => {
    if (localStorage.getItem(SIDEBAR_KEY) === 'true') setCollapsed(true)
  }, [])

  const toggle = useCallback(() => {
    setCollapsed(v => {
      const next = !v
      localStorage.setItem(SIDEBAR_KEY, String(next))
      return next
    })
  }, [])

  return (
    <TooltipProvider delayDuration={0}>
      <div
        className={cn(
          'flex flex-col h-full bg-sidebar border-r border-sidebar-border overflow-hidden',
          'transition-[width] duration-200 ease-linear shrink-0',
          collapsed ? 'w-[3.25rem]' : 'w-[15rem]'
        )}
      >
        <div className={cn('flex items-center gap-2 shrink-0 border-b border-sidebar-border h-16 px-3', collapsed && 'justify-center px-2')}>
          {!collapsed && (
            <>
              <Link to="/app" className="flex items-center gap-2.5">
                <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-primary text-primary-foreground shrink-0">
                  <FlaskConical className="h-4 w-4" />
                </div>
                <span className="flex-1 font-semibold text-sm truncate">CONCRETE<span className="text-primary">.AI</span></span>
              </Link>
            </>
          )}
          {collapsed && (
            <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-primary text-primary-foreground shrink-0">
              <FlaskConical className="h-4 w-4" />
            </div>
          )}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="sm" className="h-7 w-7 p-0 shrink-0 text-muted-foreground hover:text-foreground" onClick={toggle}>
                <PanelLeft className={cn('h-4 w-4 transition-transform duration-200', collapsed && 'rotate-180')} />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">{collapsed ? 'Expand sidebar' : 'Collapse sidebar'}</TooltipContent>
          </Tooltip>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden px-2 py-3 space-y-4">
          {NAV_GROUPS.map((group) => (
            <div key={group.title}>
              {!collapsed && (
                <p className="px-3 pb-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/70">{group.title}</p>
              )}
              <div className="space-y-0.5">
                {group.items.map((item) => (
                  <NavItem key={item.href} item={item} collapsed={collapsed} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={cn('shrink-0 border-t border-sidebar-border', collapsed ? 'flex flex-col items-center gap-1 p-2' : 'p-3 space-y-1')}>
          {collapsed ? (
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="flex items-center justify-center h-8 w-8 rounded-md hover:bg-sidebar-accent transition-colors cursor-pointer">
                  <Avatar className="h-6 w-6 shrink-0"><AvatarFallback className="text-[10px] bg-muted">U</AvatarFallback></Avatar>
                </button>
              </TooltipTrigger>
              <TooltipContent side="right">Engineer · user@concrete.ai</TooltipContent>
            </Tooltip>
          ) : (
            <button className="flex items-center gap-2 rounded-md hover:bg-sidebar-accent transition-colors cursor-pointer w-full px-2 py-1.5">
              <Avatar className="h-6 w-6 shrink-0"><AvatarFallback className="text-[10px] bg-muted">U</AvatarFallback></Avatar>
              <div className="flex-1 min-w-0 text-left">
                <p className="text-xs font-medium leading-tight truncate">Engineer</p>
                <p className="text-[10px] text-muted-foreground leading-tight truncate">user@concrete.ai</p>
              </div>
            </button>
          )}
          {collapsed ? (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button type="button" variant="ghost" size="sm" className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground">
                  <LogOut className="h-4 w-4 shrink-0" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">Sign out</TooltipContent>
            </Tooltip>
          ) : (
            <Button type="button" variant="ghost" size="sm" className="w-full justify-start px-2 gap-2 text-muted-foreground hover:text-foreground">
              <LogOut className="h-4 w-4 shrink-0" /> Sign out
            </Button>
          )}
        </div>
      </div>
    </TooltipProvider>
  )
}
