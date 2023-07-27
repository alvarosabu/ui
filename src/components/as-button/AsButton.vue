<script setup lang="ts">
import { computed, toRefs } from 'vue'
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

const props = withDefaults(defineProps<ButtonProps>(), {
  disabled: false,
  outline: false,
  link: false,
  flat: false,
  target: '_blank',
  variant: btnVariant.PRIMARY,
  size: btnSize.DEFAULT,
  transparent: false,
})

const { label, icon, iconRight, disabled, outline, link, target, variant, size, flat, transparent } = toRefs(props)

const hasLabel = computed(() => !!label?.value)

// Classes
const btnClasses = computed(() => {
  const classes: (string | { [key: string]: boolean })[] = ['as-btn']

  if (variant.value) {
    if (flat.value) {
      classes.push(`btn-flat-${variant.value.toLowerCase()}`)
    }
    else if (outline.value) {
      classes.push(`btn-outline-${variant.value.toLowerCase()}`)
    }
    else if (transparent.value) {
      classes.push(`btn-transparent-${variant.value.toLowerCase()}`)
    }
    else {
      classes.push(`btn-${variant.value.toLowerCase()}`)
    }
  }

  if (size) {
    classes.push({
      'py-2 px-4': size.value === btnSize.DEFAULT,
      'w-full py-2 px-5': size.value === btnSize.BLOCK,
      'text-xs py-1 px-2': size.value === btnSize.SM,
      'text-sm py-1.5 px-3': size.value === btnSize.MD,
      'text-lg py-2.5 px-5': size.value === btnSize.LG,
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
