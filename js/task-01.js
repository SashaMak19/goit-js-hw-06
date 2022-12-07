// 1.
const listCategories = document.querySelector("#categories");
console.log(`Number of categories: ${listCategories.children.length}`);

// 2.
const itemCategories = document.querySelectorAll(".item");
itemCategories.forEach((item) => {
  console.log(
    `Category: ${item.firstElementChild.textContent} Elements: ${item.lastElementChild.children.length}`
  );
});
