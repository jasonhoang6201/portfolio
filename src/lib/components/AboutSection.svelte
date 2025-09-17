<script lang="ts">
	import { fadeIn } from '$lib/actions/fadeIn';
</script>

<section use:fadeIn id="about" class="fade-in-section py-24">
	<div class="container mx-auto grid gap-12 px-6 md:grid-cols-2 md:px-12">
		<div class="space-y-6">
			<h2 class="text-4xl font-bold text-glow-blue">Designing for clarity, engineering for scale.</h2>
			<p class="main-text-dim text-lg leading-relaxed">
				I translate complex ideas into intuitive flows and robust architectures. My process balances
				design exploration with disciplined implementation, ensuring every feature ships with purpose
				and polish.
			</p>
			<ul class="space-y-3 text-sky-100/80">
				<li class="flex items-start gap-3">
					<span class="mt-1 h-2 w-2 rounded-full bg-emerald-400"></span>
					<span>End-to-end ownership of product surfaces used by millions.</span>
				</li>
				<li class="flex items-start gap-3">
					<span class="mt-1 h-2 w-2 rounded-full bg-emerald-400"></span>
					<span>Rapid prototyping with modern frameworks to validate ideas fast.</span>
				</li>
				<li class="flex items-start gap-3">
					<span class="mt-1 h-2 w-2 rounded-full bg-emerald-400"></span>
					<span>Collaborative by default—thriving alongside designers, PMs, and stakeholders.</span>
				</li>
			</ul>
		</div>
		<div class="glass-card rounded-2xl p-8">
			<div class="grid gap-6 sm:grid-cols-2">
				<div>
					<p class="text-sm uppercase tracking-wide text-emerald-300/80">Years Experience</p>
					<p class="mt-2 text-3xl font-bold text-white">5+</p>
				</div>
				<div>
					<p class="text-sm uppercase tracking-wide text-emerald-300/80">Products Shipped</p>
					<p class="mt-2 text-3xl font-bold text-white">25+</p>
				</div>
				<div>
					<p class="text-sm uppercase tracking-wide text-emerald-300/80">Specialties</p>
					<p class="mt-2 text-base text-sky-100/90">Design systems, data visualization, realtime UX</p>
				</div>
				<div>
					<p class="text-sm uppercase tracking-wide text-emerald-300/80">Focus</p>
					<p class="mt-2 text-base text-sky-100/90">Human-centered products & performant frontends</p>
				</div>
			</div>
		</div>
	</div>
</section>
