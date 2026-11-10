/**
 * =============================================================================
 * BIBLIOTECA 364 — SCRIPTS DE INTERATIVIDADE DO BOOTSTRAP
 * ID 04: Componentes nativos JavaScript do Bootstrap (Modal, Offcanvas, Toast, Tooltip)
 * =============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Inicialização de Tooltips nativos do Bootstrap
  const tooltipTriggerList = Array.from(
    document.querySelectorAll('[data-bs-toggle="tooltip"]'),
  );
  tooltipTriggerList.forEach((tooltipTriggerEl) => {
    if (window.bootstrap && window.bootstrap.Tooltip) {
      new window.bootstrap.Tooltip(tooltipTriggerEl);
    }
  });

  // 2. Alternância de Visibilidade de Senha (Login e Cadastro)
  const togglePasswordBtns = document.querySelectorAll(".toggle-password-btn");
  togglePasswordBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetInputId = btn.getAttribute("data-target-input");
      const input = document.getElementById(targetInputId);
      const icon = btn.querySelector(".material-symbols-outlined");

      if (input) {
        const isPassword = input.getAttribute("type") === "password";
        input.setAttribute("type", isPassword ? "text" : "password");
        if (icon) {
          icon.textContent = isPassword ? "visibility" : "visibility_off";
        }
      }
    });
  });

  // Helper para exibir Toast Bootstrap
  function showToast(toastId, message, isSuccess = true) {
    const toastEl = document.getElementById(toastId);
    if (!toastEl || !window.bootstrap || !window.bootstrap.Toast) return;

    const messageEl =
      toastEl.querySelector("#toastMessage") ||
      toastEl.querySelector("#detailToastMessage");
    const iconEl =
      toastEl.querySelector("#toastIcon") ||
      toastEl.querySelector("#detailToastIcon");

    if (messageEl && message) {
      messageEl.textContent = message;
    }
    if (iconEl) {
      iconEl.textContent = isSuccess ? "check_circle" : "info";
      iconEl.className = `material-symbols-outlined ${isSuccess ? "text-success" : "text-warning"}`;
    }

    const toast = new window.bootstrap.Toast(toastEl, { delay: 4000 });
    toast.show();
  }

  // 3. Filtro em Tempo Real por Busca de Texto
  const searchInputs = document.querySelectorAll(
    '#searchGlobalInput, #searchCatalogInput, input[type="search"]',
  );
  searchInputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase().trim();
      const bookCards = document.querySelectorAll(
        ".book-item, .col:has(.book-card), .book-card",
      );

      bookCards.forEach((card) => {
        const text = card.textContent.toLowerCase();
        if (text.includes(query)) {
          card.classList.remove("d-none");
        } else {
          card.classList.add("d-none");
        }
      });
    });
  });

  // 4. Filtros de Status (Disponível, Solicitado, Emprestado)
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filterType = btn.textContent.trim().toLowerCase();
      const bookCards = document.querySelectorAll(".col:has(.book-card)");

      bookCards.forEach((col) => {
        if (filterType === "todos" || filterType === "filtro") {
          col.classList.remove("d-none");
          return;
        }

        const badgeText =
          col
            .querySelector(".badge-custom, .status-badge, .badge")
            ?.textContent.toLowerCase() || "";
        if (badgeText.includes(filterType)) {
          col.classList.remove("d-none");
        } else {
          col.classList.add("d-none");
        }
      });
    });
  });

  // 5. Botões de "Adicionar à Minha Biblioteca"
  const addButtons = document.querySelectorAll(
    ".btn-add-book, #btnAddToMyLibrary",
  );
  addButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const bookTitle = btn.getAttribute("data-book-title") || "Dom Casmurro";
      const isAlreadyAdded = btn.getAttribute("data-added") === "true";

      if (!isAlreadyAdded) {
        btn.setAttribute("data-added", "true");
        btn.classList.remove("btn-editorial-primary");
        btn.classList.add("btn-success");
        btn.innerHTML =
          '<span class="material-symbols-outlined" style="font-size: 1.125rem;">check</span><span>ADICIONADO AO ACERVO</span>';

        showToast(
          "addBookToast",
          `"${bookTitle}" foi adicionado à sua biblioteca com sucesso!`,
          true,
        );
        showToast(
          "detailToast",
          `"${bookTitle}" foi adicionado à sua biblioteca com sucesso!`,
          true,
        );
      } else {
        btn.setAttribute("data-added", "false");
        btn.classList.remove("btn-success");
        btn.classList.add("btn-editorial-primary");
        btn.innerHTML =
          '<span class="material-symbols-outlined" style="font-size: 1.125rem;">bookmark_add</span><span>ADICIONAR À MINHA BIBLIOTECA</span>';

        showToast(
          "addBookToast",
          `"${bookTitle}" foi removido da sua biblioteca.`,
          false,
        );
        showToast(
          "detailToast",
          `"${bookTitle}" foi removido da sua biblioteca.`,
          false,
        );
      }
    });
  });

  // 6. Ações de Gestão de Empréstimos: Aceitar e Recusar Solicitações
  const acceptButtons = document.querySelectorAll(".btn-action-accept");
  acceptButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const bookName = btn.getAttribute("data-book-name") || "Livro";
      const userName = btn.getAttribute("data-user-name") || "Usuário";
      const card = btn.closest(".request-card");

      if (card) {
        const actionGroup = card.querySelector(".action-buttons-group");
        if (actionGroup) {
          actionGroup.innerHTML = `
            <span class="badge bg-success-subtle text-success border border-success-subtle px-3 py-2 d-flex align-items-center gap-1">
              <span class="material-symbols-outlined fs-6">check</span>
              Empréstimo Aprovado
            </span>
          `;
        }
      }
      showToast(
        "loanActionToast",
        `Empréstimo de "${bookName}" para ${userName} foi aprovado!`,
        true,
      );
    });
  });

  const rejectButtons = document.querySelectorAll(".btn-action-reject");
  rejectButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const bookName = btn.getAttribute("data-book-name") || "Livro";
      const card = btn.closest(".request-card");

      if (card) {
        const actionGroup = card.querySelector(".action-buttons-group");
        if (actionGroup) {
          actionGroup.innerHTML = `
            <span class="badge bg-danger-subtle text-danger border border-danger-subtle px-3 py-2 d-flex align-items-center gap-1">
              <span class="material-symbols-outlined fs-6">close</span>
              Solicitação Recusada
            </span>
          `;
        }
      }
      showToast(
        "loanActionToast",
        `Solicitação de "${bookName}" foi recusada.`,
        false,
      );
    });
  });

  // 7. Confirmação de Devolução de Livro (Modal)
  const confirmReturnBtn = document.getElementById("btnConfirmReturn");
  if (confirmReturnBtn) {
    confirmReturnBtn.addEventListener("click", () => {
      const loanCard = document.getElementById("loan-item-1");
      if (loanCard) {
        loanCard.innerHTML = `
          <div class="p-3 text-center text-success bg-success-subtle border border-success-subtle">
            <span class="material-symbols-outlined d-block mb-1">task_alt</span>
            <div class="fw-bold">Devolução Confirmada</div>
            <div class="small">O exemplar está disponível no acervo comunitário.</div>
          </div>
        `;
      }
      showToast("loanActionToast", "Devolução confirmada com sucesso!", true);
    });
  }

  // 8. Confirmação de Solicitação de Empréstimo em detalhes-livro.html
  const confirmLoanBtn = document.getElementById("btnConfirmLoanRequest");
  if (confirmLoanBtn) {
    confirmLoanBtn.addEventListener("click", () => {
      const btnRequest = document.getElementById("btnRequestLoan");
      const ownerCaption = document.getElementById("ownerCaption");

      if (btnRequest) {
        btnRequest.classList.remove("btn-editorial-primary");
        btnRequest.classList.add("btn-secondary");
        btnRequest.disabled = true;
        btnRequest.innerHTML =
          '<span class="material-symbols-outlined" style="font-size: 1.25rem;">hourglass_top</span><span>SOLICITAÇÃO PENDENTE</span>';
      }

      if (ownerCaption) {
        ownerCaption.innerHTML =
          'Solicitação enviada para <strong class="text-dark">Roberto Carlos</strong>. Aguarde a aprovação.';
      }

      showToast(
        "detailToast",
        "Sua solicitação de empréstimo foi enviada com sucesso a Roberto Carlos!",
        true,
      );
    });
  }
});
