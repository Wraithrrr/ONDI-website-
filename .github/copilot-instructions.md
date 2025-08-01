# Copilot Instructions for ONDI Website

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
This is the official website for the Office for Nigerian Digital Innovation (ONDI), a special purpose vehicle of NITDA. The website serves as the central hub for Nigeria's digital innovation ecosystem.

## Architecture Guidelines
- **Framework**: Next.js 15+ with TypeScript and App Router
- **Styling**: Tailwind CSS with custom design system
- **Components**: Reusable, accessible React components
- **Performance**: Optimized for government standards with SSR/SSG

## Design Requirements
- **Accessibility**: WCAG 2.1 AA compliance mandatory
- **Government Standards**: Adhere to NITDA's Standards and Guidelines
- **Responsive Design**: Mobile-first approach with specific breakpoints
- **2025 Design Trends**: Modern, immersive experiences with subtle animations

## Code Standards
- Use TypeScript for all components and pages
- Follow React best practices with hooks and functional components
- Implement proper error boundaries and loading states
- Use semantic HTML elements for accessibility
- Include proper ARIA labels and keyboard navigation

## Color Palette (Government Tech Innovation Theme)
- Primary: Blues (#1e40af, #3b82f6, #60a5fa)
- Secondary: Greens (#059669, #10b981, #34d399)
- Accent: Purples (#7c3aed, #8b5cf6, #a78bfa)
- Neutral: Grays (#374151, #6b7280, #9ca3af)

## Component Structure
- Keep components small and focused
- Use proper prop types with TypeScript interfaces
- Implement loading states for all async operations
- Include proper error handling and fallbacks

## Performance Requirements
- Optimize images with Next.js Image component
- Implement lazy loading for non-critical content
- Use dynamic imports for heavy components
- Maintain lighthouse scores above 90 for all metrics

## Security Considerations
- Implement proper HTTPS headers
- Follow OWASP guidelines for web security
- Comply with Nigeria Data Protection Regulation (NDPR)
- Use environment variables for sensitive data
