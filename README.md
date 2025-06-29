# 🧠 ResumeAI - Neural-Powered Resume Optimization Platform

<div align="center">
  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vite-5.4.2-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Framer_Motion-10.16.4-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
</div>

<div align="center">
  <h3>🚀 The Future of Resume Intelligence</h3>
  <p>Harness the power of AI to create resumes that don't just pass ATS systems—they dominate them.</p>
</div>

---

## 📋 Table of Contents

- [🌟 Features](#-features)
- [🎯 Project Overview](#-project-overview)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [📁 Project Structure](#-project-structure)
- [🎨 Design System](#-design-system)
- [🔧 Configuration](#-configuration)
- [📱 Responsive Design](#-responsive-design)
- [🧪 Testing](#-testing)
- [🚀 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## 🌟 Features

### 🧠 **AI-Powered Analysis**
- **Neural Network Processing**: Advanced ML algorithms analyze 50+ resume factors
- **Real-time ATS Scoring**: Instant compatibility ratings with detailed breakdowns
- **Smart Keyword Optimization**: Industry-specific keyword analysis and suggestions
- **Impact Metrics Enhancement**: AI-powered quantification recommendations

### 🎨 **Futuristic UI/UX**
- **Cyberpunk Dark Mode**: Professional dark theme with neon accents
- **Animated Components**: Smooth transitions and micro-interactions
- **Glass Morphism**: Modern backdrop blur effects and transparency
- **Neural Grid Backgrounds**: Animated cyber-grid patterns

### 📊 **Comprehensive Analytics**
- **Detailed Score Breakdown**: Section-by-section analysis (Contact, Summary, Experience, etc.)
- **Improvement Suggestions**: Actionable recommendations with before/after examples
- **Keyword Gap Analysis**: Missing vs. present keywords visualization
- **Industry Benchmarking**: Compare against industry standards

### 🔧 **Smart Resume Builder**
- **Step-by-Step Wizard**: Guided resume creation process
- **AI Suggestions**: Real-time optimization recommendations
- **Multiple Templates**: Industry-specific professional templates
- **Live Preview**: Real-time resume preview with instant updates

### 📈 **Performance Tracking**
- **Resume Management**: Organize and track multiple resumes
- **Version History**: Track changes and improvements over time
- **Success Metrics**: Monitor application success rates
- **Export Options**: PDF, DOCX, and other format support

---

## 🎯 Project Overview

ResumeAI is a cutting-edge web application that revolutionizes the resume creation and optimization process. Built with modern web technologies, it combines artificial intelligence with an intuitive user interface to help job seekers create resumes that stand out in today's competitive market.

### **Key Objectives:**
- **Maximize ATS Compatibility**: Ensure resumes pass through Applicant Tracking Systems
- **Enhance Visual Appeal**: Create professionally designed resumes that impress recruiters
- **Provide Actionable Insights**: Offer specific, implementable improvement suggestions
- **Streamline the Process**: Make resume creation and optimization effortless

### **Target Audience:**
- Job seekers across all industries and experience levels
- Career changers looking to optimize their resumes for new fields
- Professionals seeking to improve their application success rates
- Students and recent graduates entering the job market

---

## 🛠️ Tech Stack

### **Frontend Framework**
- **React 18.3.1** - Modern React with Hooks and Concurrent Features
- **TypeScript 5.5.3** - Type-safe JavaScript for better development experience
- **Vite 5.4.2** - Lightning-fast build tool and development server

### **Styling & UI**
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Custom Design System** - Cyberpunk-inspired dark theme
- **Framer Motion 10.16.4** - Production-ready motion library
- **Lucide React 0.344.0** - Beautiful & consistent icon library

### **State Management**
- **React Context API** - Built-in state management for auth and resume data
- **React Hooks** - Modern state management patterns
- **Local Storage** - Client-side data persistence

### **Form Handling**
- **React Hook Form 7.45.4** - Performant forms with easy validation
- **React Dropzone 14.2.3** - Drag & drop file upload functionality

### **Data Visualization**
- **Recharts 2.8.0** - Composable charting library for React
- **Custom Progress Indicators** - Animated score visualizations

### **User Experience**
- **React Router DOM 6.8.1** - Declarative routing for React
- **React Hot Toast 2.4.1** - Beautiful toast notifications
- **Responsive Design** - Mobile-first approach with Tailwind breakpoints

### **Development Tools**
- **ESLint 9.9.1** - Code linting and quality assurance
- **TypeScript ESLint 8.3.0** - TypeScript-specific linting rules
- **PostCSS 8.4.35** - CSS processing and optimization
- **Autoprefixer 10.4.18** - Automatic vendor prefixing

---

## 🚀 Getting Started

### **Prerequisites**
- Node.js 18.0.0 or higher
- npm 8.0.0 or higher (or yarn/pnpm equivalent)
- Modern web browser with ES2020 support

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/resumeai.git
   cd resumeai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application

### **Available Scripts**

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

---

## 📁 Project Structure

```
resumeai/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Navbar.tsx    # Navigation component
│   │   └── ProtectedRoute.tsx
│   ├── contexts/         # React Context providers
│   │   ├── AuthContext.tsx
│   │   └── ResumeContext.tsx
│   ├── pages/           # Page components
│   │   ├── LandingPage.tsx
│   │   ├── Dashboard.tsx
│   │   ├── ResumeAnalyzer.tsx
│   │   ├── ResumeBuilder.tsx
│   │   ├── Login.tsx
│   │   └── Register.tsx
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── package.json         # Project dependencies
```

---

## 🎨 Design System

### **Color Palette**
```css
/* Primary Colors */
--cyber-blue: #0ea5e9
--neon-purple: #d946ef
--emerald-green: #10b981
--amber-orange: #f59e0b

/* Dark Theme */
--bg-primary: #111827    /* gray-900 */
--bg-secondary: #1f2937  /* gray-800 */
--text-primary: #f9fafb  /* gray-50 */
--text-secondary: #d1d5db /* gray-300 */
```

### **Typography**
- **Font Family**: Inter (system-ui fallback)
- **Font Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)
- **Scale**: Tailwind's default type scale with custom cyberpunk styling

### **Animations**
- **Blob Animation**: Floating background elements
- **Gradient Animation**: Animated gradient text effects
- **Pulse Glow**: Glowing button and accent effects
- **Shimmer**: Loading state animations

### **Components**
- **Glass Morphism Cards**: Backdrop blur with subtle borders
- **Gradient Buttons**: Multi-color gradient interactive elements
- **Neural Grid Backgrounds**: Animated cyber-grid patterns
- **Progress Indicators**: Animated score visualization

---

## 🔧 Configuration

### **Tailwind CSS Configuration**
The project uses an extended Tailwind configuration with:
- Custom animations and keyframes
- Cyberpunk color palette
- Neural network background patterns
- Glass morphism utilities

### **TypeScript Configuration**
- Strict mode enabled for better type safety
- Modern ES2020 target with DOM libraries
- Path mapping for cleaner imports
- React JSX transform

### **Vite Configuration**
- React plugin for JSX support
- Optimized dependency bundling
- Development server with HMR
- Production build optimization

---

## 📱 Responsive Design

The application is built with a mobile-first approach:

- **Mobile (320px+)**: Optimized for small screens
- **Tablet (768px+)**: Enhanced layout with sidebar navigation
- **Desktop (1024px+)**: Full-featured interface with multi-column layouts
- **Large Desktop (1280px+)**: Maximum content width with centered layout

### **Breakpoint Strategy**
```css
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X large devices */
```

---

## 🧪 Testing

### **Current Testing Setup**
- ESLint for code quality and consistency
- TypeScript for compile-time error checking
- React strict mode for development warnings

### **Recommended Testing Additions**
```bash
# Unit Testing
npm install --save-dev @testing-library/react @testing-library/jest-dom vitest

# E2E Testing
npm install --save-dev cypress playwright
```

---

## 🚀 Deployment

### **Build for Production**
```bash
npm run build
```

### **Deployment Platforms**
- **Vercel**: Recommended for React applications
- **Netlify**: Great for static site deployment
- **AWS S3 + CloudFront**: Scalable cloud deployment
- **GitHub Pages**: Free hosting for open source projects

### **Environment Variables**
Create a `.env` file for environment-specific configuration:
```env
VITE_API_URL=your_api_endpoint
VITE_APP_NAME=ResumeAI
```

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### **Development Guidelines**
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Maintain responsive design principles
- Write meaningful commit messages
- Test your changes thoroughly

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **Lucide** for beautiful icons
- **Vite** for the lightning-fast build tool

---

<div align="center">
  <p>Made with ❤️ and ⚡ by the ResumeAI Team</p>
  <p>
    <a href="#-table-of-contents">Back to Top</a>
  </p>
</div>