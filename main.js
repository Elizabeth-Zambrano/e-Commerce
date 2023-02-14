const toggleMenu = document.querySelector('.menu');
const toggleCart = document.querySelector('.cart');


// ------ Se crean los articulos -----------------//

const hoodies = {
    units: 0,
    stock: 10,
    name: "Hoodies",
    price: 14,
    subtotal: function () {
        return this.units * this.price;
    },
}
console.log(hoodies.subtotal());
const shirts = {
    units: 0,
    stock: 14,
    name: "Shirts",
    price: 24,
    subtotal: function () {
        return this.units * this.price;
    },
}
const sweatshirts = {
    units: 0,
    stock: 19,
    name: "Sweatshirts",
    price: 24,
    subtotal: function () {
        return this.units * this.price;
    },
}


//--------------Se crean las variables necesarias---------//

let totalItems = 0;
let totalPrice = 0;
const addHoodie = document.querySelector('.addHoodie');
const addShirt = document.querySelector('.addShirt');
const addSweatshirt = document.querySelector('.addSweatshirt');
const cartAddHoodie = document.querySelector('.cartAddHoodie');
const cartAddShirt = document.querySelector('.cartAddShirt');
const cartAddSweatshirt = document.querySelector('.cartAddSweatshirt');
const cartRemoveHoodie = document.querySelector('.cartRemoveHoodie');
const cartRemoveShirt = document.querySelector('.cartRemoveShirt');
const cartRemoveSweatshirt = document.querySelector('.cartRemoveSweatshirt');
const trashHoodie = document.querySelector('.trashHoodie');
const trashShirt = document.querySelector('.trashShirt');
const trashSweatshirt = document.querySelector('.trashSweatshirt');
const count = document.querySelector('.count');
const countCart = document.querySelector('.countCart');
const checkout = document.querySelector('.cart__btn');
const cartTotalPrice = document.querySelector('.cartTotalPrice');
const unitsHoodies = document.querySelector('.unitsHoodies');
const unitsShirts = document.querySelector('.unitsShirts');
const unitsSweatshirts = document.querySelector('.unitsSweatshirts');
const subtotalHoodies = document.querySelector('.subtotalHoodies');
const subtotalShirts = document.querySelector('.subtotalShirts');
const subtotalSweatshirts = document.querySelector('.subtotalSweatshirts');


// Se hacen eventos para mostrar y quitar el menu/carrito //


document.querySelector('.toggle').addEventListener('click', () => toggleMenu.classList.add("show__menu"));
document.querySelector('.menu__close').addEventListener('click', () => toggleMenu.classList.remove("show__menu"));
document.querySelector('.shop').addEventListener('click', () => toggleCart.classList.add("show__cart"));
document.querySelector('.cart__close').addEventListener('click', () => toggleCart.classList.remove("show__cart"));


// cambio del menu al hacer scroll //


if (document.getElementById('header')) {
    window.addEventListener('scroll', function () {
        if (window.scrollY >= 50) {
            header.classList.add('scroll__header');
        } else {
            header.classList.remove('scroll__header');
        }
    })
}



// Agregar y quitar items del carrito//


function addItem(item) {
    if (item.stock <= item.units) {
        alert("Out of stock!");
    } else {
        item.units += 1;
        checkTotals();
    }
    updateInfo();
    cartEmpty();
}

function removeItem(item) {
    if (item.units != 0) {
        item.units -= 1;
        checkTotals();
    }
    updateInfo();
    cartEmpty();
}



// Se agregan eventos al hacer click donde agrega y remueve articulos del carrito //
// utilizando los datos almacenados en los articulos //


addHoodie.addEventListener('click', addItem.bind(this, hoodies));
addShirt.addEventListener('click', addItem.bind(this, shirts));
addSweatshirt.addEventListener('click', addItem.bind(this, sweatshirts));
cartAddHoodie.addEventListener('click', addItem.bind(this, hoodies));
cartAddShirt.addEventListener('click', addItem.bind(this, shirts));
cartAddSweatshirt.addEventListener('click', addItem.bind(this, sweatshirts));
cartRemoveHoodie.addEventListener('click', removeItem.bind(this, hoodies));
cartRemoveShirt.addEventListener('click', removeItem.bind(this, shirts));
cartRemoveSweatshirt.addEventListener('click', removeItem.bind(this, sweatshirts));


// se agregan eventos donde al hacer click se guarde la informacion en las siguientes funciones


trashHoodie.addEventListener('click', () => {
    hoodies.units = 0;
    checkTotals();
    updateInfo();
    cartEmpty();
});
trashShirt.addEventListener('click', () => {
    shirts.units = 0;
    checkTotals();
    updateInfo();
    cartEmpty();
});
trashSweatshirt.addEventListener('click', () => {
    sweatshirts.units = 0;
    checkTotals();
    updateInfo();
    cartEmpty();
});
checkout.addEventListener('click', () => {
    hoodies.units = 0;
    shirts.units = 0;
    sweatshirts.units = 0;
    checkTotals();
    updateInfo();
    cartEmpty();
    alert('Thank you for your purchase!');
});


// Se crea una funcion con condicionales que permitan mostrar/remover items del carrito


function cartEmpty() {
    if (totalItems > 0) {
        document.querySelector('.cart__empty').classList.add('cart__hide');
    } else {
        document.querySelector('.cart__empty').classList.remove('cart__hide');
    }
    if (hoodies.units > 0) {
        document.querySelector('#hoodies').classList.remove('cart__hide');
    } else {
        document.querySelector('#hoodies').classList.add('cart__hide');
    }
    if (shirts.units > 0) {
        document.querySelector('#shirts').classList.remove('cart__hide');
    } else {
        document.querySelector('#shirts').classList.add('cart__hide');
    }
    if (sweatshirts.units > 0) {
        document.querySelector('#sweatshirts').classList.remove('cart__hide');
    } else {
        document.querySelector('#sweatshirts').classList.add('cart__hide');
    }
}



// funcion que permite sumar el precio y cantidad de articulos


function checkTotals() {
    totalItems = hoodies.units + shirts.units + sweatshirts.units;
    totalPrice = hoodies.subtotal() + shirts.subtotal() + sweatshirts.subtotal();
    if (totalItems > 0) {
        checkout.disabled = false;
    } else {
        checkout.disabled = true;
    }
}


// contador de articulos y precios


function updateInfo() {
    count.textContent = totalItems;
    countCart.textContent = totalItems;
    cartTotalPrice.textContent = `$${totalPrice}.00`;
    unitsHoodies.textContent = `${hoodies.units} units`;
    unitsShirts.textContent = `${shirts.units} units`;
    unitsSweatshirts.textContent = `${sweatshirts.units} units`;
    subtotalHoodies.textContent = `Subtotal: $${hoodies.subtotal()}.00`;
    subtotalShirts.textContent = `Subtotal: $${shirts.subtotal()}.00`;
    subtotalSweatshirts.textContent = `Subtotal: $${sweatshirts.subtotal()}.00`;
}