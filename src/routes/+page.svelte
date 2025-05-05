<script lang="ts">
	import Banner from '$lib/components/Banner.svelte';
	import Trio from '$lib/components/Trio.svelte';
	import Musicians from '$lib/components/Musicians.svelte';
	import Gallery from '$lib/components/Gallery.svelte';
	import Video from '$lib/components/Video.svelte';
	import Contact from '$lib/components/Contact.svelte';
</script>

<div class="relative min-h-screen">
	<Banner />
	<section id="trio" class="mb-12 mt-10 scroll-mt-16 md:my-16">
		<Trio />
	</section>
	<section id="musicians" class="scroll-mt-16 md:mb-16">
		<Musicians />
	</section>
	<section id="gallery" class="mb-20 scroll-mt-16">
		<Gallery />
	</section>
	<section id="videos" class="mb-12 scroll-mt-16 md:mb-20">
		<Video />
	</section>
	<section id="contact" class="mb-12 scroll-mt-16 md:mb-16">
		<Contact />
	</section>
</div>
