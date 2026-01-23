# CLAUDE.md

This file provides guidance to Claude Code when working on this repository.

## Project Overview

Personal portfolio website for Mitchell Read (YC W25 applicant) showcasing "Rember" - a self-updating CRM for relationship management.

## Tech Stack

- **React 19.2** - UI framework
- **Vite 7.2** - Build tool with HMR
- **ESLint** - Code linting

## Project Structure

```
src/
├── App.jsx      # Main single-page application component
├── main.jsx     # React entry point
├── index.css    # Global styles
└── assets/      # Static assets
```

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Code Style

- Uses inline styles and CSS-in-JS patterns
- Keyframe animations defined in App.jsx (pulse, float, pop, wiggle, spin)
- Interactive components with hover effects and particle animations

## Development Notes

- The entire app is contained in App.jsx (~680 lines)
- Easter egg components trigger particle animations on hover
- All styling is done inline; index.css contains minimal global resets
