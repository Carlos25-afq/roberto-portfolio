# Roberto Tientcheu - Portfolio professionnel

Site portfolio moderne, style Apple, pour Demand Planner et Analyste S&OP.

## Déploiement sur GitHub Pages

1. Créer un dépôt `roberto-portfolio` sur GitHub (par exemple sous `Carlos25-afq`).
2. Télécharger ce dossier localement puis le pousser sur le dépôt :
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/Carlos25-afq/roberto-portfolio.git
   git push -u origin main
   ```
3. Dans GitHub : Settings → Pages → Source : `main` / `/root`.
4. Le site sera disponible à l'adresse :
   `https://Carlos25-afq.github.io/roberto-portfolio` (adapter au nom du compte).

## Fichiers principaux

- `index.html` : page d'entrée, redirige automatiquement vers `fr.html` ou `en.html` selon la langue du navigateur.
- `fr.html` : version française complète du portfolio.
- `en.html` : version anglaise.
- `css/style.css` : design principal (style Apple minimaliste).
- `css/responsive.css` : responsive design (mobile, tablette, desktop).
- `js/main.js` : navigation, menu mobile, bascule de langue, thème.
- `js/animations.js` : animations (scroll reveal, compteurs statistiques).
- `data/cv-fr.json` et `data/cv-en.json` : données structurées du CV (résumé, stats, liens).

## Modification du contenu

Pour modifier les textes principaux :
- Mettre à jour directement `fr.html` (français) et `en.html` (anglais).

Pour modifier les statistiques du Hero :
- Mettre à jour `data/cv-fr.json` et `data/cv-en.json` (valeurs, labels, détails).

## Technologies utilisées

- HTML5 sémantique
- CSS3 (Flexbox, Grid, variables CSS)
- JavaScript moderne (ES6)
- Aucune dépendance externe, pas de framework

## Utilisation locale

1. Extraire le dossier.
2. Ouvrir `fr.html` ou `en.html` dans un navigateur (double-clic).
3. Pour un meilleur confort, utiliser l'extension "Live Server" de VS Code.

---

© 2025 Roberto Carlos Tientcheu. Design inspiré des interfaces Apple.