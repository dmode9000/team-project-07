(() => {
  const refs = {
    // Додати атрибут data-mobmenu-open на кнопку відкриття
    openMobMenu: document.querySelector('[data-mobmenu-open]'),
    // Додати атрибут data-mobmenu-close на кнопку закриття
    closeMobMenu: document.querySelector('[data-mobmenu-close]'),
    // Додати атрибут data-mobmenu на бекдроп модалки
    mobmenu: document.querySelector('[data-mobmenu]'),
  };

  refs.openMobMenu.addEventListener('click', toggleMobMenu);
  refs.closeMobMenu.addEventListener('click', toggleMobMenu);

  function toggleMobMenu() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.mobmenu.classList.toggle('is-open');
  }
})();
