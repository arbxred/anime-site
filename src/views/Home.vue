<template>
	<div class="container mx-auto px-4 py-8">
		<div class="text-center mb-12">
			<h1 class="text-4xl font-bold mb-4 text-white">Welcome to LostHikki</h1>
			<p class="text-xl text-gray-400">
				Your gateway to the best anime streaming experience
			</p>
		</div>

		<div class="mb-12">
			<h2 class="text-2xl font-semibold mb-6 text-white">Popular Now</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<anime-card
					v-for="anime in popularAnime"
					:key="anime.id"
					:anime="anime"
				/>
			</div>
		</div>

		<div class="text-center">
			<router-link
				to="/browse"
				class="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
			>
				Browse All Anime
			</router-link>
		</div>
	</div>
</template>

<script>
import { useAnimeStore } from '../stores/anime'
import AnimeCard from '../components/AnimeCard.vue'

export default {
	name: 'Home',
	components: {
		AnimeCard,
	},
	computed: {
		popularAnime() {
			const store = useAnimeStore()
			return store.animeList.slice(0, 3)
		},
	},
}
</script>
