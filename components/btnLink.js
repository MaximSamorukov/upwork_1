function btnLink() {
  function inCallback(e) {
    e.stopPropagation();
    e.stopImmediatePropagation();
    const closeElement = document.createElement('div');
    closeElement.className = 'btnitem-after';
    this.append(closeElement);
  }

  function outCallback(e) {
    e.stopPropagation();
    e.stopImmediatePropagation();
    const closeElement = document.querySelector('.btnitem-after');
    this.removeChild(closeElement);
  }

  const itemsContainer = document.createElement('div');
  itemsContainer.className = 'items-container';
  const element = document.createElement('div');
  element.className = 'btnlink'
  Array.from({ length: 20 }).map((i) => {
    const item = document.createElement('div');
    item.className = 'btnitem';
    item.addEventListener('mouseenter', inCallback);
    item.addEventListener('mouseleave', outCallback);
    itemsContainer.append(item);
  })
  element.append(itemsContainer);
  return element;
}
