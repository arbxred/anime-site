<template>
	<div
		class="bg-gray-800 aspect-video mb-6 rounded-lg flex items-center justify-center"
	>
		<p class="text-gray-400">Video player placeholder for {{ title }}</p>
	</div>
</template>

<script>
export default {
	name: 'VideoPlayer',
	props: {
		title: {
			type: String,
			required: true,
		},
	},
}
</script>
