<script setup lang="ts">
import { computed } from 'vue'
import AsIcon from '../as-icon/AsIcon.vue'
import { btnSize, btnVariant } from '.'

export interface ButtonProps {
  label?: string
  icon?: string
  iconRight?: string
  disabled?: boolean
  outline?: boolean
  link?: boolean
  target?: string
  variant?: string
  size?: string
  flat?: boolean
  transparent?: boolean
}

const {
  disabled = false,
  outline = false,
  link = false,
  flat = false,
  target = '_blank',
  label,
  variant = btnVariant.PRIMARY,
  size = btnSize.DEFAULT,
  transparent = false,
} = defineProps<ButtonProps>()

const hasLabel = computed(() => !!label)

// Classes
const btnClasses = computed(() => {
  const classes: (string | { [key: string]: boolean })[] = ['as-btn']

  if (variant) {
    if (flat) {
      classes.push(`btn-flat-${variant.toLowerCase()}`)
    }
    else if (outline) {
      classes.push(`btn-outline-${variant.toLowerCase()}`)
    }
    else if (transparent) {
      classes.push(`btn-transparent-${variant.toLowerCase()}`)
    }
    else {
      classes.push(`btn-${variant.toLowerCase()}`)
    }
  }

  if (size) {
    classes.push({
      'py-2 px-4': size === btnSize.DEFAULT,
      'w-full py-2 px-5': size === btnSize.BLOCK,
      'text-xs py-1 px-2': size === btnSize.SM,
      'text-sm py-1.5 px-3': size === btnSize.MD,
      'text-lg py-2.5 px-5': size === btnSize.LG,
    })
  }

  return classes
})
</script>

<template>
  <component
    :is="link ? 'a' : 'button'"
    :disabled="disabled"
    :href="link || undefined"
    :target="link ? target : undefined"
    :class="btnClasses"
    font="sans semibold"
    border="2 rounded-sm"
    flex
    items-center 
    justify-center
    gap-2
    transition-all
    duration-300
    disabled:opacity-20
    cursor-pointer
    decoration-none
  >
    <slot name="preffix">
      <AsIcon
        v-if="icon"
        :name="icon"
        class="bg-current"
        :class="hasLabel ? 'mr-2' : ''"
      />
    </slot>
    <slot name="default">
      {{ label }}
    </slot>
    <slot name="suffix">
      <AsIcon
        v-if="hasLabel && iconRight"
        :name="iconRight"
        class="b-current"
        :class="hasLabel ? 'ml-2' : ''"
      />
    </slot>
  </component>
</template>

<style>
.as-btn:not([class*="btn-flat-"], [class*="btn-transparent-"]):hover {
  /* TODO: Add transform directives on unocss and replace this */
  /* @apply transform -translate-x-0.5 -translate-y-0.5; */
  transform: translate(-0.125rem, -0.125rem);
}
</style>
