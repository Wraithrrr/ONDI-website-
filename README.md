# ONDI Website

Official website for ONDI (Organization for Networking, Development & Innovation).

## Project Structure

```
ondi-website/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── ui/            # Base UI components (Radix UI)
│   │   ├── figma/         # Figma-imported components
│   │   └── WaveBackground.tsx
│   ├── layouts/           # Layout components
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── pages/             # Page components
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── ImpactPage.tsx
│   │   ├── InnovationDirectory.tsx
│   │   ├── NewsPage.tsx
│   │   ├── OpportunitiesPage.tsx
│   │   ├── ProgramsPage.tsx
│   │   └── ResourcesPage.tsx
│   ├── styles/            # Global styles
│   ├── hooks/             # Custom React hooks (future)
│   ├── lib/               # Utility functions (future)
│   ├── types/             # TypeScript type definitions (future)
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global CSS with Tailwind
├── index.html             # HTML template
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
├── package.json           # Project dependencies
└── README.md              # This file
```

## Technology Stack

- **Framework:** React 18.3
- **Build Tool:** Vite 6.3
- **Language:** TypeScript
- **UI Components:** Radix UI
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Animations:** Motion
- **Forms:** React Hook Form
- **Theme:** next-themes

## Getting Started

### Prerequisites

**Option 1: Local Development**
- Node.js (v18 or higher)
- npm, yarn, or pnpm

**Option 2: Docker**
- Docker
- Docker Compose (optional but recommended)

---

## Local Development (Without Docker)

### Installation

1. Clone the repository or navigate to the project directory

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will open automatically at [http://localhost:3000](http://localhost:3000)

### Building for Production

Create an optimized production build:
```bash
npm run build
```

The build output will be in the `build/` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

### Code Quality

Run linting and type checking:
```bash
npm run lint          # Check for linting errors
npm run lint:fix      # Auto-fix linting errors
npm run type-check    # TypeScript type checking
```

---

## Docker Development

### Quick Start with Docker Compose

**Development Mode:**
```bash
docker-compose -f docker-compose.dev.yml up
```
Access at [http://localhost:3000](http://localhost:3000)

**Production Mode:**
```bash
docker-compose up --build
```
Access at [http://localhost:8080](http://localhost:8080)

### Manual Docker Commands

**Build the Docker image:**
```bash
docker build -t ondi-website .
```

**Run the container:**
```bash
docker run -d -p 8080:80 --name ondi-website ondi-website
```

**Stop the container:**
```bash
docker stop ondi-website
```

**Remove the container:**
```bash
docker rm ondi-website
```

### Docker Features

- **Multi-stage build** for optimized image size
- **Nginx** web server for production serving
- **Health checks** for container monitoring
- **Security headers** configured
- **Gzip compression** enabled
- **Static asset caching** optimized

---

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Check for linting errors
- `npm run lint:fix` - Auto-fix linting errors
- `npm run type-check` - TypeScript type checking

---

## Deployment

### Deploy to Vercel

This project is configured and optimized for Vercel deployment.

#### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite and use the settings from `vercel.json`
   - Click "Deploy"

#### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Deploy to production:**
   ```bash
   vercel --prod
   ```

#### Build Settings

The project is pre-configured with:
- **Build Command:** `npm run build`
- **Output Directory:** `build`
- **Install Command:** `npm install`
- **Framework:** Vite

#### Environment Variables

If you need environment variables:
1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add your variables (e.g., API keys)

#### Custom Domain

To add a custom domain:
1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

---

## Design

The original Figma design is available at:
[Revamp Design for Innovation](https://www.figma.com/design/xQGdl6NN05ldJa8w7No9Vd/Revamp-Design-for-Innovation)

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

Private - All rights reserved

This code was fully constructed by Lukman Mohammed Abdullahi-the main designer and template creator of this website- and Farouk Mahmoud Abdullahi -a special contributor. No other individual is responsible for the construction of this code
