function cargarProductos() {
    $.ajax({
      method: "GET",
      url: "productos.json",
      success: function(respuesta) {
        console.log(respuesta);
        $("#resultadoProductos").fadeIn(2000);  
        let max = 30;
          for (let datos of respuesta) {
              if (max > 0) {
                  $("#resultadoProductos").append(`<div class="container">
                  <div class="row">
                    <div class="col">
                      ${datos.nombre}
                    </div>
                    <div class="col">
                    <img src="images/${datos.imagen}" width='180px'>
                    </div>
                    <div class="col">
                    ${datos.precio}
                    </div>
                  </div>
                </div>`);
                  max--;
              } else {
                  break;
              }
          }
          
      },
      error: function(respuesta) {
          $("#estadoProductos").html('Error el Ajax no se cargo');
      }
    });
  }
  
  
  $("#botonCargar").click(function() {
    cargarProductos();
  });
  
