$(document).ready(function() {

  let subTotal = 0;
  let tax = 0;
  let total = 0;
  let orderIds = ['Royale with Cheese', 'Arugula Pie', 'Ice Cream Biscuit', 'Smoked Swine'];


  function cartItems(itemId) {
    let card = document.getElementById(itemId).parentNode.parentNode;
    let newRow = document.createElement('tr');
    let name = document.createElement('td');
    let price = document.createElement('td');
    let cost = card.id * 1;


    name.innerHTML = (itemId);


    price.innerHTML = cost;

    price.setAttribute('class', 'align-text-right');

    subTotal = +(subTotal + cost).toFixed(2);
    tax = +(subTotal * 0.08).toFixed(2);
    total = +(subTotal + tax).toFixed(2);

    document.getElementById('subtotal').innerHTML = subTotal;
    document.getElementById('tax').innerHTML = tax;
    document.getElementById('total').innerHTML = total;


    newRow.appendChild(name);
    newRow.appendChild(price);
    document.getElementById('cart').appendChild(newRow);
  }

  for (let i = 0; i < orderIds.length; i++) {
    document.getElementById(orderIds[i]).addEventListener('click', function() {
      cartItems(this.id);

    });
  }

  document.getElementById('submit_order').addEventListener('click', function() {
    name = document.getElementById('icon_prefix').value;
    phone = document.getElementById('icon_telephone').value;
    address = document.getElementById('icon_address').value;

    if (subTotal === 0) {
      return Materialize.toast('Oops! There are no items in your cart.', 1000, );
    } else if (!name || !phone || !address) {
      return Materialize.toast('Please ensure all fields are filled out.', 1000, );
    }
    return Materialize.toast("Thank you! Your order is on it's way.", 1000);
  });

  $('.button-collapse').sideNav();


})
