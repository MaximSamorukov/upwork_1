const social = () => {
  const element = document.createElement('div');
  element.className = 'social';
  const elementInnerContainer = document.createElement('div');
  elementInnerContainer.className = 'social-container';
  element.append(elementInnerContainer);

  Array.from({ length: 12 }).map((i, index) => {
    const item = document.createElement('div');
    item.className = 'social-item';
    item.style.backgroundImage = `url(http://newtab.club/img/newtabclub-buttons-${index + 1}.png)`;
    elementInnerContainer.append(item);
  })
  return element;
}
