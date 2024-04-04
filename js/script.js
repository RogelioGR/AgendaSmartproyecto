// funcion de carga y inicio de una pagina
window.onload = function(){
    $('#loader').fadeOut();
    $('body').removeClass('loader');
}


// Modal de eliminar
var myModalBtn = document.querySelector('[data-bs-target="#buttonModal"]');
myModalBtn.addEventListener('click', function () {
    var myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.show();

    
});

//Modal en General
var myModalBtn = document.querySelector('[data-bs-target="#buttonModalDrop"]');
myModalBtn.addEventListener('click', function () {
    var myModal = new bootstrap.Modal(document.getElementById('myModalDrop'));
    myModal.show();
});

