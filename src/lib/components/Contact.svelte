<script lang="ts">
	import { onMount } from 'svelte';
	import { getOptimizedImagePath } from '$lib/utils/images';
	let imageLoaded = false;

	onMount(() => {
		imageLoaded = true;
	});
</script>

<section class="relative">
	<div class="relative w-full bg-black">
		<div class="relative w-full">
			<picture>
				<source media="(min-width: 768px)" srcset={getOptimizedImagePath('/images/optimized/contactDesktop.webp')} />
				<img
					src={getOptimizedImagePath('/images/optimized/contactMobile.webp')}
					alt="Contact Harriet Duo"
					class="w-full object-cover object-[60%_40%] transition-opacity duration-1000 md:object-center {imageLoaded
						? 'opacity-100'
						: 'opacity-0'}"
					onload={() => (imageLoaded = true)}
				/>
			</picture>
		</div>
		<div class="absolute inset-0 bg-black/60"></div>
		<div class="absolute inset-0 flex items-center justify-center">
			<div class="mx-auto max-w-xl px-4">
				<div class="rounded-lg p-8">
					<div class="space-y-6 text-center text-lg md:text-3xl">
						<p>+33 6 45 40 27 48</p>
						<p>harriet.duo.jazz@gmail.com</p>
						<div class="flex justify-center space-x-6 pt-6">
							<a
								href="https://www.instagram.com/harriet.duo?igsh=MXFrZHVmN2o0c2F2bQ%3D%3D"
								class="text-white transition-transform hover:scale-110 hover:opacity-80"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Instagram"
							>
								<svg
									class="h-6 w-6 md:h-8 md:w-8"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 448 512"
									fill="currentColor"
								>
									<path
										d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
									/>
								</svg>
							</a>
							<a
								href="https://www.facebook.com/share/18mUDarpgn/"
								class="text-white transition-transform hover:scale-110 hover:opacity-80"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Facebook"
							>
								<svg
									class="h-6 w-6 md:h-8 md:w-8"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 320 512"
									fill="currentColor"
								>
									<path
										d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
									/>
								</svg>
							</a>
							<a
								href="https://m.youtube.com/@HarrietDuo-j7w"
								class="text-white transition-transform hover:scale-110 hover:opacity-80"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="YouTube"
							>
								<svg
									class="h-6 w-6 md:h-8 md:w-8"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 576 512"
									fill="currentColor"
								>
									<path
										d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
									/>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
