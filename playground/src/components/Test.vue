<script setup lang="ts">
interface TestProps {
  /**
   * Represents the message in the Test component.
   * @type {string}
   */
  msg: string
}

defineProps<TestProps>()
</script>

<template>
  <div>
    {{ msg }}
  </div>
</template>
