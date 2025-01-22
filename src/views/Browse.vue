<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8 text-white">Browse Anime</h1>
    <search-bar />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <anime-card
        v-for="anime in filteredAnime"
        :key="anime.id"
        :anime="anime"
      />
    </div>
  </div>
</template>

<script>
import { useAnimeStore } from '../stores/anime';
import AnimeCard from '../components/AnimeCard.vue';
import SearchBar from '../components/SearchBar.vue';

export default {
  name: 'Browse',
  components: {
    AnimeCard,
    SearchBar
  },
  computed: {
    filteredAnime() {
      const store = useAnimeStore();
      return store.filteredAnime;
    }
  }
};
</script>