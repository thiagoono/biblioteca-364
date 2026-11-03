/**
 * =============================================================================
 * BIBLIOTECA 364 — SCRIPTS DE INTERATIVIDADE DO BOOTSTRAP
 * ID 04: Componentes nativos JavaScript do Bootstrap (Modal, Offcanvas, Tooltips)
 * =============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // Inicialização de Tooltips nativos do Bootstrap
  const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.forEach((tooltipTriggerEl) => {
    if (window.bootstrap && window.bootstrap.Tooltip) {
      new window.bootstrap.Tooltip(tooltipTriggerEl);
    }
  });

  // Alternância de Visibilidade de Senha (Login e Cadastro)
  const togglePasswordBtns = document.querySelectorAll('.toggle-password-btn');
  togglePasswordBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetInputId = btn.getAttribute('data-target-input');
      const input = document.getElementById(targetInputId);
      const icon = btn.querySelector('.material-symbols-outlined');

      if (input) {
        const isPassword = input.getAttribute('type') === 'password';
        input.setAttribute('type', isPassword ? 'text' : 'password');
        if (icon) {
          icon.textContent = isPassword ? 'visibility' : 'visibility_off';
        }
      }
    });
  });
});
