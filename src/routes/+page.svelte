<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	import NavBar from '$lib/components/NavBar.svelte';
	import FloatingDots from '$lib/components/FloatingDots.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import AboutSection from '$lib/components/AboutSection.svelte';
	import ServicesSection from '$lib/components/ServicesSection.svelte';
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

	const navLinks = [
		{ label: 'Home', href: 'home' },
		{ label: 'About', href: 'about' },
		{ label: 'Services', href: 'services' },
		{ label: 'Experience', href: 'experience' },
		{ label: 'Projects', href: 'projects' },
		{ label: 'Testimonials', href: 'testimonials' },
		{ label: 'Contact', href: 'contact' }
	];

	const techStack = [
		{ name: 'JavaScript', icon: 'javascript/javascript-original.svg' },
		{ name: 'React', icon: 'react/react-original.svg' },
		{ name: 'Node.js', icon: 'nodejs/nodejs-original.svg' },
		{ name: 'Svelte', icon: 'svelte/svelte-original.svg' },
		{ name: 'Tailwind CSS', icon: 'tailwindcss/tailwindcss-plain.svg' },
		{ name: 'Python', icon: 'python/python-original.svg' },
		{ name: 'Docker', icon: 'docker/docker-original.svg' },
		{ name: 'TypeScript', icon: 'typescript/typescript-original.svg' }
	];

	const services = [
		{
			title: 'Product Engineering',
			description: 'End-to-end ownership—from prototypes to scalable, maintainable frontends.',
			icon: '🚀'
		},
		{
			title: 'Design Systems',
			description: 'Accessible component libraries and design tokens that accelerate teams.',
			icon: '🎨'
		},
		{
			title: 'Data Visualization',
			description: 'Transforming complex datasets into intuitive, decision-ready insights.',
			icon: '📊'
		}
	];

	const projectData = [
		{
			title: 'Project Nebula',
			description:
				'A collaborative code editor with realtime presence, conflict resolution, and Monaco-driven experiences.',
			tags: ['React', 'Node.js', 'WebSocket'],
			link: '#'
		},
		{
			title: 'QuantumLeap AI',
			description:
				'An AI-powered visualization suite translating ML outputs into interactive storytelling dashboards.',
			tags: ['Python', 'D3.js', 'Flask'],
			link: '#'
		},
		{
			title: 'DeFi Dashboard',
			description:
				'A multi-chain hub surfacing wallet analytics, yield strategies, and governance workflows.',
			tags: ['Next.js', 'Ethers.js', 'Solidity'],
			link: '#'
		}
	];

	const experienceData = [
		{
			role: 'Senior Frontend Developer',
			company: 'Innovate Inc.',
			timeframe: '2022 — Present',
			description:
				'Leading the evolution of a unified design system, uplifting build velocity by 30% and enabling multi-brand experiences.'
		},
		{
			role: 'Software Engineer',
			company: 'Tech Solutions LLC',
			timeframe: '2020 — 2022',
			description:
				'Drove full-stack feature delivery for a global e-commerce platform serving 5M+ monthly users.'
		}
	];

	const testimonialData = [
		{
			quote:
				"John's attention to detail is unmatched. He delivered a pixel-perfect product ahead of schedule and was a pleasure to work with.",
			author: 'Jane Smith',
			role: 'Product Manager · Innovate Inc.'
		},
		{
			quote:
				"An incredibly talented engineer who can tackle any challenge thrown his way. John's problem-solving skills are top-notch.",
			author: 'Mike Johnson',
			role: 'Lead Engineer · Tech Solutions LLC'
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
	class="pointer-events-none fixed top-0 left-0 z-0 h-96 w-96 rounded-full bg-sky-500/40 blur-3xl"
	style="transform: translate({cursorPosition.x - 192}px, {cursorPosition.y - 192}px)"
></div>

<div class="relative min-h-screen overflow-hidden antialiased">
	<FloatingDots />
	<NavBar {navLinks} {isDarkMode} {toggleTheme} {isScrolled} />

	<div class="relative z-10">
		<main class="container mx-auto px-6 pb-32 pt-24 md:px-12">
			<HeroSection techStack={techStack} />
			<AboutSection />
			<ServicesSection {services} />
			<ExperienceSection {experienceData} />
			<ProjectsSection {projectData} />
			<TestimonialsSection {testimonialData} />
			<ContactSection />
		</main>

		<footer class="py-8 text-center text-slate-400">
			<p>&copy; 2025 John Doe. Designed with clarity, engineered with care.</p>
		</footer>
	</div>
</div>
