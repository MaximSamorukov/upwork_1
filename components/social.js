function social() {
  function inCallback(e) {
    e.stopPropagation();
    e.stopImmediatePropagation();
    const closeElement = document.createElement('div');
    closeElement.addEventListener('click', (e) => {
      console.log('click');
    });
    closeElement.className = 'socialitem-after';
    this.append(closeElement);
  }

  function outCallback(e) {
    e.stopPropagation();
    e.stopImmediatePropagation();
    const closeElement = document.querySelector('.socialitem-after');
    this.removeChild(closeElement);
  }

  const element = document.createElement('div');
  element.className = 'social';
  const elementInnerContainer = document.createElement('div');
  elementInnerContainer.className = 'social-container';
  element.append(elementInnerContainer);

  Array.from({ length: 12 }).map((i, index) => {

    const item = document.createElement('div');
    item.className = 'social-item';
    item.style.backgroundImage = `url(http://newtab.club/img/newtabclub-buttons-${index + 1}.png)`;

    item.addEventListener('mouseenter', inCallback);
    item.addEventListener('mouseleave', outCallback);

    elementInnerContainer.append(item);
  })
  return element;
}
