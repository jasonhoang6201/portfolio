<script lang="ts">
	export let progress = 0;

	const clamp = (value: number) => Math.min(100, Math.max(0, value));
</script>

<div
	class="scroll-progress fixed top-1/2 right-6 z-40 hidden -translate-y-1/2 flex-col items-end gap-3 text-xs font-semibold tracking-[0.3em] text-sky-100 uppercase md:flex"
>
	<span>{Math.round(clamp(progress))}%</span>
	<div class="relative mr-4.5 h-56 w-1.5 overflow-hidden rounded-full bg-slate-800/70">
		<div
			class="absolute inset-x-0 top-0 rounded-full bg-gradient-to-b from-sky-500 via-emerald-500 to-sky-600"
			style={`height: ${clamp(progress)}%;`}
		></div>
	</div>
</div>

<style>
	.scroll-progress {
		pointer-events: none;
	}
</style>
