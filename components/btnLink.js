function btnLink() {
  function inCallback(e) {
    e.stopPropagation();
    e.stopImmediatePropagation();
    const closeElement = document.createElement('div');
    closeElement.addEventListener('click', (e) => {
      console.log('click');
    })
    closeElement.className = 'btnitem-after';
    this.append(closeElement);
  }

  function outCallback(e) {
    e.stopPropagation();
    e.stopImmediatePropagation();
    const closeElement = document.querySelector('.btnitem-after');
    this.removeChild(closeElement);
  }

  function onClick(e) {

  }

  const itemsContainer = document.createElement('div');
  itemsContainer.className = 'items-container';
  const element = document.createElement('div');
  element.className = 'btnlink';
  // const s = {};
  console.log(array);
  // const s = Array.from({ length: 36 }).map((i, index) => {
  //   const img = `http://newtab.club/img/Newtabclub-site-${index + 1}.jpg`;
  //   const icon = `http://newtab.club/img/Newtabclub-favicon-${index + 1}.jpg`;
  //   const name = 'name';
  //   return {
  //     img,
  //     icon,
  //     name,
  //   };
  // });
  // const local = window.localStorage;
  // local.setItem('local', JSON.stringify(s));
  array.map((i, index) => {
    const anchor = document.createElement('a');
    anchor.href = `http://${i.link}`;
    anchor.target = "_blank";
    const imgContainer = document.createElement('div');
    anchor.append(imgContainer);
    imgContainer.className = 'image-container';
    const img = document.createElement('img');
    img.src = i.img;  //`http://newtab.club/img/Newtabclub-site-${index + 1}.jpg`;
    imgContainer.append(img);

    const iconContainer = document.createElement('div');
    iconContainer.className = 'icon-container';
    const text = document.createElement('div');
    text.textContent = i.name;
    text.className = 'icon-text';
    const icon = document.createElement('img');
    icon.src = i.icon; //`http://newtab.club/img/Newtabclub-favicon-${index + 1}.jpg`;
    iconContainer.append(icon);
    iconContainer.append(text);
    const item = document.createElement('div');
    item.append(anchor);
    item.append(iconContainer);
    item.className = 'btnitem';
    item.addEventListener('mouseenter', inCallback);
    item.addEventListener('mouseleave', outCallback);
    item.addEventListener('click', onClick);
    itemsContainer.append(item);
  })
  element.append(itemsContainer);
  return element;
}
