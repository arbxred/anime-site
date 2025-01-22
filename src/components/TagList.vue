<template>
	<div class="flex flex-wrap gap-2">
		<span
			v-for="tag in tags"
			:key="tag"
			class="px-3 py-1 bg-blue-600 text-white rounded-full text-sm"
		>
			{{ tag }}
		</span>
	</div>
</template>

<script>
export default {
	name: 'TagList',
	props: {
		tags: {
			type: Array,
			required: true,
		},
	},
}
</script>
