//form
function validateForm () {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (username === "" || !/^[a-zA-Z0-9]+$/.test(username)) {
        console.log("Form submission failed: Invalid username");
        return;
    } if (email === "" || !/@/.test(email)) {
        console.log("Form submission failed: Invalid email");
        return;
    } if (password === "" || password.length < 8) {
        console.log("Form submission failed: Invalid email");
        return;
    }
    console.log("Form submitted successfully");
}

//products
myProducts = ["Apple", "Banana", "Orange", "Grapes", "Pineapple", "Watermelon", "Mango", "Papaya", "Strawberry", "Blueberry"];

const productList = document.getElementById("product-list");
const searchInput = document.getElementById("search");

for (let i = 0; i < myProducts.length; i++) {
  const li = document.createElement("li");
  li.textContent = myProducts[i];
  productList.appendChild(li);
}

function searchProducts(query) {
  const matchingProducts = [];
  for (let i = 0; i < myProducts.length; i++) {
    if (myProducts[i].toLowerCase().includes(query.toLowerCase())) {
      matchingProducts.push(myProducts[i]);
    }
  }
  return matchingProducts;
}

function filterProductList() {
  const query = searchInput.value;
  const matchingProducts = searchProducts(query);
  productList.innerHTML = "";
  for (let i = 0; i < matchingProducts.length; i++) {
    const li = document.createElement("li");
    li.textContent = matchingProducts[i];
    productList.appendChild(li);
  }
}

searchInput.addEventListener("input", filterProductList);