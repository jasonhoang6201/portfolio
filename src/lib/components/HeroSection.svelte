<script lang="ts">
	import { fadeIn } from '$lib/actions/fadeIn';
</script>

<section
	use:fadeIn
	id="overview"
	class="fade-in-section flex min-h-screen flex-col items-center justify-center text-center"
>
	<h1 class="mb-4 text-5xl font-bold md:text-7xl"><span class="text-glow">John Doe</span></h1>
	<h2 class="animated-gradient-text mb-6 text-2xl font-semibold md:text-4xl">
		Creative Software Engineer
	</h2>
	<p class="main-text-dim max-w-3xl text-lg">
		I build immersive and beautiful web applications with a focus on user experience and
		cutting-edge technology. Currently exploring the realms of AI and decentralized finance.
	</p>
	<div class="mt-8 flex space-x-4">
		<a
			href="#projects"
			class="rounded-lg bg-indigo-600/80 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-indigo-500/80"
		>
			View Projects
		</a>
		<a
			href="#contact"
			class="rounded-lg bg-slate-700/50 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-slate-600/50"
		>
			Contact Me
		</a>
	</div>
</section>
