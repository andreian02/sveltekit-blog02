<script>
	import images from '../lib/get-works';
</script>

<main>
	<h1 class="mb-3 text-3xl font-bold tracking-tight md:text-5xl py-4">Past Works</h1>
	<!--tailwind css cards-->
	<div class="gallery">
		{#each images as img (img.id)}
			<div class="max-w-sm rounded overflow-hidden p-8">
				<img class="object-cover object-top h-48 w-96" src={img.path} alt={img.id} />
				<div class="px-6 py-4">
					<div class="font-bold text-xl mb-2">
						<a href={img.url} target="_blank">{img.title}</a>
					</div>

					<p class="text-base">
						{img.desc}
					</p>
				</div>
				<!-- <div class="px-6 pt-4 pb-2">
					<span
						class="inline-block bg-slate-200 rounded-full px-3 py-1 text-sm font-semibold text-slate-700 mr-2 mb-2"
						>#photography</span
					>
					<span
						class="inline-block bg-slate-200 rounded-full px-3 py-1 text-sm font-semibold text-slate-700 mr-2 mb-2"
						>#travel</span
					>
					<span
						class="inline-block bg-slate-200 rounded-full px-3 py-1 text-sm font-semibold text-slate-700 mr-2 mb-2"
						>#winter</span
					>
				</div> -->
			</div>
		{/each}
	</div>
</main>

<hr />

<style>
	/* Center website */
	main {
		/* max-width: 100vw; */
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		/* 	background-color: red; */
	}

	.gallery {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-content: content-start;
	}

	/* h1 {
		font-size: 2.8rem;
		font-weight: 100;
		margin: 0 0 10px;
	} */

	/* h4 {
		font-size: 2rem;
		margin: 0;
	} */

	p {
		margin: 0 0 0.5rem;
		position: relative;
	}

	/* Content */
	/* .content {
		margin: 5px;
		padding: 10px;
		width: 30vw;
	} */
</style>
