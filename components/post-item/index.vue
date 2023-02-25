<script setup lang="ts">
import {ParsedContent} from '@nuxt/content/dist/runtime/types';

interface PostItemProps {
  item: ParsedContent;
}

const {item} = defineProps<PostItemProps>();
</script>

<template>
  <div
    class="post-item py-4 flex flew-row items-center border-b border-slate-200 dark:border-slate-800"
  >
    <div class="flex-1 mr-4">
      <h3 class="text-xl mb-4 font-bold">
        <a class="text-black-600" :href="item._path">{{ item.title }}</a>
      </h3>
      <p class="text-slate-600 dark:text-slate-400">{{ item.description }}</p>
      <div class="mt-4 space-x-2">
        <span
          v-for="i in item.tags?.split(',') ?? []"
          :key="i"
          class="border border-slate-300 rounded p-1 text-xs text-slate-400"
          >{{ i }}</span
        >
      </div>
    </div>
		<div class="rounded" :style="`width: 200px;height:120px;background-image: url(${item.banner});background-position:center;background-size:cover;`"></div>
  </div>
</template>

<style lang="scss">
.post-item {
  img {
    width: 200px;
    height: 120px;
    filter: grayscale(90%);
    transition: all 0.6s ease;
  }
  a {
    transition: all 0.6s ease;
  }
  &:hover {
    a {
      @apply text-blue-700;
    }
    img {
      filter: grayscale(0);
    }
  }
}
html.dark {
  .post-item {
    img {
      filter: grayscale(0);
    }
  }
}
</style>
