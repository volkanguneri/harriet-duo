<script lang="ts">
	import { t } from '$lib/i18n/language.svelte';
	import { getOptimizedImagePath } from '$lib/utils/images';

	interface Musician {
		id: string;
		imageSrc: string;
	}

	const musicians: Musician[] = [
		{
			id: 'juliette',
			imageSrc: getOptimizedImagePath('/images/optimized/juliette.webp')
		},
		{
			id: 'arnaud',
			imageSrc: getOptimizedImagePath('/images/optimized/arnaud.webp')
		},
		{
			id: 'hugues',
			imageSrc: getOptimizedImagePath('/images/optimized/hugues.webp')
		}
	];
</script>

<section class="relative bg-black bg-opacity-90">
	<div class="relative z-10">
		<div class="mx-auto max-w-7xl">
			{#each musicians as musician, i}
				<div
					class="mb-16 flex flex-col gap-8 px-4 sm:px-6 lg:px-8 {i === 1
						? 'md:ml-auto'
						: ''} md:w-3/4 md:flex-row md:items-start"
				>
					<div class="{i === 1 ? 'md:order-2' : ''} md:w-2/5">
						<img
							src={musician.imageSrc}
							alt={t(`musicians.${musician.id}.name`)}
							class="aspect-[3/4] w-full rounded-lg object-cover shadow-xl"
						/>
					</div>
					<div class="{i === 1 ? 'md:order-1' : ''} md:w-3/5">
						<div class="space-y-6 px-4 md:px-12">
							<h3 class="font-moon text-3xl">{t(`musicians.${musician.id}.name`)}</h3>
							<div class="space-y-4">
								<h4 class="font-moon text-lg">
									{t(`musicians.${musician.id}.instrument`)}
								</h4>
								<div class="space-y-4">
									<p class="mb-10 text-justify">{t(`musicians.${musician.id}.bio`)}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
