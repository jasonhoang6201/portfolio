<script lang="ts">
	import { fadeIn } from '$lib/actions/fadeIn';
</script>

<section use:fadeIn id="about" class="fade-in-section py-24">
	<h2 class="mb-12 text-center text-4xl font-bold">
		<span class="text-glow-blue bounce-hover">About Me</span>
	</h2>
	<div class="container mx-auto grid gap-12 px-6 md:grid-cols-2 md:px-12">
		<div class="space-y-6">
			<p class="main-text-dim text-lg leading-relaxed">
				Ambitious fullstack developer eager to learn, adapt, and grow into a future solution
				architect. I love translating product goals into reliable digital experiences—from the
				interfaces teams see to the systems running underneath.
			</p>
			<div class="grid gap-6 sm:grid-cols-2">
				<div class="glass-card rounded-2xl p-6">
					<p class="text-xs tracking-widest text-emerald-300/80 uppercase">Location</p>
					<p class="mt-2 text-lg font-semibold text-white">
						14 Thống Nhất, Phú Thọ Hòa, Tân Phú, HCM
					</p>
				</div>
				<div class="glass-card rounded-2xl p-6">
					<p class="text-xs tracking-widest text-emerald-300/80 uppercase">Contact</p>
					<p class="mt-2 text-lg font-semibold text-white">jasonhoang6201@gmail.com</p>
					<p class="main-text-dim text-sm">0919881497</p>
				</div>
			</div>
			<div class="glass-card rounded-2xl p-6">
				<p class="text-xs tracking-widest text-emerald-300/80 uppercase">Objective</p>
				<p class="main-text-dim mt-3 leading-relaxed">
					In the short term I’m focused on sharpening my fullstack impact; long term I’m building
					toward solution architecture, pairing technical breadth with communication and leadership.
				</p>
			</div>
		</div>
		<div class="space-y-6">
			<div class="glass-card rounded-2xl p-6">
				<h3 class="text-xl font-semibold text-white">Soft Skills</h3>
				<ul class="mt-4 space-y-2 text-sky-100/90">
					<li class="flex items-start gap-2">
						<span class="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
						<span>Multi-tasking across parallel features while keeping quality high.</span>
					</li>
					<li class="flex items-start gap-2">
						<span class="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
						<span>Effective time management to meet tight marketing and product deadlines.</span>
					</li>
					<li class="flex items-start gap-2">
						<span class="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
						<span>Close collaboration with developers, designers, QA, and managers.</span>
					</li>
					<li class="flex items-start gap-2">
						<span class="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
						<span>Problem-solving that unblocks projects and improves outcomes.</span>
					</li>
					<li class="flex items-start gap-2">
						<span class="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
						<span>Adaptability—learning new technologies and requirements at pace.</span>
					</li>
				</ul>
			</div>
			<div class="glass-card rounded-2xl p-6">
				<h3 class="text-xl font-semibold text-white">Language</h3>
				<p class="main-text-dim mt-3">
					English: comfortable discussing features, writing technical docs, and researching
					solutions.
				</p>
			</div>
		</div>
	</div>
</section>
