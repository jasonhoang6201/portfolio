<script lang="ts">
	import { fadeIn } from '$lib/actions/fadeIn';

	export let testimonialData: { quote: string; author: string; role?: string }[] = [];
</script>

<section use:fadeIn id="testimonials" class="fade-in-section py-24">
	<div class="container mx-auto px-6 md:px-12">
		<div class="mb-12 text-center">
			<p class="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">Testimonials</p>
			<h2 class="mt-4 text-4xl font-bold text-glow md:text-5xl">Trusted by collaborators and clients.</h2>
		</div>
		<div class="grid gap-8 md:grid-cols-2">
			{#each testimonialData as item}
				<div class="relative overflow-hidden rounded-2xl border border-slate-700/40 bg-slate-900/50 p-8 shadow-xl shadow-sky-900/20">
					<div class="absolute -right-10 top-0 h-32 w-32 rounded-full bg-gradient-to-br from-sky-500/30 via-emerald-500/30 to-sky-600/30 blur-3xl"></div>
					<p class="relative z-10 main-text-dim mb-6 text-lg italic leading-relaxed">“{item.quote}”</p>
					<p class="relative z-10 text-right text-base font-semibold text-emerald-300">{item.author}</p>
					{#if item.role}
						<p class="relative z-10 text-right text-sm text-sky-200/80">{item.role}</p>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>
