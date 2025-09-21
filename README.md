# JUSPAY UI Developer Assignment

A modern, responsive dashboard application built with React and Vite, featuring a comprehensive dark/light theme system and interactive components.

## 🚀 Live Demo

[View Live Application](https://juspay-ui-developer-assignment.vercel.app/)


## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM

## 📋 Features

### ✨ Core Features
- **Dark/Light Theme Toggle**: Seamless theme switching with persistent preferences
- **Responsive Design**: Mobile-first approach with breakpoints for all screen sizes
- **Modern UI Components**: Reusable component library with consistent design
- **Sidebar Navigation**: Collapsible navigation with smooth animations

### 🎨 UI Components
- **Dashboard Cards**: Statistics cards with hover effects and animations
- **Navigation Sidebar**: Collapsible sidebar with user profile and menu items
- **Theme Toggle**: Theme switcher with smooth transitions
- **Responsive Layout**: Grid-based layout that adapts to different screen sizes


## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- Node.js (version 16.0 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Anil-Gehlot/JUSPAY-UI-Developer-Assignment.git
   cd JUSPAY-UI-Developer-Assignment
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
   Navigate to `http://localhost:3000` to view the application.


## 🏗️ Project Structure

```
src/
├── components/                    # Reusable UI components
│   ├── activities/               # Activities component
│   ├── card/                     # Card components with icons
│   ├── contacts/                 # Contacts component
│   ├── cover-page.jsx            # Landing page component
│   ├── dashboards/               # Dashboard navigation components
│   ├── favorites/                # Favorites component
│   ├── icons/                    # Shared icon components
│   ├── images/                   # Image assets
│   ├── left-side-bar/            # Left sidebar navigation
│   ├── navbar/                   # Top navigation bar
│   ├── notifications/            # Notifications component
│   ├── Pages/                    # Page navigation components
│   └── right-side-bar/           # Right sidebar component
├── data/                         # Data and constants
│   └── constans.js              # Application data
├── layouts/                      # Layout components
│   ├── dashboardLayout.css      # Dashboard layout styles
│   └── dashboardLayouts.jsx     # Main dashboard layout
├── lib/                         # Utility functions
│   └── utils.js                 # Helper functions
├── pages/                       # Page components
│   └── Dashboard/               # Dashboard pages
│       ├── components/          # Dashboard-specific components
│       │   ├── Location/        # Location component
│       │   └── TopSelling/      # Top selling products
│       ├── Orders/              # Orders page with icons
│       ├── dashboard.css        # Dashboard styles
│       └── dashboard.jsx        # Main dashboard page
├── assets/                      # Static assets
│   ├── images/                  # Image files
│   └── svg/                     # SVG icons
├── App.jsx                      # Main App component
├── App.css                      # App styles
├── index.css                    # Global styles
└── main.jsx                     # Application entry point
```

## 🎨 Design Decisions

### Theme System Architecture
- **CSS Variables Approach**: Used CSS custom properties for theme management
- **Body Class Strategy**: Implemented `body.dark` class for theme switching
- **Smooth Transitions**: Added transition effects for theme changes

### Component Design
- **Atomic Design**: Built components following atomic design principles
- **Reusability**: Created reusable components with proper props interface
- **Accessibility**: Implemented proper ARIA labels and keyboard navigation

### Layout Strategy
- **Mobile-First**: Designed with mobile-first approach using Tailwind CSS
- **Grid System**: Used CSS Grid and Flexbox for responsive layouts
- **Breakpoint Strategy**: Implemented consistent breakpoints across components

## 🚧 Challenges Faced

### 1. Theme System Implementation
**Challenge**: Creating a robust theme system that works across all components
**Solution**: 
- Implemented CSS variables with body class strategy



### 2. Responsive Design
**Challenge**: Ensuring consistent experience across all device sizes
**Solution**:
- Used Tailwind's responsive utilities
- Implemented proper grid layouts
- Added mobile-specific navigation patterns

### 3. Component Architecture
**Challenge**: Building maintainable and scalable component structure
**Solution**:
- Separated concerns with proper folder structure
- Created reusable UI components
- Implemented proper prop interfaces

## 🚀 Deployment

The application is deployed on Vercel for optimal performance and global CDN distribution.

### Deployment Process
1. Connected GitHub repository to Vercel
2. Configured build settings (Vite build command)
3. Set up environment variables if needed
4. Enabled automatic deployments on push to main branch

**Built with ❤️ using React and modern web technologies**