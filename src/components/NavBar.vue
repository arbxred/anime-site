<template>
	<nav class="bg-gray-900 text-white p-4">
		<div class="container mx-auto flex justify-between items-center">
			<router-link to="/" class="text-xl font-bold text-blue-400"
				>LostHikki</router-link
			>
			<div class="space-x-4">
				<router-link
					v-for="link in links"
					:key="link.to"
					:to="link.to"
					class="hover:text-blue-400 transition-colors"
					active-class="text-blue-400"
				>
					{{ link.text }}
				</router-link>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'NavBar',
	data() {
		return {
			links: [
				{ to: '/', text: 'Home' },
				{ to: '/browse', text: 'Browse' },
				{ to: '/favorites', text: 'Favorites' },
				{ to: '/about', text: 'About' },
			],
		}
	},
}
</script>
