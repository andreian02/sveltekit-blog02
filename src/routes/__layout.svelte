<!-- 1. Assign current route's path to `key` prop -->
<script context="module">
	export const load = async ({ url }) => ({ props: { url } });
</script>

<script>
	import '../tailwind.css';
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';

	import PageTransition from '../components/PageTransition.svelte';
	export let url;
</script>

<svelte:head />

<!-- 2. Pass `url` prop to the component so it knows when to transition -->
<PageTransition {url}>
	<div class="flex flex-col justify-center px-4 sm:px-8">
		<Nav />
	</div>
	<main class="flex flex-col justify-center px-4 sm:px-8">
		<div class="flex justify-center pb-4">
			<img
				class="rounded-md shadow-md"
				src="https://andreian02.github.io/images/Clouds.jpg"
				alt="hero-img"
			/>
		</div>
		<slot />
	</main>

	<Footer />
</PageTransition>
