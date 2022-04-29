<!--blur and fly transition effect -->
<script>
	import { blur } from 'svelte/transition';
	export let url = '';
</script>

<!-- <script>
    import { fly } from "svelte/transition";
    export let url = "";
  </script>
  
  {#key url}
    <div
      in:fly={{ x: -5, duration: 500, delay: 500 }}
      out:fly={{ x: 5, duration: 500 }}
    >
      <slot />
    </div>
  {/key} -->

{#key url}
	<div in:blur={{ duration: 400, delay: 400, amount: 5 }} out:blur={{ duration: 400 }}>
		<slot />
	</div>
{/key}
