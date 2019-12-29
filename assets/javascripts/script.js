$(document).ready(function() {
  console.log("Listo, Document ready");
  $("#container").draggable();
  $("#container").resizable();
  var ciudad = "";

  var inpCiudad = $("#ciudad");
  var titulo = $(".titulo");
  var lista = $("ul");

  var peticion = function AJAXrequest(request) {
    $.ajax({
      method: "GET",
      url:
        "http://api.openweathermap.org/data/2.5/weather?q=" +
        request +
        "&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es",
      success: function(data) {
        titulo.text("...:::" + data.name + ":::...");
        lista.append(
          "<li>Temperatura actual: " + data.main.temp + "º Celsius</li>"
        );
        lista.append(
          "<li>Temperatura minima: " + data.main.temp_min + "º Celsius</li>"
        );
        lista.append(
          "<li>Temperatura maxima: " + data.main.temp_max + "º Celsius</li>"
        );
        lista.append(
          "<li>Descripción de las condiciones actuales: " +
            data.weather[0].description +
            "</li>"
        );
        lista.append(
          "<li>Velocidad del viento: " + data.wind.speed + "K/h</li>"
        );
      }
    });
  };

  var borrarLi = function () {
    $('li').remove();
  };

  inpCiudad.keypress(function(event) {
    //titulo.toggle('slade');
    if (event.key == "Enter") {
      console.log("Press Intro");
      borrarLi();//Limpia los resultados anteriores.
      ciudad = inpCiudad.val();
      peticion(ciudad);
      inpCiudad.val("");
    }
    console.log(ciudad);
  });

});
