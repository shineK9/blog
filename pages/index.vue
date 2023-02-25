<script setup lang="ts">
import appConfig from "~~/app.config";

const posts = (await queryContent().limit(10).find()).filter((i) =>
  i._path?.startsWith(appConfig.postPath)
);

const recommendPosts = (await queryContent().limit(10).find()).filter((i) =>
  i._path?.startsWith(appConfig.postPath)
);
</script>

<template>
  <div class="flex flex-row max-w-5xl m-auto">
    <article class="post-items rounded" style="flex: 3">
      <PostItem v-for="post in posts" :key="post.path" :item="post" />
    </article>
    <aside
      class="flex-1 ml-6 border-l border-slate-100 dark:border-slate-800 pl-6"
    >
      <div>
        <h3>精选文章</h3>
        <ul>
          <li
            v-for="post in recommendPosts"
            :key="post._id"
            class="border-b text-slate-500 border-slate-200 dark:border-slate-800 dark:text-slate-500 pt-3 pb-1 overflow-hidden whitespace-nowrap text-ellipsis"
          >
            <RouterLink :to="post._path">
              <Icon name="ic:twotone-subdirectory-arrow-right" />
              {{ post.title }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<style lang="scss">
html.dark {
  .banner {
    filter: grayscale(0);
  }
}

@media (max-width: 1080px) {
  aside {
    display: none;
  }
  .post-items {
    @apply grid grid-cols-2 gap-4;
  }
}

@media (max-width: 685px) {
  .post-items {
    @apply block;
  }
}
</style>
