# Gauthier Compan - Portfolio

Portfolio professionnel de Gauthier Compan, AI Software Engineer spécialisé dans le développement d'applications IA, la blockchain et les architectures modernes.

## 🚀 Technologies utilisées

- **Next.js 15** - Framework React moderne
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **React** - Bibliothèque UI
- **ESLint** - Linting du code

## 📋 Fonctionnalités

- ✅ Design moderne noir et blanc
- ✅ Responsive design (mobile, tablette, desktop)
- ✅ Navigation fluide avec ancres
- ✅ Section expérience avec logos des entreprises
- ✅ Compétences techniques organisées par catégories
- ✅ Section contact avec liens sociaux
- ✅ Optimisé SEO avec métadonnées complètes
- ✅ Performance optimisée avec Next.js

## 🛠️ Installation et développement

### Prérequis

- Node.js 18+ 
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone <votre-repo-url>
cd nrh

# Installer les dépendances
npm install
# ou
yarn install

# Lancer le serveur de développement
npm run dev
# ou
yarn dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

### Scripts disponibles

```bash
# Développement
npm run dev

# Build de production
npm run build

# Lancer en production
npm start

# Linting
npm run lint
```

## 📁 Structure du projet

```
nrh/
├── public/                 # Assets statiques
│   ├── image0.jpeg        # Photo de profil
│   ├── logoblaze.jpg      # Logo Blaze Messenger
│   ├── logopreprocess.jpg # Logo Preprocess
│   ├── logocostgpt.jpg    # Logo CostGPT
│   ├── logohoshai.jpg     # Logo HoshAI
│   ├── logodescribely.jpg # Logo Describely
│   ├── logocruizefinance.jpg # Logo Cruize Finance
│   ├── logorejuveai.jpg   # Logo Rejuve.AI
│   └── logohashflow.jpg   # Logo Hashflow
├── src/
│   ├── app/               # App Router Next.js
│   │   ├── layout.tsx     # Layout principal
│   │   ├── page.tsx       # Page d'accueil
│   │   └── globals.css    # Styles globaux
│   └── components/        # Composants React
│       ├── Header.tsx     # Navigation
│       ├── Hero.tsx       # Section principale
│       ├── Experience.tsx # Expériences professionnelles
│       ├── Skills.tsx     # Compétences techniques
│       └── Contact.tsx    # Section contact
├── package.json
├── tailwind.config.ts
└── README.md
```

## 🚀 Déploiement

### Vercel (Recommandé)

1. Connectez votre repository GitHub à Vercel
2. Vercel détectera automatiquement Next.js
3. Le déploiement se fera automatiquement à chaque push

### GitHub Pages

1. Ajoutez le script de build dans `package.json`:
```json
{
  "scripts": {
    "export": "next build && next export"
  }
}
```

2. Configurez GitHub Actions pour le déploiement automatique

### Netlify

1. Connectez votre repository à Netlify
2. Configurez les paramètres de build:
   - Build command: `npm run build`
   - Publish directory: `out`

## 🎨 Personnalisation

### Modifier les informations personnelles

- **Hero section**: Modifiez `src/components/Hero.tsx`
- **Expériences**: Modifiez le tableau `experiences` dans `src/components/Experience.tsx`
- **Compétences**: Modifiez le tableau `skillCategories` dans `src/components/Skills.tsx`
- **Contact**: Modifiez `src/components/Contact.tsx`

### Modifier les couleurs

Le design utilise Tailwind CSS avec un thème noir et blanc. Pour modifier les couleurs:

1. Modifiez les classes Tailwind dans les composants
2. Ou personnalisez `tailwind.config.ts`

### Ajouter de nouvelles sections

1. Créez un nouveau composant dans `src/components/`
2. Importez-le dans `src/app/page.tsx`
3. Ajoutez-le à la navigation dans `src/components/Header.tsx`

## 📱 Responsive Design

Le site est entièrement responsive avec des breakpoints pour:
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## 🔧 Configuration avancée

### Variables d'environnement

Créez un fichier `.env.local` pour les variables d'environnement:

```env
NEXT_PUBLIC_SITE_URL=https://votre-site.com
```

### Optimisation des images

Les images sont optimisées avec Next.js Image component. Pour ajouter de nouvelles images:

1. Placez-les dans `public/`
2. Utilisez le composant `Image` de Next.js
3. Spécifiez `width` et `height` ou utilisez `fill`

## 📄 Licence

Ce projet est sous licence MIT.

## 👨‍💻 Auteur

**Gauthier Compan** - AI Software Engineer
- Email: gauthier.compan@example.com
- Medium: [@blackmirroros](https://medium.com/@blackmirroros)
- X: [@BlackMirrorOS](https://x.com/BlackMirrorOS)

---

Développé avec ❤️ en Next.js et Tailwind CSS
