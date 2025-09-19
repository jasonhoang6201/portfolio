<script lang="ts">
	import { fade } from 'svelte/transition';

	export let name: string;
	export let iconSrc: string;
</script>

<div
	class="card-shell group relative flex flex-col items-center gap-4 overflow-hidden rounded-3xl border border-slate-800/50 bg-slate-900/45 p-5 text-center shadow-[0_18px_44px_rgba(8,47,73,0.35)] backdrop-blur-xl transition-all duration-500 hover:bg-slate-900/60 hover:shadow-[0_30px_72px_rgba(16,185,129,0.25)]"
	in:fade={{ duration: 200 }}
>
	<div
		class="pointer-events-none absolute -top-16 right-1/2 h-32 w-32 translate-x-1/2 rounded-full bg-gradient-to-br from-emerald-400/20 via-sky-500/10 to-transparent blur-3xl transition-opacity duration-500 group-hover:opacity-100"
		aria-hidden="true"
	></div>
	<div class="relative flex h-12 w-12 items-center justify-center">
		<div
			class="icon-shell relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl border border-slate-200/20 bg-gradient-to-br from-slate-900/70 via-slate-800/40 to-emerald-400/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-8px_18px_rgba(15,23,42,0.5),0_16px_28px_rgba(14,165,233,0.18)] backdrop-blur-xl transition-transform duration-500 group-hover:scale-[1.2]"
		>
			<span
				class="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4),transparent_55%)] opacity-80"
				aria-hidden="true"
			></span>
			<img
				src={iconSrc}
				alt={name}
				class="relative z-10 h-7 w-7 object-contain drop-shadow-[0_6px_12px_rgba(15,118,110,0.25)]"
				loading="lazy"
			/>
		</div>
	</div>
	<p class="relative z-10 text-[12px] font-semibold tracking-wide text-slate-100">{name}</p>
</div>

<style>
	.card-shell {
		animation: bubble-pop 560ms cubic-bezier(0.33, 1, 0.68, 1) both;
	}

	@keyframes bubble-pop {
		0% {
			opacity: 0;
			transform: scale(0.65) translateY(12px);
		}
		100% {
			opacity: 1;
			transform: scale(1) translateY(0);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.card-shell {
			animation: none;
		}
	}
</style>
