<template>
  <section class="popular">
    <div class="container">
      <h2>Populares</h2>
      <div class="popular-list">
        <div v-for="item in populars" :key="item.title" class="popular-card">
          <img :src="item.img" :alt="item.title" />
          <div class="info">
            <h3>{{ item.title }}</h3>
            <p class="price">{{ item.price }}</p>
            <span class="seller">{{ item.seller }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PopularComponent',
  data() {
    return {
      populars: [
        { title: 'DIAMANTE FREE FIRE', img: require('@/assets/freefire.jpg'), price: 'R$ 3,99 +', seller: 'Dimas_FF' },
        { title: 'MAIS DE 1000 JOGOS STEAM', img: require('@/assets/steam.jpg'), price: 'R$ 2,00 +', seller: 'EagleGames' },
        { title: 'CONTA VALORANT COMPETITIVO', img: require('@/assets/valorant2.jpg'), price: 'R$ 2,00 +', seller: 'emi' },
        { title: 'GAMEPASS ANIME LAST STAND', img: require('@/assets/anime.jpg'), price: 'R$ 6,15 +', seller: 'Tcholamais' },
      ]
    }
  }
}
</script>

<style scoped>
.popular {
  padding: 40px 0 0 0;
  width: 100%;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}
.popular h2 {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 24px;
  color: #fff;
  text-align: left;
}
.popular-list {
  display: flex;
  gap: 24px;
  overflow-x: auto;
  padding: 24px 24px 8px 24px;
}
.popular-card {
  background: #23243a;
  border-radius: 18px;
  box-shadow: 0 2px 8px #00ff9944;
  border: 2px solid transparent;
  min-width: 220px;
  max-width: 220px;
  text-align: left;
  padding: 0 0 16px 0;
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s, border 0.15s;
  display: flex;
  flex-direction: column;
}
.popular-card:hover {
  transform: translateY(-6px) scale(1.03);
  box-shadow: 0 6px 18px #00ff99cc;
  border: 2px solid #00ff99;
}
.popular-card img {
  width: 100%;
  height: 120px;
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