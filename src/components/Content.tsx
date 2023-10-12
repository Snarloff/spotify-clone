import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import Image from 'next/image'

export function Content() {
  const array = new Array(6).fill(0)

  return (
    <main className="flex-1">
      <div className="group/item bg-transparent">
        <div className="from-green-500/50 p-6 transition-colors duration-200 group-hover/item:bg-gradient-to-b">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="mt-10 text-3xl font-semibold">Good Afternoon</h1>

          <div className="mt-4 grid grid-cols-3 gap-4">
            {array.map((_, index) => (
              <div
                key={index}
                className="group flex cursor-pointer items-center gap-4 overflow-hidden rounded-md bg-white/5 transition-colors hover:bg-white/10"
              >
                <Image src="/album.jpg" width={104} height={104} alt="Foto do álbum" />
                <strong>Álbum do Alok</strong>
                <button className="invisible ml-auto mr-10 flex h-12 w-12 items-center justify-center rounded-full bg-green-400 pl-1 text-black transition-opacity group-hover:visible">
                  <Play fill="bg-black" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6">
        <h2 className="mt-10 text-2xl font-semibold">Made for Luís Estareli</h2>

        <div className="mt-4 grid grid-cols-6 gap-4">
          {array.map((_, index) => (
            <div key={index} className="flex cursor-pointer flex-col gap-2 rounded-md bg-white/5 p-3 hover:bg-white/10">
              <Image src="/album.jpg" className="w-full" width={120} height={120} alt="Foto do álbum" />
              <strong className="font-semibold">Daily Mix #1</strong>
              <span className="text-sm text-zinc-400">Wallow, COIN, girl in red and more</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
