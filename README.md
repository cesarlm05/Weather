# Weather
Clase de Ajax en P5
Weather Channel

Creá una página html con un div con id='container'. Dentro del div hacé una lista con las siguientes condiciones meteorológicas:

    Temperatura actual
    Temperatura máxima
    Temperatura mínima
    Descripción de las condiciones actuales
    Velocidad del viento

Versión Uno

Vinculá un archivo javascript a tu html y dentro de él hacé un pedido AJAX que traiga la información de la ciudad de Buenos Aires y la muestre en la página.

Pensá cómo podés hacer para meter los datos dentro de cada li sin reemplazar su contenido.
Versión Dos

Ahora agregá la funcionalidad para que el usuario/a pueda ver el clima en una ciudad distinta sin recargar la página. Deberás hacer lo siguiente:

    Poné tres botones con nombres de distintas cuidades.
    Agregale event listeners a esos botones para que cuando le hagan click se dispare un pedido AJAX con la información de la ciudad correspondiente.
    Cuando lleguen los datos, mostralos en la página como hacías antes.

Extra Credit:

    En vez de los botones poné un input donde el usuario/a escriba la ciudad de la que quiere ver el clima.
    Cuando el usuario/a haga enter (o podés poner un botón que diga "buscar"), tiene que dispararse un pedido AJAX que traiga los datos de esa ciudad y los muestre en la página, y borrar el contenido del input. Para esto tenés que capturar el valor dentro del input y pasarlo como el valor de la ciudad en el pedido a la API.
    El usuario/a escribe con espacios y otros caracteres que el protocolo HTTP no maneja. Para que funcione perfecto tenés que pasar el valor de lo que escribió el usuario/a por el método encodeURI( … ) que trae javascript. Lo que hace encodeURI es transformar un texto a formato URL, modificando espacios, acentos y demás caracteres no válidos.
    Ahora hacé que cuando se dispare el evento que va a pedir los datos, se reemplace el contenido del div #container por el string "Estamos buscando los datos". Cuando llegan los datos del pedido AJAX (tip: en la función dentro de success) agregá de nuevo el html al #container con la lista y los datos correspondientes.
