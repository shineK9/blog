<script setup lang="ts">
import appConfig from '~~/app.config';

const posts = (
  await queryContent()
    .limit(10)
    .find()
).filter(i => i._path?.startsWith(appConfig.postPath));
</script>

<template>
  <div
    class="flex flex-row max-w-4xl m-auto rounded overflow-hidden border border-slate-200"
  >
    <div class="banner bg-slate-100 max-w-4xl m-auto" style="flex: 2;"></div>
    <div class="flex-1">
      <div class="p-4 h-full relative">
        <h3 class="text-lg mb-4">精选文章</h3>
        <p class="text-slate-500">
          前端发展日新月异，各种框架层出不穷，选择合适的框架便成了一个问题，本文从一个实际的项目出发，介绍如何选择适合的技术，让项目能快速可控的完成。
        </p>
				<div class="absolute bottom-0 p-4">
				→
				</div>
      </div>
    </div>
  </div>
  <article class="mt-8 post-items rounded max-w-4xl m-auto" style="flex: 2;">
    <PostItem v-for="post in posts" :key="post.path" :item="post" />
  </article>
</template>

<style lang="scss">
.banner {
  height: 300px;
  background-image: url('/omori-release-date.jpg');
  background-position: center center;
  filter: grayscale(0%);
  transition: all 0.6s ease;
  top: 0;
  &:hover {
    filter: grayscale(0%);
  }
}
</style>
