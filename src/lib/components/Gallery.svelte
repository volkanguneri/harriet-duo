<script lang="ts">
	import { t } from '$lib/i18n/language.svelte';
	import { getOptimizedImagePath } from '$lib/utils/images';

	interface GalleryImage {
		src: string;
		altKey: string;
		alt?: string; // Optionnel pour la compatibilité avec les images existantes
	}

	const images: GalleryImage[] = [
		{
			src: getOptimizedImagePath('/images/optimized/IMG_4007.webp'),
			altKey: 'gallery.concert5',
			alt: 'Concert Around Midnight'
		},
		{
			src: getOptimizedImagePath('/images/optimized/IMG_4008.webp'),
			altKey: 'gallery.concert6',
			alt: 'Concert Around Midnight'
		},
		{
			src: getOptimizedImagePath('/images/optimized/IMG_4009.webp'),
			altKey: 'gallery.concert7',
			alt: 'Concert Around Midnight'
		},
		{
			src: getOptimizedImagePath('/images/optimized/IMG_4011.webp'),
			altKey: 'gallery.concert8',
			alt: 'Concert Around Midnight'
		},
		{
			src: getOptimizedImagePath('/images/optimized/IMG_4012.webp'),
			altKey: 'gallery.concert9',
			alt: 'Concert Around Midnight'
		},
		{
			src: getOptimizedImagePath('/images/optimized/IMG_4013.webp'),
			altKey: 'gallery.concert10',
			alt: 'Concert Around Midnight'
		},
		{
			src: getOptimizedImagePath('/images/optimized/IMG_4014.webp'),
			altKey: 'gallery.concert11',
			alt: 'Concert Around Midnight'
		},
		{
			src: getOptimizedImagePath('/images/optimized/IMG_4015.webp'),
			altKey: 'gallery.concert12',
			alt: 'Concert Around Midnight'
		},
		{
			src: getOptimizedImagePath('/images/optimized/affiche_festival01.webp'),
			altKey: 'gallery.affiche1',
			alt: 'Affiche festival Around Midnight'
		},
		{
			src: getOptimizedImagePath('/images/optimized/affiche_festival02.webp'),
			altKey: 'gallery.affiche2',
			alt: 'Affiche festival Around Midnight'
		},
		{
			src: getOptimizedImagePath('/images/optimized/DSC_0577.webp'),
			altKey: 'gallery.concert1',
			alt: 'Concert Around Midnight'
		},
		{
			src: getOptimizedImagePath('/images/optimized/DSC_0598.webp'),
			altKey: 'gallery.concert2',
			alt: 'Concert Around Midnight'
		},
		{
			src: getOptimizedImagePath('/images/optimized/DSC_0602.webp'),
			altKey: 'gallery.concert3',
			alt: 'Concert Around Midnight'
		},
		{
			src: getOptimizedImagePath('/images/optimized/DSC_0609.webp'),
			altKey: 'gallery.concert4',
			alt: 'Concert Around Midnight'
		},
		{
			src: getOptimizedImagePath('/images/optimized/main.webp'),
			altKey: 'banner.title'
		},
		{
			src: getOptimizedImagePath('/images/optimized/trio-photo.webp'),
			altKey: 'menu.trio'
		},
		{
			src: getOptimizedImagePath('/images/optimized/juliette.webp'),
			altKey: 'musicians.juliette.name',
			alt: 'Juliette Chevalier - Chanteuse du trio de jazz Around Midnight'
		},
		{
			src: getOptimizedImagePath('/images/optimized/arnaud.webp'),
			altKey: 'musicians.arnaud.name',
			alt: 'Arnaud Lacarte - Guitariste du trio de jazz Around Midnight'
		},
		{
			src: getOptimizedImagePath('/images/optimized/hugues.webp'),
			altKey: 'musicians.hugues.name',
			alt: 'Hugues Lasserre - Contrebassiste du trio de jazz Around Midnight'
		}
	];

	let currentIndex = 0;
	let imageLoaded = Array(3).fill(false);
	let touchStartX = 0;

	function getPreviousIndex(current: number): number {
		return current === 0 ? images.length - 1 : current - 1;
	}

	function getNextIndex(current: number): number {
		return current === images.length - 1 ? 0 : current + 1;
	}

	function nextImage() {
		currentIndex = getNextIndex(currentIndex);
		imageLoaded = Array(3).fill(false);
	}

	function previousImage() {
		currentIndex = getPreviousIndex(currentIndex);
		imageLoaded = Array(3).fill(false);
	}

	function handleTouchStart(event: TouchEvent) {
		touchStartX = event.touches[0].clientX;
	}

	function handleTouchEnd(event: TouchEvent) {
		const touchEndX = event.changedTouches[0].clientX;
		const diffX = touchEndX - touchStartX;

		if (Math.abs(diffX) > 50) {
			if (diffX > 0) {
				previousImage();
			} else {
				nextImage();
			}
		}
	}
