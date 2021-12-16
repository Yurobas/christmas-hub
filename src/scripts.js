document.addEventListener("DOMContentLoaded", () => {

  +function accordion() {
    const items = [...document.querySelectorAll('.faq__item')];

    items.forEach(item => {

      const body = item.querySelector('.faq__item-body');
      const icon = item.querySelector('.faq__item-trigger');

      item.addEventListener('click', () => {
        if (!item.classList.contains('--active')) {
          items.forEach(item => {
            item.classList.remove('--active');
            item.querySelector('.faq__item-body').removeAttribute('style');
            item.querySelector('.faq__item-trigger').setAttribute('title', 'Open');
          });

          item.classList.add('--active');
          const content = item.querySelector('.faq__item-content');
          const height = content.getBoundingClientRect().height;
          body.style.maxHeight = `${height}px`;
          icon.setAttribute('title', 'Close');
        } else {
          item.classList.remove('--active');
          body.removeAttribute('style');
          icon.setAttribute('title', 'Open');
        }
      });

    });

  }();

});