
<script>
	export let title;
	import ButtonLink from '../../components/ButtonLink.svelte';
</script>

<svelte:head>
	<title> Post \\ {title}</title>
</svelte:head>


<slot/>

<ButtonLink href="/blog" size="small" raised={false} class="mt-10"
	>Back to all Posts
</ButtonLink>

