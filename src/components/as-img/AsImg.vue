<script setup lang="ts">
import type { StyleValue } from 'vue'
import { computed, ref, useAttrs } from 'vue'
import { imgFitModes, imgCaptionType, imgAspectRatios } from './const'

export interface ImgProps {
  aspectRatio?: string
  objectFit?: string
  caption?: string
  captionMode?: string
  captionType?: string
}
const {
  aspectRatio = imgAspectRatios[0],
  objectFit = imgFitModes.CONTAIN,
  caption,
  captionType = imgCaptionType.OUTSIDE,
} = defineProps<ImgProps>()

// eslint-disable-next-line
const emit = defineEmits<{
  (e: 'loaded', event: Event): void
  (e: 'error', errorMessage: string): void
}>()

const attrs = useAttrs()

const imgAttrs = computed(() => ({
  src: attrs.src as string,
  alt: attrs.alt as string,
}))

const hasError = ref(false)
const loading = ref(true)

const imgStyles = computed(
  () =>
    ({
      objectFit,
    } as StyleValue),
)

const imgClasses = computed(() => ({
  'w-full bg-gray-100 relative': true,
  'overflow-hidden :before:(bg-red-100 block absolute inset-0 bg-no-repeat bg-center)': hasError.value,
}))

const figureClasses = ref([
  'as-img',
  'relative',
  'overflow-hidden',
  'rounded',
  'm-0',
  aspectRatio ? `aspect-${aspectRatio}` : null,
])

const captionClasses = computed(() => {
  switch (captionType) {
    case imgCaptionType.OUTSIDE:
      return ['text-sm', 'py-4']
    case imgCaptionType.BOTTOM:
      return 'absolute bg-black text-sm text-white bottom-0 bg-opacity-20 w-full p-4 text-center'
    case imgCaptionType.FULL:
      return `absolute bg-black text-sm text-white inset-0 bg-opacity-20 w-full 
      p-4 text-center flex items-center justify-center`
    default:
      return ''
  }
})

function onLoad(event: Event) {
  hasError.value = false
  loading.value = false

  emit('loaded', event)
}

function onError(event: Event) {
  hasError.value = true
  loading.value = false

  const { src } = event.target as HTMLImageElement
  const errorMessage = `Image source ${src} not found`

  emit('error', errorMessage)
}
</script>

<template>
  <figure :class="figureClasses">
    <img
      :src="imgAttrs.src"
      :alt="imgAttrs.alt"
      :class="imgClasses"
      :style="imgStyles"
      @load="onLoad"
      @error="onError"
    >
    <!-- TODO: Implement when loaders -->
    <!--  <as-particle-loader
      size="4rem"
      class="absolute text-gray-400 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      v-if="loading"
    /> -->
    <figcaption
      v-if="caption || $slots.default"
      :class="captionClasses"
    >
      <slot>{{ caption }} </slot>
    </figcaption>
  </figure>
</template>
