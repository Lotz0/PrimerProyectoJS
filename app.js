//array de productos

const productos = [{nombre:"rtx 3080 Msi", descripcion: ["10GB de Vram GDDR6X", "Tecnologia DLSS y RTX",
"Hdmi 2.1 hasta 8k de resolucion"],consumo:"350w", marca:"Msi/Nvidia", imagen:"rtxmsi.jpg", precio:"$250000"},

{nombre:"rtx 3070 Asus", descripcion: ["8GB de Vram GDDR6X", "Tecnologia DLSS y RTX",
"Hdmi 2.1 hasta 6k de resolucion"],consumo:"220w", marca:"Asus/Nvidia", imagen:"rtxasus.jpg", precio:"$210000"},

{nombre:"rtx 3090 Aorus", descripcion: ["12GB de Vram GDDR6", "Tecnologia DLSS y RTX",
"Hdmi 2.1 hasta 6k de resolucion"],consumo:"400w", marca:"Aorus/Nvidia", imagen:"rtxaorus.jpg", precio:"$300000"},


{nombre:"Ryzen 9 5950x", socket:"AM4", descripcion:["16 Nucleos 32 Hilos a 7nm By TSMC"], consumo:"105w", ramsupport:"ddr4",imagen:"r9.jpg", precio:"$110000"},
{nombre:"Intel I5 12600k", socket:"1700", descripcion:["6Pcores 4Ecores 16 hilos 7nm TSMC/Intel"], consumo:"150w", ramsupport:"ddr5,ddr4",imagen:"i5.jpg" , precio:"$50000"},
{nombre:"Intel I9 12900k", socket:"1700", descripcion:["8Pcores 8Ecores 24 hilos 7nm TSMC/Intel"], consumo:"240w", ramsupport:"ddr5,ddr4",imagen:"i9.jpg", precio:"$80000"},

{nombre:"32gb ram", marca:"Oloy", descripcion:["3200mhz", "ddr4"], consumo:"5w", ramsupport:"ddr4",imagen:"32gb.jpg", precio:"$20000"},
{nombre:"16gb ram", marca:"Patriot", descripcion:["3200mhz","ddr4"], consumo:"5w", ramsupport:"ddr4",imagen:"16gb.jpg" , precio:"$15000"},
{nombre:"64gb ram", marca:"Corsair", descripcion:["5500mhz,", "ddr5"], consumo:"15w", ramsupport:"ddr5",imagen:"64gb.jpg", precio:"$40000"},


{nombre:"x570", marca:"Aorus", socket:"am4", descripcion:["terte"], ramsupport:"ddr4", imagen:"x570.jpg", precio:"$25000"},
{nombre:"b550", marca:"Asus", socket:"am4", descripcion:["tete"], ramsupport:"ddr4", imagen:"b550.jpg", precio:"$15000"},
{nombre:"Z690", marca:"Aorus", socket:"1700", descripcion:["tertert"], ramsupport:"ddr5", imagen:"z590.jpg", precio:"$25000"},

{nombre:"fuente 750w", marca:"Aorus", descripcion:["80P Gold"], wattage:"750w", garantia:false, imagen:"750w.jpg", precio:"$20000" },
{nombre:"fuente 850w", marca:"Seasonic", descripcion:["80P Platinum"], wattage:"850w", garantia:true, imagen:"850w.jpg", precio:"$30000"},
{nombre:"fuente 1200w", marca:"Corsair", descripcion:["80P Platinum"], wattage:"1200w", garantia:true, imagen:"1200w.jpg", precio:"$35000"},

{nombre:"Gabinete KingFight", marca:"Sate", descripcion:["6 coolers rgb"], color:"negro", AntiPolvo:true, imagen:"gab1.jpg", precio:"$20000"},
{nombre:"Gabinete Icue h220", marca:"Corsair", descripcion:["3 coolers rgb"], color:"negro", AntiPolvo:true, imagen:"gab2.jpg", precio:"$18000"},
{nombre:"Gabinete Coolermaster", marca:"Coolermaster", descripcion:["3 coolers rgb"], color:"blanco", AntiPolvo:false, imagen:"gab3.jpg", precio:"$25000"},

{nombre:"SSD 512gb", marca:"Kingston", descripcion:["sata 3"],imagen:"512.jpg", precio:"$5000" },
{nombre:"SSD 1tb", marca:"WesternDigital", descripcion:["m.2"],imagen:"1tb.jpg", precio:"$10000" },
{nombre:"HDD 2TB", marca:"WesternDigital", descripcion:["sata 3"],imagen:"2tb.jpg", precio:"$7000" },
];

