const removeProductButtons = document.getElementsByClassName("remove")
for (var i = 0; i < removeProductButtons.length; i++) {
    removeProductButtons[i].addEventListener("click", function(event) {
        event.target.parentElement.parentElement.parentElement.remove()
        updateTotal
    })
}


function updateTotal() {
    let totalAmount = 0
    const cartProducts = document.getElementsByClassName("content")
    for (var i = 0; i < cartProducts.length; i++) {
      const productPrice = cartProducts[i].getElementsByClassName("price")[0].innerText.replace("R$", "").replace(",", ".")
      const productQuantity = cartProducts[i].getElementsByClassName("product-qtd")[0].value
      totalAmount += productPrice * productQuantity
 }
    totalAmount = totalAmount.toFixed(2)
    totalAmount = totalAmount.replace(".",",")
    document.querySelector(".car-total span").innerText = "R$" + totalAmount
}

