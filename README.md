# Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- Gray dominant design with modern blue accents
- Fully responsive for desktop and mobile devices
- Smooth animations and page transitions with Framer Motion
- 3D effects on the main page using React Three Fiber
- Comment/testimonial system using local storage
- CV download functionality
- Complete pages: Home, About, Projects, and Contact

## Tech Stack

- **Next.js**: React framework for server-rendered applications
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React
- **React Three Fiber**: React renderer for Three.js
- **shadcn/ui**: Reusable UI components
- **Local Storage**: For storing testimonials

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:

\`\`\`bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
\`\`\`

2. Install dependencies:

\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

\`\`\`
portfolio-website/
├── app/                  # Next.js app directory
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── projects/         # Projects page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # React components
│   ├── ui/               # UI components from shadcn/ui
│   ├── hero.tsx          # Hero section with 3D effect
│   ├── navbar.tsx        # Navigation bar
│   ├── footer.tsx        # Footer component
│   └── ...               # Other components
├── hooks/                # Custom React hooks
├── public/               # Static assets
└── ...                   # Config files
\`\`\`

## Customization

### Personal Information

Update your personal information in the respective components:

- Update your name and title in `components/hero.tsx`
- Update your about information in `app/about/page.tsx`
- Update your projects in `app/projects/page.tsx`
- Update your contact information in `app/contact/page.tsx`

### Styling

The project uses Tailwind CSS for styling. You can customize the colors, fonts, and other design elements in the `tailwind.config.ts` file.

### 3D Effects

The 3D effects on the home page are created using React Three Fiber. You can customize the 3D model in the `components/hero.tsx` file.

## Deployment

This project can be easily deployed to Vercel:

\`\`\`bash
npm run build
# or
vercel
\`\`\`

## License

This project is licensed under the MIT License.
