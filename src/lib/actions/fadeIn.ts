export function fadeIn(node: HTMLElement) {
	const observer = new IntersectionObserver((entries) => {
		if (entries[0]?.isIntersecting) {
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
