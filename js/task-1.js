const categories = document.querySelector(`#categories`);
const categoriesItems = categories.querySelectorAll(`.item`);

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach((category) => {
    const categoryTitle = category.querySelector('h2').textContent;
    const elementsCount = category.querySelectorAll('li').length;
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${elementsCount}`);
});
