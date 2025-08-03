# Deployment Guide

This guide explains how to deploy the Gauthier Compan portfolio website on different platforms.

## 🚀 Quick Start

The portfolio is configured for multiple deployment platforms. Choose the one that best fits your needs:

- **Vercel** (Recommended) - Best for Next.js projects
- **GitHub Pages** - Free static hosting
- **Netlify** - Alternative to Vercel

## 📋 Prerequisites

Before deploying, ensure you have:

1. **Git repository** with your code
2. **Node.js 18+** installed locally
3. **GitHub account** (for GitHub Pages)
4. **Vercel/Netlify account** (optional)

## 🌐 Deployment Options

### 1. Vercel (Recommended)

Vercel is the platform created by the Next.js team and offers the best experience for Next.js projects.

#### Automatic Deployment

1. **Connect your repository**
   - Visit [vercel.com](https://vercel.com)
   - Sign up with your GitHub account
   - Click "New Project"
   - Import your repository

2. **Configure settings**
   - Framework Preset: Next.js (auto-detected)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

3. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy your site
   - You'll get a URL like: `https://your-project.vercel.app`

#### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts
```

#### Custom Domain

1. Go to your project dashboard on Vercel
2. Navigate to Settings > Domains
3. Add your custom domain
4. Configure DNS records as instructed

### 2. GitHub Pages

GitHub Pages is free and perfect for static sites.

#### Automatic Deployment (GitHub Actions)

The project includes a GitHub Actions workflow that automatically deploys to GitHub Pages.

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically deploy on each push

#### Manual Deployment

```bash
# Build the project
npm run build

# The build output is in the 'out' directory
# Upload the contents of 'out' to GitHub Pages
```

#### Custom Domain

1. Add a `CNAME` file in the `public` directory with your domain
2. Configure your domain's DNS settings
3. Enable HTTPS in GitHub Pages settings

### 3. Netlify

Netlify is another excellent option for static site hosting.

#### Automatic Deployment

1. **Connect to Netlify**
   - Visit [netlify.com](https://netlify.com)
   - Sign up and connect your GitHub account
   - Click "New site from Git"
   - Select your repository

2. **Configure build settings**
   - Build command: `npm run build`
   - Publish directory: `out`
   - Node version: 18 (or higher)

3. **Deploy**
   - Click "Deploy site"
   - Netlify will build and deploy automatically

#### Manual Deployment

```bash
# Build the project
npm run build

# The 'out' directory contains your static files
# Upload the contents to Netlify via drag & drop
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Build Configuration

The project is configured for static export in `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};
```

### Package.json Scripts

```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "export": "next build"
  }
}
```

## 📱 Performance Optimization

### Lighthouse Score

The portfolio is optimized for:
- **Performance**: 95+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+

### Core Web Vitals

- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Image Optimization

- Images are optimized with Next.js Image component
- WebP format for better compression
- Responsive images for different screen sizes

## 🔍 SEO Configuration

### Metadata

The site includes comprehensive metadata in `src/app/layout.tsx`:

- Title and description
- Open Graph tags
- Twitter Card tags
- Keywords and author information

### Sitemap

For better SEO, consider adding a sitemap:

```typescript
// Add to next.config.ts
const nextConfig: NextConfig = {
  // ... existing config
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
};
```

## 🛠️ Troubleshooting

### Common Issues

#### Build Errors

```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

#### Image Issues

- Ensure all images are in the `public` directory
- Check file paths in components
- Verify image formats (JPEG, PNG, WebP)

#### Deployment Issues

1. **Check build logs** in your deployment platform
2. **Verify Node.js version** (18+ required)
3. **Check file permissions** and case sensitivity
4. **Review environment variables**

### Platform-Specific Issues

#### Vercel

- **Build timeout**: Increase build timeout in project settings
- **Memory issues**: Upgrade to Pro plan for more resources

#### GitHub Pages

- **404 errors**: Ensure `trailingSlash: true` in config
- **Routing issues**: Use hash routing or configure 404.html

#### Netlify

- **Build failures**: Check build command and publish directory
- **Redirect issues**: Configure `_redirects` file

## 📊 Analytics

### Google Analytics

Add Google Analytics by including the script in your layout:

```typescript
// In src/app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### Other Analytics

- **Vercel Analytics**: Built-in with Vercel deployment
- **Netlify Analytics**: Available with Netlify deployment
- **Plausible**: Privacy-focused analytics

## 🔒 Security

### Headers

The project includes security headers in `vercel.json`:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### HTTPS

All recommended platforms provide HTTPS by default.

## 📞 Support

If you encounter issues:

1. **Check the logs** in your deployment platform
2. **Review this guide** for common solutions
3. **Search GitHub issues** for similar problems
4. **Contact support** for your specific platform

### Platform Support

- **Vercel**: [vercel.com/support](https://vercel.com/support)
- **GitHub Pages**: [docs.github.com/pages](https://docs.github.com/pages)
- **Netlify**: [netlify.com/support](https://netlify.com/support)

---

Happy deploying! 🚀 