<template>
  <div id="app">
    <HeaderComponent />
    <div class="container">
      <BannerComponent />
      <CategoriesComponent />
      <HighlightsComponent />
      <PopularComponent />
      <ReviewsComponent />
      <BlogComponent />
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import './assets/global.css';
import HeaderComponent from './components/HeaderComponent.vue';
import BannerComponent from './components/BannerComponent.vue';
import CategoriesComponent from './components/CategoriesComponent.vue';
import HighlightsComponent from './components/HighlightsComponent.vue';
import PopularComponent from './components/PopularComponent.vue';
import ReviewsComponent from './components/ReviewsComponent.vue';
import BlogComponent from './components/BlogComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    BannerComponent,
    CategoriesComponent,
    HighlightsComponent,
    PopularComponent,
    ReviewsComponent,
    BlogComponent,
    FooterComponent
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  background: linear-gradient(120deg, #181c2b 0%, #23243a 100%);
  min-height: 100vh;
}
#app {
  font-family: 'Inter', 'Avenir', Helvetica, Arial, sans-serif;
  color: #fff;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}
</style>
