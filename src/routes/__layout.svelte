<script>
	import '../tailwind.css';
	import Nav from '../components/Nav.svelte';
	import Footer from "../components/Footer.svelte";
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
	<div class="flex justify-center pb-4">
		<img class="rounded-md shadow-md" src="https://andreian02.github.io/images/Clouds.jpg" alt="hero-img" />
	</div>
	<slot />
</main>
<Footer/>

