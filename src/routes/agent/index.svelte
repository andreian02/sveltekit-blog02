<script context="module">
	export const prerender = true;

	// export const load = async ({ fetch }) => {
	// 	return {
	// 		props: {
	// 			recentPosts: await fetch('/posts.json?limit=0').then((res) => res.json())
	// 		}
	// 	};
	// };
</script>

<script>
	import ButtonLinkForward from '../../components/ButtonLinkForward.svelte';

	console.log('This is Agent');
	export let posts;
	console.log(posts);
</script>

<svelte:head>
	<title>AGENT</title>
</svelte:head>

<div
	class="mx-auto flex max-w-2xl flex-col items-start justify-center border-gray-200 px-4 pb-16 dark:border-gray-700 sm:px-8"
>
	<div class="flex flex-col justify-center items-start max-w-2xl mb-16">
		<div class="flex flex-col pr-8">
			<h1 class="mb-3 text-3xl font-bold tracking-tight md:text-5xl py-4">My Blog Entries</h1>
			<h2 class="mb-4">
				This is my personal slice of the internet where I document my personal endeavors and
				learnings while I journey through the data world.
			</h2>
			<h3 class="mb-4">
				<!-- <span class="font-semibold">{posts}</span> projects and counting... -->
			</h3>
		</div>

		<div class="blogposts">
			{#each posts as post (post.id)}
				<li>{post.title}</li>
			{/each}
		</div>
	</div>
</div>

<style>
	.blogposts {
		display: grid;
		grid-template-columns: auto;
		grid-gap: 40px;
		max-width: 800px;
		margin: 50px 0px;
	}
</style>
