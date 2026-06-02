import {
  Crop,
  Download,
  Image as ImageIcon,
  Maximize2,
  Music,
  Pause,
  Play,
  Redo2,
  Scissors,
  SkipBack,
  SkipForward,
  Sparkles,
  Subtitles,
  Type,
  Undo2,
  Upload,
  Video,
  Volume2,
  ZoomIn,
  ZoomOut,
} from "lucide-react"

import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Separator } from "@/registry/new-york-v4/ui/separator"
import { Slider } from "@/registry/new-york-v4/ui/slider"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/new-york-v4/ui/tooltip"

const tools = [
  { icon: Video, label: "Clips" },
  { icon: Type, label: "Text" },
  { icon: Music, label: "Audio" },
  { icon: ImageIcon, label: "Media" },
  { icon: Subtitles, label: "Captions" },
  { icon: Sparkles, label: "Effects" },
]

const tracks = [
  {
    label: "V1",
    type: "video",
    clips: [
      { name: "intro.mp4", start: 0, width: 28, color: "bg-blue-500/80" },
      { name: "scene-a.mp4", start: 30, width: 34, color: "bg-blue-500/80" },
      { name: "outro.mp4", start: 68, width: 24, color: "bg-blue-500/80" },
    ],
  },
  {
    label: "V2",
    type: "overlay",
    clips: [
      { name: "logo.png", start: 4, width: 18, color: "bg-purple-500/80" },
      { name: "lower-3rd", start: 40, width: 14, color: "bg-purple-500/80" },
    ],
  },
  {
    label: "A1",
    type: "audio",
    clips: [
      { name: "voiceover.wav", start: 2, width: 60, color: "bg-emerald-500/80" },
    ],
  },
  {
    label: "A2",
    type: "music",
    clips: [
      { name: "score.mp3", start: 0, width: 92, color: "bg-amber-500/80" },
    ],
  },
]

export function VideoEditor() {
  return (
    <div className="flex h-svh w-full flex-col bg-background text-foreground">
      <header className="flex h-12 items-center gap-3 border-b px-4">
        <div className="flex items-center gap-2">
          <Video className="size-5" />
          <span className="text-sm font-semibold">Cutroom</span>
        </div>
        <Separator orientation="vertical" className="h-5" />
        <div className="flex items-center gap-1 text-sm">
          <span className="text-muted-foreground">Project</span>
          <span className="font-medium">Untitled-1</span>
          <Badge variant="secondary" className="ml-1">
            Draft
          </Badge>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <Undo2 />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Undo</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <Redo2 />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Redo</TooltipContent>
          </Tooltip>
          <Separator orientation="vertical" className="h-5" />
          <Button variant="outline" size="sm">
            <Upload />
            Import
          </Button>
          <Button size="sm">
            <Download />
            Export
          </Button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside className="flex w-16 flex-col items-center gap-1 border-r py-3">
          {tools.map((tool) => (
            <Tooltip key={tool.label}>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-10 flex-col gap-0.5 text-[10px]"
                >
                  <tool.icon className="size-4" />
                  <span>{tool.label}</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">{tool.label}</TooltipContent>
            </Tooltip>
          ))}
        </aside>

        <section className="flex flex-1 flex-col">
          <div className="flex flex-1 items-center justify-center bg-muted/30 p-6">
            <div className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-lg border bg-black shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-950">
                <Play className="size-16 text-white/40" />
              </div>
              <div className="absolute bottom-3 left-3 rounded-md bg-black/60 px-2 py-1 font-mono text-xs text-white">
                00:00:24 / 00:01:32
              </div>
              <div className="absolute right-3 bottom-3 rounded-md bg-black/60 px-2 py-1 font-mono text-xs text-white">
                1920 × 1080 · 30fps
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 border-t py-2">
            <Button variant="ghost" size="icon">
              <SkipBack />
            </Button>
            <Button size="icon">
              <Pause />
            </Button>
            <Button variant="ghost" size="icon">
              <SkipForward />
            </Button>
            <Separator orientation="vertical" className="mx-2 h-5" />
            <Volume2 className="size-4 text-muted-foreground" />
            <Slider defaultValue={[70]} max={100} className="w-24" />
          </div>
        </section>

        <aside className="hidden w-72 flex-col border-l lg:flex">
          <div className="border-b px-4 py-3">
            <h3 className="text-sm font-semibold">Inspector</h3>
            <p className="text-xs text-muted-foreground">scene-a.mp4 · 00:08</p>
          </div>
          <div className="flex flex-col gap-4 p-4 text-sm">
            <div>
              <div className="mb-1 text-xs text-muted-foreground">Opacity</div>
              <Slider defaultValue={[100]} max={100} />
            </div>
            <div>
              <div className="mb-1 text-xs text-muted-foreground">Volume</div>
              <Slider defaultValue={[80]} max={100} />
            </div>
            <div>
              <div className="mb-1 text-xs text-muted-foreground">Speed</div>
              <Slider defaultValue={[100]} max={200} />
            </div>
            <Separator />
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" size="sm">
                <Scissors />
                Split
              </Button>
              <Button variant="outline" size="sm">
                <Crop />
                Crop
              </Button>
            </div>
          </div>
        </aside>
      </div>

      <footer className="flex h-64 flex-col border-t">
        <div className="flex h-9 items-center gap-2 border-b px-3">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="size-7">
                <Scissors className="size-3.5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Split at playhead</TooltipContent>
          </Tooltip>
          <Separator orientation="vertical" className="h-5" />
          <span className="font-mono text-xs text-muted-foreground">
            00:00:24:12
          </span>
          <div className="ml-auto flex items-center gap-1">
            <Button variant="ghost" size="icon" className="size-7">
              <ZoomOut className="size-3.5" />
            </Button>
            <Slider defaultValue={[40]} max={100} className="w-24" />
            <Button variant="ghost" size="icon" className="size-7">
              <ZoomIn className="size-3.5" />
            </Button>
            <Button variant="ghost" size="icon" className="size-7">
              <Maximize2 className="size-3.5" />
            </Button>
          </div>
        </div>

        <div className="relative flex-1 overflow-auto">
          <div className="sticky top-0 z-10 flex h-6 border-b bg-background">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="flex-1 border-r px-2 font-mono text-[10px] text-muted-foreground"
              >
                00:{String(i * 10).padStart(2, "0")}
              </div>
            ))}
          </div>

          <div className="flex flex-col">
            {tracks.map((track) => (
              <div key={track.label} className="flex h-12 border-b">
                <div className="flex w-14 shrink-0 items-center justify-center border-r bg-muted/40 font-mono text-xs">
                  {track.label}
                </div>
                <div className="relative flex-1">
                  {track.clips.map((clip) => (
                    <div
                      key={clip.name}
                      className={`absolute top-1.5 bottom-1.5 flex items-center rounded-md border border-white/10 px-2 text-[11px] font-medium text-white shadow-sm ${clip.color}`}
                      style={{
                        left: `${clip.start}%`,
                        width: `${clip.width}%`,
                      }}
                    >
                      <span className="truncate">{clip.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div
            className="pointer-events-none absolute top-0 bottom-0 z-20 w-px bg-red-500"
            style={{ left: "26%" }}
          >
            <div className="absolute -top-0.5 -left-1.5 size-3 rotate-45 bg-red-500" />
          </div>
        </div>
      </footer>
    </div>
  )
}
