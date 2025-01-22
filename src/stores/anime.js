import { defineStore } from 'pinia'

export const useAnimeStore = defineStore('anime', {
	state: () => ({
		animeList: [
			{
				id: 1,
				title: 'Attack on Titan',
				description:
					'Humanity fights for survival against giant humanoid creatures.',
				image:
					'https://dere.shikimori.one/uploads/poster/animes/16498/7a452aa20f27318bd8d87e3d70c2ccca.jpeg',
				episodes: 25,
				genre: ['Action', 'Drama', 'Fantasy'],
				rating: 4.8,
			},
			{
				id: 2,
				title: 'Death Note',
				description: 'A high school student discovers a supernatural notebook.',
				image:
					'https://upload.wikimedia.org/wikipedia/ru/a/a9/Death_Note_Manga_Cover_Russian.jpg',
				episodes: 37,
				genre: ['Thriller', 'Supernatural', 'Psychological'],
				rating: 4.7,
			},
			{
				id: 3,
				title: 'One Punch Man',
				description:
					'A superhero who can defeat any opponent with a single punch.',
				image:
					'https://m.media-amazon.com/images/S/pv-target-images/e810bd7f40b1581298fa2b1de65caa83ba4cc37b4827fc80ab77f29151bdb037.jpg',
				episodes: 12,
				genre: ['Action', 'Comedy', 'Superhero'],
				rating: 4.6,
			},
		],
		favorites: [],
		searchQuery: '',
	}),
	getters: {
		getFavorites: state => state.favorites,
		getAnimeById: state => id => state.animeList.find(anime => anime.id === id),
		filteredAnime: state => {
			const query = state.searchQuery.toLowerCase()
			if (!query) return state.animeList

			return state.animeList.filter(
				anime =>
					anime.title.toLowerCase().includes(query) ||
					anime.description.toLowerCase().includes(query) ||
					anime.genre.some(tag => tag.toLowerCase().includes(query))
			)
		},
	},
	actions: {
		toggleFavorite(animeId) {
			const index = this.favorites.indexOf(animeId)
			if (index === -1) {
				this.favorites.push(animeId)
			} else {
				this.favorites.splice(index, 1)
			}
		},
		setSearchQuery(query) {
			this.searchQuery = query
		},
	},
})
