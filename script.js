
let url = "https://fakestoreapi.com/products/category/electronics"



let fetchProduct = async () => {
    try {
        let res = await fetch(url);
        let data = await res.json();

        let container = document.querySelector(".products");
        let mapData = data.map((i) => {
            return `
            
             <div class="card">
                <img src="${i.image}" alt="${i.title}">
                <h3>${i.title}</h3>
                <p>Price: ₹${i.price}</p>
                <button>Add to Cart</button>
                <button>Buy Now</button>
             
             </div>
            `
        }).join("");
        container.innerHTML += mapData;

    }
    catch (err) {
        console.log("err", err)
    }
}
fetchProduct();
let hamburger = document.querySelector(".hamburger");
let menulist = document.querySelector("#menulist")
menulist.style.maxHeight = "0px";

hamburger.onclick=function toggleMenu() {
    if (menulist.style.maxHeight === "0px") {
        menulist.style.maxHeight = "300px";
    }
    else {
        menulist.style.maxHeight = "0px";
    }
} 

