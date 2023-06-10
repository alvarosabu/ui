<script setup lang="ts">
import AsDarkModeToggle from './AsDarkModeToggle.vue'
</script>

<template>
  <Story>
    <Variant title="playground">
      <template #default>
        <div p-4>
          <AsDarkModeToggle />
        </div>
      </template>
    </Variant>
  </Story>
</template>
