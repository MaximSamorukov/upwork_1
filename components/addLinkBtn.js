function addLinkBtn({ type }) {
  const item = document.createElement('div');
  const cross = document.createElement('div');
  item.append(cross);
  switch (type) {
    case 'social':
      item.className = 'social-item-cross-container';
      return item;
    case 'not-social':
      item.className = 'btn-item-cross-container';
      return item;
  }
}