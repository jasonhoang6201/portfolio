<script lang="ts">
	import { fade } from 'svelte/transition';

	export let name: string;
	export let iconSrc: string;
</script>

<div
	class="group relative flex flex-col items-center gap-4 rounded-2xl border border-slate-800/60 bg-slate-900/40 p-4 text-center transition-transform duration-300 hover:-translate-y-2 hover:border-emerald-400/70 hover:bg-slate-900/70"
	in:fade={{ duration: 200 }}
>
	<div
		class="absolute -top-12 right-1/2 h-24 w-24 translate-x-1/2 rounded-full bg-gradient-to-br from-sky-500/30 via-emerald-500/25 to-sky-600/20 blur-3xl transition-opacity duration-300 group-hover:opacity-90"
		aria-hidden="true"
	></div>
	<img src={iconSrc} alt={name} class="relative z-10 h-6 w-6 object-contain" loading="lazy" />
	<p class="relative z-10 text-[12px] font-semibold text-white">{name}</p>
</div>
