const banner = document.querySelector('#page-banner');
const bookList = document.querySelector('#book-list');

console.log('#page-banner node type is:', banner.nodeType);
console.log('#page-banner node name is:', banner.nodeName);
console.log('#page-banner has child nodes:', banner.hasChildNodes());
console.log('book list parent element:', bookList.parentElement);
console.log('book list parent node:', bookList.parentNode);

const clonedBanner = banner.cloneNode(true);
console.log(clonedBanner);
console.log('all node children:');
Array.from(bookList.childNodes).forEach(function(node){
  console.log(node);
});

console.log('all element children:');
Array.from(bookList.children).forEach(function(node){
  console.log(node);
});

const titles = bookList.querySelectorAll('.name');

console.log('Book titles:');
Array.from(titles).forEach(function(title){
  console.log(title.textContent);
});