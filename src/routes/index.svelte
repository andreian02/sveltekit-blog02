<script context="module">
	export const prerender = true;
	export async function load({ fetch }) {
		const recentPosts = await fetch('/posts.json?limit=0').then((res) => res.json());

		return {
			props: {
				recentPosts
			}
		};
	}
</script>

<script>
	import FeatureCard from '../components/FeaturedCard.svelte';
	import ButtonLinkForward from '../components/ButtonLinkForward.svelte';
	export let recentPosts;

	export let IBlog = [];
	const mostRecentBlogs = (IBlog = recentPosts.slice(0, 3));

	// console.log(recentPosts);
	// console.log(mostRecentBlogs);
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div
	class="mx-auto flex max-w-2xl flex-col items-start justify-center border-gray-200 px-4 pb-16 dark:border-gray-700 sm:px-4"
>
	<div class="flex flex-col-reverse items-start sm:flex-row">
		<div class="flex flex-col pr-8">
			<h1 class="mb-3 text-3xl font-bold tracking-tight md:text-5xl py-4">Hello World</h1>
			<h2 class="mb-4">
				A <span class="font-semibold">SvelteKit</span> Blog App built by
				<span class="font-semibold">Tailwind + MDSveX + Vercel</span>.<br /> Inspired by Swyxkit!
			</h2>
			<p class="mb-16">
				<a
					href="/posts
				/building-cloudwhite">View sources here!</a
				>
			</p>
		</div>
	</div>

	<section class="mb-16 w-full">
		<h3 class="mb-6 text-2xl font-bold tracking-tight md:text-4xl">Recent Posts</h3>

		<div class="flex flex-col gap-6 md:flex-row">
			{#each mostRecentBlogs as Post}
				<!-- <FeatureCard title={Post.title} 
				href={`/blog/${Post.slug}`} stringData={Post.date} /> -->
				<FeatureCard {Post} />
			{/each}
		</div>

		<ButtonLinkForward href="/posts" size="small" raised={false} style="margin-top:40px;">
			View All Posts
		</ButtonLinkForward>
	</section>
</div>

<hr />
