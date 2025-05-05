import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join } from 'path';

const INPUT_DIR = 'static/images';
const OUTPUT_DIR = 'static/images/optimized';

async function optimizeImage(filename) {
    const inputPath = join(INPUT_DIR, filename);
    const outputPath = join(OUTPUT_DIR, filename.replace(/\.(jpg|jpeg|png)$/i, '.webp'));

    try {
        await sharp(inputPath)
            .resize(1920, null, { 
                withoutEnlargement: true,
                fit: 'inside'
            })
            .webp({ 
                quality: 80,
                effort: 6
            })
            .toFile(outputPath);
        
        console.log(`Optimized: ${filename}`);
    } catch (error) {
        console.error(`Error optimizing ${filename}:`, error);
    }
}

async function main() {
    try {
        const files = await readdir(INPUT_DIR);
        const imageFiles = files.filter(file => 
            /\.(jpg|jpeg|png)$/i.test(file) && 
            !file.includes('optimized')
        );

        await Promise.all(imageFiles.map(optimizeImage));
        console.log('All images optimized!');
    } catch (error) {
        console.error('Error:', error);
    }
}

main();
