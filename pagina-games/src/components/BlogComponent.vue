<template>
  <section class="blog">
    <div class="container">
      <h2>Últimos posts no blog</h2>
      <div class="blog-list">
        <div v-for="post in posts" :key="post.title" class="blog-card">
          <img :src="post.img" :alt="post.title" />
          <div class="blog-info">
            <h3>{{ post.title }}</h3>
            <p class="desc">{{ post.desc }}</p>
            <div class="author">
              <img :src="post.authorImg" alt="autor" />
              <span>{{ post.author }}</span>
              <span class="date">{{ post.date }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BlogComponent',
  data() {
    return {
      posts: [
        { title: 'Blox Fruits: Como obter o Terceiro Mar', img: require('@/assets/bloxfruits.jpg'), desc: 'Guia para desbloquear o Terceiro Mar, missões e desafios.', author: 'Xamg', authorImg: require('@/assets/author1.png'), date: '04/06/25' },
        { title: 'Nova atualização de Marvel Rivals', img: require('@/assets/marvel.jpg'), desc: 'Mudança do Loki em Marvel Rivals.', author: 'Xamg', authorImg: require('@/assets/author1.png'), date: '02/06/25' },
        { title: 'Passe Premium de Junho no Pokémon TCG Pocket', img: require('@/assets/pokemon.jpg'), desc: 'Novidades do passe premium de junho de 2025.', author: 'Xamg', authorImg: require('@/assets/author1.png'), date: '01/06/25' },
      ]
    }
  }
}
</script>

<style scoped>
.blog {
  padding: 40px 0 0 0;
  width: 100%;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}
.blog h2 {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 24px;
  color: #fff;
  text-align: left;
}
.blog-list {
  display: flex;
  gap: 24px;
  overflow-x: auto;
  padding: 24px 0 8px 24px;
}
.blog-card {
  background: #23243a;
  border-radius: 18px;
  box-shadow: 0 2px 8px #00ff9944;
  border: 2px solid transparent;
  min-width: 320px;
  max-width: 320px;
  text-align: left;
  padding: 0 0 16px 0;
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s, border 0.15s;
  display: flex;
  flex-direction: column;
}
.blog-card:hover {
  transform: translateY(-6px) scale(1.03);
  box-shadow: 0 6px 18px #00ff99cc;
  border: 2px solid #00ff99;
}
.blog-card img {
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 18px 18px 0 0;
  margin-bottom: 8px;
}
.blog-info {
  padding: 0 16px;
}
.blog-info h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 8px 0 4px 0;
  color: #fff;
}
.desc {
  color: #e0e0e0;
  font-size: 1.05rem;
  margin-top: 8px;
}
.author {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.95rem;
  color: #bfc9d8;
}
.author img {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  object-fit: cover;
}
.date {
  color: #bfc9d8;
  font-size: 0.95rem;
  margin-bottom: 4px;
}
</style> 