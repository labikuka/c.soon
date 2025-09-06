# Cybersecurity Portfolio Website

A professional portfolio website for a cybersecurity student preparing for CEH certification. Features a modern, hacker-themed design with interactive components showcasing Kali Linux tools and cybersecurity projects.

## Features

- 🎨 **Modern Design**: Clean, professional hacker-themed UI with cyberpunk aesthetics
- 📱 **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- ⚡ **Interactive**: Smooth animations and hover effects using Framer Motion
- 🛠️ **Tools Showcase**: Interactive cards displaying Kali Linux tools with descriptions and usage examples
- 📋 **Projects Section**: Portfolio of CEH-related projects and labs
- 📞 **Contact Form**: Professional contact section with form and social links
- 🌙 **Dark Mode**: Default dark theme with cyber-green accents
- 🎯 **TailwindCSS**: Modern utility-first CSS framework for styling

## Technologies Used

- **React 18** - Frontend framework
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **JavaScript ES6+** - Modern JavaScript features

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone or download this repository
2. Navigate to the project directory:
   ```bash
   cd cybersecurity-portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

To create a production build:

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Customization

### Personal Information

Update the following files with your personal information:

1. **Hero Section** (`src/components/Hero.js`):
   - Replace "Your Name" with your actual name
   - Update the description to match your background

2. **Contact Section** (`src/components/Contact.js`):
   - Update email, phone, and location
   - Replace social media links with your profiles
   - Modify certification progress percentages

3. **Projects** (`src/components/Projects.js`):
   - Replace with your actual projects
   - Update project descriptions and technologies
   - Add your GitHub repository links

### Styling

The website uses TailwindCSS with custom colors defined in `tailwind.config.js`:

- `cyber-green`: #00ff41 (primary accent)
- `cyber-blue`: #00d4ff (secondary accent)
- `cyber-purple`: #8b5cf6 (tertiary accent)
- `dark-bg`: #0a0a0a (background)
- `dark-card`: #1a1a1a (card backgrounds)

### Tools Section

Add or modify tools in `src/components/Tools.js`:

```javascript
const tools = [
  {
    name: "Tool Name",
    description: "Brief description",
    usage: "example command",
    details: "Detailed explanation",
    icon: "🔧"
  },
  // Add more tools...
];
```

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header
│   ├── Hero.js            # Landing section
│   ├── Tools.js           # Kali Linux tools showcase
│   ├── Projects.js        # Projects portfolio
│   ├── Contact.js         # Contact form and info
│   └── MatrixBackground.js # Animated background
├── App.js                 # Main app component
├── index.js               # App entry point
└── index.css              # Global styles and Tailwind imports
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Feel free to fork this project and customize it for your own cybersecurity portfolio. If you make improvements, consider submitting a pull request!

## Support

If you have any questions or need help customizing the portfolio, feel free to open an issue or contact me through the contact form on the website.
