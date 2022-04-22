

<script>
	import '../tailwind.css';
	import Nav from '../components/Nav.svelte';
</script>

<svelte:head>
	<link
		rel="alternate"
		type="application/rss+xml"
		href="/rss.xml"
	/>
</svelte:head>

<div class="flex flex-col justify-center px-4 sm:px-8">
	<Nav />
</div>
<main class="flex flex-col justify-center px-4 sm:px-8">
	<slot />
</main>

<footer class="mx-auto mb-8 flex w-full max-w-2xl flex-col items-start justify-center">
	<!-- <hr class="mb-8 w-full" /> -->
	<div class="grid w-full max-w-2xl grid-cols-1 gap-4 p-4 sm:grid-cols-2 sm:px-8">
		<!-- <div class="flex flex-col space-y-4">
			<a class="text-gray-500 transition hover:text-gray-300" href="/">Home</a>
			<a class="text-gray-500 transition hover:text-gray-300" href="/about">About</a>
		</div> -->
		<ul class="footer__links">
			<li class="footer__links_item">
				<a href="/" class="footer_name">Home</a>
			</li>
			<li class="footer__links_item">
				<a href="/about" class="footer_name">About</a>
			</li>
			<li class="footer__links_item">
				<span class="footer_name">© 2022 Andrew Lim</span>
			</li>
		</ul>

	</div>
	<p class="prose px-4 dark:prose-invert sm:px-8">
		This blog is based on the
		<a href="https://swyxkit.netlify.app/">swyxkit</a>
		template.
	</p>
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