<script lang="ts" setup>
import {defineProps} from 'vue';

interface CardProps {
  title: string;
}

const {title} = defineProps<CardProps>();
</script>

<template>
  <div class="px-0 my-2 py-2 border rounded border-slate-200 dark:border-slate-700 shadow">
    <p class="m-0 px-2 text-sm font-bold p-0 border-b dark:border-slate-700">{{ title }}</p>
    <div class="p-2 text-slate-600 text-sm dark:text-slate-500">
      <slot />
    </div>
  </div>
</template>
