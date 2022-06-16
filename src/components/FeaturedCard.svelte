<script>
	// export let title = 'Untitled post';
	// export let href = '#';
	/** @type {string} */

	import { format, parseISO } from 'date-fns';
	export let Post;
</script>

<a class="w-full transform rounded-xl border-2 border-slate-400 p-1 hover:scale-[1.01] md:w-1/3" href={`/posts/${Post.slug}`}
	><div class="flex h-full flex-col justify-between rounded-lg p-2">
		<div class="flex flex-col justify-between md:flex-row">
			<h4 class="w-full text-md font-medium tracking-tight sm:mb-2 md:text-md">
				{Post.title}
			</h4>
		</div>
		<div class="capsize text-sm flex items-center">
			<!-- {Post.date} -->
			<p>{format(new Date(parseISO(Post.date)), 'MMMM dd, yyyy')}</p>
		</div>
	</div></a
>
