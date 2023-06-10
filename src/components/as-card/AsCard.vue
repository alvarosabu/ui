<script setup lang="ts">
import AsImg from '../as-img/AsImg.vue'

export interface CardProps {
  title?: string
  subtitle?: string
  media?: string
  mediaAlt?: string
  content?: string
}

defineProps<CardProps>()
</script>

<template>
  <div
    class="as-card"
    border="1 gray-300 rounded"
    text="primary-500 dark:gray-100 left"
    font="sans"
    w-full
    inline-flex
    flex-col
    cursor-pointer
  >
    <slot name="header">
      <header>
        <AsImg
          v-if="media"
          w-full
          rounded-none
          :src="media"
          :alt="mediaAlt"
          aspect-ratio="16/9"
        />
        <h2
          v-if="title"
          font="bold display"
          text="base lg"
          p-4
          m-0
        >
          <slot name="title">
            {{ title }}
          </slot>
        </h2>
        <p
          v-if="subtitle"
          m-0
          pl-4
          font-typewrite
          text-xs
        >
          <slot name="subtitle">
            {{ subtitle }}
          </slot>
        </p>
      </header>
    </slot>
    <slot name="content">
      <div
        text-sm
        p-4
        opacity-80
      >
        {{ content }}
      </div>
    </slot>
    <slot name="footer">
      <footer
        flex
        w-full
        text-sm
        justify-end
      />
    </slot>
  </div>
</template>
