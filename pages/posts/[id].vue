<script setup lang="ts"></script>

<template>
  <div class="max-w-4xl m-auto p-4 px-6 rounded">
    <article class="markdown-body ">
      <ContentDoc />
    </article>
  </div>
</template>

<style lang="scss">
.markdown-body {
  h1 {
    font-size: 2rem;
		margin: .2rem 0;
		font-weight: 500;
  }
  h2 {
	  font-size: 1.0rem;
		margin: 1rem 0 .4rem 0;
		font-weight: 500;
  }
  h3 {
		margin: 1rem 0 .4rem 0;
		font-weight: 500;
  }
	table {
	  @apply border border-slate-200;
		& th, & td {
			padding: 0.3rem 0.5rem;
		  border-bottom: 1px solid #e2e8f0;
		  border-right: 1px solid #e2e8f0;
		}
	}
	blockquote {
		@apply border-l-4 border-slate-200 py-2;
		@apply italic text-slate-500;
	}
}
</style>
