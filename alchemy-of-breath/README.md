# Alchemy of Breath

An immersive 3D homepage built with Next.js, React Three Fiber, and Framer Motion.

## Stack

- Next.js 15 (App Router)
- React Three Fiber + drei
- Three.js
- Framer Motion
- Tailwind CSS

## Develop

```bash
pnpm install   # or npm install / yarn
pnpm dev       # http://localhost:3030
```

## Build

```bash
pnpm build && pnpm start
```

## Structure

```
app/                 # Next.js routes
components/
  sections/          # Page sections (Hero, Philosophy, Practices, Journey, Contact)
  three/             # 3D components (BreathOrb, Particles, BreathRibbon, Scene)
```
