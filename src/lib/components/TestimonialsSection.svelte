<script lang="ts">
	import { fadeIn } from '$lib/actions/fadeIn';

	export let testimonialData: { quote: string; author: string }[] = [];
</script>

<section use:fadeIn id="testimonials" class="fade-in-section py-24">
	<h2 class="mb-12 text-center text-4xl font-bold">
		<span class="text-glow">What Others Say</span>
	</h2>
	<div class="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
		{#each testimonialData as item}
			<div class="glass-card rounded-xl p-6">
				<p class="main-text-dim mb-4 italic">"{item.quote}"</p>
				<p class="text-right font-semibold text-purple-400">- {item.author}</p>
			</div>
		{/each}
	</div>
</section>
