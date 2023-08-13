document.addEventListener('DOMContentLoaded', function() {
  const divContenedor = document.querySelector('.div-contenedor');

  divContenedor.addEventListener('click', function() {
    alert('Hola! Soy el div!!!');
  });
});