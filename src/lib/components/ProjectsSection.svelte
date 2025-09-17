<script lang="ts">
	import { fadeIn } from '$lib/actions/fadeIn';

	export let projectData: { title: string; description: string; tags: string[] }[] = [];
</script>

<section use:fadeIn id="projects" class="fade-in-section py-24">
	<h2 class="mb-12 text-center text-4xl font-bold">
		<span class="text-glow">Featured Projects</span>
	</h2>
	<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each projectData as project}
			<div class="glass-card rounded-xl p-6">
				<h3 class="mb-2 text-2xl font-bold text-purple-400">{project.title}</h3>
				<p class="main-text-dim mb-4">{project.description}</p>
				<div class="flex flex-wrap gap-2 text-sm">
					{#each project.tags as tag}
						<span class="rounded bg-slate-700/50 px-2 py-1">{tag}</span>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>
