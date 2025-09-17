<script lang="ts">
	import { fadeIn } from '$lib/actions/fadeIn';

	export let services: { title: string; description: string; icon: string }[] = [];
</script>

<section use:fadeIn id="services" class="fade-in-section py-24">
	<div class="container mx-auto px-6 md:px-12">
		<div class="mb-16 flex flex-col gap-6 text-center md:flex-row md:items-end md:justify-between md:text-left">
			<div class="space-y-4">
				<p class="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">What I Do</p>
				<h2 class="text-4xl font-bold text-glow-blue md:text-5xl">Strategic design & engineering services.</h2>
			</div>
			<p class="main-text-dim max-w-2xl text-lg">
				I partner with teams to ship thoughtful, resilient products—from early prototypes to scalable
				releases.
			</p>
		</div>
		<div class="grid gap-8 md:grid-cols-3">
			{#each services as service}
				<div class="group relative overflow-hidden rounded-2xl border border-slate-700/40 bg-slate-900/40 p-8 transition-all duration-300 hover:border-emerald-400/70 hover:bg-slate-900/70">
					<div class="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-sky-500/30 via-emerald-500/30 to-sky-600/30 blur-3xl transition-opacity duration-300 group-hover:opacity-80"></div>
					<div class="relative z-10 space-y-4">
						<span class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 via-emerald-500 to-sky-600 text-xl">
							{service.icon}
						</span>
						<h3 class="text-xl font-semibold text-white">{service.title}</h3>
						<p class="main-text-dim text-base leading-relaxed">{service.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
