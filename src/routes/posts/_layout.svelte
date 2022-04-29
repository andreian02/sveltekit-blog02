<script>
	export let title;
	export let tags;
</script>

<svelte:head>
	<title>Post \ {title}</title>
</svelte:head>

<slot />

<div class="text-sm mt-28">
	Related Tags :
	<span class="opacity-85 font-light text-sm">[{tags}]</span>
</div>

<!-- <ButtonLink href="/posts" size="small" raised={false} class="mt-4">Back to all Posts</ButtonLink> -->
