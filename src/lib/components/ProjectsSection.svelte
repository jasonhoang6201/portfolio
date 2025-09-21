<script lang="ts">
	import { base } from '$app/paths';
	import { fadeIn } from '$lib/actions/fadeIn';

	const isExternalLink = (url?: string) => (url ? /^https?:\/\//i.test(url) : false);
	const resolve = (url: string) => {
		const normalized = url.startsWith('/') ? url : `/${url}`;
		return `${base}${normalized}`;
	};

	const formatOrder = (index: number) => String(index + 1).padStart(2, '0');

	const computeHref = (url?: string) => {
		if (!url) return undefined;
		return isExternalLink(url) ? url : resolve(url);
	};

	// Color pool for gradients - using actual color values instead of Tailwind classes
	const colorPool = [
		{ name: 'violet', hex: '#a78bfa', rgb: '167, 139, 250', dark: '#7c3aed', light: '#ddd6fe' },
		{ name: 'purple', hex: '#c084fc', rgb: '192, 132, 252', dark: '#9333ea', light: '#e9d5ff' },
		{ name: 'pink', hex: '#f9a8d4', rgb: '249, 168, 212', dark: '#ec4899', light: '#fce7f3' },
		{ name: 'rose', hex: '#fda4af', rgb: '253, 164, 175', dark: '#f43f5e', light: '#ffe4e6' },
		{ name: 'cyan', hex: '#67e8f9', rgb: '103, 232, 249', dark: '#06b6d4', light: '#cffafe' },
		{ name: 'blue', hex: '#60a5fa', rgb: '96, 165, 250', dark: '#2563eb', light: '#dbeafe' },
		{ name: 'teal', hex: '#5eead4', rgb: '94, 234, 212', dark: '#14b8a6', light: '#ccfbf1' },
		{ name: 'emerald', hex: '#6ee7b7', rgb: '110, 231, 183', dark: '#10b981', light: '#d1fae5' },
		{ name: 'green', hex: '#86efac', rgb: '134, 239, 172', dark: '#22c55e', light: '#dcfce7' },
		{ name: 'lime', hex: '#bef264', rgb: '190, 242, 100', dark: '#84cc16', light: '#ecfccb' },
		{ name: 'orange', hex: '#fdba74', rgb: '253, 186, 116', dark: '#fb923c', light: '#fed7aa' },
		{ name: 'amber', hex: '#fcd34d', rgb: '252, 211, 77', dark: '#f59e0b', light: '#fef3c7' },
		{ name: 'indigo', hex: '#a5b4fc', rgb: '165, 180, 252', dark: '#6366f1', light: '#e0e7ff' },
		{ name: 'sky', hex: '#7dd3fc', rgb: '125, 211, 252', dark: '#0ea5e9', light: '#e0f2fe' }
	];

	// Generate random gradient theme for each card
	function generateCosmicTheme() {
		// Get two random colors for gradient
		const color1 = colorPool[Math.floor(Math.random() * colorPool.length)];
		let color2 = colorPool[Math.floor(Math.random() * colorPool.length)];

		// Ensure we get different colors
		while (color2 === color1) {
			color2 = colorPool[Math.floor(Math.random() * colorPool.length)];
		}

		return {
			primaryGradient: `linear-gradient(135deg, ${color1.hex} 0%, ${color2.hex} 100%)`,
			secondaryGradient: `linear-gradient(135deg, ${color2.hex} 0%, ${color1.hex} 100%)`,
			titleGradientHover: `linear-gradient(135deg, ${color1.dark} 0%, ${color1.hex} 50%, ${color2.dark} 100%)`,
			glowColor: `rgba(${color1.rgb}, 0.4)`,
			glowColorStrong: `rgba(${color1.rgb}, 0.6)`,
			accentColor: color1.hex,
			accentColorDark: color1.dark,
			accentColorLight: color1.light,
			tagColor: `${color1.hex}cc`, // with transparency
			borderColor: `${color1.hex}66` // with transparency
		};
	}

	// Generate themes for each project
	export let projectData: { title: string; description: string; tags: string[]; link?: string }[] =
		[];

	// Pre-generate themes so they're consistent per project
	$: projectThemes = projectData.map(() => generateCosmicTheme());
</script>

<section use:fadeIn id="projects" class="fade-in-section relative isolate overflow-hidden py-24">
	<div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />

	<div class="container mx-auto px-6 md:px-12">
		<div class="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
			<div>
				<p
					class="text-sm font-semibold tracking-[0.35em] text-transparent uppercase"
					style="background: linear-gradient(90deg, #67e8f9 0%, #c084fc 100%); 
						   background-clip: text; 
						   -webkit-background-clip: text;
						   animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;"
				>
					Featured Projects
				</p>
				<h2
					class="text-glow mt-4 text-4xl font-bold text-transparent md:text-5xl"
					style="background: linear-gradient(90deg, #ffffff 0%, #67e8f9 50%, #c084fc 100%);
						   background-clip: text;
						   -webkit-background-clip: text;"
				>
					Designing polished digital products.
				</h2>
			</div>
			<p class="main-text-dim max-w-xl text-lg leading-relaxed text-slate-300">
				A collection of client work and personal ventures where I guided the product vision,
				architected the front end, and shipped dependable experiences.
			</p>
		</div>

		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3" style="z-index: 10; position: relative;">
			{#each projectData as project, index (project.title)}
				{@const theme = projectThemes[index]}
				<svelte:element
					this={project.link ? 'a' : 'article'}
					href={project.link ? computeHref(project.link) : undefined}
					class="cosmic-card group relative isolate flex transform-gpu overflow-hidden rounded-[2rem] border shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)] backdrop-blur-sm transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] hover:-translate-y-4 hover:scale-[1.02] hover:rotate-[1deg]"
					target={project.link && isExternalLink(project.link) ? '_blank' : undefined}
					rel={project.link && isExternalLink(project.link) ? 'noreferrer' : undefined}
					style="--glow-color: {theme.glowColor};
						   --glow-color-strong: {theme.glowColorStrong};
						   --accent-color: {theme.accentColor};
						   --accent-color-dark: {theme.accentColorDark};
						   border-color: rgba(30, 41, 59, 0.4);
						   background: rgba(2, 6, 23, 0.9);"
				>
					<!-- Dynamic gradient border overlay -->
					<span
						class="pointer-events-none absolute inset-0 rounded-[2rem] border-2 opacity-0 transition-all duration-700 ease-out group-hover:opacity-100"
						style="border-color: transparent;
							   background: {theme.primaryGradient};
							   -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
							   -webkit-mask-composite: xor;
							   mask-composite: exclude;
							   box-shadow: 0 0 60px var(--glow-color);"
						aria-hidden="true"
					/>

					<!-- Inner background with subtle gradient -->
					<span
						class="pointer-events-none absolute inset-[2px] rounded-[1.85rem]"
						style="background: linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(2, 6, 23, 0.9) 50%, rgba(15, 23, 42, 0.95) 100%);"
						aria-hidden="true"
					/>

					<!-- Orbiting elements -->
					<span
						class="cosmic-orbit pointer-events-none absolute top-8 right-8 h-1 w-1 rounded-full opacity-0 transition-all duration-1000 ease-out group-hover:opacity-100"
						style="background: {theme.accentColor}cc;
							   animation: orbit 8s linear infinite;"
						aria-hidden="true"
					/>

					<div class="relative z-10 flex h-full flex-col justify-between gap-8 px-8 py-8">
						<div class="space-y-6">
							<div class="flex items-start justify-between gap-6">
								<p
									class="text-[0.65rem] font-bold tracking-[0.45em] uppercase"
									style="color: {theme.tagColor};
										   animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;"
								>
									Project {formatOrder(index)}
								</p>
								<span
									class="inline-flex items-center gap-1 text-sm font-semibold transition-all duration-500 group-hover:scale-105 group-hover:gap-3"
									style="color: {theme.accentColor};"
								>
									<span
										class="h-1 w-8 origin-left scale-x-50 rounded-full transition-all duration-700 group-hover:w-12 group-hover:scale-x-100"
										style="background: {theme.primaryGradient};
											   box-shadow: 0 0 8px {theme.accentColor};"
										aria-hidden="true"
									/>
									<span
										class="text-transparent"
										style="background: {theme.primaryGradient};
											   background-clip: text;
											   -webkit-background-clip: text;">Featured</span
									>
								</span>
							</div>
							<h3
								class="text-2xl font-bold tracking-tight text-balance text-white transition-all duration-500 group-hover:scale-105 group-hover:text-transparent group-hover:brightness-125 group-hover:contrast-125"
								style="--title-gradient-hover: {theme.titleGradientHover};"
							>
								{project.title}
							</h3>
							<p
								class="main-text-dim max-w-[27rem] text-base leading-relaxed text-slate-300/90 transition-colors duration-500 group-hover:text-slate-200"
							>
								{project.description}
							</p>
						</div>
						<div class="space-y-5">
							<div class="flex flex-wrap gap-2.5">
								{#each project.tags as tag, tagIndex (tag + tagIndex)}
									<span
										class="cosmic-tag inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[0.65rem] font-bold tracking-[0.25em] uppercase backdrop-blur-sm transition-all duration-500 group-hover:scale-105"
										style="animation-delay: {tagIndex * 100}ms;
											   border-color: {theme.borderColor};
											   color: {theme.tagColor};
											   background: linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.8) 100%);
											   --tag-hover-border: {theme.accentColor}99;
											   --tag-hover-bg: linear-gradient(135deg, {theme.accentColor}1a 0%, {theme.accentColor}0d 100%);
											   --tag-hover-color: {theme.accentColor};
											   --tag-hover-shadow: 0 0 15px {theme.glowColor};"
									>
										<span
											class="inline-block h-1.5 w-1.5 rounded-full"
											style="background: {theme.accentColor};
												   animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;"
											aria-hidden="true"
										/>
										{tag}
									</span>
								{/each}
							</div>
						</div>
					</div>
				</svelte:element>
			{/each}
		</div>
	</div>
</section>

<style>
	@keyframes cosmicPulse {
		0%,
		100% {
			opacity: 0.4;
			transform: scale(0.8);
			box-shadow: 0 0 20px currentColor;
		}
		50% {
			opacity: 1;
			transform: scale(1.3);
			box-shadow:
				0 0 40px currentColor,
				0 0 60px currentColor;
		}
	}

	@keyframes orbit {
		0% {
			transform: rotate(0deg) translateX(20px) rotate(0deg);
		}
		100% {
			transform: rotate(360deg) translateX(20px) rotate(-360deg);
		}
	}

	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.5;
		}
	}

	.cosmic-card {
		background:
			radial-gradient(circle at 20% 20%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
			radial-gradient(circle at 80% 80%, rgba(255, 119, 198, 0.1) 0%, transparent 50%),
			radial-gradient(circle at 40% 40%, rgba(99, 179, 237, 0.1) 0%, transparent 50%);
	}

	.cosmic-card:hover {
		box-shadow:
			0 12px 30px -10px var(--glow-color),
			0 0 40px -20px var(--glow-color),
			inset 0 1px 0 rgba(255, 255, 255, 0.1);
	}

	.cosmic-card:hover h3 {
		background: var(--title-gradient-hover);
		background-clip: text;
		-webkit-background-clip: text;
	}

	.cosmic-card:hover .cosmic-tag {
		border-color: var(--tag-hover-border);
		background: var(--tag-hover-bg);
		color: var(--tag-hover-color);
		box-shadow: var(--tag-hover-shadow);
	}

	.cosmic-beacon {
		animation-play-state: paused;
	}

	.group:hover .cosmic-beacon {
		animation-play-state: running;
	}

	.cosmic-orbit {
		animation-play-state: paused;
	}

	.group:hover .cosmic-orbit {
		animation-play-state: running;
	}
</style>
