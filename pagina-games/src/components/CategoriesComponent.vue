<template>
  <section class="categories">
    <div class="container">
      <h2>Categorias Populares</h2>
      <div class="categories-wrapper">
        <button class="scroll-indicator left" aria-label="Scroll para a esquerda" @click="scrollLeft">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 6L9 12L15 18" stroke="var(--color-neon)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
        <div ref="list" class="categories-list">
          <div v-for="cat in categories" :key="cat.name" class="category-card">
            <img :src="cat.img" :alt="cat.name" />
            <span>{{ cat.name }}</span>
          </div>
        </div>
        <button class="scroll-indicator right" aria-label="Scroll para o lado" @click="scrollRight">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="var(--color-neon)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CategoriesComponent',
  data() {
    return {
      categories: [
        { name: 'Valorant', img: require('@/assets/valorant.jpg') },
        { name: 'Roblox', img: require('@/assets/roblox.jpg') },
        { name: 'Genshin Impact', img: require('@/assets/genshin.jpg') },
        { name: 'Clash of Clans', img: require('@/assets/clash.jpg') },
        { name: 'Fortnite', img: require('@/assets/fortnite.jpg') },
        { name: 'Throne and Liberty', img: require('@/assets/throne.jpg') },
        { name: 'Minecraft', img: require('@/assets/minecraft.jpg') },
        { name: 'League of Legends', img: require('@/assets/lol.jpg') },
      ]
    }
  },
  methods: {
    scrollLeft() {
      const list = this.$refs.list;
      if (list) {
        list.scrollLeft -= 200;
      }
    },
    scrollRight() {
      const list = this.$refs.list;
      if (list) {
        list.scrollLeft += 200;
      }
    }
  }
}
</script>

<style scoped>
.categories {
  padding: 32px 0 0 0;
  width: 100%;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}
.categories h2 {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 24px;
  color: #fff;
  text-align: left;
}
.categories-wrapper {
  position: relative;
  padding-top: 32px;
  padding-bottom: 24px;
  min-height: 220px;
}
.categories-list {
  display: flex;
  gap: 24px;
  overflow-x: auto;
  overflow-y: visible;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  padding: 24px 24px 24px 24px;
  min-height: 220px;
  position: relative;
}
.categories-list::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}
.scroll-indicator {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  border: 2px solid var(--color-neon);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 0 8px var(--color-neon), 0 0 24px #00ff9944;
  transition: background 0.2s, box-shadow 0.2s;
  z-index: 20;
}
.scroll-indicator:hover {
  background: var(--color-neon);
  box-shadow: 0 0 12px var(--color-neon), 0 0 24px #00ff99cc;
}
.scroll-indicator.left {
  left: 0;
}
.scroll-indicator.right {
  right: 0;
}
.category-card {
  background: #23243a;
  border-radius: 18px;
  box-shadow: 0 2px 8px #00ff9944;
  border: 2px solid transparent;
  min-width: 140px;
  max-width: 140px;
  text-align: center;
  padding: 12px 0 0 0;
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s, border 0.15s, z-index 0.15s;
  position: relative;
  z-index: 1;
}
.category-card:hover {
  transform: scale(1.08);
  box-shadow: 0 0 32px 8px #00ff99cc;
  border: 2px solid #00ff99;
  z-index: 10;
}
.category-card img {
  width: 100px;
  height: 140px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 8px;
}
.category-card span {
  display: block;
  font-weight: 600;
  color: #fff;
  margin-bottom: 10px;
}
</style> 