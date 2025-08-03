# Guide de Déploiement - Portfolio Gauthier Compan

Ce guide explique comment déployer le portfolio sur différentes plateformes.

## 🚀 Déploiement sur Vercel (Recommandé)

### Étape 1: Préparer le repository
1. Créez un nouveau repository sur GitHub
2. Poussez votre code :
```bash
git remote add origin https://github.com/votre-username/votre-repo.git
git branch -M main
git push -u origin main
```

### Étape 2: Déployer sur Vercel
1. Allez sur [vercel.com](https://vercel.com)
2. Connectez-vous avec votre compte GitHub
3. Cliquez sur "New Project"
4. Importez votre repository
5. Vercel détectera automatiquement Next.js
6. Cliquez sur "Deploy"

Le site sera disponible à l'URL fournie par Vercel.

## 🌐 Déploiement sur GitHub Pages

### Étape 1: Configuration du repository
1. Allez dans les paramètres de votre repository GitHub
2. Naviguez vers "Pages" dans le menu de gauche
3. Dans "Source", sélectionnez "GitHub Actions"

### Étape 2: Activer GitHub Actions
Le workflow `.github/workflows/deploy.yml` est déjà configuré. Il se déclenchera automatiquement à chaque push sur la branche `main`.

### Étape 3: Vérifier le déploiement
1. Allez dans l'onglet "Actions" de votre repository
2. Vérifiez que le workflow "Deploy to GitHub Pages" s'exécute
3. Une fois terminé, votre site sera disponible à : `https://votre-username.github.io/votre-repo`

## 📦 Déploiement sur Netlify

### Étape 1: Préparer le build
1. Allez sur [netlify.com](https://netlify.com)
2. Connectez-vous avec votre compte GitHub
3. Cliquez sur "New site from Git"

### Étape 2: Configuration
- **Build command**: `npm run build`
- **Publish directory**: `out`
- **Node version**: `18`

### Étape 3: Déployer
1. Sélectionnez votre repository
2. Configurez les paramètres de build
3. Cliquez sur "Deploy site"

## 🔧 Configuration personnalisée

### Variables d'environnement
Si nécessaire, ajoutez des variables d'environnement dans votre plateforme de déploiement :

```env
NEXT_PUBLIC_SITE_URL=https://votre-site.com
```

### Domaine personnalisé
1. Achetez un domaine (ex: gauthiercompan.com)
2. Configurez les DNS pour pointer vers votre plateforme de déploiement
3. Ajoutez le domaine dans les paramètres de votre plateforme

## 📱 Test local

Avant de déployer, testez localement :

```bash
# Installation
npm install

# Développement
npm run dev

# Build de production
npm run build

# Test du build
npx serve out
```

## 🔍 Vérifications post-déploiement

1. **Performance** : Testez avec [PageSpeed Insights](https://pagespeed.web.dev/)
2. **SEO** : Vérifiez les métadonnées avec [Google Rich Results Test](https://search.google.com/test/rich-results)
3. **Responsive** : Testez sur différents appareils
4. **Liens** : Vérifiez que tous les liens fonctionnent

## 🛠️ Dépannage

### Erreur de build
- Vérifiez que Node.js 18+ est utilisé
- Vérifiez les logs de build dans votre plateforme
- Testez localement avec `npm run build`

### Images qui ne s'affichent pas
- Vérifiez que les images sont dans le dossier `public/`
- Vérifiez les chemins dans les composants
- Utilisez le composant `Image` de Next.js

### Problèmes de navigation
- Vérifiez que les ancres correspondent aux IDs des sections
- Testez la navigation sur mobile et desktop

## 📞 Support

Pour toute question ou problème :
- Créez une issue sur GitHub
- Contactez Gauthier Compan : gauthier.compan@example.com

---

**Note** : Ce site est optimisé pour les performances et le SEO. Il utilise Next.js 15 avec export statique pour une vitesse de chargement maximale. 