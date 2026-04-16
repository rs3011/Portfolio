# 🚀 Dark Mode Futuristic Portfolio

A stunning, cyberpunk-inspired dark-mode portfolio website with 3D animations, interactive particles, and modern security dashboard aesthetics. Built with cutting-edge web technologies for an unforgettable user experience.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Status](https://img.shields.io/badge/status-active-brightgreen.svg)

## ✨ Features

- **🌑 Dark Mode Design**: Sleek, modern dark theme inspired by cyberpunk aesthetics and enterprise security software
- **✨ Interactive Animations**: 
  - Glitch text effects
  - Holographic cards with depth
  - Floating 3D cubes
  - Particle backgrounds with physics
  - Typewriter text effects
- **🎨 Neon Aesthetics**: Electric cyan, hot magenta, and neon green accents
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **⚡ Performance Optimized**: Fast load times with Vite and optimized bundling
- **🔐 Security Dashboard Vibes**: Modern UI inspired by enterprise security interfaces
- **♿ Accessible Components**: Radix UI components with full accessibility support
- **🎯 Full-Stack Ready**: Express backend + React frontend in one project

## 🛠️ Tech Stack

### Frontend
- **React 18.3** - UI library
- **TypeScript** - Type safety
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Advanced animations
- **GSAP** - Professional animation library
- **Radix UI** - Accessible component primitives
- **React Query** - Data fetching and caching

### Backend
- **Express.js** - Web server framework
- **TypeScript** - Type-safe backend code
- **PostgreSQL** - Database (via Neon)
- **Drizzle ORM** - Modern TypeScript ORM
- **Passport.js** - Authentication

### Dev Tools
- **ESBuild** - JavaScript bundler
- **PostCSS** - CSS transformations
- **tsx** - TypeScript execution

## 🚀 Quick Start

### Prerequisites
- Node.js 20+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rs3011/DarkModePortfolio.git
   cd DarkModePortfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:8080`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (client + server)
- `npm start` - Run production server
- `npm run check` - Run TypeScript type checking
- `npm run db:push` - Push database schema changes

## 📁 Project Structure

```
DarkModePortfolio/
├── client/                      # Frontend React application
│   └── src/
│       ├── components/          # React components
│       │   ├── HeroSection.tsx
│       │   ├── AboutSection.tsx
│       │   ├── ProjectsSection.tsx
│       │   ├── ContactSection.tsx
│       │   ├── Navigation.tsx
│       │   ├── Footer.tsx
│       │   └── ui/              # Radix UI components
│       ├── hooks/               # React hooks
│       ├── lib/                 # Utilities
│       ├── pages/               # Page routes
│       ├── App.tsx
│       ├── main.tsx
│       └── index.css
│
├── server/                      # Express backend
│   ├── index.ts                 # Server entry point
│   ├── routes.ts                # API routes
│   ├── storage.ts               # Database queries
│   └── vite.ts                  # Vite integration
│
├── shared/                      # Shared types & schemas
│   └── schema.ts                # Zod schemas
│
├── vite.config.ts               # Vite configuration
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
├── design_guidelines.md         # Design system documentation
└── package.json
```

## 🎨 Design System

### Color Palette
- **Primary Background**: Deep space black for maximum contrast
- **Secondary Background**: Dark navy for cards and panels
- **Neon Accents**:
  - Electric Cyan: Primary CTAs and highlights
  - Hot Magenta: Interactive elements
  - Neon Green: Success states and skill indicators
  - Amber: Warning states

### Components
- **Glitch Text**: Cyberpunk-style text effects
- **Hologram Cards**: Futuristic depth and perspective
- **Neon Buttons**: Interactive controls with glow effects
- **Particle Background**: Dynamic animated particle system
- **Floating Cube**: 3D rotating cube component
- **Typewriter Text**: Sequential text reveal animation

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the project root:

```bash
# Server
PORT=8080
NODE_ENV=development

# Database (if using PostgreSQL)
DATABASE_URL=postgresql://user:password@localhost/dbname
```

### Tailwind CSS
Custom configuration includes:
- Cyberpunk color palette
- Extended border radius for modern look
- Custom animations and transitions
- Responsive design utilities

## 📦 Build & Deployment

### Development Build
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Run Production Server
```bash
npm start
```

The production build outputs:
- Client bundle to `dist/public/`
- Server bundle to `dist/index.js`

## 🌐 Deployment Options

This project can be deployed to:
- **Replit** - Using `.replit` configuration (included)
- **Vercel** - For frontend-only deployment
- **Railway/Render** - For full-stack deployment
- **Traditional VPS** - Docker-ready with Node.js

## 🎯 Features In Detail

### Interactive Components
- **Particle Background**: Physics-based particles with gravity and collision
- **Glitch Effects**: CSS-based glitch animations on text
- **Hover States**: Smooth transitions with neon glow effects
- **3D Animations**: GSAP-powered 3D transforms

### Performance
- Lazy loading for images and components
- Optimized CSS with Tailwind's purging
- Server-side rendering ready
- Production bundle optimization with ESBuild

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Links

- **GitHub Repository**: [https://github.com/rs3011/DarkModePortfolio](https://github.com/rs3011/DarkModePortfolio)
- **GitHub Profile**: [https://github.com/rs3011](https://github.com/rs3011)
- **LinkedIn**: [https://linkedin.com/in/roshanshah-cs](https://linkedin.com/in/roshanshah-cs)
- **Email**: roshanpro3011@gmail.com

## 🐛 Troubleshooting

### Port Already in Use
If port 8080 is in use, modify the `PORT` environment variable:
```bash
set PORT=3000 && npm run dev
```

### Build Issues
Clear cache and reinstall:
```bash
rm -r node_modules package-lock.json
npm install
npm run build
```

### TypeScript Errors
Run type checking:
```bash
npm run check
```

## 🙏 Acknowledgments

- Inspired by cyberpunk aesthetics and modern security dashboards
- Built with amazing open-source libraries and frameworks
- Design system influenced by enterprise UI patterns

---

**Made with ❤️ by Roshan Shah**
