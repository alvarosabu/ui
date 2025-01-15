<script setup lang="ts">
import { AsButton, AsParticleLoader } from '@alvarosabu/ui'
</script>

<template>
  <div class="grid container mx-auto gap-4 cols-5">
    <div class="grid__item">
      <AsButton
        label="Accept"
        icon="github"
      />
    </div>
    <div class="grid__item">
      <AsParticleLoader />
    </div>
  </div>
</template>
