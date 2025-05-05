export function getAssetPath(path: string): string {
    // Assurez-vous que le chemin commence par '/'
    return path.startsWith('/') ? path : `/${path}`;
}
