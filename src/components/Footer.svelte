<script>
	import Nowplaying from '../components/nowplaying.svelte';
</script>

<footer class="mx-auto p-4 flex w-full max-w-2xl flex-col items-start justify-center">
	<!-- <hr class="mb-8 w-full" /> -->
	<div class="grid w-full max-w-2xl gap-4 p-4 sm:text-sm sm:px-2">
		<ul class="footer__links">
			<li class="footer__links_item">
				<a href="/" class="text-sm">Home</a>
			</li>
			<li class="footer__links_item">
				<a href="/about" class="text-sm">About</a>
			</li>
			<li class="footer__links_item">
				<a href="https://www.linkedin.com/in/andreian02/" target="_blank" class="text-sm"
					>LinkedIn</a
				>
			</li>
			<li class="footer__links_item">
				<span class="text-sm">© 2022 Andrew Lim</span>
			</li>
			<li>
				<Nowplaying/>
			</li>
		</ul>
	</div>
</footer>

<style>
	.footer__links {
		display: flex;
		flex-direction: row;
		justify-content: center;
		flex-direction: row;
		align-items: center;
		list-style: none;
	}

	.footer__links_item {
		margin: 0.5rem;
	}
</style>
