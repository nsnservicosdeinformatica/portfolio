<template>
  <section class="reviews">
    <div class="container">
      <h2>Últimas avaliações</h2>
      <div class="reviews-wrapper">
        <button class="scroll-indicator left" aria-label="Scroll para a esquerda" @click="scrollLeft">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 6L9 12L15 18" stroke="var(--color-neon)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
        <div ref="list" class="reviews-list">
          <div v-for="review in reviews" :key="review.username" class="review-card">
            <div class="review-header">
              <img class="avatar" :src="review.avatar" :alt="review.username" />
              <span class="username">{{ review.username }}</span>
              <span class="stars">★★★★★</span>
            </div>
            <p class="review-text">{{ review.text }}</p>
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
  name: 'ReviewsComponent',
  data() {
    return {
      reviews: [
        { user: 'LuffyKuMole', avatar: require('@/assets/avatar1.png'), text: 'Entrega rápida e produto perfeito!' },
        { user: 'DaviLucena', avatar: require('@/assets/avatar2.png'), text: 'Tudo certo, recomendo muito.' },
        { user: 'Cirley', avatar: require('@/assets/avatar3.png'), text: 'Amei, super rápido!' },
        { user: 'wclqra7', avatar: require('@/assets/avatar4.png'), text: 'Confiável, responde rápido e entrega rápida tb :)' },
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
.reviews {
  padding: 40px 0 0 0;
  width: 100%;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}
.reviews h2 {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 24px;
  color: #fff;
  text-align: left;
}
.reviews-wrapper {
  position: relative;
}
.reviews-list {
  display: flex;
  gap: 24px;
  overflow-x: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  padding: 24px 24px 8px 24px;
}
.reviews-list::-webkit-scrollbar {
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
.review-card {
  background: #23243a;
  border-radius: 18px;
  box-shadow: 0 2px 8px #00ff9944;
  border: 2px solid transparent;
  min-width: 320px;
  max-width: 320px;
  text-align: left;
  padding: 18px 24px 18px 24px;
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s, border 0.15s;
  display: flex;
  flex-direction: column;
}
.review-card:hover {
  transform: translateY(-6px) scale(1.03);
  box-shadow: 0 6px 18px #00ff99cc;
  border: 2px solid #00ff99;
}
.review-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}
.avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #00ff99;
}
.username {
  font-weight: 700;
  color: #fff;
  font-size: 1.08rem;
}
.stars {
  color: #00ff99;
  font-size: 1.1rem;
  margin-left: 8px;
  text-shadow: 0 0 8px #00ff99;
}
.review-text {
  color: #e0e0e0;
  font-size: 1.05rem;
  margin-top: 8px;
}
</style> 