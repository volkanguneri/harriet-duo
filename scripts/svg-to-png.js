import fs from 'fs/promises';
import sharp from 'sharp';
import { fileURLToPath } from 'url';
import path from 'path';

// Obtenir le chemin du répertoire actuel en ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chemins des fichiers
const svgPath = path.join(__dirname, '../static/favicon.svg');
const pngPath = path.join(__dirname, '../static/favicon.png');

// Fonction principale asynchrone
async function convertSvgToPng() {
  try {
    // Lire le fichier SVG
    const data = await fs.readFile(svgPath);
    
    // Convertir SVG en PNG
    const info = await sharp(data)
      .resize(128, 128) // Taille du favicon
      .png()
      .toFile(pngPath);
    
    console.log('Conversion réussie!');
    console.log('Informations sur le fichier PNG:', info);
  } catch (error) {
    console.error('Erreur lors de la conversion:', error);
  }
}

// Exécuter la fonction
convertSvgToPng();
