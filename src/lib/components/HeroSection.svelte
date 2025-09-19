<script lang="ts">
	import { fadeIn } from '$lib/actions/fadeIn';

	import cv from '$lib/assets/HOANG THIEN NHAN.pdf';
</script>

<section id="home" use:fadeIn class="fade-in-section min-height relative flex items-center">
	<div class="relative z-10 container mx-auto grid gap-12 px-6 md:grid-cols-[2fr,1fr] md:px-12">
		<div class="flex flex-col items-center justify-center space-y-8">
			<p class="text-sm font-semibold tracking-[0.4em] text-emerald-400 uppercase">
				Hi, my name is
			</p>
			<h1 class="text-glow bounce-hover text-4xl leading-tight font-bold text-balance md:text-6xl">
				Jason Hoang
			</h1>
			<p class="main-text-dim max-w-2xl text-lg leading-relaxed">
				a Software Developer with 3+ years of experience in building scalable web and mobile
				applications, passionate about delivering seamless solutions and leveraging modern
				technologies to solve real-world problems.
			</p>

			<div class="flex flex-wrap gap-4">
				<a
					href="#projects"
					class="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 via-emerald-500 to-sky-600 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-500/30 transition-transform duration-300 hover:-translate-y-1"
				>
					View my work
				</a>
				<a
					href={cv}
					download
					class="inline-flex items-center justify-center rounded-full border border-sky-300/60 px-6 py-3 font-semibold text-sky-100 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300/70 hover:text-emerald-100"
				>
					Download CV
				</a>
			</div>
		</div>
	</div>
</section>