</script>

<section class="relative bg-black" id="gallery">
	<div class="container mx-auto">
		<!-- Desktop Layout -->
		<div class="relative hidden items-center justify-center gap-4 md:flex">
			<!-- Previous Image -->
			<button
				type="button"
				class="relative h-32 w-40 cursor-pointer opacity-40 transition-all hover:opacity-60 focus:outline-none"
				onclick={() => {
					currentIndex = getPreviousIndex(currentIndex);
					imageLoaded = Array(3).fill(false);
				}}
				aria-label={t(images[getPreviousIndex(currentIndex)].altKey)}
			>
				<img
					src={images[getPreviousIndex(currentIndex)].src}
					alt={t(images[getPreviousIndex(currentIndex)].altKey)}
					class="h-full w-full rounded-lg object-cover transition-opacity duration-500"
				/>
				<div class="absolute inset-0 rounded-lg bg-black/20"></div>
			</button>

			<!-- Main Image and Navigation -->
			<div class="flex flex-col items-center">
				<div class="relative h-[28rem] w-[36rem] overflow-hidden">
					<a
						href={images[currentIndex].src}
						target="_blank"
						rel="noopener noreferrer"
						class="block h-full w-full"
					>
						<img
							src={images[currentIndex].src}
							alt={t(images[currentIndex].altKey)}
							class="h-full w-full rounded-lg object-contain transition-opacity duration-500 hover:opacity-90"
						/>
					</a>
				</div>

				<!-- Navigation Buttons -->
				<div class="mt-4 flex justify-center gap-4">
					<button
						type="button"
						class="rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
						onclick={previousImage}
						aria-label={t('gallery.previous')}
					>
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 19l-7-7 7-7"
							/>
						</svg>
					</button>
					<button
						type="button"
						class="rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
						onclick={nextImage}
						aria-label={t('gallery.next')}
					>
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</button>
				</div>
			</div>

			<!-- Next Image -->
			<button
				type="button"
				class="relative h-32 w-40 cursor-pointer opacity-40 transition-all hover:opacity-60 focus:outline-none"
				onclick={() => {
					currentIndex = getNextIndex(currentIndex);
					imageLoaded = Array(3).fill(false);
				}}
				aria-label={t(images[getNextIndex(currentIndex)].altKey)}
			>
				<img
					src={images[getNextIndex(currentIndex)].src}
					alt={t(images[getNextIndex(currentIndex)].altKey)}
					class="h-full w-full rounded-lg object-cover transition-opacity duration-500"
				/>
				<div class="absolute inset-0 rounded-lg bg-black/20"></div>
			</button>
		</div>

		<!-- Mobile Layout -->
		<div class="md:hidden">
			<div
				class="relative mx-auto aspect-[4/3] max-h-[80vh]"
				ontouchstart={handleTouchStart}
				ontouchend={handleTouchEnd}
			>
				<img
					src={images[currentIndex].src}
					alt={t(images[currentIndex].altKey)}
					class="h-full w-full object-contain"
				/>
				<div class="absolute bottom-[10%] left-0 right-0 flex justify-center gap-2">
					{#each images as _, index}
						<div
							class="h-2 w-2 rounded-full {currentIndex === index
								? 'bg-white shadow-md'
								: 'border border-white bg-black/30'}"
						></div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
