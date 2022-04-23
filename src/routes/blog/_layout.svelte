<script>
	export let title;
	export let date;
	import ButtonLink from '../../components/ButtonLink.svelte';
	
</script>

<svelte:head>
	<title>Blog Entry | {title}</title>
</svelte:head>


<div
	class="mx-auto flex max-w-2xl flex-col items-start justify-center my-3 border-gray-200 px-4 pb-16 dark:border-gray-700 sm:px-8"
>	
	<h2 class="mb-3 text-2xl font-bold tracking-tight md:text-3xl py-2">
		{title}
	  </h2>
	<span class="postDate">{new Date(date).toDateString()}</span>
	<slot />
	<ButtonLink href="/blog" size="small" raised={false} class="mt-10"
		>Back
	</ButtonLink>
	
</div>

<style>
</style>
