<script context="module">
	const allPosts = import.meta.glob('./*.md');

	let body = [];
	for (let path in allPosts) {
		body.push(
			allPosts[path]().then(({ metadata }) => {
				return { path, metadata };
			})
		);
	}

	export const load = async () => {
		const posts = await Promise.all(body);
		return {
			props: {
				posts
			}
		};
};
</script>

<script>
	export let posts;
</script>

<svelte:head>
	<title>My Blog Entries</title>
</svelte:head>

<div
	class="mx-auto flex max-w-2xl flex-col items-start justify-center border-gray-200 px-4 pb-16 dark:border-gray-700 sm:px-8"
>
	<div class="flex flex-col justify-center items-start max-w-2xl mb-16">
		<div class="flex flex-col pr-8">
			<h1 class="mb-3 text-3xl font-bold tracking-tight md:text-5xl py-4">
				My Blog Entries
			</h1>
			<h2 class="mb-4">
				This is my personal slice of the internet where I document my personal endeavors and learnings
				while I journey through the data world.
			</h2>
			<h3 class="mb-4">
				<span class="font-semibold">{posts.length}</span> projects and counting...
			</h3>
		</div>
		

		<div class="blogposts">
			{#each posts as { path, metadata }}
				<div class="post">
					<span class="postDate">{new Date(metadata.date).toDateString()}</span>
					<h2 class="post-item__title">
						<a class="post-item__title__link" href={`/blog/${path.replace('.md', '')}`}
							>{metadata.title}</a
						>
					</h2>
					<p class="post-item__description">{metadata.description.substring(0, 200)}</p>
					<p class="readmore">
						<a href={`/blog/${path.replace('.md', '')}`}> Read More...</a>
					</p>
				</div>
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
	.post {
		padding: 1px;
	}
	

	.readmore {
		text-align: left;
		margin: 10px 0 0 0;
	}
	.readmore:hover {
		color: grey;
	}

	.post-item {
		border-bottom: solid 1px var(--border-color);
		padding: 1rem 0;
		line-height: 1.6;
	}
	.post-item__date {
		color: var(--secondary-color);
	}
	.post-item__title {
		margin: 0.5rem 0;
	}
	.post-item__title__link {
		color: var(--main-color);
		font-size: 1.5rem;
		text-decoration: none;
	}
</style>
