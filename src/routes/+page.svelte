<script lang="ts">
	import AboutSection from '$lib/components/AboutSection.svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';
	import EducationSection from '$lib/components/EducationSection.svelte';
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
		{ label: 'Experience', href: 'experience' },
		{ label: 'Projects', href: 'projects' },
		{ label: 'Education', href: 'education' },
		{ label: 'Contact', href: 'contact' }
	];

	const projectData = [
		{
			title: 'Accumulus AI Flight Operations',
			description:
				'Unified airline dashboards and mobile tooling delivering live operational context for pilots and crews.',
			tags: ['React', 'React Native', 'AWS', 'Realtime'],
			link: undefined
		},
		{
			title: 'Optimal Vest Wealth Platform',
			description:
				'Fintech backend and CRM that combine AI-guided investment chatbots with portfolio insights.',
			tags: ['NestJS', 'MongoDB', 'AI', 'CRM'],
			link: undefined
		},
		{
			title: 'JDI Central Marketplace',
			description:
				'Web marketplace framework connecting freelancers, agencies, and employers from day zero.',
			tags: ['Next.js', 'Design System', 'Mentorship'],
			link: undefined
		},
		{
			title: 'Lylo Car Rentals',
			description:
				'Mobile marketplace for reserving rental cars with on-demand handoff and logistics tracking.',
			tags: ['React Native', 'Firebase', 'CI/CD'],
			link: undefined
		},
		{
			title: 'Blimobil Automotive Commerce',
			description:
				'Cross-platform buying/selling suite for dealers including CRM workflows and secure deployments.',
			tags: ['React Native', 'Stripe', 'DevOps'],
			link: undefined
		},
		{
			title: 'ReferReach Community Referrals',
			description:
				'Cross-platform app powering community referrals with admin analytics and feature experiments.',
			tags: ['React Native', 'Firebase', 'Analytics'],
			link: undefined
		},
		{
			title: 'Simply Wealth Advisor Tools',
			description:
				'Advisor dashboard delivering portfolio calculations, dynamic visualizations, and performance upgrades.',
			tags: ['Angular', 'NestJS', 'Charts'],
			link: undefined
		}
	];

	const education = {
		institution: 'University of Science',
		degree: 'Bachelor of Software Engineering',
		timeframe: 'Graduated November 2023',
		gpa: '3.39 / 4.0',
		summary:
			'A solid academic foundation paired with industry projects, strengthening collaboration, task delegation, and deadline management.',
		highlights: [
			'Participated in weekly faculty syncs to align on roadmap and deliverables.',
			'Built structured workflows for testing, debugging, and shipping features.',
			'Produced technical documentation and presentations in English.'
		],
		project: {
			name: 'Job Marketplace Platform',
			description:
				'A web portal matching students with company opportunities using automated assessments.',
			bullets: [
				'Engineered role-based dashboards for students, companies, and administrators.',
				'Implemented interview question banks (coding, writing, multiple-choice) that feed into job applications.',
				'Enabled companies to require assessments before applications and track candidate progress.'
			]
		}
	};

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
		<main class="container mx-auto pt-[60px] pb-32">
			<HeroSection />
			<AboutSection />
			<TechStackSection />
			<ProjectsSection {projectData} />
			<EducationSection {education} />
			<ContactSection />
		</main>
	</div>
</div>
