<script context="module">
	export const load = async ({ fetch }) => {
		const top_tracks = await fetch('../api/top_tracks.json').then((res) => res.json());
		return {
			props: { top_tracks }
		};
	};
</script>

<script>
	export let top_tracks;
</script>

<div
	class="mx-auto flex max-w-2xl flex-col items-start justify-center border-gray-200 px-4 pb-16 dark:border-gray-700 sm:px-8">
<div class="flex flex-col justify-center items-start max-w-2xl mb-16">
	<div class="flex flex-col pr-8">
		<h3 class="mb-3 text-2xl font-bold tracking-tight md:text-4xl py-4">
			Recent Tracks
		</h3>
		<p class="mb-8">
			Curious what I'm currently jamming to? Here's my top tracks on Spotify updated daily.
		</p>
	</div>

	<div>
		{#each top_tracks.top_tracks as track, index}
			<div class="grid grid-cols-4 content-start">
				<div class="col-span-3">
					<a
						class="font-semibold text-lg"
						href={track.external_urls.spotify}
						rel="noopener noreferrer"
						target="_blank">{index + 1}. {track.name}</a
					>
					<span>{track.artists[0].name}</span>
				</div>
				<img
					class="my-0 mb-4 mt-2 h-20 w-20"
					alt="{track.name}'s album cover"
					height={track.album.images[1].height}
					width={track.album.images[1].width}
					src={track.album.images[1].url}
				/>
			</div>
			<hr class="mt-2 mb-8" />
		{/each}
	</div>
</div>
</div>