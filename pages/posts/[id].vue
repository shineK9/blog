<script setup lang="ts">
import {ComputedRef} from 'vue';
import {Toc} from '@nuxt/content/dist/runtime/types';
import Catalog from './catalog/index.vue';

const content = useContent() as Record<string, unknown>;
</script>

<template>
  <div class="max-w-5xl m-auto py-4 rounded relative">
    <Catalog
      class="fixed right-12"
      :toc="(content.toc as ComputedRef<Toc>).value as Toc"
    />
    <article class="markdown-body">
      <ContentDoc v-slot="{doc}">
        <h1>{{ doc.title }}</h1>
        <div
				  :style="`background-image: url(${doc.banner});`"
          :alt="doc.title"
          class="banner w-full h-80 my-6"
        ></div>
        <ContentRenderer :value="doc" />
      </ContentDoc>
    </article>
  </div>
</template>

<style lang="scss">
.markdown-body {
  @apply max-w-4xl m-auto;
  p {
    line-height: 1.8;
    font-weight: 400;
  }
  h1 {
    font-size: 2rem;
    margin: 0.2rem 0;
    font-weight: 500;
  }
  h2 {
    font-size: 1rem;
    margin: 1.5rem 0 0.4rem 0;
    font-weight: 500;
  }
  h3 {
    margin: 1rem 0 0.4rem 0;
    font-weight: 500;
  }
  table {
    @apply border border-slate-200 w-full rounded;
    & th,
    & td {
      padding: 0.3rem 0.5rem;
      border-bottom: 1px solid #e2e8f0;
      border-right: 1px solid #e2e8f0;
    }
  }
  blockquote {
    @apply border-l-4 border-slate-200 py-2;
    @apply italic text-slate-500;
  }
  img {
    margin: auto;
  }

	.banner {
	  @apply rounded;
    background-position: center center;
    background-size: cover;
	}
}

@media (max-width: 1350px) {
  #catalog {
    display: none;
  }
  .banner {
    height: 230px;
    width: 100%;
  }
}
</style>
