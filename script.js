document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('show');
    });
});
   

document.addEventListener('DOMContentLoaded', () => {
    const cartCountElement = document.querySelector('.cart-count');
    const addToCartButtons = document.querySelectorAll('.buy-button');
    let cartCount = 0;
  
    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        cartCount++;
        cartCountElement.textContent = cartCount;
        showModal();
      });
    });
  
    const modal = document.getElementById("cartModal");
    const span = document.getElementsByClassName("close")[0];
  
    function showModal() {
      modal.style.display = "block";
    }
  
    span.onclick = function() {
      modal.style.display = "none";
    }
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  });
  