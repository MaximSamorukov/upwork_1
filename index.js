const btnLinkItem = btnLink();
const socialItem = social();
const searchItem = search();

const target = document.querySelector('.target');

target.append(social());
target.append(search());
target.append(btnLink());
