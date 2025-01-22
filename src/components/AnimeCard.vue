<template>
  <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
    <img :src="anime.image" :alt="anime.title" class="w-full h-64 object-cover">
    <div class="p-4">
      <div class="flex justify-between items-start mb-2">
        <h3 class="text-lg font-semibold text-white">{{ anime.title }}</h3>
        <button 
          @click="toggleFavorite"
          class="text-yellow-400 hover:text-yellow-300"
        >
          <span v-if="isFavorite">★</span>
          <span v-else>☆</span>
        </button>
      </div>
      <p class="text-gray-400 text-sm mb-2">{{ anime.description }}</p>
      <div class="flex flex-wrap gap-2 mb-2">
        <span 
          v-for="tag in anime.genre" 
          :key="tag"
          class="px-2 py-1 text-xs bg-blue-600 text-white rounded-full"
        >
          {{ tag }}
        </span>
      </div>
      <div class="flex justify-between items-center text-sm text-gray-400">
        <span>{{ anime.episodes }} episodes</span>
        <span>Rating: {{ anime.rating }}/5</span>
      </div>
      <router-link 
        :to="'/watch/' + anime.id"
        class="mt-4 block w-full text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        Watch Now
      </router-link>
    </div>
  </div>
</template>

<script>
import { useAnimeStore } from '../stores/anime';

export default {
  name: 'AnimeCard',
  props: {
    anime: {
      type: Object,
      required: true
    }
  },
  computed: {
    isFavorite() {
      const store = useAnimeStore();
      return store.favorites.includes(this.anime.id);
    }
  },
  methods: {
    toggleFavorite() {
      const store = useAnimeStore();
      store.toggleFavorite(this.anime.id);
    }
  }
};
</script>