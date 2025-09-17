<script lang="ts">
	import { fadeIn } from '$lib/actions/fadeIn';
</script>

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
