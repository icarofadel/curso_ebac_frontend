$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        const listaTarefa = $('#nome-tarefa').val();

        $(`<li>${listaTarefa}</li>`).appendTo('ul');
        $('#nome-tarefa').val('');

        $("ul").on('click', 'li', function() {
            $(this).toggleClass("aplica-estilo");
        });
    })
})