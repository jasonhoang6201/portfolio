<script lang="ts">
	import { fadeIn } from '$lib/actions/fadeIn';
	import techjdi from '$lib/assets/techjdi.png';
	import crosstech from '$lib/assets/crosstech.png';
	import phuongNamDigital from '$lib/assets/phuongNamDigital.png';
</script>

<section use:fadeIn id="about" class="fade-in-section py-24">
	<h2 class="mb-12 text-center text-4xl font-bold">
		<span class="text-glow-blue bounce-hover">About Me</span>
	</h2>
	<div class="container mx-auto gap-6 px-6 md:grid md:grid-cols-12 md:px-12">
		<div class="col-span-8 space-y-6">
			<div class="glass-card rounded-2xl p-6">
				<h3 class="text-xl font-semibold text-white">👋 Hello, I'm Jason (Nhân in Vietnamese)</h3>
				<ul class="mt-4 space-y-2 text-sky-100/90">
					<li class="flex items-start">
						<p class="text-lg">
							A passionate <span class="text-emerald-400">Software Developer</span> with
							<span class="text-emerald-400">3+ years</span> of experience building scalable web and
							mobile applications
						</p>
					</li>

					<div class="divider my-4 h-px bg-slate-700/40"></div>

					<li class="flex items-start">
						<span class="main-text-dim">
							I have experience involved in the whole process of creating a product, from building
							the very first version to making sure it runs fast and smoothly for users. I've had
							the chance to work on interesting projects in a bunch of different fields, like
							Fintech, Social Media, Aviation and E-commerce.
						</span>
					</li>
					<li class="flex items-start">
						<span class="main-text-dim">
							Beyond work, I love learning about new technologies, finding creative ways to use new
							tools to solve real problems.
						</span>
					</li>
				</ul>

				<div class="divider my-4 h-px bg-slate-700/40"></div>

				<div class="flex justify-between">
					<div class="flex-1">
						<span class="text-white"> Soft skills</span>
						{#each ['Multi-tasking', 'Time management', 'Problem-solving', 'Adaptability'] as skill}
							<div class="mt-2 flex items-start gap-2 text-sky-100/90">
								<span class="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
								<span class="main-text-dim">{skill}</span>
							</div>
						{/each}
					</div>

					<div class="flex-1">
						<span class="text-white">
							Languages: <span class="text-emerald-400">English</span></span
						>
						{#each ['Comfortable discussing features', 'Writing technical docs'] as skill}
							<div class="mt-2 flex items-start gap-2 text-sky-100/90">
								<span class="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
								<span class="main-text-dim">{skill}</span>
							</div>
						{/each}
					</div>
				</div>
			</div>

			<div class="glass-card rounded-2xl p-6">
				<h3 class="text-xl font-semibold text-white">Education</h3>
				<p class="main-text-dim mt-3">
					<span class="text-emerald-400">University of Science:</span> Bachelor of Software Engineering
					, Graduated November 2023
				</p>
				<p class="main-text-dim mt-2">
					<span class="text-emerald-400">GPA</span> 3.39 / 4.0
				</p>
			</div>
		</div>
		<div class="col-span-4 mt-6 w-full space-y-6 md:mt-0">
			<div class="glass-card rounded-2xl p-6">
				<div class="flex items-center">
					<img src={techjdi} alt="TechJDI" class="h-10 w-10 rounded-[8px] object-cover" />
					<div class="ml-3">
						<h3 class="text-lg font-semibold text-white">TechJDI</h3>
						<p class="text-[12px] tracking-wide text-emerald-300/80 uppercase">
							Jun 2022 — Sep 2025
						</p>
					</div>
				</div>
				<p class="main-text-dim mt-2">Software Developer</p>
				<p class="mt-2 text-[14px]">
					Building core features under guidance, ensuring timely delivery, and adapting quickly to
					diverse industries and project requirements.
				</p>
			</div>

			<div class="glass-card rounded-2xl p-6">
				<div class="flex items-center">
					<img src={crosstech} alt="TechJDI" class="h-10 w-10 rounded-[8px] object-cover" />
					<div class="ml-3">
						<h3 class="text-lg font-semibold text-white">CrossTech</h3>
						<p class="text-[12px] tracking-wide text-emerald-300/80 uppercase">Freelance</p>
					</div>
				</div>
				<p class="main-text-dim mt-2">Frontend Developer</p>
				<p class="mt-2 text-[14px]">
					Developed applications based on user requirements, implementing responsive layouts,
					maintaining code quality, and ensuring alignment with specifications.
				</p>
			</div>

			<div class="glass-card rounded-2xl p-6">
				<div class="flex items-center">
					<img src={phuongNamDigital} alt="TechJDI" class="h-10 w-10 rounded-[8px] object-cover" />
					<div class="ml-3">
						<h3 class="text-lg font-semibold text-white">Phuong Nam Digital</h3>
						<p class="text-[12px] tracking-wide text-emerald-300/80 uppercase">
							Apr 2022 — Jun 2022
						</p>
					</div>
				</div>
				<p class="main-text-dim mt-2">Frontend Developer Intern</p>
				<p class="mt-2 text-[14px]">
					Worked on in-house products, developing web features to support courses and interactive
					learning.
				</p>
			</div>
		</div>
	</div>
</section>
