let cart = [];

document.querySelectorAll(".product-card button").forEach(button => {
  button.addEventListener("click", () => {
    const card = button.parentElement;
    const name = card.querySelector("h3").textContent;
    const price = card.querySelector(".price").textContent;
    cart.push({ name, price });
    alert(`✅ "${name}" added to cart.`);
    console.log("Cart:", cart);
  });
});

document.querySelector(".search-bar").addEventListener("keyup", (e) => {
  const search = e.target.value.toLowerCase();
  document.querySelectorAll(".product-card").forEach(card => {
    const name = card.querySelector("h3").textContent.toLowerCase();
    card.style.display = name.includes(search) ? "block" : "none";
  });
});
