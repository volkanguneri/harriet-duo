<script lang="ts">
	import { t } from '$lib/i18n/language.svelte';
</script>

<footer class="bg-black/80">
	<div class="mx-auto max-w-7xl px-4 text-center">
		<div class="py-6 text-sm">
			<div class="space-y-2 md:flex md:items-center md:justify-center md:space-x-6 md:space-y-0">
				<p class="text-xs md:w-auto md:text-left">{t('footer.photography')}</p>
				<p class="font-medium md:w-auto md:text-center">
					© {new Date().getFullYear()} Around Midnight
				</p>
				<p class="text-xs md:w-auto md:text-right">
					{t('footer.development')}
					<a
						href="https://volkanguneri.github.io/portfolio-front/"
						target="_blank"
						rel="noopener noreferrer"
						class="text-white transition-colors hover:text-gray-300">Volkan Guneri</a
					>
				</p>
			</div>
		</div>
	</div>
</footer>
