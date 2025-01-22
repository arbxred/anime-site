<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8 text-white">Your Favorites</h1>
    <div v-if="favoriteAnime.length === 0" class="text-center text-gray-400">
      <p>You haven't added any favorites yet.</p>
      <router-link
        to="/browse"
        class="inline-block mt-4 text-blue-400 hover:text-blue-300"
      >
        Browse anime to add some favorites
      </router-link>
    </div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <anime-card
        v-for="anime in favoriteAnime"
        :key="anime.id"
        :anime="anime"
      />
    </div>
  </div>
</template>

<script>
import { useAnimeStore } from '../stores/anime';
import AnimeCard from '../components/AnimeCard.vue';

export default {
  name: 'Favorites',
  components: {
    AnimeCard
  },
  computed: {
    favoriteAnime() {
      const store = useAnimeStore();
      return store.animeList.filter(anime => store.favorites.includes(anime.id));
    }
  }
};
</script>