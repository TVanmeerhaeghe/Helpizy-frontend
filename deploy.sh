#!/bin/bash

echo "➡️  Mise à jour du fichier vue.config.js..."
echo "module.exports = { publicPath: '/helpizy/' };" > vue.config.js

echo "🛠  Compilation du projet Vue..."
npm install
npm run build

echo "🧹 Nettoyage du dossier /var/www/html/helpizy"
rm -rf /var/www/html/helpizy/*

echo "📁 Copie des fichiers buildés vers /var/www/html/helpizy"
cp -r dist/* /var/www/html/helpizy/

echo "✅ Déploiement terminé avec succès !"

