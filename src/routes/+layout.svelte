<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import SEO from '$lib/components/SEO.svelte';
	let { children } = $props();
</script>

<SEO />

<div class="min-h-screen bg-black font-sans">
	<Header />
	<main class="pt-16">
		{@render children()}
	</main>

	<Footer />
</div>
