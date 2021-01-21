const search = () => {
  const localStorage = window.localStorage;
  const searchFieldContainer = document.createElement('div');
  const searchField = document.createElement('input');
  searchFieldContainer.className = 'input-group mb-3';
  searchField.className = 'form-control';
  searchField.type = 'text';
  searchField.placeholder = 'Search';
  searchFieldContainer.append(searchField);
  searchField.addEventListener('input', (e) => {
    const { value } = e.target;
    console.log(value);
    localStorage.setItem('value', value);
  })
  const element = document.createElement('div');
  const searchContainer = document.createElement('div');
  searchContainer.className = 'search-container';
  searchContainer.append(searchFieldContainer);
  element.className = 'search'
  element.append(searchContainer);
  return element;
}
