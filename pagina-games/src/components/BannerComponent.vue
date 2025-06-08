<template>
  <section class="banner">
    <div class="container">
      <div class="banner-content">
        <div class="banner-visual">
          <span class="banner-gamer-phrase">Pronto para jogar?</span>
        </div>
        <div class="banner-texts">
          <h1 class="banner-title">
            <span class="neon">compra e venda</span>
          </h1>
          <p class="banner-desc">Contas, jogos, gift cards, moedas, itens digitais e muito mais!</p>
          <button class="banner-btn">COMO FUNCIONA?</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BannerComponent',
}
</script>

<style scoped>
.banner {
  width: 100%;
  min-height: 340px;
  background: linear-gradient(120deg, #181c2b 0%, #23243a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 56px 0 40px 0;
  border-radius: 0 0 32px 32px;
  box-shadow: 0 4px 32px 0 #00ff9944;
  margin-bottom: 32px;
  position: relative;
  overflow: hidden;
}
.banner::before {
  content: '';
  position: absolute;
  left: 10%;
  top: 10%;
  width: 180px;
  height: 180px;
  background: radial-gradient(circle, #00ff99 0%, transparent 70%);
  opacity: 0.12;
  filter: blur(8px);
  z-index: 1;
}
.banner::after {
  content: '';
  position: absolute;
  right: 8%;
  bottom: 8%;
  width: 120px;
  height: 120px;
  background: radial-gradient(circle, #1976f7 0%, transparent 70%);
  opacity: 0.13;
  filter: blur(8px);
  z-index: 1;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
  position: relative;
  z-index: 2;
}
.banner-content {
  display: flex;
  align-items: center;
  gap: 48px;
  justify-content: center;
  flex-wrap: wrap;
}
.banner-visual {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 120px;
  animation: floatY 3.5s ease-in-out infinite alternate;
}
@keyframes floatY {
  0% { transform: translateY(0); }
  100% { transform: translateY(-18px); }
}
.banner-controller {
  filter: drop-shadow(0 0 16px #00ff99cc);
}
.banner-texts {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-width: 260px;
}
.banner-title {
  font-size: 2.7rem;
  font-weight: 900;
  color: #fff;
  margin-bottom: 16px;
  line-height: 1.1;
  text-shadow: 0 0 18px #00ff99, 0 0 32px #00ff9944;
}
.banner-title .neon {
  color: #00ff99;
  text-shadow: 0 0 12px #00ff99, 0 0 24px #00ff9944;
  letter-spacing: 2px;
  animation: neonGlow 1.8s infinite alternate;
}
.banner-title .gradient {
  background: linear-gradient(90deg, #1976f7 0%, #00ff99 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-weight: 900;
  letter-spacing: 1px;
}
@keyframes neonGlow {
  from { text-shadow: 0 0 12px #00ff99, 0 0 24px #00ff9944; }
  to { text-shadow: 0 0 24px #00ff99, 0 0 48px #00ff9944; }
}
.banner-desc {
  font-size: 1.25rem;
  color: #e0e0e0;
  margin-bottom: 28px;
  text-shadow: 0 0 8px #1976f7cc;
}
.banner-btn {
  background: linear-gradient(90deg, #00ff99 0%, #1976f7 100%);
  color: #181c2b;
  border: none;
  border-radius: 28px;
  padding: 18px 48px;
  font-weight: bold;
  font-size: 1.18rem;
  cursor: pointer;
  box-shadow: 0 2px 16px 0 #00ff9944;
  transition: background 0.18s, color 0.18s, box-shadow 0.18s, transform 0.18s;
  font-family: 'Inter', 'Avenir', Helvetica, Arial, sans-serif;
  text-shadow: 0 0 8px #00ff99;
  outline: none;
  position: relative;
  overflow: hidden;
}
.banner-btn::after {
  content: '';
  position: absolute;
  left: 0; top: 0; right: 0; bottom: 0;
  border-radius: 28px;
  box-shadow: 0 0 24px 8px #00ff99cc;
  opacity: 0;
  transition: opacity 0.18s;
  pointer-events: none;
}
.banner-btn:hover {
  background: #fff;
  color: #00ff99;
  transform: scale(1.04);
}
.banner-btn:hover::after {
  opacity: 0.18;
}
@media (max-width: 900px) {
  .banner-content { flex-direction: column; gap: 24px; }
  .banner-title { font-size: 1.5rem; }
  .banner-visual { min-width: 80px; }
  .banner { padding: 32px 0 24px 0; }
}
.banner-gamer-text {
  display: block;
  font-size: 1.45rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 12px;
  text-shadow: 0 0 12px #1976f7cc, 0 0 18px #00ff9944;
  letter-spacing: 1px;
  padding: 12px 0;
}
.banner-gamer-text .gradient {
  background: linear-gradient(90deg, #1976f7 0%, #00ff99 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
.banner-trophy {
  filter: drop-shadow(0 0 16px #00ff99cc);
  display: block;
  margin: 0 auto;
}
.banner-gamer-phrase {
  display: inline-block;
  color: #00ff99;
  font-size: 1.25rem;
  font-weight: 700;
  font-family: 'Orbitron', 'Inter', 'Avenir', Helvetica, Arial, sans-serif;
  letter-spacing: 1.5px;
  text-shadow: 0 0 12px #00ff99, 0 0 24px #00ff9944;
  transform: rotate(-8deg);
  margin-right: 32px;
  margin-left: 4px;
  vertical-align: middle;
}
</style> 