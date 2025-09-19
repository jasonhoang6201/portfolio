<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	// import setupLocatorUI from '@locator/runtime';

	// if (process.env.NODE_ENV === 'development') {
	// 	setupLocatorUI({
	// 		adapter: 'svelte',
	// 		// @ts-ignore
	// 		projectPath: __PROJECT_PATH__
	// 	});
	// }

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Jason's Portfolio</title>
</svelte:head>

{@render children?.()}
