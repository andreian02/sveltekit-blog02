<script>
	// export let title = 'Untitled post';
	// export let href = '#';
	/** @type {string} */
	
	import { format, parseISO } from 'date-fns'
	export let Post
</script>

<a
	class="w-full transform rounded-xl p-1 hover:scale-[1.01] md:w-1/3"
	href={`/posts/${Post.slug}`}
	><div class="flex h-full flex-col justify-between rounded-lg p-2 dark:bg-gray-900">
		<div class="flex flex-col justify-between md:flex-row">
			<h4
				class="mb-6 w-full text-lg font-medium tracking-tight sm:mb-6 md:text-lg"
			>
				{Post.title}
			</h4>
		</div>
		<div class="capsize flex items-center">
			<!-- {Post.date} -->
			<p>{format(new Date(parseISO(Post.date)), 'MMMM dd, yyyy')}</p>
		</div>

		
	</div></a>