<script lang="ts">
	import { onMount } from 'svelte';
	import { t } from '$lib/i18n';
	import { getOptimizedImagePath } from '$lib/utils/images';
	let imageLoaded = false;

	onMount(() => {
		imageLoaded = true;
	});
</script>

<section class="relative" id="trio">
	<div class="relative w-full">
		<picture>
			<source media="(min-width: 768px)" srcset={getOptimizedImagePath('/images/trio-photo.jpg')} />
			<img
				src={getOptimizedImagePath('/images/trioColor.jpg')}
				alt="Around Midnight Trio"
				class="w-full object-cover object-[60%_40%] transition-opacity duration-1000 md:object-center {imageLoaded
					? 'opacity-100'
					: 'opacity-0'}"
				onload={() => (imageLoaded = true)}
			/>
		</picture>
		<div class="absolute inset-0 bg-black/60"></div>
		<div class="absolute inset-0 flex items-center justify-center">
			<div class="mx-auto max-w-lg px-4 sm:px-8 md:pt-0">
				<div class="space-y-8 text-center md:space-y-8">
					<div
						class="space-y-8 px-2 text-justify text-base leading-relaxed md:text-lg md:leading-relaxed"
					>
						{#each t('trio.description') as paragraph}
							<p>{paragraph}</p>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
