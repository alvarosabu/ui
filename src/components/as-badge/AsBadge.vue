<script setup lang="ts">
import { computed } from 'vue'
import AsIcon from '../as-icon/AsIcon.vue'

export interface BadgeProps {
  label?: string
  outline?: boolean
  icon?: string
}

const props = defineProps<BadgeProps>()

const badgeClasses = computed(() => {
  const classes: (string | { [key: string]: boolean })[] = ['rounded-lg text-sm font-bold py-0.5 px-1 ml-4']

  if (props.outline) {
    classes.push('border-secondary text-secondary border-1')
  }
  else {
    classes.push('border-transparent border-1 bg-secondary text-secondary-100')
  }

  return classes
})
</script>

<template>
  <span
    class="inline-flex items-center rounded-md text-xs font-sans py-0.5 px-1 ml-4 f"
    :class="badgeClasses"
  >
    <AsIcon
      v-if="icon"
      :class="{ 'mr-0.5': label }"
      :name="icon"
    /> {{ label }}
  </span>
</template>
