import { getAssetPath } from './paths';

export function getOptimizedImagePath(path: string): string {
	// Si le chemin contient déjà 'optimized', ne pas le modifier
	if (path.includes('/optimized/')) {
		return getAssetPath(path);
	}
	// Convert /images/example.jpg to /images/optimized/example.webp
	const optimizedPath = path.replace(
		/^(\/images\/)([^/]+)\.(jpg|jpeg|png)$/i,
		'$1optimized/$2.webp'
	);
	return getAssetPath(optimizedPath);
}
