# Krish Sanghvi - Portfolio Website

A modern, responsive portfolio website built with **Vite**, **React**, **TypeScript**, and **Tailwind CSS**, featuring a beautiful Aurora background animation and smooth user interactions.

![Portfolio Preview](https://via.placeholder.com/800x400/4A90E2/FFFFFF?text=Portfolio+Preview)

## 🌟 Features

### Design & UI

- **Aurora Background Animation**: Eye-catching animated gradient background
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Dark Mode Ready**: Built-in dark mode support
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Modern UI Components**: Built with Radix UI and custom components

### Sections

- **Hero Section**: Dynamic introduction with Aurora background
- **About**: Education details and technical skills showcase
- **Experience**: Timeline-based work experience display
- **Projects**: Featured projects with detailed information and links
- **Contact**: Professional contact information and social links

### Technical Features

- **TypeScript**: Fully typed for better development experience
- **Component Architecture**: Modular and reusable components
- **SEO Optimized**: Semantic HTML and meta tags
- **Performance Optimized**: Lazy loading and optimized animations
- **Deployment Ready**: Configured for Vercel deployment

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/krishsanghvi/krish-portfolio.git
   cd krish-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🛠️ Technology Stack

### Frontend

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework

### UI & Animation

- **Framer Motion** - Animation library
- **Radix UI** - Headless UI components
- **Lucide React** - Icon library
- **class-variance-authority** - Component variants

### Development Tools

- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── aurora-background.tsx
│   │   └── button.tsx
│   ├── sections/           # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   └── layout/             # Layout components
│       ├── Navbar.tsx
│       └── Footer.tsx
├── data/
│   └── portfolio.ts        # Portfolio data
├── lib/
│   └── utils.ts           # Utility functions
├── types/
│   └── index.ts           # TypeScript type definitions
└── App.tsx                # Main app component
```

## 📝 Customization

### Personal Information

Update your personal details in `src/data/portfolio.ts`:

```typescript
export const personalInfo: PersonalInfo = {
  name: "Your Name",
  email: "your.email@example.com",
  // ... other details
};
```

### Adding Projects

Add new projects to the projects array:

```typescript
export const projects: Project[] = [
  {
    id: "your-project-id",
    title: "Your Project Title",
    description: "Project description...",
    // ... other project details
  },
  // ... existing projects
];
```

### Styling

- Modify colors in `tailwind.config.js`
- Update CSS variables in `src/index.css`
- Customize component styles using Tailwind classes

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect GitHub repository to Vercel**
2. **Configure build settings** (auto-detected)
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. **Deploy**

The project includes a `vercel.json` configuration file for optimal deployment.

### Other Platforms

The build output in `dist/` can be deployed to any static hosting service:

- Netlify
- GitHub Pages
- AWS S3
- Google Cloud Storage

## 🎨 Design Inspiration

This portfolio is designed with modern web design principles:

- **Minimalist aesthetic** with focus on content
- **Professional color scheme** using blues and grays
- **Consistent spacing and typography** for readability
- **Subtle animations** that enhance user experience
- **Mobile-first responsive design**

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 About the Developer

**Krish Sanghvi** - Computer Science & Engineering Student at The Ohio State University

- 🎓 Graduating May 2025
- 💼 Seeking full-time software engineering opportunities
- 🌐 Portfolio: [krish-portfolio.vercel.app](https://krish-portfolio.vercel.app)
- 💼 LinkedIn: [krishsanghvi](https://linkedin.com/in/krishsanghvi)
- 🐙 GitHub: [krishsanghvi](https://github.com/krishsanghvi)

---

⭐ **Star this repo if you found it helpful!**
