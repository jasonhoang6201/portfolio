<script lang="ts">
	import { fadeIn } from '$lib/actions/fadeIn';

	export let experienceData: { role: string; company: string; timeframe: string; description: string }[] = [];
</script>

<section use:fadeIn id="experience" class="fade-in-section py-24">
	<div class="container mx-auto px-6 md:px-12">
		<div class="mb-16 text-center md:text-left">
			<p class="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">Experience</p>
			<h2 class="mt-4 text-4xl font-bold text-glow md:text-5xl">A journey through product teams I’ve empowered.</h2>
		</div>
		<div class="relative mx-auto max-w-4xl">
			<div class="absolute left-4 top-0 h-full w-px bg-slate-700/60 md:left-1/2"></div>
			{#each experienceData as job, index}
				<div class={`relative mb-12 md:flex md:items-center md:gap-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
					<div class="absolute left-4 h-4 w-4 -translate-x-1/2 rounded-full border border-emerald-400 bg-slate-900 md:left-1/2 md:translate-x-0"></div>
					<div class="mt-10 flex-1 rounded-2xl border border-slate-700/40 bg-slate-900/40 p-8 shadow-lg shadow-sky-900/20 backdrop-blur">
						<p class="text-sm uppercase tracking-wide text-emerald-300/80">{job.timeframe}</p>
						<h3 class="mt-3 text-2xl font-semibold text-white">{job.role}</h3>
						<p class="main-text-dim mb-4 mt-1 text-sm font-medium text-sky-100/80">{job.company}</p>
						<p class="main-text-dim leading-relaxed">{job.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
