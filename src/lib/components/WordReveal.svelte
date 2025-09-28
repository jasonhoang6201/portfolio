<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	export let text: string;
	export let containerClassName = 'mb-12 flex justify-center';
	export let textClassName = '';
	export let stagger = 90; // ms between character animations

	let container: HTMLDivElement | null = null;
	let observer: IntersectionObserver | null = null;
	let isVisible = false;

	$: characters = [...text];

	onMount(() => {
		if (!container) return;

		observer = new IntersectionObserver(
			(entries) => {
				const [entry] = entries;
				if (!entry) return;

				isVisible = entry.isIntersecting;
			},
			{ threshold: 0.3 }
		);

		observer.observe(container);

		return () => observer?.disconnect();
	});

	onDestroy(() => observer?.disconnect());
</script>

<div class={containerClassName}>
	<div
		bind:this={container}
		class="character-reveal inline-block leading-relaxed"
		aria-label={text}
	>
		<span class="sr-only">{text}</span>
		{#each characters as character, index (index)}
			<span
				aria-hidden="true"
				class={`character text-4xl font-bold ${textClassName}`}
				class:visible={isVisible}
				style={`--delay: ${index * stagger}ms`}
			>
				{character === ' ' ? '\u00A0' : character}
			</span>
		{/each}
	</div>
</div>

<style>
	.character {
		display: inline-block;
		transform: translateY(1.25rem);
		opacity: 0;
		transition-property: transform, opacity;
		transition-duration: 0.6s;
		transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
		will-change: transform, opacity;
	}

	.character.visible {
		transform: translateY(0);
		opacity: 1;
		transition-delay: var(--delay);
	}
</style>
