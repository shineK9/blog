<script setup lang="ts">
import appConfig from '~~/app.config';

const posts = (
  await queryContent()
    .limit(10)
    .find()
).filter(i => i._path?.startsWith(appConfig.postPath));
</script>

<template>
  <div class="flex flex-row max-w-4xl m-auto">
    <article class="post-items rounded" style="flex: 3;">
      <PostItem v-for="post in posts" :key="post.path" :item="post" />
    </article>
    <aside class="flex-1 ml-6 border-l border-slate-100 pl-6">
      <div>
        <h3>精选文章</h3>
        <ul>
          <li
            v-for="post in posts"
            :key="post._id"
            class="border-b border-slate-200 pt-3 pb-1 overflow-hidden whitespace-nowrap text-ellipsis"
          >
            → {{ post.title }}
          </li>
        </ul>
      </div>
    </aside>
  </div>
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
