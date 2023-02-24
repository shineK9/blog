<script setup lang="ts">
import {ParsedContent} from '@nuxt/content/dist/runtime/types';

interface PostItemProps {
  item: ParsedContent;
}

const {item} = defineProps<PostItemProps>();
</script>

<template>
  <div class="post-item py-4 flex flew-row border-b border-slate-200">
    <div class="flex-1 mr-4">
      <h3 class="text-xl mb-4 font-bold">
        <a class="text-black-600" :href="item._path">{{ item.title }}</a>
      </h3>
      <p class="text-slate-600">{{ item.description }}</p>
      <div class="mt-4 space-x-2">
        <span class="border border-slate-200 rounded p-1 text-xs text-slate-400"
          >NuxtJS</span
        >
        <span class="border border-slate-200 rounded p-1 text-xs text-slate-400"
          >VueJS</span
        >
      </div>
    </div>
    <img src="/omori-release-date.jpg" alt="omori" />
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
</style>
