<script setup lang="ts">
import {ParsedContent} from '@nuxt/content/dist/runtime/types';

interface PostItemProps {
  item: ParsedContent;
}

const {item} = defineProps<PostItemProps>();
</script>

<template>
  <div class="post-item py-4 flex flew-row">
    <div class="flex-1 ml-4">
      <h3 class="text-xl mb-4">
        <a class="text-black-600" :href="item._path">{{ item.title }}</a>
      </h3>
      <p class="text-slate-500">{{ item.description }}</p>
      <p class="text-slate-500 mt-4">详情>></p>
    </div>
  </div>
</template>
