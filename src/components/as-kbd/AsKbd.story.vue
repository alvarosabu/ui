<script setup lang="ts">
import { useShortcuts } from '../../composables/useShortcuts'
import AsKbd from './AsKbd.vue'
import { kbdSize } from './const'

const { metaSymbol } = useShortcuts()

const kbdSizesList = ['xs', 'sm', 'md']

function initState() {
  return {
    value: 'K',
    size: kbdSize.SM,
  }
}
</script>

<template>
  <Story
    title="AsKbd"
    :layout="{
      type: 'grid',
      width: 200,
    }"
  >
    <Variant
      title="playground"
      :init-state="initState"
      auto-props-disabled
    >
      <template #default="{ state }">
        <AsKbd>{{ metaSymbol }}</AsKbd>
        +
        <AsKbd
          :value="state.value"
          :size="state.size"
        />
      </template>
      <template #controls="{ state }">
        <HstText
          v-model="state.value"
          title="Value"
        />
        <HstSelect
          v-model="state.size"
          title="Size"
          :options="kbdSizesList"
        />
      </template>
    </Variant>
  </Story>
</template>
