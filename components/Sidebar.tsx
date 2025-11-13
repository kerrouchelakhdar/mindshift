import AdSlot from './ads/AdSlot'

export default function Sidebar() {
  return (
    <aside className="sticky top-24 flex w-full flex-col gap-4 sm:w-72">
      <AdSlot slotId="sidebar-1" format="rectangle" />
      <AdSlot slotId="sidebar-2" format="skyscraper" />
    </aside>
  )
}
