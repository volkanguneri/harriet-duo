<script lang="ts">
	import { t } from '$lib/i18n/language.svelte';
</script>

<svelte:head>
	<!-- Méta-tags de base -->
	<title>{t('banner.title')} - {t('banner.subtitle')}</title>
	<meta name="description" content={t('duo.description.0')} />
	<meta
		name="keywords"
		content="jazz, blues, duo, musique, Rennes, Bretagne, Harriet Duo, Juliette Chevalier, Arnaud Lacarte"
	/>
	<meta name="author" content="Harriet Duo" />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://harrietduo.fr/" />
	
	<!-- Favicon -->
	<link rel="icon" href="/favicon.png" type="image/png" />
	<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
	<link rel="apple-touch-icon" href="/favicon.png" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://harrietduo.fr/" />
	<meta property="og:title" content={t('banner.title')} />
	<meta property="og:description" content={t('duo.description.0')} />
	<meta property="og:image" content="https://harrietduo.fr/images/optimized/main.webp" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="https://harrietduo.fr/" />
	<meta name="twitter:title" content={t('banner.title')} />
	<meta name="twitter:description" content={t('duo.description.0')} />
	<meta name="twitter:image" content="https://harrietduo.fr/images/optimized/duoDesktop.webp" />

	<!-- Autres méta-tags -->
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="theme-color" content="#000000" />
	<meta name="geo.region" content="FR-35" />
	<meta name="geo.placename" content="Rennes" />
	<meta name="language" content="French" />
</svelte:head>
