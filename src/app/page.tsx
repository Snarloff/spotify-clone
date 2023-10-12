import { Content } from '@/components/Content'
import { Sidebar } from '@/components/Sidebar'

import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className="flex h-screen flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </div>
  )
}
