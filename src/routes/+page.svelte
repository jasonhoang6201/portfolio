<script lang="ts">
	import AboutSection from '$lib/components/AboutSection.svelte';
	import FloatingDots from '$lib/components/FloatingDots.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import NavBar from '$lib/components/NavBar.svelte';
	import ProjectsSection from '$lib/components/ProjectsSection.svelte';
	import ScrollProgress from '$lib/components/ScrollProgress.svelte';
	import TechStackSection from '$lib/components/TechStackSection.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		if (typeof document !== 'undefined') {
			document.body.classList.add('dark');
		}
		handleScroll();
	});

	let isScrolled = false;
	let cursorPosition = { x: 0, y: 0 };
	let scrollProgress = 0;

	const navLinks = [
		{ label: 'Home', href: 'home' },
		{ label: 'About', href: 'about' },
		{ label: 'Stack', href: 'tech-stack' },
		{ label: 'Projects', href: 'projects' }
	];

	function handleScroll() {
		if (typeof document === 'undefined') {
			return;
		}
		const doc = document.documentElement;
		const total = doc.scrollHeight - doc.clientHeight;
		const scrolled = window.scrollY;
		scrollProgress = total > 0 ? (scrolled / total) * 100 : 0;
		isScrolled = scrolled > 10;
	}

	function handleMouseMove(event: MouseEvent) {
		cursorPosition = { x: event.clientX, y: event.clientY };
	}
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<svelte:window on:scroll={handleScroll} on:mousemove={handleMouseMove} />

<div
	class="pointer-events-none fixed top-0 left-0 z-0 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl"
	style="transform: translate({cursorPosition.x - 192}px, {cursorPosition.y - 192}px)"
></div>

<div class="relative min-h-screen overflow-hidden antialiased">
	<FloatingDots />
	<NavBar {navLinks} {isScrolled} />
	<ScrollProgress progress={scrollProgress} />

	<div class="relative z-10">
		<main id="home" class="container mx-auto pt-[60px]">
			<HeroSection />
			<AboutSection />
			<TechStackSection />
			<ProjectsSection />
		</main>
	</div>
</div>
