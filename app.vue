<script setup>
import "animate.css";
</script>

<template>
  <div id="app" class="font-serif">
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
	min-height: 100vh;
}

.top-line {
  height: 10px;
	background-image: linear-gradient(45deg,theme('colors.blue.500') 25%,theme('colors.white') 0,theme('colors.white') 50%,theme('colors.blue.500') 0,theme('colors.blue.500') 75%,theme('colors.white') 0);
	background-size: 40px 40px;
}
</style>
