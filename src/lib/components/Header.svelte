<script lang="ts">
	import { getCurrentLang, setCurrentLang, t } from '$lib/i18n';
	import { getAssetPath } from '$lib/utils/paths';
	let isMenuOpen = $state(false);
	const toggleMenu = () => (isMenuOpen = !isMenuOpen);

	const menuItems = [
		{ href: '#trio', key: 'menu.trio' },
		{ href: '#musicians', key: 'menu.musicians' },
		{ href: '#gallery', key: 'menu.gallery' },
		{ href: '#videos', key: 'menu.videos' },
		{ href: '#contact', key: 'menu.contact' }
	];

	const handleClick = (e: MouseEvent, href: string) => {
		if (href.startsWith('#')) {
			e.preventDefault();
			const element = document.querySelector(href);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
				isMenuOpen = false;
			}
		}
	};
</script>

<nav class="fixed z-50 w-full bg-black/80 backdrop-blur-sm">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 justify-between">
			<div class="flex items-center">
				<a href={getAssetPath('/')} class="font-moon text-xl">Around Midnight</a>
			</div>

			<!-- Desktop menu -->
			<div class="hidden items-center space-x-8 md:flex">
				{#each menuItems as item}
					<a
						href={item.href}
						class="font-moon transition-colors duration-200 hover:text-white"
						onclick={(e) => handleClick(e, item.href)}
					>
						{t(item.key)}
					</a>
				{/each}
			</div>

			<!-- Language switcher -->
			<div class="hidden items-center space-x-4 md:flex">
				<button
					class="flex items-center space-x-1 opacity-50 transition-opacity hover:opacity-80"
					class:opacity-80={getCurrentLang() === 'fr'}
					onclick={() => setCurrentLang('fr')}
				>
					<img
						src={getAssetPath('/images/fr-flag.svg')}
						alt="Français"
						class="h-4 w-6 object-cover"
					/>
				</button>
				<button
					class="flex items-center space-x-1 opacity-50 transition-opacity hover:opacity-80"
					class:opacity-80={getCurrentLang() === 'en'}
					onclick={() => setCurrentLang('en')}
				>
					<img
						src={getAssetPath('/images/en-flag.svg')}
						alt="English"
						class="h-4 w-6 object-cover"
					/>
				</button>
			</div>

			<!-- Mobile menu button -->
			<div class="flex items-center md:hidden">
				<button
					onclick={toggleMenu}
					class="text-gray-300 hover:text-white"
					aria-label="Toggle menu"
				>
					<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						{#if isMenuOpen}
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						{:else}
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						{/if}
					</svg>
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile menu -->
	{#if isMenuOpen}
		<div class="bg-black/95 md:hidden">
			<div class="space-y-1 px-2 pb-3 pt-2">
				{#each menuItems as item}
					<a
						href={item.href}
						class="font-moon block px-3 py-2 text-gray-300 transition-colors duration-200 hover:text-white"
						onclick={(e) => {
							handleClick(e, item.href);
							isMenuOpen = false;
						}}
					>
						{t(item.key)}
					</a>
				{/each}
				<div class="flex items-center space-x-4 px-3 pt-4">
					<button
						class="flex items-center space-x-1 opacity-70 transition-opacity hover:opacity-100"
						class:opacity-100={getCurrentLang() === 'fr'}
						onclick={() => {
							setCurrentLang('fr');
							isMenuOpen = false;
						}}
					>
						<img
							src={getAssetPath('/images/fr-flag.svg')}
							alt="Français"
							class="h-4 w-6 object-cover"
						/>
					</button>
					<button
						class="flex items-center space-x-1 opacity-70 transition-opacity hover:opacity-100"
						class:opacity-100={getCurrentLang() === 'en'}
						onclick={() => {
							setCurrentLang('en');
							isMenuOpen = false;
						}}
					>
						<img
							src={getAssetPath('/images/en-flag.svg')}
							alt="English"
							class="h-4 w-6 object-cover"
						/>
					</button>
				</div>
			</div>
		</div>
	{/if}
</nav>
