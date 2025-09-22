<script lang="ts">
	export let navLinks: { label: string; href: string }[] = [];
	export let isScrolled = false;
	export let activeHref: string | null = null;
</script>

<nav
	class="fixed top-0 right-0 left-0 z-50 hidden transition-all duration-300 md:block"
	class:glass-card-static={isScrolled}
	data-aos="fade-down"
	data-aos-duration="800"
	data-aos-delay="200"
>
	<div class="container mx-auto flex items-center justify-between px-6 py-4 md:px-12">
		<a href="#home" class="text-glow text-xl font-bold">JH</a>
		<div class="flex items-center space-x-8">
			{#each navLinks as link (link.href)}
				<a
					href={`#${link.href}`}
					class="link-text relative transition-colors duration-300"
					class:!text-sky-300={link.href === activeHref}
					class:!font-semibold={link.href === activeHref}
					aria-current={link.href === activeHref ? 'page' : undefined}
				>
					{link.label}
				</a>
			{/each}
		</div>
	</div>
</nav>
