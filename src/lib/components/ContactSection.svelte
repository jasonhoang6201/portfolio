<script lang="ts">
	import { fadeIn } from '$lib/actions/fadeIn';
</script>

<section use:fadeIn id="contact" class="fade-in-section py-24">
	<div class="container mx-auto px-6 md:px-12">
		<div class="relative overflow-hidden rounded-3xl border border-slate-700/40 bg-slate-900/60 p-12 text-center shadow-2xl shadow-sky-900/30">
			<div class="absolute inset-0 bg-gradient-to-br from-sky-500/20 via-emerald-500/10 to-sky-600/20 blur-3xl"></div>
			<div class="relative z-10 space-y-8">
				<p class="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">Let's Build</p>
				<h2 class="text-4xl font-bold text-glow md:text-5xl">Have a vision? Let's design, ship, and iterate together.</h2>
				<p class="main-text-dim mx-auto max-w-2xl text-lg">
					Whether you need a partner to lead a new initiative or augment your team, I'd love to hear more.
					Reach out and let's explore how we can collaborate.
				</p>
				<div class="flex flex-col items-center justify-center gap-4 md:flex-row">
					<a
						href="mailto:john.doe@email.com"
						class="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 via-emerald-500 to-sky-600 px-8 py-3 font-semibold text-white shadow-lg shadow-sky-500/30 transition-transform duration-300 hover:-translate-y-1"
					>
						Email Me
					</a>
					<a
						href="https://www.linkedin.com/"
						target="_blank"
						rel="noreferrer"
						class="inline-flex items-center justify-center rounded-full border border-sky-300/60 px-8 py-3 font-semibold text-sky-100 transition-all duration-300 hover:border-emerald-300/70 hover:text-emerald-100"
					>
						LinkedIn
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
