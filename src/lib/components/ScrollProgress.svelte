<script lang="ts">
	export let progress = 0;

	const clamp = (value: number) => Math.min(100, Math.max(0, value));

	const scrollToPosition = (event: MouseEvent) => {
		if (typeof window === 'undefined' || typeof document === 'undefined') {
			return;
		}

		const track = event.currentTarget as HTMLDivElement | null;
		if (!track) return;

		const rect = track.getBoundingClientRect();
		if (rect.height === 0) return;

		event.preventDefault();

		const offset = event.clientY - rect.top;
		const ratio = clamp((offset / rect.height) * 100) / 100;
		const scrollableHeight = Math.max(
			0,
			document.documentElement.scrollHeight - window.innerHeight
		);

		if (scrollableHeight === 0) return;

		window.scrollTo({
			top: ratio * scrollableHeight,
			behavior: 'smooth'
		});
	};
</script>

<div
	class="scroll-progress fixed top-1/2 right-6 z-40 hidden -translate-y-1/2 flex-col items-end gap-3 text-xs font-semibold tracking-[0.3em] text-sky-100 uppercase md:flex"
	data-aos="fade-left"
	data-aos-delay="500"
	data-aos-duration="800"
>
	<span>{Math.round(clamp(progress))}%</span>
	<div
		on:click={scrollToPosition}
		class="relative mr-4.5 h-56 w-1.5 cursor-pointer overflow-hidden rounded-full bg-slate-800/70"
	>
		<div
			class="absolute inset-x-0 top-0 rounded-full bg-gradient-to-b from-sky-500 via-emerald-500 to-sky-600"
			style={`height: ${clamp(progress)}%;`}
		></div>
	</div>
</div>
