<script lang="ts">
	import AboutSection from '$lib/components/AboutSection.svelte';
	import FloatingDots from '$lib/components/FloatingDots.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import NavBar from '$lib/components/NavBar.svelte';
	import ProjectsSection from '$lib/components/ProjectsSection.svelte';
	import ScrollProgress from '$lib/components/ScrollProgress.svelte';
	import TechStackSection from '$lib/components/TechStackSection.svelte';
	import { onMount } from 'svelte';

	const navLinks = [
		{ label: 'Home', href: 'home' },
		{ label: 'About', href: 'about' },
		{ label: 'Tech Stack', href: 'tech-stack' },
		{ label: 'Projects', href: 'projects' }
	];

	type SectionEntry = { id: string; el: HTMLElement };

	let isScrolled = false;
	let cursorPosition = { x: 0, y: 0 };
	let scrollProgress = 0;
	let activeSection = navLinks[0]?.href ?? '';
	let sectionElements: SectionEntry[] = [];

	onMount(() => {
		if (typeof document !== 'undefined') {
			document.body.classList.add('dark');
		}
		collectSectionElements();
		handleScroll();
	});

	function collectSectionElements() {
		if (typeof document === 'undefined') {
			return;
		}

		sectionElements = navLinks
			.map((link) => {
				const el = document.getElementById(link.href);
				return el ? { id: link.href, el } : null;
			})
			.filter((entry): entry is SectionEntry => Boolean(entry))
			.sort((a, b) => a.el.offsetTop - b.el.offsetTop);
	}

	function handleScroll() {
		if (typeof document === 'undefined' || typeof window === 'undefined') {
			return;
		}
		const doc = document.documentElement;
		const total = doc.scrollHeight - doc.clientHeight;
		const scrolled = window.scrollY;
		scrollProgress = total > 0 ? (scrolled / total) * 100 : 0;
		isScrolled = scrolled > 10;

		if (sectionElements.length === 0) {
			collectSectionElements();
		}

		if (sectionElements.length === 0) {
			activeSection = navLinks[0]?.href ?? '';
			return;
		}

		const viewportPosition = window.scrollY + window.innerHeight * 0.35;
		let currentSection = navLinks[0]?.href ?? activeSection;

		for (const section of sectionElements) {
			const sectionTop = section.el.offsetTop;
			if (viewportPosition >= sectionTop) {
				currentSection = section.id;
			}
		}

		activeSection = currentSection;
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

<svelte:window
	on:scroll={handleScroll}
	on:mousemove={handleMouseMove}
	on:resize={collectSectionElements}
/>

<div
	class="pointer-events-none fixed top-0 left-0 z-0 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl"
	style="transform: translate({cursorPosition.x - 192}px, {cursorPosition.y - 192}px)"
></div>

<div class="relative min-h-screen overflow-hidden antialiased">
	<FloatingDots />
	<NavBar {navLinks} {isScrolled} activeHref={activeSection} />
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
