<script setup lang="ts">
import { computed } from 'vue'
import { asIcons } from './const'

const props = defineProps<{ name: string }>()

const iconName = computed(() => asIcons.get(props.name))
</script>

<template>
  <div :class="`i-${iconName}`"></div>
</template>
