import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: import.meta.env.VITE_BLINK_PROJECT_ID || 'ai-concrete-mix-73ybo6pb',
  publishableKey: import.meta.env.VITE_BLINK_PUBLISHABLE_KEY || 'blnk_pk_GabbFUisSvlWD9a0xAkzC5cxz1yR4jJ_',
  authRequired: false,
  auth: { mode: 'managed' },
})
