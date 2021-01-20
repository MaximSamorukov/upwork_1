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
  element.className = 'btnlink';
  // const s = {};
  // const s = Array.from({ length: 200 }).map((i, index) => {
  //   const img = `http://newtab.club/img/Newtabclub-site-${index + 1}.jpg`;
  //   const icon = `http://newtab.club/img/Newtabclub-favicon-${index + 1}.jpg`;

  //   return {
  //     img,
  //     icon
  //   };
  // });
  // console.log(s);
  Array.from({ length: 36 }).map((i, index) => {
    const imgContainer = document.createElement('div');
    imgContainer.className = 'image-container';
    const img = document.createElement('img');
    img.src = `http://newtab.club/img/Newtabclub-site-${index + 1}.jpg`;
    imgContainer.append(img);

    const iconContainer = document.createElement('div');
    iconContainer.className = 'icon-container';
    const icon = document.createElement('img');
    icon.src = `http://newtab.club/img/Newtabclub-favicon-${index + 1}.jpg`;
    iconContainer.append(icon);

    const item = document.createElement('div');
    item.append(imgContainer);
    item.append(iconContainer);
    item.className = 'btnitem';
    item.addEventListener('mouseenter', inCallback);
    item.addEventListener('mouseleave', outCallback);
    itemsContainer.append(item);
  })
  element.append(itemsContainer);
  return element;
}
