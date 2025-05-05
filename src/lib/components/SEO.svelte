<script lang="ts">
	import { t } from '$lib/i18n/language.svelte';
</script>

<svelte:head>
	<!-- Méta-tags de base -->
	<title>{t('banner.title')} - {t('banner.subtitle')}</title>
	<meta name="description" content={t('trio.description.0')} />
	<meta
		name="keywords"
		content="jazz, blues, trio, musique, Rennes, Bretagne, Around Midnight, Juliette Chevalier, Arnaud Lacarte, Hugues Lasserre"
	/>
	<meta name="author" content="Around Midnight" />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://volkanguneri.github.io/Around_Midnight_Website/" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://volkanguneri.github.io/Around_Midnight_Website/" />
	<meta property="og:title" content={t('banner.title')} />
	<meta property="og:description" content={t('trio.description.0')} />
	<meta
		property="og:image"
		content="https://volkanguneri.github.io/Around_Midnight_Website/images/optimized/main.webp"
	/>

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="https://volkanguneri.github.io/Around_Midnight_Website/" />
	<meta name="twitter:title" content={t('banner.title')} />
	<meta name="twitter:description" content={t('trio.description.0')} />
	<meta
		name="twitter:image"
		content="https://volkanguneri.github.io/Around_Midnight_Website/images/optimized/main.webp"
	/>

	<!-- Autres méta-tags -->
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="theme-color" content="#000000" />
	<meta name="geo.region" content="FR-35" />
	<meta name="geo.placename" content="Rennes" />
	<meta name="language" content="French" />
</svelte:head>
