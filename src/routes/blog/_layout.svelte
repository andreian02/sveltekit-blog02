<script>
	export let title;
	
</script>

<svelte:head>
	<title>Work | {title}</title>
</svelte:head>

<!-- <div class="max-w-xl mx-auto py-6"> -->
<div
	class="mx-auto flex max-w-2xl flex-col items-start justify-center border-gray-200 px-4 pb-16 dark:border-gray-700 sm:px-8"
>
	<slot />
	
</div>

<style>
	.container {
		max-width: 800px;
		margin: 30px auto;
	}
</style>
