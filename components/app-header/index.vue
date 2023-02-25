<script setup lang="ts">
const color = useColorMode();

const isDark = computed(() => color.value === 'dark');

function toggleDark() {
  color.value = color.value === 'dark' ? 'light' : 'dark';
}
</script>

<template>
  <header>
    <div class="flex items-center justify-between py-3 m-auto max-w-5xl h-full">
      <div class="flex items-center">
        <a class="text-blue-500 text-lg font-bold font-serif" href="/"
          >ShineK9</a
        >
        <ul class="nav flex flex-row space-x-6 ml-12">
          <li><a href="/">首页</a></li>
          <li><a href="/archive">归档</a></li>
          <li><a href="/about">关于</a></li>
        </ul>
      </div>
      <div class="space-x-4">
        <a href="https://www.github.com/ShineK9" target="_blank">
          <Icon
            slot-name="custom"
            class="text-lg cursor-pointer"
            name="grommet-icons:github"
          />
        </a>
        <Icon
          class="text-lg cursor-pointer"
          @click.native="toggleDark"
          name="ic:outline-mode-night"
          v-if="isDark"
        />
        <Icon
          v-else
          class="text-lg cursor-pointer"
          @click.native="toggleDark"
          name="ic:outline-wb-sunny"
        />
      </div>
    </div>
  </header>
</template>

<style lang="scss">
header {
  height: 100px;
}

@media (max-width: 600px) {
  header {
    height: auto;
    .nav {
      display: none;
    }
  }
}
</style>
