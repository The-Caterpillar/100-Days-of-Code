document.addEventListener('DOMContentLoaded', ()=>{
    const products = [
        {id: 1, name: "Tata chai", price: 120},
        {id: 2, name: "Tata sampann besan", price: 250},
        {id: 3, name: "Fortune Rice Bran Oil", price: 170},
        {id: 4, name: "Amul whole milk", price: 55},
        {id: 5, name: "Apples", price: 40},
        {id: 6, name: "Mother Dairy Dahi", price: 30},
    ];
    let cart = []; // Our cart is empty initially

    const product_list = document.getElementById('product-list');
    const cart_Items = document.getElementById('cart-items');
    const emptyCartMsg = document.getElementById('empty-cart')
    const cart_total = document.getElementById('cart-total');
    const total_price = document.getElementById('total-price');
    const checkout_btn = document.getElementById('checkout-btn');
    let bill = 0;

    checkout_btn.addEventListener('click', ()=>{})

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML =
        `<span>${product.name} - ${product.price}</span>
        <button data-id="${product.id}">Add to cart</button>`;

        product_list.appendChild(productDiv);
    });

    product_list.addEventListener('click', (e)=>{
        // tagName is a property of an HTML element that returns the tag name as an uppercase string,
        // like "DIV", "BUTTON", "SPAN", etc.
        if(e.target.tagName === "BUTTON")
        {
            // console.log("Button clicked hehehe");
            const productID = parseInt(e.target.getAttribute('data-id'));
            const prod = products.find(p => p.id === productID);
            addToCart(prod);
        }
    });

    function addToCart(prod)
    {
        cart.push(prod);
        console.log('\ncart items=: ',cart);
        renderCart(cart)
    }

    function renderCart(cart_List){
        if (cart.length === 0)
        {
            cart_total.classList.add('hidden');
            cart_Items.innerHTML = '<div>Your cart is empty</div>';
            return;
        }
        else{
            bill = 0;
            let count = 0;
            cart_Items.innerHTML = "";

            // creating the cart display :
            cart.forEach((product, idx) => {
                bill = bill + product.price;
                const cartDiv = document.createElement('div');
                cartDiv.classList.add('product');
                cartDiv.innerHTML =
                `<span> ${idx + 1}. ${product.name} = ${product.price} </span>
                <button data-index="${idx}"> Remove </button>`;
                cart_Items.appendChild(cartDiv);
            });


            cart_total.classList.remove('hidden'); // Displaying cart bill:
            total_price.innerHTML = `$${bill}`;
        }
    }

    cart_Items.addEventListener('click',(e)=>{
        if(e.target.tagName === "BUTTON")
        {
            // console.log('cart-item button clicked... yay!!');
            const idx = parseInt(e.target.getAttribute('data-index'));
            if (!isNaN(idx)) {
                cart.splice(idx, 1);
                renderCart();
            }
        }
    })

    // checkout button
    checkout_btn.addEventListener('click',()=>{
        alert('Checkout successful!! We have received your order ^_^');
        cart.length = 0;
        renderCart();
    })

})