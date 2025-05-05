import { cp } from 'fs/promises';
import { join } from 'path';

async function copyOptimizedImages() {
    try {
        const sourceDir = 'static/images/optimized';
        const targetDir = 'build/images/optimized';
        
        await cp(sourceDir, targetDir, { recursive: true });
        console.log('Optimized images copied successfully!');
    } catch (error) {
        console.error('Error copying optimized images:', error);
        process.exit(1);
    }
}

copyOptimizedImages();
