<script lang="ts">
	import { fadeIn } from '$lib/actions/fadeIn';

	export let techStack: { name: string; icon: string }[] = [];
</script>

<section id="home" use:fadeIn class="fade-in-section relative flex min-h-screen items-center">
	<div class="relative z-10 container mx-auto grid gap-12 px-6 md:grid-cols-[2fr,1fr] md:px-12">
		<div class="space-y-8">
			<p class="text-sm font-semibold tracking-[0.4em] text-emerald-400 uppercase">
				Software Developer
			</p>
			<h1 class="text-glow text-4xl leading-tight font-bold text-balance md:text-6xl">
				Jason Hoang
			</h1>
			<p class="main-text-dim max-w-2xl text-lg leading-relaxed">
				Hi! I'm Jason, a Software Developer with 3+ years of experience in building scalable web and
				mobile applications, passionate about delivering seamless solutions and leveraging modern
				technologies to solve real-world problems.
			</p>

			<div class="flex flex-wrap gap-4">
				<a
					href="#projects"
					class="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 via-emerald-500 to-sky-600 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-500/30 transition-transform duration-300 hover:-translate-y-1"
				>
					Explore Projects
				</a>
				<a
					href="#contact"
					class="inline-flex items-center justify-center rounded-full border border-sky-300/60 px-6 py-3 font-semibold text-sky-100 transition-all duration-300 hover:border-emerald-300/70 hover:text-emerald-100"
				>
					Let's Collaborate
				</a>
			</div>
			<div class="glass-card inline-flex flex-col gap-4 rounded-2xl p-6">
				<span class="text-xs font-semibold tracking-widest text-emerald-300/80 uppercase">
					Key Technologies
				</span>
				<div class="flex flex-wrap gap-3">
					{#each techStack as skill}
						<div
							class="flex items-center gap-2 rounded-full bg-slate-900/30 px-3 py-1 text-sm text-sky-100"
						>
							<img
								src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}`}
								alt={skill.name}
								class="h-5 w-5"
							/>
							<span>{skill.name}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
		<div class="glass-card hidden flex-col justify-between rounded-2xl p-8 md:flex">
			<div>
				<h2 class="text-lg font-semibold text-emerald-300">Currently</h2>
				<p class="main-text-dim mt-2">Software Developer @ TechJDI · Accumulus AI</p>
			</div>
			<div>
				<h2 class="text-lg font-semibold text-sky-300">Availability</h2>
				<p class="main-text-dim mt-2">
					Open to fullstack opportunities & collaborative product teams.
				</p>
			</div>
			<div>
				<h2 class="text-lg font-semibold text-emerald-300">Focus</h2>
				<p class="main-text-dim mt-2">
					Delivering end-to-end features, refining architecture, embracing AI-assisted workflows.
				</p>
			</div>
		</div>
	</div>
</section>
