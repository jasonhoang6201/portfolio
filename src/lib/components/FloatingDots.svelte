<script lang="ts">
	const dots = Array.from({ length: 48 }, (_, idx) => ({
		id: idx,
		size: 4 + Math.random() * 8,
		left: Math.random() * 100,
		top: Math.random() * 100,
		duration: 10 + Math.random() * 14,
		delay: -Math.random() * 20
	}));
</script>

<div class="floating-dots pointer-events-none">
	{#each dots as dot}
		<span
			class="dot"
			style={`width:${dot.size}px;height:${dot.size}px;left:${dot.left}%;top:${dot.top}%;animation-duration:${dot.duration}s;animation-delay:${dot.delay}s;`}
		></span>
	{/each}
</div>

<style>
	.floating-dots {
		position: fixed;
		inset: 0;
		overflow: hidden;
		z-index: 0;
	}

	.dot {
		position: absolute;
		border-radius: 9999px;
		background: radial-gradient(circle, rgba(59, 130, 246, 0.6), rgba(16, 185, 129, 0.2));
		opacity: 0.6;
		filter: blur(0.5px);
		animation-name: drift;
		animation-timing-function: ease-in-out;
		animation-iteration-count: infinite;
	}

	@keyframes drift {
		0% {
			transform: translate3d(0, 0, 0) scale(1);
			opacity: 0.4;
		}
		50% {
			transform: translate3d(15px, -25px, 0) scale(1.2);
			opacity: 0.8;
		}
		100% {
			transform: translate3d(-10px, 20px, 0) scale(1);
			opacity: 0.4;
		}
	}
</style>
