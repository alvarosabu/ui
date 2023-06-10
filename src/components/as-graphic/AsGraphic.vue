<script setup lang="ts">
import { computed } from 'vue'
import { graphicType, graphicTypeMap } from './const'

export interface GraphicProps {
  type?: string
}

const { 
  type = graphicType.DOTS,
} = defineProps<GraphicProps>()
const graphic = computed(() => graphicTypeMap[type])
</script>

<template>
  <component :is="graphic" />
</template>
