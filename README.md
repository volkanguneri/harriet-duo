# Harriet Duo - Site Web Officiel

Site web officiel pour Harriet Duo, un duo de jazz et chanson française composé de Juliette Chevalier (chant) et Arnaud Lacarte (guitare).

## À propos du projet

Ce site présente le duo Harriet, leur musique, leurs performances et permet de les contacter pour des réservations. Le site est disponible en français et en anglais.

Site web: [harrietduo.fr](https://harrietduo.fr)

## Technologies utilisées

- [SvelteKit](https://kit.svelte.dev/) - Framework web
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [TypeScript](https://www.typescriptlang.org/) - Langage de programmation
- [GitHub Pages](https://pages.github.com/) - Hébergement

## Installation

```bash
# Installer les dépendances
npm install
# ou
pnpm install
```

## Développement

```bash
# Lancer le serveur de développement
npm run dev
# ou
pnpm dev

# Lancer le serveur et ouvrir dans le navigateur
npm run dev -- --open
# ou
pnpm dev -- --open
```

## Construction et déploiement

```bash
# Construire le site pour la production
npm run build
# ou
pnpm build

# Prévisualiser la version de production
npm run preview
# ou
pnpm preview
```

## Déploiement sur GitHub Pages

Le site est configuré pour être déployé automatiquement sur GitHub Pages. Chaque push sur la branche principale déclenche un workflow GitHub Actions qui construit et déploie le site.

## Configuration du domaine personnalisé

Le site utilise un domaine personnalisé (harrietduo.fr) configuré via GitHub Pages. Le fichier CNAME à la racine du projet contient le nom de domaine.

## Internationalisation

Le site est disponible en français et en anglais. Les traductions sont gérées dans le fichier `src/lib/i18n/translations.ts`.

## Licence

Tous droits réservés Harriet Duo
