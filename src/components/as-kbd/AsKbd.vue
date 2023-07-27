<script setup lang="ts">
import { toRefs } from 'vue';
import { kbdSize } from './const'

const props = withDefaults(defineProps<{
  size: 'xs' | 'sm' | 'md'
  value: string
}>(), { size: kbdSize.SM } )

const { size, value } = toRefs(props)

const kbdSizeClass = {
  [kbdSize.XS]: 'h-4 min-w-[16px] text-[10px]',
  [kbdSize.SM]: 'h-5 min-w-[20px] text-[11px]',
  [kbdSize.MD]: 'h-6 min-w-[24px] text-[12px]',
}
</script>

<template>
  <kbd
    class="as-kbd"
    inline-flex
    items-center
    justify-center
    text-gray-900
    dark:text-white
    px-1
    rounded
    font-medium
    font-sans
    bg-gray-100
    dark:bg-gray-800
    ring-1
    ring-gray-300
    dark:ring-gray-700
    ring-inset
    :class="kbdSizeClass[size]"
  >
    <slot>
      {{ value }}
    </slot>
  </kbd>
</template>

<style>
.as-kbd:not:last-of-type {
  margin-right: 0.25rem;
}
</style>

