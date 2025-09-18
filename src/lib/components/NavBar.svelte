<script lang="ts">
	export let navLinks: { label: string; href: string }[] = [];
	export let isScrolled = false;
</script>

<nav
	class="fixed top-0 right-0 left-0 z-50 transition-all duration-300"
	class:glass-card-static={isScrolled}
>
	<div class="container mx-auto flex items-center justify-between px-6 py-4 md:px-12">
		<a href="#home" class="text-glow text-xl font-bold">HN</a>
		<div class="hidden items-center space-x-8 md:flex">
			{#each navLinks as link}
				<a href={`#${link.href}`} class="link-text transition-colors duration-300">{link.label}</a>
			{/each}
		</div>
	</div>
</nav>
