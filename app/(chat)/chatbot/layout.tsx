import { SidebarDesktop } from '@/components/sidebar-desktop'

interface ChatLayoutProps {
  children: React.ReactNode
}

export default async function ChatLayout({ children }: ChatLayoutProps) {
  return (
    <div className="relative flex h-[calc(100vh_-_theme(spacing.16))] w-full overflow-hidden bg-black">
      <SidebarDesktop />
      {children}
    </div>
  )
}