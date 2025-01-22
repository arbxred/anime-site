<template>
	<div class="container mx-auto px-4 py-8">
		<div v-if="anime" class="max-w-4xl mx-auto">
			<VideoPlayer :title="anime.title" />

			<AnimeDetails
				:anime="anime"
				:is-favorite="isFavorite"
				@toggle-favorite="toggleFavorite"
			/>
		</div>
		<div v-else>
			<AnimeNotFound />
		</div>
	</div>
</template>

<script>
import { useAnimeStore } from '../stores/anime.js'
import VideoPlayer from '../components/VideoPlayer.vue'
import AnimeDetails from '../components/AnimeDetails.vue'
import AnimeNotFound from '../components/AnimeNotFound.vue'

export default {
	name: 'Watch',
	components: {
		VideoPlayer,
		AnimeDetails,
		AnimeNotFound,
	},
	computed: {
		anime() {
			const store = useAnimeStore()
			return store.getAnimeById(parseInt(this.$route.params.id))
		},
		isFavorite() {
			const store = useAnimeStore()
			return store.favorites.includes(this.anime?.id)
		},
	},
	methods: {
		toggleFavorite() {
			if (this.anime) {
				const store = useAnimeStore()
				store.toggleFavorite(this.anime.id)
			}
		},
	},
}
</script>
