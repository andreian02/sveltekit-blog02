<script>
	import { page } from '$app/stores';
	import NavLink from './NavLink.svelte';
</script>

<header>
	<nav class="relative mx-auto flex w-full max-w-2xl items-center justify-between border-gray-200 bg-gray-50 bg-opacity-60 py-8 text-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 sm:pb-16">
		<a href="/" class="header__title">HOMEPAGE</a>
		
		<ul class="ml-[-0.60rem] flex">
			<li class="header__links_item">
			  <a href="/" class="header__links__item__link">Home</a>
			</li>
			<li class="header__links_item">
			  <a href="/about" class="header__links__item__link">Works</a>
			</li>
			<li class="header__links_item">
				<a href="/about" class="header__links__item__link">Blog</a>
			  </li>
			  <li class="header__links_item">
				<a href="/about" class="header__links__item__link">About</a>
			  </li>
		  </ul>
			
	</nav>

	
</header>



<style>
	.header {
    height: 4rem;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  	}

	.header__title {
		margin-left: 1rem;
		text-decoration: none;
		font-weight: bold;
		font-size: 1rem;
		line-height: 6.2rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.header__links {
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style: none;
  	}
  	
	.header__links_item {
    margin-left: 1rem;
  	}

	.header__links_item:last-child {
    margin-right: 1rem;
  	}
  	
	.header__links__item__link {
    padding-bottom: 0.2rem;
    color: var(--secondary-color);
    text-decoration: none;
  	}
  	
	.header__links__item__link:hover {
    border-bottom: 1.5px solid var(--secondary-color);
  	}

	
	img{
		display:flex;
    	width: 100%;
		height: auto; 
		flex-direction: column;
	}

	nav {
		display: flex;
		justify-content: center;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
