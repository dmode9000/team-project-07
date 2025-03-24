(() => {
  const refs = {
    // Додати атрибут data-mobmenu-open на кнопку відкриття
    openMobMenu: document.querySelector('[data-mobmenu-open]'),
    // Додати атрибут data-mobmenu-close на кнопку закриття
    closeMobMenu: document.querySelector('[data-mobmenu-close]'),
    // Додати атрибут data-mobmenu на бекдроп модалки
    mobmenu: document.querySelector('[data-mobmenu]'),
    closeButton: document.querySelector('[data-close-button]'),
    anchorLinks: document.querySelectorAll('[data-mobmenu] a'),
  };

  refs.openMobMenu.addEventListener('click', toggleMobMenu);
  refs.closeMobMenu.addEventListener('click', toggleMobMenu);

  // Додати обробник для кожного якірного посилання
  refs.anchorLinks.forEach(link => {
    link.addEventListener('click', closeMobMenu);
  });

  function toggleMobMenu() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.mobmenu.classList.toggle('is-open');
    refs.closeButton.classList.toggle('is-open');
  }
  function closeMobMenu() {
    // Закриваємо меню, видаляючи клас is-open
    refs.mobmenu.classList.remove('is-open');
    refs.closeButton.classList.remove('is-open');
  }
})();
