<script lang="ts">
	import { fadeIn } from '$lib/actions/fadeIn';
	import TechStackCard from '$lib/components/TechStackCard.svelte';

	type StackCategory = {
		id: string;
		label: string;
	};

	type StackItem = {
		name: string;
		icon: string;
		categories: string[];
	};

	type StackSection = StackCategory & {
		items: StackItem[];
	};

	const iconBase = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

	const categories: StackCategory[] = [
		{ id: 'all', label: 'All' },
		{ id: 'frontend', label: 'Frontend' },
		{ id: 'backend', label: 'Backend' },
		{ id: 'database', label: 'Database' },
		{ id: 'devops', label: 'Cloud & DevOps' }
	];

	const stackItems: StackItem[] = [
		// Frontend
		{ name: 'Angular', icon: 'angular/angular-original.svg', categories: ['frontend'] },
		{ name: 'Ant Design', icon: 'antdesign/antdesign-original.svg', categories: ['frontend'] },
		{ name: 'JavaScript', icon: 'javascript/javascript-original.svg', categories: ['frontend'] },
		{ name: 'Next.js', icon: 'nextjs/nextjs-original.svg', categories: ['frontend'] },
		{ name: 'React', icon: 'react/react-original.svg', categories: ['frontend'] },
		{ name: 'React Native', icon: 'react/react-original.svg', categories: ['frontend'] },
		{
			name: 'Tailwind CSS',
			icon: 'tailwindcss/tailwindcss-original.svg',
			categories: ['frontend']
		},
		{ name: 'Typescript', icon: 'typescript/typescript-original.svg', categories: ['frontend'] },

		// Backend
		{ name: 'Express.js', icon: 'express/express-original.svg', categories: ['backend'] },
		{ name: 'NestJS', icon: 'nestjs/nestjs-original.svg', categories: ['backend'] },
		{ name: 'Socket.io', icon: 'socketio/socketio-original.svg', categories: ['backend'] },

		// Database
		{ name: 'Firebase', icon: 'firebase/firebase-plain.svg', categories: ['database'] },
		{ name: 'MongoDB', icon: 'mongodb/mongodb-original.svg', categories: ['database'] },
		{ name: 'MySQL', icon: 'mysql/mysql-original-wordmark.svg', categories: ['database'] },
		{ name: 'PostgreSQL', icon: 'postgresql/postgresql-original.svg', categories: ['database'] },
		{ name: 'Redis', icon: 'redis/redis-original.svg', categories: ['database'] },

		// DevOps
		{
			name: 'AWS',
			icon: 'amazonwebservices/amazonwebservices-plain-wordmark.svg',
			categories: ['devops']
		},
		{ name: 'Docker', icon: 'docker/docker-original.svg', categories: ['devops'] },
		{ name: 'Firebase', icon: 'firebase/firebase-plain.svg', categories: ['devops'] },
		{ name: 'Git', icon: 'git/git-original.svg', categories: ['devops'] },
		{ name: 'Google Cloud', icon: 'googlecloud/googlecloud-original.svg', categories: ['devops'] },
		{ name: 'Vercel', icon: 'vercel/vercel-original.svg', categories: ['devops'] }
	];

	const sections: StackSection[] = categories
		.filter((category) => category.id !== 'all')
		.map((category) => ({
			...category,
			items: stackItems.filter((item) => item.categories.includes(category.id))
		}));

	let selectedCategory = 'all';

	$: filteredStack =
		selectedCategory === 'all'
			? stackItems
			: stackItems.filter((item) => item.categories.includes(selectedCategory));
</script>

<section use:fadeIn id="tech-stack" class="fade-in-section py-24">
	<div class="container mx-auto px-6 md:px-12">
		<div class="mb-6 text-center">
			<p class="text-sm font-semibold tracking-[0.3em] text-emerald-400 uppercase">
				Technology Stack
			</p>
			<h2 class="text-glow-blue bounce-hover mt-4 text-4xl font-bold md:text-5xl">
				Technology I use to build projects
			</h2>
		</div>

		<div class="flex flex-wrap justify-center gap-3">
			{#each categories as category}
				<button
					type="button"
					on:click={() => (selectedCategory = category.id)}
					class="group relative overflow-hidden rounded-full border border-slate-700/60 px-4 py-2 text-sm font-medium text-sky-100 transition-all duration-200 hover:border-emerald-400/60 hover:text-emerald-100"
					class:active-filter={selectedCategory === category.id}
					aria-pressed={selectedCategory === category.id}
				>
					<span class="relative z-10">{category.label}</span>
					<span
						class="absolute inset-0 rounded-full bg-gradient-to-r from-sky-500/0 via-emerald-500/0 to-sky-600/0 transition-opacity duration-200 group-hover:opacity-40"
						aria-hidden="true"
					></span>
				</button>
			{/each}
		</div>

		{#if selectedCategory === 'all'}
			<div class="mt-4 space-y-4">
				{#each sections as section, index (section.id + index)}
					<div class="space-y-3">
						<h3 class="text-xl font-semibold text-white">{section.label}</h3>
						<div class="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
							{#each section.items as tech (tech.name)}
								<TechStackCard name={tech.name} iconSrc={`${iconBase}/${tech.icon}`} />
							{/each}
						</div>
					</div>
				{/each}
			</div>
		{:else}
			<div class="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
				{#each filteredStack as tech, index (tech.name + index)}
					<TechStackCard name={tech.name} iconSrc={`${iconBase}/${tech.icon}`} />
				{/each}
			</div>
		{/if}
	</div>
</section>

<style>
	.active-filter {
		border-color: rgba(45, 212, 191, 0.6);
		color: white;
		background: linear-gradient(135deg, rgba(56, 189, 248, 0.25), rgba(45, 212, 191, 0.3));
		box-shadow: 0 10px 30px rgba(14, 165, 233, 0.25);
	}
</style>
