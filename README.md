# 🐾 PawPal MVP

A modern social platform for pet owners to connect, share experiences, and discover local pet-related services.

## Our Goal 

`"Build the world’s leading pet ecosystem that unites social networking, healthcare, services, and commerce — making pet parenting seamless and future-ready."
`


## 🌟 Features

### 📱 Core Functionality
- **Feed Tab**: Browse and share pet photos, stories, and updates
- **Events Tab**: Discover and create local pet events and meetups
- **Vets Tab**: Find and connect with local veterinarians
- **Community Tab**: Join pet communities and discussions
- **Profile Tab**: Manage your pet profiles and personal information

### 🎨 Modern UI/UX
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Dark/Light Mode**: Adaptive theming with system preferences
- **Smooth Animations**: Polished interactions and transitions
- **Accessible Components**: Built with accessibility in mind

## 🚀 Live Demo

Visit the live application: [https://sksenapati007.github.io/PawPal/](https://sksenapati007.github.io/PawPal/)

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **ShadCN/UI** - Beautiful, accessible component library
- **Radix UI** - Headless UI primitives
- **React Router** - Client-side routing
- **React Hook Form** - Performant forms with validation
- **TanStack Query** - Data fetching and caching
- **Lucide React** - Beautiful icons
- **Sonner** - Toast notifications

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sksenapati007/PawPal.git
   cd PawPal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

## 🏗️ Build & Deploy

### Development Build
```bash
npm run build:dev
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to GitHub Pages
The project is automatically deployed to GitHub Pages on every push to the `main` branch using GitHub Actions.

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # ShadCN/UI components
│   ├── FeedTab.tsx      # Pet feed functionality
│   ├── EventsTab.tsx    # Events and meetups
│   ├── VetsTab.tsx      # Veterinarian directory
│   ├── CommunityTab.tsx # Community features
│   ├── ProfileTab.tsx   # User profiles
│   └── Navigation.tsx   # Bottom navigation
├── pages/               # Page components
│   ├── Index.tsx        # Main application page
│   └── NotFound.tsx     # 404 page
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
│   ├── storage.ts       # Local storage helpers
│   └── utils.ts         # General utilities
├── App.tsx              # Main app component
├── main.tsx             # Application entry point
└── index.css            # Global styles
```

## 🎯 Key Components

### Navigation
- Bottom tab navigation for easy mobile access
- Active state indicators
- Smooth transitions between tabs

### Feed System
- Photo sharing with captions
- Like and comment functionality
- Infinite scroll for better performance

### Event Management
- Create and discover local pet events
- Event details and RSVP functionality
- Location-based event filtering

### Veterinarian Directory
- Search and filter local vets
- Contact information and ratings
- Appointment booking interface

### Community Features
- Join pet-specific communities
- Discussion forums
- User profiles and pet information

## 🔧 Configuration

### Environment Variables
- `VITE_BASE_PATH`: Base path for deployment (default: `/PawPal/` for GitHub Pages)

### Vite Configuration
- Optimized for GitHub Pages deployment
- Automatic base path detection
- Development and production modes

## 🚀 Deployment

### GitHub Pages
The project is configured for automatic deployment to GitHub Pages:

1. **Workflow**: `.github/workflows/deploy.yml`
2. **Trigger**: Push to `main` branch
3. **URL**: `https://sksenapati007.github.io/PawPal/`

### Manual Deployment
```bash
# Build the project
npm run build

# Deploy the dist/ folder to your hosting service
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**shubu** - [GitHub](https://github.com/sksenapati007)

## 🙏 Acknowledgments

- Built with [ShadCN/UI](https://ui.shadcn.com/) components
- Icons by [Lucide](https://lucide.dev/)
- Powered by [Vite](https://vitejs.dev/) and [React](https://react.dev/)

---

**PawPal** - Connecting pet lovers, one paw at a time! 🐾