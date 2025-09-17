<script lang="ts">
	import { fadeIn } from '$lib/actions/fadeIn';

	export let skills: { name: string; icon: string }[] = [];
</script>

<section use:fadeIn id="about" class="fade-in-section py-24">
	<h2 class="mb-12 text-center text-4xl font-bold">
		<span class="text-glow-blue">About & Skills</span>
	</h2>
	<div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-5">
		<div class="lg:col-span-2">
			<img
				src="https://placehold.co/400x400/0A0A0A/E2E8F0?text=JD"
				alt="John Doe Portrait"
				class="mx-auto h-64 w-64 max-w-sm rounded-full shadow-2xl shadow-purple-500/10 lg:h-auto lg:w-full"
			/>
		</div>
		<div class="lg:col-span-3">
			<p class="main-text-dim mb-8 text-lg leading-relaxed">
				Hello! I'm John, a passionate developer with over 5 years of experience... My journey in tech
				started with a simple "Hello, World!" and has since evolved into a deep passion for crafting elegant
				solutions to complex problems. I thrive in collaborative environments and am always eager to learn new
				things.
			</p>
			<div class="flex flex-wrap justify-center gap-4 lg:justify-start">
				{#each skills as skill}
					<img
						src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}`}
						alt={skill.name}
						class="skill-icon h-12 w-12"
						title={skill.name}
					/>
				{/each}
			</div>
		</div>
	</div>
</section>
