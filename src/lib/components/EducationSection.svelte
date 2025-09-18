<script lang="ts">
	import { fadeIn } from '$lib/actions/fadeIn';

	export let education: {
		institution: string;
		degree: string;
		timeframe: string;
		gpa: string;
		summary: string;
		highlights: string[];
		project: {
			name: string;
			description: string;
			bullets: string[];
		};
	};
</script>

<section use:fadeIn id="education" class="fade-in-section py-24">
	<div class="container mx-auto px-6 md:px-12">
		<div class="mb-12 text-center">
			<p class="text-sm font-semibold tracking-[0.3em] text-emerald-400 uppercase">Education</p>
			<h2 class="text-glow mt-4 text-4xl font-bold md:text-5xl">
				Built on a strong engineering foundation.
			</h2>
		</div>
		<div class="grid gap-8 lg:grid-cols-2">
			<div
				class="relative overflow-hidden rounded-2xl border border-slate-700/40 bg-slate-900/60 p-8 shadow-xl shadow-sky-900/20"
			>
				<div
					class="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br from-sky-500/30 via-emerald-500/30 to-sky-600/30 blur-3xl"
				></div>
				<div class="relative z-10 space-y-4">
					<p class="text-sm tracking-wide text-emerald-300/80 uppercase">{education.timeframe}</p>
					<h3 class="text-2xl font-semibold text-white">{education.degree}</h3>
					<p class="main-text-dim text-base">{education.institution}</p>
					<p class="text-sky-100/90">GPA: {education.gpa}</p>
					<p class="main-text-dim leading-relaxed">{education.summary}</p>
					<ul class="space-y-2 text-sky-100/90">
						{#each education.highlights as highlight}
							<li class="flex items-start gap-2">
								<span class="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
								<span>{highlight}</span>
							</li>
						{/each}
					</ul>
				</div>
			</div>
			<div
				class="relative overflow-hidden rounded-2xl border border-slate-700/40 bg-slate-900/60 p-8 shadow-xl shadow-sky-900/20"
			>
				<div
					class="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br from-emerald-500/30 via-sky-500/30 to-emerald-400/30 blur-3xl"
				></div>
				<div class="relative z-10 space-y-4">
					<p class="text-sm tracking-wide text-emerald-300/80 uppercase">Graduation Project</p>
					<h3 class="text-2xl font-semibold text-white">{education.project.name}</h3>
					<p class="main-text-dim leading-relaxed">{education.project.description}</p>
					<ul class="space-y-2 text-sky-100/90">
						{#each education.project.bullets as bullet}
							<li class="flex items-start gap-2">
								<span class="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
								<span>{bullet}</span>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
