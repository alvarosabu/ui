<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { graphicType, graphicTypeMap } from './const'

export interface GraphicProps {
  type?: string
}

const props = withDefaults(defineProps<GraphicProps>(), {
  type: graphicType.DOTS,
})

const { type } = toRefs(props)

const graphic = computed(() => graphicTypeMap[type.value])
</script>

<template>
  <component :is="graphic" />
</template>
