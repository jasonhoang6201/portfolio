<script lang="ts">
	import { fadeIn } from '$lib/actions/fadeIn';
</script>

<section use:fadeIn id="contact" class="fade-in-section py-24">
	<div class="container mx-auto px-6 md:px-12">
		<div
			class="relative overflow-hidden rounded-3xl border border-slate-700/40 bg-slate-900/60 p-12 text-center shadow-2xl shadow-sky-900/30"
		>
			<div
				class="absolute inset-0 bg-gradient-to-br from-sky-500/20 via-emerald-500/10 to-sky-600/20 blur-3xl"
			></div>
			<div class="relative z-10 space-y-8">
				<p class="text-sm font-semibold tracking-[0.3em] text-emerald-400 uppercase">Let's Build</p>
				<h2 class="text-glow text-4xl font-bold md:text-5xl">
					Ready to rally around your next product milestone.
				</h2>
				<p class="main-text-dim mx-auto max-w-2xl text-lg">
					If you’re looking for a fullstack partner who can iterate fast, keep communication clear,
					and grow with the work, I’d love to connect.
				</p>
				<div class="flex flex-col items-center justify-center gap-4 md:flex-row">
					<a
						href="mailto:jasonhoang6201@gmail.com"
						class="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-emerald-500 to-sky-600 px-8 py-3 font-semibold text-white shadow-lg shadow-sky-500/30 transition-transform duration-300 hover:-translate-y-1"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
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
						Email Me
					</a>
					<a
						href="tel:+84919881497"
						class="inline-flex items-center justify-center gap-2 rounded-full border border-sky-300/60 px-8 py-3 font-semibold text-sky-100 transition-all duration-300 hover:border-emerald-300/70 hover:text-emerald-100"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
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
						Call Me
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
