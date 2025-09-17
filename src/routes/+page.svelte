<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	import NavBar from '$lib/components/NavBar.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import AboutSection from '$lib/components/AboutSection.svelte';
	import ProjectsSection from '$lib/components/ProjectsSection.svelte';
	import ExperienceSection from '$lib/components/ExperienceSection.svelte';
	import TestimonialsSection from '$lib/components/TestimonialsSection.svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';

	const isDarkMode = writable(true);

	onMount(() => {
		const savedTheme = localStorage.getItem('theme');
		isDarkMode.set(savedTheme ? savedTheme === 'dark' : true);
	});

	isDarkMode.subscribe((value) => {
		if (typeof window !== 'undefined') {
			if (value) {
				document.body.classList.add('dark');
				localStorage.setItem('theme', 'dark');
			} else {
				document.body.classList.remove('dark');
				localStorage.setItem('theme', 'light');
			}
		}
	});

	const toggleTheme = () => isDarkMode.update((n) => !n);

	let isScrolled = false;
	let cursorPosition = { x: 0, y: 0 };

	const navLinks = ['Overview', 'About', 'Projects', 'Experience', 'Testimonials', 'Contact'];

	const skills = [
		{ name: 'JavaScript', icon: 'javascript/javascript-original.svg' },
		{ name: 'React', icon: 'react/react-original.svg' },
		{ name: 'Node.js', icon: 'nodejs/nodejs-original.svg' },
		{ name: 'Svelte', icon: 'svelte/svelte-original.svg' },
		{ name: 'Tailwind CSS', icon: 'tailwindcss/tailwindcss-plain.svg' },
		{ name: 'Python', icon: 'python/python-original.svg' },
		{ name: 'Docker', icon: 'docker/docker-original.svg' },
		{ name: 'TypeScript', icon: 'typescript/typescript-original.svg' }
	];

	const projectData = [
		{
			title: 'Project Nebula',
			description:
				'A real-time collaborative code editor built with React, WebSockets, and Monaco Editor.',
			tags: ['React', 'Node.js', 'WebSocket']
		},
		{
			title: 'QuantumLeap AI',
			description:
				'An AI-powered data visualization tool that turns complex datasets into interactive charts.',
			tags: ['Python', 'D3.js', 'Flask']
		},
		{
			title: 'DeFi Dashboard',
			description:
				'A decentralized finance portfolio tracker that connects to multiple blockchain networks.',
			tags: ['Next.js', 'Ethers.js', 'Solidity']
		}
	];

	const experienceData = [
		{
			role: 'Senior Frontend Developer',
			company: 'Innovate Inc. | 2022 - Present',
			description:
				'Led the development of a new design system and component library, improving development velocity by 30%.'
		},
		{
			role: 'Software Engineer',
			company: 'Tech Solutions LLC | 2020 - 2022',
			description:
				'Developed and maintained full-stack features for a large-scale e-commerce platform serving millions of users.'
		}
	];

	const testimonialData = [
		{
			quote:
				"John's attention to detail is unmatched. He delivered a pixel-perfect product ahead of schedule and was a pleasure to work with.",
			author: 'Jane Smith, Project Manager at Innovate Inc.'
		},
		{
			quote:
				"An incredibly talented engineer who can tackle any challenge thrown his way. John's problem-solving skills are top-notch.",
			author: 'Mike Johnson, Lead Engineer at Tech Solutions LLC'
		}
	];

	function handleScroll() {
		isScrolled = window.scrollY > 10;
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
	class="pointer-events-none fixed top-0 left-0 z-0 h-96 w-96 rounded-full bg-purple-700/50 blur-3xl"
	style="transform: translate({cursorPosition.x - 192}px, {cursorPosition.y - 192}px)"
></div>

<div class="relative z-10 min-h-screen antialiased">
	<NavBar {navLinks} {isDarkMode} {toggleTheme} {isScrolled} />

	<main class="container mx-auto px-6 py-20 md:px-12">
		<HeroSection />
		<AboutSection {skills} />
		<ProjectsSection {projectData} />
		<ExperienceSection {experienceData} />
		<TestimonialsSection {testimonialData} />
		<ContactSection />
	</main>

	<footer class="py-8 text-center text-slate-500">
		<p>&copy; 2025 John Doe. Designed with inspiration, coded with passion.</p>
	</footer>
</div>
