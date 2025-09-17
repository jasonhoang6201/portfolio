<script lang="ts">
	import { fadeIn } from '$lib/actions/fadeIn';

	export let experienceData: { role: string; company: string; description: string }[] = [];
</script>

<section use:fadeIn id="experience" class="fade-in-section py-24">
	<h2 class="mb-12 text-center text-4xl font-bold">
		<span class="text-glow-blue">Work Experience</span>
	</h2>
	<div class="mx-auto max-w-3xl">
		{#each experienceData as job}
			<div class="group glass-card relative mb-8 rounded-xl p-6">
				<div class="absolute top-6 -left-4 h-full w-px bg-slate-700 transition-all duration-300 group-hover:bg-indigo-500"></div>
				<div class="absolute top-5 -left-5 h-3 w-3 rounded-full bg-slate-700 transition-all duration-300 group-hover:scale-125 group-hover:bg-indigo-500"></div>
				<h3 class="text-xl font-bold text-blue-400">{job.role}</h3>
				<p class="main-text-dim mb-1 font-semibold">{job.company}</p>
				<p class="main-text-dim">{job.description}</p>
			</div>
		{/each}
	</div>
</section>
