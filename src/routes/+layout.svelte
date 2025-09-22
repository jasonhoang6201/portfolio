<script lang="ts">
	import '../app.css';
	import 'aos/dist/aos.css';
	import favicon from '$lib/assets/favicon.svg';
	import { onMount } from 'svelte';
	// @ts-ignore
	import AOS from 'aos';
	// import setupLocatorUI from '@locator/runtime';

	// if (process.env.NODE_ENV === 'development') {
	// 	setupLocatorUI({
	// 		adapter: 'svelte',
	// 		// @ts-ignore
	// 		projectPath: __PROJECT_PATH__
	// 	});
	// }

	onMount(() => {
		try {
			AOS.init({
				duration: 1200
			});
		} catch (error) {
			console.error('Error initializing AOS', error);
		}
	});

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Jason's Portfolio</title>
</svelte:head>

{@render children?.()}
