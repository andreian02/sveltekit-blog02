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
       
          await import(`../../../blogs/${post.slug}/index.md`)
        : await import(`../../../blogs/${post.slug}.md`)
  
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
    import ButtonLink from '../../components/ButtonLink.svelte';

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

<svelte:head>
	<title> Post Entry | {title}</title>
</svelte:head>


<article class="mx-auto flex max-w-2xl flex-col items-start justify-center my-3 border-gray-200 px-4 pb-16 dark:border-gray-700 sm:px-8">
  <h2 class="mb-3 text-2xl font-bold tracking-tight md:text-3xl py-2">
		{title}
	</h2>

    <div class="opacity-85 font-light text-sm">
      <span datetime={new Date(parseISO(date)).toISOString()}
        >{format(new Date(parseISO(date)), 'MMMM d, yyyy')}</span>
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

    <ButtonLink href="/blog" size="small" raised={false} class="mt-10"
		>Back to All Posts
	</ButtonLink>

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
