<script lang="ts">
	import { onMount } from 'svelte';
	import { t } from '$lib/i18n/language.svelte';
	import { getOptimizedImagePath } from '$lib/utils/images';

	let imageLoaded = false;

	onMount(() => {
		imageLoaded = true;
	});
</script>

<section class="relative" id="banner">
	<div class="relative h-[90vh] w-full bg-black md:h-screen">
		<picture>
			<source media="(min-width: 768px)" srcset={getOptimizedImagePath('/images/main.jpg')} />
			<img
				src={getOptimizedImagePath('/images/DSC_0609.jpg')}
				alt="Around Midnight Banner"
				class="h-full w-full object-cover object-[60%_40%] transition-opacity duration-1000 md:object-[0%_40%] {imageLoaded
					? 'opacity-100'
					: 'opacity-0'}"
				onload={() => (imageLoaded = true)}
			/>
		</picture>
		<div class="absolute inset-0 bg-black/60"></div>
		<div class="absolute inset-0 flex items-center justify-center">
			<div class="mx-auto max-w-4xl px-4">
				<div class="space-y-4 text-center md:space-y-4">
					<h1 class="font-moon text-3xl sm:text-4xl md:text-6xl">{t('banner.title')}</h1>
					<p class="text-base sm:text-lg md:text-xl lg:text-2xl">{t('banner.subtitle')}</p>
				</div>
			</div>
		</div>
	</div>
</section>
