const fs = require('fs');
const { createCanvas } = require('canvas');

// Création d'un canvas pour le favicon
const size = 128;
const canvas = createCanvas(size, size);
const ctx = canvas.getContext('2d');

// Fond du favicon
ctx.fillStyle = '#000000'; // Fond noir
ctx.fillRect(0, 0, size, size);

// Dessin d'un cercle
ctx.beginPath();
ctx.arc(size/2, size/2, size/2 - 5, 0, Math.PI * 2);
ctx.fillStyle = '#3b3b3b'; // Cercle gris foncé
ctx.fill();

// Ajout des initiales "HD"
ctx.font = 'bold 60px Arial';
ctx.fillStyle = '#ffffff'; // Texte blanc
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('HD', size/2, size/2);

// Ajout d'un élément musical (une note de musique stylisée)
ctx.beginPath();
const noteX = size/2 + 30;
const noteY = size/2 - 20;
ctx.moveTo(noteX, noteY);
ctx.bezierCurveTo(noteX + 10, noteY - 10, noteX + 20, noteY, noteX + 15, noteY + 15);
ctx.lineTo(noteX + 15, noteY + 35);
ctx.lineWidth = 3;
ctx.strokeStyle = '#ffffff';
ctx.stroke();

// Sauvegarde du favicon
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('./static/favicon.png', buffer);

console.log('Favicon créé avec succès!');
