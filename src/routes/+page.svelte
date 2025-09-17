<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	// --- State Management & Data ---

	// Theme store
	const isDarkMode = writable(true); // Default to dark
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

	// UI State
	let isScrolled = false;
	let cursorPosition = { x: 0, y: 0 };

	// --- Data for sections ---
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

	// --- Svelte Actions & Event Handlers ---

	// Action for fade-in animation on scroll
	function fadeIn(node: any) {
		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				node.classList.add('is-visible');
				observer.unobserve(node);
			}
		});
		observer.observe(node);

		return {
			destroy() {
				observer.disconnect();
			}
		};
	}

	function handleScroll() {
		isScrolled = window.scrollY > 10;
	}

	function handleMouseMove(event: any) {
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

<!-- Cursor Glow Effect -->
<div
	class="pointer-events-none fixed top-0 left-0 z-0 h-96 w-96 rounded-full bg-purple-700/50 blur-3xl"
	style="transform: translate({cursorPosition.x - 192}px, {cursorPosition.y - 192}px)"
></div>

<div class="relative z-10 min-h-screen antialiased">
	<!-- Navigation Bar -->
	<nav
		class="fixed top-0 right-0 left-0 z-50 transition-all duration-300"
		class:glass-card={isScrolled}
	>
		<div class="container mx-auto flex items-center justify-between px-6 py-4 md:px-12">
			<a href="#overview" class="text-glow text-xl font-bold">JD</a>
			<div class="hidden items-center space-x-8 md:flex">
				{#each navLinks as link}
					<a href="#{link.toLowerCase()}" class="link-text transition-colors duration-300">{link}</a
					>
				{/each}
				<button on:click={toggleTheme} class="theme-toggle" aria-label="Toggle theme">
					{#if $isDarkMode}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"
							></line><line x1="12" y1="21" x2="12" y2="23"></line><line
								x1="4.22"
								y1="4.22"
								x2="5.64"
								y2="5.64"
							></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line
								x1="1"
								y1="12"
								x2="3"
								y2="12"
							></line><line x1="21" y1="12" x2="23" y2="12"></line><line
								x1="4.22"
								y1="19.78"
								x2="5.64"
								y2="18.36"
							></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg
						>
					{:else}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg
						>
					{/if}
				</button>
			</div>
		</div>
	</nav>

	<main class="container mx-auto px-6 py-20 md:px-12">
		<!-- Header Section -->
		<section
			use:fadeIn
			id="overview"
			class="fade-in-section flex min-h-screen flex-col items-center justify-center text-center"
		>
			<h1 class="mb-4 text-5xl font-bold md:text-7xl"><span class="text-glow">John Doe</span></h1>
			<h2 class="animated-gradient-text mb-6 text-2xl font-semibold md:text-4xl">
				Creative Software Engineer
			</h2>
			<p class="main-text-dim max-w-3xl text-lg">
				I build immersive and beautiful web applications with a focus on user experience and
				cutting-edge technology. Currently exploring the realms of AI and decentralized finance.
			</p>
			<div class="mt-8 flex space-x-4">
				<a
					href="#projects"
					class="rounded-lg bg-indigo-600/80 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-indigo-500/80"
					>View Projects</a
				>
				<a
					href="#contact"
					class="rounded-lg bg-slate-700/50 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-slate-600/50"
					>Contact Me</a
				>
			</div>
		</section>

		<!-- About Section -->
		<section use:fadeIn id="about" class="fade-in-section py-24">
			<h2 class="mb-12 text-center text-4xl font-bold">
				<span class="text-glow-blue">About & Skills</span>
			</h2>
			<div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-5">
				<div class="lg:col-span-2">
					<img
						src="https://placehold.co/400x400/0A0A0A/E2E8F0?text=JD"
						alt="John Doe Portrait"
						class="mx-auto h-64 w-64 max-w-sm rounded-full shadow-2xl shadow-purple-500/10 lg:h-auto lg:w-full"
					/>
				</div>
				<div class="lg:col-span-3">
					<p class="main-text-dim mb-8 text-lg leading-relaxed">
						Hello! I'm John, a passionate developer with over 5 years of experience... My journey in
						tech started with a simple "Hello, World!" and has since evolved into a deep passion for
						crafting elegant solutions to complex problems. I thrive in collaborative environments
						and am always eager to learn new things.
					</p>
					<div class="flex flex-wrap justify-center gap-4 lg:justify-start">
						{#each skills as skill}
							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/{skill.icon}"
								alt={skill.name}
								class="skill-icon h-12 w-12"
								title={skill.name}
							/>
						{/each}
					</div>
				</div>
			</div>
		</section>

		<!-- Projects Section -->
		<section use:fadeIn id="projects" class="fade-in-section py-24">
			<h2 class="mb-12 text-center text-4xl font-bold">
				<span class="text-glow">Featured Projects</span>
			</h2>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each projectData as project}
					<div class="glass-card rounded-xl p-6">
						<h3 class="mb-2 text-2xl font-bold text-purple-400">{project.title}</h3>
						<p class="main-text-dim mb-4">{project.description}</p>
						<div class="flex flex-wrap gap-2 text-sm">
							{#each project.tags as tag}
								<span class="rounded bg-slate-700/50 px-2 py-1">{tag}</span>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</section>

		<!-- Experience Section -->
		<section use:fadeIn id="experience" class="fade-in-section py-24">
			<h2 class="mb-12 text-center text-4xl font-bold">
				<span class="text-glow-blue">Work Experience</span>
			</h2>
			<div class="mx-auto max-w-3xl">
				{#each experienceData as job}
					<div class="group glass-card relative mb-8 rounded-xl p-6">
						<div
							class="absolute top-6 -left-4 h-full w-px bg-slate-700 transition-all duration-300 group-hover:bg-indigo-500"
						></div>
						<div
							class="absolute top-5 -left-5 h-3 w-3 rounded-full bg-slate-700 transition-all duration-300 group-hover:scale-125 group-hover:bg-indigo-500"
						></div>
						<h3 class="text-xl font-bold text-blue-400">{job.role}</h3>
						<p class="main-text-dim mb-1 font-semibold">{job.company}</p>
						<p class="main-text-dim">{job.description}</p>
					</div>
				{/each}
			</div>
		</section>

		<!-- Testimonials Section -->
		<section use:fadeIn id="testimonials" class="fade-in-section py-24">
			<h2 class="mb-12 text-center text-4xl font-bold">
				<span class="text-glow">What Others Say</span>
			</h2>
			<div class="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
				{#each testimonialData as item}
					<div class="glass-card rounded-xl p-6">
						<p class="main-text-dim mb-4 italic">"{item.quote}"</p>
						<p class="text-right font-semibold text-purple-400">- {item.author}</p>
					</div>
				{/each}
			</div>
		</section>

		<!-- Contact Section -->
		<section use:fadeIn id="contact" class="fade-in-section py-24">
			<h2 class="mb-12 text-center text-4xl font-bold">
				<span class="text-glow-blue">Get In Touch</span>
			</h2>
			<div class="glass-card mx-auto max-w-2xl rounded-xl p-8">
				<form>
					<div class="mb-4">
						<label for="name" class="main-text-dim mb-2 block">Name</label>
						<input type="text" id="name" class="form-input" />
					</div>
					<div class="mb-4">
						<label for="email" class="main-text-dim mb-2 block">Email</label>
						<input type="email" id="email" class="form-input" />
					</div>
					<div class="mb-6">
						<label for="message" class="main-text-dim mb-2 block">Message</label>
						<textarea id="message" rows="5" class="form-input"></textarea>
					</div>
					<button
						type="submit"
						class="w-full rounded-lg bg-indigo-600/80 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-indigo-500/80"
					>
						Send Message
					</button>
				</form>
			</div>
		</section>
	</main>

	<footer class="py-8 text-center text-slate-500">
		<p>&copy; 2025 John Doe. Designed with inspiration, coded with passion.</p>
	</footer>
</div>

<style>
	/* Custom styles for the futuristic UI */
	:root {
		/* Light Theme */
		--bg-color: #f1f5f9; /* slate-100 */
		--text-color: #0f172a; /* slate-900 */
		--text-dim-color: #475569; /* slate-600 */
		--link-text-color: #334155; /* slate-700 */
		--primary-glow-color-1: rgba(124, 58, 237, 0.4);
		--primary-glow-color-2: rgba(124, 58, 237, 0.2);
		--secondary-glow-color-1: rgba(37, 99, 235, 0.5);
		--secondary-glow-color-2: rgba(37, 99, 235, 0.3);
		--card-bg: rgba(255, 255, 255, 0.7);
		--card-border: rgba(226, 232, 240, 0.7); /* slate-200 */
		--card-hover-border: rgba(124, 58, 237, 0.7);
		--card-hover-shadow: rgba(124, 58, 237, 0.2);
		--skill-icon-filter: grayscale(10%) brightness(90%);
		--aurora-1: rgba(124, 58, 237, 0.08);
		--aurora-2: rgba(29, 78, 216, 0.08);
		--scrollbar-track: #e2e8f0;
		--scrollbar-thumb: #a78bfa;
		--scrollbar-thumb-hover: #8b5cf6;
		--input-bg: rgba(226, 232, 240, 0.5); /* slate-200 */
		--input-border: #cbd5e1; /* slate-300 */
	}

	:global(body.dark) {
		/* Dark Theme */
		--bg-color: #0a0a0a;
		--text-color: #e2e8f0; /* slate-200 */
		--text-dim-color: #94a3b8; /* slate-400 */
		--link-text-color: #cbd5e1; /* slate-300 */
		--primary-glow-color-1: rgba(192, 132, 252, 0.6);
		--primary-glow-color-2: rgba(124, 58, 237, 0.4);
		--secondary-glow-color-1: rgba(96, 165, 250, 0.6);
		--secondary-glow-color-2: rgba(59, 130, 246, 0.4);
		--card-bg: rgba(23, 23, 23, 0.6);
		--card-border: rgba(255, 255, 255, 0.1);
		--card-hover-border: rgba(124, 58, 237, 0.5);
		--card-hover-shadow: rgba(124, 58, 237, 0.3);
		--skill-icon-filter: grayscale(100%) brightness(150%);
		--aurora-1: rgba(124, 58, 237, 0.2);
		--aurora-2: rgba(29, 78, 216, 0.2);
		--scrollbar-track: #111827;
		--scrollbar-thumb: #4f46e5;
		--scrollbar-thumb-hover: #6366f1;
		--input-bg: rgba(30, 41, 59, 0.5); /* slate-800 */
		--input-border: #475569; /* slate-600 */
	}

	:global(body) {
		font-family: 'Inter', sans-serif;
		background-color: var(--bg-color);
		color: var(--text-color);
		overflow-x: hidden;
		transition:
			background-color 0.3s ease,
			color 0.3s ease;
		scroll-behavior: smooth;
	}

	:global(body::before) {
		content: '';
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image:
			radial-gradient(ellipse 50% 50% at 20% 20%, var(--aurora-1), transparent),
			radial-gradient(ellipse 50% 50% at 80% 80%, var(--aurora-2), transparent);
		z-index: -1;
		animation: moveAurora 20s infinite alternate linear;
	}

	:global(::-webkit-scrollbar) {
		width: 8px;
	}
	:global(::-webkit-scrollbar-track) {
		background: var(--scrollbar-track);
	}
	:global(::-webkit-scrollbar-thumb) {
		background: var(--scrollbar-thumb);
		border-radius: 4px;
	}
	:global(::-webkit-scrollbar-thumb:hover) {
		background: var(--scrollbar-thumb-hover);
	}

	.main-text-dim {
		color: var(--text-dim-color);
	}
	.link-text {
		color: var(--link-text-color);
	}
	.link-text:hover {
		color: #a78bfa;
	}

	.theme-toggle {
		background-color: var(--card-bg);
		border: 1px solid var(--card-border);
		width: 2.5rem;
		height: 2.5rem;
		padding: 0.5rem;
		border-radius: 9999px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--text-dim-color);
	}
	.theme-toggle:hover {
		color: #a78bfa;
	}

	.glass-card {
		background: var(--card-bg);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		border: 1px solid var(--card-border);
		transition: all 0.3s ease;
	}

	.glass-card:hover {
		border-color: var(--card-hover-border);
		box-shadow: 0 0 20px var(--card-hover-shadow);
		transform: translateY(-5px);
	}

	.text-glow {
		text-shadow:
			0 0 8px var(--primary-glow-color-1),
			0 0 20px var(--primary-glow-color-2);
	}
	.text-glow-blue {
		text-shadow:
			0 0 8px var(--secondary-glow-color-1),
			0 0 20px var(--secondary-glow-color-2);
	}

	.fade-in-section {
		opacity: 0;
		transform: translateY(20px);
		transition:
			opacity 0.6s ease-out,
			transform 0.6s ease-out;
	}

	:global(.fade-in-section.is-visible) {
		opacity: 1;
		transform: translateY(0);
	}

	.animated-gradient-text {
		background: linear-gradient(90deg, #a78bfa, #f472b6, #60a5fa, #a78bfa);
		background-size: 200% 200%;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		animation: gradient-animation 5s ease infinite;
	}

	@keyframes gradient-animation {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	.skill-icon {
		filter: var(--skill-icon-filter);
		transition: all 0.3s ease;
	}
	.skill-icon:hover {
		filter: grayscale(0%) brightness(100%);
		transform: scale(1.1);
	}

	.form-input {
		width: 100%;
		border-radius: 0.5rem;
		padding: 0.5rem 1rem;
		transition:
			background-color 0.3s ease,
			border-color 0.3s ease;
		background-color: var(--input-bg);
		border: 1px solid var(--input-border);
	}
	.form-input:focus {
		outline: none;
		box-shadow:
			0 0 0 2px var(--bg-color),
			0 0 0 4px #a78bfa;
	}
</style>
