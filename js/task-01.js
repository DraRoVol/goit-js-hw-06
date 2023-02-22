const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(item => {
  const categoriesName = item.querySelector('h2').textContent;
  const categoriesElementsCount = item.querySelectorAll('ul li').length;

  console.log(`Category: ${categoriesName}`);
  console.log(`Elements: ${categoriesElementsCount}`);
});