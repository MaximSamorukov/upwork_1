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
  Array.from({ length: 20 }).map((i, index) => {
    const imgContainer = document.createElement('div');
    imgContainer.className = 'image-container';
    const img = document.createElement('img');
    img.src = `http://newtab.club/img/Newtabclub-site-${index + 1}.jpg`;
    imgContainer.append(img);
    const item = document.createElement('div');
    item.append(imgContainer);
    item.className = 'btnitem';
    item.addEventListener('mouseenter', inCallback);
    item.addEventListener('mouseleave', outCallback);
    itemsContainer.append(item);
  })
  element.append(itemsContainer);
  return element;
}
