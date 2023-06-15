//images gallery
const items = document.querySelectorAll(".item");
const overlays = document.querySelectorAll(".overlay");
const sections = document.querySelectorAll(".sections");

const expand = (item, i) => {
  let overlay = item.childNodes[1];
  let menu = item.childNodes[3];

  items.forEach((it, ind) => {
    if (i === ind) return;
    it.mouseover = false;
  });

  //item
  gsap.killTweensOf(items);
  gsap.to(items, {
    width: item.mouseover ? "10vw" : "8vw",
    duration: 2,
    ease: "elastic(1, .6)"
  });

  gsap.killTweensOf(item);
  item.mouseover = !item.mouseover;
  gsap.to(item, {
    width: item.mouseover ? "25vw" : "10vw",
    duration: 2.5,
    ease: "elastic(1, .3)"
  });

  //overlay
  gsap.killTweensOf(overlays);
  gsap.to(overlays, {
    opacity: item.mouseover ? "1" : "1",
    duration: 2,
    ease: "elastic(1, .6)"
  });

  gsap.killTweensOf(overlay);
  item.mouseover = !item.mouseover;
  gsap.to(overlay, {
    opacity: item.mouseover ? "1" : "0",
    duration: 2.5,
    ease: "elastic(1, .3)"
  });

  //menu
  gsap.killTweensOf(sections);
  gsap.to(sections, {
    opacity: item.mouseover ? "0" : "0",
    duration: 2,
    ease: "elastic(1, .6)"
  });

  gsap.killTweensOf(menu);
  item.mouseover = !item.mouseover;
  gsap.to(menu, {
    opacity: item.mouseover ? "1" : "0",
    duration: 2.5,
    ease: "elastic(1, .3)"
  });
};

items.forEach((item, i) => {
  item.mouseover = false;
  item.childNodes[1].mouseover = false;
  item.childNodes[3].mouseover = false;

  item.addEventListener("mouseover", () => expand(item, i));
});


//navbar
$(document).ready(function () {
  $(".menu-icon").on("click", function () {
    $("nav ul").toggleClass("showing");
  });

  // Scrolling Effect
  $(window).on("scroll", function () {
    if ($(window).scrollTop()) {
      $('nav').removeClass('black');
    } else {
      $('nav').addClass('black');
    }
  });
});
 
  //back to the top bottom

  $(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});

// Obtener el nombre del usuario y almacenarlo en localStorage
var nombreUsuario = localStorage.getItem('nombreUsuario');

if (!nombreUsuario) {
  nombreUsuario = prompt('¿Cuál es tu nombre?');
  localStorage.setItem('nombreUsuario', nombreUsuario);
}

// Verificar si el mensaje de bienvenida ya se mostró antes
var mensajeMostrado = localStorage.getItem('mensajeMostrado');

if (!mensajeMostrado) {
  // Verificar el género del usuario
  var generoUsuario = localStorage.getItem('generoUsuario');

  if (!generoUsuario) {
    generoUsuario = prompt('¿Eres chica, mujer o de género femenino? (responde sí o no)');
    
    if (generoUsuario.toLowerCase() === 'sí' || generoUsuario.toLowerCase() === 'si') {
      generoUsuario = 'femenino';
    } else {
      generoUsuario = 'otro';
    }
    
    localStorage.setItem('generoUsuario', generoUsuario);
  }

  // Mostrar el contenido de la página según el género del usuario
  if (generoUsuario === 'femenino') {
    // Aquí puedes mostrar el contenido de la página para el género femenino
    alert('Bienvenida, ' + nombreUsuario + '. Este es un lugar para ti.');
  } else {
    // Aquí puedes mostrar un mensaje indicando que no es un lugar adecuado
    alert('Lo siento, ' + nombreUsuario + '. Este no es un lugar para ti.');
  }

  // Guardar la variable de control para indicar que el mensaje ya se mostró
  localStorage.setItem('mensajeMostrado', 'true');
}

// Alerta al intentar cerrar la página
window.addEventListener('beforeunload', function(event) {
  event.returnValue = ''; // Necesario para mostrar el mensaje de confirmación en algunos navegadores
  return '¿Estás seguro/a de que quieres salir de la página?';
});
