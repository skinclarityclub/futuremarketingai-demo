# FutureMarketingAI - Interactive Demo Showcase

An interactive, high-end demo website showcasing FutureMarketingAI's complete Marketing Machine for enterprise clients.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠 Tech Stack

- **Framework:** React 18.3+ with TypeScript
- **Build Tool:** Vite 6.0+
- **Styling:** Tailwind CSS 3.4+
- **Animations:** Framer Motion 11.0+
- **Routing:** React Router 6.22+
- **Deployment:** Vercel
- **CDN:** Cloudflare (for assets)

## 📁 Project Structure

```
futuremarketingai/
├── src/
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles with Tailwind
├── public/              # Static assets
├── dist/                # Production build output
└── .taskmaster/         # Task Master AI project management
```

## 🎨 Custom Theme

The project uses a custom Tailwind theme with:
- **Dark Background:** #050814
- **Surface:** #0A0E27
- **Primary Accent:** #00D4FF (Cyan)
- **Secondary Accent:** #A855F7 (Purple)
- **Success:** #00FF88 (Green)
- **Typography:** Inter (sans), JetBrains Mono (mono)

## 📦 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server on port 5173 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

## 🚢 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

**Quick Deploy to Vercel:**
```bash
npm install -g vercel
vercel login
vercel --prod
```

## 📋 Development Workflow

This project uses [Task Master AI](https://github.com/your-org/task-master-ai) for task management:

```bash
# View all tasks
task-master list

# Get next task to work on
task-master next

# View specific task
task-master show 2

# Update task status
task-master set-status --id=2 --status=done
```

## 🎯 Project Goals

- **Engagement:** >3 min average session duration
- **Interaction Rate:** >60% clicks on interactive elements
- **Conversion:** 15%+ books demo call
- **Visual Impact:** 9/10 "wow factor" in first 10 seconds

## 📄 License

Private - FutureMarketingAI Internal Use Only

## 🤝 Contributing

This is an internal project. Please follow the established Git workflow:
- Create feature branches from `develop`
- Use conventional commits
- Submit PRs for review before merging

See `.cursor/rules/git.mdc` for detailed Git workflow guidelines.