const product = $("#productos");



//imprimir array en html
for(const producto of productos) {
    $("#productos").append(`<div class='col-4 py-3'>
    <div class='card' style="width: 16rem;">
    <div class='p-3'><h5 id='producto_auto' + i + class='text-primary fw-bold'>  ${producto.nombre.toUpperCase()}  </h5></div>
    <div class='p-3'><img id='producto_imagen' + i + src='images/${producto.imagen}'   class='card-img-top' alt=  ${producto.nombre}    onclick=asignarDatos('producto_auto' + i +);></div>
    <div class='p-3'><h5 id='producto_precio' + i + class='text-secondary fw-bold'> ${producto.precio}</div>
    <button class="item-button btn btn-primary addToCart">Agregar a lista compra</button></div>
    <ul>`);}

//botones de compra 
const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach((addToCartButton) =>{
    addToCartButton.addEventListener('click', addToCartClicked);
});

const buyButton = document.querySelector('.comprarButton');
comprarButton.addEventListener('click', buyButtonClicked);




const shoopingCartItemsContainer = document.querySelector(".cart");

function addToCartClicked(event)    {
    const button = event.target
    const item = button.closest('.card')


    const itemTitle = item.querySelector("#producto_auto").textContent;
    const itemPrice = item.querySelector("#producto_precio").textContent;
    const itemImage = item.querySelector("#producto_imagen").src;

 
//imprimir objetos en lista de compra
addItemToShoppingCart(itemTitle, itemPrice, itemImage)
}

function addItemToShoppingCart(itemTitle, itemPrice, itemImage){
    const shoppingCartRow = document.createElement('div');
    const shoppingCartContent = `
    <div class="row shoppingCartItem">
        <div class="col-6"><br>

            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${itemImage} class="shopping-cart-image">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
            </div>
        </div>
        <div class="col-2"><br>

            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice h4" >${itemPrice}</p>
            </div>
        </div>
        <div class="col-4"><br>

            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>`;
    shoppingCartRow.innerHTML = shoppingCartContent
    shoopingCartItemsContainer.append(shoppingCartRow)

    //botones eliminar productos de lista compra
    shoppingCartRow
    .querySelector('.buttonDelete')
    .addEventListener('click', removeShoppingCartItem);

      shoppingCartRow.querySelector('.shoppingCartItemQuantity').addEventListener('change', quantityChanged);

    updateShoppingCartTotal();

}
//actualizar precio total sumatoria de productos
function updateShoppingCartTotal() {
    let total = 0;
    const shoppingCartTotal = document.querySelector('.shoppingCartTotal');
  
    const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');
  
    shoppingCartItems.forEach((shoppingCartItem) => {
      const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
        '.shoppingCartItemPrice'
      );
      const shoppingCartItemPrice = Number(
        shoppingCartItemPriceElement.textContent.replace('$', '')
      );
      const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
        '.shoppingCartItemQuantity'
      );
      const shoppingCartItemQuantity = Number(
        shoppingCartItemQuantityElement.value
      );
      total = total  + shoppingCartItemPrice * shoppingCartItemQuantity;
    });
    shoppingCartTotal.innerHTML = `${total.toFixed(0)}$`;
  }

  function removeShoppingCartItem(event) {
    const buttonClicked = event.target;
    buttonClicked.closest('.shoppingCartItem').remove();
    updateShoppingCartTotal();
  }
  function quantityChanged(event){
     const input = event.target;
     if(input.value <=0){
       input.value = 1;
     }
     updateShoppingCartTotal();
  }

//Animaciones!
  $(".addToCart").click(function(){
    $(".card").animate({
      width: '+=20px'
    }).delay(1000);

  }); 

  $(".addToCart").click(function(){
    $(".card").animate({
      width: '-=20px'
    });

  }); 


$('#contenedor1').prepend('<h2 style="display: none">Bienvenidos a mi web</h3>')
$('h2').fadeIn('slow');

function buyButtonClicked() {
  shoopingCartItemsContainer.innerHTML = '';
}
