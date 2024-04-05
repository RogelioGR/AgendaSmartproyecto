// funcion de carga y inicio de una pagina
window.onload = function(){
    $('#loader').fadeOut();
    $('body').removeClass('loader');
}



// funcion de modal en General

$(document).ready(function () {
    function abrirModal(modalId) {
        var modalruta = '/html/modals/' + modalId + '.html';
        $.get(modalruta, function (data) {
            $('body').append(data);
            $('#' + modalId).modal('show');
            $('#' + modalId).on('hidden.bs.modal', function () {
                $('#' + modalId).remove();
            });
        });
    }

    $('.buttonModal').on('click', function () {
        var modalId = $(this).data('modal-id');
        abrirModal(modalId);
    });

    // Abrir otro modal dentro de un modal
    $('body').on('click', '.buttonModal2', function () {
        var modalId = $(this).data('modal-id');
        abrirModal(modalId);
    });
});

