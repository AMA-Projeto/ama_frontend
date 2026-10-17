const slides = [
  {
    title: "AMA",
    tagline: "Assistência e Mobilização Animal.",
    description: "O AMA é uma plataforma que conecta quem encontra animais em risco com quem pode resgatar.",
    illustration: "./assets/illustrations/onboarding-rescue.svg",
    alt: "Ilustração de pessoas ajudando animais",
  },
  {
    title: "Compartilhe",
    tagline: "",
    description: "Viu um animal em perigo? Publique um alerta em segundos. Resgatadores e ONGs serão notificados.",
    illustration: "./assets/illustrations/onboarding-share.svg",
    alt: "Pessoas compartilhando informações sobre um animal",
  },
  {
    title: "Acompanhe",
    tagline: "",
    description: "Use o AMA para acompanhar os resgates, conversar com voluntários e encontrar quem precisa de ajuda perto de você.",
    illustration: "./assets/illustrations/onboarding-chat.svg",
    alt: "Pessoas conversando por meio de um celular",
  },
];

let currentSlide = 0;

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;",
  })[char]);
}

function renderOnboarding(root) {
  const slide = slides[currentSlide];
  root.innerHTML = `
    <section class="phone-screen onboarding" aria-label="Apresentação do AMA">
      <div class="skip-row"><button class="text-button" type="button" data-action="skip">Skip</button></div>
      <div class="onboarding-art">
        <img src="${slide.illustration}" alt="${slide.alt}" />
      </div>
      <div class="dots" aria-label="Etapa ${currentSlide + 1} de ${slides.length}">
        ${slides.map((_, index) => `<span class="dot ${index === currentSlide ? "active" : ""}"></span>`).join("")}
      </div>
      <div class="onboarding-copy">
        <h1>${slide.title}</h1>
        ${slide.tagline ? `<p class="tagline">${slide.tagline}</p>` : ""}
        <p>${slide.description}</p>
      </div>
      ${currentSlide < slides.length - 1 ? `
        <div class="onboarding-actions">
          <button class="button button-back" type="button" data-action="back" ${currentSlide === 0 ? "disabled" : ""} aria-label="Etapa anterior">‹</button>
          <button class="button button-primary" type="button" data-action="next">Próximo</button>
        </div>` : `
        <button class="button button-primary final-action" type="button" data-action="register">Quero fazer parte!</button>`}
    </section>`;
}

function renderLogin(root, message = "") {
  root.innerHTML = `
    <section class="phone-screen auth-screen">
      <header class="auth-top">
        <span class="logo-square" aria-hidden="true"></span>
        <h1>Seja<br />Bem-Vindo!</h1>
        <p>Faça parte de uma comunidade que ajuda animais a encontrarem apoio.</p>
      </header>
      <div class="auth-panel">
        <h2>Login</h2>
        <form class="auth-form" data-form="login" novalidate>
          <div class="field"><input type="email" name="email" placeholder="Email" autocomplete="email" required aria-label="Email" /></div>
          <div class="field">
            <input class="has-toggle" type="password" name="password" placeholder="Senha" autocomplete="current-password" required minlength="6" aria-label="Senha" />
            <button class="password-toggle" type="button" data-action="toggle-password" aria-label="Mostrar ou ocultar senha">◉</button>
          </div>
          <div class="auth-links"><a href="#" class="link-yellow" data-action="forgot">Esqueceu sua senha?</a></div>
          ${message ? `<p class="form-message" role="status">${escapeHtml(message)}</p>` : ""}
          <button class="button button-primary auth-submit" type="submit">Login</button>
        </form>
        <p class="auth-switch">Não tem uma conta? <a class="link-yellow" href="#" data-action="register">Criar.</a></p>
        <a class="back-link" href="#" data-action="onboarding">← Voltar à apresentação</a>
      </div>
    </section>`;
}

