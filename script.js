// 1. Amazon (E-commerce Shopping Experience)
const cart = [
  { item: "Laptop", price: 999.99 },
  { item: "Smartphone", price: 499.99 },
  { item: "Headphones", price: 89.99 },
];

alert("Welcome to the checkout process!");

for (let i = 0; i < cart.length; i++) {
  const currentItem = cart[i];
  alert(`Item: ${currentItem.item}\nPrice: $${currentItem.price.toFixed(2)}`);
}

const confirmPurchase = confirm("Do you want to proceed with the purchase?");

if (confirmPurchase) {
  
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price;
  }
  alert(`Thank you for your purchase! Your total is $${total.toFixed(2)}.`);
} else {
  alert("You have canceled the purchase.");
}






