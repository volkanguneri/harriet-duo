<script lang="ts">
	let activeVideo: string | null = null;

	const videos = [
		{
			id: 'yinOR2BH0wA',
			title: 'Harriet Duo - Performance 1'
		},
		{
			id: 'zqMIywreWE0',
			title: 'Harriet Duo - Performance 2'
		},
		{
			id: 'vb6qZsXXz4s',
			title: 'Harriet Duo - Performance 3'
		},
		{
			id: 'FpJmehxUawc',
			title: 'Harriet Duo - Performance 4'
		}
	];
</script>

<section class="relative bg-black" id="videos">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid gap-8 md:grid-cols-2">
			{#each videos as video}
				<div class="relative aspect-video w-full overflow-hidden rounded-lg">
					{#if activeVideo === video.id}
						<iframe
							class="h-full w-full"
							src="https://www.youtube.com/embed/{video.id}?modestbranding=1&showinfo=0&controls=1&rel=0&autoplay=1"
							title={video.title}
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						></iframe>
					{:else}
						<button
							class="group flex h-full w-full items-center justify-center bg-black/50"
							on:click={() => (activeVideo = video.id)}
						>
							<img
								src="https://img.youtube.com/vi/{video.id}/maxresdefault.jpg"
								alt={video.title}
								class="absolute inset-0 h-full w-full object-cover"
							/>
							<div
								class="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform group-hover:scale-110"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-10 w-10 text-white"
									viewBox="0 0 24 24"
									fill="currentColor"
								>
									<path d="M8 5v14l11-7z" />
								</svg>
							</div>
						</button>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>
