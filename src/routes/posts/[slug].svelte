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
  import ChevronDoubleRightIcon from 'heroicons-svelte/solid/ChevronDoubleRightIcon.svelte';
  import ChevronDoubleLeftIcon from 'heroicons-svelte/solid/ChevronDoubleLeftIcon.svelte';

  // metadata
  export let title
  export let tags
  export let date
  export let readingTime
  export let next
  export let previous
  export let component

  // export let preview
  // export let slug
</script>


<article class="mx-auto flex max-w-2xl flex-col items-start justify-center my-3 border-gray-200 px-4 pb-16 dark:border-gray-700 sm:px-8">
<h2 class="mb-3 text-2xl font-bold tracking-tight md:text-3xl py-2">
  {title}
</h2>

  <div class="opacity-85 font-light text-sm">
    <span datetime={new Date(parseISO(date)).toISOString()}
      >{format(new Date(parseISO(date)), 'MMMM d, yyyy')}</span>
    •
    <span>{readingTime}</span>
    •
    <span>[{tags}]</span>
    <!-- <span>{tags}</span> -->
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
<div class="grid gap-6 grid-cols-2 sm:grid-cols-2">
{#if previous}
  <div class="flex flex-row pt-6 text-sm justify-self-end">
    
    <!-- <h6 class="not-prose post-preview-label flex items-center"><ChevronDoubleLeftIcon class="h-4 w-4"/>Previous Post</h6> -->
    <ChevronDoubleLeftIcon class="h-4 w-4"/>
    <div class="flex-1 post-preview">
      <PostPreview post={previous} small />
    </div>
  </div>
{:else}
  <div />
{/if}
{#if next}
  
  <div class="flex flex-row pt-6 text-sm justify-self-start">
    
    <!-- <h6 class="not-prose post-preview-label flex items-center space-x-1">Next Post<ChevronDoubleRightIcon class="h-4 w-4"/></h6> -->
    <div class="flex-1 post-preview">
      <PostPreview post={next} small />
    </div>
    <ChevronDoubleRightIcon class="h-4 w-4"/>
  </div>
{/if}
</div>
{/if}
