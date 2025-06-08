<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="sobre">
        <div class="logo-footer">
          <svg class="logo-svg" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="14" width="36" height="20" rx="10" fill="#fff" stroke="#1976f7" stroke-width="3"/>
            <ellipse cx="18" cy="24" rx="4" ry="3.5" fill="#1976f7"/>
            <ellipse cx="30" cy="24" rx="4" ry="3.5" fill="#1976f7"/>
            <rect x="22.5" y="19.5" width="3" height="9" rx="1.5" fill="#1976f7"/>
            <circle cx="18" cy="24" r="1.2" fill="#43a047"/>
            <circle cx="30" cy="24" r="1.2" fill="#43a047"/>
          </svg>
        </div>
        <p>
          Somos a solução para o mercado digital, disponibilizando uma plataforma moderna que permite que o comprador receba pelo produto / serviço desejado, e que o vendedor receba para sua venda. Tudo isso com praticidade e segurança.
        </p>
        <div class="social">
          <a href="#" aria-label="LinkedIn" class="social-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="4" fill="none" stroke="#fff" stroke-width="2"/>
              <path d="M7 8V16" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
              <circle cx="7" cy="6" r="1" fill="#fff"/>
              <path d="M11 12V16M11 12C11 10.8954 11.8954 10 13 10C14.1046 10 15 10.8954 15 12V16" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </a>
          <a href="#" aria-label="Instagram" class="social-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>
          </a>
          <a href="#" aria-label="WhatsApp" class="social-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="#fff" stroke-width="2" fill="none"/>
              <path d="M16.59 15.05c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.34-.79-.7-1.32-1.56-1.48-1.83-.16-.27-.02-.41.12-.55.13-.13.29-.34.43-.51.14-.18.18-.31.27-.52.09-.2.05-.39-.02-.55-.07-.16-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.47.07-.72.33-.25.25-.95.93-.95 2.27 0 1.34.97 2.63 1.1 2.81.13.18 1.91 2.92 4.63 3.98.65.23 1.16.37 1.56.47.65.16 1.24.14 1.7.08.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            </svg>
          </a>
          <a href="#" aria-label="Facebook" class="social-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="4" fill="none" stroke="#fff" stroke-width="2"/>
              <path d="M15 8H13.5C12.6716 8 12 8.67157 12 9.5V11H15V13H12V18H10V13H8V11H10V9.5C10 7.567 11.567 6 13.5 6H15V8Z" fill="#fff"/>
            </svg>
          </a>
        </div>
      </div>
      <div class="links">
        <div>
          <h4>Acesso Rápido</h4>
          <ul>
            <li><a href="#">Anunciar</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Perguntas frequentes</a></li>
            <li><a href="#">Categorias</a></li>
            <li><a href="#">Central de Ajuda</a></li>
          </ul>
        </div>
        <div>
          <h4>Como Funciona</h4>
          <ul>
            <li><a href="#">Como funciona</a></li>
            <li><a href="#">Vantagens</a></li>
            <li><a href="#">Tarifas e prazos</a></li>
            <li><a href="#">Formas de pagamento</a></li>
            <li><a href="#">Verificador de contas</a></li>
          </ul>
        </div>
        <div>
          <h4>Institucional</h4>
          <ul>
            <li><a href="#">Termos de uso</a></li>
            <li><a href="#">Programa de recompensa</a></li>
            <li><a href="#">Política de privacidade</a></li>
            <li><a href="#">Política de reembolso</a></li>
            <li><a href="#">Trabalhe conosco</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2024 GG Mercado. Todos os direitos reservados.</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
}
</script>

<style scoped>
.footer {
  background: linear-gradient(120deg, #181c2b 0%, #143d2b 100%);
  color: #fff;
  padding: 48px 0 0 0;
  margin-top: 48px;
}
.footer-top {
  display: flex;
  justify-content: space-between;
  padding: 0 40px 32px 40px;
  flex-wrap: wrap;
}
.sobre {
  max-width: 340px;
}
.logo-footer .logo-svg {
  height: 48px;
  margin-bottom: 12px;
}
.sobre p {
  font-size: 1rem;
  color: #e0e0e0;
  margin-bottom: 18px;
}
.social {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 18px;
}
.social-icon {
  background: rgba(255,255,255,0.08);
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, box-shadow 0.2s;
  font-size: 1.5rem;
}
.social-icon:hover {
  background: #00ff99;
  box-shadow: 0 0 12px #00ff99, 0 0 24px #00ff9944;
}
.links {
  display: flex;
  gap: 48px;
}
.links h4 {
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #fff;
}
.links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.links li {
  margin-bottom: 8px;
}
.links a {
  color: #00ff99;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.2s;
}
.links a:hover {
  color: #fff;
  text-shadow: 0 0 8px #00ff99;
}
.footer-bottom {
  text-align: center;
  padding: 18px 0;
  background: transparent;
  color: #bfc9d8;
  font-size: 1rem;
}
</style> 