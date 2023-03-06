<script setup lang="ts">
import {Toc} from '@nuxt/content/dist/runtime/types';

interface Props {
  toc: Toc;
}

const {toc} = defineProps<Props>();
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
    <ol class="catalog-items ml-4 list-decimal">
      <li
        class="link px-6 text-sm py-2 w-50 text-ellipsis overflow-hidden whitespace-nowrap"
        v-for="link in toc.links"
        :key="link.id"
      >
        <a :href="`#${link.id}`">
          {{ link.text }}
        </a>
        <ol>
          <li
            class="link px-6 text-sm py-2 w-50 text-ellipsis overflow-hidden whitespace-nowrap"
            v-for="cLink in link.children"
            :key="cLink.id"
          >
            <a :href="`#${cLink.id}`">
              {{ cLink.text }}
            </a>
          </li>
        </ol>
      </li>
    </ol>
  </div>
</template>

<style lang="scss">
#catalog {
  opacity: 0.4;
  transition: all 0.6s ease;
  .catalog-items {
    max-height: 500px;
    overflow-y: scroll;
  }
  .link {
    &:hover > a {
      @apply text-blue-500;
    }
  }
  &:hover {
    opacity: 1;
  }
}
</style>
