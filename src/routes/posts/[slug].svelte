<script context="module">
    /**
     * @type {import('@sveltejs/kit').Load}
     */
    export async function load({ params, fetch }) {
      const { slug } = params
  
      // fetch posts from endpoint so that it includes all metadata (see posts.json.js for explanation)
      const posts = await fetch('/posts.json').then((res) => res.json())
      const post = posts.find((post) => slug === post.slug)
  
      if (!post) {
        return {
          status: 404,
          error: 'Post not found'
        }
      }
  
      const component = post.isIndexFile
        ? // vite requires relative paths and explicit file extensions for dynamic imports
          await import(`../../../posts/${post.slug}/index.md`)
        : await import(`../../../posts/${post.slug}.md`)
  
      return {
        props: {
          ...post,
          component: component.default
        }
      }
    }
  </script>


<script>
    import { format, parseISO } from 'date-fns'
    import PostPreview from "../../components/PostPreview.svelte"
    // metadata
    export let title
    export let date
    export let preview
    export let readingTime
    export let slug
    export let next
    export let previous

    export let component
</script>



<article class="relative">
    <h1 class="!mt-0 !mb-2">
      <!-- <a class="!font-medium" href={$page.url.pathname}> -->
        {title}
      <!-- </a> -->
    </h1>
    <div class="opacity-70">
      <time datetime={new Date(parseISO(date)).toISOString()}
        >{format(new Date(parseISO(date)), 'MMMM d, yyyy')}</time
      >
      •
      <span>{readingTime}</span>
    </div>
  
    <div class="relative">
      <!-- render the post -->
      <svelte:component this={component} />
  
      <!-- table of contents -->
      <div class="hidden xl:block absolute not-prose left-[100%]" aria-label="Table of Contents">
        <div class="fixed z-10 px-4 py-2 ml-8 top-[4.5rem]">
          <!-- ignore h1 tags as they should only be used for the post title -->
          <!-- <ToC allowedHeadings={['h2', 'h3', 'h4', 'h5', 'h6']} /> -->
        </div>
      </div>
    </div>
  </article>


  <!-- next/previous posts -->
{#if previous || next}
<hr />
<div class="grid gap-8 grid-cols-1 sm:grid-cols-2">
  {#if previous}
    <div class="flex flex-col">
      <h6 class="not-prose post-preview-label">Previous Post</h6>
      <div class="flex-1 post-preview">
        <PostPreview post={previous} small />
      </div>
    </div>
  {:else}
    <div />
  {/if}
  {#if next}
    <div class="flex flex-col">
      <h6 class="not-prose post-preview-label flex justify-end">Next Post</h6>
      <div class="flex-1 post-preview">
        <PostPreview post={next} small />
      </div>
    </div>
  {/if}
</div>
{/if}
