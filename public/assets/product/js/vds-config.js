document.addEventListener("DOMContentLoaded", function(){
    cssPropWrite();
    getCurrentYear();

/* <![CDATA[ */
( function( $ ) {
    $( 'a[href="#"]' ).click( function(e) {
        e.preventDefault();
    } );
} )( jQuery );
/* ]]> */
});
  
function cssPropWrite() {    
    document.documentElement.style
    .setProperty('--add-font-sans', 'Bebas Neue');

    document.documentElement.style
    .setProperty('--add-font-serif', 'Roboto Serif');

    document.documentElement.style
    .setProperty('--add-font-mono', 'Roboto Mono');
}

function getCurrentYear() {
    $("#getCurrentYear").html(new Date().getFullYear());
}