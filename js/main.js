$(document).ready(function(){
    //accionamiento del menu lateral
    $('#burger').click(function(){
        $('#burger').toggleClass('abierto');
        $('.menu').toggleClass('abierto');
        $('header').toggleClass('abierto');
    })
})