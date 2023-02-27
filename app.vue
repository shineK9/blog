<script setup>
// import "animate.css";
</script>

<template>
  <div id="app" class="bg-slate-50 dark:bg-slate-900 dark:text-slate-300 font-serif">
    <AppHeader />
    <main>
			<Transition name="fade"
				enter-active-class="animate__animated animate__tada"
				leave-active-class="animate__animated animate__bounceOutRight"
			>
				<div>
					<NuxtPage />
				</div>
			</Transition>
    </main>
  </div>
</template>

<style lang="scss">
#app {
  @apply font-sans;
  font-family: 'Noto Sans SC';
	min-height: 100vh;
}

@media (max-width: 1080px) {
  #app {
    @apply p-4;
  }
}

@media (max-width: 640px) {
	#app {
	  padding: 1rem;
	}
}
</style>