function renderRegister(root, message = "") {
  root.innerHTML = `
    <section class="phone-screen auth-screen register-screen">
      <header class="auth-top"><span class="logo-square" aria-hidden="true"></span></header>
      <div class="auth-panel">
        <h2>Criar Conta</h2>
        <form class="auth-form" data-form="register" novalidate>
          <div class="field"><input type="text" name="name" placeholder="Nome" autocomplete="name" required minlength="2" aria-label="Nome" /></div>
          <div class="field"><input type="email" name="email" placeholder="Email" autocomplete="email" required aria-label="Email" /></div>
          <div class="field"><input type="tel" name="phone" placeholder="Celular" autocomplete="tel" required aria-label="Celular" /></div>
          <div class="field">
            <input class="has-toggle" type="password" name="password" placeholder="Senha" autocomplete="new-password" required minlength="6" aria-label="Senha" />
            <button class="password-toggle" type="button" data-action="toggle-password" aria-label="Mostrar ou ocultar senha">◉</button>
          </div>
          <div class="field">
            <input class="has-toggle" type="password" name="confirmPassword" placeholder="Confirmar senha" autocomplete="new-password" required minlength="6" aria-label="Confirmar senha" />
            <button class="password-toggle" type="button" data-action="toggle-password" aria-label="Mostrar ou ocultar confirmação de senha">◉</button>
          </div>
          ${message ? `<p class="form-message" role="status">${escapeHtml(message)}</p>` : ""}
          <button class="button button-primary auth-submit" type="submit">Criar</button>
        </form>
        <p class="auth-switch">Já tem uma conta? <a class="link-yellow" href="#" data-action="login">Login.</a></p>
      </div>
    </section>`;
}

export function renderApp(root) {
  renderOnboarding(root);

  root.addEventListener("click", (event) => {
    const button = event.target.closest("[data-action]");
    if (!button) return;
    const action = button.dataset.action;
    if (action === "skip" || action === "login") renderLogin(root);
    if (action === "register") renderRegister(root);
    if (action === "onboarding") { currentSlide = 0; renderOnboarding(root); }
    if (action === "next") { currentSlide = Math.min(currentSlide + 1, slides.length - 1); renderOnboarding(root); }
    if (action === "back") { currentSlide = Math.max(currentSlide - 1, 0); renderOnboarding(root); }
    if (action === "toggle-password") {
      const field = button.closest(".field")?.querySelector("input");
      if (field) {
        field.type = field.type === "password" ? "text" : "password";
        button.setAttribute("aria-label", field.type === "password" ? "Mostrar senha" : "Ocultar senha");
      }
    }
    if (action === "forgot") {
      event.preventDefault();
      renderLogin(root, "A recuperação de senha será disponibilizada após a integração com o backend.");
    }
  });

  root.addEventListener("submit", (event) => {
    const form = event.target.closest("form[data-form]");
    if (!form) return;
    event.preventDefault();
    const data = new FormData(form);
    const email = String(data.get("email") || "").trim();
    const password = String(data.get("password") || "");
    let message = "";

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      message = "Informe um email válido.";
    } else if (password.length < 6) {
      message = "A senha deve ter pelo menos 6 caracteres.";
    } else if (form.dataset.form === "register") {
      const name = String(data.get("name") || "").trim();
      const phone = String(data.get("phone") || "").trim();
      const confirmPassword = String(data.get("confirmPassword") || "");
      if (name.length < 2) message = "Informe seu nome.";
      else if (phone.length < 8) message = "Informe um celular válido.";
      else if (password !== confirmPassword) message = "As senhas não coincidem.";
      else message = "Validação local concluída. O cadastro real depende da integração com o backend.";
      renderRegister(root, message);
    } else {
      message = "Validação local concluída. O login real depende da integração com o backend.";
      renderLogin(root, message);
    }
    if (form.dataset.form === "login") renderLogin(root, message);
  });
}
