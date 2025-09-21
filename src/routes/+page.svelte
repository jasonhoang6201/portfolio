<script lang="ts">
	import AboutSection from '$lib/components/AboutSection.svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';
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
		{ label: 'Projects', href: 'projects' },
		{ label: 'Contact', href: 'contact' }
	];

	const projectData = [
		{
			title: 'Accumulus AI',
			description:
				'Real-time aviation platform used by pilots and operations staff, centralizing flight data and improving decision-making efficiency.',
			tags: ['React Native', 'React', 'Mapbox', 'SQLite', 'Firebase', 'GCP', 'OpenAI']
		},
		{
			title: 'TechJDI / TalentJDI',
			description:
				'Customizable landing pages for marketing campaigns, enabling non-technical staff to update content and layouts independently.',
			tags: ['Payload CMS', 'Next.js']
		},
		{
			title: 'Optimal Vest',
			description:
				'Backend services powering an AI-driven investment chatbot, enabling clients to manage portfolios with personalized guidance.',
			tags: ['NestJS', 'MongoDB', 'Supabase', 'OpenAI']
		},
		{
			title: 'JDI Central',
			description:
				'Web-based marketplace connecting freelancers, agencies, and employers from project inception.',
			tags: ['Next.js', 'EC2']
		},
		{
			title: 'Lylo',
			description: 'Mobile rental platform enabling users to search, book, and rent cars.',
			tags: ['React Native', 'Stripe', 'Google Maps']
		},
		{
			title: 'Blimobil',
			description:
				'Online marketplace enabling buyers to purchase used cars from dealers and dealers to acquire new cars from suppliers.',
			tags: ['Next.js', 'React', 'React Native', 'EC2']
		},
		{
			title: 'ReferReach',
			description:
				'Mobile and web social platform for matching jobs and talent, paired with a client CRM that tracks engagement trends to guide future decisions.',
			tags: ['React', 'React Native', 'Redux', 'Mixpanel']
		},
		{
			title: 'Simply Wealth',
			description:
				'Financial advisor platform with automated portfolio calculations and interactive charts.',
			tags: ['React', 'Ant Design', 'Rechart']
		},
		{
			title: 'BAS',
			description:
				'Berthing Aid System web app for ports that ingests sensor data to monitor vessels arriving or departing and visualize each step of the docking process.',
			tags: ['React', 'MUI', 'Konva']
		},
		{
			title: 'Phuong Anh Jewelry',
			description:
				'E-commerce jewelry platform with an admin portal for sellers to manage inventory and a buyer app to browse, chat, order, and track purchases end to end.',
			tags: ['Next.js', 'Ant Design', 'Tailwind CSS', 'Agora SDK']
		},
		{
			title: 'Education Web App',
			description:
				'Education app where teachers craft tests and students complete them online, submit answers, and receive grades.',
			tags: ['React']
		}
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
		<main id="home" class="container mx-auto pt-[60px] pb-32">
			<HeroSection />
			<AboutSection />
			<TechStackSection />
			<ProjectsSection {projectData} />
			<ContactSection />
		</main>
	</div>
</div>
