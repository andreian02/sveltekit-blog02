<!-- src/routes/__error.svelte -->
<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				message: error.message,
				status // same as status: status
			}
		};
	}
</script>

<script>
	export let message;
	export let status;
</script>

<article
	class="mx-auto flex max-w-2xl flex-col items-start justify-center my-3 border-gray-200 px-4 pb-2 dark:border-gray-700 sm:px-8"
>
	<div class="flex flex-col-reverse items-start sm:flex-row">
		<section class="p-8 border-gray-500 rounded">
			<h1 class="text-center text-4xl font-mono-mt-4">{status}</h1>
			<p class="text-center">{message}</p>
		</section>
	</div>
</article>
