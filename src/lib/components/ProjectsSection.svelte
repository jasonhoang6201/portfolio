<script lang="ts">
	import { fadeIn } from '$lib/actions/fadeIn';

	export let projectData: { title: string; description: string; tags: string[]; link?: string }[] = [];
</script>

<section use:fadeIn id="projects" class="fade-in-section py-24">
	<div class="container mx-auto px-6 md:px-12">
		<div class="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
			<div>
				<p class="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">Selected Work</p>
				<h2 class="mt-4 text-4xl font-bold text-glow md:text-5xl">Blue & green powered narratives.</h2>
			</div>
			<p class="main-text-dim max-w-xl text-lg">
				A snapshot of products where I led front-end architecture, interaction design, and delivery.
			</p>
		</div>
		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each projectData as project}
			<a
				href={project.link ?? '#'}
				class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-500 via-emerald-500 to-sky-600 p-[1px]"
				target={project.link ? '_blank' : undefined}
				rel={project.link ? 'noreferrer' : undefined}
			>
					<div class="flex h-full flex-col justify-between rounded-2xl bg-slate-900/80 p-6 transition-all duration-300 group-hover:bg-slate-900/60">
						<div>
							<h3 class="mb-3 text-2xl font-semibold text-white">{project.title}</h3>
							<p class="main-text-dim mb-6 leading-relaxed">{project.description}</p>
						</div>
						<div class="flex flex-wrap gap-2">
							{#each project.tags as tag}
								<span class="rounded-full border border-sky-200/30 bg-slate-900/50 px-3 py-1 text-xs uppercase tracking-wide text-sky-100">
									{tag}
								</span>
							{/each}
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>
