let cart = [];
let total = 0;
const shipping = 60;

function addToCart(productName, button){

const card = button.parentElement;

const variant = card.querySelector(".variant");

const selectedText = variant.options[variant.selectedIndex].text;

const price = Number(variant.value);

cart.push({
name: productName,
variant: selectedText,
price: price
});

total += price;

updateCart();
}

function updateCart(){

const cartItems = document.getElementById("cartItems");

const totalAmount = document.getElementById("totalAmount");

const cartCount = document.getElementById("cartCount");

cartItems.innerHTML = "";

cart.forEach((item,index)=>{

cartItems.innerHTML += `
<div class="cart-item">

<div>
${item.name}<br>
<small>${item.variant}</small>
</div>

<div>
₹${item.price}
<button
onclick="removeItem(${index})"
style="
margin-left:10px;
background:red;
color:white;
border:none;
padding:4px 8px;
border-radius:5px;
cursor:pointer;
">
X
</button>
</div>

</div>
`;
});

const grandTotal = cart.length > 0 ? total + shipping : 0;
totalAmount.innerText = grandTotal;

cartCount.innerText = cart.length;
}

function removeItem(index){

total -= cart[index].price;

cart.splice(index,1);

updateCart();
}

function sendWhatsApp(){

if(cart.length===0){

alert("Please add products to cart");

return;
}

const customerName =
document.getElementById("customerName").value;

let message =
"*🌶️ Selvi Masala Order*%0A%0A";

if(customerName){

message +=
"*Customer:* " +
customerName +
"%0A%0A";
}

cart.forEach(item=>{

message +=
"• " +
item.name +
" - " +
item.variant +
"%0A";
});

message +=
const grandTotal = total + shipping;

message +=
"%0A%0A🚚 Shipping : ₹60";

message +=
"%0A💰 *Grand Total : ₹" +
grandTotal +
"*";

window.open(
"https://wa.me/919566700910?text=" +
message,
"_blank"
);
}
