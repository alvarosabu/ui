<script lang="ts" setup>
import { reactive } from 'vue'
import AsCodeBlock from './AsCodeBlock.vue'

const state = reactive({

  code: 'import Awiwi from \'Awiwi.vue\' \n const getProducts = async () => {\n  try {\n    return apolloClient.query({\n      query: FETCH_PRODUCTS,\n      variables: {\n        order_by: { created_at: \'asc\' },\n      },\n    });\n  } catch (e) {\n    console.error(\'err\', e);\n  }\n};',
  language: 'javascript',
})
</script>

<template>
  <Story
    title="AsCodeBlock"
    :layout="{
      type: 'grid',
      width: 600,
    }"
  >
    <Variant
      title="playground"
      auto-props-disabled
    >
      <template #default>
        <Suspense>
          <AsCodeBlock
            :language="state.language"
            :code="state.code"
          />
        </Suspense>
      </template>
    </Variant>

    <Variant title="vue">
      <template #default>
        <Suspense>
          <AsCodeBlock
            :language="state.language"
            :code="state.code"
          />
        </Suspense>
      </template>
    </Variant>
  </Story>
</template>
