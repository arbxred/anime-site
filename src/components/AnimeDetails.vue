<template>
	<div class="bg-gray-800 p-6 rounded-lg">
		<div class="flex justify-between items-start mb-4">
			<h1 class="text-2xl font-bold text-white">{{ anime.title }}</h1>
			<button
				@click="$emit('toggle-favorite')"
				class="text-2xl text-yellow-400 hover:text-yellow-300"
			>
				{{ isFavorite ? '★' : '☆' }}
			</button>
		</div>
		<p class="text-gray-400 mb-4">{{ anime.description }}</p>

		<TagList :tags="anime.genre" />

		<div class="text-gray-400 mt-4">
			<p>Episodes: {{ anime.episodes }}</p>
			<p>Rating: {{ anime.rating }}/5</p>
		</div>
	</div>
</template>

<script>
import TagList from './TagList.vue'

export default {
	name: 'AnimeDetails',
	components: {
		TagList,
	},
	props: {
		anime: {
			type: Object,
			required: true,
		},
		isFavorite: {
			type: Boolean,
			required: true,
		},
	},
}
</script>
