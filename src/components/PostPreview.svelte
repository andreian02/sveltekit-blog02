<script>
  import { format, parseISO } from 'date-fns'
  import ButtonLink from './ButtonLink.svelte'

  export let post
  export let small = false
</script>

<div class="flex flex-col">
  <div>
    {#if !small}
      <h1 class="!mt-0 !mb-2">
        <a href={`/posts/${post.slug}`}>{post.title}</a>
      </h1>
    {:else}
      <h3 class="!mt-0 !mb-2">
        <a href={`/posts/${post.slug}`}>{post.title}</a>
      </h3>
    {/if}
    <!-- <div class="opacity-85 font-light text-sm">
      <span>{format(new Date(parseISO(post.date)), 'MMMM d, yyyy')}</span>
      •
      <span>{post.readingTime}</span>
    </div> -->

  </div>
  <!-- <div class="flex-1">{@html post.preview.html}</div> -->

  <!-- <slot name="actions">
    <div class="flex justify-end w-full">
      <ButtonLink href={`/blog/${post.slug}`}>x</ButtonLink>
    </div>
  </slot> -->
</div>
