<script lang="ts">
	import { fadeIn } from '$lib/actions/fadeIn';

	export let techStack: { name: string; icon: string }[] = [];
</script>

<section id="home" use:fadeIn class="fade-in-section relative flex min-h-screen items-center">
	<div class="relative z-10 container mx-auto grid gap-12 px-6 md:grid-cols-[2fr,1fr] md:px-12">
		<div class="space-y-8">
			<p class="text-sm font-semibold tracking-[0.4em] text-emerald-400 uppercase">
				Fullstack Developer
			</p>
			<h1 class="text-glow text-4xl leading-tight font-bold text-balance md:text-6xl">
				Hoàng Thiện Nhân
			</h1>
			<p class="main-text-dim max-w-2xl text-lg leading-relaxed">
				Ambitious developer focused on shipping reliable fullstack products today—and growing into a
				solution architect tomorrow. I balance rapid delivery with clean architecture, leveraging AI
				tools, modern frameworks, and collaborative workflows.
			</p>
			<div class="flex flex-wrap gap-4 text-sm text-sky-100/90">
				<div
					class="flex items-center gap-2 rounded-full border border-sky-400/40 bg-slate-900/40 px-4 py-2"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-4 w-4"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						><path
							d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
						/><polyline points="22,6 12,13 2,6" /></svg
					>
					<span>jasonhoang6201@gmail.com</span>
				</div>
				<div
					class="flex items-center gap-2 rounded-full border border-emerald-400/40 bg-slate-900/40 px-4 py-2"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-4 w-4"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						><path
							d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2L8.09 9.91a16 16 0 0 0 6 6l1.38-1.27a2 2 0 0 1 2-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
						/></svg
					>
					<span>0919881497</span>
				</div>
				<div
					class="flex items-center gap-2 rounded-full border border-sky-400/40 bg-slate-900/40 px-4 py-2"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-4 w-4"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						><path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 0 1 18 0Z" /><circle
							cx="12"
							cy="10"
							r="3"
						/></svg
					>
					<span>14 Thống Nhất, Phú Thọ Hòa, Tân Phú, HCM</span>
				</div>
			</div>
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
