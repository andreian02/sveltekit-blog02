<!--This is the Blog/Posts Index Page!-->
<script context="module">
	// import ButtonLinkForward from "../../components/ButtonLinkForward.svelte";
	export const prerender = true;
	export const load = async ({ fetch }) => {
		return {
			props: {
				recentPosts: await fetch('/posts.json').then((res) => res.json())
			}
		};
	};
</script>

<script>
	export let recentPosts;
	// console.log(recentPosts)
</script>

<svelte:head>
	<title>My Blog Entries</title>
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
				<span class="font-semibold">{recentPosts.length}</span> entries and counting...
			</h3>
		</div>

		<div class="blogposts">
			{#each recentPosts as Post}
				<div class="post">
					<h2 class="hover:text-current hover:underline my-0.5 font-medium text-2xl">
						<a href={`/posts/${Post.slug}`}>{Post.title}</a>
					</h2>

					<div class="opacity-85 font-light text-sm">
						<p>{Post.description.substring(0, 200)}</p>
						<span>{new Date(Post.date).toDateString()}</span>
						•
						<span>{Post.readingTime.replace('read', '')}</span>
						<!-- •
                <span>{Post.tags}</span> -->
					</div>

					<!-- <p class="readmore"> -->
					<!-- <ButtonLinkForward href={`/blog/${Post.slug}`} size="small" raised={false} style="margin-top:20px;">
                  Read More
                </ButtonLinkForward> -->
					<!-- </p> -->
				</div>
			{/each}
		</div>
	</div>
</div>

<hr />

<style>
	.blogposts {
		display: grid;
		grid-template-columns: auto;
		grid-gap: 40px;
		max-width: 800px;
		margin: 50px 0px;
	}
	.post {
		padding: 1px;
	}
</style>
