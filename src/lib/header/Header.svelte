<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav class="header">
		<a href="/" class="header__title">HOMEPAGE</a>
		<ul class="header__links">
			<li class="header__links_item">
			  <a href="/" class="header__links__item__link">Home</a>
			</li>
			<li class="header__links_item">
			  <a href="/about" class="header__links__item__link">About</a>
			</li>
		  </ul>
	</nav>

	<div class="welcome">
		<picture>
			
			<img src="https://andreian02.github.io/images/Clouds.jpg" alt="Welcome" />
		</picture>
	</div>
</header>



<style>
	.header {
    height: 5rem;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
	
	

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
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

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
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
