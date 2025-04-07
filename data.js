// EDIT THIS ARRAY ONLY
const products = [
    { 
        name: "CBD Oil", 
        price: "$29.99", 
        image: "images/oil.jpg" 
    }
];

// AUTO-GENERATES PRODUCTS
document.getElementById("products").innerHTML = 
    products.map(p => `
        <div class="product">
            <h3>${p.name}</h3>
            <p>${p.price}</p>
            <img src="${p.image}" width="200">
        </div>
    `).join("");
