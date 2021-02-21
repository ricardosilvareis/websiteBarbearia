// Global site tag (gtag.js) - Google Analytics -->

//Configuracao Google Analytics para capturação de eventos
window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-3JDZLTBSPV');

  //Função capturando os clicks nos botoes

  var buttons = document.querySelectorAll('.btn');
buttons.forEach( function( btn ) {
   btn.addEventListener('click', function(event) {
      ga('send', 'event', {
         eventAction: 'click',
         eventCategory: 'Enviar',
         eventLabel: event.target.id 
      });
   });
} );

  //Função capturando os movimentos dos slides do carrosel.

  $('.carousel').on('swipe', function(event, slick, direction) {
    ga('send', 'event', {
       eventCategory: 'Carousel',
       eventAction: 'swipe',
       eventLabel: $( this ).find( '#carouselExampleIndicators' ).attr('id') 
    });
 });
 

 f

 