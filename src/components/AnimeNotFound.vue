<template>
	<div class="text-center text-gray-400">
		<p>Anime not found</p>
		<router-link
			to="/browse"
			class="inline-block mt-4 text-blue-400 hover:text-blue-300"
		>
			Browse other anime
		</router-link>
	</div>
</template>

<script>
export default {
	name: 'AnimeNotFound',
}
</script>
