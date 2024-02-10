$(document).ready(function () {
  /*Menu movil*/
  const menu_movil = document.querySelector(".menu-movil");
  const mostrarOcultarMenu = () => {
    $("nav.navegacion-principal").slideToggle(1000);
  };
  const ocultarMenu = () => {
    $("nav.navegacion-principal").slideUp(1000);
  };
  menu_movil.addEventListener("click", mostrarOcultarMenu);
  
  var page_url = window.location.href;
  var page_id = page_url.substring(page_url.lastIndexOf("#") + 1);
    console.log(page_id);
    switch(page_id) {
        case "inicio": 
          $("html, body").animate({
            scrollTop: $("#inicio").offset().top - 80
          }, 1000);
          break;
        case "calendario":
          $("html, body").animate({
            scrollTop: $("#calendario").offset().top - 80
          }, 1000);
          break;
        case "horarios": 
          $("html, body").animate({
            scrollTop: $("#horarios").offset().top - 120
          }, 1000);
          break;
        case "gaceta": 
          $("html, body").animate({
            scrollTop: $("#gaceta").offset().top - 80
          }, 1000);
          break;          

      }



  $(".navegacion-principal").on("click touchstart", (e) => {
    e.stopPropagation();
    if (e.target !== e.currentTarget) {
      let clickedItem = e.target.className;
      //   console.log(clickedItem);
      // console.log(screen.width)
      if (screen.width <= 893) {
        if (clickedItem === "scrollTo link-nav") {
          ocultarMenu();
        }
      }
    }
  });

  $(".scrollTo").click(function () {
    let getElement = $(this).attr("href");
    if ($(getElement).length) {
      let getOffset = $(getElement).offset().top - 70;
      $("html,body").animate(
        {
          scrollTop: getOffset,
        },
        1000
      );
    }
  });


});
