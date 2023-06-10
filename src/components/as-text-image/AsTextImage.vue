<script setup lang="ts">
import { computed } from 'vue'
import { textImgDirection } from './const'
import AsImg from '../as-img/AsImg.vue'
import AsGraphic from '../as-graphic/AsGraphic.vue'

export type TextImageProps = {
  media: {
    src: string
    alt: string
    aspectRatio: string
  }
  direction?: string
}
const {
  media,
  direction = textImgDirection.DEFAULT,
} = defineProps<TextImageProps>()

const isReverse = computed(() => direction === textImgDirection.REVERSE)
</script>
<template>
  <div
    class="flex"
    :class="
      isReverse
        ? 'important-flex-col-reverse sm:important-flex-row-reverse'
        : 'important-flex-col sm:important-flex-row'
    "
  >
    <div class="relative w-full sm:w-1/2 py-4 min-h-300px sm:min-h-375px">
      <AsGraphic class="absolute top-16 scale-75" :class="isReverse ? 'right-0' : 'left-0'" />
      <div class="absolute w-2/3 rounded-xl" :class="isReverse ? 'left-0' : 'right-0'">
        <AsImg class="shadow-lg" :src="media.src" :alt="media.alt" :aspect-ratio="media.aspectRatio" />
      </div>
    </div>
    <div class="w-full sm:w-1/2 prose" :class="isReverse ? 'sm:pr-16' : 'sm:pl-16'">
      <slot />
    </div>
  </div>
</template>
