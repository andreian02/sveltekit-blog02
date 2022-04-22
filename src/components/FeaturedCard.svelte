<script>
	export let title = 'Untitled post';
	export let href = '#';
	/** @type {string} */
	export let stringData;
</script>

<a
	class="w-full transform rounded-xl p-1 md:w-1/3"
	{href}
	><div class="flex h-full flex-col justify-between rounded-lg p-4 dark:bg-gray-900">
		<div class="flex flex-col justify-between md:flex-row">
			<h4
				class="mb-6 w-full text-lg font-medium tracking-tight sm:mb-10 md:text-lg"
			>
				{title}
			</h4>
		</div>
		<div class="capsize flex items-center">
			{stringData}
		</div>
	</div></a>