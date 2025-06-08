<template>
  <header class="header">
    <div class="container">
      <div class="logo-area">
        <svg class="logo-svg" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="10" width="30" height="18" rx="9" fill="#fff" stroke="#1976f7" stroke-width="2.5"/>
          <ellipse cx="13" cy="19" rx="3" ry="2.5" fill="#1976f7"/>
          <ellipse cx="25" cy="19" rx="3" ry="2.5" fill="#1976f7"/>
          <rect x="17.5" y="15.5" width="3" height="7" rx="1.5" fill="#1976f7"/>
          <circle cx="13" cy="19" r="1" fill="#fff"/>
          <circle cx="25" cy="19" r="1" fill="#fff"/>
        </svg>
        <span class="logo-text">GG Mercado</span>
      </div>
      <div class="search-area">
        <svg class="search-lupa" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input type="text" placeholder="Anúncio, usuário ou categoria" />
      </div>
      <nav class="nav-area">
        <button class="categoria-btn">
          Categoria
          <svg class="arrow-svg" width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 8L10 12L14 8" stroke="#1976f7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <span class="blog-link">Blog</span>
        <button class="announce-btn">Anunciar</button>
        <button class="icon-btn"><span class="material-icons">menu</span></button>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
}
</script>

<style scoped>
.header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px 0 12px 0;
  background: linear-gradient(90deg, #181c2b 0%, #23243a 100%);
  box-shadow: 0 2px 12px 0 #00ff9944;
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  position: sticky;
  top: 0;
  z-index: 100;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.logo-area {
  display: flex;
  align-items: center;
  gap: 10px;
}
.logo-svg {
  height: 38px;
  width: 38px;
  display: block;
  filter: drop-shadow(0 0 8px #00ff99);
}
.logo-text {
  font-weight: 900;
  font-size: 2rem;
  color: #00ff99;
  letter-spacing: 1px;
  font-family: 'Inter', 'Avenir', Helvetica, Arial, sans-serif;
  text-shadow: 0 0 8px #00ff99, 0 0 18px #00ff9944;
}
.search-area {
  display: flex;
  align-items: center;
  background: #23243a;
  border-radius: 32px;
  padding: 8px 20px;
  min-width: 340px;
  box-shadow: 0 1px 4px 0 #00ff9944;
  border: none;
}
.search-lupa {
  margin-right: 8px;
  display: block;
  stroke: #00ff99;
}
.search-area input {
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
  font-size: 1.1rem;
  width: 100%;
  padding: 6px 0;
  font-family: 'Inter', 'Avenir', Helvetica, Arial, sans-serif;
}
.nav-area {
  display: flex;
  align-items: center;
  gap: 18px;
}
.categoria-btn {
  background: #23243a;
  border: none;
  color: #fff;
  font-weight: 600;
  font-size: 1.08rem;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  padding: 10px 22px;
  border-radius: 22px;
  transition: background 0.18s, color 0.18s;
  font-family: 'Inter', 'Avenir', Helvetica, Arial, sans-serif;
  box-shadow: 0 1px 4px 0 #00ff9944;
}
.categoria-btn:hover {
  background: #00ff99;
  color: #181c2b;
}
.arrow-svg {
  margin-left: 4px;
  margin-top: 2px;
  display: inline-block;
  stroke: #00ff99;
}
.arrow {
  display: none;
}
.blog-link {
  color: #fff;
  font-weight: 600;
  font-size: 1.08rem;
  font-family: 'Inter', 'Avenir', Helvetica, Arial, sans-serif;
  margin-left: 2px;
  margin-right: 2px;
}
.announce-btn {
  background: #00ff99;
  color: #181c2b;
  border: none;
  border-radius: 24px;
  padding: 12px 36px;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  box-shadow: 0 2px 8px 0 #00ff9944;
  transition: background 0.18s, color 0.18s, box-shadow 0.18s;
  font-family: 'Inter', 'Avenir', Helvetica, Arial, sans-serif;
  text-shadow: 0 0 8px #00ff99;
}
.announce-btn:hover {
  background: #fff;
  color: #00ff99;
}
.icon-btn {
  background: #23243a;
  border: 1.5px solid #00ff99;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.5rem;
  color: #00ff99;
  transition: background 0.18s, color 0.18s, border 0.18s;
}
.icon-btn:hover {
  background: #00ff99;
  color: #181c2b;
  border: 1.5px solid #fff;
}
@media (max-width: 900px) {
  .header {
    flex-direction: column;
    padding: 14px 10px 10px 10px;
    gap: 10px;
  }
  .search-area { min-width: 160px; }
  .logo-text { font-size: 1.2rem; }
  .announce-btn { padding: 10px 18px; font-size: 1rem; }
  .categoria-btn { padding: 8px 12px; font-size: 1rem; }
}
</style> 