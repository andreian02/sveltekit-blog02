<script>
	// import ArrowRightIcon from './ArrowRightIcon.svelte';
	import ChevronDoubleLeftIcon from 'heroicons-svelte/solid/ChevronDoubleLeftIcon.svelte';
	export let href;
	export let raised = true;
	export let size = 'medium'; // small, medium, or large
	let className = '';
	export { className as class };
</script>

<div class="not-prose">
	<a
		{...$$restProps}
		{href}
		class={'block rounded-md no-underline ' + className}
		class:small={size === 'small'}
		class:medium={size === 'medium'}
		class:large={size === 'large'}
		class:raised
	>
		<div class="flex items-center space-x-1">
			<slot name="icon-start" />
			<ChevronDoubleLeftIcon class="h-5 w-5" />
			<span>
				<slot />
			</span>
			<slot name="icon-end" />
		</div>
	</a>
</div>
