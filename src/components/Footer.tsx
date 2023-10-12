import { Laptop2, LayoutList, Maximize2, Mic2, Play, Repeat1, Shuffle, SkipBack, SkipForward, Volume1 } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="flex items-center justify-between border-t border-zinc-700 bg-zinc-800 px-6 py-4">
      <div className="flex items-center gap-3">
        <Image src="/album.jpg" width={56} height={56} alt="Foto do álbum" />
        <div className="flex flex-col">
          <strong className="font-normal">Rope</strong>
          <span className="text-xs text-zinc-400">Foo Figherts</span>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-6">
          <Shuffle className="cursor-pointer text-green-400 hover:text-green-600" size={20} />
          <SkipBack fill="rgb(228, 228, 231)" className="cursor-pointer hover:text-zinc-400" size={20} />
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white pl-1 text-black">
            <Play fill="bg-black" />
          </button>
          <SkipForward fill="rgb(228, 228, 231)" className="text-zinc-200 hover:text-zinc-400" size={20} />
          <Repeat1 className="cursor-pointer text-zinc-200 hover:text-zinc-400" size={20} />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">0:31</span>
          <div className="h-1 w-96 rounded-full bg-zinc-600">
            <div className="h-1 w-40 rounded-full bg-zinc-200"></div>
          </div>
          <span className="text-xs text-zinc-400">2:14</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Mic2 size={20} />
        <LayoutList size={20} />
        <Laptop2 size={20} />
        <div className="flex items-center gap-2">
          <Volume1 size={20} />
          <div className="h-1 w-24 rounded-full bg-zinc-600">
            <div className="h-1 w-10 rounded-full bg-zinc-200"></div>
          </div>
        </div>
        <Maximize2 size={18} />
      </div>
    </footer>
  )
}
