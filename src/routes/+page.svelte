<script lang="ts">
	import { onMount } from 'svelte';
	import NavBar from '$lib/components/NavBar.svelte';
	import FloatingDots from '$lib/components/FloatingDots.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import AboutSection from '$lib/components/AboutSection.svelte';
	import SkillsSection from '$lib/components/SkillsSection.svelte';
	import ProjectsSection from '$lib/components/ProjectsSection.svelte';
	import ExperienceSection from '$lib/components/ExperienceSection.svelte';
	import EducationSection from '$lib/components/EducationSection.svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';
	import ScrollProgress from '$lib/components/ScrollProgress.svelte';

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
		{ label: 'Skills', href: 'skills' },
		{ label: 'Experience', href: 'experience' },
		{ label: 'Projects', href: 'projects' },
		{ label: 'Education', href: 'education' },
		{ label: 'Contact', href: 'contact' }
	];

	const techStack = [
		{ name: 'TypeScript', icon: 'typescript/typescript-original.svg' },
		{ name: 'React', icon: 'react/react-original.svg' },
		{ name: 'Next.js', icon: 'nextjs/nextjs-original.svg' },
		{ name: 'React Native', icon: 'react/react-original.svg' },
		{ name: 'Angular', icon: 'angularjs/angularjs-original.svg' },
		{ name: 'NestJS', icon: 'nestjs/nestjs-plain.svg' },
		{ name: 'Express.js', icon: 'express/express-original.svg' },
		{ name: 'MongoDB', icon: 'mongodb/mongodb-original.svg' },
		{ name: 'PostgreSQL', icon: 'postgresql/postgresql-original.svg' },
		{ name: 'AWS', icon: 'amazonwebservices/amazonwebservices-original.svg' },
		{ name: 'Firebase', icon: 'firebase/firebase-plain.svg' },
		{ name: 'Stripe', icon: 'stripe/stripe-original.svg' }
	];

	const skills = [
		{
			title: 'Frontend Engineering',
			description: 'Crafting responsive web and mobile interfaces across modern ecosystems.',
			icon: '🖥️',
			points: [
				'HTML, CSS, JavaScript, TypeScript fundamentals',
				'React, Next.js, React Native, Angular experience',
				'Focus on accessible, maintainable UI systems'
			]
		},
		{
			title: 'Backend & Architecture',
			description: 'Designing APIs and services that keep pace with product growth.',
			icon: '🛠️',
			points: [
				'NestJS, Express.js services with MongoDB & SQL stores',
				'Integration with payment providers and AI assistants',
				'Experience shaping data models and system flows'
			]
		},
		{
			title: 'Cloud Delivery & Collaboration',
			description: 'Operational excellence from infrastructure to team process.',
			icon: '☁️',
			points: [
				'AWS (S3, EC2), GCP, Firebase deployments and monitoring',
				'Stripe, Google/Apple Payment integrations',
				'Agile/Scrum practice, cross-functional collaboration, Git workflows'
			]
		}
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

	const experienceData = [
		{
			role: 'Software Developer',
			company: 'TechJDI · Accumulus AI',
			timeframe: 'Jun 2022 — Sep 2025',
			bullets: [
				'Helped ship web and mobile apps surfacing real-time operational context for airline teams.',
				'Partnered with designers and PMs to refine prototypes into production-ready experiences.',
				'Resolved performance pain points and stabilized critical user journeys.',
				'Activated stakeholder insights to iterate on usability and drive product improvements.'
			]
		},
		{
			role: 'Software Developer',
			company: 'TechJDI · TalentJDI',
			timeframe: 'Jun 2022 — Sep 2025',
			bullets: [
				'Built customizable landing pages that marketing teams could update without engineering support.',
				'Maintained and monitored production servers for high uptime.',
				'Shipped fast-moving campaign features on aggressive timelines.'
			]
		},
		{
			role: 'Fullstack Developer',
			company: 'Optimal Vest',
			timeframe: '2023 — 2024',
			bullets: [
				'Implemented backend services and data models powering AI-guided investment insights.',
				'Developed CRM tooling for clients to manage portfolio statistics and calculations.'
			]
		},
		{
			role: 'Frontend Lead',
			company: 'JDI Central',
			timeframe: '2023',
			bullets: [
				'Established the project’s front-end foundations for a freelancer/employer marketplace.',
				'Mentored interns, reviewing implementation and unblocking delivery.'
			]
		},
		{
			role: 'Software Developer',
			company: 'Lylo',
			timeframe: '2023',
			bullets: [
				'Launched a rental car marketplace with location-based booking experiences.',
				'Set up repos, environments, and CI/CD flows; participated in client demos to align on scope.'
			]
		},
		{
			role: 'Software Developer',
			company: 'Blimobil',
			timeframe: '2023',
			bullets: [
				'Delivered mobile experiences for buyers and dealers in the used car marketplace.',
				'Configured server environments, SSL, and CRM features for order management.'
			]
		},
		{
			role: 'Software Developer',
			company: 'ReferReach',
			timeframe: '2023',
			bullets: [
				'Enhanced cross-platform apps that fuel community-based referrals.',
				'Implemented CRM analytics so clients could track user behavior and engagement.'
			]
		},
		{
			role: 'Software Developer',
			company: 'Simply Wealth',
			timeframe: '2023',
			bullets: [
				'Built advisor tooling with automated calculations and interactive financial charts.',
				'Optimized performance and demoed updates through agile rhythms.'
			]
		},
		{
			role: 'Frontend Developer Intern',
			company: 'Phuong Nam Digital',
			timeframe: 'Apr 2022 — Jun 2022',
			bullets: [
				'Converted Photoshop designs into responsive landing pages with vanilla HTML, CSS, JS.',
				'Shipped an education web app integrating backend APIs while following mentor guidance.'
			]
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
	class="pointer-events-none fixed top-0 left-0 z-0 h-96 w-96 rounded-full bg-sky-500/40 blur-3xl"
	style="transform: translate({cursorPosition.x - 192}px, {cursorPosition.y - 192}px)"
></div>

<div class="relative min-h-screen overflow-hidden antialiased">
	<FloatingDots />
	<NavBar {navLinks} {isScrolled} />
	<ScrollProgress progress={scrollProgress} />

	<div class="relative z-10">
		<main class="container mx-auto px-6 pt-[60px] pb-32 md:px-12">
			<HeroSection />
			<AboutSection />
			<SkillsSection {skills} />
			<ExperienceSection {experienceData} />
			<ProjectsSection {projectData} />
			<EducationSection {education} />
			<ContactSection />
		</main>

		<footer class="py-8 text-center text-slate-400">
			<p>&copy; 2025 Hoàng Thiện Nhân. Designed with clarity, engineered with care.</p>
		</footer>
	</div>
</div>
