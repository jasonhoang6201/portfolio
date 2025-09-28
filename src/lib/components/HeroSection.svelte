<script lang="ts">
	import { resolve } from '$app/paths';
	import { fadeIn } from '$lib/actions/fadeIn';
	import cv from '$lib/assets/HOANG THIEN NHAN.pdf';
	import WordReveal from './WordReveal.svelte';
</script>

<section
	use:fadeIn
	class="fade-in-section relative flex items-center overflow-hidden py-[10vh]"
	data-aos="fade-up"
	data-aos-duration="1200"
>
	<!-- Floating particles/orbs for cosmic effect -->
	<div class="pointer-events-none absolute inset-0">
		<div
			class="cosmic-orb animate-float-slow absolute top-20 left-10 h-2 w-2 rounded-full bg-emerald-400/60"
		></div>
		<div
			class="cosmic-orb animate-float-fast absolute top-40 right-20 h-1 w-1 rounded-full bg-sky-400/80"
		></div>
		<div
			class="cosmic-orb animate-float-medium absolute bottom-32 left-1/4 h-1.5 w-1.5 rounded-full bg-emerald-300/50"
		></div>
		<div
			class="cosmic-orb animate-float-slow absolute right-1/3 bottom-20 h-1 w-1 rounded-full bg-sky-300/70"
		></div>
	</div>

	<div
		class="relative z-10 container mx-auto grid gap-16 px-6 md:grid-cols-[2fr,1fr] md:px-12"
		data-aos="fade-up"
		data-aos-delay="100"
	>
		<div
			class="flex flex-col items-center justify-center space-y-10"
			data-aos="fade-up"
			data-aos-delay="160"
		>
			<!-- Enhanced greeting with cosmic styling -->
			<div class="relative">
				<p
					class="animate-pulse-subtle text-sm font-semibold tracking-[0.5em] text-emerald-400 uppercase"
				>
					<span class="mr-3 inline-block h-px w-2 bg-emerald-400"></span>
					Hi, my name is
					<span class="ml-3 inline-block h-px w-2 bg-emerald-400"></span>
				</p>
			</div>

			<!-- Enhanced name with better glow effects -->
			<div class="group relative">
				<WordReveal
					text="Jason Hoang"
					textClassName="text-5xl leading-tight"
					containerClassName=""
				/>
				<!-- Subtle accent line -->
				<div
					class="absolute -bottom-4 left-1/2 h-0.5 w-24 -translate-x-1/2 transform bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-60"
				></div>
			</div>

			<!-- Enhanced description with better typography -->
			<div class="relative max-w-2xl" data-aos="fade-up" data-aos-delay="220">
				<p class="main-text-dim text-center text-lg leading-relaxed text-slate-300 md:text-xl">
					A <span class="text-gradient font-semibold">Software Developer</span> with
					<span class="text-gradient font-semibold">3+ years</span> of experience in building scalable
					web and mobile applications, passionate about delivering seamless solutions and leveraging
					modern technologies to solve real-world problems.
				</p>
			</div>

			<!-- Enhanced CTA buttons with improved hover effects -->
			<div
				class="flex w-full max-w-md flex-col justify-center gap-6 sm:flex-row"
				data-aos="fade-up"
				data-aos-delay="280"
			>
				<a
					href="#projects"
					class="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-sky-500 via-emerald-500 to-sky-600 px-8 py-4 font-semibold text-white shadow-lg shadow-sky-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-500/40"
				>
					<span class="relative z-10 flex items-center gap-2">
						View my work
						<svg
							class="h-4 w-4 transition-transform group-hover:translate-x-1"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</span>
					<div
						class="absolute inset-0 bg-gradient-to-r from-emerald-500 via-sky-500 to-emerald-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					></div>
				</a>

				<a
					href={cv}
					download
					class="group relative inline-flex items-center justify-center rounded-full border border-sky-300/60 bg-slate-900/20 px-8 py-4 font-semibold text-sky-100 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-300/80 hover:bg-emerald-900/10 hover:text-emerald-100"
				>
					<span class="flex items-center gap-2">
						<svg
							class="h-4 w-4 transition-transform group-hover:animate-bounce"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z"
							/>
						</svg>
						Download CV
					</span>
				</a>
			</div>

			<!-- Clean Cosmic Social Icons -->
			<div class="flex items-center justify-center gap-8">
				<!-- LinkedIn -->
				<a
					href="https://www.linkedin.com/in/nhan-hoang-dev/"
					target="_blank"
					rel="noopener noreferrer"
					class="group social-icon relative"
					aria-label="Connect on LinkedIn"
				>
					<div
						class="relative flex h-12 w-12 items-center justify-center transition-all duration-300 group-hover:-translate-y-2"
					>
						<!-- Glowing border ring -->
						<div
							class="absolute inset-0 rounded-full border border-sky-400/30 transition-all duration-300 group-hover:border-sky-400/80 group-hover:shadow-lg group-hover:shadow-sky-400/25"
						></div>

						<!-- Icon -->
						<svg
							class="h-6 w-6 text-sky-300 transition-all duration-300 group-hover:scale-110 group-hover:text-sky-100"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path
								d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.137 1.446-2.137 2.939v5.667H9.348V9h3.41v1.561h.049c.476-.9 1.637-1.852 3.37-1.852 3.602 0 4.268 2.37 4.268 5.455zM5.337 7.433a1.995 1.995 0 1 1 0-3.99 1.995 1.995 0 0 1 0 3.99zm1.78 13.019H3.555V9h3.562z"
							/>
						</svg>

						<!-- Pulse ring on hover -->
						<div
							class="absolute inset-0 scale-150 rounded-full border border-sky-400/20 opacity-0 transition-opacity duration-300 group-hover:animate-ping group-hover:opacity-100"
						></div>
					</div>

					<!-- Simple tooltip -->
					<div
						class="absolute top-full left-1/2 mt-3 -translate-x-1/2 transform px-3 py-1 text-xs whitespace-nowrap text-sky-200 opacity-0 transition-all duration-300 group-hover:opacity-100"
					>
						LinkedIn
					</div>
				</a>

				<!-- GitHub -->
				<a
					href="https://github.com/jasonhoang6201"
					target="_blank"
					rel="noopener noreferrer"
					class="group social-icon relative"
					aria-label="View GitHub Profile"
				>
					<div
						class="relative flex h-12 w-12 items-center justify-center transition-all duration-300 group-hover:-translate-y-2"
					>
						<!-- Glowing border ring -->
						<div
							class="absolute inset-0 rounded-full border border-slate-400/30 transition-all duration-300 group-hover:border-slate-300/80 group-hover:shadow-lg group-hover:shadow-slate-300/25"
						></div>

						<!-- Icon -->
						<svg
							class="h-6 w-6 text-slate-300 transition-all duration-300 group-hover:scale-110 group-hover:text-slate-100"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path
								d="M12 .296a12 12 0 0 0-3.791 23.403c.6.11.82-.26.82-.58 0-.29-.01-1.04-.015-2.05-3.338.73-4.043-1.61-4.043-1.61-.545-1.38-1.332-1.75-1.332-1.75-1.09-.75.082-.735.082-.735 1.205.084 1.84 1.24 1.84 1.24 1.07 1.835 2.807 1.305 3.492.998.11-.776.42-1.306.763-1.606-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.52.117-3.17 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.65.243 2.867.12 3.17.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.82 1.096.82 2.21 0 1.595-.015 2.88-.015 3.27 0 .32.216.7.825.58A12 12 0 0 0 12 .296z"
							/>
						</svg>

						<!-- Pulse ring on hover -->
						<div
							class="absolute inset-0 scale-150 rounded-full border border-slate-400/20 opacity-0 transition-opacity duration-300 group-hover:animate-ping group-hover:opacity-100"
						></div>
					</div>

					<!-- Simple tooltip -->
					<div
						class="absolute top-full left-1/2 mt-3 -translate-x-1/2 transform px-3 py-1 text-xs whitespace-nowrap text-slate-200 opacity-0 transition-all duration-300 group-hover:opacity-100"
					>
						GitHub
					</div>
				</a>

				<!-- Email -->
				<a
					href="mailto:jasonhoang6201@gmail.com"
					class="group social-icon relative"
					aria-label="Send Email"
				>
					<div
						class="relative flex h-12 w-12 items-center justify-center transition-all duration-300 group-hover:-translate-y-2"
					>
						<!-- Glowing border ring -->
						<div
							class="absolute inset-0 rounded-full border border-emerald-400/30 transition-all duration-300 group-hover:border-emerald-400/80 group-hover:shadow-lg group-hover:shadow-emerald-400/25"
						></div>

						<!-- Icon -->
						<svg
							class="h-6 w-6 text-emerald-300 transition-all duration-300 group-hover:scale-110 group-hover:text-emerald-100"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path
								d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
							/>
							<polyline points="22,6 12,13 2,6" />
						</svg>

						<!-- Pulse ring on hover -->
						<div
							class="absolute inset-0 scale-150 rounded-full border border-emerald-400/20 opacity-0 transition-opacity duration-300 group-hover:animate-ping group-hover:opacity-100"
						></div>
					</div>

					<!-- Simple tooltip -->
					<div
						class="absolute top-full left-1/2 mt-3 -translate-x-1/2 transform px-3 py-1 text-xs whitespace-nowrap text-emerald-200 opacity-0 transition-all duration-300 group-hover:opacity-100"
					>
						Email
					</div>
				</a>
			</div>
		</div>
	</div>
</section>
