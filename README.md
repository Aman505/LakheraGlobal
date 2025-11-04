# Zyvo - Client Success Hub & Team Growth Platform

A modern, responsive web application built with React and Vite, featuring a comprehensive client success and team management platform. This project includes a beautiful login interface, dashboard with hero section, feature showcases, testimonials, and contact forms.

## 🚀 Features

- **Modern Login System**: Floating label input fields with form validation using Formik and Yup
- **Responsive Dashboard**: Hero section with image slider, feature cards, and testimonials
- **Interactive Components**: Swiper-based image carousels and testimonial sliders
- **Clean UI Design**: Modern, professional interface with Montserrat font family
- **Component-Based Architecture**: Well-organized, modular component structure
- **Form Validation**: Comprehensive form validation with error handling
- **Responsive Design**: Mobile-first approach with breakpoints for all screen sizes

## 🛠️ Tech Stack

- **React** - UI library
- **Vite** - Build tool and development server
- **React Router DOM** - Client-side routing
- **Formik** - Form state management
- **Yup** - Schema validation
- **Swiper** - Touch slider/carousel
- **Lucide React** - Icon library
- **Montserrat Font** - Typography

## 📁 Project Structure

```
lakherafigma/
├── public/
│   ├── assets/
│   │   ├── brand.png                    # Brand logo for footer strip
│   │   ├── group.png                    # HR Management section background
│   │   ├── herosection/
│   │   │   ├── avatar/                  # User avatars for testimonials
│   │   │   └── slider/                  # Hero section slider images
│   │   ├── login/                       # Login page assets
│   │   │   ├── emalId.svg
│   │   │   ├── loginBackground.jpg
│   │   │   ├── loginBox.png
│   │   │   ├── Logo.svg
│   │   │   └── password.svg
│   │   └── wrapperImg.svg              # Data section wrapper image
│   └── PreviewImage/                    # Preview images
├── src/
│   ├── components/
│   │   ├── ContactSection/
│   │   │   ├── ContactSection.jsx      # Contact form component
│   │   │   └── ContactSection.css       # Contact section styles
│   │   ├── Dashboard.jsx               # Main dashboard component
│   │   ├── DataSection/
│   │   │   ├── DataSection.jsx         # "Unleash Power of Data" section
│   │   │   └── DataSection.css
│   │   ├── FeaturesSection/
│   │   │   ├── FeaturesSection.jsx      # "What Makes Us Different" section
│   │   │   └── FeaturesSection.css
│   │   ├── Footer/
│   │   │   ├── Footer.jsx              # Footer component
│   │   │   └── Footer.css
│   │   ├── Header/
│   │   │   ├── Header.jsx               # Navigation header
│   │   │   └── Header.css
│   │   ├── HRManagementSection/
│   │   │   ├── HRManagementSection.jsx # HR Management promo section
│   │   │   └── HRManagementSection.css
│   │   ├── Login/
│   │   │   ├── Login.jsx               # Login page component
│   │   │   └── Login.css               # Login page styles
│   │   ├── TestimonialSection/
│   │   │   ├── TestimonialSection.jsx   # Client testimonials slider
│   │   │   └── TestimonialSection.css
│   │   └── Slider.jsx                  # Reusable slider component
│   ├── Schema/
│   │   └── Validation.jsx              # Form validation schemas (Yup)
│   ├── App.jsx                         # Main app component with routing
│   ├── AppLayout.jsx                   # Layout wrapper component
│   ├── App.css                         # Global app styles
│   ├── Dashboard.css                   # Dashboard-specific styles
│   ├── index.css                       # Global CSS reset/base styles
│   └── main.jsx                        # Application entry point
├── index.html                          # HTML template
├── package.json                        # Dependencies and scripts
├── vite.config.js                      # Vite configuration
└── README.md                           # Project documentation
```

## 🎨 Component Structure

Each component follows a modular structure with its own folder containing:
- `ComponentName.jsx` - Component logic and JSX
- `ComponentName.css` - Component-specific styles

### Main Components

1. **Login** (`/components/Login/`)
   - Floating label input fields
   - Form validation with Formik
   - Responsive login card design

2. **Dashboard** (`/components/Dashboard.jsx`)
   - Hero section with call-to-action
   - Image slider with coverflow effect
   - Trust indicators and ratings

3. **DataSection** (`/components/DataSection/`)
   - "Unleash the Power of Data" section
   - Two-column layout with image

4. **FeaturesSection** (`/components/FeaturesSection/`)
   - Feature cards grid
   - "What Makes Us Different" section

5. **TestimonialSection** (`/components/TestimonialSection/`)
   - Client testimonials slider
   - Star ratings and avatars

6. **HRManagementSection** (`/components/HRManagementSection/`)
   - HR Management promotional section
   - Orange gradient background with image

7. **ContactSection** (`/components/ContactSection/`)
   - Contact form with validation
   - Promotional content panel

8. **Header** (`/components/Header/`)
   - Navigation bar with logo and links
   - Search icon and sign-in button

9. **Footer** (`/components/Footer/`)
   - Multi-column footer with links
   - Social media icons
   - Brand logo strip

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn package manager

### Steps

1. **Clone the repository** (if applicable)
   ```bash
   git clone <repository-url>
   cd lakherafigma
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

## 🏃 Running the Project

### Development Mode

Start the development server with hot-reload:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in the terminal).

### Build for Production

Create an optimized production build:

```bash
npm run build
```

**Built with ❤️ using React and Vite**
