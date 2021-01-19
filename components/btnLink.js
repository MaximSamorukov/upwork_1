const btnLink = () => {
  const itemsContainer = document.createElement('div');
  itemsContainer.className = 'items-container';
  const element = document.createElement('div');
  element.className = 'btnlink'
  Array.from({ length: 20 }).map((i) => {
    const item = document.createElement('div');
    item.className = 'btnitem';
    itemsContainer.append(item);
  })
  element.append(itemsContainer);
  return element;
}
