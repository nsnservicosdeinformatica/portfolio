<template>
  <section class="highlights">
    <div class="container">
      <h2>Em destaque</h2>
      <div class="highlights-wrapper">
        <button class="scroll-indicator left" aria-label="Scroll para a esquerda" @click="scrollLeft">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 6L9 12L15 18" stroke="var(--color-neon)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
        <div ref="list" class="highlights-list">
          <div v-for="item in highlights" :key="item.title" class="highlight-card">
            <img :src="item.img" :alt="item.title" />
            <div class="info">
              <h3>{{ item.title }}</h3>
              <p class="price">{{ item.price }}</p>
              <span class="seller">{{ item.seller }}</span>
            </div>
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
  name: 'HighlightsComponent',
  data() {
    return {
      highlights: [
        { title: 'ACC LOL 100% SEGURA | FULL ACESSO | 77 SKINS', img: require('@/assets/lol1.jpg'), price: 'R$ 65,00', seller: 'danielrevendas' },
        { title: 'ACC LOL 100% SEGURA | 90 SKINS', img: require('@/assets/lol2.jpg'), price: 'R$ 65,00', seller: 'danielrevendas' },
        { title: 'CONTA WILD WIFT COM MUITA SKINS', img: require('@/assets/wildrift.jpg'), price: 'R$ 450,00', seller: 'Otaviogasparr' },
        { title: 'ACC LOL 100% SEGURA | 2 SKINS', img: require('@/assets/lol3.jpg'), price: 'R$ 9,99', seller: 'danielrevendas' },
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
.highlights {
  padding: 40px 0 0 0;
  width: 100%;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}
.highlights h2 {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 24px;
  color: #fff;
  text-align: left;
}
.highlights-wrapper {
  position: relative;
  padding-bottom: 32px;
  min-height: 240px;
}
.highlights-list {
  display: flex;
  gap: 24px;
  overflow-x: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  padding: 24px 24px 8px 24px;
  min-height: 220px;
}
.highlights-list::-webkit-scrollbar {
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
.highlight-card {
  background: #23243a;
  border-radius: 18px;
  box-shadow: 0 2px 8px #00ff9944;
  border: 2px solid transparent;
  min-width: 260px;
  max-width: 260px;
  text-align: left;
  padding: 0 0 16px 0;
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s, border 0.15s;
  display: flex;
  flex-direction: column;
}
.highlight-card:hover {
  transform: translateY(-6px) scale(1.03);
  box-shadow: 0 6px 18px #00ff99cc;
  border: 2px solid #00ff99;
}
.highlight-card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 18px 18px 0 0;
  margin-bottom: 8px;
}
.info {
  padding: 0 16px;
}
.info h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 8px 0 4px 0;
  color: #fff;
}
.price {
  color: #00ff99;
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 4px;
  text-shadow: 0 0 8px #00ff99;
}
.seller {
  color: #bfc9d8;
  font-size: 0.95rem;
}
</style> 