<script setup>
import Home from '@/pages/Home.vue';
import Header from '@/pages/Header.vue';
import SidebarLeft from '@/pages/SidebarLeft.vue';
import SidebarRight from '@/pages/SidebarRight.vue';
import Post from '@/pages/Post.vue';
import Article from '@/pages/Article.vue';

</script>

<template>
  <Header />
  <div class="d-flex justify-content-center container">
    <SidebarLeft class="col-3" />
    <div class="col-6">
      <Post />
      <Article />
    </div>
    <SidebarRight class="col-3" />
  </div>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
