function mostrarMensajeBienvenida() {  // define una función llamada mostrarMensajeBienvenida
    var mensaje = "Bienvenido a UNIVERJALISCO";  // declara una variable llamada mensaje con el texto Bienvenido
    alert(mensaje);  // muestra una ventana emergente con el mensaje al usuario
}  // fin de la función mostrarMensajeBienvenida

mostrarMensajeBienvenida();  // ejecuta la función para mostrar el mensaje cuando se carga la página

//Declarar variables  // comentario que indica que a continuación se declararán variables
const btn = document.getElementById("btn-masthead");  // obtiene el botón con id btn-masthead del HTML
const edad = document.getElementById("inputEdad");  // obtiene el campo de entrada donde el usuario escribe su respuesta

const inEdad = document.getElementById("inputEdad");  // vuelve a obtener el mismo campo para usarlo posteriormente
const btnIn = document.getElementById("muestraEdad");  // obtiene el botón que activará la acción al hacer clic

btnIn.addEventListener('click', () => {  // agrega un evento que se ejecuta cuando el usuario hace clic en el botón
    var informes = confirm("¿Desea recibir informes de la universidad?");  // muestra una ventana de confirmación preguntando si desea informes
    alert(informes ? "Si" : "No");  // muestra Si si el usuario acepta o No si cancela
});  // fin del evento click del botón

function mostrarEdad() {  // define una función llamada mostrarEdad
    var informes = confirm("¿Desea recibir informes de la universidad?");  // vuelve a mostrar la ventana de confirmación de informes
    alert(informes ? "Si" : "No");  // muestra Si o No dependiendo de la elección del usuario
}  // fin de la función mostrarEdad