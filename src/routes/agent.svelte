<script context="module">
    export const prerender = true
  
    export const load = async ({ fetch }) => {
      return {
        props: {
          recentPosts: await fetch('/posts.json?limit=3').then((res) => res.json())
        }
      }
    }
  </script>
  
  <script>
    import ButtonLink from '../components/ButtonLink.svelte'
    import FeatureCard from '../components/FeaturedCard.svelte';
    import PostPreview from '../components/PostPreview.svelte'
    
  
    export let recentPosts
    console.log(recentPosts)
  </script>
  
  <svelte:head>
    <title>AGENT</title>
  </svelte:head>

  <div
	class="mx-auto flex max-w-2xl flex-col items-start justify-center border-gray-200 px-4 pb-16 dark:border-gray-700 sm:px-8"
>

  <section class="mb-16 w-full">
    <h3 class="mb-6 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
      Recent Posts
    </h3>
    
    <div class="flex flex-col gap-6 md:flex-row">
      {#each recentPosts as Post}
      <FeatureCard title={Post.title} href={`/blog/${Post.slug}`} stringData="Jan 2022" />
      <!-- <FeatureCard
        title="Moving to a GitHub CMS"
        href="/moving-to-a-github-cms"
        stringData="Jan 2022"
      />
      <FeatureCard title="HTML Ipsum demo" href="/moo" stringData="Jan 2022" /> -->
      {/each}
    </div>
    <a
      class="mt-8 flex h-6 rounded-lg leading-7 text-gray-600 transition-all dark:text-gray-400 dark:hover:text-gray-200"
      href="/blog"
      >See latest posts<svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="ml-1 h-6 w-6"
        ><path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
        /></svg
      ></a
    >
    
  </section>




</div>

