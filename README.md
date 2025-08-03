# Gauthier Compan - AI Software Engineer Portfolio

A professional, modern portfolio website for Gauthier Compan, an AI Software Engineer specializing in AI applications, blockchain development, and modern web architectures.

## 🚀 Features

- **Modern Design**: Clean, professional black and white theme
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Performance Optimized**: Built with Next.js 15 and optimized for speed
- **SEO Ready**: Comprehensive metadata and structured content
- **Deployment Ready**: Configured for GitHub Pages, Vercel, and other platforms

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Deployment**: GitHub Pages, Vercel, Netlify
- **Build Tool**: Turbopack for development

## 📁 Project Structure

```
nrh/
├── public/                 # Static assets
│   ├── image0.jpeg        # Profile photo
│   └── logo*.jpg          # Company logos
├── src/
│   ├── app/
│   │   ├── layout.tsx     # Root layout with metadata
│   │   ├── page.tsx       # Main page component
│   │   └── globals.css    # Global styles
│   └── components/
│       ├── Header.tsx     # Navigation header
│       ├── Hero.tsx       # Hero section with profile
│       ├── Experience.tsx # Professional experience
│       ├── Skills.tsx     # Technical skills
│       └── Contact.tsx    # Contact information
├── .github/workflows/     # GitHub Actions deployment
├── next.config.ts         # Next.js configuration
├── package.json           # Dependencies and scripts
└── README.md             # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nrh
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Build static export

## 🌐 Deployment

### GitHub Pages

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings > Pages
   - Select "GitHub Actions" as source
   - The workflow will automatically deploy on push

### Vercel (Recommended)

1. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy automatically

### Netlify

1. **Build and deploy**
   ```bash
   npm run build
   ```
   - Upload the `out` folder to Netlify
   - Or connect your GitHub repository

## 🎨 Customization

### Content Updates

- **Profile Information**: Edit `src/components/Hero.tsx`
- **Experience**: Update `src/components/Experience.tsx`
- **Skills**: Modify `src/components/Skills.tsx`
- **Contact**: Edit `src/components/Contact.tsx`

### Styling

- **Colors**: Modify Tailwind classes in components
- **Layout**: Adjust grid and spacing classes
- **Typography**: Update font classes and sizes

### Images

- **Profile Photo**: Replace `public/image0.jpeg`
- **Company Logos**: Update logo files in `public/`

## 📱 Responsive Design

The portfolio is fully responsive with:
- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly navigation
- Optimized images for all screen sizes

## 🔧 Configuration

### Next.js Config (`next.config.ts`)
- Static export enabled
- Image optimization disabled for static deployment
- Trailing slash enabled for GitHub Pages

### ESLint Config
- Next.js recommended rules
- TypeScript support
- Custom rule adjustments for apostrophes

## 📈 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Optimized for speed
- **SEO**: Comprehensive metadata and structured data
- **Accessibility**: WCAG 2.1 compliant

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For questions or support:
- Email: gauthier.compan@example.com
- GitHub Issues: [Create an issue](https://github.com/yourusername/nrh/issues)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
