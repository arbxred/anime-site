<template>
  <div class="max-w-xl mx-auto mb-8">
    <input
      type="text"
      v-model="searchQuery"
      @input="updateSearch"
      placeholder="Search anime by title, description, or genre..."
      class="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500 placeholder-gray-500"
    />
  </div>
</template>

<script>
import { useAnimeStore } from '../stores/anime';

export default {
  name: 'SearchBar',
  data() {
    return {
      searchQuery: ''
    };
  },
  methods: {
    updateSearch() {
      const store = useAnimeStore();
      store.setSearchQuery(this.searchQuery);
    }
  }
};
</script>