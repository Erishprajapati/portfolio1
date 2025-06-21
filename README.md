# My 3D Portfolio

An interactive 3D portfolio built with Next.js 14, featuring Three.js, Framer Motion, and Tailwind CSS.

## Features

- 🎨 **Modern Design**: Beautiful gradient backgrounds and responsive layout
- 🎭 **3D Interactive Scene**: Rotating 3D box with OrbitControls
- ✨ **Smooth Animations**: Framer Motion animations throughout the site
- 📱 **Responsive**: Mobile-first design with Tailwind CSS
- 🚀 **Performance**: Optimized for production with Next.js 14
- 🎯 **Smooth Scrolling**: Seamless navigation between sections

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js, @react-three/fiber, @react-three/drei
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd my-3d-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
my-3d-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Main page component
│   │   └── globals.css         # Global styles
│   └── components/
│       ├── Navigation.tsx      # Navigation bar with smooth scrolling
│       ├── Hero.tsx            # Hero section with animations
│       ├── Scene.tsx           # 3D scene with Three.js
│       └── PortfolioSection.tsx # Portfolio projects grid
├── public/                     # Static assets
├── package.json               # Dependencies and scripts
└── README.md                  # This file
```

## Customization

### Adding Your Projects

1. Edit `src/components/PortfolioSection.tsx`
2. Replace the placeholder projects with your actual work
3. Update project images, descriptions, and links

### Modifying the 3D Scene

1. Edit `src/components/Scene.tsx`
2. Add more 3D objects, textures, or animations
3. Customize lighting and camera settings

### Styling Changes

1. Modify Tailwind classes in components
2. Update color schemes in `globals.css`
3. Add custom animations in Framer Motion

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

### Environment Variables

No environment variables are required for basic functionality.

## Performance Optimization

- ✅ **Code Splitting**: Automatic with Next.js
- ✅ **Image Optimization**: Built-in with Next.js Image component
- ✅ **3D Performance**: Suspense boundaries for Three.js components
- ✅ **Animation Performance**: Hardware-accelerated Framer Motion animations

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - feel free to use this project for your own portfolio!

## Support

If you encounter any issues or have questions, please open an issue on GitHub.
