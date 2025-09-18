<script lang="ts">
	import { fadeIn } from '$lib/actions/fadeIn';

	export let skills: { title: string; description: string; icon: string; points?: string[] }[] = [];
</script>

<section use:fadeIn id="skills" class="fade-in-section py-24">
	<div class="container mx-auto px-6 md:px-12">
		<div
			class="mb-16 flex flex-col gap-6 text-center md:flex-row md:items-end md:justify-between md:text-left"
		>
			<div class="space-y-4">
				<p class="text-sm font-semibold tracking-[0.3em] text-emerald-400 uppercase">
					Skills & Tools
				</p>
				<h2 class="text-glow-blue text-4xl font-bold md:text-5xl">
					Fullstack capabilities I bring to every team.
				</h2>
			</div>
			<p class="main-text-dim max-w-2xl text-lg">
				From UI polish to cloud delivery, I thrive on shipping reliable experiences and sharing
				progress in a collaborative rhythm.
			</p>
		</div>
		<div class="grid gap-8 md:grid-cols-3">
			{#each skills as skill}
				<div
					class="group relative overflow-hidden rounded-2xl border border-slate-700/40 bg-slate-900/40 p-8 transition-all duration-300 hover:border-emerald-400/70 hover:bg-slate-900/70"
				>
					<div
						class="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br from-sky-500/30 via-emerald-500/30 to-sky-600/30 blur-3xl transition-opacity duration-300 group-hover:opacity-80"
					></div>
					<div class="relative z-10 space-y-4">
						<span
							class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 via-emerald-500 to-sky-600 text-xl"
						>
							{skill.icon}
						</span>
						<h3 class="text-xl font-semibold text-white">{skill.title}</h3>
						<p class="main-text-dim text-base leading-relaxed">{skill.description}</p>
						{#if skill.points?.length}
							<ul class="space-y-2 text-sky-100/90">
								{#each skill.points as point}
									<li class="flex items-start gap-2">
										<span class="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
										<span>{point}</span>
									</li>
								{/each}
							</ul>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
