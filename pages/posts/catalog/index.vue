<script setup lang="ts">
import { Toc } from "@nuxt/content/dist/runtime/types";

interface Props {
  toc: Toc;
}

const { toc } = defineProps<Props>();
</script>

<template>
  <div
    id="catalog"
    class="bg-white dark:bg-transparent border border-slate-200 dark:border-slate-700 rounded"
    style="width: 250px"
  >
    <p class="px-6 py-2 border-b border-slate-200 dark:border-slate-700">
      目录:
    </p>
    <div
      class="px-6 text-sm py-2 w-50 text-ellipsis overflow-hidden whitespace-nowrap hover:text-blue-500"
      v-for="link in toc.links"
      :key="link.id"
    >
      <a :href="`#${link.id}`">
        {{ link.text }}
      </a>
    </div>
  </div>
</template>

<style lang="scss">
#catalog {
  opacity: 0.4;
  &:hover {
    opacity: 1;
  }
}
</style>
